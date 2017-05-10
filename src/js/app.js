/* requires:
global.js
map.js
markers.js
request_config.js
make_ajax.js
process_data.js
notify.js
get_state.js
get_area.js
*/
var CurrentTime = 1;
var ChosenDataType = 'HousePrice';

(function($) {
  'use strict';

  function processRequest() {
    $('.js-search-location').submit(function(e){
      e.preventDefault();
      var optState = $( "#js-state option:selected" ).val();
      ChosenDataType = $( "#js-data-type option:selected" ).val();
      CurrentTime = $( "#js-year option:selected" ).val();
      
      mark.removeMarkers();
      notify.waitFinished();
      if (optState === 'All States') {
        stateRepo.getState();
        return;
      }
      neighborhoodRepo.getNeighborhood(optState);
    });
  }

  // initialize map
  log('app loaded');
  processRequest();
  gmap.init();
  // initialize data from all states
  stateRepo.getState();
  //notify.waitTime(10);

})(jQuery);