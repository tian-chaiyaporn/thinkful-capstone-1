/**
 * @file 
 *
 * Presenter handles all User Interactions and Events from the Views, 
 * process and pass them on to the Model layer, and fire changes to the View layer.
 * 
 * MVP pattern category: Presenter
 * requires:
 * 	Views - MapView, MarkerView, ControlView, NotificationView
 *	Presenters - DisplayFormatter
 *	Models - AppStateManager
 *	Utils
 *
 */

var App = App || {};

App.Presenter = (function ($) {
	'use strict';

	var area;
	var dataType;
	var timeRange;
	var currentArea;

	// execute user input from search button
	function executeInput(area_input, dataType_input, timeRange_input) {
		area = area_input;
		dataType = dataType_input;
		timeRange = timeRange_input;

		markerViewController('clear');
		mapViewController(area_input);

		App.AppStateManager.get(area);
	}

	function markerViewController (action) {
		if (action === 'clear') {
			App.MarkerView.clearMarkers();
			App.MarkerView.clearInfoWindow();
		}
	}

	/*
	 * Zoom and Pan the map to user's area of interest.
	 *
	 * the function also stores currentArea as area_input, so that
	 * if user has already zoomed / panned to their desired location
	 * i.e. if user is not changing their current area of interest,
	 * the MapView changes won't be triggered.
	 */
	function mapViewController (area_input) {
		if (currentArea === area_input) {
			return;
		}
		currentArea = area_input;
		if (area_input === 'All States') {
			App.MapView.move(LAT_LNG_USA);
			App.MapView.zoom(4);
		} 
		else {
			App.AppStateManager.getCoordinateByName(area_input)
				.then(App.MapView.move);
			App.MapView.zoom(6);
		}
	}

	// ** note: function can probably take in args as object for better readability
	function notificationViewController (area, timer, existingData, customEvent) {
		// notify user with a custom message
		if (customEvent) {
			App.NotificationView.customMessage(customEvent);
		} 
		// notify user how long it takes to download data
		else if (timer > 0 && !existingData) {
			App.NotificationView.startLoad(timer);
		} 
		// notify user not all data has loaded, and ask if user wants to continue loading, or leave it
		else if (existingData) {
			App.NotificationView.resumeLoadQuestion(area, timer, existingData);
			App.ControlView.init();
		} 
		// notify user that data is not available for a particular usa-state
		else if (area) {
			App.NotificationView.noData(area);
		} 
		// close the notification window
		else {
			App.NotificationView.close();
		}
	}

	function controlViewController (show) {
		show === 'show' ? App.ControlView.show() : App.ControlView.hide();
	}

	// pass-through function to AppStateManager (for access control to Presenter)
	// pause app from getting more data from Quandl
	function pauseLoad() {
		App.NotificationView.close();
		App.ControlView.show();
		App.AppStateManager.stopLoadingData();
	}

	// pass-through function to AppStateManager (for access control to Presenter)
	// resume app in getting more data from Quandl
	function resumeLoad(area) {
		log('resumeDataLoad');
		App.NotificationView.close();
		App.AppStateManager.resumeLoadingData(area);
	}

	// pass-through function to AppStateManager (for access control to Presenter)
	// continue app without getting more data from Quandl, and use stored data
	function continueWithoutLoad(area) {
		log('continue');
		App.NotificationView.close();
		App.ControlView.show();
		App.AppStateManager.continueWithoutLoadingData(area);
	}

	// format data-point and render it to MarkerView
	function render(data) {
		App.DisplayFormatter.format(area, dataType, timeRange, data)
			.then(App.MarkerView.setMarker.bind(null, data))
			.catch();
	}

	return {
		executeInput: executeInput,
		pauseDataLoad: pauseLoad,
		resumeDataLoad: resumeLoad,
		continue: continueWithoutLoad,
		createNotification: notificationViewController,
		closeNotification: notificationViewController,
		toggleControlView:  controlViewController,
		render: render
	};

})(jQuery);