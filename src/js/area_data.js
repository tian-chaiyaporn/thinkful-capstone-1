/* requires:
global.js
map.js
make_ajax.js
*/

var getAreaData = (function($){
  
  'use strict';

  var areaCodes = {};
  /*
    areaCodes = {
      'North Corolina': [
        {neighborhood1: 00001},
        {neightborhodo2: 00002},
        ...
      ],
      'New York': [
        {neighborhood1: 00003},
        {neightborhood 1: 00002},
        ...
      ] ,
      ...
    }
  */

  var areaData = {};

  function from(area, time, dataType) {
    if (typeof area === 'undefined') {area = 'All States';}
    if (typeof time === 'undefined') {time = 10;}
    if (typeof dataType === 'undefined') {dataType = 'HousePrice';}
    getStateCode(time, dataType);
  }

  function getAreaCode(area) {
    
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

  function getAreaData(stateX) {
    // look for all neighborhood + code in State and save in array
    // map array to get data from API
      // build URL
      // ajax call
      // catch error
      // store result in result array
      // get LatLng
    // return result array
    /*
      resultArray = [
        {
          neightborhood1: {
            Lat: 0.000014,
            Lng: 9.635495,
            AvgHousePriceYr1: 1235677,
            AvgHousePriceYr3: 1235677,
            AvgHousePriceYr5: 1235677,
            AvgHousePriceYr10: 1235677,
            AvgHousePriceYr20: 1235677,
            AvgHousePriceYr30: 1235677,
            PriceChangeYr1: 10%,
            PriceChangeYr3: 20%,
            PriceChangeYr5: 35%,
            PriceChangeYr10: 60%,
            PriceChangeYr20: 70%,
            PriceChangeYr30: 80%}
        },
        {
          neightborhood2: {
            Lat: 0.000014,
            Lng: 9.635495,
            AvgHousePriceYr1: 1235677,
            AvgHousePriceYr3: 1235677,
            AvgHousePriceYr5: 1235677,
            AvgHousePriceYr10: 1235677,
            AvgHousePriceYr20: 1235677,
            AvgHousePriceYr30: 1235677,
            PriceChangeYr1: 10%,
            PriceChangeYr3: 20%,
            PriceChangeYr5: 35%,
            PriceChangeYr10: 60%,
            PriceChangeYr20: 70%,
            PriceChangeYr30: 80%}
        },
        ...]
    */
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

  function cleanAreaData(res, areaName) {}

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
    // return result object
    /*
      resultObject = {
        state1: {
          Lat: 0.000014,
          Lng: 9.635495,
          HousePriceYr1: 1235677,
          HousePriceYr3: 1235677,
          HousePriceYr5: 1235677,
          HousePriceYr10: 1235677,
          PriceChangeYr1: 10%,
          PriceChangeYr3: 20%,
          PriceChangeYr5: 35%,
          PriceChangeYr10: 60%
        },
        ...
      }
    */
  }

  function buildAreaInfo() {}

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
    cleanAreaData: cleanAreaData
  };

})(jQuery);
