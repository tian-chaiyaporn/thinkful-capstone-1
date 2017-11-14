/**
 * @file 
 *
 * Provides Global Constants for various settings
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

var INITIAL_USA_DATA = {  
   "usa-states":[  
      {  
         "id":"S3",
         "title":"Alabama",
         "latLng":[  
            32.3182314,
            -86.90229799999997
         ]
      },
      {  
         "id":"S2",
         "title":"Alaska",
         "latLng":[  
            64.2008413,
            -149.4936733
         ]
      },
      {  
         "id":"S5",
         "title":"Arizona",
         "latLng":[  
            34.0489281,
            -111.09373110000001
         ]
      },
      {  
         "id":"S4",
         "title":"Arkansas",
         "latLng":[  
            35.20105,
            -91.8318334
         ]
      },
      {  
         "id":"S6",
         "title":"California",
         "latLng":[  
            36.778261,
            -119.41793239999998
         ]
      },
      {  
         "id":"S7",
         "title":"Colorado",
         "latLng":[  
            39.5500507,
            -105.78206740000002
         ]
      },
      {  
         "id":"S8",
         "title":"Connecticut",
         "latLng":[  
            41.6032207,
            -73.08774900000003
         ]
      },
      {  
         "id":"S10",
         "title":"Delaware",
         "latLng":[  
            38.9108325,
            -75.52766989999998
         ]
      },
      {  
         "id":"S9",
         "title":"District of Columbia",
         "latLng":[  
            38.9071923,
            -77.03687070000001
         ]
      },
      {  
         "id":"S11",
         "title":"Florida",
         "latLng":[  
            27.6648274,
            -81.51575350000002
         ]
      },
      {  
         "id":"S12",
         "title":"Georgia",
         "latLng":[  
            32.1656221,
            -82.90007509999998
         ]
      },
      {  
         "id":"S13",
         "title":"Hawaii",
         "latLng":[  
            19.8967662,
            -155.58278180000002
         ]
      },
      {  
         "id":"S15",
         "title":"Idaho",
         "latLng":[  
            44.0682019,
            -114.74204079999998
         ]
      },
      {  
         "id":"S16",
         "title":"Illinois",
         "latLng":[  
            40.6331249,
            -89.39852830000001
         ]
      },
      {  
         "id":"S17",
         "title":"Indiana",
         "latLng":[  
            40.2671941,
            -86.13490189999999
         ]
      },
      {  
         "id":"S14",
         "title":"Iowa",
         "latLng":[  
            41.8780025,
            -93.09770200000003
         ]
      },
      {  
         "id":"S18",
         "title":"Kansas",
         "latLng":[  
            39.011902,
            -98.48424649999998
         ]
      },
      {  
         "id":"S19",
         "title":"Kentucky",
         "latLng":[  
            37.8393332,
            -84.27001789999997
         ]
      },
      {  
         "id":"S20",
         "title":"Louisiana",
         "latLng":[  
            30.9842977,
            -91.96233269999999
         ]
      },
      {  
         "id":"S51",
         "title":"Maine",
         "latLng":[  
            45.253783,
            -69.44546889999998
         ]
      },
      {  
         "id":"S22",
         "title":"Maryland",
         "latLng":[  
            39.0457549,
            -76.6412712
         ]
      },
      {  
         "id":"S21",
         "title":"Massachusetts",
         "latLng":[  
            42.4072107,
            -71.38243740000001
         ]
      },
      {  
         "id":"S23",
         "title":"Michigan",
         "latLng":[  
            44.3148443,
            -85.60236429999998
         ]
      },
      {  
         "id":"S24",
         "title":"Minnesota",
         "latLng":[  
            46.729553,
            -94.68589980000002
         ]
      },
      {  
         "id":"S26",
         "title":"Mississippi",
         "latLng":[  
            32.3546679,
            -89.39852830000001
         ]
      },
      {  
         "id":"S25",
         "title":"Missouri",
         "latLng":[  
            37.9642529,
            -91.8318334
         ]
      },
      {  
         "id":"S27",
         "title":"Montana",
         "latLng":[  
            46.8796822,
            -110.36256579999997
         ]
      },
      {  
         "id":"S30",
         "title":"Nebraska",
         "latLng":[  
            41.4925374,
            -99.90181310000003
         ]
      },
      {  
         "id":"S34",
         "title":"Nevada",
         "latLng":[  
            38.8026097,
            -116.41938900000002
         ]
      },
      {  
         "id":"S31",
         "title":"New Hampshire",
         "latLng":[  
            43.1938516,
            -71.57239529999998
         ]
      },
      {  
         "id":"S32",
         "title":"New Jersey",
         "latLng":[  
            40.0583238,
            -74.4056612
         ]
      },
      {  
         "id":"S33",
         "title":"New Mexico",
         "latLng":[  
            34.5199402,
            -105.87009009999997
         ]
      },
      {  
         "id":"S35",
         "title":"New York",
         "latLng":[  
            40.7127753,
            -74.0059728
         ]
      },
      {  
         "id":"S28",
         "title":"North Carolina",
         "latLng":[  
            35.7595731,
            -79.01929969999998
         ]
      },
      {  
         "id":"S36",
         "title":"Ohio",
         "latLng":[  
            40.4172871,
            -82.90712300000001
         ]
      },
      {  
         "id":"S37",
         "title":"Oklahoma",
         "latLng":[  
            35.0077519,
            -97.09287699999999
         ]
      },
      {  
         "id":"S38",
         "title":"Oregon",
         "latLng":[  
            43.8041334,
            -120.55420119999997
         ]
      },
      {  
         "id":"S39",
         "title":"Pennsylvania",
         "latLng":[  
            41.2033216,
            -77.19452469999999
         ]
      },
      {  
         "id":"S40",
         "title":"Rhode Island",
         "latLng":[  
            41.5800945,
            -71.4774291
         ]
      },
      {  
         "id":"S41",
         "title":"South Carolina",
         "latLng":[  
            33.836081,
            -81.1637245
         ]
      },
      {  
         "id":"S52",
         "title":"South Dakota",
         "latLng":[  
            43.9695148,
            -99.90181310000003
         ]
      },
      {  
         "id":"S42",
         "title":"Tennessee",
         "latLng":[  
            35.5174913,
            -86.5804473
         ]
      },
      {  
         "id":"S43",
         "title":"Texas",
         "latLng":[  
            31.9685988,
            -99.90181310000003
         ]
      },
      {  
         "id":"S44",
         "title":"Utah",
         "latLng":[  
            39.3209801,
            -111.09373110000001
         ]
      },
      {  
         "id":"S46",
         "title":"Vermont",
         "latLng":[  
            44.5588028,
            -72.57784149999998
         ]
      },
      {  
         "id":"S45",
         "title":"Virginia",
         "latLng":[  
            37.4315734,
            -78.65689420000001
         ]
      },
      {  
         "id":"S47",
         "title":"Washington",
         "latLng":[  
            47.7510741,
            -120.7401385
         ]
      },
      {  
         "id":"S49",
         "title":"West Virginia",
         "latLng":[  
            38.5976262,
            -80.45490259999997
         ]
      },
      {  
         "id":"S48",
         "title":"Wisconsin",
         "latLng":[  
            43.7844397,
            -88.78786780000001
         ]
      },
      {  
         "id":"S50",
         "title":"Wyoming",
         "latLng":[  
            43.0759678,
            -107.29028390000002
         ]
      },
      {  
         "id":"S48",
         "title":"Wisconsin",
         "latLng":[  
            43.7844397,
            -88.78786780000001
         ]
      },
      {  
         "id":"S50",
         "title":"Wyoming",
         "latLng":[  
            43.0759678,
            -107.29028390000002
         ]
      }
   ],
   "neighborhoods":[  

   ],
   "house-prices":[  
      {  
         "stateId":"S3",
         "value":{  
            "year1":{  
               "avg":193900,
               "percent":5.151843817787419
            },
            "year3":{  
               "avg":171900,
               "percent":6.014215418261345
            },
            "year5":{  
               "avg":164900,
               "percent":8.082497212931996
            },
            "year10":{  
               "avg":0,
               "percent":0
            }
         },
         "title":"Alabama",
         "latLng":[  
            32.3182314,
            -86.90229799999997
         ]
      },
      {  
         "stateId":"S2",
         "value":{  
            "year1":{  
               "avg":275000,
               "percent":0.9359515507432556
            },
            "year3":{  
               "avg":265000,
               "percent":1.8518518518518516
            },
            "year5":{  
               "avg":239900,
               "percent":6.816857642260634
            },
            "year10":{  
               "avg":0,
               "percent":0
            }
         },
         "title":"Alaska",
         "latLng":[  
            64.2008413,
            -149.4936733
         ]
      },
      {  
         "stateId":"S5",
         "value":{  
            "year1":{  
               "avg":269875,
               "percent":2.8536039254918775
            },
            "year3":{  
               "avg":249000,
               "percent":4.023126957359673
            },
            "year5":{  
               "avg":215000,
               "percent":11.31734983243104
            },
            "year10":{  
               "avg":0,
               "percent":0
            }
         },
         "title":"Arizona",
         "latLng":[  
            34.0489281,
            -111.09373110000001
         ]
      },
      {  
         "stateId":"S4",
         "value":{  
            "year1":{  
               "avg":164900,
               "percent":4.7649301143583225
            },
            "year3":{  
               "avg":149900,
               "percent":4.7649301143583225
            },
            "year5":{  
               "avg":139900,
               "percent":8.202099737532809
            },
            "year10":{  
               "avg":0,
               "percent":0
            }
         },
         "title":"Arkansas",
         "latLng":[  
            35.20105,
            -91.8318334
         ]
      },
      {  
         "stateId":"S6",
         "value":{  
            "year1":{  
               "avg":499950,
               "percent":3.6219493237991602
            },
            "year3":{  
               "avg":444000,
               "percent":5.927220721436517
            },
            "year5":{  
               "avg":398500,
               "percent":11.291668985474985
            },
            "year10":{  
               "avg":0,
               "percent":0
            }
         },
         "title":"California",
         "latLng":[  
            36.778261,
            -119.41793239999998
         ]
      },
      {  
         "stateId":"S7",
         "value":{  
            "year1":{  
               "avg":408068,
               "percent":4.2228771958501685
            },
            "year3":{  
               "avg":360000,
               "percent":6.258300046350063
            },
            "year5":{  
               "avg":289900,
               "percent":16.93028906769365
            },
            "year10":{  
               "avg":0,
               "percent":0
            }
         },
         "title":"Colorado",
         "latLng":[  
            39.5500507,
            -105.78206740000002
         ]
      },
      {  
         "stateId":"S8",
         "value":{  
            "year1":{  
               "avg":309900,
               "percent":4.185577407967726
            },
            "year3":{  
               "avg":274900,
               "percent":5.984952120383038
            },
            "year5":{  
               "avg":260000,
               "percent":8.755922091595018
            },
            "year10":{  
               "avg":0,
               "percent":0
            }
         },
         "title":"Connecticut",
         "latLng":[  
            41.6032207,
            -73.08774900000003
         ]
      },
      {  
         "stateId":"S10",
         "value":{  
            "year1":{  
               "avg":277900,
               "percent":2.132226135228727
            },
            "year3":{  
               "avg":265000,
               "percent":2.376128200405231
            },
            "year5":{  
               "avg":245000,
               "percent":6.291834002677376
            },
            "year10":{  
               "avg":0,
               "percent":0
            }
         },
         "title":"Delaware",
         "latLng":[  
            38.9108325,
            -75.52766989999998
         ]
      },
      {  
         "stateId":"S9",
         "value":{  
            "year1":{  
               "avg":550000,
               "percent":0.09099181073703368
            },
            "year3":{  
               "avg":489000,
               "percent":5.871029836381136
            },
            "year5":{  
               "avg":454900,
               "percent":9.463628221713604
            },
            "year10":{  
               "avg":0,
               "percent":0
            }
         },
         "title":"District of Columbia",
         "latLng":[  
            38.9071923,
            -77.03687070000001
         ]
      },
      {  
         "stateId":"S11",
         "value":{  
            "year1":{  
               "avg":283990,
               "percent":3.4779281823316146
            },
            "year3":{  
               "avg":249900,
               "percent":6.385210436606792
            },
            "year5":{  
               "avg":199999,
               "percent":17.353906803667027
            },
            "year10":{  
               "avg":0,
               "percent":0
            }
         },
         "title":"Florida",
         "latLng":[  
            27.6648274,
            -81.51575350000002
         ]
      },
      {  
         "stateId":"S12",
         "value":{  
            "year1":{  
               "avg":236900,
               "percent":6.257008297824624
            },
            "year3":{  
               "avg":196672,
               "percent":9.278274427315417
            },
            "year5":{  
               "avg":172030,
               "percent":15.863350695718093
            },
            "year10":{  
               "avg":0,
               "percent":0
            }
         },
         "title":"Georgia",
         "latLng":[  
            32.1656221,
            -82.90007509999998
         ]
      },
      {  
         "stateId":"S13",
         "value":{  
            "year1":{  
               "avg":599000,
               "percent":0.33500837520938026
            },
            "year3":{  
               "avg":544000,
               "percent":4.811898512685914
            },
            "year5":{  
               "avg":501440,
               "percent":8.865544691214424
            },
            "year10":{  
               "avg":0,
               "percent":0
            }
         },
         "title":"Hawaii",
         "latLng":[  
            19.8967662,
            -155.58278180000002
         ]
      },
      {  
         "stateId":"S15",
         "value":{  
            "year1":{  
               "avg":265000,
               "percent":3.720229358695865
            },
            "year3":{  
               "avg":221945,
               "percent":8.841860990460935
            },
            "year5":{  
               "avg":160000,
               "percent":24.705882352941178
            },
            "year10":{  
               "avg":0,
               "percent":0
            }
         },
         "title":"Idaho",
         "latLng":[  
            44.0682019,
            -114.74204079999998
         ]
      },
      {  
         "stateId":"S16",
         "value":{  
            "year1":{  
               "avg":214900,
               "percent":7.476869217304325
            },
            "year3":{  
               "avg":179900,
               "percent":8.865248226950355
            },
            "year5":{  
               "avg":159900,
               "percent":14.674493062966915
            },
            "year10":{  
               "avg":0,
               "percent":0
            }
         },
         "title":"Illinois",
         "latLng":[  
            40.6331249,
            -89.39852830000001
         ]
      },
      {  
         "stateId":"S17",
         "value":{  
            "year1":{  
               "avg":167000,
               "percent":8.830237862495927
            },
            "year3":{  
               "avg":130000,
               "percent":12.457912457912458
            },
            "year5":{  
               "avg":124900,
               "percent":14.422747516272697
            },
            "year10":{  
               "avg":0,
               "percent":0
            }
         },
         "title":"Indiana",
         "latLng":[  
            40.2671941,
            -86.13490189999999
         ]
      },
      {  
         "stateId":"S14",
         "value":{  
            "year1":{  
               "avg":169000,
               "percent":5.956112852664576
            },
            "year3":{  
               "avg":145110,
               "percent":7.6056158670529435
            },
            "year5":{  
               "avg":129900,
               "percent":13.081298093007696
            },
            "year10":{  
               "avg":0,
               "percent":0
            }
         },
         "title":"Iowa",
         "latLng":[  
            41.8780025,
            -93.09770200000003
         ]
      },
      {  
         "stateId":"S18",
         "value":{  
            "year1":{  
               "avg":169900,
               "percent":7.907272149888854
            },
            "year3":{  
               "avg":149000,
               "percent":6.553778613985576
            },
            "year5":{  
               "avg":129972.5,
               "percent":13.31482546749035
            },
            "year10":{  
               "avg":0,
               "percent":0
            }
         },
         "title":"Kansas",
         "latLng":[  
            39.011902,
            -98.48424649999998
         ]
      },
      {  
         "stateId":"S19",
         "value":{  
            "year1":{  
               "avg":169900,
               "percent":3.0321406913280775
            },
            "year3":{  
               "avg":152000,
               "percent":5.560733146940044
            },
            "year5":{  
               "avg":139000,
               "percent":10.003237293622531
            },
            "year10":{  
               "avg":0,
               "percent":0
            }
         },
         "title":"Kentucky",
         "latLng":[  
            37.8393332,
            -84.27001789999997
         ]
      },
      {  
         "stateId":"S20",
         "value":{  
            "year1":{  
               "avg":204000,
               "percent":1.61892901618929
            },
            "year3":{  
               "avg":185000,
               "percent":4.884318766066838
            },
            "year5":{  
               "avg":165000,
               "percent":10.569105691056912
            },
            "year10":{  
               "avg":0,
               "percent":0
            }
         },
         "title":"Louisiana",
         "latLng":[  
            30.9842977,
            -91.96233269999999
         ]
      },
      {  
         "stateId":"S51",
         "value":{  
            "year1":{  
               "avg":234900,
               "percent":4.597573193810531
            },
            "year3":{  
               "avg":199900,
               "percent":8.049678012879486
            },
            "year5":{  
               "avg":189999,
               "percent":10.567452500476584
            },
            "year10":{  
               "avg":0,
               "percent":0
            }
         },
         "title":"Maine",
         "latLng":[  
            45.253783,
            -69.44546889999998
         ]
      },
      {  
         "stateId":"S22",
         "value":{  
            "year1":{  
               "avg":302900,
               "percent":4.827824883197785
            },
            "year3":{  
               "avg":264900,
               "percent":6.692497358224728
            },
            "year5":{  
               "avg":268995,
               "percent":5.928535832626618
            },
            "year10":{  
               "avg":0,
               "percent":0
            }
         },
         "title":"Maryland",
         "latLng":[  
            39.0457549,
            -76.6412712
         ]
      },
      {  
         "stateId":"S21",
         "value":{  
            "year1":{  
               "avg":419900,
               "percent":4.348906560636183
            },
            "year3":{  
               "avg":350000,
               "percent":9.079101181971684
            },
            "year5":{  
               "avg":335900,
               "percent":11.114051336332363
            },
            "year10":{  
               "avg":0,
               "percent":0
            }
         },
         "title":"Massachusetts",
         "latLng":[  
            42.4072107,
            -71.38243740000001
         ]
      },
      {  
         "stateId":"S23",
         "value":{  
            "year1":{  
               "avg":169900,
               "percent":7.907272149888854
            },
            "year3":{  
               "avg":134900,
               "percent":11.482939632545932
            },
            "year5":{  
               "avg":119900,
               "percent":17.25327812284334
            },
            "year10":{  
               "avg":0,
               "percent":0
            }
         },
         "title":"Michigan",
         "latLng":[  
            44.3148443,
            -85.60236429999998
         ]
      },
      {  
         "stateId":"S24",
         "value":{  
            "year1":{  
               "avg":249000,
               "percent":5.085461067735809
            },
            "year3":{  
               "avg":215512,
               "percent":7.209286304767154
            },
            "year5":{  
               "avg":179900,
               "percent":16.11098158078806
            },
            "year10":{  
               "avg":0,
               "percent":0
            }
         },
         "title":"Minnesota",
         "latLng":[  
            46.729553,
            -94.68589980000002
         ]
      },
      {  
         "stateId":"S26",
         "value":{  
            "year1":{  
               "avg":175000,
               "percent":4.477611940298507
            },
            "year3":{  
               "avg":156625,
               "percent":5.540897097625329
            },
            "year5":{  
               "avg":149950,
               "percent":7.708878288967533
            },
            "year10":{  
               "avg":0,
               "percent":0
            }
         },
         "title":"Mississippi",
         "latLng":[  
            32.3546679,
            -89.39852830000001
         ]
      },
      {  
         "stateId":"S25",
         "value":{  
            "year1":{  
               "avg":169900,
               "percent":6.2539086929330825
            },
            "year3":{  
               "avg":139900,
               "percent":9.683666881859263
            },
            "year5":{  
               "avg":134900,
               "percent":11.482939632545932
            },
            "year10":{  
               "avg":0,
               "percent":0
            }
         },
         "title":"Missouri",
         "latLng":[  
            37.9642529,
            -91.8318334
         ]
      },
      {  
         "stateId":"S27",
         "value":{  
            "year1":{  
               "avg":299500,
               "percent":0.7738896366083445
            },
            "year3":{  
               "avg":295000,
               "percent":0.7569386038687973
            },
            "year5":{  
               "avg":274900,
               "percent":4.282729805013927
            },
            "year10":{  
               "avg":0,
               "percent":0
            }
         },
         "title":"Montana",
         "latLng":[  
            46.8796822,
            -110.36256579999997
         ]
      },
      {  
         "stateId":"S30",
         "value":{  
            "year1":{  
               "avg":197500,
               "percent":7.512248230811106
            },
            "year3":{  
               "avg":164600,
               "percent":9.08588787627727
            },
            "year5":{  
               "avg":135000,
               "percent":18.796992481203006
            },
            "year10":{  
               "avg":0,
               "percent":0
            }
         },
         "title":"Nebraska",
         "latLng":[  
            41.4925374,
            -99.90181310000003
         ]
      },
      {  
         "stateId":"S34",
         "value":{  
            "year1":{  
               "avg":295000,
               "percent":6.306306306306306
            },
            "year3":{  
               "avg":239000,
               "percent":10.486891385767791
            },
            "year5":{  
               "avg":189900,
               "percent":21.67457207671685
            },
            "year10":{  
               "avg":0,
               "percent":0
            }
         },
         "title":"Nevada",
         "latLng":[  
            38.8026097,
            -116.41938900000002
         ]
      },
      {  
         "stateId":"S31",
         "value":{  
            "year1":{  
               "avg":279000,
               "percent":3.5442568194470216
            },
            "year3":{  
               "avg":242900,
               "percent":6.917033914543016
            },
            "year5":{  
               "avg":229000,
               "percent":9.84251968503937
            },
            "year10":{  
               "avg":0,
               "percent":0
            }
         },
         "title":"New Hampshire",
         "latLng":[  
            43.1938516,
            -71.57239529999998
         ]
      },
      {  
         "stateId":"S32",
         "value":{  
            "year1":{  
               "avg":299000,
               "percent":4.181184668989547
            },
            "year3":{  
               "avg":279000,
               "percent":3.4602076124567476
            },
            "year5":{  
               "avg":275000,
               "percent":4.181184668989547
            },
            "year10":{  
               "avg":0,
               "percent":0
            }
         },
         "title":"New Jersey",
         "latLng":[  
            40.0583238,
            -74.4056612
         ]
      },
      {  
         "stateId":"S33",
         "value":{  
            "year1":{  
               "avg":222900,
               "percent":2.9799029799029797
            },
            "year3":{  
               "avg":204800,
               "percent":4.231938274491466
            },
            "year5":{  
               "avg":199000,
               "percent":5.664849490400569
            },
            "year10":{  
               "avg":0,
               "percent":0
            }
         },
         "title":"New Mexico",
         "latLng":[  
            34.5199402,
            -105.87009009999997
         ]
      },
      {  
         "stateId":"S35",
         "value":{  
            "year1":{  
               "avg":339000,
               "percent":1.4970059880239521
            },
            "year3":{  
               "avg":319000,
               "percent":3.0395136778115504
            },
            "year5":{  
               "avg":299990,
               "percent":6.10494686927808
            },
            "year10":{  
               "avg":0,
               "percent":0
            }
         },
         "title":"New York",
         "latLng":[  
            40.7127753,
            -74.0059728
         ]
      },
      {  
         "stateId":"S28",
         "value":{  
            "year1":{  
               "avg":249900,
               "percent":4.364167884735853
            },
            "year3":{  
               "avg":213000,
               "percent":7.971484121840571
            },
            "year5":{  
               "avg":194000,
               "percent":12.592926334760083
            },
            "year10":{  
               "avg":0,
               "percent":0
            }
         },
         "title":"North Carolina",
         "latLng":[  
            35.7595731,
            -79.01929969999998
         ]
      },
      {  
         "stateId":"S36",
         "value":{  
            "year1":{  
               "avg":154900,
               "percent":6.901311249137336
            },
            "year3":{  
               "avg":129900,
               "percent":8.77808988764045
            },
            "year5":{  
               "avg":120000,
               "percent":12.695525645689344
            },
            "year10":{  
               "avg":0,
               "percent":0
            }
         },
         "title":"Ohio",
         "latLng":[  
            40.4172871,
            -82.90712300000001
         ]
      },
      {  
         "stateId":"S37",
         "value":{  
            "year1":{  
               "avg":179900,
               "percent":2.09988649262202
            },
            "year3":{  
               "avg":163000,
               "percent":4.928550597841936
            },
            "year5":{  
               "avg":145000,
               "percent":10.741766697445367
            },
            "year10":{  
               "avg":0,
               "percent":0
            }
         },
         "title":"Oklahoma",
         "latLng":[  
            35.0077519,
            -97.09287699999999
         ]
      },
      {  
         "stateId":"S38",
         "value":{  
            "year1":{  
               "avg":352000,
               "percent":4.451038575667656
            },
            "year3":{  
               "avg":289000,
               "percent":9.82839313572543
            },
            "year5":{  
               "avg":249947,
               "percent":16.953818193296087
            },
            "year10":{  
               "avg":0,
               "percent":0
            }
         },
         "title":"Oregon",
         "latLng":[  
            43.8041334,
            -120.55420119999997
         ]
      },
      {  
         "stateId":"S39",
         "value":{  
            "year1":{  
               "avg":189900,
               "percent":5.529313698249514
            },
            "year3":{  
               "avg":169900,
               "percent":5.558643690939411
            },
            "year5":{  
               "avg":174900,
               "percent":4.111842105263158
            },
            "year10":{  
               "avg":0,
               "percent":0
            }
         },
         "title":"Pennsylvania",
         "latLng":[  
            41.2033216,
            -77.19452469999999
         ]
      },
      {  
         "stateId":"S40",
         "value":{  
            "year1":{  
               "avg":298000,
               "percent":4.9480542349005106
            },
            "year3":{  
               "avg":264000,
               "percent":6.049822064056939
            },
            "year5":{  
               "avg":249000,
               "percent":8.957952468007313
            },
            "year10":{  
               "avg":0,
               "percent":0
            }
         },
         "title":"Rhode Island",
         "latLng":[  
            41.5800945,
            -71.4774291
         ]
      },
      {  
         "stateId":"S41",
         "value":{  
            "year1":{  
               "avg":239000,
               "percent":4.366812227074235
            },
            "year3":{  
               "avg":210040,
               "percent":6.449314092285766
            },
            "year5":{  
               "avg":179900,
               "percent":14.10837908808785
            },
            "year10":{  
               "avg":0,
               "percent":0
            }
         },
         "title":"South Carolina",
         "latLng":[  
            33.836081,
            -81.1637245
         ]
      },
      {  
         "stateId":"S52",
         "value":{  
            "year1":{  
               "avg":215000,
               "percent":2.515198474192395
            },
            "year3":{  
               "avg":189900,
               "percent":6.199061496665843
            },
            "year5":{  
               "avg":167900,
               "percent":12.300861843823453
            },
            "year10":{  
               "avg":0,
               "percent":0
            }
         },
         "title":"South Dakota",
         "latLng":[  
            43.9695148,
            -99.90181310000003
         ]
      },
      {  
         "stateId":"S42",
         "value":{  
            "year1":{  
               "avg":225000,
               "percent":6.132075471698113
            },
            "year3":{  
               "avg":179900,
               "percent":11.138552729068905
            },
            "year5":{  
               "avg":164900,
               "percent":15.414208771479867
            },
            "year10":{  
               "avg":0,
               "percent":0
            }
         },
         "title":"Tennessee",
         "latLng":[  
            35.5174913,
            -86.5804473
         ]
      },
      {  
         "stateId":"S43",
         "value":{  
            "year1":{  
               "avg":269000,
               "percent":3.661086052188925
            },
            "year3":{  
               "avg":253613,
               "percent":2.944243637261224
            },
            "year5":{  
               "avg":190800,
               "percent":17.007394519356243
            },
            "year10":{  
               "avg":0,
               "percent":0
            }
         },
         "title":"Texas",
         "latLng":[  
            31.9685988,
            -99.90181310000003
         ]
      },
      {  
         "stateId":"S44",
         "value":{  
            "year1":{  
               "avg":329500,
               "percent":3.8613081166272654
            },
            "year3":{  
               "avg":290000,
               "percent":6.376109765940274
            },
            "year5":{  
               "avg":235000,
               "percent":16.740478299379983
            },
            "year10":{  
               "avg":0,
               "percent":0
            }
         },
         "title":"Utah",
         "latLng":[  
            39.3209801,
            -111.09373110000001
         ]
      },
      {  
         "stateId":"S46",
         "value":{  
            "year1":{  
               "avg":249000,
               "percent":2.0491803278688523
            },
            "year3":{  
               "avg":233000,
               "percent":3.319502074688797
            },
            "year5":{  
               "avg":229000,
               "percent":4.184100418410042
            },
            "year10":{  
               "avg":0,
               "percent":0
            }
         },
         "title":"Vermont",
         "latLng":[  
            44.5588028,
            -72.57784149999998
         ]
      },
      {  
         "stateId":"S45",
         "value":{  
            "year1":{  
               "avg":297970,
               "percent":4.943032736365717
            },
            "year3":{  
               "avg":266900,
               "percent":5.500380618549401
            },
            "year5":{  
               "avg":235000,
               "percent":11.814923916918401
            },
            "year10":{  
               "avg":0,
               "percent":0
            }
         },
         "title":"Virginia",
         "latLng":[  
            37.4315734,
            -78.65689420000001
         ]
      },
      {  
         "stateId":"S47",
         "value":{  
            "year1":{  
               "avg":350000,
               "percent":6.22154779969651
            },
            "year3":{  
               "avg":286950,
               "percent":9.898736164534109
            },
            "year5":{  
               "avg":255000,
               "percent":15.702479338842975
            },
            "year10":{  
               "avg":0,
               "percent":0
            }
         },
         "title":"Washington",
         "latLng":[  
            47.7510741,
            -120.7401385
         ]
      },
      {  
         "stateId":"S49",
         "value":{  
            "year1":{  
               "avg":150000,
               "percent":0.33444816053511706
            },
            "year3":{  
               "avg":149961.5,
               "percent":0.012834980489162776
            },
            "year5":{  
               "avg":139900,
               "percent":3.483959986202138
            },
            "year10":{  
               "avg":0,
               "percent":0
            }
         },
         "title":"West Virginia",
         "latLng":[  
            38.5976262,
            -80.45490259999997
         ]
      },
      {  
         "stateId":"S48",
         "value":{  
            "year1":{  
               "avg":195000,
               "percent":4.305964161540519
            },
            "year3":{  
               "avg":169900,
               "percent":6.878596875856399
            },
            "year5":{  
               "avg":155000,
               "percent":11.428571428571429
            },
            "year10":{  
               "avg":0,
               "percent":0
            }
         },
         "title":"Wisconsin",
         "latLng":[  
            43.7844397,
            -88.78786780000001
         ]
      },
      {  
         "stateId":"S50",
         "value":{  
            "year1":{  
               "avg":239000,
               "percent":0.8439882320550971
            },
            "year3":{  
               "avg":239000,
               "percent":0
            },
            "year5":{  
               "avg":217950,
               "percent":4.606630922420396
            },
            "year10":{  
               "avg":0,
               "percent":0
            }
         },
         "title":"Wyoming",
         "latLng":[  
            43.0759678,
            -107.29028390000002
         ]
      },
      {  
         "stateId":"S48",
         "value":{  
            "year1":{  
               "avg":195000,
               "percent":4.305964161540519
            },
            "year3":{  
               "avg":169900,
               "percent":6.878596875856399
            },
            "year5":{  
               "avg":155000,
               "percent":11.428571428571429
            },
            "year10":{  
               "avg":0,
               "percent":0
            }
         },
         "title":"Wisconsin",
         "latLng":[  
            43.7844397,
            -88.78786780000001
         ]
      },
      {  
         "stateId":"S50",
         "value":{  
            "year1":{  
               "avg":239000,
               "percent":0.8439882320550971
            },
            "year3":{  
               "avg":239000,
               "percent":0
            },
            "year5":{  
               "avg":217950,
               "percent":4.606630922420396
            },
            "year10":{  
               "avg":0,
               "percent":0
            }
         },
         "title":"Wyoming",
         "latLng":[  
            43.0759678,
            -107.29028390000002
         ]
      }
    ]
  };

/**
 * @file 
 *
 * Provides Global Utility functions
 * 
 * MVP pattern category: helper functions
 * requires: Settings
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

/**
 * @file 
 *
 * Handles all user requests from Presenter, and acts as a mediator to 
 * interact with the rest of the models to create App State changes, and
 * pass the events on to the Presenter
 * 
 * MVP pattern category: Model
 * requires:
 *	Presenters - Presenter
 *	Models - AppStateStorage, AreaCodeLoader, Coordinates, DataCleaner, Quandl
 *	Utils
 *
 */

