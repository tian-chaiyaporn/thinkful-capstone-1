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
    log(getNeighborhood);
    $('.js-search-btn').html('Loading...');
    if (currentArea !== area){
      mark.moveToLocation(area);
      currentArea = area;
    }

    if (!$.isEmptyObject(cacheData[area])) {
      log('area data already exists');
      $('.js-search-btn').html('Search');
      mark.removeMarkers();
      for (var neighborhood in cacheData[area]) {
        info.buildInfo(area, cacheData, neighborhood);
      }
      return;
    }
    cacheData[area] = {};
    request.getCode(currentArea);
  }

  return {
    getNeighborhood: getNeighborhood,
    codes: cacheCodes,
    data: cacheData
  };

})(jQuery);
