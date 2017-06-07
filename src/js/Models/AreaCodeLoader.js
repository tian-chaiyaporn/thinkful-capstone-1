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
          .catch(function(){log('fail to get internal neighborhood_code JSON data');});
      }
    });
	}

  // asynchronouse request fired with a given url
  var asyncRequest = function(url) {
    log('asyncRequest()');
    return new Promise(function(res, rej){
      $.ajax({
        url: url,
        success: function (data) {res(data);},
        error: function() {rej("fail to get code");}
      }); // end ajax
    }); // end Promise
  };

  // format area codes (use-states) into a useful format for the app
  function formatStateCodes (codes) {
  	log('formatStateCodes()');
  	return new Promise(function(res) {
  		var formattedCodes = codes.map(function(c) {
  			var str = c.code;
  			c.code = 'S' + str;
  			return c;
  		});
  		res(formattedCodes);
  	});
  }

  // format area codes (neighborhoods) into a useful fomat for the app
	function formatNeighborhoodCodes (area, codes) {
    log('formatNeighborhoodCodes()');
    return new Promise(function(res, rej){
      var abbrArea = abbrState(area, 'abbr');
      var formattedCodes = codes
      .filter(function(code){
        return code.metro === abbrArea;
      })
      .map(function(obj){
        var codeArray = obj['City|Code'].split('|');
        var str = codeArray[1];
        var code = 'N' + str;
        return {
          'name': obj.name,
          'code': code
        };
      });
      res(formattedCodes);
    });
  }

	return {
		getCodesFromJSON: getCodesFromJSON
	};
})(jQuery);
