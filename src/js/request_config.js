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

  var getData = function(area) {
    currentArea = area;

    getCode(currentArea)
      .then(makeAjax.asyncGetCode)
      .then(cleanCode)
      .then(buildURL)
      .then(makeRequest)
      .catch(function(error){log(error);});
  };

  var getCode = function() {
    return new Promise(function(resolve, reject) {
      log('getCode()');
      $.support.cors = true;
      if (currentArea === 'All States') {        
        resolve('state_code.json');
        return;
      }
      resolve('neighborhood_code.json');
    });
  };

  var cleanCode = function(codes) {
    log('cleanCode()');
    return new Promise(function(res, rej) {
      var area_param;
      if (currentArea === 'All States') {
        // store codes for cache
        stateRepo.codes = codes;
        area_param = 'S';
        res(area_param);
        return;
      }
      neighborhoodRepo.codes = codes;
      // split city|code into array and assign new sub-key 'Code' to neighborhoodRepo.codes
      for (var a in neighborhoodRepo.codes) {
        var codeArray = neighborhoodRepo.codes[a]['City|Code'].split('|');
        neighborhoodRepo.codes[a].Code = codeArray[1];
      }
      area_param = 'N';
      res(area_param);
    });
  };

  var buildURL = function(area_param) {
    log('buildURL()');
    return new Promise(function(res, rej) {
      var url = [
        'https://www.quandl.com/api/v3/datasets/ZILL/', area_param, 
        '@areaCode_A.json?collapse=annual',
        '&api_key=1aGVznRZH7ckoyhVtges'];
      var urlArray = [];
      var nameArray = [];
      if (area_param === 'S') {
        for (var state in stateRepo.codes) {
          var stateUrl = url.join('').replace('@areaCode', stateRepo.codes[state]);
          urlArray.push(stateUrl);
          nameArray.push(state);
        }
      } 
      else {
        for (var n in neighborhoodRepo.codes) {
          var abbrArea = abbrState(currentArea, 'abbr');
          if (neighborhoodRepo.codes[n].Metro === abbrArea) {
            var areaUrl = url.join('').replace('@areaCode', neighborhoodRepo.codes[n].Code);
            urlArray.push(areaUrl);
            nameArray.push(n);
          }
        }
      }
      var args = {"urlArray": urlArray, "nameArray": nameArray};
      res(args);
    });
  };

  var makeRequest = function(args) {
    log('makeRequest()');
    if (args.urlArray.length === 0) {notify.noData(currentArea); return;}
    notify.waitTime(args.urlArray.length + 10);
    // please see make_ajax.js to understand why i is set as -1
    var i = 0;
    makeAjax.sync(currentArea, args.urlArray, args.nameArray, i);
  };

  return {
    getData: getData
  };

})(jQuery);
