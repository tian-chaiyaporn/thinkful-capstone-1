var log=function(a){console.log(a)},storageAvailable=function(a){var e;try{e=window[a];var n="__storage_test__";return e.setItem(n,n),e.removeItem(n),!0}catch(a){return a instanceof DOMException&&(22===a.code||1014===a.code||"QuotaExceededError"===a.name||"NS_ERROR_DOM_QUOTA_REACHED"===a.name)&&0!==e.length}},percentChg=function(a,e){return 0!==e?(a-e)/(a+e)*100:0};Number.prototype.format=function(a,e,n,i){var r="\\d(?=(\\d{"+(e||3)+"})+"+(a>0?"\\D":"$")+")",o=this.toFixed(Math.max(0,~~a));return(i?o.replace(".",i):o).replace(new RegExp(r,"g"),"$&"+(n||","))};var abbrState=function(a,e){var n=[["Arizona","AZ"],["Alabama","AL"],["Alaska","AK"],["Arizona","AZ"],["Arkansas","AR"],["California","CA"],["Colorado","CO"],["Connecticut","CT"],["Delaware","DE"],["Florida","FL"],["Georgia","GA"],["Hawaii","HI"],["Idaho","ID"],["Illinois","IL"],["Indiana","IN"],["Iowa","IA"],["Kansas","KS"],["Kentucky","KY"],["Kentucky","KY"],["Louisiana","LA"],["Maine","ME"],["Maryland","MD"],["Massachusetts","MA"],["Michigan","MI"],["Minnesota","MN"],["Mississippi","MS"],["Missouri","MO"],["Montana","MT"],["Nebraska","NE"],["Nevada","NV"],["New Hampshire","NH"],["New Jersey","NJ"],["New Mexico","NM"],["New York","NY"],["North Carolina","NC"],["North Dakota","ND"],["Ohio","OH"],["Oklahoma","OK"],["Oregon","OR"],["Pennsylvania","PA"],["Rhode Island","RI"],["South Carolina","SC"],["South Dakota","SD"],["Tennessee","TN"],["Texas","TX"],["Utah","UT"],["Vermont","VT"],["Virginia","VA"],["Washington","WA"],["West Virginia","WV"],["Wisconsin","WI"],["Wyoming","WY"]];if("abbr"==e){for(a=a.replace(/\w\S*/g,function(a){return a.charAt(0).toUpperCase()+a.substr(1).toLowerCase()}),i=0;i<n.length;i++)if(n[i][0]==a)return n[i][1]}else if("name"==e)for(a=a.toUpperCase(),i=0;i<n.length;i++)if(n[i][1]==a)return n[i][0]};
var map,gmap=function(e){"use strict";function t(){o.mapcanvas=e(".js-gmap");var t=e.extend({},o.mapDefaults,{zoom:o.zoom,center:new google.maps.LatLng(o.latCenter,o.lonCenter),zoomControlOptions:{position:google.maps.ControlPosition.LEFT_CENTER},maxZoom:o.maxZoom,minZoom:o.minZoom,styles:[{elementType:"geometry",stylers:[{color:"#212121"}]},{elementType:"labels.icon",stylers:[{visibility:"off"}]},{elementType:"labels.text.fill",stylers:[{color:"#757575"}]},{elementType:"labels.text.stroke",stylers:[{color:"#212121"}]},{featureType:"administrative",elementType:"geometry",stylers:[{color:"#757575"}]},{featureType:"administrative.country",elementType:"labels.text.fill",stylers:[{color:"#9e9e9e"}]},{featureType:"administrative.land_parcel",stylers:[{visibility:"off"}]},{featureType:"administrative.locality",elementType:"labels.text.fill",stylers:[{color:"#bdbdbd"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#757575"}]},{featureType:"poi.business",stylers:[{visibility:"off"}]},{featureType:"poi.park",elementType:"geometry",stylers:[{color:"#181818"}]},{featureType:"poi.park",elementType:"labels.text",stylers:[{visibility:"off"}]},{featureType:"poi.park",elementType:"labels.text.fill",stylers:[{color:"#616161"}]},{featureType:"poi.park",elementType:"labels.text.stroke",stylers:[{color:"#1b1b1b"}]},{featureType:"road",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"geometry.fill",stylers:[{color:"#2c2c2c"}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{color:"#8a8a8a"}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#373737"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#3c3c3c"}]},{featureType:"road.highway.controlled_access",elementType:"geometry",stylers:[{color:"#4e4e4e"}]},{featureType:"road.local",elementType:"labels.text.fill",stylers:[{color:"#616161"}]},{featureType:"transit",elementType:"labels.text.fill",stylers:[{color:"#757575"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#000000"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#3d3d3d"}]}]});map=new google.maps.Map(o.mapcanvas[0],t)}function l(){var e=new google.maps.LatLng(37.09024,-96.712891);map.panTo(e),map.setZoom(4)}var o={mapDefaults:{panControl:!1,zoomControl:!0,zoomControlOptions:!0,scaleControl:!1,mapTypeControl:!1,streetViewControl:!1,scrollwheel:!1,zoom:4,maxZoom:16,minZoom:3},mapcanvas:0,latCenter:37.09024,lonCenter:-96.712891};return{build:t,zoomOut:l}}(jQuery);
var router=function(e,t){"use strict";return{init:function(){t("/:dataType/:timeRange/:state",App.executeInput),e(".js-search-location").submit(function(a){a.preventDefault();var r=e("#js-state option:selected").val(),i=e("#js-data-type option:selected").val(),n=e("#js-year option:selected").val();Marker.clearMarkers(),notify.waitFinished(),t.redirect("/"+i+"/"+n+"/"+r)})}}}(jQuery,page);
var clean=function(e){"use strict";return{formatForStorage:function(e){return new Promise(function(r){log("format data from api to store in cache");var n=e.dataset.data;r({HousePrice:{"1year":{avgPrice:0 in n?n[0][1]:0,percentChange:percentChg(n[0][1],1 in n?n[1][1]:0)},"3year":{avgPrice:2 in n?n[2][1]:0,percentChange:percentChg(n[0][1],2 in n?n[2][1]:0)},"5year":{avgPrice:4 in n?n[4][1]:0,percentChange:percentChg(n[0][1],4 in n?n[4][1]:0)},"10year":{avgPrice:9 in n?n[9][1]:0,percentChange:percentChg(n[0][1],9 in n?n[9][1]:0)}}})})}}}(jQuery);
var api=function(n){"use strict";return{request:function(a,e){return log("request()"),new Promise(function(o,r){var t=e+a+"_A.json",s={api_key:"1aGVznRZH7ckoyhVtges",collapse:"annual"},u="?";for(var i in s)u=u+i+"="+s[i]+"&";u=u.substring(0,u.length-1);var c="https://www.quandl.com/api/v3/datasets/ZILL/"+t+u;log(c),n.ajax({url:c,dataType:"json",success:function(n){o(n)},error:function(){r(log("load data failed for: "+c+" ignore and move on."))}})})}}}(jQuery);
var HousePriceModel=function(o){"use strict";var e={},t=function(){return log("getCache()"),e},a=function(o,t){return log("addToCache()"),new Promise(function(a){switch(t.length){case 1:e[t[0]]=o;break;case 2:e[t[0]][t[1]]=o;break;case 3:e[t[0]][t[1]][t[2]]=o;break;case 4:e[t[0]][t[1]][t[2]][t[3]]=o;break;case 5:e[t[0]][t[1]][t[2]][t[3]][t[4]]=o}a()})},n=function(){return log("addToLocalStorage()"),new Promise(function(o){storageAvailable("localStorage")&&localStorage.setItem("HousePriceData",JSON.stringify(e))})};return{getExistingData:function(t){log("getExistingData()");var a=!1;o.isEmptyObject(e)||(a="All States"===t||"neighborhoods"in e[t]);var n,r=!1;return localStorage.getItem("HousePriceData")&&(n=JSON.parse(localStorage.getItem("HousePriceData")),r="All States"===t||n[t].neighborhoods),new Promise(function(o,c){if(a)return log("data already exists"),void o(e);if(r){log("get from local storage");localStorage.getItem("HousePriceData");return e="All States"===t?n:n[t].neighbothoods,void o(e)}log("no existing data, goes on to get from Quandl API request"),o()})},getCache:t,getData:function(t,n,r){return log("getQuandlData()"),new Promise(function(c,i){var l="All States"===r?"S":"N";api.request(t,l).then(clean.formatForStorage).then(function(t){function l(){e[r].hasOwnProperty("neighborhoods")?a(t,[r,"neighborhoods",n]).catch(function(){console.log("fail to add area data to cache")}):a({},[r,"neighborhoods"]).then(a.bind(null,t,[r,"neighborhoods",n])).catch(function(){console.log("fail to add area data to cache")})}log(t),o.isEmptyObject(t)?i(console.log("no data from Quandl")):function(){"All States"!==r?l():a(t,[n]).catch(function(){console.log("fail to add formatted data to cache")}),c(t)}()}).catch()})},addToCache:a,storeInLocal:n}}(jQuery);
var AreaCodeModel=function(t){"use strict";var e,o=[],n=[],r=function(){return log("getAllStates()"),a().then(i).then(u).catch(function(t){log(t)})},a=function(){return log("getCode()"),new Promise(function(o,n){if(t.support.cors=!0,"All States"===e)return void o("state_code.json");o("/build/neighborhood_code.json")})},i=function(e){return log("asyncRequest()"),new Promise(function(o,n){t.ajax({url:e,method:"GET",dataType:"json",success:function(t){o(t)},error:function(){n("fail to get code")}})})},u=function(t){return log("formatCode()"),new Promise(function(r,a){if("All States"===e)return o=t,void r({codes:o,stateName:e});n=t,n.map(function(t){var e=t["City|Code"].split("|");t.city=e[0],t.code=e[1]}),log(n);var i=abbrState(e,"abbr"),u=n.filter(function(t){return t.metro===i});log(u),r({codes:u,stateName:e})})};return{getCodeByName:function(t){return log("getByName()"),new Promise(function(a,i){if(e=t,"All States"===e?o.length>0:n.length>0){var u=abbrState(e,"abbr");a({codes:"All States"===e?o:n.filter(function(t){return t.Metro===u}),stateName:e})}else a(r(t))})}}}(jQuery);
var Marker=function(e){"use strict";function a(){t.map(function(e){e.infowindow.close()})}function o(){t.map(function(e){e.setVisible(!1)})}var t=[],n=function(e){i(e).then(r).then(s).catch(function(e){log(e)})},i=function(a){var o={};return o=HousePriceModel.getCache(),log(o),"All States"===a.area?e.isEmptyObject(o)||(o=o[a.areaName]):!e.isEmptyObject(o)&&o.hasOwnProperty(a.area)&&(o=o[a.area],o=o.hasOwnProperty("neighborhoods")?o.neighborhoods[a.areaName]:{}),new Promise(function(n,i){var r={};return r=t.find(function(e){return e.title===a.areaName}),e.isEmptyObject(r)?o.hasOwnProperty("latLng")?(s({latLng:o.latLng,argsObject:a}),void i("coordinates already exist")):void n(a):(r.infowindow.setContent(a.info),r.icon.scale=a.markerSize/100,r.setAnimation(google.maps.Animation.BOUNCE),setTimeout(function(){r.setAnimation(null)},400),r.setVisible(!0),void i("markers already exists"))})},r=function(e){var a="All States"===e.area?"":e.area,o=e.areaName+" "+a+" United States";return log(o),new Promise(function(a,t){var n=new google.maps.Geocoder,i=[];n.geocode({address:o},function(o,n){if(n!=google.maps.GeocoderStatus.OK)return void t("cannot find geocode");i[0]=o[0].geometry.location.lat(),i[1]=o[0].geometry.location.lng(),"All States"===e.area?HousePriceModel.addToCache(i,[e.areaName,"latLng"]):HousePriceModel.addToCache(i,[e.area,"neighborhoods",e.areaName,"latLng"]),a({latLng:i,argsObject:e})})})},s=function(e){log("displayMarker()");var o=new google.maps.InfoWindow({content:e.argsObject.info}),n=100,i="red";if("All States"!==e.argsObject.area){var r=new google.maps.LatLng(e.latLng[0],e.latLng[1]);map.panTo(r),map.setZoom(8),n=400,i="yellow",i=e.argsObject.markerSize>0?"yellow":"lightblue"}var s={path:google.maps.SymbolPath.CIRCLE,fillColor:i,fillOpacity:.6,scaledSize:new google.maps.Size(e.argsObject.markerSize,e.argsObject.markerSize),scale:e.argsObject.markerSize/n+4,strokeWeight:0},l=new google.maps.Marker({position:{lat:e.latLng[0],lng:e.latLng[1]},icon:s,map:map,title:e.argsObject.areaName,infowindow:o});l.setAnimation(google.maps.Animation.BOUNCE),setTimeout(function(){l.setAnimation(null)},400),t.push(l),google.maps.event.addListener(l,"click",function(){a(),this.infowindow.open(map,this)})};return{buildMarkers:n,removeInfowindows:a,clearMarkers:o}}(jQuery);
var notify=function(t){"use strict";function e(e){t(".js-notify-message").html(r.replace("@state",e)),t(".js-notify-timer").html(""),t(".js-notify-message-last").html(""),t(".js-notify").removeClass("slideOutDown"),t(".js-notify").addClass("slideInUp")}function s(e){t(".js-notify-message").html(o),n(e),t(".js-notify-message-last").html(l),t(".js-notify").removeClass("slideOutDown"),t(".js-notify").addClass("slideInUp")}function n(e){var s=e,n=document.getElementById("countdowntimer"),i=setInterval(function(){s--,n.classList.add("flipInX"),n.innerHTML=s,setTimeout(function(){n.classList.remove("flipInX")},980),t(".js-search-location").submit(function(t){t.preventDefault(),clearInterval(i)}),s<=0&&(t(".js-notify-message").html(""),clearInterval(i),n.innerHTML="sorry",t(".js-notify-message-last").html(f))},1e3)}function i(){t(".js-notify").removeClass("slideInUp"),t(".js-notify").addClass("slideOutDown")}function a(e){t(".js-search-btn").html(e)}var o="Because this is a free service there is an API limitation. Please wait for ",l="seconds for data to load",r="sorry, there doesn't seem to be data for @state",f="please wait a little bit more, your connection seems to be unstable...";return{noData:e,startLoad:s,waitFinished:i,button:a,finish:i}}(jQuery);
var App=function(e){"use strict";var t=function(){gmap.build(),router.init(),n({params:{dataType:"HousePrice",timeRange:1,state:"All States"}})},n=function(t){function n(t){log("HousePriceModel.getExistingData()");var n=!1;return e.isEmptyObject(t)||(n="All States"===c||"neighborhoods"in t[c]),new Promise(function(e){n?(o(t),e()):(a(t),e())})}function o(e){return new Promise(function(t){var n="All States"===c?e:e[c].neighborhoods;for(var o in n)log("info and marker created from cache"),infowindow.formatInfo(o,c,r,s,n[o]).then(Marker.buildMarkers);t()})}function a(e){return new Promise(function(e){log("else AreaCodeModel.getCodeByName()"),AreaCodeModel.getCodeByName(c).then(i).then(HousePriceModel.storeInLocal).catch(),e()})}function i(e){notify.startLoad(e.codes.length);!function t(n,o){setTimeout(function(){HousePriceModel.getData(e.codes[o].code,e.codes[o].name,e.stateName).then(infowindow.formatInfo.bind(null,e.codes[o].name,e.stateName,r,s)).then(Marker.buildMarkers).then(HousePriceModel.storeInLocal).catch(),o++,o<n?t(n,o):notify.finish()},1e3)}(10,0)}var r=t.params.dataType,s=t.params.timeRange,c=t.params.state;HousePriceModel.getExistingData(c).then(n).then(notify.finish).catch()};return{init:t,executeInput:n}}(jQuery);App.init();
var infowindow=function(e){"use strict";function a(e,a,r,o,n){return log("formatInfo()"),new Promise(function(t,i){var c,f=["Place: @place <br>","@dataType: @displayData <br>","Average over: @time years"],l=o+"year",p=n.HousePrice[l];log(p);var m;"HousePrice"===r&&(m=p.avgPrice,c=m/100,m=0===m?"no data":m.format(2,3,",","."),m="$"+m),"PriceChange"===r&&(m=p.percentChange,c=o>4?400*m:1100*m,m=0===m?"no data":m.format(2,3,",","."),m+="%"),f=f.join("").replace("@place",e).replace("@dataType",r).replace("@displayData",m).replace("@time",o),t({info:f,area:a,areaName:e,markerSize:c})})}return{formatInfo:a}}(jQuery);