var App = App || {};

App.AppStateManager = (function ($) {
	'use strict';

	var apiLoop;

	function getDataFromStorage (area) {
		console.log('getAppState()');
		// get data from cache
		App.AppStateStorage.get(area)
			.then(function(existingData) {
				// if data exists in cache, check if dataset has all loaded or not
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

  // stop the above function from continuing with loading and rendering new data
  function stopLoadingData () {
		clearInterval(apiLoop);
		App.AppStateStorage.storeInLocal();
	}

	// resumes startLoadingData function
	function resumeLoadingData (area) {
		area = area ? area : 'All States';
		App.AppStateStorage.get(area)
			.then(function(data) {
				console.log(data);
				return renderExistingData(data);
			})
			.then(function(currentDataLength) {
				App.AreaCodeLoader.getCodesFromJSON(area)
		      .then(getAndRenderDataFromAPI.bind(null, area, currentDataLength))
		      .catch();
			});
	}

	// do not resumes startLoadingData function, only render the data existing in cache
	function continueWithoutLoadingData (area) {
		App.AppStateStorage.get(area)
			.then(renderExistingData)
			.catch();
	}

	// render data that already exists in cache (receives existing data in cache)
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

	var APP_STATE = INITIAL_USA_DATA; // please see Utils/Settings.js

	function getAppState (area) {
		return new Promise(function(res, rej) {
			// if there is no data, check localStorage. If nothing, returns null
			if (APP_STATE.neighborhoods.length === 0) {
				getLocalStorageData()
					.then(function(localData) {
						// if local data is not empty, put it in cache and recall function
						if (localData && Object.keys(localData).includes('house-prices') && localData['house-prices'].length > 0) {
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

/**
 * @file 
 *
 * get area-codes internally stored JSON files. This is needed to make request to Quandl 
 * 
 * MVP pattern category: Model
 * requires: AppStateManager, Utils
 *
 */

var App = App || {};

App.AreaCodeLoader = (function ($) {
	'use strict';

  // get area-codes internally stored JSON files
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
          .catch(function(error){
            log(error);
            log('fail to get internal neighborhood_code JSON data');
          });
      }
    });
	}

  // asynchronouse request fired with a given url
  var asyncRequest = function(url) {
    log('asyncRequest()');
    return new Promise(function(res, rej){
      $.ajax({
        url: url,
        dataType: 'text',
        success: function (data) {res(data);},
        error: function(error) {rej("fail to get code");}
      }); // end ajax
    }); // end Promise
  };

  // format area codes (use-states) into a useful format for the app
  function formatStateCodes (codes) {
  	log('formatStateCodes()');
  	return new Promise(function(res) {
  		var formattedCodes = JSON.parse(codes).map(function(c) {
  			var str = c.code;
  			c.code = 'S' + str;
  			return c;
  		});
  		res(formattedCodes);
  	});
  }

  // format area codes (neighborhoods) into a useful fomat for the app
	function formatNeighborhoodCodes (area, codes) {
    return new Promise(function(res, rej){
      log('formatNeighborhoodCodes()');
      var abbrArea = abbrState(area, 'abbr');

      res(
        JSON.parse(codes)
          .filter(function(code){
            var codeArray = code['STATE|CODE'].split('|');
            return codeArray[0] === abbrArea;
          })
          .map(function(obj){
            var codeArray = obj['STATE|CODE'].split('|');
            var str = codeArray[1];
            var code = 'N' + str;
            return {
              'name': obj.name + ", " + obj.metro,
              'code': code
            };
          })
      );
    });
  }

	return {
		getCodesFromJSON: getCodesFromJSON
	};
})(jQuery);


/**
 * @file 
 *
 * gets Coordinates based on address, and put in into a format ready for storage
 * 
 * MVP pattern category: Model
 * requires: AppStateManager, Utils
 *
 */

var App = App || {};

App.Coordinates = (function ($) {
	'use strict';

  // gets Coordinates based on address, and put in into a format ready for storage
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
          args.code.latLng = latLng;
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
/**
 * @file 
 *
 * format raw data from Quandl so it's ready to be stored in cache and localStorage
 * 
 * MVP pattern category: Model
 * requires: AppStateManager, Utils
 *
 */

var App = App || {};

App.DataCleaner = (function ($) {
  'use strict';

  // format raw data from Quandl so it's ready to be stored in cache and localStorage
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

  return {
    formatQuandlData: cleanApiDataForStorage
  };
})(jQuery);
/**
 * @file 
 *
 * compose url and make ajax request to Quandl for house price data
 * 
 * MVP pattern category: Model
 * requires: AppStateManager, Utils
 *
 */

var App = App || {};

App.Quandl = (function ($) {
	'use strict';

  // get Quandl data from a provided area-code
	var getDataByCode = function(area_code) {
    log('request()');
    return new Promise(function(res, rej) {
      var BASE_URL = 'https://www.quandl.com/api/v3';
      var endpoint = '/datasets/ZILLOW/';
      var housePriceCode = 'MLPAH';
      var dataParam = area_code + '_' + housePriceCode;
      var queryParams = {
        'collapse': 'annual',
        'api_key' : '1aGVznRZH7ckoyhVtges'
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
        success: function (response) {res(response);},
        error: function () {rej(log("load data failed for: " + url + " ignore and move on."));} 
      }); // end ajax
    }); // end promise
  };

	return {
		getDataByCode: getDataByCode
	};

})(jQuery);
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
/**
 * @file 
 *
 * Listeners for User Events and provides functions for hiding and showing the bottom nav bar
 * 
 * MVP pattern category: View
 * requires: Presenter, Utils
 *
 */

var App = App || {};

App.ControlView = (function ($) {
  'use strict';

  var state;
  var dataType;
  var timeRange;

  // initialize listeners for the buttons in the app
  var init = function() {
    $('.js-search-location').unbind('submit').submit(function(e){
      e.preventDefault();
      console.log('logging execution');

      state = $( "#js-state option:selected" ).val();
      dataType = $( "#js-data-type option:selected" ).val();
      timeRange = $( "#js-year option:selected" ).val();

      App.Presenter.executeInput(state, dataType, timeRange);
    });

    $('.js-notify-pause-data-loading').click(function(e){
      e.preventDefault();
      log('stop data loading loop');
      App.Presenter.pauseDataLoad();
    });

    $('.js-notify-resume-data-loading').click(function(e){
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

  // hide bottom navigation bar (bottom select bar)
  function hideControlView() {
    $('.js-nav').removeClass("slideInUp");
    $('.js-nav').addClass("slideOutDown");
  }

  // show bottom navigation bar (bottom select bar)
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

/**
 * @file 
 *
 * Provides functions relating to building and navigating Google Map
 * 
 * MVP pattern category: View
 * requires: Presenter, Settings, Utils
 *
 */

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

  function moveToLocation(latLng) {
    log('moveToLocation()');
    var center = new google.maps.LatLng(latLng[0], latLng[1]);
    mapObject.panTo(center);
  }

  function zoom(level) { mapObject.setZoom(level); }

  function getMapObject() { return mapObject; }

	return {
		build: buildMap,
    mapObject: getMapObject,
    zoom: zoom,
    move: moveToLocation
	};

})(jQuery);
/**
 * @file 
 *
 * Create, store, and provide functions to control Google Map Markers
 * 
 * MVP pattern category: View
 * requires: Presenter, Utils
 *
 */

var App = App || {};

App.MarkerView = (function ($) {
	'use strict';

	var markers = [];
  var lookup = [];

  // kick off the process for creating a marker
  function setMarker(data /*latLng, latlng*/, args /*info, area, markerSize*/) {
    if (lookup.includes(data)) {
      console.log('marker exists');
      Promise.resolve();
    }
  	formatInfoWindow(args.info)
  		.then(createMarker.bind(null, args, data))
  		.catch();
  	Promise.resolve();
  }

  // create actual marker with the required settings
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
    lookup.push([data]);
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
    lookup = [];
  }

	return {
		setMarker: setMarker,
    clearMarkers: clearMarkers,
    clearInfoWindow: clearInfoWindow
	};

})(jQuery);
/**
 * @file
 *
 * Various user notifications for app to interact with users using feedbacks
 *
 * MVP pattern category: View
 * requires: Presenter, Utils
 *
 */

var App = App || {};

App.NotificationView = (function ($) {
	'use strict';

  var downloadTimer;
	var notifyMessage = 'Because this is a free service, we can only get data one at a time. Please wait for ';
  var notifyMessageEnd = 'seconds for data to load. Thank you for your understanding.';
  var noDataString = "sorry, there doesn't seem to be data for @state";
  var unstableConnect = "please wait a little bit more, your connection seems to be unstable...";
  var resumeLoadMessage = 'Data is incomplete for:';
  var resumeLoadCustom = '@area : you have loaded @existingDataLength out of @allData. <br/>If you have waited until timer ends, or if you have enough data, please do not resume. <br />Incomplete data is an error from out provider.';
  var resumeLoadBtn = $('#resume-buttons').html();

  // notify user of how long it takes for data to load
	function getWaitTime(n) {
    // set countdown animation
    $('.js-notify-message').html(notifyMessage);
    $('.js-notify-message-middle').html('');
    timer(n);
    $('.js-notify-message-last').html(notifyMessageEnd);
    $('.js-notify').removeClass("slideOutDown");
    $('.js-notify').addClass("slideInUp");
  }

  // close notification window
  function closeNotification() {
    $('.js-notify').removeClass("slideInUp");
    $('.js-notify').addClass("slideOutDown");
  }

  // notify user that data is not available for a particular usa-state
  function noData(state) {
    $('.js-notify-message').html(noDataString.replace('@state', state));
    $('.js-notify-message-middle').html('');
    $('.js-notify-timer').html('');
    $('.js-notify-message-last').html('');
    $('.js-notify').removeClass("slideOutDown");
    $('.js-notify').addClass("slideInUp");
  }

  // notify user that not all data has loaded, and ask if user wants to continue the loading
  // or just leave it as is
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

  // notify user with a message (for error handling that can be solved by user)
  function customMessage(message) {
    $('.js-notify-message').html(message);
    $('.js-notify-message-middle').html('');
    stopTimer();
    $('.js-notify-timer').html('sorry');
    $('.js-notify-message-last').html('');
    $('.js-notify').removeClass("slideOutDown");
    $('.js-notify').addClass("slideInUp");
  }

  // countdown timer: supply n as time
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

  // countdown timer: stop timer
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