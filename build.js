/**
 * @file 
 *
 * Provides Global Constants
 * 
 * MVP pattern category: global constants
 *
 */

// default USA latitude and longitude
var LAT_LNG_USA = [37.09024, -96.712891];

// settings for google maps api
var MAP_SETTINGS = {
    mapDefaults: {
      panControl:         false,
      zoomControl:        true,
      zoomControlOptions: true,
      scaleControl:       false,
      mapTypeControl:     false,
      streetViewControl:  false,
      scrollwheel:        false,
      zoom:               4,
      maxZoom:            16,
      minZoom:            3
    },
    mapcanvas: 0,
    latCenter : LAT_LNG_USA[0],
    lonCenter : LAT_LNG_USA[1]
  };

// a list of USA States mapped to their respective abbreviated versions.
var USA_STATES_ABBR = [
        ['Arizona', 'AZ'],
        ['Alabama', 'AL'],
        ['Alaska', 'AK'],
        ['Arizona', 'AZ'],
        ['Arkansas', 'AR'],
        ['California', 'CA'],
        ['Colorado', 'CO'],
        ['Connecticut', 'CT'],
        ['Delaware', 'DE'],
        ['Florida', 'FL'],
        ['Georgia', 'GA'],
        ['Hawaii', 'HI'],
        ['Idaho', 'ID'],
        ['Illinois', 'IL'],
        ['Indiana', 'IN'],
        ['Iowa', 'IA'],
        ['Kansas', 'KS'],
        ['Kentucky', 'KY'],
        ['Kentucky', 'KY'],
        ['Louisiana', 'LA'],
        ['Maine', 'ME'],
        ['Maryland', 'MD'],
        ['Massachusetts', 'MA'],
        ['Michigan', 'MI'],
        ['Minnesota', 'MN'],
        ['Mississippi', 'MS'],
        ['Missouri', 'MO'],
        ['Montana', 'MT'],
        ['Nebraska', 'NE'],
        ['Nevada', 'NV'],
        ['New Hampshire', 'NH'],
        ['New Jersey', 'NJ'],
        ['New Mexico', 'NM'],
        ['New York', 'NY'],
        ['North Carolina', 'NC'],
        ['North Dakota', 'ND'],
        ['Ohio', 'OH'],
        ['Oklahoma', 'OK'],
        ['Oregon', 'OR'],
        ['Pennsylvania', 'PA'],
        ['Rhode Island', 'RI'],
        ['South Carolina', 'SC'],
        ['South Dakota', 'SD'],
        ['Tennessee', 'TN'],
        ['Texas', 'TX'],
        ['Utah', 'UT'],
        ['Vermont', 'VT'],
        ['Virginia', 'VA'],
        ['Washington', 'WA'],
        ['West Virginia', 'WV'],
        ['Wisconsin', 'WI'],
        ['Wyoming', 'WY'],
    ];

// style setting for google maps api
var MAP_STYLE = [
        {
          "elementType": "geometry",
          "stylers": [{"color": "#212121"}]
        },
        {
          "elementType": "labels.icon",
          "stylers": [{"visibility": "off"}]
        },
        {
          "elementType": "labels.text.fill",
          "stylers": [{"color": "#757575"}]
        },
        {
          "elementType": "labels.text.stroke",
          "stylers": [{"color": "#212121"}]
        },
        {
          "featureType": "administrative",
          "elementType": "geometry",
          "stylers": [{"color": "#757575"}]
        },
        {
          "featureType": "administrative.country",
          "elementType": "labels.text.fill",
          "stylers": [{"color": "#9e9e9e"}]
        },
        {
          "featureType": "administrative.land_parcel",
          "stylers": [{"visibility": "off"}]
        },
        {
          "featureType": "administrative.locality",
          "elementType": "labels.text.fill",
          "stylers": [{"color": "#bdbdbd"}]
        },
        {
          "featureType": "poi",
          "elementType": "labels.text.fill",
          "stylers": [{"color": "#757575"}]
        },
        {
          "featureType": "poi.business",
          "stylers": [{"visibility": "off"}]
        },
        {
          "featureType": "poi.park",
          "elementType": "geometry",
          "stylers": [{"color": "#181818"}]
        },
        {
          "featureType": "poi.park",
          "elementType": "labels.text",
          "stylers": [{"visibility": "off"}]
        },
        {
          "featureType": "poi.park",
          "elementType": "labels.text.fill",
          "stylers": [{"color": "#616161"}]
        },
        {
          "featureType": "poi.park",
          "elementType": "labels.text.stroke",
          "stylers": [{"color": "#1b1b1b"}]
        },
        {
          "featureType": "road",
          "stylers": [{"visibility": "off"}]
        },
        {
          "featureType": "road",
          "elementType": "geometry.fill",
          "stylers": [{"color": "#2c2c2c"}]
        },
        {
          "featureType": "road",
          "elementType": "labels.text.fill",
          "stylers": [{"color": "#8a8a8a"}]
        },
        {
          "featureType": "road.arterial",
          "elementType": "geometry",
          "stylers": [{"color": "#373737"}]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry",
          "stylers": [{"color": "#3c3c3c"}]
        },
        {
          "featureType": "road.highway.controlled_access",
          "elementType": "geometry",
          "stylers": [{"color": "#4e4e4e"}]
        },
        {
          "featureType": "road.local",
          "elementType": "labels.text.fill",
          "stylers": [{"color": "#616161"}]
        },
        {
          "featureType": "transit",
          "elementType": "labels.text.fill",
          "stylers": [{"color": "#757575"}]
        },
        {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [{"color": "#000000"}]
        },
        {
          "featureType": "water",
          "elementType": "labels.text.fill",
          "stylers": [{"color": "#3d3d3d"}]
        }
      ];

