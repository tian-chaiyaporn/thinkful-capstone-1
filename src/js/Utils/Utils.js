/**
 * @file 
 *
 * Provides Global Utility functions
 * 
 * MVP pattern category: helper functions
 *
 */

/**
 * @global
 *
 * log(s)
 * This Function check whether a type of local storage is available
 * 
 * @param s: input log
 */
var log = function(s){
  console.log(s);
};

/**
 * @global
 *
 * this function is taken from: 
 * https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
 *
 * storageAvailable(type)
 * This Function check whether a type of local storage is available
 * 
 * @param string type: input type of local storage in browser
 */
var storageAvailable = function(type) {
  var storage;
  try {
    storage = window[type];
    var x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  }
  catch(e) {
    return e instanceof DOMException && (
      // everything except Firefox
      e.code === 22 ||
      // Firefox
      e.code === 1014 ||
      // test name field too, because code might not be present
      // everything except Firefox
      e.name === 'QuotaExceededError' ||
      // Firefox
      e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage.length !== 0;
    }
};

/**
 * @global
 *
 * percentChg(x, y)
 * This Function returns Percentage Change, if the input is 0, returns 0
 * 
 * @param integer x: input of current number
 * @param integer y: input of previous number
 */
var percentChg = function(x, y) {
  return y !== 0 ? (x-y)/(x+y)*100 : 0;
};

/**
 * @global
 *
 * this function is taken from: 
 * http://stackoverflow.com/questions/149055/how-can-i-format-numbers-as-money-in-javascript
 * written by VisioN
 *
 * Number.prototype.format(n, x, s, c)
 * This Function format number string with Commas and Decimals
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

/**
 * @global
 *
 * this function is taken from: https://gist.github.com/CalebGrove/c285a9510948b633aa47
 * for transforming state name to its abbreviation and vice versa
 *
 * abbrState(input, to)
 * This Function turn input state into its corresponding abbreviated name
 * 
 * @param string input: input of state name or state abbreviation
 * @param string to: input of the returned type (abbr or name)
 */
var abbrState = function(input, to){
    var states = USA_STATES_ABBR;

    if (to == 'abbr'){
        input = input.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
        for(i = 0; i < states.length; i++){
            if(states[i][0] == input){
                return(states[i][1]);
            }
        }    
    } else if (to == 'name'){
        input = input.toUpperCase();
        for(i = 0; i < states.length; i++){
            if(states[i][1] == input){
                return(states[i][0]);
            }
        }    
    }
};
