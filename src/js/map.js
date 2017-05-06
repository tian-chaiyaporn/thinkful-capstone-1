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

    // Coordinates for center of US
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
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.id = 'new-gmap';
    script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAF1sRGF7ku7L3dKictevzxUTPWc2YF6NI&' +
        'callback=gmap.build';
    document.body.appendChild(script);
  }

  function build(){
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

  // set scope variables for caching
  var StateLatLng = [];
  var AreaLatLng = [];

  function buildMarkers(title, address, info){
    // if StateLatLng already exist, skip this step
    var geocoder = new google.maps.Geocoder();
    var latLng = [];
    geocoder.geocode({ 'address': address }, function (results, status) {
        
        if (status == google.maps.GeocoderStatus.OK) {
            latLng[0] = results[0].geometry.location.lat();
            latLng[1] = results[0].geometry.location.lng();
            StateLatLng[title] = latLng;
            displayMarker(latLng, title, info);
        }
    });
  }

  function moveToLocation(lat, lng){
    var center = new google.maps.LatLng(lat, lng);
    // using global variable:
    map.panTo(center);
    map.setZoom(6);
  }

  var markers = []

  function displayMarker(latLng, title, info) {
    var myinfowindow = new google.maps.InfoWindow({
      content: info
    });

    var marker = new google.maps.Marker({
      position: {lat: latLng[0], lng: latLng[1]},
      map: map,
      title: title,
      infowindow: myinfowindow
    });

    markers.push(marker);

    google.maps.event.addListener(marker, 'click', function() {
      markers.map(function(marker){
        marker.infowindow.close();
      });
      this.infowindow.open(map, this);
    });
  }

  return {
    init: init,
    build: build,
    buildMarkers: buildMarkers
  };

})(jQuery);
