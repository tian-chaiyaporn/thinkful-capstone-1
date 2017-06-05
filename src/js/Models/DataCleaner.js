var App = App || {};

App.DataCleaner = (function ($) {
  'use strict';

  function cleanApiDataForStorage (codes /* code, name */, response) {
    log('cleanApiDataForStorage()');
    return new Promise(function(res){
      var dat = response.dataset.data;
      var idType = codes.code.includes('S') ? 'stateId' : 'neighborhoodId';
      var codeData = {'id': codes.code, 'title': codes.name};
      var housePriceData = {
        [idType]: codes.code,
        'value': {
          'year1': {
            // check to see if index of array exists in case dataset does not exist
            // for a particular year. if it does not, returns 0
            'avg': 0 in dat ? dat[0][1] : 0,
            'percent': percentChg(dat[0][1], 1 in dat ? dat[1][1] : 0)
          },
          'year3': {
            'avg': 2 in dat ? dat[2][1] : 0,
            'percent': percentChg(dat[0][1], 2 in dat ? dat[2][1] : 0)
          },
          'year5': {
            'avg': 4 in dat ? dat[4][1] : 0,
            'percent': percentChg(dat[0][1], 4 in dat ? dat[4][1] : 0)
          },
          'year10': {
            'avg': 9 in dat ? dat[9][1] : 0,
            'percent': percentChg(dat[0][1], 9 in dat ? dat[9][1] : 0)
          }
        },
      };
      res({
        'title': codes.name,
        'idType': idType,
        'code': codeData,
        'housePrice': housePriceData
      });
    });
  }

  function formatMetaDataForStorage () {}

  return {
    formatQuandlData: cleanApiDataForStorage
  };
})(jQuery);