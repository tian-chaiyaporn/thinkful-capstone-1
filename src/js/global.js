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

/**
 * this function is taken from: 
 * http://stackoverflow.com/questions/149055/how-can-i-format-numbers-as-money-in-javascript
 * written by VisioN
 *
 * Number.prototype.format(n, x, s, c)
 * 
 * @param integer n: length of decimal
 * @param integer x: length of whole part
 * @param mixed   s: sections delimiter
 * @param mixed   c: decimal delimiter
 */
Number.prototype.format = function(n, x, s, c) {
    var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\D' : '$') + ')',
        num = this.toFixed(Math.max(0, ~~n));

    return (c ? num.replace('.', c) : num).replace(new RegExp(re, 'g'), '$&' + (s || ','));
};
