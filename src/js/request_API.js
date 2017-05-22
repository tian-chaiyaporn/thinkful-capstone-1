/**
 * @file 
 *
 * Function to construct url and fire an ajax request to Quandl
 *
 * MVC pattern category: Model
 *
 */

var api = (function($) {
  'use strict';

  var requestAPI = function(area_code, area_param) {
    log('request()');
    return new Promise(function(res, rej) {
      var BASE_URL = 'https://www.quandl.com/api/v3';
      var endpoint = '/datasets/ZILL/';
      var dataParam = area_param + area_code + '_A.json';
      var queryParams = {
        'api_key' : '1aGVznRZH7ckoyhVtges',
        'collapse': 'annual'
      };
      var query = '?';
      for (var param in queryParams) {
        query = query + param + '=' + queryParams[param] + '&';
      }
      query = query.substring(0, query.length - 1);

      var url = BASE_URL + endpoint + dataParam +query;

      log(url);

      $.ajax({
        url: url,
        dataType: "json",
        success: function (response) {res(response);},
        error: function () {rej(log("load data failed for: " + url + " ignore and move on."));} 
      }); // end ajax
    }); // end promise
  };

  return {
    request: requestAPI
  };

})(jQuery);
