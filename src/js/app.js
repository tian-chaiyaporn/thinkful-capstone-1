/* requires:
Utils.js
Map.js
router_listener.js
format_data_for_storage.js
request_API.js
HousePriceModel.js
AreaCodeModel.js
Markers.js
notify.js
*/

/**
 * @file 
 *
 * Initialize App and provide function that execute inputs based on routing process
 *
 * MVC pattern category: Controller
 *
 */

var App = (function($) {
  'use strict';

  var init = function() {
    gmap.build();
    router.init();
    executeInput({
      'params': {
        'dataType': 'HousePrice',
        'timeRange': 1,
        'state': 'All States'
      }});
  };

  var executeInput = function(ctx) {
    var dataType = ctx.params.dataType;
    var timeRange = ctx.params.timeRange;
    var state = ctx.params.state;

    HousePriceModel.getExistingData(state)
      .then(checkIfDataExists)
      .then(notify.finish)
      .catch();

    function checkIfDataExists(res) {
      log('HousePriceModel.getExistingData()');
      var data_exists_in_local = false;

      // check if the requested data already exists
      if (!$.isEmptyObject(res)) {
        data_exists_in_local = state !== 'All States' ?  ('neighborhoods' in res[state]) : true;
      }

      return new Promise(function(resolve) {
        if (data_exists_in_local) {
          displayDataFromLocal(res);
          resolve();
        }
        else {
          getDataFromQuandl(res);
          resolve();
        }
      });
    }

    function displayDataFromLocal(res) {
      return new Promise(function(resolve) {
        var areaData = state === 'All States' ? res : res[state].neighborhoods;
        for (var areaName in areaData) {
          log('info and marker created from cache');
          infowindow.formatInfo(areaName, state, dataType, timeRange, areaData[areaName])
            .then(Marker.buildMarkers);
        }
        resolve();
      });
    }

    function getDataFromQuandl(res) {
      return new Promise(function(resolve) {
        // get codes
        log('else AreaCodeModel.getCodeByName()');
        AreaCodeModel.getCodeByName(state)
          .then(makeSyncRequest)
          .then(HousePriceModel.storeInLocal)
          .catch();
        resolve();
      });
    }

    // start a time-out loop function to get data and create markers synchronously
    function makeSyncRequest(res) {
      notify.startLoad(res.codes.length);
      var i = 0;
      (function getDataLoop (lim, i) {          
        setTimeout(function () {   
          HousePriceModel.getData(res.codes[i].code, res.codes[i].name, res.stateName)
            .then(infowindow.formatInfo.bind(null, res.codes[i].name, res.stateName, dataType, timeRange))
            .then(Marker.buildMarkers)
            .then(HousePriceModel.storeInLocal)
            .catch();

          i++;
          if (i < lim) {
            getDataLoop(lim, i);
          } 
          else {
            notify.finish();
          }
        }, 1000);
        return;
      })(10/*res.codes.length*/, i);
    }

  };

  return {
    init: init,
    executeInput: executeInput
  };

})(jQuery);

App.init();