var MOCK_APP_STATE_OBJ = {
    'usa-states': [
      {id: 'S00001', title: 'California', latLng: [99.999, 99.9998]}
    ],
    'neighborhoods': [
      {id: 'N00001', stateId: 'S00001', title: 'Paradise', latLng: [99.999, 99.9998]}
    ],
    'house-prices': [
      {
        stateId: 'S00001',
        value: {
          year1: {avg: 123456.78, percent: 5}, 
          year3: {avg: 123456.78, percent: 5}, 
          year5: {avg: 123456.78, percent: 5}, 
          year10: {avg: 123456.78, percent: 5}
        }
      },
      {
        neighborhoodId: 'N00001', 
        value: {
          year1: {avg: 123456.78, percent: 5}, 
          year3: {avg: 123456.78, percent: 5}, 
          year5: {avg: 123456.78, percent: 5}, 
          year10: {avg: 123456.78, percent: 5}
        }
      }
    ]
  };

/**
 * @file 
 *
 * Provides Global Utility functions
 * 
 * MVP pattern category: helper functions
 *
 */

/**
 * @global
 *
 * log(s)
 * This Function check whether a type of local storage is available
 * 
 * @param s: input log
 */
var log = function(s){
  console.log(s);
};

/**
 * @global
 *
 * this function is taken from: 
 * https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
 *
 * storageAvailable(type)
 * This Function check whether a type of local storage is available
 * 
 * @param string type: input type of local storage in browser
 */
var storageAvailable = function(type) {
  var storage;
  try {
    storage = window[type];
    var x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  }
  catch(e) {
    return e instanceof DOMException && (
      // everything except Firefox
      e.code === 22 ||
      // Firefox
      e.code === 1014 ||
      // test name field too, because code might not be present
      // everything except Firefox
      e.name === 'QuotaExceededError' ||
      // Firefox
      e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage.length !== 0;
    }
};

/**
 * @global
 *
 * percentChg(x, y)
 * This Function returns Percentage Change, if the input is 0, returns 0
 * 
 * @param integer x: input of current number
 * @param integer y: input of previous number
 */
var percentChg = function(x, y) {
  return y !== 0 ? (x-y)/(x+y)*100 : 0;
};

/**
 * @global
 *
 * this function is taken from: 
 * http://stackoverflow.com/questions/149055/how-can-i-format-numbers-as-money-in-javascript
 * written by VisioN
 *
 * Number.prototype.format(n, x, s, c)
 * This Function format number string with Commas and Decimals
 * 
 * @param integer n: length of decimal
 * @param integer x: length of whole part
 * @param mixed   s: sections delimiter
 * @param mixed   c: decimal delimiter
 */
Number.prototype.format = function(n, x, s, c) {
    var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\D' : '$') + ')',
        num = this.toFixed(Math.max(0, ~~n));

    return (c ? num.replace('.', c) : num).replace(new RegExp(re, 'g'), '$&' + (s || ','));
};

/**
 * @global
 *
 * this function is taken from: https://gist.github.com/CalebGrove/c285a9510948b633aa47
 * for transforming state name to its abbreviation and vice versa
 *
 * abbrState(input, to)
 * This Function turn input state into its corresponding abbreviated name
 * 
 * @param string input: input of state name or state abbreviation
 * @param string to: input of the returned type (abbr or name)
 */
