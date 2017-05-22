// requires:   Utils.js    request_API.js    format_data_for_storage.js

/**
 * @file 
 * @constructor
 *
 * Construct Data Model for House Prices and provide functions for storing and getting house price data
 *
 * MVC pattern category: Model
 *
 */

var HousePriceModel = (function ($) {
  'use strict';

  var cacheData = {};

  var getCache = function() {
    log('getCache()');
    return cacheData;
  };

  var addToCache = function(data, args) {
    log('addToCache()');
    return new Promise(function(res){
      switch(args.length) {
        case 1:
          // add new state data
          cacheData[args[0]] = data;
        break;
        case 2:
          // add state house price data or add all neighborhoods data
          cacheData[args[0]][args[1]] = data;
        break;
        case 3:
          // add individual state house price by year or add individual neighborhood data
          cacheData[args[0]][args[1]][args[2]] = data;
        break;
        case 4:
          // add individual neighborhood house prices
          cacheData[args[0]][args[1]][args[2]][args[3]] = data;
        break;
        case 5:
          // add individual neighborhood house prices by year
          cacheData[args[0]][args[1]][args[2]][args[3]][args[4]] = data;
      }
      res();
    });
  };

  var addToLocalStorage = function() {
    log('addToLocalStorage()');
    return new Promise(function(res){ 
      if (storageAvailable('localStorage')) {
        localStorage.setItem('HousePriceData', JSON.stringify(cacheData));
      }
    });
  };

  var getExistingData = function(state) {
    log("getExistingData()");

    // set logic condition to check if data exist in cache
    var data_exists_in_cache = false;
    if (!$.isEmptyObject(cacheData)) {
      data_exists_in_cache = state === 'All States' ? true : ('neighborhoods' in cacheData[state]);
    }

    // set logic condition to check if data exist in localStorage
    var data_exists_in_localStorage = false;
    var dataFromLocal;
    if (localStorage.getItem('HousePriceData')) {
      dataFromLocal = JSON.parse(localStorage.getItem('HousePriceData'));
      data_exists_in_localStorage = state === 'All States' ? true : dataFromLocal[state].neighborhoods;
    }

    return new Promise(function (res, rej) {
      if (data_exists_in_cache) {
        log('data already exists');
        res(cacheData);
        return;
      }
      else if(data_exists_in_localStorage) {
        log('get from local storage');
        var stringData = localStorage.getItem('HousePriceData');
        cacheData = state === 'All States' ? dataFromLocal : dataFromLocal[state].neighbothoods;
        res(cacheData);
        return;
      }
      else {
        log('no existing data, goes on to get from Quandl API request');
        res();
      }
    });
  };

  var getQuandlData = function(areaCode, areaName, stateName) {
    log("getQuandlData()");
    return new Promise(function(resolve, reject){
      // if state name is the same as area name, 
      // we know that User is request country data rather than neighborhood data
      var areaParam = stateName === 'All States' ? 'S' : 'N';
      api.request(areaCode, areaParam)
        .then(clean.formatForStorage)
        .then(function(data) {
          log(data);
          if (!$.isEmptyObject(data)) {
            storeInCache();
          } else {
            reject(console.log('no data from Quandl'));
          }

          function storeInCache() {
            if (stateName !== 'All States') {
              addNeighborhoodData();
            } else {
              addToCache(data, [areaName])
                .catch(function(){console.log('fail to add formatted data to cache');});
            }
            resolve(data);
          }

          function addNeighborhoodData() {
            if (!cacheData[stateName].hasOwnProperty('neighborhoods')){
              addToCache({}, [stateName, 'neighborhoods'])
                .then(addToCache.bind(null, data, [stateName, 'neighborhoods', areaName]))
                .catch(function(){console.log('fail to add area data to cache');});
            } else {
              addToCache(data, [stateName, 'neighborhoods', areaName])
                .catch(function(){console.log('fail to add area data to cache');});
            }
          }

        })
        .catch();
    });
  };

  return {
    getExistingData: getExistingData,
    getCache: getCache,
    getData: getQuandlData,
    addToCache: addToCache,
    storeInLocal: addToLocalStorage
  };

})(jQuery);

  // var mockData = {
  //         'California': {
  //           'HousePrice': {
  //             '1-year': {
  //                'avgPrice': 10000,
  //                'percentChange': 5%
  //              },
  //             '3-year':  
  //                'avgPrice': 10000,
  //                'percentChange': 5%
  //              },
  //           },
  //           'neighborhoods' : {
  //             'N1': {
  //               'HousePrice': {
  //                 '1-year': {
  //                    'avgPrice': 10000,
  //                    'percentChange': 5%
  //                 },
  //                 '3-year':  
  //                  'avgPrice': 10000,
  //                  'percentChange': 5%
  //                 },
  //               }
  //             },
  //             'N2': {
  //               'HousePrice': {}
  //             }
  //         },

  //         'Alabama' : {
  //           'HousePrice': {
  //           },
  //           'neighborhoods' : {
  //             'N1': {
  //               'HousePrice': {
  //               }
  //             }
  //           }
  //         }
  //      };
