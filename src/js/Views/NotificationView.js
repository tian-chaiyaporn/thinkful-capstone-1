var App = App || {};

App.NotificationView = (function ($) {
	'use strict';

  var downloadTimer;
	var notifyMessage = 'Because this is a free service there is an API limitation. Please wait for ';
  var notifyMessageEnd = 'seconds for data to load';
  var noDataString = "sorry, there doesn't seem to be data for @state";
  var unstableConnect = "please wait a little bit more, your connection seems to be unstable...";
  var resumeLoadMessage = 'It seems like you stopped loading before all data has loaded for:';
  var resumeLoadCustom = '@area : you have loaded @existingDataLength out of @allData. Would you like to resume?';
  var resumeLoadBtn = $('#resume-buttons').html();

	function getWaitTime(n) {
    // set countdown animation
    $('.js-notify-message').html(notifyMessage);
    $('.js-notify-message-middle').html('');
    timer(n);
    $('.js-notify-message-last').html(notifyMessageEnd);
    $('.js-notify').removeClass("slideOutDown");
    $('.js-notify').addClass("slideInUp");
  }

  function closeNotification() {
    $('.js-notify').removeClass("slideInUp");
    $('.js-notify').addClass("slideOutDown");
  }

  function noData(state) {
    $('.js-notify-message').html(noDataString.replace('@state', state));
    $('.js-notify-message-middle').html('');
    $('.js-notify-timer').html('');
    $('.js-notify-message-last').html('');
    $('.js-notify').removeClass("slideOutDown");
    $('.js-notify').addClass("slideInUp");
  }

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

  function customMessage(message) {
    $('.js-notify-message').html(message);
    $('.js-notify-message-middle').html('');
    stopTimer();
    $('.js-notify-timer').html('sorry');
    $('.js-notify-message-last').html('');
    $('.js-notify').removeClass("slideOutDown");
    $('.js-notify').addClass("slideInUp");
  }

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