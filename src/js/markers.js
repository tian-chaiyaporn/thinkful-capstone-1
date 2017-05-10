/* requires:
global.js
*/

var mark = (function($){
  'use strict';

  // set scope variables for caching
  var Coordinates = [];
  var markers = [];

  function buildMarkers(area, title, address, info, markerSize) {
    if (!$.isEmptyObject(Coordinates[title])) {
      markers
        .find(function(marker){return marker.title === title;})
        .infowindow
        .setContent(info);
      return;
    }
    getLatLng(address, title, function(){
      displayMarker(area, title, info, markerSize);
    });
  }

  function getLatLng(address, title, cb) {
    log("getLatLng()");
    var geocoder = new google.maps.Geocoder();
    var latLng = [];
    geocoder.geocode({ 'address': address }, function (results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        latLng[0] = results[0].geometry.location.lat();
        latLng[1] = results[0].geometry.location.lng();
        Coordinates[title] = latLng;
        cb();
      }
    });
  }

  function displayMarker(area, title, info, markerSize) {
    log("displayMarker()");
    var myinfowindow = new google.maps.InfoWindow({
      content: info
    });

    var denominator = 100;
    var markerColor = 'red';

    if (area !== 'All States'){
      var center = new google.maps.LatLng(Coordinates[title][0], Coordinates[title][1]);
      map.panTo(center);
      map.setZoom(8);
      denominator = 500;
      markerColor = 'yellow';
    }

    var iconMarker = {
      path: google.maps.SymbolPath.CIRCLE,
      fillColor: markerColor,
      fillOpacity: 0.6,
      scaledSize: new google.maps.Size(markerSize, markerSize),
      scale: markerSize/denominator + 4,
      strokeColor: 'white',
      strokeWeight: 0
    };

    var marker = new google.maps.Marker({
      position: {lat: Coordinates[title][0], lng: Coordinates[title][1]},
      icon: iconMarker,
      map: map,
      title: title,
      infowindow: myinfowindow
    });

    marker.setAnimation(google.maps.Animation.BOUNCE);
    // set animation time out so it drops only once
    setTimeout(function(){ marker.setAnimation(null); }, 400);

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

  function moveToLocation(area) {
    log('moveToLocation()');
    if ($.isEmptyObject(Coordinates[area])){
      var address = area + ' United States';
      getLatLng(address, area, function(){
        moveToLocation(area);
      });
    } else {
      var center = new google.maps.LatLng(Coordinates[area][0], Coordinates[area][1]);
      map.panTo(center);
      map.setZoom(6);
    } 
  }

  return {
    buildMarkers: buildMarkers,
    removeMarkers: removeMarkers,
    moveToLocation: moveToLocation
  };

})(jQuery);
