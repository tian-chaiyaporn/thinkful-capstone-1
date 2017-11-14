/**
 * @file
 *
 * Various user notifications for app to interact with users using feedbacks
 *
 * MVP pattern category: View
 * requires: Presenter, Utils
 *
 */

var App = App || {};

App.NotificationView = (function ($) {
	'use strict';

  var downloadTimer;
	var notifyMessage = 'Because this is a free service, we can only get data one at a time. Please wait for ';
  var notifyMessageEnd = 'seconds for data to load. Thank you for your understanding.';
  var noDataString = "sorry, there doesn't seem to be data for @state";
  var unstableConnect = "please wait a little bit more, your connection seems to be unstable...";
  var resumeLoadMessage = 'Data is incomplete for:';
  var resumeLoadCustom = '@area : you have loaded @existingDataLength out of @allData. <br/>If you have waited until timer ends, or if you have enough data, please do not resume. <br />Incomplete data is an error from out provider.';
  var resumeLoadBtn = $('#resume-buttons').html();

  // notify user of how long it takes for data to load
	function getWaitTime(n) {
    // set countdown animation
    $('.js-notify-message').html(notifyMessage);
    $('.js-notify-message-middle').html('');
    timer(n);
    $('.js-notify-message-last').html(notifyMessageEnd);
    $('.js-notify').removeClass("slideOutDown");
    $('.js-notify').addClass("slideInUp");
  }

  // close notification window
  function closeNotification() {
    $('.js-notify').removeClass("slideInUp");
    $('.js-notify').addClass("slideOutDown");
  }

  // notify user that data is not available for a particular usa-state
  function noData(state) {
    $('.js-notify-message').html(noDataString.replace('@state', state));
    $('.js-notify-message-middle').html('');
    $('.js-notify-timer').html('');
    $('.js-notify-message-last').html('');
    $('.js-notify').removeClass("slideOutDown");
    $('.js-notify').addClass("slideInUp");
  }

  // notify user that not all data has loaded, and ask if user wants to continue the loading
  // or just leave it as is
  function resume(area, totalDataAvailable, existingData) {
    $('.js-notify-message').html(resumeLoadMessage);
    $('.js-notify-message-middle').html(resumeLoadCustom
      .replace('@area', area)
      .replace('@existingDataLength', existingData.length)
      .replace('@allData', totalDataAvailable)
    );
    $('.js-notify-timer').html('');
    $('.js-notify-message-last').html(resumeLoadBtn);
    $('.js-notify').removeClass("slideOutDown");
    $('.js-notify').addClass("slideInUp");
  }

  // notify user with a message (for error handling that can be solved by user)
  function customMessage(message) {
    $('.js-notify-message').html(message);
    $('.js-notify-message-middle').html('');
    stopTimer();
    $('.js-notify-timer').html('sorry');
    $('.js-notify-message-last').html('');
    $('.js-notify').removeClass("slideOutDown");
    $('.js-notify').addClass("slideInUp");
  }

  // countdown timer: supply n as time
  function timer(n) {
    var timeleft = n;
    var elem = document.getElementById("countdowntimer");

    downloadTimer = setInterval(function(){
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
        $('.js-notify-message-last').html(unstableConnect);
      }
    },1000);
  }

  // countdown timer: stop timer
  function stopTimer() {
    clearInterval(downloadTimer);
  }

  return {
    startLoad: getWaitTime,
    noData: noData,
    customMessage: customMessage,
    resumeLoadQuestion: resume,
    close: closeNotification
  };

})(jQuery);