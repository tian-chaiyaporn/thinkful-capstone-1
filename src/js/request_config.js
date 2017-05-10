/* requires:
global.js
map.js
markers.js
make_ajax.js
process_data.js
notify.js
*/

var request = (function($) {
  'use strict';
  var currentArea;
  var area_param;

  function getCode(area) {
    log('getCode()');
    $.support.cors = true;
    currentArea = area;
    if (currentArea === 'All States') {
      area_param = 'S';
      if ($.isEmptyObject(stateRepo.codes)) {
        makeAjax.asyncGetCode('state_code.json');
      } else {
        buildURL(area_param);
      }
      return;
    }
    area_param = 'N';
    log('get area codes');
    if ($.isEmptyObject(neighborhoodRepo.codes)) {
      makeAjax.asyncGetCode('neighborhood_code.json');
    } else {
      buildURL(area_param);
    }
  }

  function cleanCode(codes) {
    log('cleanCode()');
    if (currentArea === 'All States') {
      // store codes for cache
      stateRepo.codes = codes;
      log("this is " + stateRepo.codes);
      log(stateRepo.codes);
      buildURL(area_param);
      return;
    }
    neighborhoodRepo.codes = codes;
    log(neighborhoodRepo.codes);
    // split city|code into array and assign new sub-key 'Code' to neighborhoodRepo.codes
    for (var a in neighborhoodRepo.codes) {
      var codeArray = neighborhoodRepo.codes[a]['City|Code'].split('|');
      neighborhoodRepo.codes[a].Code = codeArray[1];
    }
    buildURL(area_param);
  }

  function buildURL(area_param) {
    log('buildURL()');
    // build parameters to pass into ajax calls
    var url = [
      'https://www.quandl.com/api/v3/datasets/ZILL/', area_param, 
      '@areaCode_A.json?collapse=annual',
      '&api_key=1aGVznRZH7ckoyhVtges'];
    var urlArray = [];
    var nameArray = [];

    if (currentArea === 'All States') {
      for (var state in stateRepo.codes) {
        var stateUrl = url.join('').replace('@areaCode', stateRepo.codes[state]);
        urlArray.push(stateUrl);
        nameArray.push(state);
      }
    } else {
      for (var n in neighborhoodRepo.codes) {
        var abbrArea = abbrState(currentArea, 'abbr');
        if (neighborhoodRepo.codes[n].Metro === abbrArea) {
          var areaUrl = url.join('').replace('@areaCode', neighborhoodRepo.codes[n].Code);
          urlArray.push(areaUrl);
          nameArray.push(n);
        }
      }
    }
    makeRequest(urlArray, nameArray);
  }

  function makeRequest(urlArray, nameArray) {
    log('makeRequest()');
    if (urlArray.length === 0) {notify.noData(currentArea); return;}
    notify.waitTime(urlArray.length + 10);
    // please see make_ajax.js to understand why i is set as -1
    var i = -1;
    makeAjax.sync(currentArea, urlArray, nameArray, i);
  }

  return {
    getCode: getCode,
    cleanCode: cleanCode
  };

})(jQuery);
