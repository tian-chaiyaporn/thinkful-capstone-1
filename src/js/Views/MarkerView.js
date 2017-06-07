/**
 * @file 
 *
 * Create, store, and provide functions to control Google Map Markers
 * 
 * MVP pattern category: View
 * requires: Presenter, Utils
 *
 */

var App = App || {};

App.MarkerView = (function ($) {
	'use strict';

	var markers = [];

  // kick off the process for creating a marker
  function setMarker(data /*latLng, latlng*/, args /*info, area, markerSize*/) {
  	console.log('setMarker');
  	formatInfoWindow(args.info)
  		.then(createMarker.bind(null, args, data))
  		.catch();
  	Promise.resolve();
  }

  // create actual marker with the required settings
  function createMarker(args, data, formattedInfo) {
    var denominator = 100;
    var markerColor = 'red';

    if (args.area !== 'All States'){
      var center = new google.maps.LatLng(data.latLng[0], data.latLng[1]);
      denominator = 400;
      markerColor = 'yellow';
      markerColor = args.markerSize > 0 ? 'yellow' : 'lightblue';
    }

    var iconMarker = {
      path: google.maps.SymbolPath.CIRCLE,
      fillColor: markerColor,
      fillOpacity: 0.6,
      scaledSize: new google.maps.Size(args.markerSize, args.markerSize),
      scale: args.markerSize/denominator + 4,
      strokeWeight: 0
    };

  	var marker = new google.maps.Marker({
      position: {lat: data.latLng[0], lng: data.latLng[1]},
      icon: iconMarker,
      map: App.MapView.mapObject(),
      title: data.title,
      infowindow: formattedInfo
    });

    marker.setAnimation(google.maps.Animation.BOUNCE);
    setTimeout(function(){ marker.setAnimation(null); }, 400);

    markers.push(marker);
    google.maps.event.addListener(marker, 'click', function() {
      clearInfoWindow();
      this.infowindow.open(App.MapView.mapObject(), this);
    });
    Promise.resolve();
  }

  function formatInfoWindow(info) {
  	var myinfowindow = new google.maps.InfoWindow({
      content: info
    });
    return Promise.resolve(myinfowindow);
  }

  function clearInfoWindow() {
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
		setMarker: setMarker,
    clearMarkers: clearMarkers,
    clearInfoWindow: clearInfoWindow
	};

})(jQuery);