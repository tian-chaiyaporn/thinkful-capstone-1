/* requires:
global.js
map.js
markers.js
make_ajax.js
*/

var info = (function($){
  'use strict';

  function buildInfo(area, data, areaName, time, dataType) {
    // get search term for Latitude and Longitude and build markers
    var searchName = area === 'All States' ? '' : area;
    var address = areaName + ' ' + searchName + ' United States';

    // build information to be shown in marker
    var info = ['Place: @place <br>',
                '@dataType: @displayData <br>',
                'Average over: @time years'];

    var displayDataKey = dataType + 'Yr' + time;    
    var dataSrc = area === 'All States' ? data : data[area];
    var resultData = dataSrc[areaName][displayDataKey];
    var displayData = resultData === 0 ? 'no data' : resultData.format(2,3,',','.');
    
    if (dataType === 'HousePrice') {displayData = '$' + displayData;} 
    if (dataType === 'PriceChange') {displayData = displayData + '%';}

    info = info.join('')
      .replace('@place', areaName)
      .replace('@dataType', dataType)
      .replace('@displayData', displayData)
      .replace('@time', time);

    // pass information to build markers
    mark.buildMarkers(area, areaName, address, info);
  }

  return {
    buildInfo: buildInfo
  };

})(jQuery);
