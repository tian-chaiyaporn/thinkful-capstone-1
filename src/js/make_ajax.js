/* requires:
global.js
map.js
markers.js
notify.js
*/

var makeAjax = (function($) {
  'use strict';

  function asyncGetCode(url) {
    $.ajax({
      url: url,
      method: 'GET',
      dataType: "json",
      success: function (data) {
        request.cleanCode(data);
      },
      error: function() {
        log("fail to get code");
      }
    });
  }

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
    if (i >= urlArray.length || stop === 1) {
      console.log('all data has loaded');
      notify.waitFinished();
      if (i >= urlArray.length) {stop = 1; $('.js-search-btn').html('Search');}
      if (stop === 1) {$('.js-search-btn').html('Search');}
      return;
    } else {
      // set timeout to wait 1 second between call due to limitation
      setTimeout(function() {
        // first, send an ajax to negate the setTimeout effect that
        // pauses the first recursive ajax request at 1 second
        if (i === -1) {
          log("make sync request: initialize -1 to negate setTimeout effect");
          // reset i to 0 to avoid error
          i = i+1;
          $.ajax({
            url: urlArray[i+1],
            success: function (res) {
              sync(area, urlArray, nameArray, i);
              info.cleanData(area, res, nameArray[i]);
            },
            error: function () {
              log("initialize sync ajax failed: " + i);
              log("moving on to new ajax for next data:");
              sync(area, urlArray, nameArray, i);
            } 
          });
        }
        // data can now gets processed after 1 second for each request
        else {
          log("make sync request: " + i);
          $.ajax({
            url: urlArray[i],
            method: 'GET',
            dataType: "json",
            success: function (res) {
              info.cleanData(area, res, nameArray[i]);
              i = i+1;
              // recursive function is used to create synchronous operation
              sync(area, urlArray, nameArray, i);
            },
            error: function () {
              log("load data failed: " + i + "for" + nameArray[i]);
              log("moving on to new ajax for next data:");
              i = i+1;
              sync(area, urlArray, nameArray, i);
            } 
          });
        } // end second if-else
      }, 1000); // end setTimeout
    } // end first if-else
  } // end sync function

  stopAjax();

  return {
    sync: sync,
    asyncGetCode: asyncGetCode
  };

})(jQuery);
