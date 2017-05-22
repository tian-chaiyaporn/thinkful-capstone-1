/* requires:
global.js
map.js
markers.js
request_config.js
make_ajax.js
process_data.js
notify.js
*/

var neighborhoodRepo = (function($) {
  'use strict';

  var cacheCodes = {};
  var cacheData = {};
  var currentArea = '';

  function getNeighborhood(area) {
    log('getNeighborhood()');
    return new Promise(function(res, reg) {
      if (currentArea !== area){
        gmap.moveToLocation(area);
        currentArea = area;
      }
      if (!$.isEmptyObject(cacheData[area])) {
        log('area data already exists in cache');
        //mark.removeMarkers();
        res(cacheData[area]);
        return;
      }
      else if (localStorage.getItem('neighborhoodData.' + area)) {
        log('area data already exists in storage');
        var stringData = localStorage.getItem('neighborhoodData.' + area);
        cacheData[area] = JSON.parse(stringData);
        res(cacheData[area]);
        return;
      } 
      else {
        log('getting area data');
        cacheData[area] = {};
        notify.button('Loading...');
        request.getData(currentArea);
        rej("data is being called and markers displayed immediately after");
        return;
      }
    });
  }

  function buildInterface(data) {
    for (var neighborhood in data) {
      info.buildInfo(currentArea, data, neighborhood);
    }
  }

  function storeInLocal(data) {
    localStorage.setItem('neighborhoodData.' + currentArea, JSON.stringify(cacheData[currentArea]));
    // localStorage.setItem('neighborhoodCodes', JSON.stringify(data));
  }

  function getCache() {
    return cacheData;
  }

  function addCache(data, args) {
    switch(args.length) {
      case 1:
        cacheData[args[0]] = data;
      break;
      case 2:
        cacheData[args[0]][args[1]] = data;
      break;
      case 3:
        cacheData[args[0]][args[1]][args[2]] = data;
        break;
      case 4:
        cacheData[args[0]][args[1]][args[2]][args[3]] = data;
    }
  }

  return {
    getNeighborhood: getNeighborhood,
    buildInterface: buildInterface,
    codes: cacheCodes,
    data: cacheData,
    getCache: getCache,
    addToCache: addCache,
    storeInLocal: storeInLocal
  };

})(jQuery);
