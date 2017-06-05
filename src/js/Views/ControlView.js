var App = App || {};

App.ControlView = (function ($) {
  'use strict';

  var state;
  var dataType;
  var timeRange;

  var init = function() {
    $('.js-search-location').submit(function(e){
      e.preventDefault();

      state = $( "#js-state option:selected" ).val();
      dataType = $( "#js-data-type option:selected" ).val();
      timeRange = $( "#js-year option:selected" ).val();

      App.Presenter.executeInput(state, dataType, timeRange);
    });

    $('.js-notify-pause-loop').click(function(e){
      e.preventDefault();
      log('stop data loading loop');
      App.Presenter.pauseDataLoad();
    });

    $('.js-notify-resume-loop').click(function(e){
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

  function hideControlView() {
    $('.js-nav').removeClass("slideInUp");
    $('.js-nav').addClass("slideOutDown");
  }

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
