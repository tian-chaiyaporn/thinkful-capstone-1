/* requires:
global.js
map.js
state_data.js
area_data.js
make_ajax.js
*/

(function($) {
  'use strict';
  
  var countryData = {};
  /*
    countryData = {
      state1: {
        Lat: 0.000014,
        Lng: 9.635495,
        AvgHousePriceYr1: 1235677,
        AvgHousePriceYr3: 1235677,
        AvgHousePriceYr5: 1235677,
        AvgHousePriceYr10: 1235677,
        AvgHousePriceYr20: 1235677,
        AvgHousePriceYr30: 1235677,
        PriceChangeYr1: 10%,
        PriceChangeYr3: 20%,
        PriceChangeYr5: 35%,
        PriceChangeYr10: 60%,
        PriceChangeYr20: 70%,
        PriceChangeYr30: 80%,
        neighborhoods: [
          { 
            neighborhood1: {
              Lat: 0.000014,
              Lng: 9.635495,
              AvgHousePriceYr1: 1235677,
              AvgHousePriceYr3: 1235677,
              AvgHousePriceYr5: 1235677,
              AvgHousePriceYr10: 1235677,
              AvgHousePriceYr20: 1235677,
              AvgHousePriceYr30: 1235677,
              PriceChangeYr1: 10%,
              PriceChangeYr3: 20%,
              PriceChangeYr5: 35%,
              PriceChangeYr10: 60%,
              PriceChangeYr20: 70%,
              PriceChangeYr30: 80%
            }
          },
          { neighborhood2: {
              Lat: 0.000014,
              Lng: 9.635495,
              AvgHousePriceYr1: 1235677,
              AvgHousePriceYr3: 1235677,
              AvgHousePriceYr5: 1235677,
              AvgHousePriceYr10: 1235677,
              AvgHousePriceYr20: 1235677,
              AvgHousePriceYr30: 1235677,
              PriceChangeYr1: 10%,
              PriceChangeYr3: 20%,
              PriceChangeYr5: 35%,
              PriceChangeYr10: 60%,
              PriceChangeYr20: 70%,
              PriceChangeYr30: 80%}},
          ...
        ]
      },
      state2: {
        Lat: 0.000014,
        Lng: 9.635495,
        AvgHousePriceYr1: 1235677,
        AvgHousePriceYr3: 1235677,
        AvgHousePriceYr5: 1235677,
        AvgHousePriceYr10: 1235677,
        AvgHousePriceYr20: 1235677,
        AvgHousePriceYr30: 1235677,
        PriceChangeYr1: 10%,
        PriceChangeYr3: 20%,
        PriceChangeYr5: 35%,
        PriceChangeYr10: 60%,
        PriceChangeYr20: 70%,
        PriceChangeYr30: 80%,
        neighborhoods: [
          { neighborhood1: {
                Lat: 0.000014,
                Lng: 9.635495,
                AvgHousePriceYr1: 1235677,
                AvgHousePriceYr3: 1235677,
                AvgHousePriceYr5: 1235677,
                AvgHousePriceYr10: 1235677,
                AvgHousePriceYr20: 1235677,
                AvgHousePriceYr30: 1235677,
                PriceChangeYr1: 10%,
                PriceChangeYr3: 20%,
                PriceChangeYr5: 35%,
                PriceChangeYr10: 60%,
                PriceChangeYr20: 70%,
                PriceChangeYr30: 80%}},
          { neighborhood2: {
              Lat: 0.000014,
              Lng: 9.635495,
              AvgHousePriceYr1: 1235677,
              AvgHousePriceYr3: 1235677,
              AvgHousePriceYr5: 1235677,
              AvgHousePriceYr10: 1235677,
              AvgHousePriceYr20: 1235677,
              AvgHousePriceYr30: 1235677,
              PriceChangeYr1: 10%,
              PriceChangeYr3: 20%,
              PriceChangeYr5: 35%,
              PriceChangeYr10: 60%,
              PriceChangeYr20: 70%,
              PriceChangeYr30: 80%}},
          ...
        ]
      },
      ...
    }
  */

  function processRequest() {
    $('.js-search-location').submit(function(e){
      e.preventDefault();
      var dataType = $( "#js-data-type option:selected" ).val();
      var time = $( "#js-year option:selected" ).val();
      var optState = $( "#js-state option:selected" ).val();
      
      gmap.removeMarkers();

      if (optState === 'All States') {
        getStateData.from(optState, time, dataType);
      } else {
        getAreaData.from(optState, time, dataType);
      }
    });
  }

  // initialize map
  log('app loaded');
  processRequest();
  gmap.init();
  // initialize data from all states
  getStateData.from('All States');

  // get form data
  // getData.from(selectedOptionState, time, dataType)

})(jQuery);