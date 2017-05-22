/**
 * @file 
 *
 * Provide function to format data from Quandl for cache and storage
 *
 * MVC pattern category: Model
 *
 */

var clean = (function($) {
  'use strict';

  var formatForStorage = function(res) {
    return new Promise(function(resolve){
      log('format data from api to store in cache');
      var dat = res.dataset.data;
      var formattedData = {
        'HousePrice': {
          '1year': {
            // check to see if index of array exists in case dataset is not complete
            // if not, returns 0
            'avgPrice': 0 in dat ? dat[0][1] : 0,
            'percentChange': percentChg(dat[0][1], 1 in dat ? dat[1][1] : 0)
          },
          '3year': {
            'avgPrice': 2 in dat ? dat[2][1] : 0,
            'percentChange': percentChg(dat[0][1], 2 in dat ? dat[2][1] : 0)
          },
          '5year': {
            'avgPrice': 4 in dat ? dat[4][1] : 0,
            'percentChange': percentChg(dat[0][1], 4 in dat ? dat[4][1] : 0)
          },
          '10year': {
            'avgPrice': 9 in dat ? dat[9][1] : 0,
            'percentChange': percentChg(dat[0][1], 9 in dat ? dat[9][1] : 0)
          }
        },
      };
      resolve(formattedData);
    });
  };

  return {
    formatForStorage: formatForStorage
  };

})(jQuery);

// HousePriceYr1: 0 in dat ? dat[0][1] : 0,
// HousePriceYr3: 2 in dat ? dat[2][1] : 0,
// HousePriceYr5: 4 in dat ? dat[4][1] : 0,
// HousePriceYr10: 9 in dat ? dat[9][1] : 0,
// PriceChangeYr1: percentChg(dat[0][1], 1 in dat ? dat[1][1] : 0),
// PriceChangeYr3: percentChg(dat[0][1], 2 in dat ? dat[2][1] : 0),
// PriceChangeYr5: percentChg(dat[0][1], 4 in dat ? dat[4][1] : 0),
// PriceChangeYr10: percentChg(dat[0][1], 9 in dat ? dat[9][1] : 0)

// var dataToPass;
// if (area === 'All States') {
//   stateRepo.addToCache(dataToCompute, [areaName]);
//   dataToPass = stateRepo.getCache();
// } else {
//   neighborhoodRepo.addToCache(dataToCompute, [area, areaName]);
//   dataToPass = neighborhoodRepo.getCache()[area];
// }
// info.buildInfo(area, dataToPass, areaName);