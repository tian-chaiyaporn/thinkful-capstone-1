/* requires:
global.js
map.js
markers.js
make_ajax.js
*/

var info = (function($) {
  'use strict';

  function cleanData(area, res, areaName) {
    log('cleanData');
    var dat = res.dataset.data;
    var dataToCompute = {
      house_prices: {
        '1': 1
      },
      HousePriceYr1: 0 in dat ? dat[0][1] : 0,
      // check to see if index of array exists in case dataset is not complete
      HousePriceYr3: 2 in dat ? dat[2][1] : 0,
      HousePriceYr5: 4 in dat ? dat[4][1] : 0,
      HousePriceYr10: 9 in dat ? dat[9][1] : 0,
      PriceChangeYr1: percentChg(dat[0][1], 1 in dat ? dat[1][1] : 0),
      PriceChangeYr3: percentChg(dat[0][1], 2 in dat ? dat[2][1] : 0),
      PriceChangeYr5: percentChg(dat[0][1], 4 in dat ? dat[4][1] : 0),
      PriceChangeYr10: percentChg(dat[0][1], 9 in dat ? dat[9][1] : 0)
    };

    var dataToPass;
    if (area === 'All States') {
      stateRepo.data[areaName] = dataToCompute;
      // if (storageAvailable('localStorage')) {
      //   var stringData = stateRepo.data
      //   // Yippee! We can use localStorage awesomeness
      // }
      dataToPass = stateRepo.data;
    } else {
      neighborhoodRepo.data[area][areaName] = dataToCompute;
      // if (storageAvailable('localStorage')) {
      //   // Yippee! We can use localStorage awesomeness
      // }
      dataToPass = neighborhoodRepo.data;
    }
    info.buildInfo(area, dataToPass, areaName);
  }

  function buildInfo(area, data, areaName) {
    // get search term for Latitude and Longitude and build markers
    var searchName = area === 'All States' ? '' : area;
    var address = areaName + ' ' + searchName + ' United States';

    // build information to be shown in marker
    var info = ['Place: @place <br>',
                '@dataType: @displayData <br>',
                'Average over: @time years'];

    var displayDataKey = ChosenDataType + 'Yr' + CurrentTime;    
    var dataSrc = area === 'All States' ? data : data[area];
    var resultData = dataSrc[areaName][displayDataKey];
    var displayData = resultData === 0 ? 'no data' : resultData.format(2,3,',','.');
    var markerSize;
    
    if (ChosenDataType === 'HousePrice') {displayData = '$' + displayData; markerSize = resultData/100;} 
    if (ChosenDataType === 'PriceChange') {displayData = displayData + '%'; markerSize = resultData*1000;}

    info = info.join('')
      .replace('@place', areaName)
      .replace('@dataType', ChosenDataType)
      .replace('@displayData', displayData)
      .replace('@time', CurrentTime);

    // pass information to build markers
    mark.buildMarkers(area, areaName, address, info, markerSize);
  }

  return {
    buildInfo: buildInfo,
    cleanData: cleanData
  };

})(jQuery);
