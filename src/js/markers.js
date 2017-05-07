/* requires:
global.js
*/

var mark = (function($){
  'use strict';

  // set scope variables for caching
  var Coordinates = [];

  function buildMarkers(area, title, address, info){
    if (!$.isEmptyObject(Coordinates[title])) {
      markers
        .find(function(marker){return marker.title === title;})
        .infowindow
        .setContent(info);
      return;
    }
    var geocoder = new google.maps.Geocoder();
    var latLng = [];
    geocoder.geocode({ 'address': address }, function (results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        latLng[0] = results[0].geometry.location.lat();
        latLng[1] = results[0].geometry.location.lng();
        Coordinates[title] = latLng;
        displayMarker(area, latLng, title, info);
      }
    });
  }

  var markers = [];

  function displayMarker(area, latLng, title, info) {
    var myinfowindow = new google.maps.InfoWindow({
      content: info
    });

    if (area !== 'All States'){
      var center = new google.maps.LatLng(latLng[0], latLng[1]);
      map.panTo(center);
      map.setZoom(8);
    }

    var marker = new google.maps.Marker({
      position: {lat: latLng[0], lng: latLng[1]},
      map: map,
      title: title,
      infowindow: myinfowindow
    });

    log('marker for ' + title);
    log(marker);
    markers.push(marker);

    google.maps.event.addListener(marker, 'click', function() {
      removeMarkers();
      this.infowindow.open(map, this);
    });
  }

  function removeMarkers() {
    markers.map(function(marker){
      marker.infowindow.close();
    });
  }

  function moveToLocation(area){
    var lat = Coordinates[area][0];
    var lng = Coordinates[area][1];
    var center = new google.maps.LatLng(lat, lng);
    // using global variable:
    map.panTo(center);
    map.setZoom(6);
  }

  function zoomOut(){
    var lat = 37.09024;
    var lng = -96.712891;
    var center = new google.maps.LatLng(lat, lng);
    // using global variable:
    map.panTo(center);
    map.setZoom(4);
  }

  return {
    buildMarkers: buildMarkers,
    removeMarkers: removeMarkers,
    moveToLocation: moveToLocation,
    zoomOut: zoomOut
  };

})(jQuery);
