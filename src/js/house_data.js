/* requires:
global.js
map.js
*/

var getData = (function($){
  
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

  function createCORSRequest(method, url) {
    var xhr = new XMLHttpRequest();
    if ("withCredentials" in xhr) {
      // XHR for Chrome/Firefox/Opera/Safari.
      xhr.open(method, url, true);
    } else if (typeof XDomainRequest != "undefined") {
      // XDomainRequest for IE.
      xhr = new XDomainRequest();
      xhr.open(method, url);
    } else {
      // CORS not supported.
      xhr = null;
    }
    return xhr;
  }

  // Helper method to parse the title tag from the response.
  function getTitle(text) {
    return text.match('<title>(.*)?</title>')[1];
  }

  // Make the actual CORS request.
  function makeCorsRequest() {
    // This is a sample server that supports CORS.
  }

  function getStateCode() {
    $.support.cors = true;
    var url = './state_codes.csv';

    var xhr = createCORSRequest('GET', url);
    if (!xhr) {
      alert('CORS not supported');
      return;
    }

    // Response handlers.
    xhr.onload = function() {
      var text = xhr.responseText;
      var title = getTitle(text);
      alert('Response from CORS request to ' + url + ': ' + title);
    };

    xhr.onerror = function() {
      alert('Woops, there was an error making the request.');
    };

    xhr.send();
    // $.ajax({
    //   url: "./state_codes.csv",
    //   success: function (csvd) {
    //       csv_as_array = $.csv.toObjects(csvd);
    //       log(csv_as_array);
    //       // stateCodes.stateCodes = csv_as_array;
    //   }, 
    //   dataType: "csv",
    //   complete: function () {
    //     log("load csv completed");
    //     // use the array of arrays (variable csv_as_array)
    //     // for further processing
    //   },
    //   error: log("csv failed")
    // });
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

  function state(){
    log("get state data");
    getStateCode();
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

  return {
    state: state,
    area: area
  };

})(jQuery);
