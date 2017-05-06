/* requires:
global.js
map.js
*/

var makeAjax = (function($){
  
  'use strict';

  function asyncGetCode(area, url, time, dataType) {
    $.ajax({
      url: url,
      method: 'GET',
      dataType: "json",
      success: function (data) {
        getData.getAreaData(area, data, time, dataType);
      },
      error: function() {
        log("fail to get code");
      }
    });
  }

  // ajax for house price data must be synchronous due to API limitation
  // hence, this function is a recursive function calling itself.
  function sync(area, urlArray, nameArray, i, time, dataType) {
    if (i >= 2/*Object.keys(stateCodes).length*/) {
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
              sync(area, urlArray, nameArray, i, time, dataType);
              getData.cleanData(area, res, nameArray[i], time, dataType);
            },
            error: function () {
              log("initialize sync ajax failed: " + i);
              log("moving on to new ajax for next data:");
              sync(area, urlArray, nameArray, i, time, dataType);
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
              getData.cleanData(area, res, nameArray[i], time, dataType);
              i = i+1;
              // recursive function is used to create synchronous operation
              sync(area, urlArray, nameArray, i, time, dataType);
            },
            error: function () {
              log("load data failed: " + i + "for" + nameArray[i]);
              log("moving on to new ajax for next data:");
              i = i+1;
              sync(area, urlArray, nameArray, i, time, dataType);
            } 
          });
        } // end second if-else
      }, 1000); // end setTimeout
    } // end first if-else
  } // end function

  return {
    sync: sync,
    asyncGetCode: asyncGetCode
  };

})(jQuery);
