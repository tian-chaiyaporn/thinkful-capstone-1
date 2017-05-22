// requires: Utils.js

/**
 * @file 
 * @constructor
 *
 * Construct Data Model for Area Code and provide functions for storing and getting area code data
 *
 * MVC pattern category: Model
 *
 */

var AreaCodeModel = (function ($) {
  'use strict';

  var cacheStateCode = [];
  var cacheAreaCode = [];
  var currentArea;

  var getByName = function(name) {
    log('getByName()');
    return new Promise(function(res,rej) {
      currentArea = name;
      var code_already_exists = currentArea === 'All States' ? 
          cacheStateCode.length > 0 : cacheAreaCode.length > 0;

      if (code_already_exists) {
        var abbrArea = abbrState(currentArea, 'abbr');
        var codes = currentArea === 'All States' ?
            cacheStateCode : cacheAreaCode.filter(function(c) {
                                return c.Metro === abbrArea;
                              });
        res({
          'codes': codes,
          'stateName': currentArea
        });
      } else {
        var codeAndName = getAllStates(name);
        res(codeAndName);
      }
    });
  };

  var getAllStates = function() {
    log('getAllStates()');
    return getCode()
      .then(asyncRequest)
      .then(formatCode)
      .catch(function(error){log(error);});
  };

  var getCode = function() {
    log('getCode()');
    return new Promise(function(resolve, reject) {
      $.support.cors = true;
      if (currentArea === 'All States') {        
        resolve('state_code.json');
        return;
      }
      resolve('/build/neighborhood_code.json');
    });
  };

  var asyncRequest = function(url) {
    log('asyncRequest()');
    return new Promise(function(res, rej){
      $.ajax({
        url: url,
        method: 'GET',
        dataType: "json",
        success: function (data) {
          res(data);
        },
        error: function() {
          rej("fail to get code");
        }
      }); // end ajax
    }); // end Promise
  };

  var formatCode = function(codes) {
    log('formatCode()');
    return new Promise(function(res, rej) {
      var area_param;
      if (currentArea === 'All States') {
        // store codes for cache
        cacheStateCode = codes;
        res({
          'codes': cacheStateCode,
          'stateName': currentArea
        });
        return;
      }
      cacheAreaCode = codes;
      cacheAreaCode.map(function(obj){
          var code = obj['City|Code'].split('|');
          obj.city = code[0];
          obj.code = code[1];
        });
      log(cacheAreaCode);
      // filter for relevant neighborhood codes
      var abbrArea = abbrState(currentArea, 'abbr');
      var selectCodes = cacheAreaCode.filter(function(code){
        return code.metro === abbrArea;
      });
      log(selectCodes);

      res({
        'codes': selectCodes,
        'stateName': currentArea
      });
    });
  };

  return {
    getCodeByName: getByName
  };

})(jQuery);
