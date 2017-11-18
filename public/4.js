webpackJsonp([4,10],{

/***/ 577:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(643)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(645)
/* template */
var __vue_template__ = __webpack_require__(646)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\components\\maps\\bubble-maps\\BubbleMap.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-886a4a04", Component.options)
  } else {
    hotAPI.reload("data-v-886a4a04", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 588:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(698)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(700)
/* template */
var __vue_template__ = __webpack_require__(702)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\components\\maps\\bubble-maps\\BubbleMapsPage.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-36749e94", Component.options)
  } else {
    hotAPI.reload("data-v-36749e94", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 605:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(undefined);
// imports


// module
exports.push([module.i, ".ammapAlert\r\n{\r\n    display:table-cell;\r\n    vertical-align:middle;\r\n    text-align:center;\r\n    font-family:verdana,helvetica,arial,sans-serif;\r\n    font-size:12px;\r\n    color:#CC0000;\r\n}\r\n\r\n.ammapDescriptionWindow\r\n{\r\n   font-size:11px;\r\n   font-family:verdana,helvetica,arial,sans-serif;\r\n   background-color:#FFFFFF;\r\n   border-style:solid;\r\n   border-color:#DADADA;\r\n   border-width:1px;\r\n   color:#000000;\r\n   padding:8px;\r\n   -webkit-box-sizing: border-box;\r\n   -moz-box-sizing: border-box;\r\n   box-sizing: border-box;\r\n}\r\n\r\n.ammapDescriptionTitle\r\n{\r\n   font-size:12px;\r\n   font-weight:bold;\r\n   font-family:verdana,helvetica,arial,sans-serif;\r\n   padding-bottom:5px;\r\n}\r\n\r\n.ammapDescriptionWindowCloseButton\r\n{\r\n\r\n}\r\n\r\n.ammapObjectList ul\r\n{\r\n    padding-left:20px;\r\n    list-style:square outside;\r\n    color:#999999;\r\n    font-family:verdana,helvetica,arial,sans-serif;\r\n    font-size: 12px;\r\n}\r\n\r\n.ammapObjectList ul ul\r\n{\r\n    padding-left:14px;\r\n}\r\n\r\n.ammapObjectList a\r\n{\r\n    color:#000000;\r\n}\r\n\r\n.ammapObjectList a\r\n{\r\n    color:#000000;\r\n    text-decoration:none;\r\n    display:block;\r\n    padding:2px;\r\n}\r\n\r\n.ammapObjectList a:hover\r\n{\r\n    color:#CC0000;\r\n    text-decoration:none;\r\n    background:#FFFFFF;\r\n    cursor:pointer;\r\n    display:block;\r\n}\r\n\r\n.ammapDescriptionText\r\n{\r\n\toverflow: auto;\r\n}\r\n\r\n\r\n.amChartsPlotArea\r\n{\r\n\r\n}", ""]);

// exports


/***/ }),

/***/ 606:
/***/ (function(module, exports) {

(function(){var d;window.AmCharts?d=window.AmCharts:(d={},window.AmCharts=d,d.themes={},d.maps={},d.inheriting={},d.charts=[],d.onReadyArray=[],d.useUTC=!1,d.updateRate=60,d.uid=0,d.lang={},d.translations={},d.mapTranslations={},d.windows={},d.initHandlers=[],d.amString="am",d.pmString="pm");d.Class=function(a){var b=function(){arguments[0]!==d.inheriting&&(this.events={},this.construct.apply(this,arguments))};a.inherits?(b.prototype=new a.inherits(d.inheriting),b.base=a.inherits.prototype,delete a.inherits):
(b.prototype.createEvents=function(){for(var a=0;a<arguments.length;a++)this.events[arguments[a]]=[]},b.prototype.listenTo=function(a,b,c){this.removeListener(a,b,c);a.events[b].push({handler:c,scope:this})},b.prototype.addListener=function(a,b,c){this.removeListener(this,a,b);a&&this.events[a]&&this.events[a].push({handler:b,scope:c})},b.prototype.removeListener=function(a,b,c){if(a&&a.events&&(a=a.events[b]))for(b=a.length-1;0<=b;b--)a[b].handler===c&&a.splice(b,1)},b.prototype.fire=function(a){for(var b=
this.events[a.type],c=0;c<b.length;c++){var d=b[c];d.handler.call(d.scope,a)}});for(var c in a)b.prototype[c]=a[c];return b};d.addChart=function(a){window.requestAnimationFrame?d.animationRequested||(d.animationRequested=!0,window.requestAnimationFrame(d.update)):d.updateInt||(d.updateInt=setInterval(function(){d.update()},Math.round(1E3/d.updateRate)));d.charts.push(a)};d.removeChart=function(a){for(var b=d.charts,c=b.length-1;0<=c;c--)b[c]==a&&b.splice(c,1);0===b.length&&(d.requestAnimation&&(window.cancelAnimationFrame(d.requestAnimation),
d.animationRequested=!1),d.updateInt&&(clearInterval(d.updateInt),d.updateInt=NaN))};d.isModern=!0;d.getIEVersion=function(){var a=0,b,c;"Microsoft Internet Explorer"==navigator.appName&&(b=navigator.userAgent,c=/MSIE ([0-9]{1,}[.0-9]{0,})/,null!==c.exec(b)&&(a=parseFloat(RegExp.$1)));return a};d.applyLang=function(a,b){var c=d.translations;b.dayNames=d.extend({},d.dayNames);b.shortDayNames=d.extend({},d.shortDayNames);b.monthNames=d.extend({},d.monthNames);b.shortMonthNames=d.extend({},d.shortMonthNames);
b.amString="am";b.pmString="pm";c&&(c=c[a])&&(d.lang=c,b.langObj=c,c.monthNames&&(b.dayNames=d.extend({},c.dayNames),b.shortDayNames=d.extend({},c.shortDayNames),b.monthNames=d.extend({},c.monthNames),b.shortMonthNames=d.extend({},c.shortMonthNames)),c.am&&(b.amString=c.am),c.pm&&(b.pmString=c.pm));d.amString=b.amString;d.pmString=b.pmString};d.IEversion=d.getIEVersion();9>d.IEversion&&0<d.IEversion&&(d.isModern=!1,d.isIE=!0);d.dx=0;d.dy=0;if(document.addEventListener||window.opera)d.isNN=!0,d.isIE=
!1,d.dx=.5,d.dy=.5;document.attachEvent&&(d.isNN=!1,d.isIE=!0,d.isModern||(d.dx=0,d.dy=0));window.chrome&&(d.chrome=!0);d.handleMouseUp=function(a){for(var b=d.charts,c=0;c<b.length;c++){var e=b[c];e&&e.handleReleaseOutside&&e.handleReleaseOutside(a)}};d.handleMouseMove=function(a){for(var b=d.charts,c=0;c<b.length;c++){var e=b[c];e&&e.handleMouseMove&&e.handleMouseMove(a)}};d.handleWheel=function(a){for(var b=d.charts,c=0;c<b.length;c++){var e=b[c];if(e&&e.mouseIsOver){(e.mouseWheelScrollEnabled||
e.mouseWheelZoomEnabled)&&e.handleWheel&&e.handleWheel(a);break}}};d.resetMouseOver=function(){for(var a=d.charts,b=0;b<a.length;b++){var c=a[b];c&&(c.mouseIsOver=!1)}};d.ready=function(a){d.onReadyArray.push(a)};d.handleLoad=function(){d.isReady=!0;for(var a=d.onReadyArray,b=0;b<a.length;b++){var c=a[b];isNaN(d.processDelay)?c():setTimeout(c,d.processDelay*b)}d.onReadyArray=[]};d.addInitHandler=function(a,b){d.initHandlers.push({method:a,types:b})};d.callInitHandler=function(a){var b=d.initHandlers;
if(d.initHandlers)for(var c=0;c<b.length;c++){var e=b[c];e.types?d.isInArray(e.types,a.type)&&e.method(a):e.method(a)}};d.getUniqueId=function(){d.uid++;return"AmChartsEl-"+d.uid};d.isNN&&(document.addEventListener("mousemove",d.handleMouseMove),document.addEventListener("mouseup",d.handleMouseUp,!0),window.addEventListener("load",d.handleLoad,!0));d.isIE&&(document.attachEvent("onmousemove",d.handleMouseMove),document.attachEvent("onmouseup",d.handleMouseUp),window.attachEvent("onload",d.handleLoad));
d.addWheelListeners=function(){d.wheelIsListened||(d.isNN&&(window.addEventListener("DOMMouseScroll",d.handleWheel,!0),document.addEventListener("mousewheel",d.handleWheel,!0)),d.isIE&&document.attachEvent("onmousewheel",d.handleWheel));d.wheelIsListened=!0};d.clear=function(){var a=d.charts;if(a)for(var b=a.length-1;0<=b;b--)a[b].clear();d.updateInt&&clearInterval(d.updateInt);d.requestAnimation&&window.cancelAnimationFrame(d.requestAnimation);d.charts=[];d.isNN&&(document.removeEventListener("mousemove",
d.handleMouseMove,!0),document.removeEventListener("mouseup",d.handleMouseUp,!0),window.removeEventListener("load",d.handleLoad,!0),window.removeEventListener("DOMMouseScroll",d.handleWheel,!0),document.removeEventListener("mousewheel",d.handleWheel,!0));d.isIE&&(document.detachEvent("onmousemove",d.handleMouseMove),document.detachEvent("onmouseup",d.handleMouseUp),window.detachEvent("onload",d.handleLoad))};d.makeChart=function(a,b,c){var e=b.type,g=b.theme;d.isString(g)&&(g=d.themes[g],b.theme=
g);var f;switch(e){case "serial":f=new d.AmSerialChart(g);break;case "xy":f=new d.AmXYChart(g);break;case "pie":f=new d.AmPieChart(g);break;case "radar":f=new d.AmRadarChart(g);break;case "gauge":f=new d.AmAngularGauge(g);break;case "funnel":f=new d.AmFunnelChart(g);break;case "map":f=new d.AmMap(g);break;case "stock":f=new d.AmStockChart(g);break;case "gantt":f=new d.AmGanttChart(g)}d.extend(f,b);d.isReady?isNaN(c)?f.write(a):setTimeout(function(){d.realWrite(f,a)},c):d.ready(function(){isNaN(c)?
f.write(a):setTimeout(function(){d.realWrite(f,a)},c)});return f};d.realWrite=function(a,b){a.write(b)};d.updateCount=0;d.validateAt=Math.round(d.updateRate/10);d.update=function(){var a=d.charts;d.updateCount++;var b=!1;d.updateCount==d.validateAt&&(b=!0,d.updateCount=0);if(a)for(var c=a.length-1;0<=c;c--)a[c].update&&a[c].update(),b&&(a[c].autoResize?a[c].validateSize&&a[c].validateSize():a[c].premeasure&&a[c].premeasure());window.requestAnimationFrame&&(d.requestAnimation=window.requestAnimationFrame(d.update))};
"complete"==document.readyState&&d.handleLoad()})();(function(){var d=window.AmCharts;d.toBoolean=function(a,b){if(void 0===a)return b;switch(String(a).toLowerCase()){case "true":case "yes":case "1":return!0;case "false":case "no":case "0":case null:return!1;default:return!!a}};d.removeFromArray=function(a,b){var c;if(void 0!==b&&void 0!==a)for(c=a.length-1;0<=c;c--)a[c]==b&&a.splice(c,1)};d.getPath=function(){var a=document.getElementsByTagName("script");if(a)for(var b=0;b<a.length;b++){var c=a[b].src;if(-1!==c.search(/\/(amcharts|ammap)\.js/))return c.replace(/\/(amcharts|ammap)\.js.*/,
"/")}};d.normalizeUrl=function(a){return""!==a&&-1===a.search(/\/$/)?a+"/":a};d.isAbsolute=function(a){return 0===a.search(/^http[s]?:|^\//)};d.isInArray=function(a,b){for(var c=0;c<a.length;c++)if(a[c]==b)return!0;return!1};d.getDecimals=function(a){var b=0;isNaN(a)||(a=String(a),-1!=a.indexOf("e-")?b=Number(a.split("-")[1]):-1!=a.indexOf(".")&&(b=a.split(".")[1].length));return b};d.wordwrap=function(a,b,c,e){var g,f,h,k;a+="";if(1>b)return a;g=-1;for(a=(k=a.split(/\r\n|\n|\r/)).length;++g<a;k[g]+=
h){h=k[g];for(k[g]="";h.length>b;k[g]+=d.trim(h.slice(0,f))+((h=h.slice(f)).length?c:""))f=2==e||(f=h.slice(0,b+1).match(/\S*(\s)?$/))[1]?b:f.input.length-f[0].length||1==e&&b||f.input.length+(f=h.slice(b).match(/^\S*/))[0].length;h=d.trim(h)}return k.join(c)};d.trim=function(a){return a.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")};d.wrappedText=function(a,b,c,e,g,f,h,k){var l=d.text(a,b,c,e,g,f,h);if(l){var m=l.getBBox();if(m.width>k){var n="\n";d.isModern||(n="<br>");k=Math.floor(k/(m.width/
b.length));2<k&&(k-=2);b=d.wordwrap(b,k,n,!0);l.remove();l=d.text(a,b,c,e,g,f,h)}}return l};d.getStyle=function(a,b){var c="";if(document.defaultView&&document.defaultView.getComputedStyle)try{c=document.defaultView.getComputedStyle(a,"").getPropertyValue(b)}catch(e){}else a.currentStyle&&(b=b.replace(/\-(\w)/g,function(a,b){return b.toUpperCase()}),c=a.currentStyle[b]);return c};d.removePx=function(a){if(void 0!==a)return Number(a.substring(0,a.length-2))};d.getURL=function(a,b){if(a)if("_self"!=
b&&b)if("_top"==b&&window.top)window.top.location.href=a;else if("_parent"==b&&window.parent)window.parent.location.href=a;else if("_blank"==b)window.open(a);else{var c=document.getElementsByName(b)[0];c?c.src=a:(c=d.windows[b])?c.opener&&!c.opener.closed?c.location.href=a:d.windows[b]=window.open(a):d.windows[b]=window.open(a)}else window.location.href=a};d.ifArray=function(a){return a&&"object"==typeof a&&0<a.length?!0:!1};d.callMethod=function(a,b){var c;for(c=0;c<b.length;c++){var e=b[c];if(e){if(e[a])e[a]();
var d=e.length;if(0<d){var f;for(f=0;f<d;f++){var h=e[f];if(h&&h[a])h[a]()}}}}};d.toNumber=function(a){return"number"==typeof a?a:Number(String(a).replace(/[^0-9\-.]+/g,""))};d.toColor=function(a){if(""!==a&&void 0!==a)if(-1!=a.indexOf(",")){a=a.split(",");var b;for(b=0;b<a.length;b++){var c=a[b].substring(a[b].length-6,a[b].length);a[b]="#"+c}}else a=a.substring(a.length-6,a.length),a="#"+a;return a};d.toCoordinate=function(a,b,c){var e;void 0!==a&&(a=String(a),c&&c<b&&(b=c),e=Number(a),-1!=a.indexOf("!")&&
(e=b-Number(a.substr(1))),-1!=a.indexOf("%")&&(e=b*Number(a.substr(0,a.length-1))/100));return e};d.fitToBounds=function(a,b,c){a<b&&(a=b);a>c&&(a=c);return a};d.isDefined=function(a){return void 0===a?!1:!0};d.stripNumbers=function(a){return a.replace(/[0-9]+/g,"")};d.roundTo=function(a,b){if(0>b)return a;var c=Math.pow(10,b);return Math.round(a*c)/c};d.toFixed=function(a,b){var c=!1;0>a&&(c=!0,a=Math.abs(a));var e=String(Math.round(a*Math.pow(10,b)));if(0<b){var d=e.length;if(d<b){var f;for(f=0;f<
b-d;f++)e="0"+e}d=e.substring(0,e.length-b);""===d&&(d=0);e=d+"."+e.substring(e.length-b,e.length);return c?"-"+e:e}return String(e)};d.formatDuration=function(a,b,c,e,g,f){var h=d.intervals,k=f.decimalSeparator;if(a>=h[b].contains){var l=a-Math.floor(a/h[b].contains)*h[b].contains;"ss"==b?(l=d.formatNumber(l,f),1==l.split(k)[0].length&&(l="0"+l)):l=d.roundTo(l,f.precision);("mm"==b||"hh"==b)&&10>l&&(l="0"+l);c=l+""+e[b]+""+c;a=Math.floor(a/h[b].contains);b=h[b].nextInterval;return d.formatDuration(a,
b,c,e,g,f)}"ss"==b&&(a=d.formatNumber(a,f),1==a.split(k)[0].length&&(a="0"+a));"mm"==b&&(a=d.roundTo(a,f.precision));("mm"==b||"hh"==b)&&10>a&&(a="0"+a);c=a+""+e[b]+""+c;if(h[g].count>h[b].count)for(a=h[b].count;a<h[g].count;a++)b=h[b].nextInterval,"ss"==b||"mm"==b||"hh"==b?c="00"+e[b]+""+c:"DD"==b&&(c="0"+e[b]+""+c);":"==c.charAt(c.length-1)&&(c=c.substring(0,c.length-1));return c};d.formatNumber=function(a,b,c,e,g){a=d.roundTo(a,b.precision);isNaN(c)&&(c=b.precision);var f=b.decimalSeparator;b=
b.thousandsSeparator;var h;h=0>a?"-":"";a=Math.abs(a);var k=String(a),l=!1;-1!=k.indexOf("e")&&(l=!0);0<=c&&!l&&(k=d.toFixed(a,c));var m="";if(l)m=k;else{var k=k.split("."),l=String(k[0]),n;for(n=l.length;0<=n;n-=3)m=n!=l.length?0!==n?l.substring(n-3,n)+b+m:l.substring(n-3,n)+m:l.substring(n-3,n);void 0!==k[1]&&(m=m+f+k[1]);void 0!==c&&0<c&&"0"!=m&&(m=d.addZeroes(m,f,c))}m=h+m;""===h&&!0===e&&0!==a&&(m="+"+m);!0===g&&(m+="%");return m};d.addZeroes=function(a,b,c){a=a.split(b);void 0===a[1]&&0<c&&
(a[1]="0");return a[1].length<c?(a[1]+="0",d.addZeroes(a[0]+b+a[1],b,c)):void 0!==a[1]?a[0]+b+a[1]:a[0]};d.scientificToNormal=function(a){var b;a=String(a).split("e");var c;if("-"==a[1].substr(0,1)){b="0.";for(c=0;c<Math.abs(Number(a[1]))-1;c++)b+="0";b+=a[0].split(".").join("")}else{var e=0;b=a[0].split(".");b[1]&&(e=b[1].length);b=a[0].split(".").join("");for(c=0;c<Math.abs(Number(a[1]))-e;c++)b+="0"}return b};d.toScientific=function(a,b){if(0===a)return"0";var c=Math.floor(Math.log(Math.abs(a))*
Math.LOG10E),e=String(e).split(".").join(b);return String(e)+"e"+c};d.randomColor=function(){return"#"+("00000"+(16777216*Math.random()<<0).toString(16)).substr(-6)};d.hitTest=function(a,b,c){var e=!1,g=a.x,f=a.x+a.width,h=a.y,k=a.y+a.height,l=d.isInRectangle;e||(e=l(g,h,b));e||(e=l(g,k,b));e||(e=l(f,h,b));e||(e=l(f,k,b));e||!0===c||(e=d.hitTest(b,a,!0));return e};d.isInRectangle=function(a,b,c){return a>=c.x-5&&a<=c.x+c.width+5&&b>=c.y-5&&b<=c.y+c.height+5?!0:!1};d.isPercents=function(a){if(-1!=
String(a).indexOf("%"))return!0};d.formatValue=function(a,b,c,e,g,f,h,k){if(b){void 0===g&&(g="");var l;for(l=0;l<c.length;l++){var m=c[l],n=b[m];void 0!==n&&(n=f?d.addPrefix(n,k,h,e):d.formatNumber(n,e),a=a.replace(new RegExp("\\[\\["+g+""+m+"\\]\\]","g"),n))}}return a};d.formatDataContextValue=function(a,b){if(a){var c=a.match(/\[\[.*?\]\]/g),e;for(e=0;e<c.length;e++){var d=c[e],d=d.substr(2,d.length-4);void 0!==b[d]&&(a=a.replace(new RegExp("\\[\\["+d+"\\]\\]","g"),b[d]))}}return a};d.massReplace=
function(a,b){for(var c in b)if(b.hasOwnProperty(c)){var e=b[c];void 0===e&&(e="");a=a.replace(c,e)}return a};d.cleanFromEmpty=function(a){return a.replace(/\[\[[^\]]*\]\]/g,"")};d.addPrefix=function(a,b,c,e,g){var f=d.formatNumber(a,e),h="",k,l,m;if(0===a)return"0";0>a&&(h="-");a=Math.abs(a);if(1<a)for(k=b.length-1;-1<k;k--){if(a>=b[k].number&&(l=a/b[k].number,m=Number(e.precision),1>m&&(m=1),c=d.roundTo(l,m),m=d.formatNumber(c,{precision:-1,decimalSeparator:e.decimalSeparator,thousandsSeparator:e.thousandsSeparator}),
!g||l==c)){f=h+""+m+""+b[k].prefix;break}}else for(k=0;k<c.length;k++)if(a<=c[k].number){l=a/c[k].number;m=Math.abs(Math.floor(Math.log(l)*Math.LOG10E));l=d.roundTo(l,m);f=h+""+l+""+c[k].prefix;break}return f};d.remove=function(a){a&&a.remove()};d.getEffect=function(a){">"==a&&(a="easeOutSine");"<"==a&&(a="easeInSine");"elastic"==a&&(a="easeOutElastic");return a};d.getObjById=function(a,b){var c,e;for(e=0;e<a.length;e++){var d=a[e];if(d.id==b){c=d;break}}return c};d.applyTheme=function(a,b,c){b||
(b=d.theme);try{b=JSON.parse(JSON.stringify(b))}catch(e){}b&&b[c]&&d.extend(a,b[c])};d.isString=function(a){return"string"==typeof a?!0:!1};d.extend=function(a,b,c){var e;a||(a={});for(e in b)c?a.hasOwnProperty(e)||(a[e]=b[e]):a[e]=b[e];return a};d.copyProperties=function(a,b){for(var c in a)a.hasOwnProperty(c)&&"events"!=c&&void 0!==a[c]&&"function"!=typeof a[c]&&"cname"!=c&&(b[c]=a[c])};d.processObject=function(a,b,c,e){if(!1===a instanceof b&&(a=e?d.extend(new b(c),a):d.extend(a,new b(c),!0),a.listeners))for(var g in a.listeners)b=
a.listeners[g],a.addListener(b.event,b.method);return a};d.fixNewLines=function(a){var b=RegExp("\\n","g");a&&(a=a.replace(b,"<br />"));return a};d.fixBrakes=function(a){if(d.isModern){var b=RegExp("<br>","g");a&&(a=a.replace(b,"\n"))}else a=d.fixNewLines(a);return a};d.deleteObject=function(a,b){if(a){if(void 0===b||null===b)b=20;if(0!==b)if("[object Array]"===Object.prototype.toString.call(a))for(var c=0;c<a.length;c++)d.deleteObject(a[c],b-1),a[c]=null;else if(a&&!a.tagName)try{for(c in a.theme=
null,a)a[c]&&("object"==typeof a[c]&&d.deleteObject(a[c],b-1),"function"!=typeof a[c]&&(a[c]=null))}catch(e){}}};d.bounce=function(a,b,c,e,d){return(b/=d)<1/2.75?7.5625*e*b*b+c:b<2/2.75?e*(7.5625*(b-=1.5/2.75)*b+.75)+c:b<2.5/2.75?e*(7.5625*(b-=2.25/2.75)*b+.9375)+c:e*(7.5625*(b-=2.625/2.75)*b+.984375)+c};d.easeInOutQuad=function(a,b,c,e,d){b/=d/2;if(1>b)return e/2*b*b+c;b--;return-e/2*(b*(b-2)-1)+c};d.easeInSine=function(a,b,c,e,d){return-e*Math.cos(b/d*(Math.PI/2))+e+c};d.easeOutSine=function(a,
b,c,e,d){return e*Math.sin(b/d*(Math.PI/2))+c};d.easeOutElastic=function(a,b,c,e,d){a=1.70158;var f=0,h=e;if(0===b)return c;if(1==(b/=d))return c+e;f||(f=.3*d);h<Math.abs(e)?(h=e,a=f/4):a=f/(2*Math.PI)*Math.asin(e/h);return h*Math.pow(2,-10*b)*Math.sin(2*(b*d-a)*Math.PI/f)+e+c};d.fixStepE=function(a){a=a.toExponential(0).split("e");var b=Number(a[1]);9==Number(a[0])&&b++;return d.generateNumber(1,b)};d.generateNumber=function(a,b){var c="",e;e=0>b?Math.abs(b)-1:Math.abs(b);var d;for(d=0;d<e;d++)c+=
"0";return 0>b?Number("0."+c+String(a)):Number(String(a)+c)};d.setCN=function(a,b,c,e){if(a.addClassNames&&b&&(b=b.node)&&c){var d=b.getAttribute("class");a=a.classNamePrefix+"-";e&&(a="");d?b.setAttribute("class",d+" "+a+c):b.setAttribute("class",a+c)}};d.removeCN=function(a,b,c){b&&(b=b.node)&&c&&(b=b.classList)&&b.remove(a.classNamePrefix+"-"+c)};d.parseDefs=function(a,b){for(var c in a){var e=typeof a[c];if(0<a[c].length&&"object"==e)for(var g=0;g<a[c].length;g++)e=document.createElementNS(d.SVG_NS,
c),b.appendChild(e),d.parseDefs(a[c][g],e);else"object"==e?(e=document.createElementNS(d.SVG_NS,c),b.appendChild(e),d.parseDefs(a[c],e)):b.setAttribute(c,a[c])}}})();(function(){var d=window.AmCharts;d.AxisBase=d.Class({construct:function(a){this.createEvents("clickItem","rollOverItem","rollOutItem","rollOverGuide","rollOutGuide","clickGuide");this.titleDY=this.y=this.x=this.dy=this.dx=0;this.axisThickness=1;this.axisColor="#000000";this.axisAlpha=1;this.gridCount=this.tickLength=5;this.gridAlpha=.15;this.gridThickness=1;this.gridColor="#000000";this.dashLength=0;this.labelFrequency=1;this.showLastLabel=this.showFirstLabel=!0;this.fillColor="#FFFFFF";this.fillAlpha=
0;this.labelsEnabled=!0;this.labelRotation=0;this.autoGridCount=!0;this.offset=0;this.guides=[];this.visible=!0;this.counter=0;this.guides=[];this.ignoreAxisWidth=this.inside=!1;this.minHorizontalGap=75;this.minVerticalGap=35;this.titleBold=!0;this.minorGridEnabled=!1;this.minorGridAlpha=.07;this.autoWrap=!1;this.titleAlign="middle";this.labelOffset=0;this.bcn="axis-";this.centerLabels=!1;this.firstDayOfWeek=1;this.centerLabelOnFullPeriod=this.markPeriodChange=this.boldPeriodBeginning=!0;this.titleWidth=
0;this.periods=[{period:"fff",count:1},{period:"fff",count:5},{period:"fff",count:10},{period:"fff",count:50},{period:"fff",count:100},{period:"fff",count:500},{period:"ss",count:1},{period:"ss",count:5},{period:"ss",count:10},{period:"ss",count:30},{period:"mm",count:1},{period:"mm",count:5},{period:"mm",count:10},{period:"mm",count:30},{period:"hh",count:1},{period:"hh",count:3},{period:"hh",count:6},{period:"hh",count:12},{period:"DD",count:1},{period:"DD",count:2},{period:"DD",count:3},{period:"DD",
count:4},{period:"DD",count:5},{period:"WW",count:1},{period:"MM",count:1},{period:"MM",count:2},{period:"MM",count:3},{period:"MM",count:6},{period:"YYYY",count:1},{period:"YYYY",count:2},{period:"YYYY",count:5},{period:"YYYY",count:10},{period:"YYYY",count:50},{period:"YYYY",count:100}];this.dateFormats=[{period:"fff",format:"NN:SS.QQQ"},{period:"ss",format:"JJ:NN:SS"},{period:"mm",format:"JJ:NN"},{period:"hh",format:"JJ:NN"},{period:"DD",format:"MMM DD"},{period:"WW",format:"MMM DD"},{period:"MM",
format:"MMM"},{period:"YYYY",format:"YYYY"}];this.nextPeriod={fff:"ss",ss:"mm",mm:"hh",hh:"DD",DD:"MM",MM:"YYYY"};d.applyTheme(this,a,"AxisBase")},zoom:function(a,b){this.start=a;this.end=b;this.dataChanged=!0;this.draw()},fixAxisPosition:function(){var a=this.position;"H"==this.orientation?("left"==a&&(a="bottom"),"right"==a&&(a="top")):("bottom"==a&&(a="left"),"top"==a&&(a="right"));this.position=a},init:function(){this.createBalloon()},draw:function(){var a=this.chart;this.prevBY=this.prevBX=NaN;
this.allLabels=[];this.counter=0;this.destroy();this.fixAxisPosition();this.setBalloonBounds();this.labels=[];var b=a.container,c=b.set();a.gridSet.push(c);this.set=c;b=b.set();a.axesLabelsSet.push(b);this.labelsSet=b;this.axisLine=new this.axisRenderer(this);this.autoGridCount?("V"==this.orientation?(a=this.height/this.minVerticalGap,3>a&&(a=3)):a=this.width/this.minHorizontalGap,this.gridCountR=Math.max(a,1)):this.gridCountR=this.gridCount;this.axisWidth=this.axisLine.axisWidth;this.addTitle()},
setOrientation:function(a){this.orientation=a?"H":"V"},addTitle:function(){var a=this.title;this.titleLabel=null;if(a){var b=this.chart,c=this.titleColor;void 0===c&&(c=b.color);var e=this.titleFontSize;isNaN(e)&&(e=b.fontSize+1);a=d.text(b.container,a,c,b.fontFamily,e,this.titleAlign,this.titleBold);d.setCN(b,a,this.bcn+"title");this.titleLabel=a}},positionTitle:function(){var a=this.titleLabel;if(a){var b,c,e=this.labelsSet,g={};0<e.length()?g=e.getBBox():(g.x=0,g.y=0,g.width=this.width,g.height=
this.height,d.VML&&(g.y+=this.y,g.x+=this.x));e.push(a);var e=g.x,f=g.y;d.VML&&(f-=this.y,e-=this.x);var h=g.width,g=g.height,k=this.width,l=this.height,m=0,n=a.getBBox().height/2,q=this.inside,p=this.titleAlign;switch(this.position){case "top":b="left"==p?-1:"right"==p?k:k/2;c=f-10-n;break;case "bottom":b="left"==p?-1:"right"==p?k:k/2;c=f+g+10+n;break;case "left":b=e-10-n;q&&(b-=5);m=-90;c=("left"==p?l+1:"right"==p?-1:l/2)+this.titleDY;this.titleWidth=n+10;break;case "right":b=e+h+10+n,q&&(b+=7),
c=("left"==p?l+2:"right"==p?-2:l/2)+this.titleDY,this.titleWidth=n+10,m=-90}this.marginsChanged?(a.translate(b,c),this.tx=b,this.ty=c):a.translate(this.tx,this.ty);this.marginsChanged=!1;isNaN(this.titleRotation)||(m=this.titleRotation);0!==m&&a.rotate(m)}},pushAxisItem:function(a,b){var c=this,e=a.graphics();0<e.length()&&(b?c.labelsSet.push(e):c.set.push(e));if(e=a.getLabel())c.labelsSet.push(e),e.click(function(b){c.handleMouse(b,a,"clickItem")}).touchend(function(b){c.handleMouse(b,a,"clickItem")}).mouseover(function(b){c.handleMouse(b,
a,"rollOverItem")}).mouseout(function(b){c.handleMouse(b,a,"rollOutItem")})},handleMouse:function(a,b,c){this.fire({type:c,value:b.value,serialDataItem:b.serialDataItem,axis:this,target:b.label,chart:this.chart,event:a})},addGuide:function(a){for(var b=this.guides,c=!1,e=b.length,g=0;g<b.length;g++)b[g]==a&&(c=!0,e=g);a=d.processObject(a,d.Guide,this.theme);a.id||(a.id="guideAuto"+e+"_"+(new Date).getTime());c||b.push(a)},removeGuide:function(a){var b=this.guides,c;for(c=0;c<b.length;c++)b[c]==a&&
b.splice(c,1)},handleGuideOver:function(a){clearTimeout(this.chart.hoverInt);var b=a.graphics.getBBox(),c=this.x+b.x+b.width/2,b=this.y+b.y+b.height/2,e=a.fillColor;void 0===e&&(e=a.lineColor);this.chart.showBalloon(a.balloonText,e,!0,c,b);this.fire({type:"rollOverGuide",guide:a,chart:this.chart})},handleGuideOut:function(a){this.chart.hideBalloon();this.fire({type:"rollOutGuide",guide:a,chart:this.chart})},handleGuideClick:function(a){this.chart.hideBalloon();this.fire({type:"clickGuide",guide:a,
chart:this.chart})},addEventListeners:function(a,b){var c=this;a.mouseover(function(){c.handleGuideOver(b)});a.mouseup(function(){c.handleGuideClick(b)});a.touchstart(function(){c.handleGuideOver(b)});a.mouseout(function(){c.handleGuideOut(b)})},getBBox:function(){var a;this.labelsSet&&(a=this.labelsSet.getBBox());a?d.VML||(a={x:a.x+this.x,y:a.y+this.y,width:a.width,height:a.height}):a={x:0,y:0,width:0,height:0};return a},destroy:function(){d.remove(this.set);d.remove(this.labelsSet);var a=this.axisLine;
a&&d.remove(a.axisSet);d.remove(this.grid0)},chooseMinorFrequency:function(a){for(var b=10;0<b;b--)if(a/b==Math.round(a/b))return a/b},parseDatesDraw:function(){var a,b=this.chart,c=this.showFirstLabel,e=this.showLastLabel,g,f="",h=d.extractPeriod(this.minPeriod),k=d.getPeriodDuration(h.period,h.count),l,m,n,q,p,t=this.firstDayOfWeek,r=this.boldPeriodBeginning;a=this.minorGridEnabled;var w,z=this.gridAlpha,x,u=this.choosePeriod(0),A=u.period,u=u.count,y=d.getPeriodDuration(A,u);y<k&&(A=h.period,u=
h.count,y=k);h=A;"WW"==h&&(h="DD");this.stepWidth=this.getStepWidth(this.timeDifference);var B=Math.ceil(this.timeDifference/y)+5,D=l=d.resetDateToMin(new Date(this.startTime-y),A,u,t).getTime();if(h==A&&1==u&&this.centerLabelOnFullPeriod||this.autoWrap||this.centerLabels)n=y*this.stepWidth,this.autoWrap&&!this.centerLabels&&(n=-n);this.cellWidth=k*this.stepWidth;q=Math.round(l/y);k=-1;q/2==Math.round(q/2)&&(k=-2,l-=y);q=this.firstTime;var C=0,I=0;a&&1<u&&(w=this.chooseMinorFrequency(u),x=d.getPeriodDuration(A,
w),"DD"==A&&(x+=d.getPeriodDuration("hh")),"fff"==A&&(x=1));if(0<this.gridCountR)for(B-5-k>this.autoRotateCount&&!isNaN(this.autoRotateAngle)&&(this.labelRotationR=this.autoRotateAngle),a=k;a<=B;a++){p=q+y*(a+Math.floor((D-q)/y))-C;"DD"==A&&(p+=36E5);p=d.resetDateToMin(new Date(p),A,u,t).getTime();"MM"==A&&(g=(p-l)/y,1.5<=(p-l)/y&&(p=p-(g-1)*y+d.getPeriodDuration("DD",3),p=d.resetDateToMin(new Date(p),A,1).getTime(),C+=y));g=(p-this.startTime)*this.stepWidth;if("radar"==b.type){if(g=this.axisWidth-
g,0>g||g>this.axisWidth)continue}else this.rotate?"date"==this.type&&"middle"==this.gridPosition&&(I=-y*this.stepWidth/2):"date"==this.type&&(g=this.axisWidth-g);f=!1;this.nextPeriod[h]&&(f=this.checkPeriodChange(this.nextPeriod[h],1,p,l,h));l=!1;f&&this.markPeriodChange?(f=this.dateFormatsObject[this.nextPeriod[h]],this.twoLineMode&&(f=this.dateFormatsObject[h]+"\n"+f,f=d.fixBrakes(f)),l=!0):f=this.dateFormatsObject[h];r||(l=!1);this.currentDateFormat=f;f=d.formatDate(new Date(p),f,b);if(a==k&&!c||
a==B&&!e)f=" ";this.labelFunction&&(f=this.labelFunction(f,new Date(p),this,A,u,m).toString());this.boldLabels&&(l=!0);m=new this.axisItemRenderer(this,g,f,!1,n,I,!1,l);this.pushAxisItem(m);m=l=p;if(!isNaN(w))for(g=1;g<u;g+=w)this.gridAlpha=this.minorGridAlpha,f=p+x*g,f=d.resetDateToMin(new Date(f),A,w,t).getTime(),f=new this.axisItemRenderer(this,(f-this.startTime)*this.stepWidth,void 0,void 0,void 0,void 0,void 0,void 0,void 0,!0),this.pushAxisItem(f);this.gridAlpha=z}},choosePeriod:function(a){var b=
d.getPeriodDuration(this.periods[a].period,this.periods[a].count),c=this.periods;return this.timeDifference<b&&0<a?c[a-1]:Math.ceil(this.timeDifference/b)<=this.gridCountR?c[a]:a+1<c.length?this.choosePeriod(a+1):c[a]},getStepWidth:function(a){var b;this.startOnAxis?(b=this.axisWidth/(a-1),1==a&&(b=this.axisWidth)):b=this.axisWidth/a;return b},timeZoom:function(a,b){this.startTime=a;this.endTime=b},minDuration:function(){var a=d.extractPeriod(this.minPeriod);return d.getPeriodDuration(a.period,a.count)},
checkPeriodChange:function(a,b,c,e,g){c=new Date(c);var f=new Date(e),h=this.firstDayOfWeek;e=b;"DD"==a&&(b=1);c=d.resetDateToMin(c,a,b,h).getTime();b=d.resetDateToMin(f,a,b,h).getTime();return"DD"==a&&"hh"!=g&&c-b<d.getPeriodDuration(a,e)-d.getPeriodDuration("hh",1)?!1:c!=b?!0:!1},generateDFObject:function(){this.dateFormatsObject={};var a;for(a=0;a<this.dateFormats.length;a++){var b=this.dateFormats[a];this.dateFormatsObject[b.period]=b.format}},hideBalloon:function(){this.balloon&&this.balloon.hide&&
this.balloon.hide();this.prevBY=this.prevBX=NaN},formatBalloonText:function(a){return a},showBalloon:function(a,b,c,e){var d=this.offset;switch(this.position){case "bottom":b=this.height+d;break;case "top":b=-d;break;case "left":a=-d;break;case "right":a=this.width+d}c||(c=this.currentDateFormat);if("V"==this.orientation){if(0>b||b>this.height)return;if(isNaN(b)){this.hideBalloon();return}b=this.adjustBalloonCoordinate(b,e);e=this.coordinateToValue(b)}else{if(0>a||a>this.width)return;if(isNaN(a)){this.hideBalloon();
return}a=this.adjustBalloonCoordinate(a,e);e=this.coordinateToValue(a)}var f;if(d=this.chart.chartCursor)f=d.index;if(this.balloon&&void 0!==e&&this.balloon.enabled){if(this.balloonTextFunction){if("date"==this.type||!0===this.parseDates)e=new Date(e);e=this.balloonTextFunction(e)}else this.balloonText?e=this.formatBalloonText(this.balloonText,f,c):isNaN(e)||(e=this.formatValue(e,c));if(a!=this.prevBX||b!=this.prevBY)this.balloon.setPosition(a,b),this.prevBX=a,this.prevBY=b,e&&this.balloon.showBalloon(e)}},
adjustBalloonCoordinate:function(a){return a},createBalloon:function(){var a=this.chart,b=a.chartCursor;b&&(b=b.cursorPosition,"mouse"!=b&&(this.stickBalloonToCategory=!0),"start"==b&&(this.stickBalloonToStart=!0),"ValueAxis"==this.cname&&(this.stickBalloonToCategory=!1));this.balloon&&(this.balloon.destroy&&this.balloon.destroy(),d.extend(this.balloon,a.balloon,!0))},setBalloonBounds:function(){var a=this.balloon;if(a){var b=this.chart;a.cornerRadius=0;a.shadowAlpha=0;a.borderThickness=1;a.borderAlpha=
1;a.adjustBorderColor=!1;a.showBullet=!1;this.balloon=a;a.chart=b;a.mainSet=b.plotBalloonsSet;a.pointerWidth=this.tickLength;if(this.parseDates||"date"==this.type)a.pointerWidth=0;a.className=this.id;b="V";"V"==this.orientation&&(b="H");this.stickBalloonToCategory||(a.animationDuration=0);var c,e,d,f,h=this.inside,k=this.width,l=this.height;switch(this.position){case "bottom":c=0;e=k;h?(d=0,f=l):(d=l,f=l+1E3);break;case "top":c=0;e=k;h?(d=0,f=l):(d=-1E3,f=0);break;case "left":d=0;f=l;h?(c=0,e=k):
(c=-1E3,e=0);break;case "right":d=0,f=l,h?(c=0,e=k):(c=k,e=k+1E3)}a.drop||(a.pointerOrientation=b);a.setBounds(c,d,e,f)}}})})();(function(){var d=window.AmCharts;d.ValueAxis=d.Class({inherits:d.AxisBase,construct:function(a){this.cname="ValueAxis";this.createEvents("axisChanged","logarithmicAxisFailed","axisZoomed","axisIntZoomed");d.ValueAxis.base.construct.call(this,a);this.dataChanged=!0;this.stackType="none";this.position="left";this.unitPosition="right";this.includeAllValues=this.recalculateToPercents=this.includeHidden=this.includeGuidesInMinMax=this.integersOnly=!1;this.durationUnits={DD:"d. ",hh:":",mm:":",ss:""};
this.scrollbar=!1;this.baseValue=0;this.radarCategoriesEnabled=!0;this.axisFrequency=1;this.gridType="polygons";this.useScientificNotation=!1;this.axisTitleOffset=10;this.pointPosition="axis";this.minMaxMultiplier=1;this.logGridLimit=2;this.totalTextOffset=this.treatZeroAs=0;this.minPeriod="ss";this.relativeStart=0;this.relativeEnd=1;d.applyTheme(this,a,this.cname)},updateData:function(){0>=this.gridCountR&&(this.gridCountR=1);this.totals=[];this.data=this.chart.chartData;var a=this.chart;"xy"!=a.type&&
(this.stackGraphs("smoothedLine"),this.stackGraphs("line"),this.stackGraphs("column"),this.stackGraphs("step"));this.recalculateToPercents&&this.recalculate();if(this.synchronizationMultiplier&&this.synchronizeWith)d.isString(this.synchronizeWith)&&(this.synchronizeWith=a.getValueAxisById(this.synchronizeWith)),this.synchronizeWith&&(this.synchronizeWithAxis(this.synchronizeWith),this.foundGraphs=!0);else if(this.foundGraphs=!1,this.getMinMax(),0===this.start&&this.end==this.data.length-1&&isNaN(this.minZoom)&&
isNaN(this.maxZoom)||isNaN(this.fullMin)&&isNaN(this.fullMax))this.fullMin=this.min,this.fullMax=this.max,"date"!=this.type&&this.strictMinMax&&(isNaN(this.minimum)||(this.fullMin=this.minimum),isNaN(this.maximum)||(this.fullMax=this.maximum)),this.logarithmic&&(this.fullMin=this.logMin,0===this.fullMin&&(this.fullMin=this.treatZeroAs)),"date"==this.type&&(this.minimumDate||(this.fullMin=this.minRR),this.maximumDate||(this.fullMax=this.maxRR),this.strictMinMax&&(this.minimumDate&&(this.fullMin=this.minimumDate.getTime()),
this.maximumDate&&(this.fullMax=this.maximumDate.getTime())))},draw:function(){d.ValueAxis.base.draw.call(this);var a=this.chart,b=this.set;this.labelRotationR=this.labelRotation;d.setCN(a,this.set,"value-axis value-axis-"+this.id);d.setCN(a,this.labelsSet,"value-axis value-axis-"+this.id);d.setCN(a,this.axisLine.axisSet,"value-axis value-axis-"+this.id);var c=this.type;"duration"==c&&(this.duration="ss");!0===this.dataChanged&&(this.updateData(),this.dataChanged=!1);"date"==c&&(this.logarithmic=
!1,this.min=this.minRR,this.max=this.maxRR,this.reversed=!1,this.getDateMinMax());if(this.logarithmic){var e=this.treatZeroAs,g=this.getExtremes(0,this.data.length-1).min;!isNaN(this.minimum)&&this.minimum<g&&(g=this.minimum);this.logMin=g;this.minReal<g&&(this.minReal=g);isNaN(this.minReal)&&(this.minReal=g);0<e&&0===g&&(this.minReal=g=e);if(0>=g||0>=this.minimum){this.fire({type:"logarithmicAxisFailed",chart:a});return}}this.grid0=null;var f,h,k=a.dx,l=a.dy,e=!1,g=this.logarithmic;if(isNaN(this.min)||
isNaN(this.max)||!this.foundGraphs||Infinity==this.min||-Infinity==this.max)e=!0;else{"date"==this.type&&this.min==this.max&&(this.max+=this.minDuration(),this.min-=this.minDuration());var m=this.labelFrequency,n=this.showFirstLabel,q=this.showLastLabel,p=1,t=0;this.minCalc=this.min;this.maxCalc=this.max;if(this.strictMinMax&&(isNaN(this.minimum)||(this.min=this.minimum),isNaN(this.maximum)||(this.max=this.maximum),this.min==this.max))return;isNaN(this.minZoom)||(this.minReal=this.min=this.minZoom);
isNaN(this.maxZoom)||(this.max=this.maxZoom);if(this.logarithmic){h=this.fullMin;var r=this.fullMax;isNaN(this.minimum)||(h=this.minimum);isNaN(this.maximum)||(r=this.maximum);var r=Math.log(r)*Math.LOG10E-Math.log(h)*Math.LOG10E,w=Math.log(this.max)/Math.LN10-Math.log(h)*Math.LOG10E;this.relativeStart=d.roundTo((Math.log(this.minReal)/Math.LN10-Math.log(h)*Math.LOG10E)/r,5);this.relativeEnd=d.roundTo(w/r,5)}else this.relativeStart=d.roundTo(d.fitToBounds((this.min-this.fullMin)/(this.fullMax-this.fullMin),
0,1),5),this.relativeEnd=d.roundTo(d.fitToBounds((this.max-this.fullMin)/(this.fullMax-this.fullMin),0,1),5);var r=Math.round((this.maxCalc-this.minCalc)/this.step)+1,z;!0===g?(z=Math.log(this.max)*Math.LOG10E-Math.log(this.minReal)*Math.LOG10E,this.stepWidth=this.axisWidth/z,z>this.logGridLimit&&(r=Math.ceil(Math.log(this.max)*Math.LOG10E)+1,t=Math.round(Math.log(this.minReal)*Math.LOG10E),r>this.gridCountR&&(p=Math.ceil(r/this.gridCountR)))):this.stepWidth=this.axisWidth/(this.max-this.min);var x=
0;1>this.step&&-1<this.step&&(x=d.getDecimals(this.step));this.integersOnly&&(x=0);x>this.maxDecCount&&(x=this.maxDecCount);w=this.precision;isNaN(w)||(x=w);isNaN(this.maxZoom)&&(this.max=d.roundTo(this.max,this.maxDecCount),this.min=d.roundTo(this.min,this.maxDecCount));h={};h.precision=x;h.decimalSeparator=a.nf.decimalSeparator;h.thousandsSeparator=a.nf.thousandsSeparator;this.numberFormatter=h;var u;this.exponential=!1;for(h=t;h<r;h+=p){var A=d.roundTo(this.step*h+this.min,x);-1!=String(A).indexOf("e")&&
(this.exponential=!0)}this.duration&&(this.maxInterval=d.getMaxInterval(this.max,this.duration));var x=this.step,y,A=this.minorGridAlpha;this.minorGridEnabled&&(y=this.getMinorGridStep(x,this.stepWidth*x));if(this.autoGridCount||0!==this.gridCount)if("date"==c)this.generateDFObject(),this.timeDifference=this.max-this.min,this.maxTime=this.lastTime=this.max,this.startTime=this.firstTime=this.min,this.parseDatesDraw();else for(r>=this.autoRotateCount&&!isNaN(this.autoRotateAngle)&&(this.labelRotationR=
this.autoRotateAngle),c=this.minCalc,g&&(r++,c=this.maxCalc-r*x),this.gridCountReal=r,h=this.startCount=t;h<r;h+=p)if(t=x*h+c,t=d.roundTo(t,this.maxDecCount+1),!this.integersOnly||Math.round(t)==t)if(isNaN(w)||Number(d.toFixed(t,w))==t){if(!0===g)if(z>this.logGridLimit){if(t=Math.pow(10,h),t>this.max)continue}else if(0>=t&&(t=c+x*h+x/2,0>=t))continue;u=this.formatValue(t,!1,h);Math.round(h/m)!=h/m&&(u=void 0);if(0===h&&!n||h==r-1&&!q)u=" ";f=this.getCoordinate(t);var B;this.rotate&&this.autoWrap&&
(B=this.stepWidth*x-10);u=new this.axisItemRenderer(this,f,u,void 0,B,void 0,void 0,this.boldLabels);this.pushAxisItem(u);if(t==this.baseValue&&"radar"!=a.type){var D,C,I=this.width,H=this.height;"H"==this.orientation?0<=f&&f<=I+1&&(D=[f,f,f+k],C=[H,0,l]):0<=f&&f<=H+1&&(D=[0,I,I+k],C=[f,f,f+l]);D&&(f=d.fitToBounds(2*this.gridAlpha,0,1),isNaN(this.zeroGridAlpha)||(f=this.zeroGridAlpha),f=d.line(a.container,D,C,this.gridColor,f,1,this.dashLength),f.translate(this.x,this.y),this.grid0=f,a.axesSet.push(f),
f.toBack(),d.setCN(a,f,this.bcn+"zero-grid-"+this.id),d.setCN(a,f,this.bcn+"zero-grid"))}if(!isNaN(y)&&0<A&&h<r-1){f=x/y;g&&(y=x*(h+p)+this.minCalc,y=d.roundTo(y,this.maxDecCount+1),z>this.logGridLimit&&(y=Math.pow(10,h+p)),f=9,y=(y-t)/f);I=this.gridAlpha;this.gridAlpha=this.minorGridAlpha;for(H=1;H<f;H++){var Q=this.getCoordinate(t+y*H),Q=new this.axisItemRenderer(this,Q,"",!1,0,0,!1,!1,0,!0);this.pushAxisItem(Q)}this.gridAlpha=I}}z=this.guides;B=z.length;if(0<B){D=this.fillAlpha;for(h=this.fillAlpha=
0;h<B;h++)C=z[h],k=NaN,y=C.above,isNaN(C.toValue)||(k=this.getCoordinate(C.toValue),u=new this.axisItemRenderer(this,k,"",!0,NaN,NaN,C),this.pushAxisItem(u,y)),l=NaN,isNaN(C.value)||(l=this.getCoordinate(C.value),u=new this.axisItemRenderer(this,l,C.label,!0,NaN,(k-l)/2,C),this.pushAxisItem(u,y)),isNaN(k)&&(l-=3,k=l+3),u&&(m=u.label)&&this.addEventListeners(m,C),isNaN(k-l)||0>l&&0>k||(k=new this.guideFillRenderer(this,l,k,C),this.pushAxisItem(k,y),y=k.graphics(),C.graphics=y,this.addEventListeners(y,
C));this.fillAlpha=D}u=this.baseValue;this.min>this.baseValue&&this.max>this.baseValue&&(u=this.min);this.min<this.baseValue&&this.max<this.baseValue&&(u=this.max);g&&u<this.minReal&&(u=this.minReal);this.baseCoord=this.getCoordinate(u,!0);u={type:"axisChanged",target:this,chart:a};u.min=g?this.minReal:this.min;u.max=this.max;this.fire(u);this.axisCreated=!0}g=this.axisLine.set;u=this.labelsSet;b.translate(this.x,this.y);u.translate(this.x,this.y);this.positionTitle();"radar"!=a.type&&g.toFront();
!this.visible||e?(b.hide(),g.hide(),u.hide()):(b.show(),g.show(),u.show());this.axisY=this.y;this.axisX=this.x},getDateMinMax:function(){this.minimumDate&&(this.minimumDate instanceof Date||(this.minimumDate=d.getDate(this.minimumDate,this.chart.dataDateFormat,"fff")),this.min=this.minimumDate.getTime());this.maximumDate&&(this.maximumDate instanceof Date||(this.maximumDate=d.getDate(this.maximumDate,this.chart.dataDateFormat,"fff")),this.max=this.maximumDate.getTime())},formatValue:function(a,b,
c){var e=this.exponential,g=this.logarithmic,f=this.numberFormatter,h=this.chart;if(f)return!0===this.logarithmic&&(e=-1!=String(a).indexOf("e")?!0:!1),this.useScientificNotation&&(e=!0),this.usePrefixes&&(e=!1),e?(c=-1==String(a).indexOf("e")?a.toExponential(15):String(a),e=c.split("e"),c=Number(e[0]),e=Number(e[1]),c=d.roundTo(c,14),b||isNaN(this.precision)||(c=d.roundTo(c,this.precision)),10==c&&(c=1,e+=1),c=c+"e"+e,0===a&&(c="0"),1==a&&(c="1")):(g&&(e=String(a).split("."),e[1]?(f.precision=e[1].length,
0>c&&(f.precision=Math.abs(c)),b&&1<a&&(f.precision=0),b||isNaN(this.precision)||(f.precision=this.precision)):f.precision=-1),c=this.usePrefixes?d.addPrefix(a,h.prefixesOfBigNumbers,h.prefixesOfSmallNumbers,f,!b):d.formatNumber(a,f,f.precision)),this.duration&&(b&&(f.precision=0),c=d.formatDuration(a,this.duration,"",this.durationUnits,this.maxInterval,f)),"date"==this.type&&(c=d.formatDate(new Date(a),this.currentDateFormat,h)),this.recalculateToPercents?c+="%":(b=this.unit)&&(c="left"==this.unitPosition?
b+c:c+b),this.labelFunction&&(c="date"==this.type?this.labelFunction(c,new Date(a),this).toString():this.labelFunction(a,c,this).toString()),c},getMinorGridStep:function(a,b){var c=[5,4,2];60>b&&c.shift();for(var e=Math.floor(Math.log(Math.abs(a))*Math.LOG10E),d=0;d<c.length;d++){var f=a/c[d],h=Math.floor(Math.log(Math.abs(f))*Math.LOG10E);if(!(1<Math.abs(e-h)))if(1>a){if(h=Math.pow(10,-h)*f,h==Math.round(h))return f}else if(f==Math.round(f))return f}},stackGraphs:function(a){var b=this.stackType;
"stacked"==b&&(b="regular");"line"==b&&(b="none");"100% stacked"==b&&(b="100%");this.stackType=b;var c=[],e=[],g=[],f=[],h,k=this.chart.graphs,l,m,n,q,p,t=this.baseValue,r=!1;if("line"==a||"step"==a||"smoothedLine"==a)r=!0;if(r&&("regular"==b||"100%"==b))for(q=0;q<k.length;q++)n=k[q],n.stackGraph=null,n.hidden||(m=n.type,n.chart==this.chart&&n.valueAxis==this&&a==m&&n.stackable&&(l&&(n.stackGraph=l),l=n));n=this.start-10;l=this.end+10;q=this.data.length-1;n=d.fitToBounds(n,0,q);l=d.fitToBounds(l,
0,q);for(p=n;p<=l;p++){var w=0;for(q=0;q<k.length;q++)if(n=k[q],n.hidden)n.newStack&&(g[p]=NaN,e[p]=NaN);else if(m=n.type,n.chart==this.chart&&n.valueAxis==this&&a==m&&n.stackable)if(m=this.data[p].axes[this.id].graphs[n.id],h=m.values.value,isNaN(h))n.newStack&&(g[p]=NaN,e[p]=NaN);else{var z=d.getDecimals(h);w<z&&(w=z);isNaN(f[p])?f[p]=Math.abs(h):f[p]+=Math.abs(h);f[p]=d.roundTo(f[p],w);z=n.fillToGraph;r&&z&&(z=this.data[p].axes[this.id].graphs[z.id])&&(m.values.open=z.values.value);"regular"==
b&&(r&&(isNaN(c[p])?(c[p]=h,m.values.close=h,m.values.open=this.baseValue):(isNaN(h)?m.values.close=c[p]:m.values.close=h+c[p],m.values.open=c[p],c[p]=m.values.close)),"column"==a&&(n.newStack&&(g[p]=NaN,e[p]=NaN),m.values.close=h,0>h?(m.values.close=h,isNaN(e[p])?m.values.open=t:(m.values.close+=e[p],m.values.open=e[p]),e[p]=m.values.close):(m.values.close=h,isNaN(g[p])?m.values.open=t:(m.values.close+=g[p],m.values.open=g[p]),g[p]=m.values.close)))}}for(p=this.start;p<=this.end;p++)for(q=0;q<k.length;q++)(n=
k[q],n.hidden)?n.newStack&&(g[p]=NaN,e[p]=NaN):(m=n.type,n.chart==this.chart&&n.valueAxis==this&&a==m&&n.stackable&&(m=this.data[p].axes[this.id].graphs[n.id],h=m.values.value,isNaN(h)||(c=h/f[p]*100,m.values.percents=c,m.values.total=f[p],n.newStack&&(g[p]=NaN,e[p]=NaN),"100%"==b&&(isNaN(e[p])&&(e[p]=0),isNaN(g[p])&&(g[p]=0),0>c?(m.values.close=d.fitToBounds(c+e[p],-100,100),m.values.open=e[p],e[p]=m.values.close):(m.values.close=d.fitToBounds(c+g[p],-100,100),m.values.open=g[p],g[p]=m.values.close)))))},
recalculate:function(){var a=this.chart,b=a.graphs,c;for(c=0;c<b.length;c++){var e=b[c];if(e.valueAxis==this){var g="value";if("candlestick"==e.type||"ohlc"==e.type)g="open";var f,h,k=this.end+2,k=d.fitToBounds(this.end+1,0,this.data.length-1),l=this.start;0<l&&l--;var m;h=this.start;e.compareFromStart&&(h=0);if(!isNaN(a.startTime)&&(m=a.categoryAxis)){var n=m.minDuration(),n=new Date(a.startTime+n/2),q=d.resetDateToMin(new Date(a.startTime),m.minPeriod).getTime();d.resetDateToMin(new Date(n),m.minPeriod).getTime()>
q&&h++}if(m=a.recalculateFromDate)m=d.getDate(m,a.dataDateFormat,"fff"),h=a.getClosestIndex(a.chartData,"time",m.getTime(),!0,0,a.chartData.length),k=a.chartData.length-1;for(m=h;m<=k&&(h=this.data[m].axes[this.id].graphs[e.id],f=h.values[g],e.recalculateValue&&(f=h.dataContext[e.valueField+e.recalculateValue]),isNaN(f));m++);this.recBaseValue=f;for(g=l;g<=k;g++){h=this.data[g].axes[this.id].graphs[e.id];h.percents={};var l=h.values,p;for(p in l)h.percents[p]="percents"!=p?l[p]/f*100-100:l[p]}}}},
getMinMax:function(){var a=!1,b=this.chart,c=b.graphs,e;for(e=0;e<c.length;e++){var g=c[e].type;("line"==g||"step"==g||"smoothedLine"==g)&&this.expandMinMax&&(a=!0)}a&&(0<this.start&&this.start--,this.end<this.data.length-1&&this.end++);"serial"==b.type&&(!0!==b.categoryAxis.parseDates||a||this.end<this.data.length-1&&this.end++);this.includeAllValues&&(this.start=0,this.end=this.data.length-1);a=this.minMaxMultiplier;b=this.getExtremes(this.start,this.end);this.min=b.min;this.max=b.max;this.minRR=
this.min;this.maxRR=this.max;a=(this.max-this.min)*(a-1);this.min-=a;this.max+=a;a=this.guides.length;if(this.includeGuidesInMinMax&&0<a)for(b=0;b<a;b++)c=this.guides[b],c.toValue<this.min&&(this.min=c.toValue),c.value<this.min&&(this.min=c.value),c.toValue>this.max&&(this.max=c.toValue),c.value>this.max&&(this.max=c.value);isNaN(this.minimum)||(this.min=this.minimum);isNaN(this.maximum)||(this.max=this.maximum);"date"==this.type&&this.getDateMinMax();this.min>this.max&&(a=this.max,this.max=this.min,
this.min=a);isNaN(this.minZoom)||(this.min=this.minZoom);isNaN(this.maxZoom)||(this.max=this.maxZoom);this.minCalc=this.min;this.maxCalc=this.max;this.minReal=this.min;this.maxReal=this.max;0===this.min&&0===this.max&&(this.max=9);this.min>this.max&&(this.min=this.max-1);a=this.min;b=this.max;c=this.max-this.min;e=0===c?Math.pow(10,Math.floor(Math.log(Math.abs(this.max))*Math.LOG10E))/10:Math.pow(10,Math.floor(Math.log(Math.abs(c))*Math.LOG10E))/10;isNaN(this.maximum)&&(this.max=Math.ceil(this.max/
e)*e+e);isNaN(this.minimum)&&(this.min=Math.floor(this.min/e)*e-e);0>this.min&&0<=a&&(this.min=0);0<this.max&&0>=b&&(this.max=0);"100%"==this.stackType&&(this.min=0>this.min?-100:0,this.max=0>this.max?0:100);c=this.max-this.min;e=Math.pow(10,Math.floor(Math.log(Math.abs(c))*Math.LOG10E))/10;this.step=Math.ceil(c/this.gridCountR/e)*e;c=Math.pow(10,Math.floor(Math.log(Math.abs(this.step))*Math.LOG10E));c=d.fixStepE(c);e=Math.ceil(this.step/c);5<e&&(e=10);5>=e&&2<e&&(e=5);this.step=Math.ceil(this.step/
(c*e))*c*e;isNaN(this.setStep)||(this.step=this.setStep);1>c?(this.maxDecCount=Math.abs(Math.log(Math.abs(c))*Math.LOG10E),this.maxDecCount=Math.round(this.maxDecCount),this.step=d.roundTo(this.step,this.maxDecCount+1)):this.maxDecCount=0;this.min=this.step*Math.floor(this.min/this.step);this.max=this.step*Math.ceil(this.max/this.step);0>this.min&&0<=a&&(this.min=0);0<this.max&&0>=b&&(this.max=0);1<this.minReal&&1<this.max-this.minReal&&(this.minReal=Math.floor(this.minReal));c=Math.pow(10,Math.floor(Math.log(Math.abs(this.minReal))*
Math.LOG10E));0===this.min&&(this.minReal=c);0===this.min&&1<this.minReal&&(this.minReal=1);0<this.min&&0<this.minReal-this.step&&(this.minReal=this.min+this.step<this.minReal?this.min+this.step:this.min);this.logarithmic&&(2<Math.log(b)*Math.LOG10E-Math.log(a)*Math.LOG10E?(this.minReal=this.min=Math.pow(10,Math.floor(Math.log(Math.abs(a))*Math.LOG10E)),this.maxReal=this.max=Math.pow(10,Math.ceil(Math.log(Math.abs(b))*Math.LOG10E))):(a=Math.pow(10,Math.floor(Math.log(Math.abs(a))*Math.LOG10E))/10,
Math.pow(10,Math.floor(Math.log(Math.abs(this.min))*Math.LOG10E))/10<a&&(this.minReal=this.min=10*a)))},getExtremes:function(a,b){var c,e,d;for(d=a;d<=b;d++){var f=this.data[d].axes[this.id].graphs,h;for(h in f)if(f.hasOwnProperty(h)){var k=this.chart.graphsById[h];if(k.includeInMinMax&&(!k.hidden||this.includeHidden)){isNaN(c)&&(c=Infinity);isNaN(e)&&(e=-Infinity);this.foundGraphs=!0;k=f[h].values;this.recalculateToPercents&&(k=f[h].percents);var l;if(this.minMaxField)l=k[this.minMaxField],l<c&&
(c=l),l>e&&(e=l);else for(var m in k)k.hasOwnProperty(m)&&"percents"!=m&&"total"!=m&&"error"!=m&&(l=k[m],l<c&&(c=l),l>e&&(e=l))}}}return{min:c,max:e}},zoomOut:function(a){this.maxZoom=this.minZoom=NaN;this.zoomToRelativeValues(0,1,a)},zoomToRelativeValues:function(a,b,c){if(this.reversed){var e=a;a=1-b;b=1-e}var d=this.fullMax,e=this.fullMin,f=e+(d-e)*a,h=e+(d-e)*b;0<=this.minimum&&0>f&&(f=0);this.logarithmic&&(isNaN(this.minimum)||(e=this.minimum),isNaN(this.maximum)||(d=this.maximum),d=Math.log(d)*
Math.LOG10E-Math.log(e)*Math.LOG10E,f=Math.pow(10,d*a+Math.log(e)*Math.LOG10E),h=Math.pow(10,d*b+Math.log(e)*Math.LOG10E));return this.zoomToValues(f,h,c)},zoomToValues:function(a,b,c){if(b<a){var e=b;b=a;a=e}var g=this.fullMax,e=this.fullMin;this.relativeStart=d.roundTo((a-e)/(g-e),9);this.relativeEnd=d.roundTo((b-e)/(g-e),9);if(this.logarithmic){isNaN(this.minimum)||(e=this.minimum);isNaN(this.maximum)||(g=this.maximum);var g=Math.log(g)*Math.LOG10E-Math.log(e)*Math.LOG10E,f=Math.log(b)/Math.LN10-
Math.log(e)*Math.LOG10E;this.relativeStart=d.roundTo((Math.log(a)/Math.LN10-Math.log(e)*Math.LOG10E)/g,9);this.relativeEnd=d.roundTo(f/g,9)}if(this.minZoom!=a||this.maxZoom!=b)return this.minZoom=a,this.maxZoom=b,e={type:"axisZoomed"},e.chart=this.chart,e.valueAxis=this,e.startValue=a,e.endValue=b,e.relativeStart=this.relativeStart,e.relativeEnd=this.relativeEnd,this.prevStartValue==a&&this.prevEndValue==b||this.fire(e),this.prevStartValue=a,this.prevEndValue=b,c||(a={},d.copyProperties(e,a),a.type=
"axisIntZoomed",this.fire(a)),0===this.relativeStart&&1==this.relativeEnd&&(this.maxZoom=this.minZoom=NaN),!0},coordinateToValue:function(a){if(isNaN(a))return NaN;var b=this.axisWidth,c=this.stepWidth,e=this.reversed,d=this.rotate,f=this.min,h=this.minReal;return!0===this.logarithmic?Math.pow(10,(d?!0===e?(b-a)/c:a/c:!0===e?a/c:(b-a)/c)+Math.log(h)*Math.LOG10E):!0===e?d?f-(a-b)/c:a/c+f:d?a/c+f:f-(a-b)/c},getCoordinate:function(a,b){if(isNaN(a))return NaN;var c=this.rotate,e=this.reversed,d=this.axisWidth,
f=this.stepWidth,h=this.min,k=this.minReal;!0===this.logarithmic?(0===a&&(a=this.treatZeroAs),h=Math.log(a)*Math.LOG10E-Math.log(k)*Math.LOG10E,c=c?!0===e?d-f*h:f*h:!0===e?f*h:d-f*h):c=!0===e?c?d-f*(a-h):f*(a-h):c?f*(a-h):d-f*(a-h);1E7<Math.abs(c)&&(c=c/Math.abs(c)*1E7);b||(c=Math.round(c));return c},synchronizeWithAxis:function(a){this.synchronizeWith=a;this.listenTo(this.synchronizeWith,"axisChanged",this.handleSynchronization)},handleSynchronization:function(){if(this.synchronizeWith){d.isString(this.synchronizeWith)&&
(this.synchronizeWith=this.chart.getValueAxisById(this.synchronizeWith));var a=this.synchronizeWith,b=a.min,c=a.max,a=a.step,e=this.synchronizationMultiplier;e&&(this.min=b*e,this.max=c*e,this.step=a*e,b=Math.abs(Math.log(Math.abs(Math.pow(10,Math.floor(Math.log(Math.abs(this.step))*Math.LOG10E))))*Math.LOG10E),this.maxDecCount=b=Math.round(b),this.draw())}}})})();(function(){var d=window.AmCharts;d.RecAxis=d.Class({construct:function(a){var b=a.chart,c=a.axisThickness,e=a.axisColor,g=a.axisAlpha,f=a.offset,h=a.dx,k=a.dy,l=a.x,m=a.y,n=a.height,q=a.width,p=b.container;"H"==a.orientation?(e=d.line(p,[0,q],[0,0],e,g,c),this.axisWidth=a.width,"bottom"==a.position?(k=c/2+f+n+m-1,c=l):(k=-c/2-f+m+k,c=h+l)):(this.axisWidth=a.height,"right"==a.position?(e=d.line(p,[0,0,-h],[0,n,n-k],e,g,c),k=m+k,c=c/2+f+h+q+l-1):(e=d.line(p,[0,0],[0,n],e,g,c),k=m,c=-c/2-f+l));e.translate(c,
k);c=b.container.set();c.push(e);b.axesSet.push(c);d.setCN(b,e,a.bcn+"line");this.axisSet=c;this.set=e}})})();(function(){var d=window.AmCharts;d.RecItem=d.Class({construct:function(a,b,c,e,g,f,h,k,l,m,n,q){b=Math.round(b);var p=a.chart;this.value=c;void 0==c&&(c="");l||(l=0);void 0==e&&(e=!0);var t=p.fontFamily,r=a.fontSize;void 0==r&&(r=p.fontSize);var w=a.color;void 0==w&&(w=p.color);void 0!==n&&(w=n);var z=a.chart.container,x=z.set();this.set=x;var u=a.axisThickness,A=a.axisColor,y=a.axisAlpha,B=a.tickLength,D=a.gridAlpha,C=a.gridThickness,I=a.gridColor,H=a.dashLength,Q=a.fillColor,M=a.fillAlpha,P=a.labelsEnabled;
n=a.labelRotationR;var ia=a.counter,J=a.inside,aa=a.labelOffset,ma=a.dx,na=a.dy,Pa=a.orientation,Z=a.position,da=a.previousCoord,X=a.height,xa=a.width,ea=a.offset,fa,Ba;h?(void 0!==h.id&&(q=p.classNamePrefix+"-guide-"+h.id),P=!0,isNaN(h.tickLength)||(B=h.tickLength),void 0!=h.lineColor&&(I=h.lineColor),void 0!=h.color&&(w=h.color),isNaN(h.lineAlpha)||(D=h.lineAlpha),isNaN(h.dashLength)||(H=h.dashLength),isNaN(h.lineThickness)||(C=h.lineThickness),!0===h.inside&&(J=!0,0<ea&&(ea=0)),isNaN(h.labelRotation)||
(n=h.labelRotation),isNaN(h.fontSize)||(r=h.fontSize),h.position&&(Z=h.position),void 0!==h.boldLabel&&(k=h.boldLabel),isNaN(h.labelOffset)||(aa=h.labelOffset)):""===c&&(B=0);m&&!isNaN(a.minorTickLength)&&(B=a.minorTickLength);var ga="start";0<g&&(ga="middle");a.centerLabels&&(ga="middle");var V=n*Math.PI/180,Y,Da,G=0,v=0,oa=0,ha=Y=0,Qa=0;"V"==Pa&&(n=0);var ca;P&&""!==c&&(ca=a.autoWrap&&0===n?d.wrappedText(z,c,w,t,r,ga,k,Math.abs(g),0):d.text(z,c,w,t,r,ga,k),ga=ca.getBBox(),ha=ga.width,Qa=ga.height);
if("H"==Pa){if(0<=b&&b<=xa+1&&(0<B&&0<y&&b+l<=xa+1&&(fa=d.line(z,[b+l,b+l],[0,B],A,y,C),x.push(fa)),0<D&&(Ba=d.line(z,[b,b+ma,b+ma],[X,X+na,na],I,D,C,H),x.push(Ba))),v=0,G=b,h&&90==n&&J&&(G-=r),!1===e?(ga="start",v="bottom"==Z?J?v+B:v-B:J?v-B:v+B,G+=3,0<g&&(G+=g/2-3,ga="middle"),0<n&&(ga="middle")):ga="middle",1==ia&&0<M&&!h&&!m&&da<xa&&(e=d.fitToBounds(b,0,xa),da=d.fitToBounds(da,0,xa),Y=e-da,0<Y&&(Da=d.rect(z,Y,a.height,Q,M),Da.translate(e-Y+ma,na),x.push(Da))),"bottom"==Z?(v+=X+r/2+ea,J?(0<n?(v=
X-ha/2*Math.sin(V)-B-3,a.centerRotatedLabels||(G+=ha/2*Math.cos(V)-4+2)):0>n?(v=X+ha*Math.sin(V)-B-3+2,G+=-ha*Math.cos(V)-Qa*Math.sin(V)-4):v-=B+r+3+3,v-=aa):(0<n?(v=X+ha/2*Math.sin(V)+B+3,a.centerRotatedLabels||(G-=ha/2*Math.cos(V))):0>n?(v=X+B+3-ha/2*Math.sin(V)+2,G+=ha/2*Math.cos(V)):v+=B+u+3+3,v+=aa)):(v+=na+r/2-ea,G+=ma,J?(0<n?(v=ha/2*Math.sin(V)+B+3,a.centerRotatedLabels||(G-=ha/2*Math.cos(V))):v+=B+3,v+=aa):(0<n?(v=-(ha/2)*Math.sin(V)-B-6,a.centerRotatedLabels||(G+=ha/2*Math.cos(V))):v-=B+
r+3+u+3,v-=aa)),"bottom"==Z?Y=(J?X-B-1:X+u-1)+ea:(oa=ma,Y=(J?na:na-B-u+1)-ea),f&&(G+=f),r=G,0<n&&(r+=ha/2*Math.cos(V)),ca&&(f=0,J&&(f=ha/2*Math.cos(V)),r+f>xa+2||0>r))ca.remove(),ca=null}else{0<=b&&b<=X+1&&(0<B&&0<y&&b+l<=X+1&&(fa=d.line(z,[0,B+1],[b+l,b+l],A,y,C),x.push(fa)),0<D&&(Ba=d.line(z,[0,ma,xa+ma],[b,b+na,b+na],I,D,C,H),x.push(Ba)));ga="end";if(!0===J&&"left"==Z||!1===J&&"right"==Z)ga="start";v=b-Qa/2+2;1==ia&&0<M&&!h&&!m&&(e=d.fitToBounds(b,0,X),da=d.fitToBounds(da,0,X),V=e-da,Da=d.polygon(z,
[0,a.width,a.width,0],[0,0,V,V],Q,M),Da.translate(ma,e-V+na),x.push(Da));v+=r/2;"right"==Z?(G+=ma+xa+ea,v+=na,J?(f||(v-=r/2+3),G=G-(B+4)-aa):(G+=B+4+u,v-=2,G+=aa)):J?(G+=B+4-ea,f||(v-=r/2+3),h&&(G+=ma,v+=na),G+=aa):(G+=-B-u-4-2-ea,v-=2,G-=aa);fa&&("right"==Z?(oa+=ma+ea+xa-1,Y+=na,oa=J?oa-u:oa+u):(oa-=ea,J||(oa-=B+u)));f&&(v+=f);J=-3;"right"==Z&&(J+=na);ca&&(v>X+1||v<J-r/10)&&(ca.remove(),ca=null)}fa&&(fa.translate(oa,Y),d.setCN(p,fa,a.bcn+"tick"),d.setCN(p,fa,q,!0),h&&d.setCN(p,fa,"guide"));!1===
a.visible&&(fa&&fa.remove(),ca&&(ca.remove(),ca=null));ca&&(ca.attr({"text-anchor":ga}),ca.translate(G,v,NaN,!0),0!==n&&ca.rotate(-n,a.chart.backgroundColor),a.allLabels.push(ca),this.label=ca,d.setCN(p,ca,a.bcn+"label"),d.setCN(p,ca,q,!0),h&&d.setCN(p,ca,"guide"));Ba&&(d.setCN(p,Ba,a.bcn+"grid"),d.setCN(p,Ba,q,!0),h&&d.setCN(p,Ba,"guide"));Da&&(d.setCN(p,Da,a.bcn+"fill"),d.setCN(p,Da,q,!0));m?Ba&&d.setCN(p,Ba,a.bcn+"grid-minor"):(a.counter=0===ia?1:0,a.previousCoord=b);0===this.set.node.childNodes.length&&
this.set.remove()},graphics:function(){return this.set},getLabel:function(){return this.label}})})();(function(){var d=window.AmCharts;d.RecFill=d.Class({construct:function(a,b,c,e){var g=a.dx,f=a.dy,h=a.orientation,k=0;if(c<b){var l=b;b=c;c=l}var m=e.fillAlpha;isNaN(m)&&(m=0);var l=a.chart.container,n=e.fillColor;"V"==h?(b=d.fitToBounds(b,0,a.height),c=d.fitToBounds(c,0,a.height)):(b=d.fitToBounds(b,0,a.width),c=d.fitToBounds(c,0,a.width));c-=b;isNaN(c)&&(c=4,k=2,m=0);0>c&&"object"==typeof n&&(n=n.join(",").split(",").reverse());"V"==h?(h=d.rect(l,a.width,c,n,m),h.translate(g,b-k+f)):(h=d.rect(l,
c,a.height,n,m),h.translate(b-k+g,f));d.setCN(a.chart,h,"guide-fill");e.id&&d.setCN(a.chart,h,"guide-fill-"+e.id);this.set=l.set([h])},graphics:function(){return this.set},getLabel:function(){}})})();(function(){var d=window.AmCharts;d.AmChart=d.Class({construct:function(a){this.svgIcons=this.tapToActivate=!0;this.theme=a;this.classNamePrefix="amcharts";this.addClassNames=!1;this.version="3.21.7";d.addChart(this);this.createEvents("buildStarted","dataUpdated","init","rendered","drawn","failed","resized","animationFinished");this.height=this.width="100%";this.dataChanged=!0;this.chartCreated=!1;this.previousWidth=this.previousHeight=0;this.backgroundColor="#FFFFFF";this.borderAlpha=this.backgroundAlpha=
0;this.color=this.borderColor="#000000";this.fontFamily="Verdana";this.fontSize=11;this.usePrefixes=!1;this.autoResize=!0;this.autoDisplay=!1;this.addCodeCredits=this.accessible=!0;this.touchStartTime=this.touchClickDuration=0;this.precision=-1;this.percentPrecision=2;this.decimalSeparator=".";this.thousandsSeparator=",";this.labels=[];this.allLabels=[];this.titles=[];this.marginRight=this.marginLeft=this.autoMarginOffset=0;this.timeOuts=[];this.creditsPosition="top-left";var b=document.createElement("div"),
c=b.style;c.overflow="hidden";c.position="relative";c.textAlign="left";this.chartDiv=b;b=document.createElement("div");c=b.style;c.overflow="hidden";c.position="relative";c.textAlign="left";this.legendDiv=b;this.titleHeight=0;this.hideBalloonTime=150;this.handDrawScatter=2;this.cssScale=this.handDrawThickness=1;this.cssAngle=0;this.prefixesOfBigNumbers=[{number:1E3,prefix:"k"},{number:1E6,prefix:"M"},{number:1E9,prefix:"G"},{number:1E12,prefix:"T"},{number:1E15,prefix:"P"},{number:1E18,prefix:"E"},
{number:1E21,prefix:"Z"},{number:1E24,prefix:"Y"}];this.prefixesOfSmallNumbers=[{number:1E-24,prefix:"y"},{number:1E-21,prefix:"z"},{number:1E-18,prefix:"a"},{number:1E-15,prefix:"f"},{number:1E-12,prefix:"p"},{number:1E-9,prefix:"n"},{number:1E-6,prefix:"\u03bc"},{number:.001,prefix:"m"}];this.panEventsEnabled=!0;this.product="amcharts";this.animations=[];this.balloon=new d.AmBalloon(this.theme);this.balloon.chart=this;this.processTimeout=0;this.processCount=1E3;this.animatable=[];this.langObj={};
d.applyTheme(this,a,"AmChart")},drawChart:function(){0<this.realWidth&&0<this.realHeight&&(this.drawBackground(),this.redrawLabels(),this.drawTitles(),this.brr(),this.renderFix(),this.chartDiv&&(this.boundingRect=this.chartDiv.getBoundingClientRect()))},makeAccessible:function(a,b,c){this.accessible&&a&&(c&&a.setAttr("role",c),a.setAttr("aria-label",b))},drawBackground:function(){d.remove(this.background);var a=this.container,b=this.backgroundColor,c=this.backgroundAlpha,e=this.set;d.isModern||0!==
c||(c=.001);var g=this.updateWidth();this.realWidth=g;var f=this.updateHeight();this.realHeight=f;b=d.polygon(a,[0,g-1,g-1,0],[0,0,f-1,f-1],b,c,1,this.borderColor,this.borderAlpha);d.setCN(this,b,"bg");this.background=b;e.push(b);if(b=this.backgroundImage)a=a.image(b,0,0,g,f),d.setCN(this,b,"bg-image"),this.bgImg=a,e.push(a)},drawTitles:function(a){var b=this.titles;this.titleHeight=0;if(d.ifArray(b)){var c=20,e;for(e=0;e<b.length;e++){var g=b[e],g=d.processObject(g,d.Title,this.theme);if(!1!==g.enabled){var f=
g.color;void 0===f&&(f=this.color);var h=g.size;isNaN(h)&&(h=this.fontSize+2);isNaN(g.alpha);var k=this.marginLeft,l=!0;void 0!==g.bold&&(l=g.bold);f=d.wrappedText(this.container,g.text,f,this.fontFamily,h,"middle",l,this.realWidth-35-this.marginRight-k);f.translate(k+(this.realWidth-this.marginRight-k)/2,c);f.node.style.pointerEvents="none";g.sprite=f;void 0!==g.tabIndex&&f.setAttr("tabindex",g.tabIndex);d.setCN(this,f,"title");g.id&&d.setCN(this,f,"title-"+g.id);f.attr({opacity:g.alpha});c+=f.getBBox().height+
5;a?f.remove():this.freeLabelsSet.push(f)}}this.titleHeight=c-10}},write:function(a){var b=this;if(b.listeners)for(var c=0;c<b.listeners.length;c++){var e=b.listeners[c];b.addListener(e.event,e.method)}b.fire({type:"buildStarted",chart:b});b.afterWriteTO&&clearTimeout(b.afterWriteTO);0<b.processTimeout?b.afterWriteTO=setTimeout(function(){b.afterWrite.call(b,a)},b.processTimeout):b.afterWrite(a)},afterWrite:function(a){var b;if(b="object"!=typeof a?document.getElementById(a):a){for(;b.firstChild;)b.removeChild(b.firstChild);
this.div=b;b.style.overflow="hidden";b.style.textAlign="left";a=this.chartDiv;var c=this.legendDiv,e=this.legend,g=c.style,f=a.style;this.measure();this.previousHeight=this.divRealHeight;this.previousWidth=this.divRealWidth;var h,k=document.createElement("div");h=k.style;h.position="relative";this.containerDiv=k;k.className=this.classNamePrefix+"-main-div";a.className=this.classNamePrefix+"-chart-div";b.appendChild(k);(b=this.exportConfig)&&d.AmExport&&!this.AmExport&&(this.AmExport=new d.AmExport(this,
b));this.amExport&&d.AmExport&&(this.AmExport=d.extend(this.amExport,new d.AmExport(this),!0));this.AmExport&&this.AmExport.init&&this.AmExport.init();if(e){e=this.addLegend(e,e.divId);if(e.enabled)switch(g.left=null,g.top=null,g.right=null,f.left=null,f.right=null,f.top=null,g.position="relative",f.position="relative",h.width="100%",h.height="100%",e.position){case "bottom":k.appendChild(a);k.appendChild(c);break;case "top":k.appendChild(c);k.appendChild(a);break;case "absolute":g.position="absolute";
f.position="absolute";void 0!==e.left&&(g.left=e.left+"px");void 0!==e.right&&(g.right=e.right+"px");void 0!==e.top&&(g.top=e.top+"px");void 0!==e.bottom&&(g.bottom=e.bottom+"px");e.marginLeft=0;e.marginRight=0;k.appendChild(a);k.appendChild(c);break;case "right":g.position="relative";f.position="absolute";k.appendChild(a);k.appendChild(c);break;case "left":g.position="absolute";f.position="relative";k.appendChild(a);k.appendChild(c);break;case "outside":k.appendChild(a)}else k.appendChild(a);this.prevLegendPosition=
e.position}else k.appendChild(a);this.listenersAdded||(this.addListeners(),this.listenersAdded=!0);(this.mouseWheelScrollEnabled||this.mouseWheelZoomEnabled)&&d.addWheelListeners();this.initChart()}},createLabelsSet:function(){d.remove(this.labelsSet);this.labelsSet=this.container.set();this.freeLabelsSet.push(this.labelsSet)},initChart:function(){this.balloon=d.processObject(this.balloon,d.AmBalloon,this.theme);window.AmCharts_path&&(this.path=window.AmCharts_path);void 0===this.path&&(this.path=
d.getPath());void 0===this.path&&(this.path="amcharts/");this.path=d.normalizeUrl(this.path);void 0===this.pathToImages&&(this.pathToImages=this.path+"images/");this.initHC||(d.callInitHandler(this),this.initHC=!0);d.applyLang(this.language,this);var a=this.numberFormatter;a&&(isNaN(a.precision)||(this.precision=a.precision),void 0!==a.thousandsSeparator&&(this.thousandsSeparator=a.thousandsSeparator),void 0!==a.decimalSeparator&&(this.decimalSeparator=a.decimalSeparator));(a=this.percentFormatter)&&
!isNaN(a.precision)&&(this.percentPrecision=a.precision);this.nf={precision:this.precision,thousandsSeparator:this.thousandsSeparator,decimalSeparator:this.decimalSeparator};this.pf={precision:this.percentPrecision,thousandsSeparator:this.thousandsSeparator,decimalSeparator:this.decimalSeparator};this.destroy();(a=this.container)?(a.container.innerHTML="",a.width=this.realWidth,a.height=this.realHeight,a.addDefs(this),this.chartDiv.appendChild(a.container)):a=new d.AmDraw(this.chartDiv,this.realWidth,
this.realHeight,this);this.container=a;this.extension=".png";this.svgIcons&&d.SVG&&(this.extension=".svg");this.checkDisplay();this.checkTransform(this.div);a.chart=this;d.VML||d.SVG?(a.handDrawn=this.handDrawn,a.handDrawScatter=this.handDrawScatter,a.handDrawThickness=this.handDrawThickness,d.remove(this.set),this.set=a.set(),d.remove(this.gridSet),this.gridSet=a.set(),d.remove(this.cursorLineSet),this.cursorLineSet=a.set(),d.remove(this.graphsBehindSet),this.graphsBehindSet=a.set(),d.remove(this.bulletBehindSet),
this.bulletBehindSet=a.set(),d.remove(this.columnSet),this.columnSet=a.set(),d.remove(this.graphsSet),this.graphsSet=a.set(),d.remove(this.trendLinesSet),this.trendLinesSet=a.set(),d.remove(this.axesSet),this.axesSet=a.set(),d.remove(this.cursorSet),this.cursorSet=a.set(),d.remove(this.scrollbarsSet),this.scrollbarsSet=a.set(),d.remove(this.bulletSet),this.bulletSet=a.set(),d.remove(this.freeLabelsSet),this.freeLabelsSet=a.set(),d.remove(this.axesLabelsSet),this.axesLabelsSet=a.set(),d.remove(this.balloonsSet),
this.balloonsSet=a.set(),d.remove(this.plotBalloonsSet),this.plotBalloonsSet=a.set(),d.remove(this.zoomButtonSet),this.zoomButtonSet=a.set(),d.remove(this.zbSet),this.zbSet=null,d.remove(this.linkSet),this.linkSet=a.set()):this.fire({type:"failed",chart:this})},premeasure:function(){var a=this.div;if(a){try{this.boundingRect=this.chartDiv.getBoundingClientRect()}catch(e){}var b=a.offsetWidth,c=a.offsetHeight;a.clientHeight&&(b=a.clientWidth,c=a.clientHeight);if(b!=this.mw||c!=this.mh)this.mw=b,this.mh=
c,this.measure()}},measure:function(){var a=this.div;if(a){var b=this.chartDiv,c=a.offsetWidth,e=a.offsetHeight,g=this.container;a.clientHeight&&(c=a.clientWidth,e=a.clientHeight);var e=Math.round(e),c=Math.round(c),a=Math.round(d.toCoordinate(this.width,c)),f=Math.round(d.toCoordinate(this.height,e));(c!=this.previousWidth||e!=this.previousHeight)&&0<a&&0<f&&(b.style.width=a+"px",b.style.height=f+"px",b.style.padding=0,g&&g.setSize(a,f),this.balloon=d.processObject(this.balloon,d.AmBalloon,this.theme));
this.balloon&&this.balloon.setBounds&&this.balloon.setBounds(2,2,a-2,f);this.updateWidth();this.balloon.chart=this;this.realWidth=a;this.realHeight=f;this.divRealWidth=c;this.divRealHeight=e}},checkDisplay:function(){if(this.autoDisplay&&this.container){var a=d.rect(this.container,10,10),b=a.getBBox();0===b.width&&0===b.height&&(this.divRealHeight=this.divRealWidth=this.realHeight=this.realWidth=0,this.previousWidth=this.previousHeight=NaN);a.remove()}},checkTransform:function(a){if(this.autoTransform&&
window.getComputedStyle&&a){if(a.style){var b=window.getComputedStyle(a,null);if(b&&(b=b.getPropertyValue("-webkit-transform")||b.getPropertyValue("-moz-transform")||b.getPropertyValue("-ms-transform")||b.getPropertyValue("-o-transform")||b.getPropertyValue("transform"))&&"none"!==b){var c=b.split("(")[1].split(")")[0].split(","),b=c[0],c=c[1],b=Math.sqrt(b*b+c*c);isNaN(b)||(this.cssScale*=b)}}a.parentNode&&this.checkTransform(a.parentNode)}},destroy:function(){this.chartDiv.innerHTML="";this.clearTimeOuts();
this.legend&&this.legend.destroy()},clearTimeOuts:function(){var a=this.timeOuts;if(a){var b;for(b=0;b<a.length;b++)clearTimeout(a[b])}this.timeOuts=[]},clear:function(a){try{document.removeEventListener("touchstart",this.docfn1,!0),document.removeEventListener("touchend",this.docfn2,!0)}catch(b){}d.callMethod("clear",[this.chartScrollbar,this.scrollbarV,this.scrollbarH,this.chartCursor]);this.chartCursor=this.scrollbarH=this.scrollbarV=this.chartScrollbar=null;this.clearTimeOuts();this.container&&
(this.container.remove(this.chartDiv),this.container.remove(this.legendDiv));a||d.removeChart(this);if(a=this.div)for(;a.firstChild;)a.removeChild(a.firstChild);this.legend&&this.legend.destroy();this.AmExport&&this.AmExport.clear&&this.AmExport.clear()},setMouseCursor:function(a){"auto"==a&&d.isNN&&(a="default");this.chartDiv.style.cursor=a;this.legendDiv.style.cursor=a},redrawLabels:function(){this.labels=[];var a=this.allLabels;this.createLabelsSet();var b;for(b=0;b<a.length;b++)this.drawLabel(a[b])},
drawLabel:function(a){var b=this;if(b.container&&!1!==a.enabled){a=d.processObject(a,d.Label,b.theme);var c=a.y,e=a.text,g=a.align,f=a.size,h=a.color,k=a.rotation,l=a.alpha,m=a.bold,n=d.toCoordinate(a.x,b.realWidth),c=d.toCoordinate(c,b.realHeight);n||(n=0);c||(c=0);void 0===h&&(h=b.color);isNaN(f)&&(f=b.fontSize);g||(g="start");"left"==g&&(g="start");"right"==g&&(g="end");"center"==g&&(g="middle",k?c=b.realHeight-c+c/2:n=b.realWidth/2-n);void 0===l&&(l=1);void 0===k&&(k=0);c+=f/2;e=d.text(b.container,
e,h,b.fontFamily,f,g,m,l);e.translate(n,c);void 0!==a.tabIndex&&e.setAttr("tabindex",a.tabIndex);d.setCN(b,e,"label");a.id&&d.setCN(b,e,"label-"+a.id);0!==k&&e.rotate(k);a.url?(e.setAttr("cursor","pointer"),e.click(function(){d.getURL(a.url,b.urlTarget)})):e.node.style.pointerEvents="none";b.labelsSet.push(e);b.labels.push(e)}},addLabel:function(a,b,c,e,d,f,h,k,l,m){a={x:a,y:b,text:c,align:e,size:d,color:f,alpha:k,rotation:h,bold:l,url:m,enabled:!0};this.container&&this.drawLabel(a);this.allLabels.push(a)},
clearLabels:function(){var a=this.labels,b;for(b=a.length-1;0<=b;b--)a[b].remove();this.labels=[];this.allLabels=[]},updateHeight:function(){var a=this.divRealHeight,b=this.legend;if(b){var c=this.legendDiv.offsetHeight,b=b.position;if("top"==b||"bottom"==b){a-=c;if(0>a||isNaN(a))a=0;this.chartDiv.style.height=a+"px"}}return a},updateWidth:function(){var a=this.divRealWidth,b=this.divRealHeight,c=this.legend;if(c){var e=this.legendDiv,d=e.offsetWidth;isNaN(c.width)||(d=c.width);c.ieW&&(d=c.ieW);var f=
e.offsetHeight,e=e.style,h=this.chartDiv.style,k=c.position;if(("right"==k||"left"==k)&&void 0===c.divId){a-=d;if(0>a||isNaN(a))a=0;h.width=a+"px";this.balloon&&this.balloon.setBounds&&this.balloon.setBounds(2,2,a-2,this.realHeight);"left"==k?(h.left=d+"px",e.left="0px"):(h.left="0px",e.left=a+"px");b>f&&(e.top=(b-f)/2+"px")}}return a},getTitleHeight:function(){this.drawTitles(!0);return this.titleHeight},addTitle:function(a,b,c,e,d){isNaN(b)&&(b=this.fontSize+2);a={text:a,size:b,color:c,alpha:e,
bold:d,enabled:!0};this.titles.push(a);return a},handleWheel:function(a){var b=0;a||(a=window.event);a.wheelDelta?b=a.wheelDelta/120:a.detail&&(b=-a.detail/3);b&&this.handleWheelReal(b,a.shiftKey);a.preventDefault&&a.preventDefault()},handleWheelReal:function(){},handleDocTouchStart:function(){this.handleMouseMove();this.tmx=this.mouseX;this.tmy=this.mouseY;this.touchStartTime=(new Date).getTime()},handleDocTouchEnd:function(){-.5<this.tmx&&this.tmx<this.divRealWidth+1&&0<this.tmy&&this.tmy<this.divRealHeight?
(this.handleMouseMove(),4>Math.abs(this.mouseX-this.tmx)&&4>Math.abs(this.mouseY-this.tmy)?(this.tapped=!0,this.panRequired&&this.panEventsEnabled&&this.chartDiv&&(this.chartDiv.style.msTouchAction="none",this.chartDiv.style.touchAction="none")):this.mouseIsOver||this.resetTouchStyle()):(this.tapped=!1,this.resetTouchStyle())},resetTouchStyle:function(){this.panEventsEnabled&&this.chartDiv&&(this.chartDiv.style.msTouchAction="auto",this.chartDiv.style.touchAction="auto")},checkTouchDuration:function(a){var b=
this,c=(new Date).getTime();if(a)if(a.touches)b.isTouchEvent=!0;else if(!b.isTouchEvent)return!0;if(c-b.touchStartTime>b.touchClickDuration)return!0;setTimeout(function(){b.resetTouchDuration()},300)},resetTouchDuration:function(){this.isTouchEvent=!1},checkTouchMoved:function(){if(4<Math.abs(this.mouseX-this.tmx)||4<Math.abs(this.mouseY-this.tmy))return!0},addListeners:function(){var a=this,b=a.chartDiv;document.addEventListener?("ontouchstart"in document.documentElement&&(b.addEventListener("touchstart",
function(b){a.handleTouchStart.call(a,b)},!0),b.addEventListener("touchmove",function(b){a.handleMouseMove.call(a,b)},!0),b.addEventListener("touchend",function(b){a.handleTouchEnd.call(a,b)},!0),a.docfn1=function(b){a.handleDocTouchStart.call(a,b)},a.docfn2=function(b){a.handleDocTouchEnd.call(a,b)},document.addEventListener("touchstart",a.docfn1,!0),document.addEventListener("touchend",a.docfn2,!0)),b.addEventListener("mousedown",function(b){a.mouseIsOver=!0;a.handleMouseMove.call(a,b);a.handleMouseDown.call(a,
b);a.handleDocTouchStart.call(a,b)},!0),b.addEventListener("mouseover",function(b){a.handleMouseOver.call(a,b)},!0),b.addEventListener("mouseout",function(b){a.handleMouseOut.call(a,b)},!0),b.addEventListener("mouseup",function(b){a.handleDocTouchEnd.call(a,b)},!0)):(b.attachEvent("onmousedown",function(b){a.handleMouseDown.call(a,b)}),b.attachEvent("onmouseover",function(b){a.handleMouseOver.call(a,b)}),b.attachEvent("onmouseout",function(b){a.handleMouseOut.call(a,b)}))},dispDUpd:function(){this.skipEvents||
(this.dispatchDataUpdated&&(this.dispatchDataUpdated=!1,this.fire({type:"dataUpdated",chart:this})),this.chartCreated||(this.chartCreated=!0,this.fire({type:"init",chart:this})),this.chartRendered||(this.fire({type:"rendered",chart:this}),this.chartRendered=!0),this.fire({type:"drawn",chart:this}));this.skipEvents=!1},validateSize:function(){var a=this;a.premeasure();a.checkDisplay();a.cssScale=1;a.cssAngle=0;a.checkTransform(a.div);if(a.divRealWidth!=a.previousWidth||a.divRealHeight!=a.previousHeight){var b=
a.legend;if(0<a.realWidth&&0<a.realHeight){a.sizeChanged=!0;if(b){a.legendInitTO&&clearTimeout(a.legendInitTO);var c=setTimeout(function(){b.invalidateSize()},10);a.timeOuts.push(c);a.legendInitTO=c}a.marginsUpdated=!1;clearTimeout(a.initTO);c=setTimeout(function(){a.initChart()},10);a.timeOuts.push(c);a.initTO=c}a.renderFix();b&&b.renderFix&&b.renderFix();clearTimeout(a.resizedTO);a.resizedTO=setTimeout(function(){a.fire({type:"resized",chart:a})},10);a.previousHeight=a.divRealHeight;a.previousWidth=
a.divRealWidth}},invalidateSize:function(){this.previousHeight=this.previousWidth=NaN;this.invalidateSizeReal()},invalidateSizeReal:function(){var a=this;a.marginsUpdated=!1;clearTimeout(a.validateTO);var b=setTimeout(function(){a.validateSize()},5);a.timeOuts.push(b);a.validateTO=b},validateData:function(a){this.chartCreated&&(this.dataChanged=!0,this.marginsUpdated=!1,this.initChart(a))},validateNow:function(a,b){this.initTO&&clearTimeout(this.initTO);a&&(this.dataChanged=!0,this.marginsUpdated=
!1);this.skipEvents=b;this.chartRendered=!1;var c=this.legend;c&&c.position!=this.prevLegendPosition&&(this.previousWidth=this.mw=0,c.invalidateSize&&(c.invalidateSize(),this.validateSize()));this.write(this.div)},showItem:function(a){a.hidden=!1;this.initChart()},hideItem:function(a){a.hidden=!0;this.initChart()},hideBalloon:function(){var a=this;clearTimeout(a.hoverInt);clearTimeout(a.balloonTO);a.hoverInt=setTimeout(function(){a.hideBalloonReal.call(a)},a.hideBalloonTime)},cleanChart:function(){},
hideBalloonReal:function(){var a=this.balloon;a&&a.hide&&a.hide()},showBalloon:function(a,b,c,e,d){var f=this;clearTimeout(f.balloonTO);clearTimeout(f.hoverInt);f.balloonTO=setTimeout(function(){f.showBalloonReal.call(f,a,b,c,e,d)},1)},showBalloonReal:function(a,b,c,e,d){this.handleMouseMove();var f=this.balloon;f.enabled&&(f.followCursor(!1),f.changeColor(b),!c||f.fixedPosition?(f.setPosition(e,d),isNaN(e)||isNaN(d)?f.followCursor(!0):f.followCursor(!1)):f.followCursor(!0),a&&f.showBalloon(a))},
handleMouseOver:function(){this.outTO&&clearTimeout(this.outTO);d.resetMouseOver();this.mouseIsOver=!0},handleMouseOut:function(){var a=this;d.resetMouseOver();a.outTO&&clearTimeout(a.outTO);a.outTO=setTimeout(function(){a.handleMouseOutReal()},10)},handleMouseOutReal:function(){this.mouseIsOver=!1},handleMouseMove:function(a){a||(a=window.event);this.mouse2Y=this.mouse2X=NaN;var b,c,e,d;if(a){if(a.touches){var f=a.touches.item(1);f&&this.panEventsEnabled&&this.boundingRect&&(e=f.clientX-this.boundingRect.left,
d=f.clientY-this.boundingRect.top);a=a.touches.item(0);if(!a)return}else this.wasTouched=!1;this.boundingRect&&a.clientX&&(b=a.clientX-this.boundingRect.left,c=a.clientY-this.boundingRect.top);isNaN(e)?this.mouseX=b:(this.mouseX=Math.min(b,e),this.mouse2X=Math.max(b,e));isNaN(d)?this.mouseY=c:(this.mouseY=Math.min(c,d),this.mouse2Y=Math.max(c,d));this.autoTransform&&(this.mouseX/=this.cssScale,this.mouseY/=this.cssScale)}},handleTouchStart:function(a){this.hideBalloonReal();a&&(a.touches&&this.tapToActivate&&
!this.tapped||!this.panRequired)||(this.handleMouseMove(a),this.handleMouseDown(a))},handleTouchEnd:function(a){this.wasTouched=!0;this.handleMouseMove(a);d.resetMouseOver();this.handleReleaseOutside(a)},handleReleaseOutside:function(){this.handleDocTouchEnd.call(this)},handleMouseDown:function(a){d.resetMouseOver();this.mouseIsOver=!0;a&&a.preventDefault&&(this.panEventsEnabled?a.preventDefault():a.touches||a.preventDefault())},addLegend:function(a,b){a=d.processObject(a,d.AmLegend,this.theme);a.divId=
b;a.ieW=0;var c;c="object"!=typeof b&&b?document.getElementById(b):b;this.legend=a;a.chart=this;c?(a.div=c,a.position="outside",a.autoMargins=!1):a.div=this.legendDiv;return a},removeLegend:function(){this.legend=void 0;this.previousWidth=0;this.legendDiv.innerHTML=""},handleResize:function(){(d.isPercents(this.width)||d.isPercents(this.height))&&this.invalidateSizeReal();this.renderFix()},renderFix:function(){if(!d.VML){var a=this.container;a&&a.renderFix()}},getSVG:function(){if(d.hasSVG)return this.container},
animate:function(a,b,c,e,g,f,h){a["an_"+b]&&d.removeFromArray(this.animations,a["an_"+b]);c={obj:a,frame:0,attribute:b,from:c,to:e,time:g,effect:f,suffix:h};a["an_"+b]=c;this.animations.push(c);return c},setLegendData:function(a){var b=this.legend;b&&b.setData(a)},stopAnim:function(a){d.removeFromArray(this.animations,a)},updateAnimations:function(){var a;this.container&&this.container.update();if(this.animations)for(a=this.animations.length-1;0<=a;a--){var b=this.animations[a],c=d.updateRate*b.time,
e=b.frame+1,g=b.obj,f=b.attribute;if(e<=c){b.frame++;var h=Number(b.from),k=Number(b.to)-h,c=d[b.effect](0,e,h,k,c);0===k?(this.animations.splice(a,1),g.node.style[f]=Number(b.to)+b.suffix):g.node.style[f]=c+b.suffix}else g.node.style[f]=Number(b.to)+b.suffix,g.animationFinished=!0,this.animations.splice(a,1)}},update:function(){this.updateAnimations();var a=this.animatable;if(0<a.length){for(var b=!0,c=a.length-1;0<=c;c--){var e=a[c];e&&(e.animationFinished?a.splice(c,1):b=!1)}b&&(this.fire({type:"animationFinished",
chart:this}),this.animatable=[])}},inIframe:function(){try{return window.self!==window.top}catch(a){return!0}},brr:function(){if(!this.hideCredits){var a="amcharts.com",b=window.location.hostname.split("."),c;2<=b.length&&(c=b[b.length-2]+"."+b[b.length-1]);this.amLink&&(b=this.amLink.parentNode)&&b.removeChild(this.amLink);b=this.creditsPosition;if(c!=a||!0===this.inIframe()){var a="http://www."+a,e=c=0,d=this.realWidth,f=this.realHeight,h=this.type;if("serial"==h||"xy"==h||"gantt"==h)c=this.marginLeftReal,
e=this.marginTopReal,d=c+this.plotAreaWidth,f=e+this.plotAreaHeight;var h=a,k="JavaScript charts",l="JS chart by amCharts";"ammap"==this.product&&(h=a+"/javascript-maps/",k="Interactive JavaScript maps",l="JS map by amCharts");a=document.createElement("a");l=document.createTextNode(l);a.setAttribute("href",h);a.setAttribute("title",k);this.urlTarget&&a.setAttribute("target",this.urlTarget);a.appendChild(l);this.chartDiv.appendChild(a);this.amLink=a;h=a.style;h.position="absolute";h.textDecoration=
"none";h.color=this.color;h.fontFamily=this.fontFamily;h.fontSize="11px";h.opacity=.7;h.display="block";var k=a.offsetWidth,a=a.offsetHeight,l=5+c,m=e+5;"bottom-left"==b&&(l=5+c,m=f-a-3);"bottom-right"==b&&(l=d-k-5,m=f-a-3);"top-right"==b&&(l=d-k-5,m=e+5);h.left=l+"px";h.top=m+"px"}}}});d.Slice=d.Class({construct:function(){}});d.SerialDataItem=d.Class({construct:function(){}});d.GraphDataItem=d.Class({construct:function(){}});d.Guide=d.Class({construct:function(a){this.cname="Guide";d.applyTheme(this,
a,this.cname)}});d.Title=d.Class({construct:function(a){this.cname="Title";d.applyTheme(this,a,this.cname)}});d.Label=d.Class({construct:function(a){this.cname="Label";d.applyTheme(this,a,this.cname)}})})();(function(){var d=window.AmCharts;d.AmGraph=d.Class({construct:function(a){this.cname="AmGraph";this.createEvents("rollOverGraphItem","rollOutGraphItem","clickGraphItem","doubleClickGraphItem","rightClickGraphItem","clickGraph","rollOverGraph","rollOutGraph");this.type="line";this.stackable=!0;this.columnCount=1;this.columnIndex=0;this.centerCustomBullets=this.showBalloon=!0;this.maxBulletSize=50;this.minBulletSize=4;this.balloonText="[[value]]";this.hidden=this.scrollbar=this.animationPlayed=!1;
this.pointPosition="middle";this.depthCount=1;this.includeInMinMax=!0;this.negativeBase=0;this.visibleInLegend=!0;this.showAllValueLabels=!1;this.showBulletsAt=this.showBalloonAt="close";this.lineThickness=1;this.dashLength=0;this.connect=!0;this.lineAlpha=1;this.bullet="none";this.bulletBorderThickness=2;this.bulletBorderAlpha=0;this.bulletAlpha=1;this.bulletSize=8;this.cornerRadiusTop=this.hideBulletsCount=this.bulletOffset=0;this.cursorBulletAlpha=1;this.gradientOrientation="vertical";this.dy=
this.dx=0;this.periodValue="";this.clustered=!0;this.periodSpan=1;this.accessibleLabel="[[title]] [[category]] [[value]]";this.accessibleSkipText="Press enter to skip [[title]]";this.y=this.x=0;this.switchable=!0;this.minDistance=.8;this.tcc=1;this.labelRotation=0;this.labelAnchor="auto";this.labelOffset=3;this.bcn="graph-";this.dateFormat="MMM DD, YYYY";this.noRounding=!0;d.applyTheme(this,a,this.cname)},init:function(){this.createBalloon()},draw:function(){var a=this.chart;a.isRolledOverBullet=
!1;var b=a.type;if(a.drawGraphs){isNaN(this.precision)||(this.numberFormatter?this.numberFormatter.precision=this.precision:this.numberFormatter={precision:this.precision,decimalSeparator:a.decimalSeparator,thousandsSeparator:a.thousandsSeparator});var c=a.container;this.container=c;this.destroy();var e=c.set();this.set=e;e.translate(this.x,this.y);var g=c.set();this.bulletSet=g;g.translate(this.x,this.y);this.behindColumns?(a.graphsBehindSet.push(e),a.bulletBehindSet.push(g)):(a.graphsSet.push(e),
a.bulletSet.push(g));var f=this.bulletAxis;d.isString(f)&&(this.bulletAxis=a.getValueAxisById(f));c=c.set();d.remove(this.columnsSet);this.columnsSet=c;d.setCN(a,e,"graph-"+this.type);d.setCN(a,e,"graph-"+this.id);d.setCN(a,g,"graph-"+this.type);d.setCN(a,g,"graph-"+this.id);this.columnsArray=[];this.ownColumns=[];this.allBullets=[];this.animationArray=[];g=this.labelPosition;g||(f=this.valueAxis.stackType,g="top","column"==this.type&&(a.rotate&&(g="right"),"100%"==f||"regular"==f)&&(g="middle"),
this.labelPosition=g);d.ifArray(this.data)&&(a=!1,"xy"==b?this.xAxis.axisCreated&&this.yAxis.axisCreated&&(a=!0):this.valueAxis.axisCreated&&(a=!0),!this.hidden&&a&&this.createGraph());e.push(c)}},createGraph:function(){var a=this,b=a.chart;a.startAlpha=b.startAlpha;a.seqAn=b.sequencedAnimation;a.baseCoord=a.valueAxis.baseCoord;void 0===a.fillAlphas&&(a.fillAlphas=0);a.bulletColorR=a.bulletColor;void 0===a.bulletColorR&&(a.bulletColorR=a.lineColorR,a.bulletColorNegative=a.negativeLineColor);void 0===
a.bulletAlpha&&(a.bulletAlpha=a.lineAlpha);if("step"==c||d.VML)a.noRounding=!1;var c=b.type;"gantt"==c&&(c="serial");clearTimeout(a.playedTO);if(!isNaN(a.valueAxis.min)&&!isNaN(a.valueAxis.max)){switch(c){case "serial":a.categoryAxis&&(a.createSerialGraph(),"candlestick"==a.type&&1>a.valueAxis.minMaxMultiplier&&a.positiveClip(a.set));break;case "radar":a.createRadarGraph();break;case "xy":a.createXYGraph()}a.playedTO=setTimeout(function(){a.setAnimationPlayed.call(a)},500*a.chart.startDuration)}},
setAnimationPlayed:function(){this.animationPlayed=!0},createXYGraph:function(){var a=[],b=[],c=this.xAxis,e=this.yAxis;this.pmh=e.height;this.pmw=c.width;this.pmy=this.pmx=0;var d;for(d=this.start;d<=this.end;d++){var f=this.data[d].axes[c.id].graphs[this.id],h=f.values,k=h.x,l=h.y,h=c.getCoordinate(k,this.noRounding),m=e.getCoordinate(l,this.noRounding);if(!isNaN(k)&&!isNaN(l)&&(a.push(h),b.push(m),f.x=h,f.y=m,k=this.createBullet(f,h,m,d),l=this.labelText)){var l=this.createLabel(f,l),n=0;k&&(n=
k.size);this.positionLabel(f,h,m,l,n)}}this.drawLineGraph(a,b);this.launchAnimation()},createRadarGraph:function(){var a=this.valueAxis.stackType,b=[],c=[],e=[],d=[],f,h,k,l,m;for(m=this.start;m<=this.end;m++){var n=this.data[m].axes[this.valueAxis.id].graphs[this.id],q,p;"none"==a||"3d"==a?q=n.values.value:(q=n.values.close,p=n.values.open);if(isNaN(q))this.connect||(this.drawLineGraph(b,c,e,d),b=[],c=[],e=[],d=[]);else{var t=this.valueAxis.getCoordinate(q,this.noRounding)-this.height,t=t*this.valueAxis.rMultiplier,
r=-360/(this.end-this.start+1)*m;"middle"==this.valueAxis.pointPosition&&(r-=180/(this.end-this.start+1));q=t*Math.sin(r/180*Math.PI);t*=Math.cos(r/180*Math.PI);b.push(q);c.push(t);if(!isNaN(p)){var w=this.valueAxis.getCoordinate(p,this.noRounding)-this.height,w=w*this.valueAxis.rMultiplier,z=w*Math.sin(r/180*Math.PI),r=w*Math.cos(r/180*Math.PI);e.push(z);d.push(r);isNaN(k)&&(k=z);isNaN(l)&&(l=r)}r=this.createBullet(n,q,t,m);n.x=q;n.y=t;if(z=this.labelText)z=this.createLabel(n,z),w=0,r&&(w=r.size),
this.positionLabel(n,q,t,z,w);isNaN(f)&&(f=q);isNaN(h)&&(h=t)}}b.push(f);c.push(h);isNaN(k)||(e.push(k),d.push(l));this.drawLineGraph(b,c,e,d);this.launchAnimation()},positionLabel:function(a,b,c,e,d){if(e){var f=this.chart,h=this.valueAxis,k="middle",l=!1,m=this.labelPosition,n=e.getBBox(),q=this.chart.rotate,p=a.isNegative,t=this.fontSize;void 0===t&&(t=this.chart.fontSize);c-=n.height/2-t/2-1;void 0!==a.labelIsNegative&&(p=a.labelIsNegative);switch(m){case "right":m=q?p?"left":"right":"right";
break;case "top":m=q?"top":p?"bottom":"top";break;case "bottom":m=q?"bottom":p?"top":"bottom";break;case "left":m=q?p?"right":"left":"left"}var t=a.columnGraphics,r=0,w=0;t&&(r=t.x,w=t.y);var z=this.labelOffset;switch(m){case "right":k="start";b+=d/2+z;break;case "top":c=h.reversed?c+(d/2+n.height/2+z):c-(d/2+n.height/2+z);break;case "bottom":c=h.reversed?c-(d/2+n.height/2+z):c+(d/2+n.height/2+z);break;case "left":k="end";b-=d/2+z;break;case "inside":"column"==this.type&&(l=!0,q?p?(k="end",b=r-3-
z):(k="start",b=r+3+z):c=p?w+7+z:w-10-z);break;case "middle":"column"==this.type&&(l=!0,q?b-=(b-r)/2+z-3:c-=(c-w)/2+z-3)}"auto"!=this.labelAnchor&&(k=this.labelAnchor);e.attr({"text-anchor":k});this.labelRotation&&e.rotate(this.labelRotation);e.translate(b,c);!this.showAllValueLabels&&t&&l&&(n=e.getBBox(),n.height>a.columnHeight||n.width>a.columnWidth)&&(e.remove(),e=null);if(e&&"radar"!=f.type)if(q){if(0>c||c>this.height)e.remove(),e=null;!this.showAllValueLabels&&e&&(0>b||b>this.width)&&(e.remove(),
e=null)}else{if(0>b||b>this.width)e.remove(),e=null;!this.showAllValueLabels&&e&&(0>c||c>this.height)&&(e.remove(),e=null)}e&&this.allBullets.push(e);return e}},getGradRotation:function(){var a=270;"horizontal"==this.gradientOrientation&&(a=0);return this.gradientRotation=a},createSerialGraph:function(){this.dashLengthSwitched=this.fillColorsSwitched=this.lineColorSwitched=void 0;var a=this.chart,b=this.id,c=this.index,e=this.data,g=this.chart.container,f=this.valueAxis,h=this.type,k=this.columnWidthReal,
l=this.showBulletsAt;isNaN(this.columnWidth)||(k=this.columnWidth);isNaN(k)&&(k=.8);var m=this.useNegativeColorIfDown,n=this.width,q=this.height,p=this.y,t=this.rotate,r=this.columnCount,w=d.toCoordinate(this.cornerRadiusTop,k/2),z=this.connect,x=[],u=[],A,y,B,D,C=this.chart.graphs.length,I,H=this.dx/this.tcc,Q=this.dy/this.tcc,M=f.stackType,P=this.start,ia=this.end,J=this.scrollbar,aa="graph-column-";J&&(aa="scrollbar-graph-column-");var ma=this.categoryAxis,na=this.baseCoord,Pa=this.negativeBase,
Z=this.columnIndex,da=this.lineThickness,X=this.lineAlpha,xa=this.lineColorR,ea=this.dashLength,fa=this.set,Ba,ga=this.getGradRotation(),V=this.chart.columnSpacing,Y=ma.cellWidth,Da=(Y*k-r)/r;V>Da&&(V=Da);var G,v,oa,ha=q,Qa=n,ca=0,tb=0,ub=0,vb=0,jb=0,kb=0,wb=this.fillColorsR,Ra=this.negativeFillColors,Ja=this.negativeLineColor,ab=this.fillAlphas,bb=this.negativeFillAlphas;"object"==typeof ab&&(ab=ab[0]);"object"==typeof bb&&(bb=bb[0]);var xb=this.noRounding;"step"==h&&(xb=!1);var lb=f.getCoordinate(f.min);
f.logarithmic&&(lb=f.getCoordinate(f.minReal));this.minCoord=lb;this.resetBullet&&(this.bullet="none");if(!(J||"line"!=h&&"smoothedLine"!=h&&"step"!=h||(1==e.length&&"step"!=h&&"none"==this.bullet&&(this.bullet="round",this.resetBullet=!0),!Ra&&void 0==Ja||m))){var Ua=Pa;Ua>f.max&&(Ua=f.max);Ua<f.min&&(Ua=f.min);f.logarithmic&&(Ua=f.minReal);var Ka=f.getCoordinate(Ua),Mb=f.getCoordinate(f.max);t?(ha=q,Qa=Math.abs(Mb-Ka),ub=q,vb=Math.abs(lb-Ka),kb=tb=0,f.reversed?(ca=0,jb=Ka):(ca=Ka,jb=0)):(Qa=n,ha=
Math.abs(Mb-Ka),vb=n,ub=Math.abs(lb-Ka),jb=ca=0,f.reversed?(kb=p,tb=Ka):kb=Ka)}var La=Math.round;this.pmx=La(ca);this.pmy=La(tb);this.pmh=La(ha);this.pmw=La(Qa);this.nmx=La(jb);this.nmy=La(kb);this.nmh=La(ub);this.nmw=La(vb);d.isModern||(this.nmy=this.nmx=0,this.nmh=this.height);this.clustered||(r=1);k="column"==h?(Y*k-V*(r-1))/r:Y*k;1>k&&(k=1);var Nb=this.fixedColumnWidth;isNaN(Nb)||(k=Nb);var L;if("line"==h||"step"==h||"smoothedLine"==h){if(0<P){for(L=P-1;-1<L;L--)if(G=e[L],v=G.axes[f.id].graphs[b],
oa=v.values.value,!isNaN(oa)){P=L;break}if(this.lineColorField)for(L=P;-1<L;L--)if(G=e[L],v=G.axes[f.id].graphs[b],v.lineColor){this.lineColorSwitched=v.lineColor;void 0===this.bulletColor&&(this.bulletColorSwitched=this.lineColorSwitched);break}if(this.fillColorsField)for(L=P;-1<L;L--)if(G=e[L],v=G.axes[f.id].graphs[b],v.fillColors){this.fillColorsSwitched=v.fillColors;break}if(this.dashLengthField)for(L=P;-1<L;L--)if(G=e[L],v=G.axes[f.id].graphs[b],!isNaN(v.dashLength)){this.dashLengthSwitched=
v.dashLength;break}}if(ia<e.length-1)for(L=ia+1;L<e.length;L++)if(G=e[L],v=G.axes[f.id].graphs[b],oa=v.values.value,!isNaN(oa)){ia=L;break}}ia<e.length-1&&ia++;var T=[],U=[],Ma=!1;if("line"==h||"step"==h||"smoothedLine"==h)if(this.stackable&&"regular"==M||"100%"==M||this.fillToGraph)Ma=!0;var Ob=this.noStepRisers,mb=-1E3,nb=-1E3,ob=this.minDistance,Sa=!0,cb=!1;for(L=P;L<=ia;L++){G=e[L];v=G.axes[f.id].graphs[b];v.index=L;var db,Ta=NaN;if(m&&void 0==this.openField)for(var yb=L+1;yb<e.length&&(!e[yb]||
!(db=e[L+1].axes[f.id].graphs[b])||!db.values||(Ta=db.values.value,isNaN(Ta)));yb++);var S,R,K,ba,ja=NaN,E=NaN,F=NaN,O=NaN,N=NaN,qa=NaN,ra=NaN,sa=NaN,ta=NaN,ya=NaN,Ea=NaN,ka=NaN,la=NaN,W=NaN,zb=NaN,Ab=NaN,ua=NaN,va=void 0,Na=wb,Va=ab,Ha=xa,Ca,za,Bb=this.proCandlesticks,pb=this.topRadius,Fa=q-1,pa=n-1,eb=this.pattern;void 0!=v.pattern&&(eb=v.pattern);isNaN(v.alpha)||(Va=v.alpha);isNaN(v.dashLength)||(ea=v.dashLength);var Ia=v.values;f.recalculateToPercents&&(Ia=v.percents);"none"==M&&(Z=isNaN(v.columnIndex)?
this.columnIndex:v.columnIndex);if(Ia){W=this.stackable&&"none"!=M&&"3d"!=M?Ia.close:Ia.value;if("candlestick"==h||"ohlc"==h)W=Ia.close,Ab=Ia.low,ra=f.getCoordinate(Ab),zb=Ia.high,ta=f.getCoordinate(zb);ua=Ia.open;F=f.getCoordinate(W,xb);isNaN(ua)||(N=f.getCoordinate(ua,xb),m&&"regular"!=M&&"100%"!=M&&(Ta=ua,ua=N=NaN));m&&(void 0==this.openField?db&&(db.isNegative=Ta<W?!0:!1,isNaN(Ta)&&(v.isNegative=!Sa)):v.isNegative=Ta>W?!0:!1);if(!J)switch(this.showBalloonAt){case "close":v.y=F;break;case "open":v.y=
N;break;case "high":v.y=ta;break;case "low":v.y=ra}var ja=G.x[ma.id],Wa=this.periodSpan-1;"step"!=h||isNaN(G.cellWidth)||(Y=G.cellWidth);var wa=Math.floor(Y/2)+Math.floor(Wa*Y/2),Ga=wa,qb=0;"left"==this.stepDirection&&(qb=(2*Y+Wa*Y)/2,ja-=qb);"center"==this.stepDirection&&(qb=Y/2,ja-=qb);"start"==this.pointPosition&&(ja-=Y/2+Math.floor(Wa*Y/2),wa=0,Ga=Math.floor(Y)+Math.floor(Wa*Y));"end"==this.pointPosition&&(ja+=Y/2+Math.floor(Wa*Y/2),wa=Math.floor(Y)+Math.floor(Wa*Y),Ga=0);if(Ob){var Cb=this.columnWidth;
isNaN(Cb)||(wa*=Cb,Ga*=Cb)}J||(v.x=ja);-1E5>ja&&(ja=-1E5);ja>n+1E5&&(ja=n+1E5);t?(E=F,O=N,N=F=ja,isNaN(ua)&&!this.fillToGraph&&(O=na),qa=ra,sa=ta):(O=E=ja,isNaN(ua)&&!this.fillToGraph&&(N=na));if(!Bb&&W<ua||Bb&&W<Ba)v.isNegative=!0,Ra&&(Na=Ra),bb&&(Va=bb),void 0!=Ja&&(Ha=Ja);cb=!1;isNaN(W)||(m?W>Ta?(Sa&&(cb=!0),Sa=!1):(Sa||(cb=!0),Sa=!0):v.isNegative=W<Pa?!0:!1,Ba=W);var Pb=!1;J&&a.chartScrollbar.ignoreCustomColors&&(Pb=!0);Pb||(void 0!=v.color&&(Na=v.color),v.fillColors&&(Na=v.fillColors));F=d.fitToBounds(F,
-3E4,3E4);switch(h){case "line":if(isNaN(W))z||(this.drawLineGraph(x,u,T,U),x=[],u=[],T=[],U=[]);else{if(Math.abs(E-mb)>=ob||Math.abs(F-nb)>=ob)x.push(E),u.push(F),mb=E,nb=F;ya=E;Ea=F;ka=E;la=F;!Ma||isNaN(N)||isNaN(O)||(T.push(O),U.push(N));if(cb||void 0!=v.lineColor&&v.lineColor!=this.lineColorSwitched||void 0!=v.fillColors&&v.fillColors!=this.fillColorsSwitched||!isNaN(v.dashLength))this.drawLineGraph(x,u,T,U),x=[E],u=[F],T=[],U=[],!Ma||isNaN(N)||isNaN(O)||(T.push(O),U.push(N)),m?(Sa?(this.lineColorSwitched=
xa,this.fillColorsSwitched=wb):(this.lineColorSwitched=Ja,this.fillColorsSwitched=Ra),void 0===this.bulletColor&&(this.bulletColorSwitched=xa)):(this.lineColorSwitched=v.lineColor,this.fillColorsSwitched=v.fillColors,void 0===this.bulletColor&&(this.bulletColorSwitched=this.lineColorSwitched)),this.dashLengthSwitched=v.dashLength;v.gap&&(this.drawLineGraph(x,u,T,U),x=[],u=[],T=[],U=[])}break;case "smoothedLine":if(isNaN(W))z||(this.drawSmoothedGraph(x,u,T,U),x=[],u=[],T=[],U=[]);else{if(Math.abs(E-
mb)>=ob||Math.abs(F-nb)>=ob)x.push(E),u.push(F),mb=E,nb=F;ya=E;Ea=F;ka=E;la=F;!Ma||isNaN(N)||isNaN(O)||(T.push(O),U.push(N));void 0==v.lineColor&&void 0==v.fillColors&&isNaN(v.dashLength)||(this.drawSmoothedGraph(x,u,T,U),x=[E],u=[F],T=[],U=[],!Ma||isNaN(N)||isNaN(O)||(T.push(O),U.push(N)),this.lineColorSwitched=v.lineColor,this.fillColorsSwitched=v.fillColors,this.dashLengthSwitched=v.dashLength);v.gap&&(this.drawSmoothedGraph(x,u,T,U),x=[],u=[],T=[],U=[])}break;case "step":if(!isNaN(W)){t?(isNaN(A)||
(x.push(A),u.push(F-wa)),u.push(F-wa),x.push(E),u.push(F+Ga),x.push(E),!Ma||isNaN(N)||isNaN(O)||(isNaN(B)||(T.push(B),U.push(N-wa)),T.push(O),U.push(N-wa),T.push(O),U.push(N+Ga))):(isNaN(y)||(u.push(y),x.push(E-wa)),x.push(E-wa),u.push(F),x.push(E+Ga),u.push(F),!Ma||isNaN(N)||isNaN(O)||(isNaN(D)||(T.push(O-wa),U.push(D)),T.push(O-wa),U.push(N),T.push(O+Ga),U.push(N)));A=E;y=F;B=O;D=N;ya=E;Ea=F;ka=E;la=F;if(cb||void 0!=v.lineColor||void 0!=v.fillColors||!isNaN(v.dashLength)){var Db=x[x.length-2],dc=
u[u.length-2];x.pop();u.pop();T.pop();U.pop();this.drawLineGraph(x,u,T,U);x=[Db];u=[dc];T=[];U=[];Ma&&(T=[Db,Db+wa+Ga],U=[D,D]);t?(u.push(F+Ga),x.push(E)):(x.push(E+Ga),u.push(F));this.lineColorSwitched=v.lineColor;this.fillColorsSwitched=v.fillColors;this.dashLengthSwitched=v.dashLength;m&&(Sa?(this.lineColorSwitched=xa,this.fillColorsSwitched=wb):(this.lineColorSwitched=Ja,this.fillColorsSwitched=Ra))}if(Ob||v.gap)A=y=NaN,this.drawLineGraph(x,u,T,U),x=[],u=[],T=[],U=[]}else if(!z){if(1>=this.periodSpan||
1<this.periodSpan&&E-A>wa+Ga)A=y=NaN;this.drawLineGraph(x,u,T,U);x=[];u=[];T=[];U=[]}break;case "column":Ca=Ha;void 0!=v.lineColor&&(Ca=v.lineColor);if(!isNaN(W)){m||(v.isNegative=W<Pa?!0:!1);v.isNegative&&(Ra&&(Na=Ra),void 0!=Ja&&(Ca=Ja));var Qb=f.min,Rb=f.max,rb=ua;isNaN(rb)&&(rb=Pa);if(!(W<Qb&&rb<Qb||W>Rb&&rb>Rb)){var Aa;if(t){"3d"==M?(R=F-(r/2-this.depthCount+1)*(k+V)+V/2+Q*Z,S=O+H*Z,Aa=Z):(R=Math.floor(F-(r/2-Z)*(k+V)+V/2),S=O,Aa=0);K=k;ya=E;Ea=R+k/2;ka=E;la=R+k/2;R+K>q+Aa*Q&&(K=q-R+Aa*Q);R<
Aa*Q&&(K+=R,R=Aa*Q);ba=E-O;var ec=S;S=d.fitToBounds(S,0,n);ba+=ec-S;ba=d.fitToBounds(ba,-S,n-S+H*Z);v.labelIsNegative=0>ba?!0:!1;0===ba&&1/W===1/-0&&(v.labelIsNegative=!0);isNaN(G.percentWidthValue)||(K=this.height*G.percentWidthValue/100,R=ja-K/2,Ea=R+K/2);K=d.roundTo(K,2);ba=d.roundTo(ba,2);R<q&&0<K&&(va=new d.Cuboid(g,ba,K,H-a.d3x,Q-a.d3y,Na,Va,da,Ca,X,ga,w,t,ea,eb,pb,aa),v.columnWidth=Math.abs(ba),v.columnHeight=Math.abs(K))}else{"3d"==M?(S=E-(r/2-this.depthCount+1)*(k+V)+V/2+H*Z,R=N+Q*Z,Aa=Z):
(S=E-(r/2-Z)*(k+V)+V/2,R=N,Aa=0);K=k;ya=S+k/2;Ea=F;ka=S+k/2;la=F;S+K>n+Aa*H&&(K=n-S+Aa*H);S<Aa*H&&(K+=S-Aa*H,S=Aa*H);ba=F-N;v.labelIsNegative=0<ba?!0:!1;0===ba&&1/W!==1/Math.abs(W)&&(v.labelIsNegative=!0);var fc=R;R=d.fitToBounds(R,this.dy,q);ba+=fc-R;ba=d.fitToBounds(ba,-R+Q*Aa,q-R);isNaN(G.percentWidthValue)||(K=this.width*G.percentWidthValue/100,S=ja-K/2,ya=S+K/2);K=d.roundTo(K,2);ba=d.roundTo(ba,2);S<n+Z*H&&0<K&&(this.showOnAxis&&(R-=Q/2),va=new d.Cuboid(g,K,ba,H-a.d3x,Q-a.d3y,Na,Va,da,Ca,this.lineAlpha,
ga,w,t,ea,eb,pb,aa),v.columnHeight=Math.abs(ba),v.columnWidth=Math.abs(K))}}if(va){za=va.set;d.setCN(a,va.set,"graph-"+this.type);d.setCN(a,va.set,"graph-"+this.id);v.className&&d.setCN(a,va.set,v.className,!0);v.columnGraphics=za;S=d.roundTo(S,2);R=d.roundTo(R,2);za.translate(S,R);(v.url||this.showHandOnHover)&&za.setAttr("cursor","pointer");if(!J){"none"==M&&(I=t?(this.end+1-L)*C-c:C*L+c);"3d"==M&&(t?(I=(this.end+1-L)*C-c-1E3*this.depthCount,ya+=H*Z,ka+=H*Z,v.y+=H*Z):(I=(C-c)*(L+1)+1E3*this.depthCount,
Ea+=Q*Z,la+=Q*Z,v.y+=Q*Z));if("regular"==M||"100%"==M)I=t?0<Ia.value?(this.end+1-L)*C+c:(this.end+1-L)*C-c:0<Ia.value?C*L+c:C*L-c;this.columnsArray.push({column:va,depth:I});v.x=t?R+K/2:S+K/2;this.ownColumns.push(va);this.animateColumns(va,L,E,O,F,N);this.addListeners(za,v);void 0!==this.tabIndex&&za.setAttr("tabindex",this.tabIndex)}this.columnsSet.push(za)}}break;case "candlestick":if(!isNaN(ua)&&!isNaN(W)){var Xa,fb;Ca=Ha;void 0!=v.lineColor&&(Ca=v.lineColor);ya=E;la=Ea=F;ka=E;if(t){"open"==l&&
(ka=O);"high"==l&&(ka=sa);"low"==l&&(ka=qa);E=d.fitToBounds(E,0,pa);O=d.fitToBounds(O,0,pa);qa=d.fitToBounds(qa,0,pa);sa=d.fitToBounds(sa,0,pa);if(0===E&&0===O&&0===qa&&0===sa)continue;if(E==pa&&O==pa&&qa==pa&&sa==pa)continue;R=F-k/2;S=O;K=k;R+K>q&&(K=q-R);0>R&&(K+=R,R=0);if(R<q&&0<K){var Eb,Fb;W>ua?(Eb=[E,sa],Fb=[O,qa]):(Eb=[O,sa],Fb=[E,qa]);!isNaN(sa)&&!isNaN(qa)&&F<q&&0<F&&(Xa=d.line(g,Eb,[F,F],Ca,X,da),fb=d.line(g,Fb,[F,F],Ca,X,da));ba=E-O;va=new d.Cuboid(g,ba,K,H,Q,Na,ab,da,Ca,X,ga,w,t,ea,eb,
pb,aa)}}else{"open"==l&&(la=N);"high"==l&&(la=ta);"low"==l&&(la=ra);F=d.fitToBounds(F,0,Fa);N=d.fitToBounds(N,0,Fa);ra=d.fitToBounds(ra,0,Fa);ta=d.fitToBounds(ta,0,Fa);if(0===F&&0===N&&0===ra&&0===ta)continue;if(F==Fa&&N==Fa&&ra==Fa&&ta==Fa)continue;S=E-k/2;R=N+da/2;K=k;S+K>n&&(K=n-S);0>S&&(K+=S,S=0);ba=F-N;if(S<n&&0<K){Bb&&W>=ua&&(Va=0);var va=new d.Cuboid(g,K,ba,H,Q,Na,Va,da,Ca,X,ga,w,t,ea,eb,pb,aa),Gb,Hb;W>ua?(Gb=[F,ta],Hb=[N,ra]):(Gb=[N,ta],Hb=[F,ra]);!isNaN(ta)&&!isNaN(ra)&&E<n&&0<E&&(Xa=d.line(g,
[E,E],Gb,Ca,X,da),fb=d.line(g,[E,E],Hb,Ca,X,da),d.setCN(a,Xa,this.bcn+"line-high"),v.className&&d.setCN(a,Xa,v.className,!0),d.setCN(a,fb,this.bcn+"line-low"),v.className&&d.setCN(a,fb,v.className,!0))}}va&&(za=va.set,v.columnGraphics=za,fa.push(za),za.translate(S,R-da/2),(v.url||this.showHandOnHover)&&za.setAttr("cursor","pointer"),Xa&&(fa.push(Xa),fa.push(fb)),J||(v.x=t?R+K/2:S+K/2,this.animateColumns(va,L,E,O,F,N),this.addListeners(za,v),void 0!==this.tabIndex&&za.setAttr("tabindex",this.tabIndex)))}break;
case "ohlc":if(!(isNaN(ua)||isNaN(zb)||isNaN(Ab)||isNaN(W))){var Sb=g.set();fa.push(Sb);W<ua&&(v.isNegative=!0,void 0!=Ja&&(Ha=Ja));void 0!=v.lineColor&&(Ha=v.lineColor);var Ya,Za,$a;if(t){la=F;ka=E;"open"==l&&(ka=O);"high"==l&&(ka=sa);"low"==l&&(ka=qa);qa=d.fitToBounds(qa,0,pa);sa=d.fitToBounds(sa,0,pa);if(0===E&&0===O&&0===qa&&0===sa)continue;if(E==pa&&O==pa&&qa==pa&&sa==pa)continue;var Ib=F-k/2,Ib=d.fitToBounds(Ib,0,q),Tb=d.fitToBounds(F,0,q),Jb=F+k/2,Jb=d.fitToBounds(Jb,0,q);0<=O&&O<=pa&&(Za=
d.line(g,[O,O],[Ib,Tb],Ha,X,da,ea));0<F&&F<q&&(Ya=d.line(g,[qa,sa],[F,F],Ha,X,da,ea));0<=E&&E<=pa&&($a=d.line(g,[E,E],[Tb,Jb],Ha,X,da,ea))}else{la=F;"open"==l&&(la=N);"high"==l&&(la=ta);"low"==l&&(la=ra);var ka=E,ra=d.fitToBounds(ra,0,Fa),ta=d.fitToBounds(ta,0,Fa),Kb=E-k/2,Kb=d.fitToBounds(Kb,0,n),Ub=d.fitToBounds(E,0,n),Lb=E+k/2,Lb=d.fitToBounds(Lb,0,n);0<=N&&N<=Fa&&(Za=d.line(g,[Kb,Ub],[N,N],Ha,X,da,ea));0<E&&E<n&&(Ya=d.line(g,[E,E],[ra,ta],Ha,X,da,ea));0<=F&&F<=Fa&&($a=d.line(g,[Ub,Lb],[F,F],Ha,
X,da,ea))}fa.push(Za);fa.push(Ya);fa.push($a);d.setCN(a,Za,this.bcn+"stroke-open");d.setCN(a,$a,this.bcn+"stroke-close");d.setCN(a,Ya,this.bcn+"stroke");v.className&&d.setCN(a,Sb,v.className,!0);Ya&&this.addListeners(Ya,v);$a&&this.addListeners($a,v);Za&&this.addListeners(Za,v);ya=E;Ea=F}}if(!J&&!isNaN(W)){var Vb=this.hideBulletsCount;if(this.end-this.start<=Vb||0===Vb){var Wb=this.createBullet(v,ka,la,L),Xb=this.labelText;if(Xb&&!isNaN(ya)&&!isNaN(ya)){var gc=this.createLabel(v,Xb),Yb=0;Wb&&(Yb=
Wb.size);this.positionLabel(v,ya,Ea,gc,Yb)}if("regular"==M||"100%"==M){var Zb=f.totalText;if(Zb){var Oa=this.createLabel(v,Zb,f.totalTextColor);d.setCN(a,Oa,this.bcn+"label-total");this.allBullets.push(Oa);if(Oa){var $b=Oa.getBBox(),ac=$b.width,bc=$b.height,gb,hb,sb=f.totalTextOffset,cc=f.totals[L];cc&&cc.remove();var ib=0;"column"!=h&&(ib=this.bulletSize);t?(hb=Ea,gb=0>W?E-ac/2-2-ib-sb:E+ac/2+3+ib+sb):(gb=ya,hb=0>W?F+bc/2+ib+sb:F-bc/2-3-ib-sb);Oa.translate(gb,hb);f.totals[L]=Oa;t?(0>hb||hb>q)&&Oa.remove():
(0>gb||gb>n)&&Oa.remove()}}}}}}}this.lastDataItem=v;if("line"==h||"step"==h||"smoothedLine"==h)"smoothedLine"==h?this.drawSmoothedGraph(x,u,T,U):this.drawLineGraph(x,u,T,U),J||this.launchAnimation();this.bulletsHidden&&this.hideBullets();this.customBulletsHidden&&this.hideCustomBullets()},animateColumns:function(a,b){var c=this,e=c.chart.startDuration;0<e&&!c.animationPlayed&&(c.seqAn?(a.set.hide(),c.animationArray.push(a),e=setTimeout(function(){c.animate.call(c)},e/(c.end-c.start+1)*(b-c.start)*
1E3),c.timeOuts.push(e)):c.animate(a),c.chart.animatable.push(a))},createLabel:function(a,b,c){var e=this.chart,g=a.labelColor;g||(g=this.color);g||(g=e.color);c&&(g=c);c=this.fontSize;void 0===c&&(this.fontSize=c=e.fontSize);var f=this.labelFunction;b=e.formatString(b,a);b=d.cleanFromEmpty(b);f&&(b=f(a,b));if(void 0!==b&&""!==b)return a=d.text(this.container,b,g,e.fontFamily,c),a.node.style.pointerEvents="none",d.setCN(e,a,this.bcn+"label"),this.bulletSet.push(a),a},positiveClip:function(a){a.clipRect(this.pmx,
this.pmy,this.pmw,this.pmh)},negativeClip:function(a){a.clipRect(this.nmx,this.nmy,this.nmw,this.nmh)},drawLineGraph:function(a,b,c,e){var g=this;if(1<a.length){var f=g.noRounding,h=g.set,k=g.chart,l=g.container,m=l.set(),n=l.set();h.push(n);h.push(m);var q=g.lineAlpha,p=g.lineThickness,h=g.fillAlphas,t=g.lineColorR,r=g.negativeLineAlpha;isNaN(r)&&(r=q);var w=g.lineColorSwitched;w&&(t=w);var w=g.fillColorsR,z=g.fillColorsSwitched;z&&(w=z);var x=g.dashLength;(z=g.dashLengthSwitched)&&(x=z);var z=g.negativeLineColor,
u=g.negativeFillColors,A=g.negativeFillAlphas,y=g.baseCoord;0!==g.negativeBase&&(y=g.valueAxis.getCoordinate(g.negativeBase,f),y>g.height&&(y=g.height),0>y&&(y=0));q=d.line(l,a,b,t,q,p,x,!1,!0,f);q.node.setAttribute("stroke-linejoin","round");d.setCN(k,q,g.bcn+"stroke");m.push(q);m.click(function(a){g.handleGraphEvent(a,"clickGraph")}).mouseover(function(a){g.handleGraphEvent(a,"rollOverGraph")}).mouseout(function(a){g.handleGraphEvent(a,"rollOutGraph")}).touchmove(function(a){g.chart.handleMouseMove(a)}).touchend(function(a){g.chart.handleTouchEnd(a)});
void 0===z||g.useNegativeColorIfDown||(p=d.line(l,a,b,z,r,p,x,!1,!0,f),p.node.setAttribute("stroke-linejoin","round"),d.setCN(k,p,g.bcn+"stroke"),d.setCN(k,p,g.bcn+"stroke-negative"),n.push(p));if(0<h||0<A)if(p=a.join(";").split(";"),r=b.join(";").split(";"),q=k.type,"serial"==q||"radar"==q?0<c.length?(c.reverse(),e.reverse(),p=a.concat(c),r=b.concat(e)):"radar"==q?(r.push(0),p.push(0)):g.rotate?(r.push(r[r.length-1]),p.push(y),r.push(r[0]),p.push(y),r.push(r[0]),p.push(p[0])):(p.push(p[p.length-
1]),r.push(y),p.push(p[0]),r.push(y),p.push(a[0]),r.push(r[0])):"xy"==q&&(b=g.fillToAxis)&&(d.isString(b)&&(b=k.getValueAxisById(b)),"H"==b.orientation?(y="top"==b.position?0:b.height,p.push(p[p.length-1]),r.push(y),p.push(p[0]),r.push(y),p.push(a[0]),r.push(r[0])):(y="left"==b.position?0:b.width,r.push(r[r.length-1]),p.push(y),r.push(r[0]),p.push(y),r.push(r[0]),p.push(p[0]))),a=g.gradientRotation,0<h&&(b=d.polygon(l,p,r,w,h,1,"#000",0,a,f),b.pattern(g.pattern,NaN,k.path),d.setCN(k,b,g.bcn+"fill"),
m.push(b)),u||void 0!==z)isNaN(A)&&(A=h),u||(u=z),f=d.polygon(l,p,r,u,A,1,"#000",0,a,f),d.setCN(k,f,g.bcn+"fill"),d.setCN(k,f,g.bcn+"fill-negative"),f.pattern(g.pattern,NaN,k.path),n.push(f),n.click(function(a){g.handleGraphEvent(a,"clickGraph")}).mouseover(function(a){g.handleGraphEvent(a,"rollOverGraph")}).mouseout(function(a){g.handleGraphEvent(a,"rollOutGraph")}).touchmove(function(a){g.chart.handleMouseMove(a)}).touchend(function(a){g.chart.handleTouchEnd(a)});g.applyMask(n,m)}},applyMask:function(a,
b){var c=a.length();"serial"!=this.chart.type||this.scrollbar||(this.positiveClip(b),0<c&&this.negativeClip(a))},drawSmoothedGraph:function(a,b,c,e){if(1<a.length){var g=this.set,f=this.chart,h=this.container,k=h.set(),l=h.set();g.push(l);g.push(k);var m=this.lineAlpha,n=this.lineThickness,g=this.dashLength,q=this.fillAlphas,p=this.lineColorR,t=this.fillColorsR,r=this.negativeLineColor,w=this.negativeFillColors,z=this.negativeFillAlphas,x=this.baseCoord,u=this.lineColorSwitched;u&&(p=u);(u=this.fillColorsSwitched)&&
(t=u);var A=this.negativeLineAlpha;isNaN(A)&&(A=m);u=this.getGradRotation();m=new d.Bezier(h,a,b,p,m,n,t,0,g,void 0,u);d.setCN(f,m,this.bcn+"stroke");k.push(m.path);void 0!==r&&(n=new d.Bezier(h,a,b,r,A,n,t,0,g,void 0,u),d.setCN(f,n,this.bcn+"stroke"),d.setCN(f,n,this.bcn+"stroke-negative"),l.push(n.path));0<q&&(n=a.join(";").split(";"),m=b.join(";").split(";"),p="",0<c.length?(c.push("M"),e.push("M"),c.reverse(),e.reverse(),n=a.concat(c),m=b.concat(e)):(this.rotate?(p+=" L"+x+","+b[b.length-1],p+=
" L"+x+","+b[0]):(p+=" L"+a[a.length-1]+","+x,p+=" L"+a[0]+","+x),p+=" L"+a[0]+","+b[0]),a=new d.Bezier(h,n,m,NaN,0,0,t,q,g,p,u),d.setCN(f,a,this.bcn+"fill"),a.path.pattern(this.pattern,NaN,f.path),k.push(a.path),w||void 0!==r)&&(z||(z=q),w||(w=r),h=new d.Bezier(h,n,m,NaN,0,0,w,z,g,p,u),h.path.pattern(this.pattern,NaN,f.path),d.setCN(f,h,this.bcn+"fill"),d.setCN(f,h,this.bcn+"fill-negative"),l.push(h.path));this.applyMask(l,k)}},launchAnimation:function(){var a=this,b=a.chart.startDuration;if(0<b&&
!a.animationPlayed){var c=a.set,e=a.bulletSet;d.VML||(c.attr({opacity:a.startAlpha}),e.attr({opacity:a.startAlpha}));c.hide();e.hide();a.seqAn?(b=setTimeout(function(){a.animateGraphs.call(a)},a.index*b*1E3),a.timeOuts.push(b)):a.animateGraphs()}},animateGraphs:function(){var a=this.chart,b=this.set,c=this.bulletSet,e=this.x,d=this.y;b.show();c.show();var f=a.startDuration,h=a.startEffect;b&&(this.rotate?(b.translate(-1E3,d),c.translate(-1E3,d)):(b.translate(e,-1E3),c.translate(e,-1E3)),b.animate({opacity:1,
translate:e+","+d},f,h),c.animate({opacity:1,translate:e+","+d},f,h),a.animatable.push(b))},animate:function(a){var b=this.chart,c=this.animationArray;!a&&0<c.length&&(a=c[0],c.shift());c=d[d.getEffect(b.startEffect)];b=b.startDuration;a&&(this.rotate?a.animateWidth(b,c):a.animateHeight(b,c),a.set.show())},legendKeyColor:function(){var a=this.legendColor,b=this.lineAlpha;void 0===a&&(a=this.lineColorR,0===b&&(b=this.fillColorsR)&&(a="object"==typeof b?b[0]:b));return a},legendKeyAlpha:function(){var a=
this.legendAlpha;void 0===a&&(a=this.lineAlpha,this.fillAlphas>a&&(a=this.fillAlphas),0===a&&(a=this.bulletAlpha),0===a&&(a=1));return a},createBullet:function(a,b,c){if(!isNaN(b)&&!isNaN(c)&&("none"!=this.bullet||this.customBullet||a.bullet||a.customBullet)){var e=this.chart,g=this.container,f=this.bulletOffset,h=this.bulletSize;isNaN(a.bulletSize)||(h=a.bulletSize);var k=a.values.value,l=this.maxValue,m=this.minValue,n=this.maxBulletSize,q=this.minBulletSize;isNaN(l)||(isNaN(k)||(h=(k-m)/(l-m)*
(n-q)+q),m==l&&(h=n));l=h;this.bulletAxis&&(h=a.values.error,isNaN(h)||(k=h),h=this.bulletAxis.stepWidth*k);h<this.minBulletSize&&(h=this.minBulletSize);this.rotate?b=a.isNegative?b-f:b+f:c=a.isNegative?c+f:c-f;q=this.bulletColorR;a.lineColor&&void 0===this.bulletColor&&(this.bulletColorSwitched=a.lineColor);this.bulletColorSwitched&&(q=this.bulletColorSwitched);a.isNegative&&void 0!==this.bulletColorNegative&&(q=this.bulletColorNegative);void 0!==a.color&&(q=a.color);var p;"xy"==e.type&&this.valueField&&
(p=this.pattern,a.pattern&&(p=a.pattern));f=this.bullet;a.bullet&&(f=a.bullet);var k=this.bulletBorderThickness,m=this.bulletBorderColorR,n=this.bulletBorderAlpha,t=this.bulletAlpha;m||(m=q);this.useLineColorForBulletBorder&&(m=this.lineColorR,a.isNegative&&this.negativeLineColor&&(m=this.negativeLineColor),this.lineColorSwitched&&(m=this.lineColorSwitched));var r=a.alpha;isNaN(r)||(t=r);p=d.bullet(g,f,h,q,t,k,m,n,l,0,p,e.path);l=this.customBullet;a.customBullet&&(l=a.customBullet);l&&(p&&p.remove(),
"function"==typeof l?(l=new l,l.chart=e,a.bulletConfig&&(l.availableSpace=c,l.graph=this,l.graphDataItem=a,l.bulletY=c,a.bulletConfig.minCoord=this.minCoord-c,l.bulletConfig=a.bulletConfig),l.write(g),p&&l.showBullet&&l.set.push(p),a.customBulletGraphics=l.cset,p=l.set):(p=g.set(),l=g.image(l,0,0,h,h),p.push(l),this.centerCustomBullets&&l.translate(-h/2,-h/2)));if(p){(a.url||this.showHandOnHover)&&p.setAttr("cursor","pointer");if("serial"==e.type||"gantt"==e.type)if(-.5>b||b>this.width||c<-h/2||c>
this.height)p.remove(),p=null;p&&(this.bulletSet.push(p),p.translate(b,c),this.addListeners(p,a),this.allBullets.push(p));a.bx=b;a.by=c;d.setCN(e,p,this.bcn+"bullet");a.className&&d.setCN(e,p,a.className,!0)}if(p){p.size=h||0;if(e=this.bulletHitAreaSize)g=d.circle(g,e,"#FFFFFF",.001,0),g.translate(b,c),a.hitBullet=g,this.bulletSet.push(g),this.addListeners(g,a);a.bulletGraphics=p;void 0!==this.tabIndex&&p.setAttr("tabindex",this.tabIndex)}else p={size:0};p.graphDataItem=a;return p}},showBullets:function(){var a=
this.allBullets,b;this.bulletsHidden=!1;for(b=0;b<a.length;b++)a[b].show()},hideBullets:function(){var a=this.allBullets,b;this.bulletsHidden=!0;for(b=0;b<a.length;b++)a[b].hide()},showCustomBullets:function(){var a=this.allBullets,b;this.customBulletsHidden=!1;for(b=0;b<a.length;b++){var c=a[b].graphDataItem;c&&c.customBulletGraphics&&c.customBulletGraphics.show()}},hideCustomBullets:function(){var a=this.allBullets,b;this.customBulletsHidden=!0;for(b=0;b<a.length;b++){var c=a[b].graphDataItem;c&&
c.customBulletGraphics&&c.customBulletGraphics.hide()}},addListeners:function(a,b){var c=this;a.mouseover(function(a){c.handleRollOver(b,a)}).mouseout(function(a){c.handleRollOut(b,a)}).touchend(function(a){c.handleRollOver(b,a);c.chart.panEventsEnabled&&c.handleClick(b,a)}).touchstart(function(a){c.handleRollOver(b,a)}).click(function(a){c.handleClick(b,a)}).dblclick(function(a){c.handleDoubleClick(b,a)}).contextmenu(function(a){c.handleRightClick(b,a)});var e=c.chart;if(e.accessible&&c.accessibleLabel){var d=
e.formatString(c.accessibleLabel,b);e.makeAccessible(a,d)}},handleRollOver:function(a,b){this.handleGraphEvent(b,"rollOverGraph");if(a){var c=this.chart;a.bulletConfig&&(c.isRolledOverBullet=!0);var e={type:"rollOverGraphItem",item:a,index:a.index,graph:this,target:this,chart:this.chart,event:b};this.fire(e);c.fire(e);clearTimeout(c.hoverInt);(c=c.chartCursor)&&c.valueBalloonsEnabled||this.showGraphBalloon(a,"V",!0)}},handleRollOut:function(a,b){var c=this.chart;if(a){var e={type:"rollOutGraphItem",
item:a,index:a.index,graph:this,target:this,chart:this.chart,event:b};this.fire(e);c.fire(e);c.isRolledOverBullet=!1}this.handleGraphEvent(b,"rollOutGraph");(c=c.chartCursor)&&c.valueBalloonsEnabled||this.hideBalloon()},handleClick:function(a,b){if(!this.chart.checkTouchMoved()&&this.chart.checkTouchDuration(b)){if(a){var c={type:"clickGraphItem",item:a,index:a.index,graph:this,target:this,chart:this.chart,event:b};this.fire(c);this.chart.fire(c);d.getURL(a.url,this.urlTarget)}this.handleGraphEvent(b,
"clickGraph")}},handleGraphEvent:function(a,b){var c={type:b,graph:this,target:this,chart:this.chart,event:a};this.fire(c);this.chart.fire(c)},handleRightClick:function(a,b){if(a){var c={type:"rightClickGraphItem",item:a,index:a.index,graph:this,target:this,chart:this.chart,event:b};this.fire(c);this.chart.fire(c)}},handleDoubleClick:function(a,b){if(a){var c={type:"doubleClickGraphItem",item:a,index:a.index,graph:this,target:this,chart:this.chart,event:b};this.fire(c);this.chart.fire(c)}},zoom:function(a,
b){this.start=a;this.end=b;this.draw()},changeOpacity:function(a){var b=this.set;b&&b.setAttr("opacity",a);if(b=this.ownColumns){var c;for(c=0;c<b.length;c++){var e=b[c].set;e&&e.setAttr("opacity",a)}}(b=this.bulletSet)&&b.setAttr("opacity",a)},destroy:function(){d.remove(this.set);d.remove(this.bulletSet);var a=this.timeOuts;if(a){var b;for(b=0;b<a.length;b++)clearTimeout(a[b])}this.timeOuts=[]},createBalloon:function(){var a=this.chart;this.balloon?this.balloon.destroy&&this.balloon.destroy():this.balloon=
{};var b=this.balloon;d.extend(b,a.balloon,!0);b.chart=a;b.mainSet=a.plotBalloonsSet;b.className=this.id},hideBalloon:function(){var a=this,b=a.chart;b.chartCursor?b.chartCursor.valueBalloonsEnabled||b.hideBalloon():b.hideBalloon();clearTimeout(a.hoverInt);a.hoverInt=setTimeout(function(){a.hideBalloonReal.call(a)},b.hideBalloonTime)},hideBalloonReal:function(){this.balloon&&this.balloon.hide();this.fixBulletSize()},fixBulletSize:function(){if(d.isModern){var a=this.resizedDItem;if(a){var b=a.bulletGraphics;
if(b&&!b.doNotScale){b.translate(a.bx,a.by,1);var c=this.bulletAlpha;isNaN(a.alpha)||(c=a.alpha);b.setAttr("fill-opacity",c);b.setAttr("stroke-opacity",this.bulletBorderAlpha)}}this.resizedDItem=null}},showGraphBalloon:function(a,b,c,e,g){if(a){var f=this.chart,h=this.balloon,k=0,l=0,m=f.chartCursor,n=!0;m?m.valueBalloonsEnabled||(h=f.balloon,k=this.x,l=this.y,n=!1):(h=f.balloon,k=this.x,l=this.y,n=!1);clearTimeout(this.hoverInt);if(f.chartCursor&&(this.currentDataItem=a,"serial"==f.type&&f.isRolledOverBullet&&
f.chartCursor.valueBalloonsEnabled)){this.hideBalloonReal();return}this.resizeBullet(a,e,g);if(h&&h.enabled&&this.showBalloon&&!this.hidden){var m=f.formatString(this.balloonText,a,!0),q=this.balloonFunction;q&&(m=q(a,a.graph));m&&(m=d.cleanFromEmpty(m));m&&""!==m?(e=f.getBalloonColor(this,a),h.drop||(h.pointerOrientation=b),b=a.x,g=a.y,f.rotate&&(b=a.y,g=a.x),b+=k,g+=l,isNaN(b)||isNaN(g)?this.hideBalloonReal():(a=this.width,q=this.height,n&&h.setBounds(k,l,a+k,q+l),h.changeColor(e),h.setPosition(b,
g),h.fixPrevious(),h.fixedPosition&&(c=!1),!c&&"radar"!=f.type&&(b<k-.5||b>a+k||g<l-.5||g>q+l)?(h.showBalloon(m),h.hide(0)):(h.followCursor(c),h.showBalloon(m)))):(this.hideBalloonReal(),h.hide(),this.resizeBullet(a,e,g))}else this.hideBalloonReal()}},resizeBullet:function(a,b,c){this.fixBulletSize();if(a&&d.isModern&&(1!=b||!isNaN(c))){var e=a.bulletGraphics;e&&!e.doNotScale&&(e.translate(a.bx,a.by,b),isNaN(c)||(e.setAttr("fill-opacity",c),e.setAttr("stroke-opacity",c)),this.resizedDItem=a)}}})})();(function(){var d=window.AmCharts;d.ChartCursor=d.Class({construct:function(a){this.cname="ChartCursor";this.createEvents("changed","zoomed","onHideCursor","onShowCursor","draw","selected","moved","panning","zoomStarted");this.enabled=!0;this.cursorAlpha=1;this.selectionAlpha=.2;this.cursorColor="#CC0000";this.categoryBalloonAlpha=1;this.color="#FFFFFF";this.type="cursor";this.zoomed=!1;this.zoomable=!0;this.pan=!1;this.categoryBalloonDateFormat="MMM DD, YYYY";this.categoryBalloonText="[[category]]";
this.categoryBalloonEnabled=this.valueBalloonsEnabled=!0;this.rolledOver=!1;this.cursorPosition="middle";this.bulletsEnabled=this.skipZoomDispatch=!1;this.bulletSize=8;this.selectWithoutZooming=this.oneBalloonOnly=!1;this.graphBulletSize=1.7;this.animationDuration=.3;this.zooming=!1;this.adjustment=0;this.avoidBalloonOverlapping=!0;this.leaveCursor=!1;this.leaveAfterTouch=!0;this.valueZoomable=!1;this.balloonPointerOrientation="horizontal";this.hLineEnabled=this.vLineEnabled=!0;this.vZoomEnabled=
this.hZoomEnabled=!1;d.applyTheme(this,a,this.cname)},draw:function(){this.destroy();var a=this.chart;a.panRequired=!0;var b=a.container;this.rotate=a.rotate;this.container=b;this.prevLineHeight=this.prevLineWidth=NaN;b=b.set();b.translate(this.x,this.y);this.set=b;a.cursorSet.push(b);this.createElements();d.isString(this.limitToGraph)&&(this.limitToGraph=d.getObjById(a.graphs,this.limitToGraph),this.fullWidth=!1,this.cursorPosition="middle");this.pointer=this.balloonPointerOrientation.substr(0,1).toUpperCase();
this.isHidden=!1;this.hideLines();this.valueLineAxis||(this.valueLineAxis=a.valueAxes[0])},createElements:function(){var a=this,b=a.chart,c=b.dx,e=b.dy,g=a.width,f=a.height,h,k,l=a.cursorAlpha,m=a.valueLineAlpha;a.rotate?(h=m,k=l):(k=m,h=l);"xy"==b.type&&(k=l,void 0!==m&&(k=m),h=l);a.vvLine=d.line(a.container,[c,0,0],[e,0,f],a.cursorColor,h,1);d.setCN(b,a.vvLine,"cursor-line");d.setCN(b,a.vvLine,"cursor-line-vertical");a.hhLine=d.line(a.container,[0,g,g+c],[0,0,e],a.cursorColor,k,1);d.setCN(b,a.hhLine,
"cursor-line");d.setCN(b,a.hhLine,"cursor-line-horizontal");a.vLine=a.rotate?a.vvLine:a.hhLine;a.set.push(a.vvLine);a.set.push(a.hhLine);a.set.node.style.pointerEvents="none";a.fullLines=a.container.set();b=b.cursorLineSet;b.push(a.fullLines);b.translate(a.x,a.y);b.clipRect(-1,-1,g+2,f+2);void 0!==a.tabIndex&&(b.setAttr("tabindex",a.tabIndex),b.keyup(function(b){a.handleKeys(b)}).focus(function(b){a.showCursor()}).blur(function(b){a.hideCursor()}));a.set.clipRect(0,0,g,f)},handleKeys:function(a){var b=
this.prevIndex,c=this.chart;if(c){var e=c.chartData;e&&(isNaN(b)&&(b=e.length-1),37!=a.keyCode&&40!=a.keyCode||b--,39!=a.keyCode&&38!=a.keyCode||b++,b=d.fitToBounds(b,c.startIndex,c.endIndex),(a=this.chart.chartData[b])&&this.setPosition(a.x.categoryAxis),this.prevIndex=b)}},update:function(){var a=this.chart;if(a){var b=a.mouseX-this.x,c=a.mouseY-this.y;this.mouseX=b;this.mouseY=c;this.mouse2X=a.mouse2X-this.x;this.mouse2Y=a.mouse2Y-this.y;var e;if(a.chartData&&0<a.chartData.length){this.mouseIsOver()?
(this.hideGraphBalloons=!1,this.rolledOver=e=!0,this.updateDrawing(),this.vvLine&&isNaN(this.fx)&&(a.rotate||!this.limitToGraph)&&this.vvLine.translate(b,0),!this.hhLine||!isNaN(this.fy)||a.rotate&&this.limitToGraph||this.hhLine.translate(0,c),isNaN(this.mouse2X)?this.dispatchMovedEvent(b,c):e=!1):this.forceShow||this.hideCursor();if(this.zooming){if(!isNaN(this.mouse2X)){isNaN(this.mouse2X0)||this.dispatchPanEvent();return}if(this.pan){this.dispatchPanEvent();return}(this.hZoomEnabled||this.vZoomEnabled)&&
this.zooming&&this.updateSelection()}e&&this.showCursor()}}},updateDrawing:function(){this.drawing&&this.chart.setMouseCursor("crosshair");if(this.drawingNow&&(d.remove(this.drawingLine),1<Math.abs(this.drawStartX-this.mouseX)||1<Math.abs(this.drawStartY-this.mouseY))){var a=this.chart,b=a.marginTop,a=a.marginLeft;this.drawingLine=d.line(this.container,[this.drawStartX+a,this.mouseX+a],[this.drawStartY+b,this.mouseY+b],this.cursorColor,1,1)}},fixWidth:function(a){if(this.fullWidth&&this.prevLineWidth!=
a){var b=this.vvLine,c=0;b&&(b.remove(),c=b.x);b=this.container.set();b.translate(c,0);c=d.rect(this.container,a,this.height,this.cursorColor,this.cursorAlpha,this.cursorAlpha,this.cursorColor);d.setCN(this.chart,c,"cursor-fill");c.translate(-a/2-1,0);b.push(c);this.vvLine=b;this.fullLines.push(b);this.prevLineWidth=a}},fixHeight:function(a){if(this.fullWidth&&this.prevLineHeight!=a){var b=this.hhLine,c=0;b&&(b.remove(),c=b.y);b=this.container.set();b.translate(0,c);c=d.rect(this.container,this.width,
a,this.cursorColor,this.cursorAlpha);c.translate(0,-a/2);b.push(c);this.fullLines.push(b);this.hhLine=b;this.prevLineHeight=a}},fixVLine:function(a,b){if(!isNaN(a)){if(isNaN(this.prevLineX)){var c=0,e=this.mouseX;if(this.limitToGraph){var d=this.chart.categoryAxis;d&&(this.chart.rotate||(c="bottom"==d.position?this.height:-this.height),e=a)}this.vvLine.translate(e,c)}else this.prevLineX!=a&&this.vvLine.translate(this.prevLineX,this.prevLineY);this.fx=a;this.prevLineX!=a&&(c=this.animationDuration,
this.zooming&&(c=0),this.vvLine.stop(),this.vvLine.animate({translate:a+","+b},c,"easeOutSine"),this.prevLineX=a,this.prevLineY=b)}},fixHLine:function(a,b){if(!isNaN(a)){if(isNaN(this.prevLineY)){var c=0,e=this.mouseY;if(this.limitToGraph){var d=this.chart.categoryAxis;d&&(this.chart.rotate&&(c="right"==d.position?this.width:-this.width),e=a)}this.hhLine.translate(c,e)}else this.prevLineY!=a&&this.hhLine.translate(this.prevLineX,this.prevLineY);this.fy=a;this.prevLineY!=a&&(c=this.animationDuration,
this.zooming&&(c=0),this.hhLine.stop(),this.hhLine.animate({translate:b+","+a},c,"easeOutSine"),this.prevLineY=a,this.prevLineX=b)}},hideCursor:function(a){this.forceShow=!1;this.chart.wasTouched&&this.leaveAfterTouch||this.isHidden||this.leaveCursor||(this.hideCursorReal(),a?this.chart.handleCursorHide():this.fire({target:this,chart:this.chart,type:"onHideCursor"}),this.chart.setMouseCursor("auto"))},hideCursorReal:function(){this.hideLines();this.isHidden=!0;this.index=this.prevLineY=this.prevLineX=
this.mouseY0=this.mouseX0=this.fy=this.fx=NaN},hideLines:function(){this.vvLine&&this.vvLine.hide();this.hhLine&&this.hhLine.hide();this.fullLines&&this.fullLines.hide();this.isHidden=!0;this.chart.handleCursorHide()},showCursor:function(a){!this.drawing&&this.enabled&&(this.vLineEnabled&&this.vvLine&&this.vvLine.show(),this.hLineEnabled&&this.hhLine&&this.hhLine.show(),this.isHidden=!1,this.updateFullLine(),a||this.fire({target:this,chart:this.chart,type:"onShowCursor"}),this.pan&&this.chart.setMouseCursor("move"))},
updateFullLine:function(){this.zooming&&this.fullWidth&&this.selection&&(this.rotate?0<this.selection.height&&this.hhLine.hide():0<this.selection.width&&this.vvLine.hide())},updateSelection:function(){if(!this.pan&&this.enabled){var a=this.mouseX,b=this.mouseY;isNaN(this.fx)||(a=this.fx);isNaN(this.fy)||(b=this.fy);this.clearSelection();var c=this.mouseX0,e=this.mouseY0,g=this.width,f=this.height,a=d.fitToBounds(a,0,g),b=d.fitToBounds(b,0,f),h;a<c&&(h=a,a=c,c=h);b<e&&(h=b,b=e,e=h);this.hZoomEnabled?
g=a-c:c=0;this.vZoomEnabled?f=b-e:e=0;isNaN(this.mouse2X)&&0<Math.abs(g)&&0<Math.abs(f)&&(a=this.chart,b=d.rect(this.container,g,f,this.cursorColor,this.selectionAlpha),d.setCN(a,b,"cursor-selection"),b.width=g,b.height=f,b.translate(c,e),this.set.push(b),this.selection=b);this.updateFullLine()}},mouseIsOver:function(){var a=this.mouseX,b=this.mouseY;if(this.justReleased)return this.justReleased=!1,!0;if(this.mouseIsDown)return!0;if(!this.chart.mouseIsOver)return this.handleMouseOut(),!1;if(0<a&&
a<this.width&&0<b&&b<this.height)return!0;this.handleMouseOut()},fixPosition:function(){this.prevY=this.prevX=NaN},handleMouseDown:function(){this.update();if(this.mouseIsOver())if(this.mouseIsDown=!0,this.mouseX0=this.mouseX,this.mouseY0=this.mouseY,this.mouse2X0=this.mouse2X,this.mouse2Y0=this.mouse2Y,this.drawing)this.drawStartY=this.mouseY,this.drawStartX=this.mouseX,this.drawingNow=!0;else if(this.dispatchMovedEvent(this.mouseX,this.mouseY),!this.pan&&isNaN(this.mouse2X0)&&(isNaN(this.fx)||(this.mouseX0=
this.fx),isNaN(this.fy)||(this.mouseY0=this.fy)),this.hZoomEnabled||this.vZoomEnabled){this.zooming=!0;var a={chart:this.chart,target:this,type:"zoomStarted"};a.x=this.mouseX/this.width;a.y=this.mouseY/this.height;this.index0=a.index=this.index;this.timestamp0=this.timestamp;this.fire(a)}},registerInitialMouse:function(){},handleReleaseOutside:function(){this.mouseIsDown=!1;if(this.drawingNow){this.drawingNow=!1;d.remove(this.drawingLine);var a=this.drawStartX,b=this.drawStartY,c=this.mouseX,e=this.mouseY,
g=this.chart;(2<Math.abs(a-c)||2<Math.abs(b-e))&&this.fire({type:"draw",target:this,chart:g,initialX:a,initialY:b,finalX:c,finalY:e})}this.zooming&&(this.zooming=!1,this.selectWithoutZooming?this.dispatchZoomEvent("selected"):(this.hZoomEnabled||this.vZoomEnabled)&&this.dispatchZoomEvent("zoomed"),this.rolledOver&&this.dispatchMovedEvent(this.mouseX,this.mouseY));this.mouse2Y0=this.mouse2X0=this.mouseY0=this.mouseX0=NaN},dispatchZoomEvent:function(a){if(!this.pan){var b=this.selection;if(b&&3<Math.abs(b.width)&&
3<Math.abs(b.height)){var c=Math.min(this.index,this.index0),e=Math.max(this.index,this.index0),d=c,f=e,h=this.chart,k=h.chartData,l=h.categoryAxis;l&&l.parseDates&&!l.equalSpacing&&(d=k[c]?k[c].time:Math.min(this.timestamp0,this.timestamp),f=k[e]?h.getEndTime(k[e].time):Math.max(this.timestamp0,this.timestamp));var b={type:a,chart:this.chart,target:this,end:f,start:d,startIndex:c,endIndex:e,selectionHeight:b.height,selectionWidth:b.width,selectionY:b.y,selectionX:b.x},m;this.hZoomEnabled&&4<Math.abs(this.mouseX0-
this.mouseX)&&(b.startX=this.mouseX0/this.width,b.endX=this.mouseX/this.width,m=!0);this.vZoomEnabled&&4<Math.abs(this.mouseY0-this.mouseY)&&(b.startY=1-this.mouseY0/this.height,b.endY=1-this.mouseY/this.height,m=!0);m&&(this.prevY=this.prevX=NaN,this.fire(b),"selected"!=a&&this.clearSelection());this.hideCursor()}}},dispatchMovedEvent:function(a,b,c,e){a=Math.round(a);b=Math.round(b);if(!this.isHidden&&(a!=this.prevX||b!=this.prevY||"changed"==c)){c||(c="moved");var d=this.fx,f=this.fy;isNaN(d)&&
(d=a);isNaN(f)&&(f=b);var h=!1;this.zooming&&this.pan&&(h=!0);h={hidden:this.isHidden,type:c,chart:this.chart,target:this,x:a,y:b,finalX:d,finalY:f,zooming:this.zooming,panning:h,mostCloseGraph:this.mostCloseGraph,index:this.index,skip:e,hideBalloons:this.hideGraphBalloons};this.prevIndex=this.index;this.rotate?(h.position=b,h.finalPosition=f):(h.position=a,h.finalPosition=d);this.prevX=a;this.prevY=b;e?this.chart.handleCursorMove(h):(this.fire(h),"changed"==c&&this.chart.fire(h))}},dispatchPanEvent:function(){if(this.mouseIsDown){var a=
d.roundTo((this.mouseX-this.mouseX0)/this.width,3),b=d.roundTo((this.mouseY-this.mouseY0)/this.height,3),c=d.roundTo((this.mouse2X-this.mouse2X0)/this.width,3),e=d.roundTo((this.mouse2Y-this.mouse2Y0)/this.height,2),g=!1;0!==Math.abs(a)&&0!==Math.abs(b)&&(g=!0);if(this.prevDeltaX==a||this.prevDeltaY==b)g=!1;isNaN(c)||isNaN(e)||(0!==Math.abs(c)&&0!==Math.abs(e)&&(g=!0),this.prevDelta2X!=c&&this.prevDelta2Y!=e)||(g=!1);g&&(this.hideLines(),this.fire({type:"panning",chart:this.chart,target:this,deltaX:a,
deltaY:b,delta2X:c,delta2Y:e,index:this.index}),this.prevDeltaX=a,this.prevDeltaY=b,this.prevDelta2X=c,this.prevDelta2Y=e)}},clearSelection:function(){var a=this.selection;a&&(a.width=0,a.height=0,a.remove())},destroy:function(){this.clear();d.remove(this.selection);this.selection=null;clearTimeout(this.syncTO);d.remove(this.set)},clear:function(){},setTimestamp:function(a){this.timestamp=a},setIndex:function(a,b){a!=this.index&&(this.index=a,b||this.isHidden||this.dispatchMovedEvent(this.mouseX,
this.mouseY,"changed"))},handleMouseOut:function(){this.enabled&&this.rolledOver&&(this.leaveCursor||this.setIndex(void 0),this.forceShow=!1,this.hideCursor(),this.rolledOver=!1)},showCursorAt:function(a){var b=this.chart.categoryAxis;b&&this.setPosition(b.categoryToCoordinate(a),a)},setPosition:function(a,b){var c=this.chart,e=c.categoryAxis;if(e){var d,f;void 0===b&&(b=e.coordinateToValue(a));e.showBalloonAt(b,a);this.forceShow=!0;e.stickBalloonToCategory?c.rotate?this.fixHLine(a,0):this.fixVLine(a,
0):(this.showCursor(),c.rotate?this.hhLine.translate(0,a):this.vvLine.translate(a,0));c.rotate?d=a:f=a;c.rotate?(this.vvLine&&this.vvLine.hide(),this.hhLine&&this.hhLine.show()):(this.hhLine&&this.hhLine.hide(),this.vvLine&&this.vvLine.show());this.updateFullLine();this.isHidden=!1;this.dispatchMovedEvent(f,d,"moved",!0)}},enableDrawing:function(a){this.enabled=!a;this.hideCursor();this.drawing=a},syncWithCursor:function(a,b){clearTimeout(this.syncTO);a&&(a.isHidden?this.hideCursor(!0):this.syncWithCursorReal(a,
b))},isZooming:function(a){this.zooming=a},syncWithCursorReal:function(a,b){var c=a.vvLine,e=a.hhLine;this.index=a.index;this.forceShow=!0;this.zooming&&this.pan||this.showCursor(!0);this.hideGraphBalloons=b;this.justReleased=a.justReleased;this.zooming=a.zooming;this.index0=a.index0;this.mouseX0=a.mouseX0;this.mouseY0=a.mouseY0;this.mouse2X0=a.mouse2X0;this.mouse2Y0=a.mouse2Y0;this.timestamp0=a.timestamp0;this.prevDeltaX=a.prevDeltaX;this.prevDeltaY=a.prevDeltaY;this.prevDelta2X=a.prevDelta2X;this.prevDelta2Y=
a.prevDelta2Y;this.fx=a.fx;this.fy=a.fy;a.zooming&&this.updateSelection();var d=a.mouseX,f=a.mouseY;this.rotate?(d=NaN,this.vvLine&&this.vvLine.hide(),this.hhLine&&e&&(isNaN(a.fy)?this.hhLine.translate(0,a.mouseY):this.fixHLine(a.fy,0))):(f=NaN,this.hhLine&&this.hhLine.hide(),this.vvLine&&c&&(isNaN(a.fx)?this.vvLine.translate(a.mouseX,0):this.fixVLine(a.fx,0)));this.dispatchMovedEvent(d,f,"moved",!0)}})})();(function(){var d=window.AmCharts;d.SimpleChartScrollbar=d.Class({construct:function(a){this.createEvents("zoomed","zoomStarted","zoomEnded");this.backgroundColor="#D4D4D4";this.backgroundAlpha=1;this.selectedBackgroundColor="#EFEFEF";this.scrollDuration=this.selectedBackgroundAlpha=1;this.resizeEnabled=!0;this.hideResizeGrips=!1;this.scrollbarHeight=20;this.updateOnReleaseOnly=!1;9>document.documentMode&&(this.updateOnReleaseOnly=!0);this.dragIconHeight=this.dragIconWidth=35;this.dragIcon="dragIconRoundBig";
this.dragCursorHover="cursor: move; cursor: grab; cursor: -moz-grab; cursor: -webkit-grab;";this.dragCursorDown="cursor: move; cursor: grab; cursor: -moz-grabbing; cursor: -webkit-grabbing;";this.vResizeCursor="ns-resize";this.hResizeCursor="ew-resize";this.enabled=!0;this.percentStart=this.offset=0;this.percentEnd=1;d.applyTheme(this,a,"SimpleChartScrollbar")},getPercents:function(){var a=this.getDBox(),b=a.x,c=a.y,e=a.width,a=a.height;this.rotate?(b=1-c/this.height,c=1-(c+a)/this.height):(c=b/this.width,
b=(b+e)/this.width);this.percentStart=c;this.percentEnd=b},draw:function(){var a=this;a.destroy();if(a.enabled){var b=a.chart.container,c=a.rotate,e=a.chart;e.panRequired=!0;var g=b.set();a.set=g;c?d.setCN(e,g,"scrollbar-vertical"):d.setCN(e,g,"scrollbar-horizontal");e.scrollbarsSet.push(g);var f,h;c?(f=a.scrollbarHeight,h=e.plotAreaHeight):(h=a.scrollbarHeight,f=e.plotAreaWidth);a.width=f;if((a.height=h)&&f){var k=d.rect(b,f,h,a.backgroundColor,a.backgroundAlpha,1,a.backgroundColor,a.backgroundAlpha);
d.setCN(e,k,"scrollbar-bg");a.bg=k;g.push(k);k=d.rect(b,f,h,"#000",.005);g.push(k);a.invisibleBg=k;k.click(function(){a.handleBgClick()}).mouseover(function(){a.handleMouseOver()}).mouseout(function(){a.handleMouseOut()}).touchend(function(){a.handleBgClick()});k=d.rect(b,f,h,a.selectedBackgroundColor,a.selectedBackgroundAlpha);d.setCN(e,k,"scrollbar-bg-selected");a.selectedBG=k;g.push(k);f=d.rect(b,f,h,"#000",.005);a.dragger=f;g.push(f);f.mousedown(function(b){a.handleDragStart(b)}).mouseup(function(){a.handleDragStop()}).mouseover(function(){a.handleDraggerOver()}).mouseout(function(){a.handleMouseOut()}).touchstart(function(b){a.handleDragStart(b)}).touchend(function(){a.handleDragStop()});
h=e.pathToImages;var l,k=a.dragIcon.replace(/\.[a-z]*$/i,"");d.isAbsolute(k)&&(h="");c?(l=h+k+"H"+e.extension,h=a.dragIconWidth,c=a.dragIconHeight):(l=h+k+e.extension,c=a.dragIconWidth,h=a.dragIconHeight);k=b.image(l,0,0,c,h);d.setCN(e,k,"scrollbar-grip-left");l=b.image(l,0,0,c,h);d.setCN(e,l,"scrollbar-grip-right");var m=10,n=20;e.panEventsEnabled&&(m=25,n=a.scrollbarHeight);var q=d.rect(b,m,n,"#000",.005),p=d.rect(b,m,n,"#000",.005);p.translate(-(m-c)/2,-(n-h)/2);q.translate(-(m-c)/2,-(n-h)/2);
c=b.set([k,p]);b=b.set([l,q]);a.iconLeft=c;g.push(a.iconLeft);a.iconRight=b;g.push(b);a.updateGripCursor(!1);e.makeAccessible(c,a.accessibleLabel);e.makeAccessible(b,a.accessibleLabel);e.makeAccessible(f,a.accessibleLabel);c.setAttr("role","menuitem");b.setAttr("role","menuitem");f.setAttr("role","menuitem");void 0!==a.tabIndex&&(c.setAttr("tabindex",a.tabIndex),c.keyup(function(b){a.handleKeys(b,1,0)}));void 0!==a.tabIndex&&(f.setAttr("tabindex",a.tabIndex),f.keyup(function(b){a.handleKeys(b,1,1)}));
void 0!==a.tabIndex&&(b.setAttr("tabindex",a.tabIndex),b.keyup(function(b){a.handleKeys(b,0,1)}));c.mousedown(function(){a.leftDragStart()}).mouseup(function(){a.leftDragStop()}).mouseover(function(){a.iconRollOver()}).mouseout(function(){a.iconRollOut()}).touchstart(function(){a.leftDragStart()}).touchend(function(){a.leftDragStop()});b.mousedown(function(){a.rightDragStart()}).mouseup(function(){a.rightDragStop()}).mouseover(function(){a.iconRollOver()}).mouseout(function(){a.iconRollOut()}).touchstart(function(){a.rightDragStart()}).touchend(function(){a.rightDragStop()});
d.ifArray(e.chartData)?g.show():g.hide();a.hideDragIcons();a.clipDragger(!1)}g.translate(a.x,a.y);g.node.style.msTouchAction="none";g.node.style.touchAction="none"}},handleKeys:function(a,b,c){this.getPercents();var e=this.percentStart,d=this.percentEnd;if(this.rotate)var f=d,d=e,e=f;if(37==a.keyCode||40==a.keyCode)e-=.02*b,d-=.02*c;if(39==a.keyCode||38==a.keyCode)e+=.02*b,d+=.02*c;this.rotate&&(a=d,d=e,e=a);isNaN(d)||isNaN(e)||this.percentZoom(e,d,!0)},updateScrollbarSize:function(a,b){if(!isNaN(a)&&
!isNaN(b)){a=Math.round(a);b=Math.round(b);var c=this.dragger,e,d,f,h,k;this.rotate?(e=0,d=a,f=this.width+1,h=b-a,c.setAttr("height",b-a),c.setAttr("y",d)):(e=a,d=0,f=b-a,h=this.height+1,k=b-a,c.setAttr("x",e),c.setAttr("width",k));this.clipAndUpdate(e,d,f,h)}},update:function(){var a,b=!1,c,e,d=this.x,f=this.y,h=this.dragger,k=this.getDBox();if(k){c=k.x+d;e=k.y+f;var l=k.width,k=k.height,m=this.rotate,n=this.chart,q=this.width,p=this.height,t=n.mouseX,n=n.mouseY;a=this.initialMouse;this.forceClip&&
this.clipDragger(!0);if(this.dragging){var r=this.initialCoord;if(m)a=r+(n-a),0>a&&(a=0),r=p-k,a>r&&(a=r),h.setAttr("y",a);else{a=r+(t-a);0>a&&(a=0);r=q-l;if(a>r||isNaN(a))a=r;h.setAttr("x",a)}this.clipDragger(!0)}if(this.resizingRight){if(m)if(a=n-e,!isNaN(this.maxHeight)&&a>this.maxHeight&&(a=this.maxHeight),a+e>p+f&&(a=p-e+f),0>a)this.resizingRight=!1,b=this.resizingLeft=!0;else{if(0===a||isNaN(a))a=.1;h.setAttr("height",a)}else if(a=t-c,!isNaN(this.maxWidth)&&a>this.maxWidth&&(a=this.maxWidth),
a+c>q+d&&(a=q-c+d),0>a)this.resizingRight=!1,b=this.resizingLeft=!0;else{if(0===a||isNaN(a))a=.1;h.setAttr("width",a)}this.clipDragger(!0)}if(this.resizingLeft){if(m)if(c=e,e=n,e<f&&(e=f),isNaN(e)&&(e=f),e>p+f&&(e=p+f),a=!0===b?c-e:k+c-e,!isNaN(this.maxHeight)&&a>this.maxHeight&&(a=this.maxHeight,e=c),0>a)this.resizingRight=!0,this.resizingLeft=!1,h.setAttr("y",c+k-f);else{if(0===a||isNaN(a))a=.1;h.setAttr("y",e-f);h.setAttr("height",a)}else if(e=t,e<d&&(e=d),isNaN(e)&&(e=d),e>q+d&&(e=q+d),a=!0===
b?c-e:l+c-e,!isNaN(this.maxWidth)&&a>this.maxWidth&&(a=this.maxWidth,e=c),0>a)this.resizingRight=!0,this.resizingLeft=!1,h.setAttr("x",c+l-d);else{if(0===a||isNaN(a))a=.1;h.setAttr("x",e-d);h.setAttr("width",a)}this.clipDragger(!0)}}},stopForceClip:function(){this.animating=this.forceClip=!1},clipDragger:function(a){var b=this.getDBox();if(b){var c=b.x,e=b.y,d=b.width,b=b.height,f=!1;if(this.rotate){if(c=0,d=this.width+1,this.clipY!=e||this.clipH!=b)f=!0}else if(e=0,b=this.height+1,this.clipX!=c||
this.clipW!=d)f=!0;f&&this.clipAndUpdate(c,e,d,b);a&&(this.updateOnReleaseOnly||this.dispatchScrollbarEvent())}},maskGraphs:function(){},clipAndUpdate:function(a,b,c,d){this.clipX=a;this.clipY=b;this.clipW=c;this.clipH=d;this.selectedBG.setAttr("width",c);this.selectedBG.setAttr("height",d);this.selectedBG.translate(a,b);this.updateDragIconPositions();this.maskGraphs(a,b,c,d)},dispatchScrollbarEvent:function(){if(this.skipEvent)this.skipEvent=!1;else{var a=this.chart;a.hideBalloon();var b=this.getDBox(),
c=b.x,d=b.y,g=b.width,b=b.height;this.getPercents();this.rotate?(c=d,g=this.height/b):g=this.width/g;a={type:"zoomed",position:c,chart:a,target:this,multiplier:g,relativeStart:this.percentStart,relativeEnd:this.percentEnd};if(this.percentStart!=this.prevPercentStart||this.percentEnd!=this.prevPercentEnd||this.prevMultiplier!=g)this.fire(a),this.prevPercentStart=this.percentStart,this.prevPercentEnd=this.percentEnd,this.prevMultiplier=g}},updateDragIconPositions:function(){var a=this.getDBox(),b=a.x,
c=a.y,d=this.iconLeft,g=this.iconRight,f,h,k=this.scrollbarHeight;this.rotate?(f=this.dragIconWidth,h=this.dragIconHeight,d.translate((k-h)/2,c-f/2),g.translate((k-h)/2,c+a.height-f/2)):(f=this.dragIconHeight,h=this.dragIconWidth,d.translate(b-h/2,(k-f)/2),g.translate(b-h/2+a.width,(k-f)/2))},showDragIcons:function(){this.resizeEnabled&&(this.iconLeft.show(),this.iconRight.show())},hideDragIcons:function(){if(!this.resizingLeft&&!this.resizingRight&&!this.dragging){if(this.hideResizeGrips||!this.resizeEnabled)this.iconLeft.hide(),
this.iconRight.hide();this.removeCursors()}},removeCursors:function(){this.chart.setMouseCursor("auto")},fireZoomEvent:function(a){this.fire({type:a,chart:this.chart,target:this})},percentZoom:function(a,b,c){a=d.fitToBounds(a,0,b);b=d.fitToBounds(b,a,1);if(this.dragger&&this.enabled){this.dragger.stop();isNaN(a)&&(a=0);isNaN(b)&&(b=1);var e,g;this.rotate?(e=this.height,b=e-e*b,g=e-e*a):(e=this.width,g=e*b,b=e*a);this.updateScrollbarSize(b,g);this.clipDragger(!1);this.getPercents();c&&this.dispatchScrollbarEvent()}},
destroy:function(){this.clear();d.remove(this.set);d.remove(this.iconRight);d.remove(this.iconLeft)},clear:function(){},handleDragStart:function(){if(this.enabled){this.fireZoomEvent("zoomStarted");var a=this.chart;this.dragger.stop();this.removeCursors();d.isModern&&(this.dragger.node.style.cssText=this.dragCursorDown);this.dragging=!0;var b=this.getDBox();this.rotate?(this.initialCoord=b.y,this.initialMouse=a.mouseY):(this.initialCoord=b.x,this.initialMouse=a.mouseX)}},handleDragStop:function(){this.updateOnReleaseOnly&&
(this.update(),this.skipEvent=!1,this.dispatchScrollbarEvent());this.dragging=!1;this.mouseIsOver&&this.removeCursors();d.isModern&&(this.dragger.node.style.cssText=this.dragCursorHover);this.update();this.fireZoomEvent("zoomEnded")},handleDraggerOver:function(){this.handleMouseOver();d.isModern&&(this.dragger.node.style.cssText=this.dragCursorHover)},leftDragStart:function(){this.fireZoomEvent("zoomStarted");this.dragger.stop();this.resizingLeft=!0;this.updateGripCursor(!0)},updateGripCursor:function(a){d.isModern&&
(a=this.rotate?a?this.vResizeCursorDown:this.vResizeCursorHover:a?this.hResizeCursorDown:this.hResizeCursorHover)&&(this.iconRight&&(this.iconRight.node.style.cssText=a),this.iconLeft&&(this.iconLeft.node.style.cssText=a))},leftDragStop:function(){this.resizingLeft&&(this.resizingLeft=!1,this.mouseIsOver||this.removeCursors(),this.updateOnRelease(),this.fireZoomEvent("zoomEnded"));this.updateGripCursor(!1)},rightDragStart:function(){this.fireZoomEvent("zoomStarted");this.dragger.stop();this.resizingRight=
!0;this.updateGripCursor(!0)},rightDragStop:function(){this.resizingRight&&(this.resizingRight=!1,this.mouseIsOver||this.removeCursors(),this.updateOnRelease(),this.fireZoomEvent("zoomEnded"));this.updateGripCursor(!1)},iconRollOut:function(){this.removeCursors()},iconRollOver:function(){this.rotate?this.vResizeCursor&&this.chart.setMouseCursor(this.vResizeCursor):this.hResizeCursor&&this.chart.setMouseCursor(this.hResizeCursor);this.handleMouseOver()},getDBox:function(){if(this.dragger)return this.dragger.getBBox()},
handleBgClick:function(){var a=this;if(!a.resizingRight&&!a.resizingLeft){a.zooming=!0;var b,c,e=a.scrollDuration,g=a.dragger;b=a.getDBox();var f=b.height,h=b.width;c=a.chart;var k=a.y,l=a.x,m=a.rotate;m?(b="y",c=c.mouseY-f/2-k,c=d.fitToBounds(c,0,a.height-f)):(b="x",c=c.mouseX-h/2-l,c=d.fitToBounds(c,0,a.width-h));a.updateOnReleaseOnly?(a.skipEvent=!1,g.setAttr(b,c),a.dispatchScrollbarEvent(),a.clipDragger()):(a.animating=!0,c=Math.round(c),m?g.animate({y:c},e,">"):g.animate({x:c},e,">"),a.forceClip=
!0,clearTimeout(a.forceTO),a.forceTO=setTimeout(function(){a.stopForceClip.call(a)},5E3*e))}},updateOnRelease:function(){this.updateOnReleaseOnly&&(this.update(),this.skipEvent=!1,this.dispatchScrollbarEvent())},handleReleaseOutside:function(){if(this.set){if(this.resizingLeft||this.resizingRight||this.dragging)this.dragging=this.resizingRight=this.resizingLeft=!1,this.updateOnRelease(),this.removeCursors();this.animating=this.mouseIsOver=!1;this.hideDragIcons();this.update()}},handleMouseOver:function(){this.mouseIsOver=
!0;this.showDragIcons()},handleMouseOut:function(){this.mouseIsOver=!1;this.hideDragIcons();this.removeCursors()}})})();(function(){var d=window.AmCharts;d.ChartScrollbar=d.Class({inherits:d.SimpleChartScrollbar,construct:function(a){this.cname="ChartScrollbar";d.ChartScrollbar.base.construct.call(this,a);this.graphLineColor="#BBBBBB";this.graphLineAlpha=0;this.graphFillColor="#BBBBBB";this.graphFillAlpha=1;this.selectedGraphLineColor="#888888";this.selectedGraphLineAlpha=0;this.selectedGraphFillColor="#888888";this.selectedGraphFillAlpha=1;this.gridCount=0;this.gridColor="#FFFFFF";this.gridAlpha=.7;this.skipEvent=
this.autoGridCount=!1;this.color="#FFFFFF";this.scrollbarCreated=!1;this.oppositeAxis=!0;this.accessibleLabel="Zoom chart using cursor arrows";d.applyTheme(this,a,this.cname)},init:function(){var a=this.categoryAxis,b=this.chart,c=this.gridAxis;a||("CategoryAxis"==this.gridAxis.cname?(this.catScrollbar=!0,a=new d.CategoryAxis,a.id="scrollbar"):(a=new d.ValueAxis,a.data=b.chartData,a.id=c.id,a.type=c.type,a.maximumDate=c.maximumDate,a.minimumDate=c.minimumDate,a.minPeriod=c.minPeriod,a.minMaxField=
c.minMaxField),this.categoryAxis=a);a.chart=b;var e=b.categoryAxis;e&&(a.firstDayOfWeek=e.firstDayOfWeek);a.dateFormats=c.dateFormats;a.markPeriodChange=c.markPeriodChange;a.boldPeriodBeginning=c.boldPeriodBeginning;a.labelFunction=c.labelFunction;a.axisItemRenderer=d.RecItem;a.axisRenderer=d.RecAxis;a.guideFillRenderer=d.RecFill;a.inside=!0;a.fontSize=this.fontSize;a.tickLength=0;a.axisAlpha=0;d.isString(this.graph)&&(this.graph=d.getObjById(b.graphs,this.graph));(a=this.graph)&&this.catScrollbar&&
(c=this.valueAxis,c||(this.valueAxis=c=new d.ValueAxis,c.visible=!1,c.scrollbar=!0,c.axisItemRenderer=d.RecItem,c.axisRenderer=d.RecAxis,c.guideFillRenderer=d.RecFill,c.labelsEnabled=!1,c.chart=b),b=this.unselectedGraph,b||(b=new d.AmGraph,b.scrollbar=!0,this.unselectedGraph=b,b.negativeBase=a.negativeBase,b.noStepRisers=a.noStepRisers),b=this.selectedGraph,b||(b=new d.AmGraph,b.scrollbar=!0,this.selectedGraph=b,b.negativeBase=a.negativeBase,b.noStepRisers=a.noStepRisers));this.scrollbarCreated=!0},
draw:function(){var a=this;d.ChartScrollbar.base.draw.call(a);if(a.enabled){a.scrollbarCreated||a.init();var b=a.chart,c=b.chartData,e=a.categoryAxis,g=a.rotate,f=a.x,h=a.y,k=a.width,l=a.height,m=a.gridAxis,n=a.set;e.setOrientation(!g);e.parseDates=m.parseDates;"ValueAxis"==a.categoryAxis.cname&&(e.rotate=!g);e.equalSpacing=m.equalSpacing;e.minPeriod=m.minPeriod;e.startOnAxis=m.startOnAxis;e.width=k-1;e.height=l;e.gridCount=a.gridCount;e.gridColor=a.gridColor;e.gridAlpha=a.gridAlpha;e.color=a.color;
e.tickLength=0;e.axisAlpha=0;e.autoGridCount=a.autoGridCount;e.parseDates&&!e.equalSpacing&&e.timeZoom(b.firstTime,b.lastTime);e.minimum=a.gridAxis.fullMin;e.maximum=a.gridAxis.fullMax;e.strictMinMax=!0;e.zoom(0,c.length-1);if((m=a.graph)&&a.catScrollbar){var q=a.valueAxis,p=m.valueAxis;q.id=p.id;q.rotate=g;q.setOrientation(g);q.width=k;q.height=l;q.dataProvider=c;q.reversed=p.reversed;q.logarithmic=p.logarithmic;q.gridAlpha=0;q.axisAlpha=0;n.push(q.set);g?(q.y=h,q.x=0):(q.x=f,q.y=0);var f=Infinity,
h=-Infinity,t;for(t=0;t<c.length;t++){var r=c[t].axes[p.id].graphs[m.id].values,w;for(w in r)if(r.hasOwnProperty(w)&&"percents"!=w&&"total"!=w){var z=r[w];z<f&&(f=z);z>h&&(h=z)}}Infinity!=f&&(q.minimum=f);-Infinity!=h&&(q.maximum=h+.1*(h-f));f==h&&(--q.minimum,q.maximum+=1);void 0!==a.minimum&&(q.minimum=a.minimum);void 0!==a.maximum&&(q.maximum=a.maximum);q.zoom(0,c.length-1);w=a.unselectedGraph;w.id=m.id;w.bcn="scrollbar-graph-";w.rotate=g;w.chart=b;w.data=c;w.valueAxis=q;w.chart=m.chart;w.categoryAxis=
a.categoryAxis;w.periodSpan=m.periodSpan;w.valueField=m.valueField;w.openField=m.openField;w.closeField=m.closeField;w.highField=m.highField;w.lowField=m.lowField;w.lineAlpha=a.graphLineAlpha;w.lineColorR=a.graphLineColor;w.fillAlphas=a.graphFillAlpha;w.fillColorsR=a.graphFillColor;w.connect=m.connect;w.hidden=m.hidden;w.width=k;w.height=l;w.pointPosition=m.pointPosition;w.stepDirection=m.stepDirection;w.periodSpan=m.periodSpan;p=a.selectedGraph;p.id=m.id;p.bcn=w.bcn+"selected-";p.rotate=g;p.chart=
b;p.data=c;p.valueAxis=q;p.chart=m.chart;p.categoryAxis=e;p.periodSpan=m.periodSpan;p.valueField=m.valueField;p.openField=m.openField;p.closeField=m.closeField;p.highField=m.highField;p.lowField=m.lowField;p.lineAlpha=a.selectedGraphLineAlpha;p.lineColorR=a.selectedGraphLineColor;p.fillAlphas=a.selectedGraphFillAlpha;p.fillColorsR=a.selectedGraphFillColor;p.connect=m.connect;p.hidden=m.hidden;p.width=k;p.height=l;p.pointPosition=m.pointPosition;p.stepDirection=m.stepDirection;p.periodSpan=m.periodSpan;
b=a.graphType;b||(b=m.type);w.type=b;p.type=b;c=c.length-1;w.zoom(0,c);p.zoom(0,c);p.set.click(function(){a.handleBackgroundClick()}).mouseover(function(){a.handleMouseOver()}).mouseout(function(){a.handleMouseOut()});w.set.click(function(){a.handleBackgroundClick()}).mouseover(function(){a.handleMouseOver()}).mouseout(function(){a.handleMouseOut()});n.push(w.set);n.push(p.set)}n.push(e.set);n.push(e.labelsSet);a.bg.toBack();a.invisibleBg.toFront();a.dragger.toFront();a.iconLeft.toFront();a.iconRight.toFront()}},
timeZoom:function(a,b,c){this.startTime=a;this.endTime=b;this.timeDifference=b-a;this.skipEvent=!d.toBoolean(c);this.zoomScrollbar();this.dispatchScrollbarEvent()},zoom:function(a,b){this.start=a;this.end=b;this.skipEvent=!0;this.zoomScrollbar()},dispatchScrollbarEvent:function(){if(this.categoryAxis&&"ValueAxis"==this.categoryAxis.cname)d.ChartScrollbar.base.dispatchScrollbarEvent.call(this);else if(this.skipEvent)this.skipEvent=!1;else{var a=this.chart.chartData,b,c,e=this.dragger.getBBox();b=e.x;
var g=e.y,f=e.width,e=e.height,h=this.chart;this.rotate?(b=g,c=e):c=f;f={type:"zoomed",target:this};f.chart=h;var k=this.categoryAxis,l=this.stepWidth,g=h.minSelectedTime,e=h.maxSelectedTime,m=!1;if(k.parseDates&&!k.equalSpacing){if(a=h.lastTime,h=h.firstTime,k=Math.round(b/l)+h,b=this.dragging?k+this.timeDifference:Math.round((b+c)/l)+h,k>b&&(k=b),0<g&&b-k<g&&(b=Math.round(k+(b-k)/2),m=Math.round(g/2),k=b-m,b+=m,m=!0),0<e&&b-k>e&&(b=Math.round(k+(b-k)/2),m=Math.round(e/2),k=b-m,b+=m,m=!0),b>a&&(b=
a),b-g<k&&(k=b-g),k<h&&(k=h),k+g>b&&(b=k+g),k!=this.startTime||b!=this.endTime)this.startTime=k,this.endTime=b,f.start=k,f.end=b,f.startDate=new Date(k),f.endDate=new Date(b),this.fire(f)}else{k.startOnAxis||(b+=l/2);c-=this.stepWidth/2;g=k.xToIndex(b);b=k.getCoordinate(g)-this.stepWidth/2;b=k.xToIndex(b+c);if(g!=this.start||this.end!=b)k.startOnAxis&&(this.resizingRight&&g==b&&b++,this.resizingLeft&&g==b&&(0<g?g--:b=1)),this.start=g,this.end=this.dragging?this.start+this.difference:b,f.start=this.start,
f.end=this.end,k.parseDates&&(a[this.start]&&(f.startDate=new Date(a[this.start].time)),a[this.end]&&(f.endDate=new Date(a[this.end].time))),this.fire(f);this.percentStart=g;this.percentEnd=b}m&&this.zoomScrollbar(!0)}},zoomScrollbar:function(a){if((!(this.dragging||this.resizingLeft||this.resizingRight||this.animating)||a)&&this.dragger&&this.enabled){var b,c,d=this.chart;a=d.chartData;var g=this.categoryAxis;g.parseDates&&!g.equalSpacing?(a=g.stepWidth,c=d.firstTime,b=a*(this.startTime-c),c=a*(this.endTime-
c)):(a[this.start]&&(b=a[this.start].x[g.id]),a[this.end]&&(c=a[this.end].x[g.id]),a=g.stepWidth,g.startOnAxis||(d=a/2,b-=d,c+=d));this.stepWidth=a;isNaN(b)||isNaN(c)||this.updateScrollbarSize(b,c)}},maskGraphs:function(a,b,c,d){var g=this.selectedGraph;g&&g.set.clipRect(a,b,c,d)},handleDragStart:function(){d.ChartScrollbar.base.handleDragStart.call(this);this.difference=this.end-this.start;this.timeDifference=this.endTime-this.startTime;0>this.timeDifference&&(this.timeDifference=0)},handleBackgroundClick:function(){d.ChartScrollbar.base.handleBackgroundClick.call(this);
this.dragging||(this.difference=this.end-this.start,this.timeDifference=this.endTime-this.startTime,0>this.timeDifference&&(this.timeDifference=0))}})})();(function(){var d=window.AmCharts;d.AmBalloon=d.Class({construct:function(a){this.cname="AmBalloon";this.enabled=!0;this.fillColor="#FFFFFF";this.fillAlpha=.8;this.borderThickness=2;this.borderColor="#FFFFFF";this.borderAlpha=1;this.cornerRadius=0;this.maxWidth=220;this.horizontalPadding=8;this.verticalPadding=4;this.pointerWidth=6;this.pointerOrientation="V";this.color="#000000";this.adjustBorderColor=!0;this.show=this.follow=this.showBullet=!1;this.bulletSize=3;this.shadowAlpha=.4;this.shadowColor=
"#000000";this.fadeOutDuration=this.animationDuration=.3;this.fixedPosition=!0;this.offsetY=6;this.offsetX=1;this.textAlign="center";this.disableMouseEvents=!0;this.deltaSignX=this.deltaSignY=1;d.isModern||(this.offsetY*=1.5);this.sdy=this.sdx=0;d.applyTheme(this,a,this.cname)},draw:function(){var a=this.pointToX,b=this.pointToY;d.isModern||(this.drop=!1);var c=this.chart;d.VML&&(this.fadeOutDuration=0);this.xAnim&&c.stopAnim(this.xAnim);this.yAnim&&c.stopAnim(this.yAnim);this.sdy=this.sdx=0;if(!isNaN(a)){var e=
this.follow,g=c.container,f=this.set;d.remove(f);this.removeDiv();f=g.set();f.node.style.pointerEvents="none";this.set=f;this.mainSet?(this.mainSet.push(this.set),this.sdx=this.mainSet.x,this.sdy=this.mainSet.y):c.balloonsSet.push(f);if(this.show){var h=this.l,k=this.t,l=this.r,m=this.b,n=this.balloonColor,q=this.fillColor,p=this.borderColor,t=q;void 0!=n&&(this.adjustBorderColor?t=p=n:q=n);var r=this.horizontalPadding,w=this.verticalPadding,z=this.pointerWidth,x=this.pointerOrientation,u=this.cornerRadius,
A=c.fontFamily,y=this.fontSize;void 0==y&&(y=c.fontSize);var n=document.createElement("div"),B=c.classNamePrefix;n.className=B+"-balloon-div";this.className&&(n.className=n.className+" "+B+"-balloon-div-"+this.className);B=n.style;this.disableMouseEvents&&(B.pointerEvents="none");B.position="absolute";var D=this.minWidth,C=document.createElement("div");n.appendChild(C);var I=C.style;isNaN(D)||(I.minWidth=D-2*r+"px");I.textAlign=this.textAlign;I.maxWidth=this.maxWidth+"px";I.fontSize=y+"px";I.color=
this.color;I.fontFamily=A;C.innerHTML=this.text;c.chartDiv.appendChild(n);this.textDiv=n;var I=n.offsetWidth,H=n.offsetHeight;n.clientHeight&&(I=n.clientWidth,H=n.clientHeight);A=H+2*w;C=I+2*r;!isNaN(D)&&C<D&&(C=D);window.opera&&(A+=2);var Q=!1,y=this.offsetY;c.handDrawn&&(y+=c.handDrawScatter+2);"H"!=x?(D=a-C/2,b<k+A+10&&"down"!=x?(Q=!0,e&&(b+=y),y=b+z,this.deltaSignY=-1):(e&&(b-=y),y=b-A-z,this.deltaSignY=1)):(2*z>A&&(z=A/2),y=b-A/2,a<h+(l-h)/2?(D=a+z,this.deltaSignX=-1):(D=a-C-z,this.deltaSignX=
1));y+A>=m&&(y=m-A);y<k&&(y=k);D<h&&(D=h);D+C>l&&(D=l-C);var k=y+w,m=D+r,M=this.shadowAlpha,P=this.shadowColor,r=this.borderThickness,ia=this.bulletSize,J,w=this.fillAlpha,aa=this.borderAlpha;this.showBullet&&(J=d.circle(g,ia,t,w),f.push(J));this.drop?(h=C/1.6,l=0,"V"==x&&(x="down"),"H"==x&&(x="left"),"down"==x&&(D=a+1,y=b-h-h/3),"up"==x&&(l=180,D=a+1,y=b+h+h/3),"left"==x&&(l=270,D=a+h+h/3+2,y=b),"right"==x&&(l=90,D=a-h-h/3+2,y=b),k=y-H/2+1,m=D-I/2-1,q=d.drop(g,h,l,q,w,r,p,aa)):0<u||0===z?(0<M&&(a=
d.rect(g,C,A,q,0,r+1,P,M,u),d.isModern?a.translate(1,1):a.translate(4,4),f.push(a)),q=d.rect(g,C,A,q,w,r,p,aa,u)):(t=[],u=[],"H"!=x?(h=a-D,h>C-z&&(h=C-z),h<z&&(h=z),t=[0,h-z,a-D,h+z,C,C,0,0],u=Q?[0,0,b-y,0,0,A,A,0]:[A,A,b-y,A,A,0,0,A]):(x=b-y,x>A-z&&(x=A-z),x<z&&(x=z),u=[0,x-z,b-y,x+z,A,A,0,0],t=a<h+(l-h)/2?[0,0,D<a?0:a-D,0,0,C,C,0]:[C,C,D+C>a?C:a-D,C,C,0,0,C]),0<M&&(a=d.polygon(g,t,u,q,0,r,P,M),a.translate(1,1),f.push(a)),q=d.polygon(g,t,u,q,w,r,p,aa));this.bg=q;f.push(q);q.toFront();d.setCN(c,q,
"balloon-bg");this.className&&d.setCN(c,q,"balloon-bg-"+this.className);g=1*this.deltaSignX;m+=this.sdx;k+=this.sdy;B.left=m+"px";B.top=k+"px";f.translate(D-g,y,1,!0);q=q.getBBox();this.bottom=y+A+1;this.yPos=q.y+y;J&&J.translate(this.pointToX-D+g,b-y);b=this.animationDuration;0<this.animationDuration&&!e&&!isNaN(this.prevX)&&(f.translate(this.prevX,this.prevY,NaN,!0),f.animate({translate:D-g+","+y},b,"easeOutSine"),n&&(B.left=this.prevTX+"px",B.top=this.prevTY+"px",this.xAnim=c.animate({node:n},
"left",this.prevTX,m,b,"easeOutSine","px"),this.yAnim=c.animate({node:n},"top",this.prevTY,k,b,"easeOutSine","px")));this.prevX=D-g;this.prevY=y;this.prevTX=m;this.prevTY=k}}},fixPrevious:function(){this.rPrevX=this.prevX;this.rPrevY=this.prevY;this.rPrevTX=this.prevTX;this.rPrevTY=this.prevTY},restorePrevious:function(){this.prevX=this.rPrevX;this.prevY=this.rPrevY;this.prevTX=this.rPrevTX;this.prevTY=this.rPrevTY},followMouse:function(){if(this.follow&&this.show){var a=this.chart.mouseX-this.offsetX*
this.deltaSignX-this.sdx,b=this.chart.mouseY-this.sdy;this.pointToX=a;this.pointToY=b;if(a!=this.previousX||b!=this.previousY)if(this.previousX=a,this.previousY=b,0===this.cornerRadius)this.draw();else{var c=this.set;if(c){var d=c.getBBox(),a=a-d.width/2,g=b-d.height-10;a<this.l&&(a=this.l);a>this.r-d.width&&(a=this.r-d.width);g<this.t&&(g=b+10);c.translate(a,g);b=this.textDiv.style;b.left=a+this.horizontalPadding+"px";b.top=g+this.verticalPadding+"px"}}}},changeColor:function(a){this.balloonColor=
a},setBounds:function(a,b,c,d){this.l=a;this.t=b;this.r=c;this.b=d;this.destroyTO&&clearTimeout(this.destroyTO)},showBalloon:function(a){if(this.text!=a||this.positionChanged)this.text=a,this.isHiding=!1,this.show=!0,this.destroyTO&&clearTimeout(this.destroyTO),a=this.chart,this.fadeAnim1&&a.stopAnim(this.fadeAnim1),this.fadeAnim2&&a.stopAnim(this.fadeAnim2),this.draw(),this.positionChanged=!1},hide:function(a){var b=this;b.text=void 0;isNaN(a)&&(a=b.fadeOutDuration);var c=b.chart;if(0<a&&!b.isHiding){b.isHiding=
!0;b.destroyTO&&clearTimeout(b.destroyTO);b.destroyTO=setTimeout(function(){b.destroy.call(b)},1E3*a);b.follow=!1;b.show=!1;var d=b.set;d&&(d.setAttr("opacity",b.fillAlpha),b.fadeAnim1=d.animate({opacity:0},a,"easeInSine"));b.textDiv&&(b.fadeAnim2=c.animate({node:b.textDiv},"opacity",1,0,a,"easeInSine",""))}else b.show=!1,b.follow=!1,b.destroy()},setPosition:function(a,b){if(a!=this.pointToX||b!=this.pointToY)this.previousX=this.pointToX,this.previousY=this.pointToY,this.pointToX=a,this.pointToY=
b,this.positionChanged=!0},followCursor:function(a){var b=this;b.follow=a;clearInterval(b.interval);var c=b.chart.mouseX-b.sdx,d=b.chart.mouseY-b.sdy;!isNaN(c)&&a&&(b.pointToX=c-b.offsetX*b.deltaSignX,b.pointToY=d,b.followMouse(),b.interval=setInterval(function(){b.followMouse.call(b)},40))},removeDiv:function(){if(this.textDiv){var a=this.textDiv.parentNode;a&&a.removeChild(this.textDiv)}},destroy:function(){clearInterval(this.interval);d.remove(this.set);this.removeDiv();this.set=null}})})();(function(){var d=window.AmCharts;d.AmCoordinateChart=d.Class({inherits:d.AmChart,construct:function(a){d.AmCoordinateChart.base.construct.call(this,a);this.theme=a;this.createEvents("rollOverGraphItem","rollOutGraphItem","clickGraphItem","doubleClickGraphItem","rightClickGraphItem","clickGraph","rollOverGraph","rollOutGraph");this.startAlpha=1;this.startDuration=0;this.startEffect="elastic";this.sequencedAnimation=!0;this.colors="#FF6600 #FCD202 #B0DE09 #0D8ECF #2A0CD0 #CD0D74 #CC0000 #00CC00 #0000CC #DDDDDD #999999 #333333 #990000".split(" ");
this.balloonDateFormat="MMM DD, YYYY";this.valueAxes=[];this.graphs=[];this.guides=[];this.gridAboveGraphs=!1;d.applyTheme(this,a,"AmCoordinateChart")},initChart:function(){d.AmCoordinateChart.base.initChart.call(this);this.drawGraphs=!0;var a=this.categoryAxis;a&&(this.categoryAxis=d.processObject(a,d.CategoryAxis,this.theme));this.processValueAxes();this.createValueAxes();this.processGraphs();this.processGuides();d.VML&&(this.startAlpha=1);this.setLegendData(this.graphs);this.gridAboveGraphs&&(this.gridSet.toFront(),
this.bulletSet.toFront(),this.balloonsSet.toFront())},createValueAxes:function(){if(0===this.valueAxes.length){var a=new d.ValueAxis;this.addValueAxis(a)}},parseData:function(){this.processValueAxes();this.processGraphs()},parseSerialData:function(a){this.chartData=[];if(a)if(0<this.processTimeout){1>this.processCount&&(this.processCount=1);var b=a.length/this.processCount;this.parseCount=Math.ceil(b)-1;for(var c=0;c<b;c++)this.delayParseSerialData(a,c)}else this.parseCount=0,this.parsePartSerialData(a,
0,a.length,0);else this.onDataUpdated()},delayParseSerialData:function(a,b){var c=this,d=c.processCount;setTimeout(function(){c.parsePartSerialData.call(c,a,b*d,(b+1)*d,b)},c.processTimeout)},parsePartSerialData:function(a,b,c,e){c>a.length&&(c=a.length);var g=this.graphs,f={},h=this.seriesIdField;h||(h=this.categoryField);var k=!1,l,m=this.categoryAxis,n,q,p;m&&(k=m.parseDates,n=m.forceShowField,p=m.classNameField,q=m.labelColorField,l=m.categoryFunction);var t,r,w={},z;k&&(t=d.extractPeriod(m.minPeriod),
r=t.period,t=t.count,z=d.getPeriodDuration(r,t));var x={};this.lookupTable=x;var u,A=this.dataDateFormat,y={};for(u=b;u<c;u++){var B={},D=a[u];b=D[this.categoryField];B.dataContext=D;B.category=l?l(b,D,m):String(b);n&&(B.forceShow=D[n]);p&&(B.className=D[p]);q&&(B.labelColor=D[q]);x[D[h]]=B;if(k&&(m.categoryFunction?b=m.categoryFunction(b,D,m):(!A||b instanceof Date||(b=b.toString()+" |"),b=d.getDate(b,A,m.minPeriod)),b=d.resetDateToMin(b,r,t,m.firstDayOfWeek),B.category=b,B.time=b.getTime(),isNaN(B.time)))continue;
var C=this.valueAxes;B.axes={};B.x={};var I;for(I=0;I<C.length;I++){var H=C[I].id;B.axes[H]={};B.axes[H].graphs={};var Q;for(Q=0;Q<g.length;Q++){b=g[Q];var M=b.id,P=1.1;isNaN(b.gapPeriod)||(P=b.gapPeriod);var ia=b.periodValue;if(b.valueAxis.id==H){B.axes[H].graphs[M]={};var J={};J.index=u;var aa=D;b.dataProvider&&(aa=f);J.values=this.processValues(aa,b,ia);if(!b.connect||b.forceGap&&!isNaN(b.gapPeriod))if(y&&y[M]&&0<P&&B.time-w[M]>=z*P&&(y[M].gap=!0),b.forceGap){var P=0,ma;for(ma in J.values)P++;
0<P&&(w[M]=B.time,y[M]=J)}else w[M]=B.time,y[M]=J;this.processFields(b,J,aa);J.category=B.category;J.serialDataItem=B;J.graph=b;B.axes[H].graphs[M]=J}}}this.chartData[u]=B}if(this.parseCount==e){for(a=0;a<g.length;a++)b=g[a],b.dataProvider&&this.parseGraphData(b);this.dataChanged=!1;this.dispatchDataUpdated=!0;this.onDataUpdated()}},processValues:function(a,b,c){var e={},g,f=!1;"candlestick"!=b.type&&"ohlc"!=b.type||""===c||(f=!0);for(var h="value error open close low high".split(" "),k=0;k<h.length;k++){var l=
h[k];"value"!=l&&"error"!=l&&f&&(c=l.charAt(0).toUpperCase()+l.slice(1));var m=a[b[l+"Field"]+c];null!==m&&(g=Number(m),isNaN(g)||(e[l]=g),"date"==b.valueAxis.type&&void 0!==m&&(g=d.getDate(m,b.chart.dataDateFormat),e[l]=g.getTime()))}return e},parseGraphData:function(a){var b=a.dataProvider,c=a.seriesIdField;c||(c=this.seriesIdField);c||(c=this.categoryField);var d;for(d=0;d<b.length;d++){var g=b[d],f=this.lookupTable[String(g[c])],h=a.valueAxis.id;f&&(h=f.axes[h].graphs[a.id],h.serialDataItem=f,
h.values=this.processValues(g,a,a.periodValue),this.processFields(a,h,g))}},addValueAxis:function(a){a.chart=this;this.valueAxes.push(a);this.validateData()},removeValueAxesAndGraphs:function(){var a=this.valueAxes,b;for(b=a.length-1;-1<b;b--)this.removeValueAxis(a[b])},removeValueAxis:function(a){var b=this.graphs,c;for(c=b.length-1;0<=c;c--){var d=b[c];d&&d.valueAxis==a&&this.removeGraph(d)}b=this.valueAxes;for(c=b.length-1;0<=c;c--)b[c]==a&&b.splice(c,1);this.validateData()},addGraph:function(a){this.graphs.push(a);
this.chooseGraphColor(a,this.graphs.length-1);this.validateData()},removeGraph:function(a){var b=this.graphs,c;for(c=b.length-1;0<=c;c--)b[c]==a&&(b.splice(c,1),a.destroy());this.validateData()},handleValueAxisZoom:function(){},processValueAxes:function(){var a=this.valueAxes,b;for(b=0;b<a.length;b++){var c=a[b],c=d.processObject(c,d.ValueAxis,this.theme);a[b]=c;c.chart=this;c.init();this.listenTo(c,"axisIntZoomed",this.handleValueAxisZoom);c.id||(c.id="valueAxisAuto"+b+"_"+(new Date).getTime());
void 0===c.usePrefixes&&(c.usePrefixes=this.usePrefixes)}},processGuides:function(){var a=this.guides,b=this.categoryAxis;if(a)for(var c=0;c<a.length;c++){var e=a[c];(void 0!==e.category||void 0!==e.date)&&b&&b.addGuide(e);e.id||(e.id="guideAuto"+c+"_"+(new Date).getTime());var g=e.valueAxis;g?(d.isString(g)&&(g=this.getValueAxisById(g)),g?g.addGuide(e):this.valueAxes[0].addGuide(e)):isNaN(e.value)||this.valueAxes[0].addGuide(e)}},processGraphs:function(){var a=this.graphs,b;this.graphsById={};for(b=
0;b<a.length;b++){var c=a[b],c=d.processObject(c,d.AmGraph,this.theme);a[b]=c;this.chooseGraphColor(c,b);c.chart=this;c.init();d.isString(c.valueAxis)&&(c.valueAxis=this.getValueAxisById(c.valueAxis));c.valueAxis||(c.valueAxis=this.valueAxes[0]);c.id||(c.id="graphAuto"+b+"_"+(new Date).getTime());this.graphsById[c.id]=c}},formatString:function(a,b,c){var e=b.graph,g=e.valueAxis;g.duration&&b.values.value&&(g=d.formatDuration(b.values.value,g.duration,"",g.durationUnits,g.maxInterval,g.numberFormatter),
a=a.split("[[value]]").join(g));a=d.massReplace(a,{"[[title]]":e.title,"[[description]]":b.description});a=c?d.fixNewLines(a):d.fixBrakes(a);return a=d.cleanFromEmpty(a)},getBalloonColor:function(a,b,c){var e=a.lineColor,g=a.balloonColor;c&&(g=e);c=a.fillColorsR;"object"==typeof c?e=c[0]:void 0!==c&&(e=c);b.isNegative&&(c=a.negativeLineColor,a=a.negativeFillColors,"object"==typeof a?c=a[0]:void 0!==a&&(c=a),void 0!==c&&(e=c));void 0!==b.color&&(e=b.color);void 0!==b.lineColor&&(e=b.lineColor);b=b.fillColors;
void 0!==b&&(e=b,d.ifArray(b)&&(e=b[0]));void 0===g&&(g=e);return g},getGraphById:function(a){return d.getObjById(this.graphs,a)},getValueAxisById:function(a){return d.getObjById(this.valueAxes,a)},processFields:function(a,b,c){if(a.itemColors){var e=a.itemColors,g=b.index;b.color=g<e.length?e[g]:d.randomColor()}e="lineColor color alpha fillColors description bullet customBullet bulletSize bulletConfig url labelColor dashLength pattern gap className columnIndex".split(" ");for(g=0;g<e.length;g++){var f=
e[g],h=a[f+"Field"];h&&(h=c[h],d.isDefined(h)&&(b[f]=h))}b.dataContext=c},chooseGraphColor:function(a,b){if(a.lineColor)a.lineColorR=a.lineColor;else{var c;c=this.colors.length>b?this.colors[b]:a.lineColorR?a.lineColorR:d.randomColor();a.lineColorR=c}a.fillColorsR=a.fillColors?a.fillColors:a.lineColorR;a.bulletBorderColorR=a.bulletBorderColor?a.bulletBorderColor:a.useLineColorForBulletBorder?a.lineColorR:a.bulletColor;a.bulletColorR=a.bulletColor?a.bulletColor:a.lineColorR;if(c=this.patterns)a.pattern=
c[b]},handleLegendEvent:function(a){var b=a.type;if(a=a.dataItem){var c=a.hidden,d=a.showBalloon;switch(b){case "clickMarker":this.textClickEnabled&&(d?this.hideGraphsBalloon(a):this.showGraphsBalloon(a));break;case "clickLabel":d?this.hideGraphsBalloon(a):this.showGraphsBalloon(a);break;case "rollOverItem":c||this.highlightGraph(a);break;case "rollOutItem":c||this.unhighlightGraph();break;case "hideItem":this.hideGraph(a);break;case "showItem":this.showGraph(a)}}},highlightGraph:function(a){var b=
this.graphs;if(b){var c,d=.2;this.legend&&(d=this.legend.rollOverGraphAlpha);if(1!=d)for(c=0;c<b.length;c++){var g=b[c];g!=a&&g.changeOpacity(d)}}},unhighlightGraph:function(){var a;this.legend&&(a=this.legend.rollOverGraphAlpha);if(1!=a){a=this.graphs;var b;for(b=0;b<a.length;b++)a[b].changeOpacity(1)}},showGraph:function(a){a.switchable&&(a.hidden=!1,this.dataChanged=!0,"xy"!=this.type&&(this.marginsUpdated=!1),this.chartCreated&&this.initChart())},hideGraph:function(a){a.switchable&&(this.dataChanged=
!0,"xy"!=this.type&&(this.marginsUpdated=!1),a.hidden=!0,this.chartCreated&&this.initChart())},hideGraphsBalloon:function(a){a.showBalloon=!1;this.updateLegend()},showGraphsBalloon:function(a){a.showBalloon=!0;this.updateLegend()},updateLegend:function(){this.legend&&this.legend.invalidateSize()},resetAnimation:function(){var a=this.graphs;if(a){var b;for(b=0;b<a.length;b++)a[b].animationPlayed=!1}},animateAgain:function(){this.resetAnimation();this.validateNow()}})})();(function(){var d=window.AmCharts;d.TrendLine=d.Class({construct:function(a){this.cname="TrendLine";this.createEvents("click","rollOver","rollOut");this.isProtected=!1;this.dashLength=0;this.lineColor="#00CC00";this.lineThickness=this.lineAlpha=1;d.applyTheme(this,a,this.cname)},draw:function(){var a=this;a.destroy();var b=a.chart,c=b.container,e,g,f,h,k=a.categoryAxis,l=a.initialDate,m=a.initialCategory,n=a.finalDate,q=a.finalCategory,p=a.valueAxis,t=a.valueAxisX,r=a.initialXValue,w=a.finalXValue,
z=a.initialValue,x=a.finalValue,u=p.recalculateToPercents,A=b.dataDateFormat;k&&(l&&(l=d.getDate(l,A,"fff"),a.initialDate=l,e=k.dateToCoordinate(l)),m&&(e=k.categoryToCoordinate(m)),n&&(n=d.getDate(n,A,"fff"),a.finalDate=n,g=k.dateToCoordinate(n)),q&&(g=k.categoryToCoordinate(q)));t&&!u&&(isNaN(r)||(e=t.getCoordinate(r)),isNaN(w)||(g=t.getCoordinate(w)));p&&!u&&(isNaN(z)||(f=p.getCoordinate(z)),isNaN(x)||(h=p.getCoordinate(x)));if(!(isNaN(e)||isNaN(g)||isNaN(f)||isNaN(f))){b.rotate?(k=[f,h],h=[e,
g]):(k=[e,g],h=[f,h]);f=d.line(c,k,h,a.lineColor,a.lineAlpha,a.lineThickness,a.dashLength);e=k;g=h;n=k[1]-k[0];q=h[1]-h[0];0===n&&(n=.01);0===q&&(q=.01);l=n/Math.abs(n);m=q/Math.abs(q);q=90*Math.PI/180-Math.asin(n/(n*q/Math.abs(n*q)*Math.sqrt(Math.pow(n,2)+Math.pow(q,2))));n=Math.abs(5*Math.cos(q));q=Math.abs(5*Math.sin(q));e.push(k[1]-l*q,k[0]-l*q);g.push(h[1]+m*n,h[0]+m*n);h=d.polygon(c,e,g,"#ffffff",.005,0);c=c.set([h,f]);c.translate(b.marginLeftReal,b.marginTopReal);b.trendLinesSet.push(c);d.setCN(b,
f,"trend-line");d.setCN(b,f,"trend-line-"+a.id);a.line=f;a.set=c;if(f=a.initialImage)f=d.processObject(f,d.Image,a.theme),f.chart=b,f.draw(),f.translate(e[0]+f.offsetX,g[0]+f.offsetY),c.push(f.set);if(f=a.finalImage)f=d.processObject(f,d.Image,a.theme),f.chart=b,f.draw(),f.translate(e[1]+f.offsetX,g[1]+f.offsetY),c.push(f.set);c.mouseup(function(){a.handleLineClick()}).mouseover(function(){a.handleLineOver()}).mouseout(function(){a.handleLineOut()});c.touchend&&c.touchend(function(){a.handleLineClick()});
c.clipRect(0,0,b.plotAreaWidth,b.plotAreaHeight)}},handleLineClick:function(){this.fire({type:"click",trendLine:this,chart:this.chart})},handleLineOver:function(){var a=this.rollOverColor;void 0!==a&&this.line.attr({stroke:a});this.balloonText&&(clearTimeout(this.chart.hoverInt),a=this.line.getBBox(),this.chart.showBalloon(this.balloonText,this.lineColor,!0,this.x+a.x+a.width/2,this.y+a.y+a.height/2));this.fire({type:"rollOver",trendLine:this,chart:this.chart})},handleLineOut:function(){this.line.attr({stroke:this.lineColor});
this.balloonText&&this.chart.hideBalloon();this.fire({type:"rollOut",trendLine:this,chart:this.chart})},destroy:function(){d.remove(this.set)}})})();(function(){var d=window.AmCharts;d.Image=d.Class({construct:function(a){this.cname="Image";this.height=this.width=20;this.rotation=this.offsetY=this.offsetX=0;this.balloonColor=this.color="#000000";this.opacity=1;d.applyTheme(this,a,this.cname)},draw:function(){var a=this;a.set&&a.set.remove();var b=a.chart.container;a.set=b.set();var c,d;a.url?(c=b.image(a.url,0,0,a.width,a.height),d=1):a.svgPath&&(c=b.path(a.svgPath),c.setAttr("fill",a.color),c.setAttr("stroke",a.outlineColor),b=c.getBBox(),d=
Math.min(a.width/b.width,a.height/b.height));c&&(c.setAttr("opacity",a.opacity),a.set.rotate(a.rotation),c.translate(-a.width/2,-a.height/2,d),a.balloonText&&c.mouseover(function(){a.chart.showBalloon(a.balloonText,a.balloonColor,!0)}).mouseout(function(){a.chart.hideBalloon()}).touchend(function(){a.chart.hideBalloon()}).touchstart(function(){a.chart.showBalloon(a.balloonText,a.balloonColor,!0)}),a.set.push(c))},translate:function(a,b){this.set&&this.set.translate(a,b)}})})();(function(){var d=window.AmCharts;d.circle=function(a,b,c,e,g,f,h,k,l){0>=b&&(b=.001);if(void 0==g||0===g)g=.01;void 0===f&&(f="#000000");void 0===h&&(h=0);e={fill:c,stroke:f,"fill-opacity":e,"stroke-width":g,"stroke-opacity":h};a=isNaN(l)?a.circle(0,0,b).attr(e):a.ellipse(0,0,b,l).attr(e);k&&a.gradient("radialGradient",[c,d.adjustLuminosity(c,-.6)]);return a};d.text=function(a,b,c,e,g,f,h,k){f||(f="middle");"right"==f&&(f="end");"left"==f&&(f="start");isNaN(k)&&(k=1);void 0!==b&&(b=String(b),d.isIE&&
!d.isModern&&(b=b.replace("&amp;","&"),b=b.replace("&","&amp;")));c={fill:c,"font-family":e,"font-size":g+"px",opacity:k};!0===h&&(c["font-weight"]="bold");c["text-anchor"]=f;return a.text(b,c)};d.polygon=function(a,b,c,e,g,f,h,k,l,m,n){isNaN(f)&&(f=.01);isNaN(k)&&(k=g);var q=e,p=!1;"object"==typeof q&&1<q.length&&(p=!0,q=q[0]);void 0===h&&(h=q);g={fill:q,stroke:h,"fill-opacity":g,"stroke-width":f,"stroke-opacity":k};void 0!==n&&0<n&&(g["stroke-dasharray"]=n);n=d.dx;f=d.dy;a.handDrawn&&(c=d.makeHD(b,
c,a.handDrawScatter),b=c[0],c=c[1]);h=Math.round;m&&(h=Number);k="M"+(h(b[0])+n)+","+(h(c[0])+f);for(q=1;q<b.length;q++)m&&(b[q]=d.roundTo(b[q],5),c[q]=d.roundTo(c[q],5)),k+=" L"+(h(b[q])+n)+","+(h(c[q])+f);a=a.path(k+" Z").attr(g);p&&a.gradient("linearGradient",e,l);return a};d.rect=function(a,b,c,e,g,f,h,k,l,m,n){if(isNaN(b)||isNaN(c))return a.set();isNaN(f)&&(f=0);void 0===l&&(l=0);void 0===m&&(m=270);isNaN(g)&&(g=0);var q=e,p=!1;"object"==typeof q&&(q=q[0],p=!0);void 0===h&&(h=q);void 0===k&&
(k=g);b=Math.round(b);c=Math.round(c);var t=0,r=0;0>b&&(b=Math.abs(b),t=-b);0>c&&(c=Math.abs(c),r=-c);t+=d.dx;r+=d.dy;g={fill:q,stroke:h,"fill-opacity":g,"stroke-opacity":k};void 0!==n&&0<n&&(g["stroke-dasharray"]=n);a=a.rect(t,r,b,c,l,f).attr(g);p&&a.gradient("linearGradient",e,m);return a};d.bullet=function(a,b,c,e,g,f,h,k,l,m,n,q,p){var t;"circle"==b&&(b="round");switch(b){case "round":t=d.circle(a,c/2,e,g,f,h,k);break;case "square":t=d.polygon(a,[-c/2,c/2,c/2,-c/2],[c/2,c/2,-c/2,-c/2],e,g,f,h,
k,m-180,void 0,p);break;case "rectangle":t=d.polygon(a,[-c,c,c,-c],[c/2,c/2,-c/2,-c/2],e,g,f,h,k,m-180,void 0,p);break;case "diamond":t=d.polygon(a,[-c/2,0,c/2,0],[0,-c/2,0,c/2],e,g,f,h,k);break;case "triangleUp":t=d.triangle(a,c,0,e,g,f,h,k);break;case "triangleDown":t=d.triangle(a,c,180,e,g,f,h,k);break;case "triangleLeft":t=d.triangle(a,c,270,e,g,f,h,k);break;case "triangleRight":t=d.triangle(a,c,90,e,g,f,h,k);break;case "bubble":t=d.circle(a,c/2,e,g,f,h,k,!0);break;case "line":t=d.line(a,[-c/
2,c/2],[0,0],e,g,f,h,k);break;case "yError":t=a.set();t.push(d.line(a,[0,0],[-c/2,c/2],e,g,f));t.push(d.line(a,[-l,l],[-c/2,-c/2],e,g,f));t.push(d.line(a,[-l,l],[c/2,c/2],e,g,f));break;case "xError":t=a.set(),t.push(d.line(a,[-c/2,c/2],[0,0],e,g,f)),t.push(d.line(a,[-c/2,-c/2],[-l,l],e,g,f)),t.push(d.line(a,[c/2,c/2],[-l,l],e,g,f))}t&&t.pattern(n,NaN,q);return t};d.triangle=function(a,b,c,d,g,f,h,k){if(void 0===f||0===f)f=1;void 0===h&&(h="#000");void 0===k&&(k=0);d={fill:d,stroke:h,"fill-opacity":g,
"stroke-width":f,"stroke-opacity":k};b/=2;var l;0===c&&(l=" M"+-b+","+b+" L0,"+-b+" L"+b+","+b+" Z");180==c&&(l=" M"+-b+","+-b+" L0,"+b+" L"+b+","+-b+" Z");90==c&&(l=" M"+-b+","+-b+" L"+b+",0 L"+-b+","+b+" Z");270==c&&(l=" M"+-b+",0 L"+b+","+b+" L"+b+","+-b+" Z");return a.path(l).attr(d)};d.line=function(a,b,c,e,g,f,h,k,l,m,n){if(a.handDrawn&&!n)return d.handDrawnLine(a,b,c,e,g,f,h,k,l,m,n);f={fill:"none","stroke-width":f};void 0!==h&&0<h&&(f["stroke-dasharray"]=h);isNaN(g)||(f["stroke-opacity"]=
g);e&&(f.stroke=e);e=Math.round;m&&(e=Number,b[0]=d.roundTo(b[0],5),c[0]=d.roundTo(c[0],5));m=d.dx;g=d.dy;h="M"+(e(b[0])+m)+","+(e(c[0])+g);for(k=1;k<b.length;k++)b[k]=d.roundTo(b[k],5),c[k]=d.roundTo(c[k],5),h+=" L"+(e(b[k])+m)+","+(e(c[k])+g);if(d.VML)return a.path(h,void 0,!0).attr(f);l&&(h+=" M0,0 L0,0");return a.path(h).attr(f)};d.makeHD=function(a,b,c){for(var d=[],g=[],f=1;f<a.length;f++)for(var h=Number(a[f-1]),k=Number(b[f-1]),l=Number(a[f]),m=Number(b[f]),n=Math.round(Math.sqrt(Math.pow(l-
h,2)+Math.pow(m-k,2))/50)+1,l=(l-h)/n,m=(m-k)/n,q=0;q<=n;q++){var p=k+q*m+Math.random()*c;d.push(h+q*l+Math.random()*c);g.push(p)}return[d,g]};d.handDrawnLine=function(a,b,c,e,g,f,h,k,l,m){var n,q=a.set();for(n=1;n<b.length;n++)for(var p=[b[n-1],b[n]],t=[c[n-1],c[n]],t=d.makeHD(p,t,a.handDrawScatter),p=t[0],t=t[1],r=1;r<p.length;r++)q.push(d.line(a,[p[r-1],p[r]],[t[r-1],t[r]],e,g,f+Math.random()*a.handDrawThickness-a.handDrawThickness/2,h,k,l,m,!0));return q};d.doNothing=function(a){return a};d.drop=
function(a,b,c,d,g,f,h,k){var l=1/180*Math.PI,m=c-20,n=Math.sin(m*l)*b,q=Math.cos(m*l)*b,p=Math.sin((m+40)*l)*b,t=Math.cos((m+40)*l)*b,r=.8*b,w=-b/3,z=b/3;0===c&&(w=-w,z=0);180==c&&(z=0);90==c&&(w=0);270==c&&(w=0,z=-z);c={fill:d,stroke:h,"stroke-width":f,"stroke-opacity":k,"fill-opacity":g};b="M"+n+","+q+" A"+b+","+b+",0,1,1,"+p+","+t+(" A"+r+","+r+",0,0,0,"+(Math.sin((m+20)*l)*b+z)+","+(Math.cos((m+20)*l)*b+w));b+=" A"+r+","+r+",0,0,0,"+n+","+q;return a.path(b,void 0,void 0,"1000,1000").attr(c)};
d.wedge=function(a,b,c,e,g,f,h,k,l,m,n,q,p,t){var r=Math.round;f=r(f);h=r(h);k=r(k);var w=r(h/f*k),z=d.VML,x=359.5+f/100;359.94<x&&(x=359.94);g>=x&&(g=x);var u=1/180*Math.PI,x=b+Math.sin(e*u)*k,A=c-Math.cos(e*u)*w,y=b+Math.sin(e*u)*f,B=c-Math.cos(e*u)*h,D=b+Math.sin((e+g)*u)*f,C=c-Math.cos((e+g)*u)*h,I=b+Math.sin((e+g)*u)*k,u=c-Math.cos((e+g)*u)*w,H={fill:d.adjustLuminosity(m.fill,-.2),"stroke-opacity":0,"fill-opacity":m["fill-opacity"]},Q=0;180<Math.abs(g)&&(Q=1);e=a.set();var M;z&&(x=r(10*x),y=
r(10*y),D=r(10*D),I=r(10*I),A=r(10*A),B=r(10*B),C=r(10*C),u=r(10*u),b=r(10*b),l=r(10*l),c=r(10*c),f*=10,h*=10,k*=10,w*=10,1>Math.abs(g)&&1>=Math.abs(D-y)&&1>=Math.abs(C-B)&&(M=!0));g="";var P;q&&(H["fill-opacity"]=0,H["stroke-opacity"]=m["stroke-opacity"]/2,H.stroke=m.stroke);if(0<l){P=" M"+x+","+(A+l)+" L"+y+","+(B+l);z?(M||(P+=" A"+(b-f)+","+(l+c-h)+","+(b+f)+","+(l+c+h)+","+y+","+(B+l)+","+D+","+(C+l)),P+=" L"+I+","+(u+l),0<k&&(M||(P+=" B"+(b-k)+","+(l+c-w)+","+(b+k)+","+(l+c+w)+","+I+","+(l+u)+
","+x+","+(l+A)))):(P+=" A"+f+","+h+",0,"+Q+",1,"+D+","+(C+l)+" L"+I+","+(u+l),0<k&&(P+=" A"+k+","+w+",0,"+Q+",0,"+x+","+(A+l)));P+=" Z";var ia=l;z&&(ia/=10);for(var J=0;J<ia;J+=10){var aa=a.path(P,void 0,void 0,"1000,1000").attr(H);e.push(aa);aa.translate(0,-J)}P=a.path(" M"+x+","+A+" L"+x+","+(A+l)+" L"+y+","+(B+l)+" L"+y+","+B+" L"+x+","+A+" Z",void 0,void 0,"1000,1000").attr(H);l=a.path(" M"+D+","+C+" L"+D+","+(C+l)+" L"+I+","+(u+l)+" L"+I+","+u+" L"+D+","+C+" Z",void 0,void 0,"1000,1000").attr(H);
e.push(P);e.push(l)}z?(M||(g=" A"+r(b-f)+","+r(c-h)+","+r(b+f)+","+r(c+h)+","+r(y)+","+r(B)+","+r(D)+","+r(C)),h=" M"+r(x)+","+r(A)+" L"+r(y)+","+r(B)+g+" L"+r(I)+","+r(u)):h=" M"+x+","+A+" L"+y+","+B+(" A"+f+","+h+",0,"+Q+",1,"+D+","+C)+" L"+I+","+u;0<k&&(z?M||(h+=" B"+(b-k)+","+(c-w)+","+(b+k)+","+(c+w)+","+I+","+u+","+x+","+A):h+=" A"+k+","+w+",0,"+Q+",0,"+x+","+A);a.handDrawn&&(k=d.line(a,[x,y],[A,B],m.stroke,m.thickness*Math.random()*a.handDrawThickness,m["stroke-opacity"]),e.push(k));a=a.path(h+
" Z",void 0,void 0,"1000,1000").attr(m);if(n){k=[];for(w=0;w<n.length;w++)k.push(d.adjustLuminosity(m.fill,n[w]));"radial"!=t||d.isModern||(k=[]);0<k.length&&a.gradient(t+"Gradient",k)}d.isModern&&"radial"==t&&a.grad&&(a.grad.setAttribute("gradientUnits","userSpaceOnUse"),a.grad.setAttribute("r",f),a.grad.setAttribute("cx",b),a.grad.setAttribute("cy",c));a.pattern(q,NaN,p);e.wedge=a;e.push(a);return e};d.rgb2hex=function(a){return(a=a.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i))&&
4===a.length?"#"+("0"+parseInt(a[1],10).toString(16)).slice(-2)+("0"+parseInt(a[2],10).toString(16)).slice(-2)+("0"+parseInt(a[3],10).toString(16)).slice(-2):""};d.adjustLuminosity=function(a,b){a&&-1!=a.indexOf("rgb")&&(a=d.rgb2hex(a));a=String(a).replace(/[^0-9a-f]/gi,"");6>a.length&&(a=String(a[0])+String(a[0])+String(a[1])+String(a[1])+String(a[2])+String(a[2]));b=b||0;var c="#",e,g;for(g=0;3>g;g++)e=parseInt(a.substr(2*g,2),16),e=Math.round(Math.min(Math.max(0,e+e*b),255)).toString(16),c+=("00"+
e).substr(e.length);return c}})();(function(){var d=window.AmCharts;d.Bezier=d.Class({construct:function(a,b,c,e,g,f,h,k,l,m,n){var q=a.chart,p=d.bezierX,t=d.bezierY;isNaN(q.bezierX)||(p=q.bezierX);isNaN(q.bezierY)||(t=q.bezierY);isNaN(p)&&(q.rotate?(p=20,t=4):(t=20,p=4));var r,w;"object"==typeof h&&1<h.length&&(w=!0,r=h,h=h[0]);"object"==typeof k&&(k=k[0]);0===k&&(h="none");f={fill:h,"fill-opacity":k,"stroke-width":f};void 0!==l&&0<l&&(f["stroke-dasharray"]=l);isNaN(g)||(f["stroke-opacity"]=g);e&&(f.stroke=e);e="M"+Math.round(b[0])+
","+Math.round(c[0])+" ";g=[];for(l=0;l<b.length;l++)isNaN(b[l])||isNaN(c[l])?(e+=this.drawSegment(g,p,t),l<b.length-1&&(e+="L"+b[l+1]+","+c[l+1]+" "),g=[]):g.push({x:Number(b[l]),y:Number(c[l])});e+=this.drawSegment(g,p,t);m?e+=m:d.VML||(e+="M0,0 L0,0");this.path=a.path(e).attr(f);this.node=this.path.node;w&&this.path.gradient("linearGradient",r,n)},drawSegment:function(a,b,c){var d="";if(2<a.length)for(var g=0;g<a.length-1;g++){var f=[],h=a[g-1],k=a[g],l=a[g+1],m=a[g+2];0===g?(f.push({x:k.x,y:k.y}),
f.push({x:k.x,y:k.y}),f.push({x:l.x,y:l.y}),f.push({x:m.x,y:m.y})):g>=a.length-2?(f.push({x:h.x,y:h.y}),f.push({x:k.x,y:k.y}),f.push({x:l.x,y:l.y}),f.push({x:l.x,y:l.y})):(f.push({x:h.x,y:h.y}),f.push({x:k.x,y:k.y}),f.push({x:l.x,y:l.y}),f.push({x:m.x,y:m.y}));h=[];k=Math.round;h.push({x:k(f[1].x),y:k(f[1].y)});h.push({x:k((-f[0].x+b*f[1].x+f[2].x)/b),y:k((-f[0].y+c*f[1].y+f[2].y)/c)});h.push({x:k((f[1].x+b*f[2].x-f[3].x)/b),y:k((f[1].y+c*f[2].y-f[3].y)/c)});h.push({x:k(f[2].x),y:k(f[2].y)});d+="C"+
h[1].x+","+h[1].y+","+h[2].x+","+h[2].y+","+h[3].x+","+h[3].y+" "}else 1<a.length&&(d+="L"+a[1].x+","+a[1].y);return d}})})();(function(){var d=window.AmCharts;d.AmDraw=d.Class({construct:function(a,b,c,e){d.SVG_NS="http://www.w3.org/2000/svg";d.SVG_XLINK="http://www.w3.org/1999/xlink";d.hasSVG=!!document.createElementNS&&!!document.createElementNS(d.SVG_NS,"svg").createSVGRect;1>b&&(b=10);1>c&&(c=10);this.div=a;this.width=b;this.height=c;this.rBin=document.createElement("div");d.hasSVG?(d.SVG=!0,b=this.createSvgElement("svg"),a.appendChild(b),this.container=b,this.addDefs(e),this.R=new d.SVGRenderer(this)):d.isIE&&d.VMLRenderer&&
(d.VML=!0,d.vmlStyleSheet||(document.namespaces.add("amvml","urn:schemas-microsoft-com:vml"),31>document.styleSheets.length?(b=document.createStyleSheet(),b.addRule(".amvml","behavior:url(#default#VML); display:inline-block; antialias:true"),d.vmlStyleSheet=b):document.styleSheets[0].addRule(".amvml","behavior:url(#default#VML); display:inline-block; antialias:true")),this.container=a,this.R=new d.VMLRenderer(this,e),this.R.disableSelection(a))},createSvgElement:function(a){return document.createElementNS(d.SVG_NS,
a)},circle:function(a,b,c,e){var g=new d.AmDObject("circle",this);g.attr({r:c,cx:a,cy:b});this.addToContainer(g.node,e);return g},ellipse:function(a,b,c,e,g){var f=new d.AmDObject("ellipse",this);f.attr({rx:c,ry:e,cx:a,cy:b});this.addToContainer(f.node,g);return f},setSize:function(a,b){0<a&&0<b&&(this.container.style.width=a+"px",this.container.style.height=b+"px")},rect:function(a,b,c,e,g,f,h){var k=new d.AmDObject("rect",this);d.VML&&(g=Math.round(100*g/Math.min(c,e)),c+=2*f,e+=2*f,k.bw=f,k.node.style.marginLeft=
-f,k.node.style.marginTop=-f);1>c&&(c=1);1>e&&(e=1);k.attr({x:a,y:b,width:c,height:e,rx:g,ry:g,"stroke-width":f});this.addToContainer(k.node,h);return k},image:function(a,b,c,e,g,f){var h=new d.AmDObject("image",this);h.attr({x:b,y:c,width:e,height:g});this.R.path(h,a);this.addToContainer(h.node,f);return h},addToContainer:function(a,b){b||(b=this.container);b.appendChild(a)},text:function(a,b,c){return this.R.text(a,b,c)},path:function(a,b,c,e){var g=new d.AmDObject("path",this);e||(e="100,100");
g.attr({cs:e});c?g.attr({dd:a}):g.attr({d:a});this.addToContainer(g.node,b);return g},set:function(a){return this.R.set(a)},remove:function(a){if(a){var b=this.rBin;b.appendChild(a);b.innerHTML=""}},renderFix:function(){var a=this.container,b=a.style;b.top="0px";b.left="0px";try{var c=a.getBoundingClientRect(),d=c.left-Math.round(c.left),g=c.top-Math.round(c.top);d&&(b.left=d+"px");g&&(b.top=g+"px")}catch(f){}},update:function(){this.R.update()},addDefs:function(a){if(d.hasSVG){var b=this.createSvgElement("desc"),
c=this.container;c.setAttribute("version","1.1");c.style.position="absolute";this.setSize(this.width,this.height);if(a.accessibleTitle){var e=this.createSvgElement("text");c.appendChild(e);e.innerHTML=a.accessibleTitle;e.style.opacity=0}d.rtl&&(c.setAttribute("direction","rtl"),c.style.left="auto",c.style.right="0px");a&&(a.addCodeCredits&&b.appendChild(document.createTextNode("JavaScript chart by amCharts "+a.version)),c.appendChild(b),a.defs&&(b=this.createSvgElement("defs"),c.appendChild(b),d.parseDefs(a.defs,
b),this.defs=b))}}})})();(function(){var d=window.AmCharts;d.AmDObject=d.Class({construct:function(a,b){this.D=b;this.R=b.R;this.node=this.R.create(this,a);this.y=this.x=0;this.scale=1},attr:function(a){this.R.attr(this,a);return this},getAttr:function(a){return this.node.getAttribute(a)},setAttr:function(a,b){this.R.setAttr(this,a,b);return this},clipRect:function(a,b,c,d){this.R.clipRect(this,a,b,c,d)},translate:function(a,b,c,d){d||(a=Math.round(a),b=Math.round(b));this.R.move(this,a,b,c);this.x=a;this.y=b;this.scale=
c;this.angle&&this.rotate(this.angle)},rotate:function(a,b){this.R.rotate(this,a,b);this.angle=a},animate:function(a,b,c){for(var e in a)if(a.hasOwnProperty(e)){var g=e,f=a[e];c=d.getEffect(c);this.R.animate(this,g,f,b,c)}},push:function(a){if(a){var b=this.node;b.appendChild(a.node);var c=a.clipPath;c&&b.appendChild(c);(a=a.grad)&&b.appendChild(a)}},text:function(a){this.R.setText(this,a)},remove:function(){this.stop();this.R.remove(this)},clear:function(){var a=this.node;if(a.hasChildNodes())for(;1<=
a.childNodes.length;)a.removeChild(a.firstChild)},hide:function(){this.setAttr("visibility","hidden")},show:function(){this.setAttr("visibility","visible")},getBBox:function(){return this.R.getBBox(this)},toFront:function(){var a=this.node;if(a){this.prevNextNode=a.nextSibling;var b=a.parentNode;b&&b.appendChild(a)}},toPrevious:function(){var a=this.node;a&&this.prevNextNode&&(a=a.parentNode)&&a.insertBefore(this.prevNextNode,null)},toBack:function(){var a=this.node;if(a){this.prevNextNode=a.nextSibling;
var b=a.parentNode;if(b){var c=b.firstChild;c&&b.insertBefore(a,c)}}},mouseover:function(a){this.R.addListener(this,"mouseover",a);return this},mouseout:function(a){this.R.addListener(this,"mouseout",a);return this},click:function(a){this.R.addListener(this,"click",a);return this},dblclick:function(a){this.R.addListener(this,"dblclick",a);return this},mousedown:function(a){this.R.addListener(this,"mousedown",a);return this},mouseup:function(a){this.R.addListener(this,"mouseup",a);return this},touchmove:function(a){this.R.addListener(this,
"touchmove",a);return this},touchstart:function(a){this.R.addListener(this,"touchstart",a);return this},touchend:function(a){this.R.addListener(this,"touchend",a);return this},keyup:function(a){this.R.addListener(this,"keyup",a);return this},focus:function(a){this.R.addListener(this,"focus",a);return this},blur:function(a){this.R.addListener(this,"blur",a);return this},contextmenu:function(a){this.node.addEventListener?this.node.addEventListener("contextmenu",a,!0):this.R.addListener(this,"contextmenu",
a);return this},stop:function(){d.removeFromArray(this.R.animations,this.an_translate);d.removeFromArray(this.R.animations,this.an_y);d.removeFromArray(this.R.animations,this.an_x)},length:function(){return this.node.childNodes.length},gradient:function(a,b,c){this.R.gradient(this,a,b,c)},pattern:function(a,b,c){a&&this.R.pattern(this,a,b,c)}})})();(function(){var d=window.AmCharts;d.VMLRenderer=d.Class({construct:function(a,b){this.chart=b;this.D=a;this.cNames={circle:"oval",ellipse:"oval",rect:"roundrect",path:"shape"};this.styleMap={x:"left",y:"top",width:"width",height:"height","font-family":"fontFamily","font-size":"fontSize",visibility:"visibility"}},create:function(a,b){var c;if("group"==b)c=document.createElement("div"),a.type="div";else if("text"==b)c=document.createElement("div"),a.type="text";else if("image"==b)c=document.createElement("img"),
a.type="image";else{a.type="shape";a.shapeType=this.cNames[b];c=document.createElement("amvml:"+this.cNames[b]);var d=document.createElement("amvml:stroke");c.appendChild(d);a.stroke=d;var g=document.createElement("amvml:fill");c.appendChild(g);a.fill=g;g.className="amvml";d.className="amvml";c.className="amvml"}c.style.position="absolute";c.style.top=0;c.style.left=0;return c},path:function(a,b){a.node.setAttribute("src",b)},setAttr:function(a,b,c){if(void 0!==c){var e;8===document.documentMode&&
(e=!0);var g=a.node,f=a.type,h=g.style;"r"==b&&(h.width=2*c,h.height=2*c);"oval"==a.shapeType&&("rx"==b&&(h.width=2*c),"ry"==b&&(h.height=2*c));"roundrect"==a.shapeType&&("width"!=b&&"height"!=b||--c);"cursor"==b&&(h.cursor=c);"cx"==b&&(h.left=c-d.removePx(h.width)/2);"cy"==b&&(h.top=c-d.removePx(h.height)/2);var k=this.styleMap[b];"width"==k&&0>c&&(c=0);void 0!==k&&(h[k]=c);"text"==f&&("text-anchor"==b&&(a.anchor=c,k=g.clientWidth,"end"==c&&(h.marginLeft=-k+"px"),"middle"==c&&(h.marginLeft=-(k/2)+
"px",h.textAlign="center"),"start"==c&&(h.marginLeft="0px")),"fill"==b&&(h.color=c),"font-weight"==b&&(h.fontWeight=c));if(h=a.children)for(k=0;k<h.length;k++)h[k].setAttr(b,c);if("shape"==f){"cs"==b&&(g.style.width="100px",g.style.height="100px",g.setAttribute("coordsize",c));"d"==b&&g.setAttribute("path",this.svgPathToVml(c));"dd"==b&&g.setAttribute("path",c);f=a.stroke;a=a.fill;"stroke"==b&&(e?f.color=c:f.setAttribute("color",c));"stroke-width"==b&&(e?f.weight=c:f.setAttribute("weight",c));"stroke-opacity"==
b&&(e?f.opacity=c:f.setAttribute("opacity",c));"stroke-dasharray"==b&&(h="solid",0<c&&3>c&&(h="dot"),3<=c&&6>=c&&(h="dash"),6<c&&(h="longdash"),e?f.dashstyle=h:f.setAttribute("dashstyle",h));if("fill-opacity"==b||"opacity"==b)0===c?e?a.on=!1:a.setAttribute("on",!1):e?a.opacity=c:a.setAttribute("opacity",c);"fill"==b&&(e?a.color=c:a.setAttribute("color",c));"rx"==b&&(e?g.arcSize=c+"%":g.setAttribute("arcsize",c+"%"))}}},attr:function(a,b){for(var c in b)b.hasOwnProperty(c)&&this.setAttr(a,c,b[c])},
text:function(a,b,c){var e=new d.AmDObject("text",this.D),g=e.node;g.style.whiteSpace="pre";g.innerHTML=a;this.D.addToContainer(g,c);this.attr(e,b);return e},getBBox:function(a){return this.getBox(a.node)},getBox:function(a){var b=a.offsetLeft,c=a.offsetTop,d=a.offsetWidth,g=a.offsetHeight,f;if(a.hasChildNodes()){var h,k,l;for(l=0;l<a.childNodes.length;l++){f=this.getBox(a.childNodes[l]);var m=f.x;isNaN(m)||(isNaN(h)?h=m:m<h&&(h=m));var n=f.y;isNaN(n)||(isNaN(k)?k=n:n<k&&(k=n));m=f.width+m;isNaN(m)||
(d=Math.max(d,m));f=f.height+n;isNaN(f)||(g=Math.max(g,f))}0>h&&(b+=h);0>k&&(c+=k)}return{x:b,y:c,width:d,height:g}},setText:function(a,b){var c=a.node;c&&(c.innerHTML=b);this.setAttr(a,"text-anchor",a.anchor)},addListener:function(a,b,c){a.node["on"+b]=c},move:function(a,b,c){var e=a.node,g=e.style;"text"==a.type&&(c-=d.removePx(g.fontSize)/2-1);"oval"==a.shapeType&&(b-=d.removePx(g.width)/2,c-=d.removePx(g.height)/2);a=a.bw;isNaN(a)||(b-=a,c-=a);isNaN(b)||isNaN(c)||(e.style.left=b+"px",e.style.top=
c+"px")},svgPathToVml:function(a){var b=a.split(" ");a="";var c,d=Math.round,g;for(g=0;g<b.length;g++){var f=b[g],h=f.substring(0,1),f=f.substring(1),k=f.split(","),l=d(k[0])+","+d(k[1]);"M"==h&&(a+=" m "+l);"L"==h&&(a+=" l "+l);"Z"==h&&(a+=" x e");if("Q"==h){var m=c.length,n=c[m-1],q=k[0],p=k[1],l=k[2],t=k[3];c=d(c[m-2]/3+2/3*q);n=d(n/3+2/3*p);q=d(2/3*q+l/3);p=d(2/3*p+t/3);a+=" c "+c+","+n+","+q+","+p+","+l+","+t}"C"==h&&(a+=" c "+k[0]+","+k[1]+","+k[2]+","+k[3]+","+k[4]+","+k[5]);"A"==h&&(a+=" wa "+
f);"B"==h&&(a+=" at "+f);c=k}return a},animate:function(a,b,c,d,g){var f=a.node,h=this.chart;a.animationFinished=!1;if("translate"==b){b=c.split(",");c=b[1];var k=f.offsetTop;h.animate(a,"left",f.offsetLeft,b[0],d,g,"px");h.animate(a,"top",k,c,d,g,"px")}},clipRect:function(a,b,c,d,g){a=a.node;0===b&&0===c?(a.style.width=d+"px",a.style.height=g+"px",a.style.overflow="hidden"):a.style.clip="rect("+c+"px "+(b+d)+"px "+(c+g)+"px "+b+"px)"},rotate:function(a,b,c){if(0!==Number(b)){var e=a.node;a=e.style;
c||(c=this.getBGColor(e.parentNode));a.backgroundColor=c;a.paddingLeft=1;c=b*Math.PI/180;var g=Math.cos(c),f=Math.sin(c),h=d.removePx(a.left),k=d.removePx(a.top),l=e.offsetWidth,e=e.offsetHeight;b/=Math.abs(b);a.left=h+l/2-l/2*Math.cos(c)-b*e/2*Math.sin(c)+3;a.top=k-b*l/2*Math.sin(c)+b*e/2*Math.sin(c);a.cssText=a.cssText+"; filter:progid:DXImageTransform.Microsoft.Matrix(M11='"+g+"', M12='"+-f+"', M21='"+f+"', M22='"+g+"', sizingmethod='auto expand');"}},getBGColor:function(a){var b="#FFFFFF";if(a.style){var c=
a.style.backgroundColor;""!==c?b=c:a.parentNode&&(b=this.getBGColor(a.parentNode))}return b},set:function(a){var b=new d.AmDObject("group",this.D);this.D.container.appendChild(b.node);if(a){var c;for(c=0;c<a.length;c++)b.push(a[c])}return b},gradient:function(a,b,c,d){var g="";"radialGradient"==b&&(b="gradientradial",c.reverse());"linearGradient"==b&&(b="gradient");var f;for(f=0;f<c.length;f++)g+=Math.round(100*f/(c.length-1))+"% "+c[f],f<c.length-1&&(g+=",");a=a.fill;90==d?d=0:270==d?d=180:180==
d?d=90:0===d&&(d=270);8===document.documentMode?(a.type=b,a.angle=d):(a.setAttribute("type",b),a.setAttribute("angle",d));g&&(a.colors.value=g)},remove:function(a){a.clipPath&&this.D.remove(a.clipPath);this.D.remove(a.node)},disableSelection:function(a){a.onselectstart=function(){return!1};a.style.cursor="default"},pattern:function(a,b,c,e){c=a.node;a=a.fill;var g="none";b.color&&(g=b.color);c.fillColor=g;b=b.url;d.isAbsolute(b)||(b=e+b);8===document.documentMode?(a.type="tile",a.src=b):(a.setAttribute("type",
"tile"),a.setAttribute("src",b))},update:function(){}})})();(function(){var d=window.AmCharts;d.SVGRenderer=d.Class({construct:function(a){this.D=a;this.animations=[]},create:function(a,b){return document.createElementNS(d.SVG_NS,b)},attr:function(a,b){for(var c in b)b.hasOwnProperty(c)&&this.setAttr(a,c,b[c])},setAttr:function(a,b,c){void 0!==c&&a.node.setAttribute(b,c)},animate:function(a,b,c,e,g){a.animationFinished=!1;var f=a.node;a["an_"+b]&&d.removeFromArray(this.animations,a["an_"+b]);"translate"==b?(f=(f=f.getAttribute("transform"))?String(f).substring(10,
f.length-1):"0,0",f=f.split(", ").join(" "),f=f.split(" ").join(","),0===f&&(f="0,0")):f=Number(f.getAttribute(b));c={obj:a,frame:0,attribute:b,from:f,to:c,time:e,effect:g};this.animations.push(c);a["an_"+b]=c},update:function(){var a,b=this.animations;for(a=b.length-1;0<=a;a--){var c=b[a],e=c.time*d.updateRate,g=c.frame+1,f=c.obj,h=c.attribute,k,l,m;if(g<=e){c.frame++;if("translate"==h){k=c.from.split(",");h=Number(k[0]);k=Number(k[1]);isNaN(k)&&(k=0);l=c.to.split(",");m=Number(l[0]);l=Number(l[1]);
m=0===m-h?m:Math.round(d[c.effect](0,g,h,m-h,e));c=0===l-k?l:Math.round(d[c.effect](0,g,k,l-k,e));h="transform";if(isNaN(m)||isNaN(c))continue;c="translate("+m+","+c+")"}else l=Number(c.from),k=Number(c.to),m=k-l,c=d[c.effect](0,g,l,m,e),isNaN(c)&&(c=k),0===m&&this.animations.splice(a,1);this.setAttr(f,h,c)}else"translate"==h?(l=c.to.split(","),m=Number(l[0]),l=Number(l[1]),f.translate(m,l)):(k=Number(c.to),this.setAttr(f,h,k)),f.animationFinished=!0,this.animations.splice(a,1)}},getBBox:function(a){if(a=
a.node)try{return a.getBBox()}catch(b){}return{width:0,height:0,x:0,y:0}},path:function(a,b){a.node.setAttributeNS(d.SVG_XLINK,"xlink:href",b)},clipRect:function(a,b,c,e,g){var f=a.node,h=a.clipPath;h&&this.D.remove(h);var k=f.parentNode;k&&(f=document.createElementNS(d.SVG_NS,"clipPath"),h=d.getUniqueId(),f.setAttribute("id",h),this.D.rect(b,c,e,g,0,0,f),k.appendChild(f),b="#",d.baseHref&&!d.isIE&&(b=this.removeTarget(window.location.href)+b),this.setAttr(a,"clip-path","url("+b+h+")"),this.clipPathC++,
a.clipPath=f)},text:function(a,b,c){var e=new d.AmDObject("text",this.D);a=String(a).split("\n");var g=d.removePx(b["font-size"]),f;for(f=0;f<a.length;f++){var h=this.create(null,"tspan");h.appendChild(document.createTextNode(a[f]));h.setAttribute("y",(g+2)*f+Math.round(g/2));h.setAttribute("x",0);e.node.appendChild(h)}e.node.setAttribute("y",Math.round(g/2));this.attr(e,b);this.D.addToContainer(e.node,c);return e},setText:function(a,b){var c=a.node;c&&(c.removeChild(c.firstChild),c.appendChild(document.createTextNode(b)))},
move:function(a,b,c,d){isNaN(b)&&(b=0);isNaN(c)&&(c=0);b="translate("+b+","+c+")";d&&(b=b+" scale("+d+")");this.setAttr(a,"transform",b)},rotate:function(a,b){var c=a.node.getAttribute("transform"),d="rotate("+b+")";c&&(d=c+" "+d);this.setAttr(a,"transform",d)},set:function(a){var b=new d.AmDObject("g",this.D);this.D.container.appendChild(b.node);if(a){var c;for(c=0;c<a.length;c++)b.push(a[c])}return b},addListener:function(a,b,c){a.node["on"+b]=c},gradient:function(a,b,c,e){var g=a.node,f=a.grad;
f&&this.D.remove(f);b=document.createElementNS(d.SVG_NS,b);f=d.getUniqueId();b.setAttribute("id",f);if(!isNaN(e)){var h=0,k=0,l=0,m=0;90==e?l=100:270==e?m=100:180==e?h=100:0===e&&(k=100);b.setAttribute("x1",h+"%");b.setAttribute("x2",k+"%");b.setAttribute("y1",l+"%");b.setAttribute("y2",m+"%")}for(e=0;e<c.length;e++)h=document.createElementNS(d.SVG_NS,"stop"),k=100*e/(c.length-1),0===e&&(k=0),h.setAttribute("offset",k+"%"),h.setAttribute("stop-color",c[e]),b.appendChild(h);g.parentNode.appendChild(b);
c="#";d.baseHref&&!d.isIE&&(c=this.removeTarget(window.location.href)+c);g.setAttribute("fill","url("+c+f+")");a.grad=b},removeTarget:function(a){return a.split("#")[0]},pattern:function(a,b,c,e){var g=a.node;isNaN(c)&&(c=1);var f=a.patternNode;f&&this.D.remove(f);var f=document.createElementNS(d.SVG_NS,"pattern"),h=d.getUniqueId(),k=b;b.url&&(k=b.url);d.isAbsolute(k)||-1!=k.indexOf("data:image")||(k=e+k);e=Number(b.width);isNaN(e)&&(e=4);var l=Number(b.height);isNaN(l)&&(l=4);e/=c;l/=c;c=b.x;isNaN(c)&&
(c=0);var m=-Math.random()*Number(b.randomX);isNaN(m)||(c=m);m=b.y;isNaN(m)&&(m=0);var n=-Math.random()*Number(b.randomY);isNaN(n)||(m=n);f.setAttribute("id",h);f.setAttribute("width",e);f.setAttribute("height",l);f.setAttribute("patternUnits","userSpaceOnUse");f.setAttribute("xlink:href",k);b.color&&(n=document.createElementNS(d.SVG_NS,"rect"),n.setAttributeNS(null,"height",e),n.setAttributeNS(null,"width",l),n.setAttributeNS(null,"fill",b.color),f.appendChild(n));this.D.image(k,0,0,e,l,f).translate(c,
m);k="#";d.baseHref&&!d.isIE&&(k=this.removeTarget(window.location.href)+k);g.setAttribute("fill","url("+k+h+")");a.patternNode=f;g.parentNode.appendChild(f)},remove:function(a){a.clipPath&&this.D.remove(a.clipPath);a.grad&&this.D.remove(a.grad);a.patternNode&&this.D.remove(a.patternNode);this.D.remove(a.node)}})})();(function(){var d=window.AmCharts;d.AmLegend=d.Class({construct:function(a){this.enabled=!0;this.cname="AmLegend";this.createEvents("rollOverMarker","rollOverItem","rollOutMarker","rollOutItem","showItem","hideItem","clickMarker","clickLabel");this.position="bottom";this.borderColor=this.color="#000000";this.borderAlpha=0;this.markerLabelGap=5;this.verticalGap=10;this.align="left";this.horizontalGap=0;this.spacing=10;this.markerDisabledColor="#AAB3B3";this.markerType="square";this.markerSize=16;this.markerBorderThickness=
this.markerBorderAlpha=1;this.marginBottom=this.marginTop=0;this.marginLeft=this.marginRight=20;this.autoMargins=!0;this.valueWidth=50;this.switchable=!0;this.switchType="x";this.switchColor="#FFFFFF";this.rollOverColor="#CC0000";this.reversedOrder=!1;this.labelText="[[title]]";this.valueText="[[value]]";this.accessibleLabel="[[title]]";this.useMarkerColorForLabels=!1;this.rollOverGraphAlpha=1;this.textClickEnabled=!1;this.equalWidths=!0;this.backgroundColor="#FFFFFF";this.backgroundAlpha=0;this.useGraphSettings=
!1;this.showEntries=!0;this.labelDx=0;d.applyTheme(this,a,this.cname)},setData:function(a){this.legendData=a;this.invalidateSize()},invalidateSize:function(){this.destroy();this.entries=[];this.valueLabels=[];var a=this.legendData;this.enabled&&(d.ifArray(a)||d.ifArray(this.data))&&this.drawLegend()},drawLegend:function(){var a=this.chart,b=this.position,c=this.width,e=a.divRealWidth,g=a.divRealHeight,f=this.div,h=this.legendData;this.data&&(h=this.combineLegend?this.legendData.concat(this.data):
this.data);isNaN(this.fontSize)&&(this.fontSize=a.fontSize);this.maxColumnsReal=this.maxColumns;if("right"==b||"left"==b)this.maxColumnsReal=1,this.autoMargins&&(this.marginLeft=this.marginRight=10);else if(this.autoMargins){this.marginRight=a.marginRight;this.marginLeft=a.marginLeft;var k=a.autoMarginOffset;"bottom"==b?(this.marginBottom=k,this.marginTop=0):(this.marginTop=k,this.marginBottom=0)}c=void 0!==c?d.toCoordinate(c,e):"right"!=b&&"left"!=b?a.realWidth:0<this.ieW?this.ieW:a.realWidth;"outside"==
b?(c=f.offsetWidth,g=f.offsetHeight,f.clientHeight&&(c=f.clientWidth,g=f.clientHeight)):(isNaN(c)||(f.style.width=c+"px"),f.className="amChartsLegend "+a.classNamePrefix+"-legend-div");this.divWidth=c;(b=this.container)?(b.container.innerHTML="",f.appendChild(b.container),b.width=c,b.height=g,b.setSize(c,g),b.addDefs(a)):b=new d.AmDraw(f,c,g,a);this.container=b;this.lx=0;this.ly=8;g=this.markerSize;g>this.fontSize&&(this.ly=g/2-1);0<g&&(this.lx+=g+this.markerLabelGap);this.titleWidth=0;if(g=this.title)g=
d.text(this.container,g,this.color,a.fontFamily,this.fontSize,"start",!0),d.setCN(a,g,"legend-title"),g.translate(this.marginLeft,this.marginTop+this.verticalGap+this.ly+1),a=g.getBBox(),this.titleWidth=a.width+15,this.titleHeight=a.height+6;this.index=this.maxLabelWidth=0;if(this.showEntries){for(a=0;a<h.length;a++)this.createEntry(h[a]);for(a=this.index=0;a<h.length;a++)this.createValue(h[a])}this.arrangeEntries();this.updateValues()},arrangeEntries:function(){var a=this.position,b=this.marginLeft+
this.titleWidth,c=this.marginRight,e=this.marginTop,g=this.marginBottom,f=this.horizontalGap,h=this.div,k=this.divWidth,l=this.maxColumnsReal,m=this.verticalGap,n=this.spacing,q=k-c-b,p=0,t=0,r=this.container;this.set&&this.set.remove();var w=r.set();this.set=w;var z=r.set();w.push(z);var x=this.entries,u,A;for(A=0;A<x.length;A++){u=x[A].getBBox();var y=u.width;y>p&&(p=y);u=u.height;u>t&&(t=u)}var y=t=0,B=f,D=0,C=0;for(A=0;A<x.length;A++){var I=x[A];this.reversedOrder&&(I=x[x.length-A-1]);u=I.getBBox();
var H;this.equalWidths?H=y*(p+n+this.markerLabelGap):(H=B,B=B+u.width+f+n);H+u.width>q&&0<A&&0!==y&&(t++,H=y=0,B=H+u.width+f+n,D=D+C+m,C=0);u.height>C&&(C=u.height);I.translate(H,D);y++;!isNaN(l)&&y>=l&&(y=0,t++,D=D+C+m,B=f,C=0);z.push(I)}u=z.getBBox();l=u.height+2*m-1;"left"==a||"right"==a?(n=u.width+2*f,k=n+b+c,h.style.width=k+"px",this.ieW=k):n=k-b-c-1;c=d.polygon(this.container,[0,n,n,0],[0,0,l,l],this.backgroundColor,this.backgroundAlpha,1,this.borderColor,this.borderAlpha);d.setCN(this.chart,
c,"legend-bg");w.push(c);w.translate(b,e);c.toBack();b=f;if("top"==a||"bottom"==a||"absolute"==a||"outside"==a)"center"==this.align?b=f+(n-u.width)/2:"right"==this.align&&(b=f+n-u.width);z.translate(b,m+1);this.titleHeight>l&&(l=this.titleHeight);e=l+e+g+1;0>e&&(e=0);"absolute"!=a&&"outside"!=a&&e>this.chart.divRealHeight&&(h.style.top="0px");h.style.height=Math.round(e)+"px";r.setSize(this.divWidth,e)},createEntry:function(a){if(!1!==a.visibleInLegend&&!a.hideFromLegend){var b=this,c=b.chart,e=b.useGraphSettings,
g=a.markerType;g&&(e=!1);a.legendEntryWidth=b.markerSize;g||(g=b.markerType);var f=a.color,h=a.alpha;a.legendKeyColor&&(f=a.legendKeyColor());a.legendKeyAlpha&&(h=a.legendKeyAlpha());var k;!0===a.hidden&&(k=f=b.markerDisabledColor);var l=a.pattern,m,n=a.customMarker;n||(n=b.customMarker);var q=b.container,p=b.markerSize,t=0,r=0,w=p/2;if(e){e=a.type;b.switchType=void 0;if("line"==e||"step"==e||"smoothedLine"==e||"ohlc"==e)m=q.set(),a.hidden||(f=a.lineColorR,k=a.bulletBorderColorR),t=d.line(q,[0,2*
p],[p/2,p/2],f,a.lineAlpha,a.lineThickness,a.dashLength),d.setCN(c,t,"graph-stroke"),m.push(t),a.bullet&&(a.hidden||(f=a.bulletColorR),t=d.bullet(q,a.bullet,a.bulletSize,f,a.bulletAlpha,a.bulletBorderThickness,k,a.bulletBorderAlpha))&&(d.setCN(c,t,"graph-bullet"),t.translate(p+1,p/2),m.push(t)),w=0,t=p,r=p/3;else{a.getGradRotation&&(m=a.getGradRotation(),0===m&&(m=180));t=a.fillColorsR;!0===a.hidden&&(t=f);if(m=b.createMarker("rectangle",t,a.fillAlphas,a.lineThickness,f,a.lineAlpha,m,l,a.dashLength))w=
p,m.translate(w,p/2);t=p}d.setCN(c,m,"graph-"+e);d.setCN(c,m,"graph-"+a.id)}else if(n)m=q.image(n,0,0,p,p);else{var z;isNaN(b.gradientRotation)||(z=180+b.gradientRotation);(m=b.createMarker(g,f,h,void 0,void 0,void 0,z,l))&&m.translate(p/2,p/2)}d.setCN(c,m,"legend-marker");b.addListeners(m,a);q=q.set([m]);b.switchable&&a.switchable&&q.setAttr("cursor","pointer");void 0!==a.id&&d.setCN(c,q,"legend-item-"+a.id);d.setCN(c,q,a.className,!0);k=b.switchType;var x;k&&"none"!=k&&0<p&&("x"==k?(x=b.createX(),
x.translate(p/2,p/2)):x=b.createV(),x.dItem=a,!0!==a.hidden?"x"==k?x.hide():x.show():"x"!=k&&x.hide(),b.switchable||x.hide(),b.addListeners(x,a),a.legendSwitch=x,q.push(x),d.setCN(c,x,"legend-switch"));k=b.color;a.showBalloon&&b.textClickEnabled&&void 0!==b.selectedColor&&(k=b.selectedColor);b.useMarkerColorForLabels&&!l&&(k=f);!0===a.hidden&&(k=b.markerDisabledColor);f=d.massReplace(b.labelText,{"[[title]]":a.title});void 0!==b.tabIndex&&(q.setAttr("tabindex",b.tabIndex),q.setAttr("role","menuitem"),
q.keyup(function(c){13==c.keyCode&&b.clickMarker(a,c)}));c.accessible&&b.accessibleLabel&&(l=d.massReplace(b.accessibleLabel,{"[[title]]":a.title}),c.makeAccessible(q,l));l=b.fontSize;m&&(p<=l&&(p=p/2+b.ly-l/2+(l+2-p)/2-r,m.translate(w,p),x&&x.translate(x.x,p)),a.legendEntryWidth=m.getBBox().width);var u;f&&(f=d.fixBrakes(f),a.legendTextReal=f,u=b.labelWidth,u=isNaN(u)?d.text(b.container,f,k,c.fontFamily,l,"start"):d.wrappedText(b.container,f,k,c.fontFamily,l,"start",!1,u,0),d.setCN(c,u,"legend-label"),
u.translate(b.lx+t,b.ly),q.push(u),b.labelDx=t,c=u.getBBox().width,b.maxLabelWidth<c&&(b.maxLabelWidth=c));b.entries[b.index]=q;a.legendEntry=b.entries[b.index];a.legendMarker=m;a.legendLabel=u;b.index++}},addListeners:function(a,b){var c=this;a&&a.mouseover(function(a){c.rollOverMarker(b,a)}).mouseout(function(a){c.rollOutMarker(b,a)}).click(function(a){c.clickMarker(b,a)})},rollOverMarker:function(a,b){this.switchable&&this.dispatch("rollOverMarker",a,b);this.dispatch("rollOverItem",a,b)},rollOutMarker:function(a,
b){this.switchable&&this.dispatch("rollOutMarker",a,b);this.dispatch("rollOutItem",a,b)},clickMarker:function(a,b){this.switchable&&(!0===a.hidden?this.dispatch("showItem",a,b):this.dispatch("hideItem",a,b));this.dispatch("clickMarker",a,b)},rollOverLabel:function(a,b){a.hidden||this.textClickEnabled&&a.legendLabel&&a.legendLabel.attr({fill:this.rollOverColor});this.dispatch("rollOverItem",a,b)},rollOutLabel:function(a,b){if(!a.hidden&&this.textClickEnabled&&a.legendLabel){var c=this.color;void 0!==
this.selectedColor&&a.showBalloon&&(c=this.selectedColor);this.useMarkerColorForLabels&&(c=a.lineColor,void 0===c&&(c=a.color));a.legendLabel.attr({fill:c})}this.dispatch("rollOutItem",a,b)},clickLabel:function(a,b){this.textClickEnabled?a.hidden||this.dispatch("clickLabel",a,b):this.switchable&&(!0===a.hidden?this.dispatch("showItem",a,b):this.dispatch("hideItem",a,b))},dispatch:function(a,b,c){a={type:a,dataItem:b,target:this,event:c,chart:this.chart};this.chart&&this.chart.handleLegendEvent(a);
this.fire(a)},createValue:function(a){var b=this,c=b.fontSize,e=b.chart;if(!1!==a.visibleInLegend&&!a.hideFromLegend){var g=b.maxLabelWidth;b.forceWidth&&(g=b.labelWidth);b.equalWidths||(b.valueAlign="left");"left"==b.valueAlign&&a.legendLabel&&(g=a.legendLabel.getBBox().width);var f=g;if(b.valueText&&0<b.valueWidth){var h=b.color;b.useMarkerColorForValues&&(h=a.color,a.legendKeyColor&&(h=a.legendKeyColor()));!0===a.hidden&&(h=b.markerDisabledColor);var k=b.valueText,g=g+b.lx+b.labelDx+b.markerLabelGap+
b.valueWidth,l="end";"left"==b.valueAlign&&(g-=b.valueWidth,l="start");h=d.text(b.container,k,h,b.chart.fontFamily,c,l);d.setCN(e,h,"legend-value");h.translate(g,b.ly);b.entries[b.index].push(h);f+=b.valueWidth+2*b.markerLabelGap;h.dItem=a;b.valueLabels.push(h)}b.index++;e=b.markerSize;e<c+7&&(e=c+7,d.VML&&(e+=3));c=b.container.rect(a.legendEntryWidth,0,f,e,0,0).attr({stroke:"none",fill:"#fff","fill-opacity":.005});c.dItem=a;b.entries[b.index-1].push(c);c.mouseover(function(c){b.rollOverLabel(a,c)}).mouseout(function(c){b.rollOutLabel(a,
c)}).click(function(c){b.clickLabel(a,c)})}},createV:function(){var a=this.markerSize;return d.polygon(this.container,[a/5,a/2,a-a/5,a/2],[a/3,a-a/5,a/5,a/1.7],this.switchColor)},createX:function(){var a=(this.markerSize-4)/2,b={stroke:this.switchColor,"stroke-width":3},c=this.container,e=d.line(c,[-a,a],[-a,a]).attr(b),a=d.line(c,[-a,a],[a,-a]).attr(b);return this.container.set([e,a])},createMarker:function(a,b,c,e,g,f,h,k,l){var m=this.markerSize,n=this.container;g||(g=this.markerBorderColor);g||
(g=b);isNaN(e)&&(e=this.markerBorderThickness);isNaN(f)&&(f=this.markerBorderAlpha);return d.bullet(n,a,m,b,c,e,g,f,m,h,k,this.chart.path,l)},validateNow:function(){this.invalidateSize()},updateValues:function(){var a=this.valueLabels,b=this.chart,c,e=this.data;if(a)for(c=0;c<a.length;c++){var g=a[c],f=g.dItem;f.periodDataItem=void 0;f.periodPercentDataItem=void 0;var h=" ";if(e)f.value?g.text(f.value):g.text("");else{var k=null;if(void 0!==f.type){var k=f.currentDataItem,l=this.periodValueText;f.legendPeriodValueText&&
(l=f.legendPeriodValueText);f.legendPeriodValueTextR&&(l=f.legendPeriodValueTextR);k?(h=this.valueText,f.legendValueText&&(h=f.legendValueText),f.legendValueTextR&&(h=f.legendValueTextR),h=b.formatString(h,k)):l&&b.formatPeriodString&&(l=d.massReplace(l,{"[[title]]":f.title}),h=b.formatPeriodString(l,f))}else h=b.formatString(this.valueText,f);l=f;k&&(l=k);var m=this.valueFunction;m&&(h=m(l,h,b.periodDataItem));var n;this.useMarkerColorForLabels&&!k&&f.lastDataItem&&(k=f.lastDataItem);k?n=b.getBalloonColor(f,
k):f.legendKeyColor&&(n=f.legendKeyColor());f.legendColorFunction&&(n=f.legendColorFunction(l,h,f.periodDataItem,f.periodPercentDataItem));g.text(h);if(!f.pattern&&(this.useMarkerColorForValues&&g.setAttr("fill",n),this.useMarkerColorForLabels)){if(g=f.legendMarker)g.setAttr("fill",n),g.setAttr("stroke",n);(g=f.legendLabel)&&(f.hidden?g.setAttr("fill",this.markerDisabledColor):g.setAttr("fill",n))}}}},renderFix:function(){if(!d.VML&&this.enabled){var a=this.container;a&&a.renderFix()}},destroy:function(){this.div.innerHTML=
"";d.remove(this.set)}})})();(function(){var d=window.AmCharts;d.formatMilliseconds=function(a,b){if(-1!=a.indexOf("fff")){var c=b.getMilliseconds(),d=String(c);10>c&&(d="00"+c);10<=c&&100>c&&(d="0"+c);a=a.replace(/fff/g,d)}return a};d.extractPeriod=function(a){var b=d.stripNumbers(a),c=1;b!=a&&(c=Number(a.slice(0,a.indexOf(b))));return{period:b,count:c}};d.getDate=function(a,b,c){return a instanceof Date?d.newDate(a,c):b&&isNaN(a)?d.stringToDate(a,b):new Date(a)};d.daysInMonth=function(a){return(new Date(a.getYear(),a.getMonth()+
1,0)).getDate()};d.newDate=function(a,b){return b&&-1==b.indexOf("fff")?new Date(a):new Date(a.getFullYear(),a.getMonth(),a.getDate(),a.getHours(),a.getMinutes(),a.getSeconds(),a.getMilliseconds())};d.resetDateToMin=function(a,b,c,e){void 0===e&&(e=1);var g,f,h,k,l,m,n;d.useUTC?(g=a.getUTCFullYear(),f=a.getUTCMonth(),h=a.getUTCDate(),k=a.getUTCHours(),l=a.getUTCMinutes(),m=a.getUTCSeconds(),n=a.getUTCMilliseconds(),a=a.getUTCDay()):(g=a.getFullYear(),f=a.getMonth(),h=a.getDate(),k=a.getHours(),l=
a.getMinutes(),m=a.getSeconds(),n=a.getMilliseconds(),a=a.getDay());switch(b){case "YYYY":g=Math.floor(g/c)*c;f=0;h=1;n=m=l=k=0;break;case "MM":f=Math.floor(f/c)*c;h=1;n=m=l=k=0;break;case "WW":h=a>=e?h-a+e:h-(7+a)+e;n=m=l=k=0;break;case "DD":n=m=l=k=0;break;case "hh":k=Math.floor(k/c)*c;n=m=l=0;break;case "mm":l=Math.floor(l/c)*c;n=m=0;break;case "ss":m=Math.floor(m/c)*c;n=0;break;case "fff":n=Math.floor(n/c)*c}d.useUTC?(a=new Date,a.setUTCFullYear(g,f,h),a.setUTCHours(k,l,m,n)):a=new Date(g,f,h,
k,l,m,n);return a};d.getPeriodDuration=function(a,b){void 0===b&&(b=1);var c;switch(a){case "YYYY":c=316224E5;break;case "MM":c=26784E5;break;case "WW":c=6048E5;break;case "DD":c=864E5;break;case "hh":c=36E5;break;case "mm":c=6E4;break;case "ss":c=1E3;break;case "fff":c=1}return c*b};d.intervals={s:{nextInterval:"ss",contains:1E3},ss:{nextInterval:"mm",contains:60,count:0},mm:{nextInterval:"hh",contains:60,count:1},hh:{nextInterval:"DD",contains:24,count:2},DD:{nextInterval:"",contains:Infinity,count:3}};
d.getMaxInterval=function(a,b){var c=d.intervals;return a>=c[b].contains?(a=Math.round(a/c[b].contains),b=c[b].nextInterval,d.getMaxInterval(a,b)):"ss"==b?c[b].nextInterval:b};d.dayNames="Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" ");d.shortDayNames="Sun Mon Tue Wed Thu Fri Sat".split(" ");d.monthNames="January February March April May June July August September October November December".split(" ");d.shortMonthNames="Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" ");
d.getWeekNumber=function(a){a=new Date(a);a.setHours(0,0,0);a.setDate(a.getDate()+4-(a.getDay()||7));var b=new Date(a.getFullYear(),0,1);return Math.ceil(((a-b)/864E5+1)/7)};d.stringToDate=function(a,b){var c={},e=[{pattern:"YYYY",period:"year"},{pattern:"YY",period:"year"},{pattern:"MM",period:"month"},{pattern:"M",period:"month"},{pattern:"DD",period:"date"},{pattern:"D",period:"date"},{pattern:"JJ",period:"hours"},{pattern:"J",period:"hours"},{pattern:"HH",period:"hours"},{pattern:"H",period:"hours"},
{pattern:"KK",period:"hours"},{pattern:"K",period:"hours"},{pattern:"LL",period:"hours"},{pattern:"L",period:"hours"},{pattern:"NN",period:"minutes"},{pattern:"N",period:"minutes"},{pattern:"SS",period:"seconds"},{pattern:"S",period:"seconds"},{pattern:"QQQ",period:"milliseconds"},{pattern:"QQ",period:"milliseconds"},{pattern:"Q",period:"milliseconds"}],g=!0,f=b.indexOf("AA");-1!=f&&(a.substr(f,2),"pm"==a.toLowerCase&&(g=!1));var f=b,h,k,l;for(l=0;l<e.length;l++)k=e[l].period,c[k]=0,"date"==k&&(c[k]=
1);for(l=0;l<e.length;l++)if(h=e[l].pattern,k=e[l].period,-1!=b.indexOf(h)){var m=d.getFromDateString(h,a,f);b=b.replace(h,"");if("KK"==h||"K"==h||"LL"==h||"L"==h)g||(m+=12);c[k]=m}d.useUTC?(e=new Date,e.setUTCFullYear(c.year,c.month,c.date),e.setUTCHours(c.hours,c.minutes,c.seconds,c.milliseconds)):e=new Date(c.year,c.month,c.date,c.hours,c.minutes,c.seconds,c.milliseconds);return e};d.getFromDateString=function(a,b,c){if(void 0!==b)return c=c.indexOf(a),b=String(b),b=b.substr(c,a.length),"0"==b.charAt(0)&&
(b=b.substr(1,b.length-1)),b=Number(b),isNaN(b)&&(b=0),-1!=a.indexOf("M")&&b--,b};d.formatDate=function(a,b,c){c||(c=d);var e,g,f,h,k,l,m,n,q=d.getWeekNumber(a);d.useUTC?(e=a.getUTCFullYear(),g=a.getUTCMonth(),f=a.getUTCDate(),h=a.getUTCDay(),k=a.getUTCHours(),l=a.getUTCMinutes(),m=a.getUTCSeconds(),n=a.getUTCMilliseconds()):(e=a.getFullYear(),g=a.getMonth(),f=a.getDate(),h=a.getDay(),k=a.getHours(),l=a.getMinutes(),m=a.getSeconds(),n=a.getMilliseconds());var p=String(e).substr(2,2),t="0"+h;b=b.replace(/W/g,
q);q=k;24==q&&(q=0);var r=q;10>r&&(r="0"+r);b=b.replace(/JJ/g,r);b=b.replace(/J/g,q);r=k;0===r&&(r=24,-1!=b.indexOf("H")&&(f--,0===f&&(e=new Date(a),e.setDate(e.getDate()-1),g=e.getMonth(),f=e.getDate(),e=e.getFullYear())));a=g+1;9>g&&(a="0"+a);q=f;10>f&&(q="0"+f);var w=r;10>w&&(w="0"+w);b=b.replace(/HH/g,w);b=b.replace(/H/g,r);r=k;11<r&&(r-=12);w=r;10>w&&(w="0"+w);b=b.replace(/KK/g,w);b=b.replace(/K/g,r);r=k;0===r&&(r=12);12<r&&(r-=12);w=r;10>w&&(w="0"+w);b=b.replace(/LL/g,w);b=b.replace(/L/g,r);
r=l;10>r&&(r="0"+r);b=b.replace(/NN/g,r);b=b.replace(/N/g,l);l=m;10>l&&(l="0"+l);b=b.replace(/SS/g,l);b=b.replace(/S/g,m);m=n;10>m?m="00"+m:100>m&&(m="0"+m);l=n;10>l&&(l="00"+l);b=b.replace(/A/g,"@A@");b=b.replace(/QQQ/g,m);b=b.replace(/QQ/g,l);b=b.replace(/Q/g,n);b=b.replace(/YYYY/g,"@IIII@");b=b.replace(/YY/g,"@II@");b=b.replace(/MMMM/g,"@XXXX@");b=b.replace(/MMM/g,"@XXX@");b=b.replace(/MM/g,"@XX@");b=b.replace(/M/g,"@X@");b=b.replace(/DD/g,"@RR@");b=b.replace(/D/g,"@R@");b=b.replace(/EEEE/g,"@PPPP@");
b=b.replace(/EEE/g,"@PPP@");b=b.replace(/EE/g,"@PP@");b=b.replace(/E/g,"@P@");b=b.replace(/@IIII@/g,e);b=b.replace(/@II@/g,p);b=b.replace(/@XXXX@/g,c.monthNames[g]);b=b.replace(/@XXX@/g,c.shortMonthNames[g]);b=b.replace(/@XX@/g,a);b=b.replace(/@X@/g,g+1);b=b.replace(/@RR@/g,q);b=b.replace(/@R@/g,f);b=b.replace(/@PPPP@/g,c.dayNames[h]);b=b.replace(/@PPP@/g,c.shortDayNames[h]);b=b.replace(/@PP@/g,t);b=b.replace(/@P@/g,h);return b=12>k?b.replace(/@A@/g,c.amString):b.replace(/@A@/g,c.pmString)};d.changeDate=
function(a,b,c,e,g){if(d.useUTC)return d.changeUTCDate(a,b,c,e,g);var f=-1;void 0===e&&(e=!0);void 0===g&&(g=!1);!0===e&&(f=1);switch(b){case "YYYY":a.setFullYear(a.getFullYear()+c*f);e||g||a.setDate(a.getDate()+1);break;case "MM":b=a.getMonth();a.setMonth(a.getMonth()+c*f);a.getMonth()>b+c*f&&a.setDate(a.getDate()-1);e||g||a.setDate(a.getDate()+1);break;case "DD":a.setDate(a.getDate()+c*f);break;case "WW":a.setDate(a.getDate()+c*f*7);break;case "hh":a.setHours(a.getHours()+c*f);break;case "mm":a.setMinutes(a.getMinutes()+
c*f);break;case "ss":a.setSeconds(a.getSeconds()+c*f);break;case "fff":a.setMilliseconds(a.getMilliseconds()+c*f)}return a};d.changeUTCDate=function(a,b,c,d,g){var f=-1;void 0===d&&(d=!0);void 0===g&&(g=!1);!0===d&&(f=1);switch(b){case "YYYY":a.setUTCFullYear(a.getUTCFullYear()+c*f);d||g||a.setUTCDate(a.getUTCDate()+1);break;case "MM":b=a.getUTCMonth();a.setUTCMonth(a.getUTCMonth()+c*f);a.getUTCMonth()>b+c*f&&a.setUTCDate(a.getUTCDate()-1);d||g||a.setUTCDate(a.getUTCDate()+1);break;case "DD":a.setUTCDate(a.getUTCDate()+
c*f);break;case "WW":a.setUTCDate(a.getUTCDate()+c*f*7);break;case "hh":a.setUTCHours(a.getUTCHours()+c*f);break;case "mm":a.setUTCMinutes(a.getUTCMinutes()+c*f);break;case "ss":a.setUTCSeconds(a.getUTCSeconds()+c*f);break;case "fff":a.setUTCMilliseconds(a.getUTCMilliseconds()+c*f)}return a}})();


/***/ }),

/***/ 607:
/***/ (function(module, exports) {

/*
Plugin Name: amCharts Responsive
Description: This plugin add responsive functionality to JavaScript Charts and Maps.
Author: Martynas Majeris, amCharts
Contributors: Ohad Schneider, Hasan Akgün
Version: 1.0.5
Author URI: http://www.amcharts.com/

Copyright 2015-2017 amCharts

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

	http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

Please note that the above license covers only this plugin. It by all means does
not apply to any other amCharts products that are covered by different licenses.
*/

/*global AmCharts*/

AmCharts.addInitHandler( function( chart ) {
  "use strict";

  if ( chart.responsive === undefined || chart.responsive.ready === true || chart.responsive.enabled !== true )
    return;
  var version = chart.version.split( "." );
  if ( ( version.length < 2 ) || Number( version[ 0 ] ) < 3 || ( Number( version[ 0 ] ) === 3 && Number( version[ 1 ] ) < 13 ) )
    return;

  // a short variable for easy reference
  var r = chart.responsive;

  r.ready = true;
  r.currentRules = {};
  r.overridden = [];

  // preserve animation
  if ( chart.type === "stock" ) {
    if ( 0 > chart.panelsSettings.startDuration ) {
      r.startDuration = chart.panelsSettings.startDuration;
      chart.panelsSettings.startDuration = 0;
    }
  } else {
    if ( undefined !== chart.startDuration && ( 0 < chart.startDuration ) ) {
      r.startDuration = chart.startDuration;
      chart.startDuration = 0;
    }
  }

  // defaults per chart type
  var defaults = {

    /**
     * AmPie
     */
    "pie": [

      /**
       * Disable legend in certain cases
       */
      {
        "maxWidth": 550,
        "legendPosition": "left",
        "overrides": {
          "legend": {
            "enabled": false
          }
        }
      }, {
        "maxWidth": 550,
        "legendPosition": "right",
        "overrides": {
          "legend": {
            "enabled": false
          }
        }
      }, {
        "maxWidth": 150,
        "overrides": {
          "legend": {
            "enabled": false
          }
        }
      }, {
        "maxHeight": 350,
        "legendPosition": "top",
        "overrides": {
          "legend": {
            "enabled": false
          }
        }
      }, {
        "maxHeight": 350,
        "legendPosition": "bottom",
        "overrides": {
          "legend": {
            "enabled": false
          }
        }
      }, {
        "maxHeight": 150,
        "overrides": {
          "legend": {
            "enabled": false
          }
        }
      },

      /**
       * Narrow chart
       */
      {
        "maxWidth": 400,
        "overrides": {
          "labelsEnabled": false
        }
      }, {
        "maxWidth": 100,
        "overrides": {
          "legend": {
            "enabled": false
          }
        }
      },

      /**
       * Short chart
       */
      {
        "maxHeight": 350,
        "overrides": {
          "pullOutRadius": 0
        }
      }, {
        "maxHeight": 200,
        "overrides": {
          "titles": {
            "enabled": false
          },
          "labelsEnabled": false
        }
      },

      /**
       * Supersmall
       */
      {
        "maxWidth": 60,
        "overrides": {
          "autoMargins": false,
          "marginTop": 0,
          "marginBottom": 0,
          "marginLeft": 0,
          "marginRight": 0,
          "radius": "50%",
          "innerRadius": 0,
          "balloon": {
            "enabled": false
          },
          "legend": {
            "enabled": false
          }
        }
      }, {
        "maxHeight": 60,
        "overrides": {
          "marginTop": 0,
          "marginBottom": 0,
          "marginLeft": 0,
          "marginRight": 0,
          "radius": "50%",
          "innerRadius": 0,
          "balloon": {
            "enabled": false
          },
          "legend": {
            "enabled": false
          }
        }
      }
    ],

    /**
     * AmFunnel
     */
    "funnel": [ {
      "maxWidth": 550,
      "legendPosition": "left",
      "overrides": {
        "legend": {
          "enabled": false
        }
      }
    }, {
      "maxWidth": 550,
      "legendPosition": "right",
      "overrides": {
        "legend": {
          "enabled": false
        }
      }
    }, {
      "maxWidth": 150,
      "overrides": {
        "legend": {
          "enabled": false
        }
      }
    }, {
      "maxHeight": 500,
      "legendPosition": "top",
      "overrides": {
        "legend": {
          "enabled": false
        }
      }
    }, {
      "maxHeight": 500,
      "legendPosition": "bottom",
      "overrides": {
        "legend": {
          "enabled": false
        }
      }
    }, {
      "maxHeight": 150,
      "overrides": {
        "legend": {
          "enabled": false
        }
      }
    }, {
      "maxWidth": 400,
      "overrides": {
        "labelsEnabled": false,
        "marginLeft": 10,
        "marginRight": 10,
        "legend": {
          "enabled": false
        }
      }
    }, {
      "maxHeight": 350,
      "overrides": {
        "pullOutRadius": 0,
        "legend": {
          "enabled": false
        }
      }
    }, {
      "maxHeight": 300,
      "overrides": {
        "titles": {
          "enabled": false
        }
      }
    } ],

    /**
     * AmRadar
     */
    "radar": [ {
      "maxWidth": 550,
      "legendPosition": "left",
      "overrides": {
        "legend": {
          "enabled": false
        }
      }
    }, {
      "maxWidth": 550,
      "legendPosition": "right",
      "overrides": {
        "legend": {
          "enabled": false
        }
      }
    }, {
      "maxWidth": 150,
      "overrides": {
        "legend": {
          "enabled": false
        }
      }
    }, {
      "maxHeight": 350,
      "legendPosition": "top",
      "overrides": {
        "legend": {
          "enabled": false
        }
      }
    }, {
      "maxHeight": 350,
      "legendPosition": "bottom",
      "overrides": {
        "legend": {
          "enabled": false
        }
      }
    }, {
      "maxHeight": 150,
      "overrides": {
        "legend": {
          "enabled": false
        }
      }
    }, {
      "maxWidth": 300,
      "overrides": {
        "labelsEnabled": false
      }
    }, {
      "maxWidth": 200,
      "overrides": {
        "autoMargins": false,
        "marginTop": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "marginRight": 0,
        "radius": "50%",
        "titles": {
          "enabled": false
        },
        "valueAxes": {
          "labelsEnabled": false,
          "radarCategoriesEnabled": false
        }
      }
    }, {
      "maxHeight": 300,
      "overrides": {
        "labelsEnabled": false
      }
    }, {
      "maxHeight": 200,
      "overrides": {
        "autoMargins": false,
        "marginTop": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "marginRight": 0,
        "radius": "50%",
        "titles": {
          "enabled": false
        },
        "valueAxes": {
          "radarCategoriesEnabled": false
        }
      }
    }, {
      "maxHeight": 100,
      "overrides": {
        "valueAxes": {
          "labelsEnabled": false
        }
      }
    } ],

    /**
     * AmGauge
     */
    "gauge": [ {
      "maxWidth": 550,
      "legendPosition": "left",
      "overrides": {
        "legend": {
          "enabled": false
        }
      }
    }, {
      "maxWidth": 550,
      "legendPosition": "right",
      "overrides": {
        "legend": {
          "enabled": false
        }
      }
    }, {
      "maxWidth": 150,
      "overrides": {
        "legend": {
          "enabled": false
        }
      }
    }, {
      "maxHeight": 500,
      "legendPosition": "top",
      "overrides": {
        "legend": {
          "enabled": false
        }
      }
    }, {
      "maxHeight": 500,
      "legendPosition": "bottom",
      "overrides": {
        "legend": {
          "enabled": false
        }
      }
    }, {
      "maxHeight": 150,
      "overrides": {
        "legend": {
          "enabled": false
        }
      }
    }, {
      "maxWidth": 200,
      "overrides": {
        "titles": {
          "enabled": false
        },
        "allLabels": {
          "enabled": false
        },
        "axes": {
          "labelsEnabled": false
        }
      }
    }, {
      "maxHeight": 200,
      "overrides": {
        "titles": {
          "enabled": false
        },
        "allLabels": {
          "enabled": false
        },
        "axes": {
          "labelsEnabled": false
        }
      }
    } ],

    /**
     * AmSerial
     */
    "serial": [

      /**
       * Disable legend in certain cases
       */
      {
        "maxWidth": 550,
        "legendPosition": "left",
        "overrides": {
          "legend": {
            "enabled": false
          }
        }
      }, {
        "maxWidth": 550,
        "legendPosition": "right",
        "overrides": {
          "legend": {
            "enabled": false
          }
        }
      }, {
        "maxWidth": 100,
        "overrides": {
          "legend": {
            "enabled": false
          }
        }
      }, {
        "maxHeight": 350,
        "legendPosition": "top",
        "overrides": {
          "legend": {
            "enabled": false
          }
        }
      }, {
        "maxHeight": 350,
        "legendPosition": "bottom",
        "overrides": {
          "legend": {
            "enabled": false
          }
        }
      }, {
        "maxHeight": 100,
        "overrides": {
          "legend": {
            "enabled": false
          }
        }
      },


      /**
       * Narrow chart
       */
      {
        "maxWidth": 350,
        "overrides": {
          "autoMarginOffset": 0,
          "graphs": {
            "hideBulletsCount": 10
          }
        }
      }, {
        "maxWidth": 350,
        "rotate": false,
        "overrides": {
          "marginLeft": 10,
          "marginRight": 10,
          "valueAxes": {
            "ignoreAxisWidth": true,
            "inside": true,
            "title": "",
            "showFirstLabel": false,
            "showLastLabel": false
          },
          "graphs": {
            "bullet": "none"
          }
        }
      }, {
        "maxWidth": 350,
        "rotate": true,
        "overrides": {
          "marginLeft": 10,
          "marginRight": 10,
          "categoryAxis": {
            "ignoreAxisWidth": true,
            "inside": true,
            "title": ""
          }
        }
      }, {
        "maxWidth": 200,
        "rotate": false,
        "overrides": {
          "marginLeft": 10,
          "marginRight": 10,
          "marginTop": 10,
          "marginBottom": 10,
          "categoryAxis": {
            "ignoreAxisWidth": true,
            "labelsEnabled": false,
            "inside": true,
            "title": "",
            "guides": {
              "inside": true
            }
          },
          "valueAxes": {
            "ignoreAxisWidth": true,
            "labelsEnabled": false,
            "axisAlpha": 0,
            "guides": {
              "label": ""
            }
          },
          "legend": {
            "enabled": false
          }
        }
      }, {
        "maxWidth": 200,
        "rotate": true,
        "overrides": {
          "chartScrollbar": {
            "scrollbarHeight": 4,
            "graph": "",
            "resizeEnabled": false
          },
          "categoryAxis": {
            "labelsEnabled": false,
            "axisAlpha": 0,
            "guides": {
              "label": ""
            }
          },
          "legend": {
            "enabled": false
          }
        }
      }, {
        "maxWidth": 100,
        "rotate": false,
        "overrides": {
          "valueAxes": {
            "gridAlpha": 0
          }
        }
      }, {
        "maxWidth": 100,
        "rotate": true,
        "overrides": {
          "categoryAxis": {
            "gridAlpha": 0
          }
        }
      },

      /**
       * Short chart
       */
      {
        "maxHeight": 300,
        "overrides": {
          "autoMarginOffset": 0,
          "graphs": {
            "hideBulletsCount": 10
          }
        }
      }, {
        "maxHeight": 200,
        "rotate": false,
        "overrides": {
          "marginTop": 10,
          "marginBottom": 10,
          "categoryAxis": {
            "ignoreAxisWidth": true,
            "inside": true,
            "title": "",
            "showFirstLabel": false,
            "showLastLabel": false
          }
        }
      }, {
        "maxHeight": 200,
        "rotate": true,
        "overrides": {
          "marginTop": 10,
          "marginBottom": 10,
          "valueAxes": {
            "ignoreAxisWidth": true,
            "inside": true,
            "title": "",
            "showFirstLabel": false,
            "showLastLabel": false
          },
          "graphs": {
            "bullet": "none"
          }
        }
      }, {
        "maxHeight": 150,
        "rotate": false,
        "overrides": {
          "titles": {
            "enabled": false
          },
          "chartScrollbar": {
            "scrollbarHeight": 4,
            "graph": "",
            "resizeEnabled": false
          },
          "categoryAxis": {
            "labelsEnabled": false,
            "ignoreAxisWidth": true,
            "axisAlpha": 0,
            "guides": {
              "label": ""
            }
          }
        }
      }, {
        "maxHeight": 150,
        "rotate": true,
        "overrides": {
          "titles": {
            "enabled": false
          },
          "valueAxes": {
            "labelsEnabled": false,
            "ignoreAxisWidth": true,
            "axisAlpha": 0,
            "guides": {
              "label": ""
            }
          }
        }
      }, {
        "maxHeight": 100,
        "rotate": false,
        "overrides": {
          "valueAxes": {
            "labelsEnabled": false,
            "ignoreAxisWidth": true,
            "axisAlpha": 0,
            "gridAlpha": 0,
            "guides": {
              "label": ""
            }
          }
        }
      }, {
        "maxHeight": 100,
        "rotate": true,
        "overrides": {
          "categoryAxis": {
            "labelsEnabled": false,
            "ignoreAxisWidth": true,
            "axisAlpha": 0,
            "gridAlpha": 0,
            "guides": {
              "label": ""
            }
          }
        }
      },

      /**
       * Really small charts: microcharts and sparklines
       */
      {
        "maxWidth": 100,
        "overrides": {
          "autoMargins": false,
          "marginTop": 0,
          "marginBottom": 0,
          "marginLeft": 0,
          "marginRight": 0,
          "categoryAxis": {
            "labelsEnabled": false
          },
          "valueAxes": {
            "labelsEnabled": false
          }
        }
      }, {
        "maxHeight": 100,
        "overrides": {
          "autoMargins": false,
          "marginTop": 0,
          "marginBottom": 0,
          "marginLeft": 0,
          "marginRight": 0,
          "categoryAxis": {
            "labelsEnabled": false
          },
          "valueAxes": {
            "labelsEnabled": false
          }
        }
      }
    ],

    /**
     * AmXY
     */
    "xy": [

      /**
       * Disable legend in certain cases
       */
      {
        "maxWidth": 550,
        "legendPosition": "left",
        "overrides": {
          "legend": {
            "enabled": false
          }
        }
      }, {
        "maxWidth": 550,
        "legendPosition": "right",
        "overrides": {
          "legend": {
            "enabled": false
          }
        }
      }, {
        "maxWidth": 100,
        "overrides": {
          "legend": {
            "enabled": false
          }
        }
      }, {
        "maxHeight": 350,
        "legendPosition": "top",
        "overrides": {
          "legend": {
            "enabled": false
          }
        }
      }, {
        "maxHeight": 350,
        "legendPosition": "bottom",
        "overrides": {
          "legend": {
            "enabled": false
          }
        }
      }, {
        "maxHeight": 100,
        "overrides": {
          "legend": {
            "enabled": false
          }
        }
      },

      /**
       * Narrow chart
       */
      {
        "maxWidth": 250,
        "overrides": {
          "autoMarginOffset": 0,
          "autoMargins": false,
          "marginTop": 0,
          "marginBottom": 0,
          "marginLeft": 0,
          "marginRight": 0,
          "valueAxes": {
            "inside": true,
            "title": "",
            "showFirstLabel": false,
            "showLastLabel": false
          },
          "legend": {
            "enabled": false
          }
        }
      }, {
        "maxWidth": 150,
        "overrides": {
          "valueyAxes": {
            "labelsEnabled": false,
            "axisAlpha": 0,
            "gridAlpha": 0,
            "guides": {
              "label": ""
            }
          }
        }
      },

      /**
       * Short chart
       */
      {
        "maxHeight": 250,
        "overrides": {
          "autoMarginOffset": 0,
          "autoMargins": false,
          "marginTop": 0,
          "marginBottom": 0,
          "marginLeft": 0,
          "marginRight": 0,
          "valueAxes": {
            "inside": true,
            "title": "",
            "showFirstLabel": false,
            "showLastLabel": false
          },
          "legend": {
            "enabled": false
          }
        }
      }, {
        "maxWidth": 150,
        "overrides": {
          "valueyAxes": {
            "labelsEnabled": false,
            "axisAlpha": 0,
            "gridAlpha": 0,
            "guides": {
              "label": ""
            }
          }
        }
      }
    ],

    /**
     * AmStock
     */
    "stock": [ {
      "maxWidth": 500,
      "overrides": {
        "dataSetSelector": {
          "position": "top"
        },
        "periodSelector": {
          "position": "bottom"
        }
      }
    }, {
      "maxWidth": 400,
      "overrides": {
        "dataSetSelector": {
          "selectText": "",
          "compareText": ""
        },
        "periodSelector": {
          "periodsText": "",
          "inputFieldsEnabled": false
        }
      }
    } ],

    /**
     * AmMap
     */
    "map": [ {
      "maxWidth": 200,
      "overrides": {
        "zoomControl": {
          "zoomControlEnabled": false
        },
        "smallMap": {
          "enabled": false
        },
        "valueLegend": {
          "enabled": false
        },
        "dataProvider": {
          "areas": {
            "descriptionWindowWidth": 160,
            "descriptionWindowRight": 10,
            "descriptionWindowTop": 10
          },
          "images": {
            "descriptionWindowWidth": 160,
            "descriptionWindowRight": 10,
            "descriptionWindowTop": 10
          },
          "lines": {
            "descriptionWindowWidth": 160,
            "descriptionWindowRight": 10,
            "descriptionWindowTop": 10
          }
        }
      }
    }, {
      "maxWidth": 150,
      "overrides": {
        "dataProvider": {
          "areas": {
            "descriptionWindowWidth": 110,
            "descriptionWindowRight": 10,
            "descriptionWindowTop": 10
          },
          "images": {
            "descriptionWindowWidth": 110,
            "descriptionWindowRight": 10,
            "descriptionWindowTop": 10
          },
          "lines": {
            "descriptionWindowWidth": 110,
            "descriptionWindowLeft": 10,
            "descriptionWindowRight": 10
          }
        }
      }
    }, {
      "maxHeight": 200,
      "overrides": {
        "zoomControl": {
          "zoomControlEnabled": false
        },
        "smallMap": {
          "enabled": false
        },
        "valueLegend": {
          "enabled": false
        },
        "dataProvider": {
          "areas": {
            "descriptionWindowHeight": 160,
            "descriptionWindowRight": 10,
            "descriptionWindowTop": 10
          },
          "images": {
            "descriptionWindowHeight": 160,
            "descriptionWindowRight": 10,
            "descriptionWindowTop": 10
          },
          "lines": {
            "descriptionWindowHeight": 160,
            "descriptionWindowRight": 10,
            "descriptionWindowTop": 10
          }
        }
      }
    }, {
      "maxHeight": 150,
      "overrides": {
        "dataProvider": {
          "areas": {
            "descriptionWindowHeight": 110,
            "descriptionWindowRight": 10,
            "descriptionWindowTop": 10
          },
          "images": {
            "descriptionWindowHeight": 110,
            "descriptionWindowRight": 10,
            "descriptionWindowTop": 10
          },
          "lines": {
            "descriptionWindowHeight": 110,
            "descriptionWindowLeft": 10,
            "descriptionWindowRight": 10
          }
        }
      }
    } ]
  };

  var isNullOrUndefined = function( obj ) {
    return ( obj === null ) || ( obj === undefined );
  };

  var isArray = function( obj ) {
    return ( !isNullOrUndefined( obj ) && Object.prototype.toString.call( obj ) === "[object Array]" );
  };

  var isObject = function( obj ) {
    return ( obj !== null && typeof obj === "object" ); //the null check is necessary - recall that typeof null === "object" !
  };

  var findArrayObjectById = function( arr, id ) {
    for ( var i = 0; i < arr.length; i++ ) {
      if ( isObject( arr[ i ] ) && arr[ i ].id === id )
        return arr[ i ];
    }
    return undefined; //we can use undefined as it doesn't have an Id property and so will never be the desired object from the array
  };

  var cloneWithoutPrototypes = function( obj ) {
    if ( !isObject( obj ) ) {
      return obj;
    }

    if ( isArray( obj ) ) {
      return obj.slice(); //effectively clones the array
    }

    var clone = {}; //here is where we lose the prototype
    for ( var property in obj ) {
      if ( Object.prototype.hasOwnProperty.call( obj, property ) ) {
        clone[ property ] = cloneWithoutPrototypes( obj[ property ] );
      }
    }
    return clone;
  };

  var originalValueRetainerPrefix = "{F0578839-A214-4E2D-8D1B-44941ECE8332}_";
  var noOriginalPropertyStub = {};

  var overrideProperty = function( object, property, overrideValue ) {

    var originalValueRetainerProperty = originalValueRetainerPrefix + property;
    if ( !( originalValueRetainerProperty in object ) ) {
      object[ originalValueRetainerProperty ] = ( property in object ) ? object[ property ] : noOriginalPropertyStub;
    }

    object[ property ] = cloneWithoutPrototypes( overrideValue );

    r.overridden.push( {
      object: object,
      property: property
    } );
  };

  var restoreOriginalProperty = function( object, property ) {
    var originalValue = object[ originalValueRetainerPrefix + property ];
    if ( originalValue === noOriginalPropertyStub ) {
      delete object[ property ];
    } else {
      object[ property ] = originalValue;
    }
  };

  var restoreOriginals = function() {
    while ( r.overridden.length > 0 ) {
      var override = r.overridden.pop();
      restoreOriginalProperty( override.object, override.property );
    }
  };

  var redrawChart = function() {
    chart.dataChanged = true;
    if ( chart.type !== "xy" ) {
      chart.marginsUpdated = false;
    }
    chart.zoomOutOnDataUpdate = false;
    chart.validateNow( true );
    restoreOriginalProperty( chart, "zoomOutOnDataUpdate" );
    animateAgain();
  };

  var animateAgain = function() {
    // make the chart animate again
    if ( r.startDuration ) {
      if ( chart.type === "stock" ) {
        chart.panelsSettings.startDuration = r.startDuration;
        for ( var x = 0; x < chart.panels.length; x++ ) {
          chart.panels[ x ].startDuration = r.startDuration;
          chart.panels[ x ].animateAgain();
        }
      } else {
        chart.startDuration = r.startDuration;
        if ( chart.animateAgain !== undefined )
          chart.animateAgain();
      }
      delete r.startDuration;
    }
  }

  var applyConfig = function( current, override ) {

    if ( isNullOrUndefined( override ) ) {
      return;
    }

    for ( var property in override ) {
      if ( !Object.prototype.hasOwnProperty.call( override, property ) ) {
        continue;
      }

      var currentValue = current[ property ];
      var overrideValue = override[ property ];

      //property doesn't exist on current object or it exists as null/undefined => completely override it
      if ( isNullOrUndefined( currentValue ) ) {
        if ( property !== "periodSelector" && property !== "dataSetSelector" ) // do not attempt to override non-existing selectors
          overrideProperty( current, property, overrideValue );
        continue;
      }

      //current value is an array => override method depends on override form
      if ( isArray( currentValue ) ) {

        //override value is an array => override method depends on array elements
        if ( isArray( overrideValue ) ) {

          //current value is an array of non-objects => override the entire array
          //we assume a uniformly-typed array, so checking the first value should suffice
          if ( ( currentValue.length > 0 && !isObject( currentValue[ 0 ] ) ) || ( overrideValue.length > 0 && !isObject( overrideValue[ 0 ] ) ) ) {
            overrideProperty( current, property, overrideValue );
            continue;
          }

          var idPresentOnAllOverrideElements = true;
          for ( var k = 0; k < overrideValue.length; k++ ) {
            if ( isNullOrUndefined( overrideValue[ k ] ) || isNullOrUndefined( overrideValue[ k ].id ) ) {
              idPresentOnAllOverrideElements = false;
              break;
            }
          }

          //Id property is present on all override elements => override elements by ID
          if ( idPresentOnAllOverrideElements ) {
            for ( var i = 0; i < overrideValue.length; i++ ) {
              var correspondingCurrentElement = findArrayObjectById( currentValue, overrideValue[ i ].id );
              if ( correspondingCurrentElement === undefined ) {
                throw ( 'could not find element to override in "' + property + '" with ID: ' + overrideValue[ i ].id );
              }
              applyConfig( correspondingCurrentElement, overrideValue[ i ] );
            }
            continue;
          }

          //Id property is not set on all override elements and there aren't too many overrides => override objects by their index
          if ( overrideValue.length <= currentValue.length ) {
            for ( var l = 0; l < overrideValue.length; l++ ) {
              applyConfig( currentValue[ l ], overrideValue[ l ] );
            }
            continue;
          }

          throw "too many index-based overrides specified for object array property: " + property;
        }

        // override value is a single object => override all current array objects with that object
        if ( isObject( overrideValue ) ) {
          for ( var j = 0; j < currentValue.length; j++ ) {
            applyConfig( currentValue[ j ], overrideValue );
          }
          continue;
        }

        throw ( "non-object override detected for array property: " + property );
      }

      if ( isObject( currentValue ) ) {
        applyConfig( currentValue, overrideValue );
        continue;
      }

      //if we reached this point, the property is defined on the current object but is not an object => override it
      overrideProperty( current, property, overrideValue );
    }
  };

  var checkRules = function() {

    var width = chart.divRealWidth;
    var height = chart.divRealHeight;

    // do nothing if the container is hidden (has no size)
    if ( width === 0 || height === 0 )
      return;

    // update current rules
    var rulesChanged = false;
    for ( var i = 0; i < r.rules.length; i++ ) {
      var rule = r.rules[ i ];

      var ruleMatches =
        ( isNullOrUndefined( rule.minWidth ) || ( rule.minWidth <= width ) ) && ( isNullOrUndefined( rule.maxWidth ) || ( rule.maxWidth >= width ) ) &&
        ( isNullOrUndefined( rule.minHeight ) || ( rule.minHeight <= height ) ) && ( isNullOrUndefined( rule.maxHeight ) || ( rule.maxHeight >= height ) ) &&
        ( isNullOrUndefined( rule.rotate ) || ( rule.rotate === true && chart.rotate === true ) || ( rule.rotate === false && ( isNullOrUndefined( chart.rotate ) || chart.rotate === false ) ) ) &&
        ( isNullOrUndefined( rule.legendPosition ) || ( !isNullOrUndefined( chart.legend ) && !isNullOrUndefined( chart.legend.position ) && chart.legend.position === rule.legendPosition ) );

      if ( ruleMatches ) {
        if ( isNullOrUndefined( r.currentRules[ i ] ) ) {
          r.currentRules[ i ] = true;
          rulesChanged = true;
        }
      } else if ( !isNullOrUndefined( r.currentRules[ i ] ) ) {
        r.currentRules[ i ] = undefined;
        rulesChanged = true;
      }
    }

    if ( !rulesChanged ) {
      animateAgain();
      return;
    }

    restoreOriginals();

    for ( var key in r.currentRules ) {
      if ( !Object.prototype.hasOwnProperty.call( r.currentRules, key ) ) {
        continue;
      }

      if ( !isNullOrUndefined( r.currentRules[ key ] ) ) {
        if ( isNullOrUndefined( r.rules[ key ] ) ) {
          throw "null or undefined rule in index: " + key;
        }
        applyConfig( chart, r.rules[ key ].overrides );
      }
    }

    // TODO - re-apply zooms/slices as necessary
    redrawChart();
  };

  defaults.gantt = defaults.serial;

  if ( !isArray( r.rules ) ) {
    r.rules = defaults[ chart.type ];
  } else if ( r.addDefaultRules !== false ) {
    r.rules = defaults[ chart.type ].concat( r.rules );
  }

  //retain original zoomOutOnDataUpdate value
  overrideProperty( chart, "zoomOutOnDataUpdate", chart.zoomOutOnDataUpdate );

  chart.addListener( "resized", checkRules );
  chart.addListener( "init", checkRules );

}, [ "pie", "serial", "xy", "funnel", "radar", "gauge", "gantt", "stock", "map" ] );

/***/ }),

/***/ 608:
/***/ (function(module, exports) {

(function(){var e=window.AmCharts;e.AmRectangularChart=e.Class({inherits:e.AmCoordinateChart,construct:function(a){e.AmRectangularChart.base.construct.call(this,a);this.theme=a;this.createEvents("zoomed","changed");this.marginRight=this.marginBottom=this.marginTop=this.marginLeft=20;this.depth3D=this.angle=0;this.plotAreaFillColors="#FFFFFF";this.plotAreaFillAlphas=0;this.plotAreaBorderColor="#000000";this.plotAreaBorderAlpha=0;this.maxZoomFactor=20;this.zoomOutButtonImageSize=19;this.zoomOutButtonImage=
"lens";this.zoomOutText="Show all";this.zoomOutButtonColor="#e5e5e5";this.zoomOutButtonAlpha=0;this.zoomOutButtonRollOverAlpha=1;this.zoomOutButtonPadding=8;this.trendLines=[];this.autoMargins=!0;this.marginsUpdated=!1;this.autoMarginOffset=10;e.applyTheme(this,a,"AmRectangularChart")},initChart:function(){e.AmRectangularChart.base.initChart.call(this);this.updateDxy();!this.marginsUpdated&&this.autoMargins&&(this.resetMargins(),this.drawGraphs=!1);this.processScrollbars();this.updateMargins();this.updatePlotArea();
this.updateScrollbars();this.updateTrendLines();this.updateChartCursor();this.updateValueAxes();this.scrollbarOnly||this.updateGraphs()},drawChart:function(){e.AmRectangularChart.base.drawChart.call(this);this.drawPlotArea();if(e.ifArray(this.chartData)){var a=this.chartCursor;a&&a.draw()}},resetMargins:function(){var a={},b;if("xy"==this.type){var c=this.xAxes,d=this.yAxes;for(b=0;b<c.length;b++){var g=c[b];g.ignoreAxisWidth||(g.setOrientation(!0),g.fixAxisPosition(),a[g.position]=!0)}for(b=0;b<
d.length;b++)c=d[b],c.ignoreAxisWidth||(c.setOrientation(!1),c.fixAxisPosition(),a[c.position]=!0)}else{d=this.valueAxes;for(b=0;b<d.length;b++)c=d[b],c.ignoreAxisWidth||(c.setOrientation(this.rotate),c.fixAxisPosition(),a[c.position]=!0);(b=this.categoryAxis)&&!b.ignoreAxisWidth&&(b.setOrientation(!this.rotate),b.fixAxisPosition(),b.fixAxisPosition(),a[b.position]=!0)}a.left&&(this.marginLeft=0);a.right&&(this.marginRight=0);a.top&&(this.marginTop=0);a.bottom&&(this.marginBottom=0);this.fixMargins=
a},measureMargins:function(){var a=this.valueAxes,b,c=this.autoMarginOffset,d=this.fixMargins,g=this.realWidth,h=this.realHeight,f=c,e=c,l=g;b=h;var m;for(m=0;m<a.length;m++)a[m].handleSynchronization(),b=this.getAxisBounds(a[m],f,l,e,b),f=Math.round(b.l),l=Math.round(b.r),e=Math.round(b.t),b=Math.round(b.b);if(a=this.categoryAxis)b=this.getAxisBounds(a,f,l,e,b),f=Math.round(b.l),l=Math.round(b.r),e=Math.round(b.t),b=Math.round(b.b);d.left&&f<c&&(this.marginLeft=Math.round(-f+c),!isNaN(this.minMarginLeft)&&
this.marginLeft<this.minMarginLeft&&(this.marginLeft=this.minMarginLeft));d.right&&l>=g-c&&(this.marginRight=Math.round(l-g+c),!isNaN(this.minMarginRight)&&this.marginRight<this.minMarginRight&&(this.marginRight=this.minMarginRight));d.top&&e<c+this.titleHeight&&(this.marginTop=Math.round(this.marginTop-e+c+this.titleHeight),!isNaN(this.minMarginTop)&&this.marginTop<this.minMarginTop&&(this.marginTop=this.minMarginTop));d.bottom&&b>h-c&&(this.marginBottom=Math.round(this.marginBottom+b-h+c),!isNaN(this.minMarginBottom)&&
this.marginBottom<this.minMarginBottom&&(this.marginBottom=this.minMarginBottom));this.initChart()},getAxisBounds:function(a,b,c,d,g){if(!a.ignoreAxisWidth){var h=a.labelsSet,f=a.tickLength;a.inside&&(f=0);if(h)switch(h=a.getBBox(),a.position){case "top":a=h.y;d>a&&(d=a);break;case "bottom":a=h.y+h.height;g<a&&(g=a);break;case "right":a=h.x+h.width+f+3;c<a&&(c=a);break;case "left":a=h.x-f,b>a&&(b=a)}}return{l:b,t:d,r:c,b:g}},drawZoomOutButton:function(){var a=this;if(!a.zbSet){var b=a.container.set();
a.zoomButtonSet.push(b);var c=a.color,d=a.fontSize,g=a.zoomOutButtonImageSize,h=a.zoomOutButtonImage.replace(/\.[a-z]*$/i,""),f=a.langObj.zoomOutText||a.zoomOutText,k=a.zoomOutButtonColor,l=a.zoomOutButtonAlpha,m=a.zoomOutButtonFontSize,p=a.zoomOutButtonPadding;isNaN(m)||(d=m);(m=a.zoomOutButtonFontColor)&&(c=m);var m=a.zoomOutButton,n;m&&(m.fontSize&&(d=m.fontSize),m.color&&(c=m.color),m.backgroundColor&&(k=m.backgroundColor),isNaN(m.backgroundAlpha)||(a.zoomOutButtonRollOverAlpha=m.backgroundAlpha));
var u=m=0,u=a.pathToImages;if(h){if(e.isAbsolute(h)||void 0===u)u="";n=a.container.image(u+h+a.extension,0,0,g,g);e.setCN(a,n,"zoom-out-image");b.push(n);n=n.getBBox();m=n.width+5}void 0!==f&&(c=e.text(a.container,f,c,a.fontFamily,d,"start"),e.setCN(a,c,"zoom-out-label"),d=c.getBBox(),u=n?n.height/2-3:d.height/2,c.translate(m,u),b.push(c));n=b.getBBox();c=1;e.isModern||(c=0);k=e.rect(a.container,n.width+2*p+5,n.height+2*p-2,k,1,1,k,c);k.setAttr("opacity",l);k.translate(-p,-p);e.setCN(a,k,"zoom-out-bg");
b.push(k);k.toBack();a.zbBG=k;n=k.getBBox();b.translate(a.marginLeftReal+a.plotAreaWidth-n.width+p,a.marginTopReal+p);b.hide();b.mouseover(function(){a.rollOverZB()}).mouseout(function(){a.rollOutZB()}).click(function(){a.clickZB()}).touchstart(function(){a.rollOverZB()}).touchend(function(){a.rollOutZB();a.clickZB()});for(l=0;l<b.length;l++)b[l].attr({cursor:"pointer"});void 0!==a.zoomOutButtonTabIndex&&(b.setAttr("tabindex",a.zoomOutButtonTabIndex),b.setAttr("role","menuitem"),b.keyup(function(b){13==
b.keyCode&&a.clickZB()}));a.zbSet=b}},rollOverZB:function(){this.rolledOverZB=!0;this.zbBG.setAttr("opacity",this.zoomOutButtonRollOverAlpha)},rollOutZB:function(){this.rolledOverZB=!1;this.zbBG.setAttr("opacity",this.zoomOutButtonAlpha)},clickZB:function(){this.rolledOverZB=!1;this.zoomOut()},zoomOut:function(){this.zoomOutValueAxes()},drawPlotArea:function(){var a=this.dx,b=this.dy,c=this.marginLeftReal,d=this.marginTopReal,g=this.plotAreaWidth-1,h=this.plotAreaHeight-1,f=this.plotAreaFillColors,
k=this.plotAreaFillAlphas,l=this.plotAreaBorderColor,m=this.plotAreaBorderAlpha;"object"==typeof k&&(k=k[0]);f=e.polygon(this.container,[0,g,g,0,0],[0,0,h,h,0],f,k,1,l,m,this.plotAreaGradientAngle);e.setCN(this,f,"plot-area");f.translate(c+a,d+b);this.set.push(f);0!==a&&0!==b&&(f=this.plotAreaFillColors,"object"==typeof f&&(f=f[0]),f=e.adjustLuminosity(f,-.15),g=e.polygon(this.container,[0,a,g+a,g,0],[0,b,b,0,0],f,k,1,l,m),e.setCN(this,g,"plot-area-bottom"),g.translate(c,d+h),this.set.push(g),a=e.polygon(this.container,
[0,0,a,a,0],[0,h,h+b,b,0],f,k,1,l,m),e.setCN(this,a,"plot-area-left"),a.translate(c,d),this.set.push(a));(c=this.bbset)&&this.scrollbarOnly&&c.remove()},updatePlotArea:function(){var a=this.updateWidth(),b=this.updateHeight(),c=this.container;this.realWidth=a;this.realWidth=b;c&&this.container.setSize(a,b);var c=this.marginLeftReal,d=this.marginTopReal,a=a-c-this.marginRightReal-this.dx,b=b-d-this.marginBottomReal;1>a&&(a=1);1>b&&(b=1);this.plotAreaWidth=Math.round(a);this.plotAreaHeight=Math.round(b);
this.plotBalloonsSet.translate(c,d)},updateDxy:function(){this.dx=Math.round(this.depth3D*Math.cos(this.angle*Math.PI/180));this.dy=Math.round(-this.depth3D*Math.sin(this.angle*Math.PI/180));this.d3x=Math.round(this.columnSpacing3D*Math.cos(this.angle*Math.PI/180));this.d3y=Math.round(-this.columnSpacing3D*Math.sin(this.angle*Math.PI/180))},updateMargins:function(){var a=this.getTitleHeight();this.titleHeight=a;this.marginTopReal=this.marginTop-this.dy;this.fixMargins&&!this.fixMargins.top&&(this.marginTopReal+=
a);this.marginBottomReal=this.marginBottom;this.marginLeftReal=this.marginLeft;this.marginRightReal=this.marginRight},updateValueAxes:function(){var a=this.valueAxes,b;for(b=0;b<a.length;b++){var c=a[b];this.setAxisRenderers(c);this.updateObjectSize(c)}},setAxisRenderers:function(a){a.axisRenderer=e.RecAxis;a.guideFillRenderer=e.RecFill;a.axisItemRenderer=e.RecItem;a.marginsChanged=!0},updateGraphs:function(){var a=this.graphs,b;for(b=0;b<a.length;b++){var c=a[b];c.index=b;c.rotate=this.rotate;this.updateObjectSize(c)}},
updateObjectSize:function(a){a.width=this.plotAreaWidth-1;a.height=this.plotAreaHeight-1;a.x=this.marginLeftReal;a.y=this.marginTopReal;a.dx=this.dx;a.dy=this.dy},updateChartCursor:function(){var a=this.chartCursor;a&&(a=e.processObject(a,e.ChartCursor,this.theme),this.updateObjectSize(a),this.addChartCursor(a),a.chart=this)},processScrollbars:function(){var a=this.chartScrollbar;a&&(a=e.processObject(a,e.ChartScrollbar,this.theme),this.addChartScrollbar(a))},updateScrollbars:function(){},removeChartCursor:function(){e.callMethod("destroy",
[this.chartCursor]);this.chartCursor=null},zoomTrendLines:function(){var a=this.trendLines,b;for(b=0;b<a.length;b++){var c=a[b];c.valueAxis.recalculateToPercents?c.set&&c.set.hide():(c.x=this.marginLeftReal,c.y=this.marginTopReal,c.draw())}},handleCursorValueZoom:function(){},addTrendLine:function(a){this.trendLines.push(a)},zoomOutValueAxes:function(){for(var a=this.valueAxes,b=0;b<a.length;b++)a[b].zoomOut()},removeTrendLine:function(a){var b=this.trendLines,c;for(c=b.length-1;0<=c;c--)b[c]==a&&
b.splice(c,1)},adjustMargins:function(a,b){var c=a.position,d=a.scrollbarHeight+a.offset;a.enabled&&("top"==c?b?this.marginLeftReal+=d:this.marginTopReal+=d:b?this.marginRightReal+=d:this.marginBottomReal+=d)},getScrollbarPosition:function(a,b,c){var d="bottom",g="top";a.oppositeAxis||(g=d,d="top");a.position=b?"bottom"==c||"left"==c?d:g:"top"==c||"right"==c?d:g},updateChartScrollbar:function(a,b){if(a){a.rotate=b;var c=this.marginTopReal,d=this.marginLeftReal,g=a.scrollbarHeight,h=this.dx,f=this.dy,
e=a.offset;"top"==a.position?b?(a.y=c,a.x=d-g-e):(a.y=c-g+f-e,a.x=d+h):b?(a.y=c+f,a.x=d+this.plotAreaWidth+h+e):(a.y=c+this.plotAreaHeight+e,a.x=this.marginLeftReal)}},showZB:function(a){var b=this.zbSet;a&&(b=this.zoomOutText,""!==b&&b&&this.drawZoomOutButton());if(b=this.zbSet)this.zoomButtonSet.push(b),a?b.show():b.hide(),this.rollOutZB()},handleReleaseOutside:function(a){e.AmRectangularChart.base.handleReleaseOutside.call(this,a);(a=this.chartCursor)&&a.handleReleaseOutside&&a.handleReleaseOutside()},
handleMouseDown:function(a){e.AmRectangularChart.base.handleMouseDown.call(this,a);var b=this.chartCursor;b&&b.handleMouseDown&&!this.rolledOverZB&&b.handleMouseDown(a)},update:function(){e.AmRectangularChart.base.update.call(this);this.chartCursor&&this.chartCursor.update&&this.chartCursor.update()},handleScrollbarValueZoom:function(a){this.relativeZoomValueAxes(a.target.valueAxes,a.relativeStart,a.relativeEnd);this.zoomAxesAndGraphs()},zoomValueScrollbar:function(a){if(a&&a.enabled){var b=a.valueAxes[0],
c=b.relativeStart,d=b.relativeEnd;b.reversed&&(d=1-c,c=1-b.relativeEnd);a.percentZoom(c,d)}},zoomAxesAndGraphs:function(){if(!this.scrollbarOnly){var a=this.valueAxes,b;for(b=0;b<a.length;b++)a[b].zoom(this.start,this.end);a=this.graphs;for(b=0;b<a.length;b++)a[b].zoom(this.start,this.end);(b=this.chartCursor)&&b.clearSelection();this.zoomTrendLines()}},handleValueAxisZoomReal:function(a,b){var c=a.relativeStart,d=a.relativeEnd;if(c>d)var g=c,c=d,d=g;this.relativeZoomValueAxes(b,c,d);this.updateAfterValueZoom()},
updateAfterValueZoom:function(){this.zoomAxesAndGraphs();this.zoomScrollbar()},relativeZoomValueAxes:function(a,b,c){this.hideBalloonReal();b=e.fitToBounds(b,0,1);c=e.fitToBounds(c,0,1);if(b>c){var d=b;b=c;c=d}var d=1/this.maxZoomFactor,g=e.getDecimals(d)+4;c-b<d&&(c=b+(c-b)/2,b=c-d/2,c+=d/2,1<c&&(b-=c-1,c=1),0>b&&(b=0,c=d));b=e.roundTo(b,g);c=e.roundTo(c,g);d=!1;if(a){for(g=0;g<a.length;g++){var h=a[g].zoomToRelativeValues(b,c,!0);h&&(d=h)}this.showZB()}return d},addChartCursor:function(a){e.callMethod("destroy",
[this.chartCursor]);a&&(this.listenTo(a,"moved",this.handleCursorMove),this.listenTo(a,"zoomed",this.handleCursorZoom),this.listenTo(a,"zoomStarted",this.handleCursorZoomStarted),this.listenTo(a,"panning",this.handleCursorPanning),this.listenTo(a,"onHideCursor",this.handleCursorHide));this.chartCursor=a},handleCursorChange:function(){},handleCursorMove:function(a){var b,c=this.valueAxes;for(b=0;b<c.length;b++)if(!a.panning){var d=c[b];d&&d.showBalloon&&d.showBalloon(a.x,a.y)}},handleCursorZoom:function(a){if(this.skipZoomed)this.skipZoomed=
!1;else{var b=this.startX0,c=this.endX0,d=this.endY0,g=this.startY0,e=a.startX,f=a.endX,k=a.startY,l=a.endY;this.startX0=this.endX0=this.startY0=this.endY0=NaN;this.handleCursorZoomReal(b+e*(c-b),b+f*(c-b),g+k*(d-g),g+l*(d-g),a)}},handleCursorHide:function(){var a,b=this.valueAxes;for(a=0;a<b.length;a++)b[a].hideBalloon();b=this.graphs;for(a=0;a<b.length;a++)b[a].hideBalloonReal()}})})();(function(){var e=window.AmCharts;e.AmSerialChart=e.Class({inherits:e.AmRectangularChart,construct:function(a){this.type="serial";e.AmSerialChart.base.construct.call(this,a);this.cname="AmSerialChart";this.theme=a;this.columnSpacing=5;this.columnSpacing3D=0;this.columnWidth=.8;var b=new e.CategoryAxis(a);b.chart=this;this.categoryAxis=b;this.zoomOutOnDataUpdate=!0;this.mouseWheelZoomEnabled=this.mouseWheelScrollEnabled=this.rotate=this.skipZoom=!1;this.minSelectedTime=0;e.applyTheme(this,a,this.cname)},
initChart:function(){e.AmSerialChart.base.initChart.call(this);this.updateCategoryAxis(this.categoryAxis,this.rotate,"categoryAxis");if(this.dataChanged)this.parseData();else this.onDataUpdated();this.drawGraphs=!0},onDataUpdated:function(){var a=this.countColumns(),b=this.chartData,c=this.graphs,d;for(d=0;d<c.length;d++){var g=c[d];g.data=b;g.columnCount=a}0<b.length&&(this.firstTime=this.getStartTime(b[0].time),this.lastTime=this.getEndTime(b[b.length-1].time));this.drawChart();this.autoMargins&&
!this.marginsUpdated?(this.marginsUpdated=!0,this.measureMargins()):this.dispDUpd()},syncGrid:function(){if(this.synchronizeGrid){var a=this.valueAxes,b,c;if(0<a.length){var d=0;for(c=0;c<a.length;c++)b=a[c],d<b.gridCountReal&&(d=b.gridCountReal);var g=!1;for(c=0;c<a.length;c++)if(b=a[c],b.gridCountReal<d){var h=(d-b.gridCountReal)/2,f=g=h;0!==h-Math.round(h)&&(g-=.5,f+=.5);0<=b.min&&0>b.min-g*b.step&&(f+=g,g=0);0>=b.max&&0<b.max+f*b.step&&(g+=f,f=0);h=e.getDecimals(b.step);b.minimum=e.roundTo(b.min-
g*b.step,h);b.maximum=e.roundTo(b.max+f*b.step,h);b.setStep=b.step;g=b.strictMinMax=!0}g&&this.updateAfterValueZoom();for(c=0;c<a.length;c++)b=a[c],b.minimum=NaN,b.maximum=NaN,b.setStep=NaN,b.strictMinMax=!1}}},handleWheelReal:function(a,b){if(!this.wheelBusy){var c=this.categoryAxis,d=c.parseDates,g=c.minDuration(),e=1,f=1;this.mouseWheelZoomEnabled?b||(e=-1):b&&(e=-1);var k=this.chartCursor;if(k){var l=k.mouseX,k=k.mouseY;e!=f&&(l=this.rotate?k/this.plotAreaHeight:l/this.plotAreaWidth,e*=l,f*=1-
l);l=.05*(this.end-this.start);d&&(l=.05*(this.endTime-this.startTime)/g);1>l&&(l=1);e*=l;f*=l;if(!d||c.equalSpacing)e=Math.round(e),f=Math.round(f)}k=this.chartData.length;c=this.lastTime;l=this.firstTime;0>a?d?(k=this.endTime-this.startTime,d=this.startTime+e*g,g=this.endTime+f*g,0<f&&0<e&&g>=c&&(g=c,d=c-k),this.zoomToDates(new Date(d),new Date(g))):(0<f&&0<e&&this.end>=k-1&&(e=f=0),d=this.start+e,g=this.end+f,this.zoomToIndexes(d,g)):d?(k=this.endTime-this.startTime,d=this.startTime-e*g,g=this.endTime-
f*g,0<f&&0<e&&d<=l&&(d=l,g=l+k),this.zoomToDates(new Date(d),new Date(g))):(0<f&&0<e&&1>this.start&&(e=f=0),d=this.start-e,g=this.end-f,this.zoomToIndexes(d,g))}},validateData:function(a){this.marginsUpdated=!1;this.zoomOutOnDataUpdate&&!a&&(this.endTime=this.end=this.startTime=this.start=NaN);var b=a=!1,c=!1,d=this.chartScrollbar;d&&(d.dragging&&(a=!0,d.handleDragStop()),d.resizingRight&&(c=!0,d.rightDragStop()),d.resizingLeft&&(b=!0,d.leftDragStop()));e.AmSerialChart.base.validateData.call(this);
a&&d.handleDragStart();c&&d.rightDragStart();b&&d.leftDragStart()},drawChart:function(){if(0<this.realWidth&&0<this.realHeight){e.AmSerialChart.base.drawChart.call(this);var a=this.chartData;if(e.ifArray(a)){var b=this.chartScrollbar;!b||!this.marginsUpdated&&this.autoMargins||b.draw();(b=this.valueScrollbar)&&b.draw();var b=a.length-1,c,d;c=this.categoryAxis;if(c.parseDates&&!c.equalSpacing){if(c=this.startTime,d=this.endTime,isNaN(c)||isNaN(d))c=this.firstTime,d=this.lastTime}else{c=this.start;
d=this.end;if(isNaN(c)||isNaN(d))d=c=NaN;isNaN(c)&&(isNaN(this.startTime)||(c=this.getClosestIndex(a,"time",this.startTime,!0,0,a.length)));isNaN(d)&&(isNaN(this.endTime)||(d=this.getClosestIndex(a,"time",this.endTime,!1,0,a.length)));if(isNaN(c)||isNaN(d))c=0,d=b}this.endTime=this.startTime=this.end=this.start=void 0;this.zoom(c,d)}}else this.cleanChart()},cleanChart:function(){e.callMethod("destroy",[this.valueAxes,this.graphs,this.categoryAxis,this.chartScrollbar,this.chartCursor,this.valueScrollbar])},
updateCategoryAxis:function(a,b,c){a.chart=this;a.id=c;a.rotate=b;a.setOrientation(!this.rotate);a.init();this.setAxisRenderers(a);this.updateObjectSize(a)},updateValueAxes:function(){e.AmSerialChart.base.updateValueAxes.call(this);var a=this.valueAxes,b;for(b=0;b<a.length;b++){var c=a[b],d=this.rotate;c.rotate=d;c.setOrientation(d);d=this.categoryAxis;if(!d.startOnAxis||d.parseDates)c.expandMinMax=!0}},getStartTime:function(a){var b=this.categoryAxis;return e.resetDateToMin(new Date(a),b.minPeriod,
1,b.firstDayOfWeek).getTime()},getEndTime:function(a){var b=e.extractPeriod(this.categoryAxis.minPeriod);return e.changeDate(new Date(a),b.period,b.count,!0).getTime()-1},updateMargins:function(){e.AmSerialChart.base.updateMargins.call(this);var a=this.chartScrollbar;a&&(this.getScrollbarPosition(a,this.rotate,this.categoryAxis.position),this.adjustMargins(a,this.rotate));if(a=this.valueScrollbar)this.getScrollbarPosition(a,!this.rotate,this.valueAxes[0].position),this.adjustMargins(a,!this.rotate)},
updateScrollbars:function(){e.AmSerialChart.base.updateScrollbars.call(this);this.updateChartScrollbar(this.chartScrollbar,this.rotate);this.updateChartScrollbar(this.valueScrollbar,!this.rotate)},zoom:function(a,b){var c=this.categoryAxis;c.parseDates&&!c.equalSpacing?(this.timeZoom(a,b),isNaN(a)&&this.zoomOutValueAxes()):this.indexZoom(a,b);(c=this.chartCursor)&&(c.pan||c.hideCursorReal());this.updateLegendValues()},timeZoom:function(a,b){var c=this.maxSelectedTime;isNaN(c)||(b!=this.endTime&&b-
a>c&&(a=b-c),a!=this.startTime&&b-a>c&&(b=a+c));var d=this.minSelectedTime;if(0<d&&b-a<d){var g=Math.round(a+(b-a)/2),d=Math.round(d/2);a=g-d;b=g+d}d=this.chartData;g=this.categoryAxis;if(e.ifArray(d)&&(a!=this.startTime||b!=this.endTime)){var h=g.minDuration(),f=this.firstTime,k=this.lastTime;a||(a=f,isNaN(c)||(a=k-c));b||(b=k);a>k&&(a=k);b<f&&(b=f);a<f&&(a=f);b>k&&(b=k);b<a&&(b=a+h);b-a<h/5&&(b<k?b=a+h/5:a=b-h/5);this.startTime=a;this.endTime=b;c=d.length-1;h=this.getClosestIndex(d,"time",a,!0,
0,c);d=this.getClosestIndex(d,"time",b,!1,h,c);g.timeZoom(a,b);g.zoom(h,d);this.start=e.fitToBounds(h,0,c);this.end=e.fitToBounds(d,0,c);this.zoomAxesAndGraphs();this.zoomScrollbar();this.fixCursor();this.showZB();this.syncGrid();this.updateColumnsDepth();this.dispatchTimeZoomEvent()}},showZB:function(){var a,b=this.categoryAxis;b&&b.parseDates&&!b.equalSpacing&&(this.startTime>this.firstTime&&(a=!0),this.endTime<this.lastTime&&(a=!0));0<this.start&&(a=!0);this.end<this.chartData.length-1&&(a=!0);
if(b=this.valueAxes)b=b[0],isNaN(b.relativeStart)||(0!==e.roundTo(b.relativeStart,3)&&(a=!0),1!=e.roundTo(b.relativeEnd,3)&&(a=!0));e.AmSerialChart.base.showZB.call(this,a)},updateAfterValueZoom:function(){e.AmSerialChart.base.updateAfterValueZoom.call(this);this.updateColumnsDepth()},indexZoom:function(a,b){var c=this.maxSelectedSeries,d=!1;isNaN(c)||(b!=this.end&&b-a>c&&(a=b-c,d=!0),a!=this.start&&b-a>c&&(b=a+c,d=!0));if(d&&(d=this.chartScrollbar)&&d.dragger){var g=d.dragger.getBBox();d.maxWidth=
g.width;d.maxHeight=g.height}if(a!=this.start||b!=this.end)d=this.chartData.length-1,isNaN(a)&&(a=0,isNaN(c)||(a=d-c)),isNaN(b)&&(b=d),b<a&&(b=a),b>d&&(b=d),a>d&&(a=d-1),0>a&&(a=0),this.start=a,this.end=b,this.categoryAxis.zoom(a,b),this.zoomAxesAndGraphs(),this.zoomScrollbar(),this.fixCursor(),0!==a||b!=this.chartData.length-1?this.showZB(!0):this.showZB(!1),this.syncGrid(),this.updateColumnsDepth(),this.dispatchIndexZoomEvent()},updateGraphs:function(){e.AmSerialChart.base.updateGraphs.call(this);
var a=this.graphs,b;for(b=0;b<a.length;b++){var c=a[b];c.columnWidthReal=this.columnWidth;c.categoryAxis=this.categoryAxis;e.isString(c.fillToGraph)&&(c.fillToGraph=this.graphsById[c.fillToGraph])}},zoomAxesAndGraphs:function(){e.AmSerialChart.base.zoomAxesAndGraphs.call(this);this.updateColumnsDepth()},updateColumnsDepth:function(){if(0!==this.depth3D||0!==this.angle){var a,b=this.graphs,c;this.columnsArray=[];for(a=0;a<b.length;a++){c=b[a];var d=c.columnsArray;if(d){var g;for(g=0;g<d.length;g++)this.columnsArray.push(d[g])}}this.columnsArray.sort(this.compareDepth);
b=this.columnsSet;if(0<this.columnsArray.length){d=this.container.set();this.columnSet.push(d);for(a=0;a<this.columnsArray.length;a++)d.push(this.columnsArray[a].column.set);c&&d.translate(c.x,c.y);this.columnsSet=d}e.remove(b)}},compareDepth:function(a,b){return a.depth>b.depth?1:-1},zoomScrollbar:function(){var a=this.chartScrollbar,b=this.categoryAxis;if(a){if(!this.zoomedByScrollbar){var c=a.dragger;c&&c.stop()}this.zoomedByScrollbar=!1;b.parseDates&&!b.equalSpacing?a.timeZoom(this.startTime,
this.endTime):a.zoom(this.start,this.end)}this.zoomValueScrollbar(this.valueScrollbar)},updateTrendLines:function(){var a=this.trendLines,b;for(b=0;b<a.length;b++){var c=a[b],c=e.processObject(c,e.TrendLine,this.theme);a[b]=c;c.chart=this;c.id||(c.id="trendLineAuto"+b+"_"+(new Date).getTime());e.isString(c.valueAxis)&&(c.valueAxis=this.getValueAxisById(c.valueAxis));c.valueAxis||(c.valueAxis=this.valueAxes[0]);c.categoryAxis=this.categoryAxis}},validateNow:function(a,b){a&&this.zoomOutOnDataUpdate&&
(this.endTime=this.end=this.startTime=this.start=NaN);e.AmSerialChart.base.validateNow.call(this,a,b)},countColumns:function(){var a=0,b=this.valueAxes.length,c=this.graphs.length,d,g,e=!1,f,k;for(k=0;k<b;k++){g=this.valueAxes[k];var l=g.stackType,m=0;if("100%"==l||"regular"==l)for(e=!1,f=0;f<c;f++)d=this.graphs[f],d.tcc=1,d.valueAxis==g&&"column"==d.type&&(!e&&d.stackable&&(a++,e=!0),(!d.stackable&&d.clustered||d.newStack&&0!==m)&&a++,d.columnIndex=a-1,d.clustered||(d.columnIndex=0),m++);if("none"==
l||"3d"==l){m=!1;for(f=0;f<c;f++)d=this.graphs[f],d.valueAxis==g&&"column"==d.type&&(d.clustered?(d.tcc=1,d.newStack&&(a=0),d.hidden||(d.columnIndex=a,a++)):d.hidden||(m=!0,d.tcc=1,d.columnIndex=0));m&&0===a&&(a=1)}if("3d"==l){g=1;for(m=0;m<c;m++)d=this.graphs[m],d.newStack&&g++,d.depthCount=g,d.tcc=a;a=g}}return a},parseData:function(){e.AmSerialChart.base.parseData.call(this);this.parseSerialData(this.dataProvider)},getCategoryIndexByValue:function(a){var b=this.chartData,c;for(c=0;c<b.length;c++)if(b[c].category==
a)return c},handleScrollbarZoom:function(a){this.zoomedByScrollbar=!0;this.zoom(a.start,a.end)},dispatchTimeZoomEvent:function(){if(this.drawGraphs&&(this.prevStartTime!=this.startTime||this.prevEndTime!=this.endTime)){var a={type:"zoomed"};a.startDate=new Date(this.startTime);a.endDate=new Date(this.endTime);a.startIndex=this.start;a.endIndex=this.end;this.startIndex=this.start;this.endIndex=this.end;this.startDate=a.startDate;this.endDate=a.endDate;this.prevStartTime=this.startTime;this.prevEndTime=
this.endTime;var b=this.categoryAxis,c=e.extractPeriod(b.minPeriod).period,b=b.dateFormatsObject[c];a.startValue=e.formatDate(a.startDate,b,this);a.endValue=e.formatDate(a.endDate,b,this);a.chart=this;a.target=this;this.fire(a)}},dispatchIndexZoomEvent:function(){if(this.drawGraphs&&(this.prevStartIndex!=this.start||this.prevEndIndex!=this.end)){this.startIndex=this.start;this.endIndex=this.end;var a=this.chartData;if(e.ifArray(a)&&!isNaN(this.start)&&!isNaN(this.end)){var b={chart:this,target:this,
type:"zoomed"};b.startIndex=this.start;b.endIndex=this.end;b.startValue=a[this.start].category;b.endValue=a[this.end].category;this.categoryAxis.parseDates&&(this.startTime=a[this.start].time,this.endTime=a[this.end].time,b.startDate=new Date(this.startTime),b.endDate=new Date(this.endTime));this.prevStartIndex=this.start;this.prevEndIndex=this.end;this.fire(b)}}},updateLegendValues:function(){this.legend&&this.legend.updateValues()},getClosestIndex:function(a,b,c,d,g,e){0>g&&(g=0);e>a.length-1&&
(e=a.length-1);var f=g+Math.round((e-g)/2),k=a[f][b];return c==k?f:1>=e-g?d?g:Math.abs(a[g][b]-c)<Math.abs(a[e][b]-c)?g:e:c==k?f:c<k?this.getClosestIndex(a,b,c,d,g,f):this.getClosestIndex(a,b,c,d,f,e)},zoomToIndexes:function(a,b){var c=this.chartData;if(c){var d=c.length;0<d&&(0>a&&(a=0),b>d-1&&(b=d-1),d=this.categoryAxis,d.parseDates&&!d.equalSpacing?this.zoom(c[a].time,this.getEndTime(c[b].time)):this.zoom(a,b))}},zoomToDates:function(a,b){var c=this.chartData;if(c)if(this.categoryAxis.equalSpacing){var d=
this.getClosestIndex(c,"time",a.getTime(),!0,0,c.length);b=e.resetDateToMin(b,this.categoryAxis.minPeriod,1);c=this.getClosestIndex(c,"time",b.getTime(),!1,0,c.length);this.zoom(d,c)}else this.zoom(a.getTime(),b.getTime())},zoomToCategoryValues:function(a,b){this.chartData&&this.zoom(this.getCategoryIndexByValue(a),this.getCategoryIndexByValue(b))},formatPeriodString:function(a,b){if(b){b.periodDataItem={};b.periodPercentDataItem={};var c=["value","open","low","high","close"],d="value open low high close average sum count".split(" "),
g=b.valueAxis,h=this.chartData,f=b.numberFormatter;f||(f=this.nf);for(var k=0;k<c.length;k++){for(var l=c[k],m=0,p=0,n=0,u=0,v,x,E,t,r,B,q,w,y,C,F=this.start;F<=this.end;F++){var D=h[F];if(D){var A=D.axes[g.id].graphs[b.id];if(A){if(A.values){var z=A.values[l],D=D.x.categoryAxis;if(this.rotate){if(0>D||D>A.graph.height)z=NaN}else if(0>D||D>A.graph.width)z=NaN;if(!isNaN(z)){isNaN(v)&&(v=z);x=z;if(isNaN(E)||E>z)E=z;if(isNaN(t)||t<z)t=z;r=e.getDecimals(m);D=e.getDecimals(z);m+=z;m=e.roundTo(m,Math.max(r,
D));p++;r=m/p}}if(A.percents&&(A=A.percents[l],!isNaN(A))){isNaN(B)&&(B=A);q=A;if(isNaN(w)||w>A)w=A;if(isNaN(y)||y<A)y=A;C=e.getDecimals(n);z=e.getDecimals(A);n+=A;n=e.roundTo(n,Math.max(C,z));u++;C=n/u}}}}m={open:v,close:x,high:t,low:E,average:r,sum:m,count:p};n={open:B,close:q,high:y,low:w,average:C,sum:n,count:u};a=e.formatValue(a,m,d,f,l+"\\.",this.usePrefixes,this.prefixesOfSmallNumbers,this.prefixesOfBigNumbers);a=e.formatValue(a,n,d,this.pf,"percents\\."+l+"\\.");b.periodDataItem[l]=m;b.periodPercentDataItem[l]=
n}}return a=e.cleanFromEmpty(a)},formatString:function(a,b,c){if(b){var d=b.graph;if(void 0!==a){if(-1!=a.indexOf("[[category]]")){var g=b.serialDataItem.category;if(this.categoryAxis.parseDates){var h=this.balloonDateFormat,f=this.chartCursor;f&&f.categoryBalloonDateFormat&&(h=f.categoryBalloonDateFormat);h=e.formatDate(g,h,this);-1!=h.indexOf("fff")&&(h=e.formatMilliseconds(h,g));g=h}a=a.replace(/\[\[category\]\]/g,String(g.replace("$","$$$")))}g=d.numberFormatter;g||(g=this.nf);h=b.graph.valueAxis;
(f=h.duration)&&!isNaN(b.values.value)&&(f=e.formatDuration(b.values.value,f,"",h.durationUnits,h.maxInterval,g),a=a.replace(RegExp("\\[\\[value\\]\\]","g"),f));"date"==h.type&&(h=e.formatDate(new Date(b.values.value),d.dateFormat,this),f=RegExp("\\[\\[value\\]\\]","g"),a=a.replace(f,h),h=e.formatDate(new Date(b.values.open),d.dateFormat,this),f=RegExp("\\[\\[open\\]\\]","g"),a=a.replace(f,h));d="value open low high close total".split(" ");h=this.pf;a=e.formatValue(a,b.percents,d,h,"percents\\.");
a=e.formatValue(a,b.values,d,g,"",this.usePrefixes,this.prefixesOfSmallNumbers,this.prefixesOfBigNumbers);a=e.formatValue(a,b.values,["percents"],h);-1!=a.indexOf("[[")&&(a=e.formatDataContextValue(a,b.dataContext));-1!=a.indexOf("[[")&&b.graph.customData&&(a=e.formatDataContextValue(a,b.graph.customData));a=e.AmSerialChart.base.formatString.call(this,a,b,c)}return a}},updateChartCursor:function(){e.AmSerialChart.base.updateChartCursor.call(this);var a=this.chartCursor,b=this.categoryAxis;if(a){var c=
a.categoryBalloonAlpha,d=a.categoryBalloonColor,g=a.color;void 0===d&&(d=a.cursorColor);var h=a.valueZoomable,f=a.zoomable,k=a.valueLineEnabled;this.rotate?(a.vLineEnabled=k,a.hZoomEnabled=h,a.vZoomEnabled=f):(a.hLineEnabled=k,a.vZoomEnabled=h,a.hZoomEnabled=f);if(a.valueLineBalloonEnabled)for(k=0;k<this.valueAxes.length;k++)h=this.valueAxes[k],(f=h.balloon)||(f={}),f=e.extend(f,this.balloon,!0),f.fillColor=d,f.balloonColor=d,f.fillAlpha=c,f.borderColor=d,f.color=g,h.balloon=f;else for(f=0;f<this.valueAxes.length;f++)h=
this.valueAxes[f],h.balloon&&(h.balloon=null);b&&(b.balloonTextFunction=a.categoryBalloonFunction,a.categoryLineAxis=b,b.balloonText=a.categoryBalloonText,a.categoryBalloonEnabled&&((f=b.balloon)||(f={}),f=e.extend(f,this.balloon,!0),f.fillColor=d,f.balloonColor=d,f.fillAlpha=c,f.borderColor=d,f.color=g,b.balloon=f),b.balloon&&(b.balloon.enabled=a.categoryBalloonEnabled))}},addChartScrollbar:function(a){e.callMethod("destroy",[this.chartScrollbar]);a&&(a.chart=this,this.listenTo(a,"zoomed",this.handleScrollbarZoom));
this.rotate?void 0===a.width&&(a.width=a.scrollbarHeight):void 0===a.height&&(a.height=a.scrollbarHeight);a.gridAxis=this.categoryAxis;this.chartScrollbar=a},addValueScrollbar:function(a){e.callMethod("destroy",[this.valueScrollbar]);a&&(a.chart=this,this.listenTo(a,"zoomed",this.handleScrollbarValueZoom),this.listenTo(a,"zoomStarted",this.handleCursorZoomStarted));var b=a.scrollbarHeight;this.rotate?void 0===a.height&&(a.height=b):void 0===a.width&&(a.width=b);a.gridAxis||(a.gridAxis=this.valueAxes[0]);
a.valueAxes=this.valueAxes;this.valueScrollbar=a},removeChartScrollbar:function(){e.callMethod("destroy",[this.chartScrollbar]);this.chartScrollbar=null},removeValueScrollbar:function(){e.callMethod("destroy",[this.valueScrollbar]);this.valueScrollbar=null},handleReleaseOutside:function(a){e.AmSerialChart.base.handleReleaseOutside.call(this,a);e.callMethod("handleReleaseOutside",[this.chartScrollbar,this.valueScrollbar])},update:function(){e.AmSerialChart.base.update.call(this);this.chartScrollbar&&
this.chartScrollbar.update&&this.chartScrollbar.update();this.valueScrollbar&&this.valueScrollbar.update&&this.valueScrollbar.update()},processScrollbars:function(){e.AmSerialChart.base.processScrollbars.call(this);var a=this.valueScrollbar;a&&(a=e.processObject(a,e.ChartScrollbar,this.theme),a.id="valueScrollbar",this.addValueScrollbar(a))},handleValueAxisZoom:function(a){this.handleValueAxisZoomReal(a,this.valueAxes)},zoomOut:function(){e.AmSerialChart.base.zoomOut.call(this);this.zoom();this.syncGrid()},
getNextItem:function(a){var b=a.index,c=this.chartData,d=a.graph;if(b+1<c.length)for(b+=1;b<c.length;b++)if(a=c[b])if(a=a.axes[d.valueAxis.id].graphs[d.id],!isNaN(a.y))return a},handleCursorZoomReal:function(a,b,c,d,e){var h=e.target,f,k;this.rotate?(isNaN(a)||isNaN(b)||this.relativeZoomValueAxes(this.valueAxes,a,b)&&this.updateAfterValueZoom(),h.vZoomEnabled&&(f=e.start,k=e.end)):(isNaN(c)||isNaN(d)||this.relativeZoomValueAxes(this.valueAxes,c,d)&&this.updateAfterValueZoom(),h.hZoomEnabled&&(f=e.start,
k=e.end));isNaN(f)||isNaN(k)||(a=this.categoryAxis,a.parseDates&&!a.equalSpacing?this.zoomToDates(new Date(f),new Date(k)):this.zoomToIndexes(f,k))},handleCursorZoomStarted:function(){var a=this.valueAxes;if(a){var a=a[0],b=a.relativeStart,c=a.relativeEnd;a.reversed&&(b=1-a.relativeEnd,c=1-a.relativeStart);this.rotate?(this.startX0=b,this.endX0=c):(this.startY0=b,this.endY0=c)}this.categoryAxis&&(this.start0=this.start,this.end0=this.end,this.startTime0=this.startTime,this.endTime0=this.endTime)},
fixCursor:function(){this.chartCursor&&this.chartCursor.fixPosition();this.prevCursorItem=null},handleCursorMove:function(a){e.AmSerialChart.base.handleCursorMove.call(this,a);var b=a.target,c=this.categoryAxis;if(a.panning)this.handleCursorHide(a);else if(this.chartData&&!b.isHidden){var d=this.graphs;if(d){var g;g=c.xToIndex(this.rotate?a.y:a.x);if(g=this.chartData[g]){var h,f,k,l;if(b.oneBalloonOnly&&b.valueBalloonsEnabled){var m=Infinity;for(h=d.length-1;0<=h;h--)if(f=d[h],f.balloon.enabled&&
f.showBalloon&&!f.hidden){k=f.valueAxis.id;k=g.axes[k].graphs[f.id];if(b.showNextAvailable&&isNaN(k.y)&&(k=this.getNextItem(k),!k))continue;k=k.y;"top"==f.showBalloonAt&&(k=0);"bottom"==f.showBalloonAt&&(k=this.height);var p=b.mouseX,n=b.mouseY;k=this.rotate?Math.abs(p-k):Math.abs(n-k);k<m&&(m=k,l=f)}b.mostCloseGraph=l}if(this.prevCursorItem!=g||l!=this.prevMostCloseGraph){m=[];for(h=0;h<d.length;h++){f=d[h];k=f.valueAxis.id;k=g.axes[k].graphs[f.id];if(b.showNextAvailable&&isNaN(k.y)&&(k=this.getNextItem(k),
!k&&f.balloon)){f.balloon.hide();continue}l&&f!=l?(f.showGraphBalloon(k,b.pointer,!1,b.graphBulletSize,b.graphBulletAlpha),f.balloon.hide(0)):b.valueBalloonsEnabled?(f.balloon.showBullet=b.bulletsEnabled,f.balloon.bulletSize=b.bulletSize/2,a.hideBalloons||(f.showGraphBalloon(k,b.pointer,!1,b.graphBulletSize,b.graphBulletAlpha),f.balloon.set&&m.push({balloon:f.balloon,y:f.balloon.pointToY}))):(f.currentDataItem=k,f.resizeBullet(k,b.graphBulletSize,b.graphBulletAlpha))}b.avoidBalloonOverlapping&&this.arrangeBalloons(m);
this.prevCursorItem=g}this.prevMostCloseGraph=l}}d=e.fitToBounds(a.x,0,b.width);l=e.fitToBounds(a.y,0,b.height);c.showBalloon(d,l,b.categoryBalloonDateFormat,a.skip);this.updateLegendValues()}},handleCursorHide:function(a){e.AmSerialChart.base.handleCursorHide.call(this,a);a=this.categoryAxis;this.prevCursorItem=null;this.updateLegendValues();a&&a.hideBalloon();a=this.graphs;var b;for(b=0;b<a.length;b++)a[b].currentDataItem=null},handleCursorPanning:function(a){var b=a.target,c,d=a.deltaX,g=a.deltaY,
h=a.delta2X,f=a.delta2Y;a=!1;if(this.rotate){isNaN(h)&&(h=d,a=!0);var k=this.endX0;c=this.startX0;var l=k-c,k=k-l*h,m=l;a||(m=0);a=e.fitToBounds(c-l*d,0,1-m)}else isNaN(f)&&(f=g,a=!0),k=this.endY0,c=this.startY0,l=k-c,k+=l*g,m=l,a||(m=0),a=e.fitToBounds(c+l*f,0,1-m);c=e.fitToBounds(k,m,1);var p;b.valueZoomable&&(p=this.relativeZoomValueAxes(this.valueAxes,a,c));var n;c=this.categoryAxis;this.rotate&&(d=g,h=f);a=!1;isNaN(h)&&(h=d,a=!0);if(b.zoomable&&(0<Math.abs(d)||0<Math.abs(h)))if(c.parseDates&&
!c.equalSpacing){if(f=this.startTime0,g=this.endTime0,c=g-f,h*=c,l=this.firstTime,k=this.lastTime,m=c,a||(m=0),a=Math.round(e.fitToBounds(f-c*d,l,k-m)),h=Math.round(e.fitToBounds(g-h,l+m,k)),this.startTime!=a||this.endTime!=h)n={chart:this,target:b,type:"zoomed",start:a,end:h},this.skipZoomed=!0,b.fire(n),this.zoom(a,h),n=!0}else if(f=this.start0,g=this.end0,c=g-f,d=Math.round(c*d),h=Math.round(c*h),l=this.chartData.length-1,a||(c=0),a=e.fitToBounds(f-d,0,l-c),c=e.fitToBounds(g-h,c,l),this.start!=
a||this.end!=c)this.skipZoomed=!0,b.fire({chart:this,target:b,type:"zoomed",start:a,end:c}),this.zoom(a,c),n=!0;!n&&p&&this.updateAfterValueZoom()},arrangeBalloons:function(a){var b=this.plotAreaHeight;a.sort(this.compareY);var c,d,e,h=this.plotAreaWidth,f=a.length;for(c=0;c<f;c++)d=a[c].balloon,d.setBounds(0,0,h,b),d.restorePrevious(),d.draw(),b=d.yPos-3;a.reverse();for(c=0;c<f;c++){d=a[c].balloon;var b=d.bottom,k=d.bottom-d.yPos;0<c&&b-k<e+3&&d.setBounds&&(d.setBounds(0,e+3,h,e+k+3),d.restorePrevious(),
d.draw());d.set&&d.set.show();e=d.bottom}},compareY:function(a,b){return a.y<b.y?1:-1}})})();(function(){var e=window.AmCharts;e.Cuboid=e.Class({construct:function(a,b,c,d,e,h,f,k,l,m,p,n,u,v,x,E,t){this.set=a.set();this.container=a;this.h=Math.round(c);this.w=Math.round(b);this.dx=d;this.dy=e;this.colors=h;this.alpha=f;this.bwidth=k;this.bcolor=l;this.balpha=m;this.dashLength=v;this.topRadius=E;this.pattern=x;this.rotate=u;this.bcn=t;u?0>b&&0===p&&(p=180):0>c&&270==p&&(p=90);this.gradientRotation=p;0===d&&0===e&&(this.cornerRadius=n);this.draw()},draw:function(){var a=this.set;a.clear();
var b=this.container,c=b.chart,d=this.w,g=this.h,h=this.dx,f=this.dy,k=this.colors,l=this.alpha,m=this.bwidth,p=this.bcolor,n=this.balpha,u=this.gradientRotation,v=this.cornerRadius,x=this.dashLength,E=this.pattern,t=this.topRadius,r=this.bcn,B=k,q=k;"object"==typeof k&&(B=k[0],q=k[k.length-1]);var w,y,C,F,D,A,z,L,M,Q=l;E&&(l=0);var G,H,I,J,K=this.rotate;if(0<Math.abs(h)||0<Math.abs(f))if(isNaN(t))z=q,q=e.adjustLuminosity(B,-.2),q=e.adjustLuminosity(B,-.2),w=e.polygon(b,[0,h,d+h,d,0],[0,f,f,0,0],
q,l,1,p,0,u),0<n&&(M=e.line(b,[0,h,d+h],[0,f,f],p,n,m,x)),y=e.polygon(b,[0,0,d,d,0],[0,g,g,0,0],q,l,1,p,0,u),y.translate(h,f),0<n&&(C=e.line(b,[h,h],[f,f+g],p,n,m,x)),F=e.polygon(b,[0,0,h,h,0],[0,g,g+f,f,0],q,l,1,p,0,u),D=e.polygon(b,[d,d,d+h,d+h,d],[0,g,g+f,f,0],q,l,1,p,0,u),0<n&&(A=e.line(b,[d,d+h,d+h,d],[0,f,g+f,g],p,n,m,x)),q=e.adjustLuminosity(z,.2),z=e.polygon(b,[0,h,d+h,d,0],[g,g+f,g+f,g,g],q,l,1,p,0,u),0<n&&(L=e.line(b,[0,h,d+h],[g,g+f,g+f],p,n,m,x));else{var N,O,P;K?(N=g/2,q=h/2,P=g/2,O=
d+h/2,H=Math.abs(g/2),G=Math.abs(h/2)):(q=d/2,N=f/2,O=d/2,P=g+f/2+1,G=Math.abs(d/2),H=Math.abs(f/2));I=G*t;J=H*t;.1<G&&.1<G&&(w=e.circle(b,G,B,l,m,p,n,!1,H),w.translate(q,N));.1<I&&.1<I&&(z=e.circle(b,I,e.adjustLuminosity(B,.5),l,m,p,n,!1,J),z.translate(O,P))}l=Q;1>Math.abs(g)&&(g=0);1>Math.abs(d)&&(d=0);!isNaN(t)&&(0<Math.abs(h)||0<Math.abs(f))?(k=[B],k={fill:k,stroke:p,"stroke-width":m,"stroke-opacity":n,"fill-opacity":l},K?(l="M0,0 L"+d+","+(g/2-g/2*t),m=" B",0<d&&(m=" A"),e.VML?(l+=m+Math.round(d-
I)+","+Math.round(g/2-J)+","+Math.round(d+I)+","+Math.round(g/2+J)+","+d+",0,"+d+","+g,l=l+(" L0,"+g)+(m+Math.round(-G)+","+Math.round(g/2-H)+","+Math.round(G)+","+Math.round(g/2+H)+",0,"+g+",0,0")):(l+="A"+I+","+J+",0,0,0,"+d+","+(g-g/2*(1-t))+"L0,"+g,l+="A"+G+","+H+",0,0,1,0,0"),G=90):(m=d/2-d/2*t,l="M0,0 L"+m+","+g,e.VML?(l="M0,0 L"+m+","+g,m=" B",0>g&&(m=" A"),l+=m+Math.round(d/2-I)+","+Math.round(g-J)+","+Math.round(d/2+I)+","+Math.round(g+J)+",0,"+g+","+d+","+g,l+=" L"+d+",0",l+=m+Math.round(d/
2+G)+","+Math.round(H)+","+Math.round(d/2-G)+","+Math.round(-H)+","+d+",0,0,0"):(l+="A"+I+","+J+",0,0,0,"+(d-d/2*(1-t))+","+g+"L"+d+",0",l+="A"+G+","+H+",0,0,1,0,0"),G=180),b=b.path(l).attr(k),b.gradient("linearGradient",[B,e.adjustLuminosity(B,-.3),e.adjustLuminosity(B,-.3),B],G),K?b.translate(h/2,0):b.translate(0,f/2)):b=0===g?e.line(b,[0,d],[0,0],p,n,m,x):0===d?e.line(b,[0,0],[0,g],p,n,m,x):0<v?e.rect(b,d,g,k,l,m,p,n,v,u,x):e.polygon(b,[0,0,d,d,0],[0,g,g,0,0],k,l,m,p,n,u,!1,x);d=isNaN(t)?0>g?[w,
M,y,C,F,D,A,z,L,b]:[z,L,y,C,F,D,w,M,A,b]:K?0<d?[w,b,z]:[z,b,w]:0>g?[w,b,z]:[z,b,w];e.setCN(c,b,r+"front");e.setCN(c,y,r+"back");e.setCN(c,z,r+"top");e.setCN(c,w,r+"bottom");e.setCN(c,F,r+"left");e.setCN(c,D,r+"right");for(w=0;w<d.length;w++)if(y=d[w])a.push(y),e.setCN(c,y,r+"element");E&&b.pattern(E,NaN,c.path)},width:function(a){isNaN(a)&&(a=0);this.w=Math.round(a);this.draw()},height:function(a){isNaN(a)&&(a=0);this.h=Math.round(a);this.draw()},animateHeight:function(a,b){var c=this;c.animationFinished=
!1;c.easing=b;c.totalFrames=a*e.updateRate;c.rh=c.h;c.frame=0;c.height(1);setTimeout(function(){c.updateHeight.call(c)},1E3/e.updateRate)},updateHeight:function(){var a=this;a.frame++;var b=a.totalFrames;a.frame<=b?(b=a.easing(0,a.frame,1,a.rh-1,b),a.height(b),window.requestAnimationFrame?window.requestAnimationFrame(function(){a.updateHeight.call(a)}):setTimeout(function(){a.updateHeight.call(a)},1E3/e.updateRate)):(a.height(a.rh),a.animationFinished=!0)},animateWidth:function(a,b){var c=this;c.animationFinished=
!1;c.easing=b;c.totalFrames=a*e.updateRate;c.rw=c.w;c.frame=0;c.width(1);setTimeout(function(){c.updateWidth.call(c)},1E3/e.updateRate)},updateWidth:function(){var a=this;a.frame++;var b=a.totalFrames;a.frame<=b?(b=a.easing(0,a.frame,1,a.rw-1,b),a.width(b),window.requestAnimationFrame?window.requestAnimationFrame(function(){a.updateWidth.call(a)}):setTimeout(function(){a.updateWidth.call(a)},1E3/e.updateRate)):(a.width(a.rw),a.animationFinished=!0)}})})();(function(){var e=window.AmCharts;e.CategoryAxis=e.Class({inherits:e.AxisBase,construct:function(a){this.cname="CategoryAxis";e.CategoryAxis.base.construct.call(this,a);this.minPeriod="DD";this.equalSpacing=this.parseDates=!1;this.position="bottom";this.startOnAxis=!1;this.gridPosition="middle";this.safeDistance=30;this.stickBalloonToCategory=!1;e.applyTheme(this,a,this.cname)},draw:function(){e.CategoryAxis.base.draw.call(this);this.generateDFObject();var a=this.chart.chartData;this.data=a;this.labelRotationR=
this.labelRotation;this.type=null;if(e.ifArray(a)){var b,c=this.chart;"scrollbar"!=this.id?(e.setCN(c,this.set,"category-axis"),e.setCN(c,this.labelsSet,"category-axis"),e.setCN(c,this.axisLine.axisSet,"category-axis")):this.bcn=this.id+"-";var d=this.start,g=this.labelFrequency,h=0,f=this.end-d+1,k=this.gridCountR,l=this.showFirstLabel,m=this.showLastLabel,p,n="",n=e.extractPeriod(this.minPeriod),u=e.getPeriodDuration(n.period,n.count),v,x,E,t,r,B=this.rotate,q=this.firstDayOfWeek,w=this.boldPeriodBeginning;
b=e.resetDateToMin(new Date(a[a.length-1].time+1.05*u),this.minPeriod,1,q).getTime();this.firstTime=c.firstTime;this.endTime>b&&(this.endTime=b);r=this.minorGridEnabled;x=this.gridAlpha;var y=0,C=0;if(this.widthField)for(b=this.start;b<=this.end;b++)if(t=this.data[b]){var F=Number(this.data[b].dataContext[this.widthField]);isNaN(F)||(y+=F,t.widthValue=F)}if(this.parseDates&&!this.equalSpacing)this.lastTime=a[a.length-1].time,this.maxTime=e.resetDateToMin(new Date(this.lastTime+1.05*u),this.minPeriod,
1,q).getTime(),this.timeDifference=this.endTime-this.startTime,this.parseDatesDraw();else if(!this.parseDates){if(this.cellWidth=this.getStepWidth(f),f<k&&(k=f),h+=this.start,this.stepWidth=this.getStepWidth(f),0<k)for(q=Math.floor(f/k),t=this.chooseMinorFrequency(q),f=h,f/2==Math.round(f/2)&&f--,0>f&&(f=0),w=0,this.widthField&&(f=this.start,q=1),this.end-f+1>=this.autoRotateCount&&(this.labelRotationR=this.autoRotateAngle),b=f;b<=this.end+2;b++){k=!1;0<=b&&b<this.data.length?(v=this.data[b],n=v.category,
k=v.forceShow):n="";if(r&&!isNaN(t))if(b/t==Math.round(b/t)||k)b/q==Math.round(b/q)||k||(this.gridAlpha=this.minorGridAlpha,n=void 0);else continue;else if(b/q!=Math.round(b/q)&&!k)continue;f=this.getCoordinate(b-h);k=0;"start"==this.gridPosition&&(f-=this.cellWidth/2,k=this.cellWidth/2);p=!0;E=k;"start"==this.tickPosition&&(E=0,p=!1,k=0);if(b==d&&!l||b==this.end&&!m)n=void 0;Math.round(w/g)!=w/g&&(n=void 0);w++;a=this.cellWidth;B&&(a=NaN,this.ignoreAxisWidth||!c.autoMargins)&&(a="right"==this.position?
c.marginRight-this.titleWidth:c.marginLeft-this.titleWidth,a-=this.tickLength+10);this.labelFunction&&v&&(n=this.labelFunction(n,v,this));n=e.fixBrakes(n);u=!1;this.boldLabels&&(u=!0);b>this.end&&"start"==this.tickPosition&&(n=" ");this.rotate&&this.inside&&(k-=2);isNaN(v.widthValue)||(v.percentWidthValue=v.widthValue/y*100,a=this.rotate?this.height*v.widthValue/y:this.width*v.widthValue/y,f=C,C+=a,E=k=a/2);p=new this.axisItemRenderer(this,f,n,p,a,k,void 0,u,E,!1,v.labelColor,v.className);p.serialDataItem=
v;this.pushAxisItem(p);this.gridAlpha=x}}else if(this.parseDates&&this.equalSpacing){h=this.start;this.startTime=this.data[this.start].time;this.endTime=this.data[this.end].time;this.timeDifference=this.endTime-this.startTime;b=this.choosePeriod(0);g=b.period;v=b.count;b=e.getPeriodDuration(g,v);b<u&&(g=n.period,v=n.count,b=u);x=g;"WW"==x&&(x="DD");this.currentDateFormat=this.dateFormatsObject[x];this.stepWidth=this.getStepWidth(f);k=Math.ceil(this.timeDifference/b)+1;n=e.resetDateToMin(new Date(this.startTime-
b),g,v,q).getTime();this.cellWidth=this.getStepWidth(f);f=Math.round(n/b);d=-1;f/2==Math.round(f/2)&&(d=-2,n-=b);f=this.start;f/2==Math.round(f/2)&&f--;0>f&&(f=0);C=this.end+2;C>=this.data.length&&(C=this.data.length);a=!1;a=!l;this.previousPos=-1E3;20<this.labelRotationR&&(this.safeDistance=5);F=f;if(this.data[f].time!=e.resetDateToMin(new Date(this.data[f].time),g,v,q).getTime()){var u=0,D=n;for(b=f;b<C;b++)t=this.data[b].time,this.checkPeriodChange(g,v,t,D)&&(u++,2<=u&&(F=b,b=C),D=t)}r&&1<v&&(t=
this.chooseMinorFrequency(v),e.getPeriodDuration(g,t));if(0<this.gridCountR)for(b=f;b<C;b++)if(t=this.data[b].time,this.checkPeriodChange(g,v,t,n)&&b>=F){f=this.getCoordinate(b-this.start);r=!1;this.nextPeriod[x]&&(r=this.checkPeriodChange(this.nextPeriod[x],1,t,n,x))&&e.resetDateToMin(new Date(t),this.nextPeriod[x],1,q).getTime()!=t&&(r=!1);u=!1;r&&this.markPeriodChange?(r=this.dateFormatsObject[this.nextPeriod[x]],u=!0):r=this.dateFormatsObject[x];n=e.formatDate(new Date(t),r,c);if(b==d&&!l||b==
k&&!m)n=" ";a?a=!1:(w||(u=!1),f-this.previousPos>this.safeDistance*Math.cos(this.labelRotationR*Math.PI/180)&&(this.labelFunction&&(n=this.labelFunction(n,new Date(t),this,g,v,E)),this.boldLabels&&(u=!0),p=new this.axisItemRenderer(this,f,n,void 0,void 0,void 0,void 0,u),r=p.graphics(),this.pushAxisItem(p),r=r.getBBox().width,e.isModern||(r-=f),this.previousPos=f+r));E=n=t}}for(b=l=0;b<this.data.length;b++)if(t=this.data[b])this.parseDates&&!this.equalSpacing?(m=t.time,d=this.cellWidth,"MM"==this.minPeriod&&
(d=864E5*e.daysInMonth(new Date(m))*this.stepWidth,t.cellWidth=d),m=Math.round((m-this.startTime)*this.stepWidth+d/2)):m=this.getCoordinate(b-h),t.x[this.id]=m;if(this.widthField)for(b=this.start;b<=this.end;b++)t=this.data[b],d=t.widthValue,t.percentWidthValue=d/y*100,this.rotate?(m=this.height*d/y/2+l,l=this.height*d/y+l):(m=this.width*d/y/2+l,l=this.width*d/y+l),t.x[this.id]=m;y=this.guides.length;for(b=0;b<y;b++)if(l=this.guides[b],q=q=q=r=d=NaN,m=l.above,l.toCategory&&(q=c.getCategoryIndexByValue(l.toCategory),
isNaN(q)||(d=this.getCoordinate(q-h),l.expand&&(d+=this.cellWidth/2),p=new this.axisItemRenderer(this,d,"",!0,NaN,NaN,l),this.pushAxisItem(p,m))),l.category&&(q=c.getCategoryIndexByValue(l.category),isNaN(q)||(r=this.getCoordinate(q-h),l.expand&&(r-=this.cellWidth/2),q=(d-r)/2,p=new this.axisItemRenderer(this,r,l.label,!0,NaN,q,l),this.pushAxisItem(p,m))),w=c.dataDateFormat,l.toDate&&(!w||l.toDate instanceof Date||(l.toDate=l.toDate.toString()+" |"),l.toDate=e.getDate(l.toDate,w),this.equalSpacing?
(q=c.getClosestIndex(this.data,"time",l.toDate.getTime(),!1,0,this.data.length-1),isNaN(q)||(d=this.getCoordinate(q-h))):d=(l.toDate.getTime()-this.startTime)*this.stepWidth,p=new this.axisItemRenderer(this,d,"",!0,NaN,NaN,l),this.pushAxisItem(p,m)),l.date&&(!w||l.date instanceof Date||(l.date=l.date.toString()+" |"),l.date=e.getDate(l.date,w),this.equalSpacing?(q=c.getClosestIndex(this.data,"time",l.date.getTime(),!1,0,this.data.length-1),isNaN(q)||(r=this.getCoordinate(q-h))):r=(l.date.getTime()-
this.startTime)*this.stepWidth,q=(d-r)/2,p=!0,l.toDate&&(p=!1),p="H"==this.orientation?new this.axisItemRenderer(this,r,l.label,p,2*q,NaN,l):new this.axisItemRenderer(this,r,l.label,!1,NaN,q,l),this.pushAxisItem(p,m)),p&&(q=p.label)&&this.addEventListeners(q,l),0<d||0<r){q=!1;if(this.rotate){if(d<this.height||r<this.height)q=!0}else if(d<this.width||r<this.width)q=!0;q&&(d=new this.guideFillRenderer(this,r,d,l),r=d.graphics(),this.pushAxisItem(d,m),l.graphics=r,r.index=b,this.addEventListeners(r,
l))}if(c=c.chartCursor)B?c.fixHeight(this.cellWidth):(c.fixWidth(this.cellWidth),c.fullWidth&&this.balloon&&(this.balloon.minWidth=this.cellWidth));this.previousHeight=A}this.axisCreated=!0;this.set.translate(this.x,this.y);this.labelsSet.translate(this.x,this.y);this.labelsSet.show();this.positionTitle();(B=this.axisLine.set)&&B.toFront();var A=this.getBBox().height;2<A-this.previousHeight&&this.autoWrap&&!this.parseDates&&(this.axisCreated=this.chart.marginsUpdated=!1)},xToIndex:function(a){var b=
this.data,c=this.chart,d=c.rotate,g=this.stepWidth,h;if(this.parseDates&&!this.equalSpacing)a=this.startTime+Math.round(a/g)-this.minDuration()/2,h=c.getClosestIndex(b,"time",a,!1,this.start,this.end+1);else if(this.widthField)for(c=Infinity,g=this.start;g<=this.end;g++){var f=this.data[g];f&&(f=Math.abs(f.x[this.id]-a),f<c&&(c=f,h=g))}else this.startOnAxis||(a-=g/2),h=this.start+Math.round(a/g);h=e.fitToBounds(h,0,b.length-1);var k;b[h]&&(k=b[h].x[this.id]);d?k>this.height+1&&h--:k>this.width+1&&
h--;0>k&&h++;return h=e.fitToBounds(h,0,b.length-1)},dateToCoordinate:function(a){return this.parseDates&&!this.equalSpacing?(a.getTime()-this.startTime)*this.stepWidth:this.parseDates&&this.equalSpacing?(a=this.chart.getClosestIndex(this.data,"time",a.getTime(),!1,0,this.data.length-1),this.getCoordinate(a-this.start)):NaN},categoryToCoordinate:function(a){if(this.chart){if(this.parseDates)return this.dateToCoordinate(new Date(a));a=this.chart.getCategoryIndexByValue(a);if(!isNaN(a))return this.getCoordinate(a-
this.start)}else return NaN},coordinateToDate:function(a){return this.equalSpacing?(a=this.xToIndex(a),new Date(this.data[a].time)):new Date(this.startTime+a/this.stepWidth)},coordinateToValue:function(a){a=this.xToIndex(a);if(a=this.data[a])return this.parseDates?a.time:a.category},getCoordinate:function(a){a*=this.stepWidth;this.startOnAxis||(a+=this.stepWidth/2);return Math.round(a)},formatValue:function(a,b){b||(b=this.currentDateFormat);this.parseDates&&(a=e.formatDate(new Date(a),b,this.chart));
return a},showBalloonAt:function(a,b){void 0===b&&(b=this.parseDates?this.dateToCoordinate(new Date(a)):this.categoryToCoordinate(a));return this.adjustBalloonCoordinate(b)},formatBalloonText:function(a,b,c){var d="",g="",h=this.chart,f=this.data[b];if(f)if(this.parseDates)d=e.formatDate(f.category,c,h),b=e.changeDate(new Date(f.category),this.minPeriod,1),g=e.formatDate(b,c,h),-1!=d.indexOf("fff")&&(d=e.formatMilliseconds(d,f.category),g=e.formatMilliseconds(g,b));else{var k;this.data[b+1]&&(k=this.data[b+
1]);d=e.fixNewLines(f.category);k&&(g=e.fixNewLines(k.category))}a=a.replace(/\[\[category\]\]/g,String(d));return a=a.replace(/\[\[toCategory\]\]/g,String(g))},adjustBalloonCoordinate:function(a,b){var c=this.xToIndex(a),d=this.chart.chartCursor;if(this.stickBalloonToCategory){var e=this.data[c];e&&(a=e.x[this.id]);this.stickBalloonToStart&&(a-=this.cellWidth/2);var h=0;if(d){var f=d.limitToGraph;if(f){var k=f.valueAxis.id;f.hidden||(h=e.axes[k].graphs[f.id].y)}this.rotate?("left"==this.position?
(f&&(h-=d.width),0<h&&(h=0)):0>h&&(h=0),d.fixHLine(a,h)):("top"==this.position?(f&&(h-=d.height),0<h&&(h=0)):0>h&&(h=0),d.fullWidth&&(a+=1),d.fixVLine(a,h))}}d&&!b&&(d.setIndex(c),this.parseDates&&d.setTimestamp(this.coordinateToDate(a).getTime()));return a}})})();


/***/ }),

/***/ 609:
/***/ (function(module, exports) {

AmCharts.themes.light = {

	themeName:"light",

	AmChart: {
		color: "#000000", backgroundColor: "#FFFFFF"
	},

	AmCoordinateChart: {
		colors: ["#67b7dc", "#fdd400", "#84b761", "#cc4748", "#cd82ad", "#2f4074", "#448e4d", "#b7b83f", "#b9783f", "#b93e3d", "#913167"]
	},

	AmStockChart: {
		colors: ["#67b7dc", "#fdd400", "#84b761", "#cc4748", "#cd82ad", "#2f4074", "#448e4d", "#b7b83f", "#b9783f", "#b93e3d", "#913167"]
	},

	AmSlicedChart: {
		colors: ["#67b7dc", "#fdd400", "#84b761", "#cc4748", "#cd82ad", "#2f4074", "#448e4d", "#b7b83f", "#b9783f", "#b93e3d", "#913167"],
		outlineAlpha: 1,
		outlineThickness: 2,
		labelTickColor: "#000000",
		labelTickAlpha: 0.3
	},

	AmRectangularChart: {
		zoomOutButtonColor: '#000000',
		zoomOutButtonRollOverAlpha: 0.15,
		zoomOutButtonImage: "lens"
	},

	AxisBase: {
		axisColor: "#000000",
		axisAlpha: 0.3,
		gridAlpha: 0.1,
		gridColor: "#000000"
	},

	ChartScrollbar: {
		backgroundColor: "#000000",
		backgroundAlpha: 0.12,
		graphFillAlpha: 0.5,
		graphLineAlpha: 0,
		selectedBackgroundColor: "#FFFFFF",
		selectedBackgroundAlpha: 0.4,
		gridAlpha: 0.15
	},

	ChartCursor: {
		cursorColor: "#000000",
		color: "#FFFFFF",
		cursorAlpha: 0.5
	},

	AmLegend: {
		color: "#000000"
	},

	AmGraph: {
		lineAlpha: 0.9
	},
	GaugeArrow: {
		color: "#000000",
		alpha: 0.8,
		nailAlpha: 0,
		innerRadius: "40%",
		nailRadius: 15,
		startWidth: 15,
		borderAlpha: 0.8,
		nailBorderAlpha: 0
	},

	GaugeAxis: {
		tickColor: "#000000",
		tickAlpha: 1,
		tickLength: 15,
		minorTickLength: 8,
		axisThickness: 3,
		axisColor: '#000000',
		axisAlpha: 1,
		bandAlpha: 0.8
	},

	TrendLine: {
		lineColor: "#c03246",
		lineAlpha: 0.8
	},

	// ammap
	AreasSettings: {
		alpha: 0.8,
		color: "#67b7dc",
		colorSolid: "#003767",
		unlistedAreasAlpha: 0.4,
		unlistedAreasColor: "#000000",
		outlineColor: "#FFFFFF",
		outlineAlpha: 0.5,
		outlineThickness: 0.5,
		rollOverColor: "#3c5bdc",
		rollOverOutlineColor: "#FFFFFF",
		selectedOutlineColor: "#FFFFFF",
		selectedColor: "#f15135",
		unlistedAreasOutlineColor: "#FFFFFF",
		unlistedAreasOutlineAlpha: 0.5
	},

	LinesSettings: {
		color: "#000000",
		alpha: 0.8
	},

	ImagesSettings: {
		alpha: 0.8,
		labelColor: "#000000",
		color: "#000000",
		labelRollOverColor: "#3c5bdc"
	},

	ZoomControl: {
		buttonFillAlpha:0.7,
		buttonIconColor:"#a7a7a7"
	},

	SmallMap: {
		mapColor: "#000000",
		rectangleColor: "#f15135",
		backgroundColor: "#FFFFFF",
		backgroundAlpha: 0.7,
		borderThickness: 1,
		borderAlpha: 0.8
	},

	// the defaults below are set using CSS syntax, you can use any existing css property
	// if you don't use Stock chart, you can delete lines below
	PeriodSelector: {
		color: "#000000"
	},

	PeriodButton: {
		color: "#000000",
		background: "transparent",
		opacity: 0.7,
		border: "1px solid rgba(0, 0, 0, .3)",
		MozBorderRadius: "5px",
		borderRadius: "5px",
		margin: "1px",
		outline: "none",
		boxSizing: "border-box"
	},

	PeriodButtonSelected: {
		color: "#000000",
		backgroundColor: "#b9cdf5",
		border: "1px solid rgba(0, 0, 0, .3)",
		MozBorderRadius: "5px",
		borderRadius: "5px",
		margin: "1px",
		outline: "none",
		opacity: 1,
		boxSizing: "border-box"
	},

	PeriodInputField: {
		color: "#000000",
		background: "transparent",
		border: "1px solid rgba(0, 0, 0, .3)",
		outline: "none"
	},

	DataSetSelector: {

		color: "#000000",
		selectedBackgroundColor: "#b9cdf5",
		rollOverBackgroundColor: "#a8b0e4"
	},

	DataSetCompareList: {
		color: "#000000",
		lineHeight: "100%",
		boxSizing: "initial",
		webkitBoxSizing: "initial",
		border: "1px solid rgba(0, 0, 0, .3)"
	},

	DataSetSelect: {
		border: "1px solid rgba(0, 0, 0, .3)",
		outline: "none"
	}

};

/***/ }),

/***/ 610:
/***/ (function(module, exports) {

(function(){var d;window.AmCharts?d=window.AmCharts:(d={},window.AmCharts=d,d.themes={},d.maps={},d.inheriting={},d.charts=[],d.onReadyArray=[],d.useUTC=!1,d.updateRate=60,d.uid=0,d.lang={},d.translations={},d.mapTranslations={},d.windows={},d.initHandlers=[],d.amString="am",d.pmString="pm");d.Class=function(a){var b=function(){arguments[0]!==d.inheriting&&(this.events={},this.construct.apply(this,arguments))};a.inherits?(b.prototype=new a.inherits(d.inheriting),b.base=a.inherits.prototype,delete a.inherits):
(b.prototype.createEvents=function(){for(var a=0;a<arguments.length;a++)this.events[arguments[a]]=[]},b.prototype.listenTo=function(a,b,c){this.removeListener(a,b,c);a.events[b].push({handler:c,scope:this})},b.prototype.addListener=function(a,b,c){this.removeListener(this,a,b);a&&this.events[a]&&this.events[a].push({handler:b,scope:c})},b.prototype.removeListener=function(a,b,c){if(a&&a.events&&(a=a.events[b]))for(b=a.length-1;0<=b;b--)a[b].handler===c&&a.splice(b,1)},b.prototype.fire=function(a){for(var b=
this.events[a.type],c=0;c<b.length;c++){var d=b[c];d.handler.call(d.scope,a)}});for(var c in a)b.prototype[c]=a[c];return b};d.addChart=function(a){window.requestAnimationFrame?d.animationRequested||(d.animationRequested=!0,window.requestAnimationFrame(d.update)):d.updateInt||(d.updateInt=setInterval(function(){d.update()},Math.round(1E3/d.updateRate)));d.charts.push(a)};d.removeChart=function(a){for(var b=d.charts,c=b.length-1;0<=c;c--)b[c]==a&&b.splice(c,1);0===b.length&&(d.requestAnimation&&(window.cancelAnimationFrame(d.requestAnimation),
d.animationRequested=!1),d.updateInt&&(clearInterval(d.updateInt),d.updateInt=NaN))};d.isModern=!0;d.getIEVersion=function(){var a=0,b,c;"Microsoft Internet Explorer"==navigator.appName&&(b=navigator.userAgent,c=/MSIE ([0-9]{1,}[.0-9]{0,})/,null!==c.exec(b)&&(a=parseFloat(RegExp.$1)));return a};d.applyLang=function(a,b){var c=d.translations;b.dayNames=d.extend({},d.dayNames);b.shortDayNames=d.extend({},d.shortDayNames);b.monthNames=d.extend({},d.monthNames);b.shortMonthNames=d.extend({},d.shortMonthNames);
b.amString="am";b.pmString="pm";c&&(c=c[a])&&(d.lang=c,b.langObj=c,c.monthNames&&(b.dayNames=d.extend({},c.dayNames),b.shortDayNames=d.extend({},c.shortDayNames),b.monthNames=d.extend({},c.monthNames),b.shortMonthNames=d.extend({},c.shortMonthNames)),c.am&&(b.amString=c.am),c.pm&&(b.pmString=c.pm));d.amString=b.amString;d.pmString=b.pmString};d.IEversion=d.getIEVersion();9>d.IEversion&&0<d.IEversion&&(d.isModern=!1,d.isIE=!0);d.dx=0;d.dy=0;if(document.addEventListener||window.opera)d.isNN=!0,d.isIE=
!1,d.dx=.5,d.dy=.5;document.attachEvent&&(d.isNN=!1,d.isIE=!0,d.isModern||(d.dx=0,d.dy=0));window.chrome&&(d.chrome=!0);d.handleMouseUp=function(a){for(var b=d.charts,c=0;c<b.length;c++){var e=b[c];e&&e.handleReleaseOutside&&e.handleReleaseOutside(a)}};d.handleMouseMove=function(a){for(var b=d.charts,c=0;c<b.length;c++){var e=b[c];e&&e.handleMouseMove&&e.handleMouseMove(a)}};d.handleWheel=function(a){for(var b=d.charts,c=0;c<b.length;c++){var e=b[c];if(e&&e.mouseIsOver){(e.mouseWheelScrollEnabled||
e.mouseWheelZoomEnabled)&&e.handleWheel&&e.handleWheel(a);break}}};d.resetMouseOver=function(){for(var a=d.charts,b=0;b<a.length;b++){var c=a[b];c&&(c.mouseIsOver=!1)}};d.ready=function(a){d.onReadyArray.push(a)};d.handleLoad=function(){d.isReady=!0;for(var a=d.onReadyArray,b=0;b<a.length;b++){var c=a[b];isNaN(d.processDelay)?c():setTimeout(c,d.processDelay*b)}d.onReadyArray=[]};d.addInitHandler=function(a,b){d.initHandlers.push({method:a,types:b})};d.callInitHandler=function(a){var b=d.initHandlers;
if(d.initHandlers)for(var c=0;c<b.length;c++){var e=b[c];e.types?d.isInArray(e.types,a.type)&&e.method(a):e.method(a)}};d.getUniqueId=function(){d.uid++;return"AmChartsEl-"+d.uid};d.isNN&&(document.addEventListener("mousemove",d.handleMouseMove),document.addEventListener("mouseup",d.handleMouseUp,!0),window.addEventListener("load",d.handleLoad,!0));d.isIE&&(document.attachEvent("onmousemove",d.handleMouseMove),document.attachEvent("onmouseup",d.handleMouseUp),window.attachEvent("onload",d.handleLoad));
d.addWheelListeners=function(){d.wheelIsListened||(d.isNN&&(window.addEventListener("DOMMouseScroll",d.handleWheel,!0),document.addEventListener("mousewheel",d.handleWheel,!0)),d.isIE&&document.attachEvent("onmousewheel",d.handleWheel));d.wheelIsListened=!0};d.clear=function(){var a=d.charts;if(a)for(var b=a.length-1;0<=b;b--)a[b].clear();d.updateInt&&clearInterval(d.updateInt);d.requestAnimation&&window.cancelAnimationFrame(d.requestAnimation);d.charts=[];d.isNN&&(document.removeEventListener("mousemove",
d.handleMouseMove,!0),document.removeEventListener("mouseup",d.handleMouseUp,!0),window.removeEventListener("load",d.handleLoad,!0),window.removeEventListener("DOMMouseScroll",d.handleWheel,!0),document.removeEventListener("mousewheel",d.handleWheel,!0));d.isIE&&(document.detachEvent("onmousemove",d.handleMouseMove),document.detachEvent("onmouseup",d.handleMouseUp),window.detachEvent("onload",d.handleLoad))};d.makeChart=function(a,b,c){var e=b.type,f=b.theme;d.isString(f)&&(f=d.themes[f],b.theme=
f);var g;switch(e){case "serial":g=new d.AmSerialChart(f);break;case "xy":g=new d.AmXYChart(f);break;case "pie":g=new d.AmPieChart(f);break;case "radar":g=new d.AmRadarChart(f);break;case "gauge":g=new d.AmAngularGauge(f);break;case "funnel":g=new d.AmFunnelChart(f);break;case "map":g=new d.AmMap(f);break;case "stock":g=new d.AmStockChart(f);break;case "gantt":g=new d.AmGanttChart(f)}d.extend(g,b);d.isReady?isNaN(c)?g.write(a):setTimeout(function(){d.realWrite(g,a)},c):d.ready(function(){isNaN(c)?
g.write(a):setTimeout(function(){d.realWrite(g,a)},c)});return g};d.realWrite=function(a,b){a.write(b)};d.updateCount=0;d.validateAt=Math.round(d.updateRate/10);d.update=function(){var a=d.charts;d.updateCount++;var b=!1;d.updateCount==d.validateAt&&(b=!0,d.updateCount=0);if(a)for(var c=a.length-1;0<=c;c--)a[c].update&&a[c].update(),b&&(a[c].autoResize?a[c].validateSize&&a[c].validateSize():a[c].premeasure&&a[c].premeasure());window.requestAnimationFrame&&(d.requestAnimation=window.requestAnimationFrame(d.update))};
"complete"==document.readyState&&d.handleLoad()})();(function(){var d=window.AmCharts;d.toBoolean=function(a,b){if(void 0===a)return b;switch(String(a).toLowerCase()){case "true":case "yes":case "1":return!0;case "false":case "no":case "0":case null:return!1;default:return!!a}};d.removeFromArray=function(a,b){var c;if(void 0!==b&&void 0!==a)for(c=a.length-1;0<=c;c--)a[c]==b&&a.splice(c,1)};d.getPath=function(){var a=document.getElementsByTagName("script");if(a)for(var b=0;b<a.length;b++){var c=a[b].src;if(-1!==c.search(/\/(amcharts|ammap)\.js/))return c.replace(/\/(amcharts|ammap)\.js.*/,
"/")}};d.normalizeUrl=function(a){return""!==a&&-1===a.search(/\/$/)?a+"/":a};d.isAbsolute=function(a){return 0===a.search(/^http[s]?:|^\//)};d.isInArray=function(a,b){for(var c=0;c<a.length;c++)if(a[c]==b)return!0;return!1};d.getDecimals=function(a){var b=0;isNaN(a)||(a=String(a),-1!=a.indexOf("e-")?b=Number(a.split("-")[1]):-1!=a.indexOf(".")&&(b=a.split(".")[1].length));return b};d.wordwrap=function(a,b,c,e){var f,g,h,k;a+="";if(1>b)return a;f=-1;for(a=(k=a.split(/\r\n|\n|\r/)).length;++f<a;k[f]+=
h){h=k[f];for(k[f]="";h.length>b;k[f]+=d.trim(h.slice(0,g))+((h=h.slice(g)).length?c:""))g=2==e||(g=h.slice(0,b+1).match(/\S*(\s)?$/))[1]?b:g.input.length-g[0].length||1==e&&b||g.input.length+(g=h.slice(b).match(/^\S*/))[0].length;h=d.trim(h)}return k.join(c)};d.trim=function(a){return a.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")};d.wrappedText=function(a,b,c,e,f,g,h,k){var l=d.text(a,b,c,e,f,g,h);if(l){var m=l.getBBox();if(m.width>k){var n="\n";d.isModern||(n="<br>");k=Math.floor(k/(m.width/
b.length));2<k&&(k-=2);b=d.wordwrap(b,k,n,!0);l.remove();l=d.text(a,b,c,e,f,g,h)}}return l};d.getStyle=function(a,b){var c="";if(document.defaultView&&document.defaultView.getComputedStyle)try{c=document.defaultView.getComputedStyle(a,"").getPropertyValue(b)}catch(e){}else a.currentStyle&&(b=b.replace(/\-(\w)/g,function(a,b){return b.toUpperCase()}),c=a.currentStyle[b]);return c};d.removePx=function(a){if(void 0!==a)return Number(a.substring(0,a.length-2))};d.getURL=function(a,b){if(a)if("_self"!=
b&&b)if("_top"==b&&window.top)window.top.location.href=a;else if("_parent"==b&&window.parent)window.parent.location.href=a;else if("_blank"==b)window.open(a);else{var c=document.getElementsByName(b)[0];c?c.src=a:(c=d.windows[b])?c.opener&&!c.opener.closed?c.location.href=a:d.windows[b]=window.open(a):d.windows[b]=window.open(a)}else window.location.href=a};d.ifArray=function(a){return a&&"object"==typeof a&&0<a.length?!0:!1};d.callMethod=function(a,b){var c;for(c=0;c<b.length;c++){var e=b[c];if(e){if(e[a])e[a]();
var d=e.length;if(0<d){var g;for(g=0;g<d;g++){var h=e[g];if(h&&h[a])h[a]()}}}}};d.toNumber=function(a){return"number"==typeof a?a:Number(String(a).replace(/[^0-9\-.]+/g,""))};d.toColor=function(a){if(""!==a&&void 0!==a)if(-1!=a.indexOf(",")){a=a.split(",");var b;for(b=0;b<a.length;b++){var c=a[b].substring(a[b].length-6,a[b].length);a[b]="#"+c}}else a=a.substring(a.length-6,a.length),a="#"+a;return a};d.toCoordinate=function(a,b,c){var e;void 0!==a&&(a=String(a),c&&c<b&&(b=c),e=Number(a),-1!=a.indexOf("!")&&
(e=b-Number(a.substr(1))),-1!=a.indexOf("%")&&(e=b*Number(a.substr(0,a.length-1))/100));return e};d.fitToBounds=function(a,b,c){a<b&&(a=b);a>c&&(a=c);return a};d.isDefined=function(a){return void 0===a?!1:!0};d.stripNumbers=function(a){return a.replace(/[0-9]+/g,"")};d.roundTo=function(a,b){if(0>b)return a;var c=Math.pow(10,b);return Math.round(a*c)/c};d.toFixed=function(a,b){var c=!1;0>a&&(c=!0,a=Math.abs(a));var e=String(Math.round(a*Math.pow(10,b)));if(0<b){var d=e.length;if(d<b){var g;for(g=0;g<
b-d;g++)e="0"+e}d=e.substring(0,e.length-b);""===d&&(d=0);e=d+"."+e.substring(e.length-b,e.length);return c?"-"+e:e}return String(e)};d.formatDuration=function(a,b,c,e,f,g){var h=d.intervals,k=g.decimalSeparator;if(a>=h[b].contains){var l=a-Math.floor(a/h[b].contains)*h[b].contains;"ss"==b?(l=d.formatNumber(l,g),1==l.split(k)[0].length&&(l="0"+l)):l=d.roundTo(l,g.precision);("mm"==b||"hh"==b)&&10>l&&(l="0"+l);c=l+""+e[b]+""+c;a=Math.floor(a/h[b].contains);b=h[b].nextInterval;return d.formatDuration(a,
b,c,e,f,g)}"ss"==b&&(a=d.formatNumber(a,g),1==a.split(k)[0].length&&(a="0"+a));"mm"==b&&(a=d.roundTo(a,g.precision));("mm"==b||"hh"==b)&&10>a&&(a="0"+a);c=a+""+e[b]+""+c;if(h[f].count>h[b].count)for(a=h[b].count;a<h[f].count;a++)b=h[b].nextInterval,"ss"==b||"mm"==b||"hh"==b?c="00"+e[b]+""+c:"DD"==b&&(c="0"+e[b]+""+c);":"==c.charAt(c.length-1)&&(c=c.substring(0,c.length-1));return c};d.formatNumber=function(a,b,c,e,f){a=d.roundTo(a,b.precision);isNaN(c)&&(c=b.precision);var g=b.decimalSeparator;b=
b.thousandsSeparator;var h;h=0>a?"-":"";a=Math.abs(a);var k=String(a),l=!1;-1!=k.indexOf("e")&&(l=!0);0<=c&&!l&&(k=d.toFixed(a,c));var m="";if(l)m=k;else{var k=k.split("."),l=String(k[0]),n;for(n=l.length;0<=n;n-=3)m=n!=l.length?0!==n?l.substring(n-3,n)+b+m:l.substring(n-3,n)+m:l.substring(n-3,n);void 0!==k[1]&&(m=m+g+k[1]);void 0!==c&&0<c&&"0"!=m&&(m=d.addZeroes(m,g,c))}m=h+m;""===h&&!0===e&&0!==a&&(m="+"+m);!0===f&&(m+="%");return m};d.addZeroes=function(a,b,c){a=a.split(b);void 0===a[1]&&0<c&&
(a[1]="0");return a[1].length<c?(a[1]+="0",d.addZeroes(a[0]+b+a[1],b,c)):void 0!==a[1]?a[0]+b+a[1]:a[0]};d.scientificToNormal=function(a){var b;a=String(a).split("e");var c;if("-"==a[1].substr(0,1)){b="0.";for(c=0;c<Math.abs(Number(a[1]))-1;c++)b+="0";b+=a[0].split(".").join("")}else{var e=0;b=a[0].split(".");b[1]&&(e=b[1].length);b=a[0].split(".").join("");for(c=0;c<Math.abs(Number(a[1]))-e;c++)b+="0"}return b};d.toScientific=function(a,b){if(0===a)return"0";var c=Math.floor(Math.log(Math.abs(a))*
Math.LOG10E),e=String(e).split(".").join(b);return String(e)+"e"+c};d.randomColor=function(){return"#"+("00000"+(16777216*Math.random()<<0).toString(16)).substr(-6)};d.hitTest=function(a,b,c){var e=!1,f=a.x,g=a.x+a.width,h=a.y,k=a.y+a.height,l=d.isInRectangle;e||(e=l(f,h,b));e||(e=l(f,k,b));e||(e=l(g,h,b));e||(e=l(g,k,b));e||!0===c||(e=d.hitTest(b,a,!0));return e};d.isInRectangle=function(a,b,c){return a>=c.x-5&&a<=c.x+c.width+5&&b>=c.y-5&&b<=c.y+c.height+5?!0:!1};d.isPercents=function(a){if(-1!=
String(a).indexOf("%"))return!0};d.formatValue=function(a,b,c,e,f,g,h,k){if(b){void 0===f&&(f="");var l;for(l=0;l<c.length;l++){var m=c[l],n=b[m];void 0!==n&&(n=g?d.addPrefix(n,k,h,e):d.formatNumber(n,e),a=a.replace(new RegExp("\\[\\["+f+""+m+"\\]\\]","g"),n))}}return a};d.formatDataContextValue=function(a,b){if(a){var c=a.match(/\[\[.*?\]\]/g),e;for(e=0;e<c.length;e++){var d=c[e],d=d.substr(2,d.length-4);void 0!==b[d]&&(a=a.replace(new RegExp("\\[\\["+d+"\\]\\]","g"),b[d]))}}return a};d.massReplace=
function(a,b){for(var c in b)if(b.hasOwnProperty(c)){var e=b[c];void 0===e&&(e="");a=a.replace(c,e)}return a};d.cleanFromEmpty=function(a){return a.replace(/\[\[[^\]]*\]\]/g,"")};d.addPrefix=function(a,b,c,e,f){var g=d.formatNumber(a,e),h="",k,l,m;if(0===a)return"0";0>a&&(h="-");a=Math.abs(a);if(1<a)for(k=b.length-1;-1<k;k--){if(a>=b[k].number&&(l=a/b[k].number,m=Number(e.precision),1>m&&(m=1),c=d.roundTo(l,m),m=d.formatNumber(c,{precision:-1,decimalSeparator:e.decimalSeparator,thousandsSeparator:e.thousandsSeparator}),
!f||l==c)){g=h+""+m+""+b[k].prefix;break}}else for(k=0;k<c.length;k++)if(a<=c[k].number){l=a/c[k].number;m=Math.abs(Math.floor(Math.log(l)*Math.LOG10E));l=d.roundTo(l,m);g=h+""+l+""+c[k].prefix;break}return g};d.remove=function(a){a&&a.remove()};d.getEffect=function(a){">"==a&&(a="easeOutSine");"<"==a&&(a="easeInSine");"elastic"==a&&(a="easeOutElastic");return a};d.getObjById=function(a,b){var c,e;for(e=0;e<a.length;e++){var d=a[e];if(d.id==b){c=d;break}}return c};d.applyTheme=function(a,b,c){b||
(b=d.theme);try{b=JSON.parse(JSON.stringify(b))}catch(e){}b&&b[c]&&d.extend(a,b[c])};d.isString=function(a){return"string"==typeof a?!0:!1};d.extend=function(a,b,c){var e;a||(a={});for(e in b)c?a.hasOwnProperty(e)||(a[e]=b[e]):a[e]=b[e];return a};d.copyProperties=function(a,b){for(var c in a)a.hasOwnProperty(c)&&"events"!=c&&void 0!==a[c]&&"function"!=typeof a[c]&&"cname"!=c&&(b[c]=a[c])};d.processObject=function(a,b,c,e){if(!1===a instanceof b&&(a=e?d.extend(new b(c),a):d.extend(a,new b(c),!0),a.listeners))for(var f in a.listeners)b=
a.listeners[f],a.addListener(b.event,b.method);return a};d.fixNewLines=function(a){var b=RegExp("\\n","g");a&&(a=a.replace(b,"<br />"));return a};d.fixBrakes=function(a){if(d.isModern){var b=RegExp("<br>","g");a&&(a=a.replace(b,"\n"))}else a=d.fixNewLines(a);return a};d.deleteObject=function(a,b){if(a){if(void 0===b||null===b)b=20;if(0!==b)if("[object Array]"===Object.prototype.toString.call(a))for(var c=0;c<a.length;c++)d.deleteObject(a[c],b-1),a[c]=null;else if(a&&!a.tagName)try{for(c in a.theme=
null,a)a[c]&&("object"==typeof a[c]&&d.deleteObject(a[c],b-1),"function"!=typeof a[c]&&(a[c]=null))}catch(e){}}};d.bounce=function(a,b,c,e,d){return(b/=d)<1/2.75?7.5625*e*b*b+c:b<2/2.75?e*(7.5625*(b-=1.5/2.75)*b+.75)+c:b<2.5/2.75?e*(7.5625*(b-=2.25/2.75)*b+.9375)+c:e*(7.5625*(b-=2.625/2.75)*b+.984375)+c};d.easeInOutQuad=function(a,b,c,e,d){b/=d/2;if(1>b)return e/2*b*b+c;b--;return-e/2*(b*(b-2)-1)+c};d.easeInSine=function(a,b,c,e,d){return-e*Math.cos(b/d*(Math.PI/2))+e+c};d.easeOutSine=function(a,
b,c,e,d){return e*Math.sin(b/d*(Math.PI/2))+c};d.easeOutElastic=function(a,b,c,e,d){a=1.70158;var g=0,h=e;if(0===b)return c;if(1==(b/=d))return c+e;g||(g=.3*d);h<Math.abs(e)?(h=e,a=g/4):a=g/(2*Math.PI)*Math.asin(e/h);return h*Math.pow(2,-10*b)*Math.sin(2*(b*d-a)*Math.PI/g)+e+c};d.fixStepE=function(a){a=a.toExponential(0).split("e");var b=Number(a[1]);9==Number(a[0])&&b++;return d.generateNumber(1,b)};d.generateNumber=function(a,b){var c="",e;e=0>b?Math.abs(b)-1:Math.abs(b);var d;for(d=0;d<e;d++)c+=
"0";return 0>b?Number("0."+c+String(a)):Number(String(a)+c)};d.setCN=function(a,b,c,e){if(a.addClassNames&&b&&(b=b.node)&&c){var d=b.getAttribute("class");a=a.classNamePrefix+"-";e&&(a="");d?b.setAttribute("class",d+" "+a+c):b.setAttribute("class",a+c)}};d.removeCN=function(a,b,c){b&&(b=b.node)&&c&&(b=b.classList)&&b.remove(a.classNamePrefix+"-"+c)};d.parseDefs=function(a,b){for(var c in a){var e=typeof a[c];if(0<a[c].length&&"object"==e)for(var f=0;f<a[c].length;f++)e=document.createElementNS(d.SVG_NS,
c),b.appendChild(e),d.parseDefs(a[c][f],e);else"object"==e?(e=document.createElementNS(d.SVG_NS,c),b.appendChild(e),d.parseDefs(a[c],e)):b.setAttribute(c,a[c])}}})();(function(){var d=window.AmCharts;d.AmDraw=d.Class({construct:function(a,b,c,e){d.SVG_NS="http://www.w3.org/2000/svg";d.SVG_XLINK="http://www.w3.org/1999/xlink";d.hasSVG=!!document.createElementNS&&!!document.createElementNS(d.SVG_NS,"svg").createSVGRect;1>b&&(b=10);1>c&&(c=10);this.div=a;this.width=b;this.height=c;this.rBin=document.createElement("div");d.hasSVG?(d.SVG=!0,b=this.createSvgElement("svg"),a.appendChild(b),this.container=b,this.addDefs(e),this.R=new d.SVGRenderer(this)):d.isIE&&d.VMLRenderer&&
(d.VML=!0,d.vmlStyleSheet||(document.namespaces.add("amvml","urn:schemas-microsoft-com:vml"),31>document.styleSheets.length?(b=document.createStyleSheet(),b.addRule(".amvml","behavior:url(#default#VML); display:inline-block; antialias:true"),d.vmlStyleSheet=b):document.styleSheets[0].addRule(".amvml","behavior:url(#default#VML); display:inline-block; antialias:true")),this.container=a,this.R=new d.VMLRenderer(this,e),this.R.disableSelection(a))},createSvgElement:function(a){return document.createElementNS(d.SVG_NS,
a)},circle:function(a,b,c,e){var f=new d.AmDObject("circle",this);f.attr({r:c,cx:a,cy:b});this.addToContainer(f.node,e);return f},ellipse:function(a,b,c,e,f){var g=new d.AmDObject("ellipse",this);g.attr({rx:c,ry:e,cx:a,cy:b});this.addToContainer(g.node,f);return g},setSize:function(a,b){0<a&&0<b&&(this.container.style.width=a+"px",this.container.style.height=b+"px")},rect:function(a,b,c,e,f,g,h){var k=new d.AmDObject("rect",this);d.VML&&(f=Math.round(100*f/Math.min(c,e)),c+=2*g,e+=2*g,k.bw=g,k.node.style.marginLeft=
-g,k.node.style.marginTop=-g);1>c&&(c=1);1>e&&(e=1);k.attr({x:a,y:b,width:c,height:e,rx:f,ry:f,"stroke-width":g});this.addToContainer(k.node,h);return k},image:function(a,b,c,e,f,g){var h=new d.AmDObject("image",this);h.attr({x:b,y:c,width:e,height:f});this.R.path(h,a);this.addToContainer(h.node,g);return h},addToContainer:function(a,b){b||(b=this.container);b.appendChild(a)},text:function(a,b,c){return this.R.text(a,b,c)},path:function(a,b,c,e){var f=new d.AmDObject("path",this);e||(e="100,100");
f.attr({cs:e});c?f.attr({dd:a}):f.attr({d:a});this.addToContainer(f.node,b);return f},set:function(a){return this.R.set(a)},remove:function(a){if(a){var b=this.rBin;b.appendChild(a);b.innerHTML=""}},renderFix:function(){var a=this.container,b=a.style;b.top="0px";b.left="0px";try{var c=a.getBoundingClientRect(),e=c.left-Math.round(c.left),d=c.top-Math.round(c.top);e&&(b.left=e+"px");d&&(b.top=d+"px")}catch(g){}},update:function(){this.R.update()},addDefs:function(a){if(d.hasSVG){var b=this.createSvgElement("desc"),
c=this.container;c.setAttribute("version","1.1");c.style.position="absolute";this.setSize(this.width,this.height);if(a.accessibleTitle){var e=this.createSvgElement("text");c.appendChild(e);e.innerHTML=a.accessibleTitle;e.style.opacity=0}d.rtl&&(c.setAttribute("direction","rtl"),c.style.left="auto",c.style.right="0px");a&&(a.addCodeCredits&&b.appendChild(document.createTextNode("JavaScript chart by amCharts "+a.version)),c.appendChild(b),a.defs&&(b=this.createSvgElement("defs"),c.appendChild(b),d.parseDefs(a.defs,
b),this.defs=b))}}})})();(function(){var d=window.AmCharts;d.AmDObject=d.Class({construct:function(a,b){this.D=b;this.R=b.R;this.node=this.R.create(this,a);this.y=this.x=0;this.scale=1},attr:function(a){this.R.attr(this,a);return this},getAttr:function(a){return this.node.getAttribute(a)},setAttr:function(a,b){this.R.setAttr(this,a,b);return this},clipRect:function(a,b,c,e){this.R.clipRect(this,a,b,c,e)},translate:function(a,b,c,e){e||(a=Math.round(a),b=Math.round(b));this.R.move(this,a,b,c);this.x=a;this.y=b;this.scale=
c;this.angle&&this.rotate(this.angle)},rotate:function(a,b){this.R.rotate(this,a,b);this.angle=a},animate:function(a,b,c){for(var e in a)if(a.hasOwnProperty(e)){var f=e,g=a[e];c=d.getEffect(c);this.R.animate(this,f,g,b,c)}},push:function(a){if(a){var b=this.node;b.appendChild(a.node);var c=a.clipPath;c&&b.appendChild(c);(a=a.grad)&&b.appendChild(a)}},text:function(a){this.R.setText(this,a)},remove:function(){this.stop();this.R.remove(this)},clear:function(){var a=this.node;if(a.hasChildNodes())for(;1<=
a.childNodes.length;)a.removeChild(a.firstChild)},hide:function(){this.setAttr("visibility","hidden")},show:function(){this.setAttr("visibility","visible")},getBBox:function(){return this.R.getBBox(this)},toFront:function(){var a=this.node;if(a){this.prevNextNode=a.nextSibling;var b=a.parentNode;b&&b.appendChild(a)}},toPrevious:function(){var a=this.node;a&&this.prevNextNode&&(a=a.parentNode)&&a.insertBefore(this.prevNextNode,null)},toBack:function(){var a=this.node;if(a){this.prevNextNode=a.nextSibling;
var b=a.parentNode;if(b){var c=b.firstChild;c&&b.insertBefore(a,c)}}},mouseover:function(a){this.R.addListener(this,"mouseover",a);return this},mouseout:function(a){this.R.addListener(this,"mouseout",a);return this},click:function(a){this.R.addListener(this,"click",a);return this},dblclick:function(a){this.R.addListener(this,"dblclick",a);return this},mousedown:function(a){this.R.addListener(this,"mousedown",a);return this},mouseup:function(a){this.R.addListener(this,"mouseup",a);return this},touchmove:function(a){this.R.addListener(this,
"touchmove",a);return this},touchstart:function(a){this.R.addListener(this,"touchstart",a);return this},touchend:function(a){this.R.addListener(this,"touchend",a);return this},keyup:function(a){this.R.addListener(this,"keyup",a);return this},focus:function(a){this.R.addListener(this,"focus",a);return this},blur:function(a){this.R.addListener(this,"blur",a);return this},contextmenu:function(a){this.node.addEventListener?this.node.addEventListener("contextmenu",a,!0):this.R.addListener(this,"contextmenu",
a);return this},stop:function(){d.removeFromArray(this.R.animations,this.an_translate);d.removeFromArray(this.R.animations,this.an_y);d.removeFromArray(this.R.animations,this.an_x)},length:function(){return this.node.childNodes.length},gradient:function(a,b,c){this.R.gradient(this,a,b,c)},pattern:function(a,b,c){a&&this.R.pattern(this,a,b,c)}})})();(function(){var d=window.AmCharts;d.SVGRenderer=d.Class({construct:function(a){this.D=a;this.animations=[]},create:function(a,b){return document.createElementNS(d.SVG_NS,b)},attr:function(a,b){for(var c in b)b.hasOwnProperty(c)&&this.setAttr(a,c,b[c])},setAttr:function(a,b,c){void 0!==c&&a.node.setAttribute(b,c)},animate:function(a,b,c,e,f){a.animationFinished=!1;var g=a.node;a["an_"+b]&&d.removeFromArray(this.animations,a["an_"+b]);"translate"==b?(g=(g=g.getAttribute("transform"))?String(g).substring(10,
g.length-1):"0,0",g=g.split(", ").join(" "),g=g.split(" ").join(","),0===g&&(g="0,0")):g=Number(g.getAttribute(b));c={obj:a,frame:0,attribute:b,from:g,to:c,time:e,effect:f};this.animations.push(c);a["an_"+b]=c},update:function(){var a,b=this.animations;for(a=b.length-1;0<=a;a--){var c=b[a],e=c.time*d.updateRate,f=c.frame+1,g=c.obj,h=c.attribute,k,l,m;if(f<=e){c.frame++;if("translate"==h){k=c.from.split(",");h=Number(k[0]);k=Number(k[1]);isNaN(k)&&(k=0);l=c.to.split(",");m=Number(l[0]);l=Number(l[1]);
m=0===m-h?m:Math.round(d[c.effect](0,f,h,m-h,e));c=0===l-k?l:Math.round(d[c.effect](0,f,k,l-k,e));h="transform";if(isNaN(m)||isNaN(c))continue;c="translate("+m+","+c+")"}else l=Number(c.from),k=Number(c.to),m=k-l,c=d[c.effect](0,f,l,m,e),isNaN(c)&&(c=k),0===m&&this.animations.splice(a,1);this.setAttr(g,h,c)}else"translate"==h?(l=c.to.split(","),m=Number(l[0]),l=Number(l[1]),g.translate(m,l)):(k=Number(c.to),this.setAttr(g,h,k)),g.animationFinished=!0,this.animations.splice(a,1)}},getBBox:function(a){if(a=
a.node)try{return a.getBBox()}catch(b){}return{width:0,height:0,x:0,y:0}},path:function(a,b){a.node.setAttributeNS(d.SVG_XLINK,"xlink:href",b)},clipRect:function(a,b,c,e,f){var g=a.node,h=a.clipPath;h&&this.D.remove(h);var k=g.parentNode;k&&(g=document.createElementNS(d.SVG_NS,"clipPath"),h=d.getUniqueId(),g.setAttribute("id",h),this.D.rect(b,c,e,f,0,0,g),k.appendChild(g),b="#",d.baseHref&&!d.isIE&&(b=this.removeTarget(window.location.href)+b),this.setAttr(a,"clip-path","url("+b+h+")"),this.clipPathC++,
a.clipPath=g)},text:function(a,b,c){var e=new d.AmDObject("text",this.D);a=String(a).split("\n");var f=d.removePx(b["font-size"]),g;for(g=0;g<a.length;g++){var h=this.create(null,"tspan");h.appendChild(document.createTextNode(a[g]));h.setAttribute("y",(f+2)*g+Math.round(f/2));h.setAttribute("x",0);e.node.appendChild(h)}e.node.setAttribute("y",Math.round(f/2));this.attr(e,b);this.D.addToContainer(e.node,c);return e},setText:function(a,b){var c=a.node;c&&(c.removeChild(c.firstChild),c.appendChild(document.createTextNode(b)))},
move:function(a,b,c,e){isNaN(b)&&(b=0);isNaN(c)&&(c=0);b="translate("+b+","+c+")";e&&(b=b+" scale("+e+")");this.setAttr(a,"transform",b)},rotate:function(a,b){var c=a.node.getAttribute("transform"),e="rotate("+b+")";c&&(e=c+" "+e);this.setAttr(a,"transform",e)},set:function(a){var b=new d.AmDObject("g",this.D);this.D.container.appendChild(b.node);if(a){var c;for(c=0;c<a.length;c++)b.push(a[c])}return b},addListener:function(a,b,c){a.node["on"+b]=c},gradient:function(a,b,c,e){var f=a.node,g=a.grad;
g&&this.D.remove(g);b=document.createElementNS(d.SVG_NS,b);g=d.getUniqueId();b.setAttribute("id",g);if(!isNaN(e)){var h=0,k=0,l=0,m=0;90==e?l=100:270==e?m=100:180==e?h=100:0===e&&(k=100);b.setAttribute("x1",h+"%");b.setAttribute("x2",k+"%");b.setAttribute("y1",l+"%");b.setAttribute("y2",m+"%")}for(e=0;e<c.length;e++)h=document.createElementNS(d.SVG_NS,"stop"),k=100*e/(c.length-1),0===e&&(k=0),h.setAttribute("offset",k+"%"),h.setAttribute("stop-color",c[e]),b.appendChild(h);f.parentNode.appendChild(b);
c="#";d.baseHref&&!d.isIE&&(c=this.removeTarget(window.location.href)+c);f.setAttribute("fill","url("+c+g+")");a.grad=b},removeTarget:function(a){return a.split("#")[0]},pattern:function(a,b,c,e){var f=a.node;isNaN(c)&&(c=1);var g=a.patternNode;g&&this.D.remove(g);var g=document.createElementNS(d.SVG_NS,"pattern"),h=d.getUniqueId(),k=b;b.url&&(k=b.url);d.isAbsolute(k)||-1!=k.indexOf("data:image")||(k=e+k);e=Number(b.width);isNaN(e)&&(e=4);var l=Number(b.height);isNaN(l)&&(l=4);e/=c;l/=c;c=b.x;isNaN(c)&&
(c=0);var m=-Math.random()*Number(b.randomX);isNaN(m)||(c=m);m=b.y;isNaN(m)&&(m=0);var n=-Math.random()*Number(b.randomY);isNaN(n)||(m=n);g.setAttribute("id",h);g.setAttribute("width",e);g.setAttribute("height",l);g.setAttribute("patternUnits","userSpaceOnUse");g.setAttribute("xlink:href",k);b.color&&(n=document.createElementNS(d.SVG_NS,"rect"),n.setAttributeNS(null,"height",e),n.setAttributeNS(null,"width",l),n.setAttributeNS(null,"fill",b.color),g.appendChild(n));this.D.image(k,0,0,e,l,g).translate(c,
m);k="#";d.baseHref&&!d.isIE&&(k=this.removeTarget(window.location.href)+k);f.setAttribute("fill","url("+k+h+")");a.patternNode=g;f.parentNode.appendChild(g)},remove:function(a){a.clipPath&&this.D.remove(a.clipPath);a.grad&&this.D.remove(a.grad);a.patternNode&&this.D.remove(a.patternNode);this.D.remove(a.node)}})})();(function(){var d=window.AmCharts;d.AmChart=d.Class({construct:function(a){this.svgIcons=this.tapToActivate=!0;this.theme=a;this.classNamePrefix="amcharts";this.addClassNames=!1;this.version="3.21.7";d.addChart(this);this.createEvents("buildStarted","dataUpdated","init","rendered","drawn","failed","resized","animationFinished");this.height=this.width="100%";this.dataChanged=!0;this.chartCreated=!1;this.previousWidth=this.previousHeight=0;this.backgroundColor="#FFFFFF";this.borderAlpha=this.backgroundAlpha=
0;this.color=this.borderColor="#000000";this.fontFamily="Verdana";this.fontSize=11;this.usePrefixes=!1;this.autoResize=!0;this.autoDisplay=!1;this.addCodeCredits=this.accessible=!0;this.touchStartTime=this.touchClickDuration=0;this.precision=-1;this.percentPrecision=2;this.decimalSeparator=".";this.thousandsSeparator=",";this.labels=[];this.allLabels=[];this.titles=[];this.marginRight=this.marginLeft=this.autoMarginOffset=0;this.timeOuts=[];this.creditsPosition="top-left";var b=document.createElement("div"),
c=b.style;c.overflow="hidden";c.position="relative";c.textAlign="left";this.chartDiv=b;b=document.createElement("div");c=b.style;c.overflow="hidden";c.position="relative";c.textAlign="left";this.legendDiv=b;this.titleHeight=0;this.hideBalloonTime=150;this.handDrawScatter=2;this.cssScale=this.handDrawThickness=1;this.cssAngle=0;this.prefixesOfBigNumbers=[{number:1E3,prefix:"k"},{number:1E6,prefix:"M"},{number:1E9,prefix:"G"},{number:1E12,prefix:"T"},{number:1E15,prefix:"P"},{number:1E18,prefix:"E"},
{number:1E21,prefix:"Z"},{number:1E24,prefix:"Y"}];this.prefixesOfSmallNumbers=[{number:1E-24,prefix:"y"},{number:1E-21,prefix:"z"},{number:1E-18,prefix:"a"},{number:1E-15,prefix:"f"},{number:1E-12,prefix:"p"},{number:1E-9,prefix:"n"},{number:1E-6,prefix:"\u03bc"},{number:.001,prefix:"m"}];this.panEventsEnabled=!0;this.product="amcharts";this.animations=[];this.balloon=new d.AmBalloon(this.theme);this.balloon.chart=this;this.processTimeout=0;this.processCount=1E3;this.animatable=[];this.langObj={};
d.applyTheme(this,a,"AmChart")},drawChart:function(){0<this.realWidth&&0<this.realHeight&&(this.drawBackground(),this.redrawLabels(),this.drawTitles(),this.brr(),this.renderFix(),this.chartDiv&&(this.boundingRect=this.chartDiv.getBoundingClientRect()))},makeAccessible:function(a,b,c){this.accessible&&a&&(c&&a.setAttr("role",c),a.setAttr("aria-label",b))},drawBackground:function(){d.remove(this.background);var a=this.container,b=this.backgroundColor,c=this.backgroundAlpha,e=this.set;d.isModern||0!==
c||(c=.001);var f=this.updateWidth();this.realWidth=f;var g=this.updateHeight();this.realHeight=g;b=d.polygon(a,[0,f-1,f-1,0],[0,0,g-1,g-1],b,c,1,this.borderColor,this.borderAlpha);d.setCN(this,b,"bg");this.background=b;e.push(b);if(b=this.backgroundImage)a=a.image(b,0,0,f,g),d.setCN(this,b,"bg-image"),this.bgImg=a,e.push(a)},drawTitles:function(a){var b=this.titles;this.titleHeight=0;if(d.ifArray(b)){var c=20,e;for(e=0;e<b.length;e++){var f=b[e],f=d.processObject(f,d.Title,this.theme);if(!1!==f.enabled){var g=
f.color;void 0===g&&(g=this.color);var h=f.size;isNaN(h)&&(h=this.fontSize+2);isNaN(f.alpha);var k=this.marginLeft,l=!0;void 0!==f.bold&&(l=f.bold);g=d.wrappedText(this.container,f.text,g,this.fontFamily,h,"middle",l,this.realWidth-35-this.marginRight-k);g.translate(k+(this.realWidth-this.marginRight-k)/2,c);g.node.style.pointerEvents="none";f.sprite=g;void 0!==f.tabIndex&&g.setAttr("tabindex",f.tabIndex);d.setCN(this,g,"title");f.id&&d.setCN(this,g,"title-"+f.id);g.attr({opacity:f.alpha});c+=g.getBBox().height+
5;a?g.remove():this.freeLabelsSet.push(g)}}this.titleHeight=c-10}},write:function(a){var b=this;if(b.listeners)for(var c=0;c<b.listeners.length;c++){var e=b.listeners[c];b.addListener(e.event,e.method)}b.fire({type:"buildStarted",chart:b});b.afterWriteTO&&clearTimeout(b.afterWriteTO);0<b.processTimeout?b.afterWriteTO=setTimeout(function(){b.afterWrite.call(b,a)},b.processTimeout):b.afterWrite(a)},afterWrite:function(a){var b;if(b="object"!=typeof a?document.getElementById(a):a){for(;b.firstChild;)b.removeChild(b.firstChild);
this.div=b;b.style.overflow="hidden";b.style.textAlign="left";a=this.chartDiv;var c=this.legendDiv,e=this.legend,f=c.style,g=a.style;this.measure();this.previousHeight=this.divRealHeight;this.previousWidth=this.divRealWidth;var h,k=document.createElement("div");h=k.style;h.position="relative";this.containerDiv=k;k.className=this.classNamePrefix+"-main-div";a.className=this.classNamePrefix+"-chart-div";b.appendChild(k);(b=this.exportConfig)&&d.AmExport&&!this.AmExport&&(this.AmExport=new d.AmExport(this,
b));this.amExport&&d.AmExport&&(this.AmExport=d.extend(this.amExport,new d.AmExport(this),!0));this.AmExport&&this.AmExport.init&&this.AmExport.init();if(e){e=this.addLegend(e,e.divId);if(e.enabled)switch(f.left=null,f.top=null,f.right=null,g.left=null,g.right=null,g.top=null,f.position="relative",g.position="relative",h.width="100%",h.height="100%",e.position){case "bottom":k.appendChild(a);k.appendChild(c);break;case "top":k.appendChild(c);k.appendChild(a);break;case "absolute":f.position="absolute";
g.position="absolute";void 0!==e.left&&(f.left=e.left+"px");void 0!==e.right&&(f.right=e.right+"px");void 0!==e.top&&(f.top=e.top+"px");void 0!==e.bottom&&(f.bottom=e.bottom+"px");e.marginLeft=0;e.marginRight=0;k.appendChild(a);k.appendChild(c);break;case "right":f.position="relative";g.position="absolute";k.appendChild(a);k.appendChild(c);break;case "left":f.position="absolute";g.position="relative";k.appendChild(a);k.appendChild(c);break;case "outside":k.appendChild(a)}else k.appendChild(a);this.prevLegendPosition=
e.position}else k.appendChild(a);this.listenersAdded||(this.addListeners(),this.listenersAdded=!0);(this.mouseWheelScrollEnabled||this.mouseWheelZoomEnabled)&&d.addWheelListeners();this.initChart()}},createLabelsSet:function(){d.remove(this.labelsSet);this.labelsSet=this.container.set();this.freeLabelsSet.push(this.labelsSet)},initChart:function(){this.balloon=d.processObject(this.balloon,d.AmBalloon,this.theme);window.AmCharts_path&&(this.path=window.AmCharts_path);void 0===this.path&&(this.path=
d.getPath());void 0===this.path&&(this.path="amcharts/");this.path=d.normalizeUrl(this.path);void 0===this.pathToImages&&(this.pathToImages=this.path+"images/");this.initHC||(d.callInitHandler(this),this.initHC=!0);d.applyLang(this.language,this);var a=this.numberFormatter;a&&(isNaN(a.precision)||(this.precision=a.precision),void 0!==a.thousandsSeparator&&(this.thousandsSeparator=a.thousandsSeparator),void 0!==a.decimalSeparator&&(this.decimalSeparator=a.decimalSeparator));(a=this.percentFormatter)&&
!isNaN(a.precision)&&(this.percentPrecision=a.precision);this.nf={precision:this.precision,thousandsSeparator:this.thousandsSeparator,decimalSeparator:this.decimalSeparator};this.pf={precision:this.percentPrecision,thousandsSeparator:this.thousandsSeparator,decimalSeparator:this.decimalSeparator};this.destroy();(a=this.container)?(a.container.innerHTML="",a.width=this.realWidth,a.height=this.realHeight,a.addDefs(this),this.chartDiv.appendChild(a.container)):a=new d.AmDraw(this.chartDiv,this.realWidth,
this.realHeight,this);this.container=a;this.extension=".png";this.svgIcons&&d.SVG&&(this.extension=".svg");this.checkDisplay();this.checkTransform(this.div);a.chart=this;d.VML||d.SVG?(a.handDrawn=this.handDrawn,a.handDrawScatter=this.handDrawScatter,a.handDrawThickness=this.handDrawThickness,d.remove(this.set),this.set=a.set(),d.remove(this.gridSet),this.gridSet=a.set(),d.remove(this.cursorLineSet),this.cursorLineSet=a.set(),d.remove(this.graphsBehindSet),this.graphsBehindSet=a.set(),d.remove(this.bulletBehindSet),
this.bulletBehindSet=a.set(),d.remove(this.columnSet),this.columnSet=a.set(),d.remove(this.graphsSet),this.graphsSet=a.set(),d.remove(this.trendLinesSet),this.trendLinesSet=a.set(),d.remove(this.axesSet),this.axesSet=a.set(),d.remove(this.cursorSet),this.cursorSet=a.set(),d.remove(this.scrollbarsSet),this.scrollbarsSet=a.set(),d.remove(this.bulletSet),this.bulletSet=a.set(),d.remove(this.freeLabelsSet),this.freeLabelsSet=a.set(),d.remove(this.axesLabelsSet),this.axesLabelsSet=a.set(),d.remove(this.balloonsSet),
this.balloonsSet=a.set(),d.remove(this.plotBalloonsSet),this.plotBalloonsSet=a.set(),d.remove(this.zoomButtonSet),this.zoomButtonSet=a.set(),d.remove(this.zbSet),this.zbSet=null,d.remove(this.linkSet),this.linkSet=a.set()):this.fire({type:"failed",chart:this})},premeasure:function(){var a=this.div;if(a){try{this.boundingRect=this.chartDiv.getBoundingClientRect()}catch(e){}var b=a.offsetWidth,c=a.offsetHeight;a.clientHeight&&(b=a.clientWidth,c=a.clientHeight);if(b!=this.mw||c!=this.mh)this.mw=b,this.mh=
c,this.measure()}},measure:function(){var a=this.div;if(a){var b=this.chartDiv,c=a.offsetWidth,e=a.offsetHeight,f=this.container;a.clientHeight&&(c=a.clientWidth,e=a.clientHeight);var e=Math.round(e),c=Math.round(c),a=Math.round(d.toCoordinate(this.width,c)),g=Math.round(d.toCoordinate(this.height,e));(c!=this.previousWidth||e!=this.previousHeight)&&0<a&&0<g&&(b.style.width=a+"px",b.style.height=g+"px",b.style.padding=0,f&&f.setSize(a,g),this.balloon=d.processObject(this.balloon,d.AmBalloon,this.theme));
this.balloon&&this.balloon.setBounds&&this.balloon.setBounds(2,2,a-2,g);this.updateWidth();this.balloon.chart=this;this.realWidth=a;this.realHeight=g;this.divRealWidth=c;this.divRealHeight=e}},checkDisplay:function(){if(this.autoDisplay&&this.container){var a=d.rect(this.container,10,10),b=a.getBBox();0===b.width&&0===b.height&&(this.divRealHeight=this.divRealWidth=this.realHeight=this.realWidth=0,this.previousWidth=this.previousHeight=NaN);a.remove()}},checkTransform:function(a){if(this.autoTransform&&
window.getComputedStyle&&a){if(a.style){var b=window.getComputedStyle(a,null);if(b&&(b=b.getPropertyValue("-webkit-transform")||b.getPropertyValue("-moz-transform")||b.getPropertyValue("-ms-transform")||b.getPropertyValue("-o-transform")||b.getPropertyValue("transform"))&&"none"!==b){var c=b.split("(")[1].split(")")[0].split(","),b=c[0],c=c[1],b=Math.sqrt(b*b+c*c);isNaN(b)||(this.cssScale*=b)}}a.parentNode&&this.checkTransform(a.parentNode)}},destroy:function(){this.chartDiv.innerHTML="";this.clearTimeOuts();
this.legend&&this.legend.destroy()},clearTimeOuts:function(){var a=this.timeOuts;if(a){var b;for(b=0;b<a.length;b++)clearTimeout(a[b])}this.timeOuts=[]},clear:function(a){try{document.removeEventListener("touchstart",this.docfn1,!0),document.removeEventListener("touchend",this.docfn2,!0)}catch(b){}d.callMethod("clear",[this.chartScrollbar,this.scrollbarV,this.scrollbarH,this.chartCursor]);this.chartCursor=this.scrollbarH=this.scrollbarV=this.chartScrollbar=null;this.clearTimeOuts();this.container&&
(this.container.remove(this.chartDiv),this.container.remove(this.legendDiv));a||d.removeChart(this);if(a=this.div)for(;a.firstChild;)a.removeChild(a.firstChild);this.legend&&this.legend.destroy();this.AmExport&&this.AmExport.clear&&this.AmExport.clear()},setMouseCursor:function(a){"auto"==a&&d.isNN&&(a="default");this.chartDiv.style.cursor=a;this.legendDiv.style.cursor=a},redrawLabels:function(){this.labels=[];var a=this.allLabels;this.createLabelsSet();var b;for(b=0;b<a.length;b++)this.drawLabel(a[b])},
drawLabel:function(a){var b=this;if(b.container&&!1!==a.enabled){a=d.processObject(a,d.Label,b.theme);var c=a.y,e=a.text,f=a.align,g=a.size,h=a.color,k=a.rotation,l=a.alpha,m=a.bold,n=d.toCoordinate(a.x,b.realWidth),c=d.toCoordinate(c,b.realHeight);n||(n=0);c||(c=0);void 0===h&&(h=b.color);isNaN(g)&&(g=b.fontSize);f||(f="start");"left"==f&&(f="start");"right"==f&&(f="end");"center"==f&&(f="middle",k?c=b.realHeight-c+c/2:n=b.realWidth/2-n);void 0===l&&(l=1);void 0===k&&(k=0);c+=g/2;e=d.text(b.container,
e,h,b.fontFamily,g,f,m,l);e.translate(n,c);void 0!==a.tabIndex&&e.setAttr("tabindex",a.tabIndex);d.setCN(b,e,"label");a.id&&d.setCN(b,e,"label-"+a.id);0!==k&&e.rotate(k);a.url?(e.setAttr("cursor","pointer"),e.click(function(){d.getURL(a.url,b.urlTarget)})):e.node.style.pointerEvents="none";b.labelsSet.push(e);b.labels.push(e)}},addLabel:function(a,b,c,e,d,g,h,k,l,m){a={x:a,y:b,text:c,align:e,size:d,color:g,alpha:k,rotation:h,bold:l,url:m,enabled:!0};this.container&&this.drawLabel(a);this.allLabels.push(a)},
clearLabels:function(){var a=this.labels,b;for(b=a.length-1;0<=b;b--)a[b].remove();this.labels=[];this.allLabels=[]},updateHeight:function(){var a=this.divRealHeight,b=this.legend;if(b){var c=this.legendDiv.offsetHeight,b=b.position;if("top"==b||"bottom"==b){a-=c;if(0>a||isNaN(a))a=0;this.chartDiv.style.height=a+"px"}}return a},updateWidth:function(){var a=this.divRealWidth,b=this.divRealHeight,c=this.legend;if(c){var e=this.legendDiv,d=e.offsetWidth;isNaN(c.width)||(d=c.width);c.ieW&&(d=c.ieW);var g=
e.offsetHeight,e=e.style,h=this.chartDiv.style,k=c.position;if(("right"==k||"left"==k)&&void 0===c.divId){a-=d;if(0>a||isNaN(a))a=0;h.width=a+"px";this.balloon&&this.balloon.setBounds&&this.balloon.setBounds(2,2,a-2,this.realHeight);"left"==k?(h.left=d+"px",e.left="0px"):(h.left="0px",e.left=a+"px");b>g&&(e.top=(b-g)/2+"px")}}return a},getTitleHeight:function(){this.drawTitles(!0);return this.titleHeight},addTitle:function(a,b,c,e,d){isNaN(b)&&(b=this.fontSize+2);a={text:a,size:b,color:c,alpha:e,
bold:d,enabled:!0};this.titles.push(a);return a},handleWheel:function(a){var b=0;a||(a=window.event);a.wheelDelta?b=a.wheelDelta/120:a.detail&&(b=-a.detail/3);b&&this.handleWheelReal(b,a.shiftKey);a.preventDefault&&a.preventDefault()},handleWheelReal:function(){},handleDocTouchStart:function(){this.handleMouseMove();this.tmx=this.mouseX;this.tmy=this.mouseY;this.touchStartTime=(new Date).getTime()},handleDocTouchEnd:function(){-.5<this.tmx&&this.tmx<this.divRealWidth+1&&0<this.tmy&&this.tmy<this.divRealHeight?
(this.handleMouseMove(),4>Math.abs(this.mouseX-this.tmx)&&4>Math.abs(this.mouseY-this.tmy)?(this.tapped=!0,this.panRequired&&this.panEventsEnabled&&this.chartDiv&&(this.chartDiv.style.msTouchAction="none",this.chartDiv.style.touchAction="none")):this.mouseIsOver||this.resetTouchStyle()):(this.tapped=!1,this.resetTouchStyle())},resetTouchStyle:function(){this.panEventsEnabled&&this.chartDiv&&(this.chartDiv.style.msTouchAction="auto",this.chartDiv.style.touchAction="auto")},checkTouchDuration:function(a){var b=
this,c=(new Date).getTime();if(a)if(a.touches)b.isTouchEvent=!0;else if(!b.isTouchEvent)return!0;if(c-b.touchStartTime>b.touchClickDuration)return!0;setTimeout(function(){b.resetTouchDuration()},300)},resetTouchDuration:function(){this.isTouchEvent=!1},checkTouchMoved:function(){if(4<Math.abs(this.mouseX-this.tmx)||4<Math.abs(this.mouseY-this.tmy))return!0},addListeners:function(){var a=this,b=a.chartDiv;document.addEventListener?("ontouchstart"in document.documentElement&&(b.addEventListener("touchstart",
function(b){a.handleTouchStart.call(a,b)},!0),b.addEventListener("touchmove",function(b){a.handleMouseMove.call(a,b)},!0),b.addEventListener("touchend",function(b){a.handleTouchEnd.call(a,b)},!0),a.docfn1=function(b){a.handleDocTouchStart.call(a,b)},a.docfn2=function(b){a.handleDocTouchEnd.call(a,b)},document.addEventListener("touchstart",a.docfn1,!0),document.addEventListener("touchend",a.docfn2,!0)),b.addEventListener("mousedown",function(b){a.mouseIsOver=!0;a.handleMouseMove.call(a,b);a.handleMouseDown.call(a,
b);a.handleDocTouchStart.call(a,b)},!0),b.addEventListener("mouseover",function(b){a.handleMouseOver.call(a,b)},!0),b.addEventListener("mouseout",function(b){a.handleMouseOut.call(a,b)},!0),b.addEventListener("mouseup",function(b){a.handleDocTouchEnd.call(a,b)},!0)):(b.attachEvent("onmousedown",function(b){a.handleMouseDown.call(a,b)}),b.attachEvent("onmouseover",function(b){a.handleMouseOver.call(a,b)}),b.attachEvent("onmouseout",function(b){a.handleMouseOut.call(a,b)}))},dispDUpd:function(){this.skipEvents||
(this.dispatchDataUpdated&&(this.dispatchDataUpdated=!1,this.fire({type:"dataUpdated",chart:this})),this.chartCreated||(this.chartCreated=!0,this.fire({type:"init",chart:this})),this.chartRendered||(this.fire({type:"rendered",chart:this}),this.chartRendered=!0),this.fire({type:"drawn",chart:this}));this.skipEvents=!1},validateSize:function(){var a=this;a.premeasure();a.checkDisplay();a.cssScale=1;a.cssAngle=0;a.checkTransform(a.div);if(a.divRealWidth!=a.previousWidth||a.divRealHeight!=a.previousHeight){var b=
a.legend;if(0<a.realWidth&&0<a.realHeight){a.sizeChanged=!0;if(b){a.legendInitTO&&clearTimeout(a.legendInitTO);var c=setTimeout(function(){b.invalidateSize()},10);a.timeOuts.push(c);a.legendInitTO=c}a.marginsUpdated=!1;clearTimeout(a.initTO);c=setTimeout(function(){a.initChart()},10);a.timeOuts.push(c);a.initTO=c}a.renderFix();b&&b.renderFix&&b.renderFix();clearTimeout(a.resizedTO);a.resizedTO=setTimeout(function(){a.fire({type:"resized",chart:a})},10);a.previousHeight=a.divRealHeight;a.previousWidth=
a.divRealWidth}},invalidateSize:function(){this.previousHeight=this.previousWidth=NaN;this.invalidateSizeReal()},invalidateSizeReal:function(){var a=this;a.marginsUpdated=!1;clearTimeout(a.validateTO);var b=setTimeout(function(){a.validateSize()},5);a.timeOuts.push(b);a.validateTO=b},validateData:function(a){this.chartCreated&&(this.dataChanged=!0,this.marginsUpdated=!1,this.initChart(a))},validateNow:function(a,b){this.initTO&&clearTimeout(this.initTO);a&&(this.dataChanged=!0,this.marginsUpdated=
!1);this.skipEvents=b;this.chartRendered=!1;var c=this.legend;c&&c.position!=this.prevLegendPosition&&(this.previousWidth=this.mw=0,c.invalidateSize&&(c.invalidateSize(),this.validateSize()));this.write(this.div)},showItem:function(a){a.hidden=!1;this.initChart()},hideItem:function(a){a.hidden=!0;this.initChart()},hideBalloon:function(){var a=this;clearTimeout(a.hoverInt);clearTimeout(a.balloonTO);a.hoverInt=setTimeout(function(){a.hideBalloonReal.call(a)},a.hideBalloonTime)},cleanChart:function(){},
hideBalloonReal:function(){var a=this.balloon;a&&a.hide&&a.hide()},showBalloon:function(a,b,c,e,d){var g=this;clearTimeout(g.balloonTO);clearTimeout(g.hoverInt);g.balloonTO=setTimeout(function(){g.showBalloonReal.call(g,a,b,c,e,d)},1)},showBalloonReal:function(a,b,c,e,d){this.handleMouseMove();var g=this.balloon;g.enabled&&(g.followCursor(!1),g.changeColor(b),!c||g.fixedPosition?(g.setPosition(e,d),isNaN(e)||isNaN(d)?g.followCursor(!0):g.followCursor(!1)):g.followCursor(!0),a&&g.showBalloon(a))},
handleMouseOver:function(){this.outTO&&clearTimeout(this.outTO);d.resetMouseOver();this.mouseIsOver=!0},handleMouseOut:function(){var a=this;d.resetMouseOver();a.outTO&&clearTimeout(a.outTO);a.outTO=setTimeout(function(){a.handleMouseOutReal()},10)},handleMouseOutReal:function(){this.mouseIsOver=!1},handleMouseMove:function(a){a||(a=window.event);this.mouse2Y=this.mouse2X=NaN;var b,c,e,d;if(a){if(a.touches){var g=a.touches.item(1);g&&this.panEventsEnabled&&this.boundingRect&&(e=g.clientX-this.boundingRect.left,
d=g.clientY-this.boundingRect.top);a=a.touches.item(0);if(!a)return}else this.wasTouched=!1;this.boundingRect&&a.clientX&&(b=a.clientX-this.boundingRect.left,c=a.clientY-this.boundingRect.top);isNaN(e)?this.mouseX=b:(this.mouseX=Math.min(b,e),this.mouse2X=Math.max(b,e));isNaN(d)?this.mouseY=c:(this.mouseY=Math.min(c,d),this.mouse2Y=Math.max(c,d));this.autoTransform&&(this.mouseX/=this.cssScale,this.mouseY/=this.cssScale)}},handleTouchStart:function(a){this.hideBalloonReal();a&&(a.touches&&this.tapToActivate&&
!this.tapped||!this.panRequired)||(this.handleMouseMove(a),this.handleMouseDown(a))},handleTouchEnd:function(a){this.wasTouched=!0;this.handleMouseMove(a);d.resetMouseOver();this.handleReleaseOutside(a)},handleReleaseOutside:function(){this.handleDocTouchEnd.call(this)},handleMouseDown:function(a){d.resetMouseOver();this.mouseIsOver=!0;a&&a.preventDefault&&(this.panEventsEnabled?a.preventDefault():a.touches||a.preventDefault())},addLegend:function(a,b){a=d.processObject(a,d.AmLegend,this.theme);a.divId=
b;a.ieW=0;var c;c="object"!=typeof b&&b?document.getElementById(b):b;this.legend=a;a.chart=this;c?(a.div=c,a.position="outside",a.autoMargins=!1):a.div=this.legendDiv;return a},removeLegend:function(){this.legend=void 0;this.previousWidth=0;this.legendDiv.innerHTML=""},handleResize:function(){(d.isPercents(this.width)||d.isPercents(this.height))&&this.invalidateSizeReal();this.renderFix()},renderFix:function(){if(!d.VML){var a=this.container;a&&a.renderFix()}},getSVG:function(){if(d.hasSVG)return this.container},
animate:function(a,b,c,e,f,g,h){a["an_"+b]&&d.removeFromArray(this.animations,a["an_"+b]);c={obj:a,frame:0,attribute:b,from:c,to:e,time:f,effect:g,suffix:h};a["an_"+b]=c;this.animations.push(c);return c},setLegendData:function(a){var b=this.legend;b&&b.setData(a)},stopAnim:function(a){d.removeFromArray(this.animations,a)},updateAnimations:function(){var a;this.container&&this.container.update();if(this.animations)for(a=this.animations.length-1;0<=a;a--){var b=this.animations[a],c=d.updateRate*b.time,
e=b.frame+1,f=b.obj,g=b.attribute;if(e<=c){b.frame++;var h=Number(b.from),k=Number(b.to)-h,c=d[b.effect](0,e,h,k,c);0===k?(this.animations.splice(a,1),f.node.style[g]=Number(b.to)+b.suffix):f.node.style[g]=c+b.suffix}else f.node.style[g]=Number(b.to)+b.suffix,f.animationFinished=!0,this.animations.splice(a,1)}},update:function(){this.updateAnimations();var a=this.animatable;if(0<a.length){for(var b=!0,c=a.length-1;0<=c;c--){var e=a[c];e&&(e.animationFinished?a.splice(c,1):b=!1)}b&&(this.fire({type:"animationFinished",
chart:this}),this.animatable=[])}},inIframe:function(){try{return window.self!==window.top}catch(a){return!0}},brr:function(){if(!this.hideCredits){var a="amcharts.com",b=window.location.hostname.split("."),c;2<=b.length&&(c=b[b.length-2]+"."+b[b.length-1]);this.amLink&&(b=this.amLink.parentNode)&&b.removeChild(this.amLink);b=this.creditsPosition;if(c!=a||!0===this.inIframe()){var a="http://www."+a,e=c=0,d=this.realWidth,g=this.realHeight,h=this.type;if("serial"==h||"xy"==h||"gantt"==h)c=this.marginLeftReal,
e=this.marginTopReal,d=c+this.plotAreaWidth,g=e+this.plotAreaHeight;var h=a,k="JavaScript charts",l="JS chart by amCharts";"ammap"==this.product&&(h=a+"/javascript-maps/",k="Interactive JavaScript maps",l="JS map by amCharts");a=document.createElement("a");l=document.createTextNode(l);a.setAttribute("href",h);a.setAttribute("title",k);this.urlTarget&&a.setAttribute("target",this.urlTarget);a.appendChild(l);this.chartDiv.appendChild(a);this.amLink=a;h=a.style;h.position="absolute";h.textDecoration=
"none";h.color=this.color;h.fontFamily=this.fontFamily;h.fontSize="11px";h.opacity=.7;h.display="block";var k=a.offsetWidth,a=a.offsetHeight,l=5+c,m=e+5;"bottom-left"==b&&(l=5+c,m=g-a-3);"bottom-right"==b&&(l=d-k-5,m=g-a-3);"top-right"==b&&(l=d-k-5,m=e+5);h.left=l+"px";h.top=m+"px"}}}});d.Slice=d.Class({construct:function(){}});d.SerialDataItem=d.Class({construct:function(){}});d.GraphDataItem=d.Class({construct:function(){}});d.Guide=d.Class({construct:function(a){this.cname="Guide";d.applyTheme(this,
a,this.cname)}});d.Title=d.Class({construct:function(a){this.cname="Title";d.applyTheme(this,a,this.cname)}});d.Label=d.Class({construct:function(a){this.cname="Label";d.applyTheme(this,a,this.cname)}})})();(function(){var d=window.AmCharts;d.AmBalloon=d.Class({construct:function(a){this.cname="AmBalloon";this.enabled=!0;this.fillColor="#FFFFFF";this.fillAlpha=.8;this.borderThickness=2;this.borderColor="#FFFFFF";this.borderAlpha=1;this.cornerRadius=0;this.maxWidth=220;this.horizontalPadding=8;this.verticalPadding=4;this.pointerWidth=6;this.pointerOrientation="V";this.color="#000000";this.adjustBorderColor=!0;this.show=this.follow=this.showBullet=!1;this.bulletSize=3;this.shadowAlpha=.4;this.shadowColor=
"#000000";this.fadeOutDuration=this.animationDuration=.3;this.fixedPosition=!0;this.offsetY=6;this.offsetX=1;this.textAlign="center";this.disableMouseEvents=!0;this.deltaSignX=this.deltaSignY=1;d.isModern||(this.offsetY*=1.5);this.sdy=this.sdx=0;d.applyTheme(this,a,this.cname)},draw:function(){var a=this.pointToX,b=this.pointToY;d.isModern||(this.drop=!1);var c=this.chart;d.VML&&(this.fadeOutDuration=0);this.xAnim&&c.stopAnim(this.xAnim);this.yAnim&&c.stopAnim(this.yAnim);this.sdy=this.sdx=0;if(!isNaN(a)){var e=
this.follow,f=c.container,g=this.set;d.remove(g);this.removeDiv();g=f.set();g.node.style.pointerEvents="none";this.set=g;this.mainSet?(this.mainSet.push(this.set),this.sdx=this.mainSet.x,this.sdy=this.mainSet.y):c.balloonsSet.push(g);if(this.show){var h=this.l,k=this.t,l=this.r,m=this.b,n=this.balloonColor,p=this.fillColor,r=this.borderColor,t=p;void 0!=n&&(this.adjustBorderColor?t=r=n:p=n);var q=this.horizontalPadding,y=this.verticalPadding,B=this.pointerWidth,u=this.pointerOrientation,w=this.cornerRadius,
v=c.fontFamily,A=this.fontSize;void 0==A&&(A=c.fontSize);var n=document.createElement("div"),C=c.classNamePrefix;n.className=C+"-balloon-div";this.className&&(n.className=n.className+" "+C+"-balloon-div-"+this.className);C=n.style;this.disableMouseEvents&&(C.pointerEvents="none");C.position="absolute";var x=this.minWidth,z=document.createElement("div");n.appendChild(z);var E=z.style;isNaN(x)||(E.minWidth=x-2*q+"px");E.textAlign=this.textAlign;E.maxWidth=this.maxWidth+"px";E.fontSize=A+"px";E.color=
this.color;E.fontFamily=v;z.innerHTML=this.text;c.chartDiv.appendChild(n);this.textDiv=n;var E=n.offsetWidth,F=n.offsetHeight;n.clientHeight&&(E=n.clientWidth,F=n.clientHeight);v=F+2*y;z=E+2*q;!isNaN(x)&&z<x&&(z=x);window.opera&&(v+=2);var H=!1,A=this.offsetY;c.handDrawn&&(A+=c.handDrawScatter+2);"H"!=u?(x=a-z/2,b<k+v+10&&"down"!=u?(H=!0,e&&(b+=A),A=b+B,this.deltaSignY=-1):(e&&(b-=A),A=b-v-B,this.deltaSignY=1)):(2*B>v&&(B=v/2),A=b-v/2,a<h+(l-h)/2?(x=a+B,this.deltaSignX=-1):(x=a-z-B,this.deltaSignX=
1));A+v>=m&&(A=m-v);A<k&&(A=k);x<h&&(x=h);x+z>l&&(x=l-z);var k=A+y,m=x+q,G=this.shadowAlpha,D=this.shadowColor,q=this.borderThickness,L=this.bulletSize,J,y=this.fillAlpha,M=this.borderAlpha;this.showBullet&&(J=d.circle(f,L,t,y),g.push(J));this.drop?(h=z/1.6,l=0,"V"==u&&(u="down"),"H"==u&&(u="left"),"down"==u&&(x=a+1,A=b-h-h/3),"up"==u&&(l=180,x=a+1,A=b+h+h/3),"left"==u&&(l=270,x=a+h+h/3+2,A=b),"right"==u&&(l=90,x=a-h-h/3+2,A=b),k=A-F/2+1,m=x-E/2-1,p=d.drop(f,h,l,p,y,q,r,M)):0<w||0===B?(0<G&&(a=d.rect(f,
z,v,p,0,q+1,D,G,w),d.isModern?a.translate(1,1):a.translate(4,4),g.push(a)),p=d.rect(f,z,v,p,y,q,r,M,w)):(t=[],w=[],"H"!=u?(h=a-x,h>z-B&&(h=z-B),h<B&&(h=B),t=[0,h-B,a-x,h+B,z,z,0,0],w=H?[0,0,b-A,0,0,v,v,0]:[v,v,b-A,v,v,0,0,v]):(u=b-A,u>v-B&&(u=v-B),u<B&&(u=B),w=[0,u-B,b-A,u+B,v,v,0,0],t=a<h+(l-h)/2?[0,0,x<a?0:a-x,0,0,z,z,0]:[z,z,x+z>a?z:a-x,z,z,0,0,z]),0<G&&(a=d.polygon(f,t,w,p,0,q,D,G),a.translate(1,1),g.push(a)),p=d.polygon(f,t,w,p,y,q,r,M));this.bg=p;g.push(p);p.toFront();d.setCN(c,p,"balloon-bg");
this.className&&d.setCN(c,p,"balloon-bg-"+this.className);f=1*this.deltaSignX;m+=this.sdx;k+=this.sdy;C.left=m+"px";C.top=k+"px";g.translate(x-f,A,1,!0);p=p.getBBox();this.bottom=A+v+1;this.yPos=p.y+A;J&&J.translate(this.pointToX-x+f,b-A);b=this.animationDuration;0<this.animationDuration&&!e&&!isNaN(this.prevX)&&(g.translate(this.prevX,this.prevY,NaN,!0),g.animate({translate:x-f+","+A},b,"easeOutSine"),n&&(C.left=this.prevTX+"px",C.top=this.prevTY+"px",this.xAnim=c.animate({node:n},"left",this.prevTX,
m,b,"easeOutSine","px"),this.yAnim=c.animate({node:n},"top",this.prevTY,k,b,"easeOutSine","px")));this.prevX=x-f;this.prevY=A;this.prevTX=m;this.prevTY=k}}},fixPrevious:function(){this.rPrevX=this.prevX;this.rPrevY=this.prevY;this.rPrevTX=this.prevTX;this.rPrevTY=this.prevTY},restorePrevious:function(){this.prevX=this.rPrevX;this.prevY=this.rPrevY;this.prevTX=this.rPrevTX;this.prevTY=this.rPrevTY},followMouse:function(){if(this.follow&&this.show){var a=this.chart.mouseX-this.offsetX*this.deltaSignX-
this.sdx,b=this.chart.mouseY-this.sdy;this.pointToX=a;this.pointToY=b;if(a!=this.previousX||b!=this.previousY)if(this.previousX=a,this.previousY=b,0===this.cornerRadius)this.draw();else{var c=this.set;if(c){var e=c.getBBox(),a=a-e.width/2,d=b-e.height-10;a<this.l&&(a=this.l);a>this.r-e.width&&(a=this.r-e.width);d<this.t&&(d=b+10);c.translate(a,d);b=this.textDiv.style;b.left=a+this.horizontalPadding+"px";b.top=d+this.verticalPadding+"px"}}}},changeColor:function(a){this.balloonColor=a},setBounds:function(a,
b,c,e){this.l=a;this.t=b;this.r=c;this.b=e;this.destroyTO&&clearTimeout(this.destroyTO)},showBalloon:function(a){if(this.text!=a||this.positionChanged)this.text=a,this.isHiding=!1,this.show=!0,this.destroyTO&&clearTimeout(this.destroyTO),a=this.chart,this.fadeAnim1&&a.stopAnim(this.fadeAnim1),this.fadeAnim2&&a.stopAnim(this.fadeAnim2),this.draw(),this.positionChanged=!1},hide:function(a){var b=this;b.text=void 0;isNaN(a)&&(a=b.fadeOutDuration);var c=b.chart;if(0<a&&!b.isHiding){b.isHiding=!0;b.destroyTO&&
clearTimeout(b.destroyTO);b.destroyTO=setTimeout(function(){b.destroy.call(b)},1E3*a);b.follow=!1;b.show=!1;var e=b.set;e&&(e.setAttr("opacity",b.fillAlpha),b.fadeAnim1=e.animate({opacity:0},a,"easeInSine"));b.textDiv&&(b.fadeAnim2=c.animate({node:b.textDiv},"opacity",1,0,a,"easeInSine",""))}else b.show=!1,b.follow=!1,b.destroy()},setPosition:function(a,b){if(a!=this.pointToX||b!=this.pointToY)this.previousX=this.pointToX,this.previousY=this.pointToY,this.pointToX=a,this.pointToY=b,this.positionChanged=
!0},followCursor:function(a){var b=this;b.follow=a;clearInterval(b.interval);var c=b.chart.mouseX-b.sdx,e=b.chart.mouseY-b.sdy;!isNaN(c)&&a&&(b.pointToX=c-b.offsetX*b.deltaSignX,b.pointToY=e,b.followMouse(),b.interval=setInterval(function(){b.followMouse.call(b)},40))},removeDiv:function(){if(this.textDiv){var a=this.textDiv.parentNode;a&&a.removeChild(this.textDiv)}},destroy:function(){clearInterval(this.interval);d.remove(this.set);this.removeDiv();this.set=null}})})();(function(){var d=window.AmCharts;d.circle=function(a,b,c,e,f,g,h,k,l){0>=b&&(b=.001);if(void 0==f||0===f)f=.01;void 0===g&&(g="#000000");void 0===h&&(h=0);e={fill:c,stroke:g,"fill-opacity":e,"stroke-width":f,"stroke-opacity":h};a=isNaN(l)?a.circle(0,0,b).attr(e):a.ellipse(0,0,b,l).attr(e);k&&a.gradient("radialGradient",[c,d.adjustLuminosity(c,-.6)]);return a};d.text=function(a,b,c,e,f,g,h,k){g||(g="middle");"right"==g&&(g="end");"left"==g&&(g="start");isNaN(k)&&(k=1);void 0!==b&&(b=String(b),d.isIE&&
!d.isModern&&(b=b.replace("&amp;","&"),b=b.replace("&","&amp;")));c={fill:c,"font-family":e,"font-size":f+"px",opacity:k};!0===h&&(c["font-weight"]="bold");c["text-anchor"]=g;return a.text(b,c)};d.polygon=function(a,b,c,e,f,g,h,k,l,m,n){isNaN(g)&&(g=.01);isNaN(k)&&(k=f);var p=e,r=!1;"object"==typeof p&&1<p.length&&(r=!0,p=p[0]);void 0===h&&(h=p);f={fill:p,stroke:h,"fill-opacity":f,"stroke-width":g,"stroke-opacity":k};void 0!==n&&0<n&&(f["stroke-dasharray"]=n);n=d.dx;g=d.dy;a.handDrawn&&(c=d.makeHD(b,
c,a.handDrawScatter),b=c[0],c=c[1]);h=Math.round;m&&(h=Number);k="M"+(h(b[0])+n)+","+(h(c[0])+g);for(p=1;p<b.length;p++)m&&(b[p]=d.roundTo(b[p],5),c[p]=d.roundTo(c[p],5)),k+=" L"+(h(b[p])+n)+","+(h(c[p])+g);a=a.path(k+" Z").attr(f);r&&a.gradient("linearGradient",e,l);return a};d.rect=function(a,b,c,e,f,g,h,k,l,m,n){if(isNaN(b)||isNaN(c))return a.set();isNaN(g)&&(g=0);void 0===l&&(l=0);void 0===m&&(m=270);isNaN(f)&&(f=0);var p=e,r=!1;"object"==typeof p&&(p=p[0],r=!0);void 0===h&&(h=p);void 0===k&&
(k=f);b=Math.round(b);c=Math.round(c);var t=0,q=0;0>b&&(b=Math.abs(b),t=-b);0>c&&(c=Math.abs(c),q=-c);t+=d.dx;q+=d.dy;f={fill:p,stroke:h,"fill-opacity":f,"stroke-opacity":k};void 0!==n&&0<n&&(f["stroke-dasharray"]=n);a=a.rect(t,q,b,c,l,g).attr(f);r&&a.gradient("linearGradient",e,m);return a};d.bullet=function(a,b,c,e,f,g,h,k,l,m,n,p,r){var t;"circle"==b&&(b="round");switch(b){case "round":t=d.circle(a,c/2,e,f,g,h,k);break;case "square":t=d.polygon(a,[-c/2,c/2,c/2,-c/2],[c/2,c/2,-c/2,-c/2],e,f,g,h,
k,m-180,void 0,r);break;case "rectangle":t=d.polygon(a,[-c,c,c,-c],[c/2,c/2,-c/2,-c/2],e,f,g,h,k,m-180,void 0,r);break;case "diamond":t=d.polygon(a,[-c/2,0,c/2,0],[0,-c/2,0,c/2],e,f,g,h,k);break;case "triangleUp":t=d.triangle(a,c,0,e,f,g,h,k);break;case "triangleDown":t=d.triangle(a,c,180,e,f,g,h,k);break;case "triangleLeft":t=d.triangle(a,c,270,e,f,g,h,k);break;case "triangleRight":t=d.triangle(a,c,90,e,f,g,h,k);break;case "bubble":t=d.circle(a,c/2,e,f,g,h,k,!0);break;case "line":t=d.line(a,[-c/
2,c/2],[0,0],e,f,g,h,k);break;case "yError":t=a.set();t.push(d.line(a,[0,0],[-c/2,c/2],e,f,g));t.push(d.line(a,[-l,l],[-c/2,-c/2],e,f,g));t.push(d.line(a,[-l,l],[c/2,c/2],e,f,g));break;case "xError":t=a.set(),t.push(d.line(a,[-c/2,c/2],[0,0],e,f,g)),t.push(d.line(a,[-c/2,-c/2],[-l,l],e,f,g)),t.push(d.line(a,[c/2,c/2],[-l,l],e,f,g))}t&&t.pattern(n,NaN,p);return t};d.triangle=function(a,b,c,e,d,g,h,k){if(void 0===g||0===g)g=1;void 0===h&&(h="#000");void 0===k&&(k=0);e={fill:e,stroke:h,"fill-opacity":d,
"stroke-width":g,"stroke-opacity":k};b/=2;var l;0===c&&(l=" M"+-b+","+b+" L0,"+-b+" L"+b+","+b+" Z");180==c&&(l=" M"+-b+","+-b+" L0,"+b+" L"+b+","+-b+" Z");90==c&&(l=" M"+-b+","+-b+" L"+b+",0 L"+-b+","+b+" Z");270==c&&(l=" M"+-b+",0 L"+b+","+b+" L"+b+","+-b+" Z");return a.path(l).attr(e)};d.line=function(a,b,c,e,f,g,h,k,l,m,n){if(a.handDrawn&&!n)return d.handDrawnLine(a,b,c,e,f,g,h,k,l,m,n);g={fill:"none","stroke-width":g};void 0!==h&&0<h&&(g["stroke-dasharray"]=h);isNaN(f)||(g["stroke-opacity"]=
f);e&&(g.stroke=e);e=Math.round;m&&(e=Number,b[0]=d.roundTo(b[0],5),c[0]=d.roundTo(c[0],5));m=d.dx;f=d.dy;h="M"+(e(b[0])+m)+","+(e(c[0])+f);for(k=1;k<b.length;k++)b[k]=d.roundTo(b[k],5),c[k]=d.roundTo(c[k],5),h+=" L"+(e(b[k])+m)+","+(e(c[k])+f);if(d.VML)return a.path(h,void 0,!0).attr(g);l&&(h+=" M0,0 L0,0");return a.path(h).attr(g)};d.makeHD=function(a,b,c){for(var e=[],d=[],g=1;g<a.length;g++)for(var h=Number(a[g-1]),k=Number(b[g-1]),l=Number(a[g]),m=Number(b[g]),n=Math.round(Math.sqrt(Math.pow(l-
h,2)+Math.pow(m-k,2))/50)+1,l=(l-h)/n,m=(m-k)/n,p=0;p<=n;p++){var r=k+p*m+Math.random()*c;e.push(h+p*l+Math.random()*c);d.push(r)}return[e,d]};d.handDrawnLine=function(a,b,c,e,f,g,h,k,l,m){var n,p=a.set();for(n=1;n<b.length;n++)for(var r=[b[n-1],b[n]],t=[c[n-1],c[n]],t=d.makeHD(r,t,a.handDrawScatter),r=t[0],t=t[1],q=1;q<r.length;q++)p.push(d.line(a,[r[q-1],r[q]],[t[q-1],t[q]],e,f,g+Math.random()*a.handDrawThickness-a.handDrawThickness/2,h,k,l,m,!0));return p};d.doNothing=function(a){return a};d.drop=
function(a,b,c,e,d,g,h,k){var l=1/180*Math.PI,m=c-20,n=Math.sin(m*l)*b,p=Math.cos(m*l)*b,r=Math.sin((m+40)*l)*b,t=Math.cos((m+40)*l)*b,q=.8*b,y=-b/3,B=b/3;0===c&&(y=-y,B=0);180==c&&(B=0);90==c&&(y=0);270==c&&(y=0,B=-B);c={fill:e,stroke:h,"stroke-width":g,"stroke-opacity":k,"fill-opacity":d};b="M"+n+","+p+" A"+b+","+b+",0,1,1,"+r+","+t+(" A"+q+","+q+",0,0,0,"+(Math.sin((m+20)*l)*b+B)+","+(Math.cos((m+20)*l)*b+y));b+=" A"+q+","+q+",0,0,0,"+n+","+p;return a.path(b,void 0,void 0,"1000,1000").attr(c)};
d.wedge=function(a,b,c,e,f,g,h,k,l,m,n,p,r,t){var q=Math.round;g=q(g);h=q(h);k=q(k);var y=q(h/g*k),B=d.VML,u=359.5+g/100;359.94<u&&(u=359.94);f>=u&&(f=u);var w=1/180*Math.PI,u=b+Math.sin(e*w)*k,v=c-Math.cos(e*w)*y,A=b+Math.sin(e*w)*g,C=c-Math.cos(e*w)*h,x=b+Math.sin((e+f)*w)*g,z=c-Math.cos((e+f)*w)*h,E=b+Math.sin((e+f)*w)*k,w=c-Math.cos((e+f)*w)*y,F={fill:d.adjustLuminosity(m.fill,-.2),"stroke-opacity":0,"fill-opacity":m["fill-opacity"]},H=0;180<Math.abs(f)&&(H=1);e=a.set();var G;B&&(u=q(10*u),A=
q(10*A),x=q(10*x),E=q(10*E),v=q(10*v),C=q(10*C),z=q(10*z),w=q(10*w),b=q(10*b),l=q(10*l),c=q(10*c),g*=10,h*=10,k*=10,y*=10,1>Math.abs(f)&&1>=Math.abs(x-A)&&1>=Math.abs(z-C)&&(G=!0));f="";var D;p&&(F["fill-opacity"]=0,F["stroke-opacity"]=m["stroke-opacity"]/2,F.stroke=m.stroke);if(0<l){D=" M"+u+","+(v+l)+" L"+A+","+(C+l);B?(G||(D+=" A"+(b-g)+","+(l+c-h)+","+(b+g)+","+(l+c+h)+","+A+","+(C+l)+","+x+","+(z+l)),D+=" L"+E+","+(w+l),0<k&&(G||(D+=" B"+(b-k)+","+(l+c-y)+","+(b+k)+","+(l+c+y)+","+E+","+(l+w)+
","+u+","+(l+v)))):(D+=" A"+g+","+h+",0,"+H+",1,"+x+","+(z+l)+" L"+E+","+(w+l),0<k&&(D+=" A"+k+","+y+",0,"+H+",0,"+u+","+(v+l)));D+=" Z";var L=l;B&&(L/=10);for(var J=0;J<L;J+=10){var M=a.path(D,void 0,void 0,"1000,1000").attr(F);e.push(M);M.translate(0,-J)}D=a.path(" M"+u+","+v+" L"+u+","+(v+l)+" L"+A+","+(C+l)+" L"+A+","+C+" L"+u+","+v+" Z",void 0,void 0,"1000,1000").attr(F);l=a.path(" M"+x+","+z+" L"+x+","+(z+l)+" L"+E+","+(w+l)+" L"+E+","+w+" L"+x+","+z+" Z",void 0,void 0,"1000,1000").attr(F);
e.push(D);e.push(l)}B?(G||(f=" A"+q(b-g)+","+q(c-h)+","+q(b+g)+","+q(c+h)+","+q(A)+","+q(C)+","+q(x)+","+q(z)),h=" M"+q(u)+","+q(v)+" L"+q(A)+","+q(C)+f+" L"+q(E)+","+q(w)):h=" M"+u+","+v+" L"+A+","+C+(" A"+g+","+h+",0,"+H+",1,"+x+","+z)+" L"+E+","+w;0<k&&(B?G||(h+=" B"+(b-k)+","+(c-y)+","+(b+k)+","+(c+y)+","+E+","+w+","+u+","+v):h+=" A"+k+","+y+",0,"+H+",0,"+u+","+v);a.handDrawn&&(k=d.line(a,[u,A],[v,C],m.stroke,m.thickness*Math.random()*a.handDrawThickness,m["stroke-opacity"]),e.push(k));a=a.path(h+
" Z",void 0,void 0,"1000,1000").attr(m);if(n){k=[];for(y=0;y<n.length;y++)k.push(d.adjustLuminosity(m.fill,n[y]));"radial"!=t||d.isModern||(k=[]);0<k.length&&a.gradient(t+"Gradient",k)}d.isModern&&"radial"==t&&a.grad&&(a.grad.setAttribute("gradientUnits","userSpaceOnUse"),a.grad.setAttribute("r",g),a.grad.setAttribute("cx",b),a.grad.setAttribute("cy",c));a.pattern(p,NaN,r);e.wedge=a;e.push(a);return e};d.rgb2hex=function(a){return(a=a.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i))&&
4===a.length?"#"+("0"+parseInt(a[1],10).toString(16)).slice(-2)+("0"+parseInt(a[2],10).toString(16)).slice(-2)+("0"+parseInt(a[3],10).toString(16)).slice(-2):""};d.adjustLuminosity=function(a,b){a&&-1!=a.indexOf("rgb")&&(a=d.rgb2hex(a));a=String(a).replace(/[^0-9a-f]/gi,"");6>a.length&&(a=String(a[0])+String(a[0])+String(a[1])+String(a[1])+String(a[2])+String(a[2]));b=b||0;var c="#",e,f;for(f=0;3>f;f++)e=parseInt(a.substr(2*f,2),16),e=Math.round(Math.min(Math.max(0,e+e*b),255)).toString(16),c+=("00"+
e).substr(e.length);return c}})();(function(){var d=window.AmCharts;d.AmLegend=d.Class({construct:function(a){this.enabled=!0;this.cname="AmLegend";this.createEvents("rollOverMarker","rollOverItem","rollOutMarker","rollOutItem","showItem","hideItem","clickMarker","clickLabel");this.position="bottom";this.borderColor=this.color="#000000";this.borderAlpha=0;this.markerLabelGap=5;this.verticalGap=10;this.align="left";this.horizontalGap=0;this.spacing=10;this.markerDisabledColor="#AAB3B3";this.markerType="square";this.markerSize=16;this.markerBorderThickness=
this.markerBorderAlpha=1;this.marginBottom=this.marginTop=0;this.marginLeft=this.marginRight=20;this.autoMargins=!0;this.valueWidth=50;this.switchable=!0;this.switchType="x";this.switchColor="#FFFFFF";this.rollOverColor="#CC0000";this.reversedOrder=!1;this.labelText="[[title]]";this.valueText="[[value]]";this.accessibleLabel="[[title]]";this.useMarkerColorForLabels=!1;this.rollOverGraphAlpha=1;this.textClickEnabled=!1;this.equalWidths=!0;this.backgroundColor="#FFFFFF";this.backgroundAlpha=0;this.useGraphSettings=
!1;this.showEntries=!0;this.labelDx=0;d.applyTheme(this,a,this.cname)},setData:function(a){this.legendData=a;this.invalidateSize()},invalidateSize:function(){this.destroy();this.entries=[];this.valueLabels=[];var a=this.legendData;this.enabled&&(d.ifArray(a)||d.ifArray(this.data))&&this.drawLegend()},drawLegend:function(){var a=this.chart,b=this.position,c=this.width,e=a.divRealWidth,f=a.divRealHeight,g=this.div,h=this.legendData;this.data&&(h=this.combineLegend?this.legendData.concat(this.data):
this.data);isNaN(this.fontSize)&&(this.fontSize=a.fontSize);this.maxColumnsReal=this.maxColumns;if("right"==b||"left"==b)this.maxColumnsReal=1,this.autoMargins&&(this.marginLeft=this.marginRight=10);else if(this.autoMargins){this.marginRight=a.marginRight;this.marginLeft=a.marginLeft;var k=a.autoMarginOffset;"bottom"==b?(this.marginBottom=k,this.marginTop=0):(this.marginTop=k,this.marginBottom=0)}c=void 0!==c?d.toCoordinate(c,e):"right"!=b&&"left"!=b?a.realWidth:0<this.ieW?this.ieW:a.realWidth;"outside"==
b?(c=g.offsetWidth,f=g.offsetHeight,g.clientHeight&&(c=g.clientWidth,f=g.clientHeight)):(isNaN(c)||(g.style.width=c+"px"),g.className="amChartsLegend "+a.classNamePrefix+"-legend-div");this.divWidth=c;(b=this.container)?(b.container.innerHTML="",g.appendChild(b.container),b.width=c,b.height=f,b.setSize(c,f),b.addDefs(a)):b=new d.AmDraw(g,c,f,a);this.container=b;this.lx=0;this.ly=8;f=this.markerSize;f>this.fontSize&&(this.ly=f/2-1);0<f&&(this.lx+=f+this.markerLabelGap);this.titleWidth=0;if(f=this.title)f=
d.text(this.container,f,this.color,a.fontFamily,this.fontSize,"start",!0),d.setCN(a,f,"legend-title"),f.translate(this.marginLeft,this.marginTop+this.verticalGap+this.ly+1),a=f.getBBox(),this.titleWidth=a.width+15,this.titleHeight=a.height+6;this.index=this.maxLabelWidth=0;if(this.showEntries){for(a=0;a<h.length;a++)this.createEntry(h[a]);for(a=this.index=0;a<h.length;a++)this.createValue(h[a])}this.arrangeEntries();this.updateValues()},arrangeEntries:function(){var a=this.position,b=this.marginLeft+
this.titleWidth,c=this.marginRight,e=this.marginTop,f=this.marginBottom,g=this.horizontalGap,h=this.div,k=this.divWidth,l=this.maxColumnsReal,m=this.verticalGap,n=this.spacing,p=k-c-b,r=0,t=0,q=this.container;this.set&&this.set.remove();var y=q.set();this.set=y;var B=q.set();y.push(B);var u=this.entries,w,v;for(v=0;v<u.length;v++){w=u[v].getBBox();var A=w.width;A>r&&(r=A);w=w.height;w>t&&(t=w)}var A=t=0,C=g,x=0,z=0;for(v=0;v<u.length;v++){var E=u[v];this.reversedOrder&&(E=u[u.length-v-1]);w=E.getBBox();
var F;this.equalWidths?F=A*(r+n+this.markerLabelGap):(F=C,C=C+w.width+g+n);F+w.width>p&&0<v&&0!==A&&(t++,F=A=0,C=F+w.width+g+n,x=x+z+m,z=0);w.height>z&&(z=w.height);E.translate(F,x);A++;!isNaN(l)&&A>=l&&(A=0,t++,x=x+z+m,C=g,z=0);B.push(E)}w=B.getBBox();l=w.height+2*m-1;"left"==a||"right"==a?(n=w.width+2*g,k=n+b+c,h.style.width=k+"px",this.ieW=k):n=k-b-c-1;c=d.polygon(this.container,[0,n,n,0],[0,0,l,l],this.backgroundColor,this.backgroundAlpha,1,this.borderColor,this.borderAlpha);d.setCN(this.chart,
c,"legend-bg");y.push(c);y.translate(b,e);c.toBack();b=g;if("top"==a||"bottom"==a||"absolute"==a||"outside"==a)"center"==this.align?b=g+(n-w.width)/2:"right"==this.align&&(b=g+n-w.width);B.translate(b,m+1);this.titleHeight>l&&(l=this.titleHeight);e=l+e+f+1;0>e&&(e=0);"absolute"!=a&&"outside"!=a&&e>this.chart.divRealHeight&&(h.style.top="0px");h.style.height=Math.round(e)+"px";q.setSize(this.divWidth,e)},createEntry:function(a){if(!1!==a.visibleInLegend&&!a.hideFromLegend){var b=this,c=b.chart,e=b.useGraphSettings,
f=a.markerType;f&&(e=!1);a.legendEntryWidth=b.markerSize;f||(f=b.markerType);var g=a.color,h=a.alpha;a.legendKeyColor&&(g=a.legendKeyColor());a.legendKeyAlpha&&(h=a.legendKeyAlpha());var k;!0===a.hidden&&(k=g=b.markerDisabledColor);var l=a.pattern,m,n=a.customMarker;n||(n=b.customMarker);var p=b.container,r=b.markerSize,t=0,q=0,y=r/2;if(e){e=a.type;b.switchType=void 0;if("line"==e||"step"==e||"smoothedLine"==e||"ohlc"==e)m=p.set(),a.hidden||(g=a.lineColorR,k=a.bulletBorderColorR),t=d.line(p,[0,2*
r],[r/2,r/2],g,a.lineAlpha,a.lineThickness,a.dashLength),d.setCN(c,t,"graph-stroke"),m.push(t),a.bullet&&(a.hidden||(g=a.bulletColorR),t=d.bullet(p,a.bullet,a.bulletSize,g,a.bulletAlpha,a.bulletBorderThickness,k,a.bulletBorderAlpha))&&(d.setCN(c,t,"graph-bullet"),t.translate(r+1,r/2),m.push(t)),y=0,t=r,q=r/3;else{a.getGradRotation&&(m=a.getGradRotation(),0===m&&(m=180));t=a.fillColorsR;!0===a.hidden&&(t=g);if(m=b.createMarker("rectangle",t,a.fillAlphas,a.lineThickness,g,a.lineAlpha,m,l,a.dashLength))y=
r,m.translate(y,r/2);t=r}d.setCN(c,m,"graph-"+e);d.setCN(c,m,"graph-"+a.id)}else if(n)m=p.image(n,0,0,r,r);else{var B;isNaN(b.gradientRotation)||(B=180+b.gradientRotation);(m=b.createMarker(f,g,h,void 0,void 0,void 0,B,l))&&m.translate(r/2,r/2)}d.setCN(c,m,"legend-marker");b.addListeners(m,a);p=p.set([m]);b.switchable&&a.switchable&&p.setAttr("cursor","pointer");void 0!==a.id&&d.setCN(c,p,"legend-item-"+a.id);d.setCN(c,p,a.className,!0);k=b.switchType;var u;k&&"none"!=k&&0<r&&("x"==k?(u=b.createX(),
u.translate(r/2,r/2)):u=b.createV(),u.dItem=a,!0!==a.hidden?"x"==k?u.hide():u.show():"x"!=k&&u.hide(),b.switchable||u.hide(),b.addListeners(u,a),a.legendSwitch=u,p.push(u),d.setCN(c,u,"legend-switch"));k=b.color;a.showBalloon&&b.textClickEnabled&&void 0!==b.selectedColor&&(k=b.selectedColor);b.useMarkerColorForLabels&&!l&&(k=g);!0===a.hidden&&(k=b.markerDisabledColor);g=d.massReplace(b.labelText,{"[[title]]":a.title});void 0!==b.tabIndex&&(p.setAttr("tabindex",b.tabIndex),p.setAttr("role","menuitem"),
p.keyup(function(c){13==c.keyCode&&b.clickMarker(a,c)}));c.accessible&&b.accessibleLabel&&(l=d.massReplace(b.accessibleLabel,{"[[title]]":a.title}),c.makeAccessible(p,l));l=b.fontSize;m&&(r<=l&&(r=r/2+b.ly-l/2+(l+2-r)/2-q,m.translate(y,r),u&&u.translate(u.x,r)),a.legendEntryWidth=m.getBBox().width);var w;g&&(g=d.fixBrakes(g),a.legendTextReal=g,w=b.labelWidth,w=isNaN(w)?d.text(b.container,g,k,c.fontFamily,l,"start"):d.wrappedText(b.container,g,k,c.fontFamily,l,"start",!1,w,0),d.setCN(c,w,"legend-label"),
w.translate(b.lx+t,b.ly),p.push(w),b.labelDx=t,c=w.getBBox().width,b.maxLabelWidth<c&&(b.maxLabelWidth=c));b.entries[b.index]=p;a.legendEntry=b.entries[b.index];a.legendMarker=m;a.legendLabel=w;b.index++}},addListeners:function(a,b){var c=this;a&&a.mouseover(function(a){c.rollOverMarker(b,a)}).mouseout(function(a){c.rollOutMarker(b,a)}).click(function(a){c.clickMarker(b,a)})},rollOverMarker:function(a,b){this.switchable&&this.dispatch("rollOverMarker",a,b);this.dispatch("rollOverItem",a,b)},rollOutMarker:function(a,
b){this.switchable&&this.dispatch("rollOutMarker",a,b);this.dispatch("rollOutItem",a,b)},clickMarker:function(a,b){this.switchable&&(!0===a.hidden?this.dispatch("showItem",a,b):this.dispatch("hideItem",a,b));this.dispatch("clickMarker",a,b)},rollOverLabel:function(a,b){a.hidden||this.textClickEnabled&&a.legendLabel&&a.legendLabel.attr({fill:this.rollOverColor});this.dispatch("rollOverItem",a,b)},rollOutLabel:function(a,b){if(!a.hidden&&this.textClickEnabled&&a.legendLabel){var c=this.color;void 0!==
this.selectedColor&&a.showBalloon&&(c=this.selectedColor);this.useMarkerColorForLabels&&(c=a.lineColor,void 0===c&&(c=a.color));a.legendLabel.attr({fill:c})}this.dispatch("rollOutItem",a,b)},clickLabel:function(a,b){this.textClickEnabled?a.hidden||this.dispatch("clickLabel",a,b):this.switchable&&(!0===a.hidden?this.dispatch("showItem",a,b):this.dispatch("hideItem",a,b))},dispatch:function(a,b,c){a={type:a,dataItem:b,target:this,event:c,chart:this.chart};this.chart&&this.chart.handleLegendEvent(a);
this.fire(a)},createValue:function(a){var b=this,c=b.fontSize,e=b.chart;if(!1!==a.visibleInLegend&&!a.hideFromLegend){var f=b.maxLabelWidth;b.forceWidth&&(f=b.labelWidth);b.equalWidths||(b.valueAlign="left");"left"==b.valueAlign&&a.legendLabel&&(f=a.legendLabel.getBBox().width);var g=f;if(b.valueText&&0<b.valueWidth){var h=b.color;b.useMarkerColorForValues&&(h=a.color,a.legendKeyColor&&(h=a.legendKeyColor()));!0===a.hidden&&(h=b.markerDisabledColor);var k=b.valueText,f=f+b.lx+b.labelDx+b.markerLabelGap+
b.valueWidth,l="end";"left"==b.valueAlign&&(f-=b.valueWidth,l="start");h=d.text(b.container,k,h,b.chart.fontFamily,c,l);d.setCN(e,h,"legend-value");h.translate(f,b.ly);b.entries[b.index].push(h);g+=b.valueWidth+2*b.markerLabelGap;h.dItem=a;b.valueLabels.push(h)}b.index++;e=b.markerSize;e<c+7&&(e=c+7,d.VML&&(e+=3));c=b.container.rect(a.legendEntryWidth,0,g,e,0,0).attr({stroke:"none",fill:"#fff","fill-opacity":.005});c.dItem=a;b.entries[b.index-1].push(c);c.mouseover(function(c){b.rollOverLabel(a,c)}).mouseout(function(c){b.rollOutLabel(a,
c)}).click(function(c){b.clickLabel(a,c)})}},createV:function(){var a=this.markerSize;return d.polygon(this.container,[a/5,a/2,a-a/5,a/2],[a/3,a-a/5,a/5,a/1.7],this.switchColor)},createX:function(){var a=(this.markerSize-4)/2,b={stroke:this.switchColor,"stroke-width":3},c=this.container,e=d.line(c,[-a,a],[-a,a]).attr(b),a=d.line(c,[-a,a],[a,-a]).attr(b);return this.container.set([e,a])},createMarker:function(a,b,c,e,f,g,h,k,l){var m=this.markerSize,n=this.container;f||(f=this.markerBorderColor);f||
(f=b);isNaN(e)&&(e=this.markerBorderThickness);isNaN(g)&&(g=this.markerBorderAlpha);return d.bullet(n,a,m,b,c,e,f,g,m,h,k,this.chart.path,l)},validateNow:function(){this.invalidateSize()},updateValues:function(){var a=this.valueLabels,b=this.chart,c,e=this.data;if(a)for(c=0;c<a.length;c++){var f=a[c],g=f.dItem;g.periodDataItem=void 0;g.periodPercentDataItem=void 0;var h=" ";if(e)g.value?f.text(g.value):f.text("");else{var k=null;if(void 0!==g.type){var k=g.currentDataItem,l=this.periodValueText;g.legendPeriodValueText&&
(l=g.legendPeriodValueText);g.legendPeriodValueTextR&&(l=g.legendPeriodValueTextR);k?(h=this.valueText,g.legendValueText&&(h=g.legendValueText),g.legendValueTextR&&(h=g.legendValueTextR),h=b.formatString(h,k)):l&&b.formatPeriodString&&(l=d.massReplace(l,{"[[title]]":g.title}),h=b.formatPeriodString(l,g))}else h=b.formatString(this.valueText,g);l=g;k&&(l=k);var m=this.valueFunction;m&&(h=m(l,h,b.periodDataItem));var n;this.useMarkerColorForLabels&&!k&&g.lastDataItem&&(k=g.lastDataItem);k?n=b.getBalloonColor(g,
k):g.legendKeyColor&&(n=g.legendKeyColor());g.legendColorFunction&&(n=g.legendColorFunction(l,h,g.periodDataItem,g.periodPercentDataItem));f.text(h);if(!g.pattern&&(this.useMarkerColorForValues&&f.setAttr("fill",n),this.useMarkerColorForLabels)){if(f=g.legendMarker)f.setAttr("fill",n),f.setAttr("stroke",n);(f=g.legendLabel)&&(g.hidden?f.setAttr("fill",this.markerDisabledColor):f.setAttr("fill",n))}}}},renderFix:function(){if(!d.VML&&this.enabled){var a=this.container;a&&a.renderFix()}},destroy:function(){this.div.innerHTML=
"";d.remove(this.set)}})})();(function(){var d=window.AmCharts;d.AmMap=d.Class({inherits:d.AmChart,construct:function(a){this.cname="AmMap";this.type="map";this.theme=a;this.svgNotSupported="This browser doesn't support SVG. Use Chrome, Firefox, Internet Explorer 9 or later.";this.createEvents("rollOverMapObject","rollOutMapObject","clickMapObject","mouseDownMapObject","selectedObjectChanged","homeButtonClicked","zoomCompleted","dragCompleted","positionChanged","writeDevInfo","click","descriptionClosed");this.zoomDuration=.6;
this.zoomControl=new d.ZoomControl(a);this.fitMapToContainer=!0;this.mouseWheelZoomEnabled=this.backgroundZoomsToTop=!1;this.allowClickOnSelectedObject=this.useHandCursorOnClickableOjects=this.showBalloonOnSelectedObject=!0;this.showObjectsAfterZoom=this.wheelBusy=!1;this.zoomOnDoubleClick=this.useObjectColorForBalloon=!0;this.allowMultipleDescriptionWindows=!1;this.dragMap=this.centerMap=this.linesAboveImages=!0;this.colorSteps=5;this.forceNormalize=!1;this.showAreasInList=!0;this.showLinesInList=
this.showImagesInList=!1;this.areasProcessor=new d.AreasProcessor(this);this.areasSettings=new d.AreasSettings(a);this.imagesProcessor=new d.ImagesProcessor(this);this.imagesSettings=new d.ImagesSettings(a);this.linesProcessor=new d.LinesProcessor(this);this.linesSettings=new d.LinesSettings(a);this.initialTouchZoom=1;this.showDescriptionOnHover=!1;d.AmMap.base.construct.call(this,a);this.creditsPosition="bottom-left";this.product="ammap";this.areasClasses={};this.updatableImages=[];d.applyTheme(this,
a,this.cname)},initChart:function(){this.zoomInstantly=!0;var a=this.container;this.panRequired=!0;if(this.sizeChanged&&d.hasSVG&&this.chartCreated){this.updatableImages=[];this.freeLabelsSet&&this.freeLabelsSet.remove();this.freeLabelsSet=a.set();this.container.setSize(this.realWidth,this.realHeight);this.resizeMap();this.drawBackground();this.redrawLabels();this.drawTitles();this.processObjects(!0);this.rescaleObjects();this.zoomControl.init(this,a);this.drawBg();var b=this.smallMap;b&&b.init(this,
a);(b=this.valueLegend)&&b.init(this,a);this.sizeChanged=!1;this.zoomToLongLat(this.zLevelTemp,this.zLongTemp,this.zLatTemp,!0);this.previousWidth=this.realWidth;this.previousHeight=this.realHeight;this.updateSmallMap();this.linkSet.toFront();this.zoomControl.update&&this.zoomControl.update()}else(d.AmMap.base.initChart.call(this),d.hasSVG)?(this.dataChanged&&(this.parseData(),this.dispatchDataUpdated=!0,this.dataChanged=!1,a=this.legend)&&(a.position="absolute",a.invalidateSize()),this.createDescriptionsDiv(),
this.svgAreas=[],this.svgAreasById={},this.drawChart()):(this.chartDiv.style.textAlign="",this.chartDiv.setAttribute("class","ammapAlert"),this.chartDiv.innerHTML=this.svgNotSupported,this.fire({type:"failed",chart:this}))},storeTemp:function(){if(d.hasSVG&&0<this.realWidth&&0<this.realHeight){var a=this.mapContainer.getBBox();0<a.width&&0<a.height&&(a=this.zoomLongitude(),isNaN(a)||(this.zLongTemp=a),a=this.zoomLatitude(),isNaN(a)||(this.zLatTemp=a),a=this.zoomLevel(),isNaN(a)||(this.zLevelTemp=
a))}},invalidateSize:function(){this.storeTemp();d.AmMap.base.invalidateSize.call(this)},validateSize:function(){this.storeTemp();d.AmMap.base.validateSize.call(this)},handleWheelReal:function(a){if(!this.wheelBusy){this.stopAnimation();var b=this.zoomLevel(),c=this.zoomControl,e=c.zoomFactor;this.wheelBusy=!0;a=d.fitToBounds(0<a?b*e:b/e,c.minZoomLevel,c.maxZoomLevel);e=this.mouseX/this.mapWidth;c=this.mouseY/this.mapHeight;e=(this.zoomX()-e)*(a/b)+e;b=(this.zoomY()-c)*(a/b)+c;this.zoomTo(a,e,b)}},
addLegend:function(a,b){a.position="absolute";a.autoMargins=!1;a.valueWidth=0;a.switchable=!1;d.AmMap.base.addLegend.call(this,a,b);void 0===a.enabled&&(a.enabled=!0);return a},handleLegendEvent:function(){},createDescriptionsDiv:function(){if(!this.descriptionsDiv){var a=document.createElement("div"),b=a.style;b.position="absolute";b.left="0px";b.top="0px";this.descriptionsDiv=a}this.containerDiv.appendChild(this.descriptionsDiv)},drawChart:function(){d.AmMap.base.drawChart.call(this);var a=this.dataProvider;
this.dataProvider=a=d.extend(a,new d.MapData,!0);this.areasSettings=d.processObject(this.areasSettings,d.AreasSettings,this.theme);this.imagesSettings=d.processObject(this.imagesSettings,d.ImagesSettings,this.theme);this.linesSettings=d.processObject(this.linesSettings,d.LinesSettings,this.theme);var b=this.container;this.mapContainer&&this.mapContainer.remove();this.mapContainer=b.set();this.graphsSet.push(this.mapContainer);var c;a.map&&(c=d.maps[a.map]);a.mapVar&&(c=a.mapVar);c?(this.svgData=c.svg,
this.getBounds(),this.buildEverything()):(a=a.mapURL)&&this.loadXml(a);this.balloonsSet.toFront()},drawBg:function(){var a=this;a.background.click(function(){a.handleBackgroundClick()});a.background.mouseover(function(){a.rollOutMapObject(a.previouslyHovered)})},buildEverything:function(){if(0<this.realWidth&&0<this.realHeight){var a=this.container,b=this.dataProvider;this.projection||(this.projection=b.projection,this.projection||(this.projection="equirectangular"));this.updatableImages=[];var c=
this.projection;c&&(this.projectionFunction=d[c]);this.projectionFunction||(this.projectionFunction=d.equirectangular);this.dpProjectionFunction=d[b.projection];this.dpProjectionFunction||(this.dpProjectionFunction=d.equirectangular);this.zoomControl=d.processObject(this.zoomControl,d.ZoomControl,this.theme);this.zoomControl.init(this,a);this.drawBg();this.buildSVGMap();this.projectionFunction&&c!=b.projection||this.forceNormalize?(this.normalizeMap(),this.changeProjection()):this.fixMapPosition();
if(c=this.smallMap)c=d.processObject(c,d.SmallMap,this.theme),c.init(this,a),this.smallMap=c;isNaN(b.zoomX)&&isNaN(b.zoomY)&&isNaN(b.zoomLatitude)&&isNaN(b.zoomLongitude)&&(this.centerMap?(c=this.xyToCoordinates(this.mapWidth/2,this.mapHeight/2),b.zoomLongitudeC=c.longitude,b.zoomLatitudeC=c.latitude):(b.zoomX=0,b.zoomY=0),this.zoomInstantly=!0);this.selectObject(this.dataProvider);this.processAreas();if(b=this.valueLegend)this.valueLegend=b=d.processObject(b,d.ValueLegend,this.theme),b.init(this,
a);this.objectList&&(a=this.objectList=d.processObject(this.objectList,d.ObjectList))&&(this.clearObjectList(),a.init(this));this.dispDUpd();this.updateSmallMap();this.linkSet.toFront()}else this.cleanChart()},hideGroup:function(a){this.showHideGroup(a,!1)},showGroup:function(a){this.showHideGroup(a,!0)},showHideGroup:function(a,b){this.showHideReal(this.imagesProcessor.allObjects,a,b);this.showHideReal(this.areasProcessor.allObjects,a,b);this.showHideReal(this.linesProcessor.allObjects,a,b)},showHideReal:function(a,
b,c){var e;for(e=0;e<a.length;e++){var d=a[e];if(d.groupId==b){var g=d.displayObject;g&&(c?(d.hidden=!1,g.show()):(d.hidden=!0,g.hide()))}}},makeObjectAccessible:function(a){if(a.accessibleLabel){var b=this.formatString(a.accessibleLabel,a);a.displayObject&&this.makeAccessible(a.displayObject,b,"menuitem")}},update:function(){if(d.hasSVG){d.AmMap.base.update.call(this);this.zoomControl&&this.zoomControl.update&&this.zoomControl.update();for(var a=0,b=this.updatableImages.length;a<b;a++)this.updatableImages[a].update()}},
animateMap:function(){var a=this;a.totalFrames=a.zoomDuration*d.updateRate;a.totalFrames+=1;a.frame=0;a.tweenPercent=0;a.balloon.hide(0);setTimeout(function(){a.updateSize.call(a)},1E3/d.updateRate)},updateSize:function(){var a=this,b=a.totalFrames;a.preventHover=!0;a.frame<=b?(a.frame++,b=d.easeOutSine(0,a.frame,0,1,b),1<=b?(b=1,a.preventHover=!1,a.wheelBusy=!1):window.requestAnimationFrame?window.requestAnimationFrame(function(){a.updateSize.call(a)}):setTimeout(function(){a.updateSize.call(a)},
1E3/d.updateRate),.8<b&&(a.preventHover=!1)):(b=1,a.preventHover=!1,a.wheelBusy=!1);a.tweenPercent=b;a.rescaleMapAndObjects()},rescaleMapAndObjects:function(){var a=this.initialScale,b=this.initialX,c=this.initialY,e=this.tweenPercent,a=a+(this.finalScale-a)*e;this.mapContainer.translate(b+(this.finalX-b)*e,c+(this.finalY-c)*e,a,!0);if(this.areasSettings.adjustOutlineThickness){for(var b=this.svgAreas,d=0;d<b.length;d++)(c=b[d])&&c.setAttr("stroke-width",this.areasSettings.outlineThickness/a/this.mapScale);
if(b=this.dataProvider.areas)for(d=0;d<b.length;d++){var c=b[d],g=c.displayObject;g&&g.setAttr("stroke-width",c.outlineThicknessReal/a/this.mapScale)}}this.rescaleObjects();this.positionChanged();this.updateSmallMap();1==e&&this.fire({type:"zoomCompleted",chart:this})},updateSmallMap:function(){this.smallMap&&this.smallMap.update()},rescaleObjects:function(){var a=this.mapContainer.scale,b=this.imagesProcessor.objectsToResize,c;for(c=0;c<b.length;c++){var d=b[c].image,f=b[c].scale,g=b[c].mapImage;
isNaN(g.selectedScaleReal)||g!=this.selectedObject||(g.tempScale=f,f*=g.selectedScaleReal);d.translate(d.x,d.y,f/a,!0)}b=this.imagesProcessor.labelsToReposition;for(c=0;c<b.length;c++)d=b[c],d.imageLabel&&this.imagesProcessor.positionLabel(d.imageLabel,d,d.labelPositionReal);b=this.linesProcessor;if(d=b.linesToResize)for(c=0;c<d.length;c++)f=d[c],f.line.setAttr("stroke-width",f.thickness/a);b=b.objectsToResize;for(c=0;c<b.length;c++)d=b[c],d.translate(d.x,d.y,1/a,!0)},handleTouchEnd:function(a){this.initialDistance=
NaN;this.mouseIsDown=this.isDragging=!1;d.AmMap.base.handleTouchEnd.call(this,a)},handleMouseDown:function(a){d.resetMouseOver();this.mouseIsDown=this.mouseIsOver=!0;this.balloon.hide(0);a&&this.mouseIsOver&&a.preventDefault&&this.panEventsEnabled&&a.preventDefault();if(this.chartCreated&&!this.preventHover&&(this.initialTouchZoom=this.zoomLevel(),this.dragMap&&(this.stopAnimation(),this.mapContainerClickX=this.mapContainer.x,this.mapContainerClickY=this.mapContainer.y),a||(a=window.event),a.shiftKey&&
!0===this.developerMode&&this.getDevInfo(),a&&a.touches)){var b=this.mouseX,c=this.mouseY,e=a.touches.item(1);e&&this.panEventsEnabled&&this.boundingRect&&(a=e.clientX-this.boundingRect.left,e=e.clientY-this.boundingRect.top,this.middleXP=(b+(a-b)/2)/this.realWidth,this.middleYP=(c+(e-c)/2)/this.realHeight,this.initialDistance=Math.sqrt(Math.pow(a-b,2)+Math.pow(e-c,2)))}},stopDrag:function(){this.isDragging=!1},handleReleaseOutside:function(){if(d.isModern){var a=this;d.AmMap.base.handleReleaseOutside.call(a);
a.mouseIsDown=!1;setTimeout(function(){a.resetPinch.call(a)},100);if(!a.preventHover){a.stopDrag();var b=a.zoomControl;b&&b.draggerUp&&b.draggerUp();a.mapWasDragged=!1;var b=a.mapContainer,c=a.mapContainerClickX,e=a.mapContainerClickY;isNaN(c)||isNaN(e)||!(3<Math.abs(b.x-c)||3<Math.abs(b.y-e))||(a.mapWasDragged=!0,b={type:"dragCompleted",zoomX:a.zoomX(),zoomY:a.zoomY(),zoomLevel:a.zoomLevel(),chart:a},a.fire(b));(a.mouseIsOver&&!a.mapWasDragged&&!a.skipClick||a.wasTouched&&3>Math.abs(a.mouseX-a.tmx)&&
3>Math.abs(a.mouseY-a.tmy))&&a.fire({type:"click",x:a.mouseX,y:a.mouseY,chart:a});a.mapContainerClickX=NaN;a.mapContainerClickY=NaN;a.objectWasClicked=!1;a.zoomOnDoubleClick&&a.mouseIsOver&&(b=(new Date).getTime(),200>b-a.previousClickTime&&40<b-a.previousClickTime&&a.doDoubleClickZoom(),a.previousClickTime=b)}a.wasTouched=!1}},resetPinch:function(){this.mapWasPinched=!1},handleMouseMove:function(a){var b=this;d.AmMap.base.handleMouseMove.call(b,a);if(!a||!a.touches||!b.tapToActivate||b.tapped){b.panEventsEnabled&&
b.mouseIsOver&&a&&a.preventDefault&&a.preventDefault();var c=b.previuosMouseX,e=b.previuosMouseY,f=b.mouseX,g=b.mouseY,h=b.zoomControl;isNaN(c)&&(c=f);isNaN(e)&&(e=g);b.mouse2X=NaN;b.mouse2Y=NaN;a&&a.touches&&(a=a.touches.item(1))&&b.panEventsEnabled&&b.boundingRect&&(b.mouse2X=a.clientX-b.boundingRect.left,b.mouse2Y=a.clientY-b.boundingRect.top);if(a=b.mapContainer){var k=b.mouse2X,l=b.mouse2Y;b.pinchTO&&clearTimeout(b.pinchTO);b.pinchTO=setTimeout(function(){b.resetPinch.call(b)},1E3);var m=b.realHeight,
n=b.realWidth,p=b.mapWidth,r=b.mapHeight;b.mouseIsDown&&b.dragMap&&(3<Math.abs(b.previuosMouseX-b.mouseX)||3<Math.abs(b.previuosMouseY-b.mouseY))&&(b.isDragging=!0);if(!isNaN(k)){b.stopDrag();var t=Math.sqrt(Math.pow(k-f,2)+Math.pow(l-g,2)),q=b.initialDistance;isNaN(q)&&(q=Math.sqrt(Math.pow(k-f,2)+Math.pow(l-g,2)));if(!isNaN(q)){var k=b.initialTouchZoom*t/q,k=d.fitToBounds(k,h.minZoomLevel,h.maxZoomLevel),h=b.zoomLevel(),q=b.middleXP,l=b.middleYP,t=m/r,y=n/p,q=(b.zoomX()-q*y)*(k/h)+q*y,l=(b.zoomY()-
l*t)*(k/h)+l*t;.1<Math.abs(k-h)&&(b.zoomTo(k,q,l,!0),b.mapWasPinched=!0,clearTimeout(b.pinchTO))}}k=a.scale;b.isDragging&&(b.balloon.hide(0),b.positionChanged(),c=a.x+(f-c),e=a.y+(g-e),b.preventDragOut&&(r=-r*k+m/2-b.diffY*b.mapScale*k,m=m/2-b.diffY*b.mapScale*k,c=d.fitToBounds(c,-p*k+n/2,n/2),e=d.fitToBounds(e,r,m)),isNaN(c)||isNaN(e)||(a.translate(c,e,k,!0),b.updateSmallMap()));b.previuosMouseX=f;b.previuosMouseY=g}}},selectObject:function(a,b){var c=this;a||(a=c.dataProvider);a.isOver=!1;var e=
a.linkToObject;d.isString(e)&&(e=c.getObjectById(e));a.useTargetsZoomValues&&e&&(a.zoomX=e.zoomX,a.zoomY=e.zoomY,a.zoomLatitude=e.zoomLatitude,a.zoomLongitude=e.zoomLongitude,a.zoomLevel=e.zoomLevel);var f=c.selectedObject;f&&c.returnInitialColor(f);c.selectedObject=a;var g=!1,h,k;"MapArea"==a.objectType&&(a.autoZoomReal&&(g=!0),h=c.areasSettings.selectedOutlineColor,k=c.areasSettings.selectedOutlineThickness);if(e&&!g&&(d.isString(e)&&(e=c.getObjectById(e)),isNaN(a.zoomLevel)&&isNaN(a.zoomX)&&isNaN(a.zoomY))){if(c.extendMapData(e))return;
c.selectObject(e);return}c.allowMultipleDescriptionWindows||c.closeAllDescriptions();clearTimeout(c.selectedObjectTimeOut);clearTimeout(c.processObjectsTimeOut);e=c.zoomDuration;!g&&isNaN(a.zoomLevel)&&isNaN(a.zoomX)&&isNaN(a.zoomY)?(c.showDescriptionAndGetUrl(),b||c.processObjects()):(c.selectedObjectTimeOut=setTimeout(function(){c.showDescriptionAndGetUrl.call(c)},1E3*e+200),c.showObjectsAfterZoom)?b||(c.processObjectsTimeOut=setTimeout(function(){c.processObjects.call(c)},1E3*e+200)):b||c.processObjects();
e=a.displayObject;g=a.selectedColorReal;if("MapImage"==a.objectType){h=c.imagesSettings.selectedOutlineColor;k=c.imagesSettings.selectedOutlineThickness;var e=a.image,l=a.selectedScaleReal;if(!isNaN(l)&&1!=l){var m=a.scale;isNaN(a.tempScale)||(m=a.tempScale);isNaN(m)&&(m=1);a.tempScale=m;var n=a.displayObject;n.translate(n.x,n.y,m*l,!0)}}if(e){if(d.removeCN(c,e,"selected-object"),d.setCN(c,e,"selected-object"),a.bringForwardOnHover&&a.displayObject.toFront(),c.outlinesToFront(),!a.preserveOriginalAttributes){e.setAttr("stroke",
a.outlineColorReal);void 0!==g&&e.setAttr("fill",g);void 0!==h&&e.setAttr("stroke",h);void 0!==k&&e.setAttr("stroke-width",k);"MapLine"==a.objectType&&((l=a.lineSvg)&&l.setAttr("stroke",g),l=a.arrowSvg)&&(l.setAttr("fill",g),l.setAttr("stroke",g));if(l=a.imageLabel)m=a.selectedLabelColorReal,void 0!==m&&l.setAttr("fill",m);a.selectable||(e.setAttr("cursor","default"),l&&l.setAttr("cursor","default"))}}else c.returnInitialColorReal(a);if(e=a.groupId)for(l=a.groupArray,l||(l=c.getGroupById(e),a.groupArray=
l),m=0;m<l.length;m++)if(n=l[m],n.isOver=!1,e=n.displayObject,"MapImage"==n.objectType&&(e=n.image),e){var p=n.selectedColorReal;void 0!==p&&e.setAttr("fill",p);void 0!==h&&e.setAttr("stroke",h);void 0!==k&&e.setAttr("stroke-width",k);"MapLine"==n.objectType&&((e=n.lineSvg)&&e.setAttr("stroke",g),e=n.arrowSvg)&&(e.setAttr("fill",g),e.setAttr("stroke",g))}c.rescaleObjects();c.zoomToSelectedObject();f!=a&&c.fire({type:"selectedObjectChanged",chart:c})},returnInitialColor:function(a,b){this.returnInitialColorReal(a);
b&&(a.isFirst=!1);if(this.selectedObject.bringForwardOnHover){var c=this.selectedObject.displayObject;c&&c.toFront()}if(c=a.groupId){var c=this.getGroupById(c),d;for(d=0;d<c.length;d++)this.returnInitialColorReal(c[d]),b&&(c[d].isFirst=!1)}this.outlinesToFront()},outlinesToFront:function(){if(this.outlines)for(var a=0;a<this.outlines.length;a++)this.outlines[a].toFront()},closeAllDescriptions:function(){this.descriptionsDiv.innerHTML=""},fireClosed:function(){this.fire({type:"descriptionClosed",chart:this})},
returnInitialColorReal:function(a){a.isOver=!1;var b=a.displayObject;if(b){d.removeCN(this,b,"selected-object");b.toPrevious();if("MapImage"==a.objectType){var c=a.tempScale;isNaN(c)||b.translate(b.x,b.y,c,!0);a.tempScale=NaN;b=a.image}c=a.colorReal;if("MapLine"==a.objectType){var e=a.lineSvg;e&&e.setAttr("stroke",c);if(e=a.arrowSvg){var f=a.arrowColor;void 0===f&&(f=c);e.setAttr("fill",f);e.setAttr("stroke",f)}}var e=a.alphaReal,f=a.outlineAlphaReal,g=a.outlineThicknessReal,h=a.outlineColorReal;
if(a.showAsSelected){var c=a.selectedColorReal,k,l;"MapImage"==a.objectType&&(k=this.imagesSettings.selectedOutlineColor,l=this.imagesSettings.selectedOutlineThickness);"MapArea"==a.objectType&&(k=this.areasSettings.selectedOutlineColor,l=this.areasSettings.selectedOutlineThickness);void 0!==k&&(h=k);void 0!==l&&(g=l)}"bubble"==a.type&&(c=void 0);void 0!==c&&b.setAttr("fill",c);if(k=a.image)k.setAttr("fill",c),k.setAttr("stroke",h),k.setAttr("stroke-width",g),k.setAttr("fill-opacity",e),k.setAttr("stroke-opacity",
f);"MapArea"==a.objectType&&(c=1,this.areasSettings.adjustOutlineThickness&&(c=this.zoomLevel()*this.mapScale),b.setAttr("stroke",h),b.setAttr("stroke-width",g/c),b.setAttr("fill-opacity",e),b.setAttr("stroke-opacity",f));(c=a.pattern)&&b.pattern(c,this.mapScale,this.path);(b=a.imageLabel)&&!a.labelInactive&&(a.showAsSelected&&void 0!==a.selectedLabelColor?b.setAttr("fill",a.selectedLabelColor):b.setAttr("fill",a.labelColorReal))}},zoomToRectangle:function(a,b,c,e){var f=this.realWidth,g=this.realHeight,
h=this.mapSet.scale,k=this.zoomControl,f=d.fitToBounds(c/f>e/g?.8*f/(c*h):.8*g/(e*h),k.minZoomLevel,k.maxZoomLevel);this.zoomToMapXY(f,(a+c/2)*h,(b+e/2)*h)},zoomToLatLongRectangle:function(a,b,c,e){var f=this.dataProvider,g=this.zoomControl,h=Math.abs(c-a),k=Math.abs(b-e),l=Math.abs(f.rightLongitude-f.leftLongitude),f=Math.abs(f.topLatitude-f.bottomLatitude),g=d.fitToBounds(h/l>k/f?.8*l/h:.8*f/k,g.minZoomLevel,g.maxZoomLevel);this.zoomToLongLat(g,a+(c-a)/2,e+(b-e)/2)},getGroupById:function(a){var b=
[];this.getGroup(this.imagesProcessor.allObjects,a,b);this.getGroup(this.linesProcessor.allObjects,a,b);this.getGroup(this.areasProcessor.allObjects,a,b);return b},zoomToGroup:function(a){a="object"==typeof a?a:this.getGroupById(a);var b,c,d,f,g;for(g=0;g<a.length;g++){var h=a[g].displayObject;if(h){var k=h.getBBox(),h=k.y,l=k.y+k.height,m=k.x,k=k.x+k.width;if(h<b||isNaN(b))b=h;if(l>f||isNaN(f))f=l;if(m<c||isNaN(c))c=m;if(k>d||isNaN(d))d=k}}c+=this.diffX;d+=this.diffX;f+=this.diffY;b+=this.diffY;
this.zoomToRectangle(c,b,d-c,f-b)},getGroup:function(a,b,c){if(a){var d;for(d=0;d<a.length;d++){var f=a[d];f.groupId==b&&c.push(f)}}},zoomToStageXY:function(a,b,c,e){if(!this.objectWasClicked){var f=this.zoomControl;a=d.fitToBounds(a,f.minZoomLevel,f.maxZoomLevel);var f=this.zoomLevel(),g=this.mapSet.getBBox();b=this.xyToCoordinates((b-this.mapContainer.x)/f-g.x*this.mapScale,(c-this.mapContainer.y)/f-g.y*this.mapScale);this.zoomToLongLat(a,b.longitude,b.latitude,e)}},zoomToLongLat:function(a,b,c,
d){b=this.coordinatesToXY(b,c);this.zoomToMapXY(a,b.x,b.y,d)},zoomToMapXY:function(a,b,c,d){var f=this.mapWidth,g=this.mapHeight;this.zoomTo(a,-(b/f)*a+this.realWidth/f/2,-(c/g)*a+this.realHeight/g/2,d)},zoomToObject:function(a){if(a){var b=a.zoomLatitude,c=a.zoomLongitude;isNaN(a.zoomLatitudeC)||(b=a.zoomLatitudeC);isNaN(a.zoomLongitudeC)||(c=a.zoomLongitudeC);var e=a.zoomLevel,f=this.zoomInstantly,g=a.zoomX,h=a.zoomY,k=this.realWidth,l=this.realHeight;isNaN(e)||(isNaN(b)||isNaN(c)?this.zoomTo(e,
g,h,f):this.zoomToLongLat(e,c,b,f));this.zoomInstantly=!1;"MapImage"==a.objectType&&isNaN(a.zoomX)&&isNaN(a.zoomY)&&isNaN(a.zoomLatitude)&&isNaN(a.zoomLongitude)&&!isNaN(a.latitude)&&!isNaN(a.longitude)&&this.zoomToLongLat(a.zoomLevel,a.longitude,a.latitude);"MapArea"==a.objectType&&(f=a.displayObject.getBBox(),g=this.mapScale,b=(f.x+this.diffX)*g,c=(f.y+this.diffY)*g,e=f.width*g,f=f.height*g,k=a.autoZoomReal&&isNaN(a.zoomLevel)?e/k>f/l?.8*k/e:.8*l/f:a.zoomLevel,l=this.zoomControl,k=d.fitToBounds(k,
l.minZoomLevel,l.maxZoomLevel),isNaN(a.zoomX)&&isNaN(a.zoomY)&&isNaN(a.zoomLatitude)&&isNaN(a.zoomLongitude)&&this.zoomToMapXY(k,b+e/2,c+f/2));this.zoomControl.update()}},zoomToSelectedObject:function(){this.zoomToObject(this.selectedObject)},zoomTo:function(a,b,c,e){var f=this.zoomControl;a=d.fitToBounds(a,f.minZoomLevel,f.maxZoomLevel);f=this.zoomLevel();isNaN(b)&&(b=this.realWidth/this.mapWidth,b=(this.zoomX()-.5*b)*(a/f)+.5*b);isNaN(c)&&(c=this.realHeight/this.mapHeight,c=(this.zoomY()-.5*c)*
(a/f)+.5*c);this.stopAnimation();isNaN(a)||(f=this.mapContainer,this.initialX=f.x,this.initialY=f.y,this.initialScale=f.scale,this.finalX=this.mapWidth*b,this.finalY=this.mapHeight*c,this.finalScale=a,this.finalX!=this.initialX||this.finalY!=this.initialY||this.finalScale!=this.initialScale?e?(this.tweenPercent=1,this.rescaleMapAndObjects(),this.wheelBusy=!1):this.animateMap():this.wheelBusy=!1)},loadXml:function(a){var b;window.XMLHttpRequest&&(b=new XMLHttpRequest);b.overrideMimeType&&b.overrideMimeType("text/xml");
b.open("GET",a,!1);b.send();this.parseXMLObject(b.responseXML);this.svgData&&this.buildEverything()},stopAnimation:function(){this.frame=this.totalFrames},processObjects:function(a){var b=this.selectedObject;if(0<b.images.length||0<b.areas.length||0<b.lines.length||b==this.dataProvider||a){a=this.container;var c=this.stageImagesContainer;c&&c.remove();this.stageImagesContainer=c=a.set();this.trendLinesSet.push(c);var d=this.stageLinesContainer;d&&d.remove();this.stageLinesContainer=d=a.set();this.trendLinesSet.push(d);
var f=this.mapImagesContainer;f&&f.remove();this.mapImagesContainer=f=a.set();this.mapContainer.push(f);var g=this.mapLinesContainer;g&&g.remove();this.mapLinesContainer=g=a.set();this.mapContainer.push(g);this.linesAboveImages?(f.toFront(),c.toFront(),g.toFront(),d.toFront()):(g.toFront(),d.toFront(),f.toFront(),c.toFront());b&&(this.imagesProcessor.reset(),this.linesProcessor.reset(),this.linesAboveImages?(this.imagesProcessor.process(b),this.linesProcessor.process(b)):(this.linesProcessor.process(b),
this.imagesProcessor.process(b)));this.rescaleObjects()}},processAreas:function(){this.areasProcessor.process(this.dataProvider)},buildSVGMap:function(){d.remove(this.mapSet);var a=this.svgData.g.path,b=this.container,c=b.set();this.svgAreas=[];this.svgAreasById={};void 0===a.length&&(a=[a]);var e;for(e=0;e<a.length;e++){var f=a[e],g=f.d,h=f.title;f.titleTr&&(h=f.titleTr);var k=b.path(g);k.id=f.id;if(this.areasSettings.preserveOriginalAttributes){k.customAttr={};for(var l in f)"d"!=l&&"id"!=l&&"title"!=
l&&(k.customAttr[l]=f[l])}f.outline&&(k.outline=!0);k.path=g;this.svgAreasById[f.id]={area:k,title:h,className:f["class"]};this.svgAreas.push(k);c.push(k)}this.mapSet=c;this.mapContainer.push(c);this.resizeMap()},centerAlign:function(){},setProjection:function(a){this.projection=a;this.chartCreated=!1;this.buildEverything()},addObjectEventListeners:function(a,b){var c=this;a.mousedown(function(a){c.mouseDownMapObject(b,a)}).mouseup(function(a){c.clickMapObject(b,a)}).mouseover(function(a){c.balloonX=
NaN;c.rollOverMapObject(b,!0,a)}).mouseout(function(a){c.balloonX=NaN;c.rollOutMapObject(b,a)}).touchend(function(a){4>Math.abs(c.mouseX-c.tmx)&&4>Math.abs(c.mouseY-c.tmy)&&(c.tapped=!0);c.tapToActivate&&!c.tapped||c.mapWasDragged||c.mapWasPinched||(c.balloonX=NaN,c.rollOverMapObject(b,!0,a),c.clickMapObject(b,a))}).touchstart(function(a){c.tmx=c.mouseX;c.tmy=c.mouseY;c.mouseDownMapObject(b,a)}).keyup(function(a){13==a.keyCode&&c.clickMapObject(b,a)})},checkIfSelected:function(a){var b=this.selectedObject;
if(b==a)return!0;if(b=b.groupId){var b=this.getGroupById(b),c;for(c=0;c<b.length;c++)if(b[c]==a)return!0}return!1},clearMap:function(){this.chartDiv.innerHTML="";this.clearObjectList()},clearObjectList:function(){var a=this.objectList;a&&a.div&&(a.div.innerHTML="")},checkIfLast:function(a){if(a){var b=a.parentNode;if(b&&b.lastChild==a)return!0}return!1},showAsRolledOver:function(a){var b=a.displayObject;if(!a.showAsSelected&&b&&!a.isOver){b.node.onmouseout=function(){};b.node.onmouseover=function(){};
b.node.onclick=function(){};!a.isFirst&&a.bringForwardOnHover&&(b.toFront(),a.isFirst=!0);var c=a.rollOverColorReal,e;a.preserveOriginalAttributes&&(c=void 0);"bubble"==a.type&&(c=void 0);void 0==c&&(isNaN(a.rollOverBrightnessReal)||(c=d.adjustLuminosity(a.colorReal,a.rollOverBrightnessReal/100)));if(void 0!=c)if("MapImage"==a.objectType)(e=a.image)&&e.setAttr("fill",c);else if("MapLine"==a.objectType){if((e=a.lineSvg)&&e.setAttr("stroke",c),e=a.arrowSvg)e.setAttr("fill",c),e.setAttr("stroke",c)}else b.setAttr("fill",
c);(c=a.imageLabel)&&!a.labelInactive&&(e=a.labelRollOverColorReal,void 0!=e&&c.setAttr("fill",e));c=a.rollOverOutlineColorReal;void 0!=c&&("MapImage"==a.objectType?(e=a.image)&&e.setAttr("stroke",c):b.setAttr("stroke",c));"MapImage"==a.objectType?(c=this.imagesSettings.rollOverOutlineThickness,(e=a.image)&&(isNaN(c)||e.setAttr("stroke-width",c))):(c=this.areasSettings.rollOverOutlineThickness,isNaN(c)||b.setAttr("stroke-width",c));if("MapArea"==a.objectType){c=this.areasSettings;e=a.rollOverAlphaReal;
isNaN(e)||b.setAttr("fill-opacity",e);e=c.rollOverOutlineAlpha;isNaN(e)||b.setAttr("stroke-opacity",e);e=1;this.areasSettings.adjustOutlineThickness&&(e=this.zoomLevel()*this.mapScale);var f=c.rollOverOutlineThickness;isNaN(f)||b.setAttr("stroke-width",f/e);(c=c.rollOverPattern)&&b.pattern(c,this.mapScale,this.path)}"MapImage"==a.objectType&&(c=a.rollOverScaleReal,isNaN(c)||1==c||(e=b.scale,isNaN(e)&&(e=1),a.tempScale=e,b.translate(b.x,b.y,e*c,!0)));this.useHandCursorOnClickableOjects&&this.checkIfClickable(a)&&
b.setAttr("cursor","pointer");a.mouseEnabled&&this.addObjectEventListeners(b,a);a.isOver=!0}this.outlinesToFront()},rollOverMapObject:function(a,b,c){if(this.chartCreated){this.handleMouseMove();var d=this.previouslyHovered;d&&d!=a?(!1===this.checkIfSelected(d)&&(this.returnInitialColor(d,!0),this.previouslyHovered=null),this.balloon.hide(0)):clearTimeout(this.hoverInt);if(!this.preventHover){if(!1===this.checkIfSelected(a)){if(d=a.groupId){var d=this.getGroupById(d),f;for(f=0;f<d.length;f++)d[f]!=
a&&this.showAsRolledOver(d[f])}this.showAsRolledOver(a)}else(d=a.displayObject)&&(this.allowClickOnSelectedObject?d.setAttr("cursor","pointer"):d.setAttr("cursor","default"));this.showDescriptionOnHover?this.showDescription(a):!this.showBalloonOnSelectedObject&&this.checkIfSelected(a)||!1===b||(f=this.balloon,this.balloon.fixedPosition=!1,b=a.colorReal,d="",void 0!==b&&this.useObjectColorForBalloon||(b=f.fillColor),(f=a.balloonTextReal)&&(d=this.formatString(f,a)),this.balloonLabelFunction&&(d=this.balloonLabelFunction(a,
this)),d&&""!==d&&this.showBalloon(d,b,!1,this.balloonX,this.balloonY));this.fire({type:"rollOverMapObject",mapObject:a,chart:this,event:c});this.previouslyHovered=a}}},longitudeToX:function(a){return(this.longitudeToCoordinate(a)+this.diffX*this.mapScale)*this.zoomLevel()+this.mapContainer.x},latitudeToY:function(a){return(this.latitudeToCoordinate(a)+this.diffY*this.mapScale)*this.zoomLevel()+this.mapContainer.y},latitudeToStageY:function(a){return this.latitudeToCoordinate(a)*this.zoomLevel()+
this.mapContainer.y+this.diffY*this.mapScale},longitudeToStageX:function(a){return this.longitudeToCoordinate(a)*this.zoomLevel()+this.mapContainer.x+this.diffX*this.mapScale},stageXToLongitude:function(a){a=(a-this.mapContainer.x)/this.zoomLevel();return this.coordinateToLongitude(a)},stageYToLatitude:function(a){a=(a-this.mapContainer.y)/this.zoomLevel();return this.coordinateToLatitude(a)},rollOutMapObject:function(a,b){this.hideBalloon();a&&this.chartCreated&&a.isOver&&(this.checkIfSelected(a)||
this.returnInitialColor(a),this.fire({type:"rollOutMapObject",mapObject:a,chart:this,event:b}))},formatString:function(a,b){var c=this.nf,e=this.pf,f=b.title;b.titleTr&&(f=b.titleTr);void 0==f&&(f="");var g=b.value,g=isNaN(g)?"":d.formatNumber(g,c),c=b.percents,c=isNaN(c)?"":d.formatNumber(c,e),e=b.description;void 0==e&&(e="");var h=b.customData;void 0==h&&(h="");return a=d.massReplace(a,{"[[title]]":f,"[[value]]":g,"[[percent]]":c,"[[description]]":e,"[[customData]]":h})},mouseDownMapObject:function(a,
b){this.fire({type:"mouseDownMapObject",mapObject:a,chart:this,event:b})},clickMapObject:function(a,b){var c=this;b&&(b.touches||isNaN(a.zoomLevel)&&isNaN(a.zoomX)&&isNaN(a.zoomY)||c.hideBalloon());if(c.chartCreated&&!c.preventHover&&c.checkTouchDuration(b)&&!c.mapWasDragged&&c.checkIfClickable(a)&&!c.mapWasPinched){c.selectObject(a);var d=c.zoomLevel(),f=c.mapSet.getBBox(),d=c.xyToCoordinates((c.mouseX-c.mapContainer.x)/d-f.x*c.mapScale,(c.mouseY-c.mapContainer.y)/d-f.y*c.mapScale);c.clickLatitude=
d.latitude;c.clickLongitude=d.longitude;b&&b.touches&&setTimeout(function(){c.showBalloonAfterZoom.call(c)},1E3*c.zoomDuration);c.fire({type:"clickMapObject",mapObject:a,chart:c,event:b});c.objectWasClicked=!0}},showBalloonAfterZoom:function(){var a=this.clickLongitude,b=this.clickLatitude,c=this.selectedObject;"MapImage"!=c.objectType||isNaN(c.longitude)||(a=c.longitude,b=c.latitude);a=this.coordinatesToStageXY(a,b);this.balloonX=a.x;this.balloonY=a.y;this.rollOverMapObject(this.selectedObject,!0)},
checkIfClickable:function(a){var b=this.allowClickOnSelectedObject;return this.selectedObject==a&&b?!0:this.selectedObject!=a||b?!0===a.selectable||"MapArea"==a.objectType&&a.autoZoomReal||a.url||a.linkToObject||0<a.images.length||0<a.lines.length||!isNaN(a.zoomLevel)||!isNaN(a.zoomX)||!isNaN(a.zoomY)||a.description?!0:!1:!1},resizeMap:function(){var a=this.mapSet;if(a){var b=1,c=a.getBBox(),d=this.realWidth,f=this.realHeight,g=c.width,c=c.height;0<g&&0<c&&(this.fitMapToContainer&&(b=g/d>c/f?d/g:
f/c),a.translate(0,0,b,!0),this.mapScale=b,this.mapHeight=c*b,this.mapWidth=g*b)}},zoomIn:function(){var a=this.zoomLevel()*this.zoomControl.zoomFactor;this.zoomTo(a)},zoomOut:function(){var a=this.zoomLevel()/this.zoomControl.zoomFactor;this.zoomTo(a)},moveLeft:function(){var a=this.zoomX()+this.zoomControl.panStepSize;this.zoomTo(this.zoomLevel(),a,this.zoomY())},moveRight:function(){var a=this.zoomX()-this.zoomControl.panStepSize;this.zoomTo(this.zoomLevel(),a,this.zoomY())},moveUp:function(){var a=
this.zoomY()+this.zoomControl.panStepSize;this.zoomTo(this.zoomLevel(),this.zoomX(),a)},moveDown:function(){var a=this.zoomY()-this.zoomControl.panStepSize;this.zoomTo(this.zoomLevel(),this.zoomX(),a)},zoomX:function(){return this.mapSet?Math.round(1E4*this.mapContainer.x/this.mapWidth)/1E4:NaN},zoomY:function(){return this.mapSet?Math.round(1E4*this.mapContainer.y/this.mapHeight)/1E4:NaN},goHome:function(){this.selectObject(this.dataProvider);this.fire({type:"homeButtonClicked",chart:this})},zoomLevel:function(){return Math.round(1E5*
this.mapContainer.scale)/1E5},showDescriptionAndGetUrl:function(){var a=this.selectedObject;if(a){this.showDescription();var b=a.url;if(b)d.getURL(b,a.urlTarget);else if(b=a.linkToObject){if(d.isString(b)){var c=this.getObjectById(b);if(c){this.selectObject(c);return}}b&&a.passZoomValuesToTarget&&(b.zoomLatitude=this.zoomLatitude(),b.zoomLongitude=this.zoomLongitude(),b.zoomLevel=this.zoomLevel());this.extendMapData(b)||this.selectObject(b)}}},extendMapData:function(a){var b=a.objectType;if("MapImage"!=
b&&"MapArea"!=b&&"MapLine"!=b)return d.extend(a,new d.MapData,!0),this.dataProvider=a,this.zoomInstantly=!0,this.validateData(),!0},showDescription:function(a){a||(a=this.selectedObject);this.allowMultipleDescriptionWindows||this.closeAllDescriptions();if(a.description){var b=a.descriptionWindow;b&&b.close();b=new d.DescriptionWindow;a.descriptionWindow=b;var c=a.descriptionWindowWidth,e=a.descriptionWindowHeight,f=a.descriptionWindowLeft,g=a.descriptionWindowTop,h=a.descriptionWindowRight,k=a.descriptionWindowBottom;
isNaN(h)||(f=this.realWidth-h);isNaN(k)||(g=this.realHeight-k);var l=a.descriptionWindowX;isNaN(l)||(f=l);l=a.descriptionWindowY;isNaN(l)||(g=l);isNaN(f)&&(f=this.mouseX,f=f>this.realWidth/2?f-c-20:f+20);isNaN(g)&&(g=this.mouseY);b.maxHeight=e;l=a.title;a.titleTr&&(l=a.titleTr);b.show(this,this.descriptionsDiv,a.description,l);a=b.div.style;a.position="absolute";a.width=c+"px";a.maxHeight=e+"px";isNaN(k)||(g-=b.div.offsetHeight);isNaN(h)||(f-=b.div.offsetWidth);a.left=f+"px";a.top=g+"px"}},parseXMLObject:function(a){var b=
{root:{}};this.parseXMLNode(b,"root",a);this.svgData=b.root.svg;this.getBounds()},getBounds:function(){var a=this.dataProvider;try{var b=this.svgData.defs["amcharts:ammap"];a.leftLongitude=Number(b.leftLongitude);a.rightLongitude=Number(b.rightLongitude);a.topLatitude=Number(b.topLatitude);a.bottomLatitude=Number(b.bottomLatitude);a.projection=b.projection;var c=b.wrappedLongitudes;c&&(a.rightLongitude+=360);a.wrappedLongitudes=c}catch(d){}},recalcLongitude:function(a){return this.dataProvider.wrappedLongitudes?
a<this.dataProvider.leftLongitude?Number(a)+360:a:a},latitudeToCoordinate:function(a){var b,c=this.dataProvider;if(this.mapSet){b=c.topLatitude;var d=c.bottomLatitude;"mercator"==c.projection&&(a=this.mercatorLatitudeToCoordinate(a),b=this.mercatorLatitudeToCoordinate(b),d=this.mercatorLatitudeToCoordinate(d));b=(a-b)/(d-b)*this.mapHeight}return b},longitudeToCoordinate:function(a){a=this.recalcLongitude(a);var b,c=this.dataProvider;this.mapSet&&(b=c.leftLongitude,b=(a-b)/(c.rightLongitude-b)*this.mapWidth);
return b},mercatorLatitudeToCoordinate:function(a){89.5<a&&(a=89.5);-89.5>a&&(a=-89.5);a=d.degreesToRadians(a);return d.radiansToDegrees(.5*Math.log((1+Math.sin(a))/(1-Math.sin(a)))/2)},zoomLatitude:function(){if(this.mapContainer){var a=this.mapSet.getBBox(),b=(-this.mapContainer.x+this.previousWidth/2)/this.zoomLevel()-a.x*this.mapScale,a=(-this.mapContainer.y+this.previousHeight/2)/this.zoomLevel()-a.y*this.mapScale;return this.xyToCoordinates(b,a).latitude}},zoomLongitude:function(){if(this.mapContainer){var a=
this.mapSet.getBBox(),b=(-this.mapContainer.x+this.previousWidth/2)/this.zoomLevel()-a.x*this.mapScale,a=(-this.mapContainer.y+this.previousHeight/2)/this.zoomLevel()-a.y*this.mapScale;return this.xyToCoordinates(b,a).longitude}},getAreaCenterLatitude:function(a){a=a.displayObject.getBBox();var b=this.mapScale,c=this.mapSet.getBBox();return this.xyToCoordinates((a.x+a.width/2+this.diffX)*b-c.x*b,(a.y+a.height/2+this.diffY)*b-c.y*b).latitude},getAreaCenterLongitude:function(a){a=a.displayObject.getBBox();
var b=this.mapScale,c=this.mapSet.getBBox();return this.xyToCoordinates((a.x+a.width/2+this.diffX)*b-c.x*b,(a.y+a.height/2+this.diffY)*b-c.y*b).longitude},milesToPixels:function(a){var b=this.dataProvider;return this.mapWidth/(b.rightLongitude-b.leftLongitude)*a/69.172},kilometersToPixels:function(a){var b=this.dataProvider;return this.mapWidth/(b.rightLongitude-b.leftLongitude)*a/111.325},handleBackgroundClick:function(){if(this.backgroundZoomsToTop&&!this.mapWasDragged){var a=this.dataProvider;
if(this.checkIfClickable(a))this.clickMapObject(a);else{var b=a.zoomX,c=a.zoomY,d=a.zoomLongitude,f=a.zoomLatitude,a=a.zoomLevel;isNaN(b)||isNaN(c)||this.zoomTo(a,b,c);isNaN(d)||isNaN(f)||this.zoomToLongLat(a,d,f,!0)}}},parseXMLNode:function(a,b,c,d){void 0===d&&(d="");var f,g,h;if(c){var k=c.childNodes.length;for(f=0;f<k;f++){g=c.childNodes[f];var l=g.nodeName,m=g.nodeValue?this.trim(g.nodeValue):"",n=!1;g.attributes&&0<g.attributes.length&&(n=!0);if(0!==g.childNodes.length||""!==m||!1!==n)if(3==
g.nodeType||4==g.nodeType){if(""!==m){g=0;for(h in a[b])a[b].hasOwnProperty(h)&&g++;g?a[b]["#text"]=m:a[b]=m}}else if(1==g.nodeType){var p;void 0!==a[b][l]?void 0===a[b][l].length?(p=a[b][l],a[b][l]=[],a[b][l].push(p),a[b][l].push({}),p=a[b][l][1]):"object"==typeof a[b][l]&&(a[b][l].push({}),p=a[b][l][a[b][l].length-1]):(a[b][l]={},p=a[b][l]);if(g.attributes&&g.attributes.length)for(m=0;m<g.attributes.length;m++)p[g.attributes[m].name]=g.attributes[m].value;void 0!==a[b][l].length?this.parseXMLNode(a[b][l],
a[b][l].length-1,g,d+"  "):this.parseXMLNode(a[b],l,g,d+"  ")}}g=0;c="";for(h in a[b])"#text"==h?c=a[b][h]:g++;0===g&&void 0===a[b].length&&(a[b]=c)}},doDoubleClickZoom:function(){if(!this.mapWasDragged){var a=this.zoomLevel()*this.zoomControl.zoomFactor;this.zoomToStageXY(a,this.mouseX,this.mouseY)}},getDevInfo:function(){var a=this.zoomLevel(),b=this.mapSet.getBBox(),b=this.xyToCoordinates((this.mouseX-this.mapContainer.x)/a-b.x*this.mapScale,(this.mouseY-this.mapContainer.y)/a-b.y*this.mapScale),
a={chart:this,type:"writeDevInfo",zoomLevel:a,zoomX:this.zoomX(),zoomY:this.zoomY(),zoomLatitude:this.zoomLatitude(),zoomLongitude:this.zoomLongitude(),latitude:b.latitude,longitude:b.longitude,left:this.mouseX,top:this.mouseY,right:this.realWidth-this.mouseX,bottom:this.realHeight-this.mouseY,percentLeft:Math.round(this.mouseX/this.realWidth*100)+"%",percentTop:Math.round(this.mouseY/this.realHeight*100)+"%",percentRight:Math.round((this.realWidth-this.mouseX)/this.realWidth*100)+"%",percentBottom:Math.round((this.realHeight-
this.mouseY)/this.realHeight*100)+"%"},b="zoomLevel:"+a.zoomLevel+", zoomLongitude:"+a.zoomLongitude+", zoomLatitude:"+a.zoomLatitude+"\n",b=b+("zoomX:"+a.zoomX+", zoomY:"+a.zoomY+"\n"),b=b+("latitude:"+a.latitude+", longitude:"+a.longitude+"\n"),b=b+("left:"+a.left+", top:"+a.top+"\n"),b=b+("right:"+a.right+", bottom:"+a.bottom+"\n"),b=b+("left:"+a.percentLeft+", top:"+a.percentTop+"\n"),b=b+("right:"+a.percentRight+", bottom:"+a.percentBottom+"\n");a.str=b;this.fire(a);return a},getXY:function(a,
b,c){void 0!==a&&(-1!=String(a).indexOf("%")?(a=Number(a.split("%").join("")),c&&(a=100-a),a=Number(a)*b/100):c&&(a=b-a));return a},getObjectById:function(a){var b=this.dataProvider;if(b.areas){var c=this.getObject(a,b.areas);if(c)return c}if(c=this.getObject(a,b.images))return c;if(a=this.getObject(a,b.lines))return a},getObject:function(a,b){if(b){var c;for(c=0;c<b.length;c++){var d=b[c];if(d.id==a)return d;if(d.areas){var f=this.getObject(a,d.areas);if(f)return f}if(f=this.getObject(a,d.images))return f;
if(d=this.getObject(a,d.lines))return d}}},parseData:function(){var a=this.dataProvider;this.processObject(a.areas,a,"area");this.processObject(a.images,a,"image");this.processObject(a.lines,a,"line")},processObject:function(a,b,c){if(a){var e;for(e=0;e<a.length;e++){var f=a[e];f.parentObject=b;"area"==c&&d.extend(f,new d.MapArea(this.theme),!0);"image"==c&&(f=d.extend(f,new d.MapImage(this.theme),!0));"line"==c&&(f=d.extend(f,new d.MapLine(this.theme),!0));a[e]=f;f.areas&&this.processObject(f.areas,
f,"area");f.images&&this.processObject(f.images,f,"image");f.lines&&this.processObject(f.lines,f,"line")}}},positionChanged:function(){var a={type:"positionChanged",zoomX:this.zoomX(),zoomY:this.zoomY(),zoomLevel:this.zoomLevel(),chart:this};this.fire(a)},getX:function(a,b){return this.getXY(a,this.realWidth,b)},getY:function(a,b){return this.getXY(a,this.realHeight,b)},trim:function(a){if(a){var b;for(b=0;b<a.length;b++)if(-1===" \n\r\t\f\x0B\u00a0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u2028\u2029\u3000".indexOf(a.charAt(b))){a=
a.substring(b);break}for(b=a.length-1;0<=b;b--)if(-1===" \n\r\t\f\x0B\u00a0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u2028\u2029\u3000".indexOf(a.charAt(b))){a=a.substring(0,b+1);break}return-1===" \n\r\t\f\x0B\u00a0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u2028\u2029\u3000".indexOf(a.charAt(0))?a:""}},destroy:function(){d.AmMap.base.destroy.call(this)},x2c:function(a){var b=this.dataProvider.leftLongitude;return Math.round(this.unscaledMapWidth*
(a-b)/(this.dataProvider.rightLongitude-b)*100)/100},y2c:function(a){var b=this.dataProvider.topLatitude;return Math.round(this.unscaledMapHeight*(a-b)/(this.dataProvider.bottomLatitude-b)*100)/100},normalize:function(a){if(!a.pathsArray){var b;if(a.normalized)b=a.normalized;else{var c=d.normalizePath(a.node);b=a.node.getAttribute("d");a.normalized=b;c.maxX>this.maxMapX&&(this.maxMapX=c.maxX);c.minX<this.minMapX&&(this.minMapX=c.minX);c.maxY>this.maxMapY&&(this.maxMapY=c.maxY);c.minY<this.minMapY&&
(this.minMapY=c.minY)}a.node.setAttribute("d",b)}},redraw:function(a){var b=a.normalized,b=b.split(" Z").join(""),b=b.split("M");a.pathsArray=[];for(var c=0;c<b.length;c++){var d=b[c];if(d){for(var d=d.split("L"),f=[],g=0;g<d.length;g++)if(d[g]){var h=d[g].split(" "),h=this.xyToCoordinates(Number(h[1])-this.minMapX,Number(h[2])-this.minMapY,this.dpProjectionFunction,this.sourceMapWidth,this.sourceMapHeight);f.push([h.longitude,h.latitude])}a.pathsArray.push(f)}}b="";for(c=0;c<a.pathsArray.length;c++)b+=
this.redrawArea(a.pathsArray[c]);a.node.setAttribute("d",b);a.path=b},redrawArea:function(a){for(var b=!1,c="",e=0;e<a.length;e++){var f=a[e][0],g=a[e][1],h=d.degreesToRadians(a[e][0]),k=d.degreesToRadians(a[e][1]),k=this.projectionFunction(h,k),h=d.roundTo(this.x2c(d.radiansToDegrees(k[0])),3),k=d.roundTo(this.y2c(d.radiansToDegrees(k[1])),3);h<this.minMapXX&&(this.minMapXX=h,this.leftLongLat={longitude:f,latitude:g});h>this.maxMapXX&&(this.maxMapXX=h,this.rightLongLat={longitude:f,latitude:g});
k<this.minMapYY&&(this.minMapYY=k,this.topLongLat={longitude:f,latitude:g});k>this.maxMapYY&&(this.maxMapYY=k,this.bottomLongLat={longitude:f,latitude:g});b?c+=" L ":(c+=" M ",b=!0);c+=h+" "+k}return c+" Z "},normalizeMap:function(){var a=d.degreesToRadians(this.dataProvider.leftLongitude),b=d.degreesToRadians(this.dataProvider.rightLongitude),c=d.degreesToRadians(this.dataProvider.topLatitude),e=d.degreesToRadians(this.dataProvider.bottomLatitude),f=a+(b-a)/2,g=c+(e-c)/2,h=this.dpProjectionFunction(f,
c)[1],k=this.dpProjectionFunction(f,e)[1],l=this.dpProjectionFunction(a,g)[0],m=this.dpProjectionFunction(b,g)[0],c=d.equirectangular(f,c),e=d.equirectangular(f,e),h=(c[1]-e[1])/(h-k),a=d.equirectangular(a,g),b=d.equirectangular(b,g),l=(a[0]-b[0])/(l-m);this.minMapX=Infinity;this.maxMapX=-Infinity;this.minMapY=Infinity;this.maxMapY=-Infinity;for(m=0;m<this.svgAreas.length;m++)this.normalize(this.svgAreas[m]);this.sourceMapHeight=Math.abs(this.maxMapY-this.minMapY);this.sourceMapWidth=Math.abs(this.maxMapX-
this.minMapX);this.unscaledMapWidth=this.sourceMapWidth*l;this.unscaledMapHeight=this.sourceMapHeight*h;this.diffY=this.diffX=0},fixMapPosition:function(){var a=d.degreesToRadians(this.dataProvider.leftLongitude),b=d.degreesToRadians(this.dataProvider.rightLongitude),c=d.degreesToRadians(this.dataProvider.topLatitude),e=d.degreesToRadians(this.dataProvider.bottomLatitude),f=a+(b-a)/2,g=c+(e-c)/2,h=this.dpProjectionFunction(f,c)[1],k=this.dpProjectionFunction(f,e)[1],l=this.dpProjectionFunction(a,
g)[0],m=this.dpProjectionFunction(b,g)[0];this.sourceMapHeight=this.mapHeight/this.mapScale;this.sourceMapWidth=this.mapWidth/this.mapScale;this.unscaledMapWidth=(a-b)/(l-m)*this.sourceMapWidth;this.unscaledMapHeight=(c-e)/(h-k)*this.sourceMapHeight;b=this.coordinatesToXY(d.radiansToDegrees(f),d.radiansToDegrees(c));a=this.coordinatesToXY(d.radiansToDegrees(a),d.radiansToDegrees(g));c=g=Infinity;for(e=0;e<this.svgAreas.length;e++)f=this.svgAreas[e].getBBox(),f.y<g&&(g=f.y),f.x<c&&(c=f.x);this.diffY=
b.y/this.mapScale-g;this.diffX=a.x/this.mapScale-c;for(e=0;e<this.svgAreas.length;e++)this.svgAreas[e].translate(this.diffX,this.diffY)},changeProjection:function(){this.minMapXX=Infinity;this.maxMapXX=-Infinity;this.minMapYY=Infinity;this.maxMapYY=-Infinity;this.projectionChanged=!1;for(var a=0;a<this.svgAreas.length;a++)this.redraw(this.svgAreas[a]);this.projectionChanged=!0;this.resizeMap()},coordinatesToXY:function(a,b){var c,e;c=!1;this.dataProvider&&(c=this.dataProvider.wrappedLongitudes)&&
(a=this.recalcLongitude(a));this.projectionFunction?(e=this.projectionFunction(d.degreesToRadians(a),d.degreesToRadians(b)),c=this.mapScale*d.roundTo(this.x2c(d.radiansToDegrees(e[0])),3),e=this.mapScale*d.roundTo(this.y2c(d.radiansToDegrees(e[1])),3)):(c=this.longitudeToCoordinate(a),e=this.latitudeToCoordinate(b));return{x:c,y:e}},coordinatesToStageXY:function(a,b){var c=this.coordinatesToXY(a,b),d=c.x*this.zoomLevel()+this.mapContainer.x,c=c.y*this.zoomLevel()+this.mapContainer.y;return{x:d,y:c}},
stageXYToCoordinates:function(a,b){var c=this.mapSet.getBBox(),d=(a-this.mapContainer.x)/this.zoomLevel()-c.x*this.mapScale,c=(b-this.mapContainer.y)/this.zoomLevel()-c.y*this.mapScale;return this.xyToCoordinates(d,c)},xyToCoordinates:function(a,b,c,e,f){var g;isNaN(e)&&(e=this.mapWidth);isNaN(f)&&(f=this.mapHeight);c||(c=this.projectionFunction);if(g=c.invert){var h=this.dataProvider.leftLongitude,k=this.dataProvider.rightLongitude,l=this.dataProvider.topLatitude,m=this.dataProvider.bottomLatitude,
n=h+(k-h)/2,p=l+(m-l)/2,l=d.radiansToDegrees(c(d.degreesToRadians(n),d.degreesToRadians(l))[1]),m=d.radiansToDegrees(c(d.degreesToRadians(n),d.degreesToRadians(m))[1]),h=d.radiansToDegrees(c(d.degreesToRadians(h),d.degreesToRadians(p))[0]),k=d.radiansToDegrees(c(d.degreesToRadians(k),d.degreesToRadians(p))[0]);this.projectionChanged&&(l=d.radiansToDegrees(c(d.degreesToRadians(this.topLongLat.longitude),d.degreesToRadians(this.topLongLat.latitude))[1]),m=d.radiansToDegrees(c(d.degreesToRadians(this.bottomLongLat.longitude),
d.degreesToRadians(this.bottomLongLat.latitude))[1]),h=d.radiansToDegrees(c(d.degreesToRadians(this.leftLongLat.longitude),d.degreesToRadians(this.leftLongLat.latitude))[0]),k=d.radiansToDegrees(c(d.degreesToRadians(this.rightLongLat.longitude),d.degreesToRadians(this.rightLongLat.latitude))[0]));a=d.degreesToRadians(a/e*(k-h)+h);b=d.degreesToRadians(b/f*(m-l)+l);b=g(a,b);g=d.radiansToDegrees(b[0]);b=d.radiansToDegrees(b[1])}else g=this.coordinateToLongitude(a),b=this.coordinateToLatitude(b);return{longitude:d.roundTo(g,
4),latitude:d.roundTo(b,4)}},coordinateToLatitude:function(a,b){var c;void 0===b&&(b=this.mapHeight);if(this.mapSet){var e=this.dataProvider,f=e.bottomLatitude;c=e.topLatitude;"mercator"==e.projection?(e=this.mercatorLatitudeToCoordinate(f),c=this.mercatorLatitudeToCoordinate(c),c=2*d.degreesToRadians(a*(e-c)/b+c),c=d.radiansToDegrees(2*Math.atan(Math.exp(c))-.5*Math.PI)):c=a/b*(f-c)+c}return Math.round(1E6*c)/1E6},coordinateToLongitude:function(a,b){var c,d=this.dataProvider;void 0===b&&(b=this.mapWidth);
this.mapSet&&(c=a/b*(d.rightLongitude-d.leftLongitude)+d.leftLongitude);return Math.round(1E6*c)/1E6}})})();(function(){var d=window.AmCharts;d.ZoomControl=d.Class({construct:function(a){this.cname="ZoomControl";this.panStepSize=.1;this.zoomFactor=2;this.maxZoomLevel=64;this.minZoomLevel=1;this.panControlEnabled=!1;this.zoomControlEnabled=!0;this.buttonRollOverColor="#DADADA";this.buttonFillColor="#FFFFFF";this.buttonFillAlpha=1;this.buttonBorderColor="#000000";this.buttonBorderAlpha=.1;this.buttonIconAlpha=this.buttonBorderThickness=1;this.gridColor=this.buttonIconColor="#000000";this.homeIconFile="homeIcon.gif";
this.gridBackgroundColor="#000000";this.draggerAlpha=this.gridAlpha=this.gridBackgroundAlpha=0;this.draggerSize=this.buttonSize=31;this.iconSize=11;this.homeButtonEnabled=!0;this.buttonCornerRadius=2;this.gridHeight=5;this.roundButtons=!0;this.top=this.left=10;d.applyTheme(this,a,this.cname)},init:function(a,b){var c=this;c.chart=a;d.remove(c.set);var e=b.set();d.setCN(a,e,"zoom-control");var f=c.buttonSize,g=c.zoomControlEnabled,h=c.panControlEnabled,k=c.buttonFillColor,l=c.buttonFillAlpha,m=c.buttonBorderThickness,
n=c.buttonBorderColor,p=c.buttonBorderAlpha,r=c.buttonCornerRadius,t=c.buttonRollOverColor,q=c.gridHeight,y=c.zoomFactor,B=c.minZoomLevel,u=c.maxZoomLevel,w=c.buttonIconAlpha,v=c.buttonIconColor,A=c.roundButtons,C=a.svgIcons,x=a.getX(c.left),z=a.getY(c.top);isNaN(c.right)||(x=a.getX(c.right,!0),x=h?x-3*f:x-f);isNaN(c.bottom)||(z=a.getY(c.bottom,!0),g&&(z-=q+3*f),z=h?z-3*f:c.homeButtonEnabled?z-.5*f:z+f);e.translate(x,z);c.previousDY=NaN;var E,x=f/4-1;if(g){E=b.set();d.setCN(a,E,"zoom-control-zoom");
e.push(E);c.set=e;c.zoomSet=E;5<q&&(g=d.rect(b,f+6,q+2*f+6,c.gridBackgroundColor,c.gridBackgroundAlpha,0,"#000000",0,4),d.setCN(a,g,"zoom-bg"),g.translate(-3,-3),g.mouseup(function(){c.handleBgUp()}).touchend(function(){c.handleBgUp()}),E.push(g));var F=f;A&&(F=f/1.5);c.draggerSize=F;var H=Math.log(u/B)/Math.log(y)+1;1E3<H&&(H=1E3);var g=q/H,G,D=b.set();D.translate((f-F)/2+1,1,NaN,!0);E.push(D);for(G=1;G<H;G++)z=f+G*g,z=d.line(b,[1,F-2],[z,z],c.gridColor,c.gridAlpha,1),d.setCN(a,z,"zoom-grid"),D.push(z);
z=new d.SimpleButton;z.setDownHandler(c.draggerDown,c);z.setClickHandler(c.draggerUp,c);z.init(b,F,g,k,l,m,n,p,r,t);d.setCN(a,z.set,"zoom-dragger");E.push(z.set);z.set.setAttr("opacity",c.draggerAlpha);c.dragger=z.set;c.previousY=NaN;z=new d.SimpleButton;C?(F=b.set(),H=d.line(b,[-x,x],[0,0],v,w,1),G=d.line(b,[0,0],[-x,x],v,w,1),F.push(H),F.push(G),z.svgIcon=F):z.setIcon(a.pathToImages+"plus.gif",c.iconSize);z.setClickHandler(a.zoomIn,a);z.init(b,f,f,k,l,m,n,p,r,t,w,v,A);d.setCN(a,z.set,"zoom-in");
E.push(z.set);z=new d.SimpleButton;C?z.svgIcon=d.line(b,[-x,x],[0,0],v,w,1):z.setIcon(a.pathToImages+"minus.gif",c.iconSize);z.setClickHandler(a.zoomOut,a);z.init(b,f,f,k,l,m,n,p,r,t,w,v,A);z.set.translate(0,q+f);d.setCN(a,z.set,"zoom-out");E.push(z.set);q-=g;u=Math.log(u/100)/Math.log(y);c.realStepSize=q/(u-Math.log(B/100)/Math.log(y));c.realGridHeight=q;c.stepMax=u}h&&(h=b.set(),d.setCN(a,h,"zoom-control-pan"),e.push(h),E&&E.translate(f,4*f),y=new d.SimpleButton,C?y.svgIcon=d.line(b,[x/5,-x+x/5,
x/5],[-x,0,x],v,w,1):y.setIcon(a.pathToImages+"panLeft.gif",c.iconSize),y.setClickHandler(a.moveLeft,a),y.init(b,f,f,k,l,m,n,p,r,t,w,v,A),y.set.translate(0,f),d.setCN(a,y.set,"pan-left"),h.push(y.set),y=new d.SimpleButton,C?y.svgIcon=d.line(b,[-x/5,x-x/5,-x/5],[-x,0,x],v,w,1):y.setIcon(a.pathToImages+"panRight.gif",c.iconSize),y.setClickHandler(a.moveRight,a),y.init(b,f,f,k,l,m,n,p,r,t,w,v,A),y.set.translate(2*f,f),d.setCN(a,y.set,"pan-right"),h.push(y.set),y=new d.SimpleButton,C?y.svgIcon=d.line(b,
[-x,0,x],[x/5,-x+x/5,x/5],v,w,1):y.setIcon(a.pathToImages+"panUp.gif",c.iconSize),y.setClickHandler(a.moveUp,a),y.init(b,f,f,k,l,m,n,p,r,t,w,v,A),y.set.translate(f,0),d.setCN(a,y.set,"pan-up"),h.push(y.set),y=new d.SimpleButton,C?y.svgIcon=d.line(b,[-x,0,x],[-x/5,x-x/5,-x/5],v,w,1):y.setIcon(a.pathToImages+"panDown.gif",c.iconSize),y.setClickHandler(a.moveDown,a),y.init(b,f,f,k,l,m,n,p,r,t,w,v,A),y.set.translate(f,2*f),d.setCN(a,y.set,"pan-down"),h.push(y.set),e.push(h));c.homeButtonEnabled&&(h=new d.SimpleButton,
C?h.svgIcon=d.polygon(b,[-x,0,x,x-1,x-1,2,2,-2,-2,-x+1,-x+1],[0,-x,0,0,x-1,x-1,2,2,x-1,x-1,0],v,w,1,v,w):h.setIcon(a.pathToImages+c.homeIconFile,c.iconSize),h.setClickHandler(a.goHome,a),c.panControlEnabled&&(p=l=0),h.init(b,f,f,k,l,m,n,p,r,t,w,v,A),c.panControlEnabled?h.set.translate(f,f):E&&E.translate(0,1.5*f),d.setCN(a,h.set,"pan-home"),e.push(h.set));c.update()},draggerDown:function(){this.chart.stopDrag();this.isDragging=!0},draggerUp:function(){this.isDragging=!1},handleBgUp:function(){var a=
this.chart;a.zoomTo(100*Math.pow(this.zoomFactor,this.stepMax-(a.mouseY-this.zoomSet.y-this.set.y-this.buttonSize-this.realStepSize/2)/this.realStepSize))},update:function(){var a;a=this.zoomFactor;var b=this.realStepSize,c=this.stepMax,e=this.dragger,f=this.buttonSize,g,h=this.chart;h&&(this.isDragging?(h.stopDrag(),g=e.y+(h.mouseY-this.previousY),g=d.fitToBounds(g,f,this.realGridHeight+f),h.zoomTo(100*Math.pow(a,c-(g-f)/b),NaN,NaN,!0)):(a=Math.log(h.zoomLevel()/100)/Math.log(a),g=(c-a)*b+f),this.previousY=
h.mouseY,this.previousDY!=g&&e&&(e.translate((this.buttonSize-this.draggerSize)/2,g),this.previousDY=g))}})})();(function(){var d=window.AmCharts;d.SimpleButton=d.Class({construct:function(){},init:function(a,b,c,e,f,g,h,k,l,m,n,p,r){var t=this;t.rollOverColor=m;t.color=e;t.container=a;m=a.set();t.set=m;r?(b/=2,e=d.circle(a,b,e,f,g,h,k),e.translate(b,b)):e=d.rect(a,b,c,e,f,g,h,k,l);m.push(e);f=t.iconPath;var q;f&&(q=t.iconSize,g=(b-q)/2,r&&(g=(2*b-q)/2),q=a.image(f,g,(c-q)/2,q,q));t.svgIcon&&(q=t.svgIcon,r?q.translate(b,b):q.translate(b/2,b/2));m.setAttr("cursor","pointer");q&&(m.push(q),q.setAttr("opacity",
n),q.node.style.pointerEvents="none");e.mousedown(function(){t.handleDown()}).touchstart(function(){t.handleDown()}).mouseup(function(){t.handleUp()}).touchend(function(){t.handleUp()}).mouseover(function(){t.handleOver()}).mouseout(function(){t.handleOut()});t.bg=e},setIcon:function(a,b){this.iconPath=a;this.iconSize=b},setClickHandler:function(a,b){this.clickHandler=a;this.scope=b},setDownHandler:function(a,b){this.downHandler=a;this.scope=b},handleUp:function(){var a=this.clickHandler;a&&a.call(this.scope)},
handleDown:function(){var a=this.downHandler;a&&a.call(this.scope)},handleOver:function(){this.container.chart.skipClick=!0;this.bg.setAttr("fill",this.rollOverColor)},handleOut:function(){this.container.chart.skipClick=!1;this.bg.setAttr("fill",this.color)}})})();(function(){var d=window.AmCharts;d.SmallMap=d.Class({construct:function(a){this.cname="SmallMap";this.mapColor="#e6e6e6";this.rectangleColor="#FFFFFF";this.top=this.right=10;this.minimizeButtonWidth=23;this.backgroundColor="#9A9A9A";this.backgroundAlpha=1;this.borderColor="#FFFFFF";this.iconColor="#000000";this.borderThickness=3;this.borderAlpha=1;this.size=.2;this.enabled=!0;d.applyTheme(this,a,this.cname)},init:function(a,b){var c=this;if(c.enabled){c.chart=a;c.container=b;c.width=a.realWidth*
c.size;c.height=a.realHeight*c.size;d.remove(c.mapSet);d.remove(c.allSet);d.remove(c.set);var e=b.set();c.set=e;d.setCN(a,e,"small-map");var f=b.set();c.allSet=f;e.push(f);c.buildSVGMap();var g=c.borderThickness,h=c.borderColor,k=d.rect(b,c.width+g,c.height+g,c.backgroundColor,c.backgroundAlpha,g,h,c.borderAlpha);d.setCN(a,k,"small-map-bg");k.translate(-g/2,-g/2);f.push(k);k.toBack();var l,m,k=c.minimizeButtonWidth,n=new d.SimpleButton,p=k/2;a.svgIcons?n.svgIcon=d.line(b,[-p/2,0,p/2],[-p/4,p/4,-p/
4],c.iconColor,1,1):n.setIcon(a.pathToImages+"arrowDown.gif",k);n.setClickHandler(c.minimize,c);n.init(b,k,k,h,1,1,h,1);d.setCN(a,n.set,"small-map-down");n=n.set;c.downButtonSet=n;e.push(n);var r=new d.SimpleButton;a.svgIcons?r.svgIcon=d.line(b,[-p/2,0,p/2],[p/4,-p/4,p/4],c.iconColor,1,1):r.setIcon(a.pathToImages+"arrowUp.gif",k);r.setClickHandler(c.maximize,c);r.init(b,k,k,h,1,1,h,1);d.setCN(a,r.set,"small-map-up");h=r.set;c.upButtonSet=h;h.hide();e.push(h);var t,q;isNaN(c.top)||(l=a.getY(c.top)+
g,q=0);isNaN(c.bottom)||(l=a.getY(c.bottom,!0)-c.height-g,q=c.height-k+g/2);isNaN(c.left)||(m=a.getX(c.left)+g,t=-g/2);isNaN(c.right)||(m=a.getX(c.right,!0)-c.width-g,t=c.width-k+g/2);g=b.set();g.clipRect(1,1,c.width,c.height);f.push(g);c.rectangleC=g;e.translate(m,l);n.translate(t,q);h.translate(t,q);f.mouseup(function(){c.handleMouseUp()});c.drawRectangle()}else d.remove(c.allSet),d.remove(c.downButtonSet),d.remove(c.upButtonSet)},minimize:function(){this.downButtonSet.hide();this.upButtonSet.show();
this.allSet.hide()},maximize:function(){this.downButtonSet.show();this.upButtonSet.hide();this.allSet.show()},buildSVGMap:function(){var a=this.chart,b={fill:this.mapColor,stroke:this.mapColor,"stroke-opacity":1},c=this.container,e=c.set();d.setCN(a,e,"small-map-image");var f;for(f=0;f<a.svgAreas.length;f++){var g=c.path(a.svgAreas[f].path).attr(b);e.push(g)}this.allSet.push(e);b=e.getBBox();c=this.size*a.mapScale;f=-b.x*c;var g=-b.y*c,h=0,k=0;a.centerMap&&(h=(this.width-b.width*c)/2,k=(this.height-
b.height*c)/2);this.mapWidth=b.width*c;this.mapHeight=b.height*c;f+=h;g+=k;this.dx=h;this.dy=k;e.translate(f,g,c);this.mapSet=e;this.mapX=f;this.mapY=g},update:function(){var a=this.chart;if(a){var b=a.zoomLevel(),c=this.width,d=this.height,f=c/(a.realWidth*b),g=a.mapContainer.getBBox(),c=c/b,d=d/b,h=this.rectangle;h.translate(-(a.mapContainer.x+g.x*b)*f+this.dx,-(a.mapContainer.y+g.y*b)*f+this.dy);0<c&&0<d&&(h.setAttr("width",Math.ceil(c+1)),h.setAttr("height",Math.ceil(d+1)));this.rWidth=c;this.rHeight=
d}},drawRectangle:function(){var a=this.rectangle;d.remove(a);a=d.rect(this.container,10,10,"#000",0,1,this.rectangleColor,1);d.setCN(this.chart,a,"small-map-rectangle");this.rectangleC.push(a);this.rectangle=a},handleMouseUp:function(){var a=this.chart,b=a.zoomLevel();a.zoomToMapXY(b,(a.mouseX-this.set.x-this.mapX)/this.size+a.diffX*a.mapScale,(a.mouseY-this.set.y-this.mapY)/this.size+a.diffY*a.mapScale)}})})();(function(){var d=window.AmCharts;d.AreasProcessor=d.Class({construct:function(a){this.chart=a},process:function(a){this.updateAllAreas();this.allObjects=[];a=a.areas;var b=this.chart;b.outlines=[];var c=a.length,d,f,g=0,h=!1,k=!1,l=0;for(d=0;d<c;d++)if(f=a[d],f.value=Number(f.value),f=f.value,!isNaN(f)){if(!1===h||h<f)h=f;if(!1===k||k>f)k=f;g+=Math.abs(f);l++}this.minValue=k;this.maxValue=h;isNaN(b.minValue)||(this.minValue=b.minValue);isNaN(b.maxValue)||(this.maxValue=b.maxValue);b.maxValueReal=
h;b.minValueReal=k;for(d=0;d<c;d++)f=a[d],isNaN(f.value)?f.percents=void 0:(f.percents=(f.value-k)/g*100,k==h&&(f.percents=100));for(d=0;d<c;d++)f=a[d],this.createArea(f);b.outlinesToFront()},updateAllAreas:function(){var a=this.chart,b=a.areasSettings,c=b.unlistedAreasColor,e=b.unlistedAreasAlpha,f=b.unlistedAreasOutlineColor,g=b.unlistedAreasOutlineAlpha,h=a.svgAreas,k=a.dataProvider,l=k.areas,m={},n;for(n=0;n<l.length;n++)m[l[n].id]=l[n];for(n=0;n<h.length;n++){l=h[n];if(b.preserveOriginalAttributes){if(l.customAttr)for(var p in l.customAttr)l.setAttr(p,
l.customAttr[p])}else{void 0!=c&&l.setAttr("fill",c);isNaN(e)||l.setAttr("fill-opacity",e);void 0!=f&&l.setAttr("stroke",f);isNaN(g)||l.setAttr("stroke-opacity",g);var r=b.outlineThickness;b.adjustOutlineThickness&&(r=r/a.zoomLevel()/a.mapScale);l.setAttr("stroke-width",r)}d.setCN(a,l,"map-area-unlisted");k.getAreasFromMap&&!m[l.id]&&(r=new d.MapArea(a.theme),r.parentObject=k,r.id=l.id,r.outline=l.outline,k.areas.push(r))}},createArea:function(a){var b=this.chart,c=b.svgAreasById[a.id],e=b.areasSettings;
if(c&&c.className){var f=b.areasClasses[c.className];f&&(e=d.processObject(f,d.AreasSettings,b.theme))}var g=e.color,h=e.alpha,k=e.outlineThickness,l=e.rollOverColor,m=e.selectedColor,n=e.rollOverAlpha,p=e.rollOverBrightness,r=e.outlineColor,t=e.outlineAlpha,q=e.balloonText,y=e.selectable,B=e.pattern,u=e.rollOverOutlineColor,w=e.bringForwardOnHover,v=e.preserveOriginalAttributes;this.allObjects.push(a);a.chart=b;a.baseSettings=e;a.autoZoomReal=void 0==a.autoZoom?e.autoZoom:a.autoZoom;f=a.color;void 0==
f&&(f=g);var A=a.alpha;isNaN(A)&&(A=h);h=a.rollOverAlpha;isNaN(h)&&(h=n);isNaN(h)&&(h=A);n=a.rollOverColor;void 0==n&&(n=l);l=a.pattern;void 0==l&&(l=B);B=a.selectedColor;void 0==B&&(B=m);m=a.balloonText;void 0===m&&(m=q);void 0==e.colorSolid||isNaN(a.value)||(q=Math.floor((a.value-this.minValue)/((this.maxValue-this.minValue)/b.colorSteps)),q==b.colorSteps&&q--,q*=1/(b.colorSteps-1),this.maxValue==this.minValue&&(q=1),a.colorReal=d.getColorFade(f,e.colorSolid,q));void 0!=a.color&&(a.colorReal=a.color);
void 0==a.selectable&&(a.selectable=y);void 0==a.colorReal&&(a.colorReal=g);g=a.outlineColor;void 0==g&&(g=r);r=a.outlineAlpha;isNaN(r)&&(r=t);t=a.outlineThickness;isNaN(t)&&(t=k);k=a.rollOverOutlineColor;void 0==k&&(k=u);u=a.rollOverBrightness;void 0==u&&(u=p);void 0==a.bringForwardOnHover&&(a.bringForwardOnHover=w);void 0==a.preserveOriginalAttributes&&(a.preserveOriginalAttributes=v);isNaN(e.selectedBrightness)||(B=d.adjustLuminosity(a.colorReal,e.selectedBrightness/100));a.alphaReal=A;a.rollOverColorReal=
n;a.rollOverAlphaReal=h;a.balloonTextReal=m;a.selectedColorReal=B;a.outlineColorReal=g;a.outlineAlphaReal=r;a.rollOverOutlineColorReal=k;a.outlineThicknessReal=t;a.patternReal=l;a.rollOverBrightnessReal=u;a.accessibleLabel||(a.accessibleLabel=e.accessibleLabel);d.processDescriptionWindow(e,a);if(c&&(p=c.area,w=c.title,a.enTitle=c.title,w&&!a.title&&(a.title=w),(c=b.language)?(w=d.mapTranslations)&&(c=w[c])&&c[a.enTitle]&&(a.titleTr=c[a.enTitle]):a.titleTr=void 0,p)){c=a.tabIndex;void 0===c&&(c=e.tabIndex);
void 0!==c&&p.setAttr("tabindex",c);a.displayObject=p;a.outline&&(A=0,a.alphaReal=0,a.rollOverAlphaReal=0,a.mouseEnabled=!1,b.outlines.push(p),p.node.setAttribute("pointer-events","none"));a.mouseEnabled&&b.addObjectEventListeners(p,a);var C;void 0!=f&&(C=f);void 0!=a.colorReal&&(C=a.showAsSelected||b.selectedObject==a?a.selectedColorReal:a.colorReal);p.node.setAttribute("class","");d.setCN(b,p,"map-area");d.setCN(b,p,"map-area-"+p.id);e.adjustOutlineThickness&&(t=t/b.zoomLevel()/b.mapScale);a.preserveOriginalAttributes||
(p.setAttr("fill",C),p.setAttr("stroke",g),p.setAttr("stroke-opacity",r),p.setAttr("stroke-width",t),p.setAttr("fill-opacity",A));b.makeObjectAccessible(a);l&&p.pattern(l,b.mapScale,b.path);a.hidden&&p.hide()}}})})();(function(){var d=window.AmCharts;d.AreasSettings=d.Class({construct:function(a){this.cname="AreasSettings";this.alpha=1;this.autoZoom=!1;this.balloonText="[[title]]";this.color="#FFCC00";this.colorSolid="#990000";this.unlistedAreasAlpha=1;this.unlistedAreasColor="#DDDDDD";this.outlineColor="#FFFFFF";this.outlineThickness=this.outlineAlpha=1;this.selectedColor=this.rollOverOutlineColor="#CC0000";this.unlistedAreasOutlineColor="#FFFFFF";this.unlistedAreasOutlineAlpha=1;this.descriptionWindowWidth=
250;this.bringForwardOnHover=this.adjustOutlineThickness=!0;this.accessibleLabel="[[title]] [[value]] [[description]]";d.applyTheme(this,a,this.cname)}})})();(function(){var d=window.AmCharts;d.ImagesProcessor=d.Class({construct:function(a){this.chart=a;this.reset()},process:function(a){var b=a.images,c;for(c=b.length-1;0<=c;c--){var d=b[c];this.createImage(d,c);d.parentArray=b}this.counter=c;a.parentObject&&a.remainVisible&&this.process(a.parentObject)},createImage:function(a,b){a=d.processObject(a,d.MapImage);a.arrays=[];isNaN(b)&&(this.counter++,b=this.counter);var c=this.chart,e=c.container,f=c.mapImagesContainer,g=c.stageImagesContainer,h=c.imagesSettings;
a.remove&&a.remove();var k=h.color,l=h.alpha,m=h.rollOverColor,n=h.rollOverOutlineColor,p=h.selectedColor,r=h.balloonText,t=h.outlineColor,q=h.outlineAlpha,y=h.outlineThickness,B=h.selectedScale,u=h.rollOverScale,w=h.selectable,v=h.labelPosition,A=h.labelColor,C=h.labelFontSize,x=h.bringForwardOnHover,z=h.labelRollOverColor,E=h.rollOverBrightness,F=h.selectedLabelColor;a.index=b;a.chart=c;a.baseSettings=c.imagesSettings;var H=e.set();a.displayObject=H;var G=a.color;void 0==G&&(G=k);k=a.alpha;isNaN(k)&&
(k=l);void 0==a.bringForwardOnHover&&(a.bringForwardOnHover=x);l=a.outlineAlpha;isNaN(l)&&(l=q);q=a.rollOverColor;void 0==q&&(q=m);m=a.selectedColor;void 0==m&&(m=p);p=a.balloonText;void 0===p&&(p=r);r=a.outlineColor;void 0==r&&(r=t);a.outlineColorReal=r;t=a.outlineThickness;isNaN(t)&&(t=y);(y=a.labelPosition)||(y=v);v=a.labelColor;void 0==v&&(v=A);A=a.labelRollOverColor;void 0==A&&(A=z);z=a.selectedLabelColor;void 0==z&&(z=F);F=a.labelFontSize;isNaN(F)&&(F=C);C=a.selectedScale;isNaN(C)&&(C=B);B=
a.rollOverScale;isNaN(B)&&(B=u);u=a.rollOverBrightness;void 0==u&&(u=E);void 0==a.selectable&&(a.selectable=w);a.colorReal=G;isNaN(h.selectedBrightness)||(m=d.adjustLuminosity(a.colorReal,h.selectedBrightness/100));a.alphaReal=k;a.rollOverColorReal=q;a.balloonTextReal=p;a.selectedColorReal=m;a.labelColorReal=v;a.labelRollOverColorReal=A;a.selectedLabelColorReal=z;a.labelFontSizeReal=F;a.labelPositionReal=y;a.selectedScaleReal=C;a.rollOverScaleReal=B;a.rollOverOutlineColorReal=n;a.rollOverBrightnessReal=
u;a.accessibleLabel||(a.accessibleLabel=h.accessibleLabel);d.processDescriptionWindow(h,a);a.centeredReal=void 0==a.centered?h.centered:a.centered;n=a.type;u=a.imageURL;B=a.svgPath;C=a.width;F=a.height;w=a.scale;isNaN(a.percentWidth)||(C=a.percentWidth/100*c.realWidth);isNaN(a.percentHeight)||(F=a.percentHeight/100*c.realHeight);var D;u||n||B||(n="circle",C=1,l=k=0);q=E=0;h=a.selectedColorReal;if(n){isNaN(C)&&(C=10);isNaN(F)&&(F=10);"kilometers"==a.widthAndHeightUnits&&(C=c.kilometersToPixels(a.width),
F=c.kilometersToPixels(a.height));"miles"==a.widthAndHeightUnits&&(C=c.milesToPixels(a.width),F=c.milesToPixels(a.height));if("circle"==n||"bubble"==n)F=C;D=this.createPredefinedImage(G,r,t,n,C,F);q=E=0;a.centeredReal?(isNaN(a.right)||(E=C*w),isNaN(a.bottom)||(q=F*w)):(E=C*w/2,q=F*w/2);D.translate(E,q,w,!0)}else u?(isNaN(C)&&(C=10),isNaN(F)&&(F=10),D=e.image(u,0,0,C,F),D.node.setAttribute("preserveAspectRatio","none"),D.setAttr("opacity",k),a.centeredReal&&(E=isNaN(a.right)?-C/2:C/2,q=isNaN(a.bottom)?
-F/2:F/2,D.translate(E,q,NaN,!0))):B&&(D=e.path(B),u=D.getBBox(),a.centeredReal?(E=-u.x*w-u.width*w/2,isNaN(a.right)||(E=-E),q=-u.y*w-u.height*w/2,isNaN(a.bottom)||(q=-q)):E=q=0,D.translate(E,q,w,!0),D.x=E,D.y=q);D&&(H.push(D),a.image=D,D.setAttr("stroke-opacity",l),D.setAttr("stroke-width",t),D.setAttr("stroke",r),D.setAttr("fill-opacity",k),"bubble"!=n&&D.setAttr("fill",G),d.setCN(c,D,"map-image"),void 0!=a.id&&d.setCN(c,D,"map-image-"+a.id));G=a.labelColorReal;!a.showAsSelected&&c.selectedObject!=
a||void 0==h||(D&&D.setAttr("fill",h),G=a.selectedLabelColorReal);D=null;void 0!==a.label&&(D=d.text(e,a.label,G,c.fontFamily,a.labelFontSizeReal,a.labelAlign),d.setCN(c,D,"map-image-label"),void 0!==a.id&&d.setCN(c,D,"map-image-label-"+a.id),G=a.labelBackgroundAlpha,(k=a.labelBackgroundColor)&&0<G&&(l=D.getBBox(),e=d.rect(e,l.width+16,l.height+10,k,G),d.setCN(c,e,"map-image-label-background"),void 0!=a.id&&d.setCN(c,e,"map-image-label-background-"+a.id),H.push(e),a.labelBG=e),a.imageLabel=D,H.push(D),
d.setCN(c,H,"map-image-container"),void 0!=a.id&&d.setCN(c,H,"map-image-container-"+a.id),this.labelsToReposition.push(a),a.arrays.push({arr:this.labelsToReposition,el:a}));e=isNaN(a.latitude)||isNaN(a.longitude)?!0:!1;a.lineId&&(D=this.chart.getObjectById(a.lineId))&&0<D.longitudes.length&&(e=!1);e?g.push(H):f.push(H);H.toBack();H&&(H.rotation=a.rotation,isNaN(a.rotation)||H.rotate(a.rotation),a.arrays.push({arr:this.allSvgObjects,el:H}),this.allSvgObjects.push(H));this.allObjects.push(a);c.makeObjectAccessible(a);
f=a.tabIndex;void 0===f&&(f=c.imagesSettings.tabIndex);void 0!==f&&H.setAttr("tabindex",f);a.arrays.push({arr:this.allObjects,el:a});isNaN(a.longitude)||isNaN(a.latitude)||!a.fixedSize||(a.objToResize={image:H,mapImage:a,scale:1},this.objectsToResize.push(a.objToResize),a.arrays.push({arr:this.objectsToResize,el:a.objToResize}));this.updateSizeAndPosition(a);a.mouseEnabled&&c.addObjectEventListeners(H,a);a.hidden&&H.hide();d.removeFromArray(c.updatableImages,a);a.animateAlongLine&&(c.updatableImages.push(a),
a.delayAnimateAlong());return a},updateSizeAndPosition:function(a){var b=this.chart,c=a.displayObject,e=b.getX(a.left),f=b.getY(a.top),g,h=a.image.getBBox();isNaN(a.right)||(e=b.getX(a.right,!0)-h.width*a.scale);isNaN(a.bottom)||(f=b.getY(a.bottom,!0)-h.height*a.scale);var k=a.longitude,l=a.latitude,m=a.positionOnLine,h=a.imageLabel,n=this.chart.zoomLevel(),p,r;a.lineId&&(a.line=this.chart.getObjectById(a.lineId));if(a.line&&a.line.getCoordinates){a.line.chart=b;var t=a.line.getCoordinates(m,a.lineSegment);
t&&(k=b.coordinateToLongitude(t.x),l=b.coordinateToLatitude(t.y),p=t.x,r=t.y,a.animateAngle&&(g=d.radiansToDegrees(t.angle)))}isNaN(g)||c.rotate(g+a.extraAngle);if(!isNaN(e)&&!isNaN(f))c.translate(e,f,NaN,!0);else if(!isNaN(l)&&!isNaN(k))if(f=b.coordinatesToXY(k,l),e=f.x,f=f.y,isNaN(p)||(e=p),isNaN(r)||(f=r),a.fixedSize){p=a.positionScale;isNaN(p)?p=0:(--p,p*=1-2*Math.abs(m-.5));if(m=a.objectToResize)m.scale=1+p;c.translate(e,f,1/n+p,!0)}else c.translate(e,f,NaN,!0);this.positionLabel(h,a,a.labelPositionReal)},
positionLabel:function(a,b,c){if(a){var d=b.image,f=0,g=0,h=0,k=0;d&&(k=d.getBBox(),g=d.y+k.y,f=d.x+k.x,h=k.width,k=k.height,b.svgPath&&(h*=b.scale,k*=b.scale));var d=a.getBBox(),l=d.width,m=d.height;"right"==c&&(f+=h+l/2+5,g+=k/2-2);"left"==c&&(f+=-l/2-5,g+=k/2-2);"top"==c&&(g-=m/2+3,f+=h/2);"bottom"==c&&(g+=k+m/2,f+=h/2);"middle"==c&&(f+=h/2,g+=k/2);a.translate(f+b.labelShiftX,g+b.labelShiftY,NaN,!0);a=b.labelFontSizeReal;b.labelBG&&b.labelBG.translate(f-d.width/2+b.labelShiftX-9,g-a/2+b.labelShiftY-
4,NaN,!0)}},createPredefinedImage:function(a,b,c,e,f,g){var h=this.chart.container,k;switch(e){case "circle":k=d.circle(h,f/2,a,1,c,b,1);break;case "rectangle":k=d.polygon(h,[-f/2,f/2,f/2,-f/2],[g/2,g/2,-g/2,-g/2],a,1,c,b,1,0,!0);break;case "bubble":k=d.circle(h,f/2,a,1,c,b,1,!0);break;case "hexagon":f/=Math.sqrt(3),k=d.polygon(h,[.866*f,0*f,-.866*f,-.866*f,0*f,.866*f],[.5*f,1*f,.5*f,-.5*f,-1*f,-.5*f],a,1,c,b,1)}return k},reset:function(){this.objectsToResize=[];this.allSvgObjects=[];this.allObjects=
[];this.allLabels=[];this.labelsToReposition=[]}})})();(function(){var d=window.AmCharts;d.ImagesSettings=d.Class({construct:function(a){this.cname="ImagesSettings";this.balloonText="[[title]]";this.alpha=1;this.borderAlpha=0;this.borderThickness=1;this.labelPosition="right";this.labelColor="#000000";this.labelFontSize=11;this.color="#000000";this.labelRollOverColor="#00CC00";this.centered=!0;this.rollOverScale=this.selectedScale=1;this.descriptionWindowWidth=250;this.bringForwardOnHover=!0;this.outlineColor="transparent";this.adjustAnimationSpeed=!1;
this.baseAnimationDistance=500;this.pauseDuration=0;this.easingFunction=d.easeInOutQuad;this.animationDuration=3;this.positionScale=1;this.accessibleLabel="[[title]] [[description]]";d.applyTheme(this,a,this.cname)}})})();(function(){var d=window.AmCharts;d.LinesProcessor=d.Class({construct:function(a){this.chart=a;this.reset()},process:function(a){var b=a.lines,c;for(c=0;c<b.length;c++){var d=b[c];this.createLine(d,c);d.parentArray=b}this.counter=c;a.parentObject&&a.remainVisible&&this.process(a.parentObject)},createLine:function(a,b){a=d.processObject(a,d.MapLine);isNaN(b)&&(this.counter++,b=this.counter);a.index=b;a.remove&&a.remove();var c=this.chart,e=c.linesSettings,f=this.objectsToResize,g=c.mapLinesContainer,
h=c.stageLinesContainer,k=e.thickness,l=e.dashLength,m=e.arrow,n=e.arrowSize,p=e.arrowColor,r=e.arrowAlpha,t=e.color,q=e.alpha,y=e.rollOverColor,B=e.selectedColor,u=e.rollOverAlpha,w=e.balloonText,v=e.bringForwardOnHover,A=e.arc,C=e.rollOverBrightness,x=c.container;a.chart=c;a.baseSettings=e;var z=x.set();a.displayObject=z;var E=a.tabIndex;void 0===E&&(E=e.tabIndex);void 0!==E&&z.setAttr("tabindex",E);this.allSvgObjects.push(z);a.arrays.push({arr:this.allSvgObjects,el:z});this.allObjects.push(a);
a.arrays.push({arr:this.allObjects,el:a});a.mouseEnabled&&c.addObjectEventListeners(z,a);if(a.remainVisible||c.selectedObject==a.parentObject){E=a.thickness;isNaN(E)&&(E=k);k=a.dashLength;isNaN(k)&&(k=l);l=a.color;void 0==l&&(l=t);t=a.alpha;isNaN(t)&&(t=q);q=a.rollOverAlpha;isNaN(q)&&(q=u);isNaN(q)&&(q=t);u=a.rollOverColor;void 0==u&&(u=y);y=a.selectedColor;void 0==y&&(y=B);B=a.balloonText;void 0===B&&(B=w);w=a.arc;isNaN(w)&&(w=A);A=a.arrow;if(!A||"none"==A&&"none"!=m)A=m;m=a.arrowColor;void 0==m&&
(m=p);void 0==m&&(m=l);p=a.arrowAlpha;isNaN(p)&&(p=r);isNaN(p)&&(p=t);r=a.arrowSize;isNaN(r)&&(r=n);n=a.rollOverBrightness;void 0==n&&(n=C);a.colorReal=l;a.arrowColor=m;isNaN(e.selectedBrightness)||(y=d.adjustLuminosity(a.colorReal,e.selectedBrightness/100));a.alphaReal=t;a.rollOverColorReal=u;a.rollOverAlphaReal=q;a.balloonTextReal=B;a.selectedColorReal=y;a.thicknessReal=E;a.rollOverBrightnessReal=n;a.accessibleLabel||(a.accessibleLabel=e.accessibleLabel);void 0===a.shiftArrow&&(a.shiftArrow=e.shiftArrow);
void 0==a.bringForwardOnHover&&(a.bringForwardOnHover=v);d.processDescriptionWindow(e,a);v=this.processCoordinates(a.x,c.realWidth);C=this.processCoordinates(a.y,c.realHeight);n=a.longitudes;e=a.latitudes;q=n.length;if(0<q)for(v=[],C=[],u=0;u<q;u++)B=c.coordinatesToXY(n[u],e[u]),v.push(B.x),C.push(B.y);if(0<v.length){a.segments=v.length;d.dx=0;d.dy=0;var F,H,G,q=10*(1-Math.abs(w));10<=q&&(q=NaN);1>q&&(q=1);a.arcRadius=[];a.distances=[];n=c.mapContainer.scale;if(isNaN(q)){for(q=0;q<v.length-1;q++)H=
Math.sqrt(Math.pow(v[q+1]-v[q],2)+Math.pow(C[q+1]-C[q],2)),a.distances[q]=H;q=d.line(x,v,C,l,1,E/n,k,!1,!1,!0);l=d.line(x,v,C,l,.001,5/n,k,!1,!1,!0);q.setAttr("stroke-linecap","round")}else{u=1;0>w&&(u=0);B={fill:"none",stroke:l,"stroke-opacity":1,"stroke-width":E/n,"fill-opacity":0,"stroke-linecap":"round"};void 0!==k&&0<k&&(B["stroke-dasharray"]=k);for(var k="",D=0;D<v.length-1;D++){var L=v[D],J=v[D+1],M=C[D],O=C[D+1];H=Math.sqrt(Math.pow(J-L,2)+Math.pow(O-M,2));G=H/2*q;F=270+180*Math.acos(H/2/
G)/Math.PI;isNaN(F)&&(F=270);L<J&&(u=1);0<w&&(F=-F);k+="M"+L+","+M+"A"+G+","+G+",0,0,"+u+","+J+","+O;a.arcRadius[D]=G;a.distances[D]=H}q=x.path(k).attr(B);l=x.path(k).attr({"fill-opacity":0,stroke:l,"stroke-width":5/n,"stroke-opacity":.001,fill:"none"})}d.setCN(c,q,"map-line");void 0!=a.id&&d.setCN(c,q,"map-line-"+a.id);d.dx=.5;d.dy=.5;z.push(q);z.push(l);q.setAttr("opacity",t);if("none"!=A){var I,K,N;if("end"==A||"both"==A)u=v[v.length-1],D=C[C.length-1],1<v.length?(B=v[v.length-2],I=C[C.length-
2]):(B=u,I=D),I=180*Math.atan((D-I)/(u-B))/Math.PI,isNaN(F)||(I+=F),K=u,N=D,I=0>u-B?I-90:I+90;t=[-r/2-.5,-.5,r/2-.5];k=[r,-.5,r];a.shiftArrow&&"middle"!=A&&(k=[0,1.2*-r,0]);"both"==A&&(r=d.polygon(x,t,k,m,p,1,m,p,void 0,!0),z.push(r),r.translate(K,N,1/n,!0),isNaN(I)||r.rotate(I),d.setCN(c,q,"map-line-arrow"),void 0!=a.id&&d.setCN(c,q,"map-line-arrow-"+a.id),a.fixedSize&&f.push(r));if("start"==A||"both"==A)r=v[0],N=C[0],1<v.length?(u=v[1],K=C[1]):(u=r,K=N),I=180*Math.atan((N-K)/(r-u))/Math.PI,isNaN(F)||
(I-=F),K=r,I=0>r-u?I-90:I+90;"middle"==A&&(u=v[v.length-1],D=C[C.length-1],1<v.length?(B=v[v.length-2],I=C[C.length-2]):(B=u,I=D),K=B+(u-B)/2,N=I+(D-I)/2,I=180*Math.atan((D-I)/(u-B))/Math.PI,isNaN(F)||(F=H/2,G-=Math.sqrt(G*G-F*F),0>w&&(G=-G),F=Math.sin(I/180*Math.PI),-1==F&&(F=1),K-=F*G,N+=Math.cos(I/180*Math.PI)*G),I=0>u-B?I-90:I+90);r=d.polygon(x,t,k,m,p,1,m,p,void 0,!0);d.setCN(c,q,"map-line-arrow");void 0!=a.id&&d.setCN(c,q,"map-line-arrow-"+a.id);z.push(r);r.translate(K,N,1/n,!0);isNaN(I)||r.rotate(I);
a.fixedSize&&(f.push(r),a.arrays.push({arr:f,el:r}));a.arrowSvg=r}a.fixedSize&&q&&(f={line:q,thickness:E},this.linesToResize.push(f),a.arrays.push({arr:this.linesToResize,el:f}),f={line:l,thickness:5},this.linesToResize.push(f),a.arrays.push({arr:this.linesToResize,el:f}));a.lineSvg=q;a.showAsSelected&&!isNaN(y)&&q.setAttr("stroke",y);0<e.length?g.push(z):h.push(z);a.hidden&&z.hide();c.makeObjectAccessible(a)}}},processCoordinates:function(a,b){var c=[],d;for(d=0;d<a.length;d++){var f=a[d],g=Number(f);
isNaN(g)&&(g=Number(f.replace("%",""))*b/100);isNaN(g)||c.push(g)}return c},reset:function(){this.objectsToResize=[];this.allSvgObjects=[];this.allObjects=[];this.linesToResize=[]}})})();(function(){var d=window.AmCharts;d.LinesSettings=d.Class({construct:function(a){this.cname="LinesSettings";this.balloonText="[[title]]";this.thickness=1;this.dashLength=0;this.arrowSize=10;this.arrowAlpha=1;this.arrow="none";this.color="#990000";this.descriptionWindowWidth=250;this.bringForwardOnHover=!0;d.applyTheme(this,a,this.cname)}})})();(function(){var d=window.AmCharts;d.MapObject=d.Class({construct:function(a){this.fixedSize=this.mouseEnabled=!0;this.images=[];this.lines=[];this.areas=[];this.remainVisible=!0;this.passZoomValuesToTarget=!1;this.objectType=this.cname;d.applyTheme(this,a,"MapObject");this.arrays=[]},deleteObject:function(){this.remove();this.parentArray&&d.removeFromArray(this.parentArray,this);if(this.arrays)for(var a=0;a<this.arrays.length;a++)d.removeFromArray(this.arrays[a].arr,this.arrays[a].el);this.arrays=
[]}})})();(function(){var d=window.AmCharts;d.MapArea=d.Class({inherits:d.MapObject,construct:function(a){this.cname="MapArea";d.MapArea.base.construct.call(this,a);d.applyTheme(this,a,this.cname)},validate:function(){this.chart.areasProcessor.createArea(this)}})})();(function(){var d=window.AmCharts;d.MapLine=d.Class({inherits:d.MapObject,construct:function(a){this.cname="MapLine";this.longitudes=[];this.latitudes=[];this.x=[];this.y=[];this.segments=0;this.arrow="none";d.MapLine.base.construct.call(this,a);d.applyTheme(this,a,this.cname)},validate:function(){this.chart.linesProcessor.createLine(this)},remove:function(){var a=this.displayObject;a&&a.remove()},getCoordinates:function(a,b){isNaN(b)&&(b=0);isNaN(this.arc)||this.isValid||(this.isValid=!0,this.validate());
if(!isNaN(a)){var c,e,f,g,h,k;if(1<this.longitudes.length){e=this.chart.coordinatesToXY(this.longitudes[b],this.latitudes[b]);var l=this.chart.coordinatesToXY(this.longitudes[b+1],this.latitudes[b+1]);c=e.x;f=l.x;e=e.y;g=l.y}else 1<this.x.length&&(c=this.x[b],f=this.x[b+1],e=this.y[b],g=this.y[b+1]);l=Math.sqrt(Math.pow(f-c,2)+Math.pow(g-e,2));c<f&&!isNaN(this.arc)&&0!==this.arc&&(a=1-a);h=c+(f-c)*a;k=e+(g-e)*a;var m=Math.atan2(g-e,f-c);if(!isNaN(this.arc)&&0!==this.arc&&this.arcRadius){var n=0;c<
f&&(n=c,c=f,f=n,n=e,e=g,g=n,n=Math.PI);k=this.arcRadius[b];0>this.arc&&(l=-l);h=c+(f-c)/2+Math.sqrt(k*k-l/2*(l/2))*(e-g)/l;var p=e+(g-e)/2+Math.sqrt(k*k-l/2*(l/2))*(f-c)/l;c=180*Math.atan2(e-p,c-h)/Math.PI;f=180*Math.atan2(g-p,f-h)/Math.PI;180<f-c&&(f-=360);m=d.degreesToRadians(c+(f-c)*a);h+=k*Math.cos(m);k=p+k*Math.sin(m);m=0<this.arc?m+Math.PI/2:m-Math.PI/2;m+=n}this.distance=l;return{x:h,y:k,angle:m}}},fixToStage:function(){if(0<this.latitudes.length){this.y=[];for(var a=0;a<this.latitudes.length;a++){var b=
this.chart.coordinatesToStageXY(this.longitudes[a],this.latitudes[a]);this.y.push(b.y);this.x.push(b.x)}this.latitudes=[];this.longitudes=[]}this.validate()},fixToMap:function(){if(0<this.y.length){this.latitudes=[];for(var a=0;a<this.y.length;a++){var b=this.chart.stageXYToCoordinates(this.x[a],this.y[a]);this.latitudes.push(b.latitude);this.longitudes.push(b.longitude)}this.y=[];this.x=[]}this.validate()}})})();(function(){var d=window.AmCharts;d.MapImage=d.Class({inherits:d.MapObject,construct:function(a){this.cname="MapImage";this.scale=1;this.widthAndHeightUnits="pixels";this.labelShiftY=this.labelShiftX=0;this.positionOnLine=.5;this.direction=1;this.lineSegment=this.extraAngle=0;this.animateAngle=!0;this.createEvents("animationStart","animationEnd");d.MapImage.base.construct.call(this,a);d.applyTheme(this,a,this.cname);this.delayCounter=0},validate:function(){this.chart.imagesProcessor.createImage(this)},
updatePosition:function(){this.chart.imagesProcessor.updateSizeAndPosition(this)},remove:function(){var a=this.displayObject;a&&a.remove();(a=this.imageLabel)&&a.remove()},animateTo:function(a,b,c,d){isNaN(c)||(this.animationDuration=c);d&&(this.easingFunction=d);this.finalX=a;this.finalY=b;isNaN(this.longitude)||(this.initialX=this.longitude);isNaN(this.left)||(this.initialX=this.left);isNaN(this.right)||(this.initialX=this.right);isNaN(this.latitude)||(this.initialY=this.latitude);isNaN(this.top)||
(this.initialY=this.top);isNaN(this.bottom)||(this.initialY=this.bottom);this.animatingAlong=!1;this.animate()},animateAlong:function(a,b,c){1==this.positionOnLine&&this.flipDirection&&(this.direction=-1,this.extraAngle=180);isNaN(b)||(this.animationDuration=b);c&&(this.easingFunction=c);a&&(this.line=this.chart.getObjectById(a));this.animateAlongLine=this.line;this.animatingAlong=!0;this.animate()},animate:function(){var a=this.chart.imagesSettings,b=this.animationDuration;isNaN(b)&&(b=a.animationDuration);
this.totalFrames=b*d.updateRate;b=1;this.line&&a.adjustAnimationSpeed&&(this.line.distances&&(b=this.line.distances[this.lineSegment]*this.chart.zoomLevel(),b=Math.abs(b/a.baseAnimationDistance)),this.totalFrames=Math.round(b*this.totalFrames));this.frame=0;this.fire({type:"animationStart",chart:this.chart,image:this,lineSegment:this.lineSegment,direction:this.direction})},update:function(){var a=this.totalFrames;this.frame++;this.delayCounter--;0===this.delayCounter&&this.animateAlong();if(!(0<this.delayCounter))if(this.frame<=
a){this.updatePosition();var b=this.chart.imagesSettings,c=this.easingFunction;c||(c=b.easingFunction);a=c(0,this.frame,0,1,a);-1==this.direction&&(a=1-a);this.animatingAlong?this.positionOnLine=a:(b=this.initialX+(this.finalX-this.initialX)*a,isNaN(this.longitude)||(this.longitude=b),isNaN(this.left)||(this.left=b),isNaN(this.right)||(this.right=b),a=this.initialY+(this.finalY-this.initialY)*a,isNaN(this.latitude)||(this.latitude=a),isNaN(this.top)||(this.top=a),isNaN(this.bottom)||(this.bottom=
a))}else this.frame==a+1&&(this.fire({type:"animationEnd",chart:this.chart,image:this,lineSegment:this.lineSegment,direction:this.direction}),this.line&&this.animatingAlong&&(1==this.direction?this.lineSegment<this.line.segments-2?(this.lineSegment++,this.delayAnimateAlong(),this.positionOnLine=0):this.flipDirection?(this.direction=-1,this.extraAngle=180,this.delayAnimateAlong()):this.loop&&(this.delayAnimateAlong(),this.lineSegment=0):0<this.lineSegment?(this.lineSegment--,this.delayAnimateAlong(),
this.positionOnLine=0):this.loop&&this.flipDirection?(this.direction=1,this.extraAngle=0,this.delayAnimateAlong()):this.loop&&this.delayAnimateAlong()))},delayAnimateAlong:function(){this.animateAlongLine&&(this.delayCounter=this.chart.imagesSettings.pauseDuration*d.updateRate)},fixToStage:function(){if(!isNaN(this.longitude)){var a=this.chart.coordinatesToStageXY(this.longitude,this.latitude);this.left=a.x;this.top=a.y;this.latitude=this.longitude=void 0}this.validate()},fixToMap:function(){if(!isNaN(this.left)){var a=
this.chart.stageXYToCoordinates(this.left,this.top);this.longitude=a.longitude;this.latitude=a.latitude;this.top=this.left=void 0}this.validate()}})})();(function(){var d=window.AmCharts;d.degreesToRadians=function(a){return a/180*Math.PI};d.radiansToDegrees=function(a){return a/Math.PI*180};d.getColorFade=function(a,b,c){var e=d.hex2RGB(b);b=e[0];var f=e[1],e=e[2],g=d.hex2RGB(a);a=g[0];var h=g[1],g=g[2];a+=Math.round((b-a)*c);h+=Math.round((f-h)*c);g+=Math.round((e-g)*c);return"rgb("+a+","+h+","+g+")"};d.hex2RGB=function(a){return[parseInt(a.substring(1,3),16),parseInt(a.substring(3,5),16),parseInt(a.substring(5,7),16)]};d.processDescriptionWindow=
function(a,b){isNaN(b.descriptionWindowX)&&(b.descriptionWindowX=a.descriptionWindowX);isNaN(b.descriptionWindowY)&&(b.descriptionWindowY=a.descriptionWindowY);isNaN(b.descriptionWindowLeft)&&(b.descriptionWindowLeft=a.descriptionWindowLeft);isNaN(b.descriptionWindowRight)&&(b.descriptionWindowRight=a.descriptionWindowRight);isNaN(b.descriptionWindowTop)&&(b.descriptionWindowTop=a.descriptionWindowTop);isNaN(b.descriptionWindowBottom)&&(b.descriptionWindowBottom=a.descriptionWindowBottom);isNaN(b.descriptionWindowWidth)&&
(b.descriptionWindowWidth=a.descriptionWindowWidth);isNaN(b.descriptionWindowHeight)&&(b.descriptionWindowHeight=a.descriptionWindowHeight)};d.normalizePath=function(a){for(var b="",c=d.parsePath(a.getAttribute("d")),e,f,g=Infinity,h=-Infinity,k=Infinity,l=-Infinity,m=0;m<c.length;m++){var n=c[m],p=n.letter,r=n.x,n=n.y;"h"==p&&(p="L",r+=e,n=f);"H"==p&&(p="L",n=f);"v"==p&&(p="L",r=e,n+=f);"V"==p&&(p="L",r=e);if("m"===p||"l"===p)p=p.toUpperCase(),r+=e,n+=f;r=d.roundTo(r,3);n=d.roundTo(n,3);e=r;f=n;
r>h&&(h=r);r<g&&(g=r);n>l&&(l=n);n<k&&(k=n);b="z"==p.toLowerCase()?b+"Z ":b+(p+" "+r+" "+n+" ")}a.setAttribute("d",b);return{minX:g,maxX:h,minY:k,maxY:l}};d.mercatorLatitudeToRadians=function(a){return Math.log(Math.tan(Math.PI/4+d.degreesToRadians(a)/2))};d.parsePath=function(a){a=a.match(/([MmLlHhVvZz]{1}[0-9.,\-\s]*)/g);for(var b=[],c=0;c<a.length;c++){var d=a[c].match(/([MmLlHhVvZz]{1})|([0-9.\-]+)/g),f={letter:d[0]};switch(d[0]){case "Z":case "Z":case "z":break;case "V":case "v":f.y=Number(d[1]);
break;case "H":case "h":f.x=Number(d[1]);break;default:f.x=Number(d[1]),f.y=Number(d[2])}b.push(f)}return b};d.acos=function(a){return 1<a?0:-1>a?Math.PI:Math.acos(a)};d.asin=function(a){return 1<a?Math.PI/2:-1>a?-Math.PI/2:Math.asin(a)};d.sinci=function(a){return a?a/Math.sin(a):1};d.asqrt=function(a){return 0<a?Math.sqrt(a):0};d.winkel3=function(a,b){var c=d.aitoff(a,b);return[(c[0]+a/Math.PI*2)/2,(c[1]+b)/2]};d.winkel3.invert=function(a,b){var c=a,e=b,f=25,g=Math.PI/2;do var h=Math.cos(e),k=Math.sin(e),
l=Math.sin(2*e),m=k*k,n=h*h,p=Math.sin(c),r=Math.cos(c/2),t=Math.sin(c/2),q=t*t,y=1-n*r*r,B=y?d.acos(h*r)*Math.sqrt(u=1/y):u=0,u,y=.5*(2*B*h*t+c/g)-a,w=.5*(B*k+e)-b,v=.5*u*(n*q+B*h*r*m)+.5/g,A=u*(p*l/4-B*k*t),k=.125*u*(l*t-B*k*n*p),m=.5*u*(m*r+B*q*h)+.5,h=A*k-m*v,A=(w*A-y*m)/h,y=(y*k-w*v)/h,c=c-A,e=e-y;while((1E-6<Math.abs(A)||1E-6<Math.abs(y))&&0<--f);return[c,e]};d.aitoff=function(a,b){var c=Math.cos(b),e=d.sinci(d.acos(c*Math.cos(a/=2)));return[2*c*Math.sin(a)*e,Math.sin(b)*e]};d.orthographic=
function(a,b){return[Math.cos(b)*Math.sin(a),Math.sin(b)]};d.equirectangular=function(a,b){return[a,b]};d.equirectangular.invert=function(a,b){return[a,b]};d.eckert5=function(a,b){var c=Math.PI;return[a*(1+Math.cos(b))/Math.sqrt(2+c),2*b/Math.sqrt(2+c)]};d.eckert5.invert=function(a,b){var c=Math.sqrt(2+Math.PI),d=b*c/2;return[c*a/(1+Math.cos(d)),d]};d.eckert6=function(a,b){for(var c=Math.PI,d=(1+c/2)*Math.sin(b),f=0,g=Infinity;10>f&&1E-5<Math.abs(g);f++)b-=g=(b+Math.sin(b)-d)/(1+Math.cos(b));d=Math.sqrt(2+
c);return[a*(1+Math.cos(b))/d,2*b/d]};d.eckert6.invert=function(a,b){var c=1+Math.PI/2,e=Math.sqrt(c/2);return[2*a*e/(1+Math.cos(b*=e)),d.asin((b+Math.sin(b))/c)]};d.mercator=function(a,b){b>=Math.PI/2-.02&&(b=Math.PI/2-.02);b<=-Math.PI/2+.02&&(b=-Math.PI/2+.02);return[a,Math.log(Math.tan(Math.PI/4+b/2))]};d.mercator.invert=function(a,b){return[a,2*Math.atan(Math.exp(b))-Math.PI/2]};d.miller=function(a,b){return[a,1.25*Math.log(Math.tan(Math.PI/4+.4*b))]};d.miller.invert=function(a,b){return[a,2.5*
Math.atan(Math.exp(.8*b))-.625*Math.PI]};d.eckert3=function(a,b){var c=Math.PI,d=Math.sqrt(c*(4+c));return[2/d*a*(1+Math.sqrt(1-4*b*b/(c*c))),4/d*b]};d.eckert3.invert=function(a,b){var c=Math.PI,e=Math.sqrt(c*(4+c))/2;return[a*e/(1+d.asqrt(1-b*b*(4+c)/(4*c))),b*e/2]}})();(function(){var d=window.AmCharts;d.MapData=d.Class({inherits:d.MapObject,construct:function(){this.cname="MapData";d.MapData.base.construct.call(this);this.projection="mercator";this.topLatitude=90;this.bottomLatitude=-90;this.leftLongitude=-180;this.rightLongitude=180;this.zoomLevel=1;this.getAreasFromMap=!1}})})();(function(){var d=window.AmCharts;d.DescriptionWindow=d.Class({construct:function(){},show:function(a,b,c,d){var f=this;f.chart=a;var g=document.createElement("div");g.style.position="absolute";var h=a.classNamePrefix+"-description-";g.className="ammapDescriptionWindow "+h+"div";f.div=g;b.appendChild(g);var k=".gif";a.svgIcons&&(k=".svg");var l=document.createElement("img");l.className="ammapDescriptionWindowCloseButton "+h+"close-img";l.src=a.pathToImages+"xIcon"+k;l.style.cssFloat="right";l.style.cursor=
"pointer";l.onclick=function(){f.close()};l.onmouseover=function(){l.src=a.pathToImages+"xIconH"+k};l.onmouseout=function(){l.src=a.pathToImages+"xIcon"+k};g.appendChild(l);b=document.createElement("div");b.className="ammapDescriptionTitle "+h+"title-div";b.onmousedown=function(){f.div.style.zIndex=1E3};g.appendChild(b);b.innerHTML=d;d=b.offsetHeight;b=document.createElement("div");b.className="ammapDescriptionText "+h+"text-div";b.style.maxHeight=f.maxHeight-d-20+"px";g.appendChild(b);b.innerHTML=
c},close:function(){try{this.div.parentNode.removeChild(this.div),this.chart.fireClosed()}catch(a){}}})})();(function(){var d=window.AmCharts;d.ValueLegend=d.Class({construct:function(a){this.cname="ValueLegend";this.enabled=!0;this.showAsGradient=!1;this.minValue=0;this.height=12;this.width=200;this.bottom=this.left=10;this.borderColor="#FFFFFF";this.borderAlpha=this.borderThickness=1;this.color="#000000";this.fontSize=11;d.applyTheme(this,a,this.cname)},init:function(a,b){if(this.enabled){var c=a.areasSettings.color,e=a.areasSettings.colorSolid,f=a.colorSteps;d.remove(this.set);var g=b.set();this.set=
g;d.setCN(a,g,"value-legend");var h=0,k=this.minValue,l=this.fontSize,m=a.fontFamily,n=this.color,p={precision:a.precision,decimalSeparator:a.decimalSeparator,thousandsSeparator:a.thousandsSeparator};void 0==k&&(k=d.formatNumber(a.minValueReal,p));void 0!==k&&(h=d.text(b,k,n,m,l,"left"),h.translate(0,l/2-1),d.setCN(a,h,"value-legend-min-label"),g.push(h),h=h.getBBox().height);k=this.maxValue;void 0===k&&(k=d.formatNumber(a.maxValueReal,p));void 0!==k&&(h=d.text(b,k,n,m,l,"right"),h.translate(this.width,
l/2-1),d.setCN(a,h,"value-legend-max-label"),g.push(h),h=h.getBBox().height);if(this.showAsGradient)c=d.rect(b,this.width,this.height,[c,e],1,this.borderThickness,this.borderColor,1,0,0),d.setCN(a,c,"value-legend-gradient"),c.translate(0,h),g.push(c);else for(l=this.width/f,m=0;m<f;m++)n=d.getColorFade(c,e,1*m/(f-1)),n=d.rect(b,l,this.height,n,1,this.borderThickness,this.borderColor,1),d.setCN(a,n,"value-legend-color"),d.setCN(a,n,"value-legend-color-"+m),n.translate(l*m,h),g.push(n);e=c=0;f=g.getBBox();
h=a.getY(this.bottom,!0);l=a.getY(this.top);m=a.getX(this.right,!0);n=a.getX(this.left);isNaN(l)||(c=l);isNaN(h)||(c=h-f.height);isNaN(n)||(e=n);isNaN(m)||(e=m-f.width);g.translate(e,c)}else d.remove(this.set)}})})();(function(){var d=window.AmCharts;d.ObjectList=d.Class({construct:function(a){this.divId=a},init:function(a){this.chart=a;var b=this.divId;this.container&&(b=this.container);this.div="object"!=typeof b?document.getElementById(b):b;b=document.createElement("div");b.className="ammapObjectList "+a.classNamePrefix+"-object-list-div";this.div.appendChild(b);this.addObjects(a.dataProvider,b)},addObjects:function(a,b){var c=this.chart,d=document.createElement("ul");d.className=c.classNamePrefix+"-object-list-ul";
var f;if(a.areas)for(f=0;f<a.areas.length;f++){var g=a.areas[f];void 0===g.showInList&&(g.showInList=c.showAreasInList);this.addObject(g,d)}if(a.images)for(f=0;f<a.images.length;f++)g=a.images[f],void 0===g.showInList&&(g.showInList=c.showImagesInList),this.addObject(g,d);if(a.lines)for(f=0;f<a.lines.length;f++)g=a.lines[f],void 0===g.showInList&&(g.showInList=c.showLinesInList),this.addObject(g,d);0<d.childNodes.length&&b.appendChild(d)},addObject:function(a,b){var c=this;if(a.showInList&&void 0!==
a.title){var d=c.chart,f=document.createElement("li");f.className=d.classNamePrefix+"-object-list-li";var g=a.titleTr;g||(g=a.title);var g=document.createTextNode(g),h=document.createElement("a");h.className=d.classNamePrefix+"-object-list-a";h.appendChild(g);f.appendChild(h);b.appendChild(f);this.addObjects(a,f);h.onmouseover=function(){c.chart.rollOverMapObject(a,!1)};h.onmouseout=function(){c.chart.rollOutMapObject(a)};h.onclick=function(){c.chart.clickMapObject(a)}}}})})();


/***/ }),

/***/ 611:
/***/ (function(module, exports) {

// (c) ammap.com | SVG (in JSON format) map of World - Low
// areas: {id:"AE"},{id:"AF"},{id:"AL"},{id:"AM"},{id:"AO"},{id:"AR"},{id:"AT"},{id:"AU"},{id:"AZ"},{id:"BA"},{id:"BD"},{id:"BE"},{id:"BF"},{id:"BG"},{id:"BI"},{id:"BJ"},{id:"BN"},{id:"BO"},{id:"BR"},{id:"BS"},{id:"BT"},{id:"BW"},{id:"BY"},{id:"BZ"},{id:"CA"},{id:"CD"},{id:"CF"},{id:"CG"},{id:"CH"},{id:"CI"},{id:"CL"},{id:"CM"},{id:"CN"},{id:"CO"},{id:"CR"},{id:"CU"},{id:"CY"},{id:"CZ"},{id:"DE"},{id:"DJ"},{id:"DK"},{id:"DO"},{id:"DZ"},{id:"EC"},{id:"EE"},{id:"EG"},{id:"EH"},{id:"ER"},{id:"ES"},{id:"ET"},{id:"FK"},{id:"FI"},{id:"FJ"},{id:"FR"},{id:"GA"},{id:"GB"},{id:"GE"},{id:"GF"},{id:"GH"},{id:"GL"},{id:"GM"},{id:"GN"},{id:"GQ"},{id:"GR"},{id:"GT"},{id:"GW"},{id:"GY"},{id:"HN"},{id:"HR"},{id:"HT"},{id:"HU"},{id:"ID"},{id:"IE"},{id:"IL"},{id:"IN"},{id:"IQ"},{id:"IR"},{id:"IS"},{id:"IT"},{id:"JM"},{id:"JO"},{id:"JP"},{id:"KE"},{id:"KG"},{id:"KH"},{id:"KP"},{id:"KR"},{id:"XK"},{id:"KW"},{id:"KZ"},{id:"LA"},{id:"LB"},{id:"LK"},{id:"LR"},{id:"LS"},{id:"LT"},{id:"LU"},{id:"LV"},{id:"LY"},{id:"MA"},{id:"MD"},{id:"ME"},{id:"MG"},{id:"MK"},{id:"ML"},{id:"MM"},{id:"MN"},{id:"MR"},{id:"MW"},{id:"MX"},{id:"MY"},{id:"MZ"},{id:"NA"},{id:"NC"},{id:"NE"},{id:"NG"},{id:"NI"},{id:"NL"},{id:"NO"},{id:"NP"},{id:"NZ"},{id:"OM"},{id:"PA"},{id:"PE"},{id:"PG"},{id:"PH"},{id:"PL"},{id:"PK"},{id:"PR"},{id:"PS"},{id:"PT"},{id:"PY"},{id:"QA"},{id:"RO"},{id:"RS"},{id:"RU"},{id:"RW"},{id:"SA"},{id:"SB"},{id:"SD"},{id:"SE"},{id:"SI"},{id:"SJ"},{id:"SK"},{id:"SL"},{id:"SN"},{id:"SO"},{id:"SR"},{id:"SS"},{id:"SV"},{id:"SY"},{id:"SZ"},{id:"TD"},{id:"TF"},{id:"TG"},{id:"TH"},{id:"TJ"},{id:"TL"},{id:"TM"},{id:"TN"},{id:"TR"},{id:"TT"},{id:"TW"},{id:"TZ"},{id:"UA"},{id:"UG"},{id:"US"},{id:"UY"},{id:"UZ"},{id:"VE"},{id:"VN"},{id:"VU"},{id:"YE"},{id:"ZA"},{id:"ZM"},{id:"ZW"}
AmCharts.maps.worldLow={
	"svg": {
		"defs": {
			"amcharts:ammap": {
				"projection":"mercator",
				"leftLongitude":"-169.6",
				"topLatitude":"83.68",
				"rightLongitude":"190.25",
				"bottomLatitude":"-55.55"
			}
		},
		"g":{
			"path":[
				{
					"id":"AE",
					"title":"United Arab Emirates",
					"d":"M619.87,393.72L620.37,393.57L620.48,394.41L622.67,393.93L624.99,394.01L626.68,394.1L628.6,392.03L630.7,390.05L632.47,388.15L633,389.2L633.38,391.64L631.95,391.65L631.72,393.65L632.22,394.07L630.95,394.67L630.94,395.92L630.12,397.18L630.05,398.39L629.48,399.03L621.06,397.51L619.98,394.43z"
				},
				{
					"id":"AF",
					"title":"Afghanistan",
					"d":"M646.88,356.9L649.74,358.2L651.85,357.74L652.44,356.19L654.65,355.67L656.23,354.62L656.79,351.83L659.15,351.15L659.59,349.9L660.92,350.84L661.76,350.95L663.32,350.98L665.44,351.72L666.29,352.14L668.32,351.02L669.27,351.69L670.17,350.09L671.85,350.16L672.28,349.64L672.58,348.21L673.79,346.98L675.3,347.78L675,348.87L675.85,349.04L675.58,351.99L676.69,353.14L677.67,352.4L678.92,352.06L680.66,350.49L682.59,350.75L685.49,350.75L685.99,351.76L684.35,352.15L682.93,352.8L679.71,353.2L676.7,353.93L675.06,355.44L675.72,356.9L676.05,358.6L674.65,360.03L674.77,361.33L674,362.55L671.33,362.44L672.43,364.66L670.65,365.51L669.46,367.51L669.61,369.49L668.51,370.41L667.48,370.11L665.33,370.54L665.03,371.45L662.94,371.45L661.38,373.29L661.28,376.04L657.63,377.37L655.68,377.09L655.11,377.79L653.44,377.39L650.63,377.87L645.94,376.23L648.48,373.3L648.25,371.2L646.13,370.65L645.91,368.56L644.99,365.92L646.19,364.09L644.97,363.6L645.74,361.15z"
				},
				{
					"id":"AL",
					"title":"Albania",
					"d":"M532.98,334.66L532.63,335.93L533.03,337.52L534.19,338.42L534.13,339.39L533.22,339.93L533.05,341.12L531.75,342.88L531.27,342.63L531.22,341.83L529.66,340.6L529.42,338.85L529.66,336.32L530.04,335.16L529.57,334.57L529.38,333.38L530.6,331.51L530.77,332.23L531.53,331.89L532.13,332.91L532.8,333.29z"
				},
				{
					"id":"AM",
					"title":"Armenia",
					"d":"M597.45,337.5L601.35,336.92L601.93,337.9L603,338.54L602.43,339.46L603.93,340.72L603.14,341.88L604.33,342.87L605.59,343.46L605.65,345.96L604.63,346.06L603.49,343.98L603.5,343.43L602.26,343.44L601.43,342.46L600.85,342.56L599.74,341.5L597.66,340.59L597.93,338.8z"
				},
				{
					"id":"AO",
					"title":"Angola",
					"d":"M521.03,479.78l0.69,2.09l0.8,1.68l0.64,0.91l1.07,1.47l1.85,-0.23l0.93,-0.4l1.55,0.4l0.42,-0.7l0.7,-1.64l1.74,-0.11l0.15,-0.49l1.43,-0.01l-0.24,1.01l3.4,-0.02l0.05,1.77l0.57,1.09l-0.41,1.7l0.21,1.74l0.94,1.05l-0.15,3.37l0.69,-0.26l1.22,0.07l1.74,-0.42l1.28,0.17l0.3,0.88l-0.32,1.38l0.49,1.34l-0.42,1.07l0.24,0.99l-5.84,-0.04l-0.13,9.16l1.89,2.38l1.83,1.82l-5.15,1.19l-6.79,-0.41l-1.94,-1.4l-11.37,0.13l-0.42,0.21l-1.67,-1.32l-1.82,-0.09l-1.68,0.5l-1.35,0.56l-0.26,-1.83l0.39,-2.55l0.97,-2.65l0.15,-1.24l0.91,-2.59l0.67,-1.17l1.61,-1.87l0.9,-1.27l0.29,-2.11l-0.15,-1.61l-0.84,-1.01l-0.75,-1.72l-0.69,-1.69l0.15,-0.59l0.86,-1.12l-0.85,-2.72l-0.57,-1.88l-1.4,-1.77l0.27,-0.54l1.16,-0.38l0.81,0.05l0.98,-0.34L521.03,479.78zM510.12,479.24l-0.71,0.3l-0.75,-2.1l1.13,-1.21l0.85,-0.47l1.05,0.96l-1.02,0.59l-0.46,0.72L510.12,479.24z"
				},
				{
					"id":"AR",
					"title":"Argentina",
					"d":"M291.6,648.91l-2.66,0.25l-1.43,-1.73l-1.69,-0.13l-3,0l0,-10.57l1.08,2.15l1.4,3.53l3.65,2.87l3.93,1.21L291.6,648.91zM293.1,526.47l1.65,2.18l1.09,-2.43l3.2,0.12l0.45,0.64l5.15,4.94l2.29,0.46l3.43,2.26l2.89,1.2l0.4,1.36l-2.76,4.73l2.83,0.85l3.15,0.48l2.22,-0.5l2.54,-2.4l0.46,-2.74l1.39,-0.59l1.41,1.79l-0.06,2.49l-2.36,1.73l-1.88,1.28l-3.16,3.08l-3.74,4.37l-0.7,2.59l-0.75,3.37l0.03,3.3l-0.61,0.74l-0.22,2.17l-0.19,1.76l3.56,2.91l-0.38,2.37l1.75,1.51l-0.14,1.7l-2.69,4.52l-4.16,1.91l-5.62,0.75l-3.08,-0.36l0.59,2.15l-0.57,2.72l0.52,1.85l-1.68,1.3l-2.87,0.51l-2.7,-1.35l-1.08,0.97l0.39,3.71l1.89,1.14l1.54,-1.19l0.84,1.96l-2.58,1.18l-2.25,2.38l-0.41,3.91l-0.66,2.11l-2.65,0.01l-2.2,2.04l-0.8,3.01l2.76,2.98l2.68,0.83l-0.96,3.73l-3.31,2.38l-1.82,5.03l-2.56,1.72l-1.15,2.06l0.91,4.64l1.87,2.63l-1.18,-0.23l-2.6,-0.71l-6.78,-0.61l-1.16,-2.63l0.05,-3.33l-1.87,0.28l-0.99,-1.6l-0.25,-4.6l2.15,-1.88l0.89,-2.68l-0.33,-2.11l1.49,-3.52l1.02,-5.35l-0.3,-2.33l1.22,-0.75l-0.3,-1.48l-1.3,-0.78l0.92,-1.63l-1.27,-1.46l-0.65,-4.4l1.13,-0.77l-0.47,-4.54l0.66,-3.75l0.75,-3.22l1.68,-1.3l-0.85,-3.46l-0.01,-3.22l2.12,-2.26l-0.06,-2.87l1.6,-3.31l0.01,-3.09l-0.73,-0.61l-1.29,-5.69l1.73,-3.34l-0.27,-3.11l1,-2.9l1.84,-2.96l1.98,-1.95l-0.84,-1.23l0.59,-1l-0.09,-5.14l3.05,-1.51l0.96,-3.16l-0.34,-0.76l2.34,-2.72L293.1,526.47z"
				},
				{
					"id":"AT",
					"title":"Austria",
					"d":"M522.86,309.85L522.65,311.56L521.07,311.57L521.61,312.46L520.68,315.11L520.15,315.8L517.7,315.9L516.28,316.82L513.96,316.51L509.95,315.46L509.33,314.03L506.56,314.75L506.23,315.52L504.53,314.94L503.1,314.83L501.83,314.09L502.26,313.08L502.15,312.34L503,312.12L504.42,313.26L504.82,312.17L507.29,312.35L509.3,311.61L510.64,311.73L511.51,312.58L511.78,311.88L511.38,309.16L512.39,308.62L513.37,306.67L515.46,308.04L517.03,306.3L518.02,305.98L520.2,307.28L521.51,307.06L522.81,307.86L522.58,308.4z"
				},
				{
					"id":"AU",
					"title":"Australia",
					"d":"M882.93,588.16l2.71,1.28l1.53,-0.51l2.19,-0.71l1.68,0.25l0.2,4.43l-0.96,1.3l-0.29,3.06l-0.98,-1.05l-1.95,2.67l-0.58,-0.21l-1.72,-0.12l-1.73,-3.28l-0.38,-2.5l-1.62,-3.25l0.07,-1.7L882.93,588.16zM877.78,502.1l1.01,2.25l1.8,-1.08l0.93,1.22l1.35,1.13l-0.29,1.28l0.6,2.48l0.43,1.45l0.71,0.35l0.76,2.5l-0.27,1.52l0.91,1.99l3.04,1.54l1.98,1.41l1.88,1.29l-0.37,0.72l1.6,1.87l1.09,3.25l1.12,-0.66l1.14,1.31l0.69,-0.46l0.48,3.21l1.99,1.87l1.3,1.17l2.19,2.49l0.79,2.49l0.07,1.77l-0.19,1.94l1.34,2.68l-0.16,2.81l-0.49,1.48l-0.76,2.87l0.06,1.86l-0.55,2.34l-1.24,3l-2.08,1.63l-1.02,2.59l-0.94,1.67l-0.83,2.93l-1.08,1.71l-0.71,2.58l-0.36,2.4l0.14,1.11l-1.61,1.22l-3.14,0.13l-2.59,1.45l-1.29,1.38l-1.69,1.54l-2.32,-1.58l-1.72,-0.63l0.44,-1.85l-1.53,0.67l-2.46,2.58l-2.42,-0.97l-1.59,-0.56l-1.6,-0.25l-2.71,-1.03l-1.81,-2.18l-0.52,-2.66l-0.65,-1.75l-1.38,-1.4l-2.7,-0.41l0.92,-1.66l-0.68,-2.52l-1.37,2.35l-2.5,0.63l1.47,-1.88l0.42,-1.95l1.08,-1.65l-0.22,-2.47l-2.28,2.85l-1.75,1.15l-1.07,2.69l-2.19,-1.4l0.09,-1.79l-1.75,-2.43l-1.48,-1.25l0.53,-0.77l-3.6,-2l-1.97,-0.09l-2.7,-1.6l-5.02,0.31l-3.63,1.18l-3.19,1.1l-2.68,-0.22l-2.97,1.7l-2.43,0.77l-0.54,1.75l-1.04,1.36l-2.38,0.08l-1.76,0.3l-2.48,-0.61l-2.02,0.37l-1.92,0.15l-1.67,1.8l-0.82,-0.15l-1.41,0.96l-1.35,1.08l-2.05,-0.13l-1.88,0l-2.97,-2.17l-1.51,-0.64l0.06,-1.93l1.39,-0.46l0.48,-0.76l-0.1,-1.2l0.34,-2.3l-0.31,-1.95l-1.48,-3.29l-0.46,-1.85l0.12,-1.83l-1.12,-2.08l-0.07,-0.93l-1.24,-1.26l-0.35,-2.47l-1.6,-2.48l-0.39,-1.33l1.23,1.35l-0.95,-2.88l1.39,0.9l0.83,1.2l-0.05,-1.59l-1.39,-2.43l-0.27,-0.97l-0.65,-0.92l0.3,-1.77l0.57,-0.75l0.38,-1.52l-0.3,-1.77l1.16,-2.17l0.21,2.29l1.18,-2.07l2.28,-1l1.37,-1.28l2.14,-1.1l1.27,-0.23l0.77,0.37l2.21,-1.11l1.7,-0.33l0.42,-0.65l0.74,-0.27l1.55,0.07l2.95,-0.87l1.52,-1.31l0.72,-1.58l1.64,-1.49l0.13,-1.17l0.07,-1.59l1.96,-2.47l1.18,2.51l1.19,-0.58l-1,-1.38l0.88,-1.41l1.24,0.63l0.34,-2.21l1.53,-1.42l0.68,-1.14l1.41,-0.49l0.04,-0.8l1.23,0.34l0.05,-0.72l1.23,-0.41l1.36,-0.39l2.07,1.32l1.56,1.71l1.75,0.02l1.78,0.27l-0.59,-1.58l1.34,-2.3l1.26,-0.75l-0.44,-0.71l1.22,-1.63l1.7,-1.01l1.43,0.34l2.36,-0.54l-0.05,-1.45l-2.05,-0.94l1.49,-0.41l1.86,0.7l1.49,1.17l2.36,0.73l0.8,-0.29l1.74,0.88l1.64,-0.82l1.05,0.25l0.66,-0.55l1.29,1.41l-0.75,1.53l-1.06,1.16l-0.96,0.1l0.33,1.15l-0.82,1.43l-1,1.41l0.2,0.81l2.23,1.6l2.16,0.93l1.44,1l2.03,1.72l0.79,0l1.47,0.75l0.43,0.9l2.68,0.99l1.85,-1l0.55,-1.57l0.57,-1.29l0.35,-1.59l0.85,-2.3l-0.39,-1.39l0.2,-0.84l-0.32,-1.64l0.37,-2.16l0.54,-0.58l-0.44,-0.95l0.68,-1.51l0.53,-1.56l0.07,-0.81l1.04,-1.06l0.79,1.39l0.19,1.78l0.7,0.34l0.12,1.2l1.02,1.45l0.21,1.62L877.78,502.1z"
				},
				{
					"id":"AZ",
					"title":"Azerbaijan",
					"d":"M601.43,342.46l0.83,0.97l1.24,-0.01l-0.01,0.56l1.14,2.08l-1.92,-0.48l-1.42,-1.66l-0.44,-1.37L601.43,342.46zM608.08,337.03l1.24,0.25l0.48,-0.95l1.67,-1.51l1.47,1.97l1.43,2.62l1.31,0.17l0.86,0.99l-2.31,0.29l-0.49,2.82l-0.48,1.26l-1.03,0.84l0.08,1.77l-0.7,0.18l-1.75,-1.87l0.97,-1.78l-0.83,-1.06l-1.05,0.27l-3.31,2.66l-0.06,-2.5l-1.26,-0.59l-1.19,-0.99l0.79,-1.16l-1.49,-1.26l0.56,-0.92l-1.07,-0.64l-0.58,-0.97l0.69,-0.61l2.09,1.07l1.51,0.22l0.38,-0.43l-1.38,-2.02l0.73,-0.52l0.79,0.13L608.08,337.03z"
				},
				{
					"id":"BA",
					"title":"Bosnia and Herzegovina",
					"d":"M528.54,323.11L529.56,323.1L528.86,324.82L530.21,326.32L529.8,328.14L529.14,328.31L528.61,328.67L527.7,329.56L527.29,331.66L524.81,330.22L523.75,328.61L522.68,327.76L521.39,326.31L520.79,325.1L519.41,323.27L520,321.63L521.01,322.54L521.61,321.72L522.92,321.63L525.33,322.29L527.27,322.23z"
				},
				{
					"id":"BD",
					"title":"Bangladesh",
					"d":"M735.09,400.41L735.04,402.56L734.06,402.1L734.24,404.51L733.44,402.95L733.28,401.43L732.74,399.98L731.57,398.22L728.99,398.1L729.25,399.35L728.37,401.02L727.17,400.41L726.76,400.96L725.97,400.63L724.89,400.36L724.45,397.88L723.48,395.6L723.95,393.76L722.23,392.94L722.85,391.82L724.6,390.67L722.58,389.04L723.57,386.93L725.79,388.27L727.13,388.43L727.38,390.58L730.04,391L732.65,390.95L734.26,391.48L732.97,394.07L731.71,394.25L730.85,395.98L732.38,397.56L732.84,395.62L733.62,395.61z"
				},
				{
					"id":"BE",
					"title":"Belgium",
					"d":"M484.55,295.91L486.6,296.26L489.2,295.33L490.97,297.28L492.52,298.32L492.2,301.29L491.47,301.45L491.16,303.88L488.71,301.91L487.27,302.25L485.31,300.19L484.01,298.42L482.71,298.35L482.3,296.79z"
				},
				{
					"id":"BF",
					"title":"Burkina Faso",
					"d":"M467.33,436.4L465.41,435.67L464.09,435.78L463.11,436.49L461.85,435.89L461.36,434.96L460.1,434.34L459.91,432.7L460.68,431.49L460.61,430.53L462.84,428.17L463.25,426.21L464.02,425.51L465.38,425.89L466.55,425.31L466.93,424.57L469.11,423.29L469.64,422.39L472.26,421.19L473.81,420.78L474.51,421.33L476.3,421.32L476.08,422.72L476.46,424.03L478.04,425.9L478.12,427.28L481.36,427.93L481.29,429.88L480.68,430.74L479.31,431L478.74,432.24L477.78,432.56L475.32,432.5L474.02,432.28L473.12,432.74L471.88,432.53L467.01,432.66L466.94,434.27z"
				},
				{
					"id":"BG",
					"title":"Bulgaria",
					"d":"M538.78,325.56L539.59,327.16L540.67,326.87L542.83,327.48L546.95,327.68L548.34,326.69L551.64,325.79L553.68,327.2L555.33,327.61L553.87,329.2L552.85,331.93L553.75,334.09L551.34,333.58L548.48,334.76L548.45,336.62L545.9,336.97L543.93,335.67L541.68,336.7L539.61,336.59L539.41,334.12L538,332.91L538.47,332.37L538.16,331.92L538.63,330.71L539.7,329.52L538.34,327.86L538.09,326.44z"
				},
				{
					"id":"BI",
					"title":"Burundi",
					"d":"M557.52,475.93L557.34,472.56L556.63,471.3L558.34,471.52L559.2,469.93L560.69,470.11L560.85,471.21L561.45,471.84L561.48,472.75L560.79,473.33L559.69,474.79L558.68,475.8z"
				},
				{
					"id":"BJ",
					"title":"Benin",
					"d":"M482.8,445.92L480.48,446.25L479.79,444.31L479.92,437.85L479.35,437.27L479.25,435.88L478.27,434.89L477.42,434.06L477.78,432.56L478.74,432.24L479.31,431L480.68,430.74L481.29,429.88L482.23,429.05L483.24,429.04L485.38,430.68L485.27,431.63L485.9,433.31L485.35,434.45L485.64,435.21L484.28,436.96L483.42,437.83L482.89,439.6L482.96,441.39z"
				},
				{
					"id":"BN",
					"title":"Brunei Darussalam",
					"d":"M795.46,450.77L796.57,449.72L798.96,448.19L798.83,449.57L798.67,451.35L797.33,451.26L796.74,452.21z"
				},
				{
					"id":"BO",
					"title":"Bolivia",
					"d":"M299.04,526.35L295.84,526.22L294.75,528.65L293.1,526.47L289.43,525.74L287.1,528.46L285.07,528.87L283.97,524.72L282.47,521.38L283.35,518.51L281.88,517.26L281.51,515.14L280.13,513.14L281.9,510L280.69,507.56L281.34,506.59L280.83,505.52L281.93,504.08L281.99,501.64L282.12,499.62L282.73,498.66L280.3,494.08L282.39,494.32L283.83,494.25L284.46,493.4L286.91,492.25L288.38,491.19L292.05,490.71L291.76,492.83L292.1,493.92L291.87,495.82L294.92,498.37L298.06,498.84L299.16,499.91L301.06,500.48L302.22,501.31L303.98,501.28L305.61,502.13L305.73,503.79L306.28,504.63L306.32,505.88L305.5,505.92L306.58,509.29L311.95,509.41L311.54,511.09L311.84,512.24L313.37,513.06L314.04,514.88L313.54,517.2L312.77,518.49L313.04,520.18L312.16,520.79L312.12,519.88L309.5,518.37L306.9,518.32L302.01,519.18L300.67,521.8L300.6,523.4L299.49,526.99z"
				},
				{
					"id":"BR",
					"title":"Brazil",
					"d":"M313.68,551.79L317.42,547.42L320.59,544.34L322.47,543.06L324.83,541.33L324.89,538.84L323.48,537.05L322.09,537.64L322.64,535.86L323.02,534.04L323.02,532.36L322.01,531.81L320.96,532.3L319.92,532.17L319.59,530.99L319.33,528.22L318.8,527.32L316.91,526.5L315.77,527.09L312.81,526.51L312.99,522.45L312.16,520.79L313.04,520.18L312.77,518.49L313.54,517.2L314.04,514.88L313.37,513.06L311.84,512.24L311.54,511.09L311.95,509.41L306.58,509.29L305.5,505.92L306.32,505.88L306.28,504.63L305.73,503.79L305.61,502.13L303.98,501.28L302.22,501.31L301.06,500.48L299.16,499.91L298.06,498.84L294.92,498.37L291.87,495.82L292.1,493.92L291.76,492.83L292.05,490.71L288.38,491.19L286.91,492.25L284.46,493.4L283.83,494.25L282.39,494.32L280.3,494.08L278.72,494.57L277.44,494.24L277.63,489.94L275.33,491.6L272.86,491.53L271.8,490.02L269.94,489.86L270.53,488.65L268.97,486.93L267.8,484.4L268.54,483.89L268.54,482.7L270.24,481.89L269.96,480.38L270.67,479.4L270.88,478.1L274.08,476.19L276.38,475.66L276.75,475.24L279.28,475.37L280.54,467.72L280.61,466.51L280.17,464.92L278.93,463.9L278.94,461.88L280.52,461.42L281.08,461.71L281.17,460.64L279.53,460.35L279.5,458.61L284.96,458.67L285.89,457.71L286.67,458.59L287.21,460.24L287.74,459.89L289.29,461.37L291.47,461.19L292.01,460.33L294.09,459.68L295.25,459.23L295.57,458.05L297.58,457.25L297.42,456.67L295.05,456.43L294.66,454.67L294.77,452.8L293.52,452.08L294.04,451.82L296.12,452.18L298.35,452.88L299.16,452.22L301.17,451.78L304.31,450.74L305.34,449.67L304.96,448.88L306.42,448.76L307.08,449.4L306.71,450.63L307.67,451.05L308.32,452.35L307.54,453.33L307.09,455.71L307.81,457.12L308.01,458.41L309.74,459.71L311.12,459.85L311.43,459.31L312.31,459.19L313.58,458.7L314.49,457.96L316.04,458.19L316.72,458.09L318.25,458.32L318.5,457.75L318.03,457.2L318.31,456.39L319.44,456.64L320.77,456.35L322.37,456.94L323.6,457.52L324.47,456.76L325.09,456.88L325.48,457.67L326.82,457.47L327.89,456.41L328.75,454.35L330.41,451.8L331.37,451.67L332.06,453.21L333.63,458.09L335.13,458.55L335.21,460.47L333.1,462.76L333.97,463.6L338.93,464.04L339.03,466.83L341.16,465L344.69,466.01L349.34,467.71L350.71,469.34L350.25,470.88L353.51,470.02L358.97,471.5L363.16,471.39L367.3,473.7L370.88,476.83L373.04,477.63L375.44,477.75L376.46,478.63L377.41,482.2L377.88,483.89L376.76,488.55L375.33,490.39L371.38,494.33L369.59,497.54L367.52,500.02L366.82,500.08L366.03,502.18L366.23,507.58L365.45,512.06L365.15,513.99L364.27,515.14L363.77,519.08L360.93,522.96L360.45,526.05L358.18,527.36L357.52,529.17L354.48,529.16L350.07,530.33L348.09,531.68L344.95,532.57L341.65,535.01L339.28,538.07L338.87,540.39L339.34,542.12L338.81,545.3L338.18,546.85L336.22,548.6L333.11,554.28L330.64,556.87L328.73,558.41L327.46,561.57L325.6,563.48L324.82,561.58L326.06,560.01L324.44,557.76L322.24,555.94L319.35,553.86L318.31,553.95L315.5,551.45z"
				},
				{
					"id":"BS",
					"title":"Bahamas",
					"d":"M257.86,395.2l-0.69,0.15l-0.71,-1.76l-1.05,-0.89l0.61,-1.95l0.84,0.12l0.98,2.55L257.86,395.2zM257.06,386.51l-3.06,0.5l-0.2,-1.15l1.32,-0.25l1.85,0.09L257.06,386.51zM259.36,386.48l-0.48,2.21l-0.52,-0.4l0.05,-1.63l-1.26,-1.23l-0.01,-0.36L259.36,386.48z"
				},
				{
					"id":"BT",
					"title":"Bhutan",
					"d":"M732.36,382.78L733.5,383.78L733.3,385.71L731.01,385.8L728.65,385.59L726.88,386.08L724.33,384.89L724.28,384.26L726.13,381.92L727.64,381.12L729.65,381.85L731.13,381.93z"
				},
				{
					"id":"BW",
					"title":"Botswana",
					"d":"M547.17,515.95L547.73,516.47L548.62,518.18L551.79,521.43L552.99,521.75L553,522.8L553.82,524.7L555.99,525.16L557.78,526.52L553.81,528.74L551.29,531L550.36,533.03L549.52,534.18L547.99,534.43L547.5,535.9L547.21,536.86L545.42,537.58L543.14,537.43L541.8,536.57L540.62,536.19L539.25,536.91L538.56,538.39L537.23,539.32L535.83,540.71L533.82,541.03L533.2,539.94L533.46,538.04L531.79,535.11L531.04,534.65L531.04,525.79L533.8,525.68L533.88,515.11L535.97,515.02L540.29,513.99L541.37,515.2L543.15,514.05L544.01,514.04L545.59,513.38L546.09,513.6z"
				},
				{
					"id":"BY",
					"title":"Belarus",
					"d":"M541.1,284.07L543.81,284.11L546.85,282.31L547.5,279.59L549.8,278.02L549.54,275.82L551.24,274.98L554.26,273.05L557.21,274.31L557.61,275.54L559.08,274.95L561.82,276.13L562.09,278.44L561.49,279.76L563.25,282.91L564.39,283.78L564.22,284.64L566.11,285.47L566.92,286.72L565.83,287.74L563.57,287.58L563.03,288.02L563.69,289.56L564.38,292.49L561.97,292.76L561.11,293.76L560.92,296.02L559.81,295.59L557.28,295.81L556.54,294.76L555.49,295.54L554.44,294.89L552.23,294.8L549.1,293.72L546.27,293.36L544.1,293.46L542.56,294.69L541.22,294.86L541.17,292.85L540.3,290.73L541.98,289.79L542,287.94L541.22,286.16z"
				},
				{
					"id":"BZ",
					"title":"Belize",
					"d":"M225.31,412.96L225.29,412.53L225.63,412.39L226.14,412.74L227.14,410.97L227.67,410.93L227.68,411.36L228.21,411.37L228.17,412.17L227.71,413.44L227.96,413.89L227.67,414.94L227.84,415.21L227.52,416.68L226.97,417.46L226.46,417.55L225.9,418.55L225.07,418.55L225.29,415.27z"
				},
				{
					"id":"CA",
					"title":"Canada",
					"d":"M198.93,96.23l-0.22,-5.9l3.63,0.58l1.63,0.96l3.35,4.92l-0.76,4.97l-4.15,2.77l-2.28,-3.12L198.93,96.23zM212.14,108.88l0.33,-1.49l-1.97,-2.45l-5.65,-0.19l0.75,3.68l5.25,0.83L212.14,108.88zM248.49,155.83l3.08,5.1l0.81,0.57l3.07,-1.27l3.02,0.2l2.98,0.28l-0.25,-2.64l-4.84,-5.38l-6.42,-1.08l-1.35,0.67L248.49,155.83zM183.06,93.13l-2.71,4.19l6.24,0.52l4.61,4.44l4.58,1.5l-1.09,-5.68l-2.14,-6.73l-7.58,-5.35l-5.5,-2.04l0.2,5.69L183.06,93.13zM208.96,82.89l5.13,-0.12l-2.22,4l-0.04,5.3l3.01,5.76l5.81,1.77l4.96,-0.99l5.18,-10.73l3.85,-4.45l-3.38,-4.97l-2.21,-10.65l-4.6,-3.19l-4.72,-3.68l-3.58,-9.56l-6.52,0.94l1.23,4.15l-2.87,1.25l-1.94,5.32l-1.94,7.46l1.78,7.26L208.96,82.89zM145.21,136.27l3.92,1.95l12.67,-1.3l-5.82,4.77l0.36,3.43l4.26,-0.24l7.07,-4.58l9.5,-1.67l1.71,-5.22l-0.49,-5.57l-2.94,-0.5l-2.5,1.93l-1.1,-4.13l-0.95,-5.7l-2.9,-1.42l-2.57,4.41l4.01,11.05l-4.9,-0.85l-4.98,-6.79l-7.89,-4l-2.64,3.32L145.21,136.27zM167.77,94.21l-3.65,-2.9l-1.5,-0.66l-2.88,4.28l-0.05,2l4.66,0.01L167.77,94.21zM166.31,106.56l0.93,-3.99l-3.95,-2.12l-4.09,1.39l-2.27,4.26l4.16,4.21L166.31,106.56zM195.4,139.8l4.62,-1.11l1.28,-8.25l-0.09,-5.95l-2.14,-5.56l-0.22,1.6l-3.94,-0.7l-4.22,4.09l-3.02,-0.37l0.18,8.92l4.6,-0.87l-0.06,6.47L195.4,139.8zM192.12,185.41l-5.06,-3.93l-4.71,-4.21l-0.87,-6.18l-1.76,-8.92l-3.14,-3.84l-2.79,-1.55l-2.47,1.42l1.99,9.59l-1.41,3.73l-2.29,-8.98l-2.56,-3.11l-3.17,4.81l-3.9,-4.76l-6.24,2.87l1.4,-4.46l-2.87,-1.87l-7.51,5.84l-1.95,3.71l-2.35,6.77l4.9,2.32l4.33,-0.12l-6.5,3.46l1.48,3.13l3.98,0.17l5.99,-0.67l5.42,1.96l-3.66,1.44l-3.95,-0.37l-4.33,1.41l-1.87,0.87l3.45,6.35l2.49,-0.88l3.83,2.15l1.52,3.65l4.99,-0.73l7.1,-1.16l5.26,-2.65l3.26,-0.48l4.82,2.12l5.07,1.22l0.94,-2.86l-1.79,-3.05l4.6,-0.64L192.12,185.41zM199.86,184.43l-1.96,3.54l-2.47,2.49l3.83,3.54l2.28,-0.85l3.78,2.36l1.74,-2.73l-1.71,-3.03l-0.84,-1.53l-1.68,-1.46L199.86,184.43zM182.25,154.98l-2.13,-2.17l-3.76,0.4l-0.95,1.38l4.37,6.75L182.25,154.98zM210.94,168.15l3.01,-6.93l3.34,-1.85l4.19,-8.74l-5.36,-2.47l-5.84,-0.36l-2.78,2.77l-1.47,4.23l-0.04,4.82l1.75,8.19L210.94,168.15zM228.09,145.15l5.76,-0.18l8.04,-1.61l3.59,1.28l4.18,-2.26l1.75,-2.84l-0.63,-4.52l-3,-4.23l-4.56,-0.8l-5.71,0.97l-4.46,2.44l-4.09,-0.94l-3.78,-0.5l-1.78,-2.7l-3.22,-2.61l0.64,-4.43l-2.42,-3.98l-5.52,0.03l-3.11,-3.99l-5.78,-0.8l-1.06,5.1l3.25,3.74l5.8,1.45l2.81,5.09l0.34,5.6l0.97,5.99l7.45,3.42L228.09,145.15zM139.07,126.88l5.21,-5.05l2.62,-0.59l2.16,-4.23l0.38,-9.77l-3.85,1.91l-4.3,-0.18l-5.76,8.19l-4.76,8.98l3.8,2.51L139.07,126.88zM211.25,143.05l1.53,-4.14l-1.02,-3.46l-2.45,-3.92l-4.03,3.02l-1.49,4.92l3.4,2.79L211.25,143.05zM202.94,154.49l-0.73,-2.88l-5,1.26l-3.34,-2.11l-3.32,4.8l3.09,6.28l-5.72,-1.17l-0.06,3.01l6.97,7.05l1.94,3.38l2.7,0.73l4.6,-3.41l0.5,-8.21l-4.24,-4.07L202.94,154.49zM128.95,308.23l-1.16,-2.34l-2.8,-1.77l-1.39,-2.05l-0.95,-1.5l-2.64,-0.46l-1.72,-0.67l-2.94,-0.96l-0.24,1.02l1.08,2.38l2.89,0.78l0.5,1.23l2.51,1.5l0.84,1.51l4.6,1.92L128.95,308.23zM250.65,230.6l-2,-2.11l-2.06,0.5l-0.25,-3.06l-3.21,-2.04l-3.07,-2.27l-1.63,-1.75l-1.43,1.03l-0.52,-2.96l-2.03,-0.55l-0.96,6.13l-0.36,5.11l-2.44,3.14l3.8,-0.6l0.96,3.65l3.99,-3.23l2.78,-3.38l1.57,2.86l4.36,1.51L250.65,230.6zM130.12,178.05l7.38,-4.18V170l3.48,-6.41l6.88,-6.69l3.52,-2.47l-3.01,-4.2l-2.72,-2.95l-7.16,-0.57l-4,-2.16l-9.48,1.63l2.74,6.23l-2.43,6.43l-1.94,6.87l-1.2,3.86l6.47,4.69L130.12,178.05zM264.36,205.36l0.32,-1.01l-0.03,-3.17l-2.19,-2.08l-2.57,1.05l-1.19,4.17l0.7,3.56l3.14,-0.36L264.36,205.36zM288.18,212.9l4.41,6.6l3.45,2.85l4.92,-7.87l0.87,-4.93l-4.41,-0.47l-4.03,-6.7l-4.45,-1.64l-6.6,-4.97l5.15,-3.63l-2.65,-7.54l-2.44,-3.35l-6.77,-3.35l-2.92,-5.55l-5.21,1.99l-0.36,-3.86l-3.86,-4.32l-6.22,-4.71l-2.65,3.71l-5.55,2.66l0.42,-6.06l-4.81,-10.05l-7.11,4.06l-2.59,7.7l-2.21,-5.92l2.06,-6.37l-7.24,2.65l-2.88,3.99l-2.15,8.42l0.89,9.05l3.98,0.04l-2.93,3.92l2.33,2.96l4.55,1.25l5.93,2.42l10.2,1.82l5.08,-1.04l1.5,-2.42l2.21,2.79l2.47,0.46l2.97,4.96l-1.8,1.98l5.68,2.63l4.29,3.68l1.08,2.55l0.77,3.24l-3.63,6.93l-0.98,3.44l0.94,2.42l-5.77,0.86l-5.27,0.12l-1.85,4.87l2.37,2.23l8.11,-1.03l-0.04,-1.89l4.08,3.15l4.18,3.28l-0.98,1.77l3.4,3.02l6.02,3.53l7.6,2.39l-0.46,-2.09l-2.92,-3.67l-3.96,-5.37l7.03,5l3.54,1.66l0.97,-4.44l-1.82,-6.3l-1.16,-1.73l-3.81,-3.03l-2.95,-3.91l0.35,-3.94L288.18,212.9zM222.35,51.34l2.34,7.29l4.96,5.88l9.81,-1.09l6.31,1.97l-4.38,6.05l-2.21,-1.78l-7.66,-0.71l1.19,8.31l3.96,6.04l-0.8,5.2l-4.97,3.46l-2.27,5.47l4.55,2.65l3.82,8.55l-7.5,-5.7l-1.71,0.94l1.38,9.38l-5.18,2.83l0.35,5.85l5.3,0.63l4.17,1.44l8.24,-1.84l7.33,3.27l7.49,-7.19l-0.06,-3.02l-4.79,0.48l-0.39,-2.84l3.92,-3.83l1.33,-5.15l4.33,-3.83l2.66,-4.76l-2.32,-7.1l1.94,-2.65l-3.86,-1.89l8.49,-1.63l1.79,-3.15l5.78,-2.6l4.8,-13.47l4.57,-4.94l6.62,-11.12l-6.1,0.1l2.54,-4.3l6.78,-3.99l6.84,-8.9l0.12,-5.73l-5.13,-6.04l-6.02,-2.93l-7.49,-1.82l-6.07,-1.49l-6.07,-1.5l-8.1,3.98l-1.49,-2.53l-8.57,0.98l-5.03,2.57l-3.7,3.65l-2.13,11.74L239,24.52l-3.48,-1.14l-4.12,7.97l-5.5,3.35l-3.27,0.66l-4.17,3.84l0.61,6.65L222.35,51.34zM296.75,316.34l-0.98,-1.98l-1.06,1.26l0.7,1.36l3.56,1.71l1.04,-0.26l1.38,-1.66l-2.6,0.11L296.75,316.34zM239.75,238.48l0.61,1.63l1.98,0.14l3.28,-3.34l0.06,-1.19l-3.85,-0.06L239.75,238.48zM301.88,304.92l-2.87,-1.8l-3.69,-1.09l-0.97,0.37l2.61,2.04l3.63,1.34l1.36,-0.08L301.88,304.92zM326.76,309.71l-0.36,-2.24l-1.96,0.72l0.87,-3.11l-2.8,-1.32l-1.29,1.05l-2.49,-1.18l0.98,-1.51l-1.88,-0.93l-1.83,1.47l1.86,-3.82l1.5,-2.8l0.54,-1.22l-1.3,-0.2l-2.43,1.55l-1.74,2.53l-2.9,6.92l-2.35,2.56l1.22,1.14l-1.75,1.47l0.43,1.23l5.44,0.13l3.01,-0.25l2.69,1.01l-1.98,1.93l1.67,0.14l3.25,-3.58l0.78,0.53l-0.61,3.37l1.84,0.77l1.27,-0.15l1.18,-3.61L326.76,309.71zM305.57,314.47l-2.81,4.56l-4.63,0.58l-3.64,-2.01l-0.92,-3.07l-0.89,-4.46l2.65,-2.83l-2.48,-2.09l-4.19,0.43l-5.88,3.53l-4.5,5.45l-2.38,0.67l3.23,-3.8l4.04,-5.57l3.57,-1.9l2.35,-3.11l2.9,-0.3l4.21,0.03l6,0.92l4.74,-0.71l3.53,-3.62l4.62,-1.59l2.01,-1.58l2.04,-1.71l-0.2,-5.19l-1.13,-1.77l-2.18,-0.63l-1.11,-4.05l-1.8,-1.55l-4.47,-1.26l-2.52,-2.82l-3.73,-2.83l1.13,-3.2l-3.1,-6.26l-3.65,-6.89l-2.18,-4.98l-1.86,2.61l-2.68,6.05l-4.06,2.97l-2.03,-3.16l-2.56,-0.85l-0.93,-6.99l0.08,-4.8l-5,-0.44l-0.85,-2.27l-3.45,-3.44l-2.61,-2.04l-2.32,1.58l-2.88,-0.58l-4.81,-1.65l-1.95,1.4l0.94,9.18l1.22,5.12l-3.31,5.75l3.41,4.02l1.9,4.44l0.23,3.42l-1.55,3.5l-3.18,3.46l-4.49,2.28l1.98,2.53l1.46,7.4l-1.52,4.68l-2.16,1.46l-4.17,-4.28l-2.03,-5.17l-0.87,-4.76l0.46,-4.19l-3.05,-0.47l-4.63,-0.28l-2.97,-2.08l-3.51,-1.37l-2.01,-2.38l-2.8,-1.94l-5.21,-2.23l-3.92,1.02l-1.31,-3.95l-1.26,-4.99l-4.12,-0.9l0.15,-6.41l1.09,-4.48l3.04,-6.6l3.43,-4.9l3.26,-0.77l0.19,-4.05l2.21,-2.68l4.01,-0.42l3.25,-4.39l0.82,-2.9l2.7,-5.73l0.84,-3.5l2.9,2.11l3.9,-1.08l5.49,-4.96l0.36,-3.54l-1.98,-3.98l2.09,-4.06l-0.17,-3.87l-3.76,-3.95l-4.14,-1.19l-3.98,-0.62l-0.15,8.71l-2.04,6.56l-2.93,5.3l-2.71,-4.95l0.84,-5.61l-3.35,-5.02l-3.75,6.09l0.01,-7.99l-5.21,-1.63l2.49,-4.01l-3.81,-9.59l-2.84,-3.91l-3.7,-1.44l-3.32,6.43l-0.22,9.34l3.27,3.29l3,4.91l-1.27,7.71l-2.26,-0.2l-1.78,5.88l0.02,-7l-4.34,-2.58l-2.49,1.33l0.32,4.67l-4.09,-0.18l-4.35,1.17l-4.95,-3.35l-3.13,0.6l-2.82,-4.11l-2.26,-1.84l-2.24,0.77l-3.41,0.35l-1.81,2.61l2.86,3.19l-3.05,3.72l-2.99,-4.42l-2.39,1.3l-7.57,0.87l-5.07,-1.59l3.94,-3.74l-3.78,-3.9l-2.75,0.5l-3.86,-1.32l-6.56,-2.89l-4.29,-3.37l-3.4,-0.47l-1.06,2.36l-3.44,1.31l-0.38,-6.15l-3.73,5.5l-4.74,-7.32l-1.94,-0.89l-0.63,3.91l-2.09,1.9l-1.93,-3.39l-4.59,2.05l-4.2,3.55l-4.17,-0.98l-3.4,2.5l-2.46,3.28l-2.92,-0.72l-4.41,-3.8l-5.23,-1.94l-0.02,27.65l-0.01,35.43l2.76,0.17l2.73,1.56l1.96,2.44l2.49,3.6l2.73,-3.05l2.81,-1.79l1.49,2.85l1.89,2.23l2.57,2.42l1.75,3.79l2.87,5.88l4.77,3.2l0.08,3.12l-1.56,2.35l0.06,2.48l3.39,3.45l0.49,3.76l3.59,1.96l-0.4,2.79l1.56,3.96l5.08,1.82l2,1.89l5.43,4.23l0.38,0.01h7.96h8.32h2.76h8.55h8.27h8.41l8.42,0l9.53,0l9.59,0l5.8,0l0.01,-1.64l0.95,-0.02l0.5,2.35l0.87,0.72l1.96,0.26l2.86,0.67l2.72,1.3l2.27,-0.55l3.45,1.09l1.14,-1.66l1.59,-0.66l0.62,-1.03l0.63,-0.55l2.61,0.86l1.93,0.1l0.67,0.57l0.94,2.38l3.15,0.63l-0.49,1.18l1.11,1.21l-0.48,1.56l1.18,0.51l-0.59,1.37l0.75,0.13l0.53,-0.6l0.55,0.9l2.1,0.5l2.13,0.04l2.27,0.41l2.51,0.78l0.91,1.26l1.82,3.04l-0.9,1.3l-2.28,-0.54l-1.42,-2.44l0.36,2.49l-1.34,2.17l0.15,1.84l-0.23,1.07l-1.81,1.27l-1.32,2.09l-0.62,1.32l1.54,0.24l2.08,-1.2l1.23,-1.06l0.83,-0.17l1.54,0.38l0.75,-0.59l1.37,-0.48l2.44,-0.47v0l0,0l-0.25,-1.15l-0.13,0.04l-0.86,0.2l-1.12,-0.36l0.84,-1.32l0.85,-0.46l1.98,-0.56l2.37,-0.53l1.24,0.73l0.78,-0.85l0.89,-0.54l0.6,0.29l0.03,0.06l2.87,-2.73l1.27,-0.73l4.26,-0.03l5.17,0l0.28,-0.98l0.9,-0.2l1.19,-0.62l1,-1.82l0.86,-3.15l2.14,-3.1l0.93,1.08l1.88,-0.7l1.25,1.19l0,5.52l1.83,2.25l3.12,-0.48l4.49,-0.13l-4.87,3.26l0.11,3.29l2.13,0.28l3.13,-2.79l2.78,-1.58l6.21,-2.35l3.47,-2.62l-1.81,-1.46L305.57,314.47zM251.91,243.37l1.1,-3.12l-0.71,-1.23l-1.15,-0.13l-1.08,1.8l-0.13,0.41l0.74,1.77L251.91,243.37zM109.25,279.8L109.25,279.8l1.56,-2.35L109.25,279.8zM105.85,283.09l-2.69,0.38l-1.32,-0.62l-0.17,1.52l0.52,2.07l1.42,1.46l1.04,2.13l1.69,2.1l1.12,0.01l-2.44,-3.7L105.85,283.09z"
				},
				{
					"id":"CD",
					"title":"Democratic Republic of Congo",
					"d":"M561.71,453.61L561.54,456.87L562.66,457.24L561.76,458.23L560.68,458.97L559.61,460.43L559.02,461.72L558.86,463.96L558.21,465.02L558.19,467.12L557.38,467.9L557.28,469.56L556.89,469.77L556.63,471.3L557.34,472.56L557.52,475.93L558.02,478.5L557.74,479.96L558.3,481.58L559.93,483.15L561.44,486.7L560.34,486.41L556.57,486.89L555.82,487.22L555.02,489.02L555.65,490.27L555.15,493.62L554.8,496.47L555.56,496.98L557.52,498.08L558.29,497.57L558.53,500.65L556.38,500.62L555.23,499.05L554.2,497.83L552.05,497.43L551.42,495.94L549.7,496.84L547.46,496.44L546.52,495.15L544.74,494.89L543.43,494.96L543.27,494.08L542.3,494.01L541.02,493.84L539.29,494.26L538.07,494.19L537.37,494.45L537.52,491.08L536.59,490.03L536.38,488.3L536.79,486.6L536.23,485.51L536.18,483.75L532.77,483.77L533.02,482.76L531.59,482.77L531.44,483.26L529.7,483.37L528.99,485L528.57,485.71L527.02,485.31L526.1,485.71L524.24,485.93L523.17,484.46L522.53,483.55L521.72,481.87L521.03,479.78L512.76,479.75L511.77,480.08L510.96,480.03L509.8,480.41L509.41,479.54L510.12,479.24L510.21,478.02L510.67,477.3L511.69,476.72L512.43,477L513.39,475.93L514.91,475.96L515.09,476.75L516.14,477.25L517.79,475.49L519.42,474.13L520.13,473.24L520.04,470.94L521.26,468.23L522.54,466.8L524.39,465.46L524.71,464.57L524.78,463.55L525.24,462.58L525.09,461L525.44,458.53L525.99,456.79L526.83,455.3L526.99,453.62L527.24,451.67L528.34,450.25L529.84,449.35L532.15,450.3L533.93,451.33L535.98,451.61L538.07,452.15L538.91,450.47L539.3,450.25L540.57,450.53L543.7,449.14L544.8,449.73L545.71,449.65L546.13,448.97L547.17,448.73L549.28,449.02L551.08,449.08L552.01,448.79L553.7,451.1L554.96,451.43L555.71,450.96L557.01,451.15L558.57,450.56L559.24,451.75z"
				},
				{
					"id":"CF",
					"title":"Central African Republic",
					"d":"M518.09,442.66L520.41,442.44L520.93,441.72L521.39,441.78L522.09,442.41L525.62,441.34L526.81,440.24L528.28,439.25L528,438.26L528.79,438L531.5,438.18L534.14,436.87L536.16,433.78L537.59,432.64L539.36,432.15L539.68,433.37L541.3,435.14L541.3,436.29L540.85,437.47L541.03,438.34L542,439.15L544.14,440.39L545.67,441.52L545.7,442.44L547.58,443.9L548.75,445.11L549.46,446.79L551.56,447.9L552.01,448.79L551.08,449.08L549.28,449.02L547.17,448.73L546.13,448.97L545.71,449.65L544.8,449.73L543.7,449.14L540.57,450.53L539.3,450.25L538.91,450.47L538.07,452.15L535.98,451.61L533.93,451.33L532.15,450.3L529.84,449.35L528.34,450.25L527.24,451.67L526.99,453.62L525.19,453.46L523.29,452.99L521.62,454.47L520.15,457.07L519.85,456.26L519.73,454.99L518.45,454.09L517.41,452.65L517.17,451.65L515.85,450.19L516.07,449.36L515.79,448.18L516.01,446.01L516.68,445.5z"
				},
				{
					"id":"CG",
					"title":"Republic of Congo",
					"d":"M511.69,476.72L510.64,475.76L509.79,476.23L508.66,477.43L506.36,474.48L508.49,472.94L507.44,471.09L508.4,470.39L510.29,470.05L510.51,468.81L512.01,470.15L514.49,470.27L515.35,468.95L515.7,467.1L515.39,464.92L514.07,463.28L515.28,460.05L514.58,459.5L512.5,459.72L511.71,458.29L511.92,457.07L515.45,457.18L517.72,457.91L519.95,458.57L520.15,457.07L521.62,454.47L523.29,452.99L525.19,453.46L526.99,453.62L526.83,455.3L525.99,456.79L525.44,458.53L525.09,461L525.24,462.58L524.78,463.55L524.71,464.57L524.39,465.46L522.54,466.8L521.26,468.23L520.04,470.94L520.13,473.24L519.42,474.13L517.79,475.49L516.14,477.25L515.09,476.75L514.91,475.96L513.39,475.93L512.43,477z"
				},
				{
					"id":"CH",
					"title":"Switzerland",
					"d":"M502.15,312.34L502.26,313.08L501.83,314.09L503.1,314.83L504.53,314.94L504.31,316.61L503.08,317.3L501,316.79L500.39,318.42L499.06,318.55L498.57,317.91L497,319.27L495.65,319.46L494.44,318.6L493.48,316.83L492.14,317.47L492.18,315.63L494.23,313.32L494.14,312.27L495.42,312.66L496.19,311.95L498.57,311.98L499.15,311.08z"
				},
				{
					"id":"CI",
					"title":"Côte d'Ivoire",
					"d":"M467.24,449.46L465.97,449.49L464.01,448.94L462.22,448.97L458.89,449.46L456.95,450.27L454.17,451.29L453.63,451.22L453.84,448.92L454.11,448.57L454.03,447.46L452.84,446.29L451.95,446.1L451.13,445.33L451.74,444.09L451.46,442.73L451.59,441.91L452.04,441.91L452.2,440.68L451.98,440.14L452.25,439.75L453.29,439.41L452.6,437.15L451.95,435.99L452.18,435.02L452.74,434.81L453.1,434.55L453.88,434.97L456.04,435L456.56,434.17L457.04,434.23L457.85,433.91L458.29,435.12L458.94,434.76L460.1,434.34L461.36,434.96L461.85,435.89L463.11,436.49L464.09,435.78L465.41,435.67L467.33,436.4L468.07,440.41L466.89,442.77L466.16,445.94L467.37,448.35z"
				},
				{
					"id":"CL",
					"title":"Chile",
					"d":"M282.81,636.73l0,10.57l3,0l1.69,0.13l-0.93,1.98l-2.4,1.53l-1.38,-0.16l-1.66,-0.4l-2.04,-1.48l-2.94,-0.71l-3.53,-2.71l-2.86,-2.57l-3.86,-5.25l2.31,0.97l3.94,3.13l3.72,1.7l1.45,-2.17l0.91,-3.2l2.58,-1.91L282.81,636.73zM283.97,524.72l1.1,4.15l2.02,-0.41l0.34,0.76l-0.96,3.16l-3.05,1.51l0.09,5.14l-0.59,1l0.84,1.23l-1.98,1.95l-1.84,2.96l-1,2.9l0.27,3.11l-1.73,3.34l1.29,5.69l0.73,0.61l-0.01,3.09l-1.6,3.31l0.06,2.87l-2.12,2.26l0.01,3.22l0.85,3.46l-1.68,1.3l-0.75,3.22l-0.66,3.75l0.47,4.54l-1.13,0.77l0.65,4.4l1.27,1.46l-0.92,1.63l1.3,0.78l0.3,1.48l-1.22,0.75l0.3,2.33l-1.02,5.35l-1.49,3.52l0.33,2.11l-0.89,2.68l-2.15,1.88l0.25,4.6l0.99,1.6l1.87,-0.28l-0.05,3.33l1.16,2.63l6.78,0.61l2.6,0.71l-2.49,-0.03l-1.35,1.13l-2.53,1.67l-0.45,4.38l-1.19,0.11l-3.16,-1.54l-3.21,-3.25l0,0l-3.49,-2.63l-0.88,-2.87l0.79,-2.62l-1.41,-2.94l-0.36,-7.34l1.19,-4.03l2.96,-3.19l-4.26,-1.19l2.67,-3.57l0.95,-6.56l3.12,1.37l1.46,-7.97l-1.88,-1l-0.88,4.75l-1.77,-0.54l0.88,-5.42l0.96,-6.84l1.29,-2.48l-0.81,-3.5l-0.23,-3.98l1.18,-0.11l1.72,-5.6l1.94,-5.43l1.19,-4.97l-0.65,-4.91l0.84,-2.67l-0.34,-3.96l1.64,-3.87l0.51,-6.04l0.9,-6.37l0.88,-6.75l-0.21,-4.87l-0.58,-4.15l1.44,-0.75l0.75,-1.5l1.37,1.99l0.37,2.12l1.47,1.25l-0.88,2.87L283.97,524.72z"
				},
				{
					"id":"CM",
					"title":"Cameroon",
					"d":"M511.92,457.07L511.57,456.92L509.91,457.28L508.2,456.9L506.87,457.09L502.31,457.02L502.72,454.82L501.62,452.98L500.34,452.5L499.77,451.25L499.05,450.85L499.09,450.08L499.81,448.1L501.14,445.4L501.95,445.37L503.62,443.73L504.69,443.69L506.26,444.84L508.19,443.89L508.45,442.73L509.08,441.59L509.51,440.17L511.01,439.01L511.58,437.04L512.17,436.41L512.57,434.94L513.31,433.13L515.67,430.93L515.82,429.98L516.13,429.47L515.02,428.33L515.11,427.43L515.9,427.26L517.01,429.09L517.2,430.98L517.1,432.87L518.62,435.44L517.06,435.41L516.27,435.61L514.99,435.33L514.38,436.66L516.03,438.31L517.25,438.79L517.65,439.96L518.53,441.89L518.09,442.66L516.68,445.5L516.01,446.01L515.79,448.18L516.07,449.36L515.85,450.19L517.17,451.65L517.41,452.65L518.45,454.09L519.73,454.99L519.85,456.26L520.15,457.07L519.95,458.57L517.72,457.91L515.45,457.18z"
				},
				{
					"id":"CN",
					"title":"China",
					"d":"M784.63,410.41l-2.42,1.41l-2.3,-0.91l-0.08,-2.53l1.38,-1.34l3.06,-0.83l1.61,0.07l0.63,1.13l-1.23,1.3L784.63,410.41zM833.19,302.89l4.88,1.38l3.32,3.03l1.13,3.95l4.26,0l2.43,-1.65l4.63,-1.24l-1.47,3.76l-1.09,1.51l-0.96,4.46l-1.89,3.89l-3.4,-0.7l-2.41,1.4l0.74,3.36l-0.4,4.55l-1.43,0.1l0.02,1.93l-1.81,-2.24l-1.11,2.13l-4.33,1.62l0.44,1.97l-2.42,-0.14l-1.33,-1.17l-1.93,2.64l-3.09,1.98l-2.28,2.35l-3.92,1.06l-2.06,1.69l-3.02,0.98l1.49,-1.67l-0.59,-1.41l2.22,-2.45l-1.48,-1.93l-2.44,1.3l-3.17,2.54l-1.73,2.34l-2.75,0.17l-1.43,1.68l1.48,2.41l2.29,0.58l0.09,1.58l2.22,1.02l3.14,-2.51l2.49,1.37l1.81,0.09l0.46,1.84l-3.97,0.97l-1.31,1.87l-2.73,1.73l-1.44,2.39l3.02,1.86l1.1,3.31l1.71,3.05l1.9,2.53l-0.05,2.43l-1.76,0.89l0.67,1.73l1.65,1l-0.43,2.61l-0.71,2.52l-1.57,0.28l-2.05,3.41l-2.27,4.09l-2.6,3.68l-3.86,2.82l-3.9,2.55l-3.16,0.35l-1.71,1.34l-0.97,-0.98l-1.59,1.5l-3.92,1.5l-2.97,0.46l-0.96,3.15l-1.55,0.17l-0.74,-2.16l0.66,-1.16l-3.76,-0.96l-1.33,0.49l-2.82,-0.78l-1.33,-1.22l0.44,-1.74l-2.56,-0.55l-1.35,-1.14l-2.39,1.62l-2.73,0.35l-2.24,-0.02l-1.5,0.74l-1.45,0.44l0.42,3.43l-1.5,-0.08l-0.25,-0.7l-0.08,-1.24l-2.06,0.87l-1.21,-0.55l-2.08,-1.13l0.82,-2.51l-1.78,-0.59l-0.67,-2.8l-2.96,0.51l0.34,-3.63l2.66,-2.58l0.11,-2.57l-0.08,-2.4l-1.22,-0.75l-0.94,-1.86l-1.64,0.24l-3.02,-0.47l0.95,-1.33l-1.31,-1.99l-2,1.35L740.4,378l-3.23,2.03l-2.55,2.36l-2.26,0.39l-1.23,-0.85l-1.48,-0.08l-2,-0.73l-1.51,0.8l-1.85,2.34l-0.24,-2.48l-1.71,0.66l-3.27,-0.31l-3.17,-0.73l-2.28,-1.39l-2.18,-0.63l-0.94,-1.53l-1.58,-0.46l-2.83,-2.09l-2.25,-0.99l-1.16,0.77l-3.9,-2.26l-2.75,-2.07l-0.79,-3.63l2.01,0.44l0.09,-1.69l-1.12,-1.71l0.28,-2.74l-3.01,-3.99l-4.61,-1.39l-0.83,-2.66l-2.07,-1.63l-0.5,-1.01l-0.42,-2.01l0.1,-1.38l-1.7,-0.81l-0.92,0.36l-0.71,-3.32l0.8,-0.83l-0.39,-0.85l2.68,-1.73l1.94,-0.72l2.97,0.49l1.06,-2.35l3.6,-0.44l1,-1.48l4.42,-2.03l0.39,-0.85l-0.22,-2.17l1.92,-1l-2.52,-6.75l5.55,-1.58l1.44,-0.89l2.02,-7.26l5.56,1.35l1.56,-1.86l0.13,-4.19l2.33,-0.39l2.13,-2.83l1.1,-0.35l0.74,2.97l2.36,2.23l4,1.57l1.93,3.32l-1.08,4.73l1.01,1.73l3.33,0.68l3.78,0.55l3.39,2.45l1.73,0.43l1.28,3.57l1.65,2.27l3.09,-0.09l5.79,0.85l3.73,-0.53l2.77,0.57l4.15,2.29l3.39,0l1.24,1.16l3.26,-2.01l4.53,-1.31l4.2,-0.14l3.28,-1.34l2.01,-2.05l1.96,-1.3l-0.45,-1.28l-0.9,-1.5l1.47,-2.54l1.58,0.36l2.88,0.8l2.79,-2.1l4.28,-1.55l2.05,-2.66l1.97,-1.16l4.07,-0.54l2.21,0.46l0.31,-1.45l-2.54,-2.89l-2.25,-1.33l-2.16,1.54l-2.77,-0.65l-1.59,0.53l-0.72,-1.71l1.98,-4.23l1.37,-3.25l3.37,1.63l3.95,-2.74l-0.03,-1.93l2.53,-4.73l1.56,-1.45l-0.04,-2.52l-1.54,-1.1l2.32,-2.31l3.48,-0.84l3.72,-0.13l4.2,1.39l2.46,1.71l1.73,4.61l1.05,1.94l0.98,2.73L833.19,302.89z"
				},
				{
					"id":"CO",
					"title":"Colombia",
					"d":"M263.92,463.81L262.72,463.15L261.34,462.23L260.54,462.67L258.16,462.28L257.48,461.08L256.96,461.13L254.15,459.54L253.77,458.67L254.82,458.46L254.7,457.07L255.35,456.06L256.74,455.87L257.93,454.12L259,452.66L257.96,451.99L258.49,450.37L257.86,447.81L258.46,447.08L258.02,444.71L256.88,443.21L257.24,441.85L258.15,442.05L258.68,441.21L258.03,439.56L258.37,439.14L259.81,439.23L261.92,437.26L263.07,436.96L263.1,436.03L263.62,433.64L265.23,432.32L266.99,432.27L267.21,431.68L269.41,431.91L271.62,430.48L272.71,429.84L274.06,428.47L275.06,428.64L275.79,429.39L275.25,430.35L273.45,430.83L272.74,432.25L271.65,433.06L270.84,434.12L270.49,436.13L269.72,437.79L271.16,437.97L271.52,439.27L272.14,439.89L272.36,441.02L272.03,442.06L272.13,442.65L272.82,442.88L273.49,443.86L277.09,443.59L278.72,443.95L280.7,446.36L281.83,446.06L283.85,446.21L285.45,445.89L286.44,446.38L285.93,447.88L285.31,448.82L285.09,450.83L285.65,452.68L286.45,453.51L286.54,454.14L285.12,455.53L286.14,456.14L286.89,457.12L287.74,459.89L287.21,460.24L286.67,458.59L285.89,457.71L284.96,458.67L279.5,458.61L279.53,460.35L281.17,460.64L281.08,461.71L280.52,461.42L278.94,461.88L278.93,463.9L280.17,464.92L280.61,466.51L280.54,467.72L279.28,475.37L277.88,473.88L277.04,473.82L278.85,470.98L276.7,469.67L275.02,469.91L274.01,469.43L272.46,470.17L270.37,469.82L268.72,466.9L267.42,466.18L266.53,464.86L264.67,463.54z"
				},
				{
					"id":"CR",
					"title":"Costa Rica",
					"d":"M242.63,440.4L241.11,439.77L240.54,439.18L240.86,438.69L240.76,438.07L239.98,437.39L238.88,436.84L237.91,436.48L237.73,435.65L236.99,435.14L237.17,435.97L236.61,436.64L235.97,435.86L235.07,435.58L234.69,435.01L234.71,434.15L235.08,433.25L234.29,432.85L234.93,432.31L235.35,431.94L237.2,432.69L237.84,432.32L238.73,432.56L239.2,433.14L240.02,433.33L240.69,432.73L241.41,434.27L242.49,435.41L243.81,436.62L242.72,436.87L242.74,438L243.32,438.42L242.9,438.76L243.01,439.27L242.78,439.84z"
				},
				{
					"id":"CU",
					"title":"Cuba",
					"d":"M244.58,396.94L247.01,397.16L249.21,397.19L251.84,398.22L252.96,399.33L255.58,398.99L256.57,399.69L258.95,401.56L260.69,402.91L261.61,402.87L263.29,403.48L263.08,404.32L265.15,404.44L267.27,405.66L266.94,406.35L265.07,406.73L263.18,406.88L261.25,406.64L257.24,406.93L259.12,405.27L257.98,404.5L256.17,404.3L255.2,403.44L254.53,401.74L252.95,401.85L250.33,401.05L249.49,400.42L245.84,399.95L244.86,399.36L245.91,398.61L243.16,398.46L241.15,400.02L239.98,400.06L239.58,400.8L238.2,401.13L237,400.84L238.48,399.91L239.08,398.82L240.35,398.15L241.78,397.56L243.91,397.27z"
				},
				{
					"id":"CY",
					"title":"Cyprus",
					"d":"M570.31,358.29L572.2,356.83L569.65,357.85L567.63,357.8L567.23,358.63L567.03,358.65L565.7,358.77L566.35,360.14L567.72,360.58L570.6,359.2L570.51,358.93z"
				},
				{
					"id":"CZ",
					"title":"Czech Republic",
					"d":"M522.81,307.86L521.51,307.06L520.2,307.28L518.02,305.98L517.03,306.3L515.46,308.04L513.37,306.67L511.79,304.84L510.36,303.8L510.06,301.98L509.57,300.68L511.61,299.73L512.65,298.63L514.66,297.77L515.37,296.93L516.11,297.44L517.36,296.97L518.69,298.4L520.78,298.79L520.61,300L522.13,300.9L522.55,299.77L524.47,300.26L524.74,301.63L526.82,301.89L528.11,304.02L527.28,304.03L526.84,304.8L526.2,304.99L526.02,305.96L525.48,306.17L525.4,306.56L524.45,307L523.2,306.93z"
				},
				{
					"id":"DE",
					"title":"Germany",
					"d":"M503.07,278.92L503.12,280.8L505.96,281.92L505.93,283.62L508.78,282.72L510.35,281.41L513.52,283.3L514.84,284.81L515.5,287.2L514.72,288.45L515.73,290.1L516.43,292.55L516.21,294.11L517.36,296.97L516.11,297.44L515.37,296.93L514.66,297.77L512.65,298.63L511.61,299.73L509.57,300.68L510.06,301.98L510.36,303.8L511.79,304.84L513.37,306.67L512.39,308.62L511.38,309.16L511.78,311.88L511.51,312.58L510.64,311.73L509.3,311.61L507.29,312.35L504.82,312.17L504.42,313.26L503,312.12L502.15,312.34L499.15,311.08L498.57,311.98L496.19,311.95L496.54,308.97L497.96,306.07L493.92,305.29L492.6,304.16L492.76,302.27L492.2,301.29L492.52,298.32L492.04,293.63L493.73,293.63L494.44,291.92L495.14,287.69L494.61,286.11L495.16,285.11L497.5,284.85L498.02,285.89L499.93,283.56L499.29,281.77L499.16,279.02L501.28,279.66z"
				},
				{
					"id":"DJ",
					"title":"Djibouti",
					"d":"M596.05,427.72L596.71,428.6L596.62,429.79L595.02,430.47L596.23,431.24L595.19,432.76L594.57,432.26L593.9,432.46L592.33,432.41L592.28,431.55L592.07,430.76L593.01,429.43L594,428.17L595.2,428.42z"
				},
				{
					"id":"DK",
					"title":"Denmark",
					"d":"M510.83,275.84l-1.68,3.97l-2.93,-2.76l-0.39,-2.05l4.11,-1.66L510.83,275.84zM505.85,271.59l-0.69,1.9l-0.83,-0.55l-2.02,3.59l0.76,2.39l-1.79,0.74l-2.12,-0.64l-1.14,-2.72l-0.08,-5.12l0.47,-1.38l0.8,-1.54l2.47,-0.32l0.98,-1.43l2.26,-1.47l-0.1,2.68l-0.83,1.68l0.34,1.43L505.85,271.59z"
				},
				{
					"id":"DO",
					"title":"Dominican Republic",
					"d":"M274.18,407.35L274.53,406.84L276.72,406.86L278.38,407.62L279.12,407.54L279.63,408.59L281.16,408.53L281.07,409.41L282.32,409.52L283.7,410.6L282.66,411.8L281.32,411.16L280.04,411.28L279.12,411.14L278.61,411.68L277.53,411.86L277.11,411.14L276.18,411.57L275.06,413.57L274.34,413.11L274.19,412.27L274.25,411.47L273.53,410.59L274.21,410.09L274.43,408.96z"
				},
				{
					"id":"DZ",
					"title":"Algeria",
					"d":"M508.9,396.08L499.29,401.83L491.17,407.68L487.22,409L484.11,409.29L484.08,407.41L482.78,406.93L481.03,406.08L480.37,404.69L470.91,398.14L461.45,391.49L450.9,383.96L450.96,383.35L450.96,383.14L450.93,379.39L455.46,377.03L458.26,376.54L460.55,375.68L461.63,374.06L464.91,372.77L465.03,370.36L466.65,370.07L467.92,368.86L471.59,368.3L472.1,367.02L471.36,366.31L470.39,362.78L470.23,360.73L469.17,358.55L471.86,356.68L474.9,356.08L476.67,354.65L479.37,353.6L484.12,352.98L488.76,352.69L490.17,353.21L492.81,351.84L495.81,351.81L496.95,352.62L498.86,352.41L498.29,354.2L498.74,357.48L498.08,360.3L496.35,362.18L496.6,364.71L498.89,366.69L498.92,367.5L500.64,368.83L501.84,374.69L502.75,377.53L502.9,379.01L502.41,381.6L502.61,383.04L502.25,384.76L502.5,386.73L501.38,388.02L503.04,390.28L503.15,391.6L504.14,393.31L505.45,392.75L507.67,394.17z"
				},
				{
					"id":"EC",
					"title":"Ecuador",
					"d":"M250.1,472.87L251.59,470.79L250.98,469.57L249.91,470.87L248.23,469.64L248.8,468.86L248.33,466.33L249.31,465.91L249.83,464.18L250.89,462.38L250.69,461.25L252.23,460.65L254.15,459.54L256.96,461.13L257.48,461.08L258.16,462.28L260.54,462.67L261.34,462.23L262.72,463.15L263.92,463.81L264.31,465.92L263.44,467.73L260.38,470.65L257.01,471.75L255.29,474.18L254.76,476.06L253.17,477.21L252,475.8L250.86,475.5L249.7,475.72L249.63,474.7L250.43,474.04z"
				},
				{
					"id":"EE",
					"title":"Estonia",
					"d":"M543.42,264.71L543.75,261.59L542.72,262.26L540.94,260.36L540.69,257.25L544.24,255.72L547.77,254.91L550.81,255.83L553.71,255.66L554.13,256.62L552.14,259.76L552.97,264.72L551.77,266.38L549.45,266.37L547.04,264.43L545.81,263.78z"
				},
				{
					"id":"EG",
					"title":"Egypt",
					"d":"M573.17,377.28L572.38,378.57L571.78,380.97L571.02,382.61L570.36,383.17L569.43,382.15L568.16,380.73L566.16,376.16L565.88,376.45L567.04,379.82L568.76,383L570.88,387.88L571.91,389.56L572.81,391.3L575.33,394.7L574.77,395.23L574.86,397.2L578.13,399.91L578.62,400.53L567.5,400.53L556.62,400.53L545.35,400.53L545.35,389.3L545.35,378.12L544.51,375.54L545.23,373.54L544.8,372.15L545.81,370.58L549.54,370.53L552.24,371.39L555.02,372.36L556.32,372.86L558.48,371.83L559.63,370.9L562.11,370.63L564.1,371.04L564.87,372.66L565.52,371.59L567.76,372.36L569.95,372.55L571.33,371.73z"
				},
				{
					"id":"EH",
					"title":"Western Sahara",
					"d":"M438.57,383.06L442.19,383.07L450.94,383.1L450.94,383.1L450.94,383.1L442.19,383.07L438.57,383.06L438.46,383.15L438.41,383.19L436.63,386.39L434.77,387.53L433.75,389.44L433.69,391.09L432.94,392.88L432,393.37L430.44,395.31L429.48,397.46L429.66,398.48L428.74,400.05L427.66,400.87L427.53,402.26L427.41,403.53L428.02,402.53L439,402.55L438.47,398.2L439.16,396.65L441.78,396.38L441.69,388.52L450.9,388.69L450.9,383.96L450.96,383.35L450.96,383.14z"
				},
				{
					"id":"ER",
					"title":"Eritrea",
					"d":"M594,428.17L593.04,427.24L591.89,425.57L590.65,424.65L589.92,423.65L587.48,422.5L585.56,422.47L584.88,421.86L583.24,422.54L581.54,421.23L580.66,423.38L577.4,422.78L577.1,421.63L578.31,417.38L578.58,415.45L579.46,414.55L581.53,414.07L582.95,412.4L584.58,415.78L585.35,418.45L586.89,419.86L590.71,422.58L592.27,424.22L593.79,425.88L594.67,426.86L596.05,427.72L595.2,428.42z"
				},
				{
					"id":"ES",
					"title":"Spain",
					"d":"M449.92,334.56L450.06,331.88L448.92,330.22L452.88,327.45L456.31,328.15L460.08,328.12L463.06,328.78L465.39,328.58L469.92,328.7L471.04,330.19L476.2,331.92L477.22,331.1L480.38,332.82L483.63,332.33L483.78,334.52L481.12,337.01L477.53,337.79L477.28,339.03L475.55,341.06L474.47,344.02L475.56,346.07L473.94,347.67L473.34,349.97L471.22,350.67L469.23,353.36L465.68,353.41L463,353.35L461.25,354.57L460.18,355.88L458.8,355.59L457.77,354.42L456.97,352.42L454.35,351.88L454.12,350.72L455.16,349.4L455.54,348.44L454.58,347.38L455.35,345.03L454.23,342.86L455.44,342.56L455.55,340.84L456.01,340.31L456.04,337.43L457.34,336.43L456.56,334.55L454.92,334.42L454.44,334.89L452.79,334.9L452.08,333.06L450.94,333.61z"
				},
				{
					"id":"ET",
					"title":"Ethiopia",
					"d":"M581.54,421.23L583.24,422.54L584.88,421.86L585.56,422.47L587.48,422.5L589.92,423.65L590.65,424.65L591.89,425.57L593.04,427.24L594,428.17L593.01,429.43L592.07,430.76L592.28,431.55L592.33,432.41L593.9,432.46L594.57,432.26L595.19,432.76L594.58,433.77L595.62,435.33L596.65,436.69L597.72,437.7L606.89,441.04L609.25,441.02L601.32,449.44L597.67,449.56L595.17,451.53L593.38,451.58L592.61,452.46L590.69,452.46L589.56,451.52L587,452.69L586.17,453.85L584.3,453.63L583.68,453.31L583.02,453.38L582.14,453.36L578.59,450.98L576.64,450.98L575.68,450.07L575.68,448.5L574.22,448.03L572.57,444.98L571.29,444.33L570.79,443.21L569.37,441.84L567.65,441.64L568.61,440.03L570.09,439.96L570.51,439.1L570.48,436.57L571.31,433.61L572.63,432.81L572.92,431.65L574.12,429.48L575.81,428.06L576.95,425.25L577.4,422.78L580.66,423.38z"
				},
				{
					"id":"FK",
					"title":"Falkland Islands",
					"d":"M303.66,633.13L307.02,630.44L309.41,631.56L311.09,629.77L313.33,631.78L312.49,633.36L308.7,634.72L307.44,633.13L305.06,635.18z"
				},
				{
					"id":"FI",
					"title":"Finland",
					"d":"M555.42,193.1L555.01,198.5L559.31,203.49L556.72,208.97L559.98,216.93L558.09,222.69L560.62,227.55L559.47,231.69L563.62,235.95L562.56,239.05L559.96,242.5L553.96,249.91L548.87,250.36L543.94,252.43L539.38,253.61L537.75,250.54L535.04,248.67L535.66,242.95L534.3,237.54L535.64,233.96L538.18,230.02L544.59,223L546.47,221.61L546.17,218.77L542.27,215.55L541.33,212.85L541.25,201.73L536.88,196.58L533.14,192.77L534.82,190.69L537.94,194.84L541.6,194.45L544.61,196.32L547.28,192.88L548.66,187.03L553.01,184.25L556.61,187.51z"
				},
				{
					"id":"FJ",
					"title":"Fiji",
					"d":"M980.53,508.61l-0.35,1.4l-0.23,0.16l-1.78,0.72l-1.79,0.61l-0.36,-1.09l1.4,-0.6l0.89,-0.16l1.64,-0.91L980.53,508.61zM974.69,512.92l-1.27,-0.36l-1.08,1l0.27,1.29l1.55,0.36l1.74,-0.4l0.46,-1.53l-0.96,-0.84L974.69,512.92z"
				},
				{
					"id":"FR",
					"title":"France",
					"d":"M502.06,333.54l-0.93,2.89l-1.27,-0.76l-0.65,-2.53l0.57,-1.41l1.81,-1.45L502.06,333.54zM485.31,300.19l1.96,2.06l1.44,-0.34l2.45,1.97l0.63,0.37l0.81,-0.09l1.32,1.12l4.04,0.79l-1.42,2.9l-0.36,2.98l-0.77,0.71l-1.28,-0.38l0.09,1.05l-2.05,2.3l-0.04,1.84l1.34,-0.63l0.96,1.77l-0.12,1.13l0.83,1.5l-0.97,1.21l0.72,3.04l1.52,0.49l-0.32,1.68l-2.54,2.17l-5.53,-1.04l-4.08,1.24l-0.32,2.29l-3.25,0.49l-3.15,-1.72l-1.02,0.82l-5.16,-1.73l-1.12,-1.49l1.45,-2.32l0.53,-7.88l-2.89,-4.26l-2.07,-2.09l-4.29,-1.6l-0.28,-3.07l3.64,-0.92l4.71,1.09l-0.89,-4.84l2.65,1.85l6.53,-3.37l0.84,-3.61l2.45,-0.9l0.41,1.56l1.3,0.07L485.31,300.19z"
				},
				{
					"id":"GA",
					"title":"Gabon",
					"d":"M506.36,474.48L503.48,471.66L501.62,469.36L499.92,466.48L500.01,465.56L500.62,464.66L501.3,462.64L501.87,460.57L502.82,460.41L506.89,460.44L506.87,457.09L508.2,456.9L509.91,457.28L511.57,456.92L511.92,457.07L511.71,458.29L512.5,459.72L514.58,459.5L515.28,460.05L514.07,463.28L515.39,464.92L515.7,467.1L515.35,468.95L514.49,470.27L512.01,470.15L510.51,468.81L510.29,470.05L508.4,470.39L507.44,471.09L508.49,472.94z"
				},
				{
					"id":"GB",
					"title":"United Kingdom",
					"d":"M459.38,281l-1.5,3.29l-2.12,-0.98l-1.73,0.07l0.58,-2.57l-0.58,-2.6l2.35,-0.2L459.38,281zM466.83,260.24l-3,5.73l2.86,-0.72l3.07,0.03l-0.73,4.22l-2.52,4.53l2.9,0.32l0.22,0.52l2.5,5.79l1.92,0.77l1.73,5.41l0.8,1.84l3.4,0.88l-0.34,2.93l-1.43,1.33l1.12,2.33l-2.52,2.33l-3.75,-0.04l-4.77,1.21l-1.31,-0.87l-1.85,2.06l-2.59,-0.5l-1.97,1.67l-1.49,-0.87l4.11,-4.64l2.51,-0.97l-0.02,0l-4.38,-0.75l-0.79,-1.8l2.93,-1.41l-1.54,-2.48l0.53,-3.06l4.17,0.42l0,0l0.41,-2.74l-1.88,-2.95l-0.04,-0.07l-3.4,-0.85l-0.67,-1.32l1.02,-2.2l-0.92,-1.37l-1.51,2.34l-0.16,-4.8l-1.42,-2.59l1.02,-5.36l2.18,-4.31l2.24,0.42L466.83,260.24z"
				},
				{
					"id":"GE",
					"title":"Georgia",
					"d":"M591.76,335.85L592.18,334.25L591.48,331.68L589.86,330.27L588.31,329.83L587.28,328.66L587.62,328.2L589.99,328.86L594.12,329.48L597.94,331.31L598.43,332.02L600.13,331.42L602.75,332.22L603.6,333.77L605.37,334.64L604.64,335.15L606.02,337.17L605.64,337.6L604.13,337.38L602.04,336.32L601.35,336.92L597.45,337.5L594.75,335.68z"
				},
				{
					"id":"GF",
					"title":"French Guiana",
					"d":"M327.89,456.41l-1.07,1.06l-1.34,0.2l-0.38,-0.78l-0.63,-0.12l-0.87,0.76l-1.22,-0.57l0.71,-1.19l0.24,-1.27l0.48,-1.2l-1.09,-1.65l-0.22,-1.91l1.46,-2.41l0.95,0.31l2.06,0.66l2.97,2.36l0.46,1.14l-1.66,2.55L327.89,456.41z"
				},
				{
					"id":"GH",
					"title":"Ghana",
					"d":"M478.23,446.84L473.83,448.48L472.27,449.44L469.74,450.25L467.24,449.46L467.37,448.35L466.16,445.94L466.89,442.77L468.07,440.41L467.33,436.4L466.94,434.27L467.01,432.66L471.88,432.53L473.12,432.74L474.02,432.28L475.32,432.5L475.11,433.39L476.28,434.85L476.28,436.9L476.55,439.12L477.25,440.15L476.63,442.68L476.85,444.08L477.6,445.86z"
				},
				{
					"id":"GL",
					"title":"Greenland",
					"d":"M344.13,23.91L353.55,10.3L363.39,11.37L366.96,2.42L376.87,0L399.27,3.15L416.81,21.74L411.63,30.04L400.9,30.97L385.81,33L387.22,36.64L397.15,34.4L405.59,41.31L411.04,35.19L413.37,42.34L410.29,53.31L417.43,46.38L431.04,38.83L439.45,42.64L441.02,50.76L429.59,63.42L428.01,67.32L419.05,70.18L425.54,70.97L422.26,82.48L420,92.07L420.09,107.33L423.46,115.67L419.08,116.18L414.47,120.06L419.64,126.36L420.3,135.98L417.3,137L420.93,146.15L414.71,146.9L417.96,151.04L417.04,154.55L413.09,156.06L409.18,156.09L412.69,162.57L412.73,166.7L407.18,162.87L405.74,165.36L409.52,167.65L413.2,173.13L414.26,180.08L409.26,181.7L407.1,178.44L403.63,173.46L404.59,179.33L401.34,183.74L408.72,184.09L412.59,184.54L405.07,191.57L397.45,197.7L389.25,200.31L386.16,200.35L383.26,203.22L379.36,210.85L373.33,215.74L371.39,216.03L367.65,217.7L363.63,219.29L361.22,223.41L361.18,227.97L359.77,232.13L355.19,237.08L356.32,241.79L355.06,246.64L353.63,252.2L349.68,252.54L345.54,247.91L339.93,247.88L337.21,244.7L335.34,238.9L330.48,231.22L329.06,227.07L328.68,221.18L324.79,214.91L325.8,209.74L323.93,207.21L326.7,198.56L330.92,195.71L332.03,192.45L332.62,186.19L329.41,189.05L327.89,190.24L325.37,191.38L321.93,188.77L321.74,183.22L322.84,178.74L325.44,178.62L331.16,180.87L326.34,175.44L323.83,172.43L321.04,173.67L318.7,171.48L321.83,162.98L320.13,159.45L317.9,152.71L314.53,141.8L310.96,137.63L310.99,133L303.46,126.31L297.51,125.46L290.02,125.93L283.18,126.79L279.92,123.04L275.05,115.38L282.41,111.41L288.06,110.73L276.06,107.37L269.74,101.93L270.13,96.59L280.74,89.72L291.01,82.56L292.09,76.92L284.53,71.16L286.97,64.52L296.68,52.19L300.76,50.21L299.59,41.64L306.23,36.4L314.85,33.19L323.47,33.01L326.53,39.31L333.97,27.99L340.66,35.77L344.59,37.36L350.42,43.77L343.75,33z"
				},
				{
					"id":"GM",
					"title":"Gambia",
					"d":"M428.03,426.43L428.39,425.16L431.44,425.07L432.08,424.4L432.97,424.35L434.07,425.06L434.94,425.07L435.87,424.59L436.43,425.41L435.22,426.06L434,426.01L432.8,425.4L431.76,426.06L431.26,426.09L430.58,426.49z"
				},
				{
					"id":"GN",
					"title":"Guinea",
					"d":"M451.59,441.91L450.8,441.84L450.23,442.97L449.43,442.96L448.89,442.36L449.07,441.23L447.9,439.51L447.17,439.82L446.57,439.89L445.8,440.05L445.83,439.02L445.38,438.28L445.47,437.46L444.86,436.27L444.08,435.26L441.84,435.26L441.19,435.79L440.41,435.85L439.93,436.46L439.61,437.25L438.11,438.49L436.88,436.82L435.79,435.71L435.07,435.35L434.37,434.78L434.06,433.53L433.65,432.91L432.83,432.44L434.08,431.06L434.93,431.11L435.66,430.63L436.28,430.63L436.72,430.25L436.48,429.31L436.79,429.01L436.84,428.04L438.19,428.07L440.21,428.77L440.83,428.7L441.04,428.39L442.56,428.61L442.97,428.45L443.13,429.5L443.58,429.49L444.31,429.11L444.77,429.21L445.55,429.93L446.75,430.16L447.52,429.54L448.43,429.16L449.1,428.76L449.66,428.84L450.28,429.46L450.62,430.25L451.77,431.44L451.19,432.17L451.08,433.09L451.68,432.81L452.03,433.15L451.88,433.99L452.74,434.81L452.18,435.02L451.95,435.99L452.6,437.15L453.29,439.41L452.25,439.75L451.98,440.14L452.2,440.68L452.04,441.91z"
				},
				{
					"id":"GQ",
					"title":"Equatorial Guinea",
					"d":"M501.87,460.57L501.34,460.15L502.31,457.02L506.87,457.09L506.89,460.44L502.82,460.41z"
				},
				{
					"id":"GR",
					"title":"Greece",
					"d":"M541.7,356.71l1.53,1.16l2.18,-0.19l2.09,0.24l-0.07,0.6l1.53,-0.41l-0.35,1.01l-4.04,0.29l0.03,-0.56l-3.42,-0.67L541.7,356.71zM549.85,335.75l-0.87,2.33l-0.67,0.41l-1.71,-0.1l-1.46,-0.35l-3.4,0.96l1.94,2.06l-1.42,0.59l-1.56,0l-1.48,-1.88l-0.53,0.8l0.63,2.18l1.4,1.7l-1.06,0.79l1.56,1.65l1.39,1.03l0.04,2l-1.36,-1.15l-1.24,0.21l0.83,1.8l-0.92,0.19l-1,-0.69l1.2,3.95l-0.58,0l-0.45,-1.25l-0.57,-0.02l-0.26,1.32l-0.45,-0.3l0.1,-0.74l-0.56,-1.04h-0.64l0.12,0.84l-0.25,0.27l-0.62,-0.54l-0.38,-1.01l0.52,-0.57l-0.36,-0.74l-0.41,-0.38l-0.42,-0.09l-0.49,-0.94l0.58,-0.52l0.36,-0.48l0.56,0.1l0.25,-0.41l0.59,-0.16l0.68,0.46l0.55,0.17l0.39,-0.62l-0.94,-0.08l-0.56,-0.19l-1.25,0.28l-1.22,0.05l-1.09,-1.64l-0.18,-0.25l0.17,-0.64l-1.42,-1.15l-0.19,-1.03l1.3,-1.76l0.17,-1.19l0.91,-0.53l0.06,-0.97l1.83,-0.33l1.07,-0.81l1.52,0.07l0.46,-0.65l0.53,-0.12l2.07,0.11l2.25,-1.02l1.98,1.3l2.55,-0.35l0.03,-1.86L549.85,335.75z"
				},
				{
					"id":"GT",
					"title":"Guatemala",
					"d":"M222.64,424.75L221.2,424.25L219.45,424.2L218.17,423.63L216.66,422.45L216.73,421.61L217.05,420.93L216.66,420.39L218.01,418.03L221.6,418.02L221.68,417.04L221.22,416.86L220.91,416.23L219.87,415.56L218.83,414.58L220.1,414.58L220.1,412.93L222.72,412.93L225.31,412.96L225.29,415.27L225.07,418.55L225.9,418.55L226.82,419.08L227.06,418.64L227.88,419.01L226.61,420.12L225.28,420.93L225.08,421.48L225.3,422.04L224.72,422.78L224.06,422.95L224.21,423.29L223.69,423.61L222.73,424.33z"
				},
				{
					"id":"GW",
					"title":"Guinea-Bissau",
					"d":"M432.83,432.44L431.33,431.25L430.15,431.07L429.51,430.26L429.52,429.83L428.67,429.23L428.49,428.62L429.98,428.15L430.91,428.24L431.66,427.92L436.84,428.04L436.79,429.01L436.48,429.31L436.72,430.25L436.28,430.63L435.66,430.63L434.93,431.11L434.08,431.06z"
				},
				{
					"id":"GY",
					"title":"Guyana",
					"d":"M307.7,440L309.54,441.03L311.28,442.86L311.35,444.31L312.41,444.38L313.91,445.74L315.02,446.72L314.57,449.24L312.87,449.97L313.02,450.62L312.5,452.07L313.75,454.09L314.64,454.1L315.01,455.67L316.72,458.09L316.04,458.19L314.49,457.96L313.58,458.7L312.31,459.19L311.43,459.31L311.12,459.85L309.74,459.71L308.01,458.41L307.81,457.12L307.09,455.71L307.54,453.33L308.32,452.35L307.67,451.05L306.71,450.63L307.08,449.4L306.42,448.76L304.96,448.88L303.07,446.76L303.83,445.99L303.77,444.69L305.5,444.24L306.19,443.72L305.23,442.68L305.48,441.65z"
				},
				{
					"id":"HN",
					"title":"Honduras",
					"d":"M230.43,426.9L229.95,426.01L229.09,425.76L229.29,424.61L228.91,424.3L228.33,424.1L227.1,424.44L227,424.05L226.15,423.59L225.55,423.02L224.72,422.78L225.3,422.04L225.08,421.48L225.28,420.93L226.61,420.12L227.88,419.01L228.17,419.13L228.79,418.62L229.59,418.58L229.85,418.81L230.29,418.67L231.59,418.93L232.89,418.85L233.79,418.53L234.12,418.21L235.01,418.36L235.68,418.56L236.41,418.49L236.97,418.24L238.25,418.64L238.7,418.7L239.55,419.24L240.36,419.89L241.38,420.33L242.12,421.13L241.16,421.07L240.77,421.46L239.8,421.84L239.09,421.84L238.47,422.21L237.91,422.08L237.43,421.64L237.14,421.72L236.78,422.41L236.51,422.38L236.46,422.98L235.48,423.77L234.97,424.11L234.68,424.47L233.85,423.89L233.25,424.65L232.66,424.63L232,424.7L232.06,426.11L231.65,426.13L231.3,426.79z"
				},
				{
					"id":"HR",
					"title":"Croatia",
					"d":"M528.05,318.93L528.73,320.48L529.62,321.62L528.54,323.11L527.27,322.23L525.33,322.29L522.92,321.63L521.61,321.72L521.01,322.54L520,321.63L519.41,323.27L520.79,325.1L521.39,326.31L522.68,327.76L523.75,328.61L524.81,330.22L527.29,331.66L526.98,332.3L524.35,330.9L522.72,329.52L520.16,328.38L517.8,325.53L518.37,325.23L517.09,323.59L517.03,322.25L515.23,321.63L514.37,323.34L513.54,322.01L513.61,320.63L513.71,320.57L515.66,320.71L516.18,320.03L517.13,320.68L518.23,320.76L518.22,319.64L519.19,319.23L519.47,317.61L521.7,316.53L522.59,317.03L524.69,318.76L527,319.53z"
				},
				{
					"id":"HT",
					"title":"Haiti",
					"d":"M270.04,406.75L271.75,406.88L274.18,407.35L274.43,408.96L274.21,410.09L273.53,410.59L274.25,411.47L274.19,412.27L272.33,411.77L271.01,411.97L269.3,411.76L267.99,412.31L266.48,411.39L266.73,410.44L269.31,410.85L271.43,411.09L272.44,410.43L271.16,409.16L271.18,408.03L269.41,407.57z"
				},
				{
					"id":"HU",
					"title":"Hungary",
					"d":"M520.68,315.11L521.61,312.46L521.07,311.57L522.65,311.56L522.86,309.85L524.29,310.92L525.32,311.38L527.68,310.87L527.9,310.03L529.02,309.9L530.38,309.25L530.68,309.52L532,309L532.66,308L533.58,307.75L536.58,309.03L537.18,308.6L538.73,309.74L538.93,310.86L537.22,311.73L535.89,314.53L534.2,317.29L531.95,318.05L530.2,317.88L528.05,318.93L527,319.53L524.69,318.76L522.59,317.03L521.7,316.53L521.15,315.16z"
				},
				{
					"id":"ID",
					"title":"Indonesia",
					"d":"M813.72,492.06l-1.18,0.05l-3.72,-1.98l2.61,-0.56l1.47,0.86l0.98,0.86L813.72,492.06zM824.15,491.78l-2.4,0.62l-0.34,-0.34l0.25,-0.96l1.21,-1.72l2.77,-1.12l0.28,0.56l0.05,0.86L824.15,491.78zM805.83,486.01l1.01,0.75l1.73,-0.23l0.7,1.2l-3.24,0.57l-1.94,0.38l-1.51,-0.02l0.96,-1.62l1.54,-0.02L805.83,486.01zM819.86,486l-0.41,1.56l-4.21,0.8l-3.73,-0.35l-0.01,-1.03l2.23,-0.59l1.76,0.84l1.87,-0.21L819.86,486zM779.82,482.31l5.37,0.28l0.62,-1.16l5.2,1.35l1.02,1.82l4.21,0.51l3.44,1.67l-3.2,1.07l-3.08,-1.13l-2.54,0.08l-2.91,-0.21l-2.62,-0.51l-3.25,-1.07l-2.06,-0.28l-1.17,0.35l-5.11,-1.16l-0.49,-1.21l-2.57,-0.21l1.92,-2.68l3.4,0.17l2.26,1.09l1.16,0.21L779.82,482.31zM853,480.73l-1.44,1.91l-0.27,-2.11l0.5,-1.01l0.59,-0.95l0.64,0.82L853,480.73zM832.04,473.02l-1.05,0.93l-1.94,-0.51l-0.55,-1.2l2.84,-0.13L832.04,473.02zM841.08,472.01l1.02,2.13l-2.37,-1.15l-2.34,-0.23l-1.58,0.18l-1.94,-0.1l0.67,-1.53l3.46,-0.12L841.08,472.01zM851.37,466.59l0.78,4.51l2.9,1.67l2.34,-2.96l3.22,-1.68l2.49,0l2.4,0.97l2.08,1l3.01,0.53l0.05,9.1l0.05,9.16l-2.5,-2.31l-2.85,-0.57l-0.69,0.8l-3.55,0.09l1.19,-2.29l1.77,-0.78l-0.73,-3.05l-1.35,-2.35l-5.44,-2.37l-2.31,-0.23l-4.21,-2.58l-0.83,1.36l-1.08,0.25l-0.64,-1.02l-0.01,-1.21l-2.14,-1.37l3.02,-1l2,0.05l-0.24,-0.74l-4.1,-0.01l-1.11,-1.66l-2.5,-0.51l-1.19,-1.38l3.78,-0.67l1.44,-0.91l4.5,1.14L851.37,466.59zM826.41,459.43l-2.25,2.76l-2.11,0.54l-2.7,-0.54l-4.67,0.14l-2.45,0.4l-0.4,2.11l2.51,2.48l1.51,-1.26l5.23,-0.95l-0.23,1.28l-1.22,-0.4l-1.22,1.63l-2.47,1.08l2.65,3.57l-0.51,0.96l2.52,3.22l-0.02,1.84l-1.5,0.82l-1.1,-0.98l1.36,-2.29l-2.75,1.08l-0.7,-0.77l0.36,-1.08l-2.02,-1.64l0.21,-2.72l-1.87,0.85l0.24,3.25l0.11,4l-1.78,0.41l-1.2,-0.82l0.8,-2.57l-0.43,-2.69l-1.18,-0.02l-0.87,-1.91l1.16,-1.83l0.4,-2.21l1.41,-4.2l0.59,-1.15l2.38,-2.07l2.19,0.82l3.54,0.39l3.22,-0.12l2.77,-2.02L826.41,459.43zM836.08,460.23l-0.15,2.43l-1.45,-0.27l-0.43,1.69l1.16,1.47l-0.79,0.33l-1.13,-1.76l-0.83,-3.56l0.56,-2.23l0.93,-1.01l0.2,1.52l1.66,0.24L836.08,460.23zM805.76,458.29l3.14,2.58l-3.32,0.33l-0.94,1.9l0.12,2.52l-2.7,1.91L802,470.3l-1.08,4.27l-0.41,-0.99l-3.19,1.26l-1.11,-1.71l-2,-0.16l-1.4,-0.89l-3.33,1l-1.02,-1.35l-1.84,0.15l-2.31,-0.32l-0.43,-3.74l-1.4,-0.77l-1.35,-2.38l-0.39,-2.44l0.33,-2.58l1.67,-1.85l0.47,1.86l1.92,1.57l1.81,-0.57l1.79,0.2l1.63,-1.41l1.34,-0.24l2.65,0.78l2.29,-0.59l1.44,-3.88l1.08,-0.97l0.97,-3.17l3.22,0l2.43,0.47l-1.59,2.52l2.06,2.64L805.76,458.29zM771.95,479.71l-3.1,0.06l-2.36,-2.34l-3.6,-2.28l-1.2,-1.69l-2.12,-2.27l-1.39,-2.09l-2.13,-3.9l-2.46,-2.32l-0.82,-2.39l-1.03,-2.17l-2.53,-1.75l-1.47,-2.39l-2.11,-1.56l-2.92,-3.08l-0.25,-1.42l1.81,0.11l4.34,0.54l2.48,2.73l2.17,1.89l1.55,1.16l2.66,3l2.85,0.04l2.36,1.91l1.62,2.33l2.13,1.27l-1.12,2.27l1.61,0.97l1.01,0.07l0.48,1.94l0.98,1.56l2.06,0.25l1.36,1.76l-0.7,3.47L771.95,479.71z"
				},
				{
					"id":"IE",
					"title":"Ireland",
					"d":"M457.88,284.29L458.34,287.65L456.22,291.77L451.25,294.45L447.28,293.77L449.55,288.99L448.09,284.22L451.9,280.47L454.02,278.2L454.6,280.8L454.02,283.37L455.76,283.31z"
				},
				{
					"id":"IL",
					"title":"Israel",
					"d":"M575.41,366.82L574.92,367.87L573.9,367.41L573.32,369.61L574.02,369.97L573.31,370.43L573.18,371.29L574.5,370.84L574.57,372.11L573.17,377.28L571.33,371.73L572.14,370.65L571.95,370.46L572.69,368.93L573.26,366.43L573.66,365.59L573.74,365.56L574.68,365.56L574.94,364.98L575.69,364.93L575.73,366.3L575.35,366.8z"
				},
				{
					"id":"IN",
					"title":"India",
					"d":"M693.5,357.44L696.51,361.43L696.23,364.17L697.34,365.88L697.25,367.57L695.24,367.13L696.03,370.76L698.78,372.82L702.68,375.09L700.9,376.55L699.81,379.54L702.53,380.74L705.17,382.29L708.83,384.06L712.67,384.47L714.29,386.06L716.45,386.35L719.83,387.08L722.16,387.03L722.48,385.79L722.11,383.8L722.33,382.45L724.04,381.78L724.28,384.26L724.33,384.89L726.88,386.08L728.65,385.59L731.01,385.8L733.3,385.71L733.5,383.78L732.36,382.78L734.62,382.38L737.17,380.03L740.4,378L742.75,378.78L744.75,377.44L746.07,379.42L745.12,380.76L748.14,381.23L748.36,382.43L747.37,383.01L747.6,384.94L745.6,384.37L741.97,386.53L742.05,388.31L740.51,390.91L740.36,392.41L739.11,394.93L736.92,394.23L736.81,397.38L736.18,398.41L736.48,399.69L735.09,400.41L733.62,395.61L732.84,395.62L732.38,397.56L730.85,395.98L731.71,394.25L732.97,394.07L734.26,391.48L732.65,390.95L730.04,391L727.38,390.58L727.13,388.43L725.79,388.27L723.57,386.93L722.58,389.04L724.6,390.67L722.85,391.82L722.23,392.94L723.95,393.76L723.48,395.6L724.45,397.88L724.89,400.36L724.48,401.46L722.58,401.42L719.12,402.04L719.28,404.29L717.78,406.05L713.75,408.05L710.61,411.51L708.5,413.36L705.71,415.27L705.71,416.61L704.31,417.33L701.78,418.36L700.47,418.52L699.63,420.72L700.21,424.47L700.36,426.84L699.18,429.55L699.16,434.38L697.71,434.52L696.44,436.67L697.29,437.6L694.73,438.4L693.79,440.32L692.66,441.13L690.01,438.5L688.71,434.54L687.63,431.68L686.65,430.34L685.16,427.6L684.47,424.02L683.98,422.22L681.43,418.25L680.27,412.61L679.43,408.84L679.44,405.26L678.9,402.46L674.82,404.25L672.84,403.89L669.18,400.26L670.53,399.17L669.7,397.99L666.41,395.41L668.28,393.37L674.45,393.38L673.89,390.74L672.32,389.18L672,386.79L670.16,385.39L673.25,382.09L676.51,382.33L679.44,379.01L681.2,375.75L683.92,372.51L683.88,370.18L686.27,368.27L684,366.64L683.03,364.39L682.04,361.44L683.41,359.98L687.67,360.81L690.79,360.3z"
				},
				{
					"id":"IQ",
					"title":"Iraq",
					"d":"M602.61,355.77L604.44,356.81L604.66,358.81L603.24,359.98L602.59,362.62L604.54,365.8L607.97,367.62L609.42,370.12L608.96,372.49L609.85,372.49L609.88,374.22L611.43,375.91L609.77,375.76L607.88,375.49L605.82,378.57L600.61,378.31L592.71,371.82L588.53,369.53L585.15,368.64L584.02,364.6L590.23,361.1L591.29,356.98L591.02,354.46L592.56,353.6L594,351.42L595.2,350.87L598.46,351.33L599.45,352.22L600.79,351.63z"
				},
				{
					"id":"IR",
					"title":"Iran",
					"d":"M626.44,351.53L628.91,350.85L630.9,348.83L632.77,348.93L634,348.27L636,348.6L639.1,350.39L641.34,350.78L644.54,353.87L646.63,353.99L646.88,356.9L645.74,361.15L644.97,363.6L646.19,364.09L644.99,365.92L645.91,368.56L646.13,370.65L648.25,371.2L648.48,373.3L645.94,376.23L647.32,377.91L648.45,379.84L651.13,381.24L651.21,384.01L652.55,384.52L652.78,385.96L648.74,387.57L647.68,391.17L642.41,390.24L639.35,389.53L636.19,389.12L634.99,385.31L633.65,384.75L631.49,385.31L628.67,386.82L625.24,385.79L622.41,383.38L619.71,382.48L617.84,379.47L615.77,375.2L614.26,375.72L612.48,374.65L611.43,375.91L609.88,374.22L609.85,372.49L608.96,372.49L609.42,370.12L607.97,367.62L604.54,365.8L602.59,362.62L603.24,359.98L604.66,358.81L604.44,356.81L602.61,355.77L600.79,351.63L599.26,348.8L599.8,347.71L598.93,343.59L600.85,342.56L601.29,343.93L602.71,345.59L604.63,346.06L605.65,345.96L608.96,343.3L610.01,343.03L610.83,344.1L609.87,345.88L611.62,347.74L612.31,347.57L613.2,350.18L615.86,350.91L617.81,352.67L621.79,353.27L626.17,352.35z"
				},
				{
					"id":"IS",
					"title":"Iceland",
					"d":"M434.57,212.43L433.93,216.91L437.09,221.51L433.45,226.52L425.36,230.9L422.94,232.05L419.25,231.12L411.43,229.11L414.19,226.27L408.09,223.07L413.05,221.79L412.93,219.82L407.05,218.25L408.94,213.78L413.19,212.75L417.56,217.43L421.82,213.68L425.35,215.64L429.92,211.93z"
				},
				{
					"id":"IT",
					"title":"Italy",
					"d":"M518.77,347.88l-1.01,2.78l0.42,1.09l-0.59,1.79l-2.14,-1.31l-1.43,-0.38l-3.91,-1.79l0.39,-1.82l3.28,0.32l2.86,-0.39L518.77,347.88zM501.08,337.06l1.68,2.62l-0.39,4.81l-1.27,-0.23l-1.14,1.2l-1.06,-0.95l-0.11,-4.38l-0.64,-2.1l1.54,0.19L501.08,337.06zM509.95,315.46l4.01,1.05l-0.3,1.99l0.67,1.71l-2.23,-0.58l-2.28,1.42l0.16,1.97l-0.34,1.12l0.92,1.99l2.63,1.95l1.41,3.17l3.12,3.05l2.2,-0.02l0.68,0.83l-0.79,0.74l2.51,1.35l2.06,1.12l2.4,1.92l0.29,0.68l-0.52,1.31l-1.56,-1.7l-2.44,-0.6l-1.18,2.36l2.03,1.34l-0.33,1.88l-1.17,0.21l-1.5,3.06l-1.17,0.27l0.01,-1.08l0.57,-1.91l0.61,-0.77l-1.09,-2.09l-0.86,-1.83l-1.16,-0.46l-0.83,-1.58l-1.8,-0.67l-1.21,-1.49l-2.07,-0.24l-2.19,-1.68l-2.56,-2.45l-1.91,-2.19l-0.87,-3.8l-1.4,-0.45l-2.28,-1.29l-1.29,0.53l-1.62,1.8l-1.17,0.28l0.32,-1.68l-1.52,-0.49l-0.72,-3.04l0.97,-1.21l-0.83,-1.5l0.12,-1.13l1.21,0.86l1.35,-0.19l1.57,-1.36l0.49,0.64l1.34,-0.13l0.61,-1.63l2.07,0.51l1.24,-0.68l0.22,-1.67l1.7,0.58l0.33,-0.78l2.77,-0.71L509.95,315.46z"
				},
				{
					"id":"JM",
					"title":"Jamaica",
					"d":"M257.76,410.96L259.65,411.22L261.14,411.93L261.6,412.73L259.63,412.78L258.78,413.27L257.21,412.8L255.61,411.73L255.94,411.06L257.12,410.86z"
				},
				{
					"id":"JO",
					"title":"Jordan",
					"d":"M574.92,367.87L575.41,366.82L578.53,368.14L584.02,364.6L585.15,368.64L584.62,369.13L579,370.78L581.8,374.04L580.87,374.58L580.41,375.67L578.27,376.11L577.6,377.27L576.38,378.25L573.26,377.74L573.17,377.28L574.57,372.11L574.5,370.84L574.92,369.88z"
				},
				{
					"id":"JP",
					"title":"Japan",
					"d":"M852.76,362.01l0.36,1.15l-1.58,2.03l-1.15,-1.07l-1.44,0.78l-0.74,1.95l-1.83,-0.95l0.02,-1.58l1.55,-2l1.59,0.39l1.15,-1.42L852.76,362.01zM870.53,351.73l-1.06,2.78l0.49,1.73l-1.46,2.42l-3.58,1.6l-4.93,0.21l-4,3.84l-1.88,-1.29L854,360.5l-4.88,0.75l-3.32,1.59l-3.28,0.06l2.84,2.46l-1.87,5.61l-1.81,1.37l-1.36,-1.27l0.69,-2.96l-1.77,-0.96l-1.14,-2.28l2.65,-1.03l1.47,-2.11l2.82,-1.75l2.06,-2.33l5.58,-1.02l3,0.7l2.93,-6.17l1.87,1.67l4.11,-3.51l1.59,-1.38l1.76,-4.38l-0.48,-4.1l1.18,-2.33l2.98,-0.68l1.53,5.11l-0.08,2.94l-2.59,3.6L870.53,351.73zM878.76,325.8l1.97,0.83l1.98,-1.65l0.62,4.35l-4.16,1.05l-2.46,3.76l-4.41,-2.58l-1.53,4.12l-3.12,0.06l-0.39,-3.74l1.39,-2.94l3,-0.21l0.82,-5.38l0.83,-3.09l3.29,4.12L878.76,325.8z"
				},
				{
					"id":"KE",
					"title":"Kenya",
					"d":"M590.19,465.78L591.85,468.07L589.89,469.19L589.2,470.35L588.14,470.55L587.75,472.52L586.85,473.64L586.3,475.5L585.17,476.42L581.15,473.63L580.95,472.01L570.79,466.34L570.31,466.03L570.29,463.08L571.09,461.95L572.47,460.11L573.49,458.08L572.26,454.88L571.93,453.48L570.6,451.54L572.32,449.87L574.22,448.03L575.68,448.5L575.68,450.07L576.64,450.98L578.59,450.98L582.14,453.36L583.02,453.38L583.68,453.31L584.3,453.63L586.17,453.85L587,452.69L589.56,451.52L590.69,452.46L592.61,452.46L590.16,455.63z"
				},
				{
					"id":"KG",
					"title":"Kyrgyzstan",
					"d":"M674.22,333.11L674.85,331.45L676.69,330.91L681.31,332.22L681.74,329.98L683.33,329.18L687.33,330.79L688.35,330.37L693,330.47L697.16,330.87L698.56,332.24L700.29,332.79L699.9,333.65L695.48,335.68L694.48,337.16L690.88,337.6L689.82,339.95L686.85,339.46L684.92,340.18L682.24,341.9L682.63,342.75L681.83,343.58L676.53,344.13L673.06,342.96L670.02,343.24L670.29,341.14L673.34,341.75L674.37,340.62L676.5,340.98L680.09,338.34L676.77,336.38L674.77,337.31L672.7,335.91L675.05,333.48z"
				},
				{
					"id":"KH",
					"title":"Cambodia",
					"d":"M765.44,433.6L764.3,432.12L762.89,429.18L762.22,425.73L764.02,423.35L767.64,422.8L770.27,423.21L772.58,424.34L773.85,422.35L776.34,423.41L776.99,425.33L776.64,428.75L771.93,430.94L773.16,432.67L770.22,432.87L767.79,434.01z"
				},
				{
					"id":"KP",
					"title":"North Korea",
					"d":"M841.55,332.62L841.94,333.29L840.88,333.06L839.66,334.33L838.82,335.61L838.93,338.28L837.48,339.09L836.98,339.74L835.92,340.82L834.05,341.42L832.84,342.4L832.75,343.97L832.42,344.37L833.54,344.95L835.13,346.53L834.72,347.39L833.53,347.62L831.55,347.79L830.46,349.39L829.2,349.27L829.03,349.59L827.67,348.92L827.33,349.58L826.51,349.87L826.41,349.21L825.68,348.89L824.93,348.32L825.7,346.75L826.36,346.33L826.11,345.68L826.82,343.74L826.63,343.15L825,342.75L823.68,341.78L825.96,339.43L829.05,337.45L830.98,334.8L832.31,335.97L834.73,336.11L834.29,334.14L838.62,332.51L839.74,330.38z"
				},
				{
					"id":"KR",
					"title":"South Korea",
					"d":"M835.13,346.53L837.55,350.71L838.24,352.98L838.26,356.96L837.21,358.84L834.67,359.5L832.43,360.91L829.9,361.2L829.59,359.35L830.11,356.78L828.87,353.18L830.95,352.59L829.03,349.59L829.2,349.27L830.46,349.39L831.55,347.79L833.53,347.62L834.72,347.39z"
				},
				{
					"id":"XK",
					"title":"Kosovo",
					"d":"M533.47,333.92L533.34,334.69L532.98,334.66L532.8,333.29L532.13,332.91L531.53,331.89L532.05,331.04L532.72,330.76L533.11,329.5L533.61,329.28L534.01,329.82L534.54,330.06L534.9,330.67L535.36,330.85L535.91,331.55L536.31,331.53L535.99,332.46L535.66,332.91L535.75,333.19L535.12,333.33z"
				},
				{
					"id":"KW",
					"title":"Kuwait",
					"d":"M609.77,375.76L610.35,377.17L610.1,377.9L611,380.31L609.02,380.39L608.32,378.88L605.82,378.57L607.88,375.49z"
				},
				{
					"id":"KZ",
					"title":"Kazakhstan",
					"d":"M674.22,333.11L672.61,333.81L668.92,336.42L667.69,339.07L666.64,339.09L665.88,337.34L662.31,337.22L661.74,334.16L660.37,334.13L660.58,330.33L657.23,327.53L652.42,327.83L649.13,328.39L646.45,324.89L644.16,323.41L639.81,320.57L639.29,320.22L632.07,322.57L632.18,336.7L630.74,336.88L628.78,333.95L626.88,332.89L623.7,333.68L622.46,334.93L622.3,334.01L622.99,332.44L622.46,331.12L619.21,329.82L617.94,326.35L616.4,325.37L616.3,324.09L619.03,324.46L619.14,321.58L621.52,320.94L623.97,321.53L624.48,317.62L623.98,315.11L621.17,315.31L618.79,314.31L615.54,316.1L612.93,316.96L611.5,316.3L611.79,314.2L610,311.44L607.92,311.55L605.54,308.72L607.16,305.5L606.34,304.63L608.57,299.86L611.46,302.39L611.81,299.2L617.59,294.35L621.97,294.23L628.16,297.33L631.47,299.12L634.45,297.25L638.89,297.17L642.48,299.46L643.3,298.15L647.23,298.34L647.94,296.23L643.39,293.14L646.08,290.91L645.56,289.66L648.25,288.45L646.23,285.25L647.51,283.63L658,281.97L659.37,280.78L666.39,278.99L668.91,276.95L673.95,278.01L674.83,283.02L677.76,281.86L681.36,283.49L681.13,286.07L683.82,285.8L690.84,281.31L689.82,282.81L693.4,286.47L699.66,298.05L701.16,295.72L705.02,298.28L709.05,297.14L710.59,297.94L711.94,300.49L713.9,301.33L715.1,303.18L718.71,302.6L720.2,305.23L718.06,308.06L715.73,308.46L715.6,312.64L714.04,314.5L708.48,313.15L706.46,320.41L705.02,321.3L699.47,322.88L701.99,329.63L700.07,330.63L700.29,332.79L698.56,332.24L697.16,330.87L693,330.47L688.35,330.37L687.33,330.79L683.33,329.18L681.74,329.98L681.31,332.22L676.69,330.91L674.85,331.45z"
				},
				{
					"id":"LA",
					"title":"Lao People's Democratic Republic",
					"d":"M770.27,423.21L771.18,421.91L771.31,419.47L769.04,416.94L768.86,414.07L766.73,411.69L764.61,411.49L764.05,412.51L762.4,412.59L761.56,412.08L758.61,413.82L758.54,411.2L759.23,408.09L757.34,407.96L757.18,406.18L755.96,405.26L756.56,404.16L758.95,402.22L759.2,402.92L760.69,403L760.27,399.57L761.72,399.13L763.36,401.5L764.62,404.22L768.07,404.25L769.16,406.84L767.37,407.61L766.56,408.68L769.92,410.44L772.25,413.9L774.02,416.47L776.14,418.49L776.85,420.53L776.34,423.41L773.85,422.35L772.58,424.34z"
				},
				{
					"id":"LB",
					"title":"Lebanon",
					"d":"M575.69,364.93L574.94,364.98L574.68,365.56L573.74,365.56L574.74,362.83L576.13,360.45L576.19,360.33L577.45,360.51L577.91,361.83L576.38,363.1z"
				},
				{
					"id":"LK",
					"title":"Sri Lanka",
					"d":"M704.57,442.37L704.15,445.29L702.98,446.09L700.54,446.73L699.2,444.5L698.71,440.47L699.98,435.89L701.91,437.46L703.22,439.44z"
				},
				{
					"id":"LR",
					"title":"Liberia",
					"d":"M453.63,451.22L452.89,451.24L450,449.91L447.46,447.78L445.07,446.25L443.18,444.44L443.85,443.54L444,442.73L445.26,441.2L446.57,439.89L447.17,439.82L447.9,439.51L449.07,441.23L448.89,442.36L449.43,442.96L450.23,442.97L450.8,441.84L451.59,441.91L451.46,442.73L451.74,444.09L451.13,445.33L451.95,446.1L452.84,446.29L454.03,447.46L454.11,448.57L453.84,448.92z"
				},
				{
					"id":"LS",
					"title":"Lesotho",
					"d":"M556.5,547.75L557.48,548.71L556.62,550.27L556.14,551.32L554.58,551.82L554.06,552.86L553.06,553.18L550.96,550.69L552.45,548.66L553.97,547.41L555.28,546.77z"
				},
				{
					"id":"LT",
					"title":"Lithuania",
					"d":"M538.99,282.09L538.76,280.87L539.06,279.54L537.82,278.77L534.89,277.91L534.29,273.75L537.5,272.2L542.2,272.53L544.96,272.03L545.35,273.08L546.84,273.4L549.54,275.82L549.8,278.02L547.5,279.59L546.85,282.31L543.81,284.11L541.1,284.07L540.43,282.61z"
				},
				{
					"id":"LU",
					"title":"Luxembourg",
					"d":"M492.2,301.29L492.76,302.27L492.6,304.16L491.79,304.26L491.16,303.88L491.47,301.45z"
				},
				{
					"id":"LV",
					"title":"Latvia",
					"d":"M534.29,273.75L534.39,269.94L535.77,266.7L538.41,264.92L540.63,268.8L542.88,268.7L543.42,264.71L545.81,263.78L547.04,264.43L549.45,266.37L551.77,266.38L553.12,267.57L553.35,270.06L554.26,273.05L551.24,274.98L549.54,275.82L546.84,273.4L545.35,273.08L544.96,272.03L542.2,272.53L537.5,272.2z"
				},
				{
					"id":"LY",
					"title":"Libya",
					"d":"M516.89,397.93L514.91,399.05L513.33,397.39L508.9,396.08L507.67,394.17L505.45,392.75L504.14,393.31L503.15,391.6L503.04,390.28L501.38,388.02L502.5,386.73L502.25,384.76L502.61,383.04L502.41,381.6L502.9,379.01L502.75,377.53L501.84,374.69L503.21,373.94L503.45,372.56L503.15,371.21L505.08,369.95L505.94,368.9L507.31,367.95L507.47,365.4L510.76,366.55L511.94,366.26L514.28,366.82L518,368.29L519.31,371.21L521.83,371.85L525.78,373.21L528.77,374.82L530.14,373.98L531.48,372.49L530.83,369.98L531.71,368.38L533.73,366.83L535.66,366.38L539.45,367.06L540.41,368.54L541.45,368.55L542.34,369.11L545.13,369.5L545.81,370.58L544.8,372.15L545.23,373.54L544.51,375.54L545.35,378.12L545.35,389.3L545.35,400.53L545.35,406.49L542.13,406.5L542.09,407.74L530.91,402.04L519.72,396.27z"
				},
				{
					"id":"MA",
					"title":"Morocco",
					"d":"M450.96,383.14L450.93,379.39L455.46,377.03L458.26,376.54L460.55,375.68L461.63,374.06L464.91,372.77L465.03,370.36L466.65,370.07L467.92,368.86L471.59,368.3L472.1,367.02L471.36,366.31L470.39,362.78L470.23,360.73L469.17,358.55L467.95,358.51L465.05,357.76L462.38,358L460.69,356.54L458.63,356.52L457.74,358.63L455.87,362.14L453.79,363.53L450.98,365.06L449.18,367.3L448.8,369.04L447.73,371.86L448.43,375.89L446.09,378.57L444.69,379.42L442.48,381.59L439.87,381.94L438.57,383.06L442.19,383.07L450.94,383.1L450.94,383.1L450.94,383.1L442.19,383.07L438.57,383.06z"
				},
				{
					"id":"MD",
					"title":"Moldova",
					"d":"M549.89,309.45L550.56,308.83L552.42,308.41L554.49,309.72L555.64,309.88L556.91,311L556.71,312.41L557.73,313.08L558.13,314.8L559.11,315.84L558.92,316.44L559.44,316.86L558.7,317.15L557.04,317.04L556.77,316.47L556.18,316.8L556.38,317.52L555.61,318.81L555.12,320.18L554.42,320.62L553.91,318.79L554.21,317.07L554.12,315.28L552.5,312.84L551.61,311.09L550.74,309.85z"
				},
				{
					"id":"ME",
					"title":"Montenegro",
					"d":"M530.77,332.23L530.6,331.51L529.38,333.38L529.57,334.57L528.98,334.28L528.2,333.05L526.98,332.3L527.29,331.66L527.7,329.56L528.61,328.67L529.14,328.31L529.88,328.97L530.29,329.51L531.21,329.92L532.28,330.71L532.05,331.04L531.53,331.89z"
				},
				{
					"id":"MG",
					"title":"Madagascar",
					"d":"M614.17,498.4L614.91,499.61L615.6,501.5L616.06,504.96L616.78,506.31L616.5,507.69L616.01,508.55L615.05,506.85L614.53,507.71L615.06,509.85L614.81,511.09L614.04,511.76L613.86,514.24L612.76,517.66L611.38,521.75L609.64,527.42L608.57,531.63L607.3,535.18L605.02,535.91L602.57,537.22L600.96,536.43L598.73,535.33L597.96,533.71L597.77,531L596.79,528.58L596.53,526.41L597.03,524.25L598.32,523.73L598.33,522.74L599.67,520.48L599.92,518.6L599.27,517.2L598.74,515.35L598.52,512.65L599.5,511.02L599.87,509.17L601.27,509.07L602.84,508.47L603.87,507.95L605.11,507.91L606.7,506.26L609.01,504.48L609.85,503.04L609.47,501.81L610.66,502.16L612.21,500.17L612.26,498.45L613.19,497.17z"
				},
				{
					"id":"MK",
					"title":"Macedonia",
					"d":"M532.98,334.66L533.34,334.69L533.47,333.92L535.12,333.33L535.75,333.19L536.71,332.97L538,332.91L539.41,334.12L539.61,336.59L539.07,336.71L538.61,337.36L537.09,337.29L536.02,338.1L534.19,338.42L533.03,337.52L532.63,335.93z"
				},
				{
					"id":"ML",
					"title":"Mali",
					"d":"M441.13,422.22L442.07,421.7L442.54,420L443.43,419.93L445.39,420.73L446.97,420.16L448.05,420.35L448.48,419.71L459.73,419.67L460.35,417.64L459.86,417.28L458.51,404.6L457.16,391.54L461.45,391.49L470.91,398.14L480.37,404.69L481.03,406.08L482.78,406.93L484.08,407.41L484.11,409.29L487.22,409L487.23,415.75L485.69,417.69L485.45,419.48L482.96,419.93L479.14,420.18L478.1,421.21L476.3,421.32L474.51,421.33L473.81,420.78L472.26,421.19L469.64,422.39L469.11,423.29L466.93,424.57L466.55,425.31L465.38,425.89L464.02,425.51L463.25,426.21L462.84,428.17L460.61,430.53L460.68,431.49L459.91,432.7L460.1,434.34L458.94,434.76L458.29,435.12L457.85,433.91L457.04,434.23L456.56,434.17L456.04,435L453.88,434.97L453.1,434.55L452.74,434.81L451.88,433.99L452.03,433.15L451.68,432.81L451.08,433.09L451.19,432.17L451.77,431.44L450.62,430.25L450.28,429.46L449.66,428.84L449.1,428.76L448.43,429.16L447.52,429.54L446.75,430.16L445.55,429.93L444.77,429.21L444.31,429.11L443.58,429.49L443.13,429.5L442.97,428.45L443.1,427.56L442.86,426.46L441.81,425.65L441.26,424.01z"
				},
				{
					"id":"MM",
					"title":"Myanmar",
					"d":"M754.36,405.95L752.72,407.23L750.74,407.37L749.46,410.56L748.28,411.09L749.64,413.66L751.42,415.79L752.56,417.71L751.54,420.23L750.57,420.76L751.24,422.21L753.11,424.49L753.43,426.09L753.38,427.42L754.48,430.02L752.94,432.67L751.58,435.58L751.31,433.48L752.17,431.3L751.23,429.62L751.46,426.51L750.32,425.03L749.41,421.59L748.9,417.93L747.69,415.53L745.84,416.99L742.65,419.05L741.08,418.79L739.34,418.12L740.31,414.51L739.73,411.77L737.53,408.38L737.87,407.31L736.23,406.93L734.24,404.51L734.06,402.1L735.04,402.56L735.09,400.41L736.48,399.69L736.18,398.41L736.81,397.38L736.92,394.23L739.11,394.93L740.36,392.41L740.51,390.91L742.05,388.31L741.97,386.53L745.6,384.37L747.6,384.94L747.37,383.01L748.36,382.43L748.14,381.23L749.78,380.99L750.72,382.85L751.94,383.6L752.03,386L751.91,388.57L749.26,391.15L748.92,394.78L751.88,394.28L752.55,397.08L754.33,397.67L753.51,400.17L755.59,401.3L756.81,401.85L758.86,400.98L758.95,402.22L756.56,404.16L755.96,405.26z"
				},
				{
					"id":"MN",
					"title":"Mongolia",
					"d":"M721.29,304.88L724.25,304.14L729.6,300.4L733.87,298.33L736.3,299.68L739.23,299.74L741.1,301.79L743.9,301.94L747.96,303.03L750.68,300L749.54,297.4L752.45,292.74L755.59,294.61L758.13,295.14L761.43,296.29L761.96,299.61L765.95,301.45L768.6,300.64L772.14,300.07L774.95,300.65L777.7,302.74L779.4,304.94L782,304.9L785.53,305.59L788.11,304.53L791.8,303.82L795.91,300.76L797.59,301.23L799.06,302.69L802.4,302.33L801.04,305.58L799.06,309.8L799.78,311.51L801.37,310.98L804.13,311.63L806.29,310.09L808.54,311.42L811.08,314.31L810.77,315.76L808.56,315.3L804.49,315.84L802.51,317L800.46,319.66L796.18,321.21L793.39,323.31L790.51,322.51L788.93,322.15L787.46,324.69L788.35,326.19L788.81,327.47L786.84,328.77L784.83,330.82L781.56,332.15L777.35,332.3L772.82,333.61L769.56,335.62L768.32,334.46L764.93,334.46L760.78,332.17L758.01,331.6L754.28,332.13L748.49,331.28L745.4,331.37L743.76,329.1L742.48,325.53L740.75,325.1L737.36,322.65L733.58,322.1L730.25,321.42L729.24,319.69L730.32,314.96L728.39,311.65L724.39,310.08L722.03,307.85z"
				},
				{
					"id":"MR",
					"title":"Mauritania",
					"d":"M441.13,422.22L439.28,420.24L437.58,418.11L435.72,417.34L434.38,416.49L432.81,416.52L431.45,417.15L430.05,416.9L429.09,417.83L428.85,416.27L429.63,414.83L429.98,412.08L429.67,409.17L429.33,407.7L429.61,406.23L428.89,404.81L427.41,403.53L428.02,402.53L439,402.55L438.47,398.2L439.16,396.65L441.78,396.38L441.69,388.52L450.9,388.69L450.9,383.96L461.45,391.49L457.16,391.54L458.51,404.6L459.86,417.28L460.35,417.64L459.73,419.67L448.48,419.71L448.05,420.35L446.97,420.16L445.39,420.73L443.43,419.93L442.54,420L442.07,421.7z"
				},
				{
					"id":"MW",
					"title":"Malawi",
					"d":"M572.15,495.69L571.37,497.85L572.15,501.57L573.13,501.53L574.14,502.45L575.31,504.53L575.55,508.25L574.34,508.86L573.48,510.87L571.65,509.08L571.45,507.04L572.04,505.69L571.87,504.54L570.77,503.81L569.99,504.07L568.38,502.69L566.91,501.95L567.76,499.29L568.64,498.3L568.1,495.94L568.66,493.64L569.14,492.87L568.43,490.47L567.11,489.21L569.85,489.73L570.42,490.51L571.37,491.83z"
				},
				{
					"id":"MX",
					"title":"Mexico",
					"d":"M202.89,388.72L201.8,391.43L201.31,393.64L201.1,397.72L200.83,399.19L201.32,400.83L202.19,402.3L202.75,404.61L204.61,406.82L205.26,408.51L206.36,409.96L209.34,410.75L210.5,411.97L212.96,411.15L215.09,410.86L217.19,410.33L218.96,409.82L220.74,408.62L221.41,406.89L221.64,404.4L222.13,403.53L224.02,402.74L226.99,402.05L229.47,402.15L231.17,401.9L231.84,402.53L231.75,403.97L230.24,405.74L229.58,407.55L230.09,408.06L229.67,409.34L228.97,411.63L228.26,410.88L227.67,410.93L227.14,410.97L226.14,412.74L225.63,412.39L225.29,412.53L225.31,412.96L222.72,412.93L220.1,412.93L220.1,414.58L218.83,414.58L219.87,415.56L220.91,416.23L221.22,416.86L221.68,417.04L221.6,418.02L218.01,418.03L216.66,420.39L217.05,420.93L216.73,421.61L216.66,422.45L213.49,419.34L212.04,418.4L209.75,417.64L208.19,417.85L205.93,418.94L204.52,419.23L202.54,418.47L200.44,417.91L197.82,416.58L195.72,416.17L192.54,414.82L190.2,413.42L189.49,412.64L187.92,412.47L185.05,411.54L183.88,410.2L180.87,408.53L179.47,406.66L178.8,405.21L179.73,404.92L179.44,404.07L180.09,403.3L180.1,402.26L179.16,400.92L178.9,399.72L177.96,398.2L175.49,395.18L172.67,392.79L171.31,390.88L168.9,389.62L168.39,388.86L168.82,386.94L167.39,386.21L165.73,384.69L165.03,382.5L163.52,382.24L161.9,380.58L160.58,379.03L160.46,378.03L158.95,375.61L157.96,373.13L158,371.88L155.97,370.59L155.04,370.73L153.44,369.83L152.99,371.16L153.45,372.72L153.72,375.15L154.69,376.48L156.77,378.69L157.23,379.44L157.66,379.66L158.02,380.76L158.52,380.71L159.09,382.75L159.94,383.55L160.53,384.66L162.3,386.26L163.23,389.15L164.06,390.5L164.84,391.94L164.99,393.56L166.34,393.66L167.47,395.05L168.49,396.41L168.42,396.95L167.24,398.06L166.74,398.05L166,396.2L164.17,394.47L162.15,392.99L160.71,392.21L160.8,389.96L160.38,388.28L159.04,387.32L157.11,385.93L156.74,386.33L156.04,385.51L154.31,384.76L152.66,382.93L152.86,382.69L154.01,382.87L155.05,381.69L155.16,380.26L153,377.99L151.36,377.1L150.32,375.09L149.28,372.97L147.98,370.36L146.84,367.4L150.03,367.15L153.59,366.79L153.33,367.43L157.56,369.04L163.96,371.35L169.54,371.32L171.76,371.32L171.76,369.97L176.62,369.97L177.64,371.14L179.08,372.17L180.74,373.6L181.67,375.29L182.37,377.05L183.82,378.02L186.15,378.98L187.91,376.45L190.21,376.39L192.18,377.67L193.59,379.85L194.56,381.71L196.21,383.51L196.83,385.7L197.62,387.17L199.8,388.13L201.79,388.81z"
				},
				{
					"id":"MY",
					"title":"Malaysia",
					"d":"M758.65,446.07l0.22,1.44l1.85,-0.33l0.92,-1.15l0.64,0.26l1.66,1.69l1.18,1.87l0.16,1.88l-0.3,1.27l0.27,0.96l0.21,1.65l0.99,0.77l1.1,2.46l-0.05,0.94l-1.99,0.19l-2.65,-2.06l-3.32,-2.21l-0.33,-1.42l-1.62,-1.87l-0.39,-2.31l-1.01,-1.52l0.31,-2.04l-0.62,-1.19l0.49,-0.5L758.65,446.07zM807.84,450.9l-2.06,0.95l-2.43,-0.47l-3.22,0l-0.97,3.17l-1.08,0.97l-1.44,3.88l-2.29,0.59l-2.65,-0.78l-1.34,0.24l-1.63,1.41l-1.79,-0.2l-1.81,0.57l-1.92,-1.57l-0.47,-1.86l2.05,0.96l2.17,-0.52l0.56,-2.36l1.2,-0.53l3.36,-0.6l2.01,-2.21l1.38,-1.77l1.28,1.45l0.59,-0.95l1.34,0.09l0.16,-1.78l0.13,-1.38l2.16,-1.95l1.41,-2.19l1.13,-0.01l1.44,1.42l0.13,1.22l1.85,0.78l2.34,0.84l-0.2,1.1l-1.88,0.14L807.84,450.9z"
				},
				{
					"id":"MZ",
					"title":"Mozambique",
					"d":"M572.15,495.69L574.26,495.46L577.63,496.26L578.37,495.9L580.32,495.83L581.32,494.98L583,495.02L586.06,493.92L588.29,492.28L588.75,493.55L588.63,496.38L588.98,498.88L589.09,503.36L589.58,504.76L588.75,506.83L587.66,508.84L585.87,510.64L583.31,511.75L580.15,513.16L576.98,516.31L575.9,516.85L573.94,518.94L572.79,519.63L572.55,521.75L573.88,524L574.43,525.76L574.47,526.66L574.96,526.51L574.88,529.47L574.43,530.88L575.09,531.4L574.67,532.67L573.5,533.76L571.19,534.8L567.82,536.46L566.59,537.61L566.83,538.91L567.54,539.12L567.3,540.76L565.18,540.74L564.94,539.36L564.52,537.97L564.28,536.86L564.78,533.43L564.05,531.26L562.71,527L565.66,523.59L566.4,521.44L566.83,521.17L567.14,519.43L566.69,518.55L566.81,516.35L567.36,514.31L567.35,510.62L565.9,509.68L564.56,509.47L563.96,508.75L562.66,508.14L560.32,508.2L560.14,507.12L559.87,505.07L568.38,502.69L569.99,504.07L570.77,503.81L571.87,504.54L572.04,505.69L571.45,507.04L571.65,509.08L573.48,510.87L574.34,508.86L575.55,508.25L575.31,504.53L574.14,502.45L573.13,501.53L572.15,501.57L571.37,497.85z"
				},
				{
					"id":"NA",
					"title":"Namibia",
					"d":"M521.08,546.54L519,544.15L517.9,541.85L517.28,538.82L516.59,536.57L515.65,531.85L515.59,528.22L515.23,526.58L514.14,525.34L512.69,522.87L511.22,519.3L510.61,517.45L508.32,514.58L508.15,512.33L509.5,511.78L511.18,511.28L513,511.37L514.67,512.69L515.09,512.48L526.46,512.36L528.4,513.76L535.19,514.17L540.34,512.98L542.64,512.31L544.46,512.48L545.56,513.14L545.59,513.38L544.01,514.04L543.15,514.05L541.37,515.2L540.29,513.99L535.97,515.02L533.88,515.11L533.8,525.68L531.04,525.79L531.04,534.65L531.03,546.17L528.53,547.8L527.03,548.03L525.26,547.43L524,547.2L523.53,545.84L522.42,544.97z"
				},
				{
					"id":"NC",
					"title":"New Caledonia",
					"d":"M940.08,523.48L942.38,525.34L943.83,526.72L942.77,527.45L941.22,526.63L939.22,525.28L937.41,523.69L935.56,521.59L935.17,520.58L936.37,520.63L937.95,521.64L939.18,522.65z"
				},
				{
					"id":"NE",
					"title":"Niger",
					"d":"M481.29,429.88L481.36,427.93L478.12,427.28L478.04,425.9L476.46,424.03L476.08,422.72L476.3,421.32L478.1,421.21L479.14,420.18L482.96,419.93L485.45,419.48L485.69,417.69L487.23,415.75L487.22,409L491.17,407.68L499.29,401.83L508.9,396.08L513.33,397.39L514.91,399.05L516.89,397.93L517.58,402.6L518.63,403.38L518.68,404.33L519.84,405.35L519.23,406.63L518.15,412.61L518.01,416.4L514.43,419.14L513.22,422.94L514.39,424L514.38,425.85L516.18,425.92L515.9,427.26L515.11,427.43L515.02,428.33L514.49,428.4L512.6,425.27L511.94,425.15L509.75,426.75L507.58,425.92L506.07,425.75L505.26,426.15L503.61,426.07L501.96,427.29L500.53,427.36L497.14,425.88L495.81,426.58L494.38,426.53L493.33,425.45L490.51,424.38L487.5,424.72L486.77,425.34L486.38,426.99L485.57,428.14L485.38,430.68L483.24,429.04L482.23,429.05z"
				},
				{
					"id":"NG",
					"title":"Nigeria",
					"d":"M499.09,450.08L496.18,451.08L495.11,450.94L494.03,451.56L491.79,451.5L490.29,449.75L489.37,447.73L487.38,445.89L485.27,445.92L482.8,445.92L482.96,441.39L482.89,439.6L483.42,437.83L484.28,436.96L485.64,435.21L485.35,434.45L485.9,433.31L485.27,431.63L485.38,430.68L485.57,428.14L486.38,426.99L486.77,425.34L487.5,424.72L490.51,424.38L493.33,425.45L494.38,426.53L495.81,426.58L497.14,425.88L500.53,427.36L501.96,427.29L503.61,426.07L505.26,426.15L506.07,425.75L507.58,425.92L509.75,426.75L511.94,425.15L512.6,425.27L514.49,428.4L515.02,428.33L516.13,429.47L515.82,429.98L515.67,430.93L513.31,433.13L512.57,434.94L512.17,436.41L511.58,437.04L511.01,439.01L509.51,440.17L509.08,441.59L508.45,442.73L508.19,443.89L506.26,444.84L504.69,443.69L503.62,443.73L501.95,445.37L501.14,445.4L499.81,448.1z"
				},
				{
					"id":"NI",
					"title":"Nicaragua",
					"d":"M234.93,432.31L233.96,431.41L232.65,430.26L232.03,429.3L230.85,428.41L229.44,427.12L229.75,426.68L230.22,427.11L230.43,426.9L231.3,426.79L231.65,426.13L232.06,426.11L232,424.7L232.66,424.63L233.25,424.65L233.85,423.89L234.68,424.47L234.97,424.11L235.48,423.77L236.46,422.98L236.51,422.38L236.78,422.41L237.14,421.72L237.43,421.64L237.91,422.08L238.47,422.21L239.09,421.84L239.8,421.84L240.77,421.46L241.16,421.07L242.12,421.13L241.88,421.41L241.74,422.05L242.02,423.1L241.38,424.08L241.08,425.23L240.98,426.5L241.14,427.23L241.21,428.52L240.78,428.8L240.52,430.02L240.71,430.77L240.13,431.5L240.27,432.26L240.69,432.73L240.02,433.33L239.2,433.14L238.73,432.56L237.84,432.32L237.2,432.69L235.35,431.94z"
				},
				{
					"id":"NL",
					"title":"Netherlands",
					"d":"M492.28,285.98L494.61,286.11L495.14,287.69L494.44,291.92L493.73,293.63L492.04,293.63L492.52,298.32L490.97,297.28L489.2,295.33L486.6,296.26L484.55,295.91L485.99,294.67L488.45,287.93z"
				},
				{
					"id":"NO",
					"title":"Norway",
					"d":"M554.23,175.61l8.77,6.24l-3.61,2.23l3.07,5.11l-4.77,3.19l-2.26,0.72l1.19,-5.59l-3.6,-3.25l-4.35,2.78l-1.38,5.85l-2.67,3.44l-3.01,-1.87l-3.66,0.38l-3.12,-4.15l-1.68,2.09l-1.74,0.32l-0.41,5.08l-5.28,-1.22l-0.74,4.22l-2.69,-0.03l-1.85,5.24l-2.8,7.87l-4.35,9.5l1.02,2.23l-0.98,2.55l-2.78,-0.11l-1.82,5.91l0.17,8.04l1.79,2.98l-0.93,6.73l-2.33,3.81l-1.24,3.15l-1.88,-3.35l-5.54,6.27l-3.74,1.24l-3.88,-2.71l-1,-5.86l-0.89,-13.26l2.58,-3.88l7.4,-5.18l5.54,-6.59l5.13,-9.3l6.74,-13.76l4.7,-5.67l7.71,-9.89l6.15,-3.59l4.61,0.44l4.27,-6.99l5.11,0.38L554.23,175.61z"
				},
				{
					"id":"NP",
					"title":"Nepal",
					"d":"M722.33,382.45L722.11,383.8L722.48,385.79L722.16,387.03L719.83,387.08L716.45,386.35L714.29,386.06L712.67,384.47L708.83,384.06L705.17,382.29L702.53,380.74L699.81,379.54L700.9,376.55L702.68,375.09L703.84,374.31L706.09,375.31L708.92,377.4L710.49,377.86L711.43,379.39L713.61,380.02L715.89,381.41L719.06,382.14z"
				},
				{
					"id":"NZ",
					"title":"New Zealand",
					"d":"M960.38,588.63l0.64,1.53l1.99,-1.5l0.81,1.57l0,1.57l-1.04,1.74l-1.83,2.8l-1.43,1.54l1.03,1.86l-2.16,0.05l-2.4,1.46l-0.75,2.57l-1.59,4.03l-2.2,1.8l-1.4,1.16l-2.58,-0.09l-1.82,-1.34l-3.05,-0.28l-0.47,-1.48l1.51,-2.96l3.53,-3.87l1.81,-0.73l2.01,-1.47l2.4,-2.01l1.68,-1.98l1.25,-2.81l1.06,-0.95l0.42,-2.07l1.97,-1.7L960.38,588.63zM964.84,571.61l2.03,3.67l0.06,-2.38l1.27,0.95l0.42,2.65l2.26,1.15l1.89,0.28l1.6,-1.35l1.42,0.41l-0.68,3.15l-0.85,2.09l-2.14,-0.07l-0.75,1.1l0.26,1.56l-0.41,0.68l-1.06,1.97l-1.39,2.53l-2.17,1.49l-0.48,-0.98l-1.17,-0.54l1.62,-3.04l-0.92,-2.01l-3.02,-1.45l0.08,-1.31l2.03,-1.25l0.47,-2.74l-0.13,-2.28l-1.14,-2.34l0.08,-0.61l-1.34,-1.43l-2.21,-3.04l-1.17,-2.41l1.04,-0.27l1.53,1.89l2.18,0.89L964.84,571.61z"
				},
				{
					"id":"OM",
					"title":"Oman",
					"d":"M640.29,403.18l-1.05,2.04l-1.27,-0.16l-0.58,0.71l-0.45,1.5l0.34,1.98l-0.26,0.36l-1.29,-0.01l-1.75,1.1l-0.27,1.43l-0.64,0.62l-1.74,-0.02l-1.1,0.74l0.01,1.18l-1.36,0.81l-1.55,-0.27l-1.88,0.98l-1.3,0.16l-0.92,-2.04l-2.19,-4.84l8.41,-2.96l1.87,-5.97l-1.29,-2.14l0.07,-1.22l0.82,-1.26l0.01,-1.25l1.27,-0.6l-0.5,-0.42l0.23,-2l1.43,-0.01l1.26,2.09l1.57,1.11l2.06,0.4l1.66,0.55l1.27,1.74l0.76,1l1,0.38l-0.01,0.67l-1.02,1.79l-0.45,0.84L640.29,403.18zM633.37,388.64L633,389.2l-0.53,-1.06l0.82,-1.06l0.35,0.27L633.37,388.64z"
				},
				{
					"id":"PA",
					"title":"Panama",
					"d":"M256.88,443.21L255.95,442.4L255.35,440.88L256.04,440.13L255.33,439.94L254.81,439.01L253.41,438.23L252.18,438.41L251.62,439.39L250.48,440.09L249.87,440.19L249.6,440.78L250.93,442.3L250.17,442.66L249.76,443.08L248.46,443.22L247.97,441.54L247.61,442.02L246.68,441.86L246.12,440.72L244.97,440.54L244.24,440.21L243.04,440.21L242.95,440.82L242.63,440.4L242.78,439.84L243.01,439.27L242.9,438.76L243.32,438.42L242.74,438L242.72,436.87L243.81,436.62L244.81,437.63L244.75,438.23L245.87,438.35L246.14,438.12L246.91,438.82L248.29,438.61L249.48,437.9L251.18,437.33L252.14,436.49L253.69,436.65L253.58,436.93L255.15,437.03L256.4,437.52L257.31,438.36L258.37,439.14L258.03,439.56L258.68,441.21L258.15,442.05L257.24,441.85z"
				},
				{
					"id":"PE",
					"title":"Peru",
					"d":"M280.13,513.14L279.38,514.65L277.94,515.39L275.13,513.71L274.88,512.51L269.33,509.59L264.3,506.42L262.13,504.64L260.97,502.27L261.43,501.44L259.06,497.69L256.29,492.45L253.65,486.83L252.5,485.54L251.62,483.48L249.44,481.64L247.44,480.51L248.35,479.26L246.99,476.59L247.86,474.64L250.1,472.87L250.43,474.04L249.63,474.7L249.7,475.72L250.86,475.5L252,475.8L253.17,477.21L254.76,476.06L255.29,474.18L257.01,471.75L260.38,470.65L263.44,467.73L264.31,465.92L263.92,463.81L264.67,463.54L266.53,464.86L267.42,466.18L268.72,466.9L270.37,469.82L272.46,470.17L274.01,469.43L275.02,469.91L276.7,469.67L278.85,470.98L277.04,473.82L277.88,473.88L279.28,475.37L276.75,475.24L276.38,475.66L274.08,476.19L270.88,478.1L270.67,479.4L269.96,480.38L270.24,481.89L268.54,482.7L268.54,483.89L267.8,484.4L268.97,486.93L270.53,488.65L269.94,489.86L271.8,490.02L272.86,491.53L275.33,491.6L277.63,489.94L277.44,494.24L278.72,494.57L280.3,494.08L282.73,498.66L282.12,499.62L281.99,501.64L281.93,504.08L280.83,505.52L281.34,506.59L280.69,507.56L281.9,510z"
				},
				{
					"id":"PG",
					"title":"Papua New Guinea",
					"d":"M912.32,482.42l-0.79,0.28l-1.21,-1.08l-1.23,-1.78l-0.6,-2.13l0.39,-0.27l0.3,0.83l0.85,0.63l1.36,1.77l1.32,0.95L912.32,482.42zM901.39,478.67l-1.47,0.23l-0.44,0.79l-1.53,0.68l-1.44,0.66l-1.49,0l-2.3,-0.81l-1.6,-0.78l0.23,-0.87l2.51,0.41l1.53,-0.22l0.42,-1.34l0.4,-0.07l0.27,1.49l1.6,-0.21l0.79,-0.96l1.57,-1l-0.31,-1.65l1.68,-0.05l0.57,0.46l-0.06,1.55L901.39,478.67zM887.96,484.02l2.5,1.84l1.82,2.99l1.61,-0.09l-0.11,1.25l2.17,0.48l-0.84,0.53l2.98,1.19l-0.31,0.82l-1.86,0.2l-0.69,-0.73l-2.41,-0.32l-2.83,-0.43l-2.18,-1.8l-1.59,-1.55l-1.46,-2.46l-3.66,-1.23l-2.38,0.8l-1.71,0.93l0.36,2.08l-2.2,0.97l-1.57,-0.47l-2.9,-0.12l-0.05,-9.16l-0.05,-9.1l4.87,1.92l5.18,1.6l1.93,1.43l1.56,1.41l0.43,1.65l4.67,1.73l0.68,1.49l-2.58,0.3L887.96,484.02zM904.63,475.93l-0.88,0.74l-0.53,-1.65l-0.65,-1.08l-1.27,-0.91l-1.6,-1.19l-2.02,-0.82l0.78,-0.67l1.51,0.78l0.95,0.61l1.18,0.67l1.12,1.17l1.07,0.89L904.63,475.93z"
				},
				{
					"id":"PH",
					"title":"Philippines",
					"d":"M829.59,439.86l0.29,1.87l0.17,1.58l-0.96,2.57l-1.02,-2.86l-1.31,1.42l0.9,2.06l-0.8,1.31l-3.3,-1.63l-0.79,-2.03l0.86,-1.33l-1.78,-1.33l-0.88,1.17l-1.32,-0.11l-2.08,1.57l-0.46,-0.82l1.1,-2.37l1.77,-0.79l1.53,-1.06l0.99,1.27l2.13,-0.77l0.46,-1.26l1.98,-0.08l-0.17,-2.18l2.27,1.34l0.24,1.42L829.59,439.86zM822.88,434.6l-1.01,0.93l-0.88,1.79l-0.88,0.84l-1.73,-1.95l0.58,-0.76l0.7,-0.79l0.31,-1.76l1.55,-0.17l-0.45,1.91l2.08,-2.74L822.88,434.6zM807.52,437.32l-3.73,2.67l1.38,-1.97l2.03,-1.74l1.68,-1.96l1.47,-2.82l0.5,2.31l-1.85,1.56L807.52,437.32zM817,430.02l1.68,0.88l1.78,0l-0.05,1.19l-1.3,1.2l-1.78,0.85l-0.1,-1.32l0.2,-1.45L817,430.02zM827.14,429.25l0.79,3.18l-2.16,-0.75l0.06,0.95l0.69,1.75l-1.33,0.63l-0.12,-1.99l-0.84,-0.15l-0.44,-1.72l1.65,0.23l-0.04,-1.08l-1.71,-2.18l2.69,0.06L827.14,429.25zM816,426.66l-0.74,2.47l-1.2,-1.42l-1.43,-2.18l2.4,0.1L816,426.66zM815.42,410.92l1.73,0.84l0.86,-0.76l0.25,0.75l-0.46,1.22l0.96,2.09l-0.74,2.42l-1.65,0.96l-0.44,2.33l0.63,2.29l1.49,0.32l1.24,-0.34l3.5,1.59l-0.27,1.56l0.92,0.69l-0.29,1.32l-2.18,-1.4l-1.04,-1.5l-0.72,1.05l-1.79,-1.72l-2.55,0.42l-1.4,-0.63l0.14,-1.19l0.88,-0.73l-0.84,-0.67l-0.36,1.04l-1.38,-1.65l-0.42,-1.26l-0.1,-2.77l1.13,0.96l0.29,-4.55l0.91,-2.66L815.42,410.92z"
				},
				{
					"id":"PL",
					"title":"Poland",
					"d":"M517.36,296.97L516.21,294.11L516.43,292.55L515.73,290.1L514.72,288.45L515.5,287.2L514.84,284.81L516.76,283.42L521.13,281.2L524.67,279.56L527.46,280.38L527.67,281.56L530.38,281.62L533.83,282.17L538.99,282.09L540.43,282.61L541.1,284.07L541.22,286.16L542,287.94L541.98,289.79L540.3,290.73L541.17,292.85L541.22,294.86L542.63,298.75L542.33,299.99L540.94,300.5L538.39,304.11L539.11,306.03L538.5,305.78L535.84,304.14L533.82,304.74L532.5,304.3L530.84,305.22L529.43,303.7L528.27,304.28L528.11,304.02L526.82,301.89L524.74,301.63L524.47,300.26L522.55,299.77L522.13,300.9L520.61,300L520.78,298.79L518.69,298.4z"
				},
				{
					"id":"PK",
					"title":"Pakistan",
					"d":"M685.99,351.76L688.06,353.39L688.89,356.05L693.5,357.44L690.79,360.3L687.67,360.81L683.41,359.98L682.04,361.44L683.03,364.39L684,366.64L686.27,368.27L683.88,370.18L683.92,372.51L681.2,375.75L679.44,379.01L676.51,382.33L673.25,382.09L670.16,385.39L672,386.79L672.32,389.18L673.89,390.74L674.45,393.38L668.28,393.37L666.41,395.41L664.36,394.64L663.52,392.44L661.35,390.1L656.19,390.68L651.63,390.73L647.68,391.17L648.74,387.57L652.78,385.96L652.55,384.52L651.21,384.01L651.13,381.24L648.45,379.84L647.32,377.91L645.94,376.23L650.63,377.87L653.44,377.39L655.11,377.79L655.68,377.09L657.63,377.37L661.28,376.04L661.38,373.29L662.94,371.45L665.03,371.45L665.33,370.54L667.48,370.11L668.51,370.41L669.61,369.49L669.46,367.51L670.65,365.51L672.43,364.66L671.33,362.44L674,362.55L674.77,361.33L674.65,360.03L676.05,358.6L675.72,356.9L675.06,355.44L676.7,353.93L679.71,353.2L682.93,352.8L684.35,352.15z"
				},
				{
					"id":"PR",
					"title":"Puerto Rico",
					"d":"M289.41,410.89L290.84,411.15L291.35,411.73L290.63,412.47L288.52,412.45L286.88,412.55L286.72,411.3L287.11,410.87z"
				},
				{
					"id":"PS",
					"title":"Palestinian Territories",
					"d":"M574.92,367.87L574.92,369.88L574.5,370.84L573.18,371.29L573.31,370.43L574.02,369.97L573.32,369.61L573.9,367.41z"
				},
				{
					"id":"PT",
					"title":"Portugal",
					"d":"M449.92,334.56L450.94,333.61L452.08,333.06L452.79,334.9L454.44,334.89L454.92,334.42L456.56,334.55L457.34,336.43L456.04,337.43L456.01,340.31L455.55,340.84L455.44,342.56L454.23,342.86L455.35,345.03L454.58,347.38L455.54,348.44L455.16,349.4L454.12,350.72L454.35,351.88L453.23,352.79L451.75,352.3L450.3,352.68L450.73,349.94L450.47,347.76L449.21,347.43L448.54,346.08L448.77,343.72L449.88,342.41L450.08,340.94L450.67,338.73L450.6,337.16L450.04,335.82z"
				},
				{
					"id":"PY",
					"title":"Paraguay",
					"d":"M299.49,526.99L300.6,523.4L300.67,521.8L302.01,519.18L306.9,518.32L309.5,518.37L312.12,519.88L312.16,520.79L312.99,522.45L312.81,526.51L315.77,527.09L316.91,526.5L318.8,527.32L319.33,528.22L319.59,530.99L319.92,532.17L320.96,532.3L322.01,531.81L323.02,532.36L323.02,534.04L322.64,535.86L322.09,537.64L321.63,540.39L319.09,542.79L316.87,543.29L313.72,542.81L310.9,541.96L313.66,537.23L313.25,535.86L310.37,534.66L306.94,532.4L304.65,531.94z"
				},
				{
					"id":"QA",
					"title":"Qatar",
					"d":"M617.72,392.16L617.53,389.92L618.29,388.3L619.05,387.96L619.9,388.93L619.95,390.74L619.34,392.55L618.56,392.77z"
				},
				{
					"id":"RO",
					"title":"Romania",
					"d":"M538.93,310.86L540.14,309.97L541.88,310.43L543.67,310.45L544.97,311.46L545.93,310.82L548,310.42L548.71,309.44L549.89,309.45L550.74,309.85L551.61,311.09L552.5,312.84L554.12,315.28L554.21,317.07L553.91,318.79L554.42,320.62L555.67,321.35L556.98,320.71L558.26,321.39L558.32,322.42L556.96,323.26L556.11,322.9L555.33,327.61L553.68,327.2L551.64,325.79L548.34,326.69L546.95,327.68L542.83,327.48L540.67,326.87L539.59,327.16L538.78,325.56L538.27,324.88L538.92,324.22L538.22,323.73L537.34,324.61L535.71,323.47L535.49,321.84L533.78,320.9L533.47,319.63L531.95,318.05L534.2,317.29L535.89,314.53L537.22,311.73z"
				},
				{
					"id":"RS",
					"title":"Serbia",
					"d":"M533.78,320.9L535.49,321.84L535.71,323.47L537.34,324.61L538.22,323.73L538.92,324.22L538.27,324.88L538.78,325.56L538.09,326.44L538.34,327.86L539.7,329.52L538.63,330.71L538.16,331.92L538.47,332.37L538,332.91L536.71,332.97L535.75,333.19L535.66,332.91L535.99,332.46L536.31,331.53L535.91,331.55L535.36,330.85L534.9,330.67L534.54,330.06L534.01,329.82L533.61,329.28L533.11,329.5L532.72,330.76L532.05,331.04L532.28,330.71L531.21,329.92L530.29,329.51L529.88,328.97L529.14,328.31L529.8,328.14L530.21,326.32L528.86,324.82L529.56,323.1L528.54,323.11L529.62,321.62L528.73,320.48L528.05,318.93L530.2,317.88L531.95,318.05L533.47,319.63z"
				},
				{
					"id":"RU",
					"title":"Russia",
					"d":"M1008.27,215.75l-2.78,2.97l-4.6,0.7l-0.07,6.46l-1.12,1.35l-2.63,-0.19l-2.14,-2.26l-3.73,-1.92l-0.63,-2.89l-2.85,-1.1l-3.19,0.87l-1.52,-2.37l0.61,-2.55l-3.36,1.64l1.26,3.19l-1.59,2.83l-0.02,0.04l-3.6,2.89l-3.63,-0.48l2.53,3.44l1.67,5.2l1.29,1.67l0.33,2.53l-0.72,1.6l-5.23,-1.32l-7.84,4.51l-2.49,0.69l-4.29,4.1l-4.07,3.5l-1.03,2.55l-4.01,-3.9l-7.31,4.42l-1.28,-2.08l-2.7,2.39l-3.75,-0.76l-0.9,3.63l-3.36,5.22l0.1,2.14l3.19,1.17l-0.38,7.46l-2.6,0.19l-1.2,4.15l1.17,2.1l-4.9,2.47l-0.97,5.4l-4.18,1.14l-0.84,4.66l-4.04,4.18l-1.04,-3.08l-1.2,-6.69l-1.56,-10.65l1.35,-6.95l2.37,-3.07l0.15,-2.44l4.36,-1.18l5.01,-6.78l4.83,-5.73l5.04,-4.57l2.25,-8.37l-3.41,0.51l-1.68,4.92l-7.11,6.36l-2.3,-7.14l-7.24,2l-7.02,9.56l2.32,3.38l-6.26,1.42l-4.33,0.56l0.2,-3.95l-4.36,-0.84l-3.47,2.7l-8.57,-0.94l-9.22,1.62l-9.08,10.33l-10.75,11.78l4.42,0.61l1.38,3l2.72,1.05l1.79,-2.38l3.08,0.31l4.05,5.19l0.09,3.92l-2.19,4.51l-0.24,5.27l-1.26,6.85l-4.23,6.01l-0.94,2.82l-3.81,4.66l-3.78,4.53l-1.81,2.28l-3.74,2.25l-1.77,0.05l-1.76,-1.86l-3.76,2.79l-0.44,1.26l-0.39,-0.66l-0.02,-1.93l1.43,-0.1l0.4,-4.55l-0.74,-3.36l2.41,-1.4l3.4,0.7l1.89,-3.89l0.96,-4.46l1.09,-1.51l1.47,-3.76l-4.63,1.24l-2.43,1.65l-4.26,0l-1.13,-3.95l-3.32,-3.03l-4.88,-1.38l-1.04,-4.28l-0.98,-2.73l-1.05,-1.94l-1.73,-4.61l-2.46,-1.71l-4.2,-1.39l-3.72,0.13l-3.48,0.84l-2.32,2.31l1.54,1.1l0.04,2.52l-1.56,1.45l-2.53,4.72l0.03,1.93l-3.95,2.74l-3.37,-1.63l-3.35,0.36l-1.47,-1.46l-1.68,-0.47l-4.11,3.06l-3.69,0.71l-2.58,1.06l-3.53,-0.7l-2.6,0.04l-1.7,-2.2l-2.75,-2.09l-2.81,-0.58l-3.55,0.57l-2.65,0.81l-3.98,-1.84l-0.53,-3.32l-3.3,-1.15l-2.54,-0.53l-3.14,-1.87l-2.9,4.66l1.14,2.6l-2.73,3.03l-4.05,-1.09l-2.8,-0.16l-1.87,-2.04l-2.92,-0.06l-2.44,-1.35l-4.26,2.07l-5.35,3.74l-2.96,0.74l-1.1,0.35l-1.49,-2.63l-3.61,0.58l-1.19,-1.84l-1.96,-0.85l-1.35,-2.55l-1.55,-0.8l-4.03,1.14l-3.86,-2.57l-1.49,2.33l-6.27,-11.58l-3.58,-3.66l1.03,-1.5l-7.03,4.49l-2.69,0.27l0.23,-2.58l-3.6,-1.63l-2.93,1.17l-0.88,-5.01l-5.04,-1.06l-2.52,2.03l-7.02,1.79l-1.37,1.19l-10.49,1.66l-1.29,1.62l2.02,3.21l-2.69,1.2l0.53,1.25l-2.69,2.22l4.54,3.1l-0.7,2.11l-3.94,-0.19l-0.81,1.31l-3.59,-2.29l-4.45,0.09l-2.98,1.87l-3.32,-1.79l-6.18,-3.1l-4.38,0.12l-5.79,4.85l-0.35,3.19l-2.88,-2.53l-2.24,4.77l0.82,0.87l-1.62,3.21l2.38,2.84l2.08,-0.12l1.79,2.76l-0.28,2.1l1.42,0.66l-1.28,2.39l-2.72,0.66l-2.79,4.09l2.55,3.7l-0.28,2.59l3.06,4.46l-1.67,1.51l-0.48,0.95l-1.24,-0.25l-1.93,-2.27l-0.79,-0.13l-1.76,-0.87l-0.86,-1.55l-2.62,-0.79l-1.7,0.6l-0.49,-0.71l-3.82,-1.83l-4.13,-0.62l-2.37,-0.66l-0.34,0.45l-3.57,-3.27l-3.2,-1.48l-2.42,-2.32l2.04,-0.64l2.33,-3.35l-1.57,-1.6l4.13,-1.67l-0.07,-0.9l-2.52,0.66l0.09,-1.83l1.45,-1.16l2.71,-0.31l0.44,-1.4l-0.62,-2.33l1.14,-2.23l-0.03,-1.26l-4.13,-1.41l-1.64,0.05l-1.73,-2.04l-2.15,0.69l-3.56,-1.54l0.06,-0.87l-1,-1.93l-2.24,-0.22l-0.23,-1.39l0.7,-0.91l-1.79,-2.58l-2.91,0.44l-0.85,-0.23l-0.71,1.04l-1.05,-0.18l-0.69,-2.94l-0.66,-1.54l0.54,-0.44l2.26,0.16l1.09,-1.02l-0.81,-1.25l-1.89,-0.83l0.17,-0.86l-1.14,-0.87l-1.76,-3.15l0.6,-1.31l-0.27,-2.31l-2.74,-1.18l-1.47,0.59l-0.4,-1.24l-2.95,-1.26l-0.9,-2.99l-0.24,-2.49l-1.35,-1.19l1.2,-1.66l-0.83,-4.96l2,-3.13l-0.42,-0.96l3.19,-3.07l-2.94,-2.68l6,-7.41l2.6,-3.45l1.05,-3.1l-4.15,-4.26l1.15,-4.15l-2.52,-4.85l1.89,-5.76l-3.26,-7.96l2.59,-5.48l-4.29,-4.99l0.41,-5.4l2.26,-0.72l4.77,-3.19l2.89,-2.81l4.61,4.86l7.68,1.88l10.59,8.65l2.15,3.51l0.19,4.8l-3.11,3.69l-4.58,1.85l-12.52,-5.31l-2.06,0.9l4.57,5.1l0.18,3.15l0.18,6.75l3.61,1.97l2.19,1.66l0.36,-3.11l-1.69,-2.8l1.78,-2.51l6.78,4.1l2.36,-1.59l-1.89,-4.88l6.53,-6.74l2.59,0.4l2.62,2.43l1.63,-4.81l-2.34,-4.28l1.37,-4.41l-2.06,-4.69l7.84,2.44l1.6,4.18l-3.55,0.91l0.02,4.04l2.21,2.44l4.33,-1.54l0.69,-4.61l5.86,-3.52l9.79,-6.54l2.11,0.38l-2.76,4.64l3.48,0.78l2.01,-2.58l5.25,-0.21l4.16,-3.19l3.2,4.62l3.19,-5.09l-2.94,-4.58l1.46,-2.66l8.28,2.44l3.88,2.49l10.16,8.8l1.88,-3.97l-2.85,-4.11l-0.08,-1.68l-3.38,-0.78l0.92,-3.83l-1.5,-6.49l-0.08,-2.74l5.17,-7.99l1.84,-8.42l2.08,-1.88l7.42,2.51l0.58,5.18l-2.66,7.28l1.74,2.78l0.9,5.94l-0.64,11.07l3.09,4.73l-1.2,5.01l-5.49,10.2l3.21,1.02l1.12,-2.51l3.08,-1.82l0.74,-3.55l2.43,-3.49l-1.63,-4.26l1.31,-5.08l-3.07,-0.64l-0.67,-4.42l2.24,-8.28l-3.64,-7.03l5.02,-6.04l-0.65,-6.62l1.4,-0.22l1.47,5.19l-1.11,8.67l3,1.59l-1.28,-6.37l4.69,-3.58l5.82,-0.49l5.18,5.18l-2.49,-7.62l-0.28,-10.28l4.88,-2.02l6.74,0.44l6.08,-1.32l-2.28,-5.38l3.25,-7.02l3.22,-0.3l5.45,-5.51l7.4,-1.51l0.94,-3.15l7.36,-1.08l2.29,2.61l6.29,-6.24l5.15,0.2l0.77,-5.24l2.68,-5.33l6.62,-5.31l4.81,4.21l-3.82,3.13l6.35,1.92l0.76,6.03l2.56,-2.94l8.2,0.16l6.32,5.84l2.25,4.35l-0.7,5.85l-3.1,3.24l-7.37,5.92l-2.11,3.08l3.48,1.43l4.15,2.55l2.52,-1.91l1.43,6.39l1.23,-2.56l4.48,-1.57l9,1.65l0.68,4.58l11.72,1.43l0.16,-7.47l5.95,1.74l4.48,-0.05l4.53,5.14l1.29,6.04l-1.66,3.84l3.52,6.98l4.41,3.49l2.71,-9.18l4.5,4l4.78,-2.38l5.43,2.72l2.07,-2.47l4.59,1.24l-2.02,-8.4l3.7,-4.07l25.32,6.06l2.39,5.35l7.34,6.65l11.32,-1.62l5.58,1.41l2.33,3.5l-0.34,6.02l3.45,2.29l3.75,-1.64l4.97,-0.21l5.29,1.57l5.31,-0.89l4.88,6.99l3.47,-2.48l-2.27,-5.07l1.25,-3.62l8.95,2.29l5.83,-0.49l8.06,3.84l3.92,3.44l6.87,5.86l7.35,7.34l-0.24,4.44l1.89,1.74l-0.65,-5.15l7.61,1.07L1008.27,215.75zM880.84,306.25l-2.82,-7.68l-1.16,-4.51l0.07,-4.5l-0.97,-4.5l-0.73,-3.15l-1.25,0.67l1.11,2.21l-2.59,2.17l-0.25,6.3l1.64,4.41l-0.12,5.85l-0.65,3.24l0.32,4.54l-0.31,4.01l0.52,3.4l1.84,-3.13l2.13,2.44l0.08,-2.84l-2.73,-4.23l1.72,-6.11L880.84,306.25zM537.82,278.77l-2.94,-0.86l-3.87,1.58l-0.64,2.13l3.45,0.55l5.16,-0.07l-0.22,-1.23l0.3,-1.33L537.82,278.77zM979.95,178.65l3.66,-0.52l2.89,-2.06l0.24,-1.19l-4.06,-2.51l-2.38,-0.02l-0.36,0.37l-3.57,3.64l0.5,2.73L979.95,178.65zM870.07,151.56l-2.66,3.92l0.49,0.52l5.75,1.08l4.25,-0.07l-0.34,-2.57l-3.98,-3.81L870.07,151.56zM894.64,142.03l3.24,-4.25l-7.04,-2.88l-5.23,-1.68l-0.67,3.59l5.21,4.27L894.64,142.03zM869.51,140.34l10.33,0.3l2.21,-8.14l-10.13,-6.07l-7.4,-0.51l-3.7,2.18l-1.51,7.75l5.55,7.01L869.51,140.34zM622.39,166.28l-2.87,1.96l0.41,4.83l5.08,2.35l0.74,3.82l9.16,1.1l1.66,-0.74l-5.36,-7.11l-0.57,-7.52l4.39,-9.14l4.18,-9.82l8.71,-10.17l8.56,-5.34l9.93,-5.74l1.88,-3.71l-1.95,-4.83l-5.46,1.6l-4.8,4.49l-9.33,2.22l-9.26,7.41l-6.27,5.85l0.76,4.87l-6.71,9.03l2.58,1.22l-5.56,8.27L622.39,166.28zM769.87,98.34l0.83,-5.72l-7.11,-8.34l-2.11,-0.98l-2.3,1.7l-5.12,18.6L769.87,98.34zM605.64,69.03l3.04,3.88l3.28,-2.69l0.39,-2.72l2.52,-1.27l3.76,-2.23l1.08,-2.62l-4.16,-3.85l-2.64,2.9l-1.61,4.12l-0.57,-4.65l-4.26,0.21L601,63.25l6.24,0.52L605.64,69.03zM736.89,82.07l4.65,5.73l7.81,4.2l6.12,-1.8l0.69,-13.62l-6.46,-16.04l-5.45,-9.02l-6.07,4.11l-7.28,11.83l3.83,3.27L736.89,82.07z"
				},
				{
					"id":"RW",
					"title":"Rwanda",
					"d":"M560.54,466.55L561.66,468.12L561.49,469.76L560.69,470.11L559.2,469.93L558.34,471.52L556.63,471.3L556.89,469.77L557.28,469.56L557.38,467.9L558.19,467.12L558.87,467.41z"
				},
				{
					"id":"SA",
					"title":"Saudi Arabia",
					"d":"M595.2,417.22L594.84,415.98L593.99,415.1L593.77,413.93L592.33,412.89L590.83,410.43L590.04,408.02L588.1,405.98L586.85,405.5L584.99,402.65L584.67,400.57L584.79,398.78L583.18,395.42L581.87,394.23L580.35,393.6L579.43,391.84L579.58,391.15L578.8,389.55L577.98,388.86L576.89,386.54L575.18,384.02L573.75,381.86L572.36,381.87L572.79,380.13L572.92,379.02L573.26,377.74L576.38,378.25L577.6,377.27L578.27,376.11L580.41,375.67L580.87,374.58L581.8,374.04L579,370.78L584.62,369.13L585.15,368.64L588.53,369.53L592.71,371.82L600.61,378.31L605.82,378.57L608.32,378.88L609.02,380.39L611,380.31L612.1,383.04L613.48,383.75L613.96,384.86L615.87,386.17L616.04,387.46L615.76,388.49L616.12,389.53L616.92,390.4L617.3,391.41L617.72,392.16L618.56,392.77L619.34,392.55L619.87,393.72L619.98,394.43L621.06,397.51L629.48,399.03L630.05,398.39L631.33,400.53L629.46,406.5L621.05,409.46L612.97,410.59L610.35,411.91L608.34,414.98L607.03,415.46L606.33,414.49L605.26,414.64L602.55,414.35L602.03,414.05L598.8,414.12L598.04,414.39L596.89,413.63L596.14,415.06L596.43,416.29z"
				},
				{
					"id":"SB",
					"title":"Solomon Islands",
					"d":"M929.81,492.75l0.78,0.97l-1.96,-0.02l-1.07,-1.74l1.67,0.69L929.81,492.75zM926.26,491.02l-1.09,0.06l-1.72,-0.29l-0.59,-0.44l0.18,-1.12l1.85,0.44l0.91,0.59L926.26,491.02zM928.58,490.25l-0.42,0.52l-2.08,-2.45l-0.58,-1.68h0.95l1.01,2.25L928.58,490.25zM923.52,486.69l0.12,0.57l-2.2,-1.19l-1.54,-1.01l-1.05,-0.94l0.42,-0.29l1.29,0.67l2.3,1.29L923.52,486.69zM916.97,483.91l-0.56,0.16l-1.23,-0.64l-1.15,-1.15l0.14,-0.47l1.67,1.18L916.97,483.91z"
				},
				{
					"id":"SD",
					"title":"Sudan",
					"d":"M570.48,436.9L570.09,436.85L570.14,435.44L569.8,434.47L568.36,433.35L568.02,431.3L568.36,429.2L567.06,429.01L566.87,429.64L565.18,429.79L565.86,430.62L566.1,432.33L564.56,433.89L563.16,435.93L561.72,436.22L559.36,434.57L558.3,435.15L558.01,435.98L556.57,436.51L556.47,437.09L553.68,437.09L553.29,436.51L551.27,436.41L550.26,436.9L549.49,436.65L548.05,435L547.57,434.23L545.54,434.62L544.77,435.93L544.05,438.45L543.09,438.98L542.23,439.29L542,439.15L541.03,438.34L540.85,437.47L541.3,436.29L541.3,435.14L539.68,433.37L539.36,432.15L539.39,431.46L538.36,430.63L538.33,428.97L537.75,427.87L536.76,428.04L537.04,426.99L537.77,425.79L537.45,424.61L538.37,423.73L537.79,423.06L538.53,421.28L539.81,419.15L542.23,419.35L542.09,407.74L542.13,406.5L545.35,406.49L545.35,400.53L556.62,400.53L567.5,400.53L578.62,400.53L579.52,403.47L578.91,404.01L579.32,407.07L580.35,410.59L581.41,411.32L582.95,412.4L581.53,414.07L579.46,414.55L578.58,415.45L578.31,417.38L577.1,421.63L577.4,422.78L576.95,425.25L575.81,428.06L574.12,429.48L572.92,431.65L572.63,432.81L571.31,433.61L570.48,436.57z"
				},
				{
					"id":"SE",
					"title":"Sweden",
					"d":"M537.45,217.49L534.73,222.18L535.17,226.2L530.71,231.33L525.3,236.67L523.25,245.08L525.25,249.15L527.93,252.29L525.36,258.52L522.44,259.78L521.37,268.62L519.78,273.38L516.38,272.89L514.79,276.84L511.54,277.07L510.65,272.36L508.3,266.55L506.17,259.05L507.41,255.9L509.74,252.09L510.67,245.36L508.88,242.38L508.7,234.34L510.53,228.43L513.31,228.54L514.28,225.99L513.26,223.76L517.61,214.26L520.42,206.39L522.27,201.15L524.96,201.17L525.71,196.96L530.99,198.18L531.4,193.1L533.14,192.77L536.88,196.58L541.25,201.73L541.33,212.85L542.27,215.55z"
				},
				{
					"id":"SI",
					"title":"Slovenia",
					"d":"M513.96,316.51L516.28,316.82L517.7,315.9L520.15,315.8L520.68,315.11L521.15,315.16L521.7,316.53L519.47,317.61L519.19,319.23L518.22,319.64L518.23,320.76L517.13,320.68L516.18,320.03L515.66,320.71L513.71,320.57L514.33,320.21L513.66,318.5z"
				},
				{
					"id":"SJ",
					"title":"Svalbard and Jan Mayen",
					"d":"M544.58,104.49l-6.26,5.36l-4.95,-3.02l1.94,-3.42l-1.69,-4.34l5.81,-2.78l1.11,5.18L544.58,104.49zM526.43,77.81l9.23,11.29l-7.06,5.66l-1.56,10.09l-2.46,2.49l-1.33,10.51l-3.38,0.48l-6.03,-7.64l2.54,-4.62l-4.2,-3.86l-5.46,-11.82l-2.18,-11.79l7.64,-5.69l1.54,5.56l3.99,-0.22l1.06,-5.43l4.12,-0.56L526.43,77.81zM546.6,66.35l5.5,5.8l-4.16,8.52l-8.13,1.81l-8.27,-2.56l-0.5,-4.32l-4.02,-0.28l-3.07,-7.48l8.66,-4.72l4.07,4.08l2.84,-5.09L546.6,66.35z"
				},
				{
					"id":"SK",
					"title":"Slovakia",
					"d":"M528.11,304.02L528.27,304.28L529.43,303.7L530.84,305.22L532.5,304.3L533.82,304.74L535.84,304.14L538.5,305.78L537.73,306.89L537.18,308.6L536.58,309.03L533.58,307.75L532.66,308L532,309L530.68,309.52L530.38,309.25L529.02,309.9L527.9,310.03L527.68,310.87L525.32,311.38L524.29,310.92L522.86,309.85L522.58,308.4L522.81,307.86L523.2,306.93L524.45,307L525.4,306.56L525.48,306.17L526.02,305.96L526.2,304.99L526.84,304.8L527.28,304.03z"
				},
				{
					"id":"SL",
					"title":"Sierra Leone",
					"d":"M443.18,444.44L442.42,444.23L440.41,443.1L438.95,441.6L438.46,440.57L438.11,438.49L439.61,437.25L439.93,436.46L440.41,435.85L441.19,435.79L441.84,435.26L444.08,435.26L444.86,436.27L445.47,437.46L445.38,438.28L445.83,439.02L445.8,440.05L446.57,439.89L445.26,441.2L444,442.73L443.85,443.54z"
				},
				{
					"id":"SN",
					"title":"Senegal",
					"d":"M428.39,425.16L427.23,422.92L425.83,421.9L427.07,421.35L428.43,419.32L429.09,417.83L430.05,416.9L431.45,417.15L432.81,416.52L434.38,416.49L435.72,417.34L437.58,418.11L439.28,420.24L441.13,422.22L441.26,424.01L441.81,425.65L442.86,426.46L443.1,427.56L442.97,428.45L442.56,428.61L441.04,428.39L440.83,428.7L440.21,428.77L438.19,428.07L436.84,428.04L431.66,427.92L430.91,428.24L429.98,428.15L428.49,428.62L428.03,426.43L430.58,426.49L431.26,426.09L431.76,426.06L432.8,425.4L434,426.01L435.22,426.06L436.43,425.41L435.87,424.59L434.94,425.07L434.07,425.06L432.97,424.35L432.08,424.4L431.44,425.07z"
				},
				{
					"id":"SO",
					"title":"Somalia",
					"d":"M618.63,430.43L618.56,429.64L617.5,429.65L616.17,430.63L614.68,430.91L613.39,431.33L612.5,431.39L610.9,431.49L609.9,432.01L608.51,432.2L606.04,433.08L602.99,433.41L600.34,434.14L598.95,434.13L597.69,432.94L597.14,431.77L596.23,431.24L595.19,432.76L594.58,433.77L595.62,435.33L596.65,436.69L597.72,437.7L606.89,441.04L609.25,441.02L601.32,449.44L597.67,449.56L595.17,451.53L593.38,451.58L592.61,452.46L590.16,455.63L590.19,465.78L591.85,468.07L592.48,467.41L593.13,465.95L596.2,462.57L598.81,460.45L603.01,457.69L605.81,455.43L609.11,451.62L611.5,448.49L613.91,444.39L615.64,440.8L616.99,437.65L617.78,434.6L618.38,433.58L618.37,432.08z"
				},
				{
					"id":"SR",
					"title":"Suriname",
					"d":"M315.02,446.72L318.38,447.28L318.68,446.77L320.95,446.57L323.96,447.33L322.5,449.73L322.72,451.64L323.83,453.3L323.34,454.5L323.09,455.77L322.37,456.94L320.77,456.35L319.44,456.64L318.31,456.39L318.03,457.2L318.5,457.75L318.25,458.32L316.72,458.09L315.01,455.67L314.64,454.1L313.75,454.09L312.5,452.07L313.02,450.62L312.87,449.97L314.57,449.24z"
				},
				{
					"id":"SS",
					"title":"South Sudan",
					"d":"M570.48,436.9L570.51,439.1L570.09,439.96L568.61,440.03L567.65,441.64L569.37,441.84L570.79,443.21L571.29,444.33L572.57,444.98L574.22,448.03L572.32,449.87L570.6,451.54L568.87,452.82L566.9,452.82L564.64,453.47L562.86,452.84L561.71,453.61L559.24,451.75L558.57,450.56L557.01,451.15L555.71,450.96L554.96,451.43L553.7,451.1L552.01,448.79L551.56,447.9L549.46,446.79L548.75,445.11L547.58,443.9L545.7,442.44L545.67,441.52L544.14,440.39L542.23,439.29L543.09,438.98L544.05,438.45L544.77,435.93L545.54,434.62L547.57,434.23L548.05,435L549.49,436.65L550.26,436.9L551.27,436.41L553.29,436.51L553.68,437.09L556.47,437.09L556.57,436.51L558.01,435.98L558.3,435.15L559.36,434.57L561.72,436.22L563.16,435.93L564.56,433.89L566.1,432.33L565.86,430.62L565.18,429.79L566.87,429.64L567.06,429.01L568.36,429.2L568.02,431.3L568.36,433.35L569.8,434.47L570.14,435.44L570.09,436.85z"
				},
				{
					"id":"SV",
					"title":"El Salvador",
					"d":"M229.09,425.76L228.78,426.43L227.16,426.39L226.15,426.12L224.99,425.55L223.43,425.37L222.64,424.75L222.73,424.33L223.69,423.61L224.21,423.29L224.06,422.95L224.72,422.78L225.55,423.02L226.15,423.59L227,424.05L227.1,424.44L228.33,424.1L228.91,424.3L229.29,424.61z"
				},
				{
					"id":"SY",
					"title":"Syria",
					"d":"M584.02,364.6L578.53,368.14L575.41,366.82L575.35,366.8L575.73,366.3L575.69,364.93L576.38,363.1L577.91,361.83L577.45,360.51L576.19,360.33L575.93,357.72L576.61,356.31L577.36,355.56L578.11,354.8L578.27,352.86L579.18,353.54L582.27,352.57L583.76,353.22L586.07,353.21L589.29,351.9L590.81,351.96L594,351.42L592.56,353.6L591.02,354.46L591.29,356.98L590.23,361.1z"
				},
				{
					"id":"SZ",
					"title":"Swaziland",
					"d":"M565.18,540.74L564.61,542.13L562.97,542.46L561.29,540.77L561.27,539.69L562.03,538.52L562.3,537.62L563.11,537.4L564.52,537.97L564.94,539.36z"
				},
				{
					"id":"TD",
					"title":"Chad",
					"d":"M515.9,427.26L516.18,425.92L514.38,425.85L514.39,424L513.22,422.94L514.43,419.14L518.01,416.4L518.15,412.61L519.23,406.63L519.84,405.35L518.68,404.33L518.63,403.38L517.58,402.6L516.89,397.93L519.72,396.27L530.91,402.04L542.09,407.74L542.23,419.35L539.81,419.15L538.53,421.28L537.79,423.06L538.37,423.73L537.45,424.61L537.77,425.79L537.04,426.99L536.76,428.04L537.75,427.87L538.33,428.97L538.36,430.63L539.39,431.46L539.36,432.15L537.59,432.64L536.16,433.78L534.14,436.87L531.5,438.18L528.79,438L528,438.26L528.28,439.25L526.81,440.24L525.62,441.34L522.09,442.41L521.39,441.78L520.93,441.72L520.41,442.44L518.09,442.66L518.53,441.89L517.65,439.96L517.25,438.79L516.03,438.31L514.38,436.66L514.99,435.33L516.27,435.61L517.06,435.41L518.62,435.44L517.1,432.87L517.2,430.98L517.01,429.09z"
				},
				{
					"id":"TF",
					"title":"French Southern and Antarctic Lands",
					"d":"M668.54,619.03L670.34,620.36L672.99,620.9L673.09,621.71L672.31,623.67L668,623.95L667.93,621.66L668.35,619.9z"
				},
				{
					"id":"TG",
					"title":"Togo",
					"d":"M480.48,446.25L478.23,446.84L477.6,445.86L476.85,444.08L476.63,442.68L477.25,440.15L476.55,439.12L476.28,436.9L476.28,434.85L475.11,433.39L475.32,432.5L477.78,432.56L477.42,434.06L478.27,434.89L479.25,435.88L479.35,437.27L479.92,437.85L479.79,444.31z"
				},
				{
					"id":"TH",
					"title":"Thailand",
					"d":"M762.89,429.18L760.37,427.87L757.97,427.93L758.38,425.68L755.91,425.7L755.69,428.84L754.18,432.99L753.27,435.49L753.46,437.54L755.28,437.63L756.42,440.2L756.93,442.63L758.49,444.24L760.19,444.57L761.64,446.02L760.73,447.17L758.87,447.51L758.65,446.07L756.37,444.84L755.88,445.34L754.77,444.27L754.29,442.88L752.8,441.29L751.44,439.96L750.98,441.61L750.45,440.05L750.76,438.29L751.58,435.58L752.94,432.67L754.48,430.02L753.38,427.42L753.43,426.09L753.11,424.49L751.24,422.21L750.57,420.76L751.54,420.23L752.56,417.71L751.42,415.79L749.64,413.66L748.28,411.09L749.46,410.56L750.74,407.37L752.72,407.23L754.36,405.95L755.96,405.26L757.18,406.18L757.34,407.96L759.23,408.09L758.54,411.2L758.61,413.82L761.56,412.08L762.4,412.59L764.05,412.51L764.61,411.49L766.73,411.69L768.86,414.07L769.04,416.94L771.31,419.47L771.18,421.91L770.27,423.21L767.64,422.8L764.02,423.35L762.22,425.73z"
				},
				{
					"id":"TJ",
					"title":"Tajikistan",
					"d":"M674.37,340.62L673.34,341.75L670.29,341.14L670.02,343.24L673.06,342.96L676.53,344.13L681.83,343.58L682.54,346.91L683.46,346.55L685.16,347.36L685.07,348.74L685.49,350.75L682.59,350.75L680.66,350.49L678.92,352.06L677.67,352.4L676.69,353.14L675.58,351.99L675.85,349.04L675,348.87L675.3,347.78L673.79,346.98L672.58,348.21L672.28,349.64L671.85,350.16L670.17,350.09L669.27,351.69L668.32,351.02L666.29,352.14L665.44,351.72L667.01,348.15L666.41,345.49L664.35,344.63L665.08,343.04L667.42,343.21L668.75,341.2L669.64,338.85L673.39,337.99L672.81,339.7L673.21,340.72z"
				},
				{
					"id":"TL",
					"title":"Timor-Leste",
					"d":"M825.65,488.25L825.98,487.59L828.39,486.96L830.35,486.86L831.22,486.51L832.28,486.86L831.25,487.62L828.33,488.85L825.98,489.67L825.93,488.81z"
				},
				{
					"id":"TM",
					"title":"Turkmenistan",
					"d":"M646.88,356.9L646.63,353.99L644.54,353.87L641.34,350.78L639.1,350.39L636,348.6L634,348.27L632.77,348.93L630.9,348.83L628.91,350.85L626.44,351.53L625.92,349.04L626.33,345.31L624.14,344.09L624.86,341.61L623,341.39L623.62,338.3L626.26,339.21L628.73,338.02L626.68,335.79L625.88,333.65L623.62,334.61L623.34,337.34L622.46,334.93L623.7,333.68L626.88,332.89L628.78,333.95L630.74,336.88L632.18,336.7L635.34,336.65L634.88,334.77L637.28,333.47L639.64,331.27L643.42,333.27L643.72,336.26L644.79,337.03L647.82,336.86L648.76,337.53L650.14,341.32L653.35,343.83L655.18,345.52L658.11,347.27L661.84,348.79L661.76,350.95L660.92,350.84L659.59,349.9L659.15,351.15L656.79,351.83L656.23,354.62L654.65,355.67L652.44,356.19L651.85,357.74L649.74,358.2z"
				},
				{
					"id":"TN",
					"title":"Tunisia",
					"d":"M501.84,374.69L500.64,368.83L498.92,367.5L498.89,366.69L496.6,364.71L496.35,362.18L498.08,360.3L498.74,357.48L498.29,354.2L498.86,352.41L501.92,351L503.88,351.42L503.8,353.19L506.18,351.9L506.38,352.57L504.97,354.28L504.96,355.88L505.93,356.73L505.56,359.69L503.71,361.4L504.24,363.23L505.69,363.29L506.4,364.88L507.47,365.4L507.31,367.95L505.94,368.9L505.08,369.95L503.15,371.21L503.45,372.56L503.21,373.94z"
				},
				{
					"id":"TR",
					"title":"Turkey",
					"d":"M578.75,336.6l4.02,1.43l3.27,-0.57l2.41,0.33l3.31,-1.94l2.99,-0.18l2.7,1.83l0.48,1.3l-0.27,1.79l2.08,0.91l1.1,1.06l-1.92,1.03l0.88,4.11l-0.55,1.1l1.53,2.82l-1.34,0.59l-0.98,-0.89l-3.26,-0.45l-1.2,0.55l-3.19,0.54l-1.51,-0.06l-3.23,1.31l-2.31,0.01l-1.49,-0.66l-3.09,0.97l-0.92,-0.68l-0.15,1.94l-0.75,0.76l-0.75,0.76l-1.03,-1.57l1.06,-1.3l-1.71,0.3l-2.35,-0.8l-1.93,2l-4.26,0.39l-2.27,-1.86l-3.02,-0.12l-0.65,1.44l-1.94,0.41l-2.71,-1.85l-3.06,0.06l-1.66,-3.48l-2.05,-1.96l1.36,-2.78l-1.78,-1.72l3.11,-3.48l4.32,-0.15l1.18,-2.81l5.34,0.49l3.37,-2.42l3.27,-1.06l4.64,-0.08L578.75,336.6zM551.5,338.99l-2.34,1.98l-0.88,-1.71l0.04,-0.76l0.67,-0.41l0.87,-2.33l-1.37,-0.99l2.86,-1.18l2.41,0.5l0.33,1.44l2.45,1.2l-0.51,0.91l-3.33,0.2L551.5,338.99z"
				},
				{
					"id":"TT",
					"title":"Trinidad and Tobago",
					"d":"M302.31,433.24L303.92,432.87L304.51,432.97L304.4,435.08L302.06,435.39L301.55,435.14L302.37,434.36z"
				},
				{
					"id":"TW",
					"title":"Taiwan",
					"d":"M816.7,393.27L815.01,398.14L813.81,400.62L812.33,398.07L812.01,395.82L813.66,392.82L815.91,390.5L817.19,391.41z"
				},
				{
					"id":"TZ",
					"title":"Tanzania",
					"d":"M570.31,466.03L570.79,466.34L580.95,472.01L581.15,473.63L585.17,476.42L583.88,479.87L584.04,481.46L585.84,482.48L585.92,483.21L585.15,484.91L585.31,485.76L585.13,487.11L586.11,488.87L587.27,491.66L588.29,492.28L586.06,493.92L583,495.02L581.32,494.98L580.32,495.83L578.37,495.9L577.63,496.26L574.26,495.46L572.15,495.69L571.37,491.83L570.42,490.51L569.85,489.73L567.11,489.21L565.51,488.36L563.73,487.89L562.61,487.41L561.44,486.7L559.93,483.15L558.3,481.58L557.74,479.96L558.02,478.5L557.52,475.93L558.68,475.8L559.69,474.79L560.79,473.33L561.48,472.75L561.45,471.84L560.85,471.21L560.69,470.11L561.49,469.76L561.66,468.12L560.54,466.55L561.53,466.21L564.6,466.25z"
				},
				{
					"id":"UA",
					"title":"Ukraine",
					"d":"M564.38,292.49L565.42,292.68L566.13,291.64L566.98,291.87L569.89,291.43L571.68,294L570.98,294.92L571.21,296.31L573.45,296.52L574.45,298.45L574.39,299.32L577.95,300.86L580.1,300.17L581.83,302.21L583.47,302.17L587.6,303.57L587.63,304.84L586.5,307.07L587.11,309.4L586.67,310.79L583.96,311.1L582.52,312.26L582.43,314.09L580.19,314.42L578.32,315.74L575.7,315.95L573.28,317.47L571.96,318.5L573.45,319.97L574.82,320.93L577.68,320.69L577.13,322.11L574.06,322.79L570.25,325.06L568.7,324.27L569.31,322.42L566.25,321.26L566.75,320.49L569.91,318.86L569.51,318.05L569.06,318.46L568.62,318.24L564.26,317.22L564.07,315.71L561.47,316.21L560.43,318.44L558.26,321.39L556.98,320.71L555.67,321.35L554.42,320.62L555.12,320.18L555.61,318.81L556.38,317.52L556.18,316.8L556.77,316.48L557.04,317.04L558.7,317.15L559.44,316.86L558.92,316.44L559.11,315.84L558.13,314.8L557.73,313.08L556.71,312.41L556.91,311L555.64,309.88L554.49,309.72L552.42,308.41L550.56,308.83L549.89,309.45L548.71,309.44L548,310.42L545.93,310.82L544.98,311.46L543.67,310.45L541.88,310.43L540.14,309.97L538.93,310.86L538.73,309.74L537.18,308.6L537.73,306.89L538.5,305.79L539.12,306.03L538.39,304.11L540.94,300.5L542.33,299.99L542.63,298.75L541.22,294.86L542.56,294.69L544.1,293.46L546.27,293.36L549.1,293.72L552.23,294.8L554.44,294.89L555.49,295.54L556.54,294.76L557.28,295.81L559.81,295.59L560.92,296.02L561.11,293.76L561.97,292.76z"
				},
				{
					"id":"UG",
					"title":"Uganda",
					"d":"M564.6,466.25L561.53,466.21L560.54,466.55L558.87,467.41L558.19,467.12L558.21,465.02L558.86,463.96L559.02,461.72L559.61,460.43L560.68,458.97L561.76,458.23L562.66,457.24L561.54,456.87L561.71,453.61L562.86,452.84L564.64,453.47L566.9,452.82L568.87,452.82L570.6,451.54L571.93,453.48L572.26,454.88L573.49,458.08L572.47,460.11L571.09,461.95L570.29,463.08L570.31,466.03z"
				},
				{
					"id":"US",
					"title":"United States",
					"d":"M109.25,279.8L109.25,279.8l-1.54,-1.83l-2.47,-1.57l-0.79,-4.36l-3.61,-4.13l-1.51,-4.94l-2.69,-0.34l-4.46,-0.13l-3.29,-1.54l-5.8,-5.64l-2.68,-1.05l-4.9,-1.99l-3.88,0.48l-5.51,-2.59l-3.33,-2.43l-3.11,1.21l0.58,3.93l-1.55,0.36l-3.24,1.16l-2.47,1.86l-3.11,1.16l-0.4,-3.24l1.26,-5.53l2.98,-1.77l-0.77,-1.46l-3.57,3.22l-1.91,3.77l-4.04,3.95l2.05,2.65l-2.65,3.85l-3.01,2.21l-2.81,1.59l-0.69,2.29l-4.38,2.63l-0.89,2.36l-3.28,2.13l-1.92,-0.38l-2.62,1.38l-2.85,1.67l-2.33,1.63l-4.81,1.38l-0.44,-0.81l3.07,-2.27l2.74,-1.51l2.99,-2.71l3.48,-0.56l1.38,-2.06l3.89,-3.05l0.63,-1.03l2.07,-1.83l0.48,-4l1.43,-3.17l-3.23,1.64l-0.9,-0.93l-1.52,1.95l-1.83,-2.73l-0.76,1.94l-1.05,-2.7l-2.8,2.17l-1.72,0l-0.24,-3.23l0.51,-2.02l-1.81,-1.98l-3.65,1.07l-2.37,-2.63l-1.92,-1.36l-0.01,-3.25l-2.16,-2.48l1.08,-3.41l2.29,-3.37l1,-3.15l2.27,-0.45l1.92,0.99l2.26,-3.01l2.04,0.54l2.14,-1.96l-0.52,-2.92l-1.57,-1.16l2.08,-2.52l-1.72,0.07l-2.98,1.43l-0.85,1.43l-2.21,-1.43l-3.97,0.73l-4.11,-1.56l-1.18,-2.65l-3.55,-3.91l3.94,-2.87l6.25,-3.41h2.31l-0.38,3.48l5.92,-0.27l-2.28,-4.34l-3.45,-2.72l-1.99,-3.64l-2.69,-3.17l-3.85,-2.38l1.57,-4.03l4.97,-0.25l3.54,-3.58l0.67,-3.92l2.86,-3.91l2.73,-0.95l5.31,-3.76l2.58,0.57l4.31,-4.61l4.24,1.83l2.03,3.87l1.25,-1.65l4.74,0.51l-0.17,1.95l4.29,1.43l2.86,-0.84l5.91,2.64l5.39,0.78l2.16,1.07l3.73,-1.34l4.25,2.46l3.05,1.13l-0.02,27.65l-0.01,35.43l2.76,0.17l2.73,1.56l1.96,2.44l2.49,3.6l2.73,-3.05l2.81,-1.79l1.49,2.85l1.89,2.23l2.57,2.42l1.75,3.79l2.87,5.88l4.77,3.2l0.08,3.12L109.25,279.8zM285.18,314.23l-1.25,-1.19l-1.88,0.7l-0.93,-1.08l-2.14,3.1l-0.86,3.15l-1,1.82l-1.19,0.62l-0.9,0.2l-0.28,0.98l-5.17,0l-4.26,0.03l-1.27,0.73l-2.87,2.73l0.29,0.54l0.17,1.51l-2.1,1.27l-2.3,-0.32l-2.2,-0.14l-1.33,0.44l0.25,1.15l0,0l0.05,0.37l-2.42,2.27l-2.11,1.09l-1.44,0.51l-1.66,1.03l-2.03,0.5l-1.4,-0.19l-1.73,-0.77l0.96,-1.45l0.62,-1.32l1.32,-2.09l-0.14,-1.57l-0.5,-2.24l-1.04,-0.39l-1.74,1.7l-0.56,-0.03l-0.14,-0.97l1.54,-1.56l0.26,-1.79l-0.23,-1.79l-2.08,-1.55l-2.38,-0.8l-0.39,1.52l-0.62,0.4l-0.5,1.95l-0.26,-1.33l-1.12,0.95l-0.7,1.32l-0.73,1.92l-0.14,1.64l0.93,2.38l-0.08,2.51l-1.14,1.84l-0.57,0.52l-0.76,0.41l-0.95,0.02l-0.26,-0.25l-0.76,-1.98l-0.02,-0.98l0.08,-0.94l-0.35,-1.87l0.53,-2.18l0.63,-2.71l1.46,-3.03l-0.42,0.01l-2.06,2.54l-0.38,-0.46l1.1,-1.42l1.67,-2.57l1.91,-0.36l2.19,-0.8l2.21,0.42l0.09,0.02l2.47,-0.36l-1.4,-1.61l-0.75,-0.13l-0.86,-0.16l-0.59,-1.14l-2.75,0.36l-2.49,0.9l-1.97,-1.55l-1.59,-0.52l0.9,-2.17l-2.48,1.37l-2.25,1.33l-2.16,1.04l-1.72,-1.4l-2.81,0.85l0.01,-0.6l1.9,-1.73l1.99,-1.65l2.86,-1.37l-3.45,-1.09l-2.27,0.55l-2.72,-1.3l-2.86,-0.67l-1.96,-0.26l-0.87,-0.72l-0.5,-2.35l-0.95,0.02l-0.01,1.64l-5.8,0l-9.59,0l-9.53,0l-8.42,0h-8.41h-8.27h-8.55h-2.76h-8.32h-7.96l0.95,3.47l0.45,3.41l-0.69,1.09l-1.49,-3.91l-4.05,-1.42l-0.34,0.82l0.82,1.94l0.89,3.53l0.51,5.42l-0.34,3.59l-0.34,3.54l-1.1,3.61l0.9,2.9l0.1,3.2l-0.61,3.05l1.49,1.99l0.39,2.95l2.17,2.99l1.24,1.17l-0.1,0.82l2.34,4.85l2.72,3.45l0.34,1.87l0.71,0.55l2.6,0.33l1,0.91l1.57,0.17l0.31,0.96l1.31,0.4l1.82,1.92l0.47,1.7l3.19,-0.25l3.56,-0.36l-0.26,0.65l4.23,1.6l6.4,2.31l5.58,-0.02l2.22,0l0.01,-1.35l4.86,0l1.02,1.16l1.43,1.03l1.67,1.43l0.93,1.69l0.7,1.77l1.45,0.97l2.33,0.96l1.77,-2.53l2.29,-0.06l1.98,1.28l1.41,2.18l0.97,1.86l1.65,1.8l0.62,2.19l0.79,1.47l2.19,0.96l1.99,0.68l1.09,-0.09l-0.53,-1.06l-0.14,-1.5l0.03,-2.16l0.65,-1.42l1.53,-1.51l2.79,-1.37l2.55,-2.37l2.36,-0.75l1.74,-0.23l2.04,0.74l2.45,-0.4l2.09,1.69l2.03,0.1l1.05,-0.61l1.04,0.47l0.53,-0.42l-0.6,-0.63l0.05,-1.3l-0.5,-0.86l1.16,-0.5l2.14,-0.22l2.49,0.36l3.17,-0.41l1.76,0.8l1.36,1.5l0.5,0.16l2.83,-1.46l1.09,0.49l2.19,2.68l0.79,1.75l-0.58,2.1l0.42,1.23l1.3,2.4l1.49,2.68l1.07,0.71l0.44,1.35l1.38,0.37l0.84,-0.39l0.7,-1.89l0.12,-1.21l0.09,-2.1l-1.33,-3.65l-0.02,-1.37l-1.25,-2.25l-0.94,-2.75l-0.5,-2.25l0.43,-2.31l1.32,-1.94l1.58,-1.57l3.08,-2.16l0.4,-1.12l1.42,-1.23l1.4,-0.22l1.84,-1.98l2.9,-1.01l1.78,-2.53l-0.39,-3.46l-0.29,-1.21l-0.8,-0.24l-0.12,-3.35l-1.93,-1.14l1.85,0.56l-0.6,-2.26l0.54,-1.55l0.33,2.97l1.43,1.36l-0.87,2.4l0.26,0.14l1.58,-2.81l0.9,-1.38l-0.04,-1.35l-0.7,-0.64l-0.58,-1.94l0.92,0.9l0.62,0.19l0.21,0.92l2.04,-2.78l0.61,-2.62l-0.83,-0.17l0.85,-1.02l-0.08,0.45l1.79,-0.01l3.93,-1.11l-0.83,-0.7l-4.12,0.7l2.34,-1.07l1.63,-0.18l1.22,-0.19l2.07,-0.65l1.35,0.07l1.89,-0.61l0.22,-1.07l-0.84,-0.84l0.29,1.37l-1.16,-0.09l-0.93,-1.99l0.03,-2.01l0.48,-0.86l1.48,-2.28l2.96,-1.15l2.88,-1.34l2.99,-1.9l-0.48,-1.29l-1.83,-2.25L285.18,314.23zM45.62,263.79l-1.5,0.8l-2.55,1.86l0.43,2.42l1.43,1.32l2.8,-1.95l2.43,-2.47l-1.19,-1.63L45.62,263.79zM0,235.22l2.04,-1.26l0.23,-0.68L0,232.61V235.22zM8.5,250.59l-2.77,0.97l1.7,1.52l1.84,1.04l1.72,-0.87l-0.27,-2.15L8.5,250.59zM105.85,283.09l-2.69,0.38l-1.32,-0.62l-0.17,1.52l0.52,2.07l1.42,1.46l1.04,2.13l1.69,2.1l1.12,0.01l-2.44,-3.7L105.85,283.09zM37.13,403.77l-1,-0.28l-0.27,0.26l0.02,0.19l0.32,0.24l0.48,0.63l0.94,-0.21l0.23,-0.36L37.13,403.77zM34.14,403.23l1.5,0.09l0.09,-0.32l-1.38,-0.13L34.14,403.23zM40.03,406.52l-0.5,-0.26l-1.07,-0.5l-0.21,-0.06l-0.16,0.28l0.19,0.58l-0.49,0.48l-0.14,0.33l0.46,1.08l-0.08,0.83l0.7,0.42l0.41,-0.49l0.9,-0.46l1.1,-0.63l0.07,-0.16l-0.71,-1.04L40.03,406.52zM32.17,401.38l-0.75,0.41l0.11,0.12l0.36,0.68l0.98,0.11l0.2,0.04l0.15,-0.17l-0.81,-0.99L32.17,401.38zM27.77,399.82l-0.43,0.3l-0.15,0.22l0.94,0.55l0.33,-0.3l-0.06,-0.7L27.77,399.82z"
				},
				{
					"id":"UY",
					"title":"Uruguay",
					"d":"M313.68,551.79L315.5,551.45L318.31,553.95L319.35,553.86L322.24,555.94L324.44,557.76L326.06,560.01L324.82,561.58L325.6,563.48L324.39,565.6L321.22,567.48L319.15,566.8L317.63,567.17L315.04,565.71L313.14,565.82L311.43,563.95L311.65,561.79L312.26,561.05L312.23,557.75L312.98,554.38z"
				},
				{
					"id":"UZ",
					"title":"Uzbekistan",
					"d":"M661.76,350.95L661.84,348.79L658.11,347.27L655.18,345.52L653.35,343.83L650.14,341.32L648.76,337.53L647.82,336.86L644.79,337.03L643.72,336.26L643.42,333.27L639.64,331.27L637.28,333.47L634.88,334.77L635.34,336.65L632.18,336.7L632.07,322.57L639.29,320.22L639.81,320.57L644.16,323.41L646.45,324.89L649.13,328.39L652.42,327.83L657.23,327.53L660.58,330.33L660.37,334.13L661.74,334.16L662.31,337.22L665.88,337.34L666.64,339.09L667.69,339.07L668.92,336.42L672.61,333.81L674.22,333.11L675.05,333.48L672.7,335.91L674.77,337.31L676.77,336.38L680.09,338.34L676.5,340.98L674.37,340.62L673.21,340.72L672.81,339.7L673.39,337.99L669.64,338.85L668.75,341.2L667.42,343.21L665.08,343.04L664.35,344.63L666.41,345.49L667.01,348.15L665.44,351.72L663.32,350.98z"
				},
				{
					"id":"VE",
					"title":"Venezuela",
					"d":"M275.25,430.35L275.17,431.02L273.52,431.35L274.44,432.64L274.4,434.13L273.17,435.77L274.23,438.01L275.44,437.83L276.07,435.79L275.2,434.79L275.06,432.65L278.55,431.49L278.16,430.15L279.14,429.25L280.15,431.25L282.12,431.3L283.94,432.88L284.05,433.82L286.56,433.84L289.56,433.55L291.17,434.82L293.31,435.17L294.88,434.29L294.91,433.57L298.39,433.4L301.75,433.36L299.37,434.2L300.32,435.54L302.57,435.75L304.69,437.14L305.14,439.4L306.6,439.33L307.7,440L305.48,441.65L305.23,442.68L306.19,443.72L305.5,444.24L303.77,444.69L303.83,445.99L303.07,446.76L304.96,448.88L305.34,449.67L304.31,450.74L301.17,451.78L299.16,452.22L298.35,452.88L296.12,452.18L294.04,451.82L293.52,452.08L294.77,452.8L294.66,454.67L295.05,456.43L297.42,456.67L297.58,457.25L295.57,458.05L295.25,459.23L294.09,459.68L292.01,460.33L291.47,461.19L289.29,461.37L287.74,459.89L286.89,457.12L286.14,456.14L285.12,455.53L286.54,454.14L286.45,453.51L285.65,452.68L285.09,450.83L285.31,448.82L285.93,447.88L286.44,446.38L285.45,445.89L283.85,446.21L281.83,446.06L280.7,446.36L278.72,443.95L277.09,443.59L273.49,443.86L272.82,442.88L272.13,442.65L272.03,442.06L272.36,441.02L272.14,439.89L271.52,439.27L271.16,437.97L269.72,437.79L270.49,436.13L270.84,434.12L271.65,433.06L272.74,432.25L273.45,430.83z"
				},
				{
					"id":"VN",
					"title":"Vietnam",
					"d":"M778.21,401.87L774.47,404.43L772.13,407.24L771.51,409.29L773.66,412.38L776.28,416.2L778.82,417.99L780.53,420.32L781.81,425.64L781.43,430.66L779.1,432.53L775.88,434.36L773.6,436.72L770.1,439.34L769.08,437.53L769.87,435.62L767.79,434.01L770.22,432.87L773.16,432.67L771.93,430.94L776.64,428.75L776.99,425.33L776.34,423.41L776.85,420.53L776.14,418.49L774.02,416.47L772.25,413.9L769.92,410.44L766.56,408.68L767.37,407.61L769.16,406.84L768.07,404.25L764.62,404.22L763.36,401.5L761.72,399.13L763.23,398.39L765.46,398.41L768.19,398.06L770.58,396.44L771.93,397.58L774.5,398.13L774.05,399.87L775.39,401.09z"
				},
				{
					"id":"VU",
					"title":"Vanuatu",
					"d":"M945.87,509.9l-0.92,0.38l-0.94,-1.27l0.1,-0.78L945.87,509.9zM943.8,505.46l0.46,2.33l-0.75,-0.36l-0.58,0.16l-0.4,-0.8l-0.06,-2.21L943.8,505.46z"
				},
				{
					"id":"YE",
					"title":"Yemen",
					"d":"M624.16,416.33L622.13,417.12L621.59,418.4L621.52,419.39L618.73,420.61L614.25,421.96L611.74,423.99L610.51,424.14L609.67,423.97L608.03,425.17L606.24,425.72L603.89,425.87L603.18,426.03L602.57,426.78L601.83,426.99L601.4,427.72L600.01,427.66L599.11,428.04L597.17,427.9L596.44,426.23L596.52,424.66L596.07,423.81L595.52,421.69L594.71,420.5L595.27,420.36L594.98,419.04L595.32,418.48L595.2,417.22L596.43,416.29L596.14,415.06L596.89,413.63L598.04,414.39L598.8,414.12L602.03,414.05L602.55,414.35L605.26,414.64L606.33,414.49L607.03,415.46L608.34,414.98L610.35,411.91L612.97,410.59L621.05,409.46L623.25,414.3z"
				},
				{
					"id":"ZA",
					"title":"South Africa",
					"d":"M563.63,548.71l-0.55,0.46l-1.19,1.63l-0.78,1.66l-1.59,2.33l-3.17,3.38l-1.98,1.98l-2.12,1.51l-2.93,1.3l-1.43,0.17l-0.36,0.93l-1.7,-0.5l-1.39,0.64l-3.04,-0.65l-1.7,0.41l-1.16,-0.18l-2.89,1.33l-2.39,0.54l-1.73,1.28l-1.28,0.08l-1.19,-1.21l-0.95,-0.06l-1.21,-1.51l-0.13,0.47l-0.37,-0.91l0.02,-1.96l-0.91,-2.23l0.9,-0.6l-0.07,-2.53l-1.84,-3.05l-1.41,-2.74l0,-0.01l-2.01,-4.15l1.34,-1.57l1.11,0.87l0.47,1.36l1.26,0.23l1.76,0.6l1.51,-0.23l2.5,-1.63l0,-11.52l0.76,0.46l1.66,2.93l-0.26,1.89l0.63,1.1l2.01,-0.32l1.4,-1.39l1.33,-0.93l0.69,-1.48l1.37,-0.72l1.18,0.38l1.34,0.87l2.28,0.15l1.79,-0.72l0.28,-0.96l0.49,-1.47l1.53,-0.25l0.84,-1.15l0.93,-2.03l2.52,-2.26l3.97,-2.22l1.14,0.03l1.36,0.51l0.94,-0.36l1.49,0.3l1.34,4.26l0.73,2.17l-0.5,3.43l0.24,1.11l-1.42,-0.57l-0.81,0.22l-0.26,0.9l-0.77,1.17l0.03,1.08l1.67,1.7l1.64,-0.34l0.57,-1.39l2.13,0.03l-0.7,2.28l-0.33,2.62l-0.73,1.43L563.63,548.71zM556.5,547.75l-1.22,-0.98l-1.31,0.65l-1.52,1.25l-1.5,2.03l2.1,2.48l1,-0.32l0.52,-1.03l1.56,-0.5l0.48,-1.05l0.86,-1.56L556.5,547.75z"
				},
				{
					"id":"ZM",
					"title":"Zambia",
					"d":"M567.11,489.21L568.43,490.47L569.14,492.87L568.66,493.64L568.1,495.94L568.64,498.3L567.76,499.29L566.91,501.95L568.38,502.69L559.87,505.07L560.14,507.12L558.01,507.52L556.42,508.67L556.08,509.68L555.07,509.9L552.63,512.3L551.08,514.19L550.13,514.26L549.22,513.92L546.09,513.6L545.59,513.38L545.56,513.14L544.46,512.48L542.64,512.31L540.34,512.98L538.51,511.16L536.62,508.78L536.75,499.62L542.59,499.66L542.35,498.67L542.77,497.6L542.28,496.27L542.6,494.89L542.3,494.01L543.27,494.08L543.43,494.96L544.74,494.89L546.52,495.15L547.46,496.44L549.7,496.84L551.42,495.94L552.05,497.43L554.2,497.83L555.23,499.05L556.38,500.62L558.53,500.65L558.29,497.57L557.52,498.08L555.56,496.98L554.8,496.47L555.15,493.62L555.65,490.27L555.02,489.02L555.82,487.22L556.57,486.89L560.34,486.41L561.44,486.7L562.61,487.41L563.73,487.89L565.51,488.36z"
				},
				{
					"id":"ZW",
					"title":"Zimbabwe",
					"d":"M562.71,527L561.22,526.7L560.27,527.06L558.92,526.55L557.78,526.52L555.99,525.16L553.82,524.7L553,522.8L552.99,521.75L551.79,521.43L548.62,518.18L547.73,516.47L547.17,515.95L546.09,513.6L549.22,513.92L550.13,514.26L551.08,514.19L552.63,512.3L555.07,509.9L556.08,509.68L556.42,508.67L558.01,507.52L560.14,507.12L560.32,508.2L562.66,508.14L563.96,508.75L564.56,509.47L565.9,509.68L567.35,510.62L567.36,514.31L566.81,516.35L566.69,518.55L567.14,519.43L566.83,521.17L566.4,521.44L565.66,523.59z"
				}
			]
		}
	}
};

/***/ }),

/***/ 643:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(644);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("4ef0edf3", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-886a4a04\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./BubbleMap.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-886a4a04\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./BubbleMap.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 644:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(undefined);
// imports
exports.i(__webpack_require__(605), "");

// module
exports.push([module.i, "\n.bubble-map {\n  height: 100%;\n}\n", ""]);

// exports


/***/ }),

/***/ 645:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_amcharts3__ = __webpack_require__(606);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_amcharts3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_amcharts3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_amcharts3_amcharts_plugins_responsive_responsive_js__ = __webpack_require__(607);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_amcharts3_amcharts_plugins_responsive_responsive_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_amcharts3_amcharts_plugins_responsive_responsive_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_amcharts3_amcharts_serial_js__ = __webpack_require__(608);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_amcharts3_amcharts_serial_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_amcharts3_amcharts_serial_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_amcharts3_amcharts_themes_light__ = __webpack_require__(609);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_amcharts3_amcharts_themes_light___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_amcharts3_amcharts_themes_light__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ammap3__ = __webpack_require__(610);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ammap3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ammap3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ammap3_ammap_maps_js_worldLow__ = __webpack_require__(611);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ammap3_ammap_maps_js_worldLow___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ammap3_ammap_maps_js_worldLow__);










/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'bubble-map',

  props: ['mapData'],

  methods: {
    drawMap: function drawMap() {
      var _this = this;

      var map = void 0;
      var minBulletSize = 3;
      var maxBulletSize = 70;
      var min = Infinity;
      var max = -Infinity;
      AmCharts.theme = AmCharts.themes.light;

      this.mapData.data.forEach(function (dataItem) {
        var value = dataItem.value;
        if (value < min) {
          min = value;
        }
        if (value > max) {
          max = value;
        }
      });

      map = new AmCharts.AmMap();

      map.projection = 'winkel3';
      map.addTitle('Population of the World in 2011', 14, 1, 1, false);
      map.addTitle('source: Gapminder', 11, 1, 1, 1, false);
      map.areasSettings = {
        unlistedAreasColor: '#eee',
        unlistedAreasAlpha: 1,
        outlineColor: '#fff',
        outlineThickness: 2
      };
      map.imagesSettings = {
        balloonText: '<span style="font-size:14px"><b>[[title]]</b>: [[value]]</span>',
        alpha: 0.75
      };

      var dataProvider = {
        mapVar: AmCharts.maps.worldLow,
        images: []
      };

      var maxSquare = maxBulletSize * maxBulletSize * 2 * Math.PI;
      var minSquare = minBulletSize * minBulletSize * 2 * Math.PI;

      this.mapData.data.forEach(function (dataItem) {
        var value = dataItem.value;

        var square = (value - min) / (max - min) * (maxSquare - minSquare) + minSquare;
        if (square < minSquare) {
          square = minSquare;
        }
        var size = Math.sqrt(square / (Math.PI * 2));
        var id = dataItem.code;
        dataProvider.images.push({
          type: 'circle',
          width: size,
          height: size,
          color: dataItem.color,
          longitude: _this.mapData.latlong[id].longitude,
          latitude: _this.mapData.latlong[id].latitude,
          title: dataItem.name,
          value: value
        });
      });

      map.dataProvider = dataProvider;
      map.write(this.$el);
    }
  },

  mounted: function mounted() {
    this.drawMap();
  }
});

/***/ }),

/***/ 646:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "bubble-map" })
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-886a4a04", module.exports)
  }
}

/***/ }),

/***/ 698:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(699);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("196c522c", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-36749e94\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./BubbleMapsPage.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-36749e94\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./BubbleMapsPage.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 699:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(undefined);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 700:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BubbleMap__ = __webpack_require__(577);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BubbleMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__BubbleMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__BubbleMapData__ = __webpack_require__(701);





/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'bubble-maps-page',
  components: {
    BubbleMap: __WEBPACK_IMPORTED_MODULE_0__BubbleMap___default.a
  },
  data: function data() {
    return {
      bubbleMapData: __WEBPACK_IMPORTED_MODULE_1__BubbleMapData__["a" /* default */]
    };
  }
});

/***/ }),

/***/ 701:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var latlong = {};

latlong['AD'] = {
  'latitude': 42.5,
  'longitude': 1.5
};
latlong['AE'] = {
  'latitude': 24,
  'longitude': 54
};
latlong['AF'] = {
  'latitude': 33,
  'longitude': 65
};
latlong['AG'] = {
  'latitude': 17.05,
  'longitude': -61.8
};
latlong['AI'] = {
  'latitude': 18.25,
  'longitude': -63.1667
};
latlong['AL'] = {
  'latitude': 41,
  'longitude': 20
};
latlong['AM'] = {
  'latitude': 40,
  'longitude': 45
};
latlong['AN'] = {
  'latitude': 12.25,
  'longitude': -68.75
};
latlong['AO'] = {
  'latitude': -12.5,
  'longitude': 18.5
};
latlong['AP'] = {
  'latitude': 35,
  'longitude': 105
};
latlong['AQ'] = {
  'latitude': -90,
  'longitude': 0
};
latlong['AR'] = {
  'latitude': -34,
  'longitude': -64
};
latlong['AS'] = {
  'latitude': -14.3333,
  'longitude': -170
};
latlong['AT'] = {
  'latitude': 47.3333,
  'longitude': 13.3333
};
latlong['AU'] = {
  'latitude': -27,
  'longitude': 133
};
latlong['AW'] = {
  'latitude': 12.5,
  'longitude': -69.9667
};
latlong['AZ'] = {
  'latitude': 40.5,
  'longitude': 47.5
};
latlong['BA'] = {
  'latitude': 44,
  'longitude': 18
};
latlong['BB'] = {
  'latitude': 13.1667,
  'longitude': -59.5333
};
latlong['BD'] = {
  'latitude': 24,
  'longitude': 90
};
latlong['BE'] = {
  'latitude': 50.8333,
  'longitude': 4
};
latlong['BF'] = {
  'latitude': 13,
  'longitude': -2
};
latlong['BG'] = {
  'latitude': 43,
  'longitude': 25
};
latlong['BH'] = {
  'latitude': 26,
  'longitude': 50.55
};
latlong['BI'] = {
  'latitude': -3.5,
  'longitude': 30
};
latlong['BJ'] = {
  'latitude': 9.5,
  'longitude': 2.25
};
latlong['BM'] = {
  'latitude': 32.3333,
  'longitude': -64.75
};
latlong['BN'] = {
  'latitude': 4.5,
  'longitude': 114.6667
};
latlong['BO'] = {
  'latitude': -17,
  'longitude': -65
};
latlong['BR'] = {
  'latitude': -10,
  'longitude': -55
};
latlong['BS'] = {
  'latitude': 24.25,
  'longitude': -76
};
latlong['BT'] = {
  'latitude': 27.5,
  'longitude': 90.5
};
latlong['BV'] = {
  'latitude': -54.4333,
  'longitude': 3.4
};
latlong['BW'] = {
  'latitude': -22,
  'longitude': 24
};
latlong['BY'] = {
  'latitude': 53,
  'longitude': 28
};
latlong['BZ'] = {
  'latitude': 17.25,
  'longitude': -88.75
};
latlong['CA'] = {
  'latitude': 54,
  'longitude': -100
};
latlong['CC'] = {
  'latitude': -12.5,
  'longitude': 96.8333
};
latlong['CD'] = {
  'latitude': 0,
  'longitude': 25
};
latlong['CF'] = {
  'latitude': 7,
  'longitude': 21
};
latlong['CG'] = {
  'latitude': -1,
  'longitude': 15
};
latlong['CH'] = {
  'latitude': 47,
  'longitude': 8
};
latlong['CI'] = {
  'latitude': 8,
  'longitude': -5
};
latlong['CK'] = {
  'latitude': -21.2333,
  'longitude': -159.7667
};
latlong['CL'] = {
  'latitude': -30,
  'longitude': -71
};
latlong['CM'] = {
  'latitude': 6,
  'longitude': 12
};
latlong['CN'] = {
  'latitude': 35,
  'longitude': 105
};
latlong['CO'] = {
  'latitude': 4,
  'longitude': -72
};
latlong['CR'] = {
  'latitude': 10,
  'longitude': -84
};
latlong['CU'] = {
  'latitude': 21.5,
  'longitude': -80
};
latlong['CV'] = {
  'latitude': 16,
  'longitude': -24
};
latlong['CX'] = {
  'latitude': -10.5,
  'longitude': 105.6667
};
latlong['CY'] = {
  'latitude': 35,
  'longitude': 33
};
latlong['CZ'] = {
  'latitude': 49.75,
  'longitude': 15.5
};
latlong['DE'] = {
  'latitude': 51,
  'longitude': 9
};
latlong['DJ'] = {
  'latitude': 11.5,
  'longitude': 43
};
latlong['DK'] = {
  'latitude': 56,
  'longitude': 10
};
latlong['DM'] = {
  'latitude': 15.4167,
  'longitude': -61.3333
};
latlong['DO'] = {
  'latitude': 19,
  'longitude': -70.6667
};
latlong['DZ'] = {
  'latitude': 28,
  'longitude': 3
};
latlong['EC'] = {
  'latitude': -2,
  'longitude': -77.5
};
latlong['EE'] = {
  'latitude': 59,
  'longitude': 26
};
latlong['EG'] = {
  'latitude': 27,
  'longitude': 30
};
latlong['EH'] = {
  'latitude': 24.5,
  'longitude': -13
};
latlong['ER'] = {
  'latitude': 15,
  'longitude': 39
};
latlong['ES'] = {
  'latitude': 40,
  'longitude': -4
};
latlong['ET'] = {
  'latitude': 8,
  'longitude': 38
};
latlong['EU'] = {
  'latitude': 47,
  'longitude': 8
};
latlong['FI'] = {
  'latitude': 62,
  'longitude': 26
};
latlong['FJ'] = {
  'latitude': -18,
  'longitude': 175
};
latlong['FK'] = {
  'latitude': -51.75,
  'longitude': -59
};
latlong['FM'] = {
  'latitude': 6.9167,
  'longitude': 158.25
};
latlong['FO'] = {
  'latitude': 62,
  'longitude': -7
};
latlong['FR'] = {
  'latitude': 46,
  'longitude': 2
};
latlong['GA'] = {
  'latitude': -1,
  'longitude': 11.75
};
latlong['GB'] = {
  'latitude': 54,
  'longitude': -2
};
latlong['GD'] = {
  'latitude': 12.1167,
  'longitude': -61.6667
};
latlong['GE'] = {
  'latitude': 42,
  'longitude': 43.5
};
latlong['GF'] = {
  'latitude': 4,
  'longitude': -53
};
latlong['GH'] = {
  'latitude': 8,
  'longitude': -2
};
latlong['GI'] = {
  'latitude': 36.1833,
  'longitude': -5.3667
};
latlong['GL'] = {
  'latitude': 72,
  'longitude': -40
};
latlong['GM'] = {
  'latitude': 13.4667,
  'longitude': -16.5667
};
latlong['GN'] = {
  'latitude': 11,
  'longitude': -10
};
latlong['GP'] = {
  'latitude': 16.25,
  'longitude': -61.5833
};
latlong['GQ'] = {
  'latitude': 2,
  'longitude': 10
};
latlong['GR'] = {
  'latitude': 39,
  'longitude': 22
};
latlong['GS'] = {
  'latitude': -54.5,
  'longitude': -37
};
latlong['GT'] = {
  'latitude': 15.5,
  'longitude': -90.25
};
latlong['GU'] = {
  'latitude': 13.4667,
  'longitude': 144.7833
};
latlong['GW'] = {
  'latitude': 12,
  'longitude': -15
};
latlong['GY'] = {
  'latitude': 5,
  'longitude': -59
};
latlong['HK'] = {
  'latitude': 22.25,
  'longitude': 114.1667
};
latlong['HM'] = {
  'latitude': -53.1,
  'longitude': 72.5167
};
latlong['HN'] = {
  'latitude': 15,
  'longitude': -86.5
};
latlong['HR'] = {
  'latitude': 45.1667,
  'longitude': 15.5
};
latlong['HT'] = {
  'latitude': 19,
  'longitude': -72.4167
};
latlong['HU'] = {
  'latitude': 47,
  'longitude': 20
};
latlong['ID'] = {
  'latitude': -5,
  'longitude': 120
};
latlong['IE'] = {
  'latitude': 53,
  'longitude': -8
};
latlong['IL'] = {
  'latitude': 31.5,
  'longitude': 34.75
};
latlong['IN'] = {
  'latitude': 20,
  'longitude': 77
};
latlong['IO'] = {
  'latitude': -6,
  'longitude': 71.5
};
latlong['IQ'] = {
  'latitude': 33,
  'longitude': 44
};
latlong['IR'] = {
  'latitude': 32,
  'longitude': 53
};
latlong['IS'] = {
  'latitude': 65,
  'longitude': -18
};
latlong['IT'] = {
  'latitude': 42.8333,
  'longitude': 12.8333
};
latlong['JM'] = {
  'latitude': 18.25,
  'longitude': -77.5
};
latlong['JO'] = {
  'latitude': 31,
  'longitude': 36
};
latlong['JP'] = {
  'latitude': 36,
  'longitude': 138
};
latlong['KE'] = {
  'latitude': 1,
  'longitude': 38
};
latlong['KG'] = {
  'latitude': 41,
  'longitude': 75
};
latlong['KH'] = {
  'latitude': 13,
  'longitude': 105
};
latlong['KI'] = {
  'latitude': 1.4167,
  'longitude': 173
};
latlong['KM'] = {
  'latitude': -12.1667,
  'longitude': 44.25
};
latlong['KN'] = {
  'latitude': 17.3333,
  'longitude': -62.75
};
latlong['KP'] = {
  'latitude': 40,
  'longitude': 127
};
latlong['KR'] = {
  'latitude': 37,
  'longitude': 127.5
};
latlong['KW'] = {
  'latitude': 29.3375,
  'longitude': 47.6581
};
latlong['KY'] = {
  'latitude': 19.5,
  'longitude': -80.5
};
latlong['KZ'] = {
  'latitude': 48,
  'longitude': 68
};
latlong['LA'] = {
  'latitude': 18,
  'longitude': 105
};
latlong['LB'] = {
  'latitude': 33.8333,
  'longitude': 35.8333
};
latlong['LC'] = {
  'latitude': 13.8833,
  'longitude': -61.1333
};
latlong['LI'] = {
  'latitude': 47.1667,
  'longitude': 9.5333
};
latlong['LK'] = {
  'latitude': 7,
  'longitude': 81
};
latlong['LR'] = {
  'latitude': 6.5,
  'longitude': -9.5
};
latlong['LS'] = {
  'latitude': -29.5,
  'longitude': 28.5
};
latlong['LT'] = {
  'latitude': 55,
  'longitude': 24
};
latlong['LU'] = {
  'latitude': 49.75,
  'longitude': 6
};
latlong['LV'] = {
  'latitude': 57,
  'longitude': 25
};
latlong['LY'] = {
  'latitude': 25,
  'longitude': 17
};
latlong['MA'] = {
  'latitude': 32,
  'longitude': -5
};
latlong['MC'] = {
  'latitude': 43.7333,
  'longitude': 7.4
};
latlong['MD'] = {
  'latitude': 47,
  'longitude': 29
};
latlong['ME'] = {
  'latitude': 42.5,
  'longitude': 19.4
};
latlong['MG'] = {
  'latitude': -20,
  'longitude': 47
};
latlong['MH'] = {
  'latitude': 9,
  'longitude': 168
};
latlong['MK'] = {
  'latitude': 41.8333,
  'longitude': 22
};
latlong['ML'] = {
  'latitude': 17,
  'longitude': -4
};
latlong['MM'] = {
  'latitude': 22,
  'longitude': 98
};
latlong['MN'] = {
  'latitude': 46,
  'longitude': 105
};
latlong['MO'] = {
  'latitude': 22.1667,
  'longitude': 113.55
};
latlong['MP'] = {
  'latitude': 15.2,
  'longitude': 145.75
};
latlong['MQ'] = {
  'latitude': 14.6667,
  'longitude': -61
};
latlong['MR'] = {
  'latitude': 20,
  'longitude': -12
};
latlong['MS'] = {
  'latitude': 16.75,
  'longitude': -62.2
};
latlong['MT'] = {
  'latitude': 35.8333,
  'longitude': 14.5833
};
latlong['MU'] = {
  'latitude': -20.2833,
  'longitude': 57.55
};
latlong['MV'] = {
  'latitude': 3.25,
  'longitude': 73
};
latlong['MW'] = {
  'latitude': -13.5,
  'longitude': 34
};
latlong['MX'] = {
  'latitude': 23,
  'longitude': -102
};
latlong['MY'] = {
  'latitude': 2.5,
  'longitude': 112.5
};
latlong['MZ'] = {
  'latitude': -18.25,
  'longitude': 35
};
latlong['NA'] = {
  'latitude': -22,
  'longitude': 17
};
latlong['NC'] = {
  'latitude': -21.5,
  'longitude': 165.5
};
latlong['NE'] = {
  'latitude': 16,
  'longitude': 8
};
latlong['NF'] = {
  'latitude': -29.0333,
  'longitude': 167.95
};
latlong['NG'] = {
  'latitude': 10,
  'longitude': 8
};
latlong['NI'] = {
  'latitude': 13,
  'longitude': -85
};
latlong['NL'] = {
  'latitude': 52.5,
  'longitude': 5.75
};
latlong['NO'] = {
  'latitude': 62,
  'longitude': 10
};
latlong['NP'] = {
  'latitude': 28,
  'longitude': 84
};
latlong['NR'] = {
  'latitude': -0.5333,
  'longitude': 166.9167
};
latlong['NU'] = {
  'latitude': -19.0333,
  'longitude': -169.8667
};
latlong['NZ'] = {
  'latitude': -41,
  'longitude': 174
};
latlong['OM'] = {
  'latitude': 21,
  'longitude': 57
};
latlong['PA'] = {
  'latitude': 9,
  'longitude': -80
};
latlong['PE'] = {
  'latitude': -10,
  'longitude': -76
};
latlong['PF'] = {
  'latitude': -15,
  'longitude': -140
};
latlong['PG'] = {
  'latitude': -6,
  'longitude': 147
};
latlong['PH'] = {
  'latitude': 13,
  'longitude': 122
};
latlong['PK'] = {
  'latitude': 30,
  'longitude': 70
};
latlong['PL'] = {
  'latitude': 52,
  'longitude': 20
};
latlong['PM'] = {
  'latitude': 46.8333,
  'longitude': -56.3333
};
latlong['PR'] = {
  'latitude': 18.25,
  'longitude': -66.5
};
latlong['PS'] = {
  'latitude': 32,
  'longitude': 35.25
};
latlong['PT'] = {
  'latitude': 39.5,
  'longitude': -8
};
latlong['PW'] = {
  'latitude': 7.5,
  'longitude': 134.5
};
latlong['PY'] = {
  'latitude': -23,
  'longitude': -58
};
latlong['QA'] = {
  'latitude': 25.5,
  'longitude': 51.25
};
latlong['RE'] = {
  'latitude': -21.1,
  'longitude': 55.6
};
latlong['RO'] = {
  'latitude': 46,
  'longitude': 25
};
latlong['RS'] = {
  'latitude': 44,
  'longitude': 21
};
latlong['RU'] = {
  'latitude': 60,
  'longitude': 100
};
latlong['RW'] = {
  'latitude': -2,
  'longitude': 30
};
latlong['SA'] = {
  'latitude': 25,
  'longitude': 45
};
latlong['SB'] = {
  'latitude': -8,
  'longitude': 159
};
latlong['SC'] = {
  'latitude': -4.5833,
  'longitude': 55.6667
};
latlong['SD'] = {
  'latitude': 15,
  'longitude': 30
};
latlong['SE'] = {
  'latitude': 62,
  'longitude': 15
};
latlong['SG'] = {
  'latitude': 1.3667,
  'longitude': 103.8
};
latlong['SH'] = {
  'latitude': -15.9333,
  'longitude': -5.7
};
latlong['SI'] = {
  'latitude': 46,
  'longitude': 15
};
latlong['SJ'] = {
  'latitude': 78,
  'longitude': 20
};
latlong['SK'] = {
  'latitude': 48.6667,
  'longitude': 19.5
};
latlong['SL'] = {
  'latitude': 8.5,
  'longitude': -11.5
};
latlong['SM'] = {
  'latitude': 43.7667,
  'longitude': 12.4167
};
latlong['SN'] = {
  'latitude': 14,
  'longitude': -14
};
latlong['SO'] = {
  'latitude': 10,
  'longitude': 49
};
latlong['SR'] = {
  'latitude': 4,
  'longitude': -56
};
latlong['ST'] = {
  'latitude': 1,
  'longitude': 7
};
latlong['SV'] = {
  'latitude': 13.8333,
  'longitude': -88.9167
};
latlong['SY'] = {
  'latitude': 35,
  'longitude': 38
};
latlong['SZ'] = {
  'latitude': -26.5,
  'longitude': 31.5
};
latlong['TC'] = {
  'latitude': 21.75,
  'longitude': -71.5833
};
latlong['TD'] = {
  'latitude': 15,
  'longitude': 19
};
latlong['TF'] = {
  'latitude': -43,
  'longitude': 67
};
latlong['TG'] = {
  'latitude': 8,
  'longitude': 1.1667
};
latlong['TH'] = {
  'latitude': 15,
  'longitude': 100
};
latlong['TJ'] = {
  'latitude': 39,
  'longitude': 71
};
latlong['TK'] = {
  'latitude': -9,
  'longitude': -172
};
latlong['TM'] = {
  'latitude': 40,
  'longitude': 60
};
latlong['TN'] = {
  'latitude': 34,
  'longitude': 9
};
latlong['TO'] = {
  'latitude': -20,
  'longitude': -175
};
latlong['TR'] = {
  'latitude': 39,
  'longitude': 35
};
latlong['TT'] = {
  'latitude': 11,
  'longitude': -61
};
latlong['TV'] = {
  'latitude': -8,
  'longitude': 178
};
latlong['TW'] = {
  'latitude': 23.5,
  'longitude': 121
};
latlong['TZ'] = {
  'latitude': -6,
  'longitude': 35
};
latlong['UA'] = {
  'latitude': 49,
  'longitude': 32
};
latlong['UG'] = {
  'latitude': 1,
  'longitude': 32
};
latlong['UM'] = {
  'latitude': 19.2833,
  'longitude': 166.6
};
latlong['US'] = {
  'latitude': 38,
  'longitude': -97
};
latlong['UY'] = {
  'latitude': -33,
  'longitude': -56
};
latlong['UZ'] = {
  'latitude': 41,
  'longitude': 64
};
latlong['VA'] = {
  'latitude': 41.9,
  'longitude': 12.45
};
latlong['VC'] = {
  'latitude': 13.25,
  'longitude': -61.2
};
latlong['VE'] = {
  'latitude': 8,
  'longitude': -66
};
latlong['VG'] = {
  'latitude': 18.5,
  'longitude': -64.5
};
latlong['VI'] = {
  'latitude': 18.3333,
  'longitude': -64.8333
};
latlong['VN'] = {
  'latitude': 16,
  'longitude': 106
};
latlong['VU'] = {
  'latitude': -16,
  'longitude': 167
};
latlong['WF'] = {
  'latitude': -13.3,
  'longitude': -176.2
};
latlong['WS'] = {
  'latitude': -13.5833,
  'longitude': -172.3333
};
latlong['YE'] = {
  'latitude': 15,
  'longitude': 48
};
latlong['YT'] = {
  'latitude': -12.8333,
  'longitude': 45.1667
};
latlong['ZA'] = {
  'latitude': -29,
  'longitude': 24
};
latlong['ZM'] = {
  'latitude': -15,
  'longitude': 30
};
latlong['ZW'] = {
  'latitude': -20,
  'longitude': 30
};
var data = [{
  'code': 'AF',
  'name': 'Afghanistan',
  'value': 32358260,
  'color': '#eea638'
}, {
  'code': 'AL',
  'name': 'Albania',
  'value': 3215988,
  'color': '#6bbfe4'
}, {
  'code': 'DZ',
  'name': 'Algeria',
  'value': 35980193,
  'color': '#e96e6e'
}, {
  'code': 'AO',
  'name': 'Angola',
  'value': 19618432,
  'color': '#e96e6e'
}, {
  'code': 'AR',
  'name': 'Argentina',
  'value': 40764561,
  'color': '#6be59c'
}, {
  'code': 'AM',
  'name': 'Armenia',
  'value': 3100236,
  'color': '#6bbfe4'
}, {
  'code': 'AU',
  'name': 'Australia',
  'value': 22605732,
  'color': '#8aabb0'
}, {
  'code': 'AT',
  'name': 'Austria',
  'value': 8413429,
  'color': '#6bbfe4'
}, {
  'code': 'AZ',
  'name': 'Azerbaijan',
  'value': 9306023,
  'color': '#6bbfe4'
}, {
  'code': 'BH',
  'name': 'Bahrain',
  'value': 1323535,
  'color': '#eea638'
}, {
  'code': 'BD',
  'name': 'Bangladesh',
  'value': 150493658,
  'color': '#eea638'
}, {
  'code': 'BY',
  'name': 'Belarus',
  'value': 9559441,
  'color': '#6bbfe4'
}, {
  'code': 'BE',
  'name': 'Belgium',
  'value': 10754056,
  'color': '#6bbfe4'
}, {
  'code': 'BJ',
  'name': 'Benin',
  'value': 9099922,
  'color': '#e96e6e'
}, {
  'code': 'BT',
  'name': 'Bhutan',
  'value': 738267,
  'color': '#eea638'
}, {
  'code': 'BO',
  'name': 'Bolivia',
  'value': 10088108,
  'color': '#6be59c'
}, {
  'code': 'BA',
  'name': 'Bosnia and Herzegovina',
  'value': 3752228,
  'color': '#6bbfe4'
}, {
  'code': 'BW',
  'name': 'Botswana',
  'value': 2030738,
  'color': '#e96e6e'
}, {
  'code': 'BR',
  'name': 'Brazil',
  'value': 196655014,
  'color': '#6be59c'
}, {
  'code': 'BN',
  'name': 'Brunei',
  'value': 405938,
  'color': '#eea638'
}, {
  'code': 'BG',
  'name': 'Bulgaria',
  'value': 7446135,
  'color': '#6bbfe4'
}, {
  'code': 'BF',
  'name': 'Burkina Faso',
  'value': 16967845,
  'color': '#e96e6e'
}, {
  'code': 'BI',
  'name': 'Burundi',
  'value': 8575172,
  'color': '#e96e6e'
}, {
  'code': 'KH',
  'name': 'Cambodia',
  'value': 14305183,
  'color': '#eea638'
}, {
  'code': 'CM',
  'name': 'Cameroon',
  'value': 20030362,
  'color': '#e96e6e'
}, {
  'code': 'CA',
  'name': 'Canada',
  'value': 34349561,
  'color': '#f6d35b'
}, {
  'code': 'CV',
  'name': 'Cape Verde',
  'value': 500585,
  'color': '#e96e6e'
}, {
  'code': 'CF',
  'name': 'Central African Rep.',
  'value': 4486837,
  'color': '#e96e6e'
}, {
  'code': 'TD',
  'name': 'Chad',
  'value': 11525496,
  'color': '#e96e6e'
}, {
  'code': 'CL',
  'name': 'Chile',
  'value': 17269525,
  'color': '#6be59c'
}, {
  'code': 'CN',
  'name': 'China',
  'value': 1347565324,
  'color': '#eea638'
}, {
  'code': 'CO',
  'name': 'Colombia',
  'value': 46927125,
  'color': '#6be59c'
}, {
  'code': 'KM',
  'name': 'Comoros',
  'value': 753943,
  'color': '#e96e6e'
}, {
  'code': 'CD',
  'name': 'Congo, Dem. Rep.',
  'value': 67757577,
  'color': '#e96e6e'
}, {
  'code': 'CG',
  'name': 'Congo, Rep.',
  'value': 4139748,
  'color': '#e96e6e'
}, {
  'code': 'CR',
  'name': 'Costa Rica',
  'value': 4726575,
  'color': '#f6d35b'
}, {
  'code': 'CI',
  'name': 'Cote d\'Ivoire',
  'value': 20152894,
  'color': '#e96e6e'
}, {
  'code': 'HR',
  'name': 'Croatia',
  'value': 4395560,
  'color': '#6bbfe4'
}, {
  'code': 'CU',
  'name': 'Cuba',
  'value': 11253665,
  'color': '#f6d35b'
}, {
  'code': 'CY',
  'name': 'Cyprus',
  'value': 1116564,
  'color': '#6bbfe4'
}, {
  'code': 'CZ',
  'name': 'Czech Rep.',
  'value': 10534293,
  'color': '#6bbfe4'
}, {
  'code': 'DK',
  'name': 'Denmark',
  'value': 5572594,
  'color': '#6bbfe4'
}, {
  'code': 'DJ',
  'name': 'Djibouti',
  'value': 905564,
  'color': '#e96e6e'
}, {
  'code': 'DO',
  'name': 'Dominican Rep.',
  'value': 10056181,
  'color': '#f6d35b'
}, {
  'code': 'EC',
  'name': 'Ecuador',
  'value': 14666055,
  'color': '#6be59c'
}, {
  'code': 'EG',
  'name': 'Egypt',
  'value': 82536770,
  'color': '#e96e6e'
}, {
  'code': 'SV',
  'name': 'El Salvador',
  'value': 6227491,
  'color': '#f6d35b'
}, {
  'code': 'GQ',
  'name': 'Equatorial Guinea',
  'value': 720213,
  'color': '#e96e6e'
}, {
  'code': 'ER',
  'name': 'Eritrea',
  'value': 5415280,
  'color': '#e96e6e'
}, {
  'code': 'EE',
  'name': 'Estonia',
  'value': 1340537,
  'color': '#6bbfe4'
}, {
  'code': 'ET',
  'name': 'Ethiopia',
  'value': 84734262,
  'color': '#e96e6e'
}, {
  'code': 'FJ',
  'name': 'Fiji',
  'value': 868406,
  'color': '#8aabb0'
}, {
  'code': 'FI',
  'name': 'Finland',
  'value': 5384770,
  'color': '#6bbfe4'
}, {
  'code': 'FR',
  'name': 'France',
  'value': 63125894,
  'color': '#6bbfe4'
}, {
  'code': 'GA',
  'name': 'Gabon',
  'value': 1534262,
  'color': '#e96e6e'
}, {
  'code': 'GM',
  'name': 'Gambia',
  'value': 1776103,
  'color': '#e96e6e'
}, {
  'code': 'GE',
  'name': 'Georgia',
  'value': 4329026,
  'color': '#6bbfe4'
}, {
  'code': 'DE',
  'name': 'Germany',
  'value': 82162512,
  'color': '#6bbfe4'
}, {
  'code': 'GH',
  'name': 'Ghana',
  'value': 24965816,
  'color': '#e96e6e'
}, {
  'code': 'GR',
  'name': 'Greece',
  'value': 11390031,
  'color': '#6bbfe4'
}, {
  'code': 'GT',
  'name': 'Guatemala',
  'value': 14757316,
  'color': '#f6d35b'
}, {
  'code': 'GN',
  'name': 'Guinea',
  'value': 10221808,
  'color': '#e96e6e'
}, {
  'code': 'GW',
  'name': 'Guinea-Bissau',
  'value': 1547061,
  'color': '#e96e6e'
}, {
  'code': 'GY',
  'name': 'Guyana',
  'value': 756040,
  'color': '#6be59c'
}, {
  'code': 'HT',
  'name': 'Haiti',
  'value': 10123787,
  'color': '#f6d35b'
}, {
  'code': 'HN',
  'name': 'Honduras',
  'value': 7754687,
  'color': '#f6d35b'
}, {
  'code': 'HK',
  'name': 'Hong Kong, China',
  'value': 7122187,
  'color': '#eea638'
}, {
  'code': 'HU',
  'name': 'Hungary',
  'value': 9966116,
  'color': '#6bbfe4'
}, {
  'code': 'IS',
  'name': 'Iceland',
  'value': 324366,
  'color': '#6bbfe4'
}, {
  'code': 'IN',
  'name': 'India',
  'value': 1241491960,
  'color': '#eea638'
}, {
  'code': 'ID',
  'name': 'Indonesia',
  'value': 242325638,
  'color': '#eea638'
}, {
  'code': 'IR',
  'name': 'Iran',
  'value': 74798599,
  'color': '#eea638'
}, {
  'code': 'IQ',
  'name': 'Iraq',
  'value': 32664942,
  'color': '#eea638'
}, {
  'code': 'IE',
  'name': 'Ireland',
  'value': 4525802,
  'color': '#6bbfe4'
}, {
  'code': 'IL',
  'name': 'Israel',
  'value': 7562194,
  'color': '#eea638'
}, {
  'code': 'IT',
  'name': 'Italy',
  'value': 60788694,
  'color': '#6bbfe4'
}, {
  'code': 'JM',
  'name': 'Jamaica',
  'value': 2751273,
  'color': '#f6d35b'
}, {
  'code': 'JP',
  'name': 'Japan',
  'value': 126497241,
  'color': '#eea638'
}, {
  'code': 'JO',
  'name': 'Jordan',
  'value': 6330169,
  'color': '#eea638'
}, {
  'code': 'KZ',
  'name': 'Kazakhstan',
  'value': 16206750,
  'color': '#eea638'
}, {
  'code': 'KE',
  'name': 'Kenya',
  'value': 41609728,
  'color': '#e96e6e'
}, {
  'code': 'KR',
  'name': 'Korea, Dem. Rep.',
  'value': 24451285,
  'color': '#eea638'
}, {
  'code': 'KP',
  'name': 'Korea, Rep.',
  'value': 48391343,
  'color': '#eea638'
}, {
  'code': 'KW',
  'name': 'Kuwait',
  'value': 2818042,
  'color': '#eea638'
}, {
  'code': 'KG',
  'name': 'Kyrgyzstan',
  'value': 5392580,
  'color': '#eea638'
}, {
  'code': 'LA',
  'name': 'Laos',
  'value': 6288037,
  'color': '#eea638'
}, {
  'code': 'LV',
  'name': 'Latvia',
  'value': 2243142,
  'color': '#6bbfe4'
}, {
  'code': 'LB',
  'name': 'Lebanon',
  'value': 4259405,
  'color': '#eea638'
}, {
  'code': 'LS',
  'name': 'Lesotho',
  'value': 2193843,
  'color': '#e96e6e'
}, {
  'code': 'LR',
  'name': 'Liberia',
  'value': 4128572,
  'color': '#e96e6e'
}, {
  'code': 'LY',
  'name': 'Libya',
  'value': 6422772,
  'color': '#e96e6e'
}, {
  'code': 'LT',
  'name': 'Lithuania',
  'value': 3307481,
  'color': '#6bbfe4'
}, {
  'code': 'LU',
  'name': 'Luxembourg',
  'value': 515941,
  'color': '#6bbfe4'
}, {
  'code': 'MK',
  'name': 'Macedonia, FYR',
  'value': 2063893,
  'color': '#6bbfe4'
}, {
  'code': 'MG',
  'name': 'Madagascar',
  'value': 21315135,
  'color': '#e96e6e'
}, {
  'code': 'MW',
  'name': 'Malawi',
  'value': 15380888,
  'color': '#e96e6e'
}, {
  'code': 'MY',
  'name': 'Malaysia',
  'value': 28859154,
  'color': '#eea638'
}, {
  'code': 'ML',
  'name': 'Mali',
  'value': 15839538,
  'color': '#e96e6e'
}, {
  'code': 'MR',
  'name': 'Mauritania',
  'value': 3541540,
  'color': '#e96e6e'
}, {
  'code': 'MU',
  'name': 'Mauritius',
  'value': 1306593,
  'color': '#e96e6e'
}, {
  'code': 'MX',
  'name': 'Mexico',
  'value': 114793341,
  'color': '#f6d35b'
}, {
  'code': 'MD',
  'name': 'Moldova',
  'value': 3544864,
  'color': '#6bbfe4'
}, {
  'code': 'MN',
  'name': 'Mongolia',
  'value': 2800114,
  'color': '#eea638'
}, {
  'code': 'ME',
  'name': 'Montenegro',
  'value': 632261,
  'color': '#6bbfe4'
}, {
  'code': 'MA',
  'name': 'Morocco',
  'value': 32272974,
  'color': '#e96e6e'
}, {
  'code': 'MZ',
  'name': 'Mozambique',
  'value': 23929708,
  'color': '#e96e6e'
}, {
  'code': 'MM',
  'name': 'Myanmar',
  'value': 48336763,
  'color': '#eea638'
}, {
  'code': 'NA',
  'name': 'Namibia',
  'value': 2324004,
  'color': '#e96e6e'
}, {
  'code': 'NP',
  'name': 'Nepal',
  'value': 30485798,
  'color': '#eea638'
}, {
  'code': 'NL',
  'name': 'Netherlands',
  'value': 16664746,
  'color': '#6bbfe4'
}, {
  'code': 'NZ',
  'name': 'New Zealand',
  'value': 4414509,
  'color': '#8aabb0'
}, {
  'code': 'NI',
  'name': 'Nicaragua',
  'value': 5869859,
  'color': '#f6d35b'
}, {
  'code': 'NE',
  'name': 'Niger',
  'value': 16068994,
  'color': '#e96e6e'
}, {
  'code': 'NG',
  'name': 'Nigeria',
  'value': 162470737,
  'color': '#e96e6e'
}, {
  'code': 'NO',
  'name': 'Norway',
  'value': 4924848,
  'color': '#6bbfe4'
}, {
  'code': 'OM',
  'name': 'Oman',
  'value': 2846145,
  'color': '#eea638'
}, {
  'code': 'PK',
  'name': 'Pakistan',
  'value': 176745364,
  'color': '#eea638'
}, {
  'code': 'PA',
  'name': 'Panama',
  'value': 3571185,
  'color': '#f6d35b'
}, {
  'code': 'PG',
  'name': 'Papua New Guinea',
  'value': 7013829,
  'color': '#8aabb0'
}, {
  'code': 'PY',
  'name': 'Paraguay',
  'value': 6568290,
  'color': '#6be59c'
}, {
  'code': 'PE',
  'name': 'Peru',
  'value': 29399817,
  'color': '#6be59c'
}, {
  'code': 'PH',
  'name': 'Philippines',
  'value': 94852030,
  'color': '#eea638'
}, {
  'code': 'PL',
  'name': 'Poland',
  'value': 38298949,
  'color': '#6bbfe4'
}, {
  'code': 'PT',
  'name': 'Portugal',
  'value': 10689663,
  'color': '#6bbfe4'
}, {
  'code': 'PR',
  'name': 'Puerto Rico',
  'value': 3745526,
  'color': '#f6d35b'
}, {
  'code': 'QA',
  'name': 'Qatar',
  'value': 1870041,
  'color': '#eea638'
}, {
  'code': 'RO',
  'name': 'Romania',
  'value': 21436495,
  'color': '#6bbfe4'
}, {
  'code': 'RU',
  'name': 'Russia',
  'value': 142835555,
  'color': '#6bbfe4'
}, {
  'code': 'RW',
  'name': 'Rwanda',
  'value': 10942950,
  'color': '#e96e6e'
}, {
  'code': 'SA',
  'name': 'Saudi Arabia',
  'value': 28082541,
  'color': '#eea638'
}, {
  'code': 'SN',
  'name': 'Senegal',
  'value': 12767556,
  'color': '#e96e6e'
}, {
  'code': 'RS',
  'name': 'Serbia',
  'value': 9853969,
  'color': '#6bbfe4'
}, {
  'code': 'SL',
  'name': 'Sierra Leone',
  'value': 5997486,
  'color': '#e96e6e'
}, {
  'code': 'SG',
  'name': 'Singapore',
  'value': 5187933,
  'color': '#eea638'
}, {
  'code': 'SK',
  'name': 'Slovak Republic',
  'value': 5471502,
  'color': '#6bbfe4'
}, {
  'code': 'SI',
  'name': 'Slovenia',
  'value': 2035012,
  'color': '#6bbfe4'
}, {
  'code': 'SB',
  'name': 'Solomon Islands',
  'value': 552267,
  'color': '#8aabb0'
}, {
  'code': 'SO',
  'name': 'Somalia',
  'value': 9556873,
  'color': '#e96e6e'
}, {
  'code': 'ZA',
  'name': 'South Africa',
  'value': 50459978,
  'color': '#e96e6e'
}, {
  'code': 'ES',
  'name': 'Spain',
  'value': 46454895,
  'color': '#6bbfe4'
}, {
  'code': 'LK',
  'name': 'Sri Lanka',
  'value': 21045394,
  'color': '#eea638'
}, {
  'code': 'SD',
  'name': 'Sudan',
  'value': 34735288,
  'color': '#e96e6e'
}, {
  'code': 'SR',
  'name': 'Suriname',
  'value': 529419,
  'color': '#6be59c'
}, {
  'code': 'SZ',
  'name': 'Swaziland',
  'value': 1203330,
  'color': '#e96e6e'
}, {
  'code': 'SE',
  'name': 'Sweden',
  'value': 9440747,
  'color': '#6bbfe4'
}, {
  'code': 'CH',
  'name': 'Switzerland',
  'value': 7701690,
  'color': '#6bbfe4'
}, {
  'code': 'SY',
  'name': 'Syria',
  'value': 20766037,
  'color': '#eea638'
}, {
  'code': 'TW',
  'name': 'Taiwan',
  'value': 23072000,
  'color': '#eea638'
}, {
  'code': 'TJ',
  'name': 'Tajikistan',
  'value': 6976958,
  'color': '#eea638'
}, {
  'code': 'TZ',
  'name': 'Tanzania',
  'value': 46218486,
  'color': '#e96e6e'
}, {
  'code': 'TH',
  'name': 'Thailand',
  'value': 69518555,
  'color': '#eea638'
}, {
  'code': 'TG',
  'name': 'Togo',
  'value': 6154813,
  'color': '#e96e6e'
}, {
  'code': 'TT',
  'name': 'Trinidad and Tobago',
  'value': 1346350,
  'color': '#f6d35b'
}, {
  'code': 'TN',
  'name': 'Tunisia',
  'value': 10594057,
  'color': '#e96e6e'
}, {
  'code': 'TR',
  'name': 'Turkey',
  'value': 73639596,
  'color': '#6bbfe4'
}, {
  'code': 'TM',
  'name': 'Turkmenistan',
  'value': 5105301,
  'color': '#eea638'
}, {
  'code': 'UG',
  'name': 'Uganda',
  'value': 34509205,
  'color': '#e96e6e'
}, {
  'code': 'UA',
  'name': 'Ukraine',
  'value': 45190180,
  'color': '#6bbfe4'
}, {
  'code': 'AE',
  'name': 'United Arab Emirates',
  'value': 7890924,
  'color': '#eea638'
}, {
  'code': 'GB',
  'name': 'United Kingdom',
  'value': 62417431,
  'color': '#6bbfe4'
}, {
  'code': 'US',
  'name': 'United States',
  'value': 313085380,
  'color': '#f6d35b'
}, {
  'code': 'UY',
  'name': 'Uruguay',
  'value': 3380008,
  'color': '#6be59c'
}, {
  'code': 'UZ',
  'name': 'Uzbekistan',
  'value': 27760267,
  'color': '#eea638'
}, {
  'code': 'VE',
  'name': 'Venezuela',
  'value': 29436891,
  'color': '#6be59c'
}, {
  'code': 'PS',
  'name': 'West Bank and Gaza',
  'value': 4152369,
  'color': '#eea638'
}, {
  'code': 'VN',
  'name': 'Vietnam',
  'value': 88791996,
  'color': '#eea638'
}, {
  'code': 'YE',
  'name': 'Yemen, Rep.',
  'value': 24799880,
  'color': '#eea638'
}, {
  'code': 'ZM',
  'name': 'Zambia',
  'value': 13474959,
  'color': '#e96e6e'
}, {
  'code': 'ZW',
  'name': 'Zimbabwe',
  'value': 12754378,
  'color': '#e96e6e'
}];

/* harmony default export */ __webpack_exports__["a"] = ({
  data: data,
  latlong: latlong
});

/***/ }),

/***/ 702:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "bubble-maps-page" }, [
    _c(
      "div",
      { staticClass: "row" },
      [
        _c(
          "vuestic-widget",
          {
            staticClass: "col-sm-12 widget-viewport-height",
            attrs: { headerText: "Bubble Maps" }
          },
          [_c("bubble-map", { attrs: { "map-data": _vm.bubbleMapData } })],
          1
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-36749e94", module.exports)
  }
}

/***/ })

});