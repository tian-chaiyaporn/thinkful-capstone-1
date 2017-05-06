/* requires:
global.js
map.js
make_ajax.js
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
      
      gmap.removeMarkers();
      getData.from(optState, time, dataType);
    });
  }

  // initialize map
  log('app loaded');
  processRequest();
  gmap.init();
  // initialize data from all states
  getData.from('All States');

})(jQuery);