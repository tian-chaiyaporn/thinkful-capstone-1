/* requires:
global.js
map.js
markers.js
request_config.js
make_ajax.js
process_data.js
notify.js
*/

var stateRepo = (function($) {
  'use strict';

  var cacheCodes = {};
  var cacheData = {};
  var currentArea = 'All States';

  function getState() {
    log(getState);
    $('.js-search-btn').html('Loading...');
    //gmap.zoomOut();

    if (!$.isEmptyObject(cacheData)) {
      log('state data already exists');
      $('.js-search-btn').html('Search');
      for (var state in cacheData) {
        info.buildInfo(currentArea, cacheData, state);
      }
      return;
    }
    request.getCode(currentArea);
  }

  return {
    getState: getState,
    codes: cacheCodes,
    data: cacheData
  };

})(jQuery);
