/* requires:
global.js
map.js
*/

var getData = (function($){
  
  'use strict';

  var stateCodes = {};

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

  var time = 10;
  var dataType = 'HousePrice';
  var stateData = {};

  function from(area, time, dataType) {
    if (typeof time !== 'undefined') {time = time;}
    if (typeof dataType !== 'undefined') {dataType = dataType;}
    if (area === 'All States') {
      getStateCode();
    } else {
      getAreaCode(area);
    }
  }

  function getStateCode() {
    $.support.cors = true;
    if ($.isEmptyObject(stateCodes)) {
      $.ajax({
        url: "state_code.json",
        method: 'GET',
        dataType: "json",
        success: function (data) {
          getStateData(data);
        },
        error: function() {
          log("csv failed refreshed 2");
        }
      });
    } else {
      getStateData(stateCodes);
    }
  }

  function getStateData(codes){
    if (!$.isEmptyObject(stateData)) {
      log('state data already exists');
      // make for-loop for buildInfo(stateData);
      return;
    }

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
    // please see makeAjaxSync to understand why i is set as -1
    var i = -1;
    makeAjaxSync(urlArray, stateNameArray, i);
  }

  // ajax must be synchronous due to API limitation
  // this function is a recursive function calling itself.
  function makeAjaxSync(urlArray, stateNameArray, i) {
    
    if (i >= 3/*Object.keys(stateCodes).length*/) {
      return;
    } else {
      // set timeout to wait 1 second between call due to limitation
      setTimeout(function() {
        // first, send an ajax to negate the setTimeout effect that
        // pauses the first ajax call at one second
        if (i === -1) {
          log("make sync request: initialize -1 to negate setTimeout effect");
          // reset i to 0 to avoid error
          i = i+1;
          $.ajax({
            // this send request for urlArray[0]
            url: urlArray[i+1],
            success: function (res) {
              // this also send request for urlArray[0]
              makeAjaxSync(urlArray, stateNameArray, i);
              cleanStateData(res, stateNameArray[i]);
            }
          });
        } 
        // data can now gets processed after 1 second for each request
        else {
          log("make sync request: " + i);
           $.ajax({
            url: urlArray[i],
            method: 'GET',
            dataType: "json",
            success: function (res) {
              i = i+1;
              // recursive function is used to create synchronous operation
              makeAjaxSync(urlArray, stateNameArray, i);
              cleanStateData(res, stateNameArray[i]);
            },
            error: function () {
              log("state data failed: " + i);
            } 
          });
        }
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
    buildInfo(stateData, stateName);
  }

  function buildInfo(data, stateName) {
    // get Latitude and Longitude of the state and build markers
    var address = stateName + ' ' + stateName + ' United States';

    // build information to be shown
    var info = ['State: @state <br>',
                '@dataType: @displayData <br>',
                'Data over: @time years'];              
    var displayData = dataType + 'Yr' + time;
    info = info.join('')
      .replace('@state', stateName)
      .replace('@dataType', dataType)
      .replace('@displayData', '$' + data[stateName][displayData].format(0,3,','))
      .replace('@time', time);

    // pass information to build markers
    gmap.buildMarkers(stateName, address, info);

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
        ...
      }
    */
  }

  function getAreaCode(area) {}

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

  function cleanAreaData(res, areaName) {}

  function buildAreaInfo() {}

  return {
    from: from
  };

})(jQuery);
