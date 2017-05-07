/* requires:
global.js
*/

var notify = (function($) {
  'use strict';

  var waitString = ['Because this is a free service. ',
                    'There is an API limitation, please wait for '];

  var waitStringAfter = ' seconds for data to load';

  var noDataString = "sorry, there doesn't seem to be data for @state";

  function noData(state) {
    $('.js-notify-message').html(noDataString.replace('@state', state));
    $('.js-notify-timer').html('');
    $('.js-notify-message-last').html('');
    $('.js-notify').removeClass("slideOutDown");
    $('.js-notify').addClass("slideInUp");
  }

  function waitTime(n) {
    // set countdown animation
    $('.js-notify-message').html(waitString.join(''));
    timer(n);
    $('.js-notify-message-last').html(waitStringAfter);
    $('.js-notify').removeClass("slideOutDown");
    $('.js-notify').addClass("slideInUp");
  }

  function timer(n) {
    var timeleft = n;
    var elem = document.getElementById("countdowntimer");
    
    var downloadTimer = setInterval(function(){
      timeleft--;
      elem.classList.add('flipInX');
      elem.innerHTML = timeleft;
      setTimeout(function(){
        elem.classList.remove('flipInX');
      }, 980);

      $('.js-search-location').submit(function(e){
        e.preventDefault();
        clearInterval(downloadTimer);
      });
      
      if(timeleft <= 0) {
        $('.js-notify-message').html('');
        clearInterval(downloadTimer);
        elem.innerHTML = 'sorry';
        $('.js-notify-message-last').html('please wait a little bit more, your connection seems to be unstable...');
      }
    },1000);
  }

  // set this function after ajax resursive loading finishes
  // and when press close button
  function waitFinished() {
    $('.js-notify').removeClass("slideInUp");
    $('.js-notify').addClass("slideOutDown");
  }

  return {
    noData: noData,
    waitTime: waitTime,
    waitFinished: waitFinished
  };

})(jQuery);
