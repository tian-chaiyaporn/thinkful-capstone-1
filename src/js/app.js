/* requires:
global.js
map.js
house_data.js
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
    // get form data
    // if form.option.text() === 'all states'
      // use countryData for-in loop
        // log data if success
        // displayUSData()

    // if countryData.state.neighborhoods.length === 0
      // getData.area(stateX)
      // store resultArray in countryData.stateX.neighborhood

    // else if countryData.state.neighborhoods.length > 0
      // use countryData.state.neighborhoods map
        // log data if success
        // displayStateData()

    // else catch error
  }

  // initialize map
  log('app loaded');
  gmap.init();
  // initialize data from all states
  getData.from('All States');

  // get form data
  // getData.from(selectedOptionState, time, dataType)

})(jQuery);