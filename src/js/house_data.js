/* requires:
global.js
map.js
*/

var getData = (function(){
  
  'use strict';

  var stateCodes = {};
  /*
    stateCodes = {
      'ALL': 'All States',
      'North Corolina' : '00001',
      'New York' : '00002',
      ...
    }
  */

  var areaCodes = {};
  /*
    areaCodes = {
      'North Corolina': [
        {neighborhood1: 00001},
        {neightborhodo2: 00002},
        ...
      ],
      'New York': [
        {neighborhood1: 00003},
        {neightborhood 1: 00002},
        ...
      ] ,
      ...
    }
  */

  function getStateCode() {

  }

  function getAreaCode() {

  }


  function area(stateX) {
    // look for all neighborhood + code in State and save in array

    // map array to get data from API
      // build URL
      // ajax call
      // catch error
      // store result in result array
      // get LatLng

    // return result array
    /*
      resultArray = [
        {
          neightborhood1: {
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
            PriceChangeYr30: 80%}
        },
        {
          neightborhood2: {
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
            PriceChangeYr30: 80%}
        },
        ...
      ]
    */
  }

  function state() {
    // get all states not in countryData

    // map array to get data from API
      // build URL
      // ajax call
      // catch error
      // store result in result array
      // get LatLng

    // return result object
    /*
      resultObject = {
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
          PriceChangeYr30: 80%
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
          PriceChangeYr30: 80%
        },
        ...
      }
    */
  }

})();