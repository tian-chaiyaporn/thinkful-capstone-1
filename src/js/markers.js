/* requires:
global.js
*/

var mark = (function($){
  'use strict';

  // set private scope variables for caching
  var Coordinates = [];
  var markers = [];
  var currentArea;
  var currentTitle;
  var currentAddress;
  var currentInfo;
  var currentMarkerSize;

  var buildMarkers = function(area, title, address, info, markerSize) {
    // assign current params in private scope variables
    currentArea = area;
    currentTitle  = title;
    currentAddress  = address;
    currentInfo = info;
    currentMarkerSize  = markerSize;

    checkMarker()
      .then(getLatLng)
      .then(displayMarker)
      .catch(function(error){log(error);});
  };

  var checkMarker = function() {
    return new Promise(function(resolve, reject){
      // if marker already exist, change the content of the marker
      if (Coordinates.hasOwnProperty(currentTitle)) {
        markers
          .find(function(marker){return marker.title === currentTitle;})
          .infowindow
          .setContent(currentInfo);
        reject("markers already exists");
        return;
      } else {
        resolve();
      }
    });
  };

  var getLatLng = function() {
    return new Promise(function(resolve, reject){
      var geocoder = new google.maps.Geocoder();
      var latLng = [];
      geocoder.geocode({ 'address': currentAddress }, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
          latLng[0] = results[0].geometry.location.lat();
          latLng[1] = results[0].geometry.location.lng();
          Coordinates[currentTitle] = latLng;
          resolve(latLng);
        } 
        else {
          reject("cannot find geocode");
          return;
        }
      });
    });
  };

  var displayMarker = function(latLng) {
    log("displayMarker()");
    var myinfowindow = new google.maps.InfoWindow({
      content: currentInfo
    });

    var denominator = 100;
    var markerColor = 'red';

    if (currentArea !== 'All States'){
      var center = new google.maps.LatLng(latLng[0], latLng[1]);
      map.panTo(center);
      map.setZoom(8);
      denominator = 500;
      markerColor = 'yellow';
    }

    var iconMarker = {
      path: google.maps.SymbolPath.CIRCLE,
      fillColor: markerColor,
      fillOpacity: 0.6,
      scaledSize: new google.maps.Size(currentMarkerSize, currentMarkerSize),
      scale: currentMarkerSize/denominator + 4,
      strokeColor: 'white',
      strokeWeight: 0
    };

    var marker = new google.maps.Marker({
      position: {lat: latLng[0], lng: latLng[1]},
      icon: iconMarker,
      map: map,
      title: currentTitle,
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
  };

  function removeMarkers() {
    markers.map(function(marker){
      marker.infowindow.close();
    });
  }

  return {
    buildMarkers: buildMarkers,
    removeMarkers: removeMarkers
  };

})(jQuery);
