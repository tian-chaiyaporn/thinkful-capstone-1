/* requires:
global.js
map.js
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

  var cacheData = {};
  var markerTitles = [];

  var buildMarkers = function(area, title, address, info, markerSize) {
    // assign current params in private scope variables
    currentArea = area;
    currentTitle  = title;
    currentAddress  = address;
    currentInfo = info;
    currentMarkerSize  = markerSize;

    if (area === 'All States' && stateRepo.getCache().hasOwnProperty(currentTitle)) {
      log("add to cache data");
      cacheData = stateRepo.getCache()[currentTitle];
    } else if (neighborhoodRepo.getCache().hasOwnProperty(currentArea)){
      if (neighborhoodRepo.getCache()[currentArea].hasOwnProperty(currentTitle))
        {cacheData = neighborhoodRepo.getCache()[currentArea][currentTitle];}
    } else {
      cacheData = {};
    }

    checkMarker(address)
      .then(getLatLng)
      .then(displayMarker)
      .catch(function(error){log(error);});
  };

  var checkMarker = function(address) {
    return new Promise(function(resolve, reject){
      // if marker already exist, change the content of the marker
      if (cacheData.hasOwnProperty('latLng')) {
        displayMarker(cacheData.latLng);
        reject("coordinates already exist");
        return;
      }
      else if (markerTitles.includes(currentTitle)) {
        markers
          .find(function(marker){return marker.title === currentTitle;})
          .infowindow
          .setContent(currentInfo);
        reject("markers already exists");
        return;
      } else {
        resolve(address);
      }
    });
  };

  var getLatLng = function(address) {
    return new Promise(function(resolve, reject){
      var geocoder = new google.maps.Geocoder();
      var latLng = [];
      geocoder.geocode({ 'address': address }, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
          latLng[0] = results[0].geometry.location.lat();
          latLng[1] = results[0].geometry.location.lng();
          if (currentArea === 'All States') {stateRepo.addToCache(latLng, [currentTitle, 'latLng']);}
          else {neighborhoodRepo.addToCache(latLng, [currentArea, currentTitle, 'latLng']);}
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
      markerColor = currentMarkerSize > 0 ? 'yellow' : 'lightblue';
    }

    var iconMarker = {
      path: google.maps.SymbolPath.CIRCLE,
      fillColor: markerColor,
      fillOpacity: 0.6,
      scaledSize: new google.maps.Size(currentMarkerSize, currentMarkerSize),
      scale: currentMarkerSize/denominator + 4,
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
    markerTitles.push(currentTitle);
    google.maps.event.addListener(marker, 'click', function() {
      removeInfowindows();
      this.infowindow.open(map, this);
    });
  };

  function removeInfowindows() {
    markers.map(function(marker){
      marker.infowindow.close();
    });
  }

  function clearMarkers() {
    markers.map(function(marker){
      marker.setMap(null);
    });
    markers = [];
  }

  return {
    buildMarkers: buildMarkers,
    removeInfowindows: removeInfowindows,
    clearMarkers: clearMarkers
  };

})(jQuery);
