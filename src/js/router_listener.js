/**
 * @file 
 *
 * Initiate router when user chooses the parameters for searching house prices
 * dependencies: page.js by visionmedia: https://github.com/visionmedia/page.js
 *
 *
 * MVC pattern category: Controller
 *
 */

var router = (function($, page) {
  'use strict';

  var init = function() {
    page('/:dataType/:timeRange/:state', App.executeInput);

    $('.js-search-location').submit(function(e){
      e.preventDefault();

      var state = $( "#js-state option:selected" ).val();
      var dataType = $( "#js-data-type option:selected" ).val();
      var timeRange = $( "#js-year option:selected" ).val();

      Marker.clearMarkers();
      notify.waitFinished();

      page.redirect('/'+dataType+'/'+timeRange+'/'+state);
    });
  };

  return {
    init: init
  };

})(jQuery, page);
