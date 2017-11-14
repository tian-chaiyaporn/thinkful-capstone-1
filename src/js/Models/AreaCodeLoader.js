/**
 * @file 
 *
 * get area-codes internally stored JSON files. This is needed to make request to Quandl 
 * 
 * MVP pattern category: Model
 * requires: AppStateManager, Utils
 *
 */

var App = App || {};

App.AreaCodeLoader = (function ($) {
	'use strict';

  // get area-codes internally stored JSON files
	function getCodesFromJSON (area) {
		console.log('getCodeFromJSON()');
		// logic to choose whether the user requests for all states or single state
    return new Promise(function(res, rej){
      if (area === 'All States') {
        asyncRequest('state_code.json')
          .then(formatStateCodes)
          .then(function(codes) { res(codes); })
          .catch(function(){log('fail to get internal state_code JSON data');});
      } else {
        asyncRequest('neighborhood_code.json')
          .then(formatNeighborhoodCodes.bind(null, area))
          .then(function(codes) { res(codes); })
          .catch(function(error){
            log(error);
            log('fail to get internal neighborhood_code JSON data');
          });
      }
    });
	}

  // asynchronouse request fired with a given url
  var asyncRequest = function(url) {
    log('asyncRequest()');
    return new Promise(function(res, rej){
      $.ajax({
        url: url,
        dataType: 'text',
        success: function (data) {res(data);},
        error: function(error) {rej("fail to get code");}
      }); // end ajax
    }); // end Promise
  };

  // format area codes (use-states) into a useful format for the app
  function formatStateCodes (codes) {
  	log('formatStateCodes()');
  	return new Promise(function(res) {
  		var formattedCodes = JSON.parse(codes).map(function(c) {
  			var str = c.code;
  			c.code = 'S' + str;
  			return c;
  		});
  		res(formattedCodes);
  	});
  }

  // format area codes (neighborhoods) into a useful fomat for the app
	function formatNeighborhoodCodes (area, codes) {
    return new Promise(function(res, rej){
      log('formatNeighborhoodCodes()');
      var abbrArea = abbrState(area, 'abbr');

      res(
        JSON.parse(codes)
          .filter(function(code){
            var codeArray = code['STATE|CODE'].split('|');
            return codeArray[0] === abbrArea;
          })
          .map(function(obj){
            var codeArray = obj['STATE|CODE'].split('|');
            var str = codeArray[1];
            var code = 'N' + str;
            return {
              'name': obj.name + ", " + obj.metro,
              'code': code
            };
          })
      );
    });
  }

	return {
		getCodesFromJSON: getCodesFromJSON
	};
})(jQuery);

