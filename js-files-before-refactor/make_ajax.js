/* requires:
global.js
map.js
markers.js
notify.js
*/

var makeAjax = (function($) {
  'use strict';

  var asyncGetCode = function(url) {
    var promise = new Promise(function(res, rej){
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
    return promise;
  };

  // function to stop calls if search is submitted more than once
  var stop = 0;
  function stopAjax() {
    $('.js-search-location').submit(function(e){
      e.preventDefault();
      if (stop === 1){
        stop = 0;
      } else {
        $('.js-search-btn').html('Search');
        stop = 1;
      }
    });
  }

  // ajax for house price data must be synchronous due to API limitation
  // hence, this function is a recursive function calling itself.
  function sync(area, urlArray, nameArray, i) {
    console.log(stop);
    if (stop === 1) {
      console.log('download stopped');
      notify.waitFinished();
      notify.button('Search');
      return;
    } 
    else if(i >= urlArray.length) {
      console.log('all data has loaded');
      notify.waitFinished();
      notify.button('Search');
      stop = 1; 
      if (area === 'All States') {stateRepo.storeInLocal();}
      else {neighborhoodRepo.storeInLocal();}
      return;
    }
    else {
      setTimeout(function() {
          log("make sync request: " + i);
          $.ajax({
            url: urlArray[i],
            method: 'GET',
            dataType: "json",
            success: function (res) {
              log(res);
              info.cleanData(area, res, nameArray[i]);
              i = i+1;
              sync(area, urlArray, nameArray, i);
            },
            error: function () {
              log("load data failed for: " + nameArray[i] + " moving on to new ajax for next data.");
              i = i+1;
              sync(area, urlArray, nameArray, i);
            } 
          });
      }, 1000); // end setTimeout
    } // end first if-else
  } // end sync function

  stopAjax();

  return {
    sync: sync,
    asyncGetCode: asyncGetCode
  };

})(jQuery);
