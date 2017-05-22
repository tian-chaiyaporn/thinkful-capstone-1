// requires: Utils.js   Map.js

/**
 * @file
 * @constructor
 *
 * Construct Marker objects and store them in cache
 *
 *
 * MVC pattern category: View
 *
 */

var Marker = (function($){
  'use strict';

  // set private scope variables for caching
  var markers = [];

  var buildMarkers = function(args) {
    // currentArea = args.area;
    // currentTitle  = args.areaName;
    // currentInfo = args.info;
    // currentMarkerSize  = args.markerSize;

    checkMarker(args)
      .then(getLatLng)
      .then(displayMarker)
      .catch(function(error){log(error);});
  };

  var checkMarker = function(args) {
    // get data from cache
    var data = {};
    data = HousePriceModel.getCache();
    log(data);
    if (args.area === 'All States') {
      if(!$.isEmptyObject(data)) {
        data = data[args.areaName];
      }
    } else {
      if(!$.isEmptyObject(data) && data.hasOwnProperty(args.area)) {
        data = data[args.area];
        data = data.hasOwnProperty('neighborhoods') ? data.neighborhoods[args.areaName] : {};
      }
    }

    return new Promise(function(resolve, reject){
      var selectMarker ={};
      selectMarker = markers.find(function(marker){return marker.title === args.areaName;});
      // if marker already exist, change the content of the marker
      if (!$.isEmptyObject(selectMarker)) {
        selectMarker.infowindow.setContent(args.info);
        selectMarker.icon.scale = args.markerSize/100;
        selectMarker.setAnimation(google.maps.Animation.BOUNCE);
        setTimeout(function(){ selectMarker.setAnimation(null); }, 400);
        selectMarker.setVisible(true);
        reject("markers already exists");
        return;
      }
      // if data already contains lat and lng, simply display the markers
      else if (data.hasOwnProperty('latLng')) {
        displayMarker({
          'latLng': data.latLng,
          'argsObject': args
        });
        reject("coordinates already exist");
        return;
      }
      // else resolves, and go on to get latitude and longitude
      else {
        resolve(args);
      }
    });
  };

  var getLatLng = function(args) {
    // get search term for Latitude and Longitude and build markers
    var searchName = args.area === 'All States' ? '' : args.area;
    var address = args.areaName + ' ' + searchName + ' United States';
    log(address);

    return new Promise(function(resolve, reject){
      var geocoder = new google.maps.Geocoder();
      var latLng = [];
      geocoder.geocode({ 'address': address }, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
          latLng[0] = results[0].geometry.location.lat();
          latLng[1] = results[0].geometry.location.lng();
          if (args.area === 'All States') {
            HousePriceModel.addToCache(latLng, [args.areaName, 'latLng']);
          }
          else {
            HousePriceModel.addToCache(latLng, [args.area, 'neighborhoods', args.areaName, 'latLng']);
          }
          resolve({
            'latLng': latLng,
            'argsObject': args
          });
        } 
        else {
          reject("cannot find geocode");
          return;
        }
      });
    });
  };

  var displayMarker = function(args) {
    log('displayMarker()');
    var myinfowindow = new google.maps.InfoWindow({
      content: args.argsObject.info
    });
    var denominator = 100;
    var markerColor = 'red';

    if (args.argsObject.area !== 'All States'){
      var center = new google.maps.LatLng(args.latLng[0], args.latLng[1]);
      map.panTo(center);
      map.setZoom(8);
      denominator = 400;
      markerColor = 'yellow';
      markerColor = args.argsObject.markerSize > 0 ? 'yellow' : 'lightblue';
    }

    var iconMarker = {
      path: google.maps.SymbolPath.CIRCLE,
      fillColor: markerColor,
      fillOpacity: 0.6,
      scaledSize: new google.maps.Size(args.argsObject.markerSize, args.argsObject.markerSize),
      scale: args.argsObject.markerSize/denominator + 4,
      strokeWeight: 0
    };

    var marker = new google.maps.Marker({
      position: {lat: args.latLng[0], lng: args.latLng[1]},
      icon: iconMarker,
      map: map,
      title: args.argsObject.areaName,
      infowindow: myinfowindow
    });

    marker.setAnimation(google.maps.Animation.BOUNCE);
    // set animation time out so it drops only once
    setTimeout(function(){ marker.setAnimation(null); }, 400);

    markers.push(marker);
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
      marker.setVisible(false);
    });
  }

  return {
    buildMarkers: buildMarkers,
    removeInfowindows: removeInfowindows,
    clearMarkers: clearMarkers
  };

})(jQuery);
