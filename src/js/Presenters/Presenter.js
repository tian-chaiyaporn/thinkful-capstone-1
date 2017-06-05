var App = App || {};

App.Presenter = (function ($) {
	'use strict';

	var area;
	var dataType;
	var timeRange;
	var currentArea;

	function executeInput(area_input, dataType_input, timeRange_input) {
		area = area_input;
		dataType = dataType_input;
		timeRange = timeRange_input;

		markerViewController();
		mapViewController(area_input);
		
		App.AppStateManager.get(area);
	}

	function markerViewController () {
		App.MarkerView.clearMarkers();
		App.MarkerView.clearInfoWindow();
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

	function notificationViewController (area, timer, existingData, customEvent) {
		if (customEvent) {
			App.NotificationView.customMessage(customEvent);
		} 
		else if (timer > 0 && !existingData) {
			App.NotificationView.startLoad(timer);
		} 
		else if (existingData) {
			App.NotificationView.resumeLoadQuestion(area, timer, existingData);
			App.ControlView.init();
		} 
		else if (area) {
			App.NotificationView.noData(area);
		} 
		else {
			App.NotificationView.close();
		}
	}

	function controlViewController (show) {
		show === 'show' ? App.ControlView.show() : App.ControlView.hide();
	}

	// pass-through function to AppStateManager (for access control to Presenter)
	function pauseLoad() {
		App.NotificationView.close();
		App.ControlView.show();
		App.AppStateManager.stopLoadingData();
	}

	// pass-through function to AppStateManager (for access control to Presenter)
	function resumeLoad(area) {
		log('resumeDataLoad');
		App.NotificationView.close();
		App.AppStateManager.resumeLoadingData(area);
	}

	// pass-through function to AppStateManager (for access control to Presenter)
	function continueWithoutLoad(area) {
		log('continue');
		App.NotificationView.close();
		App.ControlView.show();
		App.AppStateManager.continueWithoutLoadingData(area);
	}

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