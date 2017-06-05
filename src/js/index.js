// bootstrap the app
(function ($) {
	'use strict';

	App.MapView.build();
  App.ControlView.init();

  var area = 'All States';
  var dataType = 'HousePrice';
  var timeRange = 1;
  App.Presenter.executeInput(area, dataType, timeRange);

})(jQuery);