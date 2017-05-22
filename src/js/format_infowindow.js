// requires: Utils.js

/**
 * @file 
 *
 * Provides function to format data into a presentational format to display in infoWindow.
 *
 * MVC pattern category: View
 *
 */

var infowindow = (function($) {
  'use strict';

  function formatInfo(areaName, area, chosenDataType, currentTime, data) {
    log('formatInfo()');
    return new Promise(function(res, rej) {
      // get search term for Latitude and Longitude and build markers
      var searchName = area === 'All States' ? '' : area;
      var address = areaName + ' ' + searchName + ' United States';

      // build information to be shown in marker
      var info = ['Place: @place <br>',
                  '@dataType: @displayData <br>',
                  'Average over: @time years'];

      var displayDataKey = currentTime + 'year';
      // var dataSrc = data; //area === 'All States' ? data : data;
      var resultData = data.HousePrice[displayDataKey];//dataSrc[areaName].HousePrice[displayDataKey];
      var markerSize;
      log(resultData);
      var displayData;

      if (chosenDataType === 'HousePrice') {
        displayData = resultData.avgPrice;
        markerSize = displayData/100;
        displayData = displayData === 0 ? 'no data' : displayData.format(2,3,',','.');
        displayData = '$' + displayData;
      } 
      if (chosenDataType === 'PriceChange') {
        displayData = resultData.percentChange;
        markerSize = currentTime > 4 ? displayData*400 : displayData*1100;
        displayData = displayData === 0 ? 'no data' : displayData.format(2,3,',','.');
        displayData = displayData + '%';
      }

      info = info.join('')
        .replace('@place', areaName)
        .replace('@dataType', chosenDataType)
        .replace('@displayData', displayData)
        .replace('@time', currentTime);
      // pass information to build markers
      res({
        'info': info,
        'area': area,
        'areaName': areaName,
        'markerSize': markerSize
      });
      //mark.buildMarkers(area, areaName, address, info, markerSize);
    });
  }

  return {
    formatInfo: formatInfo
  };

})(jQuery);
