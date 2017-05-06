/* requires:
global.js
map.js
*/

var makeAjax = (function($){
  
  'use strict';

  // ajax must be synchronous due to API limitation
  // this function is a recursive function calling itself.
  function sync(urlArray, stateNameArray, i, time, dataType) {
    if (i >= 3/*Object.keys(stateCodes).length*/) {
      return;
    } else {
      // set timeout to wait 1 second between call due to limitation
      setTimeout(function() {
        // first, send an ajax to negate the setTimeout effect that
        // pauses the first ajax call at one second
        if (i === -1) {
          log("make sync request: initialize -1 to negate setTimeout effect");
          // reset i to 0 to avoid error
          i = i+1;
          $.ajax({
            // this send request for urlArray[0]
            url: urlArray[i+1],
            success: function (res) {
              // this also send request for urlArray[0]
              sync(urlArray, stateNameArray, i, time, dataType);
              log(res);
              if (res.dataset.dataset_code.charAt(0)==='S') {
                getStateData.cleanStateData(res, stateNameArray[i], time, dataType);
              } else {

              }
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
              i = i+1;
              // recursive function is used to create synchronous operation
              sync(urlArray, stateNameArray, i, time, dataType);
              if (res.dataset.dataset_code.charAt(0)==='S') {
                getStateData.cleanStateData(res, stateNameArray[i], time, dataType);
              } else {

              }
            },
            error: function () {
              log("state data failed: " + i);
            } 
          });
        } // end second if-else
      }, 1000); // end setTimeout
    } // end first if-else
  } // end function

  return {
    sync: sync
  };

})(jQuery);
