var App = App || {};

App.AppStateManager = (function ($) {
	'use strict';

	var apiLoop;

	function getDataFromStorage (area) {
		console.log('getAppState()');
		// get data from cache
		App.AppStateStorage.get(area)
			.then(function(existingData) {
				if (!$.isEmptyObject(existingData)) {
					App.AreaCodeLoader.getCodesFromJSON(area)
						.then(function(totalDataAvailable) {
							// if dataset has not loaded completely
							if (existingData.length < totalDataAvailable.length) {
								//ask if user wants to continue loading
								App.Presenter.createNotification(area, totalDataAvailable.length, existingData);
								App.Presenter.toggleControlView('hide');
							}
							// else just render current data, if all data is in cache
							else {
								App.Presenter.closeNotification();
								renderExistingData(existingData).catch();
							}
						}).catch();
				}
				// otherwise, start loading data from the beginning
				else {
					App.AreaCodeLoader.getCodesFromJSON(area)
		          .then(getAndRenderDataFromAPI.bind(null, area, null))
		          .catch();
				}
			});
	}

	// create settings to notify user of how long to wait, and start loading data
	function getAndRenderDataFromAPI (area, existingDataLength, codeArray) {
		log('getAndRenderDataFromAPI');
		var timer = existingDataLength ? (codeArray.length - existingDataLength) : codeArray.length;
		App.Presenter.createNotification(area, timer);
		App.Presenter.toggleControlView('hide');
		var startingPoint = existingDataLength ? existingDataLength : 0;
		apiLoop = startLoadingData(codeArray.length, startingPoint, codeArray, area);
	}

	// synchronously load and render data as each datapoint gets returned
	function startLoadingData (lim, i, response, area) {
    var run = function() {
      App.Quandl.getDataByCode(response[i].code)
				.then(App.DataCleaner.formatQuandlData.bind(null, response[i]))
				.then(App.Coordinates.get.bind(null, area))
				.then(App.AppStateStorage.set.bind(null, area))
				.then(renderAppState)
				.then(App.AppStateStorage.storeInLocal)
				.catch(function(error){log(error);});
      i++;
      if (i === lim) {
      	stopLoadingData();
      	App.Presenter.closeNotification();
      	App.Presenter.toggleControlView('show');
      }
    };
    return setInterval(run, 1000);
  }

  function stopLoadingData () {
		clearInterval(apiLoop);
		App.AppStateStorage.storeInLocal();
	}

	function resumeLoadingData (area) {
		App.AppStateStorage.get(area)
			.then(renderExistingData)
			.then(function(currentDataLength) {
				App.AreaCodeLoader.getCodesFromJSON(area)
		      .then(getAndRenderDataFromAPI.bind(null, area, currentDataLength))
		      .catch();
			});
	}

	function continueWithoutLoadingData (area) {
		App.AppStateStorage.get(area)
			.then(renderExistingData)
			.catch();
	}

	function renderExistingData (data) {
		data.forEach(function(datum) {
			renderAppState(datum);
		});
		return	Promise.resolve(data.length);
	}
  
	// pass-through function to Presenter (for access control to Presenter)
	function renderAppState (args) {
		App.Presenter.render(args);
		return Promise.resolve();
	}

	// pass-through function to AppStateStorage (for access control to AppStateStorage)
	function getCoordinateByName (name) {
		var latLng = App.AppStateStorage.getLatLngByName(name);
		return Promise.resolve(latLng);
	}

	return {
		get: getDataFromStorage,
		getCoordinateByName: getCoordinateByName,
		stopLoadingData: stopLoadingData,
		resumeLoadingData: resumeLoadingData,
		continueWithoutLoadingData: continueWithoutLoadingData,
	};

})(jQuery);
