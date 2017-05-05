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

  var time = 30;
  var dataType = 'none';

  function from(area, time, dataType) {
    if (typeof time !== 'undefined') {
      time = time;
    }
    if (typeof dataType !== 'undefined') {
      dataType = dataType;
    }
    if (area === 'All States') {
      getStateCode();
    } else {
      getAreaCode(area);
    }
  }

  function getStateCode() {
    $.support.cors = true;
    log("get state data");
    if ($.isEmptyObject(stateCodes)) {
      $.ajax({
        url: "state_code.json",
        method: 'GET',
        dataType: "json",
        success: function (data) {
          getStateData(data);
        },
        error: log("csv failed refreshed 2"),
        complete: function () {
          log("load csv completed");
        }
      });
    } else {
      getStateData(stateCodes);
    }
  }

  var stateData = {};

  function getStateData(codes){
    if (!$.isEmptyObject(stateData)) {
      log('state data already exists');
      log(stateData);
      return;
    }
    log("get state data");

    stateCodes = codes;
    var url = 'https://www.quandl.com/' + 
              'api' + 
              '/v3/datasets/ZILL/' + 
              'S' + '@stateCode' + '_A.json' +
              '?collapse=annual' + '&api_key=1aGVznRZH7ckoyhVtges';

    var urlArray = [];
    var stateNameArray = [];

    for (var stateName in stateCodes) {
      var formatUrl = url.replace('@stateCode', stateCodes[stateName]);
      urlArray.push(formatUrl);
      stateNameArray.push(stateName);
    }
    var i = 0;
    makeAjaxSync(urlArray, stateNameArray, i);
  }

  // ajax must be synchronous due to API limitation
  function makeAjaxSync(urlArray, stateNameArray, i) {
    log("make sync request: " + i);
    if (i > Object.keys(stateCodes).length) {
      return;
    } else {
      setTimeout(function() {
        $.ajax({
          url: urlArray[i],
          method: 'GET',
          dataType: "json",
          success: function (res) {
            log(res);
            i = i+1;
            //makeAjaxSync(urlArray, stateNameArray, i);
            cleanStateData(res, stateNameArray[i]);
          },
          error: log("state data failed: " + i)
        });
      }, 1000);
    }
  }

  function cleanStateData(res, stateName) {
    var dat = res.dataset.data;
    stateData[stateName] = {
      HousePriceYr1: dat[0][1],
      // check to see if index of array exists in case dataset is not complete
      HousePriceYr3: 2 in dat ? dat[2][1] : 0,
      HousePriceYr5: 4 in dat ? dat[4][1] : 0,
      HousePriceYr10: 9 in dat ? dat[9][1] : 0,
      PriceChangeYr1: percentChg(dat[0][1], dat[1][1]),
      PriceChangeYr3: percentChg(dat[0][1], 2 in dat ? dat[2][1] : 0),
      PriceChangeYr5: percentChg(dat[0][1], 4 in dat ? dat[4][1] : 0),
      PriceChangeYr10: percentChg(dat[0][1], 9 in dat ? dat[9][1] : 0)
    };
    log(stateData);

    // return result object
    /*
      resultObject = {
        state1: {
          Lat: 0.000014,
          Lng: 9.635495,
          HousePriceYr1: 1235677,
          HousePriceYr3: 1235677,
          HousePriceYr5: 1235677,
          HousePriceYr10: 1235677,
          PriceChangeYr1: 10%,
          PriceChangeYr3: 20%,
          PriceChangeYr5: 35%,
          PriceChangeYr10: 60%
        },
        state2: {
          Lat: 0.000014,
          Lng: 9.635495,
          AvgHousePriceYr1: 1235677,
          AvgHousePriceYr3: 1235677,
          AvgHousePriceYr5: 1235677,
          AvgHousePriceYr10: 1235677,
          PriceChangeYr1: 10%,
          PriceChangeYr3: 20%,
          PriceChangeYr5: 35%,
          PriceChangeYr10: 60%
        },
        ...
      }
    */
  }

  function getAreaData(stateX) {
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
        ...]
    */
  }

  function getAreaCode() {

  }

  return {
    from: from
  };

})(jQuery);
