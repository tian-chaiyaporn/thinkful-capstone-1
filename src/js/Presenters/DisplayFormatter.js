/**
 * @file
 *
 * Format data so it is ready for display as infowindows in the Markers.
 *
 * MVP pattern category: Presenter
 * requires: Presenter, Utils
 *
 */

var App = App || {};

App.DisplayFormatter = (function ($) {
	'use strict';

	function formatForDisplay(area, chosenDataType, currentTime, data) {
    return new Promise(function(res, rej) {
      // build information to be shown in marker
      var info = ['Place: @place <br>',
                  '@dataType: @displayData <br>',
                  'Average over: @time years'];

      var displayDataKey =  'year' + currentTime;
      var resultData = data.value[displayDataKey];
      
      var markerSize;
      var displayData;

      if (chosenDataType === 'HousePrice') {
        displayData = resultData.avg;
        markerSize = displayData/100;
        displayData = displayData === 0 ? 'no data' : displayData.format(2,3,',','.');
        displayData = '$' + displayData;
      } 
      if (chosenDataType === 'PriceChange') {
        displayData = resultData.percent;
        markerSize = currentTime > 4 ? displayData * 400 : displayData * 1100;
        displayData = displayData === 0 ? 'no data' : displayData.format(2,3,',','.');
        displayData = displayData + '%';
      }

      info = info.join('')
        .replace('@place', data.title)
        .replace('@dataType', chosenDataType)
        .replace('@displayData', displayData)
        .replace('@time', currentTime);

      res({
        'info': info,
        'area': area,
        'markerSize': markerSize
      });
    });
	}

	return {
    format: formatForDisplay
  };

})(jQuery);