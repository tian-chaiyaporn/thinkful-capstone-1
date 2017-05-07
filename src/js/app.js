/* requires:
global.js
map.js
markers.js
make_ajax.js
info_display.js
notify.js
get_data.js
*/

(function($) {
  'use strict';

  function processRequest() {
    $('.js-search-location').submit(function(e){
      e.preventDefault();
      var dataType = $( "#js-data-type option:selected" ).val();
      var time = $( "#js-year option:selected" ).val();
      var optState = $( "#js-state option:selected" ).val();
      
      mark.removeMarkers();
      notify.waitFinished();
      getData.from(optState, time, dataType);
    });
  }

  // initialize map
  log('app loaded');
  processRequest();
  gmap.init();
  // initialize data from all states
  getData.from('All States');
  //notify.waitTime(10);

})(jQuery);