// Global debug logger

// (function() {
// 'use strict';
// })();

var 
  debug = true,
  log = function(s){
  if(debug) {
    console.log(s);
  }
};

var percentChg = function(x, y) {
  return y !== 0 ? (x-y)/(x+y)*100 : 0;
};
