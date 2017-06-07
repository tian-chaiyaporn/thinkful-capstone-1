/**
 * @file 
 *
 * Provides functions for Getting and Setting APP STATE in cache and local storage.
 * 
 * MVP pattern category: Model
 * requires: AppStateManager,
 *					 Utils,
 *					 Presenter (for creating notifications. This violates the architecture, but it is minor,
 *											although it may need to change if the app grows in the future)
 *
 */

var App = App || {};

App.AppStateStorage = (function ($) {
	'use strict';

	var APP_STATE = {
		'usa-states': [],
		'neighborhoods': [],
		'house-prices': []
	};

	function getAppState (area) {
		return new Promise(function(res, rej) {
			// if there is no data, check localStorage. If nothing, returns null
			if (APP_STATE['house-prices'].length === 0) {
				getLocalStorageData()
					.then(function(localData) {
						// if local data is not empty, put it in cache and recall function
						if (localData['house-prices'].length > 0) {
							APP_STATE = localData;
							App.AppStateManager.get(area);
						} else {
							res(null);
						}
					});
			}
			// if usa-states data exists in cache, return usa state data from cache
			else if (APP_STATE['usa-states'].length > 0 && area === 'All States') {
				log('data is not empty');
				getCachedUsaStateData()
					.then(function(data) {res(data);})
					.catch(function(){log('failed to load cache data for usa states');});
				return;
			} 
			else { 
				var metaData = getUsaStateMetaDataByName(area);
				// if corresponding stateID exist in neighborhoods, return neighborhood data from cache
				if (APP_STATE.neighborhoods.find(function(e){return e.stateId === metaData.id;})) {
					log('neighborhood data is not empty');
					getCachedNeighborhoodData(area, metaData.id)
						.then(function(data) {res(data);})
						.catch(function(){log('failed to load cache data for neighborhoods');});
					return;
				}
				// if no data exists prior to function call, return null
				res(null);
			}
		});
	}

	// query function: get usa-state data from cache
	function getCachedUsaStateData () {
		log('getCachedUsaStateData from cache');
		return new Promise (function(res, rej) {
			var data = APP_STATE['house-prices']
				// filter data based on stateID and return relevant data objects
				.filter(function(priceData) {return priceData.hasOwnProperty('stateId') === true;})
				// add corresponding titles and latLngs to data objects 
				.map(function(priceData) {
					var metaData = getUsaStateMetaDataById(priceData.stateId);
					priceData.title = metaData.title;
					priceData.latLng = metaData.latLng;
					return priceData;
				});
			res(data);
		});
	}

	// query function: get neighborhoods data from cache
	function getCachedNeighborhoodData (area, stateId) {
		log('getCachedNeighborhoodData from cache');
		return new Promise (function(res, rej) {			
			var data = APP_STATE.neighborhoods
				.filter(function(neighborhood) {
					return neighborhood.stateId === stateId;
				})
				.map(function(neighborhood){
					var priceData = APP_STATE['house-prices']
						.find(function(hPrice){return hPrice.neighborhoodId === neighborhood.id;});
					priceData.title = neighborhood.title;
					priceData.latLng = neighborhood.latLng;
					return priceData;
				});
			res(data);
		});
	}

	// query function: get use-state metadata from cache by name
	function getUsaStateMetaDataByName (name) {
		return APP_STATE['usa-states'].find(function(usaState) {return usaState.title === name;});
	}

	// query function: get use-state metadata from cache by id
	function getUsaStateMetaDataById (id) {
		return APP_STATE['usa-states'].find(function(usaState) {return usaState.id === id;});
	}

	// query function: get data from browser's localStorage
	function getLocalStorageData () {
		log('getLocalStorage()');
		return new Promise(function(res) {
			var data = JSON.parse(localStorage.getItem('HousePriceData'));
			res(data);
		}); 
	}

	// query function: get latitude and longitude from cached data by name
	function getLatLngByName (name) {
		var UsaStateData = APP_STATE['usa-states'].find(function(state){return state.title === name;});
		if (!UsaStateData) {
			var errorMessage = 'please download the complete "All States" data first (it only takes 50 seconds)';
			App.Presenter.createNotification(0, 0, 0, errorMessage);
			throw new Error('please download "All States" data first');
		}
		return Promise.resolve(UsaStateData.latLng);
	}

	// add function: atomically add data to APP_STATE as cache
	// args: title, idType, code, housePrice
	function setAppState (area, args) {
		switch (args.idType) {
			case 'stateId':
				APP_STATE['usa-states'].push(args.code);
				break;
			case 'neighborhoodId':
				var metaData =	getUsaStateMetaDataByName(area);
				args.code.stateId = metaData.id;
				APP_STATE.neighborhoods.push(args.code);
				break;
		}
		APP_STATE['house-prices'].push(args.housePrice);
		// format data point to pass to AppStateManager for rendering
		args.housePrice.title = args.title;
		args.housePrice.latLng = args.code.latLng;
		return Promise.resolve(args.housePrice);
	}

	// add function: add cached data to browser's localStorage
	function setLocalStorageData () {
		log('addToLocalStorage()');
    return new Promise(function(res, rej){ 
      if (storageAvailable('localStorage')) {
        localStorage.setItem('HousePriceData', JSON.stringify(APP_STATE));
        res();
      } else {
      	rej('localStorage do not exist in this browser');
      }
    });
	}

	return {
		get: getAppState,
		set: setAppState,
		getLatLngByName: getLatLngByName,
		storeInLocal: setLocalStorageData
	};

})(jQuery);