var abbrState = function(input, to){
    var states = USA_STATES_ABBR;

    if (to == 'abbr'){
        input = input.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
        for(i = 0; i < states.length; i++){
            if(states[i][0] == input){
                return(states[i][1]);
            }
        }    
    } else if (to == 'name'){
        input = input.toUpperCase();
        for(i = 0; i < states.length; i++){
            if(states[i][1] == input){
                return(states[i][0]);
            }
        }    
    }
};

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
				.catch();
      i++;
      if (i === lim) {
      	stopApiRequestLoop();
      	App.Presenter.closeNotification();
      	App.Presenter.toggleControlView('show');
      	App.AppStateStorage.storeInLocal();
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
						if (localData) {
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
    return new Promise(function(res){ 
      if (storageAvailable('localStorage')) {
        localStorage.setItem('HousePriceData', JSON.stringify(APP_STATE));
      }
    });
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

	return {
		get: getAppState,
		set: setAppState,
		getLatLngByName: getLatLngByName,
		storeInLocal: setLocalStorageData
	};

})(jQuery);

var App = App || {};

App.AreaCodeLoader = (function ($) {
	'use strict';

	function getCodesFromJSON (area) {
		console.log('getCodeFromJSON()');
		// logic to choose whether the user requests for all states or single state
    return new Promise(function(res, rej){
      if (area === 'All States') {
        asyncRequest('state_code.json')
          .then(formatStateCodes)
          .then(function(codes) { res(codes); })
          .catch(function(){log('fail to get internal state_code JSON data');});
      } else {
        asyncRequest('neighborhood_code.json')
          .then(formatNeighborhoodCodes.bind(null, area))
          .then(function(codes) { res(codes); })
          .catch(function(){log('fail to get internal neighborhood_code JSON data');});
      }
    });
	}

  var asyncRequest = function(url) {
    log('asyncRequest()');
    return new Promise(function(res, rej){
      $.ajax({
        url: url,
        success: function (data) {res(data);},
        error: function() {rej("fail to get code");}
      }); // end ajax
    }); // end Promise
  };

  function formatStateCodes (codes) {
  	log('formatStateCodes()');
  	return new Promise(function(res) {
  		var formattedCodes = codes.map(function(c) {
  			var str = c.code;
  			c.code = 'S' + str;
  			return c;
  		});
  		res(formattedCodes);
  	});
  }

	function formatNeighborhoodCodes (area, codes) {
    log('formatNeighborhoodCodes()');
    return new Promise(function(res, rej){
      var abbrArea = abbrState(area, 'abbr');
      var formattedCodes = codes
      .filter(function(code){
        return code.metro === abbrArea;
      })
      .map(function(obj){
        var codeArray = obj['City|Code'].split('|');
        var str = codeArray[1];
        var code = 'N' + str;
        return {
          'name': obj.name,
          'code': code
        };
      });
      res(formattedCodes);
    });
  }

	return {
		getCodesFromJSON: getCodesFromJSON
	};
})(jQuery);

var App = App || {};

