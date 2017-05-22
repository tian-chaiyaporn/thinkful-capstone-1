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

(function($) {
  'use strict';

  // initialize map
  gmap.build();

  function processRequest() {
    $('.js-search-location').submit(function(e){
      e.preventDefault();
      var optState = $( "#js-state option:selected" ).val();
      ChosenDataType = $( "#js-data-type option:selected" ).val();
      CurrentTime = $( "#js-year option:selected" ).val();

      mark.clearMarkers();
      notify.waitFinished();

      if (optState === 'All States') {
        gmap.zoomOut();
        stateRepo.getState()
          .then(stateRepo.buildInterface)
          .catch(function(error){log(error);});
        return;
      }
      neighborhoodRepo.getNeighborhood(optState)
        .then(neighborhoodRepo.buildInterface)
        .catch(function(error){log(error);});
    });
  }
  
  log('app loaded');
  processRequest();
  
  // initialize data from all states
  stateRepo.getState()
    .then(stateRepo.buildInterface)
    .catch(function(error){log(error);});

})(jQuery);
