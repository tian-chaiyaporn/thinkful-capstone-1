/* requires:
global.js
*/

// gmap function taken and modified from https://gist.github.com/lekkerduidelijk/9831313

var map,
gmap = (function($){
  'use strict';

  var settings =  {
    mapDefaults: {
      panControl:         false,
      zoomControl:        true,
      zoomControlOptions: true,
      scaleControl:       false,
      mapTypeControl:     false,
      streetViewControl:  false,
      scrollwheel:        false,
      zoom:               4,
      maxZoom:            16,
      minZoom:            3
    },
    mapcanvas: 0,

    // Coordinates for center of NL
    latCenter : 37.09024,
    lonCenter : -96.712891
  };

  function init(){
    log('gmap.init() loaded');

    settings.mapcanvas = $(".js-gmap");

    // Load Google Maps API async
    if(settings.mapcanvas.length) {
      load();
    } else {
      log("gmap.init(): no mapcanvas found");
    }
  }

  function load(){
    log("gmap.load() success");

    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.id = 'new-gmap';
    script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAF1sRGF7ku7L3dKictevzxUTPWc2YF6NI&' +
        'callback=gmap.build';
    document.body.appendChild(script);
  }

  function build(){
    log("gmap.build() success");

    var mapOptions = $.extend({}, settings.mapDefaults, {
      zoom: settings.zoom,
      center: new google.maps.LatLng(settings.latCenter,settings.lonCenter),
      zoomControlOptions: {position: google.maps.ControlPosition.LEFT_CENTER},
      maxZoom: settings.maxZoom,
      minZoom: settings.minZoom,
      styles: []
    });
    map = new google.maps.Map(settings.mapcanvas[0], mapOptions);
  }

  return {
    init: init,
    build: build
  };

})(jQuery);

// run gmap.init() onload