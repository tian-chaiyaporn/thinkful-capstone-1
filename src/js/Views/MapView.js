/**
 * @file 
 *
 * Provides functions relating to building and navigating Google Map
 * 
 * MVP pattern category: View
 * requires: Presenter, Settings, Utils
 *
 */

var App = App || {};

App.MapView = (function ($) {
	'use strict';

	var mapObject;
  var settings =  MAP_SETTINGS;

  function buildMap() {
    settings.mapcanvas = $(".js-gmap");
    var mapOptions = $.extend({}, settings.mapDefaults, {
      zoom: settings.zoom,
      center: new google.maps.LatLng(settings.latCenter, settings.lonCenter),
      zoomControlOptions: {position: google.maps.ControlPosition.LEFT_CENTER},
      maxZoom: settings.maxZoom,
      minZoom: settings.minZoom,
      styles: MAP_STYLE
    });
    mapObject = new google.maps.Map(settings.mapcanvas[0], mapOptions);
  }

  function moveToLocation(latLng) {
    log('moveToLocation()');
    var center = new google.maps.LatLng(latLng[0], latLng[1]);
    mapObject.panTo(center);
  }

  function zoom(level) { mapObject.setZoom(level); }

  function getMapObject() { return mapObject; }

	return {
		build: buildMap,
    mapObject: getMapObject,
    zoom: zoom,
    move: moveToLocation
	};

})(jQuery);