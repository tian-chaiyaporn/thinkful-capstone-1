/* requires:
global.js
map.js
markers.js
request_config.js
make_ajax.js
process_data.js
notify.js
*/

/*
- API (slowest method)
- localStorage (OK method)
- memory (fastest method)
*/

var stateRepo = (function($) {
  'use strict';
  // var cache = {};

  var cacheCodes = {};
  var cacheData = {};
  var currentArea = 'All States';

  function getState() {
    log("getState()");
    $('.js-search-btn').html('Loading...');

    return new Promise(function (res, rej) {
      if (!$.isEmptyObject(cacheData)) {
        log('state data already exists');
        $('.js-search-btn').html('Search');
        res(cacheData);
        return;
      }
      else if(localStorage.getItem('stateData')) {
        var stringData = localStorage.getItem('stateData');
        cacheData = JSON.parse(stringData);
        res(cacheData);
        return;
      }
      else {
        request.getData(currentArea);
        rej("data is being called and markers displayed immediately after");
        return;
      }
    });
  }

  function buildInterface(data) {
    for (var state in data) {
      info.buildInfo(currentArea, data, state);
    }
  }

  function storeInLocal(data) {
  //   localStorage.setItem('stateData', JSON.stringify(cacheCodes));
  //   localStorage.setItem('stateCodes', JSON.stringify(cacheData));
  }

  // function getStateByKey(key) {
  //   // - [x] Load from memory
  //   // - [x] Load from localStorage
  //   //   - [x] Save to memory before resolving promise
  //   // - [ ] Load from API
  //   //   - [x] Save to localStorage before resolving promise
  //   //   - [x] Save to memory before resolving promise

  //   return new Promise(function (res, rej) {
  //     if (cache.hasOwnProperty(key)) {
  //       res(cache[key]);
  //     }
  //     else if (localStorage.hasOwnProperty(key)) {
  //       var data = JSON.parse(localStorage[key]);
  //       cache[key] = data;
  //       res(cache[key]);
  //     }
  //     else {
  //       request.getCode(currentArea, res, rej);
  //       // jQuery.get('asdfasdf', {
  //       //   success: function (payload) {
  //       //     localStorage[key] = payload;
  //       //     cache[key] = JSON.parse(payload);
  //       //     res(cache[key]);
  //       //   },
  //       //   fail: rej
  //       // });
  //     }
  //   });
  // }

  return {
    getState: getState,
    buildInterface: buildInterface,
    // get: getStateByKey,
    codes: cacheCodes,
    data: cacheData
  };

})(jQuery);

// promise chaining
