/* requires:
global.js
map.js
markers.js
make_ajax.js
info_display.js
notify.js
*/

var getData = (function($) {
  'use strict';

  var stateCodes = {};
  var stateData = {};
  var areaCodes = {};
  var areaData = {};
  var area_param;
  var currentArea = 'All States';

  function from(area, time, dataType) {
    if (typeof area === 'undefined') {area = 'All States';}
    if (typeof time === 'undefined') {time = 1;}
    if (typeof dataType === 'undefined') {dataType = 'HousePrice';}
    if (currentArea !== area){
      if (area === 'All States'){mark.zoomOut();}
      else {log('from');mark.moveToLocation(area);}
      currentArea = area;
      log('currentArea redefined');
    }

    if (area === 'All States') {
      if (!$.isEmptyObject(stateData)) {
        log('state data already exists');
        for (var state in stateData) {
          info.buildInfo(area, stateData, state, time, dataType);
        }
        return;
      }
    }

    if (!$.isEmptyObject(areaData[area])) {
      log('area data already exists');
      mark.removeMarkers();
      for (var neighborhood in areaData[area]) {
        info.buildInfo(area, areaData, neighborhood, time, dataType);
      }
      return;
    }
    getCode(area, time, dataType);
  }

  function getCode(area, time, dataType) {
    $.support.cors = true;
    if (area === 'All States') {
      if ($.isEmptyObject(stateCodes)) {
        makeAjax.asyncGetCode(area, 'state_code.json', time, dataType);
      } else {
        area_param = 'S';
        getAreaData(area, area_param, time, dataType);
      }
      return;
    }
    log('get area codes');
    if ($.isEmptyObject(areaCodes)) {
      makeAjax.asyncGetCode(area, 'neighborhood_code.json', time, dataType);
    } else {
      area_param = 'N';
      getAreaData(area, area_param, time, dataType);
    }
  }

  function cleanAreaCode(area, codes, time, dataType) {
    if (area === 'All States') {
      // assign variables for ajax call to data
      area_param = 'S';
      // store codes for cache
      stateCodes = codes;
      getAreaData(area, area_param, time, dataType);
      return;
    }
    // assign variables for ajax call to data
    area_param = 'N';
    // store codes for cache
    areaCodes = codes;
    // split city|code into array and assign new sub-key 'Code' to areaCodes
    for (var a in areaCodes) {
      var codeArray = areaCodes[a]['City|Code'].split('|');
      areaCodes[a].Code = codeArray[1];
    }
    getAreaData(area, area_param, time, dataType);
  }

  function getAreaData(area, area_param, time, dataType) {
    var codeToCompute;

    // build parameters to pass into ajax calls
    var url = [
      'https://www.quandl.com/api/v3/datasets/ZILL/', area_param, 
      '@areaCode_A.json?collapse=annual',
      '&api_key=1aGVznRZH7ckoyhVtges'];
    var urlArray = [];
    var nameArray = [];
    var formatUrl;

    if (area === 'All States') {
      for (var stateName in stateCodes) {
        formatUrl = url.join('').replace('@areaCode', stateCodes[stateName]);
        urlArray.push(formatUrl);
        nameArray.push(stateName);
      }
    }
    else {
      for (var n in areaCodes) {
        var abbrArea = abbrState(area, 'abbr');
        // filter codeToCompute to only include neighborhood within selected state
        if (areaCodes[n].Metro === abbrArea) {
          formatUrl = url.join('').replace('@areaCode', areaCodes[n].Code);
          urlArray.push(formatUrl);
          nameArray.push(n);
        }
      }
      areaData[area] = {};
    }
    if (urlArray.length === 0) {notify.noData(area); return;}
    notify.waitTime(urlArray.length + 10);
    // please see make_ajax.js to understand why i is set as -1
    var i = -1;
    makeAjax.sync(area, urlArray, nameArray, i, time, dataType);
  }

  function cleanData(area, res, areaName, time, dataType) {
    var dat = res.dataset.data;
    var dataToCompute = {
      HousePriceYr1: 0 in dat ? dat[0][1] : 0,
      // check to see if index of array exists in case dataset is not complete
      HousePriceYr3: 2 in dat ? dat[2][1] : 0,
      HousePriceYr5: 4 in dat ? dat[4][1] : 0,
      HousePriceYr10: 9 in dat ? dat[9][1] : 0,
      PriceChangeYr1: percentChg(dat[0][1], 1 in dat ? dat[0][1] : 0),
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
    info.buildInfo(area, dataToPass, areaName, time, dataType);
  }

  return {
    from: from,
    cleanAreaCode: cleanAreaCode,
    cleanData: cleanData
  };

})(jQuery);
