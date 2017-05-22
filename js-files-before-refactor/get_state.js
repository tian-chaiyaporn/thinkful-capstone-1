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
    return new Promise(function (res, rej) {
      if (!$.isEmptyObject(cacheData)) {
        log('state data already exists');
        res(cacheData);
        return;
      }
      else if(localStorage.getItem('stateData')) {
        log('get items from local storage');
        var stringData = localStorage.getItem('stateData');
        cacheData = JSON.parse(stringData);
        res(cacheData);
        return;
      }
      else {
        notify.button('Loading...');
        request.getData(currentArea);
        rej("data is being called and markers displayed immediately after");
        return;
      }
    });
  }

  function buildInterface(data) {
    log(cacheData);
    for (var state in data) {
      info.buildInfo(currentArea, data, state);
    }
    notify.waitFinished();
  }

  function storeInLocal() {
    if (storageAvailable('localStorage')) {
      localStorage.setItem('stateData', JSON.stringify(cacheData));
    }
    // localStorage.setItem('stateCodes', JSON.stringify(cacheData));
  }

  function getCache() {
    return cacheData;
  }

  function addCache(data, args) {
    switch(args.length) {
      case 1:
        cacheData[args[0]] = data;
      break;
      case 2:
        cacheData[args[0]][args[1]] = data;
      break;
      case 3:
        cacheData[args[0]][args[1]][args[2]] = data;
    }
  }

  return {
    getState: getState,
    buildInterface: buildInterface,
    codes: cacheCodes,
    data: cacheData,
    getCache: getCache,
    addToCache: addCache,
    storeInLocal: storeInLocal
  };

})(jQuery);

// promise chaining
