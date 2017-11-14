/**
 * @file 
 *
 * Listeners for User Events and provides functions for hiding and showing the bottom nav bar
 * 
 * MVP pattern category: View
 * requires: Presenter, Utils
 *
 */

var App = App || {};

App.ControlView = (function ($) {
  'use strict';

  var state;
  var dataType;
  var timeRange;

  // initialize listeners for the buttons in the app
  var init = function() {
    $('.js-search-location').unbind('submit').submit(function(e){
      e.preventDefault();
      console.log('logging execution');

      state = $( "#js-state option:selected" ).val();
      dataType = $( "#js-data-type option:selected" ).val();
      timeRange = $( "#js-year option:selected" ).val();

      App.Presenter.executeInput(state, dataType, timeRange);
    });

    $('.js-notify-pause-data-loading').click(function(e){
      e.preventDefault();
      log('stop data loading loop');
      App.Presenter.pauseDataLoad();
    });

    $('.js-notify-resume-data-loading').click(function(e){
      e.preventDefault();
      log('resume data loading loop');
      App.Presenter.resumeDataLoad(state);
    });

    $('.js-notify-continue-no-resume').click(function(e){
      e.preventDefault();
      log('resume data loading loop');
      App.Presenter.continue(state);
    });
  };

  // hide bottom navigation bar (bottom select bar)
  function hideControlView() {
    $('.js-nav').removeClass("slideInUp");
    $('.js-nav').addClass("slideOutDown");
  }

  // show bottom navigation bar (bottom select bar)
  function showControlView() {
    $('.js-nav').removeClass("slideOutDown");
    $('.js-nav').addClass("slideInUp");
  }

  return {
    init: init,
    hide: hideControlView,
    show: showControlView
  };

})(jQuery);