App.Coordinates = (function ($) {
	'use strict';

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
          args.code['latLng'] = latLng;
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
var App = App || {};

App.DataCleaner = (function ($) {
  'use strict';

  function cleanApiDataForStorage (codes /* code, name */, response) {
    log('cleanApiDataForStorage()');
    return new Promise(function(res){
      var dat = response.dataset.data;
      var idType = codes.code.includes('S') ? 'stateId' : 'neighborhoodId';
      var codeData = {'id': codes.code, 'title': codes.name};
      var housePriceData = {
        [idType]: codes.code,
        'value': {
          'year1': {
            // check to see if index of array exists in case dataset does not exist
            // for a particular year. if it does not, returns 0
            'avg': 0 in dat ? dat[0][1] : 0,
            'percent': percentChg(dat[0][1], 1 in dat ? dat[1][1] : 0)
          },
          'year3': {
            'avg': 2 in dat ? dat[2][1] : 0,
            'percent': percentChg(dat[0][1], 2 in dat ? dat[2][1] : 0)
          },
          'year5': {
            'avg': 4 in dat ? dat[4][1] : 0,
            'percent': percentChg(dat[0][1], 4 in dat ? dat[4][1] : 0)
          },
          'year10': {
            'avg': 9 in dat ? dat[9][1] : 0,
            'percent': percentChg(dat[0][1], 9 in dat ? dat[9][1] : 0)
          }
        },
      };
      res({
        'title': codes.name,
        'idType': idType,
        'code': codeData,
        'housePrice': housePriceData
      });
    });
  }

  function formatMetaDataForStorage () {}

  return {
    formatQuandlData: cleanApiDataForStorage
  };
})(jQuery);
var App = App || {};

App.Quandl = (function ($) {
	'use strict';

	var getDataByCode = function(area_code) {
    log('request()');
    return new Promise(function(res, rej) {
      var BASE_URL = 'https://www.quandl.com/api/v3';
      var endpoint = '/datasets/ZILL/';
      var dataParam = area_code + '_A.json';
      var queryParams = {
        'api_key' : '1aGVznRZH7ckoyhVtges',
        'collapse': 'annual'
      };
      var query = '?';
      for (var param in queryParams) {
        query = query + param + '=' + queryParams[param] + '&';
      }
      query = query.substring(0, query.length - 1);

      var url = BASE_URL + endpoint + dataParam + query;

      log(url);

      $.ajax({
        url: url,
        dataType: "json",
        success: function (response) {res(response);},
        error: function () {rej(log("load data failed for: " + url + " ignore and move on."));} 
      }); // end ajax
    }); // end promise
  };

	return {
		getDataByCode: getDataByCode
	};

})(jQuery);
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
var App = App || {};

App.ControlView = (function ($) {
  'use strict';

  var state;
  var dataType;
  var timeRange;

  var init = function() {
    $('.js-search-location').submit(function(e){
      e.preventDefault();

      state = $( "#js-state option:selected" ).val();
      dataType = $( "#js-data-type option:selected" ).val();
      timeRange = $( "#js-year option:selected" ).val();

      App.Presenter.executeInput(state, dataType, timeRange);
    });

    $('.js-notify-pause-loop').click(function(e){
      e.preventDefault();
      log('stop data loading loop');
      App.Presenter.pauseDataLoad();
    });

    $('.js-notify-resume-loop').click(function(e){
      e.preventDefault();
      log('resume data loading loop');
      App.Presenter.resumeDataLoad(state);
    });

    $('.js-notify-continue-no-resume').click(function(e){
      e.preventDefault();
      log('resume data loading loop');
      App.Presenter.continue(state);
    });
  };

  function hideControlView() {
    $('.js-nav').removeClass("slideInUp");
    $('.js-nav').addClass("slideOutDown");
  }

  function showControlView() {
    $('.js-nav').removeClass("slideOutDown");
    $('.js-nav').addClass("slideInUp");
  }

  return {
    init: init,
    hide: hideControlView,
    show: showControlView
  };

})(jQuery);

var App = App || {};

App.MapView = (function ($) {
	'use strict';

	var mapObject;
  var settings =  MAP_SETTINGS;

  function buildMap() {
    settings.mapcanvas = $(".js-gmap");
    var mapOptions = $.extend({}, settings.mapDefaults, {
      zoom: settings.zoom,
      center: new google.maps.LatLng(settings.latCenter, settings.lonCenter),
      zoomControlOptions: {position: google.maps.ControlPosition.LEFT_CENTER},
      maxZoom: settings.maxZoom,
      minZoom: settings.minZoom,
      styles: MAP_STYLE
    });
    mapObject = new google.maps.Map(settings.mapcanvas[0], mapOptions);
  }

  function zoom(level) {
    mapObject.setZoom(level);
  }

  function moveToLocation(latLng) {
    log('moveToLocation()');
    var center = new google.maps.LatLng(latLng[0], latLng[1]);
    mapObject.panTo(center);
  }

  function getMapObject() {
    return mapObject;
  }

	return {
		build: buildMap,
    mapObject: getMapObject,
    zoom: zoom,
    move: moveToLocation
	};

})(jQuery);
var App = App || {};

App.MarkerView = (function ($) {
	'use strict';

	var markers = [];

  function setMarker(data /*latLng, latlng*/, args /*info, area, markerSize*/) {
  	// for now, args is a string that shows the tasks' thread has been followed correctly
  	console.log('setMarker');
  	formatInfoWindow(args.info)
  		.then(createMarker.bind(null, args, data))
  		.catch();
  	Promise.resolve();
  }

  function createMarker(args, data, formattedInfo) {
    var denominator = 100;
    var markerColor = 'red';

    if (args.area !== 'All States'){
      var center = new google.maps.LatLng(data.latLng[0], data.latLng[1]);
      denominator = 400;
      markerColor = 'yellow';
      markerColor = args.markerSize > 0 ? 'yellow' : 'lightblue';
    }

    var iconMarker = {
      path: google.maps.SymbolPath.CIRCLE,
      fillColor: markerColor,
      fillOpacity: 0.6,
      scaledSize: new google.maps.Size(args.markerSize, args.markerSize),
      scale: args.markerSize/denominator + 4,
      strokeWeight: 0
    };

  	var marker = new google.maps.Marker({
      position: {lat: data.latLng[0], lng: data.latLng[1]},
      icon: iconMarker,
      map: App.MapView.mapObject(),
      title: data.title,
      infowindow: formattedInfo
    });

    marker.setAnimation(google.maps.Animation.BOUNCE);
    setTimeout(function(){ marker.setAnimation(null); }, 400);

    markers.push(marker);
    google.maps.event.addListener(marker, 'click', function() {
      clearInfoWindow();
      this.infowindow.open(App.MapView.mapObject(), this);
    });
    Promise.resolve();
  }

  function formatInfoWindow(info) {
  	var myinfowindow = new google.maps.InfoWindow({
      content: info
    });
    return Promise.resolve(myinfowindow);
  }

  function clearInfoWindow() {
  	markers.map(function(marker){
      marker.infowindow.close();
    });
  }

  function clearMarkers() {
  	markers.map(function(marker){
      marker.setVisible(false);
    });
  }

	return {
		setMarker: setMarker,
    clearMarkers: clearMarkers,
    clearInfoWindow: clearInfoWindow
	};

})(jQuery);
var App = App || {};

App.NotificationView = (function ($) {
	'use strict';

  var downloadTimer;
	var notifyMessage = 'Because this is a free service there is an API limitation. Please wait for ';
  var notifyMessageEnd = 'seconds for data to load';
  var noDataString = "sorry, there doesn't seem to be data for @state";
  var unstableConnect = "please wait a little bit more, your connection seems to be unstable...";
  var resumeLoadMessage = 'It seems like you stopped loading before all data has loaded for:';
  var resumeLoadCustom = '@area : you have loaded @existingDataLength out of @allData. Would you like to resume?';
  var resumeLoadBtn = $('#resume-buttons').html();

	function getWaitTime(n) {
    // set countdown animation
    $('.js-notify-message').html(notifyMessage);
    $('.js-notify-message-middle').html('');
    timer(n);
    $('.js-notify-message-last').html(notifyMessageEnd);
    $('.js-notify').removeClass("slideOutDown");
    $('.js-notify').addClass("slideInUp");
  }

  function closeNotification() {
    $('.js-notify').removeClass("slideInUp");
    $('.js-notify').addClass("slideOutDown");
  }

  function noData(state) {
    $('.js-notify-message').html(noDataString.replace('@state', state));
    $('.js-notify-message-middle').html('');
    $('.js-notify-timer').html('');
    $('.js-notify-message-last').html('');
    $('.js-notify').removeClass("slideOutDown");
    $('.js-notify').addClass("slideInUp");
  }

  function resume(area, totalDataAvailable, existingData) {
    $('.js-notify-message').html(resumeLoadMessage);
    $('.js-notify-message-middle').html(resumeLoadCustom
      .replace('@area', area)
      .replace('@existingDataLength', existingData.length)
      .replace('@allData', totalDataAvailable)
    );
    $('.js-notify-timer').html('');
    $('.js-notify-message-last').html(resumeLoadBtn);
    $('.js-notify').removeClass("slideOutDown");
    $('.js-notify').addClass("slideInUp");
  }

  function customMessage(message) {
    $('.js-notify-message').html(message);
    $('.js-notify-message-middle').html('');
    stopTimer();
    $('.js-notify-timer').html('sorry');
    $('.js-notify-message-last').html('');
    $('.js-notify').removeClass("slideOutDown");
    $('.js-notify').addClass("slideInUp");
  }

  function timer(n) {
    var timeleft = n;
    var elem = document.getElementById("countdowntimer");
    
    downloadTimer = setInterval(function(){
      timeleft--;
      elem.classList.add('flipInX');
      elem.innerHTML = timeleft;
      setTimeout(function(){
        elem.classList.remove('flipInX');
      }, 980);

      $('.js-search-location').submit(function(e){
        e.preventDefault();
        clearInterval(downloadTimer);
      });
      
      if(timeleft <= 0) {
        $('.js-notify-message').html('');
        clearInterval(downloadTimer);
        elem.innerHTML = 'sorry';
        $('.js-notify-message-last').html(unstableConnect);
      }
    },1000);
  }

  function stopTimer() {
    clearInterval(downloadTimer);
  }

  return {
    startLoad: getWaitTime,
    noData: noData,
    customMessage: customMessage,
    resumeLoadQuestion: resume,
    close: closeNotification
  };

})(jQuery);
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