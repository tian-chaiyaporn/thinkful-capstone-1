/* requires:
global.js
map.js
make_ajax.js
*/

var getStateData = (function($){
  
  'use strict';

  var stateCodes = {};
  var stateData = {};

  var areaCodes = {};
  var areaData = {};

  function from(area, time, dataType) {
    if (typeof area === 'undefined') {area = 'All States';}
    if (typeof time === 'undefined') {time = 10;}
    if (typeof dataType === 'undefined') {dataType = 'HousePrice';}
    if (area === 'All States') {
      getStateCode(time, dataType);
    } else {
      
    }
  }

  function getStateCode(time, dataType) {
    $.support.cors = true;
    if ($.isEmptyObject(stateCodes)) {
      $.ajax({
        url: "state_code.json",
        method: 'GET',
        dataType: "json",
        success: function (data) {
          getStateData(data, time, dataType);
        },
        error: function() {
          log("csv failed refreshed 2");
        }
      });
    } else {
      getStateData(stateCodes, time, dataType);
    }
  }

  function getStateData(codes, time, dataType){
    if (!$.isEmptyObject(stateData)) {
      log('state data already exists');
      log(time + dataType);
      // make for-in for buildInfo(stateData);
      for (var state in stateData) {
        buildInfo(stateData, state, time, dataType);
      }
      return;
    }

    stateCodes = codes;
    var url = 'https://www.quandl.com/' + 
              'api' + 
              '/v3/datasets/ZILL/' + 
              'S' + '@stateCode' + '_A.json' +
              '?collapse=annual' + '&api_key=1aGVznRZH7ckoyhVtges';

    var urlArray = [];
    var stateNameArray = [];

    for (var stateName in stateCodes) {
      var formatUrl = url.replace('@stateCode', stateCodes[stateName]);
      urlArray.push(formatUrl);
      stateNameArray.push(stateName);
    }
    // please see make_ajax.js to understand why i is set as -1
    var i = -1;
    makeAjax.sync(urlArray, stateNameArray, i, time, dataType);
  }

  function cleanStateData(res, stateName, time, dataType) {
    var dat = res.dataset.data;
    stateData[stateName] = {
      HousePriceYr1: dat[0][1],
      // check to see if index of array exists in case dataset is not complete
      HousePriceYr3: 2 in dat ? dat[2][1] : 0,
      HousePriceYr5: 4 in dat ? dat[4][1] : 0,
      HousePriceYr10: 9 in dat ? dat[9][1] : 0,
      PriceChangeYr1: percentChg(dat[0][1], dat[1][1]),
      PriceChangeYr3: percentChg(dat[0][1], 2 in dat ? dat[2][1] : 0),
      PriceChangeYr5: percentChg(dat[0][1], 4 in dat ? dat[4][1] : 0),
      PriceChangeYr10: percentChg(dat[0][1], 9 in dat ? dat[9][1] : 0)
    };
    buildInfo(stateData, stateName, time, dataType);
  }

  function buildInfo(data, stateName, time, dataType) {
    // get Latitude and Longitude of the state and build markers
    var address = stateName + ' ' + stateName + ' United States';

    // build information to be shown
    var info = ['State: @state <br>',
                '@dataType: @displayData <br>',
                'Data over: @time years'];

    var displayData = dataType + 'Yr' + time;
    displayData = data[stateName][displayData].format(0,3,',');
    if (dataType === 'HousePrice') {
      displayData = '$' + displayData;
    } else {
      displayData = displayData + '%';
    }

    info = info.join('')
      .replace('@state', stateName)
      .replace('@dataType', dataType)
      .replace('@displayData', displayData)
      .replace('@time', time);

    // pass information to build markers
    gmap.buildMarkers(stateName, address, info);
  }

  return {
    from: from,
    cleanStateData: cleanStateData
  };

})(jQuery);
