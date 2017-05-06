/* requires:
global.js
map.js
make_ajax.js
*/

var getData = (function($){
  
  'use strict';

  var stateCodes = {};
  var stateData = {};

  var areaCodes = {};
  var areaData = {};

  var currentArea = 'All States';

  function from(area, time, dataType) {
    if (typeof area === 'undefined') {area = 'All States';}
    if (typeof time === 'undefined') {time = 10;}
    if (typeof dataType === 'undefined') {dataType = 'HousePrice';}
    if (currentArea !== area){
      if (area === 'All States'){gmap.zoomOut();}
      else {gmap.moveToLocation(area);}
      currentArea = area;
    }
    getCode(area, time, dataType);
  }

  function getCode(area, time, dataType) {
    $.support.cors = true;

    if (area === 'All States') {
      if ($.isEmptyObject(stateCodes)) {
        makeAjax.asyncGetCode(area, 'state_code.json', time, dataType);
      } else {
        getAreaData(area, stateCodes, time, dataType);
      }
    }
    else {
      log('get area codes');
      if ($.isEmptyObject(areaCodes)) {
        makeAjax.asyncGetCode(area, 'neighborhood_code.json', time, dataType);
      } else {
        getAreaData(area, areaCodes, time, dataType);
      }
    }
  }

  function getAreaData(area, codes, time, dataType){
    var area_param;
    var codeToCompute;

    if (area === 'All States') {
      if (!$.isEmptyObject(stateData)) {
        log('state data already exists');
        for (var state in stateData) {
          buildInfo(area, stateData, state, time, dataType);
        }
        return;
      }
      // store codes for cache
      stateCodes = codes;
      // assign variables for ajax call to data
      area_param = 'S';
    } 
    else {
      log('get area data');
      if (!$.isEmptyObject(areaData[area])) {
        log('area data already exists');
        gmap.removeMarkers();
        for (var neighborhood in areaData[area]) {
          log(areaData);
          buildInfo(area, areaData, neighborhood, time, dataType);
        }
        return;
      }
      
      areaData[area] = {};
      // store codes for cache
      areaCodes = codes;
      
      // split city|code into array and assign new sub-key 'Code' to areaCodes
      for (var a in areaCodes) {
        var codeArray = areaCodes[a]['City|Code'].split('|');
        areaCodes[a].Code = codeArray[1];
      }
      // assign variables for ajax call to data
      area_param = 'N';
    }

    // build parameters to pass into ajax calls
    var url = [
      'https://www.quandl.com/api/v3/datasets/ZILL/', area_param, 
      '@areaCode_A.json?collapse=annual',
      '&api_key=1aGVznRZH7ckoyhVtges'
    ];
    var urlArray = [];
    var nameArray = [];
    var formatUrl;

    if (area === 'All States') {
      for (var stateName in stateCodes) {
        formatUrl = url.join('').replace('@areaCode', stateCodes[stateName]);
        urlArray.push(formatUrl);
        nameArray.push(stateName);
      }
    } else {
      for (var n in areaCodes) {
        var abbrArea = abbrState(area, 'abbr');
        // filter codeToCompute to only include neighborhood within selected state
        if (areaCodes[n].Metro === abbrArea) {
          formatUrl = url.join('').replace('@areaCode', areaCodes[n].Code);
          urlArray.push(formatUrl);
          nameArray.push(n);
        }
      }
    }

    // please see make_ajax.js to understand why i is set as -1
    var i = -1;
    makeAjax.sync(area, urlArray, nameArray, i, time, dataType);
  }

  function cleanData(area, res, areaName, time, dataType) {
    var dat = res.dataset.data;

    var dataToCompute = {
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
    var dataToPass;

    if (area === 'All States') {
      stateData[areaName] = dataToCompute;
      dataToPass = stateData;
    } else {
      areaData[area][areaName] = dataToCompute;
      dataToPass = areaData;
    }
    
    buildInfo(area, dataToPass, areaName, time, dataType);
  }

  function buildInfo(area, data, areaName, time, dataType) {
    // get search term for Latitude and Longitude and build markers
    var searchName = area === 'All States' ? areaName : area;
    var address = areaName + ' ' + searchName + ' United States';

    // build information to be shown in marker
    var info = ['Place: @place <br>',
                '@dataType: @displayData <br>',
                'Data over: @time years'];

    var displayDataKey = dataType + 'Yr' + time;
    log('display data key: ' + displayDataKey);
    
    var dataSrc = area === 'All States' ? data : data[area];
    var resultData = dataSrc[areaName][displayDataKey];
    var displayData = resultData === 0 ? 'no data' : resultData.format(0,3,',');
    log(displayData);
    
    if (dataType === 'HousePrice') {displayData = '$' + displayData;} 
    if (dataType === 'PriceChange') {displayData = displayData + '%';}

    info = info.join('')
      .replace('@place', areaName)
      .replace('@dataType', dataType)
      .replace('@displayData', displayData)
      .replace('@time', time);

    // pass information to build markers
    gmap.buildMarkers(areaName, address, info);
  }

  return {
    from: from,
    getAreaData: getAreaData,
    cleanData: cleanData
  };

})(jQuery);
