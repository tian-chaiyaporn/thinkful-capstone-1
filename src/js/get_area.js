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
    $('.js-search-btn').html('Loading...');

    return new Promise(function(res, reg) {
      if (currentArea !== area){
        gmap.moveToLocation(area);
        currentArea = area;
      }
      if (!$.isEmptyObject(cacheData[area])) {
        log('area data already exists');
        $('.js-search-btn').html('Search');

        mark.removeMarkers();
        res(cacheData[area]);
        return;
      }
      else if (localStorage.getItem('neighborhoodData')) {
        var stringData = localStorage.getItem('neighborhoodData');
        cacheData = JSON.parse(stringData);
        res(cacheData);
        return;
      } 
      else {
        cacheData[area] = {};
        request.getData(currentArea);
        rej("data is being called and markers displayed immediately after");
        return;
      }
    });
  }

  function buildInterface(data) {
    for (var neighborhood in data) {
      info.buildInfo(currentArea, data, state);
    }
  }

  function storeInLocal(data) {
    // localStorage.setItem('stateData', JSON.stringify(data));
    // localStorage.setItem('stateCodes', JSON.stringify(data));
  }

  return {
    getNeighborhood: getNeighborhood,
    buildInterface: buildInterface,
    codes: cacheCodes,
    data: cacheData
  };

})(jQuery);
