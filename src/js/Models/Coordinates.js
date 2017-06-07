/**
 * @file 
 *
 * gets Coordinates based on address, and put in into a format ready for storage
 * 
 * MVP pattern category: Model
 * requires: AppStateManager, Utils
 *
 */

var App = App || {};

App.Coordinates = (function ($) {
	'use strict';

  // gets Coordinates based on address, and put in into a format ready for storage
	function getLatLng (area, args /* title, idType, code, housePrice */) {
		log('getLatLng()');
		// get search term for Latitude and Longitude
    var searchName = area === 'All States' ? '' : area;
    var address =  args.title + ', ' + searchName + ', United States';
    log(address);

    return new Promise(function(res, rej){
      var geocoder = new google.maps.Geocoder();
      var latLng = [];
      geocoder.geocode({ 'address': address }, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
          latLng[0] = results[0].geometry.location.lat();
          latLng[1] = results[0].geometry.location.lng();
          args.code.latLng = latLng;
          res({
          	'title': args.title,
          	'idType': args.idType,
          	'code': args.code,
          	'housePrice': args.housePrice,
          });
        } 
        else {
          rej("cannot find geocode");
        }
      }); // end geocode function
    }); // end promise
	}

	return {
		get: getLatLng
	};

})(jQuery);