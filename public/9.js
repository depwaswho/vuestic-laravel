webpackJsonp([9],{

/***/ 580:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(660)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(662)
/* template */
var __vue_template__ = __webpack_require__(663)
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
Component.options.__file = "resources\\assets\\js\\components\\maps\\line-maps\\LineMap.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f4b02fa4", Component.options)
  } else {
    hotAPI.reload("data-v-f4b02fa4", Component.options)
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
!1,d.dx=.5,d.dy=.5;document.attachEvent&&(d.isNN=!1,d.isIE=!0,d.isModern||(d.dx=0,d.dy=0));window.chrome&&(d.chrome=!0);d.handleMouseUp=function(a){for(var b=d.charts,c=0;c<b.length;c++){var e=b[c];e&&e.handleReleaseOutside&&e.handleReleaseOutside(a)}};d.handleMouseMove=function(a){for(var b=d.charts,c=0;c<b.length;c++){var e=b[c];e&&e.handleMouseMove&&e.handleMouseMove(a)}};d.handleKeyUp=function(a){for(var b=d.charts,c=0;c<b.length;c++){var e=b[c];e&&e.handleKeyUp&&e.handleKeyUp(a)}};d.handleWheel=
function(a){for(var b=d.charts,c=0;c<b.length;c++){var e=b[c];if(e&&e.mouseIsOver){(e.mouseWheelScrollEnabled||e.mouseWheelZoomEnabled)&&e.handleWheel&&(e.handleMouseMove(a),e.handleWheel(a));break}}};d.resetMouseOver=function(){for(var a=d.charts,b=0;b<a.length;b++){var c=a[b];c&&(c.mouseIsOver=!1)}};d.ready=function(a){d.onReadyArray.push(a)};d.handleLoad=function(){d.isReady=!0;for(var a=d.onReadyArray,b=0;b<a.length;b++){var c=a[b];isNaN(d.processDelay)?c():setTimeout(c,d.processDelay*b)}d.onReadyArray=
[]};d.addInitHandler=function(a,b){d.initHandlers.push({method:a,types:b})};d.callInitHandler=function(a){var b=d.initHandlers;if(d.initHandlers)for(var c=0;c<b.length;c++){var e=b[c];e.types?d.isInArray(e.types,a.type)&&e.method(a):e.method(a)}};d.getUniqueId=function(){d.uid++;return"AmChartsEl-"+d.uid};d.addGlobalListeners=function(){d.globalListenersAdded||(d.globalListenersAdded=!0,d.isNN&&(document.addEventListener("mousemove",d.handleMouseMove),document.addEventListener("keyup",d.handleKeyUp),
document.addEventListener("mouseup",d.handleMouseUp,!0),window.addEventListener("load",d.handleLoad,!0)),d.isIE&&(document.attachEvent("onmousemove",d.handleMouseMove),document.attachEvent("onmouseup",d.handleMouseUp),window.attachEvent("onload",d.handleLoad)))};d.addGlobalListeners();d.addWheelListeners=function(){d.wheelIsListened||(d.isNN&&(window.addEventListener("DOMMouseScroll",d.handleWheel,{passive:!1,useCapture:!0}),document.addEventListener("mousewheel",d.handleWheel,{passive:!1,useCapture:!0})),
d.isIE&&document.attachEvent("onmousewheel",d.handleWheel));d.wheelIsListened=!0};d.clear=function(){var a=d.charts;if(a)for(var b=a.length-1;0<=b;b--)a[b].clear();d.updateInt&&clearInterval(d.updateInt);d.requestAnimation&&window.cancelAnimationFrame(d.requestAnimation);d.charts=[];d.isNN&&(document.removeEventListener("mousemove",d.handleMouseMove,!0),document.removeEventListener("keyup",d.handleKeyUp,!0),document.removeEventListener("mouseup",d.handleMouseUp,!0),window.removeEventListener("load",
d.handleLoad,!0),window.removeEventListener("DOMMouseScroll",d.handleWheel,!0),document.removeEventListener("mousewheel",d.handleWheel,!0));d.isIE&&(document.detachEvent("onmousemove",d.handleMouseMove),document.detachEvent("onmouseup",d.handleMouseUp),window.detachEvent("onload",d.handleLoad));d.globalListenersAdded=!1;d.wheelIsListened=!1};d.makeChart=function(a,b,c){var e=b.type,g=b.theme;d.addGlobalListeners();d.isString(g)&&(g=d.themes[g],b.theme=g);var f;switch(e){case "serial":f=new d.AmSerialChart(g);
break;case "xy":f=new d.AmXYChart(g);break;case "pie":f=new d.AmPieChart(g);break;case "radar":f=new d.AmRadarChart(g);break;case "gauge":f=new d.AmAngularGauge(g);break;case "funnel":f=new d.AmFunnelChart(g);break;case "map":f=new d.AmMap(g);break;case "stock":f=new d.AmStockChart(g);break;case "gantt":f=new d.AmGanttChart(g)}d.extend(f,b);d.isReady?isNaN(c)?f.write(a):setTimeout(function(){d.realWrite(f,a)},c):d.ready(function(){isNaN(c)?f.write(a):setTimeout(function(){d.realWrite(f,a)},c)});return f};
d.realWrite=function(a,b){a.write(b)};d.updateCount=0;d.validateAt=Math.round(d.updateRate/10);d.update=function(){var a=d.charts;d.updateCount++;var b=!1;d.updateCount==d.validateAt&&(b=!0,d.updateCount=0);if(a)for(var c=a.length-1;0<=c;c--)a[c].update&&a[c].update(),b&&(a[c].autoResize?a[c].validateSize&&a[c].validateSize():a[c].premeasure&&a[c].premeasure());window.requestAnimationFrame&&(d.requestAnimation=window.requestAnimationFrame(d.update))};"complete"==document.readyState&&d.handleLoad()})();(function(){var d=window.AmCharts;d.toBoolean=function(a,b){if(void 0===a)return b;switch(String(a).toLowerCase()){case "true":case "yes":case "1":return!0;case "false":case "no":case "0":case null:return!1;default:return!!a}};d.removeFromArray=function(a,b){var c;if(void 0!==b&&void 0!==a)for(c=a.length-1;0<=c;c--)a[c]==b&&a.splice(c,1)};d.getPath=function(){var a=document.getElementsByTagName("script");if(a)for(var b=0;b<a.length;b++){var c=a[b].src;if(-1!==c.search(/\/(amcharts|ammap)\.js/))return c.replace(/\/(amcharts|ammap)\.js.*/,
"/")}};d.normalizeUrl=function(a){return""!==a&&-1===a.search(/\/$/)?a+"/":a};d.isAbsolute=function(a){return 0===a.search(/^http[s]?:|^\//)};d.isInArray=function(a,b){for(var c=0;c<a.length;c++)if(a[c]==b)return!0;return!1};d.getDecimals=function(a){var b=0;isNaN(a)||(a=String(a),-1!=a.indexOf("e-")?b=Number(a.split("-")[1]):-1!=a.indexOf(".")&&(b=a.split(".")[1].length));return b};d.wordwrap=function(a,b,c,e){var g,f,h,k;a+="";if(1>b)return a;g=-1;for(a=(k=a.split(/\r\n|\n|\r/)).length;++g<a;k[g]+=
h){h=k[g];for(k[g]="";h.length>b;k[g]+=d.trim(h.slice(0,f))+((h=h.slice(f)).length?c:""))f=2==e||(f=h.slice(0,b+1).match(/\S*(\s)?$/))[1]?b:f.input.length-f[0].length||1==e&&b||f.input.length+(f=h.slice(b).match(/^\S*/))[0].length;h=d.trim(h)}return k.join(c)};d.trim=function(a){return a.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")};d.wrappedText=function(a,b,c,e,g,f,h,k){var l=d.text(a,b,c,e,g,f,h);if(l){var m=l.getBBox();if(m.width>k){var n="\n";d.isModern||(n="<br>");k=Math.floor(k/(m.width/
b.length));2<k&&(k-=2);b=d.wordwrap(b,k,n,!0);l.remove();l=d.text(a,b,c,e,g,f,h)}}return l};d.getStyle=function(a,b){var c="";if(document.defaultView&&document.defaultView.getComputedStyle)try{c=document.defaultView.getComputedStyle(a,"").getPropertyValue(b)}catch(e){}else a.currentStyle&&(b=b.replace(/\-(\w)/g,function(a,b){return b.toUpperCase()}),c=a.currentStyle[b]);return c};d.removePx=function(a){if(void 0!==a)return Number(a.substring(0,a.length-2))};d.getURL=function(a,b){if(a)if("_self"!=
b&&b)if("_top"==b&&window.top)window.top.location.href=a;else if("_parent"==b&&window.parent)window.parent.location.href=a;else if("_blank"==b)window.open(a);else{var c=document.getElementsByName(b)[0];c?c.src=a:(c=d.windows[b])?c.opener&&!c.opener.closed?c.location.href=a:d.windows[b]=window.open(a):d.windows[b]=window.open(a)}else window.location.href=a};d.ifArray=function(a){return a&&"object"==typeof a&&0<a.length?!0:!1};d.callMethod=function(a,b){var c;for(c=0;c<b.length;c++){var e=b[c];if(e){if(e[a])e[a]();
var d=e.length;if(0<d){var f;for(f=0;f<d;f++){var h=e[f];if(h&&h[a])h[a]()}}}}};d.toNumber=function(a){return"number"==typeof a?a:Number(String(a).replace(/[^0-9\-.]+/g,""))};d.toColor=function(a){if(""!==a&&void 0!==a)if(-1!=a.indexOf(",")){a=a.split(",");var b;for(b=0;b<a.length;b++){var c=a[b].substring(a[b].length-6,a[b].length);a[b]="#"+c}}else a=a.substring(a.length-6,a.length),a="#"+a;return a};d.toCoordinate=function(a,b,c){var e;void 0!==a&&(a=String(a),c&&c<b&&(b=c),e=Number(a),-1!=a.indexOf("!")&&
(e=b-Number(a.substr(1))),-1!=a.indexOf("%")&&(e=b*Number(a.substr(0,a.length-1))/100));return e};d.fitToBounds=function(a,b,c){a<b&&(a=b);a>c&&(a=c);return a};d.isDefined=function(a){return void 0===a?!1:!0};d.stripNumbers=function(a){return a.replace(/[0-9]+/g,"")};d.roundTo=function(a,b){if(0>b)return a;var c=Math.pow(10,b);return Math.round(a*c)/c};d.toFixed=function(a,b){var c=!1;0>a&&(c=!0,a=Math.abs(a));var e=String(Math.round(a*Math.pow(10,b)));if(0<b){var d=e.length;if(d<b){var f;for(f=0;f<
b-d;f++)e="0"+e}d=e.substring(0,e.length-b);""===d&&(d=0);e=d+"."+e.substring(e.length-b,e.length);return c?"-"+e:e}return String(e)};d.formatDuration=function(a,b,c,e,g,f){var h=d.intervals,k=f.decimalSeparator;if(a>=h[b].contains){var l=a-Math.floor(a/h[b].contains)*h[b].contains;"ss"==b?(l=d.formatNumber(l,f),1==l.split(k)[0].length&&(l="0"+l)):l=d.roundTo(l,f.precision);("mm"==b||"hh"==b)&&10>l&&(l="0"+l);c=l+""+e[b]+""+c;a=Math.floor(a/h[b].contains);b=h[b].nextInterval;return d.formatDuration(a,
b,c,e,g,f)}"ss"==b&&(a=d.formatNumber(a,f),1==a.split(k)[0].length&&(a="0"+a));"mm"==b&&(a=d.roundTo(a,f.precision));("mm"==b||"hh"==b)&&10>a&&(a="0"+a);c=a+""+e[b]+""+c;if(h[g].count>h[b].count)for(a=h[b].count;a<h[g].count;a++)b=h[b].nextInterval,"ss"==b||"mm"==b||"hh"==b?c="00"+e[b]+""+c:"DD"==b&&(c="0"+e[b]+""+c);":"==c.charAt(c.length-1)&&(c=c.substring(0,c.length-1));return c};d.formatNumber=function(a,b,c,e,g){a=d.roundTo(a,b.precision);isNaN(c)&&(c=b.precision);var f=b.decimalSeparator;b=
b.thousandsSeparator;void 0==f&&(f=",");void 0==b&&(b=" ");var h;h=0>a?"-":"";a=Math.abs(a);var k=String(a),l=!1;-1!=k.indexOf("e")&&(l=!0);0<=c&&!l&&(k=d.toFixed(a,c));var m="";if(l)m=k;else{var k=k.split("."),l=String(k[0]),n;for(n=l.length;0<=n;n-=3)m=n!=l.length?0!==n?l.substring(n-3,n)+b+m:l.substring(n-3,n)+m:l.substring(n-3,n);void 0!==k[1]&&(m=m+f+k[1]);void 0!==c&&0<c&&"0"!=m&&(m=d.addZeroes(m,f,c))}m=h+m;""===h&&!0===e&&0!==a&&(m="+"+m);!0===g&&(m+="%");return m};d.addZeroes=function(a,
b,c){a=a.split(b);void 0===a[1]&&0<c&&(a[1]="0");return a[1].length<c?(a[1]+="0",d.addZeroes(a[0]+b+a[1],b,c)):void 0!==a[1]?a[0]+b+a[1]:a[0]};d.scientificToNormal=function(a){var b;a=String(a).split("e");var c;if("-"==a[1].substr(0,1)){b="0.";for(c=0;c<Math.abs(Number(a[1]))-1;c++)b+="0";b+=a[0].split(".").join("")}else{var e=0;b=a[0].split(".");b[1]&&(e=b[1].length);b=a[0].split(".").join("");for(c=0;c<Math.abs(Number(a[1]))-e;c++)b+="0"}return b};d.toScientific=function(a,b){if(0===a)return"0";
var c=Math.floor(Math.log(Math.abs(a))*Math.LOG10E),e=String(e).split(".").join(b);return String(e)+"e"+c};d.randomColor=function(){return"#"+("00000"+(16777216*Math.random()<<0).toString(16)).substr(-6)};d.hitTest=function(a,b,c){var e=!1,g=a.x,f=a.x+a.width,h=a.y,k=a.y+a.height,l=d.isInRectangle;e||(e=l(g,h,b));e||(e=l(g,k,b));e||(e=l(f,h,b));e||(e=l(f,k,b));e||!0===c||(e=d.hitTest(b,a,!0));return e};d.isInRectangle=function(a,b,c){return a>=c.x-5&&a<=c.x+c.width+5&&b>=c.y-5&&b<=c.y+c.height+5?
!0:!1};d.isPercents=function(a){if(-1!=String(a).indexOf("%"))return!0};d.formatValue=function(a,b,c,e,g,f,h,k){if(b){void 0===g&&(g="");var l;for(l=0;l<c.length;l++){var m=c[l],n=b[m];void 0!==n&&(n=f?d.addPrefix(n,k,h,e):d.formatNumber(n,e),a=a.replace(new RegExp("\\[\\["+g+""+m+"\\]\\]","g"),n))}}return a};d.formatDataContextValue=function(a,b){if(a){var c=a.match(/\[\[.*?\]\]/g),e;for(e=0;e<c.length;e++){var d=c[e],d=d.substr(2,d.length-4);void 0!==b[d]&&(a=a.replace(new RegExp("\\[\\["+d+"\\]\\]",
"g"),b[d]))}}return a};d.massReplace=function(a,b){for(var c in b)if(b.hasOwnProperty(c)){var e=b[c];void 0===e&&(e="");a=a.replace(c,e)}return a};d.cleanFromEmpty=function(a){return a.replace(/\[\[[^\]]*\]\]/g,"")};d.addPrefix=function(a,b,c,e,g){var f=d.formatNumber(a,e),h="",k,l,m;if(0===a)return"0";0>a&&(h="-");a=Math.abs(a);if(1<a)for(k=b.length-1;-1<k;k--){if(a>=b[k].number&&(l=a/b[k].number,m=Number(e.precision),1>m&&(m=1),c=d.roundTo(l,m),m=d.formatNumber(c,{precision:-1,decimalSeparator:e.decimalSeparator,
thousandsSeparator:e.thousandsSeparator}),!g||l==c)){f=h+""+m+""+b[k].prefix;break}}else for(k=0;k<c.length;k++)if(a<=c[k].number){l=a/c[k].number;m=Math.abs(Math.floor(Math.log(l)*Math.LOG10E));l=d.roundTo(l,m);f=h+""+l+""+c[k].prefix;break}return f};d.remove=function(a){a&&a.remove()};d.getEffect=function(a){">"==a&&(a="easeOutSine");"<"==a&&(a="easeInSine");"elastic"==a&&(a="easeOutElastic");return a};d.getObjById=function(a,b){var c,e;for(e=0;e<a.length;e++){var d=a[e];if(d.id==b){c=d;break}}return c};
d.applyTheme=function(a,b,c){b||(b=d.theme);try{b=JSON.parse(JSON.stringify(b))}catch(e){}b&&b[c]&&d.extend(a,b[c])};d.isString=function(a){return"string"==typeof a?!0:!1};d.extend=function(a,b,c){var e;a||(a={});for(e in b)c?a.hasOwnProperty(e)||(a[e]=b[e]):a[e]=b[e];return a};d.copyProperties=function(a,b){for(var c in a)a.hasOwnProperty(c)&&"events"!=c&&void 0!==a[c]&&"function"!=typeof a[c]&&"cname"!=c&&(b[c]=a[c])};d.processObject=function(a,b,c,e){if(!1===a instanceof b&&(a=e?d.extend(new b(c),
a):d.extend(a,new b(c),!0),a.listeners))for(var g in a.listeners)b=a.listeners[g],a.addListener(b.event,b.method);return a};d.fixNewLines=function(a){var b=RegExp("\\n","g");a&&(a=a.replace(b,"<br />"));return a};d.fixBrakes=function(a){if(d.isModern){var b=RegExp("<br>","g");a&&(a=a.replace(b,"\n"))}else a=d.fixNewLines(a);return a};d.deleteObject=function(a,b){if(a){if(void 0===b||null===b)b=20;if(0!==b)if("[object Array]"===Object.prototype.toString.call(a))for(var c=0;c<a.length;c++)d.deleteObject(a[c],
b-1),a[c]=null;else if(a&&!a.tagName)try{for(c in a.theme=null,a)a[c]&&("object"==typeof a[c]&&d.deleteObject(a[c],b-1),"function"!=typeof a[c]&&(a[c]=null))}catch(e){}}};d.bounce=function(a,b,c,e,d){return(b/=d)<1/2.75?7.5625*e*b*b+c:b<2/2.75?e*(7.5625*(b-=1.5/2.75)*b+.75)+c:b<2.5/2.75?e*(7.5625*(b-=2.25/2.75)*b+.9375)+c:e*(7.5625*(b-=2.625/2.75)*b+.984375)+c};d.easeInOutQuad=function(a,b,c,e,d){b/=d/2;if(1>b)return e/2*b*b+c;b--;return-e/2*(b*(b-2)-1)+c};d.easeInSine=function(a,b,c,e,d){return-e*
Math.cos(b/d*(Math.PI/2))+e+c};d.easeOutSine=function(a,b,c,e,d){return e*Math.sin(b/d*(Math.PI/2))+c};d.easeOutElastic=function(a,b,c,e,d){a=1.70158;var f=0,h=e;if(0===b)return c;if(1==(b/=d))return c+e;f||(f=.3*d);h<Math.abs(e)?(h=e,a=f/4):a=f/(2*Math.PI)*Math.asin(e/h);return h*Math.pow(2,-10*b)*Math.sin(2*(b*d-a)*Math.PI/f)+e+c};d.fixStepE=function(a){a=a.toExponential(0).split("e");var b=Number(a[1]);9==Number(a[0])&&b++;return d.generateNumber(1,b)};d.generateNumber=function(a,b){var c="",e;
e=0>b?Math.abs(b)-1:Math.abs(b);var d;for(d=0;d<e;d++)c+="0";return 0>b?Number("0."+c+String(a)):Number(String(a)+c)};d.setCN=function(a,b,c,e){if(a.addClassNames&&b&&(b=b.node)&&c){var d=b.getAttribute("class");a=a.classNamePrefix+"-";e&&(a="");d?b.setAttribute("class",d+" "+a+c):b.setAttribute("class",a+c)}};d.removeCN=function(a,b,c){b&&(b=b.node)&&c&&(b=b.classList)&&b.remove(a.classNamePrefix+"-"+c)};d.parseDefs=function(a,b){for(var c in a){var e=typeof a[c];if(0<a[c].length&&"object"==e)for(var g=
0;g<a[c].length;g++)e=document.createElementNS(d.SVG_NS,c),b.appendChild(e),d.parseDefs(a[c][g],e);else"object"==e?(e=document.createElementNS(d.SVG_NS,c),b.appendChild(e),d.parseDefs(a[c],e)):b.setAttribute(c,a[c])}}})();(function(){var d=window.AmCharts;d.AxisBase=d.Class({construct:function(a){this.createEvents("clickItem","rollOverItem","rollOutItem","rollOverGuide","rollOutGuide","clickGuide");this.titleDY=this.y=this.x=this.dy=this.dx=0;this.axisThickness=1;this.axisColor="#000000";this.axisAlpha=1;this.gridCount=this.tickLength=5;this.gridAlpha=.15;this.gridThickness=1;this.gridColor="#000000";this.dashLength=0;this.labelFrequency=1;this.showLastLabel=this.showFirstLabel=!0;this.fillColor="#FFFFFF";this.fillAlpha=
0;this.labelsEnabled=!0;this.labelRotation=0;this.autoGridCount=!0;this.offset=0;this.guides=[];this.visible=!0;this.counter=0;this.guides=[];this.ignoreAxisWidth=this.inside=!1;this.minHorizontalGap=75;this.minVerticalGap=35;this.titleBold=!0;this.minorGridEnabled=!1;this.minorGridAlpha=.07;this.autoWrap=!1;this.titleAlign="middle";this.labelOffset=0;this.bcn="axis-";this.centerLabels=!1;this.firstDayOfWeek=1;this.centerLabelOnFullPeriod=this.markPeriodChange=this.boldPeriodBeginning=!0;this.titleWidth=
0;this.periods=[{period:"fff",count:1},{period:"fff",count:5},{period:"fff",count:10},{period:"fff",count:50},{period:"fff",count:100},{period:"fff",count:500},{period:"ss",count:1},{period:"ss",count:5},{period:"ss",count:10},{period:"ss",count:30},{period:"mm",count:1},{period:"mm",count:5},{period:"mm",count:10},{period:"mm",count:30},{period:"hh",count:1},{period:"hh",count:3},{period:"hh",count:6},{period:"hh",count:12},{period:"DD",count:1},{period:"DD",count:2},{period:"DD",count:3},{period:"DD",
count:4},{period:"DD",count:5},{period:"WW",count:1},{period:"MM",count:1},{period:"MM",count:2},{period:"MM",count:3},{period:"MM",count:6},{period:"YYYY",count:1},{period:"YYYY",count:2},{period:"YYYY",count:5},{period:"YYYY",count:10},{period:"YYYY",count:50},{period:"YYYY",count:100}];this.dateFormats=[{period:"fff",format:"NN:SS.QQQ"},{period:"ss",format:"JJ:NN:SS"},{period:"mm",format:"JJ:NN"},{period:"hh",format:"JJ:NN"},{period:"DD",format:"MMM DD"},{period:"WW",format:"MMM DD"},{period:"MM",
format:"MMM"},{period:"YYYY",format:"YYYY"}];this.nextPeriod={fff:"ss",ss:"mm",mm:"hh",hh:"DD",DD:"MM",MM:"YYYY"};d.applyTheme(this,a,"AxisBase")},zoom:function(a,b){this.start=a;this.end=b;this.dataChanged=!0;this.draw()},fixAxisPosition:function(){var a=this.position;"H"==this.orientation?("left"==a&&(a="bottom"),"right"==a&&(a="top")):("bottom"==a&&(a="left"),"top"==a&&(a="right"));this.position=a},init:function(){this.createBalloon()},draw:function(){var a=this.chart;this.prevBY=this.prevBX=NaN;
this.allLabels=[];this.counter=0;this.destroy();this.fixAxisPosition();this.setBalloonBounds();this.labels=[];var b=a.container,c=b.set();a.gridSet.push(c);this.set=c;b=b.set();a.axesLabelsSet.push(b);this.labelsSet=b;this.axisLine=new this.axisRenderer(this);this.autoGridCount?("V"==this.orientation?(a=this.height/this.minVerticalGap,3>a&&(a=3)):a=this.width/this.minHorizontalGap,this.gridCountR=Math.max(a,1)):this.gridCountR=this.gridCount;this.axisWidth=this.axisLine.axisWidth;this.addTitle()},
setOrientation:function(a){this.orientation=a?"H":"V"},addTitle:function(){var a=this.title;this.titleLabel=null;if(a){var b=this.chart,c=this.titleColor;void 0===c&&(c=b.color);var e=this.titleFontSize;isNaN(e)&&(e=b.fontSize+1);a=d.text(b.container,a,c,b.fontFamily,e,this.titleAlign,this.titleBold);d.setCN(b,a,this.bcn+"title");this.titleLabel=a}},positionTitle:function(){var a=this.titleLabel;if(a){var b,c,e=this.labelsSet,g={};0<e.length()?g=e.getBBox():(g.x=0,g.y=0,g.width=this.width,g.height=
this.height,d.VML&&(g.y+=this.y,g.x+=this.x));e.push(a);var e=g.x,f=g.y;d.VML&&(f-=this.y,e-=this.x);var h=g.width,g=g.height,k=this.width,l=this.height,m=0,n=a.getBBox().height/2,q=this.inside,p=this.titleAlign;switch(this.position){case "top":b="left"==p?-1:"right"==p?k:k/2;c=f-10-n;break;case "bottom":b="left"==p?-1:"right"==p?k:k/2;c=f+g+10+n;break;case "left":b=e-10-n;q&&(b-=5);m=-90;c=("left"==p?l+1:"right"==p?-1:l/2)+this.titleDY;this.titleWidth=n+10;break;case "right":b=e+h+10+n,q&&(b+=7),
c=("left"==p?l+2:"right"==p?-2:l/2)+this.titleDY,this.titleWidth=n+10,m=-90}this.marginsChanged?(a.translate(b,c),this.tx=b,this.ty=c):a.translate(this.tx,this.ty);this.marginsChanged=!1;isNaN(this.titleRotation)||(m=this.titleRotation);0!==m&&a.rotate(m)}},pushAxisItem:function(a,b){var c=this,e=a.graphics();0<e.length()&&(b?c.labelsSet.push(e):c.set.push(e));if(e=a.getLabel())c.labelsSet.push(e),e.click(function(b){c.handleMouse(b,a,"clickItem")}).touchend(function(b){c.handleMouse(b,a,"clickItem")}).mouseover(function(b){c.handleMouse(b,
a,"rollOverItem")}).mouseout(function(b){c.handleMouse(b,a,"rollOutItem")})},handleMouse:function(a,b,c){this.fire({type:c,value:b.value,serialDataItem:b.serialDataItem,axis:this,target:b.label,chart:this.chart,event:a})},addGuide:function(a){for(var b=this.guides,c=!1,e=b.length,g=0;g<b.length;g++)b[g]==a&&(c=!0,e=g);a=d.processObject(a,d.Guide,this.theme);a.id||(a.id="guideAuto"+e+"_"+(new Date).getTime());c||b.push(a)},removeGuide:function(a){var b=this.guides,c;for(c=0;c<b.length;c++)b[c]==a&&
b.splice(c,1)},handleGuideOver:function(a){clearTimeout(this.chart.hoverInt);var b={x:0,y:0,width:0,height:0};a.graphics&&(b=a.graphics.getBBox());var c=this.x+b.x+b.width/2,b=this.y+b.y+b.height/2,e=a.fillColor;void 0===e&&(e=a.lineColor);this.chart.showBalloon(a.balloonText,e,!0,c,b);this.fire({type:"rollOverGuide",guide:a,chart:this.chart})},handleGuideOut:function(a){this.chart.hideBalloon();this.fire({type:"rollOutGuide",guide:a,chart:this.chart})},handleGuideClick:function(a){this.chart.hideBalloon();
this.fire({type:"clickGuide",guide:a,chart:this.chart})},addEventListeners:function(a,b){var c=this;a.mouseover(function(){c.handleGuideOver(b)});a.mouseup(function(){c.handleGuideClick(b)});a.touchstart(function(){c.handleGuideOver(b)});a.mouseout(function(){c.handleGuideOut(b)})},getBBox:function(){var a;this.labelsSet&&(a=this.labelsSet.getBBox());a?d.VML||(a={x:a.x+this.x,y:a.y+this.y,width:a.width,height:a.height}):a={x:0,y:0,width:0,height:0};return a},destroy:function(){d.remove(this.set);
d.remove(this.labelsSet);var a=this.axisLine;a&&d.remove(a.axisSet);d.remove(this.grid0)},chooseMinorFrequency:function(a){for(var b=10;0<b;b--)if(a/b==Math.round(a/b))return a/b},parseDatesDraw:function(){var a,b=this.chart,c=this.showFirstLabel,e=this.showLastLabel,g,f="",h=d.extractPeriod(this.minPeriod),k=d.getPeriodDuration(h.period,h.count),l,m,n,q,p,t=this.firstDayOfWeek,r=this.boldPeriodBeginning;a=this.minorGridEnabled;var w,z=this.gridAlpha,x,u=this.choosePeriod(0),A=u.period,u=u.count,
y=d.getPeriodDuration(A,u);y<k&&(A=h.period,u=h.count,y=k);h=A;"WW"==h&&(h="DD");this.stepWidth=this.getStepWidth(this.timeDifference);var B=Math.ceil(this.timeDifference/y)+5,D=l=d.resetDateToMin(new Date(this.startTime-y),A,u,t).getTime();if(h==A&&1==u&&this.centerLabelOnFullPeriod||this.autoWrap||this.centerLabels)n=y*this.stepWidth,this.autoWrap&&!this.centerLabels&&(n=-n);this.cellWidth=k*this.stepWidth;q=Math.round(l/y);k=-1;q/2==Math.round(q/2)&&(k=-2,l-=y);q=this.firstTime;var C=0,I=0;a&&
1<u&&(w=this.chooseMinorFrequency(u),x=d.getPeriodDuration(A,w),"DD"==A&&(x+=d.getPeriodDuration("hh")),"fff"==A&&(x=1));if(0<this.gridCountR)for(B-5-k>this.autoRotateCount&&!isNaN(this.autoRotateAngle)&&(this.labelRotationR=this.autoRotateAngle),a=k;a<=B;a++){p=q+y*(a+Math.floor((D-q)/y))-C;"DD"==A&&(p+=36E5);p=d.resetDateToMin(new Date(p),A,u,t).getTime();"MM"==A&&(g=(p-l)/y,1.5<=(p-l)/y&&(p=p-(g-1)*y+d.getPeriodDuration("DD",3),p=d.resetDateToMin(new Date(p),A,1).getTime(),C+=y));g=(p-this.startTime)*
this.stepWidth;if("radar"==b.type){if(g=this.axisWidth-g,0>g||g>this.axisWidth)continue}else this.rotate?"date"==this.type&&"middle"==this.gridPosition&&(I=-y*this.stepWidth/2):"date"==this.type&&(g=this.axisWidth-g);f=!1;this.nextPeriod[h]&&(f=this.checkPeriodChange(this.nextPeriod[h],1,p,l,h));l=!1;f&&this.markPeriodChange?(f=this.dateFormatsObject[this.nextPeriod[h]],this.twoLineMode&&(f=this.dateFormatsObject[h]+"\n"+f,f=d.fixBrakes(f)),l=!0):f=this.dateFormatsObject[h];r||(l=!1);this.currentDateFormat=
f;f=d.formatDate(new Date(p),f,b);if(a==k&&!c||a==B&&!e)f=" ";this.labelFunction&&(f=this.labelFunction(f,new Date(p),this,A,u,m).toString());this.boldLabels&&(l=!0);m=new this.axisItemRenderer(this,g,f,!1,n,I,!1,l);this.pushAxisItem(m);m=l=p;if(!isNaN(w))for(g=1;g<u;g+=w)this.gridAlpha=this.minorGridAlpha,f=p+x*g,f=d.resetDateToMin(new Date(f),A,w,t).getTime(),f=new this.axisItemRenderer(this,(f-this.startTime)*this.stepWidth,void 0,void 0,void 0,void 0,void 0,void 0,void 0,!0),this.pushAxisItem(f);
this.gridAlpha=z}},choosePeriod:function(a){var b=d.getPeriodDuration(this.periods[a].period,this.periods[a].count),c=this.periods;return this.timeDifference<b&&0<a?c[a-1]:Math.ceil(this.timeDifference/b)<=this.gridCountR?c[a]:a+1<c.length?this.choosePeriod(a+1):c[a]},getStepWidth:function(a){var b;this.startOnAxis?(b=this.axisWidth/(a-1),1==a&&(b=this.axisWidth)):b=this.axisWidth/a;return b},timeZoom:function(a,b){this.startTime=a;this.endTime=b},minDuration:function(){var a=d.extractPeriod(this.minPeriod);
return d.getPeriodDuration(a.period,a.count)},checkPeriodChange:function(a,b,c,e,g){c=new Date(c);var f=new Date(e),h=this.firstDayOfWeek;e=b;"DD"==a&&(b=1);c=d.resetDateToMin(c,a,b,h).getTime();b=d.resetDateToMin(f,a,b,h).getTime();return"DD"==a&&"hh"!=g&&c-b<d.getPeriodDuration(a,e)-d.getPeriodDuration("hh",1)?!1:c!=b?!0:!1},generateDFObject:function(){this.dateFormatsObject={};var a;for(a=0;a<this.dateFormats.length;a++){var b=this.dateFormats[a];this.dateFormatsObject[b.period]=b.format}},hideBalloon:function(){this.balloon&&
this.balloon.hide&&this.balloon.hide();this.prevBY=this.prevBX=NaN},formatBalloonText:function(a){return a},showBalloon:function(a,b,c,e){var d=this.offset;switch(this.position){case "bottom":b=this.height+d;break;case "top":b=-d;break;case "left":a=-d;break;case "right":a=this.width+d}c||(c=this.currentDateFormat);if("V"==this.orientation){if(0>b||b>this.height)return;if(isNaN(b)){this.hideBalloon();return}b=this.adjustBalloonCoordinate(b,e);e=this.coordinateToValue(b)}else{if(0>a||a>this.width)return;
if(isNaN(a)){this.hideBalloon();return}a=this.adjustBalloonCoordinate(a,e);e=this.coordinateToValue(a)}var f;if(d=this.chart.chartCursor)f=d.index;if(this.balloon&&void 0!==e&&this.balloon.enabled){if(this.balloonTextFunction){if("date"==this.type||!0===this.parseDates)e=new Date(e);e=this.balloonTextFunction(e)}else this.balloonText?e=this.formatBalloonText(this.balloonText,f,c):isNaN(e)||(e=this.formatValue(e,c));if(a!=this.prevBX||b!=this.prevBY)this.balloon.setPosition(a,b),this.prevBX=a,this.prevBY=
b,e&&this.balloon.showBalloon(e)}},adjustBalloonCoordinate:function(a){return a},createBalloon:function(){var a=this.chart,b=a.chartCursor;b&&(b=b.cursorPosition,"mouse"!=b&&(this.stickBalloonToCategory=!0),"start"==b&&(this.stickBalloonToStart=!0),"ValueAxis"==this.cname&&(this.stickBalloonToCategory=!1));this.balloon&&(this.balloon.destroy&&this.balloon.destroy(),d.extend(this.balloon,a.balloon,!0))},setBalloonBounds:function(){var a=this.balloon;if(a){var b=this.chart;a.cornerRadius=0;a.shadowAlpha=
0;a.borderThickness=1;a.borderAlpha=1;a.adjustBorderColor=!1;a.showBullet=!1;this.balloon=a;a.chart=b;a.mainSet=b.plotBalloonsSet;a.pointerWidth=this.tickLength;if(this.parseDates||"date"==this.type)a.pointerWidth=0;a.className=this.id;b="V";"V"==this.orientation&&(b="H");this.stickBalloonToCategory||(a.animationDuration=0);var c,e,d,f,h=this.inside,k=this.width,l=this.height;switch(this.position){case "bottom":c=0;e=k;h?(d=0,f=l):(d=l,f=l+1E3);break;case "top":c=0;e=k;h?(d=0,f=l):(d=-1E3,f=0);break;
case "left":d=0;f=l;h?(c=0,e=k):(c=-1E3,e=0);break;case "right":d=0,f=l,h?(c=0,e=k):(c=k,e=k+1E3)}a.drop||(a.pointerOrientation=b);a.setBounds(c,d,e,f)}}})})();(function(){var d=window.AmCharts;d.ValueAxis=d.Class({inherits:d.AxisBase,construct:function(a){this.cname="ValueAxis";this.createEvents("axisChanged","logarithmicAxisFailed","axisZoomed","axisIntZoomed");d.ValueAxis.base.construct.call(this,a);this.dataChanged=!0;this.stackType="none";this.position="left";this.unitPosition="right";this.includeAllValues=this.recalculateToPercents=this.includeHidden=this.includeGuidesInMinMax=this.integersOnly=!1;this.durationUnits={DD:"d. ",hh:":",mm:":",ss:""};
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
b+c:c+b),this.labelFunction&&(c="date"==this.type?this.labelFunction(c,new Date(a),this).toString():this.labelFunction(a,c,this).toString()),c},getMinorGridStep:function(a,b){var c=[5,4,2];60>b&&c.shift();for(var e=Math.floor(Math.log(Math.abs(a))*Math.LOG10E),d=0;d<c.length;d++){var f=a/c[d],h=Math.floor(Math.log(Math.abs(f))*Math.LOG10E);if(!(1<Math.abs(e-h)))if(1>a){if(h=Math.pow(10,-h)*f,h==Math.round(h))return f}else if(f==Math.round(f))return f}return 1},stackGraphs:function(a){var b=this.stackType;
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
c,a.height,n,m),h.translate(b-k+g,f));d.setCN(a.chart,h,"guide-fill");e.id&&d.setCN(a.chart,h,"guide-fill-"+e.id);this.set=l.set([h])},graphics:function(){return this.set},getLabel:function(){}})})();(function(){var d=window.AmCharts;d.AmChart=d.Class({construct:function(a){this.svgIcons=this.tapToActivate=!0;this.theme=a;this.classNamePrefix="amcharts";this.addClassNames=!1;this.version="3.21.15";d.addChart(this);this.createEvents("buildStarted","dataUpdated","init","rendered","drawn","failed","resized","animationFinished");this.height=this.width="100%";this.dataChanged=!0;this.chartCreated=!1;this.previousWidth=this.previousHeight=0;this.backgroundColor="#FFFFFF";this.borderAlpha=this.backgroundAlpha=
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
this.legend&&this.legend.destroy&&this.legend.destroy()},clearTimeOuts:function(){var a=this.timeOuts;if(a){var b;for(b=0;b<a.length;b++)clearTimeout(a[b])}this.timeOuts=[]},clear:function(a){try{document.removeEventListener("touchstart",this.docfn1,!0),document.removeEventListener("touchend",this.docfn2,!0)}catch(b){}d.callMethod("clear",[this.chartScrollbar,this.scrollbarV,this.scrollbarH,this.chartCursor]);this.chartCursor=this.scrollbarH=this.scrollbarV=this.chartScrollbar=null;this.clearTimeOuts();
this.container&&(this.container.remove(this.chartDiv),this.container.remove(this.legendDiv));a||d.removeChart(this);if(a=this.div)for(;a.firstChild;)a.removeChild(a.firstChild);this.legend&&this.legend.destroy&&this.legend.destroy();this.AmExport&&this.AmExport.clear&&this.AmExport.clear()},setMouseCursor:function(a){"auto"==a&&d.isNN&&(a="default");this.chartDiv.style.cursor=a;this.legendDiv.style.cursor=a},redrawLabels:function(){this.labels=[];var a=this.allLabels;this.createLabelsSet();var b;
for(b=0;b<a.length;b++)this.drawLabel(a[b])},drawLabel:function(a){var b=this;if(b.container&&!1!==a.enabled){a=d.processObject(a,d.Label,b.theme);var c=a.y,e=a.text,g=a.align,f=a.size,h=a.color,k=a.rotation,l=a.alpha,m=a.bold,n=d.toCoordinate(a.x,b.realWidth),c=d.toCoordinate(c,b.realHeight);n||(n=0);c||(c=0);void 0===h&&(h=b.color);isNaN(f)&&(f=b.fontSize);g||(g="start");"left"==g&&(g="start");"right"==g&&(g="end");"center"==g&&(g="middle",k?c=b.realHeight-c+c/2:n=b.realWidth/2-n);void 0===l&&(l=
1);void 0===k&&(k=0);c+=f/2;e=d.text(b.container,e,h,b.fontFamily,f,g,m,l);e.translate(n,c);void 0!==a.tabIndex&&e.setAttr("tabindex",a.tabIndex);d.setCN(b,e,"label");a.id&&d.setCN(b,e,"label-"+a.id);0!==k&&e.rotate(k);a.url?(e.setAttr("cursor","pointer"),e.click(function(){d.getURL(a.url,b.urlTarget)})):e.node.style.pointerEvents="none";b.labelsSet.push(e);b.labels.push(e)}},addLabel:function(a,b,c,e,d,f,h,k,l,m){a={x:a,y:b,text:c,align:e,size:d,color:f,alpha:k,rotation:h,bold:l,url:m,enabled:!0};
this.container&&this.drawLabel(a);this.allLabels.push(a)},clearLabels:function(){var a=this.labels,b;for(b=a.length-1;0<=b;b--)a[b].remove();this.labels=[];this.allLabels=[]},updateHeight:function(){var a=this.divRealHeight,b=this.legend;if(b){var c=this.legendDiv.offsetHeight,b=b.position;if("top"==b||"bottom"==b){a-=c;if(0>a||isNaN(a))a=0;this.chartDiv.style.height=a+"px"}}return a},updateWidth:function(){var a=this.divRealWidth,b=this.divRealHeight,c=this.legend;if(c){var e=this.legendDiv,d=e.offsetWidth;
isNaN(c.width)||(d=c.width);c.ieW&&(d=c.ieW);var f=e.offsetHeight,e=e.style,h=this.chartDiv.style,k=c.position;if(("right"==k||"left"==k)&&void 0===c.divId){a-=d;if(0>a||isNaN(a))a=0;h.width=a+"px";this.balloon&&this.balloon.setBounds&&this.balloon.setBounds(2,2,a-2,this.realHeight);"left"==k?(h.left=d+"px",e.left="0px"):(h.left="0px",e.left=a+"px");b>f&&(e.top=(b-f)/2+"px")}}return a},getTitleHeight:function(){this.drawTitles(!0);return this.titleHeight},addTitle:function(a,b,c,e,d){isNaN(b)&&(b=
this.fontSize+2);a={text:a,size:b,color:c,alpha:e,bold:d,enabled:!0};this.titles.push(a);return a},handleWheel:function(a){var b=0;a||(a=window.event);a.wheelDelta?b=a.wheelDelta/120:a.detail&&(b=-a.detail/3);b&&this.handleWheelReal(b,a.shiftKey);a.preventDefault&&a.preventDefault()},handleWheelReal:function(){},handleDocTouchStart:function(){this.handleMouseMove();this.tmx=this.mouseX;this.tmy=this.mouseY;this.touchStartTime=(new Date).getTime()},handleDocTouchEnd:function(){-.5<this.tmx&&this.tmx<
this.divRealWidth+1&&0<this.tmy&&this.tmy<this.divRealHeight?(this.handleMouseMove(),4>Math.abs(this.mouseX-this.tmx)&&4>Math.abs(this.mouseY-this.tmy)?(this.tapped=!0,this.panRequired&&this.panEventsEnabled&&this.chartDiv&&(this.chartDiv.style.msTouchAction="none",this.chartDiv.style.touchAction="none")):this.mouseIsOver||this.resetTouchStyle()):(this.tapped=!1,this.resetTouchStyle())},resetTouchStyle:function(){this.panEventsEnabled&&this.chartDiv&&(this.chartDiv.style.msTouchAction="auto",this.chartDiv.style.touchAction=
"auto")},checkTouchDuration:function(a){var b=this,c=(new Date).getTime();if(a)if(a.touches)b.isTouchEvent=!0;else if(!b.isTouchEvent)return!0;if(c-b.touchStartTime>b.touchClickDuration)return!0;setTimeout(function(){b.resetTouchDuration()},300)},resetTouchDuration:function(){this.isTouchEvent=!1},checkTouchMoved:function(){if(4<Math.abs(this.mouseX-this.tmx)||4<Math.abs(this.mouseY-this.tmy))return!0},addListeners:function(){var a=this,b=a.chartDiv;document.addEventListener?("ontouchstart"in document.documentElement&&
(b.addEventListener("touchstart",function(b){a.handleTouchStart.call(a,b)},!0),b.addEventListener("touchmove",function(b){a.handleMouseMove.call(a,b)},!0),b.addEventListener("touchend",function(b){a.handleTouchEnd.call(a,b)},!0),a.docfn1=function(b){a.handleDocTouchStart.call(a,b)},a.docfn2=function(b){a.handleDocTouchEnd.call(a,b)},document.addEventListener("touchstart",a.docfn1,!0),document.addEventListener("touchend",a.docfn2,!0)),b.addEventListener("mousedown",function(b){a.mouseIsOver=!0;a.handleMouseMove.call(a,
b);a.handleMouseDown.call(a,b);a.handleDocTouchStart.call(a,b)},!0),b.addEventListener("mouseover",function(b){a.handleMouseOver.call(a,b)},!0),b.addEventListener("mouseout",function(b){a.handleMouseOut.call(a,b)},!0),b.addEventListener("mouseup",function(b){a.handleDocTouchEnd.call(a,b)},!0)):(b.attachEvent("onmousedown",function(b){a.handleMouseDown.call(a,b)}),b.attachEvent("onmouseover",function(b){a.handleMouseOver.call(a,b)}),b.attachEvent("onmouseout",function(b){a.handleMouseOut.call(a,b)}))},
dispDUpd:function(){this.skipEvents||(this.dispatchDataUpdated&&(this.dispatchDataUpdated=!1,this.fire({type:"dataUpdated",chart:this})),this.chartCreated||(this.chartCreated=!0,this.fire({type:"init",chart:this})),!this.chartRendered&&0<this.divRealWidth&&0<this.divRealHeight&&(this.fire({type:"rendered",chart:this}),this.chartRendered=!0),this.fire({type:"drawn",chart:this}));this.skipEvents=!1},validateSize:function(){var a=this;a.premeasure();a.checkDisplay();a.cssScale=1;a.cssAngle=0;a.checkTransform(a.div);
if(a.divRealWidth!=a.previousWidth||a.divRealHeight!=a.previousHeight){var b=a.legend;if(0<a.realWidth&&0<a.realHeight){a.sizeChanged=!0;if(b){a.legendInitTO&&clearTimeout(a.legendInitTO);var c=setTimeout(function(){b.invalidateSize()},10);a.timeOuts.push(c);a.legendInitTO=c}a.marginsUpdated=!1;clearTimeout(a.initTO);c=setTimeout(function(){a.initChart()},10);a.timeOuts.push(c);a.initTO=c}a.renderFix();b&&b.renderFix&&b.renderFix();a.positionCred();clearTimeout(a.resizedTO);a.resizedTO=setTimeout(function(){a.fire({type:"resized",
chart:a})},10);a.previousHeight=a.divRealHeight;a.previousWidth=a.divRealWidth}},invalidateSize:function(){this.previousHeight=this.previousWidth=NaN;this.invalidateSizeReal()},invalidateSizeReal:function(){var a=this;a.marginsUpdated=!1;clearTimeout(a.validateTO);var b=setTimeout(function(){a.validateSize()},5);a.timeOuts.push(b);a.validateTO=b},validateData:function(a){this.chartCreated&&(this.dataChanged=!0,this.marginsUpdated=!1,this.initChart(a))},validateNow:function(a,b){this.initTO&&clearTimeout(this.initTO);
a&&(this.dataChanged=!0,this.marginsUpdated=!1);this.skipEvents=b;this.chartRendered=!1;var c=this.legend;c&&c.position!=this.prevLegendPosition&&(this.previousWidth=this.mw=0,c.invalidateSize&&(c.invalidateSize(),this.validateSize()));this.write(this.div)},showItem:function(a){a.hidden=!1;this.initChart()},hideItem:function(a){a.hidden=!0;this.initChart()},hideBalloon:function(){var a=this;clearTimeout(a.hoverInt);clearTimeout(a.balloonTO);a.hoverInt=setTimeout(function(){a.hideBalloonReal.call(a)},
a.hideBalloonTime)},cleanChart:function(){},hideBalloonReal:function(){var a=this.balloon;a&&a.hide&&a.hide()},showBalloon:function(a,b,c,e,d){var f=this;clearTimeout(f.balloonTO);clearTimeout(f.hoverInt);f.balloonTO=setTimeout(function(){f.showBalloonReal.call(f,a,b,c,e,d)},1)},showBalloonReal:function(a,b,c,e,d){this.handleMouseMove();var f=this.balloon;f.enabled&&(f.followCursor(!1),f.changeColor(b),!c||f.fixedPosition?(f.setPosition(e,d),isNaN(e)||isNaN(d)?f.followCursor(!0):f.followCursor(!1)):
f.followCursor(!0),a&&f.showBalloon(a))},handleMouseOver:function(){this.outTO&&clearTimeout(this.outTO);d.resetMouseOver();this.mouseIsOver=!0},handleMouseOut:function(){var a=this;d.resetMouseOver();a.outTO&&clearTimeout(a.outTO);a.outTO=setTimeout(function(){a.handleMouseOutReal()},10)},handleMouseOutReal:function(){this.mouseIsOver=!1},handleMouseMove:function(a){a||(a=window.event);this.mouse2Y=this.mouse2X=NaN;var b,c,e,d;if(a){if(a.touches){var f=a.touches.item(1);f&&this.panEventsEnabled&&
this.boundingRect&&(e=f.clientX-this.boundingRect.left,d=f.clientY-this.boundingRect.top);a=a.touches.item(0);if(!a)return}else this.wasTouched=!1;this.boundingRect&&a.clientX&&(b=a.clientX-this.boundingRect.left,c=a.clientY-this.boundingRect.top);isNaN(e)?this.mouseX=b:(this.mouseX=Math.min(b,e),this.mouse2X=Math.max(b,e));isNaN(d)?this.mouseY=c:(this.mouseY=Math.min(c,d),this.mouse2Y=Math.max(c,d));this.autoTransform&&(this.mouseX/=this.cssScale,this.mouseY/=this.cssScale)}},handleTouchStart:function(a){this.hideBalloonReal();
a&&(a.touches&&this.tapToActivate&&!this.tapped||!this.panRequired)||(this.handleMouseMove(a),this.handleMouseDown(a))},handleTouchEnd:function(a){this.wasTouched=!0;this.handleMouseMove(a);d.resetMouseOver();this.handleReleaseOutside(a)},handleReleaseOutside:function(){this.handleDocTouchEnd.call(this)},handleMouseDown:function(a){d.resetMouseOver();this.mouseIsOver=!0;a&&a.preventDefault&&(this.panEventsEnabled?a.preventDefault():a.touches||a.preventDefault())},handleKeyUp:function(a){},addLegend:function(a,
b){a=d.processObject(a,d.AmLegend,this.theme);a.divId=b;a.ieW=0;var c;c="object"!=typeof b&&b?document.getElementById(b):b;this.legend=a;a.chart=this;c?(a.div=c,a.position="outside",a.autoMargins=!1):a.div=this.legendDiv;return a},removeLegend:function(){this.legend=void 0;this.previousWidth=0;this.legendDiv.innerHTML=""},handleResize:function(){(d.isPercents(this.width)||d.isPercents(this.height))&&this.invalidateSizeReal();this.renderFix()},renderFix:function(){if(!d.VML){var a=this.container;a&&
a.renderFix()}},getSVG:function(){if(d.hasSVG)return this.container},animate:function(a,b,c,e,g,f,h){a["an_"+b]&&d.removeFromArray(this.animations,a["an_"+b]);c={obj:a,frame:0,attribute:b,from:c,to:e,time:g,effect:f,suffix:h};a["an_"+b]=c;this.animations.push(c);return c},setLegendData:function(a){var b=this.legend;b&&b.setData(a)},stopAnim:function(a){d.removeFromArray(this.animations,a)},updateAnimations:function(){var a;this.container&&this.container.update();if(this.animations)for(a=this.animations.length-
1;0<=a;a--){var b=this.animations[a],c=d.updateRate*b.time,e=b.frame+1,g=b.obj,f=b.attribute;if(e<=c){b.frame++;var h=Number(b.from),k=Number(b.to)-h,c=d[b.effect](0,e,h,k,c);0===k?(this.animations.splice(a,1),g.node.style[f]=Number(b.to)+b.suffix):g.node.style[f]=c+b.suffix}else g.node.style[f]=Number(b.to)+b.suffix,g.animationFinished=!0,this.animations.splice(a,1)}},update:function(){this.updateAnimations();var a=this.animatable;if(0<a.length){for(var b=!0,c=a.length-1;0<=c;c--){var e=a[c];e&&
(e.animationFinished?a.splice(c,1):b=!1)}b&&(this.fire({type:"animationFinished",chart:this}),this.animatable=[])}},inIframe:function(){try{return window.self!==window.top}catch(a){return!0}},brr:function(){if(!this.hideCredits){var a="amcharts.com",b=window.location.hostname.split("."),c;2<=b.length&&(c=b[b.length-2]+"."+b[b.length-1]);this.amLink&&(b=this.amLink.parentNode)&&b.removeChild(this.amLink);if(c!=a||!0===this.inIframe()){c=a="http://www."+a;var b="JavaScript charts",e="JS chart by amCharts";
"ammap"==this.product&&(c=a+"/javascript-maps/",b="Interactive JavaScript maps",e="JS map by amCharts");a=document.createElement("a");e=document.createTextNode(e);a.setAttribute("href",c);a.setAttribute("title",b);this.urlTarget&&a.setAttribute("target",this.urlTarget);a.appendChild(e);this.chartDiv.appendChild(a);this.amLink=a;a=a.style;a.position="absolute";a.textDecoration="none";a.color=this.color;a.fontFamily=this.fontFamily;a.fontSize="11px";a.opacity=.7;a.display="block";this.positionCred()}}},
positionCred:function(){var a=this.amLink;if(a){var b=this.creditsPosition,c=a.style,e=a.offsetWidth,a=a.offsetHeight,d=0,f=0,h=this.realWidth,k=this.realHeight,l=this.type;if("serial"==l||"xy"==l||"gantt"==l)d=this.marginLeftReal,f=this.marginTopReal,h=d+this.plotAreaWidth,k=f+this.plotAreaHeight;var l=5+d,m=f+5;"bottom-left"==b&&(l=5+d,m=k-a-3);"bottom-right"==b&&(l=h-e-5,m=k-a-3);"top-right"==b&&(l=h-e-5,m=f+5);c.left=l+"px";c.top=m+"px"}}});d.Slice=d.Class({construct:function(){}});d.SerialDataItem=
d.Class({construct:function(){}});d.GraphDataItem=d.Class({construct:function(){}});d.Guide=d.Class({construct:function(a){this.cname="Guide";d.applyTheme(this,a,this.cname)}});d.Title=d.Class({construct:function(a){this.cname="Title";d.applyTheme(this,a,this.cname)}});d.Label=d.Class({construct:function(a){this.cname="Label";d.applyTheme(this,a,this.cname)}})})();(function(){var d=window.AmCharts;d.AmGraph=d.Class({construct:function(a){this.cname="AmGraph";this.createEvents("rollOverGraphItem","rollOutGraphItem","clickGraphItem","doubleClickGraphItem","rightClickGraphItem","clickGraph","rollOverGraph","rollOutGraph");this.type="line";this.stackable=!0;this.columnCount=1;this.columnIndex=0;this.centerCustomBullets=this.showBalloon=!0;this.maxBulletSize=50;this.minBulletSize=4;this.balloonText="[[value]]";this.hidden=this.scrollbar=this.animationPlayed=!1;
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
Z=this.columnIndex,da=this.lineThickness,X=this.lineAlpha,xa=this.lineColorR,ea=this.dashLength,fa=this.set,Ba,ga=this.getGradRotation(),V=this.chart.columnSpacing,Y=ma.cellWidth,Da=(Y*k-r)/r;V>Da&&(V=Da);var G,v,oa,ha=q,Qa=n,ca=0,tb=0,ub=0,vb=0,lb=0,mb=0,wb=this.fillColorsR,Ra=this.negativeFillColors,Ja=this.negativeLineColor,bb=this.fillAlphas,cb=this.negativeFillAlphas;"object"==typeof bb&&(bb=bb[0]);"object"==typeof cb&&(cb=cb[0]);var xb=this.noRounding;"step"==h&&(xb=!1);var nb=f.getCoordinate(f.min);
f.logarithmic&&(nb=f.getCoordinate(f.minReal));this.minCoord=nb;this.resetBullet&&(this.bullet="none");if(!(J||"line"!=h&&"smoothedLine"!=h&&"step"!=h||(1==e.length&&"step"!=h&&"none"==this.bullet&&(this.bullet="round",this.resetBullet=!0),!Ra&&void 0==Ja||m))){var Ua=Pa;Ua>f.max&&(Ua=f.max);Ua<f.min&&(Ua=f.min);f.logarithmic&&(Ua=f.minReal);var Ka=f.getCoordinate(Ua)+.5,Mb=f.getCoordinate(f.max);t?(ha=q,Qa=Math.abs(Mb-Ka),ub=q,vb=Math.abs(nb-Ka),mb=tb=0,f.reversed?(ca=0,lb=Ka):(ca=Ka,lb=0)):(Qa=
n,ha=Math.abs(Mb-Ka),vb=n,ub=Math.abs(nb-Ka),lb=ca=0,f.reversed?(mb=p,tb=Ka):mb=Ka)}var La=Math.round;this.pmx=La(ca);this.pmy=La(tb);this.pmh=La(ha);this.pmw=La(Qa);this.nmx=La(lb);this.nmy=La(mb);this.nmh=La(ub);this.nmw=La(vb);d.isModern||(this.nmy=this.nmx=0,this.nmh=this.height);this.clustered||(r=1);k="column"==h?(Y*k-V*(r-1))/r:Y*k;1>k&&(k=1);var Nb=this.fixedColumnWidth;isNaN(Nb)||(k=Nb);var L;if("line"==h||"step"==h||"smoothedLine"==h){if(0<P){for(L=P-1;-1<L;L--)if(G=e[L],v=G.axes[f.id].graphs[b],
oa=v.values.value,!isNaN(oa)){P=L;break}if(this.lineColorField)for(L=P;-1<L;L--)if(G=e[L],v=G.axes[f.id].graphs[b],v.lineColor){this.lineColorSwitched=v.lineColor;void 0===this.bulletColor&&(this.bulletColorSwitched=this.lineColorSwitched);break}if(this.fillColorsField)for(L=P;-1<L;L--)if(G=e[L],v=G.axes[f.id].graphs[b],v.fillColors){this.fillColorsSwitched=v.fillColors;break}if(this.dashLengthField)for(L=P;-1<L;L--)if(G=e[L],v=G.axes[f.id].graphs[b],!isNaN(v.dashLength)){this.dashLengthSwitched=
v.dashLength;break}}if(ia<e.length-1)for(L=ia+1;L<e.length;L++)if(G=e[L],v=G.axes[f.id].graphs[b],oa=v.values.value,!isNaN(oa)){ia=L;break}}ia<e.length-1&&ia++;var T=[],U=[],Ma=!1;if("line"==h||"step"==h||"smoothedLine"==h)if(this.stackable&&"regular"==M||"100%"==M||this.fillToGraph)Ma=!0;var Ob=this.noStepRisers,db=-1E3,eb=-1E3,ob=this.minDistance,Sa=!0,Va=!1;for(L=P;L<=ia;L++){G=e[L];v=G.axes[f.id].graphs[b];v.index=L;var fb,Ta=NaN;if(m&&void 0==this.openField)for(var yb=L+1;yb<e.length&&(!e[yb]||
!(fb=e[L+1].axes[f.id].graphs[b])||!fb.values||(Ta=fb.values.value,isNaN(Ta)));yb++);var S,R,K,ba,ja=NaN,E=NaN,F=NaN,O=NaN,N=NaN,qa=NaN,ra=NaN,sa=NaN,ta=NaN,ya=NaN,Ea=NaN,ka=NaN,la=NaN,W=NaN,zb=NaN,Ab=NaN,ua=NaN,va=void 0,Na=wb,Wa=bb,Ha=xa,Ca,za,Bb=this.proCandlesticks,pb=this.topRadius,Fa=q-1,pa=n-1,gb=this.pattern;void 0!=v.pattern&&(gb=v.pattern);isNaN(v.alpha)||(Wa=v.alpha);isNaN(v.dashLength)||(ea=v.dashLength);var Ia=v.values;f.recalculateToPercents&&(Ia=v.percents);"none"==M&&(Z=isNaN(v.columnIndex)?
this.columnIndex:v.columnIndex);if(Ia){W=this.stackable&&"none"!=M&&"3d"!=M?Ia.close:Ia.value;if("candlestick"==h||"ohlc"==h)W=Ia.close,Ab=Ia.low,ra=f.getCoordinate(Ab),zb=Ia.high,ta=f.getCoordinate(zb);ua=Ia.open;F=f.getCoordinate(W,xb);isNaN(ua)||(N=f.getCoordinate(ua,xb),m&&"regular"!=M&&"100%"!=M&&(Ta=ua,ua=N=NaN));m&&(void 0==this.openField?fb&&(fb.isNegative=Ta<W?!0:!1,isNaN(Ta)&&(v.isNegative=!Sa)):v.isNegative=Ta>W?!0:!1);if(!J)switch(this.showBalloonAt){case "close":v.y=F;break;case "open":v.y=
N;break;case "high":v.y=ta;break;case "low":v.y=ra}var ja=G.x[ma.id],Xa=this.periodSpan-1;"step"!=h||isNaN(G.cellWidth)||(Y=G.cellWidth);var wa=Math.floor(Y/2)+Math.floor(Xa*Y/2),Ga=wa,qb=0;"left"==this.stepDirection&&(qb=(2*Y+Xa*Y)/2,ja-=qb);"center"==this.stepDirection&&(qb=Y/2,ja-=qb);"start"==this.pointPosition&&(ja-=Y/2+Math.floor(Xa*Y/2),wa=0,Ga=Math.floor(Y)+Math.floor(Xa*Y));"end"==this.pointPosition&&(ja+=Y/2+Math.floor(Xa*Y/2),wa=Math.floor(Y)+Math.floor(Xa*Y),Ga=0);if(Ob){var Cb=this.columnWidth;
isNaN(Cb)||(wa*=Cb,Ga*=Cb)}J||(v.x=ja);-1E5>ja&&(ja=-1E5);ja>n+1E5&&(ja=n+1E5);t?(E=F,O=N,N=F=ja,isNaN(ua)&&!this.fillToGraph&&(O=na),qa=ra,sa=ta):(O=E=ja,isNaN(ua)&&!this.fillToGraph&&(N=na));if(!Bb&&W<ua||Bb&&W<Ba)v.isNegative=!0,Ra&&(Na=Ra),cb&&(Wa=cb),void 0!=Ja&&(Ha=Ja);Va=!1;isNaN(W)||(m?W>Ta?(Sa&&(Va=!0),Sa=!1):(Sa||(Va=!0),Sa=!0):v.isNegative=W<Pa?!0:!1,Ba=W);var Pb=!1;J&&a.chartScrollbar.ignoreCustomColors&&(Pb=!0);Pb||(void 0!=v.color&&(Na=v.color),v.fillColors&&(Na=v.fillColors));F=d.fitToBounds(F,
-3E4,3E4);switch(h){case "line":if(isNaN(W))z||(this.drawLineGraph(x,u,T,U),x=[],u=[],T=[],U=[]);else{if(Math.abs(E-db)>=ob||Math.abs(F-eb)>=ob)x.push(E),u.push(F),db=E,eb=F;ya=E;Ea=F;ka=E;la=F;!Ma||isNaN(N)||isNaN(O)||(T.push(O),U.push(N));if(Va||void 0!=v.lineColor&&v.lineColor!=this.lineColorSwitched||void 0!=v.fillColors&&v.fillColors!=this.fillColorsSwitched||!isNaN(v.dashLength))this.drawLineGraph(x,u,T,U),x=[E],u=[F],T=[],U=[],!Ma||isNaN(N)||isNaN(O)||(T.push(O),U.push(N)),m?(Sa?(this.lineColorSwitched=
xa,this.fillColorsSwitched=wb):(this.lineColorSwitched=Ja,this.fillColorsSwitched=Ra),void 0===this.bulletColor&&(this.bulletColorSwitched=xa)):(this.lineColorSwitched=v.lineColor,this.fillColorsSwitched=v.fillColors,void 0===this.bulletColor&&(this.bulletColorSwitched=this.lineColorSwitched)),this.dashLengthSwitched=v.dashLength;v.gap&&(this.drawLineGraph(x,u,T,U),x=[],u=[],T=[],U=[],eb=db=-1E3)}break;case "smoothedLine":if(isNaN(W))z||(this.drawSmoothedGraph(x,u,T,U),x=[],u=[],T=[],U=[]);else{if(Math.abs(E-
db)>=ob||Math.abs(F-eb)>=ob)x.push(E),u.push(F),db=E,eb=F;ya=E;Ea=F;ka=E;la=F;!Ma||isNaN(N)||isNaN(O)||(T.push(O),U.push(N));if(Va||void 0!=v.lineColor&&v.lineColor!=this.lineColorSwitched||void 0!=v.fillColors&&v.fillColors!=this.fillColorsSwitched||!isNaN(v.dashLength))this.drawSmoothedGraph(x,u,T,U),x=[E],u=[F],T=[],U=[],!Ma||isNaN(N)||isNaN(O)||(T.push(O),U.push(N)),this.lineColorSwitched=v.lineColor,this.fillColorsSwitched=v.fillColors,this.dashLengthSwitched=v.dashLength;v.gap&&(this.drawSmoothedGraph(x,
u,T,U),x=[],u=[],T=[],U=[])}break;case "step":if(!isNaN(W)){t?(isNaN(A)||(x.push(A),u.push(F-wa)),u.push(F-wa),x.push(E),u.push(F+Ga),x.push(E),!Ma||isNaN(N)||isNaN(O)||(isNaN(B)||(T.push(B),U.push(N-wa)),T.push(O),U.push(N-wa),T.push(O),U.push(N+Ga))):(isNaN(y)||(u.push(y),x.push(E-wa)),x.push(E-wa),u.push(F),x.push(E+Ga),u.push(F),!Ma||isNaN(N)||isNaN(O)||(isNaN(D)||(T.push(O-wa),U.push(D)),T.push(O-wa),U.push(N),T.push(O+Ga),U.push(N)));A=E;y=F;B=O;D=N;ya=E;Ea=F;ka=E;la=F;if(Va||void 0!=v.lineColor||
void 0!=v.fillColors||!isNaN(v.dashLength)){var Db=x[x.length-2],dc=u[u.length-2];x.pop();u.pop();T.pop();U.pop();this.drawLineGraph(x,u,T,U);x=[Db];u=[dc];T=[];U=[];Ma&&(T=[Db,Db+wa+Ga],U=[D,D]);t?(u.push(F+Ga),x.push(E)):(x.push(E+Ga),u.push(F));this.lineColorSwitched=v.lineColor;this.fillColorsSwitched=v.fillColors;this.dashLengthSwitched=v.dashLength;m&&(Sa?(this.lineColorSwitched=xa,this.fillColorsSwitched=wb):(this.lineColorSwitched=Ja,this.fillColorsSwitched=Ra))}if(Ob||v.gap)A=y=NaN,v.gap&&
2>=x.length||this.drawLineGraph(x,u,T,U),x=[],u=[],T=[],U=[]}else if(!z){if(1>=this.periodSpan||1<this.periodSpan&&E-A>wa+Ga)A=y=NaN;this.drawLineGraph(x,u,T,U);x=[];u=[];T=[];U=[]}break;case "column":Ca=Ha;void 0!=v.lineColor&&(Ca=v.lineColor);if(!isNaN(W)){m||(v.isNegative=W<Pa?!0:!1);v.isNegative&&(Ra&&(Na=Ra),void 0!=Ja&&(Ca=Ja));var Qb=f.min,Rb=f.max,rb=ua;isNaN(rb)&&(rb=Pa);if(!(W<Qb&&rb<Qb||W>Rb&&rb>Rb)){var Aa;if(t){"3d"==M?(R=F-(r/2-this.depthCount+1)*(k+V)+V/2+Q*Z,S=O+H*Z,Aa=Z):(R=Math.floor(F-
(r/2-Z)*(k+V)+V/2),S=O,Aa=0);K=k;ya=E;Ea=R+k/2;ka=E;la=R+k/2;R+K>q+Aa*Q&&(K=q-R+Aa*Q);R<Aa*Q&&(K+=R,R=Aa*Q);ba=E-O;var ec=S;S=d.fitToBounds(S,0,n);ba+=ec-S;ba=d.fitToBounds(ba,-S,n-S+H*Z);v.labelIsNegative=0>ba?!0:!1;0===ba&&1/W===1/-0&&(v.labelIsNegative=!0);isNaN(G.percentWidthValue)||(K=this.height*G.percentWidthValue/100,R=ja-K/2,Ea=R+K/2);K=d.roundTo(K,2);ba=d.roundTo(ba,2);R<q&&0<K&&(va=new d.Cuboid(g,ba,K,H-a.d3x,Q-a.d3y,Na,Wa,da,Ca,X,ga,w,t,ea,gb,pb,aa),v.columnWidth=Math.abs(ba),v.columnHeight=
Math.abs(K))}else{"3d"==M?(S=E-(r/2-this.depthCount+1)*(k+V)+V/2+H*Z,R=N+Q*Z,Aa=Z):(S=E-(r/2-Z)*(k+V)+V/2,R=N,Aa=0);K=k;ya=S+k/2;Ea=F;ka=S+k/2;la=F;S+K>n+Aa*H&&(K=n-S+Aa*H);S<Aa*H&&(K+=S-Aa*H,S=Aa*H);ba=F-N;v.labelIsNegative=0<ba?!0:!1;0===ba&&1/W!==1/Math.abs(W)&&(v.labelIsNegative=!0);var fc=R;R=d.fitToBounds(R,this.dy,q);ba+=fc-R;ba=d.fitToBounds(ba,-R+Q*Aa,q-R);isNaN(G.percentWidthValue)||(K=this.width*G.percentWidthValue/100,S=ja-K/2,ya=S+K/2);K=d.roundTo(K,2);ba=d.roundTo(ba,2);S<n+Z*H&&0<K&&
(this.showOnAxis&&(R-=Q/2),va=new d.Cuboid(g,K,ba,H-a.d3x,Q-a.d3y,Na,Wa,da,Ca,this.lineAlpha,ga,w,t,ea,gb,pb,aa),v.columnHeight=Math.abs(ba),v.columnWidth=Math.abs(K))}}if(va){za=va.set;d.setCN(a,va.set,"graph-"+this.type);d.setCN(a,va.set,"graph-"+this.id);v.className&&d.setCN(a,va.set,v.className,!0);v.columnGraphics=za;S=d.roundTo(S,2);R=d.roundTo(R,2);za.translate(S,R);(v.url||this.showHandOnHover)&&za.setAttr("cursor","pointer");if(!J){"none"==M&&(I=t?(this.end+1-L)*C-c:C*L+c);"3d"==M&&(t?(I=
(this.end+1-L)*C-c-1E3*this.depthCount,ya+=H*Z,ka+=H*Z,v.y+=H*Z):(I=(C-c)*(L+1)+1E3*this.depthCount,Ea+=Q*Z,la+=Q*Z,v.y+=Q*Z));if("regular"==M||"100%"==M)I=t?0<Ia.value?(this.end+1-L)*C+c+1E3*this.depthCount:(this.end+1-L)*C-c+1E3*this.depthCount:0<Ia.value?C*L+c:C*L-c;this.columnsArray.push({column:va,depth:I});v.x=t?R+K/2:S+K/2;this.ownColumns.push(va);this.animateColumns(va,L,E,O,F,N);this.addListeners(za,v);void 0!==this.tabIndex&&za.setAttr("tabindex",this.tabIndex)}this.columnsSet.push(za)}}break;
case "candlestick":if(!isNaN(ua)&&!isNaN(W)){var Ya,hb;Ca=Ha;void 0!=v.lineColor&&(Ca=v.lineColor);ya=E;la=Ea=F;ka=E;if(t){"open"==l&&(ka=O);"high"==l&&(ka=sa);"low"==l&&(ka=qa);E=d.fitToBounds(E,0,pa);O=d.fitToBounds(O,0,pa);qa=d.fitToBounds(qa,0,pa);sa=d.fitToBounds(sa,0,pa);if(0===E&&0===O&&0===qa&&0===sa)continue;if(E==pa&&O==pa&&qa==pa&&sa==pa)continue;R=F-k/2;S=O;K=k;R+K>q&&(K=q-R);0>R&&(K+=R,R=0);if(R<q&&0<K){var Eb,Fb;W>ua?(Eb=[E,sa],Fb=[O,qa]):(Eb=[O,sa],Fb=[E,qa]);!isNaN(sa)&&!isNaN(qa)&&
F<q&&0<F&&(Ya=d.line(g,Eb,[F,F],Ca,X,da),hb=d.line(g,Fb,[F,F],Ca,X,da));ba=E-O;va=new d.Cuboid(g,ba,K,H,Q,Na,bb,da,Ca,X,ga,w,t,ea,gb,pb,aa)}}else{"open"==l&&(la=N);"high"==l&&(la=ta);"low"==l&&(la=ra);F=d.fitToBounds(F,0,Fa);N=d.fitToBounds(N,0,Fa);ra=d.fitToBounds(ra,0,Fa);ta=d.fitToBounds(ta,0,Fa);if(0===F&&0===N&&0===ra&&0===ta)continue;if(F==Fa&&N==Fa&&ra==Fa&&ta==Fa)continue;S=E-k/2;R=N+da/2;K=k;S+K>n&&(K=n-S);0>S&&(K+=S,S=0);ba=F-N;if(S<n&&0<K){Bb&&W>=ua&&(Wa=0);var va=new d.Cuboid(g,K,ba,H,
Q,Na,Wa,da,Ca,X,ga,w,t,ea,gb,pb,aa),Gb,Hb;W>ua?(Gb=[F,ta],Hb=[N,ra]):(Gb=[N,ta],Hb=[F,ra]);!isNaN(ta)&&!isNaN(ra)&&E<n&&0<E&&(Ya=d.line(g,[E,E],Gb,Ca,X,da),hb=d.line(g,[E,E],Hb,Ca,X,da),d.setCN(a,Ya,this.bcn+"line-high"),v.className&&d.setCN(a,Ya,v.className,!0),d.setCN(a,hb,this.bcn+"line-low"),v.className&&d.setCN(a,hb,v.className,!0))}}va&&(za=va.set,v.columnGraphics=za,fa.push(za),za.translate(S,R-da/2),(v.url||this.showHandOnHover)&&za.setAttr("cursor","pointer"),Ya&&(fa.push(Ya),fa.push(hb)),
J||(v.x=t?R+K/2:S+K/2,this.animateColumns(va,L,E,O,F,N),this.addListeners(za,v),void 0!==this.tabIndex&&za.setAttr("tabindex",this.tabIndex)))}break;case "ohlc":if(!(isNaN(ua)||isNaN(zb)||isNaN(Ab)||isNaN(W))){var Sb=g.set();fa.push(Sb);W<ua&&(v.isNegative=!0,void 0!=Ja&&(Ha=Ja));void 0!=v.lineColor&&(Ha=v.lineColor);var Za,$a,ab;if(t){la=F;ka=E;"open"==l&&(ka=O);"high"==l&&(ka=sa);"low"==l&&(ka=qa);qa=d.fitToBounds(qa,0,pa);sa=d.fitToBounds(sa,0,pa);if(0===E&&0===O&&0===qa&&0===sa)continue;if(E==
pa&&O==pa&&qa==pa&&sa==pa)continue;var Ib=F-k/2,Ib=d.fitToBounds(Ib,0,q),Tb=d.fitToBounds(F,0,q),Jb=F+k/2,Jb=d.fitToBounds(Jb,0,q);0<=O&&O<=pa&&($a=d.line(g,[O,O],[Ib,Tb],Ha,X,da,ea));0<F&&F<q&&(Za=d.line(g,[qa,sa],[F,F],Ha,X,da,ea));0<=E&&E<=pa&&(ab=d.line(g,[E,E],[Tb,Jb],Ha,X,da,ea))}else{la=F;"open"==l&&(la=N);"high"==l&&(la=ta);"low"==l&&(la=ra);var ka=E,ra=d.fitToBounds(ra,0,Fa),ta=d.fitToBounds(ta,0,Fa),Kb=E-k/2,Kb=d.fitToBounds(Kb,0,n),Ub=d.fitToBounds(E,0,n),Lb=E+k/2,Lb=d.fitToBounds(Lb,0,
n);0<=N&&N<=Fa&&($a=d.line(g,[Kb,Ub],[N,N],Ha,X,da,ea));0<E&&E<n&&(Za=d.line(g,[E,E],[ra,ta],Ha,X,da,ea));0<=F&&F<=Fa&&(ab=d.line(g,[Ub,Lb],[F,F],Ha,X,da,ea))}fa.push($a);fa.push(Za);fa.push(ab);d.setCN(a,$a,this.bcn+"stroke-open");d.setCN(a,ab,this.bcn+"stroke-close");d.setCN(a,Za,this.bcn+"stroke");v.className&&d.setCN(a,Sb,v.className,!0);Za&&this.addListeners(Za,v);ab&&this.addListeners(ab,v);$a&&this.addListeners($a,v);ya=E;Ea=F}}if(!J&&!isNaN(W)){var Vb=this.hideBulletsCount;if(this.end-this.start<=
Vb||0===Vb){var Wb=this.createBullet(v,ka,la,L),Xb=this.labelText;if(Xb&&!isNaN(ya)&&!isNaN(ya)){var gc=this.createLabel(v,Xb),Yb=0;Wb&&(Yb=Wb.size);this.positionLabel(v,ya,Ea,gc,Yb)}if("regular"==M||"100%"==M){var Zb=f.totalText;if(Zb){var Oa=this.createLabel(v,Zb,f.totalTextColor);d.setCN(a,Oa,this.bcn+"label-total");this.allBullets.push(Oa);if(Oa){var $b=Oa.getBBox(),ac=$b.width,bc=$b.height,ib,jb,sb=f.totalTextOffset,cc=f.totals[L];cc&&cc.remove();var kb=0;"column"!=h&&(kb=this.bulletSize);t?
(jb=Ea,ib=0>W?E-ac/2-2-kb-sb:E+ac/2+3+kb+sb):(ib=ya,jb=0>W?F+bc/2+kb+sb:F-bc/2-3-kb-sb);Oa.translate(ib,jb);f.totals[L]=Oa;t?(0>jb||jb>q)&&Oa.remove():(0>ib||ib>n)&&Oa.remove()}}}}}}}this.lastDataItem=v;if("line"==h||"step"==h||"smoothedLine"==h)"smoothedLine"==h?this.drawSmoothedGraph(x,u,T,U):this.drawLineGraph(x,u,T,U),J||this.launchAnimation();this.bulletsHidden&&this.hideBullets();this.customBulletsHidden&&this.hideCustomBullets()},animateColumns:function(a,b){var c=this,e=c.chart.startDuration;
0<e&&!c.animationPlayed&&(c.seqAn?(a.set.hide(),c.animationArray.push(a),e=setTimeout(function(){c.animate.call(c)},e/(c.end-c.start+1)*(b-c.start)*1E3),c.timeOuts.push(e)):c.animate(a),c.chart.animatable.push(a))},createLabel:function(a,b,c){var e=this.chart,g=a.labelColor;g||(g=this.color);g||(g=e.color);c&&(g=c);c=this.fontSize;void 0===c&&(this.fontSize=c=e.fontSize);var f=this.labelFunction;b=e.formatString(b,a);b=d.cleanFromEmpty(b);f&&(b=f(a,b));if(void 0!==b&&""!==b)return a=d.text(this.container,
b,g,e.fontFamily,c),a.node.style.pointerEvents="none",d.setCN(e,a,this.bcn+"label"),this.bulletSet.push(a),a},positiveClip:function(a){a.clipRect(this.pmx,this.pmy,this.pmw,this.pmh)},negativeClip:function(a){a.clipRect(this.nmx,this.nmy,this.nmw,this.nmh)},drawLineGraph:function(a,b,c,e){var g=this;if(1<a.length){var f=g.noRounding,h=g.set,k=g.chart,l=g.container,m=l.set(),n=l.set();h.push(n);h.push(m);var q=g.lineAlpha,p=g.lineThickness,h=g.fillAlphas,t=g.lineColorR,r=g.negativeLineAlpha;isNaN(r)&&
(r=q);var w=g.lineColorSwitched;w&&(t=w);var w=g.fillColorsR,z=g.fillColorsSwitched;z&&(w=z);var x=g.dashLength;(z=g.dashLengthSwitched)&&(x=z);var z=g.negativeLineColor,u=g.negativeFillColors,A=g.negativeFillAlphas,y=g.baseCoord;0!==g.negativeBase&&(y=g.valueAxis.getCoordinate(g.negativeBase,f),y>g.height&&(y=g.height),0>y&&(y=0));q=d.line(l,a,b,t,q,p,x,!1,!1,f);q.node.setAttribute("stroke-linejoin","round");d.setCN(k,q,g.bcn+"stroke");m.push(q);m.click(function(a){g.handleGraphEvent(a,"clickGraph")}).mouseover(function(a){g.handleGraphEvent(a,
"rollOverGraph")}).mouseout(function(a){g.handleGraphEvent(a,"rollOutGraph")}).touchmove(function(a){g.chart.handleMouseMove(a)}).touchend(function(a){g.chart.handleTouchEnd(a)});void 0===z||g.useNegativeColorIfDown||(p=d.line(l,a,b,z,r,p,x,!1,!1,f),p.node.setAttribute("stroke-linejoin","round"),d.setCN(k,p,g.bcn+"stroke"),d.setCN(k,p,g.bcn+"stroke-negative"),n.push(p));if(0<h||0<A)if(p=a.join(";").split(";"),r=b.join(";").split(";"),q=k.type,"serial"==q||"radar"==q?0<c.length?(c.reverse(),e.reverse(),
p=a.concat(c),r=b.concat(e)):"radar"==q?(r.push(0),p.push(0)):g.rotate?(r.push(r[r.length-1]),p.push(y),r.push(r[0]),p.push(y),r.push(r[0]),p.push(p[0])):(p.push(p[p.length-1]),r.push(y),p.push(p[0]),r.push(y),p.push(a[0]),r.push(r[0])):"xy"==q&&(b=g.fillToAxis)&&(d.isString(b)&&(b=k.getValueAxisById(b)),"H"==b.orientation?(y="top"==b.position?0:b.height,p.push(p[p.length-1]),r.push(y),p.push(p[0]),r.push(y),p.push(a[0]),r.push(r[0])):(y="left"==b.position?0:b.width,r.push(r[r.length-1]),p.push(y),
r.push(r[0]),p.push(y),r.push(r[0]),p.push(p[0]))),a=g.gradientRotation,0<h&&(b=d.polygon(l,p,r,w,h,1,"#000",0,a,f),b.pattern(g.pattern,NaN,k.path),d.setCN(k,b,g.bcn+"fill"),m.push(b),b.toBack()),u||void 0!==z)isNaN(A)&&(A=h),u||(u=z),f=d.polygon(l,p,r,u,A,1,"#000",0,a,f),d.setCN(k,f,g.bcn+"fill"),d.setCN(k,f,g.bcn+"fill-negative"),f.pattern(g.pattern,NaN,k.path),n.push(f),f.toBack(),n.click(function(a){g.handleGraphEvent(a,"clickGraph")}).mouseover(function(a){g.handleGraphEvent(a,"rollOverGraph")}).mouseout(function(a){g.handleGraphEvent(a,
"rollOutGraph")}).touchmove(function(a){g.chart.handleMouseMove(a)}).touchend(function(a){g.chart.handleTouchEnd(a)});g.applyMask(n,m)}},applyMask:function(a,b){var c=a.length();"serial"!=this.chart.type||this.scrollbar||(this.positiveClip(b),0<c&&this.negativeClip(a))},drawSmoothedGraph:function(a,b,c,e){if(1<a.length){var g=this.set,f=this.chart,h=this.container,k=h.set(),l=h.set();g.push(l);g.push(k);var m=this.lineAlpha,n=this.lineThickness,g=this.dashLength,q=this.fillAlphas,p=this.lineColorR,
t=this.fillColorsR,r=this.negativeLineColor,w=this.negativeFillColors,z=this.negativeFillAlphas,x=this.baseCoord,u=this.lineColorSwitched;u&&(p=u);(u=this.fillColorsSwitched)&&(t=u);var A=this.negativeLineAlpha;isNaN(A)&&(A=m);u=this.getGradRotation();m=new d.Bezier(h,a,b,p,m,n,t,0,g,void 0,u);d.setCN(f,m,this.bcn+"stroke");k.push(m.path);void 0!==r&&(n=new d.Bezier(h,a,b,r,A,n,t,0,g,void 0,u),d.setCN(f,n,this.bcn+"stroke"),d.setCN(f,n,this.bcn+"stroke-negative"),l.push(n.path));0<q&&(n=a.join(";").split(";"),
m=b.join(";").split(";"),p="",0<c.length?(c.push("M"),e.push("M"),c.reverse(),e.reverse(),n=a.concat(c),m=b.concat(e)):(this.rotate?(p+=" L"+x+","+b[b.length-1],p+=" L"+x+","+b[0]):(p+=" L"+a[a.length-1]+","+x,p+=" L"+a[0]+","+x),p+=" L"+a[0]+","+b[0]),a=new d.Bezier(h,n,m,NaN,0,0,t,q,g,p,u),d.setCN(f,a,this.bcn+"fill"),a.path.pattern(this.pattern,NaN,f.path),k.push(a.path),w||void 0!==r)&&(z||(z=q),w||(w=r),h=new d.Bezier(h,n,m,NaN,0,0,w,z,g,p,u),h.path.pattern(this.pattern,NaN,f.path),d.setCN(f,
h,this.bcn+"fill"),d.setCN(f,h,this.bcn+"fill-negative"),l.push(h.path));this.applyMask(l,k)}},launchAnimation:function(){var a=this,b=a.chart.startDuration;if(0<b&&!a.animationPlayed){var c=a.set,e=a.bulletSet;d.VML||(c.attr({opacity:a.startAlpha}),e.attr({opacity:a.startAlpha}));c.hide();e.hide();a.seqAn?(b=setTimeout(function(){a.animateGraphs.call(a)},a.index*b*1E3),a.timeOuts.push(b)):a.animateGraphs()}},animateGraphs:function(){var a=this.chart,b=this.set,c=this.bulletSet,e=this.x,d=this.y;
b.show();c.show();var f=a.startDuration,h=a.startEffect;b&&(this.rotate?(b.translate(-1E3,d),c.translate(-1E3,d)):(b.translate(e,-1E3),c.translate(e,-1E3)),b.animate({opacity:1,translate:e+","+d},f,h),c.animate({opacity:1,translate:e+","+d},f,h),a.animatable.push(b))},animate:function(a){var b=this.chart,c=this.animationArray;!a&&0<c.length&&(a=c[0],c.shift());c=d[d.getEffect(b.startEffect)];b=b.startDuration;a&&(this.rotate?a.animateWidth(b,c):a.animateHeight(b,c),a.set.show())},legendKeyColor:function(){var a=
this.legendColor,b=this.lineAlpha;void 0===a&&(a=this.lineColorR,0===b&&(b=this.fillColorsR)&&(a="object"==typeof b?b[0]:b));return a},legendKeyAlpha:function(){var a=this.legendAlpha;void 0===a&&(a=this.lineAlpha,this.fillAlphas>a&&(a=this.fillAlphas),0===a&&(a=this.bulletAlpha),0===a&&(a=1));return a},createBullet:function(a,b,c){if(!isNaN(b)&&!isNaN(c)&&("none"!=this.bullet||this.customBullet||a.bullet||a.customBullet)){var e=this.chart,g=this.container,f=this.bulletOffset,h=this.bulletSize;isNaN(a.bulletSize)||
(h=a.bulletSize);var k=a.values.value,l=this.maxValue,m=this.minValue,n=this.maxBulletSize,q=this.minBulletSize;isNaN(l)||(isNaN(k)||(h=(k-m)/(l-m)*(n-q)+q),m==l&&(h=n));l=h;this.bulletAxis&&(h=a.values.error,isNaN(h)||(k=h),h=this.bulletAxis.stepWidth*k);h<this.minBulletSize&&(h=this.minBulletSize);this.rotate?b=a.isNegative?b-f:b+f:c=a.isNegative?c+f:c-f;q=this.bulletColorR;a.lineColor&&void 0===this.bulletColor&&(this.bulletColorSwitched=a.lineColor);this.bulletColorSwitched&&(q=this.bulletColorSwitched);
a.isNegative&&void 0!==this.bulletColorNegative&&(q=this.bulletColorNegative);void 0!==a.color&&(q=a.color);var p;"xy"==e.type&&this.valueField&&(p=this.pattern,a.pattern&&(p=a.pattern));f=this.bullet;a.bullet&&(f=a.bullet);var k=this.bulletBorderThickness,m=this.bulletBorderColorR,n=this.bulletBorderAlpha,t=this.bulletAlpha;m||(m=q);this.useLineColorForBulletBorder&&(m=this.lineColorR,a.isNegative&&this.negativeLineColor&&(m=this.negativeLineColor),this.lineColorSwitched&&(m=this.lineColorSwitched));
var r=a.alpha;isNaN(r)||(t=r);p=d.bullet(g,f,h,q,t,k,m,n,l,0,p,e.path);l=this.customBullet;a.customBullet&&(l=a.customBullet);l&&(p&&p.remove(),"function"==typeof l?(l=new l,l.chart=e,a.bulletConfig&&(l.availableSpace=c,l.graph=this,l.graphDataItem=a,l.bulletY=c,a.bulletConfig.minCoord=this.minCoord-c,l.bulletConfig=a.bulletConfig),l.write(g),p&&l.showBullet&&l.set.push(p),a.customBulletGraphics=l.cset,p=l.set):(p=g.set(),l=g.image(l,0,0,h,h),p.push(l),this.centerCustomBullets&&l.translate(-h/2,-h/
2)));if(p){(a.url||this.showHandOnHover)&&p.setAttr("cursor","pointer");if("serial"==e.type||"gantt"==e.type)if(-.5>b||b>this.width||c<-h/2||c>this.height)p.remove(),p=null;p&&(this.bulletSet.push(p),p.translate(b,c),this.addListeners(p,a),this.allBullets.push(p));a.bx=b;a.by=c;d.setCN(e,p,this.bcn+"bullet");a.className&&d.setCN(e,p,a.className,!0)}if(p){p.size=h||0;if(e=this.bulletHitAreaSize)g=d.circle(g,e,"#FFFFFF",.001,0),g.translate(b,c),a.hitBullet=g,this.bulletSet.push(g),this.addListeners(g,
a);a.bulletGraphics=p;void 0!==this.tabIndex&&p.setAttr("tabindex",this.tabIndex)}else p={size:0};p.graphDataItem=a;return p}},showBullets:function(){var a=this.allBullets,b;this.bulletsHidden=!1;for(b=0;b<a.length;b++)a[b].show()},hideBullets:function(){var a=this.allBullets,b;this.bulletsHidden=!0;for(b=0;b<a.length;b++)a[b].hide()},showCustomBullets:function(){var a=this.allBullets,b;this.customBulletsHidden=!1;for(b=0;b<a.length;b++){var c=a[b].graphDataItem;c&&c.customBulletGraphics&&c.customBulletGraphics.show()}},
hideCustomBullets:function(){var a=this.allBullets,b;this.customBulletsHidden=!0;for(b=0;b<a.length;b++){var c=a[b].graphDataItem;c&&c.customBulletGraphics&&c.customBulletGraphics.hide()}},addListeners:function(a,b){var c=this;a.mouseover(function(a){c.handleRollOver(b,a)}).mouseout(function(a){c.handleRollOut(b,a)}).touchend(function(a){c.handleRollOver(b,a);c.chart.panEventsEnabled&&c.handleClick(b,a)}).touchstart(function(a){c.handleRollOver(b,a)}).click(function(a){c.handleClick(b,a)}).dblclick(function(a){c.handleDoubleClick(b,
a)}).contextmenu(function(a){c.handleRightClick(b,a)});var e=c.chart;if(e.accessible&&c.accessibleLabel){var d=e.formatString(c.accessibleLabel,b);e.makeAccessible(a,d)}},handleRollOver:function(a,b){this.handleGraphEvent(b,"rollOverGraph");if(a){var c=this.chart;a.bulletConfig&&(c.isRolledOverBullet=!0);var e={type:"rollOverGraphItem",item:a,index:a.index,graph:this,target:this,chart:this.chart,event:b};this.fire(e);c.fire(e);clearTimeout(c.hoverInt);(c=c.chartCursor)&&c.valueBalloonsEnabled||this.showGraphBalloon(a,
"V",!0)}},handleRollOut:function(a,b){var c=this.chart;if(a){var e={type:"rollOutGraphItem",item:a,index:a.index,graph:this,target:this,chart:this.chart,event:b};this.fire(e);c.fire(e);c.isRolledOverBullet=!1}this.handleGraphEvent(b,"rollOutGraph");(c=c.chartCursor)&&c.valueBalloonsEnabled||this.hideBalloon()},handleClick:function(a,b){if(!this.chart.checkTouchMoved()&&this.chart.checkTouchDuration(b)){if(a){var c={type:"clickGraphItem",item:a,index:a.index,graph:this,target:this,chart:this.chart,
event:b};this.fire(c);this.chart.fire(c);d.getURL(a.url,this.urlTarget)}this.handleGraphEvent(b,"clickGraph")}},handleGraphEvent:function(a,b){var c={type:b,graph:this,target:this,chart:this.chart,event:a};this.fire(c);this.chart.fire(c)},handleRightClick:function(a,b){if(a){var c={type:"rightClickGraphItem",item:a,index:a.index,graph:this,target:this,chart:this.chart,event:b};this.fire(c);this.chart.fire(c)}},handleDoubleClick:function(a,b){if(a){var c={type:"doubleClickGraphItem",item:a,index:a.index,
graph:this,target:this,chart:this.chart,event:b};this.fire(c);this.chart.fire(c)}},zoom:function(a,b){this.start=a;this.end=b;this.draw()},changeOpacity:function(a){var b=this.set;b&&b.setAttr("opacity",a);if(b=this.ownColumns){var c;for(c=0;c<b.length;c++){var e=b[c].set;e&&e.setAttr("opacity",a)}}(b=this.bulletSet)&&b.setAttr("opacity",a)},destroy:function(){d.remove(this.set);d.remove(this.bulletSet);var a=this.timeOuts;if(a){var b;for(b=0;b<a.length;b++)clearTimeout(a[b])}this.timeOuts=[]},createBalloon:function(){var a=
this.chart;this.balloon?this.balloon.destroy&&this.balloon.destroy():this.balloon={};var b=this.balloon;d.extend(b,a.balloon,!0);b.chart=a;b.mainSet=a.plotBalloonsSet;b.className=this.id},hideBalloon:function(){var a=this,b=a.chart;b.chartCursor?b.chartCursor.valueBalloonsEnabled||b.hideBalloon():b.hideBalloon();clearTimeout(a.hoverInt);a.hoverInt=setTimeout(function(){a.hideBalloonReal.call(a)},b.hideBalloonTime)},hideBalloonReal:function(){this.balloon&&this.balloon.hide();this.fixBulletSize()},
fixBulletSize:function(){if(d.isModern){var a=this.resizedDItem;if(a){var b=a.bulletGraphics;if(b&&!b.doNotScale){b.translate(a.bx,a.by,1);var c=this.bulletAlpha;isNaN(a.alpha)||(c=a.alpha);b.setAttr("fill-opacity",c);b.setAttr("stroke-opacity",this.bulletBorderAlpha)}}this.resizedDItem=null}},showGraphBalloon:function(a,b,c,e,g){if(a){var f=this.chart,h=this.balloon,k=0,l=0,m=f.chartCursor,n=!0;m?m.valueBalloonsEnabled||(h=f.balloon,k=this.x,l=this.y,n=!1):(h=f.balloon,k=this.x,l=this.y,n=!1);clearTimeout(this.hoverInt);
if(f.chartCursor&&(this.currentDataItem=a,"serial"==f.type&&f.isRolledOverBullet&&f.chartCursor.valueBalloonsEnabled)){this.hideBalloonReal();return}this.resizeBullet(a,e,g);if(h&&h.enabled&&this.showBalloon&&!this.hidden){var m=f.formatString(this.balloonText,a,!0),q=this.balloonFunction;q&&(m=q(a,a.graph));m&&(m=d.cleanFromEmpty(m));m&&""!==m?(e=f.getBalloonColor(this,a),h.drop||(h.pointerOrientation=b),b=a.x,g=a.y,f.rotate&&(b=a.y,g=a.x),b+=k,g+=l,isNaN(b)||isNaN(g)?this.hideBalloonReal():(a=this.width,
q=this.height,n&&h.setBounds(k,l,a+k,q+l),h.changeColor(e),h.setPosition(b,g),h.fixPrevious(),h.fixedPosition&&(c=!1),!c&&"radar"!=f.type&&(b<k-.5||b>a+k||g<l-.5||g>q+l)?(h.showBalloon(m),h.hide(0)):(h.followCursor(c),h.showBalloon(m)))):(this.hideBalloonReal(),h.hide(),this.resizeBullet(a,e,g))}else this.hideBalloonReal()}},resizeBullet:function(a,b,c){this.fixBulletSize();if(a&&d.isModern&&(1!=b||!isNaN(c))){var e=a.bulletGraphics;e&&!e.doNotScale&&(e.translate(a.bx,a.by,b),isNaN(c)||(e.setAttr("fill-opacity",
c),e.setAttr("stroke-opacity",c)),this.resizedDItem=a)}}})})();(function(){var d=window.AmCharts;d.ChartCursor=d.Class({construct:function(a){this.cname="ChartCursor";this.createEvents("changed","zoomed","onHideCursor","onShowCursor","draw","selected","moved","panning","zoomStarted");this.enabled=!0;this.cursorAlpha=1;this.selectionAlpha=.2;this.cursorColor="#CC0000";this.categoryBalloonAlpha=1;this.color="#FFFFFF";this.type="cursor";this.zoomed=!1;this.zoomable=!0;this.pan=!1;this.categoryBalloonDateFormat="MMM DD, YYYY";this.categoryBalloonText="[[category]]";
this.categoryBalloonEnabled=this.valueBalloonsEnabled=!0;this.rolledOver=!1;this.cursorPosition="middle";this.bulletsEnabled=this.skipZoomDispatch=!1;this.bulletSize=8;this.selectWithoutZooming=this.oneBalloonOnly=!1;this.graphBulletSize=1.7;this.animationDuration=.3;this.zooming=!1;this.adjustment=0;this.avoidBalloonOverlapping=!0;this.leaveCursor=!1;this.leaveAfterTouch=!0;this.valueZoomable=!1;this.balloonPointerOrientation="horizontal";this.hLineEnabled=this.vLineEnabled=!0;this.vZoomEnabled=
this.hZoomEnabled=!1;d.applyTheme(this,a,this.cname)},draw:function(){this.destroy();var a=this.chart;a.panRequired=!0;var b=a.container;this.rotate=a.rotate;this.container=b;this.prevLineHeight=this.prevLineWidth=NaN;b=b.set();b.translate(this.x,this.y);this.set=b;a.cursorSet.push(b);this.createElements();d.isString(this.limitToGraph)&&(this.limitToGraph=d.getObjById(a.graphs,this.limitToGraph),this.fullWidth=!1,this.cursorPosition="middle");this.pointer=this.balloonPointerOrientation.substr(0,1).toUpperCase();
this.isHidden=!1;this.hideLines();this.valueLineAxis||(this.valueLineAxis=a.valueAxes[0])},createElements:function(){var a=this,b=a.chart,c=b.dx,e=b.dy,g=a.width,f=a.height,h,k,l=a.cursorAlpha,m=a.valueLineAlpha;a.rotate?(h=m,k=l):(k=m,h=l);"xy"==b.type&&(k=l,void 0!==m&&(k=m),h=l);a.vvLine=d.line(a.container,[c,0,0],[e,0,f],a.cursorColor,h,1);d.setCN(b,a.vvLine,"cursor-line");d.setCN(b,a.vvLine,"cursor-line-vertical");a.hhLine=d.line(a.container,[0,g,g+c],[0,0,e],a.cursorColor,k,1);d.setCN(b,a.hhLine,
"cursor-line");d.setCN(b,a.hhLine,"cursor-line-horizontal");a.vLine=a.rotate?a.vvLine:a.hhLine;a.set.push(a.vvLine);a.set.push(a.hhLine);a.set.node.style.pointerEvents="none";a.fullLines=a.container.set();b=b.cursorLineSet;b.push(a.fullLines);b.translate(a.x,a.y);b.clipRect(-1,-1,g+2,f+2);void 0!==a.tabIndex&&(b.setAttr("tabindex",a.tabIndex),b.keyup(function(b){a.handleKeys(b)}).focus(function(b){a.showCursor()}).blur(function(b){a.hideCursor()}));a.set.clipRect(0,0,g,f)},handleKeys:function(a){var b=
this.prevIndex,c=this.chart;if(c){var e=c.chartData;e&&(isNaN(b)&&(b=e.length-1),37!=a.keyCode&&40!=a.keyCode||b--,39!=a.keyCode&&38!=a.keyCode||b++,b=d.fitToBounds(b,c.startIndex,c.endIndex),(a=this.chart.chartData[b])&&this.setPosition(a.x.categoryAxis),this.prevIndex=b)}},update:function(){var a=this.chart;if(a){var b=a.mouseX-this.x,c=a.mouseY-this.y;this.mouseX=b;this.mouseY=c;this.mouse2X=a.mouse2X-this.x;this.mouse2Y=a.mouse2Y-this.y;var e;if(a.chartData&&0<a.chartData.length){this.mouseIsOver()?
(this.hideGraphBalloons=!1,this.rolledOver=e=!0,this.updateDrawing(),this.vvLine&&isNaN(this.fx)&&(a.rotate||!this.limitToGraph)&&this.vvLine.translate(b,0),!this.hhLine||!isNaN(this.fy)||a.rotate&&this.limitToGraph||this.hhLine.translate(0,c),isNaN(this.mouse2X)?this.dispatchMovedEvent(b,c):e=!1):this.forceShow||this.hideCursor();if(this.zooming){if(!isNaN(this.mouse2X)){isNaN(this.mouse2X0)||this.dispatchPanEvent();return}if(this.pan){this.dispatchPanEvent();return}(this.hZoomEnabled||this.vZoomEnabled)&&
this.zooming&&this.updateSelection()}e&&this.showCursor()}}},updateDrawing:function(){this.drawing&&this.chart.setMouseCursor("crosshair");if(this.drawingNow&&(d.remove(this.drawingLine),1<Math.abs(this.drawStartX-this.mouseX)||1<Math.abs(this.drawStartY-this.mouseY))){var a=this.chart,b=a.marginTop,a=a.marginLeft;this.drawingLine=d.line(this.container,[this.drawStartX+a,this.mouseX+a],[this.drawStartY+b,this.mouseY+b],this.cursorColor,1,1)}},fixWidth:function(a){if(this.fullWidth&&this.prevLineWidth!=
a){var b=this.vvLine,c=0;b&&(b.remove(),c=b.x);b=this.container.set();b.translate(c,0);c=d.rect(this.container,a,this.height,this.cursorColor,this.cursorAlpha,this.cursorAlpha,this.cursorColor);d.setCN(this.chart,c,"cursor-fill");c.translate(-a/2-1,0);b.push(c);this.vvLine=b;this.fullLines.push(b);this.prevLineWidth=a}},fixHeight:function(a){if(this.fullWidth&&this.prevLineHeight!=a){var b=this.hhLine,c=0;b&&(b.remove(),c=b.y);b=this.container.set();b.translate(0,c);c=d.rect(this.container,this.width,
a,this.cursorColor,this.cursorAlpha);c.translate(0,-a/2);b.push(c);this.fullLines.push(b);this.hhLine=b;this.prevLineHeight=a}},fixVLine:function(a,b){if(!isNaN(a)&&this.vvLine){if(isNaN(this.prevLineX)){var c=0,e=this.mouseX;if(this.limitToGraph){var d=this.chart.categoryAxis;d&&(this.chart.rotate||(c="bottom"==d.position?this.height:-this.height),e=a)}this.vvLine.translate(e,c)}else this.prevLineX!=a&&this.vvLine.translate(this.prevLineX,this.prevLineY);this.fx=a;this.prevLineX!=a&&(c=this.animationDuration,
this.zooming&&(c=0),this.vvLine.stop(),this.vvLine.animate({translate:a+","+b},c,"easeOutSine"),this.prevLineX=a,this.prevLineY=b)}},fixHLine:function(a,b){if(!isNaN(a)&&this.hhLine){if(isNaN(this.prevLineY)){var c=0,e=this.mouseY;if(this.limitToGraph){var d=this.chart.categoryAxis;d&&(this.chart.rotate&&(c="right"==d.position?this.width:-this.width),e=a)}this.hhLine.translate(c,e)}else this.prevLineY!=a&&this.hhLine.translate(this.prevLineX,this.prevLineY);this.fy=a;this.prevLineY!=a&&(c=this.animationDuration,
this.zooming&&(c=0),this.hhLine.stop(),this.hhLine.animate({translate:b+","+a},c,"easeOutSine"),this.prevLineY=a,this.prevLineX=b)}},hideCursor:function(a){this.forceShow=!1;this.chart.wasTouched&&this.leaveAfterTouch||this.isHidden||this.leaveCursor||(this.hideCursorReal(),a?this.chart.handleCursorHide():this.fire({target:this,chart:this.chart,type:"onHideCursor"}),this.chart.setMouseCursor("auto"))},hideCursorReal:function(){this.hideLines();this.isHidden=!0;this.index=this.prevLineY=this.prevLineX=
this.mouseY0=this.mouseX0=this.fy=this.fx=NaN},hideLines:function(){this.vvLine&&this.vvLine.hide();this.hhLine&&this.hhLine.hide();this.fullLines&&this.fullLines.hide();this.isHidden=!0;this.chart.handleCursorHide()},showCursor:function(a){!this.drawing&&this.enabled&&(this.vLineEnabled&&this.vvLine&&this.vvLine.show(),this.hLineEnabled&&this.hhLine&&this.hhLine.show(),this.isHidden=!1,this.updateFullLine(),a||this.fire({target:this,chart:this.chart,type:"onShowCursor"}),this.pan&&this.chart.setMouseCursor("move"))},
updateFullLine:function(){this.zooming&&this.fullWidth&&this.selection&&(this.rotate?0<this.selection.height&&this.hhLine.hide():0<this.selection.width&&this.vvLine.hide())},updateSelection:function(){if(!this.pan&&this.enabled){var a=this.mouseX,b=this.mouseY;isNaN(this.fx)||(a=this.fx);isNaN(this.fy)||(b=this.fy);this.clearSelection();var c=this.mouseX0,e=this.mouseY0,g=this.width,f=this.height,a=d.fitToBounds(a,0,g),b=d.fitToBounds(b,0,f),h;a<c&&(h=a,a=c,c=h);b<e&&(h=b,b=e,e=h);this.hZoomEnabled?
g=a-c:c=0;this.vZoomEnabled?f=b-e:e=0;isNaN(this.mouse2X)&&0<Math.abs(g)&&0<Math.abs(f)&&(a=this.chart,b=d.rect(this.container,g,f,this.cursorColor,this.selectionAlpha),d.setCN(a,b,"cursor-selection"),b.width=g,b.height=f,b.translate(c,e),this.set.push(b),this.selection=b);this.updateFullLine()}},mouseIsOver:function(){var a=this.mouseX,b=this.mouseY;if(this.justReleased)return this.justReleased=!1,!0;if(this.mouseIsDown)return!0;if(!this.chart.mouseIsOver)return this.handleMouseOut(),!1;if(0<a&&
a<this.width&&0<b&&b<this.height)return!0;this.handleMouseOut();return!1},fixPosition:function(){this.prevY=this.prevX=NaN},handleMouseDown:function(){this.update();if(this.mouseIsOver())if(this.mouseIsDown=!0,this.mouseX0=this.mouseX,this.mouseY0=this.mouseY,this.mouse2X0=this.mouse2X,this.mouse2Y0=this.mouse2Y,this.drawing)this.drawStartY=this.mouseY,this.drawStartX=this.mouseX,this.drawingNow=!0;else if(this.dispatchMovedEvent(this.mouseX,this.mouseY),!this.pan&&isNaN(this.mouse2X0)&&(isNaN(this.fx)||
(this.mouseX0=this.fx),isNaN(this.fy)||(this.mouseY0=this.fy)),this.hZoomEnabled||this.vZoomEnabled){this.zooming=!0;var a={chart:this.chart,target:this,type:"zoomStarted"};a.x=this.mouseX/this.width;a.y=this.mouseY/this.height;this.index0=a.index=this.index;this.timestamp0=this.timestamp;this.fire(a)}},registerInitialMouse:function(){},handleReleaseOutside:function(){this.mouseIsDown=!1;if(this.drawingNow){this.drawingNow=!1;d.remove(this.drawingLine);var a=this.drawStartX,b=this.drawStartY,c=this.mouseX,
e=this.mouseY,g=this.chart;(2<Math.abs(a-c)||2<Math.abs(b-e))&&this.fire({type:"draw",target:this,chart:g,initialX:a,initialY:b,finalX:c,finalY:e})}this.zooming&&(this.zooming=!1,this.selectWithoutZooming?this.dispatchZoomEvent("selected"):(this.hZoomEnabled||this.vZoomEnabled)&&this.dispatchZoomEvent("zoomed"),this.rolledOver&&this.dispatchMovedEvent(this.mouseX,this.mouseY));this.mouse2Y0=this.mouse2X0=this.mouseY0=this.mouseX0=NaN},dispatchZoomEvent:function(a){if(!this.pan){var b=this.selection;
if(b&&3<Math.abs(b.width)&&3<Math.abs(b.height)){var c=Math.min(this.index,this.index0),e=Math.max(this.index,this.index0),d=c,f=e,h=this.chart,k=h.chartData,l=h.categoryAxis;l&&l.parseDates&&!l.equalSpacing&&(d=k[c]?k[c].time:Math.min(this.timestamp0,this.timestamp),f=k[e]?h.getEndTime(k[e].time):Math.max(this.timestamp0,this.timestamp));var b={type:a,chart:this.chart,target:this,end:f,start:d,startIndex:c,endIndex:e,selectionHeight:b.height,selectionWidth:b.width,selectionY:b.y,selectionX:b.x},
m;this.hZoomEnabled&&4<Math.abs(this.mouseX0-this.mouseX)&&(b.startX=this.mouseX0/this.width,b.endX=this.mouseX/this.width,m=!0);this.vZoomEnabled&&4<Math.abs(this.mouseY0-this.mouseY)&&(b.startY=1-this.mouseY0/this.height,b.endY=1-this.mouseY/this.height,m=!0);m&&(this.prevY=this.prevX=NaN,this.fire(b),"selected"!=a&&this.clearSelection());this.hideCursor()}}},dispatchMovedEvent:function(a,b,c,e){a=Math.round(a);b=Math.round(b);if(!this.isHidden&&(a!=this.prevX||b!=this.prevY||"changed"==c)){c||
(c="moved");var d=this.fx,f=this.fy;isNaN(d)&&(d=a);isNaN(f)&&(f=b);var h=!1;this.zooming&&this.pan&&(h=!0);h={hidden:this.isHidden,type:c,chart:this.chart,target:this,x:a,y:b,finalX:d,finalY:f,zooming:this.zooming,panning:h,mostCloseGraph:this.mostCloseGraph,index:this.index,skip:e,hideBalloons:this.hideGraphBalloons};this.prevIndex=this.index;this.rotate?(h.position=b,h.finalPosition=f):(h.position=a,h.finalPosition=d);this.prevX=a;this.prevY=b;e?this.chart.handleCursorMove(h):(this.fire(h),"changed"==
c&&this.chart.fire(h))}},dispatchPanEvent:function(){if(this.mouseIsDown){var a=d.roundTo((this.mouseX-this.mouseX0)/this.width,3),b=d.roundTo((this.mouseY-this.mouseY0)/this.height,3),c=d.roundTo((this.mouse2X-this.mouse2X0)/this.width,3),e=d.roundTo((this.mouse2Y-this.mouse2Y0)/this.height,2),g=!1;0!==Math.abs(a)&&0!==Math.abs(b)&&(g=!0);if(this.prevDeltaX==a||this.prevDeltaY==b)g=!1;isNaN(c)||isNaN(e)||(0!==Math.abs(c)&&0!==Math.abs(e)&&(g=!0),this.prevDelta2X!=c&&this.prevDelta2Y!=e)||(g=!1);
g&&(this.hideLines(),this.fire({type:"panning",chart:this.chart,target:this,deltaX:a,deltaY:b,delta2X:c,delta2Y:e,index:this.index}),this.prevDeltaX=a,this.prevDeltaY=b,this.prevDelta2X=c,this.prevDelta2Y=e)}},clearSelection:function(){var a=this.selection;a&&(a.width=0,a.height=0,a.remove())},destroy:function(){this.clear();d.remove(this.selection);this.selection=null;clearTimeout(this.syncTO);d.remove(this.set)},clear:function(){},setTimestamp:function(a){this.timestamp=a},setIndex:function(a,b){a!=
this.index&&(this.index=a,b||this.isHidden||this.dispatchMovedEvent(this.mouseX,this.mouseY,"changed"))},handleMouseOut:function(){this.enabled&&this.rolledOver&&(this.leaveCursor||this.setIndex(void 0),this.forceShow=!1,this.hideCursor(),this.rolledOver=!1)},showCursorAt:function(a){var b=this.chart.categoryAxis;b&&this.setPosition(b.categoryToCoordinate(a),a)},setPosition:function(a,b){var c=this.chart,e=c.categoryAxis;if(e){var d,f;void 0===b&&(b=e.coordinateToValue(a));e.showBalloonAt(b,a);this.forceShow=
!0;e.stickBalloonToCategory?c.rotate?this.fixHLine(a,0):this.fixVLine(a,0):(this.showCursor(),c.rotate?this.hhLine.translate(0,a):this.vvLine.translate(a,0));c.rotate?d=a:f=a;c.rotate?(this.vvLine&&this.vvLine.hide(),this.hhLine&&this.hhLine.show()):(this.hhLine&&this.hhLine.hide(),this.vvLine&&this.vvLine.show());this.updateFullLine();this.isHidden=!1;this.dispatchMovedEvent(f,d,"moved",!0)}},enableDrawing:function(a){this.enabled=!a;this.hideCursor();this.drawing=a},syncWithCursor:function(a,b){clearTimeout(this.syncTO);
a&&(a.isHidden?this.hideCursor(!0):this.syncWithCursorReal(a,b))},isZooming:function(a){this.zooming=a},syncWithCursorReal:function(a,b){var c=a.vvLine,e=a.hhLine;this.index=a.index;this.forceShow=!0;this.zooming&&this.pan||this.showCursor(!0);this.hideGraphBalloons=b;this.justReleased=a.justReleased;this.zooming=a.zooming;this.index0=a.index0;this.mouseX0=a.mouseX0;this.mouseY0=a.mouseY0;this.mouse2X0=a.mouse2X0;this.mouse2Y0=a.mouse2Y0;this.timestamp0=a.timestamp0;this.prevDeltaX=a.prevDeltaX;this.prevDeltaY=
a.prevDeltaY;this.prevDelta2X=a.prevDelta2X;this.prevDelta2Y=a.prevDelta2Y;this.fx=a.fx;this.fy=a.fy;a.zooming&&this.updateSelection();var d=a.mouseX,f=a.mouseY;this.rotate?(d=NaN,this.vvLine&&this.vvLine.hide(),this.hhLine&&e&&(isNaN(a.fy)?this.hhLine.translate(0,a.mouseY):this.fixHLine(a.fy,0))):(f=NaN,this.hhLine&&this.hhLine.hide(),this.vvLine&&c&&(isNaN(a.fx)?this.vvLine.translate(a.mouseX,0):this.fixVLine(a.fx,0)));this.dispatchMovedEvent(d,f,"moved",!0)}})})();(function(){var d=window.AmCharts;d.SimpleChartScrollbar=d.Class({construct:function(a){this.createEvents("zoomed","zoomStarted","zoomEnded");this.backgroundColor="#D4D4D4";this.backgroundAlpha=1;this.selectedBackgroundColor="#EFEFEF";this.scrollDuration=this.selectedBackgroundAlpha=1;this.resizeEnabled=!0;this.hideResizeGrips=!1;this.scrollbarHeight=20;this.updateOnReleaseOnly=!1;9>document.documentMode&&(this.updateOnReleaseOnly=!0);this.dragIconHeight=this.dragIconWidth=35;this.dragIcon="dragIconRoundBig";
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
this.clipW!=d)f=!0;f&&this.clipAndUpdate(c,e,d,b);a&&(this.updateOnReleaseOnly||this.dispatchScrollbarEvent())}},maskGraphs:function(){},clipAndUpdate:function(a,b,c,e){this.clipX=a;this.clipY=b;this.clipW=c;this.clipH=e;this.selectedBG.setAttr("width",c);this.selectedBG.setAttr("height",e);this.selectedBG.translate(a,b);this.updateDragIconPositions();this.maskGraphs(a,b,c,e)},dispatchScrollbarEvent:function(){if(this.skipEvent)this.skipEvent=!1;else{var a=this.chart;a.hideBalloon();var b=this.getDBox(),
c=b.x,e=b.y,d=b.width,b=b.height;this.getPercents();this.rotate?(c=e,d=this.height/b):d=this.width/d;a={type:"zoomed",position:c,chart:a,target:this,multiplier:d,relativeStart:this.percentStart,relativeEnd:this.percentEnd};if(this.percentStart!=this.prevPercentStart||this.percentEnd!=this.prevPercentEnd||this.prevMultiplier!=d)this.fire(a),this.prevPercentStart=this.percentStart,this.prevPercentEnd=this.percentEnd,this.prevMultiplier=d}},updateDragIconPositions:function(){var a=this.getDBox(),b=a.x,
c=a.y,e=this.iconLeft,d=this.iconRight,f,h,k=this.scrollbarHeight;this.rotate?(f=this.dragIconWidth,h=this.dragIconHeight,e.translate((k-h)/2,c-f/2),d.translate((k-h)/2,c+a.height-f/2)):(f=this.dragIconHeight,h=this.dragIconWidth,e.translate(b-h/2,(k-f)/2),d.translate(b-h/2+a.width,(k-f)/2))},showDragIcons:function(){this.resizeEnabled&&(this.iconLeft.show(),this.iconRight.show())},hideDragIcons:function(){if(!this.resizingLeft&&!this.resizingRight&&!this.dragging){if(this.hideResizeGrips||!this.resizeEnabled)this.iconLeft.hide(),
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
var g=e.y,f=e.width,e=e.height,h=this.chart;this.rotate?(b=g,c=e):c=f;f={type:"zoomed",target:this};f.chart=h;var k=this.categoryAxis,l=this.stepWidth,e=h.minSelectedTime,m=h.maxSelectedTime,g=!1;if(k.parseDates&&!k.equalSpacing){if(a=h.lastTime,h=h.firstTime,k=Math.round(b/l)+h,b=this.dragging?k+this.timeDifference:Math.round((b+c)/l)+h,k>b&&(k=b),0<e&&b-k<e&&(b=Math.round(k+(b-k)/2),g=Math.round(e/2),k=b-g,b+=g,g=!0),0<m&&b-k>m&&(b=Math.round(k+(b-k)/2),g=Math.round(m/2),k=b-g,b+=g,g=!0),b>a&&(b=
a),b-e<k&&(k=b-e),k<h&&(k=h),k+e>b&&(b=k+e),k!=this.startTime||b!=this.endTime)this.startTime=k,this.endTime=b,f.start=k,f.end=b,f.startDate=new Date(k),f.endDate=new Date(b),this.fire(f)}else{m=l/2;k.startOnAxis||(b+=m,c-=m);e=k.xToIndex(b);k.startOnAxis||(b=k.getCoordinate(e)-m);b=k.xToIndex(b+c);if(e!=this.start||this.end!=b)k.startOnAxis&&(this.resizingRight&&e==b&&b++,this.resizingLeft&&e==b&&(0<e?e--:b=1)),b==a.length&&(b=a.length-1),e==b&&b==a.length-1&&(e=b-1),this.start=e,this.end=this.dragging?
this.start+this.difference:b,f.start=this.start,f.end=this.end,k.parseDates&&(a[this.start]&&(f.startDate=new Date(a[this.start].time)),a[this.end]&&(f.endDate=new Date(a[this.end].time))),this.fire(f);this.percentStart=e;this.percentEnd=b}g&&this.zoomScrollbar(!0)}},zoomScrollbar:function(a){if((!(this.dragging||this.resizingLeft||this.resizingRight||this.animating)||a)&&this.dragger&&this.enabled){var b,c,d=this.chart;a=d.chartData;var g=this.categoryAxis;g.parseDates&&!g.equalSpacing?(a=g.stepWidth,
c=d.firstTime,b=a*(this.startTime-c),c=a*(this.endTime-c)):(a[this.start]&&(b=a[this.start].x[g.id]),a[this.end]&&(c=a[this.end].x[g.id]),a=g.stepWidth,g.startOnAxis||(d=a/2,b-=d,c+=d));this.stepWidth=a;isNaN(b)||isNaN(c)||this.updateScrollbarSize(b,c)}},maskGraphs:function(a,b,c,d){var g=this.selectedGraph;g&&g.set.clipRect(a,b,c,d)},handleDragStart:function(){d.ChartScrollbar.base.handleDragStart.call(this);this.difference=this.end-this.start;this.timeDifference=this.endTime-this.startTime;0>this.timeDifference&&
(this.timeDifference=0)},handleBackgroundClick:function(){d.ChartScrollbar.base.handleBackgroundClick.call(this);this.dragging||(this.difference=this.end-this.start,this.timeDifference=this.endTime-this.startTime,0>this.timeDifference&&(this.timeDifference=0))}})})();(function(){var d=window.AmCharts;d.AmBalloon=d.Class({construct:function(a){this.cname="AmBalloon";this.enabled=!0;this.fillColor="#FFFFFF";this.fillAlpha=.8;this.borderThickness=2;this.borderColor="#FFFFFF";this.borderAlpha=1;this.cornerRadius=0;this.maxWidth=220;this.horizontalPadding=8;this.verticalPadding=4;this.pointerWidth=6;this.pointerOrientation="V";this.color="#000000";this.adjustBorderColor=!0;this.show=this.follow=this.showBullet=!1;this.bulletSize=3;this.shadowAlpha=.4;this.shadowColor=
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
0;b<a.length;b++){var c=a[b],c=d.processObject(c,d.AmGraph,this.theme);a[b]=c;this.chooseGraphColor(c,b);c.chart=this;c.init();d.isString(c.valueAxis)&&(c.valueAxis=this.getValueAxisById(c.valueAxis));c.valueAxis||(c.valueAxis=this.valueAxes[0]);c.id||(c.id="graphAuto"+b+"_"+(new Date).getTime());this.graphsById[c.id]=c}},formatString:function(a,b,c){var e=b.graph,g=e.valueAxis;if(g.duration&&g.maxInterval&&b.values.value){var f=g.numberFormatter;f||(f=chart.nf);g=d.formatDuration(b.values.value,
g.duration,"",g.durationUnits,g.maxInterval,f);a=a.split("[[value]]").join(g)}a=d.massReplace(a,{"[[title]]":e.title,"[[description]]":b.description});a=c?d.fixNewLines(a):d.fixBrakes(a);return a=d.cleanFromEmpty(a)},getBalloonColor:function(a,b,c){var e=a.lineColor,g=a.balloonColor;c&&(g=e);c=a.fillColorsR;"object"==typeof c?e=c[0]:void 0!==c&&(e=c);b.isNegative&&(c=a.negativeLineColor,a=a.negativeFillColors,"object"==typeof a?c=a[0]:void 0!==a&&(c=a),void 0!==c&&(e=c));void 0!==b.color&&(e=b.color);
void 0!==b.lineColor&&(e=b.lineColor);b=b.fillColors;void 0!==b&&(e=b,d.ifArray(b)&&(e=b[0]));void 0===g&&(g=e);return g},getGraphById:function(a){return d.getObjById(this.graphs,a)},getValueAxisById:function(a){return d.getObjById(this.valueAxes,a)},processFields:function(a,b,c){if(a.itemColors){var e=a.itemColors,g=b.index;b.color=g<e.length?e[g]:d.randomColor()}e="lineColor color alpha fillColors description bullet customBullet bulletSize bulletConfig url labelColor dashLength pattern gap className columnIndex".split(" ");
for(g=0;g<e.length;g++){var f=e[g],h=a[f+"Field"];h&&(h=c[h],d.isDefined(h)&&(b[f]=h))}b.dataContext=c},chooseGraphColor:function(a,b){if(a.lineColor)a.lineColorR=a.lineColor;else{var c;c=this.colors.length>b?this.colors[b]:a.lineColorR?a.lineColorR:d.randomColor();a.lineColorR=c}a.fillColorsR=a.fillColors?a.fillColors:a.lineColorR;a.bulletBorderColorR=a.bulletBorderColor?a.bulletBorderColor:a.useLineColorForBulletBorder?a.lineColorR:a.bulletColor;a.bulletColorR=a.bulletColor?a.bulletColor:a.lineColorR;
if(c=this.patterns)a.pattern=c[b]},handleLegendEvent:function(a){var b=a.type;if(a=a.dataItem){var c=a.hidden,d=a.showBalloon;switch(b){case "clickMarker":this.textClickEnabled&&(d?this.hideGraphsBalloon(a):this.showGraphsBalloon(a));break;case "clickLabel":d?this.hideGraphsBalloon(a):this.showGraphsBalloon(a);break;case "rollOverItem":c||this.highlightGraph(a);break;case "rollOutItem":c||this.unhighlightGraph();break;case "hideItem":this.hideGraph(a);break;case "showItem":this.showGraph(a)}}},highlightGraph:function(a){var b=
this.graphs;if(b){var c,d=.2;this.legend&&(d=this.legend.rollOverGraphAlpha);if(1!=d)for(c=0;c<b.length;c++){var g=b[c];g!=a&&g.changeOpacity(d)}}},unhighlightGraph:function(){var a;this.legend&&(a=this.legend.rollOverGraphAlpha);if(1!=a){a=this.graphs;var b;for(b=0;b<a.length;b++)a[b].changeOpacity(1)}},showGraph:function(a){a.switchable&&(a.hidden=!1,this.dataChanged=!0,"xy"!=this.type&&(this.marginsUpdated=!1),this.chartCreated&&this.initChart())},hideGraph:function(a){a.switchable&&(this.dataChanged=
!0,"xy"!=this.type&&(this.marginsUpdated=!1),a.hidden=!0,this.chartCreated&&this.initChart())},hideGraphsBalloon:function(a){a.showBalloon=!1;this.updateLegend()},showGraphsBalloon:function(a){a.showBalloon=!0;this.updateLegend()},updateLegend:function(){this.legend&&this.legend.invalidateSize()},resetAnimation:function(){this.animatable=[];var a=this.graphs;if(a){var b;for(b=0;b<a.length;b++)a[b].animationPlayed=!1}},animateAgain:function(){this.resetAnimation();this.validateNow()}})})();(function(){var d=window.AmCharts;d.TrendLine=d.Class({construct:function(a){this.cname="TrendLine";this.createEvents("click","rollOver","rollOut");this.isProtected=!1;this.dashLength=0;this.lineColor="#00CC00";this.lineThickness=this.lineAlpha=1;d.applyTheme(this,a,this.cname)},draw:function(){var a=this;a.destroy();var b=a.chart,c=b.container,e,g,f,h,k=a.categoryAxis,l=a.initialDate,m=a.initialCategory,n=a.finalDate,q=a.finalCategory,p=a.valueAxis,t=a.valueAxisX,r=a.initialXValue,w=a.finalXValue,
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
","+Math.round(c[0])+" ";g=[];for(l=0;l<b.length;l++)isNaN(b[l])||isNaN(c[l])?(e+=this.drawSegment(g,p,t),l<b.length-1&&(e+="L"+b[l+1]+","+c[l+1]+" "),g=[]):g.push({x:Number(b[l]),y:Number(c[l])});e+=this.drawSegment(g,p,t);m&&(e+=m);this.path=a.path(e).attr(f);this.node=this.path.node;w&&this.path.gradient("linearGradient",r,n)},drawSegment:function(a,b,c){var d="";if(2<a.length)for(var g=0;g<a.length-1;g++){var f=[],h=a[g-1],k=a[g],l=a[g+1],m=a[g+2];0===g?(f.push({x:k.x,y:k.y}),f.push({x:k.x,y:k.y}),
f.push({x:l.x,y:l.y}),f.push({x:m.x,y:m.y})):g>=a.length-2?(f.push({x:h.x,y:h.y}),f.push({x:k.x,y:k.y}),f.push({x:l.x,y:l.y}),f.push({x:l.x,y:l.y})):(f.push({x:h.x,y:h.y}),f.push({x:k.x,y:k.y}),f.push({x:l.x,y:l.y}),f.push({x:m.x,y:m.y}));h=[];k=Math.round;h.push({x:k(f[1].x),y:k(f[1].y)});h.push({x:k((-f[0].x+b*f[1].x+f[2].x)/b),y:k((-f[0].y+c*f[1].y+f[2].y)/c)});h.push({x:k((f[1].x+b*f[2].x-f[3].x)/b),y:k((f[1].y+c*f[2].y-f[3].y)/c)});h.push({x:k(f[2].x),y:k(f[2].y)});d+="C"+h[1].x+","+h[1].y+","+
h[2].x+","+h[2].y+","+h[3].x+","+h[3].y+" "}else 1<a.length&&(d+="L"+a[1].x+","+a[1].y);return d}})})();(function(){var d=window.AmCharts;d.AmDraw=d.Class({construct:function(a,b,c,e){d.SVG_NS="http://www.w3.org/2000/svg";d.SVG_XLINK="http://www.w3.org/1999/xlink";d.hasSVG=!!document.createElementNS&&!!document.createElementNS(d.SVG_NS,"svg").createSVGRect;1>b&&(b=10);1>c&&(c=10);this.div=a;this.width=b;this.height=c;this.rBin=document.createElement("div");d.hasSVG?(d.SVG=!0,b=this.createSvgElement("svg"),a.appendChild(b),this.container=b,this.addDefs(e),this.R=new d.SVGRenderer(this)):d.isIE&&d.VMLRenderer&&
(d.VML=!0,d.vmlStyleSheet||(document.namespaces.add("amvml","urn:schemas-microsoft-com:vml"),31>document.styleSheets.length?(b=document.createStyleSheet(),b.addRule(".amvml","behavior:url(#default#VML); display:inline-block; antialias:true"),d.vmlStyleSheet=b):document.styleSheets[0].addRule(".amvml","behavior:url(#default#VML); display:inline-block; antialias:true")),this.container=a,this.R=new d.VMLRenderer(this,e),this.R.disableSelection(a))},createSvgElement:function(a){return document.createElementNS(d.SVG_NS,
a)},circle:function(a,b,c,e){var g=new d.AmDObject("circle",this);g.attr({r:c,cx:a,cy:b});this.addToContainer(g.node,e);return g},ellipse:function(a,b,c,e,g){var f=new d.AmDObject("ellipse",this);f.attr({rx:c,ry:e,cx:a,cy:b});this.addToContainer(f.node,g);return f},setSize:function(a,b){0<a&&0<b&&(this.container.style.width=a+"px",this.container.style.height=b+"px")},rect:function(a,b,c,e,g,f,h){var k=new d.AmDObject("rect",this);d.VML&&(g=Math.round(100*g/Math.min(c,e)),c+=2*f,e+=2*f,k.bw=f,k.node.style.marginLeft=
-f,k.node.style.marginTop=-f);1>c&&(c=1);1>e&&(e=1);k.attr({x:a,y:b,width:c,height:e,rx:g,ry:g,"stroke-width":f});this.addToContainer(k.node,h);return k},image:function(a,b,c,e,g,f){var h=new d.AmDObject("image",this);h.attr({x:b,y:c,width:e,height:g});this.R.path(h,a);this.addToContainer(h.node,f);return h},addToContainer:function(a,b){b||(b=this.container);b.appendChild(a)},text:function(a,b,c){return this.R.text(a,b,c)},path:function(a,b,c,e){var g=new d.AmDObject("path",this);e||(e="100,100");
g.attr({cs:e});c?g.attr({dd:a}):g.attr({d:a});this.addToContainer(g.node,b);return g},set:function(a){return this.R.set(a)},remove:function(a){if(a){var b=this.rBin;b.appendChild(a);b.innerHTML=""}},renderFix:function(){var a=this.container,b=a.style;b.top="0px";b.left="0px";try{var c=a.getBoundingClientRect(),d=c.left-Math.round(c.left),g=c.top-Math.round(c.top);d&&(b.left=d+"px");g&&(b.top=g+"px")}catch(f){}},update:function(){this.R.update()},addDefs:function(a){if(d.hasSVG){var b=this.createSvgElement("desc"),
c=this.container;c.setAttribute("version","1.1");c.style.position="absolute";this.setSize(this.width,this.height);if(a.accessibleTitle){var e=this.createSvgElement("text");c.appendChild(e);e.innerHTML=a.accessibleTitle;e.style.opacity=0}d.rtl&&(c.setAttribute("direction","rtl"),c.style.left="auto",c.style.right="0px");a&&(a.addCodeCredits&&b.appendChild(document.createTextNode("JavaScript chart by amCharts "+a.version)),a.accessibleDescription&&(b.innerHTML="",b.appendChild(document.createTextNode(a.accessibleDescription))),
c.appendChild(b),a.defs&&(b=this.createSvgElement("defs"),c.appendChild(b),d.parseDefs(a.defs,b),this.defs=b))}}})})();(function(){var d=window.AmCharts;d.AmDObject=d.Class({construct:function(a,b){this.D=b;this.R=b.R;this.node=this.R.create(this,a);this.y=this.x=0;this.scale=1},attr:function(a){this.R.attr(this,a);return this},getAttr:function(a){return this.node.getAttribute(a)},setAttr:function(a,b){this.R.setAttr(this,a,b);return this},clipRect:function(a,b,c,d){this.R.clipRect(this,a,b,c,d)},translate:function(a,b,c,d){d||(a=Math.round(a),b=Math.round(b));this.R.move(this,a,b,c);this.x=a;this.y=b;this.scale=
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
this.fire(a)},createValue:function(a){var b=this,c=b.fontSize,e=b.chart;if(!1!==a.visibleInLegend&&!a.hideFromLegend){var g=b.maxLabelWidth,f=0;b.forceWidth&&(g=b.labelWidth);b.equalWidths||(b.valueAlign="left");f={x:0,y:0,width:0,height:0};a.legendLabel&&(f=a.legendLabel.getBBox());"left"==b.valueAlign&&(g=f.width);var f=f.height,h=g,k=b.markerSize;k<c+7&&(k=c+7,d.VML&&(k+=3));if(b.valueText&&0<b.valueWidth){var l=b.color;b.useMarkerColorForValues&&(l=a.color,a.legendKeyColor&&(l=a.legendKeyColor()));
!0===a.hidden&&(l=b.markerDisabledColor);var m=b.valueText,g=g+b.lx+b.labelDx+b.markerLabelGap+b.valueWidth,n="end";"left"==b.valueAlign&&(g-=b.valueWidth,n="start");c=d.text(b.container,m,l,b.chart.fontFamily,c,n);d.setCN(e,c,"legend-value");c.translate(g,b.ly);b.entries[b.index].push(c);h+=b.valueWidth+2*b.markerLabelGap;c.dItem=a;b.valueLabels.push(c);k<f+5&&(k=f+5)}b.index++;e=b.container.rect(a.legendEntryWidth,0,h,k,0,0).attr({stroke:"none",fill:"#fff","fill-opacity":.005});e.dItem=a;b.entries[b.index-
1].push(e);e.mouseover(function(c){b.rollOverLabel(a,c)}).mouseout(function(c){b.rollOutLabel(a,c)}).click(function(c){b.clickLabel(a,c)})}},createV:function(){var a=this.markerSize;return d.polygon(this.container,[a/5,a/2,a-a/5,a/2],[a/3,a-a/5,a/5,a/1.7],this.switchColor)},createX:function(){var a=(this.markerSize-4)/2,b={stroke:this.switchColor,"stroke-width":3},c=this.container,e=d.line(c,[-a,a],[-a,a]).attr(b),a=d.line(c,[-a,a],[a,-a]).attr(b);return this.container.set([e,a])},createMarker:function(a,
b,c,e,g,f,h,k,l){var m=this.markerSize,n=this.container;g||(g=this.markerBorderColor);g||(g=b);isNaN(e)&&(e=this.markerBorderThickness);isNaN(f)&&(f=this.markerBorderAlpha);return d.bullet(n,a,m,b,c,e,g,f,m,h,k,this.chart.path,l)},validateNow:function(){this.invalidateSize()},updateValues:function(){var a=this.valueLabels,b=this.chart,c,e=this.data;if(a)for(c=0;c<a.length;c++){var g=a[c],f=g.dItem;f.periodDataItem=void 0;f.periodPercentDataItem=void 0;var h=" ";if(e)f.value?g.text(f.value):g.text("");
else{var k=null;if(void 0!==f.type){var k=f.currentDataItem,l=this.periodValueText;f.legendPeriodValueText&&(l=f.legendPeriodValueText);f.legendPeriodValueTextR&&(l=f.legendPeriodValueTextR);k?(h=this.valueText,f.legendValueText&&(h=f.legendValueText),f.legendValueTextR&&(h=f.legendValueTextR),h=b.formatString(h,k)):l&&b.formatPeriodString&&(l=d.massReplace(l,{"[[title]]":f.title}),h=b.formatPeriodString(l,f))}else h=b.formatString(this.valueText,f);l=f;k&&(l=k);var m=this.valueFunction;m&&(h=m(l,
h,b.periodDataItem));var n;this.useMarkerColorForLabels&&!k&&f.lastDataItem&&(k=f.lastDataItem);k?n=b.getBalloonColor(f,k):f.legendKeyColor&&(n=f.legendKeyColor());f.legendColorFunction&&(n=f.legendColorFunction(l,h,f.periodDataItem,f.periodPercentDataItem));g.text(h);if(!f.pattern&&(this.useMarkerColorForValues&&g.setAttr("fill",n),this.useMarkerColorForLabels)){if(g=f.legendMarker)g.setAttr("fill",n),g.setAttr("stroke",n);(g=f.legendLabel)&&(f.hidden?g.setAttr("fill",this.markerDisabledColor):g.setAttr("fill",
n))}}}},renderFix:function(){if(!d.VML&&this.enabled){var a=this.container;a&&a.renderFix()}},destroy:function(){this.div.innerHTML="";d.remove(this.set)}})})();(function(){var d=window.AmCharts;d.formatMilliseconds=function(a,b){if(-1!=a.indexOf("fff")){var c=b.getMilliseconds(),d=String(c);10>c&&(d="00"+c);10<=c&&100>c&&(d="0"+c);a=a.replace(/fff/g,d)}return a};d.extractPeriod=function(a){var b=d.stripNumbers(a),c=1;b!=a&&(c=Number(a.slice(0,a.indexOf(b))));return{period:b,count:c}};d.getDate=function(a,b,c){return a instanceof Date?d.newDate(a,c):b&&isNaN(a)?d.stringToDate(a,b):new Date(a)};d.daysInMonth=function(a){return(new Date(a.getYear(),a.getMonth()+
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
function(a,b,c,e,g){if(d.useUTC)return d.changeUTCDate(a,b,c,e,g);var f=-1;void 0===e&&(e=!0);void 0===g&&(g=!1);!0===e&&(f=1);switch(b){case "YYYY":a.setFullYear(a.getFullYear()+c*f);e||g||a.setDate(a.getDate()+1);break;case "MM":b=a.getMonth();var h=a.getFullYear();a.setMonth(b+c*f);var k=a.getMonth();if(e&&k-b>c)for(;a.getMonth()-b>c;)a.setDate(a.getDate()-1);h==a.getFullYear()&&a.getMonth()>b+c*f&&a.setDate(a.getDate()-1);e||g||a.setDate(a.getDate()+1);break;case "DD":a.setDate(a.getDate()+c*
f);break;case "WW":a.setDate(a.getDate()+c*f*7);break;case "hh":a.setHours(a.getHours()+c*f);break;case "mm":a.setMinutes(a.getMinutes()+c*f);break;case "ss":a.setSeconds(a.getSeconds()+c*f);break;case "fff":a.setMilliseconds(a.getMilliseconds()+c*f)}return a};d.changeUTCDate=function(a,b,c,d,g){var f=-1;void 0===d&&(d=!0);void 0===g&&(g=!1);!0===d&&(f=1);switch(b){case "YYYY":a.setUTCFullYear(a.getUTCFullYear()+c*f);d||g||a.setUTCDate(a.getUTCDate()+1);break;case "MM":b=a.getUTCMonth();a.setUTCMonth(a.getUTCMonth()+
c*f);a.getUTCMonth()>b+c*f&&a.setUTCDate(a.getUTCDate()-1);d||g||a.setUTCDate(a.getUTCDate()+1);break;case "DD":a.setUTCDate(a.getUTCDate()+c*f);break;case "WW":a.setUTCDate(a.getUTCDate()+c*f*7);break;case "hh":a.setUTCHours(a.getUTCHours()+c*f);break;case "mm":a.setUTCMinutes(a.getUTCMinutes()+c*f);break;case "ss":a.setUTCSeconds(a.getUTCSeconds()+c*f);break;case "fff":a.setUTCMilliseconds(a.getUTCMilliseconds()+c*f)}return a}})();


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
a},measureMargins:function(){var a=this.valueAxes,b,c=this.autoMarginOffset,d=this.fixMargins,g=this.realWidth,h=this.realHeight,f=c,e=c,k=g;b=h;var m;for(m=0;m<a.length;m++)a[m].handleSynchronization(),b=this.getAxisBounds(a[m],f,k,e,b),f=Math.round(b.l),k=Math.round(b.r),e=Math.round(b.t),b=Math.round(b.b);if(a=this.categoryAxis)b=this.getAxisBounds(a,f,k,e,b),f=Math.round(b.l),k=Math.round(b.r),e=Math.round(b.t),b=Math.round(b.b);d.left&&f<c&&(this.marginLeft=Math.round(-f+c),!isNaN(this.minMarginLeft)&&
this.marginLeft<this.minMarginLeft&&(this.marginLeft=this.minMarginLeft));d.right&&k>=g-c&&(this.marginRight=Math.round(k-g+c),!isNaN(this.minMarginRight)&&this.marginRight<this.minMarginRight&&(this.marginRight=this.minMarginRight));d.top&&e<c+this.titleHeight&&(this.marginTop=Math.round(this.marginTop-e+c+this.titleHeight),!isNaN(this.minMarginTop)&&this.marginTop<this.minMarginTop&&(this.marginTop=this.minMarginTop));d.bottom&&b>h-c&&(this.marginBottom=Math.round(this.marginBottom+b-h+c),!isNaN(this.minMarginBottom)&&
this.marginBottom<this.minMarginBottom&&(this.marginBottom=this.minMarginBottom));this.initChart()},getAxisBounds:function(a,b,c,d,g){if(!a.ignoreAxisWidth){var h=a.labelsSet,f=a.tickLength;a.inside&&(f=0);if(h)switch(h=a.getBBox(),a.position){case "top":a=h.y;d>a&&(d=a);break;case "bottom":a=h.y+h.height;g<a&&(g=a);break;case "right":a=h.x+h.width+f+3;c<a&&(c=a);break;case "left":a=h.x-f,b>a&&(b=a)}}return{l:b,t:d,r:c,b:g}},drawZoomOutButton:function(){var a=this;if(!a.zbSet){var b=a.container.set();
a.zoomButtonSet.push(b);var c=a.color,d=a.fontSize,g=a.zoomOutButtonImageSize,h=a.zoomOutButtonImage.replace(/\.[a-z]*$/i,""),f=a.langObj.zoomOutText||a.zoomOutText,l=a.zoomOutButtonColor,k=a.zoomOutButtonAlpha,m=a.zoomOutButtonFontSize,p=a.zoomOutButtonPadding;isNaN(m)||(d=m);(m=a.zoomOutButtonFontColor)&&(c=m);var m=a.zoomOutButton,n;m&&(m.fontSize&&(d=m.fontSize),m.color&&(c=m.color),m.backgroundColor&&(l=m.backgroundColor),isNaN(m.backgroundAlpha)||(a.zoomOutButtonRollOverAlpha=m.backgroundAlpha));
var u=m=0,u=a.pathToImages;if(h){if(e.isAbsolute(h)||void 0===u)u="";n=a.container.image(u+h+a.extension,0,0,g,g);e.setCN(a,n,"zoom-out-image");b.push(n);n=n.getBBox();m=n.width+5}void 0!==f&&(c=e.text(a.container,f,c,a.fontFamily,d,"start"),e.setCN(a,c,"zoom-out-label"),d=c.getBBox(),u=n?n.height/2-3:d.height/2,c.translate(m,u),b.push(c));n=b.getBBox();c=1;e.isModern||(c=0);l=e.rect(a.container,n.width+2*p+5,n.height+2*p-2,l,1,1,l,c);l.setAttr("opacity",k);l.translate(-p,-p);e.setCN(a,l,"zoom-out-bg");
b.push(l);l.toBack();a.zbBG=l;n=l.getBBox();b.translate(a.marginLeftReal+a.plotAreaWidth-n.width+p,a.marginTopReal+p);b.hide();b.mouseover(function(){a.rollOverZB()}).mouseout(function(){a.rollOutZB()}).click(function(){a.clickZB()}).touchstart(function(){a.rollOverZB()}).touchend(function(){a.rollOutZB();a.clickZB()});for(k=0;k<b.length;k++)b[k].attr({cursor:"pointer"});void 0!==a.zoomOutButtonTabIndex&&(b.setAttr("tabindex",a.zoomOutButtonTabIndex),b.setAttr("role","menuitem"),b.keyup(function(b){13==
b.keyCode&&a.clickZB()}));a.zbSet=b}},rollOverZB:function(){this.rolledOverZB=!0;this.zbBG.setAttr("opacity",this.zoomOutButtonRollOverAlpha)},rollOutZB:function(){this.rolledOverZB=!1;this.zbBG.setAttr("opacity",this.zoomOutButtonAlpha)},clickZB:function(){this.rolledOverZB=!1;this.zoomOut()},zoomOut:function(){this.zoomOutValueAxes()},drawPlotArea:function(){var a=this.dx,b=this.dy,c=this.marginLeftReal,d=this.marginTopReal,g=this.plotAreaWidth-1,h=this.plotAreaHeight-1,f=this.plotAreaFillColors,
l=this.plotAreaFillAlphas,k=this.plotAreaBorderColor,m=this.plotAreaBorderAlpha;"object"==typeof l&&(l=l[0]);f=e.polygon(this.container,[0,g,g,0,0],[0,0,h,h,0],f,l,1,k,m,this.plotAreaGradientAngle);e.setCN(this,f,"plot-area");f.translate(c+a,d+b);this.set.push(f);0!==a&&0!==b&&(f=this.plotAreaFillColors,"object"==typeof f&&(f=f[0]),f=e.adjustLuminosity(f,-.15),g=e.polygon(this.container,[0,a,g+a,g,0],[0,b,b,0,0],f,l,1,k,m),e.setCN(this,g,"plot-area-bottom"),g.translate(c,d+h),this.set.push(g),a=e.polygon(this.container,
[0,0,a,a,0],[0,h,h+b,b,0],f,l,1,k,m),e.setCN(this,a,"plot-area-left"),a.translate(c,d),this.set.push(a));(c=this.bbset)&&this.scrollbarOnly&&c.remove()},updatePlotArea:function(){var a=this.updateWidth(),b=this.updateHeight(),c=this.container;this.realWidth=a;this.realWidth=b;c&&this.container.setSize(a,b);var c=this.marginLeftReal,d=this.marginTopReal,a=a-c-this.marginRightReal-this.dx,b=b-d-this.marginBottomReal;1>a&&(a=1);1>b&&(b=1);this.plotAreaWidth=Math.round(a);this.plotAreaHeight=Math.round(b);
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
!1;else{var b=this.startX0,c=this.endX0,d=this.endY0,g=this.startY0,e=a.startX,f=a.endX,l=a.startY,k=a.endY;this.startX0=this.endX0=this.startY0=this.endY0=NaN;this.handleCursorZoomReal(b+e*(c-b),b+f*(c-b),g+l*(d-g),g+k*(d-g),a)}},handleCursorHide:function(){var a,b=this.valueAxes;for(a=0;a<b.length;a++)b[a].hideBalloon();b=this.graphs;for(a=0;a<b.length;a++)b[a].hideBalloonReal()}})})();(function(){var e=window.AmCharts;e.AmSerialChart=e.Class({inherits:e.AmRectangularChart,construct:function(a){this.type="serial";e.AmSerialChart.base.construct.call(this,a);this.cname="AmSerialChart";this.theme=a;this.columnSpacing=5;this.columnSpacing3D=0;this.columnWidth=.8;var b=new e.CategoryAxis(a);b.chart=this;this.categoryAxis=b;this.zoomOutOnDataUpdate=!0;this.mouseWheelZoomEnabled=this.mouseWheelScrollEnabled=this.rotate=this.skipZoom=!1;this.minSelectedTime=0;e.applyTheme(this,a,this.cname)},
initChart:function(){e.AmSerialChart.base.initChart.call(this);this.updateCategoryAxis(this.categoryAxis,this.rotate,"categoryAxis");if(this.dataChanged)this.parseData();else this.onDataUpdated();this.drawGraphs=!0},onDataUpdated:function(){var a=this.countColumns(),b=this.chartData,c=this.graphs,d;for(d=0;d<c.length;d++){var g=c[d];g.data=b;g.columnCount=a}0<b.length&&(this.firstTime=this.getStartTime(b[0].time),this.lastTime=this.getEndTime(b[b.length-1].time));this.drawChart();this.autoMargins&&
!this.marginsUpdated?(this.marginsUpdated=!0,this.measureMargins()):this.dispDUpd()},syncGrid:function(){if(this.synchronizeGrid){var a=this.valueAxes,b,c;if(0<a.length){var d=0;for(c=0;c<a.length;c++)b=a[c],d<b.gridCountReal&&(d=b.gridCountReal);var g=!1;for(c=0;c<a.length;c++)if(b=a[c],b.gridCountReal<d){var h=(d-b.gridCountReal)/2,f=g=h;0!==h-Math.round(h)&&(g-=.5,f+=.5);0<=b.min&&0>b.min-g*b.step&&(f+=g,g=0);0>=b.max&&0<b.max+f*b.step&&(g+=f,f=0);h=e.getDecimals(b.step);b.minimum=e.roundTo(b.min-
g*b.step,h);b.maximum=e.roundTo(b.max+f*b.step,h);b.setStep=b.step;g=b.strictMinMax=!0}g&&this.updateAfterValueZoom();for(c=0;c<a.length;c++)b=a[c],b.minimum=NaN,b.maximum=NaN,b.setStep=NaN,b.strictMinMax=!1}}},handleWheelReal:function(a,b){if(!this.wheelBusy){var c=this.categoryAxis,d=c.parseDates,g=c.minDuration(),e=1,f=1;this.mouseWheelZoomEnabled?b||(e=-1):b&&(e=-1);var l=this.chartCursor;if(l)if(l.mouseIsOver()){var k=l.mouseX,l=l.mouseY;e!=f&&(k=this.rotate?l/this.plotAreaHeight:k/this.plotAreaWidth,
e*=k,f*=1-k);k=.05*(this.end-this.start);d&&(k=.05*(this.endTime-this.startTime)/g);1>k&&(k=1);e*=k;f*=k;if(!d||c.equalSpacing)e=Math.round(e),f=Math.round(f);l=this.chartData.length;c=this.lastTime;k=this.firstTime;0>a?d?(l=this.endTime-this.startTime,d=this.startTime+e*g,g=this.endTime+f*g,0<f&&0<e&&g>=c&&(g=c,d=c-l),this.zoomToDates(new Date(d),new Date(g))):(0<f&&0<e&&this.end>=l-1&&(e=f=0),d=this.start+e,g=this.end+f,this.zoomToIndexes(d,g)):d?(l=this.endTime-this.startTime,d=this.startTime-
e*g,g=this.endTime-f*g,0<f&&0<e&&d<=k&&(d=k,g=k+l),this.zoomToDates(new Date(d),new Date(g))):(0<f&&0<e&&1>this.start&&(e=f=0),d=this.start-e,g=this.end-f,this.zoomToIndexes(d,g))}else this.handleMouseOut()}},validateData:function(a){this.marginsUpdated=!1;this.zoomOutOnDataUpdate&&!a&&(this.endTime=this.end=this.startTime=this.start=NaN);var b=a=!1,c=!1,d=this.chartScrollbar;d&&(d.dragging&&(a=!0,d.handleDragStop()),d.resizingRight&&(c=!0,d.rightDragStop()),d.resizingLeft&&(b=!0,d.leftDragStop()));
e.AmSerialChart.base.validateData.call(this);a&&d.handleDragStart();c&&d.rightDragStart();b&&d.leftDragStart()},drawChart:function(){if(0<this.realWidth&&0<this.realHeight){e.AmSerialChart.base.drawChart.call(this);var a=this.chartData;if(e.ifArray(a)){var b=this.chartScrollbar;!b||!this.marginsUpdated&&this.autoMargins||b.draw();(b=this.valueScrollbar)&&b.draw();var b=a.length-1,c,d;c=this.categoryAxis;if(c.parseDates&&!c.equalSpacing){if(c=this.startTime,d=this.endTime,isNaN(c)||isNaN(d))c=this.firstTime,
d=this.lastTime}else{c=this.start;d=this.end;if(isNaN(c)||isNaN(d))d=c=NaN;isNaN(c)&&(isNaN(this.startTime)||(c=this.getClosestIndex(a,"time",this.startTime,!0,0,a.length)));isNaN(d)&&(isNaN(this.endTime)||(d=this.getClosestIndex(a,"time",this.endTime,!1,0,a.length)));if(isNaN(c)||isNaN(d))c=0,d=b}this.endTime=this.startTime=this.end=this.start=void 0;this.zoom(c,d)}}else this.cleanChart()},cleanChart:function(){e.callMethod("destroy",[this.valueAxes,this.graphs,this.categoryAxis,this.chartScrollbar,
this.chartCursor,this.valueScrollbar])},updateCategoryAxis:function(a,b,c){a.chart=this;a.id=c;a.rotate=b;a.setOrientation(!this.rotate);a.init();this.setAxisRenderers(a);this.updateObjectSize(a)},updateValueAxes:function(){e.AmSerialChart.base.updateValueAxes.call(this);var a=this.valueAxes,b;for(b=0;b<a.length;b++){var c=a[b],d=this.rotate;c.rotate=d;c.setOrientation(d);d=this.categoryAxis;if(!d.startOnAxis||d.parseDates)c.expandMinMax=!0}},getStartTime:function(a){var b=this.categoryAxis;return e.resetDateToMin(new Date(a),
b.minPeriod,1,b.firstDayOfWeek).getTime()},getEndTime:function(a){var b=e.extractPeriod(this.categoryAxis.minPeriod);return e.changeDate(new Date(a),b.period,b.count,!0).getTime()-1},updateMargins:function(){e.AmSerialChart.base.updateMargins.call(this);var a=this.chartScrollbar;a&&(this.getScrollbarPosition(a,this.rotate,this.categoryAxis.position),this.adjustMargins(a,this.rotate));if(a=this.valueScrollbar)this.getScrollbarPosition(a,!this.rotate,this.valueAxes[0].position),this.adjustMargins(a,
!this.rotate)},updateScrollbars:function(){e.AmSerialChart.base.updateScrollbars.call(this);this.updateChartScrollbar(this.chartScrollbar,this.rotate);this.updateChartScrollbar(this.valueScrollbar,!this.rotate)},zoom:function(a,b){var c=this.categoryAxis;c.parseDates&&!c.equalSpacing?(this.timeZoom(a,b),isNaN(a)&&this.zoomOutValueAxes()):this.indexZoom(a,b);(c=this.chartCursor)&&(c.pan||c.hideCursorReal());this.updateLegendValues()},timeZoom:function(a,b){var c=this.maxSelectedTime;isNaN(c)||(b!=
this.endTime&&b-a>c&&(a=b-c),a!=this.startTime&&b-a>c&&(b=a+c));var d=this.minSelectedTime;if(0<d&&b-a<d){var g=Math.round(a+(b-a)/2),d=Math.round(d/2);a=g-d;b=g+d}d=this.chartData;g=this.categoryAxis;if(e.ifArray(d)&&(a!=this.startTime||b!=this.endTime)){var h=g.minDuration(),f=this.firstTime,l=this.lastTime;a||(a=f,isNaN(c)||(a=l-c));b||(b=l);a>l&&(a=l);b<f&&(b=f);a<f&&(a=f);b>l&&(b=l);b<a&&(b=a+h);b-a<h/5&&(b<l?b=a+h/5:a=b-h/5);this.startTime=a;this.endTime=b;c=d.length-1;h=this.getClosestIndex(d,
"time",a,!0,0,c);d=this.getClosestIndex(d,"time",b,!1,h,c);g.timeZoom(a,b);g.zoom(h,d);this.start=e.fitToBounds(h,0,c);this.end=e.fitToBounds(d,0,c);this.zoomAxesAndGraphs();this.zoomScrollbar();this.fixCursor();this.showZB();this.syncGrid();this.updateColumnsDepth();this.dispatchTimeZoomEvent()}},showZB:function(){var a,b=this.categoryAxis;b&&b.parseDates&&!b.equalSpacing&&(this.startTime>this.firstTime&&(a=!0),this.endTime<this.lastTime&&(a=!0));0<this.start&&(a=!0);this.end<this.chartData.length-
1&&(a=!0);if(b=this.valueAxes)b=b[0],isNaN(b.relativeStart)||(0!==e.roundTo(b.relativeStart,3)&&(a=!0),1!=e.roundTo(b.relativeEnd,3)&&(a=!0));e.AmSerialChart.base.showZB.call(this,a)},updateAfterValueZoom:function(){e.AmSerialChart.base.updateAfterValueZoom.call(this);this.updateColumnsDepth()},indexZoom:function(a,b){var c=this.maxSelectedSeries,d=!1;isNaN(c)||(b!=this.end&&b-a>c&&(a=b-c,d=!0),a!=this.start&&b-a>c&&(b=a+c,d=!0));if(d&&(d=this.chartScrollbar)&&d.dragger){var g=d.dragger.getBBox();
d.maxWidth=g.width;d.maxHeight=g.height}if(a!=this.start||b!=this.end)d=this.chartData.length-1,isNaN(a)&&(a=0,isNaN(c)||(a=d-c)),isNaN(b)&&(b=d),b<a&&(b=a),b>d&&(b=d),a>d&&(a=d-1),0>a&&(a=0),this.start=a,this.end=b,this.categoryAxis.zoom(a,b),this.zoomAxesAndGraphs(),this.zoomScrollbar(),this.fixCursor(),0!==a||b!=this.chartData.length-1?this.showZB(!0):this.showZB(!1),this.syncGrid(),this.updateColumnsDepth(),this.dispatchIndexZoomEvent()},updateGraphs:function(){e.AmSerialChart.base.updateGraphs.call(this);
var a=this.graphs,b;for(b=0;b<a.length;b++){var c=a[b];c.columnWidthReal=this.columnWidth;c.categoryAxis=this.categoryAxis;e.isString(c.fillToGraph)&&(c.fillToGraph=this.graphsById[c.fillToGraph])}},zoomAxesAndGraphs:function(){e.AmSerialChart.base.zoomAxesAndGraphs.call(this);this.updateColumnsDepth()},updateColumnsDepth:function(){if(0!==this.depth3D||0!==this.angle){var a,b=this.graphs,c;this.columnsArray=[];for(a=0;a<b.length;a++){c=b[a];var d=c.columnsArray;if(d){var g;for(g=0;g<d.length;g++)this.columnsArray.push(d[g])}}this.columnsArray.sort(this.compareDepth);
b=this.columnsSet;if(0<this.columnsArray.length){d=this.container.set();this.columnSet.push(d);for(a=0;a<this.columnsArray.length;a++)d.push(this.columnsArray[a].column.set);c&&d.translate(c.x,c.y);this.columnsSet=d}e.remove(b)}},compareDepth:function(a,b){return a.depth>b.depth?1:-1},zoomScrollbar:function(){var a=this.chartScrollbar,b=this.categoryAxis;if(a){if(!this.zoomedByScrollbar){var c=a.dragger;c&&c.stop()}this.zoomedByScrollbar=!1;b.parseDates&&!b.equalSpacing?a.timeZoom(this.startTime,
this.endTime):a.zoom(this.start,this.end)}this.zoomValueScrollbar(this.valueScrollbar)},updateTrendLines:function(){var a=this.trendLines,b;for(b=0;b<a.length;b++){var c=a[b],c=e.processObject(c,e.TrendLine,this.theme);a[b]=c;c.chart=this;c.id||(c.id="trendLineAuto"+b+"_"+(new Date).getTime());e.isString(c.valueAxis)&&(c.valueAxis=this.getValueAxisById(c.valueAxis));c.valueAxis||(c.valueAxis=this.valueAxes[0]);c.categoryAxis=this.categoryAxis}},validateNow:function(a,b){a&&this.zoomOutOnDataUpdate&&
(this.endTime=this.end=this.startTime=this.start=NaN);e.AmSerialChart.base.validateNow.call(this,a,b)},countColumns:function(){var a=0,b=this.valueAxes.length,c=this.graphs.length,d,g,e=!1,f,l;for(l=0;l<b;l++){g=this.valueAxes[l];var k=g.stackType,m=0;if("100%"==k||"regular"==k)for(e=!1,f=0;f<c;f++)d=this.graphs[f],d.tcc=1,d.valueAxis==g&&"column"==d.type&&(!e&&d.stackable&&(a++,e=!0),(!d.stackable&&d.clustered||d.newStack&&0!==m)&&a++,d.columnIndex=a-1,d.clustered||(d.columnIndex=0),m++);if("none"==
k||"3d"==k){m=!1;for(f=0;f<c;f++)d=this.graphs[f],d.valueAxis==g&&"column"==d.type&&(d.clustered?(d.tcc=1,d.newStack&&(a=0),d.hidden||(d.columnIndex=a,a++)):d.hidden||(m=!0,d.tcc=1,d.columnIndex=0));m&&0===a&&(a=1)}if("3d"==k){g=1;for(m=0;m<c;m++)d=this.graphs[m],d.newStack&&g++,d.depthCount=g,d.tcc=a;a=g}if("regular"==k||"100%"==k)for(g=10,m=0;m<c;m++)d=this.graphs[m],d.newStack&&g--,d.depthCount=g,d.tcc=a}return a},parseData:function(){e.AmSerialChart.base.parseData.call(this);this.parseSerialData(this.dataProvider)},
getCategoryIndexByValue:function(a){var b=this.chartData,c;for(c=0;c<b.length;c++)if(b[c].category==a)return c},handleScrollbarZoom:function(a){this.zoomedByScrollbar=!0;this.zoom(a.start,a.end)},dispatchTimeZoomEvent:function(){if(this.drawGraphs&&(this.prevStartTime!=this.startTime||this.prevEndTime!=this.endTime)){var a={type:"zoomed"};a.startDate=new Date(this.startTime);a.endDate=new Date(this.endTime);a.startIndex=this.start;a.endIndex=this.end;this.startIndex=this.start;this.endIndex=this.end;
this.startDate=a.startDate;this.endDate=a.endDate;this.prevStartTime=this.startTime;this.prevEndTime=this.endTime;var b=this.categoryAxis,c=e.extractPeriod(b.minPeriod).period,b=b.dateFormatsObject[c];a.startValue=e.formatDate(a.startDate,b,this);a.endValue=e.formatDate(a.endDate,b,this);a.chart=this;a.target=this;this.fire(a)}},dispatchIndexZoomEvent:function(){if(this.drawGraphs&&(this.prevStartIndex!=this.start||this.prevEndIndex!=this.end)){this.startIndex=this.start;this.endIndex=this.end;var a=
this.chartData;if(e.ifArray(a)&&!isNaN(this.start)&&!isNaN(this.end)){var b={chart:this,target:this,type:"zoomed"};b.startIndex=this.start;b.endIndex=this.end;b.startValue=a[this.start].category;b.endValue=a[this.end].category;this.categoryAxis.parseDates&&(this.startTime=a[this.start].time,this.endTime=a[this.end].time,b.startDate=new Date(this.startTime),b.endDate=new Date(this.endTime));this.prevStartIndex=this.start;this.prevEndIndex=this.end;this.fire(b)}}},updateLegendValues:function(){this.legend&&
this.legend.updateValues()},getClosestIndex:function(a,b,c,d,g,e){0>g&&(g=0);e>a.length-1&&(e=a.length-1);var f=g+Math.round((e-g)/2),l=a[f][b];return c==l?f:1>=e-g?d?g:Math.abs(a[g][b]-c)<Math.abs(a[e][b]-c)?g:e:c==l?f:c<l?this.getClosestIndex(a,b,c,d,g,f):this.getClosestIndex(a,b,c,d,f,e)},zoomToIndexes:function(a,b){var c=this.chartData;if(c){var d=c.length;0<d&&(0>a&&(a=0),b>d-1&&(b=d-1),d=this.categoryAxis,d.parseDates&&!d.equalSpacing?this.zoom(c[a].time,this.getEndTime(c[b].time)):this.zoom(a,
b))}},zoomToDates:function(a,b){var c=this.chartData;if(c)if(this.categoryAxis.equalSpacing){var d=this.getClosestIndex(c,"time",a.getTime(),!0,0,c.length);b=e.resetDateToMin(b,this.categoryAxis.minPeriod,1);c=this.getClosestIndex(c,"time",b.getTime(),!1,0,c.length);this.zoom(d,c)}else this.zoom(a.getTime(),b.getTime())},zoomToCategoryValues:function(a,b){this.chartData&&this.zoom(this.getCategoryIndexByValue(a),this.getCategoryIndexByValue(b))},formatPeriodString:function(a,b){if(b){b.periodDataItem=
{};b.periodPercentDataItem={};var c=["value","open","low","high","close"],d="value open low high close average sum count".split(" "),g=b.valueAxis,h=this.chartData,f=b.numberFormatter;f||(f=this.nf);for(var l=0;l<c.length;l++){for(var k=c[l],m=0,p=0,n=0,u=0,v,x,E,t,r,B,q,w,y,C,F=this.start;F<=this.end;F++){var D=h[F];if(D){var A=D.axes[g.id].graphs[b.id];if(A){if(A.values){var z=A.values[k],D=D.x.categoryAxis;if(this.rotate){if(0>D||D>A.graph.height)z=NaN}else if(0>D||D>A.graph.width)z=NaN;if(!isNaN(z)){isNaN(v)&&
(v=z);x=z;if(isNaN(E)||E>z)E=z;if(isNaN(t)||t<z)t=z;r=e.getDecimals(m);D=e.getDecimals(z);m+=z;m=e.roundTo(m,Math.max(r,D));p++;r=m/p}}if(A.percents&&(A=A.percents[k],!isNaN(A))){isNaN(B)&&(B=A);q=A;if(isNaN(w)||w>A)w=A;if(isNaN(y)||y<A)y=A;C=e.getDecimals(n);z=e.getDecimals(A);n+=A;n=e.roundTo(n,Math.max(C,z));u++;C=n/u}}}}m={open:v,close:x,high:t,low:E,average:r,sum:m,count:p};n={open:B,close:q,high:y,low:w,average:C,sum:n,count:u};a=e.formatValue(a,m,d,f,k+"\\.",this.usePrefixes,this.prefixesOfSmallNumbers,
this.prefixesOfBigNumbers);a=e.formatValue(a,n,d,this.pf,"percents\\."+k+"\\.");b.periodDataItem[k]=m;b.periodPercentDataItem[k]=n}}return a=e.cleanFromEmpty(a)},formatString:function(a,b,c){if(b){var d=b.graph;if(void 0!==a){if(-1!=a.indexOf("[[category]]")){var g=b.serialDataItem.category;if(this.categoryAxis.parseDates){var h=this.balloonDateFormat,f=this.chartCursor;f&&f.categoryBalloonDateFormat&&(h=f.categoryBalloonDateFormat);h=e.formatDate(g,h,this);-1!=h.indexOf("fff")&&(h=e.formatMilliseconds(h,
g));g=h}a=a.replace(/\[\[category\]\]/g,String(g.replace("$","$$$")))}g=d.numberFormatter;g||(g=this.nf);h=b.graph.valueAxis;(f=h.duration)&&!isNaN(b.values.value)&&h.maxInterval&&(f=e.formatDuration(b.values.value,f,"",h.durationUnits,h.maxInterval,g),a=a.replace(RegExp("\\[\\[value\\]\\]","g"),f));"date"==h.type&&(h=e.formatDate(new Date(b.values.value),d.dateFormat,this),f=RegExp("\\[\\[value\\]\\]","g"),a=a.replace(f,h),h=e.formatDate(new Date(b.values.open),d.dateFormat,this),f=RegExp("\\[\\[open\\]\\]",
"g"),a=a.replace(f,h));d="value open low high close total".split(" ");h=this.pf;a=e.formatValue(a,b.percents,d,h,"percents\\.");a=e.formatValue(a,b.values,d,g,"",this.usePrefixes,this.prefixesOfSmallNumbers,this.prefixesOfBigNumbers);a=e.formatValue(a,b.values,["percents"],h);-1!=a.indexOf("[[")&&(a=e.formatDataContextValue(a,b.dataContext));-1!=a.indexOf("[[")&&b.graph.customData&&(a=e.formatDataContextValue(a,b.graph.customData));a=e.AmSerialChart.base.formatString.call(this,a,b,c)}return a}},updateChartCursor:function(){e.AmSerialChart.base.updateChartCursor.call(this);
var a=this.chartCursor,b=this.categoryAxis;if(a){var c=a.categoryBalloonAlpha,d=a.categoryBalloonColor,g=a.color;void 0===d&&(d=a.cursorColor);var h=a.valueZoomable,f=a.zoomable,l=a.valueLineEnabled;this.rotate?(a.vLineEnabled=l,a.hZoomEnabled=h,a.vZoomEnabled=f):(a.hLineEnabled=l,a.vZoomEnabled=h,a.hZoomEnabled=f);if(a.valueLineBalloonEnabled)for(l=0;l<this.valueAxes.length;l++)h=this.valueAxes[l],(f=h.balloon)||(f={}),f=e.extend(f,this.balloon,!0),f.fillColor=d,f.balloonColor=d,f.fillAlpha=c,f.borderColor=
d,f.color=g,h.balloon=f;else for(f=0;f<this.valueAxes.length;f++)h=this.valueAxes[f],h.balloon&&(h.balloon=null);b&&(b.balloonTextFunction=a.categoryBalloonFunction,a.categoryLineAxis=b,b.balloonText=a.categoryBalloonText,a.categoryBalloonEnabled&&((f=b.balloon)||(f={}),f=e.extend(f,this.balloon,!0),f.fillColor=d,f.balloonColor=d,f.fillAlpha=c,f.borderColor=d,f.color=g,b.balloon=f),b.balloon&&(b.balloon.enabled=a.categoryBalloonEnabled))}},addChartScrollbar:function(a){e.callMethod("destroy",[this.chartScrollbar]);
a&&(a.chart=this,this.listenTo(a,"zoomed",this.handleScrollbarZoom));this.rotate?void 0===a.width&&(a.width=a.scrollbarHeight):void 0===a.height&&(a.height=a.scrollbarHeight);a.gridAxis=this.categoryAxis;this.chartScrollbar=a},addValueScrollbar:function(a){e.callMethod("destroy",[this.valueScrollbar]);a&&(a.chart=this,this.listenTo(a,"zoomed",this.handleScrollbarValueZoom),this.listenTo(a,"zoomStarted",this.handleCursorZoomStarted));var b=a.scrollbarHeight;this.rotate?void 0===a.height&&(a.height=
b):void 0===a.width&&(a.width=b);a.gridAxis||(a.gridAxis=this.valueAxes[0]);a.valueAxes=this.valueAxes;this.valueScrollbar=a},removeChartScrollbar:function(){e.callMethod("destroy",[this.chartScrollbar]);this.chartScrollbar=null},removeValueScrollbar:function(){e.callMethod("destroy",[this.valueScrollbar]);this.valueScrollbar=null},handleReleaseOutside:function(a){e.AmSerialChart.base.handleReleaseOutside.call(this,a);e.callMethod("handleReleaseOutside",[this.chartScrollbar,this.valueScrollbar])},
update:function(){e.AmSerialChart.base.update.call(this);this.chartScrollbar&&this.chartScrollbar.update&&this.chartScrollbar.update();this.valueScrollbar&&this.valueScrollbar.update&&this.valueScrollbar.update()},processScrollbars:function(){e.AmSerialChart.base.processScrollbars.call(this);var a=this.valueScrollbar;a&&(a=e.processObject(a,e.ChartScrollbar,this.theme),a.id="valueScrollbar",this.addValueScrollbar(a))},handleValueAxisZoom:function(a){this.handleValueAxisZoomReal(a,this.valueAxes)},
zoomOut:function(){e.AmSerialChart.base.zoomOut.call(this);this.zoom();this.syncGrid()},getNextItem:function(a){var b=a.index,c=this.chartData,d=a.graph;if(b+1<c.length)for(b+=1;b<c.length;b++)if(a=c[b])if(a=a.axes[d.valueAxis.id].graphs[d.id],!isNaN(a.y))return a},handleCursorZoomReal:function(a,b,c,d,e){var h=e.target,f,l;this.rotate?(isNaN(a)||isNaN(b)||this.relativeZoomValueAxes(this.valueAxes,a,b)&&this.updateAfterValueZoom(),h.vZoomEnabled&&(f=e.start,l=e.end)):(isNaN(c)||isNaN(d)||this.relativeZoomValueAxes(this.valueAxes,
c,d)&&this.updateAfterValueZoom(),h.hZoomEnabled&&(f=e.start,l=e.end));isNaN(f)||isNaN(l)||(a=this.categoryAxis,a.parseDates&&!a.equalSpacing?this.zoomToDates(new Date(f),new Date(l)):this.zoomToIndexes(f,l))},handleCursorZoomStarted:function(){var a=this.valueAxes;if(a){var a=a[0],b=a.relativeStart,c=a.relativeEnd;a.reversed&&(b=1-a.relativeEnd,c=1-a.relativeStart);this.rotate?(this.startX0=b,this.endX0=c):(this.startY0=b,this.endY0=c)}this.categoryAxis&&(this.start0=this.start,this.end0=this.end,
this.startTime0=this.startTime,this.endTime0=this.endTime)},fixCursor:function(){this.chartCursor&&this.chartCursor.fixPosition();this.prevCursorItem=null},handleCursorMove:function(a){e.AmSerialChart.base.handleCursorMove.call(this,a);var b=a.target,c=this.categoryAxis;if(a.panning)this.handleCursorHide(a);else if(this.chartData&&!b.isHidden){var d=this.graphs;if(d){var g;g=c.xToIndex(this.rotate?a.y:a.x);if(g=this.chartData[g]){var h,f,l,k;if(b.oneBalloonOnly&&b.valueBalloonsEnabled){var m=Infinity;
for(h=d.length-1;0<=h;h--)if(f=d[h],f.balloon.enabled&&f.showBalloon&&!f.hidden){l=f.valueAxis.id;l=g.axes[l].graphs[f.id];if(b.showNextAvailable&&isNaN(l.y)&&(l=this.getNextItem(l),!l))continue;l=l.y;"top"==f.showBalloonAt&&(l=0);"bottom"==f.showBalloonAt&&(l=this.height);var p=b.mouseX,n=b.mouseY;l=this.rotate?Math.abs(p-l):Math.abs(n-l);l<m&&(m=l,k=f)}b.mostCloseGraph=k}if(this.prevCursorItem!=g||k!=this.prevMostCloseGraph){m=[];for(h=0;h<d.length;h++){f=d[h];l=f.valueAxis.id;l=g.axes[l].graphs[f.id];
if(b.showNextAvailable&&isNaN(l.y)&&(l=this.getNextItem(l),!l&&f.balloon)){f.balloon.hide();continue}k&&f!=k?(f.showGraphBalloon(l,b.pointer,!1,b.graphBulletSize,b.graphBulletAlpha),f.balloon.hide(0)):b.valueBalloonsEnabled?(f.balloon.showBullet=b.bulletsEnabled,f.balloon.bulletSize=b.bulletSize/2,a.hideBalloons||(f.showGraphBalloon(l,b.pointer,!1,b.graphBulletSize,b.graphBulletAlpha),f.balloon.set&&m.push({balloon:f.balloon,y:f.balloon.pointToY}))):(f.currentDataItem=l,f.resizeBullet(l,b.graphBulletSize,
b.graphBulletAlpha))}b.avoidBalloonOverlapping&&this.arrangeBalloons(m);this.prevCursorItem=g}this.prevMostCloseGraph=k}}d=e.fitToBounds(a.x,0,b.width);k=e.fitToBounds(a.y,0,b.height);c.showBalloon(d,k,b.categoryBalloonDateFormat,a.skip);this.updateLegendValues()}},handleCursorHide:function(a){e.AmSerialChart.base.handleCursorHide.call(this,a);a=this.categoryAxis;this.prevCursorItem=null;this.updateLegendValues();a&&a.hideBalloon();a=this.graphs;var b;for(b=0;b<a.length;b++)a[b].currentDataItem=null},
handleCursorPanning:function(a){var b=a.target,c,d=a.deltaX,g=a.deltaY,h=a.delta2X,f=a.delta2Y;a=!1;if(this.rotate){isNaN(h)&&(h=d,a=!0);var l=this.endX0;c=this.startX0;var k=l-c,l=l-k*h,m=k;a||(m=0);a=e.fitToBounds(c-k*d,0,1-m)}else isNaN(f)&&(f=g,a=!0),l=this.endY0,c=this.startY0,k=l-c,l+=k*g,m=k,a||(m=0),a=e.fitToBounds(c+k*f,0,1-m);c=e.fitToBounds(l,m,1);var p;b.valueZoomable&&(p=this.relativeZoomValueAxes(this.valueAxes,a,c));var n;c=this.categoryAxis;this.rotate&&(d=g,h=f);a=!1;isNaN(h)&&(h=
d,a=!0);if(b.zoomable&&(0<Math.abs(d)||0<Math.abs(h)))if(c.parseDates&&!c.equalSpacing){if(f=this.startTime0,g=this.endTime0,c=g-f,h*=c,k=this.firstTime,l=this.lastTime,m=c,a||(m=0),a=Math.round(e.fitToBounds(f-c*d,k,l-m)),h=Math.round(e.fitToBounds(g-h,k+m,l)),this.startTime!=a||this.endTime!=h)n={chart:this,target:b,type:"zoomed",start:a,end:h},this.skipZoomed=!0,b.fire(n),this.zoom(a,h),n=!0}else if(f=this.start0,g=this.end0,c=g-f,d=Math.round(c*d),h=Math.round(c*h),k=this.chartData.length-1,a||
(c=0),a=e.fitToBounds(f-d,0,k-c),c=e.fitToBounds(g-h,c,k),this.start!=a||this.end!=c)this.skipZoomed=!0,b.fire({chart:this,target:b,type:"zoomed",start:a,end:c}),this.zoom(a,c),n=!0;!n&&p&&this.updateAfterValueZoom()},arrangeBalloons:function(a){var b=this.plotAreaHeight;a.sort(this.compareY);var c,d,e,h=this.plotAreaWidth,f=a.length;for(c=0;c<f;c++)d=a[c].balloon,d.setBounds(0,0,h,b),d.restorePrevious(),d.draw(),b=d.yPos-3;a.reverse();for(c=0;c<f;c++){d=a[c].balloon;var b=d.bottom,l=d.bottom-d.yPos;
0<c&&b-l<e+3&&d.setBounds&&(d.setBounds(0,e+3,h,e+l+3),d.restorePrevious(),d.draw());d.set&&d.set.show();e=d.bottom}},compareY:function(a,b){return a.y<b.y?1:-1}})})();(function(){var e=window.AmCharts;e.Cuboid=e.Class({construct:function(a,b,c,d,e,h,f,l,k,m,p,n,u,v,x,E,t){this.set=a.set();this.container=a;this.h=Math.round(c);this.w=Math.round(b);this.dx=d;this.dy=e;this.colors=h;this.alpha=f;this.bwidth=l;this.bcolor=k;this.balpha=m;this.dashLength=v;this.topRadius=E;this.pattern=x;this.rotate=u;this.bcn=t;u?0>b&&0===p&&(p=180):0>c&&270==p&&(p=90);this.gradientRotation=p;0===d&&0===e&&(this.cornerRadius=n);this.draw()},draw:function(){var a=this.set;a.clear();
var b=this.container,c=b.chart,d=this.w,g=this.h,h=this.dx,f=this.dy,l=this.colors,k=this.alpha,m=this.bwidth,p=this.bcolor,n=this.balpha,u=this.gradientRotation,v=this.cornerRadius,x=this.dashLength,E=this.pattern,t=this.topRadius,r=this.bcn,B=l,q=l;"object"==typeof l&&(B=l[0],q=l[l.length-1]);var w,y,C,F,D,A,z,L,M,Q=k;E&&(k=0);var G,H,I,J,K=this.rotate;if(0<Math.abs(h)||0<Math.abs(f))if(isNaN(t))z=q,q=e.adjustLuminosity(B,-.2),q=e.adjustLuminosity(B,-.2),w=e.polygon(b,[0,h,d+h,d,0],[0,f,f,0,0],
q,k,1,p,0,u),0<n&&(M=e.line(b,[0,h,d+h],[0,f,f],p,n,m,x)),y=e.polygon(b,[0,0,d,d,0],[0,g,g,0,0],q,k,1,p,0,u),y.translate(h,f),0<n&&(C=e.line(b,[h,h],[f,f+g],p,n,m,x)),F=e.polygon(b,[0,0,h,h,0],[0,g,g+f,f,0],q,k,1,p,0,u),D=e.polygon(b,[d,d,d+h,d+h,d],[0,g,g+f,f,0],q,k,1,p,0,u),0<n&&(A=e.line(b,[d,d+h,d+h,d],[0,f,g+f,g],p,n,m,x)),q=e.adjustLuminosity(z,.2),z=e.polygon(b,[0,h,d+h,d,0],[g,g+f,g+f,g,g],q,k,1,p,0,u),0<n&&(L=e.line(b,[0,h,d+h],[g,g+f,g+f],p,n,m,x));else{var N,O,P;K?(N=g/2,q=h/2,P=g/2,O=
d+h/2,H=Math.abs(g/2),G=Math.abs(h/2)):(q=d/2,N=f/2,O=d/2,P=g+f/2+1,G=Math.abs(d/2),H=Math.abs(f/2));I=G*t;J=H*t;.1<G&&.1<G&&(w=e.circle(b,G,B,k,m,p,n,!1,H),w.translate(q,N));.1<I&&.1<I&&(z=e.circle(b,I,e.adjustLuminosity(B,.5),k,m,p,n,!1,J),z.translate(O,P))}k=Q;1>Math.abs(g)&&(g=0);1>Math.abs(d)&&(d=0);!isNaN(t)&&(0<Math.abs(h)||0<Math.abs(f))?(l=[B],l={fill:l,stroke:p,"stroke-width":m,"stroke-opacity":n,"fill-opacity":k},K?(k="M0,0 L"+d+","+(g/2-g/2*t),m=" B",0<d&&(m=" A"),e.VML?(k+=m+Math.round(d-
I)+","+Math.round(g/2-J)+","+Math.round(d+I)+","+Math.round(g/2+J)+","+d+",0,"+d+","+g,k=k+(" L0,"+g)+(m+Math.round(-G)+","+Math.round(g/2-H)+","+Math.round(G)+","+Math.round(g/2+H)+",0,"+g+",0,0")):(k+="A"+I+","+J+",0,0,0,"+d+","+(g-g/2*(1-t))+"L0,"+g,k+="A"+G+","+H+",0,0,1,0,0"),G=90):(m=d/2-d/2*t,k="M0,0 L"+m+","+g,e.VML?(k="M0,0 L"+m+","+g,m=" B",0>g&&(m=" A"),k+=m+Math.round(d/2-I)+","+Math.round(g-J)+","+Math.round(d/2+I)+","+Math.round(g+J)+",0,"+g+","+d+","+g,k+=" L"+d+",0",k+=m+Math.round(d/
2+G)+","+Math.round(H)+","+Math.round(d/2-G)+","+Math.round(-H)+","+d+",0,0,0"):(k+="A"+I+","+J+",0,0,0,"+(d-d/2*(1-t))+","+g+"L"+d+",0",k+="A"+G+","+H+",0,0,1,0,0"),G=180),b=b.path(k).attr(l),b.gradient("linearGradient",[B,e.adjustLuminosity(B,-.3),e.adjustLuminosity(B,-.3),B],G),K?b.translate(h/2,0):b.translate(0,f/2)):b=0===g?e.line(b,[0,d],[0,0],p,n,m,x):0===d?e.line(b,[0,0],[0,g],p,n,m,x):0<v?e.rect(b,d,g,l,k,m,p,n,v,u,x):e.polygon(b,[0,0,d,d,0],[0,g,g,0,0],l,k,m,p,n,u,!1,x);d=isNaN(t)?0>g?[w,
M,y,C,F,D,A,z,L,b]:[z,L,y,C,F,D,w,M,A,b]:K?0<d?[w,b,z]:[z,b,w]:0>g?[w,b,z]:[z,b,w];e.setCN(c,b,r+"front");e.setCN(c,y,r+"back");e.setCN(c,z,r+"top");e.setCN(c,w,r+"bottom");e.setCN(c,F,r+"left");e.setCN(c,D,r+"right");for(w=0;w<d.length;w++)if(y=d[w])a.push(y),e.setCN(c,y,r+"element");E&&b.pattern(E,NaN,c.path)},width:function(a){isNaN(a)&&(a=0);this.w=Math.round(a);this.draw()},height:function(a){isNaN(a)&&(a=0);this.h=Math.round(a);this.draw()},animateHeight:function(a,b){var c=this;c.animationFinished=
!1;c.easing=b;c.totalFrames=a*e.updateRate;c.rh=c.h;c.frame=0;c.height(1);setTimeout(function(){c.updateHeight.call(c)},1E3/e.updateRate)},updateHeight:function(){var a=this;a.frame++;var b=a.totalFrames;a.frame<=b?(b=a.easing(0,a.frame,1,a.rh-1,b),a.height(b),window.requestAnimationFrame?window.requestAnimationFrame(function(){a.updateHeight.call(a)}):setTimeout(function(){a.updateHeight.call(a)},1E3/e.updateRate)):(a.height(a.rh),a.animationFinished=!0)},animateWidth:function(a,b){var c=this;c.animationFinished=
!1;c.easing=b;c.totalFrames=a*e.updateRate;c.rw=c.w;c.frame=0;c.width(1);setTimeout(function(){c.updateWidth.call(c)},1E3/e.updateRate)},updateWidth:function(){var a=this;a.frame++;var b=a.totalFrames;a.frame<=b?(b=a.easing(0,a.frame,1,a.rw-1,b),a.width(b),window.requestAnimationFrame?window.requestAnimationFrame(function(){a.updateWidth.call(a)}):setTimeout(function(){a.updateWidth.call(a)},1E3/e.updateRate)):(a.width(a.rw),a.animationFinished=!0)}})})();(function(){var e=window.AmCharts;e.CategoryAxis=e.Class({inherits:e.AxisBase,construct:function(a){this.cname="CategoryAxis";e.CategoryAxis.base.construct.call(this,a);this.minPeriod="DD";this.equalSpacing=this.parseDates=!1;this.position="bottom";this.startOnAxis=!1;this.gridPosition="middle";this.safeDistance=30;this.stickBalloonToCategory=!1;e.applyTheme(this,a,this.cname)},draw:function(){e.CategoryAxis.base.draw.call(this);this.generateDFObject();var a=this.chart.chartData;this.data=a;this.labelRotationR=
this.labelRotation;this.type=null;if(e.ifArray(a)){var b,c=this.chart;"scrollbar"!=this.id?(e.setCN(c,this.set,"category-axis"),e.setCN(c,this.labelsSet,"category-axis"),e.setCN(c,this.axisLine.axisSet,"category-axis")):this.bcn=this.id+"-";var d=this.start,g=this.labelFrequency,h=0,f=this.end-d+1,l=this.gridCountR,k=this.showFirstLabel,m=this.showLastLabel,p,n="",n=e.extractPeriod(this.minPeriod),u=e.getPeriodDuration(n.period,n.count),v,x,E,t,r,B=this.rotate,q=this.firstDayOfWeek,w=this.boldPeriodBeginning;
b=e.resetDateToMin(new Date(a[a.length-1].time+1.05*u),this.minPeriod,1,q).getTime();this.firstTime=c.firstTime;this.endTime>b&&(this.endTime=b);r=this.minorGridEnabled;x=this.gridAlpha;var y=0,C=0;if(this.widthField)for(b=this.start;b<=this.end;b++)if(t=this.data[b]){var F=Number(this.data[b].dataContext[this.widthField]);isNaN(F)||(y+=F,t.widthValue=F)}if(this.parseDates&&!this.equalSpacing)this.lastTime=a[a.length-1].time,this.maxTime=e.resetDateToMin(new Date(this.lastTime+1.05*u),this.minPeriod,
1,q).getTime(),this.timeDifference=this.endTime-this.startTime,this.parseDatesDraw();else if(!this.parseDates){if(this.cellWidth=this.getStepWidth(f),f<l&&(l=f),h+=this.start,this.stepWidth=this.getStepWidth(f),0<l)for(q=Math.floor(f/l),t=this.chooseMinorFrequency(q),f=h,f/2==Math.round(f/2)&&f--,0>f&&(f=0),w=0,this.widthField&&(f=this.start,q=1),this.end-f+1>=this.autoRotateCount&&(this.labelRotationR=this.autoRotateAngle),b=f;b<=this.end+2;b++){l=!1;0<=b&&b<this.data.length?(v=this.data[b],n=v.category,
l=v.forceShow):n="";if(r&&!isNaN(t))if(b/t==Math.round(b/t)||l)b/q==Math.round(b/q)||l||(this.gridAlpha=this.minorGridAlpha,n=void 0);else continue;else if(b/q!=Math.round(b/q)&&!l)continue;f=this.getCoordinate(b-h);l=0;"start"==this.gridPosition&&(f-=this.cellWidth/2,l=this.cellWidth/2);p=!0;E=l;"start"==this.tickPosition&&(E=0,p=!1,l=0);if(b==d&&!k||b==this.end&&!m)n=void 0;Math.round(w/g)!=w/g&&(n=void 0);w++;a=this.cellWidth;B&&(a=NaN,this.ignoreAxisWidth||!c.autoMargins)&&(a="right"==this.position?
c.marginRight-this.titleWidth:c.marginLeft-this.titleWidth,a-=this.tickLength+10);this.labelFunction&&v&&(n=this.labelFunction(n,v,this));n=e.fixBrakes(n);u=!1;this.boldLabels&&(u=!0);b>this.end&&"start"==this.tickPosition&&(n=" ");this.rotate&&this.inside&&(l-=2);isNaN(v.widthValue)||(v.percentWidthValue=v.widthValue/y*100,a=this.rotate?this.height*v.widthValue/y:this.width*v.widthValue/y,f=C,C+=a,E=l=a/2);p=new this.axisItemRenderer(this,f,n,p,a,l,void 0,u,E,!1,v.labelColor,v.className);p.serialDataItem=
v;this.pushAxisItem(p);this.gridAlpha=x}}else if(this.parseDates&&this.equalSpacing){h=this.start;this.startTime=this.data[this.start].time;this.endTime=this.data[this.end].time;this.timeDifference=this.endTime-this.startTime;b=this.choosePeriod(0);g=b.period;v=b.count;b=e.getPeriodDuration(g,v);b<u&&(g=n.period,v=n.count,b=u);x=g;"WW"==x&&(x="DD");this.currentDateFormat=this.dateFormatsObject[x];this.stepWidth=this.getStepWidth(f);l=Math.ceil(this.timeDifference/b)+1;n=e.resetDateToMin(new Date(this.startTime-
b),g,v,q).getTime();this.cellWidth=this.getStepWidth(f);f=Math.round(n/b);d=-1;f/2==Math.round(f/2)&&(d=-2,n-=b);f=this.start;f/2==Math.round(f/2)&&f--;0>f&&(f=0);C=this.end+2;C>=this.data.length&&(C=this.data.length);a=!1;a=!k;this.previousPos=-1E3;20<this.labelRotationR&&(this.safeDistance=5);F=f;if(this.data[f].time!=e.resetDateToMin(new Date(this.data[f].time),g,v,q).getTime()){var u=0,D=n;for(b=f;b<C;b++)t=this.data[b].time,this.checkPeriodChange(g,v,t,D)&&(u++,2<=u&&(F=b,b=C),D=t)}r&&1<v&&(t=
this.chooseMinorFrequency(v),e.getPeriodDuration(g,t));if(0<this.gridCountR)for(b=f;b<C;b++)if(t=this.data[b].time,this.checkPeriodChange(g,v,t,n)&&b>=F){f=this.getCoordinate(b-this.start);r=!1;this.nextPeriod[x]&&(r=this.checkPeriodChange(this.nextPeriod[x],1,t,n,x))&&e.resetDateToMin(new Date(t),this.nextPeriod[x],1,q).getTime()!=t&&(r=!1);u=!1;r&&this.markPeriodChange?(r=this.dateFormatsObject[this.nextPeriod[x]],u=!0):r=this.dateFormatsObject[x];n=e.formatDate(new Date(t),r,c);if(b==d&&!k||b==
l&&!m)n=" ";a?a=!1:(w||(u=!1),f-this.previousPos>this.safeDistance*Math.cos(this.labelRotationR*Math.PI/180)&&(this.labelFunction&&(n=this.labelFunction(n,new Date(t),this,g,v,E)),this.boldLabels&&(u=!0),p=new this.axisItemRenderer(this,f,n,void 0,void 0,void 0,void 0,u),r=p.graphics(),this.pushAxisItem(p),r=r.getBBox().width,e.isModern||(r-=f),this.previousPos=f+r));E=n=t}}for(b=k=0;b<this.data.length;b++)if(t=this.data[b])this.parseDates&&!this.equalSpacing?(m=t.time,d=this.cellWidth,"MM"==this.minPeriod&&
(d=864E5*e.daysInMonth(new Date(m))*this.stepWidth,t.cellWidth=d),m=Math.round((m-this.startTime)*this.stepWidth+d/2)):m=this.getCoordinate(b-h),t.x[this.id]=m;if(this.widthField)for(b=this.start;b<=this.end;b++)t=this.data[b],d=t.widthValue,t.percentWidthValue=d/y*100,this.rotate?(m=this.height*d/y/2+k,k=this.height*d/y+k):(m=this.width*d/y/2+k,k=this.width*d/y+k),t.x[this.id]=m;y=this.guides.length;for(b=0;b<y;b++)if(k=this.guides[b],q=q=q=r=d=NaN,m=k.above,k.toCategory&&(q=c.getCategoryIndexByValue(k.toCategory),
isNaN(q)||(d=this.getCoordinate(q-h),k.expand&&(d+=this.cellWidth/2),p=new this.axisItemRenderer(this,d,"",!0,NaN,NaN,k),this.pushAxisItem(p,m))),k.category&&(q=c.getCategoryIndexByValue(k.category),isNaN(q)||(r=this.getCoordinate(q-h),k.expand&&(r-=this.cellWidth/2),q=(d-r)/2,p=new this.axisItemRenderer(this,r,k.label,!0,NaN,q,k),this.pushAxisItem(p,m))),w=c.dataDateFormat,k.toDate&&(!w||k.toDate instanceof Date||(k.toDate=k.toDate.toString()+" |"),k.toDate=e.getDate(k.toDate,w),this.equalSpacing?
(q=c.getClosestIndex(this.data,"time",k.toDate.getTime(),!1,0,this.data.length-1),isNaN(q)||(d=this.getCoordinate(q-h))):d=(k.toDate.getTime()-this.startTime)*this.stepWidth,p=new this.axisItemRenderer(this,d,"",!0,NaN,NaN,k),this.pushAxisItem(p,m)),k.date&&(!w||k.date instanceof Date||(k.date=k.date.toString()+" |"),k.date=e.getDate(k.date,w),this.equalSpacing?(q=c.getClosestIndex(this.data,"time",k.date.getTime(),!1,0,this.data.length-1),isNaN(q)||(r=this.getCoordinate(q-h))):r=(k.date.getTime()-
this.startTime)*this.stepWidth,q=(d-r)/2,p=!0,k.toDate&&(p=!1),p="H"==this.orientation?new this.axisItemRenderer(this,r,k.label,p,2*q,NaN,k):new this.axisItemRenderer(this,r,k.label,!1,NaN,q,k),this.pushAxisItem(p,m)),p&&(q=p.label)&&this.addEventListeners(q,k),0<d||0<r){q=!1;if(this.rotate){if(d<this.height||r<this.height)q=!0}else if(d<this.width||r<this.width)q=!0;q&&(d=new this.guideFillRenderer(this,r,d,k),r=d.graphics(),this.pushAxisItem(d,m),k.graphics=r,r.index=b,this.addEventListeners(r,
k))}if(c=c.chartCursor)B?c.fixHeight(this.cellWidth):(c.fixWidth(this.cellWidth),c.fullWidth&&this.balloon&&(this.balloon.minWidth=this.cellWidth));this.previousHeight=A}this.axisCreated=!0;this.set.translate(this.x,this.y);this.labelsSet.translate(this.x,this.y);this.labelsSet.show();this.positionTitle();(B=this.axisLine.set)&&B.toFront();var A=this.getBBox().height;2<A-this.previousHeight&&this.autoWrap&&!this.parseDates&&(this.axisCreated=this.chart.marginsUpdated=!1)},xToIndex:function(a){var b=
this.data,c=this.chart,d=c.rotate,g=this.stepWidth,h;if(this.parseDates&&!this.equalSpacing)a=this.startTime+Math.round(a/g)-this.minDuration()/2,h=c.getClosestIndex(b,"time",a,!1,this.start,this.end+1);else if(this.widthField)for(c=Infinity,g=this.start;g<=this.end;g++){var f=this.data[g];f&&(f=Math.abs(f.x[this.id]-a),f<c&&(c=f,h=g))}else this.startOnAxis||(a-=g/2),h=this.start+Math.round(a/g);h=e.fitToBounds(h,0,b.length-1);var l;b[h]&&(l=b[h].x[this.id]);d?l>this.height+1&&h--:l>this.width+1&&
h--;0>l&&h++;return h=e.fitToBounds(h,0,b.length-1)},dateToCoordinate:function(a){return this.parseDates&&!this.equalSpacing?(a.getTime()-this.startTime)*this.stepWidth:this.parseDates&&this.equalSpacing?(a=this.chart.getClosestIndex(this.data,"time",a.getTime(),!1,0,this.data.length-1),this.getCoordinate(a-this.start)):NaN},categoryToCoordinate:function(a){if(this.chart){if(this.parseDates)return this.dateToCoordinate(new Date(a));a=this.chart.getCategoryIndexByValue(a);if(!isNaN(a))return this.getCoordinate(a-
this.start)}else return NaN},coordinateToDate:function(a){return this.equalSpacing?(a=this.xToIndex(a),new Date(this.data[a].time)):new Date(this.startTime+a/this.stepWidth)},coordinateToValue:function(a){a=this.xToIndex(a);if(a=this.data[a])return this.parseDates?a.time:a.category},getCoordinate:function(a){a*=this.stepWidth;this.startOnAxis||(a+=this.stepWidth/2);return Math.round(a)},formatValue:function(a,b){b||(b=this.currentDateFormat);this.parseDates&&(a=e.formatDate(new Date(a),b,this.chart));
return a},showBalloonAt:function(a,b){void 0===b&&(b=this.parseDates?this.dateToCoordinate(new Date(a)):this.categoryToCoordinate(a));return this.adjustBalloonCoordinate(b)},formatBalloonText:function(a,b,c){var d="",g="",h=this.chart,f=this.data[b];if(f)if(this.parseDates)d=e.formatDate(f.category,c,h),b=e.changeDate(new Date(f.category),this.minPeriod,1),g=e.formatDate(b,c,h),-1!=d.indexOf("fff")&&(d=e.formatMilliseconds(d,f.category),g=e.formatMilliseconds(g,b));else{var l;this.data[b+1]&&(l=this.data[b+
1]);d=e.fixNewLines(f.category);l&&(g=e.fixNewLines(l.category))}a=a.replace(/\[\[category\]\]/g,String(d));return a=a.replace(/\[\[toCategory\]\]/g,String(g))},adjustBalloonCoordinate:function(a,b){var c=this.xToIndex(a),d=this.chart.chartCursor;if(this.stickBalloonToCategory){var e=this.data[c];e&&(a=e.x[this.id]);this.stickBalloonToStart&&(a-=this.cellWidth/2);var h=0;if(d){var f=d.limitToGraph;if(f){var l=f.valueAxis.id;f.hidden||(h=e.axes[l].graphs[f.id].y)}this.rotate?("left"==this.position?
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
!1,d.dx=.5,d.dy=.5;document.attachEvent&&(d.isNN=!1,d.isIE=!0,d.isModern||(d.dx=0,d.dy=0));window.chrome&&(d.chrome=!0);d.handleMouseUp=function(a){for(var b=d.charts,c=0;c<b.length;c++){var e=b[c];e&&e.handleReleaseOutside&&e.handleReleaseOutside(a)}};d.handleMouseMove=function(a){for(var b=d.charts,c=0;c<b.length;c++){var e=b[c];e&&e.handleMouseMove&&e.handleMouseMove(a)}};d.handleKeyUp=function(a){for(var b=d.charts,c=0;c<b.length;c++){var e=b[c];e&&e.handleKeyUp&&e.handleKeyUp(a)}};d.handleWheel=
function(a){for(var b=d.charts,c=0;c<b.length;c++){var e=b[c];if(e&&e.mouseIsOver){(e.mouseWheelScrollEnabled||e.mouseWheelZoomEnabled)&&e.handleWheel&&(e.handleMouseMove(a),e.handleWheel(a));break}}};d.resetMouseOver=function(){for(var a=d.charts,b=0;b<a.length;b++){var c=a[b];c&&(c.mouseIsOver=!1)}};d.ready=function(a){d.onReadyArray.push(a)};d.handleLoad=function(){d.isReady=!0;for(var a=d.onReadyArray,b=0;b<a.length;b++){var c=a[b];isNaN(d.processDelay)?c():setTimeout(c,d.processDelay*b)}d.onReadyArray=
[]};d.addInitHandler=function(a,b){d.initHandlers.push({method:a,types:b})};d.callInitHandler=function(a){var b=d.initHandlers;if(d.initHandlers)for(var c=0;c<b.length;c++){var e=b[c];e.types?d.isInArray(e.types,a.type)&&e.method(a):e.method(a)}};d.getUniqueId=function(){d.uid++;return"AmChartsEl-"+d.uid};d.addGlobalListeners=function(){d.globalListenersAdded||(d.globalListenersAdded=!0,d.isNN&&(document.addEventListener("mousemove",d.handleMouseMove),document.addEventListener("keyup",d.handleKeyUp),
document.addEventListener("mouseup",d.handleMouseUp,!0),window.addEventListener("load",d.handleLoad,!0)),d.isIE&&(document.attachEvent("onmousemove",d.handleMouseMove),document.attachEvent("onmouseup",d.handleMouseUp),window.attachEvent("onload",d.handleLoad)))};d.addGlobalListeners();d.addWheelListeners=function(){d.wheelIsListened||(d.isNN&&(window.addEventListener("DOMMouseScroll",d.handleWheel,{passive:!1,useCapture:!0}),document.addEventListener("mousewheel",d.handleWheel,{passive:!1,useCapture:!0})),
d.isIE&&document.attachEvent("onmousewheel",d.handleWheel));d.wheelIsListened=!0};d.clear=function(){var a=d.charts;if(a)for(var b=a.length-1;0<=b;b--)a[b].clear();d.updateInt&&clearInterval(d.updateInt);d.requestAnimation&&window.cancelAnimationFrame(d.requestAnimation);d.charts=[];d.isNN&&(document.removeEventListener("mousemove",d.handleMouseMove,!0),document.removeEventListener("keyup",d.handleKeyUp,!0),document.removeEventListener("mouseup",d.handleMouseUp,!0),window.removeEventListener("load",
d.handleLoad,!0),window.removeEventListener("DOMMouseScroll",d.handleWheel,!0),document.removeEventListener("mousewheel",d.handleWheel,!0));d.isIE&&(document.detachEvent("onmousemove",d.handleMouseMove),document.detachEvent("onmouseup",d.handleMouseUp),window.detachEvent("onload",d.handleLoad));d.globalListenersAdded=!1;d.wheelIsListened=!1};d.makeChart=function(a,b,c){var e=b.type,g=b.theme;d.addGlobalListeners();d.isString(g)&&(g=d.themes[g],b.theme=g);var f;switch(e){case "serial":f=new d.AmSerialChart(g);
break;case "xy":f=new d.AmXYChart(g);break;case "pie":f=new d.AmPieChart(g);break;case "radar":f=new d.AmRadarChart(g);break;case "gauge":f=new d.AmAngularGauge(g);break;case "funnel":f=new d.AmFunnelChart(g);break;case "map":f=new d.AmMap(g);break;case "stock":f=new d.AmStockChart(g);break;case "gantt":f=new d.AmGanttChart(g)}d.extend(f,b);d.isReady?isNaN(c)?f.write(a):setTimeout(function(){d.realWrite(f,a)},c):d.ready(function(){isNaN(c)?f.write(a):setTimeout(function(){d.realWrite(f,a)},c)});return f};
d.realWrite=function(a,b){a.write(b)};d.updateCount=0;d.validateAt=Math.round(d.updateRate/10);d.update=function(){var a=d.charts;d.updateCount++;var b=!1;d.updateCount==d.validateAt&&(b=!0,d.updateCount=0);if(a)for(var c=a.length-1;0<=c;c--)a[c].update&&a[c].update(),b&&(a[c].autoResize?a[c].validateSize&&a[c].validateSize():a[c].premeasure&&a[c].premeasure());window.requestAnimationFrame&&(d.requestAnimation=window.requestAnimationFrame(d.update))};"complete"==document.readyState&&d.handleLoad()})();(function(){var d=window.AmCharts;d.toBoolean=function(a,b){if(void 0===a)return b;switch(String(a).toLowerCase()){case "true":case "yes":case "1":return!0;case "false":case "no":case "0":case null:return!1;default:return!!a}};d.removeFromArray=function(a,b){var c;if(void 0!==b&&void 0!==a)for(c=a.length-1;0<=c;c--)a[c]==b&&a.splice(c,1)};d.getPath=function(){var a=document.getElementsByTagName("script");if(a)for(var b=0;b<a.length;b++){var c=a[b].src;if(-1!==c.search(/\/(amcharts|ammap)\.js/))return c.replace(/\/(amcharts|ammap)\.js.*/,
"/")}};d.normalizeUrl=function(a){return""!==a&&-1===a.search(/\/$/)?a+"/":a};d.isAbsolute=function(a){return 0===a.search(/^http[s]?:|^\//)};d.isInArray=function(a,b){for(var c=0;c<a.length;c++)if(a[c]==b)return!0;return!1};d.getDecimals=function(a){var b=0;isNaN(a)||(a=String(a),-1!=a.indexOf("e-")?b=Number(a.split("-")[1]):-1!=a.indexOf(".")&&(b=a.split(".")[1].length));return b};d.wordwrap=function(a,b,c,e){var g,f,k,h;a+="";if(1>b)return a;g=-1;for(a=(h=a.split(/\r\n|\n|\r/)).length;++g<a;h[g]+=
k){k=h[g];for(h[g]="";k.length>b;h[g]+=d.trim(k.slice(0,f))+((k=k.slice(f)).length?c:""))f=2==e||(f=k.slice(0,b+1).match(/\S*(\s)?$/))[1]?b:f.input.length-f[0].length||1==e&&b||f.input.length+(f=k.slice(b).match(/^\S*/))[0].length;k=d.trim(k)}return h.join(c)};d.trim=function(a){return a.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")};d.wrappedText=function(a,b,c,e,g,f,k,h){var l=d.text(a,b,c,e,g,f,k);if(l){var m=l.getBBox();if(m.width>h){var n="\n";d.isModern||(n="<br>");h=Math.floor(h/(m.width/
b.length));2<h&&(h-=2);b=d.wordwrap(b,h,n,!0);l.remove();l=d.text(a,b,c,e,g,f,k)}}return l};d.getStyle=function(a,b){var c="";if(document.defaultView&&document.defaultView.getComputedStyle)try{c=document.defaultView.getComputedStyle(a,"").getPropertyValue(b)}catch(e){}else a.currentStyle&&(b=b.replace(/\-(\w)/g,function(a,b){return b.toUpperCase()}),c=a.currentStyle[b]);return c};d.removePx=function(a){if(void 0!==a)return Number(a.substring(0,a.length-2))};d.getURL=function(a,b){if(a)if("_self"!=
b&&b)if("_top"==b&&window.top)window.top.location.href=a;else if("_parent"==b&&window.parent)window.parent.location.href=a;else if("_blank"==b)window.open(a);else{var c=document.getElementsByName(b)[0];c?c.src=a:(c=d.windows[b])?c.opener&&!c.opener.closed?c.location.href=a:d.windows[b]=window.open(a):d.windows[b]=window.open(a)}else window.location.href=a};d.ifArray=function(a){return a&&"object"==typeof a&&0<a.length?!0:!1};d.callMethod=function(a,b){var c;for(c=0;c<b.length;c++){var e=b[c];if(e){if(e[a])e[a]();
var d=e.length;if(0<d){var f;for(f=0;f<d;f++){var k=e[f];if(k&&k[a])k[a]()}}}}};d.toNumber=function(a){return"number"==typeof a?a:Number(String(a).replace(/[^0-9\-.]+/g,""))};d.toColor=function(a){if(""!==a&&void 0!==a)if(-1!=a.indexOf(",")){a=a.split(",");var b;for(b=0;b<a.length;b++){var c=a[b].substring(a[b].length-6,a[b].length);a[b]="#"+c}}else a=a.substring(a.length-6,a.length),a="#"+a;return a};d.toCoordinate=function(a,b,c){var e;void 0!==a&&(a=String(a),c&&c<b&&(b=c),e=Number(a),-1!=a.indexOf("!")&&
(e=b-Number(a.substr(1))),-1!=a.indexOf("%")&&(e=b*Number(a.substr(0,a.length-1))/100));return e};d.fitToBounds=function(a,b,c){a<b&&(a=b);a>c&&(a=c);return a};d.isDefined=function(a){return void 0===a?!1:!0};d.stripNumbers=function(a){return a.replace(/[0-9]+/g,"")};d.roundTo=function(a,b){if(0>b)return a;var c=Math.pow(10,b);return Math.round(a*c)/c};d.toFixed=function(a,b){var c=!1;0>a&&(c=!0,a=Math.abs(a));var e=String(Math.round(a*Math.pow(10,b)));if(0<b){var d=e.length;if(d<b){var f;for(f=0;f<
b-d;f++)e="0"+e}d=e.substring(0,e.length-b);""===d&&(d=0);e=d+"."+e.substring(e.length-b,e.length);return c?"-"+e:e}return String(e)};d.formatDuration=function(a,b,c,e,g,f){var k=d.intervals,h=f.decimalSeparator;if(a>=k[b].contains){var l=a-Math.floor(a/k[b].contains)*k[b].contains;"ss"==b?(l=d.formatNumber(l,f),1==l.split(h)[0].length&&(l="0"+l)):l=d.roundTo(l,f.precision);("mm"==b||"hh"==b)&&10>l&&(l="0"+l);c=l+""+e[b]+""+c;a=Math.floor(a/k[b].contains);b=k[b].nextInterval;return d.formatDuration(a,
b,c,e,g,f)}"ss"==b&&(a=d.formatNumber(a,f),1==a.split(h)[0].length&&(a="0"+a));"mm"==b&&(a=d.roundTo(a,f.precision));("mm"==b||"hh"==b)&&10>a&&(a="0"+a);c=a+""+e[b]+""+c;if(k[g].count>k[b].count)for(a=k[b].count;a<k[g].count;a++)b=k[b].nextInterval,"ss"==b||"mm"==b||"hh"==b?c="00"+e[b]+""+c:"DD"==b&&(c="0"+e[b]+""+c);":"==c.charAt(c.length-1)&&(c=c.substring(0,c.length-1));return c};d.formatNumber=function(a,b,c,e,g){a=d.roundTo(a,b.precision);isNaN(c)&&(c=b.precision);var f=b.decimalSeparator;b=
b.thousandsSeparator;void 0==f&&(f=",");void 0==b&&(b=" ");var k;k=0>a?"-":"";a=Math.abs(a);var h=String(a),l=!1;-1!=h.indexOf("e")&&(l=!0);0<=c&&!l&&(h=d.toFixed(a,c));var m="";if(l)m=h;else{var h=h.split("."),l=String(h[0]),n;for(n=l.length;0<=n;n-=3)m=n!=l.length?0!==n?l.substring(n-3,n)+b+m:l.substring(n-3,n)+m:l.substring(n-3,n);void 0!==h[1]&&(m=m+f+h[1]);void 0!==c&&0<c&&"0"!=m&&(m=d.addZeroes(m,f,c))}m=k+m;""===k&&!0===e&&0!==a&&(m="+"+m);!0===g&&(m+="%");return m};d.addZeroes=function(a,
b,c){a=a.split(b);void 0===a[1]&&0<c&&(a[1]="0");return a[1].length<c?(a[1]+="0",d.addZeroes(a[0]+b+a[1],b,c)):void 0!==a[1]?a[0]+b+a[1]:a[0]};d.scientificToNormal=function(a){var b;a=String(a).split("e");var c;if("-"==a[1].substr(0,1)){b="0.";for(c=0;c<Math.abs(Number(a[1]))-1;c++)b+="0";b+=a[0].split(".").join("")}else{var e=0;b=a[0].split(".");b[1]&&(e=b[1].length);b=a[0].split(".").join("");for(c=0;c<Math.abs(Number(a[1]))-e;c++)b+="0"}return b};d.toScientific=function(a,b){if(0===a)return"0";
var c=Math.floor(Math.log(Math.abs(a))*Math.LOG10E),e=String(e).split(".").join(b);return String(e)+"e"+c};d.randomColor=function(){return"#"+("00000"+(16777216*Math.random()<<0).toString(16)).substr(-6)};d.hitTest=function(a,b,c){var e=!1,g=a.x,f=a.x+a.width,k=a.y,h=a.y+a.height,l=d.isInRectangle;e||(e=l(g,k,b));e||(e=l(g,h,b));e||(e=l(f,k,b));e||(e=l(f,h,b));e||!0===c||(e=d.hitTest(b,a,!0));return e};d.isInRectangle=function(a,b,c){return a>=c.x-5&&a<=c.x+c.width+5&&b>=c.y-5&&b<=c.y+c.height+5?
!0:!1};d.isPercents=function(a){if(-1!=String(a).indexOf("%"))return!0};d.formatValue=function(a,b,c,e,g,f,k,h){if(b){void 0===g&&(g="");var l;for(l=0;l<c.length;l++){var m=c[l],n=b[m];void 0!==n&&(n=f?d.addPrefix(n,h,k,e):d.formatNumber(n,e),a=a.replace(new RegExp("\\[\\["+g+""+m+"\\]\\]","g"),n))}}return a};d.formatDataContextValue=function(a,b){if(a){var c=a.match(/\[\[.*?\]\]/g),e;for(e=0;e<c.length;e++){var d=c[e],d=d.substr(2,d.length-4);void 0!==b[d]&&(a=a.replace(new RegExp("\\[\\["+d+"\\]\\]",
"g"),b[d]))}}return a};d.massReplace=function(a,b){for(var c in b)if(b.hasOwnProperty(c)){var e=b[c];void 0===e&&(e="");a=a.replace(c,e)}return a};d.cleanFromEmpty=function(a){return a.replace(/\[\[[^\]]*\]\]/g,"")};d.addPrefix=function(a,b,c,e,g){var f=d.formatNumber(a,e),k="",h,l,m;if(0===a)return"0";0>a&&(k="-");a=Math.abs(a);if(1<a)for(h=b.length-1;-1<h;h--){if(a>=b[h].number&&(l=a/b[h].number,m=Number(e.precision),1>m&&(m=1),c=d.roundTo(l,m),m=d.formatNumber(c,{precision:-1,decimalSeparator:e.decimalSeparator,
thousandsSeparator:e.thousandsSeparator}),!g||l==c)){f=k+""+m+""+b[h].prefix;break}}else for(h=0;h<c.length;h++)if(a<=c[h].number){l=a/c[h].number;m=Math.abs(Math.floor(Math.log(l)*Math.LOG10E));l=d.roundTo(l,m);f=k+""+l+""+c[h].prefix;break}return f};d.remove=function(a){a&&a.remove()};d.getEffect=function(a){">"==a&&(a="easeOutSine");"<"==a&&(a="easeInSine");"elastic"==a&&(a="easeOutElastic");return a};d.getObjById=function(a,b){var c,e;for(e=0;e<a.length;e++){var d=a[e];if(d.id==b){c=d;break}}return c};
d.applyTheme=function(a,b,c){b||(b=d.theme);try{b=JSON.parse(JSON.stringify(b))}catch(e){}b&&b[c]&&d.extend(a,b[c])};d.isString=function(a){return"string"==typeof a?!0:!1};d.extend=function(a,b,c){var e;a||(a={});for(e in b)c?a.hasOwnProperty(e)||(a[e]=b[e]):a[e]=b[e];return a};d.copyProperties=function(a,b){for(var c in a)a.hasOwnProperty(c)&&"events"!=c&&void 0!==a[c]&&"function"!=typeof a[c]&&"cname"!=c&&(b[c]=a[c])};d.processObject=function(a,b,c,e){if(!1===a instanceof b&&(a=e?d.extend(new b(c),
a):d.extend(a,new b(c),!0),a.listeners))for(var g in a.listeners)b=a.listeners[g],a.addListener(b.event,b.method);return a};d.fixNewLines=function(a){var b=RegExp("\\n","g");a&&(a=a.replace(b,"<br />"));return a};d.fixBrakes=function(a){if(d.isModern){var b=RegExp("<br>","g");a&&(a=a.replace(b,"\n"))}else a=d.fixNewLines(a);return a};d.deleteObject=function(a,b){if(a){if(void 0===b||null===b)b=20;if(0!==b)if("[object Array]"===Object.prototype.toString.call(a))for(var c=0;c<a.length;c++)d.deleteObject(a[c],
b-1),a[c]=null;else if(a&&!a.tagName)try{for(c in a.theme=null,a)a[c]&&("object"==typeof a[c]&&d.deleteObject(a[c],b-1),"function"!=typeof a[c]&&(a[c]=null))}catch(e){}}};d.bounce=function(a,b,c,e,d){return(b/=d)<1/2.75?7.5625*e*b*b+c:b<2/2.75?e*(7.5625*(b-=1.5/2.75)*b+.75)+c:b<2.5/2.75?e*(7.5625*(b-=2.25/2.75)*b+.9375)+c:e*(7.5625*(b-=2.625/2.75)*b+.984375)+c};d.easeInOutQuad=function(a,b,c,e,d){b/=d/2;if(1>b)return e/2*b*b+c;b--;return-e/2*(b*(b-2)-1)+c};d.easeInSine=function(a,b,c,e,d){return-e*
Math.cos(b/d*(Math.PI/2))+e+c};d.easeOutSine=function(a,b,c,e,d){return e*Math.sin(b/d*(Math.PI/2))+c};d.easeOutElastic=function(a,b,c,e,d){a=1.70158;var f=0,k=e;if(0===b)return c;if(1==(b/=d))return c+e;f||(f=.3*d);k<Math.abs(e)?(k=e,a=f/4):a=f/(2*Math.PI)*Math.asin(e/k);return k*Math.pow(2,-10*b)*Math.sin(2*(b*d-a)*Math.PI/f)+e+c};d.fixStepE=function(a){a=a.toExponential(0).split("e");var b=Number(a[1]);9==Number(a[0])&&b++;return d.generateNumber(1,b)};d.generateNumber=function(a,b){var c="",e;
e=0>b?Math.abs(b)-1:Math.abs(b);var d;for(d=0;d<e;d++)c+="0";return 0>b?Number("0."+c+String(a)):Number(String(a)+c)};d.setCN=function(a,b,c,e){if(a.addClassNames&&b&&(b=b.node)&&c){var d=b.getAttribute("class");a=a.classNamePrefix+"-";e&&(a="");d?b.setAttribute("class",d+" "+a+c):b.setAttribute("class",a+c)}};d.removeCN=function(a,b,c){b&&(b=b.node)&&c&&(b=b.classList)&&b.remove(a.classNamePrefix+"-"+c)};d.parseDefs=function(a,b){for(var c in a){var e=typeof a[c];if(0<a[c].length&&"object"==e)for(var g=
0;g<a[c].length;g++)e=document.createElementNS(d.SVG_NS,c),b.appendChild(e),d.parseDefs(a[c][g],e);else"object"==e?(e=document.createElementNS(d.SVG_NS,c),b.appendChild(e),d.parseDefs(a[c],e)):b.setAttribute(c,a[c])}}})();(function(){var d=window.AmCharts;d.AmDraw=d.Class({construct:function(a,b,c,e){d.SVG_NS="http://www.w3.org/2000/svg";d.SVG_XLINK="http://www.w3.org/1999/xlink";d.hasSVG=!!document.createElementNS&&!!document.createElementNS(d.SVG_NS,"svg").createSVGRect;1>b&&(b=10);1>c&&(c=10);this.div=a;this.width=b;this.height=c;this.rBin=document.createElement("div");d.hasSVG?(d.SVG=!0,b=this.createSvgElement("svg"),a.appendChild(b),this.container=b,this.addDefs(e),this.R=new d.SVGRenderer(this)):d.isIE&&d.VMLRenderer&&
(d.VML=!0,d.vmlStyleSheet||(document.namespaces.add("amvml","urn:schemas-microsoft-com:vml"),31>document.styleSheets.length?(b=document.createStyleSheet(),b.addRule(".amvml","behavior:url(#default#VML); display:inline-block; antialias:true"),d.vmlStyleSheet=b):document.styleSheets[0].addRule(".amvml","behavior:url(#default#VML); display:inline-block; antialias:true")),this.container=a,this.R=new d.VMLRenderer(this,e),this.R.disableSelection(a))},createSvgElement:function(a){return document.createElementNS(d.SVG_NS,
a)},circle:function(a,b,c,e){var g=new d.AmDObject("circle",this);g.attr({r:c,cx:a,cy:b});this.addToContainer(g.node,e);return g},ellipse:function(a,b,c,e,g){var f=new d.AmDObject("ellipse",this);f.attr({rx:c,ry:e,cx:a,cy:b});this.addToContainer(f.node,g);return f},setSize:function(a,b){0<a&&0<b&&(this.container.style.width=a+"px",this.container.style.height=b+"px")},rect:function(a,b,c,e,g,f,k){var h=new d.AmDObject("rect",this);d.VML&&(g=Math.round(100*g/Math.min(c,e)),c+=2*f,e+=2*f,h.bw=f,h.node.style.marginLeft=
-f,h.node.style.marginTop=-f);1>c&&(c=1);1>e&&(e=1);h.attr({x:a,y:b,width:c,height:e,rx:g,ry:g,"stroke-width":f});this.addToContainer(h.node,k);return h},image:function(a,b,c,e,g,f){var k=new d.AmDObject("image",this);k.attr({x:b,y:c,width:e,height:g});this.R.path(k,a);this.addToContainer(k.node,f);return k},addToContainer:function(a,b){b||(b=this.container);b.appendChild(a)},text:function(a,b,c){return this.R.text(a,b,c)},path:function(a,b,c,e){var g=new d.AmDObject("path",this);e||(e="100,100");
g.attr({cs:e});c?g.attr({dd:a}):g.attr({d:a});this.addToContainer(g.node,b);return g},set:function(a){return this.R.set(a)},remove:function(a){if(a){var b=this.rBin;b.appendChild(a);b.innerHTML=""}},renderFix:function(){var a=this.container,b=a.style;b.top="0px";b.left="0px";try{var c=a.getBoundingClientRect(),e=c.left-Math.round(c.left),d=c.top-Math.round(c.top);e&&(b.left=e+"px");d&&(b.top=d+"px")}catch(f){}},update:function(){this.R.update()},addDefs:function(a){if(d.hasSVG){var b=this.createSvgElement("desc"),
c=this.container;c.setAttribute("version","1.1");c.style.position="absolute";this.setSize(this.width,this.height);if(a.accessibleTitle){var e=this.createSvgElement("text");c.appendChild(e);e.innerHTML=a.accessibleTitle;e.style.opacity=0}d.rtl&&(c.setAttribute("direction","rtl"),c.style.left="auto",c.style.right="0px");a&&(a.addCodeCredits&&b.appendChild(document.createTextNode("JavaScript chart by amCharts "+a.version)),a.accessibleDescription&&(b.innerHTML="",b.appendChild(document.createTextNode(a.accessibleDescription))),
c.appendChild(b),a.defs&&(b=this.createSvgElement("defs"),c.appendChild(b),d.parseDefs(a.defs,b),this.defs=b))}}})})();(function(){var d=window.AmCharts;d.AmDObject=d.Class({construct:function(a,b){this.D=b;this.R=b.R;this.node=this.R.create(this,a);this.y=this.x=0;this.scale=1},attr:function(a){this.R.attr(this,a);return this},getAttr:function(a){return this.node.getAttribute(a)},setAttr:function(a,b){this.R.setAttr(this,a,b);return this},clipRect:function(a,b,c,e){this.R.clipRect(this,a,b,c,e)},translate:function(a,b,c,e){e||(a=Math.round(a),b=Math.round(b));this.R.move(this,a,b,c);this.x=a;this.y=b;this.scale=
c;this.angle&&this.rotate(this.angle)},rotate:function(a,b){this.R.rotate(this,a,b);this.angle=a},animate:function(a,b,c){for(var e in a)if(a.hasOwnProperty(e)){var g=e,f=a[e];c=d.getEffect(c);this.R.animate(this,g,f,b,c)}},push:function(a){if(a){var b=this.node;b.appendChild(a.node);var c=a.clipPath;c&&b.appendChild(c);(a=a.grad)&&b.appendChild(a)}},text:function(a){this.R.setText(this,a)},remove:function(){this.stop();this.R.remove(this)},clear:function(){var a=this.node;if(a.hasChildNodes())for(;1<=
a.childNodes.length;)a.removeChild(a.firstChild)},hide:function(){this.setAttr("visibility","hidden")},show:function(){this.setAttr("visibility","visible")},getBBox:function(){return this.R.getBBox(this)},toFront:function(){var a=this.node;if(a){this.prevNextNode=a.nextSibling;var b=a.parentNode;b&&b.appendChild(a)}},toPrevious:function(){var a=this.node;a&&this.prevNextNode&&(a=a.parentNode)&&a.insertBefore(this.prevNextNode,null)},toBack:function(){var a=this.node;if(a){this.prevNextNode=a.nextSibling;
var b=a.parentNode;if(b){var c=b.firstChild;c&&b.insertBefore(a,c)}}},mouseover:function(a){this.R.addListener(this,"mouseover",a);return this},mouseout:function(a){this.R.addListener(this,"mouseout",a);return this},click:function(a){this.R.addListener(this,"click",a);return this},dblclick:function(a){this.R.addListener(this,"dblclick",a);return this},mousedown:function(a){this.R.addListener(this,"mousedown",a);return this},mouseup:function(a){this.R.addListener(this,"mouseup",a);return this},touchmove:function(a){this.R.addListener(this,
"touchmove",a);return this},touchstart:function(a){this.R.addListener(this,"touchstart",a);return this},touchend:function(a){this.R.addListener(this,"touchend",a);return this},keyup:function(a){this.R.addListener(this,"keyup",a);return this},focus:function(a){this.R.addListener(this,"focus",a);return this},blur:function(a){this.R.addListener(this,"blur",a);return this},contextmenu:function(a){this.node.addEventListener?this.node.addEventListener("contextmenu",a,!0):this.R.addListener(this,"contextmenu",
a);return this},stop:function(){d.removeFromArray(this.R.animations,this.an_translate);d.removeFromArray(this.R.animations,this.an_y);d.removeFromArray(this.R.animations,this.an_x)},length:function(){return this.node.childNodes.length},gradient:function(a,b,c){this.R.gradient(this,a,b,c)},pattern:function(a,b,c){a&&this.R.pattern(this,a,b,c)}})})();(function(){var d=window.AmCharts;d.SVGRenderer=d.Class({construct:function(a){this.D=a;this.animations=[]},create:function(a,b){return document.createElementNS(d.SVG_NS,b)},attr:function(a,b){for(var c in b)b.hasOwnProperty(c)&&this.setAttr(a,c,b[c])},setAttr:function(a,b,c){void 0!==c&&a.node.setAttribute(b,c)},animate:function(a,b,c,e,g){a.animationFinished=!1;var f=a.node;a["an_"+b]&&d.removeFromArray(this.animations,a["an_"+b]);"translate"==b?(f=(f=f.getAttribute("transform"))?String(f).substring(10,
f.length-1):"0,0",f=f.split(", ").join(" "),f=f.split(" ").join(","),0===f&&(f="0,0")):f=Number(f.getAttribute(b));c={obj:a,frame:0,attribute:b,from:f,to:c,time:e,effect:g};this.animations.push(c);a["an_"+b]=c},update:function(){var a,b=this.animations;for(a=b.length-1;0<=a;a--){var c=b[a],e=c.time*d.updateRate,g=c.frame+1,f=c.obj,k=c.attribute,h,l,m;if(g<=e){c.frame++;if("translate"==k){h=c.from.split(",");k=Number(h[0]);h=Number(h[1]);isNaN(h)&&(h=0);l=c.to.split(",");m=Number(l[0]);l=Number(l[1]);
m=0===m-k?m:Math.round(d[c.effect](0,g,k,m-k,e));c=0===l-h?l:Math.round(d[c.effect](0,g,h,l-h,e));k="transform";if(isNaN(m)||isNaN(c))continue;c="translate("+m+","+c+")"}else l=Number(c.from),h=Number(c.to),m=h-l,c=d[c.effect](0,g,l,m,e),isNaN(c)&&(c=h),0===m&&this.animations.splice(a,1);this.setAttr(f,k,c)}else"translate"==k?(l=c.to.split(","),m=Number(l[0]),l=Number(l[1]),f.translate(m,l)):(h=Number(c.to),this.setAttr(f,k,h)),f.animationFinished=!0,this.animations.splice(a,1)}},getBBox:function(a){if(a=
a.node)try{return a.getBBox()}catch(b){}return{width:0,height:0,x:0,y:0}},path:function(a,b){a.node.setAttributeNS(d.SVG_XLINK,"xlink:href",b)},clipRect:function(a,b,c,e,g){var f=a.node,k=a.clipPath;k&&this.D.remove(k);var h=f.parentNode;h&&(f=document.createElementNS(d.SVG_NS,"clipPath"),k=d.getUniqueId(),f.setAttribute("id",k),this.D.rect(b,c,e,g,0,0,f),h.appendChild(f),b="#",d.baseHref&&!d.isIE&&(b=this.removeTarget(window.location.href)+b),this.setAttr(a,"clip-path","url("+b+k+")"),this.clipPathC++,
a.clipPath=f)},text:function(a,b,c){var e=new d.AmDObject("text",this.D);a=String(a).split("\n");var g=d.removePx(b["font-size"]),f;for(f=0;f<a.length;f++){var k=this.create(null,"tspan");k.appendChild(document.createTextNode(a[f]));k.setAttribute("y",(g+2)*f+Math.round(g/2));k.setAttribute("x",0);e.node.appendChild(k)}e.node.setAttribute("y",Math.round(g/2));this.attr(e,b);this.D.addToContainer(e.node,c);return e},setText:function(a,b){var c=a.node;c&&(c.removeChild(c.firstChild),c.appendChild(document.createTextNode(b)))},
move:function(a,b,c,e){isNaN(b)&&(b=0);isNaN(c)&&(c=0);b="translate("+b+","+c+")";e&&(b=b+" scale("+e+")");this.setAttr(a,"transform",b)},rotate:function(a,b){var c=a.node.getAttribute("transform"),e="rotate("+b+")";c&&(e=c+" "+e);this.setAttr(a,"transform",e)},set:function(a){var b=new d.AmDObject("g",this.D);this.D.container.appendChild(b.node);if(a){var c;for(c=0;c<a.length;c++)b.push(a[c])}return b},addListener:function(a,b,c){a.node["on"+b]=c},gradient:function(a,b,c,e){var g=a.node,f=a.grad;
f&&this.D.remove(f);b=document.createElementNS(d.SVG_NS,b);f=d.getUniqueId();b.setAttribute("id",f);if(!isNaN(e)){var k=0,h=0,l=0,m=0;90==e?l=100:270==e?m=100:180==e?k=100:0===e&&(h=100);b.setAttribute("x1",k+"%");b.setAttribute("x2",h+"%");b.setAttribute("y1",l+"%");b.setAttribute("y2",m+"%")}for(e=0;e<c.length;e++)k=document.createElementNS(d.SVG_NS,"stop"),h=100*e/(c.length-1),0===e&&(h=0),k.setAttribute("offset",h+"%"),k.setAttribute("stop-color",c[e]),b.appendChild(k);g.parentNode.appendChild(b);
c="#";d.baseHref&&!d.isIE&&(c=this.removeTarget(window.location.href)+c);g.setAttribute("fill","url("+c+f+")");a.grad=b},removeTarget:function(a){return a.split("#")[0]},pattern:function(a,b,c,e){var g=a.node;isNaN(c)&&(c=1);var f=a.patternNode;f&&this.D.remove(f);var f=document.createElementNS(d.SVG_NS,"pattern"),k=d.getUniqueId(),h=b;b.url&&(h=b.url);d.isAbsolute(h)||-1!=h.indexOf("data:image")||(h=e+h);e=Number(b.width);isNaN(e)&&(e=4);var l=Number(b.height);isNaN(l)&&(l=4);e/=c;l/=c;c=b.x;isNaN(c)&&
(c=0);var m=-Math.random()*Number(b.randomX);isNaN(m)||(c=m);m=b.y;isNaN(m)&&(m=0);var n=-Math.random()*Number(b.randomY);isNaN(n)||(m=n);f.setAttribute("id",k);f.setAttribute("width",e);f.setAttribute("height",l);f.setAttribute("patternUnits","userSpaceOnUse");f.setAttribute("xlink:href",h);b.color&&(n=document.createElementNS(d.SVG_NS,"rect"),n.setAttributeNS(null,"height",e),n.setAttributeNS(null,"width",l),n.setAttributeNS(null,"fill",b.color),f.appendChild(n));this.D.image(h,0,0,e,l,f).translate(c,
m);h="#";d.baseHref&&!d.isIE&&(h=this.removeTarget(window.location.href)+h);g.setAttribute("fill","url("+h+k+")");a.patternNode=f;g.parentNode.appendChild(f)},remove:function(a){a.clipPath&&this.D.remove(a.clipPath);a.grad&&this.D.remove(a.grad);a.patternNode&&this.D.remove(a.patternNode);this.D.remove(a.node)}})})();(function(){var d=window.AmCharts;d.AmChart=d.Class({construct:function(a){this.svgIcons=this.tapToActivate=!0;this.theme=a;this.classNamePrefix="amcharts";this.addClassNames=!1;this.version="3.21.15";d.addChart(this);this.createEvents("buildStarted","dataUpdated","init","rendered","drawn","failed","resized","animationFinished");this.height=this.width="100%";this.dataChanged=!0;this.chartCreated=!1;this.previousWidth=this.previousHeight=0;this.backgroundColor="#FFFFFF";this.borderAlpha=this.backgroundAlpha=
0;this.color=this.borderColor="#000000";this.fontFamily="Verdana";this.fontSize=11;this.usePrefixes=!1;this.autoResize=!0;this.autoDisplay=!1;this.addCodeCredits=this.accessible=!0;this.touchStartTime=this.touchClickDuration=0;this.precision=-1;this.percentPrecision=2;this.decimalSeparator=".";this.thousandsSeparator=",";this.labels=[];this.allLabels=[];this.titles=[];this.marginRight=this.marginLeft=this.autoMarginOffset=0;this.timeOuts=[];this.creditsPosition="top-left";var b=document.createElement("div"),
c=b.style;c.overflow="hidden";c.position="relative";c.textAlign="left";this.chartDiv=b;b=document.createElement("div");c=b.style;c.overflow="hidden";c.position="relative";c.textAlign="left";this.legendDiv=b;this.titleHeight=0;this.hideBalloonTime=150;this.handDrawScatter=2;this.cssScale=this.handDrawThickness=1;this.cssAngle=0;this.prefixesOfBigNumbers=[{number:1E3,prefix:"k"},{number:1E6,prefix:"M"},{number:1E9,prefix:"G"},{number:1E12,prefix:"T"},{number:1E15,prefix:"P"},{number:1E18,prefix:"E"},
{number:1E21,prefix:"Z"},{number:1E24,prefix:"Y"}];this.prefixesOfSmallNumbers=[{number:1E-24,prefix:"y"},{number:1E-21,prefix:"z"},{number:1E-18,prefix:"a"},{number:1E-15,prefix:"f"},{number:1E-12,prefix:"p"},{number:1E-9,prefix:"n"},{number:1E-6,prefix:"\u03bc"},{number:.001,prefix:"m"}];this.panEventsEnabled=!0;this.product="amcharts";this.animations=[];this.balloon=new d.AmBalloon(this.theme);this.balloon.chart=this;this.processTimeout=0;this.processCount=1E3;this.animatable=[];this.langObj={};
d.applyTheme(this,a,"AmChart")},drawChart:function(){0<this.realWidth&&0<this.realHeight&&(this.drawBackground(),this.redrawLabels(),this.drawTitles(),this.brr(),this.renderFix(),this.chartDiv&&(this.boundingRect=this.chartDiv.getBoundingClientRect()))},makeAccessible:function(a,b,c){this.accessible&&a&&(c&&a.setAttr("role",c),a.setAttr("aria-label",b))},drawBackground:function(){d.remove(this.background);var a=this.container,b=this.backgroundColor,c=this.backgroundAlpha,e=this.set;d.isModern||0!==
c||(c=.001);var g=this.updateWidth();this.realWidth=g;var f=this.updateHeight();this.realHeight=f;b=d.polygon(a,[0,g-1,g-1,0],[0,0,f-1,f-1],b,c,1,this.borderColor,this.borderAlpha);d.setCN(this,b,"bg");this.background=b;e.push(b);if(b=this.backgroundImage)a=a.image(b,0,0,g,f),d.setCN(this,b,"bg-image"),this.bgImg=a,e.push(a)},drawTitles:function(a){var b=this.titles;this.titleHeight=0;if(d.ifArray(b)){var c=20,e;for(e=0;e<b.length;e++){var g=b[e],g=d.processObject(g,d.Title,this.theme);if(!1!==g.enabled){var f=
g.color;void 0===f&&(f=this.color);var k=g.size;isNaN(k)&&(k=this.fontSize+2);isNaN(g.alpha);var h=this.marginLeft,l=!0;void 0!==g.bold&&(l=g.bold);f=d.wrappedText(this.container,g.text,f,this.fontFamily,k,"middle",l,this.realWidth-35-this.marginRight-h);f.translate(h+(this.realWidth-this.marginRight-h)/2,c);f.node.style.pointerEvents="none";g.sprite=f;void 0!==g.tabIndex&&f.setAttr("tabindex",g.tabIndex);d.setCN(this,f,"title");g.id&&d.setCN(this,f,"title-"+g.id);f.attr({opacity:g.alpha});c+=f.getBBox().height+
5;a?f.remove():this.freeLabelsSet.push(f)}}this.titleHeight=c-10}},write:function(a){var b=this;if(b.listeners)for(var c=0;c<b.listeners.length;c++){var e=b.listeners[c];b.addListener(e.event,e.method)}b.fire({type:"buildStarted",chart:b});b.afterWriteTO&&clearTimeout(b.afterWriteTO);0<b.processTimeout?b.afterWriteTO=setTimeout(function(){b.afterWrite.call(b,a)},b.processTimeout):b.afterWrite(a)},afterWrite:function(a){var b;if(b="object"!=typeof a?document.getElementById(a):a){for(;b.firstChild;)b.removeChild(b.firstChild);
this.div=b;b.style.overflow="hidden";b.style.textAlign="left";a=this.chartDiv;var c=this.legendDiv,e=this.legend,g=c.style,f=a.style;this.measure();this.previousHeight=this.divRealHeight;this.previousWidth=this.divRealWidth;var k,h=document.createElement("div");k=h.style;k.position="relative";this.containerDiv=h;h.className=this.classNamePrefix+"-main-div";a.className=this.classNamePrefix+"-chart-div";b.appendChild(h);(b=this.exportConfig)&&d.AmExport&&!this.AmExport&&(this.AmExport=new d.AmExport(this,
b));this.amExport&&d.AmExport&&(this.AmExport=d.extend(this.amExport,new d.AmExport(this),!0));this.AmExport&&this.AmExport.init&&this.AmExport.init();if(e){e=this.addLegend(e,e.divId);if(e.enabled)switch(g.left=null,g.top=null,g.right=null,f.left=null,f.right=null,f.top=null,g.position="relative",f.position="relative",k.width="100%",k.height="100%",e.position){case "bottom":h.appendChild(a);h.appendChild(c);break;case "top":h.appendChild(c);h.appendChild(a);break;case "absolute":g.position="absolute";
f.position="absolute";void 0!==e.left&&(g.left=e.left+"px");void 0!==e.right&&(g.right=e.right+"px");void 0!==e.top&&(g.top=e.top+"px");void 0!==e.bottom&&(g.bottom=e.bottom+"px");e.marginLeft=0;e.marginRight=0;h.appendChild(a);h.appendChild(c);break;case "right":g.position="relative";f.position="absolute";h.appendChild(a);h.appendChild(c);break;case "left":g.position="absolute";f.position="relative";h.appendChild(a);h.appendChild(c);break;case "outside":h.appendChild(a)}else h.appendChild(a);this.prevLegendPosition=
e.position}else h.appendChild(a);this.listenersAdded||(this.addListeners(),this.listenersAdded=!0);(this.mouseWheelScrollEnabled||this.mouseWheelZoomEnabled)&&d.addWheelListeners();this.initChart()}},createLabelsSet:function(){d.remove(this.labelsSet);this.labelsSet=this.container.set();this.freeLabelsSet.push(this.labelsSet)},initChart:function(){this.balloon=d.processObject(this.balloon,d.AmBalloon,this.theme);window.AmCharts_path&&(this.path=window.AmCharts_path);void 0===this.path&&(this.path=
d.getPath());void 0===this.path&&(this.path="amcharts/");this.path=d.normalizeUrl(this.path);void 0===this.pathToImages&&(this.pathToImages=this.path+"images/");this.initHC||(d.callInitHandler(this),this.initHC=!0);d.applyLang(this.language,this);var a=this.numberFormatter;a&&(isNaN(a.precision)||(this.precision=a.precision),void 0!==a.thousandsSeparator&&(this.thousandsSeparator=a.thousandsSeparator),void 0!==a.decimalSeparator&&(this.decimalSeparator=a.decimalSeparator));(a=this.percentFormatter)&&
!isNaN(a.precision)&&(this.percentPrecision=a.precision);this.nf={precision:this.precision,thousandsSeparator:this.thousandsSeparator,decimalSeparator:this.decimalSeparator};this.pf={precision:this.percentPrecision,thousandsSeparator:this.thousandsSeparator,decimalSeparator:this.decimalSeparator};this.destroy();(a=this.container)?(a.container.innerHTML="",a.width=this.realWidth,a.height=this.realHeight,a.addDefs(this),this.chartDiv.appendChild(a.container)):a=new d.AmDraw(this.chartDiv,this.realWidth,
this.realHeight,this);this.container=a;this.extension=".png";this.svgIcons&&d.SVG&&(this.extension=".svg");this.checkDisplay();this.checkTransform(this.div);a.chart=this;d.VML||d.SVG?(a.handDrawn=this.handDrawn,a.handDrawScatter=this.handDrawScatter,a.handDrawThickness=this.handDrawThickness,d.remove(this.set),this.set=a.set(),d.remove(this.gridSet),this.gridSet=a.set(),d.remove(this.cursorLineSet),this.cursorLineSet=a.set(),d.remove(this.graphsBehindSet),this.graphsBehindSet=a.set(),d.remove(this.bulletBehindSet),
this.bulletBehindSet=a.set(),d.remove(this.columnSet),this.columnSet=a.set(),d.remove(this.graphsSet),this.graphsSet=a.set(),d.remove(this.trendLinesSet),this.trendLinesSet=a.set(),d.remove(this.axesSet),this.axesSet=a.set(),d.remove(this.cursorSet),this.cursorSet=a.set(),d.remove(this.scrollbarsSet),this.scrollbarsSet=a.set(),d.remove(this.bulletSet),this.bulletSet=a.set(),d.remove(this.freeLabelsSet),this.freeLabelsSet=a.set(),d.remove(this.axesLabelsSet),this.axesLabelsSet=a.set(),d.remove(this.balloonsSet),
this.balloonsSet=a.set(),d.remove(this.plotBalloonsSet),this.plotBalloonsSet=a.set(),d.remove(this.zoomButtonSet),this.zoomButtonSet=a.set(),d.remove(this.zbSet),this.zbSet=null,d.remove(this.linkSet),this.linkSet=a.set()):this.fire({type:"failed",chart:this})},premeasure:function(){var a=this.div;if(a){try{this.boundingRect=this.chartDiv.getBoundingClientRect()}catch(e){}var b=a.offsetWidth,c=a.offsetHeight;a.clientHeight&&(b=a.clientWidth,c=a.clientHeight);if(b!=this.mw||c!=this.mh)this.mw=b,this.mh=
c,this.measure()}},measure:function(){var a=this.div;if(a){var b=this.chartDiv,c=a.offsetWidth,e=a.offsetHeight,g=this.container;a.clientHeight&&(c=a.clientWidth,e=a.clientHeight);var e=Math.round(e),c=Math.round(c),a=Math.round(d.toCoordinate(this.width,c)),f=Math.round(d.toCoordinate(this.height,e));(c!=this.previousWidth||e!=this.previousHeight)&&0<a&&0<f&&(b.style.width=a+"px",b.style.height=f+"px",b.style.padding=0,g&&g.setSize(a,f),this.balloon=d.processObject(this.balloon,d.AmBalloon,this.theme));
this.balloon&&this.balloon.setBounds&&this.balloon.setBounds(2,2,a-2,f);this.updateWidth();this.balloon.chart=this;this.realWidth=a;this.realHeight=f;this.divRealWidth=c;this.divRealHeight=e}},checkDisplay:function(){if(this.autoDisplay&&this.container){var a=d.rect(this.container,10,10),b=a.getBBox();0===b.width&&0===b.height&&(this.divRealHeight=this.divRealWidth=this.realHeight=this.realWidth=0,this.previousWidth=this.previousHeight=NaN);a.remove()}},checkTransform:function(a){if(this.autoTransform&&
window.getComputedStyle&&a){if(a.style){var b=window.getComputedStyle(a,null);if(b&&(b=b.getPropertyValue("-webkit-transform")||b.getPropertyValue("-moz-transform")||b.getPropertyValue("-ms-transform")||b.getPropertyValue("-o-transform")||b.getPropertyValue("transform"))&&"none"!==b){var c=b.split("(")[1].split(")")[0].split(","),b=c[0],c=c[1],b=Math.sqrt(b*b+c*c);isNaN(b)||(this.cssScale*=b)}}a.parentNode&&this.checkTransform(a.parentNode)}},destroy:function(){this.chartDiv.innerHTML="";this.clearTimeOuts();
this.legend&&this.legend.destroy&&this.legend.destroy()},clearTimeOuts:function(){var a=this.timeOuts;if(a){var b;for(b=0;b<a.length;b++)clearTimeout(a[b])}this.timeOuts=[]},clear:function(a){try{document.removeEventListener("touchstart",this.docfn1,!0),document.removeEventListener("touchend",this.docfn2,!0)}catch(b){}d.callMethod("clear",[this.chartScrollbar,this.scrollbarV,this.scrollbarH,this.chartCursor]);this.chartCursor=this.scrollbarH=this.scrollbarV=this.chartScrollbar=null;this.clearTimeOuts();
this.container&&(this.container.remove(this.chartDiv),this.container.remove(this.legendDiv));a||d.removeChart(this);if(a=this.div)for(;a.firstChild;)a.removeChild(a.firstChild);this.legend&&this.legend.destroy&&this.legend.destroy();this.AmExport&&this.AmExport.clear&&this.AmExport.clear()},setMouseCursor:function(a){"auto"==a&&d.isNN&&(a="default");this.chartDiv.style.cursor=a;this.legendDiv.style.cursor=a},redrawLabels:function(){this.labels=[];var a=this.allLabels;this.createLabelsSet();var b;
for(b=0;b<a.length;b++)this.drawLabel(a[b])},drawLabel:function(a){var b=this;if(b.container&&!1!==a.enabled){a=d.processObject(a,d.Label,b.theme);var c=a.y,e=a.text,g=a.align,f=a.size,k=a.color,h=a.rotation,l=a.alpha,m=a.bold,n=d.toCoordinate(a.x,b.realWidth),c=d.toCoordinate(c,b.realHeight);n||(n=0);c||(c=0);void 0===k&&(k=b.color);isNaN(f)&&(f=b.fontSize);g||(g="start");"left"==g&&(g="start");"right"==g&&(g="end");"center"==g&&(g="middle",h?c=b.realHeight-c+c/2:n=b.realWidth/2-n);void 0===l&&(l=
1);void 0===h&&(h=0);c+=f/2;e=d.text(b.container,e,k,b.fontFamily,f,g,m,l);e.translate(n,c);void 0!==a.tabIndex&&e.setAttr("tabindex",a.tabIndex);d.setCN(b,e,"label");a.id&&d.setCN(b,e,"label-"+a.id);0!==h&&e.rotate(h);a.url?(e.setAttr("cursor","pointer"),e.click(function(){d.getURL(a.url,b.urlTarget)})):e.node.style.pointerEvents="none";b.labelsSet.push(e);b.labels.push(e)}},addLabel:function(a,b,c,e,d,f,k,h,l,m){a={x:a,y:b,text:c,align:e,size:d,color:f,alpha:h,rotation:k,bold:l,url:m,enabled:!0};
this.container&&this.drawLabel(a);this.allLabels.push(a)},clearLabels:function(){var a=this.labels,b;for(b=a.length-1;0<=b;b--)a[b].remove();this.labels=[];this.allLabels=[]},updateHeight:function(){var a=this.divRealHeight,b=this.legend;if(b){var c=this.legendDiv.offsetHeight,b=b.position;if("top"==b||"bottom"==b){a-=c;if(0>a||isNaN(a))a=0;this.chartDiv.style.height=a+"px"}}return a},updateWidth:function(){var a=this.divRealWidth,b=this.divRealHeight,c=this.legend;if(c){var e=this.legendDiv,d=e.offsetWidth;
isNaN(c.width)||(d=c.width);c.ieW&&(d=c.ieW);var f=e.offsetHeight,e=e.style,k=this.chartDiv.style,h=c.position;if(("right"==h||"left"==h)&&void 0===c.divId){a-=d;if(0>a||isNaN(a))a=0;k.width=a+"px";this.balloon&&this.balloon.setBounds&&this.balloon.setBounds(2,2,a-2,this.realHeight);"left"==h?(k.left=d+"px",e.left="0px"):(k.left="0px",e.left=a+"px");b>f&&(e.top=(b-f)/2+"px")}}return a},getTitleHeight:function(){this.drawTitles(!0);return this.titleHeight},addTitle:function(a,b,c,e,d){isNaN(b)&&(b=
this.fontSize+2);a={text:a,size:b,color:c,alpha:e,bold:d,enabled:!0};this.titles.push(a);return a},handleWheel:function(a){var b=0;a||(a=window.event);a.wheelDelta?b=a.wheelDelta/120:a.detail&&(b=-a.detail/3);b&&this.handleWheelReal(b,a.shiftKey);a.preventDefault&&a.preventDefault()},handleWheelReal:function(){},handleDocTouchStart:function(){this.handleMouseMove();this.tmx=this.mouseX;this.tmy=this.mouseY;this.touchStartTime=(new Date).getTime()},handleDocTouchEnd:function(){-.5<this.tmx&&this.tmx<
this.divRealWidth+1&&0<this.tmy&&this.tmy<this.divRealHeight?(this.handleMouseMove(),4>Math.abs(this.mouseX-this.tmx)&&4>Math.abs(this.mouseY-this.tmy)?(this.tapped=!0,this.panRequired&&this.panEventsEnabled&&this.chartDiv&&(this.chartDiv.style.msTouchAction="none",this.chartDiv.style.touchAction="none")):this.mouseIsOver||this.resetTouchStyle()):(this.tapped=!1,this.resetTouchStyle())},resetTouchStyle:function(){this.panEventsEnabled&&this.chartDiv&&(this.chartDiv.style.msTouchAction="auto",this.chartDiv.style.touchAction=
"auto")},checkTouchDuration:function(a){var b=this,c=(new Date).getTime();if(a)if(a.touches)b.isTouchEvent=!0;else if(!b.isTouchEvent)return!0;if(c-b.touchStartTime>b.touchClickDuration)return!0;setTimeout(function(){b.resetTouchDuration()},300)},resetTouchDuration:function(){this.isTouchEvent=!1},checkTouchMoved:function(){if(4<Math.abs(this.mouseX-this.tmx)||4<Math.abs(this.mouseY-this.tmy))return!0},addListeners:function(){var a=this,b=a.chartDiv;document.addEventListener?("ontouchstart"in document.documentElement&&
(b.addEventListener("touchstart",function(b){a.handleTouchStart.call(a,b)},!0),b.addEventListener("touchmove",function(b){a.handleMouseMove.call(a,b)},!0),b.addEventListener("touchend",function(b){a.handleTouchEnd.call(a,b)},!0),a.docfn1=function(b){a.handleDocTouchStart.call(a,b)},a.docfn2=function(b){a.handleDocTouchEnd.call(a,b)},document.addEventListener("touchstart",a.docfn1,!0),document.addEventListener("touchend",a.docfn2,!0)),b.addEventListener("mousedown",function(b){a.mouseIsOver=!0;a.handleMouseMove.call(a,
b);a.handleMouseDown.call(a,b);a.handleDocTouchStart.call(a,b)},!0),b.addEventListener("mouseover",function(b){a.handleMouseOver.call(a,b)},!0),b.addEventListener("mouseout",function(b){a.handleMouseOut.call(a,b)},!0),b.addEventListener("mouseup",function(b){a.handleDocTouchEnd.call(a,b)},!0)):(b.attachEvent("onmousedown",function(b){a.handleMouseDown.call(a,b)}),b.attachEvent("onmouseover",function(b){a.handleMouseOver.call(a,b)}),b.attachEvent("onmouseout",function(b){a.handleMouseOut.call(a,b)}))},
dispDUpd:function(){this.skipEvents||(this.dispatchDataUpdated&&(this.dispatchDataUpdated=!1,this.fire({type:"dataUpdated",chart:this})),this.chartCreated||(this.chartCreated=!0,this.fire({type:"init",chart:this})),!this.chartRendered&&0<this.divRealWidth&&0<this.divRealHeight&&(this.fire({type:"rendered",chart:this}),this.chartRendered=!0),this.fire({type:"drawn",chart:this}));this.skipEvents=!1},validateSize:function(){var a=this;a.premeasure();a.checkDisplay();a.cssScale=1;a.cssAngle=0;a.checkTransform(a.div);
if(a.divRealWidth!=a.previousWidth||a.divRealHeight!=a.previousHeight){var b=a.legend;if(0<a.realWidth&&0<a.realHeight){a.sizeChanged=!0;if(b){a.legendInitTO&&clearTimeout(a.legendInitTO);var c=setTimeout(function(){b.invalidateSize()},10);a.timeOuts.push(c);a.legendInitTO=c}a.marginsUpdated=!1;clearTimeout(a.initTO);c=setTimeout(function(){a.initChart()},10);a.timeOuts.push(c);a.initTO=c}a.renderFix();b&&b.renderFix&&b.renderFix();a.positionCred();clearTimeout(a.resizedTO);a.resizedTO=setTimeout(function(){a.fire({type:"resized",
chart:a})},10);a.previousHeight=a.divRealHeight;a.previousWidth=a.divRealWidth}},invalidateSize:function(){this.previousHeight=this.previousWidth=NaN;this.invalidateSizeReal()},invalidateSizeReal:function(){var a=this;a.marginsUpdated=!1;clearTimeout(a.validateTO);var b=setTimeout(function(){a.validateSize()},5);a.timeOuts.push(b);a.validateTO=b},validateData:function(a){this.chartCreated&&(this.dataChanged=!0,this.marginsUpdated=!1,this.initChart(a))},validateNow:function(a,b){this.initTO&&clearTimeout(this.initTO);
a&&(this.dataChanged=!0,this.marginsUpdated=!1);this.skipEvents=b;this.chartRendered=!1;var c=this.legend;c&&c.position!=this.prevLegendPosition&&(this.previousWidth=this.mw=0,c.invalidateSize&&(c.invalidateSize(),this.validateSize()));this.write(this.div)},showItem:function(a){a.hidden=!1;this.initChart()},hideItem:function(a){a.hidden=!0;this.initChart()},hideBalloon:function(){var a=this;clearTimeout(a.hoverInt);clearTimeout(a.balloonTO);a.hoverInt=setTimeout(function(){a.hideBalloonReal.call(a)},
a.hideBalloonTime)},cleanChart:function(){},hideBalloonReal:function(){var a=this.balloon;a&&a.hide&&a.hide()},showBalloon:function(a,b,c,e,d){var f=this;clearTimeout(f.balloonTO);clearTimeout(f.hoverInt);f.balloonTO=setTimeout(function(){f.showBalloonReal.call(f,a,b,c,e,d)},1)},showBalloonReal:function(a,b,c,e,d){this.handleMouseMove();var f=this.balloon;f.enabled&&(f.followCursor(!1),f.changeColor(b),!c||f.fixedPosition?(f.setPosition(e,d),isNaN(e)||isNaN(d)?f.followCursor(!0):f.followCursor(!1)):
f.followCursor(!0),a&&f.showBalloon(a))},handleMouseOver:function(){this.outTO&&clearTimeout(this.outTO);d.resetMouseOver();this.mouseIsOver=!0},handleMouseOut:function(){var a=this;d.resetMouseOver();a.outTO&&clearTimeout(a.outTO);a.outTO=setTimeout(function(){a.handleMouseOutReal()},10)},handleMouseOutReal:function(){this.mouseIsOver=!1},handleMouseMove:function(a){a||(a=window.event);this.mouse2Y=this.mouse2X=NaN;var b,c,e,d;if(a){if(a.touches){var f=a.touches.item(1);f&&this.panEventsEnabled&&
this.boundingRect&&(e=f.clientX-this.boundingRect.left,d=f.clientY-this.boundingRect.top);a=a.touches.item(0);if(!a)return}else this.wasTouched=!1;this.boundingRect&&a.clientX&&(b=a.clientX-this.boundingRect.left,c=a.clientY-this.boundingRect.top);isNaN(e)?this.mouseX=b:(this.mouseX=Math.min(b,e),this.mouse2X=Math.max(b,e));isNaN(d)?this.mouseY=c:(this.mouseY=Math.min(c,d),this.mouse2Y=Math.max(c,d));this.autoTransform&&(this.mouseX/=this.cssScale,this.mouseY/=this.cssScale)}},handleTouchStart:function(a){this.hideBalloonReal();
a&&(a.touches&&this.tapToActivate&&!this.tapped||!this.panRequired)||(this.handleMouseMove(a),this.handleMouseDown(a))},handleTouchEnd:function(a){this.wasTouched=!0;this.handleMouseMove(a);d.resetMouseOver();this.handleReleaseOutside(a)},handleReleaseOutside:function(){this.handleDocTouchEnd.call(this)},handleMouseDown:function(a){d.resetMouseOver();this.mouseIsOver=!0;a&&a.preventDefault&&(this.panEventsEnabled?a.preventDefault():a.touches||a.preventDefault())},handleKeyUp:function(a){},addLegend:function(a,
b){a=d.processObject(a,d.AmLegend,this.theme);a.divId=b;a.ieW=0;var c;c="object"!=typeof b&&b?document.getElementById(b):b;this.legend=a;a.chart=this;c?(a.div=c,a.position="outside",a.autoMargins=!1):a.div=this.legendDiv;return a},removeLegend:function(){this.legend=void 0;this.previousWidth=0;this.legendDiv.innerHTML=""},handleResize:function(){(d.isPercents(this.width)||d.isPercents(this.height))&&this.invalidateSizeReal();this.renderFix()},renderFix:function(){if(!d.VML){var a=this.container;a&&
a.renderFix()}},getSVG:function(){if(d.hasSVG)return this.container},animate:function(a,b,c,e,g,f,k){a["an_"+b]&&d.removeFromArray(this.animations,a["an_"+b]);c={obj:a,frame:0,attribute:b,from:c,to:e,time:g,effect:f,suffix:k};a["an_"+b]=c;this.animations.push(c);return c},setLegendData:function(a){var b=this.legend;b&&b.setData(a)},stopAnim:function(a){d.removeFromArray(this.animations,a)},updateAnimations:function(){var a;this.container&&this.container.update();if(this.animations)for(a=this.animations.length-
1;0<=a;a--){var b=this.animations[a],c=d.updateRate*b.time,e=b.frame+1,g=b.obj,f=b.attribute;if(e<=c){b.frame++;var k=Number(b.from),h=Number(b.to)-k,c=d[b.effect](0,e,k,h,c);0===h?(this.animations.splice(a,1),g.node.style[f]=Number(b.to)+b.suffix):g.node.style[f]=c+b.suffix}else g.node.style[f]=Number(b.to)+b.suffix,g.animationFinished=!0,this.animations.splice(a,1)}},update:function(){this.updateAnimations();var a=this.animatable;if(0<a.length){for(var b=!0,c=a.length-1;0<=c;c--){var e=a[c];e&&
(e.animationFinished?a.splice(c,1):b=!1)}b&&(this.fire({type:"animationFinished",chart:this}),this.animatable=[])}},inIframe:function(){try{return window.self!==window.top}catch(a){return!0}},brr:function(){if(!this.hideCredits){var a="amcharts.com",b=window.location.hostname.split("."),c;2<=b.length&&(c=b[b.length-2]+"."+b[b.length-1]);this.amLink&&(b=this.amLink.parentNode)&&b.removeChild(this.amLink);if(c!=a||!0===this.inIframe()){c=a="http://www."+a;var b="JavaScript charts",e="JS chart by amCharts";
"ammap"==this.product&&(c=a+"/javascript-maps/",b="Interactive JavaScript maps",e="JS map by amCharts");a=document.createElement("a");e=document.createTextNode(e);a.setAttribute("href",c);a.setAttribute("title",b);this.urlTarget&&a.setAttribute("target",this.urlTarget);a.appendChild(e);this.chartDiv.appendChild(a);this.amLink=a;a=a.style;a.position="absolute";a.textDecoration="none";a.color=this.color;a.fontFamily=this.fontFamily;a.fontSize="11px";a.opacity=.7;a.display="block";this.positionCred()}}},
positionCred:function(){var a=this.amLink;if(a){var b=this.creditsPosition,c=a.style,e=a.offsetWidth,a=a.offsetHeight,d=0,f=0,k=this.realWidth,h=this.realHeight,l=this.type;if("serial"==l||"xy"==l||"gantt"==l)d=this.marginLeftReal,f=this.marginTopReal,k=d+this.plotAreaWidth,h=f+this.plotAreaHeight;var l=5+d,m=f+5;"bottom-left"==b&&(l=5+d,m=h-a-3);"bottom-right"==b&&(l=k-e-5,m=h-a-3);"top-right"==b&&(l=k-e-5,m=f+5);c.left=l+"px";c.top=m+"px"}}});d.Slice=d.Class({construct:function(){}});d.SerialDataItem=
d.Class({construct:function(){}});d.GraphDataItem=d.Class({construct:function(){}});d.Guide=d.Class({construct:function(a){this.cname="Guide";d.applyTheme(this,a,this.cname)}});d.Title=d.Class({construct:function(a){this.cname="Title";d.applyTheme(this,a,this.cname)}});d.Label=d.Class({construct:function(a){this.cname="Label";d.applyTheme(this,a,this.cname)}})})();(function(){var d=window.AmCharts;d.AmBalloon=d.Class({construct:function(a){this.cname="AmBalloon";this.enabled=!0;this.fillColor="#FFFFFF";this.fillAlpha=.8;this.borderThickness=2;this.borderColor="#FFFFFF";this.borderAlpha=1;this.cornerRadius=0;this.maxWidth=220;this.horizontalPadding=8;this.verticalPadding=4;this.pointerWidth=6;this.pointerOrientation="V";this.color="#000000";this.adjustBorderColor=!0;this.show=this.follow=this.showBullet=!1;this.bulletSize=3;this.shadowAlpha=.4;this.shadowColor=
"#000000";this.fadeOutDuration=this.animationDuration=.3;this.fixedPosition=!0;this.offsetY=6;this.offsetX=1;this.textAlign="center";this.disableMouseEvents=!0;this.deltaSignX=this.deltaSignY=1;d.isModern||(this.offsetY*=1.5);this.sdy=this.sdx=0;d.applyTheme(this,a,this.cname)},draw:function(){var a=this.pointToX,b=this.pointToY;d.isModern||(this.drop=!1);var c=this.chart;d.VML&&(this.fadeOutDuration=0);this.xAnim&&c.stopAnim(this.xAnim);this.yAnim&&c.stopAnim(this.yAnim);this.sdy=this.sdx=0;if(!isNaN(a)){var e=
this.follow,g=c.container,f=this.set;d.remove(f);this.removeDiv();f=g.set();f.node.style.pointerEvents="none";this.set=f;this.mainSet?(this.mainSet.push(this.set),this.sdx=this.mainSet.x,this.sdy=this.mainSet.y):c.balloonsSet.push(f);if(this.show){var k=this.l,h=this.t,l=this.r,m=this.b,n=this.balloonColor,p=this.fillColor,r=this.borderColor,t=p;void 0!=n&&(this.adjustBorderColor?t=r=n:p=n);var q=this.horizontalPadding,y=this.verticalPadding,B=this.pointerWidth,u=this.pointerOrientation,v=this.cornerRadius,
w=c.fontFamily,A=this.fontSize;void 0==A&&(A=c.fontSize);var n=document.createElement("div"),C=c.classNamePrefix;n.className=C+"-balloon-div";this.className&&(n.className=n.className+" "+C+"-balloon-div-"+this.className);C=n.style;this.disableMouseEvents&&(C.pointerEvents="none");C.position="absolute";var x=this.minWidth,z=document.createElement("div");n.appendChild(z);var E=z.style;isNaN(x)||(E.minWidth=x-2*q+"px");E.textAlign=this.textAlign;E.maxWidth=this.maxWidth+"px";E.fontSize=A+"px";E.color=
this.color;E.fontFamily=w;z.innerHTML=this.text;c.chartDiv.appendChild(n);this.textDiv=n;var E=n.offsetWidth,F=n.offsetHeight;n.clientHeight&&(E=n.clientWidth,F=n.clientHeight);w=F+2*y;z=E+2*q;!isNaN(x)&&z<x&&(z=x);window.opera&&(w+=2);var H=!1,A=this.offsetY;c.handDrawn&&(A+=c.handDrawScatter+2);"H"!=u?(x=a-z/2,b<h+w+10&&"down"!=u?(H=!0,e&&(b+=A),A=b+B,this.deltaSignY=-1):(e&&(b-=A),A=b-w-B,this.deltaSignY=1)):(2*B>w&&(B=w/2),A=b-w/2,a<k+(l-k)/2?(x=a+B,this.deltaSignX=-1):(x=a-z-B,this.deltaSignX=
1));A+w>=m&&(A=m-w);A<h&&(A=h);x<k&&(x=k);x+z>l&&(x=l-z);var h=A+y,m=x+q,G=this.shadowAlpha,D=this.shadowColor,q=this.borderThickness,L=this.bulletSize,J,y=this.fillAlpha,M=this.borderAlpha;this.showBullet&&(J=d.circle(g,L,t,y),f.push(J));this.drop?(k=z/1.6,l=0,"V"==u&&(u="down"),"H"==u&&(u="left"),"down"==u&&(x=a+1,A=b-k-k/3),"up"==u&&(l=180,x=a+1,A=b+k+k/3),"left"==u&&(l=270,x=a+k+k/3+2,A=b),"right"==u&&(l=90,x=a-k-k/3+2,A=b),h=A-F/2+1,m=x-E/2-1,p=d.drop(g,k,l,p,y,q,r,M)):0<v||0===B?(0<G&&(a=d.rect(g,
z,w,p,0,q+1,D,G,v),d.isModern?a.translate(1,1):a.translate(4,4),f.push(a)),p=d.rect(g,z,w,p,y,q,r,M,v)):(t=[],v=[],"H"!=u?(k=a-x,k>z-B&&(k=z-B),k<B&&(k=B),t=[0,k-B,a-x,k+B,z,z,0,0],v=H?[0,0,b-A,0,0,w,w,0]:[w,w,b-A,w,w,0,0,w]):(u=b-A,u>w-B&&(u=w-B),u<B&&(u=B),v=[0,u-B,b-A,u+B,w,w,0,0],t=a<k+(l-k)/2?[0,0,x<a?0:a-x,0,0,z,z,0]:[z,z,x+z>a?z:a-x,z,z,0,0,z]),0<G&&(a=d.polygon(g,t,v,p,0,q,D,G),a.translate(1,1),f.push(a)),p=d.polygon(g,t,v,p,y,q,r,M));this.bg=p;f.push(p);p.toFront();d.setCN(c,p,"balloon-bg");
this.className&&d.setCN(c,p,"balloon-bg-"+this.className);g=1*this.deltaSignX;m+=this.sdx;h+=this.sdy;C.left=m+"px";C.top=h+"px";f.translate(x-g,A,1,!0);p=p.getBBox();this.bottom=A+w+1;this.yPos=p.y+A;J&&J.translate(this.pointToX-x+g,b-A);b=this.animationDuration;0<this.animationDuration&&!e&&!isNaN(this.prevX)&&(f.translate(this.prevX,this.prevY,NaN,!0),f.animate({translate:x-g+","+A},b,"easeOutSine"),n&&(C.left=this.prevTX+"px",C.top=this.prevTY+"px",this.xAnim=c.animate({node:n},"left",this.prevTX,
m,b,"easeOutSine","px"),this.yAnim=c.animate({node:n},"top",this.prevTY,h,b,"easeOutSine","px")));this.prevX=x-g;this.prevY=A;this.prevTX=m;this.prevTY=h}}},fixPrevious:function(){this.rPrevX=this.prevX;this.rPrevY=this.prevY;this.rPrevTX=this.prevTX;this.rPrevTY=this.prevTY},restorePrevious:function(){this.prevX=this.rPrevX;this.prevY=this.rPrevY;this.prevTX=this.rPrevTX;this.prevTY=this.rPrevTY},followMouse:function(){if(this.follow&&this.show){var a=this.chart.mouseX-this.offsetX*this.deltaSignX-
this.sdx,b=this.chart.mouseY-this.sdy;this.pointToX=a;this.pointToY=b;if(a!=this.previousX||b!=this.previousY)if(this.previousX=a,this.previousY=b,0===this.cornerRadius)this.draw();else{var c=this.set;if(c){var e=c.getBBox(),a=a-e.width/2,d=b-e.height-10;a<this.l&&(a=this.l);a>this.r-e.width&&(a=this.r-e.width);d<this.t&&(d=b+10);c.translate(a,d);b=this.textDiv.style;b.left=a+this.horizontalPadding+"px";b.top=d+this.verticalPadding+"px"}}}},changeColor:function(a){this.balloonColor=a},setBounds:function(a,
b,c,e){this.l=a;this.t=b;this.r=c;this.b=e;this.destroyTO&&clearTimeout(this.destroyTO)},showBalloon:function(a){if(this.text!=a||this.positionChanged)this.text=a,this.isHiding=!1,this.show=!0,this.destroyTO&&clearTimeout(this.destroyTO),a=this.chart,this.fadeAnim1&&a.stopAnim(this.fadeAnim1),this.fadeAnim2&&a.stopAnim(this.fadeAnim2),this.draw(),this.positionChanged=!1},hide:function(a){var b=this;b.text=void 0;isNaN(a)&&(a=b.fadeOutDuration);var c=b.chart;if(0<a&&!b.isHiding){b.isHiding=!0;b.destroyTO&&
clearTimeout(b.destroyTO);b.destroyTO=setTimeout(function(){b.destroy.call(b)},1E3*a);b.follow=!1;b.show=!1;var e=b.set;e&&(e.setAttr("opacity",b.fillAlpha),b.fadeAnim1=e.animate({opacity:0},a,"easeInSine"));b.textDiv&&(b.fadeAnim2=c.animate({node:b.textDiv},"opacity",1,0,a,"easeInSine",""))}else b.show=!1,b.follow=!1,b.destroy()},setPosition:function(a,b){if(a!=this.pointToX||b!=this.pointToY)this.previousX=this.pointToX,this.previousY=this.pointToY,this.pointToX=a,this.pointToY=b,this.positionChanged=
!0},followCursor:function(a){var b=this;b.follow=a;clearInterval(b.interval);var c=b.chart.mouseX-b.sdx,e=b.chart.mouseY-b.sdy;!isNaN(c)&&a&&(b.pointToX=c-b.offsetX*b.deltaSignX,b.pointToY=e,b.followMouse(),b.interval=setInterval(function(){b.followMouse.call(b)},40))},removeDiv:function(){if(this.textDiv){var a=this.textDiv.parentNode;a&&a.removeChild(this.textDiv)}},destroy:function(){clearInterval(this.interval);d.remove(this.set);this.removeDiv();this.set=null}})})();(function(){var d=window.AmCharts;d.circle=function(a,b,c,e,g,f,k,h,l){0>=b&&(b=.001);if(void 0==g||0===g)g=.01;void 0===f&&(f="#000000");void 0===k&&(k=0);e={fill:c,stroke:f,"fill-opacity":e,"stroke-width":g,"stroke-opacity":k};a=isNaN(l)?a.circle(0,0,b).attr(e):a.ellipse(0,0,b,l).attr(e);h&&a.gradient("radialGradient",[c,d.adjustLuminosity(c,-.6)]);return a};d.text=function(a,b,c,e,g,f,k,h){f||(f="middle");"right"==f&&(f="end");"left"==f&&(f="start");isNaN(h)&&(h=1);void 0!==b&&(b=String(b),d.isIE&&
!d.isModern&&(b=b.replace("&amp;","&"),b=b.replace("&","&amp;")));c={fill:c,"font-family":e,"font-size":g+"px",opacity:h};!0===k&&(c["font-weight"]="bold");c["text-anchor"]=f;return a.text(b,c)};d.polygon=function(a,b,c,e,g,f,k,h,l,m,n){isNaN(f)&&(f=.01);isNaN(h)&&(h=g);var p=e,r=!1;"object"==typeof p&&1<p.length&&(r=!0,p=p[0]);void 0===k&&(k=p);g={fill:p,stroke:k,"fill-opacity":g,"stroke-width":f,"stroke-opacity":h};void 0!==n&&0<n&&(g["stroke-dasharray"]=n);n=d.dx;f=d.dy;a.handDrawn&&(c=d.makeHD(b,
c,a.handDrawScatter),b=c[0],c=c[1]);k=Math.round;m&&(k=Number);h="M"+(k(b[0])+n)+","+(k(c[0])+f);for(p=1;p<b.length;p++)m&&(b[p]=d.roundTo(b[p],5),c[p]=d.roundTo(c[p],5)),h+=" L"+(k(b[p])+n)+","+(k(c[p])+f);a=a.path(h+" Z").attr(g);r&&a.gradient("linearGradient",e,l);return a};d.rect=function(a,b,c,e,g,f,k,h,l,m,n){if(isNaN(b)||isNaN(c))return a.set();isNaN(f)&&(f=0);void 0===l&&(l=0);void 0===m&&(m=270);isNaN(g)&&(g=0);var p=e,r=!1;"object"==typeof p&&(p=p[0],r=!0);void 0===k&&(k=p);void 0===h&&
(h=g);b=Math.round(b);c=Math.round(c);var t=0,q=0;0>b&&(b=Math.abs(b),t=-b);0>c&&(c=Math.abs(c),q=-c);t+=d.dx;q+=d.dy;g={fill:p,stroke:k,"fill-opacity":g,"stroke-opacity":h};void 0!==n&&0<n&&(g["stroke-dasharray"]=n);a=a.rect(t,q,b,c,l,f).attr(g);r&&a.gradient("linearGradient",e,m);return a};d.bullet=function(a,b,c,e,g,f,k,h,l,m,n,p,r){var t;"circle"==b&&(b="round");switch(b){case "round":t=d.circle(a,c/2,e,g,f,k,h);break;case "square":t=d.polygon(a,[-c/2,c/2,c/2,-c/2],[c/2,c/2,-c/2,-c/2],e,g,f,k,
h,m-180,void 0,r);break;case "rectangle":t=d.polygon(a,[-c,c,c,-c],[c/2,c/2,-c/2,-c/2],e,g,f,k,h,m-180,void 0,r);break;case "diamond":t=d.polygon(a,[-c/2,0,c/2,0],[0,-c/2,0,c/2],e,g,f,k,h);break;case "triangleUp":t=d.triangle(a,c,0,e,g,f,k,h);break;case "triangleDown":t=d.triangle(a,c,180,e,g,f,k,h);break;case "triangleLeft":t=d.triangle(a,c,270,e,g,f,k,h);break;case "triangleRight":t=d.triangle(a,c,90,e,g,f,k,h);break;case "bubble":t=d.circle(a,c/2,e,g,f,k,h,!0);break;case "line":t=d.line(a,[-c/
2,c/2],[0,0],e,g,f,k,h);break;case "yError":t=a.set();t.push(d.line(a,[0,0],[-c/2,c/2],e,g,f));t.push(d.line(a,[-l,l],[-c/2,-c/2],e,g,f));t.push(d.line(a,[-l,l],[c/2,c/2],e,g,f));break;case "xError":t=a.set(),t.push(d.line(a,[-c/2,c/2],[0,0],e,g,f)),t.push(d.line(a,[-c/2,-c/2],[-l,l],e,g,f)),t.push(d.line(a,[c/2,c/2],[-l,l],e,g,f))}t&&t.pattern(n,NaN,p);return t};d.triangle=function(a,b,c,e,d,f,k,h){if(void 0===f||0===f)f=1;void 0===k&&(k="#000");void 0===h&&(h=0);e={fill:e,stroke:k,"fill-opacity":d,
"stroke-width":f,"stroke-opacity":h};b/=2;var l;0===c&&(l=" M"+-b+","+b+" L0,"+-b+" L"+b+","+b+" Z");180==c&&(l=" M"+-b+","+-b+" L0,"+b+" L"+b+","+-b+" Z");90==c&&(l=" M"+-b+","+-b+" L"+b+",0 L"+-b+","+b+" Z");270==c&&(l=" M"+-b+",0 L"+b+","+b+" L"+b+","+-b+" Z");return a.path(l).attr(e)};d.line=function(a,b,c,e,g,f,k,h,l,m,n){if(a.handDrawn&&!n)return d.handDrawnLine(a,b,c,e,g,f,k,h,l,m,n);f={fill:"none","stroke-width":f};void 0!==k&&0<k&&(f["stroke-dasharray"]=k);isNaN(g)||(f["stroke-opacity"]=
g);e&&(f.stroke=e);e=Math.round;m&&(e=Number,b[0]=d.roundTo(b[0],5),c[0]=d.roundTo(c[0],5));m=d.dx;g=d.dy;k="M"+(e(b[0])+m)+","+(e(c[0])+g);for(h=1;h<b.length;h++)b[h]=d.roundTo(b[h],5),c[h]=d.roundTo(c[h],5),k+=" L"+(e(b[h])+m)+","+(e(c[h])+g);if(d.VML)return a.path(k,void 0,!0).attr(f);l&&(k+=" M0,0 L0,0");return a.path(k).attr(f)};d.makeHD=function(a,b,c){for(var e=[],d=[],f=1;f<a.length;f++)for(var k=Number(a[f-1]),h=Number(b[f-1]),l=Number(a[f]),m=Number(b[f]),n=Math.round(Math.sqrt(Math.pow(l-
k,2)+Math.pow(m-h,2))/50)+1,l=(l-k)/n,m=(m-h)/n,p=0;p<=n;p++){var r=h+p*m+Math.random()*c;e.push(k+p*l+Math.random()*c);d.push(r)}return[e,d]};d.handDrawnLine=function(a,b,c,e,g,f,k,h,l,m){var n,p=a.set();for(n=1;n<b.length;n++)for(var r=[b[n-1],b[n]],t=[c[n-1],c[n]],t=d.makeHD(r,t,a.handDrawScatter),r=t[0],t=t[1],q=1;q<r.length;q++)p.push(d.line(a,[r[q-1],r[q]],[t[q-1],t[q]],e,g,f+Math.random()*a.handDrawThickness-a.handDrawThickness/2,k,h,l,m,!0));return p};d.doNothing=function(a){return a};d.drop=
function(a,b,c,e,d,f,k,h){var l=1/180*Math.PI,m=c-20,n=Math.sin(m*l)*b,p=Math.cos(m*l)*b,r=Math.sin((m+40)*l)*b,t=Math.cos((m+40)*l)*b,q=.8*b,y=-b/3,B=b/3;0===c&&(y=-y,B=0);180==c&&(B=0);90==c&&(y=0);270==c&&(y=0,B=-B);c={fill:e,stroke:k,"stroke-width":f,"stroke-opacity":h,"fill-opacity":d};b="M"+n+","+p+" A"+b+","+b+",0,1,1,"+r+","+t+(" A"+q+","+q+",0,0,0,"+(Math.sin((m+20)*l)*b+B)+","+(Math.cos((m+20)*l)*b+y));b+=" A"+q+","+q+",0,0,0,"+n+","+p;return a.path(b,void 0,void 0,"1000,1000").attr(c)};
d.wedge=function(a,b,c,e,g,f,k,h,l,m,n,p,r,t){var q=Math.round;f=q(f);k=q(k);h=q(h);var y=q(k/f*h),B=d.VML,u=359.5+f/100;359.94<u&&(u=359.94);g>=u&&(g=u);var v=1/180*Math.PI,u=b+Math.sin(e*v)*h,w=c-Math.cos(e*v)*y,A=b+Math.sin(e*v)*f,C=c-Math.cos(e*v)*k,x=b+Math.sin((e+g)*v)*f,z=c-Math.cos((e+g)*v)*k,E=b+Math.sin((e+g)*v)*h,v=c-Math.cos((e+g)*v)*y,F={fill:d.adjustLuminosity(m.fill,-.2),"stroke-opacity":0,"fill-opacity":m["fill-opacity"]},H=0;180<Math.abs(g)&&(H=1);e=a.set();var G;B&&(u=q(10*u),A=
q(10*A),x=q(10*x),E=q(10*E),w=q(10*w),C=q(10*C),z=q(10*z),v=q(10*v),b=q(10*b),l=q(10*l),c=q(10*c),f*=10,k*=10,h*=10,y*=10,1>Math.abs(g)&&1>=Math.abs(x-A)&&1>=Math.abs(z-C)&&(G=!0));g="";var D;p&&(F["fill-opacity"]=0,F["stroke-opacity"]=m["stroke-opacity"]/2,F.stroke=m.stroke);if(0<l){D=" M"+u+","+(w+l)+" L"+A+","+(C+l);B?(G||(D+=" A"+(b-f)+","+(l+c-k)+","+(b+f)+","+(l+c+k)+","+A+","+(C+l)+","+x+","+(z+l)),D+=" L"+E+","+(v+l),0<h&&(G||(D+=" B"+(b-h)+","+(l+c-y)+","+(b+h)+","+(l+c+y)+","+E+","+(l+v)+
","+u+","+(l+w)))):(D+=" A"+f+","+k+",0,"+H+",1,"+x+","+(z+l)+" L"+E+","+(v+l),0<h&&(D+=" A"+h+","+y+",0,"+H+",0,"+u+","+(w+l)));D+=" Z";var L=l;B&&(L/=10);for(var J=0;J<L;J+=10){var M=a.path(D,void 0,void 0,"1000,1000").attr(F);e.push(M);M.translate(0,-J)}D=a.path(" M"+u+","+w+" L"+u+","+(w+l)+" L"+A+","+(C+l)+" L"+A+","+C+" L"+u+","+w+" Z",void 0,void 0,"1000,1000").attr(F);l=a.path(" M"+x+","+z+" L"+x+","+(z+l)+" L"+E+","+(v+l)+" L"+E+","+v+" L"+x+","+z+" Z",void 0,void 0,"1000,1000").attr(F);
e.push(D);e.push(l)}B?(G||(g=" A"+q(b-f)+","+q(c-k)+","+q(b+f)+","+q(c+k)+","+q(A)+","+q(C)+","+q(x)+","+q(z)),k=" M"+q(u)+","+q(w)+" L"+q(A)+","+q(C)+g+" L"+q(E)+","+q(v)):k=" M"+u+","+w+" L"+A+","+C+(" A"+f+","+k+",0,"+H+",1,"+x+","+z)+" L"+E+","+v;0<h&&(B?G||(k+=" B"+(b-h)+","+(c-y)+","+(b+h)+","+(c+y)+","+E+","+v+","+u+","+w):k+=" A"+h+","+y+",0,"+H+",0,"+u+","+w);a.handDrawn&&(h=d.line(a,[u,A],[w,C],m.stroke,m.thickness*Math.random()*a.handDrawThickness,m["stroke-opacity"]),e.push(h));a=a.path(k+
" Z",void 0,void 0,"1000,1000").attr(m);if(n){h=[];for(y=0;y<n.length;y++)h.push(d.adjustLuminosity(m.fill,n[y]));"radial"!=t||d.isModern||(h=[]);0<h.length&&a.gradient(t+"Gradient",h)}d.isModern&&"radial"==t&&a.grad&&(a.grad.setAttribute("gradientUnits","userSpaceOnUse"),a.grad.setAttribute("r",f),a.grad.setAttribute("cx",b),a.grad.setAttribute("cy",c));a.pattern(p,NaN,r);e.wedge=a;e.push(a);return e};d.rgb2hex=function(a){return(a=a.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i))&&
4===a.length?"#"+("0"+parseInt(a[1],10).toString(16)).slice(-2)+("0"+parseInt(a[2],10).toString(16)).slice(-2)+("0"+parseInt(a[3],10).toString(16)).slice(-2):""};d.adjustLuminosity=function(a,b){a&&-1!=a.indexOf("rgb")&&(a=d.rgb2hex(a));a=String(a).replace(/[^0-9a-f]/gi,"");6>a.length&&(a=String(a[0])+String(a[0])+String(a[1])+String(a[1])+String(a[2])+String(a[2]));b=b||0;var c="#",e,g;for(g=0;3>g;g++)e=parseInt(a.substr(2*g,2),16),e=Math.round(Math.min(Math.max(0,e+e*b),255)).toString(16),c+=("00"+
e).substr(e.length);return c}})();(function(){var d=window.AmCharts;d.AmLegend=d.Class({construct:function(a){this.enabled=!0;this.cname="AmLegend";this.createEvents("rollOverMarker","rollOverItem","rollOutMarker","rollOutItem","showItem","hideItem","clickMarker","clickLabel");this.position="bottom";this.borderColor=this.color="#000000";this.borderAlpha=0;this.markerLabelGap=5;this.verticalGap=10;this.align="left";this.horizontalGap=0;this.spacing=10;this.markerDisabledColor="#AAB3B3";this.markerType="square";this.markerSize=16;this.markerBorderThickness=
this.markerBorderAlpha=1;this.marginBottom=this.marginTop=0;this.marginLeft=this.marginRight=20;this.autoMargins=!0;this.valueWidth=50;this.switchable=!0;this.switchType="x";this.switchColor="#FFFFFF";this.rollOverColor="#CC0000";this.reversedOrder=!1;this.labelText="[[title]]";this.valueText="[[value]]";this.accessibleLabel="[[title]]";this.useMarkerColorForLabels=!1;this.rollOverGraphAlpha=1;this.textClickEnabled=!1;this.equalWidths=!0;this.backgroundColor="#FFFFFF";this.backgroundAlpha=0;this.useGraphSettings=
!1;this.showEntries=!0;this.labelDx=0;d.applyTheme(this,a,this.cname)},setData:function(a){this.legendData=a;this.invalidateSize()},invalidateSize:function(){this.destroy();this.entries=[];this.valueLabels=[];var a=this.legendData;this.enabled&&(d.ifArray(a)||d.ifArray(this.data))&&this.drawLegend()},drawLegend:function(){var a=this.chart,b=this.position,c=this.width,e=a.divRealWidth,g=a.divRealHeight,f=this.div,k=this.legendData;this.data&&(k=this.combineLegend?this.legendData.concat(this.data):
this.data);isNaN(this.fontSize)&&(this.fontSize=a.fontSize);this.maxColumnsReal=this.maxColumns;if("right"==b||"left"==b)this.maxColumnsReal=1,this.autoMargins&&(this.marginLeft=this.marginRight=10);else if(this.autoMargins){this.marginRight=a.marginRight;this.marginLeft=a.marginLeft;var h=a.autoMarginOffset;"bottom"==b?(this.marginBottom=h,this.marginTop=0):(this.marginTop=h,this.marginBottom=0)}c=void 0!==c?d.toCoordinate(c,e):"right"!=b&&"left"!=b?a.realWidth:0<this.ieW?this.ieW:a.realWidth;"outside"==
b?(c=f.offsetWidth,g=f.offsetHeight,f.clientHeight&&(c=f.clientWidth,g=f.clientHeight)):(isNaN(c)||(f.style.width=c+"px"),f.className="amChartsLegend "+a.classNamePrefix+"-legend-div");this.divWidth=c;(b=this.container)?(b.container.innerHTML="",f.appendChild(b.container),b.width=c,b.height=g,b.setSize(c,g),b.addDefs(a)):b=new d.AmDraw(f,c,g,a);this.container=b;this.lx=0;this.ly=8;g=this.markerSize;g>this.fontSize&&(this.ly=g/2-1);0<g&&(this.lx+=g+this.markerLabelGap);this.titleWidth=0;if(g=this.title)g=
d.text(this.container,g,this.color,a.fontFamily,this.fontSize,"start",!0),d.setCN(a,g,"legend-title"),g.translate(this.marginLeft,this.marginTop+this.verticalGap+this.ly+1),a=g.getBBox(),this.titleWidth=a.width+15,this.titleHeight=a.height+6;this.index=this.maxLabelWidth=0;if(this.showEntries){for(a=0;a<k.length;a++)this.createEntry(k[a]);for(a=this.index=0;a<k.length;a++)this.createValue(k[a])}this.arrangeEntries();this.updateValues()},arrangeEntries:function(){var a=this.position,b=this.marginLeft+
this.titleWidth,c=this.marginRight,e=this.marginTop,g=this.marginBottom,f=this.horizontalGap,k=this.div,h=this.divWidth,l=this.maxColumnsReal,m=this.verticalGap,n=this.spacing,p=h-c-b,r=0,t=0,q=this.container;this.set&&this.set.remove();var y=q.set();this.set=y;var B=q.set();y.push(B);var u=this.entries,v,w;for(w=0;w<u.length;w++){v=u[w].getBBox();var A=v.width;A>r&&(r=A);v=v.height;v>t&&(t=v)}var A=t=0,C=f,x=0,z=0;for(w=0;w<u.length;w++){var E=u[w];this.reversedOrder&&(E=u[u.length-w-1]);v=E.getBBox();
var F;this.equalWidths?F=A*(r+n+this.markerLabelGap):(F=C,C=C+v.width+f+n);F+v.width>p&&0<w&&0!==A&&(t++,F=A=0,C=F+v.width+f+n,x=x+z+m,z=0);v.height>z&&(z=v.height);E.translate(F,x);A++;!isNaN(l)&&A>=l&&(A=0,t++,x=x+z+m,C=f,z=0);B.push(E)}v=B.getBBox();l=v.height+2*m-1;"left"==a||"right"==a?(n=v.width+2*f,h=n+b+c,k.style.width=h+"px",this.ieW=h):n=h-b-c-1;c=d.polygon(this.container,[0,n,n,0],[0,0,l,l],this.backgroundColor,this.backgroundAlpha,1,this.borderColor,this.borderAlpha);d.setCN(this.chart,
c,"legend-bg");y.push(c);y.translate(b,e);c.toBack();b=f;if("top"==a||"bottom"==a||"absolute"==a||"outside"==a)"center"==this.align?b=f+(n-v.width)/2:"right"==this.align&&(b=f+n-v.width);B.translate(b,m+1);this.titleHeight>l&&(l=this.titleHeight);e=l+e+g+1;0>e&&(e=0);"absolute"!=a&&"outside"!=a&&e>this.chart.divRealHeight&&(k.style.top="0px");k.style.height=Math.round(e)+"px";q.setSize(this.divWidth,e)},createEntry:function(a){if(!1!==a.visibleInLegend&&!a.hideFromLegend){var b=this,c=b.chart,e=b.useGraphSettings,
g=a.markerType;g&&(e=!1);a.legendEntryWidth=b.markerSize;g||(g=b.markerType);var f=a.color,k=a.alpha;a.legendKeyColor&&(f=a.legendKeyColor());a.legendKeyAlpha&&(k=a.legendKeyAlpha());var h;!0===a.hidden&&(h=f=b.markerDisabledColor);var l=a.pattern,m,n=a.customMarker;n||(n=b.customMarker);var p=b.container,r=b.markerSize,t=0,q=0,y=r/2;if(e){e=a.type;b.switchType=void 0;if("line"==e||"step"==e||"smoothedLine"==e||"ohlc"==e)m=p.set(),a.hidden||(f=a.lineColorR,h=a.bulletBorderColorR),t=d.line(p,[0,2*
r],[r/2,r/2],f,a.lineAlpha,a.lineThickness,a.dashLength),d.setCN(c,t,"graph-stroke"),m.push(t),a.bullet&&(a.hidden||(f=a.bulletColorR),t=d.bullet(p,a.bullet,a.bulletSize,f,a.bulletAlpha,a.bulletBorderThickness,h,a.bulletBorderAlpha))&&(d.setCN(c,t,"graph-bullet"),t.translate(r+1,r/2),m.push(t)),y=0,t=r,q=r/3;else{a.getGradRotation&&(m=a.getGradRotation(),0===m&&(m=180));t=a.fillColorsR;!0===a.hidden&&(t=f);if(m=b.createMarker("rectangle",t,a.fillAlphas,a.lineThickness,f,a.lineAlpha,m,l,a.dashLength))y=
r,m.translate(y,r/2);t=r}d.setCN(c,m,"graph-"+e);d.setCN(c,m,"graph-"+a.id)}else if(n)m=p.image(n,0,0,r,r);else{var B;isNaN(b.gradientRotation)||(B=180+b.gradientRotation);(m=b.createMarker(g,f,k,void 0,void 0,void 0,B,l))&&m.translate(r/2,r/2)}d.setCN(c,m,"legend-marker");b.addListeners(m,a);p=p.set([m]);b.switchable&&a.switchable&&p.setAttr("cursor","pointer");void 0!==a.id&&d.setCN(c,p,"legend-item-"+a.id);d.setCN(c,p,a.className,!0);h=b.switchType;var u;h&&"none"!=h&&0<r&&("x"==h?(u=b.createX(),
u.translate(r/2,r/2)):u=b.createV(),u.dItem=a,!0!==a.hidden?"x"==h?u.hide():u.show():"x"!=h&&u.hide(),b.switchable||u.hide(),b.addListeners(u,a),a.legendSwitch=u,p.push(u),d.setCN(c,u,"legend-switch"));h=b.color;a.showBalloon&&b.textClickEnabled&&void 0!==b.selectedColor&&(h=b.selectedColor);b.useMarkerColorForLabels&&!l&&(h=f);!0===a.hidden&&(h=b.markerDisabledColor);f=d.massReplace(b.labelText,{"[[title]]":a.title});void 0!==b.tabIndex&&(p.setAttr("tabindex",b.tabIndex),p.setAttr("role","menuitem"),
p.keyup(function(c){13==c.keyCode&&b.clickMarker(a,c)}));c.accessible&&b.accessibleLabel&&(l=d.massReplace(b.accessibleLabel,{"[[title]]":a.title}),c.makeAccessible(p,l));l=b.fontSize;m&&(r<=l&&(r=r/2+b.ly-l/2+(l+2-r)/2-q,m.translate(y,r),u&&u.translate(u.x,r)),a.legendEntryWidth=m.getBBox().width);var v;f&&(f=d.fixBrakes(f),a.legendTextReal=f,v=b.labelWidth,v=isNaN(v)?d.text(b.container,f,h,c.fontFamily,l,"start"):d.wrappedText(b.container,f,h,c.fontFamily,l,"start",!1,v,0),d.setCN(c,v,"legend-label"),
v.translate(b.lx+t,b.ly),p.push(v),b.labelDx=t,c=v.getBBox().width,b.maxLabelWidth<c&&(b.maxLabelWidth=c));b.entries[b.index]=p;a.legendEntry=b.entries[b.index];a.legendMarker=m;a.legendLabel=v;b.index++}},addListeners:function(a,b){var c=this;a&&a.mouseover(function(a){c.rollOverMarker(b,a)}).mouseout(function(a){c.rollOutMarker(b,a)}).click(function(a){c.clickMarker(b,a)})},rollOverMarker:function(a,b){this.switchable&&this.dispatch("rollOverMarker",a,b);this.dispatch("rollOverItem",a,b)},rollOutMarker:function(a,
b){this.switchable&&this.dispatch("rollOutMarker",a,b);this.dispatch("rollOutItem",a,b)},clickMarker:function(a,b){this.switchable&&(!0===a.hidden?this.dispatch("showItem",a,b):this.dispatch("hideItem",a,b));this.dispatch("clickMarker",a,b)},rollOverLabel:function(a,b){a.hidden||this.textClickEnabled&&a.legendLabel&&a.legendLabel.attr({fill:this.rollOverColor});this.dispatch("rollOverItem",a,b)},rollOutLabel:function(a,b){if(!a.hidden&&this.textClickEnabled&&a.legendLabel){var c=this.color;void 0!==
this.selectedColor&&a.showBalloon&&(c=this.selectedColor);this.useMarkerColorForLabels&&(c=a.lineColor,void 0===c&&(c=a.color));a.legendLabel.attr({fill:c})}this.dispatch("rollOutItem",a,b)},clickLabel:function(a,b){this.textClickEnabled?a.hidden||this.dispatch("clickLabel",a,b):this.switchable&&(!0===a.hidden?this.dispatch("showItem",a,b):this.dispatch("hideItem",a,b))},dispatch:function(a,b,c){a={type:a,dataItem:b,target:this,event:c,chart:this.chart};this.chart&&this.chart.handleLegendEvent(a);
this.fire(a)},createValue:function(a){var b=this,c=b.fontSize,e=b.chart;if(!1!==a.visibleInLegend&&!a.hideFromLegend){var g=b.maxLabelWidth,f=0;b.forceWidth&&(g=b.labelWidth);b.equalWidths||(b.valueAlign="left");f={x:0,y:0,width:0,height:0};a.legendLabel&&(f=a.legendLabel.getBBox());"left"==b.valueAlign&&(g=f.width);var f=f.height,k=g,h=b.markerSize;h<c+7&&(h=c+7,d.VML&&(h+=3));if(b.valueText&&0<b.valueWidth){var l=b.color;b.useMarkerColorForValues&&(l=a.color,a.legendKeyColor&&(l=a.legendKeyColor()));
!0===a.hidden&&(l=b.markerDisabledColor);var m=b.valueText,g=g+b.lx+b.labelDx+b.markerLabelGap+b.valueWidth,n="end";"left"==b.valueAlign&&(g-=b.valueWidth,n="start");c=d.text(b.container,m,l,b.chart.fontFamily,c,n);d.setCN(e,c,"legend-value");c.translate(g,b.ly);b.entries[b.index].push(c);k+=b.valueWidth+2*b.markerLabelGap;c.dItem=a;b.valueLabels.push(c);h<f+5&&(h=f+5)}b.index++;e=b.container.rect(a.legendEntryWidth,0,k,h,0,0).attr({stroke:"none",fill:"#fff","fill-opacity":.005});e.dItem=a;b.entries[b.index-
1].push(e);e.mouseover(function(c){b.rollOverLabel(a,c)}).mouseout(function(c){b.rollOutLabel(a,c)}).click(function(c){b.clickLabel(a,c)})}},createV:function(){var a=this.markerSize;return d.polygon(this.container,[a/5,a/2,a-a/5,a/2],[a/3,a-a/5,a/5,a/1.7],this.switchColor)},createX:function(){var a=(this.markerSize-4)/2,b={stroke:this.switchColor,"stroke-width":3},c=this.container,e=d.line(c,[-a,a],[-a,a]).attr(b),a=d.line(c,[-a,a],[a,-a]).attr(b);return this.container.set([e,a])},createMarker:function(a,
b,c,e,g,f,k,h,l){var m=this.markerSize,n=this.container;g||(g=this.markerBorderColor);g||(g=b);isNaN(e)&&(e=this.markerBorderThickness);isNaN(f)&&(f=this.markerBorderAlpha);return d.bullet(n,a,m,b,c,e,g,f,m,k,h,this.chart.path,l)},validateNow:function(){this.invalidateSize()},updateValues:function(){var a=this.valueLabels,b=this.chart,c,e=this.data;if(a)for(c=0;c<a.length;c++){var g=a[c],f=g.dItem;f.periodDataItem=void 0;f.periodPercentDataItem=void 0;var k=" ";if(e)f.value?g.text(f.value):g.text("");
else{var h=null;if(void 0!==f.type){var h=f.currentDataItem,l=this.periodValueText;f.legendPeriodValueText&&(l=f.legendPeriodValueText);f.legendPeriodValueTextR&&(l=f.legendPeriodValueTextR);h?(k=this.valueText,f.legendValueText&&(k=f.legendValueText),f.legendValueTextR&&(k=f.legendValueTextR),k=b.formatString(k,h)):l&&b.formatPeriodString&&(l=d.massReplace(l,{"[[title]]":f.title}),k=b.formatPeriodString(l,f))}else k=b.formatString(this.valueText,f);l=f;h&&(l=h);var m=this.valueFunction;m&&(k=m(l,
k,b.periodDataItem));var n;this.useMarkerColorForLabels&&!h&&f.lastDataItem&&(h=f.lastDataItem);h?n=b.getBalloonColor(f,h):f.legendKeyColor&&(n=f.legendKeyColor());f.legendColorFunction&&(n=f.legendColorFunction(l,k,f.periodDataItem,f.periodPercentDataItem));g.text(k);if(!f.pattern&&(this.useMarkerColorForValues&&g.setAttr("fill",n),this.useMarkerColorForLabels)){if(g=f.legendMarker)g.setAttr("fill",n),g.setAttr("stroke",n);(g=f.legendLabel)&&(f.hidden?g.setAttr("fill",this.markerDisabledColor):g.setAttr("fill",
n))}}}},renderFix:function(){if(!d.VML&&this.enabled){var a=this.container;a&&a.renderFix()}},destroy:function(){this.div.innerHTML="";d.remove(this.set)}})})();(function(){var d=window.AmCharts;d.AmMap=d.Class({inherits:d.AmChart,construct:function(a){this.cname="AmMap";this.type="map";this.theme=a;this.svgNotSupported="This browser doesn't support SVG. Use Chrome, Firefox, Internet Explorer 9 or later.";this.createEvents("rollOverMapObject","rollOutMapObject","clickMapObject","mouseDownMapObject","selectedObjectChanged","homeButtonClicked","zoomCompleted","dragCompleted","positionChanged","writeDevInfo","click","descriptionClosed");this.zoomDuration=.6;
this.zoomControl=new d.ZoomControl(a);this.fitMapToContainer=!0;this.mouseWheelZoomEnabled=this.backgroundZoomsToTop=!1;this.allowClickOnSelectedObject=this.useHandCursorOnClickableOjects=this.showBalloonOnSelectedObject=!0;this.showObjectsAfterZoom=this.wheelBusy=!1;this.zoomOnDoubleClick=this.useObjectColorForBalloon=!0;this.allowMultipleDescriptionWindows=!1;this.dragMap=this.centerMap=this.linesAboveImages=!0;this.colorSteps=5;this.forceNormalize=!1;this.showAreasInList=!0;this.showLinesInList=
this.showImagesInList=!1;this.areasProcessor=new d.AreasProcessor(this);this.areasSettings=new d.AreasSettings(a);this.imagesProcessor=new d.ImagesProcessor(this);this.imagesSettings=new d.ImagesSettings(a);this.linesProcessor=new d.LinesProcessor(this);this.linesSettings=new d.LinesSettings(a);this.initialTouchZoom=1;this.showDescriptionOnHover=!1;d.AmMap.base.construct.call(this,a);this.creditsPosition="bottom-left";this.product="ammap";this.areasClasses={};this.updatableImages=[];d.applyTheme(this,
a,this.cname)},initChart:function(){this.zoomInstantly=!0;var a=this.container;this.panRequired=!0;if(this.sizeChanged&&d.hasSVG&&this.chartCreated){this.updatableImages=[];this.freeLabelsSet&&this.freeLabelsSet.remove();this.freeLabelsSet=a.set();this.container.setSize(this.realWidth,this.realHeight);this.resizeMap();this.drawBackground();this.redrawLabels();this.drawTitles();this.processObjects(!0);this.rescaleObjects();this.zoomControl.init(this,a);this.drawBg();var b=this.smallMap;b&&b.init(this,
a);(b=this.valueLegend)&&b.init(this,a);this.sizeChanged=!1;this.zoomToLongLat(this.zLevelTemp,this.zLongTemp,this.zLatTemp,!0);this.previousWidth=this.realWidth;this.previousHeight=this.realHeight;this.updateSmallMap();this.linkSet.toFront();this.zoomControl.update&&this.zoomControl.update()}else(d.AmMap.base.initChart.call(this),d.hasSVG)?(this.dataChanged&&(this.parseData(),this.dispatchDataUpdated=!0,this.dataChanged=!1,a=this.legend)&&(a.position="absolute",a.invalidateSize()),this.createDescriptionsDiv(),
this.svgAreas=[],this.svgAreasById={},this.drawChart()):(this.chartDiv.style.textAlign="",this.chartDiv.setAttribute("class","ammapAlert"),this.chartDiv.innerHTML=this.svgNotSupported,this.fire({type:"failed",chart:this}))},storeTemp:function(){if(d.hasSVG&&0<this.realWidth&&0<this.realHeight){var a=this.mapContainer.getBBox();0<a.width&&0<a.height&&(a=this.zoomLongitude(),isNaN(a)||(this.zLongTemp=a),a=this.zoomLatitude(),isNaN(a)||(this.zLatTemp=a),a=this.zoomLevel(),isNaN(a)||(this.zLevelTemp=
a))}},invalidateSize:function(){this.storeTemp();d.AmMap.base.invalidateSize.call(this)},validateSize:function(){this.storeTemp();d.AmMap.base.validateSize.call(this)},handleWheelReal:function(a){if(!this.wheelBusy){this.stopAnimation();var b=this.zoomLevel(),c=this.zoomControl,e=c.zoomFactor;this.wheelBusy=!0;a=d.fitToBounds(0<a?b*e:b/e,c.minZoomLevel,c.maxZoomLevel);e=this.mouseX/this.mapWidth;c=this.mouseY/this.mapHeight;e=(this.zoomX()-e)*(a/b)+e;b=(this.zoomY()-c)*(a/b)+c;this.zoomTo(a,e,b)}},
addLegend:function(a,b){a.position="absolute";a.autoMargins=!1;a.valueWidth=0;a.switchable=!1;d.AmMap.base.addLegend.call(this,a,b);void 0===a.enabled&&(a.enabled=!0);return a},handleLegendEvent:function(){},createDescriptionsDiv:function(){if(!this.descriptionsDiv){var a=document.createElement("div"),b=a.style;b.position="absolute";b.left="0px";b.top="0px";this.descriptionsDiv=a}this.containerDiv.appendChild(this.descriptionsDiv)},drawChart:function(){d.AmMap.base.drawChart.call(this);var a=this.dataProvider;
this.dataProvider=a=d.extend(a,new d.MapData,!0);this.areasSettings=d.processObject(this.areasSettings,d.AreasSettings,this.theme);this.imagesSettings=d.processObject(this.imagesSettings,d.ImagesSettings,this.theme);this.linesSettings=d.processObject(this.linesSettings,d.LinesSettings,this.theme);var b=this.container;this.mapContainer&&this.mapContainer.remove();this.mapContainer=b.set();this.graphsSet.push(this.mapContainer);var c;a.map&&(c=d.maps[a.map]);a.mapVar&&(c=a.mapVar);c?(this.svgData=c.svg,
this.getBounds(),this.buildEverything()):(a=a.mapURL)&&this.loadXml(a);this.balloonsSet.toFront()},drawBg:function(){var a=this;a.background.click(function(){a.handleBackgroundClick()});a.background.mouseover(function(){a.rollOutMapObject(a.previouslyHovered)})},buildEverything:function(){if(0<this.realWidth&&0<this.realHeight){var a=this.container,b=this.dataProvider;isNaN(b.zoomLevel)||(this.mapContainer.scale=b.zoomLevel);this.projection||(this.projection=b.projection,this.projection||(this.projection=
"equirectangular"));this.updatableImages=[];var c=this.projection;c&&(this.projectionFunction=d[c]);this.projectionFunction||(this.projectionFunction=d.equirectangular);this.dpProjectionFunction=d[b.projection];this.dpProjectionFunction||(this.dpProjectionFunction=d.equirectangular);this.zoomControl=d.processObject(this.zoomControl,d.ZoomControl,this.theme);this.zoomControl.init(this,a);this.drawBg();this.buildSVGMap();this.projectionFunction&&c!=b.projection||this.forceNormalize?(this.normalizeMap(),
this.changeProjection()):this.fixMapPosition();if(c=this.smallMap)c=d.processObject(c,d.SmallMap,this.theme),c.init(this,a),this.smallMap=c;isNaN(b.zoomX)&&isNaN(b.zoomY)&&isNaN(b.zoomLatitude)&&isNaN(b.zoomLongitude)&&(this.centerMap?(c=this.xyToCoordinates(this.mapWidth/2,this.mapHeight/2),b.zoomLongitudeC=c.longitude,b.zoomLatitudeC=c.latitude):(b.zoomX=0,b.zoomY=0),this.zoomInstantly=!0);this.selectObject(this.dataProvider);this.processAreas();if(b=this.valueLegend)this.valueLegend=b=d.processObject(b,
d.ValueLegend,this.theme),b.init(this,a);this.objectList&&(a=this.objectList=d.processObject(this.objectList,d.ObjectList))&&(this.clearObjectList(),a.init(this));this.dispDUpd();this.updateSmallMap();this.linkSet.toFront()}else this.cleanChart()},hideGroup:function(a){this.showHideGroup(a,!1)},showGroup:function(a){this.showHideGroup(a,!0)},showHideGroup:function(a,b){this.showHideReal(this.imagesProcessor.allObjects,a,b);this.showHideReal(this.areasProcessor.allObjects,a,b);this.showHideReal(this.linesProcessor.allObjects,
a,b)},showHideReal:function(a,b,c){var e;for(e=0;e<a.length;e++){var d=a[e];if(d.groupId==b){var f=d.displayObject;f&&(c?(d.hidden=!1,f.show()):(d.hidden=!0,f.hide()))}}},makeObjectAccessible:function(a){if(a.accessibleLabel){var b=this.formatString(a.accessibleLabel,a);a.displayObject&&this.makeAccessible(a.displayObject,b,"menuitem")}},update:function(){if(d.hasSVG){d.AmMap.base.update.call(this);this.zoomControl&&this.zoomControl.update&&this.zoomControl.update();for(var a=0,b=this.updatableImages.length;a<
b;a++)this.updatableImages[a].update()}},animateMap:function(){var a=this;a.totalFrames=a.zoomDuration*d.updateRate;a.totalFrames+=1;a.frame=0;a.tweenPercent=0;a.balloon.hide(0);setTimeout(function(){a.updateSize.call(a)},1E3/d.updateRate)},updateSize:function(){var a=this,b=a.totalFrames;a.preventHover=!0;a.frame<=b?(a.frame++,b=d.easeOutSine(0,a.frame,0,1,b),1<=b?(b=1,a.preventHover=!1,a.wheelBusy=!1):window.requestAnimationFrame?window.requestAnimationFrame(function(){a.updateSize.call(a)}):setTimeout(function(){a.updateSize.call(a)},
1E3/d.updateRate),.8<b&&(a.preventHover=!1)):(b=1,a.preventHover=!1,a.wheelBusy=!1);a.tweenPercent=b;a.rescaleMapAndObjects()},rescaleMapAndObjects:function(){var a=this.initialScale,b=this.initialX,c=this.initialY,e=this.tweenPercent,a=a+(this.finalScale-a)*e;this.mapContainer.translate(b+(this.finalX-b)*e,c+(this.finalY-c)*e,a,!0);if(this.areasSettings.adjustOutlineThickness){for(var b=this.svgAreas,d=0;d<b.length;d++)(c=b[d])&&c.setAttr("stroke-width",this.areasSettings.outlineThickness/a/this.mapScale);
if(b=this.dataProvider.areas)for(d=0;d<b.length;d++){var c=b[d],f=c.displayObject;f&&f.setAttr("stroke-width",c.outlineThicknessReal/a/this.mapScale)}}this.rescaleObjects();this.positionChanged();this.updateSmallMap();1==e&&this.fire({type:"zoomCompleted",chart:this})},updateSmallMap:function(){this.smallMap&&this.smallMap.update()},rescaleObjects:function(){var a=this.mapContainer.scale,b=this.imagesProcessor.objectsToResize,c;for(c=0;c<b.length;c++){var e=b[c].image,d=b[c].scale,f=b[c].mapImage;
isNaN(f.selectedScaleReal)||f!=this.selectedObject||(f.tempScale=d,d*=f.selectedScaleReal);e.translate(e.x,e.y,d/a,!0)}b=this.imagesProcessor.labelsToReposition;for(c=0;c<b.length;c++)e=b[c],e.imageLabel&&this.imagesProcessor.positionLabel(e.imageLabel,e,e.labelPositionReal);b=this.linesProcessor;if(e=b.linesToResize)for(c=0;c<e.length;c++)d=e[c],d.line.setAttr("stroke-width",d.thickness/a);b=b.objectsToResize;for(c=0;c<b.length;c++)e=b[c],e.translate(e.x,e.y,1/a,!0)},handleTouchEnd:function(a){this.initialDistance=
NaN;this.mouseIsDown=this.isDragging=!1;d.AmMap.base.handleTouchEnd.call(this,a)},handleMouseDown:function(a){d.resetMouseOver();this.mouseIsDown=this.mouseIsOver=!0;this.balloon.hide(0);a&&this.mouseIsOver&&a.preventDefault&&this.panEventsEnabled&&a.preventDefault();if(this.chartCreated&&!this.preventHover&&(this.initialTouchZoom=this.zoomLevel(),this.dragMap&&(this.stopAnimation(),this.mapContainerClickX=this.mapContainer.x,this.mapContainerClickY=this.mapContainer.y),a||(a=window.event),a.shiftKey&&
!0===this.developerMode&&this.getDevInfo(),a&&a.touches)){var b=this.mouseX,c=this.mouseY,e=a.touches.item(1);e&&this.panEventsEnabled&&this.boundingRect&&(a=e.clientX-this.boundingRect.left,e=e.clientY-this.boundingRect.top,this.middleXP=(b+(a-b)/2)/this.realWidth,this.middleYP=(c+(e-c)/2)/this.realHeight,this.initialDistance=Math.sqrt(Math.pow(a-b,2)+Math.pow(e-c,2)))}},stopDrag:function(){this.isDragging=!1},handleReleaseOutside:function(){if(d.isModern){var a=this;d.AmMap.base.handleReleaseOutside.call(a);
a.mouseIsDown=!1;setTimeout(function(){a.resetPinch.call(a)},100);if(!a.preventHover){a.stopDrag();var b=a.zoomControl;b&&b.draggerUp&&b.draggerUp();a.mapWasDragged=!1;var b=a.mapContainer,c=a.mapContainerClickX,e=a.mapContainerClickY;isNaN(c)||isNaN(e)||!(3<Math.abs(b.x-c)||3<Math.abs(b.y-e))||(a.mapWasDragged=!0,b={type:"dragCompleted",zoomX:a.zoomX(),zoomY:a.zoomY(),zoomLevel:a.zoomLevel(),chart:a},a.fire(b));(a.mouseIsOver&&!a.mapWasDragged&&!a.skipClick||a.wasTouched&&3>Math.abs(a.mouseX-a.tmx)&&
3>Math.abs(a.mouseY-a.tmy))&&a.fire({type:"click",x:a.mouseX,y:a.mouseY,chart:a});a.mapContainerClickX=NaN;a.mapContainerClickY=NaN;a.objectWasClicked=!1;a.zoomOnDoubleClick&&a.mouseIsOver&&(b=(new Date).getTime(),200>b-a.previousClickTime&&40<b-a.previousClickTime&&a.doDoubleClickZoom(),a.previousClickTime=b)}a.wasTouched=!1}},resetPinch:function(){this.mapWasPinched=!1},handleMouseMove:function(a){var b=this;d.AmMap.base.handleMouseMove.call(b,a);if(!a||!a.touches||!b.tapToActivate||b.tapped){b.panEventsEnabled&&
b.mouseIsOver&&a&&a.preventDefault&&a.preventDefault();var c=b.previuosMouseX,e=b.previuosMouseY,g=b.mouseX,f=b.mouseY,k=b.zoomControl;isNaN(c)&&(c=g);isNaN(e)&&(e=f);b.mouse2X=NaN;b.mouse2Y=NaN;a&&a.touches&&(a=a.touches.item(1))&&b.panEventsEnabled&&b.boundingRect&&(b.mouse2X=a.clientX-b.boundingRect.left,b.mouse2Y=a.clientY-b.boundingRect.top);if(a=b.mapContainer){var h=b.mouse2X,l=b.mouse2Y;b.pinchTO&&clearTimeout(b.pinchTO);b.pinchTO=setTimeout(function(){b.resetPinch.call(b)},1E3);var m=b.realHeight,
n=b.realWidth,p=b.mapWidth,r=b.mapHeight;b.mouseIsDown&&b.dragMap&&(3<Math.abs(b.previuosMouseX-b.mouseX)||3<Math.abs(b.previuosMouseY-b.mouseY))&&(b.isDragging=!0);if(!isNaN(h)){b.stopDrag();var t=Math.sqrt(Math.pow(h-g,2)+Math.pow(l-f,2)),q=b.initialDistance;isNaN(q)&&(q=Math.sqrt(Math.pow(h-g,2)+Math.pow(l-f,2)));if(!isNaN(q)){var h=b.initialTouchZoom*t/q,h=d.fitToBounds(h,k.minZoomLevel,k.maxZoomLevel),k=b.zoomLevel(),q=b.middleXP,l=b.middleYP,t=m/r,y=n/p,q=(b.zoomX()-q*y)*(h/k)+q*y,l=(b.zoomY()-
l*t)*(h/k)+l*t;.1<Math.abs(h-k)&&(b.zoomTo(h,q,l,!0),b.mapWasPinched=!0,clearTimeout(b.pinchTO))}}h=a.scale;b.isDragging&&(b.balloon.hide(0),b.positionChanged(),c=a.x+(g-c),e=a.y+(f-e),b.preventDragOut&&(r=-r*h+m/2-b.diffY*b.mapScale*h,m=m/2-b.diffY*b.mapScale*h,c=d.fitToBounds(c,-p*h+n/2,n/2),e=d.fitToBounds(e,r,m)),isNaN(c)||isNaN(e)||(a.translate(c,e,h,!0),b.updateSmallMap()));b.previuosMouseX=g;b.previuosMouseY=f}}},selectObject:function(a,b){var c=this;a||(a=c.dataProvider);a.isOver=!1;var e=
a.linkToObject;d.isString(e)&&(e=c.getObjectById(e));a.useTargetsZoomValues&&e&&(a.zoomX=e.zoomX,a.zoomY=e.zoomY,a.zoomLatitude=e.zoomLatitude,a.zoomLongitude=e.zoomLongitude,a.zoomLevel=e.zoomLevel);var g=c.selectedObject;g&&c.returnInitialColor(g);c.selectedObject=a;var f=!1,k,h;"MapArea"==a.objectType&&(a.autoZoomReal&&(f=!0),k=c.areasSettings.selectedOutlineColor,h=c.areasSettings.selectedOutlineThickness);if(e&&!f&&(d.isString(e)&&(e=c.getObjectById(e)),isNaN(a.zoomLevel)&&isNaN(a.zoomX)&&isNaN(a.zoomY))){if(c.extendMapData(e))return;
c.selectObject(e);return}c.allowMultipleDescriptionWindows||c.closeAllDescriptions();clearTimeout(c.selectedObjectTimeOut);clearTimeout(c.processObjectsTimeOut);e=c.zoomDuration;!f&&isNaN(a.zoomLevel)&&isNaN(a.zoomX)&&isNaN(a.zoomY)?(c.showDescriptionAndGetUrl(),b||c.processObjects()):(c.selectedObjectTimeOut=setTimeout(function(){c.showDescriptionAndGetUrl.call(c)},1E3*e+200),c.showObjectsAfterZoom)?b||(c.processObjectsTimeOut=setTimeout(function(){c.processObjects.call(c)},1E3*e+200)):b||c.processObjects();
e=a.displayObject;f=a.selectedColorReal;if("MapImage"==a.objectType){k=c.imagesSettings.selectedOutlineColor;h=c.imagesSettings.selectedOutlineThickness;var e=a.image,l=a.selectedScaleReal;if(!isNaN(l)&&1!=l){var m=a.scale;isNaN(a.tempScale)||(m=a.tempScale);isNaN(m)&&(m=1);a.tempScale=m;var n=a.displayObject;n.translate(n.x,n.y,m*l,!0)}}if(e){if(d.removeCN(c,e,"selected-object"),d.setCN(c,e,"selected-object"),a.bringForwardOnHover&&a.displayObject.toFront(),c.outlinesToFront(),!a.preserveOriginalAttributes){e.setAttr("stroke",
a.outlineColorReal);void 0!==f&&e.setAttr("fill",f);void 0!==k&&e.setAttr("stroke",k);void 0!==h&&e.setAttr("stroke-width",h);"MapLine"==a.objectType&&((l=a.lineSvg)&&l.setAttr("stroke",f),l=a.arrowSvg)&&(l.setAttr("fill",f),l.setAttr("stroke",f));if(l=a.imageLabel)m=a.selectedLabelColorReal,void 0!==m&&l.setAttr("fill",m);a.selectable||(e.setAttr("cursor","default"),l&&l.setAttr("cursor","default"))}}else c.returnInitialColorReal(a);if(e=a.groupId)for(l=a.groupArray,l||(l=c.getGroupById(e),a.groupArray=
l),m=0;m<l.length;m++)if(n=l[m],n.isOver=!1,e=n.displayObject,"MapImage"==n.objectType&&(e=n.image),e){var p=n.selectedColorReal;void 0!==p&&e.setAttr("fill",p);void 0!==k&&e.setAttr("stroke",k);void 0!==h&&e.setAttr("stroke-width",h);"MapLine"==n.objectType&&((e=n.lineSvg)&&e.setAttr("stroke",f),e=n.arrowSvg)&&(e.setAttr("fill",f),e.setAttr("stroke",f))}c.rescaleObjects();c.zoomToSelectedObject();g!=a&&c.fire({type:"selectedObjectChanged",chart:c})},returnInitialColor:function(a,b){this.returnInitialColorReal(a);
b&&(a.isFirst=!1);if(this.selectedObject.bringForwardOnHover){var c=this.selectedObject.displayObject;c&&c.toFront()}if(c=a.groupId){var c=this.getGroupById(c),d;for(d=0;d<c.length;d++)this.returnInitialColorReal(c[d]),b&&(c[d].isFirst=!1)}this.outlinesToFront()},outlinesToFront:function(){if(this.outlines)for(var a=0;a<this.outlines.length;a++)this.outlines[a].toFront()},closeAllDescriptions:function(){this.descriptionsDiv.innerHTML=""},fireClosed:function(){this.fire({type:"descriptionClosed",chart:this})},
returnInitialColorReal:function(a){a.isOver=!1;var b=a.displayObject;if(b){d.removeCN(this,b,"selected-object");b.toPrevious();if("MapImage"==a.objectType){var c=a.tempScale;isNaN(c)||b.translate(b.x,b.y,c,!0);a.tempScale=NaN;b=a.image}c=a.colorReal;if("MapLine"==a.objectType){var e=a.lineSvg;e&&e.setAttr("stroke",c);if(e=a.arrowSvg){var g=a.arrowColor;void 0===g&&(g=c);e.setAttr("fill",g);e.setAttr("stroke",g)}}var e=a.alphaReal,g=a.outlineAlphaReal,f=a.outlineThicknessReal,k=a.outlineColorReal;
if(a.showAsSelected){var c=a.selectedColorReal,h,l;"MapImage"==a.objectType&&(h=this.imagesSettings.selectedOutlineColor,l=this.imagesSettings.selectedOutlineThickness);"MapArea"==a.objectType&&(h=this.areasSettings.selectedOutlineColor,l=this.areasSettings.selectedOutlineThickness);void 0!==h&&(k=h);void 0!==l&&(f=l)}"bubble"==a.type&&(c=void 0);void 0!==c&&b.setAttr("fill",c);if(h=a.image)h.setAttr("fill",c),h.setAttr("stroke",k),h.setAttr("stroke-width",f),h.setAttr("fill-opacity",e),h.setAttr("stroke-opacity",
g);"MapArea"==a.objectType&&(c=1,this.areasSettings.adjustOutlineThickness&&(c=this.zoomLevel()*this.mapScale),b.setAttr("stroke",k),b.setAttr("stroke-width",f/c),b.setAttr("fill-opacity",e),b.setAttr("stroke-opacity",g));(c=a.pattern)&&b.pattern(c,this.mapScale,this.path);(b=a.imageLabel)&&!a.labelInactive&&(a.showAsSelected&&void 0!==a.selectedLabelColor?b.setAttr("fill",a.selectedLabelColor):b.setAttr("fill",a.labelColorReal))}},zoomToRectangle:function(a,b,c,e){var g=this.realWidth,f=this.realHeight,
k=this.mapSet.scale,h=this.zoomControl,g=d.fitToBounds(c/g>e/f?.8*g/(c*k):.8*f/(e*k),h.minZoomLevel,h.maxZoomLevel);this.zoomToMapXY(g,(a+c/2)*k,(b+e/2)*k)},zoomToLatLongRectangle:function(a,b,c,e){var g=this.dataProvider,f=this.zoomControl,k=Math.abs(c-a),h=Math.abs(b-e),l=Math.abs(g.rightLongitude-g.leftLongitude),g=Math.abs(g.topLatitude-g.bottomLatitude),f=d.fitToBounds(k/l>h/g?.8*l/k:.8*g/h,f.minZoomLevel,f.maxZoomLevel);this.zoomToLongLat(f,a+(c-a)/2,e+(b-e)/2)},getGroupById:function(a){var b=
[];this.getGroup(this.imagesProcessor.allObjects,a,b);this.getGroup(this.linesProcessor.allObjects,a,b);this.getGroup(this.areasProcessor.allObjects,a,b);return b},zoomToGroup:function(a){a="object"==typeof a?a:this.getGroupById(a);var b,c,d,g,f;for(f=0;f<a.length;f++){var k=a[f].displayObject;if(k){var h=k.getBBox(),k=h.y,l=h.y+h.height,m=h.x,h=h.x+h.width;if(k<b||isNaN(b))b=k;if(l>g||isNaN(g))g=l;if(m<c||isNaN(c))c=m;if(h>d||isNaN(d))d=h}}c+=this.diffX;d+=this.diffX;g+=this.diffY;b+=this.diffY;
this.zoomToRectangle(c,b,d-c,g-b)},getGroup:function(a,b,c){if(a){var d;for(d=0;d<a.length;d++){var g=a[d];g.groupId==b&&c.push(g)}}},zoomToStageXY:function(a,b,c,e){if(!this.objectWasClicked){var g=this.zoomControl;a=d.fitToBounds(a,g.minZoomLevel,g.maxZoomLevel);var g=this.zoomLevel(),f=this.mapSet.getBBox();b=this.xyToCoordinates((b-this.mapContainer.x)/g-f.x*this.mapScale,(c-this.mapContainer.y)/g-f.y*this.mapScale);this.zoomToLongLat(a,b.longitude,b.latitude,e)}},zoomToLongLat:function(a,b,c,
d){b=this.coordinatesToXY(b,c);this.zoomToMapXY(a,b.x,b.y,d)},zoomToMapXY:function(a,b,c,d){var g=this.mapWidth,f=this.mapHeight;this.zoomTo(a,-(b/g)*a+this.realWidth/g/2,-(c/f)*a+this.realHeight/f/2,d)},zoomToObject:function(a){if(a){var b=a.zoomLatitude,c=a.zoomLongitude;isNaN(a.zoomLatitudeC)||(b=a.zoomLatitudeC);isNaN(a.zoomLongitudeC)||(c=a.zoomLongitudeC);var e=a.zoomLevel,g=this.zoomInstantly,f=a.zoomX,k=a.zoomY,h=this.realWidth,l=this.realHeight;isNaN(e)||(isNaN(b)||isNaN(c)?this.zoomTo(e,
f,k,g):this.zoomToLongLat(e,c,b,g));this.zoomInstantly=!1;"MapImage"==a.objectType&&isNaN(a.zoomX)&&isNaN(a.zoomY)&&isNaN(a.zoomLatitude)&&isNaN(a.zoomLongitude)&&!isNaN(a.latitude)&&!isNaN(a.longitude)&&this.zoomToLongLat(a.zoomLevel,a.longitude,a.latitude);"MapArea"==a.objectType&&(g=a.displayObject.getBBox(),f=this.mapScale,b=(g.x+this.diffX)*f,c=(g.y+this.diffY)*f,e=g.width*f,g=g.height*f,h=a.autoZoomReal&&isNaN(a.zoomLevel)?e/h>g/l?.8*h/e:.8*l/g:a.zoomLevel,l=this.zoomControl,h=d.fitToBounds(h,
l.minZoomLevel,l.maxZoomLevel),isNaN(a.zoomX)&&isNaN(a.zoomY)&&isNaN(a.zoomLatitude)&&isNaN(a.zoomLongitude)&&this.zoomToMapXY(h,b+e/2,c+g/2));this.zoomControl.update()}},zoomToSelectedObject:function(){this.zoomToObject(this.selectedObject)},zoomTo:function(a,b,c,e){var g=this.zoomControl;a=d.fitToBounds(a,g.minZoomLevel,g.maxZoomLevel);g=this.zoomLevel();isNaN(b)&&(b=this.realWidth/this.mapWidth,b=(this.zoomX()-.5*b)*(a/g)+.5*b);isNaN(c)&&(c=this.realHeight/this.mapHeight,c=(this.zoomY()-.5*c)*
(a/g)+.5*c);this.stopAnimation();isNaN(a)||(g=this.mapContainer,this.initialX=g.x,this.initialY=g.y,this.initialScale=g.scale,this.finalX=this.mapWidth*b,this.finalY=this.mapHeight*c,this.finalScale=a,this.finalX!=this.initialX||this.finalY!=this.initialY||this.finalScale!=this.initialScale?e?(this.tweenPercent=1,this.rescaleMapAndObjects(),this.wheelBusy=!1):this.animateMap():this.wheelBusy=!1)},loadXml:function(a){var b;window.XMLHttpRequest&&(b=new XMLHttpRequest);b.overrideMimeType&&b.overrideMimeType("text/xml");
b.open("GET",a,!1);b.send();this.parseXMLObject(b.responseXML);this.svgData&&this.buildEverything()},stopAnimation:function(){this.frame=this.totalFrames},processObjects:function(a){var b=this.selectedObject;if(0<b.images.length||0<b.areas.length||0<b.lines.length||b==this.dataProvider||a){a=this.container;var c=this.stageImagesContainer;c&&c.remove();this.stageImagesContainer=c=a.set();this.trendLinesSet.push(c);var d=this.stageLinesContainer;d&&d.remove();this.stageLinesContainer=d=a.set();this.trendLinesSet.push(d);
var g=this.mapImagesContainer;g&&g.remove();this.mapImagesContainer=g=a.set();this.mapContainer.push(g);var f=this.mapLinesContainer;f&&f.remove();this.mapLinesContainer=f=a.set();this.mapContainer.push(f);this.linesAboveImages?(g.toFront(),c.toFront(),f.toFront(),d.toFront()):(f.toFront(),d.toFront(),g.toFront(),c.toFront());b&&(this.imagesProcessor.reset(),this.linesProcessor.reset(),this.linesAboveImages?(this.imagesProcessor.process(b),this.linesProcessor.process(b)):(this.linesProcessor.process(b),
this.imagesProcessor.process(b)));this.rescaleObjects()}},processAreas:function(){this.areasProcessor.process(this.dataProvider)},buildSVGMap:function(){d.remove(this.mapSet);var a=this.svgData.g.path,b=this.container,c=b.set();this.svgAreas=[];this.svgAreasById={};void 0===a.length&&(a=[a]);var e;for(e=0;e<a.length;e++){var g=a[e],f=g.d,k=g.title;g.titleTr&&(k=g.titleTr);var h=b.path(f);h.id=g.id;if(this.areasSettings.preserveOriginalAttributes){h.customAttr={};for(var l in g)"d"!=l&&"id"!=l&&"title"!=
l&&(h.customAttr[l]=g[l])}g.outline&&(h.outline=!0);h.path=f;this.svgAreasById[g.id]={area:h,title:k,className:g["class"]};this.svgAreas.push(h);c.push(h)}this.mapSet=c;this.mapContainer.push(c);this.resizeMap()},centerAlign:function(){},setProjection:function(a){this.projection=a;this.chartCreated=!1;this.buildEverything()},addObjectEventListeners:function(a,b){var c=this;a.mousedown(function(a){c.mouseDownMapObject(b,a)}).mouseup(function(a){c.clickMapObject(b,a)}).mouseover(function(a){c.balloonX=
NaN;c.rollOverMapObject(b,!0,a)}).mouseout(function(a){c.balloonX=NaN;c.rollOutMapObject(b,a)}).touchend(function(a){4>Math.abs(c.mouseX-c.tmx)&&4>Math.abs(c.mouseY-c.tmy)&&(c.tapped=!0);c.tapToActivate&&!c.tapped||c.mapWasDragged||c.mapWasPinched||(c.balloonX=NaN,c.rollOverMapObject(b,!0,a),c.clickMapObject(b,a))}).touchstart(function(a){c.tmx=c.mouseX;c.tmy=c.mouseY;c.mouseDownMapObject(b,a)}).keyup(function(a){13==a.keyCode&&c.clickMapObject(b,a)}).focus(function(a){var d,f;"MapImage"!=b.objectType||
isNaN(b.longitude)||(d=b.longitude,f=b.latitude);"MapArea"==b.objectType&&(d=c.getAreaCenterLongitude(b),f=c.getAreaCenterLatitude(b));d=c.coordinatesToStageXY(d,f);c.balloonX=d.x;c.balloonY=d.y;c.rollOverMapObject(b,!0,a);c.focusedItem=b}).blur(function(a){c.rollOutMapObject(b,a);c.focusedItem=void 0})},checkIfSelected:function(a){var b=this.selectedObject;if(b==a)return!0;if(b=b.groupId){var b=this.getGroupById(b),c;for(c=0;c<b.length;c++)if(b[c]==a)return!0}return!1},clearMap:function(){this.chartDiv.innerHTML=
"";this.clearObjectList()},clearObjectList:function(){var a=this.objectList;a&&a.div&&(a.div.innerHTML="")},checkIfLast:function(a){if(a){var b=a.parentNode;if(b&&b.lastChild==a)return!0}return!1},showAsRolledOver:function(a){var b=a.displayObject;if(!a.showAsSelected&&b&&!a.isOver){b.node.onmouseout=function(){};b.node.onmouseover=function(){};b.node.onclick=function(){};!a.isFirst&&a.bringForwardOnHover&&(b.toFront(),a.isFirst=!0);var c=a.rollOverColorReal,e;a.preserveOriginalAttributes&&(c=void 0);
"bubble"==a.type&&(c=void 0);void 0==c&&(isNaN(a.rollOverBrightnessReal)||(c=d.adjustLuminosity(a.colorReal,a.rollOverBrightnessReal/100)));if(void 0!=c)if("MapImage"==a.objectType)(e=a.image)&&e.setAttr("fill",c);else if("MapLine"==a.objectType){if((e=a.lineSvg)&&e.setAttr("stroke",c),e=a.arrowSvg)e.setAttr("fill",c),e.setAttr("stroke",c)}else b.setAttr("fill",c);(c=a.imageLabel)&&!a.labelInactive&&(e=a.labelRollOverColorReal,void 0!=e&&c.setAttr("fill",e));c=a.rollOverOutlineColorReal;void 0!=c&&
("MapImage"==a.objectType?(e=a.image)&&e.setAttr("stroke",c):b.setAttr("stroke",c));"MapImage"==a.objectType?(c=this.imagesSettings.rollOverOutlineThickness,(e=a.image)&&(isNaN(c)||e.setAttr("stroke-width",c))):(c=this.areasSettings.rollOverOutlineThickness,isNaN(c)||b.setAttr("stroke-width",c));if("MapArea"==a.objectType){c=this.areasSettings;e=a.rollOverAlphaReal;isNaN(e)||b.setAttr("fill-opacity",e);e=c.rollOverOutlineAlpha;isNaN(e)||b.setAttr("stroke-opacity",e);e=1;this.areasSettings.adjustOutlineThickness&&
(e=this.zoomLevel()*this.mapScale);var g=c.rollOverOutlineThickness;isNaN(g)||b.setAttr("stroke-width",g/e);(c=c.rollOverPattern)&&b.pattern(c,this.mapScale,this.path)}"MapImage"==a.objectType&&(c=a.rollOverScaleReal,isNaN(c)||1==c||(e=b.scale,isNaN(e)&&(e=1),a.tempScale=e,b.translate(b.x,b.y,e*c,!0)));this.useHandCursorOnClickableOjects&&this.checkIfClickable(a)&&b.setAttr("cursor","pointer");a.mouseEnabled&&this.addObjectEventListeners(b,a);a.isOver=!0}this.outlinesToFront()},rollOverMapObject:function(a,
b,c){if(this.chartCreated){this.handleMouseMove();var d=this.previouslyHovered;d&&d!=a?(!1===this.checkIfSelected(d)&&(this.returnInitialColor(d,!0),this.previouslyHovered=null),this.balloon.hide(0)):clearTimeout(this.hoverInt);if(!this.preventHover){if(!1===this.checkIfSelected(a)){if(d=a.groupId){var d=this.getGroupById(d),g;for(g=0;g<d.length;g++)d[g]!=a&&this.showAsRolledOver(d[g])}this.showAsRolledOver(a)}else(d=a.displayObject)&&(this.allowClickOnSelectedObject?d.setAttr("cursor","pointer"):
d.setAttr("cursor","default"));this.showDescriptionOnHover?this.showDescription(a):!this.showBalloonOnSelectedObject&&this.checkIfSelected(a)||!1===b||(g=this.balloon,this.balloon.fixedPosition=!1,b=a.colorReal,d="",void 0!==b&&this.useObjectColorForBalloon||(b=g.fillColor),(g=a.balloonTextReal)&&(d=this.formatString(g,a)),this.balloonLabelFunction&&(d=this.balloonLabelFunction(a,this)),d&&""!==d&&this.showBalloon(d,b,!1,this.balloonX,this.balloonY));c={type:"rollOverMapObject",mapObject:a,chart:this,
event:c};a.isOver=!0;this.fire(c);this.previouslyHovered=a}}},longitudeToX:function(a){return(this.longitudeToCoordinate(a)+this.diffX*this.mapScale)*this.zoomLevel()+this.mapContainer.x},latitudeToY:function(a){return(this.latitudeToCoordinate(a)+this.diffY*this.mapScale)*this.zoomLevel()+this.mapContainer.y},latitudeToStageY:function(a){return this.latitudeToCoordinate(a)*this.zoomLevel()+this.mapContainer.y+this.diffY*this.mapScale},longitudeToStageX:function(a){return this.longitudeToCoordinate(a)*
this.zoomLevel()+this.mapContainer.x+this.diffX*this.mapScale},stageXToLongitude:function(a){a=(a-this.mapContainer.x)/this.zoomLevel();return this.coordinateToLongitude(a)},stageYToLatitude:function(a){a=(a-this.mapContainer.y)/this.zoomLevel();return this.coordinateToLatitude(a)},rollOutMapObject:function(a,b){this.hideBalloon();if(a&&this.chartCreated&&a.isOver){this.checkIfSelected(a)||this.returnInitialColor(a);var c={type:"rollOutMapObject",mapObject:a,chart:this,event:b};a.isOver=!1;this.fire(c)}},
formatString:function(a,b){var c=this.nf,e=this.pf,g=b.title;b.titleTr&&(g=b.titleTr);void 0==g&&(g="");var f=b.value,f=isNaN(f)?"":d.formatNumber(f,c),c=b.percents,c=isNaN(c)?"":d.formatNumber(c,e),e=b.description;void 0==e&&(e="");var k=b.customData;void 0==k&&(k="");return a=d.massReplace(a,{"[[title]]":g,"[[value]]":f,"[[percent]]":c,"[[description]]":e,"[[customData]]":k})},mouseDownMapObject:function(a,b){this.fire({type:"mouseDownMapObject",mapObject:a,chart:this,event:b})},clickMapObject:function(a,
b){var c=this;b&&(b.touches||isNaN(a.zoomLevel)&&isNaN(a.zoomX)&&isNaN(a.zoomY)||c.hideBalloon());if(c.chartCreated&&!c.preventHover&&c.checkTouchDuration(b)&&!c.mapWasDragged&&c.checkIfClickable(a)&&!c.mapWasPinched){c.selectObject(a);var d=c.zoomLevel(),g=c.mapSet.getBBox(),d=c.xyToCoordinates((c.mouseX-c.mapContainer.x)/d-g.x*c.mapScale,(c.mouseY-c.mapContainer.y)/d-g.y*c.mapScale);c.clickLatitude=d.latitude;c.clickLongitude=d.longitude;b&&b.touches&&setTimeout(function(){c.showBalloonAfterZoom.call(c)},
1E3*c.zoomDuration);c.fire({type:"clickMapObject",mapObject:a,chart:c,event:b});c.objectWasClicked=!0}},showBalloonAfterZoom:function(){var a=this.clickLongitude,b=this.clickLatitude,c=this.selectedObject;"MapImage"!=c.objectType||isNaN(c.longitude)||(a=c.longitude,b=c.latitude);a=this.coordinatesToStageXY(a,b);this.balloonX=a.x;this.balloonY=a.y;this.rollOverMapObject(this.selectedObject,!0)},checkIfClickable:function(a){var b=this.allowClickOnSelectedObject;return this.selectedObject==a&&b?!0:this.selectedObject!=
a||b?!0===a.selectable||"MapArea"==a.objectType&&a.autoZoomReal||a.url||a.linkToObject||0<a.images.length||0<a.lines.length||!isNaN(a.zoomLevel)||!isNaN(a.zoomX)||!isNaN(a.zoomY)||a.description?!0:!1:!1},resizeMap:function(){var a=this.mapSet;if(a){var b=1,c=a.getBBox(),d=this.realWidth,g=this.realHeight,f=c.width,c=c.height;0<f&&0<c&&(this.fitMapToContainer&&(b=f/d>c/g?d/f:g/c),a.translate(0,0,b,!0),this.mapScale=b,this.mapHeight=c*b,this.mapWidth=f*b)}},zoomIn:function(){var a=this.zoomLevel()*
this.zoomControl.zoomFactor;this.zoomTo(a)},zoomOut:function(){var a=this.zoomLevel()/this.zoomControl.zoomFactor;this.zoomTo(a)},moveLeft:function(){var a=this.zoomX()+this.zoomControl.panStepSize;this.zoomTo(this.zoomLevel(),a,this.zoomY())},moveRight:function(){var a=this.zoomX()-this.zoomControl.panStepSize;this.zoomTo(this.zoomLevel(),a,this.zoomY())},moveUp:function(){var a=this.zoomY()+this.zoomControl.panStepSize;this.zoomTo(this.zoomLevel(),this.zoomX(),a)},moveDown:function(){var a=this.zoomY()-
this.zoomControl.panStepSize;this.zoomTo(this.zoomLevel(),this.zoomX(),a)},zoomX:function(){return this.mapSet?Math.round(1E4*this.mapContainer.x/this.mapWidth)/1E4:NaN},zoomY:function(){return this.mapSet?Math.round(1E4*this.mapContainer.y/this.mapHeight)/1E4:NaN},goHome:function(){this.selectObject(this.dataProvider);this.fire({type:"homeButtonClicked",chart:this})},zoomLevel:function(){return Math.round(1E5*this.mapContainer.scale)/1E5},showDescriptionAndGetUrl:function(){var a=this.selectedObject;
if(a){this.showDescription();var b=a.url;if(b)d.getURL(b,a.urlTarget);else if(b=a.linkToObject){if(d.isString(b)){var c=this.getObjectById(b);if(c){this.selectObject(c);return}}b&&a.passZoomValuesToTarget&&(b.zoomLatitude=this.zoomLatitude(),b.zoomLongitude=this.zoomLongitude(),b.zoomLevel=this.zoomLevel());this.extendMapData(b)||this.selectObject(b)}}},extendMapData:function(a){var b=a.objectType;if("MapImage"!=b&&"MapArea"!=b&&"MapLine"!=b)return d.extend(a,new d.MapData,!0),this.dataProvider=a,
this.zoomInstantly=!0,this.validateData(),!0},showDescription:function(a){a||(a=this.selectedObject);this.allowMultipleDescriptionWindows||this.closeAllDescriptions();if(a.description){var b=a.descriptionWindow;b&&b.close();b=new d.DescriptionWindow;a.descriptionWindow=b;var c=a.descriptionWindowWidth,e=a.descriptionWindowHeight,g=a.descriptionWindowLeft,f=a.descriptionWindowTop,k=a.descriptionWindowRight,h=a.descriptionWindowBottom;isNaN(k)||(g=this.realWidth-k);isNaN(h)||(f=this.realHeight-h);var l=
a.descriptionWindowX;isNaN(l)||(g=l);l=a.descriptionWindowY;isNaN(l)||(f=l);isNaN(g)&&(g=this.mouseX,g=g>this.realWidth/2?g-c-20:g+20);isNaN(f)&&(f=this.mouseY);b.maxHeight=e;l=a.title;a.titleTr&&(l=a.titleTr);b.show(this,this.descriptionsDiv,a.description,l);a=b.div.style;a.position="absolute";a.width=c+"px";a.maxHeight=e+"px";isNaN(h)||(f-=b.div.offsetHeight);isNaN(k)||(g-=b.div.offsetWidth);a.left=g+"px";a.top=f+"px"}},parseXMLObject:function(a){var b={root:{}};this.parseXMLNode(b,"root",a);this.svgData=
b.root.svg;this.getBounds()},getBounds:function(){var a=this.dataProvider;try{var b=this.svgData.defs["amcharts:ammap"];a.leftLongitude=Number(b.leftLongitude);a.rightLongitude=Number(b.rightLongitude);a.topLatitude=Number(b.topLatitude);a.bottomLatitude=Number(b.bottomLatitude);a.projection=b.projection;var c=b.wrappedLongitudes;c&&(a.rightLongitude+=360);a.wrappedLongitudes=c}catch(d){}},recalcLongitude:function(a){return this.dataProvider.wrappedLongitudes?a<this.dataProvider.leftLongitude?Number(a)+
360:a:a},latitudeToCoordinate:function(a){var b,c=this.dataProvider;if(this.mapSet){b=c.topLatitude;var d=c.bottomLatitude;"mercator"==c.projection&&(a=this.mercatorLatitudeToCoordinate(a),b=this.mercatorLatitudeToCoordinate(b),d=this.mercatorLatitudeToCoordinate(d));b=(a-b)/(d-b)*this.mapHeight}return b},longitudeToCoordinate:function(a){a=this.recalcLongitude(a);var b,c=this.dataProvider;this.mapSet&&(b=c.leftLongitude,b=(a-b)/(c.rightLongitude-b)*this.mapWidth);return b},mercatorLatitudeToCoordinate:function(a){89.5<
a&&(a=89.5);-89.5>a&&(a=-89.5);a=d.degreesToRadians(a);return d.radiansToDegrees(.5*Math.log((1+Math.sin(a))/(1-Math.sin(a)))/2)},zoomLatitude:function(){if(this.mapContainer){var a=this.mapSet.getBBox(),b=(-this.mapContainer.x+this.previousWidth/2)/this.zoomLevel()-a.x*this.mapScale,a=(-this.mapContainer.y+this.previousHeight/2)/this.zoomLevel()-a.y*this.mapScale;return this.xyToCoordinates(b,a).latitude}},zoomLongitude:function(){if(this.mapContainer){var a=this.mapSet.getBBox(),b=(-this.mapContainer.x+
this.previousWidth/2)/this.zoomLevel()-a.x*this.mapScale,a=(-this.mapContainer.y+this.previousHeight/2)/this.zoomLevel()-a.y*this.mapScale;return this.xyToCoordinates(b,a).longitude}},getAreaCenterLatitude:function(a){a=a.displayObject.getBBox();var b=this.mapScale,c=this.mapSet.getBBox();return this.xyToCoordinates((a.x+a.width/2+this.diffX)*b-c.x*b,(a.y+a.height/2+this.diffY)*b-c.y*b).latitude},getAreaCenterLongitude:function(a){a=a.displayObject.getBBox();var b=this.mapScale,c=this.mapSet.getBBox();
return this.xyToCoordinates((a.x+a.width/2+this.diffX)*b-c.x*b,(a.y+a.height/2+this.diffY)*b-c.y*b).longitude},milesToPixels:function(a){var b=this.dataProvider;return this.mapWidth/(b.rightLongitude-b.leftLongitude)*a/69.172},kilometersToPixels:function(a){var b=this.dataProvider;return this.mapWidth/(b.rightLongitude-b.leftLongitude)*a/111.325},handleBackgroundClick:function(){if(this.backgroundZoomsToTop&&!this.mapWasDragged){var a=this.dataProvider;if(this.checkIfClickable(a))this.clickMapObject(a);
else{var b=a.zoomX,c=a.zoomY,d=a.zoomLongitude,g=a.zoomLatitude,a=a.zoomLevel;isNaN(b)||isNaN(c)||this.zoomTo(a,b,c);isNaN(d)||isNaN(g)||this.zoomToLongLat(a,d,g,!0)}}},parseXMLNode:function(a,b,c,d){void 0===d&&(d="");var g,f,k;if(c){var h=c.childNodes.length;for(g=0;g<h;g++){f=c.childNodes[g];var l=f.nodeName,m=f.nodeValue?this.trim(f.nodeValue):"",n=!1;f.attributes&&0<f.attributes.length&&(n=!0);if(0!==f.childNodes.length||""!==m||!1!==n)if(3==f.nodeType||4==f.nodeType){if(""!==m){f=0;for(k in a[b])a[b].hasOwnProperty(k)&&
f++;f?a[b]["#text"]=m:a[b]=m}}else if(1==f.nodeType){var p;void 0!==a[b][l]?void 0===a[b][l].length?(p=a[b][l],a[b][l]=[],a[b][l].push(p),a[b][l].push({}),p=a[b][l][1]):"object"==typeof a[b][l]&&(a[b][l].push({}),p=a[b][l][a[b][l].length-1]):(a[b][l]={},p=a[b][l]);if(f.attributes&&f.attributes.length)for(m=0;m<f.attributes.length;m++)p[f.attributes[m].name]=f.attributes[m].value;void 0!==a[b][l].length?this.parseXMLNode(a[b][l],a[b][l].length-1,f,d+"  "):this.parseXMLNode(a[b],l,f,d+"  ")}}f=0;c=
"";for(k in a[b])"#text"==k?c=a[b][k]:f++;0===f&&void 0===a[b].length&&(a[b]=c)}},doDoubleClickZoom:function(){if(!this.mapWasDragged){var a=this.zoomLevel()*this.zoomControl.zoomFactor;this.zoomToStageXY(a,this.mouseX,this.mouseY)}},getDevInfo:function(){var a=this.zoomLevel(),b=this.mapSet.getBBox(),b=this.xyToCoordinates((this.mouseX-this.mapContainer.x)/a-b.x*this.mapScale,(this.mouseY-this.mapContainer.y)/a-b.y*this.mapScale),a={chart:this,type:"writeDevInfo",zoomLevel:a,zoomX:this.zoomX(),zoomY:this.zoomY(),
zoomLatitude:this.zoomLatitude(),zoomLongitude:this.zoomLongitude(),latitude:b.latitude,longitude:b.longitude,left:this.mouseX,top:this.mouseY,right:this.realWidth-this.mouseX,bottom:this.realHeight-this.mouseY,percentLeft:Math.round(this.mouseX/this.realWidth*100)+"%",percentTop:Math.round(this.mouseY/this.realHeight*100)+"%",percentRight:Math.round((this.realWidth-this.mouseX)/this.realWidth*100)+"%",percentBottom:Math.round((this.realHeight-this.mouseY)/this.realHeight*100)+"%"},b="zoomLevel:"+
a.zoomLevel+", zoomLongitude:"+a.zoomLongitude+", zoomLatitude:"+a.zoomLatitude+"\n",b=b+("zoomX:"+a.zoomX+", zoomY:"+a.zoomY+"\n"),b=b+("latitude:"+a.latitude+", longitude:"+a.longitude+"\n"),b=b+("left:"+a.left+", top:"+a.top+"\n"),b=b+("right:"+a.right+", bottom:"+a.bottom+"\n"),b=b+("left:"+a.percentLeft+", top:"+a.percentTop+"\n"),b=b+("right:"+a.percentRight+", bottom:"+a.percentBottom+"\n");a.str=b;this.fire(a);return a},getXY:function(a,b,c){void 0!==a&&(-1!=String(a).indexOf("%")?(a=Number(a.split("%").join("")),
c&&(a=100-a),a=Number(a)*b/100):c&&(a=b-a));return a},getObjectById:function(a){var b=this.dataProvider;if(b.areas){var c=this.getObject(a,b.areas);if(c)return c}if(c=this.getObject(a,b.images))return c;if(a=this.getObject(a,b.lines))return a},getObject:function(a,b){if(b){var c;for(c=0;c<b.length;c++){var d=b[c];if(d.id==a)return d;if(d.areas){var g=this.getObject(a,d.areas);if(g)return g}if(g=this.getObject(a,d.images))return g;if(d=this.getObject(a,d.lines))return d}}},parseData:function(){var a=
this.dataProvider;this.processObject(a.areas,a,"area");this.processObject(a.images,a,"image");this.processObject(a.lines,a,"line")},processObject:function(a,b,c){if(a){var e;for(e=0;e<a.length;e++){var g=a[e];g.parentObject=b;"area"==c&&d.extend(g,new d.MapArea(this.theme),!0);"image"==c&&(g=d.extend(g,new d.MapImage(this.theme),!0));"line"==c&&(g=d.extend(g,new d.MapLine(this.theme),!0));a[e]=g;g.areas&&this.processObject(g.areas,g,"area");g.images&&this.processObject(g.images,g,"image");g.lines&&
this.processObject(g.lines,g,"line")}}},positionChanged:function(){var a={type:"positionChanged",zoomX:this.zoomX(),zoomY:this.zoomY(),zoomLevel:this.zoomLevel(),chart:this};this.fire(a)},getX:function(a,b){return this.getXY(a,this.realWidth,b)},getY:function(a,b){return this.getXY(a,this.realHeight,b)},trim:function(a){if(a){var b;for(b=0;b<a.length;b++)if(-1===" \n\r\t\f\x0B\u00a0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u2028\u2029\u3000".indexOf(a.charAt(b))){a=
a.substring(b);break}for(b=a.length-1;0<=b;b--)if(-1===" \n\r\t\f\x0B\u00a0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u2028\u2029\u3000".indexOf(a.charAt(b))){a=a.substring(0,b+1);break}return-1===" \n\r\t\f\x0B\u00a0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u2028\u2029\u3000".indexOf(a.charAt(0))?a:""}},destroy:function(){d.AmMap.base.destroy.call(this)},x2c:function(a){var b=this.dataProvider.leftLongitude;return Math.round(this.unscaledMapWidth*
(a-b)/(this.dataProvider.rightLongitude-b)*100)/100},y2c:function(a){var b=this.dataProvider.topLatitude;return Math.round(this.unscaledMapHeight*(a-b)/(this.dataProvider.bottomLatitude-b)*100)/100},normalize:function(a){if(!a.pathsArray){var b;if(a.normalized)b=a.normalized;else{var c=d.normalizePath(a.node);b=a.node.getAttribute("d");a.normalized=b;c.maxX>this.maxMapX&&(this.maxMapX=c.maxX);c.minX<this.minMapX&&(this.minMapX=c.minX);c.maxY>this.maxMapY&&(this.maxMapY=c.maxY);c.minY<this.minMapY&&
(this.minMapY=c.minY)}a.node.setAttribute("d",b)}},redraw:function(a){var b=a.normalized,b=b.split(" Z").join(""),b=b.split("M");a.pathsArray=[];for(var c=0;c<b.length;c++){var d=b[c];if(d){for(var d=d.split("L"),g=[],f=0;f<d.length;f++)if(d[f]){var k=d[f].split(" "),k=this.xyToCoordinates(Number(k[1])-this.minMapX,Number(k[2])-this.minMapY,this.dpProjectionFunction,this.sourceMapWidth,this.sourceMapHeight);g.push([k.longitude,k.latitude])}a.pathsArray.push(g)}}b="";for(c=0;c<a.pathsArray.length;c++)b+=
this.redrawArea(a.pathsArray[c]);a.node.setAttribute("d",b);a.path=b},redrawArea:function(a){for(var b=!1,c="",e=0;e<a.length;e++){var g=a[e][0],f=a[e][1],k=d.degreesToRadians(a[e][0]),h=d.degreesToRadians(a[e][1]),h=this.projectionFunction(k,h),k=d.roundTo(this.x2c(d.radiansToDegrees(h[0])),3),h=d.roundTo(this.y2c(d.radiansToDegrees(h[1])),3);k<this.minMapXX&&(this.minMapXX=k,this.leftLongLat={longitude:g,latitude:f});k>this.maxMapXX&&(this.maxMapXX=k,this.rightLongLat={longitude:g,latitude:f});
h<this.minMapYY&&(this.minMapYY=h,this.topLongLat={longitude:g,latitude:f});h>this.maxMapYY&&(this.maxMapYY=h,this.bottomLongLat={longitude:g,latitude:f});b?c+=" L ":(c+=" M ",b=!0);c+=k+" "+h}return c+" Z "},normalizeMap:function(){var a=d.degreesToRadians(this.dataProvider.leftLongitude),b=d.degreesToRadians(this.dataProvider.rightLongitude),c=d.degreesToRadians(this.dataProvider.topLatitude),e=d.degreesToRadians(this.dataProvider.bottomLatitude),g=a+(b-a)/2,f=c+(e-c)/2,k=this.dpProjectionFunction(g,
c)[1],h=this.dpProjectionFunction(g,e)[1],l=this.dpProjectionFunction(a,f)[0],m=this.dpProjectionFunction(b,f)[0],c=d.equirectangular(g,c),e=d.equirectangular(g,e),k=(c[1]-e[1])/(k-h),a=d.equirectangular(a,f),b=d.equirectangular(b,f),l=(a[0]-b[0])/(l-m);this.minMapX=Infinity;this.maxMapX=-Infinity;this.minMapY=Infinity;this.maxMapY=-Infinity;for(m=0;m<this.svgAreas.length;m++)this.normalize(this.svgAreas[m]);this.sourceMapHeight=Math.abs(this.maxMapY-this.minMapY);this.sourceMapWidth=Math.abs(this.maxMapX-
this.minMapX);this.unscaledMapWidth=this.sourceMapWidth*l;this.unscaledMapHeight=this.sourceMapHeight*k;this.diffY=this.diffX=0},fixMapPosition:function(){var a=d.degreesToRadians(this.dataProvider.leftLongitude),b=d.degreesToRadians(this.dataProvider.rightLongitude),c=d.degreesToRadians(this.dataProvider.topLatitude),e=d.degreesToRadians(this.dataProvider.bottomLatitude),g=a+(b-a)/2,f=c+(e-c)/2,k=this.dpProjectionFunction(g,c)[1],h=this.dpProjectionFunction(g,e)[1],l=this.dpProjectionFunction(a,
f)[0],m=this.dpProjectionFunction(b,f)[0];this.sourceMapHeight=this.mapHeight/this.mapScale;this.sourceMapWidth=this.mapWidth/this.mapScale;this.unscaledMapWidth=(a-b)/(l-m)*this.sourceMapWidth;this.unscaledMapHeight=(c-e)/(k-h)*this.sourceMapHeight;b=this.coordinatesToXY(d.radiansToDegrees(g),d.radiansToDegrees(c));a=this.coordinatesToXY(d.radiansToDegrees(a),d.radiansToDegrees(f));c=f=Infinity;for(e=0;e<this.svgAreas.length;e++)g=this.svgAreas[e].getBBox(),g.y<f&&(f=g.y),g.x<c&&(c=g.x);this.diffY=
b.y/this.mapScale-f;this.diffX=a.x/this.mapScale-c;for(e=0;e<this.svgAreas.length;e++)this.svgAreas[e].translate(this.diffX,this.diffY)},changeProjection:function(){this.minMapXX=Infinity;this.maxMapXX=-Infinity;this.minMapYY=Infinity;this.maxMapYY=-Infinity;this.projectionChanged=!1;for(var a=0;a<this.svgAreas.length;a++)this.redraw(this.svgAreas[a]);this.projectionChanged=!0;this.resizeMap()},coordinatesToXY:function(a,b){var c,e;c=!1;this.dataProvider&&(c=this.dataProvider.wrappedLongitudes)&&
(a=this.recalcLongitude(a));this.projectionFunction?(e=this.projectionFunction(d.degreesToRadians(a),d.degreesToRadians(b)),c=this.mapScale*d.roundTo(this.x2c(d.radiansToDegrees(e[0])),3),e=this.mapScale*d.roundTo(this.y2c(d.radiansToDegrees(e[1])),3)):(c=this.longitudeToCoordinate(a),e=this.latitudeToCoordinate(b));return{x:c,y:e}},coordinatesToStageXY:function(a,b){var c=this.coordinatesToXY(a,b),d=c.x*this.zoomLevel()+this.mapContainer.x,c=c.y*this.zoomLevel()+this.mapContainer.y;return{x:d,y:c}},
stageXYToCoordinates:function(a,b){var c=this.mapSet.getBBox(),d=(a-this.mapContainer.x)/this.zoomLevel()-c.x*this.mapScale,c=(b-this.mapContainer.y)/this.zoomLevel()-c.y*this.mapScale;return this.xyToCoordinates(d,c)},xyToCoordinates:function(a,b,c,e,g){var f;isNaN(e)&&(e=this.mapWidth);isNaN(g)&&(g=this.mapHeight);c||(c=this.projectionFunction);if(f=c.invert){var k=this.dataProvider.leftLongitude,h=this.dataProvider.rightLongitude,l=this.dataProvider.topLatitude,m=this.dataProvider.bottomLatitude,
n=k+(h-k)/2,p=l+(m-l)/2,l=d.radiansToDegrees(c(d.degreesToRadians(n),d.degreesToRadians(l))[1]),m=d.radiansToDegrees(c(d.degreesToRadians(n),d.degreesToRadians(m))[1]),k=d.radiansToDegrees(c(d.degreesToRadians(k),d.degreesToRadians(p))[0]),h=d.radiansToDegrees(c(d.degreesToRadians(h),d.degreesToRadians(p))[0]);this.projectionChanged&&(l=d.radiansToDegrees(c(d.degreesToRadians(this.topLongLat.longitude),d.degreesToRadians(this.topLongLat.latitude))[1]),m=d.radiansToDegrees(c(d.degreesToRadians(this.bottomLongLat.longitude),
d.degreesToRadians(this.bottomLongLat.latitude))[1]),k=d.radiansToDegrees(c(d.degreesToRadians(this.leftLongLat.longitude),d.degreesToRadians(this.leftLongLat.latitude))[0]),h=d.radiansToDegrees(c(d.degreesToRadians(this.rightLongLat.longitude),d.degreesToRadians(this.rightLongLat.latitude))[0]));a=d.degreesToRadians(a/e*(h-k)+k);b=d.degreesToRadians(b/g*(m-l)+l);b=f(a,b);f=d.radiansToDegrees(b[0]);b=d.radiansToDegrees(b[1])}else f=this.coordinateToLongitude(a),b=this.coordinateToLatitude(b);return{longitude:d.roundTo(f,
4),latitude:d.roundTo(b,4)}},coordinateToLatitude:function(a,b){var c;void 0===b&&(b=this.mapHeight);if(this.mapSet){var e=this.dataProvider,g=e.bottomLatitude;c=e.topLatitude;"mercator"==e.projection?(e=this.mercatorLatitudeToCoordinate(g),c=this.mercatorLatitudeToCoordinate(c),c=2*d.degreesToRadians(a*(e-c)/b+c),c=d.radiansToDegrees(2*Math.atan(Math.exp(c))-.5*Math.PI)):c=a/b*(g-c)+c}return Math.round(1E6*c)/1E6},handleKeyUp:function(a){13==a.keyCode&&this.focusedItem&&this.selectObject(this.focusedItem)},
coordinateToLongitude:function(a,b){var c,d=this.dataProvider;void 0===b&&(b=this.mapWidth);this.mapSet&&(c=a/b*(d.rightLongitude-d.leftLongitude)+d.leftLongitude);return Math.round(1E6*c)/1E6}})})();(function(){var d=window.AmCharts;d.ZoomControl=d.Class({construct:function(a){this.cname="ZoomControl";this.panStepSize=.1;this.zoomFactor=2;this.maxZoomLevel=64;this.minZoomLevel=1;this.panControlEnabled=!1;this.zoomControlEnabled=!0;this.buttonRollOverColor="#DADADA";this.buttonFillColor="#FFFFFF";this.buttonFillAlpha=1;this.buttonBorderColor="#000000";this.buttonBorderAlpha=.1;this.buttonIconAlpha=this.buttonBorderThickness=1;this.gridColor=this.buttonIconColor="#000000";this.homeIconFile="homeIcon.gif";
this.gridBackgroundColor="#000000";this.draggerAlpha=this.gridAlpha=this.gridBackgroundAlpha=0;this.draggerSize=this.buttonSize=31;this.iconSize=11;this.homeButtonEnabled=!0;this.buttonCornerRadius=2;this.gridHeight=5;this.roundButtons=!0;this.top=this.left=10;d.applyTheme(this,a,this.cname)},init:function(a,b){var c=this;c.chart=a;d.remove(c.set);var e=b.set();d.setCN(a,e,"zoom-control");var g=c.buttonSize,f=c.zoomControlEnabled,k=c.panControlEnabled,h=c.buttonFillColor,l=c.buttonFillAlpha,m=c.buttonBorderThickness,
n=c.buttonBorderColor,p=c.buttonBorderAlpha,r=c.buttonCornerRadius,t=c.buttonRollOverColor,q=c.gridHeight,y=c.zoomFactor,B=c.minZoomLevel,u=c.maxZoomLevel,v=c.buttonIconAlpha,w=c.buttonIconColor,A=c.roundButtons,C=a.svgIcons,x=a.getX(c.left),z=a.getY(c.top);isNaN(c.right)||(x=a.getX(c.right,!0),x=k?x-3*g:x-g);isNaN(c.bottom)||(z=a.getY(c.bottom,!0),f&&(z-=q+3*g),z=k?z-3*g:c.homeButtonEnabled?z-.5*g:z+g);e.translate(x,z);c.previousDY=NaN;var E,x=g/4-1;if(f){E=b.set();d.setCN(a,E,"zoom-control-zoom");
e.push(E);c.set=e;c.zoomSet=E;5<q&&(f=d.rect(b,g+6,q+2*g+6,c.gridBackgroundColor,c.gridBackgroundAlpha,0,"#000000",0,4),d.setCN(a,f,"zoom-bg"),f.translate(-3,-3),f.mouseup(function(){c.handleBgUp()}).touchend(function(){c.handleBgUp()}),E.push(f));var F=g;A&&(F=g/1.5);c.draggerSize=F;var H=Math.log(u/B)/Math.log(y)+1;1E3<H&&(H=1E3);var f=q/H,G,D=b.set();D.translate((g-F)/2+1,1,NaN,!0);E.push(D);for(G=1;G<H;G++)z=g+G*f,z=d.line(b,[1,F-2],[z,z],c.gridColor,c.gridAlpha,1),d.setCN(a,z,"zoom-grid"),D.push(z);
z=new d.SimpleButton;z.setDownHandler(c.draggerDown,c);z.setClickHandler(c.draggerUp,c);z.init(b,F,f,h,l,m,n,p,r,t);d.setCN(a,z.set,"zoom-dragger");E.push(z.set);z.set.setAttr("opacity",c.draggerAlpha);c.dragger=z.set;c.previousY=NaN;z=new d.SimpleButton;C?(F=b.set(),H=d.line(b,[-x,x],[0,0],w,v,1),G=d.line(b,[0,0],[-x,x],w,v,1),F.push(H),F.push(G),z.svgIcon=F):z.setIcon(a.pathToImages+"plus.gif",c.iconSize);z.setClickHandler(a.zoomIn,a);z.init(b,g,g,h,l,m,n,p,r,t,v,w,A);d.setCN(a,z.set,"zoom-in");
E.push(z.set);z=new d.SimpleButton;C?z.svgIcon=d.line(b,[-x,x],[0,0],w,v,1):z.setIcon(a.pathToImages+"minus.gif",c.iconSize);z.setClickHandler(a.zoomOut,a);z.init(b,g,g,h,l,m,n,p,r,t,v,w,A);z.set.translate(0,q+g);d.setCN(a,z.set,"zoom-out");E.push(z.set);q-=f;u=Math.log(u/100)/Math.log(y);c.realStepSize=q/(u-Math.log(B/100)/Math.log(y));c.realGridHeight=q;c.stepMax=u}k&&(k=b.set(),d.setCN(a,k,"zoom-control-pan"),e.push(k),E&&E.translate(g,4*g),y=new d.SimpleButton,C?y.svgIcon=d.line(b,[x/5,-x+x/5,
x/5],[-x,0,x],w,v,1):y.setIcon(a.pathToImages+"panLeft.gif",c.iconSize),y.setClickHandler(a.moveLeft,a),y.init(b,g,g,h,l,m,n,p,r,t,v,w,A),y.set.translate(0,g),d.setCN(a,y.set,"pan-left"),k.push(y.set),y=new d.SimpleButton,C?y.svgIcon=d.line(b,[-x/5,x-x/5,-x/5],[-x,0,x],w,v,1):y.setIcon(a.pathToImages+"panRight.gif",c.iconSize),y.setClickHandler(a.moveRight,a),y.init(b,g,g,h,l,m,n,p,r,t,v,w,A),y.set.translate(2*g,g),d.setCN(a,y.set,"pan-right"),k.push(y.set),y=new d.SimpleButton,C?y.svgIcon=d.line(b,
[-x,0,x],[x/5,-x+x/5,x/5],w,v,1):y.setIcon(a.pathToImages+"panUp.gif",c.iconSize),y.setClickHandler(a.moveUp,a),y.init(b,g,g,h,l,m,n,p,r,t,v,w,A),y.set.translate(g,0),d.setCN(a,y.set,"pan-up"),k.push(y.set),y=new d.SimpleButton,C?y.svgIcon=d.line(b,[-x,0,x],[-x/5,x-x/5,-x/5],w,v,1):y.setIcon(a.pathToImages+"panDown.gif",c.iconSize),y.setClickHandler(a.moveDown,a),y.init(b,g,g,h,l,m,n,p,r,t,v,w,A),y.set.translate(g,2*g),d.setCN(a,y.set,"pan-down"),k.push(y.set),e.push(k));c.homeButtonEnabled&&(k=new d.SimpleButton,
C?k.svgIcon=d.polygon(b,[-x,0,x,x-1,x-1,2,2,-2,-2,-x+1,-x+1],[0,-x,0,0,x-1,x-1,2,2,x-1,x-1,0],w,v,1,w,v):k.setIcon(a.pathToImages+c.homeIconFile,c.iconSize),k.setClickHandler(a.goHome,a),c.panControlEnabled&&(p=l=0),k.init(b,g,g,h,l,m,n,p,r,t,v,w,A),c.panControlEnabled?k.set.translate(g,g):E&&E.translate(0,1.5*g),d.setCN(a,k.set,"pan-home"),e.push(k.set));c.update()},draggerDown:function(){this.chart.stopDrag();this.isDragging=!0},draggerUp:function(){this.isDragging=!1},handleBgUp:function(){var a=
this.chart;a.zoomTo(100*Math.pow(this.zoomFactor,this.stepMax-(a.mouseY-this.zoomSet.y-this.set.y-this.buttonSize-this.realStepSize/2)/this.realStepSize))},update:function(){var a;a=this.zoomFactor;var b=this.realStepSize,c=this.stepMax,e=this.dragger,g=this.buttonSize,f,k=this.chart;k&&(this.isDragging?(k.stopDrag(),f=e.y+(k.mouseY-this.previousY),f=d.fitToBounds(f,g,this.realGridHeight+g),k.zoomTo(100*Math.pow(a,c-(f-g)/b),NaN,NaN,!0)):(a=Math.log(k.zoomLevel()/100)/Math.log(a),f=(c-a)*b+g),this.previousY=
k.mouseY,this.previousDY!=f&&e&&(e.translate((this.buttonSize-this.draggerSize)/2,f),this.previousDY=f))}})})();(function(){var d=window.AmCharts;d.SimpleButton=d.Class({construct:function(){},init:function(a,b,c,e,g,f,k,h,l,m,n,p,r){var t=this;t.rollOverColor=m;t.color=e;t.container=a;m=a.set();t.set=m;r?(b/=2,e=d.circle(a,b,e,g,f,k,h),e.translate(b,b)):e=d.rect(a,b,c,e,g,f,k,h,l);m.push(e);g=t.iconPath;var q;g&&(q=t.iconSize,f=(b-q)/2,r&&(f=(2*b-q)/2),q=a.image(g,f,(c-q)/2,q,q));t.svgIcon&&(q=t.svgIcon,r?q.translate(b,b):q.translate(b/2,b/2));m.setAttr("cursor","pointer");q&&(m.push(q),q.setAttr("opacity",
n),q.node.style.pointerEvents="none");e.mousedown(function(){t.handleDown()}).touchstart(function(){t.handleDown()}).mouseup(function(){t.handleUp()}).touchend(function(){t.handleUp()}).mouseover(function(){t.handleOver()}).mouseout(function(){t.handleOut()});t.bg=e},setIcon:function(a,b){this.iconPath=a;this.iconSize=b},setClickHandler:function(a,b){this.clickHandler=a;this.scope=b},setDownHandler:function(a,b){this.downHandler=a;this.scope=b},handleUp:function(){var a=this.clickHandler;a&&a.call(this.scope)},
handleDown:function(){var a=this.downHandler;a&&a.call(this.scope)},handleOver:function(){this.container.chart.skipClick=!0;this.bg.setAttr("fill",this.rollOverColor)},handleOut:function(){this.container.chart.skipClick=!1;this.bg.setAttr("fill",this.color)}})})();(function(){var d=window.AmCharts;d.SmallMap=d.Class({construct:function(a){this.cname="SmallMap";this.mapColor="#e6e6e6";this.rectangleColor="#FFFFFF";this.top=this.right=10;this.minimizeButtonWidth=23;this.backgroundColor="#9A9A9A";this.backgroundAlpha=1;this.borderColor="#FFFFFF";this.iconColor="#000000";this.borderThickness=3;this.borderAlpha=1;this.size=.2;this.enabled=!0;d.applyTheme(this,a,this.cname)},init:function(a,b){var c=this;if(c.enabled){c.chart=a;c.container=b;c.width=a.realWidth*
c.size;c.height=a.realHeight*c.size;d.remove(c.mapSet);d.remove(c.allSet);d.remove(c.set);var e=b.set();c.set=e;d.setCN(a,e,"small-map");var g=b.set();c.allSet=g;e.push(g);c.buildSVGMap();var f=c.borderThickness,k=c.borderColor,h=d.rect(b,c.width+f,c.height+f,c.backgroundColor,c.backgroundAlpha,f,k,c.borderAlpha);d.setCN(a,h,"small-map-bg");h.translate(-f/2,-f/2);g.push(h);h.toBack();var l,m,h=c.minimizeButtonWidth,n=new d.SimpleButton,p=h/2;a.svgIcons?n.svgIcon=d.line(b,[-p/2,0,p/2],[-p/4,p/4,-p/
4],c.iconColor,1,1):n.setIcon(a.pathToImages+"arrowDown.gif",h);n.setClickHandler(c.minimize,c);n.init(b,h,h,k,1,1,k,1);d.setCN(a,n.set,"small-map-down");n=n.set;c.downButtonSet=n;e.push(n);var r=new d.SimpleButton;a.svgIcons?r.svgIcon=d.line(b,[-p/2,0,p/2],[p/4,-p/4,p/4],c.iconColor,1,1):r.setIcon(a.pathToImages+"arrowUp.gif",h);r.setClickHandler(c.maximize,c);r.init(b,h,h,k,1,1,k,1);d.setCN(a,r.set,"small-map-up");k=r.set;c.upButtonSet=k;k.hide();e.push(k);var t,q;isNaN(c.top)||(l=a.getY(c.top)+
f,q=0);isNaN(c.bottom)||(l=a.getY(c.bottom,!0)-c.height-f,q=c.height-h+f/2);isNaN(c.left)||(m=a.getX(c.left)+f,t=-f/2);isNaN(c.right)||(m=a.getX(c.right,!0)-c.width-f,t=c.width-h+f/2);f=b.set();f.clipRect(1,1,c.width,c.height);g.push(f);c.rectangleC=f;e.translate(m,l);n.translate(t,q);k.translate(t,q);g.mouseup(function(){c.handleMouseUp()});c.drawRectangle()}else d.remove(c.allSet),d.remove(c.downButtonSet),d.remove(c.upButtonSet)},minimize:function(){this.downButtonSet.hide();this.upButtonSet.show();
this.allSet.hide()},maximize:function(){this.downButtonSet.show();this.upButtonSet.hide();this.allSet.show()},buildSVGMap:function(){var a=this.chart,b={fill:this.mapColor,stroke:this.mapColor,"stroke-opacity":1},c=this.container,e=c.set();d.setCN(a,e,"small-map-image");var g;for(g=0;g<a.svgAreas.length;g++){var f=c.path(a.svgAreas[g].path).attr(b);e.push(f)}this.allSet.push(e);b=e.getBBox();c=this.size*a.mapScale;g=-b.x*c;var f=-b.y*c,k=0,h=0;a.centerMap&&(k=(this.width-b.width*c)/2,h=(this.height-
b.height*c)/2);this.mapWidth=b.width*c;this.mapHeight=b.height*c;g+=k;f+=h;this.dx=k;this.dy=h;e.translate(g,f,c);this.mapSet=e;this.mapX=g;this.mapY=f},update:function(){var a=this.chart;if(a){var b=a.zoomLevel(),c=this.width,d=this.height,g=c/(a.realWidth*b),f=a.mapContainer.getBBox(),c=c/b,d=d/b,k=this.rectangle;k.translate(-(a.mapContainer.x+f.x*b)*g+this.dx,-(a.mapContainer.y+f.y*b)*g+this.dy);0<c&&0<d&&(k.setAttr("width",Math.ceil(c+1)),k.setAttr("height",Math.ceil(d+1)));this.rWidth=c;this.rHeight=
d}},drawRectangle:function(){var a=this.rectangle;d.remove(a);a=d.rect(this.container,10,10,"#000",0,1,this.rectangleColor,1);d.setCN(this.chart,a,"small-map-rectangle");this.rectangleC.push(a);this.rectangle=a},handleMouseUp:function(){var a=this.chart,b=a.zoomLevel();a.zoomToMapXY(b,(a.mouseX-this.set.x-this.mapX)/this.size+a.diffX*a.mapScale,(a.mouseY-this.set.y-this.mapY)/this.size+a.diffY*a.mapScale)}})})();(function(){var d=window.AmCharts;d.AreasProcessor=d.Class({construct:function(a){this.chart=a},process:function(a){this.updateAllAreas();this.allObjects=[];a=a.areas;var b=this.chart;b.outlines=[];var c=a.length,d,g,f=0,k=!1,h=!1,l=0;for(d=0;d<c;d++)if(g=a[d],g.value=Number(g.value),g=g.value,!isNaN(g)){if(!1===k||k<g)k=g;if(!1===h||h>g)h=g;f+=Math.abs(g);l++}this.minValue=h;this.maxValue=k;isNaN(b.minValue)||(this.minValue=b.minValue);isNaN(b.maxValue)||(this.maxValue=b.maxValue);b.maxValueReal=
k;b.minValueReal=h;for(d=0;d<c;d++)g=a[d],isNaN(g.value)?g.percents=void 0:(g.percents=(g.value-h)/f*100,h==k&&(g.percents=100));for(d=0;d<c;d++)g=a[d],this.createArea(g);b.outlinesToFront()},updateAllAreas:function(){var a=this.chart,b=a.areasSettings,c=b.unlistedAreasColor,e=b.unlistedAreasAlpha,g=b.unlistedAreasOutlineColor,f=b.unlistedAreasOutlineAlpha,k=a.svgAreas,h=a.dataProvider,l=h.areas,m={},n;for(n=0;n<l.length;n++)m[l[n].id]=l[n];for(n=0;n<k.length;n++){l=k[n];if(b.preserveOriginalAttributes){if(l.customAttr)for(var p in l.customAttr)l.setAttr(p,
l.customAttr[p])}else{void 0!=c&&l.setAttr("fill",c);isNaN(e)||l.setAttr("fill-opacity",e);void 0!=g&&l.setAttr("stroke",g);isNaN(f)||l.setAttr("stroke-opacity",f);var r=b.outlineThickness;b.adjustOutlineThickness&&(r=r/a.zoomLevel()/a.mapScale);l.setAttr("stroke-width",r)}d.setCN(a,l,"map-area-unlisted");h.getAreasFromMap&&!m[l.id]&&(r=new d.MapArea(a.theme),r.parentObject=h,r.id=l.id,r.outline=l.outline,h.areas.push(r))}},createArea:function(a){var b=this.chart,c=b.svgAreasById[a.id],e=b.areasSettings;
if(c&&c.className){var g=b.areasClasses[c.className];g&&(e=d.processObject(g,d.AreasSettings,b.theme))}var f=e.color,k=e.alpha,h=e.outlineThickness,l=e.rollOverColor,m=e.selectedColor,n=e.rollOverAlpha,p=e.rollOverBrightness,r=e.outlineColor,t=e.outlineAlpha,q=e.balloonText,y=e.selectable,B=e.pattern,u=e.rollOverOutlineColor,v=e.bringForwardOnHover,w=e.preserveOriginalAttributes;this.allObjects.push(a);a.chart=b;a.baseSettings=e;a.autoZoomReal=void 0==a.autoZoom?e.autoZoom:a.autoZoom;g=a.color;void 0==
g&&(g=f);var A=a.alpha;isNaN(A)&&(A=k);k=a.rollOverAlpha;isNaN(k)&&(k=n);isNaN(k)&&(k=A);n=a.rollOverColor;void 0==n&&(n=l);l=a.pattern;void 0==l&&(l=B);B=a.selectedColor;void 0==B&&(B=m);m=a.balloonText;void 0===m&&(m=q);void 0==e.colorSolid||isNaN(a.value)||(q=Math.floor((a.value-this.minValue)/((this.maxValue-this.minValue)/b.colorSteps)),q==b.colorSteps&&q--,q*=1/(b.colorSteps-1),this.maxValue==this.minValue&&(q=1),a.colorReal=d.getColorFade(g,e.colorSolid,q));void 0!=a.color&&(a.colorReal=a.color);
void 0==a.selectable&&(a.selectable=y);void 0==a.colorReal&&(a.colorReal=f);f=a.outlineColor;void 0==f&&(f=r);r=a.outlineAlpha;isNaN(r)&&(r=t);t=a.outlineThickness;isNaN(t)&&(t=h);h=a.rollOverOutlineColor;void 0==h&&(h=u);u=a.rollOverBrightness;void 0==u&&(u=p);void 0==a.bringForwardOnHover&&(a.bringForwardOnHover=v);void 0==a.preserveOriginalAttributes&&(a.preserveOriginalAttributes=w);isNaN(e.selectedBrightness)||(B=d.adjustLuminosity(a.colorReal,e.selectedBrightness/100));a.alphaReal=A;a.rollOverColorReal=
n;a.rollOverAlphaReal=k;a.balloonTextReal=m;a.selectedColorReal=B;a.outlineColorReal=f;a.outlineAlphaReal=r;a.rollOverOutlineColorReal=h;a.outlineThicknessReal=t;a.patternReal=l;a.rollOverBrightnessReal=u;a.accessibleLabel||(a.accessibleLabel=e.accessibleLabel);d.processDescriptionWindow(e,a);if(c&&(p=c.area,v=c.title,a.enTitle=c.title,v&&!a.title&&(a.title=v),(c=b.language)?(v=d.mapTranslations)&&(c=v[c])&&c[a.enTitle]&&(a.titleTr=c[a.enTitle]):a.titleTr=void 0,p)){c=a.tabIndex;void 0===c&&(c=e.tabIndex);
void 0!==c&&p.setAttr("tabindex",c);a.displayObject=p;a.outline&&(A=0,a.alphaReal=0,a.rollOverAlphaReal=0,a.mouseEnabled=!1,b.outlines.push(p),p.node.setAttribute("pointer-events","none"));a.mouseEnabled&&b.addObjectEventListeners(p,a);var C;void 0!=g&&(C=g);void 0!=a.colorReal&&(C=a.showAsSelected||b.selectedObject==a?a.selectedColorReal:a.colorReal);p.node.setAttribute("class","");d.setCN(b,p,"map-area");d.setCN(b,p,"map-area-"+p.id);e.adjustOutlineThickness&&(t=t/b.zoomLevel()/b.mapScale);a.preserveOriginalAttributes||
(p.setAttr("fill",C),p.setAttr("stroke",f),p.setAttr("stroke-opacity",r),p.setAttr("stroke-width",t),p.setAttr("fill-opacity",A));b.makeObjectAccessible(a);l&&p.pattern(l,b.mapScale,b.path);a.hidden&&p.hide()}}})})();(function(){var d=window.AmCharts;d.AreasSettings=d.Class({construct:function(a){this.cname="AreasSettings";this.alpha=1;this.autoZoom=!1;this.balloonText="[[title]]";this.color="#FFCC00";this.colorSolid="#990000";this.unlistedAreasAlpha=1;this.unlistedAreasColor="#DDDDDD";this.outlineColor="#FFFFFF";this.outlineThickness=this.outlineAlpha=1;this.selectedColor=this.rollOverOutlineColor="#CC0000";this.unlistedAreasOutlineColor="#FFFFFF";this.unlistedAreasOutlineAlpha=1;this.descriptionWindowWidth=
250;this.bringForwardOnHover=this.adjustOutlineThickness=!0;this.accessibleLabel="[[title]] [[value]] [[description]]";d.applyTheme(this,a,this.cname)}})})();(function(){var d=window.AmCharts;d.ImagesProcessor=d.Class({construct:function(a){this.chart=a;this.reset()},process:function(a){var b=a.images,c;for(c=b.length-1;0<=c;c--){var d=b[c];this.createImage(d,c);d.parentArray=b}this.counter=c;a.parentObject&&a.remainVisible&&this.process(a.parentObject)},createImage:function(a,b){a=d.processObject(a,d.MapImage);a.arrays=[];isNaN(b)&&(this.counter++,b=this.counter);var c=this.chart,e=c.container,g=c.mapImagesContainer,f=c.stageImagesContainer,k=c.imagesSettings;
a.remove&&a.remove();var h=k.color,l=k.alpha,m=k.rollOverColor,n=k.rollOverOutlineColor,p=k.selectedColor,r=k.balloonText,t=k.outlineColor,q=k.outlineAlpha,y=k.outlineThickness,B=k.selectedScale,u=k.rollOverScale,v=k.selectable,w=k.labelPosition,A=k.labelColor,C=k.labelFontSize,x=k.bringForwardOnHover,z=k.labelRollOverColor,E=k.rollOverBrightness,F=k.selectedLabelColor;a.index=b;a.chart=c;a.baseSettings=c.imagesSettings;var H=e.set();a.displayObject=H;var G=a.color;void 0==G&&(G=h);h=a.alpha;isNaN(h)&&
(h=l);void 0==a.bringForwardOnHover&&(a.bringForwardOnHover=x);l=a.outlineAlpha;isNaN(l)&&(l=q);q=a.rollOverColor;void 0==q&&(q=m);m=a.selectedColor;void 0==m&&(m=p);p=a.balloonText;void 0===p&&(p=r);r=a.outlineColor;void 0==r&&(r=t);a.outlineColorReal=r;t=a.outlineThickness;isNaN(t)&&(t=y);(y=a.labelPosition)||(y=w);w=a.labelColor;void 0==w&&(w=A);A=a.labelRollOverColor;void 0==A&&(A=z);z=a.selectedLabelColor;void 0==z&&(z=F);F=a.labelFontSize;isNaN(F)&&(F=C);C=a.selectedScale;isNaN(C)&&(C=B);B=
a.rollOverScale;isNaN(B)&&(B=u);u=a.rollOverBrightness;void 0==u&&(u=E);void 0==a.selectable&&(a.selectable=v);a.colorReal=G;isNaN(k.selectedBrightness)||(m=d.adjustLuminosity(a.colorReal,k.selectedBrightness/100));a.alphaReal=h;a.rollOverColorReal=q;a.balloonTextReal=p;a.selectedColorReal=m;a.labelColorReal=w;a.labelRollOverColorReal=A;a.selectedLabelColorReal=z;a.labelFontSizeReal=F;a.labelPositionReal=y;a.selectedScaleReal=C;a.rollOverScaleReal=B;a.rollOverOutlineColorReal=n;a.rollOverBrightnessReal=
u;a.accessibleLabel||(a.accessibleLabel=k.accessibleLabel);d.processDescriptionWindow(k,a);a.centeredReal=void 0==a.centered?k.centered:a.centered;n=a.type;u=a.imageURL;B=a.svgPath;C=a.width;F=a.height;v=a.scale;isNaN(a.percentWidth)||(C=a.percentWidth/100*c.realWidth);isNaN(a.percentHeight)||(F=a.percentHeight/100*c.realHeight);var D;u||n||B||(n="circle",C=1,l=h=0);q=E=0;k=a.selectedColorReal;if(n){isNaN(C)&&(C=10);isNaN(F)&&(F=10);"kilometers"==a.widthAndHeightUnits&&(C=c.kilometersToPixels(a.width),
F=c.kilometersToPixels(a.height));"miles"==a.widthAndHeightUnits&&(C=c.milesToPixels(a.width),F=c.milesToPixels(a.height));if("circle"==n||"bubble"==n)F=C;D=this.createPredefinedImage(G,r,t,n,C,F);q=E=0;a.centeredReal?(isNaN(a.right)||(E=C*v),isNaN(a.bottom)||(q=F*v)):(E=C*v/2,q=F*v/2);D.translate(E,q,v,!0)}else u?(isNaN(C)&&(C=10),isNaN(F)&&(F=10),D=e.image(u,0,0,C,F),D.node.setAttribute("preserveAspectRatio","none"),D.setAttr("opacity",h),a.centeredReal&&(E=isNaN(a.right)?-C/2:C/2,q=isNaN(a.bottom)?
-F/2:F/2,D.translate(E,q,NaN,!0))):B&&(D=e.path(B),u=D.getBBox(),a.centeredReal?(E=-u.x*v-u.width*v/2,isNaN(a.right)||(E=-E),q=-u.y*v-u.height*v/2,isNaN(a.bottom)||(q=-q)):E=q=0,D.translate(E,q,v,!0),D.x=E,D.y=q);D&&(H.push(D),a.image=D,D.setAttr("stroke-opacity",l),D.setAttr("stroke-width",t),D.setAttr("stroke",r),D.setAttr("fill-opacity",h),"bubble"!=n&&D.setAttr("fill",G),d.setCN(c,D,"map-image"),void 0!=a.id&&d.setCN(c,D,"map-image-"+a.id));G=a.labelColorReal;!a.showAsSelected&&c.selectedObject!=
a||void 0==k||(D&&D.setAttr("fill",k),G=a.selectedLabelColorReal);D=null;void 0!==a.label&&(D=d.text(e,a.label,G,c.fontFamily,a.labelFontSizeReal,a.labelAlign),d.setCN(c,D,"map-image-label"),void 0!==a.id&&d.setCN(c,D,"map-image-label-"+a.id),G=a.labelBackgroundAlpha,(h=a.labelBackgroundColor)&&0<G&&(l=D.getBBox(),e=d.rect(e,l.width+16,l.height+10,h,G),d.setCN(c,e,"map-image-label-background"),void 0!=a.id&&d.setCN(c,e,"map-image-label-background-"+a.id),H.push(e),a.labelBG=e),a.imageLabel=D,H.push(D),
d.setCN(c,H,"map-image-container"),void 0!=a.id&&d.setCN(c,H,"map-image-container-"+a.id),this.labelsToReposition.push(a),a.arrays.push({arr:this.labelsToReposition,el:a}));e=isNaN(a.latitude)||isNaN(a.longitude)?!0:!1;a.lineId&&(D=this.chart.getObjectById(a.lineId))&&0<D.longitudes.length&&(e=!1);e?f.push(H):g.push(H);H.toBack();H&&(H.rotation=a.rotation,isNaN(a.rotation)||H.rotate(a.rotation),a.arrays.push({arr:this.allSvgObjects,el:H}),this.allSvgObjects.push(H));this.allObjects.push(a);c.makeObjectAccessible(a);
g=a.tabIndex;void 0===g&&(g=c.imagesSettings.tabIndex);void 0!==g&&H.setAttr("tabindex",g);a.arrays.push({arr:this.allObjects,el:a});isNaN(a.longitude)||isNaN(a.latitude)||!a.fixedSize||(a.objToResize={image:H,mapImage:a,scale:1},this.objectsToResize.push(a.objToResize),a.arrays.push({arr:this.objectsToResize,el:a.objToResize}));this.updateSizeAndPosition(a);a.mouseEnabled&&c.addObjectEventListeners(H,a);a.hidden&&H.hide();d.removeFromArray(c.updatableImages,a);a.animateAlongLine&&(c.updatableImages.push(a),
a.delayAnimateAlong());return a},updateSizeAndPosition:function(a){var b=this.chart,c=a.displayObject,e=b.getX(a.left),g=b.getY(a.top),f,k=a.image.getBBox();isNaN(a.right)||(e=b.getX(a.right,!0)-k.width*a.scale);isNaN(a.bottom)||(g=b.getY(a.bottom,!0)-k.height*a.scale);var h=a.longitude,l=a.latitude,m=a.positionOnLine,k=a.imageLabel,n=this.chart.zoomLevel(),p,r;a.lineId&&(a.line=this.chart.getObjectById(a.lineId));if(a.line&&a.line.getCoordinates){a.line.chart=b;var t=a.line.getCoordinates(m,a.lineSegment);
t&&(h=b.coordinateToLongitude(t.x),l=b.coordinateToLatitude(t.y),p=t.x,r=t.y,a.animateAngle&&(f=d.radiansToDegrees(t.angle)))}isNaN(f)||c.rotate(f+a.extraAngle);if(!isNaN(e)&&!isNaN(g))c.translate(e,g,NaN,!0);else if(!isNaN(l)&&!isNaN(h))if(g=b.coordinatesToXY(h,l),e=g.x,g=g.y,isNaN(p)||(e=p),isNaN(r)||(g=r),a.fixedSize){p=a.positionScale;isNaN(p)?p=0:(--p,p*=1-2*Math.abs(m-.5));if(m=a.objectToResize)m.scale=1+p;c.translate(e,g,1/n+p,!0)}else c.translate(e,g,NaN,!0);this.positionLabel(k,a,a.labelPositionReal)},
positionLabel:function(a,b,c){if(a){var d=b.image,g=0,f=0,k=0,h=0;d&&(h=d.getBBox(),f=d.y+h.y,g=d.x+h.x,k=h.width,h=h.height,b.svgPath&&(k*=b.scale,h*=b.scale));var d=a.getBBox(),l=d.width,m=d.height;"right"==c&&(g+=k+l/2+5,f+=h/2-2);"left"==c&&(g+=-l/2-5,f+=h/2-2);"top"==c&&(f-=m/2+3,g+=k/2);"bottom"==c&&(f+=h+m/2,g+=k/2);"middle"==c&&(g+=k/2,f+=h/2);a.translate(g+b.labelShiftX,f+b.labelShiftY,NaN,!0);a=b.labelFontSizeReal;b.labelBG&&b.labelBG.translate(g-d.width/2+b.labelShiftX-9,f-a/2+b.labelShiftY-
4,NaN,!0)}},createPredefinedImage:function(a,b,c,e,g,f){var k=this.chart.container,h;switch(e){case "circle":h=d.circle(k,g/2,a,1,c,b,1);break;case "rectangle":h=d.polygon(k,[-g/2,g/2,g/2,-g/2],[f/2,f/2,-f/2,-f/2],a,1,c,b,1,0,!0);break;case "bubble":h=d.circle(k,g/2,a,1,c,b,1,!0);break;case "hexagon":g/=Math.sqrt(3),h=d.polygon(k,[.866*g,0*g,-.866*g,-.866*g,0*g,.866*g],[.5*g,1*g,.5*g,-.5*g,-1*g,-.5*g],a,1,c,b,1)}return h},reset:function(){this.objectsToResize=[];this.allSvgObjects=[];this.allObjects=
[];this.allLabels=[];this.labelsToReposition=[]}})})();(function(){var d=window.AmCharts;d.ImagesSettings=d.Class({construct:function(a){this.cname="ImagesSettings";this.balloonText="[[title]]";this.alpha=1;this.borderAlpha=0;this.borderThickness=1;this.labelPosition="right";this.labelColor="#000000";this.labelFontSize=11;this.color="#000000";this.labelRollOverColor="#00CC00";this.centered=!0;this.rollOverScale=this.selectedScale=1;this.descriptionWindowWidth=250;this.bringForwardOnHover=!0;this.outlineColor="transparent";this.adjustAnimationSpeed=!1;
this.baseAnimationDistance=500;this.pauseDuration=0;this.easingFunction=d.easeInOutQuad;this.animationDuration=3;this.positionScale=1;this.accessibleLabel="[[title]] [[description]]";d.applyTheme(this,a,this.cname)}})})();(function(){var d=window.AmCharts;d.LinesProcessor=d.Class({construct:function(a){this.chart=a;this.reset()},process:function(a){var b=a.lines,c;for(c=0;c<b.length;c++){var d=b[c];this.createLine(d,c);d.parentArray=b}this.counter=c;a.parentObject&&a.remainVisible&&this.process(a.parentObject)},createLine:function(a,b){a=d.processObject(a,d.MapLine);isNaN(b)&&(this.counter++,b=this.counter);a.index=b;a.remove&&a.remove();var c=this.chart,e=c.linesSettings,g=this.objectsToResize,f=c.mapLinesContainer,
k=c.stageLinesContainer,h=e.thickness,l=e.dashLength,m=e.arrow,n=e.arrowSize,p=e.arrowColor,r=e.arrowAlpha,t=e.color,q=e.alpha,y=e.rollOverColor,B=e.selectedColor,u=e.rollOverAlpha,v=e.balloonText,w=e.bringForwardOnHover,A=e.arc,C=e.rollOverBrightness,x=c.container;a.chart=c;a.baseSettings=e;var z=x.set();a.displayObject=z;var E=a.tabIndex;void 0===E&&(E=e.tabIndex);void 0!==E&&z.setAttr("tabindex",E);this.allSvgObjects.push(z);a.arrays.push({arr:this.allSvgObjects,el:z});this.allObjects.push(a);
a.arrays.push({arr:this.allObjects,el:a});a.mouseEnabled&&c.addObjectEventListeners(z,a);if(a.remainVisible||c.selectedObject==a.parentObject){E=a.thickness;isNaN(E)&&(E=h);h=a.dashLength;isNaN(h)&&(h=l);l=a.color;void 0==l&&(l=t);t=a.alpha;isNaN(t)&&(t=q);q=a.rollOverAlpha;isNaN(q)&&(q=u);isNaN(q)&&(q=t);u=a.rollOverColor;void 0==u&&(u=y);y=a.selectedColor;void 0==y&&(y=B);B=a.balloonText;void 0===B&&(B=v);v=Number(a.arc);isNaN(v)&&(v=A);A=a.arrow;if(!A||"none"==A&&"none"!=m)A=m;m=a.arrowColor;void 0==
m&&(m=p);void 0==m&&(m=l);p=a.arrowAlpha;isNaN(p)&&(p=r);isNaN(p)&&(p=t);r=a.arrowSize;isNaN(r)&&(r=n);n=a.rollOverBrightness;void 0==n&&(n=C);a.colorReal=l;a.arrowColor=m;isNaN(e.selectedBrightness)||(y=d.adjustLuminosity(a.colorReal,e.selectedBrightness/100));a.alphaReal=t;a.rollOverColorReal=u;a.rollOverAlphaReal=q;a.balloonTextReal=B;a.selectedColorReal=y;a.thicknessReal=E;a.rollOverBrightnessReal=n;a.accessibleLabel||(a.accessibleLabel=e.accessibleLabel);void 0===a.shiftArrow&&(a.shiftArrow=
e.shiftArrow);void 0==a.bringForwardOnHover&&(a.bringForwardOnHover=w);d.processDescriptionWindow(e,a);w=this.processCoordinates(a.x,c.realWidth);C=this.processCoordinates(a.y,c.realHeight);n=a.longitudes;e=a.latitudes;q=n.length;if(0<q)for(w=[],C=[],u=0;u<q;u++)B=c.coordinatesToXY(n[u],e[u]),w.push(B.x),C.push(B.y);if(0<w.length){a.segments=w.length;d.dx=0;d.dy=0;var F,H,G,q=10*(1-Math.abs(v));10<=q&&(q=NaN);1>q&&(q=1);a.arcRadius=[];a.distances=[];n=c.mapContainer.scale;if(isNaN(q)){for(q=0;q<w.length-
1;q++)H=Math.sqrt(Math.pow(w[q+1]-w[q],2)+Math.pow(C[q+1]-C[q],2)),a.distances[q]=H;q=d.line(x,w,C,l,1,E/n,h,!1,!1,!0);l=d.line(x,w,C,l,.001,5/n,h,!1,!1,!0);q.setAttr("stroke-linecap","round")}else{u=1;B={fill:"none",stroke:l,"stroke-opacity":1,"stroke-width":E/n,"fill-opacity":0,"stroke-linecap":"round"};void 0!==h&&0<h&&(B["stroke-dasharray"]=h);for(var h="",D=0;D<w.length-1;D++){var L=w[D],J=w[D+1],M=C[D],O=C[D+1];H=Math.sqrt(Math.pow(J-L,2)+Math.pow(O-M,2));G=H/2*q;F=270+180*Math.acos(H/2/G)/
Math.PI;isNaN(F)&&(F=270);u=L<=J?0>v?1:0:0<v?1:0;0<v&&(F=-F);h+="M"+L+","+M+"A"+G+","+G+",0,0,"+u+","+J+","+O;a.arcRadius[D]=G;a.distances[D]=H}q=x.path(h).attr(B);l=x.path(h).attr({"fill-opacity":0,stroke:l,"stroke-width":5/n,"stroke-opacity":.001,fill:"none"})}d.setCN(c,q,"map-line");void 0!=a.id&&d.setCN(c,q,"map-line-"+a.id);d.dx=.5;d.dy=.5;z.push(q);z.push(l);q.setAttr("opacity",t);if("none"!=A){var I,K,N;if("end"==A||"both"==A)u=w[w.length-1],D=C[C.length-1],1<w.length?(B=w[w.length-2],I=C[C.length-
2]):(B=u,I=D),I=180*Math.atan((D-I)/(u-B))/Math.PI,isNaN(F)||(I+=F),K=u,N=D,I=0>u-B?I-90:I+90;t=[-r/2-.5,-.5,r/2-.5];h=[r,-.5,r];a.shiftArrow&&"middle"!=A&&(h=[0,1.2*-r,0]);"both"==A&&(r=d.polygon(x,t,h,m,p,1,m,p,void 0,!0),z.push(r),r.translate(K,N,1/n,!0),isNaN(I)||r.rotate(I),d.setCN(c,q,"map-line-arrow"),void 0!=a.id&&d.setCN(c,q,"map-line-arrow-"+a.id),a.fixedSize&&g.push(r));if("start"==A||"both"==A)r=w[0],N=C[0],1<w.length?(u=w[1],K=C[1]):(u=r,K=N),I=180*Math.atan((N-K)/(r-u))/Math.PI,isNaN(F)||
(I-=F),K=r,I=0>r-u?I-90:I+90;"middle"==A&&(u=w[w.length-1],D=C[C.length-1],1<w.length?(B=w[w.length-2],I=C[C.length-2]):(B=u,I=D),K=B+(u-B)/2,N=I+(D-I)/2,I=180*Math.atan2(D-I,u-B)/Math.PI,isNaN(F)||(F=H/2,G-=Math.sqrt(G*G-F*F),u>=B?0>v&&(G=-G):0<v&&(G=-G),K-=Math.sin(I/180*Math.PI)*G,N+=Math.cos(I/180*Math.PI)*G),I+=90);r=d.polygon(x,t,h,m,p,1,m,p,void 0,!0);d.setCN(c,q,"map-line-arrow");void 0!=a.id&&d.setCN(c,q,"map-line-arrow-"+a.id);z.push(r);r.translate(K,N,1/n,!0);isNaN(I)||r.rotate(I);a.fixedSize&&
(g.push(r),a.arrays.push({arr:g,el:r}));a.arrowSvg=r}a.fixedSize&&q&&(g={line:q,thickness:E},this.linesToResize.push(g),a.arrays.push({arr:this.linesToResize,el:g}),g={line:l,thickness:5},this.linesToResize.push(g),a.arrays.push({arr:this.linesToResize,el:g}));a.lineSvg=q;a.showAsSelected&&!isNaN(y)&&q.setAttr("stroke",y);0<e.length?f.push(z):k.push(z);a.hidden&&z.hide();c.makeObjectAccessible(a)}}},processCoordinates:function(a,b){var c=[],d;for(d=0;d<a.length;d++){var g=a[d],f=Number(g);isNaN(f)&&
(f=Number(g.replace("%",""))*b/100);isNaN(f)||c.push(f)}return c},reset:function(){this.objectsToResize=[];this.allSvgObjects=[];this.allObjects=[];this.linesToResize=[]}})})();(function(){var d=window.AmCharts;d.LinesSettings=d.Class({construct:function(a){this.cname="LinesSettings";this.balloonText="[[title]]";this.thickness=1;this.dashLength=0;this.arrowSize=10;this.arrowAlpha=1;this.arrow="none";this.color="#990000";this.descriptionWindowWidth=250;this.bringForwardOnHover=!0;d.applyTheme(this,a,this.cname)}})})();(function(){var d=window.AmCharts;d.MapObject=d.Class({construct:function(a){this.fixedSize=this.mouseEnabled=!0;this.images=[];this.lines=[];this.areas=[];this.remainVisible=!0;this.passZoomValuesToTarget=!1;this.objectType=this.cname;d.applyTheme(this,a,"MapObject");this.arrays=[]},deleteObject:function(){this.remove();this.parentArray&&d.removeFromArray(this.parentArray,this);if(this.arrays)for(var a=0;a<this.arrays.length;a++)d.removeFromArray(this.arrays[a].arr,this.arrays[a].el);this.arrays=
[]}})})();(function(){var d=window.AmCharts;d.MapArea=d.Class({inherits:d.MapObject,construct:function(a){this.cname="MapArea";d.MapArea.base.construct.call(this,a);d.applyTheme(this,a,this.cname)},validate:function(){this.chart.areasProcessor.createArea(this)}})})();(function(){var d=window.AmCharts;d.MapLine=d.Class({inherits:d.MapObject,construct:function(a){this.cname="MapLine";this.longitudes=[];this.latitudes=[];this.x=[];this.y=[];this.segments=0;this.arrow="none";d.MapLine.base.construct.call(this,a);d.applyTheme(this,a,this.cname)},validate:function(){this.chart.linesProcessor.createLine(this)},remove:function(){var a=this.displayObject;a&&a.remove()},getCoordinates:function(a,b){isNaN(b)&&(b=0);isNaN(this.arc);if(!isNaN(a)){var c,d,g,f,k,h;if(1<this.longitudes.length){d=
this.chart.coordinatesToXY(this.longitudes[b],this.latitudes[b]);var l=this.chart.coordinatesToXY(this.longitudes[b+1],this.latitudes[b+1]);c=d.x;g=l.x;d=d.y;f=l.y}else 1<this.x.length&&(c=this.x[b],g=this.x[b+1],d=this.y[b],f=this.y[b+1]);k=c+(g-c)*a;h=d+(f-d)*a;var m=Math.atan2(f-d,g-c),l=this.arc,n=10*(1-Math.abs(l));10<=n&&(n=NaN);1>n&&(n=1);if(!isNaN(l)&&0!==l&&!isNaN(n)){var p=Math.sqrt(Math.pow(g-c,2)+Math.pow(f-d,2));h=p/2*n+.001;m=p/2;n=-Math.sqrt(h*h-m*m);m=180*Math.atan2(f-d,g-c)/Math.PI;
g>=c?0>l&&(n=-n):0<l&&(n=-n);k=c+.5*(g-c)-Math.sin(m/180*Math.PI)*n;n=d+.5*(f-d)+Math.cos(m/180*Math.PI)*n;d=(180*Math.atan2(d-n,c-k)/Math.PI+360)%360;f=(180*Math.atan2(f-n,g-k)/Math.PI+360)%360;f<d&&(f+=360);180<f-d&&(d+=360);d=(d+(f-d)*a)/180*Math.PI;m=g>=c?0>l?d+Math.PI/2:d-Math.PI/2:0<l?d+Math.PI/2:d-Math.PI/2;k+=h*Math.cos(d);h=n+h*Math.sin(d)}this.distance=p;return{x:k,y:h,angle:m}}},fixToStage:function(){if(0<this.latitudes.length){this.y=[];for(var a=0;a<this.latitudes.length;a++){var b=this.chart.coordinatesToStageXY(this.longitudes[a],
this.latitudes[a]);this.y.push(b.y);this.x.push(b.x)}this.latitudes=[];this.longitudes=[]}this.validate()},fixToMap:function(){if(0<this.y.length){this.latitudes=[];for(var a=0;a<this.y.length;a++){var b=this.chart.stageXYToCoordinates(this.x[a],this.y[a]);this.latitudes.push(b.latitude);this.longitudes.push(b.longitude)}this.y=[];this.x=[]}this.validate()}})})();(function(){var d=window.AmCharts;d.MapImage=d.Class({inherits:d.MapObject,construct:function(a){this.cname="MapImage";this.scale=1;this.widthAndHeightUnits="pixels";this.labelShiftY=this.labelShiftX=0;this.positionOnLine=.5;this.direction=1;this.lineSegment=this.extraAngle=0;this.animateAngle=!0;this.createEvents("animationStart","animationEnd");d.MapImage.base.construct.call(this,a);d.applyTheme(this,a,this.cname);this.delayCounter=0},validate:function(){this.chart.imagesProcessor.createImage(this)},
updatePosition:function(){this.chart.imagesProcessor.updateSizeAndPosition(this)},remove:function(){var a=this.displayObject;a&&a.remove();(a=this.imageLabel)&&a.remove()},animateTo:function(a,b,c,d){isNaN(c)||(this.animationDuration=c);d&&(this.easingFunction=d);this.finalX=a;this.finalY=b;isNaN(this.longitude)||(this.initialX=this.longitude);isNaN(this.left)||(this.initialX=this.left);isNaN(this.right)||(this.initialX=this.right);isNaN(this.latitude)||(this.initialY=this.latitude);isNaN(this.top)||
(this.initialY=this.top);isNaN(this.bottom)||(this.initialY=this.bottom);this.animatingAlong=!1;this.animate()},animateAlong:function(a,b,c){1==this.positionOnLine&&this.flipDirection&&(this.direction=-1,this.extraAngle=180);isNaN(b)||(this.animationDuration=b);c&&(this.easingFunction=c);a&&(this.line=this.chart.getObjectById(a));this.animateAlongLine=this.line;this.animatingAlong=!0;this.animate()},animate:function(){var a=this.chart.imagesSettings,b=this.animationDuration;isNaN(b)&&(b=a.animationDuration);
this.totalFrames=b*d.updateRate;b=1;this.line&&a.adjustAnimationSpeed&&(this.line.distances&&(b=this.line.distances[this.lineSegment]*this.chart.zoomLevel(),b=Math.abs(b/a.baseAnimationDistance)),this.totalFrames=Math.round(b*this.totalFrames));this.frame=0;this.fire({type:"animationStart",chart:this.chart,image:this,lineSegment:this.lineSegment,direction:this.direction})},update:function(){var a=this.totalFrames;this.frame++;this.delayCounter--;0===this.delayCounter&&this.animateAlong();if(!(0<this.delayCounter))if(this.frame<=
a){var b=this.chart.imagesSettings,c=this.easingFunction;c||(c=b.easingFunction);a=c(0,this.frame,0,1,a);-1==this.direction&&(a=1-a);this.animatingAlong?this.positionOnLine=a:(b=this.initialX+(this.finalX-this.initialX)*a,isNaN(this.longitude)||(this.longitude=b),isNaN(this.left)||(this.left=b),isNaN(this.right)||(this.right=b),a=this.initialY+(this.finalY-this.initialY)*a,isNaN(this.latitude)||(this.latitude=a),isNaN(this.top)||(this.top=a),isNaN(this.bottom)||(this.bottom=a));this.updatePosition()}else this.frame==
a+1&&(this.fire({type:"animationEnd",chart:this.chart,image:this,lineSegment:this.lineSegment,direction:this.direction}),this.line&&this.animatingAlong&&(1==this.direction?this.lineSegment<this.line.segments-2?(this.lineSegment++,this.delayAnimateAlong(),this.positionOnLine=0):this.flipDirection?(this.direction=-1,this.extraAngle=180,this.delayAnimateAlong()):this.loop&&(this.delayAnimateAlong(),this.lineSegment=0):0<this.lineSegment?(this.lineSegment--,this.delayAnimateAlong(),this.positionOnLine=
0):this.loop&&this.flipDirection?(this.direction=1,this.extraAngle=0,this.delayAnimateAlong()):this.loop&&this.delayAnimateAlong()))},delayAnimateAlong:function(){this.animateAlongLine&&(this.delayCounter=this.chart.imagesSettings.pauseDuration*d.updateRate)},fixToStage:function(){if(!isNaN(this.longitude)){var a=this.chart.coordinatesToStageXY(this.longitude,this.latitude);this.left=a.x;this.top=a.y;this.latitude=this.longitude=void 0}this.validate()},fixToMap:function(){if(!isNaN(this.left)){var a=
this.chart.stageXYToCoordinates(this.left,this.top);this.longitude=a.longitude;this.latitude=a.latitude;this.top=this.left=void 0}this.validate()}})})();(function(){var d=window.AmCharts;d.degreesToRadians=function(a){return a/180*Math.PI};d.radiansToDegrees=function(a){return a/Math.PI*180};d.getColorFade=function(a,b,c){var e=d.hex2RGB(b);b=e[0];var g=e[1],e=e[2],f=d.hex2RGB(a);a=f[0];var k=f[1],f=f[2];a+=Math.round((b-a)*c);k+=Math.round((g-k)*c);f+=Math.round((e-f)*c);return"rgb("+a+","+k+","+f+")"};d.hex2RGB=function(a){return[parseInt(a.substring(1,3),16),parseInt(a.substring(3,5),16),parseInt(a.substring(5,7),16)]};d.processDescriptionWindow=
function(a,b){isNaN(b.descriptionWindowX)&&(b.descriptionWindowX=a.descriptionWindowX);isNaN(b.descriptionWindowY)&&(b.descriptionWindowY=a.descriptionWindowY);isNaN(b.descriptionWindowLeft)&&(b.descriptionWindowLeft=a.descriptionWindowLeft);isNaN(b.descriptionWindowRight)&&(b.descriptionWindowRight=a.descriptionWindowRight);isNaN(b.descriptionWindowTop)&&(b.descriptionWindowTop=a.descriptionWindowTop);isNaN(b.descriptionWindowBottom)&&(b.descriptionWindowBottom=a.descriptionWindowBottom);isNaN(b.descriptionWindowWidth)&&
(b.descriptionWindowWidth=a.descriptionWindowWidth);isNaN(b.descriptionWindowHeight)&&(b.descriptionWindowHeight=a.descriptionWindowHeight)};d.normalizePath=function(a){for(var b="",c=d.parsePath(a.getAttribute("d")),e,g,f=Infinity,k=-Infinity,h=Infinity,l=-Infinity,m=0;m<c.length;m++){var n=c[m],p=n.letter,r=n.x,n=n.y;"h"==p&&(p="L",r+=e,n=g);"H"==p&&(p="L",n=g);"v"==p&&(p="L",r=e,n+=g);"V"==p&&(p="L",r=e);if("m"===p||"l"===p)p=p.toUpperCase(),r+=e,n+=g;r=d.roundTo(r,3);n=d.roundTo(n,3);e=r;g=n;
r>k&&(k=r);r<f&&(f=r);n>l&&(l=n);n<h&&(h=n);b="z"==p.toLowerCase()?b+"Z ":b+(p+" "+r+" "+n+" ")}a.setAttribute("d",b);return{minX:f,maxX:k,minY:h,maxY:l}};d.mercatorLatitudeToRadians=function(a){return Math.log(Math.tan(Math.PI/4+d.degreesToRadians(a)/2))};d.parsePath=function(a){a=a.match(/([MmLlHhVvZz]{1}[0-9.,\-\s]*)/g);for(var b=[],c=0;c<a.length;c++){var d=a[c].match(/([MmLlHhVvZz]{1})|([0-9.\-]+)/g),g={letter:d[0]};switch(d[0]){case "Z":case "Z":case "z":break;case "V":case "v":g.y=Number(d[1]);
break;case "H":case "h":g.x=Number(d[1]);break;default:g.x=Number(d[1]),g.y=Number(d[2])}b.push(g)}return b};d.acos=function(a){return 1<a?0:-1>a?Math.PI:Math.acos(a)};d.asin=function(a){return 1<a?Math.PI/2:-1>a?-Math.PI/2:Math.asin(a)};d.sinci=function(a){return a?a/Math.sin(a):1};d.asqrt=function(a){return 0<a?Math.sqrt(a):0};d.winkel3=function(a,b){var c=d.aitoff(a,b);return[(c[0]+a/Math.PI*2)/2,(c[1]+b)/2]};d.winkel3.invert=function(a,b){var c=a,e=b,g=25,f=Math.PI/2;do var k=Math.cos(e),h=Math.sin(e),
l=Math.sin(2*e),m=h*h,n=k*k,p=Math.sin(c),r=Math.cos(c/2),t=Math.sin(c/2),q=t*t,y=1-n*r*r,B=y?d.acos(k*r)*Math.sqrt(u=1/y):u=0,u,y=.5*(2*B*k*t+c/f)-a,v=.5*(B*h+e)-b,w=.5*u*(n*q+B*k*r*m)+.5/f,A=u*(p*l/4-B*h*t),h=.125*u*(l*t-B*h*n*p),m=.5*u*(m*r+B*q*k)+.5,k=A*h-m*w,A=(v*A-y*m)/k,y=(y*h-v*w)/k,c=c-A,e=e-y;while((1E-6<Math.abs(A)||1E-6<Math.abs(y))&&0<--g);return[c,e]};d.aitoff=function(a,b){var c=Math.cos(b),e=d.sinci(d.acos(c*Math.cos(a/=2)));return[2*c*Math.sin(a)*e,Math.sin(b)*e]};d.orthographic=
function(a,b){return[Math.cos(b)*Math.sin(a),Math.sin(b)]};d.equirectangular=function(a,b){return[a,b]};d.equirectangular.invert=function(a,b){return[a,b]};d.eckert5=function(a,b){var c=Math.PI;return[a*(1+Math.cos(b))/Math.sqrt(2+c),2*b/Math.sqrt(2+c)]};d.eckert5.invert=function(a,b){var c=Math.sqrt(2+Math.PI),d=b*c/2;return[c*a/(1+Math.cos(d)),d]};d.eckert6=function(a,b){for(var c=Math.PI,d=(1+c/2)*Math.sin(b),g=0,f=Infinity;10>g&&1E-5<Math.abs(f);g++)b-=f=(b+Math.sin(b)-d)/(1+Math.cos(b));d=Math.sqrt(2+
c);return[a*(1+Math.cos(b))/d,2*b/d]};d.eckert6.invert=function(a,b){var c=1+Math.PI/2,e=Math.sqrt(c/2);return[2*a*e/(1+Math.cos(b*=e)),d.asin((b+Math.sin(b))/c)]};d.mercator=function(a,b){b>=Math.PI/2-.02&&(b=Math.PI/2-.02);b<=-Math.PI/2+.02&&(b=-Math.PI/2+.02);return[a,Math.log(Math.tan(Math.PI/4+b/2))]};d.mercator.invert=function(a,b){return[a,2*Math.atan(Math.exp(b))-Math.PI/2]};d.miller=function(a,b){return[a,1.25*Math.log(Math.tan(Math.PI/4+.4*b))]};d.miller.invert=function(a,b){return[a,2.5*
Math.atan(Math.exp(.8*b))-.625*Math.PI]};d.eckert3=function(a,b){var c=Math.PI,d=Math.sqrt(c*(4+c));return[2/d*a*(1+Math.sqrt(1-4*b*b/(c*c))),4/d*b]};d.eckert3.invert=function(a,b){var c=Math.PI,e=Math.sqrt(c*(4+c))/2;return[a*e/(1+d.asqrt(1-b*b*(4+c)/(4*c))),b*e/2]}})();(function(){var d=window.AmCharts;d.MapData=d.Class({inherits:d.MapObject,construct:function(){this.cname="MapData";d.MapData.base.construct.call(this);this.projection="mercator";this.topLatitude=90;this.bottomLatitude=-90;this.leftLongitude=-180;this.rightLongitude=180;this.zoomLevel=1;this.getAreasFromMap=!1}})})();(function(){var d=window.AmCharts;d.DescriptionWindow=d.Class({construct:function(){},show:function(a,b,c,d){var g=this;g.chart=a;var f=document.createElement("div");f.style.position="absolute";var k=a.classNamePrefix+"-description-";f.className="ammapDescriptionWindow "+k+"div";g.div=f;b.appendChild(f);var h=".gif";a.svgIcons&&(h=".svg");var l=document.createElement("img");l.className="ammapDescriptionWindowCloseButton "+k+"close-img";l.src=a.pathToImages+"xIcon"+h;l.style.cssFloat="right";l.style.cursor=
"pointer";l.onclick=function(){g.close()};l.onmouseover=function(){l.src=a.pathToImages+"xIconH"+h};l.onmouseout=function(){l.src=a.pathToImages+"xIcon"+h};f.appendChild(l);b=document.createElement("div");b.className="ammapDescriptionTitle "+k+"title-div";b.onmousedown=function(){g.div.style.zIndex=1E3};f.appendChild(b);b.innerHTML=d;d=b.offsetHeight;b=document.createElement("div");b.className="ammapDescriptionText "+k+"text-div";b.style.maxHeight=g.maxHeight-d-20+"px";f.appendChild(b);b.innerHTML=
c},close:function(){try{this.div.parentNode.removeChild(this.div),this.chart.fireClosed()}catch(a){}}})})();(function(){var d=window.AmCharts;d.ValueLegend=d.Class({construct:function(a){this.cname="ValueLegend";this.enabled=!0;this.showAsGradient=!1;this.minValue=0;this.height=12;this.width=200;this.bottom=this.left=10;this.borderColor="#FFFFFF";this.borderAlpha=this.borderThickness=1;this.color="#000000";this.fontSize=11;d.applyTheme(this,a,this.cname)},init:function(a,b){if(this.enabled){var c=a.areasSettings.color,e=a.areasSettings.colorSolid,g=a.colorSteps;d.remove(this.set);var f=b.set();this.set=
f;d.setCN(a,f,"value-legend");var k=0,h=this.minValue,l=this.fontSize,m=a.fontFamily,n=this.color,p={precision:a.precision,decimalSeparator:a.decimalSeparator,thousandsSeparator:a.thousandsSeparator};void 0==h&&(h=d.formatNumber(a.minValueReal,p));void 0!==h&&(k=d.text(b,h,n,m,l,"left"),k.translate(0,l/2-1),d.setCN(a,k,"value-legend-min-label"),f.push(k),k=k.getBBox().height);h=this.maxValue;void 0===h&&(h=d.formatNumber(a.maxValueReal,p));void 0!==h&&(k=d.text(b,h,n,m,l,"right"),k.translate(this.width,
l/2-1),d.setCN(a,k,"value-legend-max-label"),f.push(k),k=k.getBBox().height);if(this.showAsGradient)c=d.rect(b,this.width,this.height,[c,e],1,this.borderThickness,this.borderColor,1,0,0),d.setCN(a,c,"value-legend-gradient"),c.translate(0,k),f.push(c);else for(l=this.width/g,m=0;m<g;m++)n=d.getColorFade(c,e,1*m/(g-1)),n=d.rect(b,l,this.height,n,1,this.borderThickness,this.borderColor,1),d.setCN(a,n,"value-legend-color"),d.setCN(a,n,"value-legend-color-"+m),n.translate(l*m,k),f.push(n);e=c=0;g=f.getBBox();
k=a.getY(this.bottom,!0);l=a.getY(this.top);m=a.getX(this.right,!0);n=a.getX(this.left);isNaN(l)||(c=l);isNaN(k)||(c=k-g.height);isNaN(n)||(e=n);isNaN(m)||(e=m-g.width);f.translate(e,c)}else d.remove(this.set)}})})();(function(){var d=window.AmCharts;d.ObjectList=d.Class({construct:function(a){this.divId=a},init:function(a){this.chart=a;var b=this.divId;this.container&&(b=this.container);this.div="object"!=typeof b?document.getElementById(b):b;b=document.createElement("div");b.className="ammapObjectList "+a.classNamePrefix+"-object-list-div";this.div.appendChild(b);this.addObjects(a.dataProvider,b)},addObjects:function(a,b){var c=this.chart,d=document.createElement("ul");d.className=c.classNamePrefix+"-object-list-ul";
var g;if(a.areas)for(g=0;g<a.areas.length;g++){var f=a.areas[g];void 0===f.showInList&&(f.showInList=c.showAreasInList);this.addObject(f,d)}if(a.images)for(g=0;g<a.images.length;g++)f=a.images[g],void 0===f.showInList&&(f.showInList=c.showImagesInList),this.addObject(f,d);if(a.lines)for(g=0;g<a.lines.length;g++)f=a.lines[g],void 0===f.showInList&&(f.showInList=c.showLinesInList),this.addObject(f,d);0<d.childNodes.length&&b.appendChild(d)},addObject:function(a,b){var c=this;if(a.showInList&&void 0!==
a.title){var d=c.chart,g=document.createElement("li");g.className=d.classNamePrefix+"-object-list-li";var f=a.titleTr;f||(f=a.title);var f=document.createTextNode(f),k=document.createElement("a");k.className=d.classNamePrefix+"-object-list-a";k.appendChild(f);g.appendChild(k);b.appendChild(g);this.addObjects(a,g);k.onmouseover=function(){c.chart.rollOverMapObject(a,!1)};k.onmouseout=function(){c.chart.rollOutMapObject(a)};k.onclick=function(){c.chart.clickMapObject(a)}}}})})();


/***/ }),

/***/ 611:
/***/ (function(module, exports) {

﻿// (c) ammap.com | SVG (in JSON format) map of World - Low
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
					"d":"M619.874,393.722L620.373,393.573L620.477,394.411L622.671,393.93L624.99,394.009L626.684,394.1L628.604,392.028L630.695,390.054L632.467,388.146L633.001,389.202L633.382,391.639L631.949,391.651L631.72,393.648L632.216,394.073L630.947,394.674L630.939,395.919L630.122,397.175L630.049,398.394L629.484,399.032L621.056,397.508L619.981,394.428z"
				},
				{
					"id":"AF",
					"title":"Afghanistan",
					"d":"M646.879,356.901L649.738,358.201L651.853,357.745L652.438,356.188L654.651,355.669L656.231,354.617L656.791,351.832L659.154,351.154L659.594,349.902L660.917,350.843L661.762,350.952L663.323,350.975L665.438,351.716L666.295,352.143L668.324,351.017L669.27,351.694L670.174,350.085L671.85,350.159L672.281,349.641L672.578,348.213L673.785,346.975L675.303,347.785L674.998,348.869L675.846,349.038L675.585,351.994L676.694,353.137L677.672,352.404L678.916,352.057L680.663,350.486L682.594,350.745L685.486,350.751L685.985,351.758L684.353,352.15L682.928,352.795L679.71,353.2L676.699,353.931L675.063,355.439L675.725,356.899L676.046,358.603L674.649,360.033L674.766,361.335L673.995,362.549L671.328,362.444L672.43,364.663L670.646,365.507L669.455,367.511L669.609,369.491L668.514,370.415L667.477,370.109L665.334,370.537L665.027,371.451L662.939,371.446L661.377,373.289L661.278,376.039L657.635,377.374L655.682,377.092L655.114,377.794L653.438,377.386L650.634,377.865L645.936,376.228L648.479,373.298L648.249,371.202L646.125,370.65L645.905,368.565L644.987,365.921L646.187,364.094L644.966,363.599L645.736,361.148z"
				},
				{
					"id":"AL",
					"title":"Albania",
					"d":"M532.985,334.657L532.629,335.93L533.027,337.524L534.19,338.425L534.134,339.393L533.223,339.925L533.054,341.115L531.75,342.88L531.274,342.626L531.218,341.826L529.665,340.601L529.421,338.851L529.658,336.323L530.041,335.164L529.568,334.573L529.38,333.377L530.596,331.512L530.774,332.227L531.528,331.891L532.125,332.907L532.796,333.293z"
				},
				{
					"id":"AM",
					"title":"Armenia",
					"d":"M597.453,337.502L601.349,336.923L601.93,337.897L602.998,338.537L602.434,339.461L603.927,340.719L603.137,341.881L604.327,342.869L605.586,343.462L605.648,345.958L604.633,346.064L603.488,343.984L603.501,343.427L602.262,343.435L601.432,342.462L600.849,342.561L599.744,341.498L597.659,340.59L597.929,338.803z"
				},
				{
					"id":"AO",
					"title":"Angola",
					"d":"M521.03,479.784l0.691,2.088l0.805,1.683l0.645,0.908l1.074,1.47l1.854,-0.228l0.925,-0.396l1.549,0.397l0.42,-0.703l0.704,-1.637l1.739,-0.109l0.151,-0.486l1.431,-0.011l-0.244,1.011l3.402,-0.024l0.051,1.768l0.568,1.086l-0.413,1.698l0.206,1.735l0.935,1.049l-0.15,3.371l0.694,-0.26l1.219,0.07l1.737,-0.425l1.277,0.167l0.296,0.881l-0.319,1.379l0.493,1.335l-0.418,1.068l0.239,0.986l-5.838,-0.036l-0.129,9.158l1.892,2.377l1.83,1.823l-5.153,1.192l-6.788,-0.414l-1.943,-1.4l-11.366,0.126l-0.424,0.205L513,511.367l-1.818,-0.087l-1.678,0.497l-1.35,0.555l-0.264,-1.833l0.388,-2.552l0.967,-2.645l0.146,-1.236l0.91,-2.588l0.668,-1.173l1.611,-1.87l0.899,-1.269l0.294,-2.107l-0.147,-1.609l-0.838,-1.013l-0.747,-1.716l-0.689,-1.694l0.15,-0.586l0.862,-1.117l-0.851,-2.718l-0.574,-1.88l-1.405,-1.774l0.267,-0.544l1.157,-0.376l0.813,0.052l0.983,-0.336L521.03,479.784zM510.124,479.243l-0.713,0.296l-0.75,-2.104l1.132,-1.207l0.847,-0.47l1.051,0.959l-1.021,0.587l-0.458,0.719L510.124,479.243z"
				},
				{
					"id":"AR",
					"title":"Argentina",
					"d":"M291.601,648.907l-2.664,0.245l-1.43,-1.726l-1.689,-0.13l-3.002,-0.003l-0.002,-10.568l1.077,2.148l1.402,3.525l3.645,2.865l3.925,1.207L291.601,648.907zM293.101,526.469l1.648,2.178l1.094,-2.426l3.197,0.125l0.453,0.644l5.155,4.945l2.292,0.464l3.426,2.262l2.888,1.202l0.402,1.362l-2.76,4.731l2.827,0.854l3.149,0.479l2.217,-0.505l2.543,-2.398l0.458,-2.743l1.389,-0.593l1.407,1.789l-0.057,2.489l-2.361,1.729l-1.883,1.282l-3.165,3.078l-3.741,4.372l-0.701,2.594l-0.75,3.365l0.028,3.297l-0.608,0.742l-0.217,2.165l-0.192,1.761l3.56,2.914l-0.383,2.368l1.752,1.507l-0.143,1.7l-2.694,4.516l-4.157,1.913l-5.624,0.746l-3.08,-0.361l0.589,2.147l-0.574,2.721l0.518,1.851l-1.682,1.299l-2.874,0.512l-2.696,-1.347l-1.083,0.967l0.391,3.71l1.893,1.135l1.535,-1.189l0.835,1.962l-2.582,1.18l-2.251,2.383l-0.412,3.907l-0.663,2.107l-2.648,0.011l-2.198,2.035l-0.804,3.013l2.757,2.982l2.681,0.831l-0.964,3.726l-3.312,2.375l-1.822,5.025l-2.559,1.719l-1.149,2.059l0.905,4.641l1.866,2.633l-1.182,-0.231l-2.599,-0.715l-6.775,-0.608l-1.162,-2.632l0.054,-3.332l-1.867,0.284l-0.988,-1.596l-0.245,-4.599l2.151,-1.878l0.889,-2.68l-0.326,-2.112l1.486,-3.52l1.024,-5.35l-0.301,-2.331l1.224,-0.748l-0.3,-1.478l-1.301,-0.782l0.924,-1.63l-1.266,-1.462l-0.655,-4.395l1.127,-0.767l-0.474,-4.543l0.659,-3.751l0.75,-3.223l1.679,-1.3l-0.853,-3.462l-0.009,-3.217l2.123,-2.263l-0.065,-2.868l1.6,-3.313l0.007,-3.086l-0.728,-0.609l-1.292,-5.694l1.728,-3.343l-0.265,-3.115l1.002,-2.896l1.836,-2.963l1.979,-1.95l-0.839,-1.225l0.585,-1.001l-0.089,-5.143l3.054,-1.509l0.962,-3.159l-0.34,-0.758l2.336,-2.722L293.101,526.469z"
				},
				{
					"id":"AT",
					"title":"Austria",
					"d":"M522.861,309.853L522.648,311.557L521.069,311.565L521.613,312.464L520.682,315.111L520.147,315.8L517.695,315.901L516.28,316.823L513.964,316.509L509.955,315.458L509.329,314.034L506.558,314.746L506.231,315.523L504.533,314.943L503.102,314.832L501.833,314.085L502.262,313.078L502.154,312.344L503,312.116L504.419,313.264L504.818,312.173L507.291,312.35L509.295,311.606L510.64,311.733L511.514,312.582L511.775,311.878L511.378,309.158L512.385,308.624L513.374,306.673L515.457,308.037L517.034,306.302L518.021,305.983L520.198,307.281L521.515,307.061L522.807,307.861L522.582,308.396z"
				},
				{
					"id":"AU",
					"title":"Australia",
					"d":"M882.928,588.16l2.709,1.277l1.526,-0.508l2.188,-0.71l1.682,0.248l0.199,4.425l-0.961,1.3l-0.289,3.064l-0.98,-1.047l-1.946,2.675l-0.58,-0.208l-1.725,-0.12l-1.729,-3.276l-0.384,-2.496l-1.617,-3.254l0.071,-1.695L882.928,588.16zM877.779,502.097l1.01,2.254l1.799,-1.084l0.929,1.218l1.346,1.125l-0.288,1.28l0.598,2.484l0.426,1.452l0.706,0.355l0.761,2.495l-0.271,1.52l0.908,1.995l3.038,1.542l1.98,1.407l1.881,1.292l-0.367,0.721l1.604,1.872l1.09,3.249l1.119,-0.662l1.137,1.306l0.686,-0.464l0.483,3.208l1.989,1.871l1.302,1.167l2.191,2.488l0.788,2.487l0.072,1.774l-0.193,1.937l1.336,2.676l-0.16,2.811l-0.485,1.48l-0.757,2.871l0.057,1.859l-0.555,2.34l-1.238,2.996l-2.077,1.631l-1.023,2.59l-0.936,1.666l-0.831,2.932l-1.082,1.707l-0.709,2.583l-0.362,2.401l0.144,1.109l-1.607,1.224l-3.139,0.128l-2.588,1.454l-1.288,1.38l-1.694,1.539l-2.322,-1.584l-1.718,-0.629l0.436,-1.851l-1.533,0.67l-2.455,2.582l-2.424,-0.97l-1.59,-0.564l-1.604,-0.254l-2.714,-1.027l-1.813,-2.175l-0.521,-2.655l-0.651,-1.752l-1.378,-1.398l-2.697,-0.414l0.922,-1.661l-0.679,-2.522l-1.369,2.351l-2.495,0.627l1.467,-1.885l0.425,-1.953l1.083,-1.646l-0.225,-2.472l-2.28,2.849l-1.752,1.15l-1.074,2.693l-2.189,-1.396l0.087,-1.791l-1.754,-2.43l-1.479,-1.247l0.527,-0.766l-3.598,-2.001l-1.971,-0.094l-2.696,-1.597l-5.021,0.31l-3.631,1.175l-3.19,1.1l-2.676,-0.219l-2.972,1.696l-2.432,0.766l-0.54,1.75l-1.035,1.363l-2.38,0.082l-1.761,0.299l-2.478,-0.613l-2.017,0.367l-1.925,0.154l-1.668,1.801l-0.817,-0.153l-1.406,0.959l-1.348,1.082l-2.046,-0.134l-1.879,-0.001l-2.975,-2.168l-1.507,-0.642l0.061,-1.927l1.393,-0.456l0.476,-0.761l-0.1,-1.196l0.343,-2.302l-0.313,-1.948l-1.482,-3.294l-0.46,-1.845l0.121,-1.83l-1.116,-2.079l-0.071,-0.934l-1.242,-1.262l-0.35,-2.468l-1.603,-2.477l-0.388,-1.327l1.231,1.346l-0.946,-2.881l1.391,0.898l0.83,1.203l-0.047,-1.59l-1.388,-2.43l-0.269,-0.968l-0.65,-0.917l0.305,-1.767l0.574,-0.75l0.383,-1.519l-0.3,-1.768l1.159,-2.165l0.211,2.292l1.185,-2.071l2.278,-1.002l1.366,-1.276l2.143,-1.095l1.274,-0.232l0.772,0.367l2.209,-1.109l1.701,-0.33l0.425,-0.65l0.742,-0.271l1.55,0.07l2.947,-0.867l1.524,-1.313l0.716,-1.575l1.645,-1.491l0.126,-1.169l0.073,-1.589l1.962,-2.474l1.181,2.514l1.193,-0.582l-0.998,-1.375l0.88,-1.409l1.237,0.629l0.34,-2.205l1.532,-1.421l0.676,-1.138l1.41,-0.491l0.044,-0.804l1.232,0.335l0.049,-0.722l1.233,-0.412l1.355,-0.387l2.071,1.318l1.556,1.705l1.755,0.02l1.783,0.271l-0.594,-1.582l1.343,-2.303l1.264,-0.749l-0.437,-0.715l1.218,-1.632l1.698,-1.006l1.435,0.339l2.355,-0.537l-0.051,-1.455l-2.054,-0.936l1.493,-0.413l1.857,0.704l1.489,1.167l2.361,0.729l0.801,-0.288l1.738,0.875l1.638,-0.815l1.054,0.248l0.656,-0.547l1.287,1.41l-0.747,1.528l-1.064,1.155l-0.964,0.096l0.325,1.146l-0.824,1.435l-0.996,1.414l0.201,0.814l2.229,1.596l2.16,0.928l1.443,0.999l2.027,1.722l0.79,-0.003l1.468,0.746l0.426,0.901l2.677,0.992l1.852,-0.999l0.549,-1.566l0.568,-1.289l0.349,-1.59l0.853,-2.3l-0.39,-1.394l0.202,-0.837l-0.324,-1.643l0.367,-2.157l0.538,-0.581l-0.437,-0.953l0.678,-1.511l0.532,-1.563l0.07,-0.81l1.042,-1.063l0.791,1.388l0.194,1.783l0.699,0.344l0.119,1.197l1.02,1.452l0.21,1.62L877.779,502.097z"
				},
				{
					"id":"AZ",
					"title":"Azerbaijan",
					"d":"M601.432,342.462l0.831,0.973l1.239,-0.008l-0.013,0.558l1.145,2.08l-1.923,-0.477l-1.417,-1.661l-0.445,-1.366L601.432,342.462zM608.081,337.029l1.241,0.253l0.481,-0.945l1.674,-1.506l1.474,1.965l1.426,2.623l1.307,0.172l0.863,0.988l-2.31,0.294l-0.487,2.823l-0.482,1.263l-1.028,0.839l0.075,1.769l-0.698,0.178l-1.749,-1.869l0.967,-1.779l-0.829,-1.062l-1.051,0.268l-3.307,2.656l-0.062,-2.496l-1.259,-0.593l-1.19,-0.988l0.791,-1.162l-1.494,-1.258l0.564,-0.924l-1.068,-0.64l-0.581,-0.974l0.687,-0.607l2.089,1.068l1.511,0.22l0.382,-0.435l-1.381,-2.017l0.728,-0.517l0.788,0.126L608.081,337.029z"
				},
				{
					"id":"BA",
					"title":"Bosnia and Herzegovina",
					"d":"M528.542,323.106L529.558,323.096L528.856,324.823L530.208,326.323L529.799,328.144L529.139,328.314L528.615,328.666L527.703,329.559L527.292,331.658L524.811,330.215L523.752,328.613L522.684,327.76L521.395,326.313L520.787,325.104L519.414,323.27L520,321.629L521.007,322.539L521.614,321.717L522.924,321.629L525.335,322.287L527.273,322.232z"
				},
				{
					"id":"BD",
					"title":"Bangladesh",
					"d":"M735.094,400.405L735.036,402.557L734.058,402.104L734.241,404.507L733.439,402.951L733.278,401.426L732.744,399.979L731.573,398.223L728.99,398.102L729.245,399.347L728.365,401.021L727.172,400.412L726.765,400.958L725.971,400.631L724.886,400.362L724.449,397.877L723.478,395.596L723.954,393.757L722.229,392.938L722.851,391.819L724.604,390.672L722.58,389.037L723.57,386.93L725.791,388.273L727.13,388.426L727.377,390.576L730.045,390.999L732.646,390.953L734.262,391.479L732.97,394.073L731.715,394.25L730.85,395.984L732.385,397.556L732.843,395.616L733.617,395.606z"
				},
				{
					"id":"BE",
					"title":"Belgium",
					"d":"M484.548,295.906L486.601,296.258L489.199,295.327L490.974,297.283L492.515,298.319L492.197,301.287L491.466,301.452L491.162,303.882L488.709,301.909L487.271,302.247L485.313,300.19L484.01,298.422L482.707,298.35L482.301,296.788z"
				},
				{
					"id":"BF",
					"title":"Burkina Faso",
					"d":"M467.325,436.401L465.406,435.672L464.092,435.779L463.112,436.49L461.851,435.894L461.361,434.958L460.1,434.341L459.914,432.695L460.679,431.491L460.614,430.528L462.84,428.167L463.251,426.207L464.02,425.508L465.375,425.894L466.551,425.311L466.932,424.574L469.107,423.287L469.643,422.388L472.263,421.192L473.807,420.782L474.506,421.335L476.304,421.322L476.082,422.718L476.458,424.027L478.037,425.899L478.125,427.284L481.357,427.932L481.294,429.884L480.681,430.735L479.311,431.001L478.739,432.243L477.775,432.564L475.32,432.504L474.023,432.278L473.118,432.736L471.879,432.529L467.008,432.663L466.942,434.271z"
				},
				{
					"id":"BG",
					"title":"Bulgaria",
					"d":"M538.78,325.558L539.587,327.156L540.673,326.872L542.828,327.476L546.945,327.68L548.336,326.692L551.637,325.788L553.677,327.2L555.326,327.606L553.871,329.202L552.847,331.931L553.751,334.086L551.337,333.581L548.481,334.764L548.451,336.623L545.902,336.974L543.927,335.673L541.682,336.697L539.608,336.589L539.409,334.116L538.005,332.907L538.466,332.373L538.162,331.922L538.633,330.712L539.702,329.517L538.34,327.856L538.088,326.441z"
				},
				{
					"id":"BI",
					"title":"Burundi",
					"d":"M557.518,475.931L557.34,472.564L556.635,471.296L558.337,471.515L559.196,469.928L560.686,470.11L560.848,471.208L561.452,471.84L561.478,472.747L560.786,473.331L559.695,474.786L558.677,475.798z"
				},
				{
					"id":"BJ",
					"title":"Benin",
					"d":"M482.8,445.918L480.483,446.246L479.792,444.312L479.92,437.852L479.355,437.27L479.249,435.884L478.275,434.893L477.418,434.057L477.775,432.564L478.739,432.243L479.311,431.001L480.681,430.735L481.294,429.884L482.235,429.05L483.24,429.042L485.378,430.681L485.269,431.625L485.899,433.309L485.347,434.45L485.643,435.211L484.282,436.961L483.418,437.826L482.89,439.604L482.961,441.395z"
				},
				{
					"id":"BN",
					"title":"Brunei Darussalam",
					"d":"M795.464,450.767L796.574,449.721L798.96,448.189L798.834,449.567L798.67,451.352L797.33,451.263L796.741,452.214z"
				},
				{
					"id":"BO",
					"title":"Bolivia",
					"d":"M299.041,526.346L295.843,526.222L294.75,528.647L293.101,526.469L289.432,525.737L287.096,528.459L285.073,528.874L283.975,524.724L282.468,521.376L283.351,518.508L281.88,517.258L281.506,515.136L280.132,513.144L281.9,509.998L280.694,507.561L281.337,506.589L280.835,505.519L281.931,504.079L281.985,501.636L282.124,499.624L282.726,498.657L280.302,494.077L282.387,494.317L283.831,494.255L284.456,493.397L286.908,492.249L288.385,491.186L292.054,490.708L291.755,492.828L292.1,493.918L291.875,495.822L294.919,498.374L298.059,498.845L299.163,499.912L301.058,500.479L302.218,501.311L303.982,501.282L305.611,502.132L305.734,503.793L306.281,504.633L306.317,505.876L305.5,505.924L306.578,509.294L311.953,509.414L311.542,511.093L311.842,512.244L313.374,513.063L314.036,514.884L313.538,517.2L312.77,518.493L313.04,520.18L312.163,520.793L312.115,519.879L309.503,518.365L306.899,518.324L302.013,519.184L300.668,521.795L300.598,523.399L299.493,526.99z"
				},
				{
					"id":"BR",
					"title":"Brazil",
					"d":"M313.681,551.79L317.421,547.418L320.586,544.34L322.469,543.058L324.83,541.33L324.887,538.84L323.48,537.052L322.092,537.645L322.642,535.862L323.022,534.045L323.023,532.363L322.015,531.81L320.963,532.303L319.917,532.167L319.59,530.995L319.329,528.217L318.804,527.315L316.91,526.5L315.766,527.09L312.806,526.512L312.992,522.447L312.163,520.793L313.04,520.18L312.77,518.493L313.538,517.2L314.036,514.884L313.374,513.063L311.842,512.244L311.542,511.093L311.953,509.414L306.578,509.294L305.5,505.924L306.317,505.876L306.281,504.633L305.734,503.793L305.611,502.132L303.982,501.282L302.218,501.311L301.058,500.479L299.163,499.912L298.059,498.845L294.919,498.374L291.875,495.822L292.1,493.918L291.755,492.828L292.054,490.708L288.385,491.186L286.908,492.249L284.456,493.397L283.831,494.255L282.387,494.317L280.302,494.077L278.72,494.565L277.445,494.239L277.632,489.939L275.332,491.605L272.857,491.532L271.797,490.024L269.936,489.86L270.529,488.648L268.971,486.934L267.804,484.401L268.543,483.887L268.541,482.702L270.235,481.892L269.956,480.376L270.671,479.402L270.875,478.096L274.081,476.194L276.379,475.656L276.755,475.236L279.282,475.367L280.542,467.72L280.608,466.512L280.169,464.917L278.925,463.901L278.939,461.877L280.519,461.418L281.079,461.707L281.174,460.64L279.531,460.352L279.497,458.608L284.959,458.671L285.887,457.71L286.666,458.594L287.212,460.237L287.742,459.894L289.285,461.367L291.465,461.187L292.008,460.334L294.093,459.684L295.248,459.227L295.573,458.047L297.576,457.254L297.425,456.668L295.049,456.429L294.66,454.672L294.773,452.802L293.518,452.078L294.044,451.821L296.12,452.178L298.349,452.876L299.158,452.216L301.175,451.783L304.311,450.737L305.336,449.671L304.965,448.882L306.423,448.758L307.075,449.402L306.71,450.63L307.674,451.053L308.317,452.351L307.54,453.334L307.093,455.708L307.811,457.118L308.014,458.408L309.739,459.715L311.115,459.853L311.425,459.308L312.312,459.187L313.58,458.698L314.492,457.957L316.042,458.194L316.725,458.094L318.25,458.322L318.502,457.752L318.032,457.198L318.312,456.391L319.443,456.639L320.768,456.354L322.374,456.945L323.598,457.52L324.466,456.764L325.093,456.88L325.476,457.665L326.818,457.466L327.893,456.407L328.753,454.354L330.412,451.799L331.367,451.667L332.061,453.211L333.633,458.088L335.133,458.548L335.208,460.471L333.1,462.764L333.972,463.604L338.928,464.041L339.029,466.833L341.159,465.005L344.687,466.006L349.344,467.708L350.712,469.34L350.253,470.883L353.513,470.024L358.97,471.499L363.159,471.39L367.304,473.699L370.884,476.828L373.044,477.634L375.442,477.747L376.458,478.629L377.41,482.195L377.875,483.894L376.759,488.546L375.332,490.389L371.38,494.329L369.594,497.544L367.518,500.019L366.817,500.075L366.034,502.183L366.233,507.581L365.451,512.059L365.153,513.986L364.267,515.143L363.77,519.082L360.927,522.96L360.45,526.053L358.181,527.357L357.524,529.168L354.478,529.161L350.067,530.326L348.092,531.679L344.952,532.57L341.652,535.01L339.279,538.071L338.871,540.393L339.337,542.12L338.813,545.302L338.177,546.85L336.217,548.604L333.106,554.28L330.641,556.873L328.734,558.412L327.456,561.566L325.601,563.48L324.825,561.585L326.061,560.007L324.439,557.759L322.24,555.944L319.354,553.855L318.313,553.95L315.5,551.446z"
				},
				{
					"id":"BS",
					"title":"Bahamas",
					"d":"M257.857,395.204l-0.688,0.151l-0.712,-1.758l-1.05,-0.887l0.61,-1.951l0.844,0.124l0.981,2.549L257.857,395.204zM257.057,386.514l-3.056,0.499l-0.196,-1.154l1.318,-0.25l1.851,0.094L257.057,386.514zM259.356,386.482l-0.484,2.21l-0.516,-0.397l0.046,-1.625l-1.256,-1.234l-0.006,-0.359L259.356,386.482z"
				},
				{
					"id":"BT",
					"title":"Bhutan",
					"d":"M732.356,382.777L733.498,383.782L733.301,385.707L731.014,385.8L728.646,385.59L726.884,386.079L724.335,384.892L724.275,384.263L726.13,381.922L727.645,381.119L729.648,381.852L731.129,381.929z"
				},
				{
					"id":"BW",
					"title":"Botswana",
					"d":"M547.169,515.946L547.733,516.471L548.615,518.177L551.788,521.432L552.989,521.752L552.996,522.803L553.821,524.698L555.989,525.158L557.776,526.516L553.809,528.737L551.292,531.002L550.358,533.034L549.515,534.185L547.989,534.43L547.497,535.901L547.213,536.864L545.42,537.584L543.138,537.431L541.798,536.565L540.617,536.19L539.249,536.906L538.563,538.389L537.235,539.323L535.833,540.714L533.824,541.033L533.199,539.937L533.457,538.044L531.795,535.111L531.038,534.649L531.037,525.788L533.801,525.683L533.883,515.113L535.971,515.016L540.293,513.99L541.365,515.198L543.155,514.049L544.005,514.043L545.586,513.383L546.09,513.602z"
				},
				{
					"id":"BY",
					"title":"Belarus",
					"d":"M541.099,284.075L543.809,284.107L546.853,282.31L547.504,279.586L549.803,278.024L549.539,275.817L551.244,274.982L554.256,273.053L557.208,274.309L557.606,275.545L559.078,274.952L561.819,276.135L562.093,278.443L561.493,279.757L563.25,282.91L564.392,283.779L564.223,284.637L566.113,285.468L566.921,286.722L565.83,287.744L563.568,287.582L563.028,288.017L563.687,289.557L564.376,292.494L561.969,292.764L561.105,293.759L560.925,296.024L559.81,295.591L557.279,295.806L556.544,294.756L555.493,295.539L554.438,294.89L552.23,294.8L549.101,293.716L546.269,293.361L544.096,293.462L542.56,294.687L541.219,294.862L541.166,292.849L540.301,290.732L541.982,289.792L541.999,287.944L541.221,286.165z"
				},
				{
					"id":"BZ",
					"title":"Belize",
					"d":"M225.309,412.958L225.287,412.527L225.626,412.393L226.135,412.739L227.14,410.968L227.673,410.93L227.683,411.361L228.214,411.374L228.168,412.172L227.714,413.438L227.959,413.891L227.666,414.935L227.842,415.214L227.518,416.685L226.967,417.455L226.46,417.548L225.905,418.552L225.068,418.553L225.287,415.273z"
				},
				{
					"id":"CA",
					"title":"Canada",
					"d":"M198.925,96.233l-0.222,-5.902l3.63,0.579l1.634,0.955l3.351,4.925l-0.76,4.97l-4.148,2.771l-2.284,-3.123L198.925,96.233zM212.14,108.876l0.334,-1.49l-1.968,-2.448l-5.646,-0.194l0.748,3.676l5.254,0.827L212.14,108.876zM248.488,155.832l3.085,5.103l0.812,0.574l3.069,-1.275l3.021,0.201l2.98,0.276l-0.248,-2.643l-4.835,-5.381l-6.417,-1.077l-1.349,0.666L248.488,155.832zM183.063,93.132l-2.708,4.188l6.242,0.516l4.615,4.438l4.579,1.498l-1.092,-5.68l-2.145,-6.726l-7.582,-5.353l-5.504,-2.044l0.204,5.687L183.063,93.132zM208.96,82.895l5.127,-0.116l-2.216,4.002l-0.043,5.297l3.013,5.756l5.811,1.766l4.96,-0.99l5.181,-10.729l3.85,-4.447l-3.38,-4.97l-2.215,-10.648l-4.599,-3.188l-4.718,-3.682l-3.581,-9.561l-6.521,0.937l1.225,4.149l-2.874,1.246l-1.943,5.322l-1.944,7.458l1.776,7.261L208.96,82.895zM145.21,136.272l3.92,1.953l12.667,-1.298l-5.824,4.771l0.357,3.431l4.264,-0.236l7.074,-4.58l9.495,-1.673l1.706,-5.218l-0.493,-5.569l-2.938,-0.502l-2.497,1.929l-1.099,-4.133l-0.945,-5.699l-2.895,-1.415l-2.569,4.411l4.01,11.049l-4.898,-0.851l-4.981,-6.788l-7.891,-3.998l-2.639,3.321L145.21,136.272zM167.773,94.206l-3.646,-2.897l-1.504,-0.659l-2.876,4.284l-0.045,2.002l4.656,0.014L167.773,94.206zM166.305,106.564l0.932,-3.985l-3.954,-2.125l-4.094,1.385l-2.271,4.261l4.159,4.207L166.305,106.564zM195.404,139.803l4.623,-1.106l1.277,-8.252l-0.087,-5.945l-2.144,-5.56l-0.216,1.596l-3.943,-0.699l-4.223,4.087l-3.017,-0.37l0.178,8.924l4.596,-0.868l-0.058,6.465L195.404,139.803zM192.118,185.406l-5.06,-3.927l-4.709,-4.208l-0.869,-6.18l-1.76,-8.925l-3.141,-3.839l-2.787,-1.547l-2.467,1.417l1.992,9.586l-1.409,3.731l-2.294,-8.979l-2.562,-3.105l-3.168,4.814l-3.899,-4.76l-6.239,2.868l1.399,-4.463l-2.865,-1.875l-7.507,5.838l-1.952,3.711l-2.354,6.771l4.896,2.317l4.325,-0.122l-6.503,3.461l1.479,3.129l3.976,0.169l5.991,-0.669l5.422,1.959l-3.66,1.445l-3.953,-0.372l-4.328,1.409l-1.865,0.874l3.455,6.354l2.489,-0.883l3.828,2.145l1.519,3.651l4.988,-0.725l7.105,-1.157l5.264,-2.646l3.26,-0.479l4.823,2.115l5.074,1.219l0.945,-2.859l-1.789,-3.049l4.604,-0.645L192.118,185.406zM199.863,184.425l-1.96,3.539l-2.468,2.486l3.829,3.541l2.284,-0.854l3.779,2.358l1.743,-2.732l-1.709,-3.03l-0.841,-1.526l-1.682,-1.458L199.863,184.425zM182.25,154.982l-2.131,-2.175l-3.757,0.397l-0.953,1.384l4.374,6.752L182.25,154.982zM210.937,168.154l3.008,-6.927l3.343,-1.848l4.189,-8.743l-5.356,-2.47l-5.842,-0.357l-2.782,2.77l-1.465,4.231l-0.043,4.817l1.75,8.188L210.937,168.154zM228.092,145.149l5.756,-0.185l8.043,-1.614l3.589,1.275l4.181,-2.26l1.749,-2.84l-0.626,-4.519l-3.003,-4.229l-4.556,-0.801l-5.709,0.969l-4.457,2.441l-4.091,-0.939l-3.782,-0.495l-1.781,-2.702l-3.217,-2.614l0.639,-4.433l-2.42,-3.982l-5.52,0.027l-3.113,-3.988l-5.779,-0.799l-1.055,5.096l3.25,3.745l5.8,1.454l2.815,5.095l0.341,5.602l0.97,5.99l7.452,3.417L228.092,145.149zM139.073,126.88l5.212,-5.053l2.62,-0.587l2.16,-4.228l0.385,-9.769l-3.846,1.914l-4.3,-0.18l-5.758,8.189l-4.759,8.977l3.799,2.51L139.073,126.88zM211.251,143.053l1.525,-4.14l-1.023,-3.458l-2.448,-3.918l-4.031,3.018l-1.493,4.924l3.399,2.787L211.251,143.053zM202.943,154.49l-0.729,-2.881l-5.002,1.264l-3.344,-2.107l-3.318,4.804l3.089,6.282l-5.725,-1.174l-0.056,3.011l6.968,7.046l1.94,3.38l2.701,0.731l4.598,-3.413l0.504,-8.211l-4.244,-4.074L202.943,154.49zM128.949,308.228l-1.157,-2.344l-2.799,-1.769l-1.386,-2.053l-0.954,-1.505l-2.635,-0.464l-1.721,-0.667l-2.943,-0.962l-0.242,1.021l1.08,2.38l2.886,0.781l0.505,1.231l2.509,1.502l0.841,1.513l4.604,1.92L128.949,308.228zM250.655,230.599l-2.002,-2.109l-2.063,0.498l-0.249,-3.062l-3.212,-2.035l-3.07,-2.267l-1.63,-1.753l-1.435,1.034l-0.521,-2.963l-2.026,-0.555l-0.956,6.134l-0.358,5.107l-2.438,3.136l3.8,-0.604l0.963,3.65l3.99,-3.225l2.78,-3.379l1.575,2.863l4.363,1.511L250.655,230.599zM130.121,178.055l7.38,-4.179v-3.874l3.477,-6.407l6.875,-6.689l3.525,-2.467l-3.01,-4.199l-2.723,-2.953l-7.162,-0.572l-4.004,-2.156l-9.477,1.625l2.742,6.225l-2.432,6.431l-1.942,6.866l-1.203,3.858l6.474,4.694L130.121,178.055zM264.358,205.358l0.316,-1.009l-0.031,-3.175l-2.189,-2.084l-2.57,1.047l-1.191,4.167l0.7,3.559l3.143,-0.361L264.358,205.358zM288.177,212.904l4.408,6.601l3.45,2.855l4.921,-7.87l0.873,-4.933l-4.41,-0.474l-4.03,-6.696l-4.451,-1.64l-6.604,-4.968l5.148,-3.634l-2.652,-7.542l-2.442,-3.354l-6.769,-3.352l-2.922,-5.549l-5.207,1.991l-0.363,-3.863l-3.862,-4.322l-6.221,-4.714l-2.652,3.714l-5.547,2.662l0.417,-6.064l-4.81,-10.052l-7.106,4.063l-2.591,7.701l-2.209,-5.923l2.063,-6.371l-7.24,2.651l-2.883,3.991l-2.155,8.421l0.889,9.051l3.983,0.038l-2.932,3.924l2.332,2.961l4.547,1.255l5.931,2.417l10.204,1.818l5.083,-1.044l1.501,-2.42l2.211,2.788l2.471,0.462l2.968,4.965l-1.796,1.98l5.68,2.626l4.295,3.678l1.081,2.55l0.771,3.239l-3.627,6.925l-0.979,3.443l0.937,2.423l-5.772,0.859l-5.269,0.119l-1.847,4.869l2.372,2.226l8.107,-1.031l-0.045,-1.889l4.083,3.148l4.183,3.276l-0.979,1.773l3.398,3.021l6.017,3.535l7.604,2.391l-0.456,-2.089l-2.92,-3.672l-3.963,-5.373l7.033,4.997l3.536,1.66l0.966,-4.438l-1.825,-6.298l-1.155,-1.729l-3.806,-3.035l-2.949,-3.911l0.354,-3.942L288.177,212.904zM222.346,51.338l2.336,7.293l4.957,5.88l9.811,-1.088l6.313,1.968l-4.375,6.053l-2.214,-1.776l-7.664,-0.712l1.19,8.314l3.96,6.036l-0.795,5.201l-4.972,3.462l-2.271,5.471l4.548,2.646l3.823,8.549l-7.497,-5.703l-1.71,0.941l1.381,9.377l-5.184,2.833l0.352,5.851l5.301,0.626l4.173,1.438l8.236,-1.845l7.327,3.269l7.492,-7.191l-0.061,-3.019l-4.791,0.482l-0.392,-2.841l3.917,-3.829l1.33,-5.151l4.332,-3.829l2.664,-4.762l-2.319,-7.103l1.938,-2.649l-3.865,-1.887l8.489,-1.628l1.787,-3.147l5.784,-2.604l4.795,-13.473l4.569,-4.943l6.616,-11.124l-6.104,0.098l2.535,-4.303l6.784,-3.993l6.841,-8.903l0.123,-5.731l-5.131,-6.042l-6.021,-2.93l-7.494,-1.819l-6.072,-1.489l-6.073,-1.503l-8.095,3.977l-1.49,-2.527l-8.57,0.976l-5.028,2.571l-3.701,3.65L242.028,30.5L239,24.517l-3.477,-1.142l-4.122,7.97l-5.501,3.348l-3.274,0.664l-4.169,3.837l0.614,6.646L222.346,51.338zM296.747,316.344l-0.982,-1.984l-1.059,1.262l0.701,1.361l3.556,1.713l1.039,-0.262l1.379,-1.656l-2.6,0.111L296.747,316.344zM239.747,238.477l0.614,1.63l1.979,0.138l3.282,-3.337l0.06,-1.188l-3.851,-0.059L239.747,238.477zM301.875,304.917l-2.867,-1.799l-3.687,-1.087l-0.97,0.365l2.607,2.039l3.634,1.343l1.365,-0.076L301.875,304.917zM326.765,309.712l-0.357,-2.235l-1.962,0.723l0.868,-3.113l-2.796,-1.321l-1.293,1.047l-2.488,-1.179l0.984,-1.509l-1.883,-0.933l-1.83,1.469l1.855,-3.825l1.497,-2.8l0.542,-1.217l-1.301,-0.197l-2.433,1.547l-1.738,2.529l-2.897,6.917l-2.354,2.558l1.22,1.144l-1.747,1.473l0.43,1.231l5.442,0.126l3.013,-0.248l2.69,1.005l-1.98,1.932l1.673,0.142l3.253,-3.576l0.781,0.528l-0.608,3.367l1.843,0.77l1.269,-0.151l1.18,-3.614L326.765,309.712zM305.569,314.475l-2.811,4.56l-4.633,0.581l-3.642,-2.009l-0.915,-3.07l-0.889,-4.462l2.648,-2.829l-2.482,-2.089l-4.195,0.426l-5.881,3.53l-4.501,5.452l-2.381,0.672l3.227,-3.804l4.044,-5.574l3.575,-1.899l2.348,-3.112l2.904,-0.303l4.208,0.031l5.997,0.919l4.74,-0.708l3.528,-3.624l4.621,-1.587l2.012,-1.58l2.035,-1.706l-0.205,-5.188l-1.126,-1.772l-2.184,-0.628l-1.111,-4.047l-1.8,-1.548l-4.471,-1.264l-2.521,-2.822l-3.729,-2.826l1.127,-3.197l-3.101,-6.26l-3.651,-6.893l-2.184,-4.983l-1.855,2.611l-2.682,6.053l-4.06,2.973l-2.032,-3.155l-2.561,-0.847l-0.932,-6.99l0.084,-4.797l-5,-0.438l-0.851,-2.266l-3.453,-3.436l-2.611,-2.039l-2.322,1.583l-2.883,-0.585l-4.807,-1.646l-1.952,1.397l0.937,9.177l1.222,5.116l-3.309,5.751l3.406,4.022l1.904,4.44l0.229,3.422l-1.554,3.504l-3.177,3.461l-4.489,2.281l1.978,2.529l1.464,7.402l-1.517,4.676l-2.159,1.458l-4.172,-4.283l-2.031,-5.168l-0.872,-4.759l0.458,-4.194l-3.05,-0.474l-4.63,-0.283l-2.971,-2.082l-3.513,-1.373l-2.006,-2.379l-2.803,-1.935l-5.21,-2.229l-3.923,1.02l-1.311,-3.947l-1.263,-4.99l-4.12,-0.902l0.155,-6.411l1.087,-4.483l3.041,-6.6l3.431,-4.902l3.262,-0.769l0.186,-4.048l2.213,-2.682l4.014,-0.424l3.252,-4.392l0.818,-2.897l2.703,-5.725l0.836,-3.5l2.899,2.107l3.899,-1.076l5.49,-4.964l0.357,-3.539l-1.977,-3.98l2.086,-4.057l-0.169,-3.865l-3.763,-3.953l-4.145,-1.19l-3.985,-0.624l-0.153,8.714l-2.045,6.555l-2.928,5.304l-2.712,-4.946l0.835,-5.606l-3.352,-5.018l-3.747,6.09l0.012,-7.991l-5.214,-1.626l2.488,-4.014l-3.809,-9.586L212,170.539l-3.698,-1.442l-3.315,6.428l-0.225,9.343l3.272,3.292l3.004,4.906l-1.268,7.708l-2.255,-0.202l-1.785,5.884l0.017,-7.004l-4.345,-2.583l-2.493,1.335l0.324,4.672l-4.09,-0.178l-4.353,1.173l-4.954,-3.353l-3.131,0.598l-2.818,-4.114l-2.263,-1.84l-2.243,0.773l-3.413,0.355l-1.811,2.614l2.862,3.187l-3.05,3.725l-2.989,-4.423l-2.388,1.302l-7.568,0.873l-5.068,-1.589l3.945,-3.736l-3.782,-3.902l-2.747,0.5l-3.859,-1.323l-6.562,-2.891l-4.288,-3.373l-3.396,-0.469l-1.059,2.357l-3.445,1.311l-0.379,-6.15l-3.733,5.505l-4.741,-7.321l-1.938,-0.892l-0.626,3.905l-2.092,1.904l-1.926,-3.393l-4.589,2.048l-4.2,3.551l-4.165,-0.98l-3.396,2.495l-2.461,3.276l-2.924,-0.717l-4.414,-3.8l-5.23,-1.936l-0.019,27.648l-0.015,35.43l2.761,0.167l2.731,1.556l1.958,2.436l2.491,3.596l2.728,-3.054l2.815,-1.793l1.488,2.855l1.889,2.229l2.567,2.424l1.753,3.794l2.867,5.881l4.767,3.204l0.078,3.124l-1.559,2.355l0.059,2.484l3.392,3.449l0.492,3.761l3.587,1.958l-0.399,2.79l1.562,3.958l5.078,1.825l2.003,1.887l5.428,4.227l0.376,0.011h7.963h8.324h2.756h8.546h8.271h8.412l8.417,0l9.528,0l9.593,-0.003l5.803,0.003l0.008,-1.644l0.949,-0.021l0.498,2.345l0.872,0.718l1.958,0.26l2.863,0.672l2.72,1.303l2.271,-0.545l3.449,1.089l1.138,-1.659l1.591,-0.663l0.623,-1.032l0.632,-0.554l2.607,0.856l1.932,0.102l0.67,0.566l0.938,2.382l3.147,0.627l-0.495,1.182l1.109,1.212l-0.478,1.56l1.177,0.513l-0.587,1.372l0.752,0.125l0.527,-0.597l0.55,0.898l2.103,0.501l2.132,0.042l2.273,0.412l2.508,0.779l0.915,1.256l1.816,3.037l-0.903,1.299l-2.279,-0.54l-1.415,-2.441l0.355,2.486l-1.337,2.17l0.147,1.838l-0.231,1.074l-1.815,1.267l-1.318,2.091l-0.617,1.321l1.539,0.237l2.081,-1.201l1.225,-1.059l0.833,-0.173l1.542,0.382l0.746,-0.591l1.368,-0.481l2.443,-0.469v0.002l0,-0.002l-0.249,-1.15l-0.134,0.044l-0.856,0.198l-1.118,-0.363l0.839,-1.317l0.855,-0.457l1.979,-0.565l2.37,-0.528l1.244,0.734l0.782,-0.851l0.889,-0.54l0.596,0.286l0.032,0.061l2.87,-2.73l1.265,-0.726l4.26,-0.027l5.167,-0.003l0.281,-0.978l0.897,-0.2l1.191,-0.616l0.995,-1.82l0.855,-3.148l2.139,-3.097l0.932,1.083l1.88,-0.7l1.245,1.187l-0.002,5.525l1.833,2.251l3.116,-0.483l4.488,-0.13l-4.868,3.261l0.107,3.291l2.129,0.283l3.133,-2.793l2.781,-1.584l6.21,-2.351l3.469,-2.616l-1.811,-1.46L305.569,314.475zM251.905,243.372l1.098,-3.124l-0.713,-1.233l-1.148,-0.132l-1.082,1.804l-0.131,0.413l0.736,1.771L251.905,243.372zM109.249,279.8L109.249,279.8l1.559,-2.354L109.249,279.8z"
				},
				{
					"id":"CD",
					"title":"Democratic Republic of Congo",
					"d":"M561.707,453.605L561.537,456.867L562.661,457.244L561.759,458.233L560.682,458.974L559.61,460.426L559.021,461.721L558.862,463.957L558.213,465.021L558.189,467.121L557.383,467.898L557.279,469.556L556.894,469.771L556.635,471.296L557.34,472.564L557.518,475.931L558.022,478.503L557.742,479.958L558.303,481.584L559.929,483.154L561.443,486.696L560.339,486.41L556.573,486.885L555.821,487.222L555.022,489.021L555.65,490.267L555.152,493.618L554.805,496.469L555.562,496.976L557.522,498.084L558.292,497.566L558.526,500.646L556.38,500.622L555.229,499.049L554.196,497.833L552.047,497.435L551.418,495.943L549.704,496.841L547.458,496.444L546.521,495.153L544.741,494.891L543.427,494.96L543.267,494.077L542.299,494.006L541.022,493.839L539.286,494.264L538.067,494.194L537.373,494.454L537.523,491.083L536.588,490.034L536.382,488.299L536.795,486.601L536.227,485.515L536.175,483.747L532.773,483.771L533.018,482.76L531.587,482.771L531.436,483.257L529.697,483.366L528.993,485.003L528.573,485.707L527.024,485.31L526.099,485.705L524.245,485.933L523.171,484.462L522.526,483.554L521.722,481.872L521.03,479.784L512.756,479.747L511.773,480.083L510.96,480.031L509.803,480.407L509.411,479.539L510.124,479.243L510.211,478.023L510.67,477.304L511.69,476.717L512.427,477.001L513.386,475.932L514.913,475.959L515.093,476.75L516.141,477.245L517.79,475.494L519.424,474.13L520.132,473.237L520.038,470.942L521.256,468.234L522.541,466.799L524.387,465.457L524.709,464.568L524.779,463.547L525.236,462.581L525.089,461.002L525.438,458.533L525.987,456.794L526.826,455.304L526.993,453.619L527.245,451.672L528.336,450.254L529.838,449.354L532.145,450.304L533.931,451.334L535.982,451.609L538.074,452.154L538.912,450.467L539.297,450.252L540.575,450.533L543.696,449.138L544.803,449.729L545.71,449.645L546.131,448.965L547.173,448.726L549.282,449.02L551.081,449.084L552.006,448.788L553.705,451.095L554.964,451.434L555.714,450.965L557.011,451.148L558.572,450.558L559.238,451.75z"
				},
				{
					"id":"CF",
					"title":"Central African Republic",
					"d":"M518.094,442.656L520.413,442.444L520.929,441.722L521.394,441.776L522.094,442.413L525.624,441.337L526.814,440.239L528.277,439.255L527.999,438.263L528.79,438.003L531.498,438.179L534.136,436.871L536.163,433.785L537.586,432.637L539.361,432.152L539.679,433.367L541.296,435.138L541.304,436.291L540.849,437.466L541.028,438.343L542.001,439.155L544.136,440.386L545.671,441.522L545.697,442.436L547.583,443.898L548.751,445.112L549.459,446.793L551.555,447.901L552.006,448.788L551.081,449.084L549.282,449.02L547.173,448.726L546.131,448.965L545.71,449.645L544.803,449.729L543.696,449.138L540.575,450.533L539.297,450.252L538.912,450.467L538.074,452.154L535.982,451.609L533.931,451.334L532.145,450.304L529.838,449.354L528.336,450.254L527.245,451.672L526.993,453.619L525.189,453.463L523.292,452.994L521.621,454.473L520.15,457.068L519.855,456.26L519.729,454.988L518.447,454.091L517.412,452.65L517.173,451.648L515.848,450.189L516.074,449.356L515.795,448.178L516.011,446.008L516.684,445.499z"
				},
				{
					"id":"CG",
					"title":"Republic of Congo",
					"d":"M511.69,476.717L510.64,475.758L509.792,476.228L508.661,477.435L506.358,474.476L508.493,472.935L507.436,471.091L508.397,470.39L510.289,470.048L510.512,468.813L512.01,470.151L514.485,470.269L515.346,468.952L515.7,467.099L515.394,464.924L514.067,463.277L515.281,460.051L514.582,459.498L512.496,459.725L511.712,458.285L511.916,457.069L515.454,457.179L517.721,457.914L519.949,458.573L520.15,457.068L521.621,454.473L523.292,452.994L525.189,453.463L526.993,453.619L526.826,455.304L525.987,456.794L525.438,458.533L525.089,461.002L525.236,462.581L524.779,463.547L524.709,464.568L524.387,465.457L522.541,466.799L521.256,468.234L520.038,470.942L520.132,473.237L519.424,474.13L517.79,475.494L516.141,477.245L515.093,476.75L514.913,475.959L513.386,475.932L512.427,477.001z"
				},
				{
					"id":"CH",
					"title":"Switzerland",
					"d":"M502.154,312.344L502.262,313.078L501.833,314.085L503.102,314.832L504.533,314.943L504.311,316.613L503.075,317.297L501,316.789L500.393,318.419L499.058,318.547L498.572,317.908L497,319.272L495.648,319.463L494.441,318.603L493.479,316.832L492.14,317.466L492.181,315.628L494.231,313.325L494.141,312.275L495.419,312.656L496.188,311.949L498.573,311.978L499.149,311.075z"
				},
				{
					"id":"CI",
					"title":"Côte d'Ivoire",
					"d":"M467.245,449.457L465.969,449.486L464.013,448.939L462.215,448.971L458.894,449.459L456.947,450.266L454.171,451.291L453.629,451.218L453.845,448.916L454.113,448.565L454.027,447.463L452.84,446.29L451.949,446.103L451.132,445.333L451.741,444.088L451.461,442.73L451.59,441.914L452.035,441.91L452.2,440.684L451.983,440.14L452.251,439.749L453.293,439.41L452.6,437.153L451.954,435.985L452.179,435.025L452.738,434.806L453.104,434.548L453.88,434.974L456.045,434.997L456.561,434.17L457.045,434.226L457.854,433.906L458.289,435.117L458.943,434.76L460.1,434.341L461.361,434.958L461.851,435.894L463.112,436.49L464.092,435.779L465.406,435.672L467.325,436.401L468.069,440.413L466.887,442.774L466.156,445.942L467.372,448.354z"
				},
				{
					"id":"CL",
					"title":"Chile",
					"d":"M282.813,636.726l0.002,10.568l3.002,0.003l1.689,0.13l-0.929,1.978l-2.404,1.532l-1.378,-0.157l-1.66,-0.4l-2.036,-1.479l-2.937,-0.707l-3.528,-2.71l-2.864,-2.573l-3.862,-5.254l2.312,0.974l3.937,3.133l3.719,1.704l1.447,-2.174l0.909,-3.202l2.584,-1.907L282.813,636.726zM283.975,524.724l1.098,4.15l2.023,-0.415l0.34,0.758l-0.962,3.159l-3.054,1.509l0.089,5.143l-0.585,1.001l0.839,1.225l-1.979,1.95l-1.836,2.963l-1.002,2.896l0.265,3.115l-1.728,3.343l1.292,5.694l0.728,0.609l-0.007,3.086l-1.6,3.313l0.065,2.868l-2.123,2.263l0.009,3.217l0.853,3.462l-1.679,1.3l-0.75,3.223l-0.659,3.751l0.474,4.543l-1.127,0.767l0.655,4.395l1.266,1.462l-0.924,1.63l1.301,0.782l0.3,1.478l-1.224,0.748l0.301,2.331l-1.024,5.35l-1.486,3.52l0.326,2.112l-0.889,2.68l-2.151,1.878l0.245,4.599l0.988,1.596l1.867,-0.284l-0.054,3.332l1.162,2.632l6.775,0.608l2.599,0.715l-2.495,-0.034l-1.35,1.128l-2.53,1.669l-0.452,4.378l-1.187,0.11l-3.164,-1.535l-3.209,-3.251l0,0l-3.488,-2.632l-0.878,-2.874l0.794,-2.623l-1.411,-2.937l-0.359,-7.344l1.192,-4.033l2.961,-3.187l-4.256,-1.19l2.67,-3.569l0.955,-6.557l3.116,1.374l1.465,-7.97l-1.881,-1.003l-0.876,4.749l-1.769,-0.541l0.881,-5.42l0.956,-6.843l1.288,-2.478l-0.807,-3.495l-0.231,-3.977l1.182,-0.114l1.72,-5.596l1.938,-5.432l1.187,-4.968l-0.646,-4.912l0.837,-2.671l-0.336,-3.955l1.64,-3.867l0.505,-6.038l0.9,-6.374l0.877,-6.747l-0.205,-4.874l-0.584,-4.153l1.442,-0.749l0.751,-1.501l1.374,1.992l0.375,2.122l1.471,1.25l-0.883,2.868L283.975,524.724z"
				},
				{
					"id":"CM",
					"title":"Cameroon",
					"d":"M511.916,457.069L511.566,456.917L509.907,457.276L508.203,456.903L506.871,457.086L502.308,457.022L502.717,454.821L501.622,452.977L500.342,452.503L499.772,451.252L499.054,450.852L499.086,450.079L499.808,448.1L501.142,445.398L501.953,445.373L503.623,443.731L504.686,443.685L506.26,444.838L508.187,443.893L508.449,442.726L509.079,441.594L509.513,440.17L511.012,439.01L511.578,437.035L512.173,436.406L512.568,434.936L513.31,433.128L515.671,430.931L515.82,429.985L516.125,429.471L515.015,428.335L515.105,427.426L515.897,427.262L517.012,429.09L517.199,430.979L517.097,432.865L518.623,435.44L517.057,435.412L516.266,435.614L514.988,435.33L514.378,436.664L516.034,438.311L517.255,438.789L517.649,439.955L518.534,441.895L518.094,442.656L516.684,445.499L516.011,446.008L515.795,448.178L516.074,449.356L515.848,450.189L517.173,451.648L517.412,452.65L518.447,454.091L519.729,454.988L519.855,456.26L520.15,457.068L519.949,458.573L517.721,457.914L515.454,457.179z"
				},
				{
					"id":"CN",
					"title":"China",
					"d":"M784.628,410.405l-2.423,1.412l-2.299,-0.91l-0.081,-2.535l1.382,-1.341l3.063,-0.831l1.612,0.071l0.627,1.131l-1.232,1.301L784.628,410.405zM833.186,302.885l4.88,1.379l3.321,3.035l1.135,3.945l4.261,0.005l2.431,-1.647l4.634,-1.239l-1.474,3.761l-1.089,1.512l-0.961,4.462l-1.886,3.888l-3.402,-0.703l-2.407,1.4l0.739,3.357l-0.404,4.553l-1.432,0.103l0.017,1.929l-1.811,-2.244l-1.114,2.13l-4.33,1.625l0.438,1.975l-2.424,-0.136l-1.331,-1.172l-1.927,2.644l-3.09,1.984l-2.283,2.347l-3.92,1.057l-2.064,1.689l-3.02,0.981l1.49,-1.668l-0.587,-1.411l2.221,-2.454l-1.481,-1.93l-2.444,1.302l-3.165,2.544l-1.728,2.34l-2.75,0.173l-1.431,1.676l1.479,2.409l2.294,0.582l0.095,1.583l2.218,1.025l3.143,-2.513l2.489,1.374l1.813,0.093l0.455,1.836l-3.97,0.974l-1.311,1.872l-2.727,1.728l-1.439,2.393l3.019,1.864l1.102,3.307l1.706,3.046l1.904,2.529l-0.046,2.426l-1.76,0.887l0.671,1.725l1.65,1l-0.431,2.609l-0.712,2.518l-1.567,0.284l-2.047,3.407l-2.271,4.086l-2.604,3.676l-3.855,2.818l-3.9,2.553l-3.159,0.347l-1.714,1.34l-0.97,-0.979l-1.586,1.498l-3.919,1.504l-2.967,0.459l-0.957,3.151l-1.554,0.174l-0.735,-2.162l0.664,-1.157l-3.762,-0.959l-1.325,0.488l-2.823,-0.778l-1.335,-1.222l0.443,-1.738l-2.563,-0.553l-1.352,-1.138l-2.39,1.615l-2.726,0.349l-2.236,-0.016l-1.505,0.737l-1.453,0.442l0.424,3.433l-1.495,-0.082l-0.252,-0.703l-0.085,-1.24l-2.057,0.874l-1.214,-0.552l-2.082,-1.128l0.816,-2.507l-1.775,-0.587l-0.669,-2.801l-2.96,0.506l0.337,-3.635l2.655,-2.58l0.113,-2.566l-0.083,-2.398l-1.224,-0.75l-0.937,-1.86l-1.641,0.235l-3.023,-0.474l0.947,-1.334l-1.314,-1.986l-1.999,1.346l-2.352,-0.785l-3.232,2.03l-2.552,2.355l-2.262,0.395l-1.228,-0.849l-1.48,-0.077l-2.004,-0.732l-1.515,0.803l-1.854,2.341l-0.235,-2.481l-1.71,0.665l-3.27,-0.309l-3.172,-0.725l-2.275,-1.393l-2.179,-0.627l-0.941,-1.533l-1.575,-0.459l-2.831,-2.094l-2.248,-0.993l-1.162,0.773l-3.896,-2.265l-2.755,-2.065l-0.786,-3.629l2.012,0.445l0.092,-1.694l-1.115,-1.708l0.284,-2.744l-3.014,-3.989l-4.611,-1.39l-0.83,-2.661l-2.071,-1.627l-0.499,-1.007l-0.421,-2.012l0.098,-1.381l-1.703,-0.812l-0.921,0.359l-0.711,-3.324l0.798,-0.829l-0.387,-0.85l2.677,-1.726l1.938,-0.718l2.968,0.492l1.061,-2.354l3.597,-0.44l0.999,-1.478l4.419,-2.031l0.394,-0.853l-0.224,-2.165l1.924,-0.995l-2.524,-6.754l5.555,-1.582l1.436,-0.886l2.022,-7.262l5.563,1.353l1.56,-1.86l0.134,-4.186l2.329,-0.395l2.134,-2.831l1.098,-0.352l0.736,2.97l2.356,2.23l3.999,1.565l1.935,3.319l-1.079,4.728l1.009,1.729l3.332,0.678l3.776,0.552l3.388,2.448l1.732,0.433l1.277,3.568l1.646,2.269l3.091,-0.088l5.787,0.852l3.729,-0.528l2.768,0.565l4.148,2.291l3.393,-0.003l1.241,1.164l3.265,-2.014l4.529,-1.312l4.202,-0.144l3.276,-1.337l2.012,-2.051l1.963,-1.297l-0.454,-1.28l-0.896,-1.499l1.473,-2.538l1.577,0.358l2.882,0.8l2.794,-2.101l4.275,-1.546l2.055,-2.662l1.974,-1.156l4.072,-0.541l2.213,0.459l0.307,-1.453l-2.541,-2.887l-2.25,-1.333l-2.155,1.538l-2.766,-0.647l-1.587,0.528l-0.723,-1.706l1.981,-4.228l1.365,-3.247l3.365,1.632l3.952,-2.739l-0.026,-1.929l2.531,-4.725l1.56,-1.45l-0.035,-2.522l-1.538,-1.095l2.315,-2.313l3.484,-0.845l3.718,-0.127l4.196,1.394l2.462,1.711l1.733,4.611l1.051,1.937l0.977,2.731L833.186,302.885z"
				},
				{
					"id":"CO",
					"title":"Colombia",
					"d":"M263.917,463.809L262.717,463.149L261.341,462.227L260.544,462.669L258.165,462.283L257.481,461.085L256.959,461.129L254.154,459.539L253.774,458.674L254.82,458.465L254.696,457.069L255.354,456.059L256.745,455.872L257.925,454.12L258.998,452.655L257.965,451.991L258.494,450.37L257.861,447.812L258.462,447.077L258.02,444.707L256.885,443.212L257.244,441.847L258.147,442.048L258.676,441.213L258.025,439.555L258.366,439.143L259.814,439.232L261.918,437.264L263.073,436.963L263.1,436.029L263.617,433.637L265.225,432.321L266.992,432.267L267.215,431.675L269.409,431.912L271.615,430.477L272.708,429.84L274.065,428.467L275.059,428.642L275.794,429.392L275.25,430.351L273.449,430.828L272.737,432.248L271.652,433.062L270.837,434.115L270.494,436.134L269.717,437.786L271.164,437.975L271.523,439.271L272.142,439.89L272.364,441.023L272.031,442.064L272.129,442.65L272.819,442.885L273.487,443.864L277.093,443.594L278.722,443.951L280.695,446.364L281.828,446.064L283.848,446.214L285.446,445.895L286.438,446.376L285.933,447.884L285.307,448.823L285.087,450.828L285.651,452.684L286.448,453.513L286.545,454.138L285.124,455.526L286.141,456.141L286.887,457.115L287.742,459.894L287.212,460.237L286.666,458.594L285.887,457.71L284.959,458.671L279.497,458.608L279.531,460.352L281.174,460.64L281.079,461.707L280.519,461.418L278.939,461.877L278.925,463.901L280.169,464.917L280.608,466.512L280.542,467.72L279.282,475.367L277.878,473.883L277.041,473.817L278.85,470.978L276.703,469.672L275.02,469.912L274.007,469.43L272.462,470.167L270.375,469.817L268.723,466.896L267.425,466.178L266.53,464.864L264.665,463.544z"
				},
				{
					"id":"CR",
					"title":"Costa Rica",
					"d":"M242.629,440.397L241.107,439.773L240.539,439.182L240.861,438.692L240.759,438.069L239.982,437.394L238.879,436.839L237.914,436.477L237.729,435.65L236.994,435.145L237.174,435.967L236.614,436.642L235.974,435.858L235.073,435.579L234.689,435.008L234.706,434.146L235.077,433.254L234.285,432.854L234.928,432.306L235.35,431.94L237.197,432.692L237.842,432.322L238.731,432.559L239.196,433.143L240.023,433.332L240.695,432.73L241.405,434.271L242.489,435.41L243.806,436.616L242.721,436.869L242.737,438.005L243.321,438.424L242.901,438.758L243.011,439.268L242.777,439.839z"
				},
				{
					"id":"CU",
					"title":"Cuba",
					"d":"M244.585,396.94L247.007,397.156L249.21,397.19L251.843,398.222L252.959,399.327L255.578,398.986L256.571,399.695L258.946,401.557L260.691,402.907L261.614,402.866L263.287,403.476L263.083,404.315L265.149,404.438L267.269,405.656L266.936,406.352L265.072,406.729L263.185,406.875L261.253,406.641L257.238,406.93L259.118,405.273L257.975,404.5L256.167,404.301L255.199,403.44L254.534,401.736L252.95,401.853L250.335,401.048L249.494,400.418L245.839,399.951L244.86,399.364L245.912,398.61L243.162,398.455L241.147,400.022L239.985,400.064L239.583,400.798L238.195,401.126L236.996,400.842L238.476,399.913L239.083,398.825L240.351,398.153L241.783,397.563L243.906,397.273z"
				},
				{
					"id":"CY",
					"title":"Cyprus",
					"d":"M570.306,358.286L572.2,356.827L569.651,357.851L567.631,357.804L567.226,358.629L567.028,358.647L565.696,358.773L566.351,360.14L567.724,360.58L570.598,359.2L570.51,358.926z"
				},
				{
					"id":"CZ",
					"title":"Czechia",
					"d":"M522.807,307.861L521.515,307.061L520.198,307.281L518.021,305.983L517.034,306.302L515.457,308.037L513.374,306.673L511.791,304.837L510.36,303.804L510.063,301.979L509.572,300.683L511.61,299.729L512.651,298.631L514.665,297.773L515.368,296.927L516.107,297.438L517.358,296.974L518.688,298.403L520.784,298.788L520.609,299.999L522.132,300.904L522.55,299.773L524.474,300.264L524.739,301.631L526.824,301.895L528.114,304.025L527.278,304.03L526.844,304.804L526.2,304.99L526.017,305.963L525.48,306.165L525.404,306.561L524.447,307L523.205,306.929z"
				},
				{
					"id":"DE",
					"title":"Germany",
					"d":"M503.072,278.923L503.122,280.798L505.956,281.92L505.926,283.617L508.776,282.721L510.353,281.407L513.519,283.299L514.842,284.812L515.498,287.205L514.716,288.449L515.734,290.098L516.428,292.547L516.209,294.11L517.358,296.974L516.107,297.438L515.368,296.927L514.665,297.773L512.651,298.631L511.61,299.729L509.572,300.683L510.063,301.979L510.36,303.804L511.791,304.837L513.374,306.673L512.385,308.624L511.378,309.158L511.775,311.878L511.514,312.582L510.64,311.733L509.295,311.606L507.291,312.35L504.818,312.173L504.419,313.264L503,312.116L502.154,312.344L499.149,311.075L498.573,311.978L496.188,311.949L496.544,308.974L497.962,306.074L493.922,305.288L492.599,304.165L492.757,302.27L492.197,301.287L492.515,298.319L492.044,293.629L493.729,293.627L494.439,291.916L495.138,287.691L494.614,286.108L495.162,285.11L497.505,284.853L498.025,285.893L499.929,283.56L499.288,281.767L499.159,279.022L501.278,279.664z"
				},
				{
					"id":"DJ",
					"title":"Djibouti",
					"d":"M596.046,427.719L596.71,428.602L596.622,429.785L595.022,430.466L596.226,431.245L595.193,432.764L594.571,432.258L593.896,432.46L592.33,432.412L592.285,431.548L592.066,430.764L593.015,429.429L594,428.168L595.201,428.416z"
				},
				{
					"id":"DK",
					"title":"Denmark",
					"d":"M510.834,275.843l-1.683,3.971l-2.934,-2.761l-0.391,-2.054l4.113,-1.656L510.834,275.843zM505.849,271.592l-0.685,1.901l-0.835,-0.545l-2.019,3.587l0.762,2.389l-1.794,0.741l-2.119,-0.642l-1.138,-2.723l-0.085,-5.12l0.467,-1.375l0.804,-1.54l2.47,-0.32l0.984,-1.429l2.256,-1.473l-0.095,2.676l-0.83,1.676l0.336,1.429L505.849,271.592z"
				},
				{
					"id":"DO",
					"title":"Dominican Republic",
					"d":"M274.182,407.348L274.533,406.843L276.721,406.856L278.382,407.619L279.121,407.544L279.63,408.593L281.165,408.534L281.074,409.413L282.321,409.52L283.7,410.6L282.658,411.795L281.325,411.157L280.038,411.28L279.115,411.14L278.61,411.676L277.533,411.856L277.106,411.145L276.18,411.566L275.057,413.572L274.335,413.107L274.193,412.265L274.251,411.468L273.529,410.586L274.213,410.09L274.427,408.957z"
				},
				{
					"id":"DZ",
					"title":"Algeria",
					"d":"M508.898,396.081L499.29,401.833L491.172,407.683L487.218,409L484.108,409.289L484.076,407.409L482.777,406.928L481.032,406.079L480.365,404.686L470.907,398.139L461.449,391.485L450.903,383.96L450.957,383.352L450.956,383.141L450.932,379.389L455.46,377.03L458.26,376.541L460.555,375.676L461.627,374.059L464.905,372.775L465.026,370.358L466.648,370.072L467.917,368.856L471.586,368.301L472.1,367.016L471.361,366.311L470.393,362.782L470.226,360.729L469.169,358.551L471.864,356.678L474.896,356.08L476.666,354.655L479.366,353.598L484.118,352.978L488.756,352.694L490.17,353.212L492.81,351.836L495.806,351.809L496.947,352.623L498.864,352.41L498.294,354.197L498.739,357.485L498.079,360.297L496.351,362.184L496.598,364.711L498.891,366.695L498.915,367.497L500.644,368.829L501.839,374.686L502.747,377.526L502.899,379.011L502.405,381.601L502.608,383.041L502.251,384.76L502.496,386.725L501.383,388.025L503.041,390.281L503.146,391.601L504.144,393.312L505.454,392.751L507.667,394.172z"
				},
				{
					"id":"EC",
					"title":"Ecuador",
					"d":"M250.097,472.874L251.589,470.789L250.982,469.572L249.911,470.866L248.231,469.645L248.8,468.859L248.327,466.331L249.309,465.91L249.825,464.175L250.886,462.382L250.691,461.245L252.227,460.647L254.154,459.539L256.959,461.129L257.481,461.085L258.165,462.283L260.544,462.669L261.341,462.227L262.717,463.149L263.917,463.809L264.309,465.924L263.436,467.735L260.378,470.653L257.007,471.753L255.289,474.181L254.758,476.064L253.173,477.214L251.996,475.803L250.864,475.501L249.705,475.724L249.629,474.7L250.429,474.035z"
				},
				{
					"id":"EE",
					"title":"Estonia",
					"d":"M543.423,264.71L543.748,261.586L542.717,262.258L540.938,260.358L540.694,257.245L544.24,255.717L547.772,254.915L550.814,255.827L553.708,255.664L554.13,256.624L552.135,259.756L552.966,264.718L551.765,266.377L549.453,266.368L547.04,264.426L545.811,263.78z"
				},
				{
					"id":"EG",
					"title":"Egypt",
					"d":"M573.171,377.28L572.383,378.566L571.78,380.969L571.017,382.615L570.363,383.165L569.429,382.147L568.164,380.735L566.163,376.157L565.875,376.449L567.037,379.822L568.758,383.004L570.877,387.876L571.913,389.561L572.813,391.303L575.329,394.695L574.772,395.227L574.862,397.201L578.128,399.913L578.621,400.529L567.5,400.529L556.621,400.529L545.349,400.529L545.349,389.301L545.349,378.121L544.508,375.535L545.23,373.539L544.796,372.149L545.812,370.582L549.542,370.527L552.24,371.392L555.024,372.356L556.322,372.862L558.481,371.831L559.635,370.895L562.108,370.625L564.102,371.038L564.865,372.656L565.516,371.591L567.763,372.361L569.949,372.546L571.328,371.725z"
				},
				{
					"id":"EH",
					"title":"Western Sahara",
					"d":"M438.411,383.192L436.633,386.392L434.766,387.527L433.753,389.444L433.687,391.088L432.945,392.88L432.001,393.374L430.44,395.315L429.476,397.458L429.657,398.482L428.739,400.053L427.663,400.873L427.53,402.263L427.41,403.526L428.021,402.529L439.001,402.548L438.47,398.204L439.156,396.648L441.783,396.375L441.692,388.524L450.895,388.687L450.903,383.96L450.957,383.352L450.956,383.148L438.446,383.162z"
				},
				{
					"id":"ER",
					"title":"Eritrea",
					"d":"M594,428.168L593.042,427.244L591.889,425.566L590.646,424.646L589.921,423.654L587.48,422.501L585.558,422.467L584.882,421.865L583.238,422.542L581.536,421.234L580.66,423.383L577.396,422.782L577.098,421.629L578.305,417.378L578.582,415.446L579.465,414.552L581.53,414.072L582.949,412.402L584.577,415.783L585.35,418.449L586.886,419.859L590.713,422.583L592.271,424.222L593.791,425.876L594.668,426.859L596.046,427.719L595.201,428.416z"
				},
				{
					"id":"ES",
					"title":"Spain",
					"d":"M449.921,334.562L450.062,331.875L448.917,330.223L452.883,327.448L456.314,328.145L460.079,328.121L463.063,328.778L465.39,328.576L469.922,328.704L471.04,330.194L476.201,331.925L477.22,331.104L480.375,332.819L483.625,332.329L483.775,334.519L481.118,337.005L477.525,337.789L477.275,339.031L475.552,341.064L474.472,344.02L475.565,346.074L473.943,347.666L473.337,349.968L471.22,350.67L469.234,353.36L465.676,353.413L463.003,353.347L461.247,354.573L460.176,355.879L458.804,355.593L457.766,354.424L456.971,352.423L454.354,351.881L454.12,350.72L455.159,349.398L455.544,348.435L454.577,347.378L455.351,345.028L454.228,342.863L455.439,342.564L455.552,340.843L456.007,340.307L456.043,337.432L457.339,336.426L456.555,334.552L454.921,334.42L454.441,334.894L452.785,334.898L452.083,333.057L450.938,333.607z"
				},
				{
					"id":"ET",
					"title":"Ethiopia",
					"d":"M581.536,421.234L583.238,422.542L584.882,421.865L585.558,422.467L587.48,422.501L589.921,423.654L590.646,424.646L591.889,425.566L593.042,427.244L594,428.168L593.015,429.429L592.066,430.764L592.285,431.548L592.33,432.412L593.896,432.46L594.571,432.258L595.193,432.764L594.582,433.769L595.617,435.328L596.651,436.689L597.722,437.696L606.889,441.04L609.248,441.022L601.324,449.438L597.672,449.561L595.173,451.53L593.375,451.582L592.608,452.462L590.692,452.461L589.562,451.518L587,452.686L586.172,453.849L584.302,453.629L583.681,453.307L583.024,453.384L582.138,453.356L578.589,450.985L576.638,450.985L575.68,450.065L575.68,448.496L574.224,448.026L572.566,444.979L571.286,444.328L570.794,443.206L569.374,441.837L567.651,441.635L568.606,440.033L570.095,439.964L570.514,439.104L570.477,436.567L571.306,433.606L572.634,432.812L572.916,431.651L574.118,429.478L575.809,428.065L576.949,425.248L577.396,422.782L580.66,423.383z"
				},
				{
					"id":"FK",
					"title":"Falkland Islands",
					"d":"M303.657,633.134L307.022,630.436L309.405,631.556L311.087,629.767L313.331,631.78L312.489,633.36L308.704,634.725L307.442,633.134L305.059,635.182z"
				},
				{
					"id":"FI",
					"title":"Finland",
					"d":"M555.42,193.099L555.011,198.503L559.305,203.493L556.718,208.971L559.979,216.928L558.091,222.691L560.615,227.546L559.469,231.691L563.62,235.947L562.565,239.052L559.96,242.504L553.957,249.91L548.869,250.361L543.938,252.429L539.376,253.608L537.753,250.543L535.038,248.674L535.662,242.946L534.3,237.538L535.637,233.959L538.179,230.017L544.594,222.997L546.465,221.611L546.174,218.774L542.274,215.549L541.328,212.849L541.254,201.729L536.877,196.576L533.14,192.774L534.821,190.686L537.937,194.839L541.598,194.455L544.608,196.324L547.282,192.885L548.657,187.03L553.01,184.255L556.608,187.507z"
				},
				{
					"id":"FJ",
					"title":"Fiji",
					"d":"M980.525,508.605l-0.348,1.396l-0.231,0.155l-1.782,0.716l-1.792,0.613l-0.36,-1.085l1.401,-0.596l0.889,-0.16l1.645,-0.905L980.525,508.605zM974.69,512.924l-1.274,-0.361l-1.082,1.004l0.271,1.288l1.546,0.363l1.738,-0.403l0.463,-1.529l-0.965,-0.843L974.69,512.924z"
				},
				{
					"id":"FR",
					"title":"France",
					"d":"M502.058,333.54l-0.926,2.893l-1.273,-0.759l-0.649,-2.526l0.566,-1.407l1.806,-1.455L502.058,333.54zM485.313,300.19l1.957,2.057l1.439,-0.338l2.453,1.973l0.627,0.374l0.809,-0.091l1.323,1.123l4.04,0.787l-1.417,2.899l-0.356,2.975l-0.77,0.707l-1.278,-0.381l0.09,1.05l-2.051,2.303l-0.041,1.838l1.339,-0.634l0.963,1.771l-0.116,1.134l0.825,1.498l-0.972,1.208l0.723,3.039l1.52,0.494l-0.321,1.684l-2.54,2.173l-5.53,-1.039l-4.083,1.244l-0.321,2.292l-3.25,0.49l-3.155,-1.716l-1.02,0.821l-5.161,-1.73l-1.118,-1.491l1.45,-2.319l0.534,-7.877l-2.894,-4.264l-2.068,-2.086l-4.285,-1.599l-0.283,-3.066l3.636,-0.923l4.708,1.091l-0.889,-4.845l2.647,1.849l6.528,-3.374l0.842,-3.605l2.452,-0.898l0.406,1.562l1.303,0.073L485.313,300.19z"
				},
				{
					"id":"GA",
					"title":"Gabon",
					"d":"M506.358,474.476L503.477,471.659L501.624,469.358L499.921,466.48L500.011,465.555L500.624,464.665L501.305,462.637L501.87,460.572L502.815,460.411L506.895,460.439L506.871,457.086L508.203,456.903L509.907,457.276L511.566,456.917L511.916,457.069L511.712,458.285L512.496,459.725L514.582,459.498L515.281,460.051L514.067,463.277L515.394,464.924L515.7,467.099L515.346,468.952L514.485,470.269L512.01,470.151L510.512,468.813L510.289,470.048L508.397,470.39L507.436,471.091L508.493,472.935z"
				},
				{
					"id":"GB",
					"title":"United Kingdom",
					"d":"M459.378,281.001l-1.503,3.287l-2.119,-0.98l-1.734,0.065l0.578,-2.571l-0.578,-2.604l2.351,-0.202L459.378,281.001zM466.827,260.239l-2.997,5.729l2.856,-0.716l3.072,0.027l-0.731,4.218l-2.521,4.535l2.899,0.318l0.223,0.524l2.497,5.787l1.919,0.774l1.726,5.409l0.799,1.841l3.397,0.882l-0.341,2.933l-1.428,1.331l1.12,2.327l-2.522,2.328l-3.751,-0.041l-4.773,1.212l-1.308,-0.867l-1.854,2.058l-2.594,-0.497l-1.97,1.667l-1.491,-0.87l4.112,-4.636l2.51,-0.966l-0.022,-0.004l-4.379,-0.749l-0.793,-1.799l2.93,-1.413l-1.536,-2.479l0.533,-3.056l4.167,0.425l0.005,0l0.413,-2.743l-1.878,-2.952l-0.042,-0.068l-3.405,-0.852l-0.668,-1.318l1.019,-2.195l-0.922,-1.366l-1.51,2.338l-0.164,-4.797l-1.416,-2.587l1.018,-5.356l2.178,-4.311l2.239,0.425L466.827,260.239z"
				},
				{
					"id":"GE",
					"title":"Georgia",
					"d":"M591.765,335.853L592.183,334.253L591.482,331.676L589.862,330.272L588.308,329.833L587.281,328.657L587.623,328.202L589.993,328.86L594.121,329.481L597.938,331.313L598.43,332.019L600.13,331.422L602.745,332.216L603.604,333.766L605.366,334.637L604.638,335.153L606.019,337.17L605.637,337.604L604.125,337.384L602.036,336.316L601.349,336.923L597.453,337.502L594.752,335.675z"
				},
				{
					"id":"GF",
					"title":"French Guiana",
					"d":"M327.893,456.407l-1.075,1.059l-1.342,0.199l-0.382,-0.785l-0.627,-0.117l-0.868,0.756l-1.225,-0.575l0.711,-1.19l0.244,-1.27l0.484,-1.195l-1.088,-1.647l-0.222,-1.912l1.459,-2.405l0.952,0.308l2.065,0.662l2.968,2.36l0.464,1.144l-1.659,2.554L327.893,456.407z"
				},
				{
					"id":"GH",
					"title":"Ghana",
					"d":"M478.226,446.843L473.83,448.481L472.271,449.44L469.744,450.251L467.245,449.457L467.372,448.354L466.156,445.942L466.887,442.774L468.069,440.413L467.325,436.401L466.942,434.271L467.008,432.663L471.879,432.529L473.118,432.736L474.023,432.278L475.32,432.504L475.113,433.388L476.284,434.849L476.279,436.902L476.546,439.124L477.25,440.151L476.629,442.684L476.852,444.081L477.6,445.859z"
				},
				{
					"id":"GL",
					"title":"Greenland",
					"d":"M344.134,23.907L353.548,10.302L363.386,11.368L366.962,2.416L376.872,0L399.267,3.147L416.806,21.735L411.628,30.045L400.902,30.968L385.81,32.998L387.222,36.643L397.147,34.4L405.593,41.313L411.036,35.189L413.367,42.339L410.289,53.306L417.427,46.381L431.042,38.831L439.447,42.644L441.022,50.755L429.591,63.423L428.008,67.316L419.046,70.182L425.54,70.968L422.26,82.476L420.003,92.074L420.091,107.331L423.458,115.665L419.078,116.178L414.467,120.058L419.641,126.358L420.3,135.984L417.302,137L420.935,146.154L414.706,146.896L417.958,151.036L417.039,154.545L413.085,156.063L409.178,156.091L412.69,162.572L412.729,166.7L407.18,162.867L405.737,165.356L409.522,167.649L413.196,173.125L414.259,180.08L409.261,181.703L407.1,178.44L403.633,173.46L404.592,179.329L401.335,183.74L408.725,184.091L412.59,184.542L405.075,191.571L397.454,197.697L389.249,200.313L386.156,200.346L383.256,203.218L379.355,210.853L373.325,215.742L371.388,216.025L367.655,217.704L363.625,219.287L361.223,223.409L361.185,227.967L359.766,232.133L355.194,237.082L356.323,241.787L355.063,246.637L353.626,252.202L349.675,252.544L345.537,247.91L339.931,247.881L337.21,244.701L335.34,238.896L330.481,231.225L329.06,227.069L328.677,221.177L324.793,214.91L325.803,209.74L323.932,207.212L326.704,198.556L330.924,195.708L332.031,192.447L332.618,186.185L329.415,189.052L327.888,190.242L325.37,191.375L321.929,188.77L321.742,183.219L322.839,178.741L325.439,178.618L331.163,180.873L326.342,175.438L323.833,172.434L321.041,173.675L318.701,171.482L321.831,162.976L320.126,159.453L317.901,152.71L314.526,141.804L310.956,137.625L310.989,132.998L303.465,126.308L297.512,125.456L290.019,125.928L283.177,126.785L279.923,123.039L275.051,115.379L282.413,111.41L288.057,110.734L276.059,107.365L269.739,101.932L270.125,96.589L280.74,89.721L291.01,82.562L292.094,76.925L284.526,71.163L286.971,64.519L296.678,52.186L300.757,50.207L299.588,41.637L306.23,36.398L314.852,33.188L323.468,33.005L326.527,39.311L333.965,27.987L340.657,35.767L344.594,37.36L350.417,43.772L343.75,33.002z"
				},
				{
					"id":"GM",
					"title":"Gambia",
					"d":"M428.032,426.427L428.39,425.157L431.444,425.075L432.077,424.396L432.966,424.35L434.073,425.056L434.943,425.069L435.867,424.586L436.434,425.415L435.22,426.058L434.002,426.007L432.799,425.402L431.76,426.063L431.258,426.087L430.584,426.488z"
				},
				{
					"id":"GN",
					"title":"Guinea",
					"d":"M451.59,441.914L450.797,441.841L450.226,442.973L449.433,442.959L448.887,442.361L449.073,441.232L447.9,439.508L447.168,439.825L446.569,439.888L445.797,440.049L445.829,439.016L445.378,438.279L445.469,437.458L444.861,436.271L444.081,435.26L441.839,435.257L441.185,435.79L440.413,435.854L439.934,436.464L439.61,437.247L438.112,438.488L436.882,436.818L435.792,435.712L435.074,435.346L434.374,434.783L434.055,433.532L433.645,432.907L432.83,432.442L434.077,431.058L434.927,431.11L435.659,430.633L436.277,430.628L436.719,430.251L436.48,429.308L436.788,429.01L436.839,428.042L438.192,428.072L440.208,428.768L440.826,428.704L441.036,428.386L442.565,428.612L442.97,428.451L443.131,429.495L443.576,429.492L444.308,429.112L444.773,429.207L445.551,429.93L446.751,430.158L447.52,429.542L448.426,429.16L449.1,428.761L449.661,428.836L450.284,429.462L450.618,430.248L451.767,431.439L451.192,432.17L451.083,433.093L451.68,432.814L452.03,433.145L451.882,433.989L452.738,434.806L452.179,435.025L451.954,435.985L452.6,437.153L453.293,439.41L452.251,439.749L451.983,440.14L452.2,440.684L452.035,441.91z"
				},
				{
					"id":"GQ",
					"title":"Equatorial Guinea",
					"d":"M501.87,460.572L501.345,460.152L502.308,457.022L506.871,457.086L506.895,460.439L502.815,460.411z"
				},
				{
					"id":"GR",
					"title":"Greece",
					"d":"M541.704,356.712l1.533,1.156l2.182,-0.195l2.086,0.243l-0.067,0.595l1.528,-0.41l-0.351,1.007l-4.038,0.29l0.028,-0.563l-3.421,-0.666L541.704,356.712zM549.847,335.754l-0.868,2.325l-0.666,0.414l-1.708,-0.104l-1.463,-0.35l-3.396,0.959l1.944,2.062l-1.424,0.594l-1.562,0.004l-1.483,-1.884l-0.526,0.804l0.626,2.176l1.403,1.697l-1.057,0.788l1.562,1.65l1.388,1.033l0.042,2l-1.358,-1.146l-1.236,0.209l0.827,1.799l-0.917,0.19l-1,-0.694l1.2,3.952l-0.583,0.014l-0.446,-1.263l-0.573,-0.025l-0.26,1.318l-0.454,-0.299l0.102,-0.739l-0.561,-1.045h-0.637l0.118,0.843l-0.25,0.267l-0.616,-0.54l-0.383,-1.021l0.519,-0.569l-0.357,-0.74l-0.408,-0.382l-0.423,-0.094l-0.491,-0.943l0.583,-0.519l0.357,-0.484l0.561,0.102l0.251,-0.41l0.59,-0.163l0.683,0.461l0.553,0.169l0.386,-0.622l-0.938,-0.084l-0.555,-0.194l-1.25,0.28l-1.219,0.048l-1.093,-1.641l-0.181,-0.254l0.167,-0.642l-1.423,-1.155l-0.19,-1.03l1.304,-1.765l0.168,-1.19l0.911,-0.533l0.056,-0.968l1.834,-0.327l1.069,-0.81l1.52,0.072l0.461,-0.647l0.534,-0.124l2.074,0.107l2.245,-1.024l1.976,1.301l2.548,-0.351l0.031,-1.859L549.847,335.754z"
				},
				{
					"id":"GT",
					"title":"Guatemala",
					"d":"M222.638,424.754L221.2,424.254L219.451,424.202L218.168,423.632L216.66,422.446L216.729,421.607L217.054,420.931L216.656,420.391L218.005,418.032L221.604,418.023L221.676,417.035L221.222,416.859L220.91,416.229L219.874,415.557L218.83,414.583L220.096,414.576L220.098,412.931L222.716,412.926L225.309,412.958L225.287,415.273L225.068,418.553L225.905,418.552L226.819,419.076L227.061,418.645L227.883,419.014L226.605,420.117L225.276,420.925L225.079,421.479L225.302,422.045L224.719,422.776L224.063,422.953L224.212,423.292L223.686,423.609L222.725,424.334z"
				},
				{
					"id":"GW",
					"title":"Guinea-Bissau",
					"d":"M432.83,432.442L431.333,431.255L430.152,431.066L429.509,430.265L429.525,429.832L428.67,429.227L428.492,428.617L429.977,428.152L430.906,428.244L431.657,427.923L436.839,428.042L436.788,429.01L436.48,429.308L436.719,430.251L436.277,430.628L435.659,430.633L434.927,431.11L434.077,431.058z"
				},
				{
					"id":"GY",
					"title":"Guyana",
					"d":"M307.7,439.998L309.541,441.033L311.275,442.864L311.354,444.31L312.411,444.376L313.913,445.744L315.02,446.719L314.572,449.236L312.87,449.966L313.021,450.625L312.504,452.066L313.747,454.093L314.645,454.096L315.013,455.67L316.725,458.094L316.042,458.194L314.492,457.957L313.58,458.698L312.312,459.187L311.425,459.308L311.115,459.853L309.739,459.715L308.014,458.408L307.811,457.118L307.093,455.708L307.54,453.334L308.317,452.351L307.674,451.053L306.71,450.63L307.075,449.402L306.423,448.758L304.965,448.882L303.067,446.758L303.827,445.987L303.771,444.693L305.497,444.243L306.193,443.717L305.233,442.675L305.478,441.65z"
				},
				{
					"id":"HN",
					"title":"Honduras",
					"d":"M230.43,426.904L229.946,426.009L229.094,425.76L229.289,424.612L228.908,424.301L228.331,424.097L227.101,424.438L226.997,424.052L226.15,423.591L225.546,423.018L224.719,422.776L225.302,422.045L225.079,421.479L225.276,420.925L226.605,420.117L227.883,419.014L228.174,419.127L228.789,418.618L229.591,418.577L229.852,418.813L230.287,418.669L231.589,418.93L232.885,418.854L233.787,418.534L234.116,418.209L235.01,418.359L235.681,418.557L236.414,418.489L236.971,418.237L238.252,418.639L238.697,418.703L239.553,419.244L240.363,419.893L241.382,420.335L242.121,421.129L241.159,421.07L240.771,421.463L239.797,421.839L239.089,421.841L238.47,422.208L237.908,422.077L237.43,421.637L237.137,421.721L236.777,422.409L236.508,422.384L236.462,422.977L235.483,423.768L234.967,424.109L234.679,424.465L233.852,423.885L233.247,424.651L232.662,424.631L232.004,424.698L232.064,426.107L231.653,426.133L231.302,426.787z"
				},
				{
					"id":"HR",
					"title":"Croatia",
					"d":"M528.049,318.934L528.73,320.484L529.621,321.618L528.542,323.106L527.273,322.232L525.335,322.287L522.924,321.629L521.614,321.717L521.007,322.539L520,321.629L519.414,323.27L520.787,325.104L521.395,326.313L522.684,327.76L523.752,328.613L524.811,330.215L527.292,331.658L526.984,332.303L524.348,330.896L522.722,329.521L520.158,328.379L517.8,325.526L518.366,325.234L517.087,323.586L517.035,322.254L515.232,321.629L514.373,323.335L513.545,322.013L513.608,320.633L513.708,320.569L515.662,320.705L516.175,320.031L517.129,320.683L518.229,320.76L518.219,319.644L519.193,319.234L519.466,317.607L521.698,316.531L522.589,317.031L524.685,318.762L527.001,319.533z"
				},
				{
					"id":"HT",
					"title":"Haiti",
					"d":"M270.04,406.751L271.75,406.882L274.182,407.348L274.427,408.957L274.213,410.09L273.529,410.586L274.251,411.468L274.193,412.265L272.331,411.767L271.008,411.97L269.297,411.758L267.985,412.306L266.483,411.392L266.73,410.445L269.312,410.853L271.427,411.089L272.437,410.435L271.156,409.158L271.177,408.03L269.408,407.569z"
				},
				{
					"id":"HU",
					"title":"Hungary",
					"d":"M520.682,315.111L521.613,312.464L521.069,311.565L522.648,311.557L522.861,309.853L524.288,310.922L525.322,311.376L527.675,310.866L527.901,310.027L529.015,309.903L530.38,309.252L530.684,309.521L532,308.997L532.658,308.005L533.577,307.747L536.58,309.028L537.178,308.598L538.734,309.741L538.93,310.861L537.217,311.733L535.891,314.531L534.195,317.292L531.947,318.054L530.197,317.875L528.049,318.934L527.001,319.533L524.685,318.762L522.589,317.031L521.698,316.531L521.153,315.156z"
				},
				{
					"id":"ID",
					"title":"Indonesia",
					"d":"M813.722,492.058l-1.18,0.054l-3.721,-1.981l2.614,-0.555l1.474,0.86l0.98,0.858L813.722,492.058zM824.153,491.776l-2.4,0.623l-0.336,-0.34l0.252,-0.962l1.206,-1.724l2.771,-1.12l0.284,0.556l0.052,0.856L824.153,491.776zM805.827,486.009l1.011,0.75l1.732,-0.23l0.695,1.197l-3.241,0.566l-1.942,0.378l-1.507,-0.022l0.963,-1.623l1.538,-0.022L805.827,486.009zM819.856,486.005l-0.411,1.564l-4.213,0.8l-3.729,-0.348l-0.01,-1.03l2.228,-0.585l1.757,0.844l1.866,-0.214L819.856,486.005zM779.817,482.306l5.371,0.28l0.618,-1.156l5.201,1.349l1.021,1.82l4.207,0.513l3.438,1.672l-3.199,1.073l-3.083,-1.135l-2.538,0.077l-2.909,-0.208l-2.624,-0.505l-3.248,-1.074l-2.059,-0.278l-1.166,0.352l-5.113,-1.157l-0.486,-1.207l-2.565,-0.206l1.924,-2.678l3.401,0.166l2.264,1.095l1.162,0.214L779.817,482.306zM853.001,480.728l-1.442,1.909l-0.273,-2.11l0.498,-1.007l0.587,-0.946l0.638,0.819L853.001,480.728zM832.041,473.025l-1.05,0.926l-1.938,-0.513l-0.546,-1.2l2.836,-0.134L832.041,473.025zM841.075,472.006l1.02,2.134l-2.367,-1.15l-2.343,-0.233l-1.582,0.184l-1.94,-0.098l0.665,-1.534l3.463,-0.116L841.075,472.006zM851.371,466.593l0.783,4.507l2.901,1.669l2.344,-2.958l3.217,-1.682l2.493,-0.002l2.397,0.972l2.08,0.997l3.01,0.533l0.047,9.103l0.048,9.157l-2.497,-2.313l-2.848,-0.566l-0.69,0.802l-3.553,0.086l1.19,-2.289l1.766,-0.78l-0.731,-3.05l-1.346,-2.35l-5.436,-2.368l-2.313,-0.233l-4.21,-2.58l-0.828,1.356l-1.076,0.246l-0.637,-1.024l-0.009,-1.212l-2.142,-1.37l3.02,-1.004l2,0.054l-0.235,-0.74l-4.104,-0.005l-1.11,-1.659l-2.505,-0.514l-1.187,-1.378l3.779,-0.675l1.438,-0.908l4.501,1.144L851.371,466.593zM826.409,459.431l-2.253,2.763l-2.107,0.536l-2.698,-0.544l-4.673,0.139l-2.449,0.401l-0.398,2.108l2.51,2.477l1.514,-1.262l5.229,-0.948l-0.23,1.283l-1.222,-0.405l-1.218,1.632l-2.468,1.08l2.653,3.573l-0.513,0.958l2.521,3.223l-0.024,1.837l-1.497,0.822l-1.1,-0.984l1.355,-2.289l-2.752,1.082l-0.697,-0.773l0.363,-1.079l-2.021,-1.637l0.208,-2.718l-1.87,0.848l0.237,3.253l0.114,3.999l-1.778,0.406l-1.204,-0.821l0.804,-2.573l-0.434,-2.694l-1.18,-0.021l-0.871,-1.911l1.159,-1.826l0.399,-2.212l1.409,-4.199l0.588,-1.148l2.384,-2.069l2.189,0.823l3.535,0.387l3.225,-0.117l2.771,-2.023L826.409,459.431zM836.076,460.231l-0.146,2.434l-1.446,-0.272l-0.427,1.695l1.155,1.47l-0.785,0.334l-1.132,-1.764l-0.833,-3.561l0.564,-2.226l0.93,-1.014l0.202,1.522l1.655,0.244L836.076,460.231zM805.759,458.294l3.144,2.578l-3.322,0.329l-0.936,1.898l0.122,2.524l-2.696,1.905l-0.074,2.775l-1.081,4.266l-0.413,-0.993l-3.186,1.256l-1.11,-1.707l-1.999,-0.158l-1.398,-0.894l-3.333,1.003l-1.023,-1.35l-1.836,0.154l-2.312,-0.322l-0.429,-3.738l-1.399,-0.774l-1.346,-2.383l-0.391,-2.437l0.326,-2.581l1.666,-1.852l0.469,1.862l1.917,1.574l1.809,-0.566l1.79,0.201l1.634,-1.409l1.345,-0.244l2.652,0.781l2.287,-0.594l1.438,-3.876l1.079,-0.97l0.972,-3.175l3.224,0.001l2.43,0.471l-1.595,2.521l2.062,2.64L805.759,458.294zM771.95,479.713l-3.104,0.059l-2.361,-2.339l-3.601,-2.283l-1.2,-1.692l-2.122,-2.271l-1.393,-2.089l-2.133,-3.9l-2.462,-2.321l-0.824,-2.395l-1.033,-2.175l-2.528,-1.755l-1.466,-2.386l-2.111,-1.563l-2.925,-3.078l-0.246,-1.424l1.806,0.113l4.34,0.541l2.479,2.733l2.169,1.893l1.546,1.161l2.656,2.997l2.851,0.043l2.355,1.909l1.623,2.333l2.135,1.272l-1.123,2.274l1.606,0.967l1.007,0.071l0.476,1.943l0.977,1.555l2.059,0.247l1.364,1.765l-0.704,3.471L771.95,479.713z"
				},
				{
					"id":"IE",
					"title":"Ireland",
					"d":"M457.875,284.288L458.337,287.648L456.218,291.771L451.248,294.453L447.279,293.77L449.552,288.99L448.088,284.223L451.902,280.47L454.021,278.198L454.6,280.802L454.021,283.373L455.756,283.308z"
				},
				{
					"id":"IL",
					"title":"Israel",
					"d":"M575.406,366.825L574.918,367.868L573.903,367.41L573.317,369.606L574.021,369.975L573.305,370.426L573.184,371.287L574.502,370.844L574.568,372.114L573.171,377.28L571.328,371.725L572.144,370.648L571.953,370.462L572.694,368.927L573.263,366.433L573.664,365.59L573.741,365.556L574.68,365.562L574.938,364.978L575.69,364.934L575.733,366.297L575.353,366.802z"
				},
				{
					"id":"IN",
					"title":"India",
					"d":"M693.498,357.437L696.512,361.426L696.228,364.169L697.343,365.877L697.251,367.571L695.239,367.126L696.025,370.756L698.78,372.821L702.677,375.086L700.897,376.547L699.809,379.538L702.525,380.74L705.169,382.292L708.826,384.059L712.669,384.465L714.286,386.058L716.453,386.354L719.826,387.081L722.161,387.029L722.482,385.794L722.113,383.803L722.33,382.447L724.04,381.782L724.275,384.263L724.335,384.892L726.884,386.079L728.646,385.59L731.014,385.8L733.301,385.707L733.498,383.782L732.356,382.777L734.618,382.383L737.17,380.027L740.402,377.997L742.754,378.782L744.753,377.436L746.067,379.421L745.12,380.756L748.144,381.229L748.355,382.428L747.372,383.006L747.603,384.939L745.599,384.372L741.969,386.534L742.054,388.313L740.507,390.907L740.364,392.405L739.114,394.927L736.923,394.231L736.814,397.379L736.181,398.41L736.477,399.691L735.094,400.405L733.617,395.606L732.843,395.616L732.385,397.556L730.85,395.984L731.715,394.25L732.97,394.073L734.262,391.479L732.646,390.953L730.045,390.999L727.377,390.576L727.13,388.426L725.791,388.273L723.57,386.93L722.58,389.037L724.604,390.672L722.851,391.819L722.229,392.938L723.954,393.757L723.478,395.596L724.449,397.877L724.886,400.362L724.484,401.458L722.576,401.421L719.12,402.043L719.281,404.291L717.784,406.051L713.749,408.045L710.611,411.511L708.503,413.359L705.709,415.271L705.705,416.609L704.308,417.325L701.782,418.364L700.472,418.518L699.632,420.723L700.215,424.466L700.364,426.842L699.176,429.554L699.163,434.379L697.712,434.516L696.436,436.673L697.289,437.604L694.732,438.403L693.788,440.319L692.663,441.128L690.009,438.499L688.711,434.542L687.635,431.682L686.652,430.336L685.163,427.598L684.467,424.016L683.982,422.22L681.432,418.252L680.271,412.606L679.432,408.844L679.442,405.255L678.898,402.461L674.818,404.249L672.842,403.892L669.179,400.261L670.527,399.172L669.699,397.986L666.41,395.411L668.277,393.374L674.447,393.382L673.891,390.745L672.315,389.179L671.996,386.788L670.161,385.386L673.251,382.091L676.507,382.331L679.44,379.005L681.197,375.754L683.92,372.505L683.876,370.177L686.268,368.274L684.004,366.64L683.03,364.386L682.037,361.44L683.411,359.979L687.665,360.807L690.79,360.303z"
				},
				{
					"id":"IQ",
					"title":"Iraq",
					"d":"M602.605,355.773L604.444,356.807L604.656,358.807L603.245,359.982L602.595,362.62L604.537,365.801L607.972,367.62L609.415,370.123L608.956,372.489L609.851,372.488L609.879,374.217L611.43,375.914L609.767,375.756L607.882,375.487L605.825,378.567L600.612,378.312L592.706,371.821L588.528,369.529L585.151,368.637L584.021,364.596L590.228,361.097L591.288,356.976L591.023,354.455L592.558,353.598L593.995,351.418L595.199,350.873L598.46,351.326L599.445,352.218L600.789,351.627z"
				},
				{
					"id":"IR",
					"title":"Iran",
					"d":"M626.441,351.527L628.905,350.848L630.899,348.831L632.774,348.934L634.005,348.273L635.999,348.6L639.1,350.391L641.339,350.775L644.543,353.87L646.633,353.995L646.879,356.901L645.736,361.148L644.966,363.599L646.187,364.094L644.987,365.921L645.905,368.565L646.125,370.65L648.249,371.202L648.479,373.298L645.936,376.228L647.323,377.914L648.452,379.84L651.133,381.236L651.21,384.013L652.552,384.521L652.783,385.963L648.739,387.572L647.683,391.167L642.408,390.236L639.351,389.526L636.187,389.124L634.99,385.308L633.648,384.752L631.494,385.312L628.666,386.823L625.239,385.788L622.409,383.378L619.71,382.481L617.837,379.474L615.768,375.201L614.259,375.724L612.477,374.655L611.43,375.914L609.879,374.217L609.851,372.488L608.956,372.489L609.415,370.123L607.972,367.62L604.537,365.801L602.595,362.62L603.245,359.982L604.656,358.807L604.444,356.807L602.605,355.773L600.789,351.626L599.255,348.805L599.804,347.705L598.929,343.593L600.849,342.561L601.293,343.926L602.71,345.587L604.633,346.064L605.648,345.958L608.955,343.302L610.006,343.035L610.835,344.096L609.868,345.875L611.617,347.744L612.314,347.566L613.201,350.178L615.86,350.911L617.808,352.667L621.794,353.269L626.173,352.345z"
				},
				{
					"id":"IS",
					"title":"Iceland",
					"d":"M434.573,212.429L433.925,216.909L437.093,221.51L433.448,226.516L425.36,230.897L422.943,232.045L419.252,231.119L411.429,229.111L414.189,226.27L408.086,223.071L413.051,221.788L412.931,219.825L407.046,218.254L408.94,213.78L413.19,212.748L417.56,217.432L421.82,213.682L425.348,215.639L429.921,211.932z"
				},
				{
					"id":"IT",
					"title":"Italy",
					"d":"M518.77,347.883l-1.01,2.783l0.419,1.087l-0.588,1.795l-2.145,-1.313l-1.426,-0.377l-3.914,-1.786l0.393,-1.816l3.281,0.324l2.86,-0.387L518.77,347.883zM501.077,337.065l1.682,2.622l-0.394,4.811l-1.275,-0.228l-1.144,1.201l-1.062,-0.954l-0.112,-4.384l-0.64,-2.105l1.542,0.185L501.077,337.065zM509.955,315.458l4.01,1.051l-0.304,1.991l0.671,1.707l-2.232,-0.583l-2.28,1.417l0.155,1.966l-0.343,1.121l0.919,1.989l2.629,1.951l1.41,3.167l3.12,3.047l2.197,-0.023l0.683,0.829l-0.787,0.745l2.511,1.345l2.059,1.12l2.404,1.919l0.291,0.683l-0.524,1.306l-1.556,-1.704l-2.436,-0.603l-1.18,2.362l2.026,1.344l-0.333,1.879l-1.171,0.213l-1.498,3.057l-1.168,0.272l0.011,-1.084l0.572,-1.913l0.609,-0.766l-1.095,-2.09l-0.855,-1.833l-1.164,-0.455l-0.828,-1.583l-1.802,-0.67l-1.213,-1.487l-2.075,-0.241l-2.191,-1.683l-2.565,-2.448l-1.906,-2.188l-0.875,-3.803l-1.395,-0.452l-2.281,-1.287l-1.291,0.528l-1.62,1.802l-1.165,0.284l0.321,-1.684l-1.52,-0.494l-0.723,-3.039l0.972,-1.208l-0.825,-1.498l0.116,-1.134l1.207,0.86l1.352,-0.19l1.572,-1.364l0.486,0.639l1.335,-0.128l0.607,-1.63l2.075,0.508l1.235,-0.684l0.222,-1.67l1.699,0.581l0.326,-0.777l2.771,-0.712L509.955,315.458z"
				},
				{
					"id":"JM",
					"title":"Jamaica",
					"d":"M257.759,410.958L259.646,411.221L261.136,411.926L261.601,412.729L259.629,412.783L258.778,413.272L257.208,412.802L255.605,411.734L255.942,411.063L257.121,410.858z"
				},
				{
					"id":"JO",
					"title":"Jordan",
					"d":"M574.918,367.868L575.406,366.825L578.53,368.136L584.021,364.596L585.151,368.637L584.617,369.134L579.001,370.78L581.796,374.036L580.869,374.585L580.407,375.666L578.268,376.111L577.597,377.268L576.385,378.252L573.265,377.744L573.171,377.28L574.568,372.114L574.502,370.844L574.917,369.882z"
				},
				{
					"id":"JP",
					"title":"Japan",
					"d":"M852.76,362.009l0.358,1.154l-1.579,2.025l-1.15,-1.072l-1.438,0.777l-0.744,1.946l-1.827,-0.946l0.022,-1.583l1.551,-2.003l1.595,0.39l1.152,-1.417L852.76,362.009zM870.53,351.726l-1.057,2.781l0.489,1.731l-1.461,2.416l-3.582,1.602l-4.929,0.208l-3.995,3.844l-1.884,-1.288l-0.116,-2.523l-4.877,0.747l-3.318,1.588l-3.282,0.064l2.843,2.463l-1.871,5.611l-1.813,1.373l-1.356,-1.268l0.688,-2.961l-1.774,-0.962l-1.139,-2.281l2.65,-1.03l1.471,-2.114l2.82,-1.75l2.057,-2.333l5.581,-1.023l2.998,0.702l2.934,-6.168l1.869,1.671l4.113,-3.512l1.595,-1.377l1.763,-4.383l-0.481,-4.1l1.185,-2.333l2.981,-0.682l1.528,5.108l-0.083,2.938l-2.594,3.602L870.53,351.726zM878.756,325.795l1.972,0.829l1.983,-1.651l0.623,4.348l-4.159,1.048l-2.455,3.763l-4.409,-2.583l-1.525,4.122l-3.119,0.056l-0.386,-3.741l1.387,-2.937l2.996,-0.213l0.817,-5.381l0.829,-3.089l3.295,4.117L878.756,325.795z"
				},
				{
					"id":"KE",
					"title":"Kenya",
					"d":"M590.191,465.775L591.852,468.074L589.888,469.187L589.195,470.35L588.145,470.554L587.747,472.519L586.847,473.645L586.299,475.502L585.17,476.425L581.146,473.633L580.955,472.015L570.788,466.337L570.314,466.031L570.286,463.079L571.089,461.951L572.468,460.107L573.489,458.076L572.255,454.876L571.927,453.476L570.598,451.538L572.323,449.869L574.224,448.026L575.68,448.496L575.68,450.065L576.638,450.985L578.589,450.985L582.138,453.356L583.024,453.384L583.681,453.307L584.302,453.629L586.172,453.849L587,452.686L589.562,451.518L590.692,452.461L592.608,452.462L590.158,455.627z"
				},
				{
					"id":"KG",
					"title":"Kyrgyzstan",
					"d":"M674.221,333.111L674.849,331.451L676.694,330.914L681.308,332.223L681.743,329.976L683.335,329.182L687.328,330.791L688.347,330.37L692.996,330.475L697.156,330.874L698.563,332.239L700.29,332.794L699.896,333.647L695.478,335.679L694.479,337.157L690.882,337.597L689.821,339.951L686.854,339.459L684.916,340.177L682.239,341.903L682.626,342.753L681.828,343.582L676.526,344.129L673.063,342.955L670.022,343.236L670.288,341.14L673.34,341.75L674.366,340.624L676.499,340.984L680.09,338.339L676.767,336.385L674.77,337.312L672.7,335.911L675.054,333.482z"
				},
				{
					"id":"KH",
					"title":"Cambodia",
					"d":"M765.444,433.599L764.304,432.121L762.886,429.182L762.222,425.732L764.018,423.347L767.643,422.797L770.271,423.21L772.585,424.336L773.854,422.354L776.338,423.413L776.988,425.327L776.643,428.753L771.93,430.944L773.161,432.665L770.218,432.871L767.791,434.013z"
				},
				{
					"id":"KP",
					"title":"North Korea",
					"d":"M841.548,332.624L841.94,333.285L840.875,333.059L839.658,334.334L838.821,335.608L838.927,338.276L837.478,339.092L836.979,339.74L835.922,340.823L834.055,341.424L832.838,342.401L832.75,343.969L832.423,344.368L833.539,344.953L835.127,346.525L834.723,347.388L833.529,347.623L831.548,347.795L830.455,349.395L829.204,349.269L829.028,349.589L827.667,348.917L827.328,349.581L826.507,349.874L826.408,349.209L825.682,348.885L824.928,348.32L825.695,346.753L826.356,346.333L826.107,345.679L826.818,343.738L826.635,343.146L824.998,342.752L823.676,341.777L825.959,339.43L829.049,337.446L830.976,334.802L832.307,335.974L834.73,336.11L834.293,334.135L838.623,332.511L839.737,330.38z"
				},
				{
					"id":"KR",
					"title":"South Korea",
					"d":"M835.127,346.525L837.547,350.707L838.241,352.977L838.263,356.962L837.206,358.844L834.667,359.498L832.426,360.906L829.9,361.196L829.587,359.348L830.106,356.782L828.867,353.181L830.95,352.594L829.028,349.589L829.204,349.269L830.455,349.395L831.548,347.795L833.529,347.623L834.723,347.388z"
				},
				{
					"id":"XK",
					"title":"Kosovo",
					"d":"M533.467,333.918L533.341,334.688L532.985,334.657L532.796,333.293L532.125,332.907L531.528,331.891L532.052,331.039L532.723,330.765L533.111,329.495L533.614,329.283L534.012,329.824L534.536,330.062L534.903,330.669L535.364,330.849L535.909,331.554L536.307,331.533L535.993,332.457L535.657,332.907L535.75,333.19L535.123,333.335z"
				},
				{
					"id":"KW",
					"title":"Kuwait",
					"d":"M609.767,375.756L610.352,377.174L610.101,377.905L611.004,380.309L609.021,380.391L608.323,378.875L605.825,378.567L607.882,375.487z"
				},
				{
					"id":"KZ",
					"title":"Kazakhstan",
					"d":"M674.221,333.111L672.613,333.808L668.915,336.417L667.688,339.066L666.644,339.09L665.875,337.339L662.31,337.219L661.739,334.16L660.373,334.134L660.582,330.333L657.226,327.526L652.417,327.828L649.129,328.389L646.451,324.891L644.157,323.407L639.811,320.57L639.287,320.224L632.069,322.571L632.18,336.698L630.741,336.88L628.779,333.948L626.884,332.892L623.701,333.677L622.462,334.927L622.305,334.012L622.994,332.439L622.459,331.117L619.21,329.816L617.944,326.352L616.396,325.367L616.303,324.091L619.03,324.464L619.138,321.581L621.522,320.935L623.972,321.529L624.477,317.622L623.977,315.108L621.171,315.306L618.787,314.307L615.541,316.104L612.925,316.955L611.501,316.299L611.786,314.197L609.999,311.437L607.918,311.553L605.538,308.716L607.156,305.501L606.337,304.627L608.575,299.857L611.458,302.389L611.807,299.196L617.595,294.347L621.975,294.23L628.155,297.332L631.475,299.123L634.45,297.255L638.895,297.166L642.481,299.458L643.296,298.148L647.234,298.339L647.937,296.233L643.393,293.136L646.084,290.913L645.559,289.659L648.251,288.455L646.227,285.247L647.512,283.629L658.004,281.966L659.373,280.776L666.389,278.985L668.91,276.953L673.949,278.011L674.832,283.023L677.759,281.858L681.36,283.489L681.128,286.072L683.817,285.804L690.844,281.31L689.818,282.814L693.396,286.473L699.661,298.049L701.155,295.716L705.018,298.281L709.047,297.141L710.595,297.94L711.944,300.486L713.904,301.334L715.098,303.177L718.71,302.598L720.197,305.232L718.063,308.063L715.734,308.457L715.601,312.643L714.041,314.503L708.479,313.15L706.456,320.412L705.021,321.298L699.466,322.88L701.99,329.634L700.066,330.629L700.29,332.794L698.563,332.239L697.156,330.874L692.996,330.475L688.347,330.37L687.328,330.791L683.335,329.182L681.743,329.976L681.308,332.223L676.694,330.914L674.849,331.451z"
				},
				{
					"id":"LA",
					"title":"Lao People's Democratic Republic",
					"d":"M770.271,423.21L771.184,421.913L771.309,419.47L769.039,416.943L768.864,414.068L766.731,411.69L764.611,411.489L764.046,412.509L762.404,412.594L761.564,412.077L758.609,413.823L758.543,411.197L759.232,408.093L757.338,407.957L757.177,406.177L755.964,405.26L756.561,404.164L758.947,402.22L759.199,402.923L760.694,403.004L760.271,399.571L761.724,399.129L763.362,401.505L764.621,404.222L768.073,404.245L769.16,406.837L767.368,407.613L766.563,408.676L769.923,410.438L772.253,413.903L774.021,416.471L776.142,418.49L776.848,420.533L776.338,423.413L773.854,422.354L772.585,424.336z"
				},
				{
					"id":"LB",
					"title":"Lebanon",
					"d":"M575.69,364.934L574.938,364.978L574.68,365.562L573.741,365.556L574.74,362.83L576.134,360.451L576.187,360.332L577.448,360.505L577.907,361.832L576.378,363.101z"
				},
				{
					"id":"LK",
					"title":"Sri Lanka",
					"d":"M704.574,442.372L704.152,445.294L702.977,446.091L700.538,446.732L699.203,444.504L698.706,440.466L699.976,435.888L701.913,437.457L703.219,439.442z"
				},
				{
					"id":"LR",
					"title":"Liberia",
					"d":"M453.629,451.218L452.895,451.242L450.005,449.91L447.457,447.781L445.068,446.25L443.18,444.441L443.851,443.543L443.999,442.727L445.264,441.201L446.569,439.888L447.168,439.825L447.9,439.508L449.073,441.232L448.887,442.361L449.433,442.959L450.226,442.973L450.797,441.841L451.59,441.914L451.461,442.73L451.741,444.088L451.132,445.333L451.949,446.103L452.84,446.29L454.027,447.463L454.113,448.565L453.845,448.916z"
				},
				{
					"id":"LS",
					"title":"Lesotho",
					"d":"M556.504,547.746L557.477,548.709L556.616,550.268L556.14,551.318L554.577,551.822L554.062,552.855L553.058,553.178L550.955,550.693L552.45,548.662L553.969,547.414L555.28,546.765z"
				},
				{
					"id":"LT",
					"title":"Lithuania",
					"d":"M538.988,282.094L538.763,280.866L539.063,279.539L537.823,278.766L534.887,277.91L534.291,273.746L537.502,272.203L542.204,272.527L544.958,272.028L545.352,273.076L546.844,273.398L549.539,275.817L549.803,278.024L547.504,279.586L546.853,282.31L543.809,284.107L541.099,284.075L540.426,282.606z"
				},
				{
					"id":"LU",
					"title":"Luxembourg",
					"d":"M492.197,301.287L492.757,302.27L492.599,304.165L491.79,304.255L491.162,303.882L491.466,301.452z"
				},
				{
					"id":"LV",
					"title":"Latvia",
					"d":"M534.291,273.746L534.387,269.938L535.765,266.703L538.408,264.92L540.634,268.799L542.884,268.699L543.423,264.71L545.811,263.78L547.04,264.426L549.453,266.368L551.765,266.377L553.116,267.572L553.355,270.063L554.256,273.053L551.244,274.982L549.539,275.817L546.844,273.398L545.352,273.076L544.958,272.028L542.204,272.527L537.502,272.203z"
				},
				{
					"id":"LY",
					"title":"Libya",
					"d":"M516.894,397.927L514.91,399.05L513.333,397.389L508.898,396.081L507.667,394.172L505.454,392.751L504.144,393.312L503.146,391.601L503.041,390.281L501.383,388.025L502.496,386.725L502.251,384.76L502.608,383.041L502.405,381.601L502.899,379.011L502.747,377.526L501.839,374.686L503.208,373.936L503.45,372.564L503.152,371.213L505.077,369.951L505.94,368.898L507.307,367.951L507.466,365.402L510.759,366.547L511.937,366.262L514.279,366.815L518,368.294L519.313,371.212L521.83,371.846L525.781,373.208L528.769,374.818L530.136,373.979L531.479,372.486L530.826,369.983L531.706,368.382L533.726,366.833L535.656,366.38L539.449,367.059L540.405,368.537L541.449,368.55L542.342,369.112L545.128,369.498L545.812,370.582L544.796,372.149L545.23,373.539L544.508,375.535L545.349,378.121L545.349,389.301L545.349,400.529L545.349,406.492L542.125,406.501L542.09,407.744L530.907,402.045L519.725,396.269z"
				},
				{
					"id":"MA",
					"title":"Morocco",
					"d":"M471.361,366.311L470.393,362.782L470.226,360.729L469.169,358.551L467.951,358.514L465.047,357.759L462.38,357.996L460.69,356.54L458.626,356.523L457.745,358.627L455.871,362.14L453.792,363.53L450.979,365.058L449.175,367.304L448.799,369.042L447.734,371.861L448.435,375.892L446.094,378.568L444.688,379.418L442.479,381.587L439.872,381.937L438.462,383.148L438.446,383.162L450.956,383.148L450.956,383.141L450.932,379.389L455.46,377.03L458.26,376.541L460.555,375.676L461.627,374.059L464.905,372.775L465.026,370.358L466.648,370.072L467.917,368.856L471.586,368.301L472.1,367.016z"
				},
				{
					"id":"MD",
					"title":"Moldova",
					"d":"M549.89,309.445L550.559,308.826L552.422,308.409L554.489,309.718L555.642,309.875L556.909,310.999L556.708,312.406L557.729,313.082L558.134,314.799L559.113,315.837L558.915,316.444L559.438,316.855L558.695,317.155L557.043,317.036L556.767,316.475L556.181,316.799L556.379,317.523L555.611,318.809L555.122,320.184L554.416,320.617L553.914,318.791L554.209,317.067L554.12,315.282L552.502,312.84L551.613,311.092L550.744,309.854z"
				},
				{
					"id":"ME",
					"title":"Montenegro",
					"d":"M530.774,332.227L530.596,331.512L529.38,333.377L529.568,334.573L528.981,334.283L528.196,333.053L526.984,332.302L527.292,331.658L527.703,329.559L528.615,328.666L529.139,328.314L529.883,328.975L530.292,329.506L531.214,329.919L532.283,330.712L532.052,331.039L531.528,331.891z"
				},
				{
					"id":"MG",
					"title":"Madagascar",
					"d":"M614.166,498.396L614.91,499.611L615.604,501.501L616.056,504.958L616.781,506.307L616.503,507.693L616.007,508.546L615.055,506.85L614.527,507.706L615.063,509.854L614.813,511.087L614.04,511.76L613.863,514.236L612.759,517.663L611.376,521.745L609.644,527.42L608.57,531.634L607.303,535.184L605.022,535.913L602.575,537.218L600.96,536.43L598.734,535.327L597.96,533.708L597.775,531.001L596.788,528.583L596.531,526.414L597.034,524.251L598.324,523.733L598.332,522.739L599.672,520.484L599.925,518.598L599.274,517.2L598.743,515.345L598.519,512.647L599.499,511.016L599.875,509.172L601.272,509.065L602.836,508.471L603.874,507.947L605.105,507.908L606.704,506.26L609.011,504.484L609.853,503.038L609.471,501.811L610.662,502.156L612.207,500.165L612.259,498.447L613.188,497.172z"
				},
				{
					"id":"MK",
					"title":"Macedonia",
					"d":"M532.985,334.657L533.341,334.688L533.467,333.918L535.123,333.335L535.75,333.19L536.705,332.97L538.005,332.907L539.409,334.116L539.608,336.589L539.074,336.713L538.612,337.36L537.093,337.288L536.024,338.098L534.19,338.425L533.027,337.524L532.628,335.93z"
				},
				{
					"id":"ML",
					"title":"Mali",
					"d":"M441.128,422.221L442.072,421.696L442.543,419.996L443.432,419.93L445.39,420.734L446.971,420.163L448.055,420.354L448.476,419.712L459.726,419.668L460.35,417.64L459.864,417.282L458.511,404.597L457.158,391.541L461.449,391.485L470.907,398.139L480.365,404.686L481.032,406.079L482.777,406.928L484.076,407.409L484.108,409.289L487.218,409L487.226,415.75L485.693,417.691L485.454,419.476L482.963,419.935L479.138,420.183L478.101,421.208L476.304,421.322L474.506,421.335L473.807,420.782L472.263,421.192L469.643,422.388L469.107,423.287L466.932,424.574L466.551,425.311L465.375,425.894L464.02,425.508L463.251,426.207L462.84,428.167L460.614,430.528L460.679,431.491L459.914,432.695L460.1,434.341L458.943,434.76L458.289,435.117L457.854,433.906L457.045,434.226L456.561,434.17L456.045,434.997L453.88,434.974L453.104,434.548L452.738,434.806L451.882,433.989L452.03,433.145L451.68,432.814L451.083,433.093L451.192,432.17L451.767,431.439L450.618,430.248L450.284,429.462L449.661,428.836L449.1,428.761L448.426,429.16L447.52,429.542L446.751,430.158L445.551,429.93L444.773,429.207L444.308,429.112L443.576,429.492L443.131,429.495L442.97,428.451L443.099,427.562L442.859,426.456L441.81,425.652L441.256,424.01z"
				},
				{
					"id":"MM",
					"title":"Myanmar",
					"d":"M754.357,405.947L752.722,407.233L750.742,407.366L749.464,410.556L748.28,411.09L749.636,413.662L751.415,415.792L752.563,417.709L751.537,420.227L750.569,420.76L751.238,422.206L753.108,424.49L753.429,426.09L753.385,427.418L754.481,430.019L752.941,432.669L751.583,435.58L751.313,433.478L752.174,431.304L751.231,429.62L751.459,426.51L750.321,425.026L749.407,421.586L748.9,417.934L747.688,415.526L745.841,416.985L742.654,419.053L741.082,418.795L739.345,418.115L740.311,414.511L739.726,411.771L737.528,408.376L737.871,407.311L736.23,406.931L734.241,404.507L734.058,402.104L735.036,402.557L735.094,400.405L736.477,399.691L736.181,398.41L736.814,397.379L736.923,394.231L739.114,394.927L740.364,392.405L740.507,390.907L742.054,388.313L741.969,386.534L745.599,384.372L747.603,384.939L747.372,383.006L748.355,382.428L748.144,381.229L749.784,380.994L750.721,382.854L751.944,383.605L752.027,386.003L751.914,388.57L749.259,391.15L748.922,394.785L751.882,394.278L752.551,397.079L754.326,397.666L753.51,400.173L755.592,401.301L756.806,401.854L758.862,400.98L758.947,402.22L756.561,404.164L755.964,405.26z"
				},
				{
					"id":"MN",
					"title":"Mongolia",
					"d":"M721.295,304.88L724.251,304.136L729.601,300.396L733.865,298.326L736.304,299.679L739.229,299.744L741.103,301.787L743.901,301.943L747.955,303.033L750.681,300L749.542,297.4L752.446,292.741L755.587,294.612L758.132,295.139L761.429,296.291L761.964,299.612L765.946,301.453L768.597,300.644L772.144,300.071L774.953,300.648L777.699,302.74L779.401,304.943L782.001,304.898L785.533,305.595L788.11,304.533L791.802,303.821L795.908,300.762L797.59,301.234L799.058,302.69L802.403,302.329L801.038,305.576L799.057,309.803L799.779,311.509L801.366,310.981L804.132,311.628L806.287,310.09L808.537,311.423L811.078,314.31L810.771,315.763L808.559,315.303L804.486,315.844L802.513,317L800.458,319.662L796.183,321.208L793.389,323.309L790.507,322.509L788.93,322.151L787.457,324.689L788.353,326.188L788.807,327.468L786.844,328.765L784.832,330.816L781.556,332.153L777.354,332.297L772.824,333.608L769.56,335.622L768.318,334.458L764.926,334.461L760.777,332.17L758.01,331.605L754.28,332.133L748.493,331.282L745.402,331.37L743.757,329.101L742.479,325.533L740.747,325.1L737.359,322.652L733.583,322.1L730.251,321.421L729.242,319.692L730.321,314.965L728.387,311.646L724.388,310.081L722.031,307.85z"
				},
				{
					"id":"MR",
					"title":"Mauritania",
					"d":"M441.128,422.221L439.278,420.24L437.581,418.111L435.72,417.343L434.38,416.488L432.814,416.521L431.446,417.154L430.053,416.903L429.093,417.834L428.85,416.269L429.633,414.832L429.981,412.079L429.671,409.173L429.333,407.705L429.612,406.227L428.888,404.814L427.41,403.526L428.021,402.529L439.001,402.548L438.47,398.204L439.156,396.648L441.783,396.375L441.692,388.524L450.895,388.687L450.903,383.96L461.449,391.485L457.158,391.541L458.511,404.597L459.864,417.282L460.35,417.64L459.726,419.668L448.476,419.712L448.055,420.354L446.971,420.163L445.39,420.734L443.432,419.93L442.543,419.996L442.072,421.696z"
				},
				{
					"id":"MW",
					"title":"Malawi",
					"d":"M572.154,495.69L571.369,497.854L572.154,501.57L573.127,501.529L574.139,502.454L575.313,504.532L575.552,508.246L574.338,508.856L573.482,510.873L571.653,509.077L571.445,507.036L572.035,505.693L571.873,504.538L570.766,503.81L569.994,504.074L568.38,502.695L566.906,501.951L567.757,499.292L568.639,498.299L568.101,495.938L568.664,493.636L569.142,492.868L568.429,490.466L567.105,489.207L569.854,489.733L570.418,490.514L571.369,491.833z"
				},
				{
					"id":"MX",
					"title":"Mexico",
					"d":"M202.887,388.721L201.799,391.432L201.308,393.639L201.104,397.716L200.833,399.191L201.319,400.834L202.188,402.296L202.749,404.612L204.609,406.825L205.264,408.513L206.361,409.965L209.338,410.745L210.497,411.974L212.957,411.153L215.094,410.856L217.194,410.328L218.958,409.823L220.742,408.62L221.41,406.895L221.64,404.398L222.125,403.526L224.024,402.743L226.989,402.049L229.472,402.153L231.172,401.899L231.845,402.534L231.75,403.974L230.243,405.743L229.577,407.548L230.093,408.063L229.673,409.34L228.97,411.635L228.26,410.881L227.673,410.93L227.14,410.968L226.135,412.739L225.626,412.393L225.287,412.527L225.309,412.958L222.716,412.926L220.098,412.931L220.096,414.576L218.83,414.583L219.874,415.557L220.91,416.229L221.222,416.859L221.676,417.035L221.604,418.023L218.005,418.032L216.656,420.391L217.054,420.931L216.729,421.607L216.66,422.446L213.487,419.339L212.041,418.399L209.751,417.643L208.186,417.853L205.934,418.943L204.52,419.229L202.54,418.466L200.439,417.914L197.818,416.582L195.716,416.175L192.542,414.82L190.196,413.424L189.488,412.643L187.919,412.468L185.051,411.54L183.884,410.199L180.871,408.525L179.466,406.659L178.798,405.212L179.733,404.921L179.445,404.072L180.089,403.297L180.103,402.263L179.157,400.917L178.904,399.72L177.964,398.196L175.493,395.18L172.674,392.792L171.31,390.877L168.903,389.617L168.388,388.86L168.815,386.941L167.386,386.213L165.731,384.693L165.032,382.5L163.523,382.243L161.896,380.576L160.582,379.028L160.459,378.031L158.952,375.61L157.958,373.133L158.001,371.883L155.973,370.586L155.037,370.729L153.437,369.826L152.987,371.156L153.451,372.721L153.724,375.153L154.686,376.48L156.767,378.687L157.229,379.437L157.655,379.664L158.025,380.755L158.523,380.711L159.086,382.75L159.938,383.552L160.535,384.664L162.297,386.255L163.227,389.146L164.06,390.5L164.838,391.942L164.993,393.559L166.345,393.66L167.469,395.047L168.486,396.406L168.418,396.949L167.238,398.062L166.741,398.047L166.002,396.204L164.167,394.469L162.145,392.99L160.711,392.211L160.804,389.958L160.378,388.28L159.042,387.317L157.115,385.926L156.745,386.328L156.037,385.514L154.308,384.756L152.655,382.932L152.86,382.694L154.015,382.873L155.055,381.693L155.16,380.264L153.001,377.99L151.355,377.104L150.322,375.095L149.282,372.972L147.983,370.363L146.844,367.4L150.03,367.146L153.591,366.786L153.329,367.434L157.563,369.039L163.959,371.348L169.535,371.325L171.758,371.324L171.764,369.973L176.622,369.974L177.644,371.135L179.078,372.167L180.744,373.596L181.673,375.285L182.371,377.054L183.82,378.021L186.148,378.979L187.914,376.45L190.207,376.388L192.183,377.667L193.59,379.851L194.559,381.709L196.213,383.507L196.831,385.702L197.616,387.168L199.803,388.131L201.793,388.813z"
				},
				{
					"id":"MY",
					"title":"Malaysia",
					"d":"M758.654,446.07l0.22,1.438l1.852,-0.334l0.916,-1.15l0.645,0.262l1.656,1.69l1.177,1.873l0.16,1.881l-0.298,1.27l0.272,0.959l0.205,1.651l0.987,0.768l1.103,2.465l-0.054,0.942l-1.988,0.186l-2.652,-2.064l-3.317,-2.212l-0.328,-1.421l-1.621,-1.866l-0.387,-2.313l-1.012,-1.524l0.308,-2.038l-0.618,-1.188l0.487,-0.5L758.654,446.07zM807.841,450.9l-2.064,0.952l-2.43,-0.471l-3.224,-0.001l-0.972,3.175l-1.079,0.97l-1.438,3.876l-2.287,0.594l-2.652,-0.781l-1.345,0.244l-1.634,1.409l-1.79,-0.201l-1.809,0.566l-1.917,-1.574l-0.469,-1.862l2.055,0.955l2.167,-0.521l0.564,-2.36l1.196,-0.526l3.361,-0.604l2.011,-2.207l1.377,-1.766l1.277,1.447l0.589,-0.952l1.34,0.089l0.164,-1.785l0.126,-1.377l2.159,-1.947l1.414,-2.191l1.134,-0.009l1.44,1.419l0.128,1.218l1.847,0.78l2.34,0.842l-0.2,1.095l-1.881,0.139L807.841,450.9z"
				},
				{
					"id":"MZ",
					"title":"Mozambique",
					"d":"M572.154,495.69L574.264,495.461L577.633,496.262L578.365,495.902L580.317,495.829L581.316,494.977L582.998,495.023L586.064,493.921L588.295,492.278L588.749,493.548L588.633,496.378L588.979,498.879L589.088,503.355L589.582,504.765L588.745,506.827L587.657,508.837L585.872,510.639L583.309,511.746L580.148,513.163L576.98,516.31L575.901,516.848L573.944,518.944L572.789,519.629L572.552,521.746L573.882,524.005L574.435,525.763L574.47,526.662L574.965,526.512L574.885,529.473L574.43,530.883L575.091,531.404L574.674,532.673L573.502,533.762L571.189,534.798L567.817,536.465L566.587,537.607L566.828,538.914L567.544,539.123L567.304,540.763L565.177,540.737L564.937,539.359L564.521,537.967L564.282,536.856L564.782,533.428L564.052,531.259L562.709,526.998L565.663,523.593L566.402,521.443L566.826,521.172L567.143,519.426L566.692,518.55L566.813,516.347L567.359,514.312L567.353,510.617L565.896,509.683L564.562,509.472L563.957,508.754L562.658,508.142L560.319,508.2L560.138,507.12L559.872,505.065L568.38,502.695L569.994,504.074L570.766,503.81L571.873,504.538L572.035,505.693L571.445,507.036L571.653,509.077L573.482,510.873L574.338,508.856L575.552,508.246L575.313,504.532L574.139,502.454L573.127,501.529L572.154,501.57L571.369,497.854z"
				},
				{
					"id":"NA",
					"title":"Namibia",
					"d":"M521.082,546.54L518.998,544.149L517.901,541.854L517.282,538.817L516.591,536.574L515.651,531.851L515.588,528.22L515.229,526.576L514.139,525.337L512.691,522.865L511.218,519.301L510.605,517.446L508.324,514.576L508.154,512.332L509.503,511.777L511.182,511.28L513,511.367L514.671,512.687L515.095,512.481L526.46,512.355L528.403,513.756L535.191,514.17L540.345,512.978L542.641,512.314L544.458,512.482L545.565,513.141L545.586,513.383L544.005,514.043L543.155,514.049L541.365,515.198L540.293,513.99L535.971,515.016L533.883,515.113L533.801,525.683L531.037,525.788L531.038,534.649L531.035,546.173L528.532,547.799L527.026,548.032L525.263,547.43L524.005,547.198L523.532,545.84L522.425,544.973z"
				},
				{
					"id":"NC",
					"title":"New Caledonia",
					"d":"M940.075,523.484L942.375,525.34L943.833,526.722L942.768,527.445L941.225,526.631L939.219,525.279L937.411,523.692L935.556,521.59L935.168,520.583L936.374,520.625L937.945,521.636L939.179,522.648z"
				},
				{
					"id":"NE",
					"title":"Niger",
					"d":"M481.294,429.884L481.357,427.932L478.125,427.284L478.037,425.899L476.458,424.027L476.082,422.718L476.304,421.322L478.101,421.208L479.138,420.183L482.963,419.935L485.454,419.476L485.693,417.691L487.226,415.75L487.218,409L491.172,407.683L499.29,401.833L508.898,396.081L513.333,397.389L514.91,399.05L516.894,397.927L517.583,402.604L518.632,403.381L518.677,404.33L519.843,405.35L519.233,406.628L518.153,412.608L518.005,416.404L514.429,419.14L513.218,422.94L514.386,424.004L514.379,425.849L516.177,425.915L515.897,427.262L515.105,427.426L515.015,428.335L514.494,428.398L512.597,425.268L511.938,425.153L509.746,426.754L507.575,425.919L506.066,425.752L505.257,426.154L503.613,426.067L501.959,427.286L500.529,427.355L497.136,425.877L495.807,426.58L494.376,426.531L493.325,425.45L490.515,424.38L487.501,424.72L486.771,425.34L486.376,426.986L485.573,428.138L485.378,430.681L483.24,429.042L482.235,429.05z"
				},
				{
					"id":"NG",
					"title":"Nigeria",
					"d":"M499.086,450.079L496.176,451.085L495.111,450.938L494.033,451.564L491.791,451.503L490.29,449.755L489.366,447.73L487.381,445.885L485.274,445.92L482.8,445.918L482.961,441.395L482.89,439.604L483.418,437.826L484.282,436.961L485.643,435.211L485.347,434.45L485.899,433.309L485.269,431.625L485.378,430.681L485.573,428.138L486.376,426.986L486.771,425.34L487.501,424.72L490.515,424.38L493.325,425.45L494.376,426.531L495.807,426.58L497.136,425.877L500.529,427.355L501.959,427.286L503.613,426.067L505.257,426.154L506.066,425.752L507.575,425.919L509.746,426.754L511.938,425.153L512.597,425.268L514.494,428.398L515.015,428.335L516.125,429.471L515.82,429.985L515.671,430.931L513.31,433.128L512.568,434.936L512.173,436.406L511.578,437.035L511.012,439.01L509.513,440.17L509.079,441.594L508.449,442.726L508.187,443.893L506.26,444.838L504.686,443.685L503.623,443.731L501.953,445.373L501.142,445.398L499.808,448.1z"
				},
				{
					"id":"NI",
					"title":"Nicaragua",
					"d":"M234.928,432.306L233.958,431.411L232.647,430.264L232.03,429.304L230.848,428.408L229.443,427.118L229.755,426.676L230.218,427.106L230.43,426.904L231.302,426.787L231.653,426.133L232.064,426.107L232.004,424.698L232.662,424.631L233.247,424.651L233.852,423.885L234.679,424.465L234.967,424.109L235.483,423.768L236.462,422.977L236.508,422.384L236.777,422.409L237.137,421.721L237.43,421.637L237.908,422.077L238.47,422.208L239.089,421.841L239.797,421.839L240.771,421.463L241.159,421.07L242.121,421.129L241.879,421.406L241.736,422.049L242.022,423.102L241.376,424.081L241.076,425.235L240.985,426.497L241.135,427.234L241.206,428.52L240.778,428.799L240.516,430.018L240.708,430.77L240.135,431.497L240.265,432.264L240.695,432.73L240.023,433.332L239.196,433.143L238.731,432.559L237.842,432.322L237.197,432.692L235.35,431.94z"
				},
				{
					"id":"NL",
					"title":"Netherlands",
					"d":"M489.078,287.613L488.907,288.521L489.391,288.679L489.603,289.087L489.688,289.458L490.078,289.597L490.108,289.794L489.76,290.059L489.375,290.083L489.375,290.375L489.642,290.84L489.257,291.292L489.646,291.417L490.438,290.646L490.917,289.938L490.917,289.458L490.75,289.125L490.292,288.896L490.397,288.375L490.292,287.917L490.708,286.917L491.12,286.396L492.284,285.975L494.614,286.108L495.138,287.691L494.439,291.916L493.729,293.627L492.044,293.629L492.515,298.319L490.974,297.283L489.199,295.327L486.601,296.258L484.548,295.906L485.25,294.667L486.167,293.458L487.446,292.209L488.203,290.117L488.448,287.935z"
				},
				{
					"id":"NO",
					"title":"Norway",
					"d":"M554.225,175.606l8.77,6.24l-3.611,2.226l3.072,5.115l-4.771,3.188l-2.265,0.724l1.188,-5.592l-3.598,-3.252l-4.354,2.775l-1.375,5.854l-2.673,3.439l-3.011,-1.87l-3.661,0.384l-3.116,-4.153l-1.681,2.088l-1.739,0.323l-0.412,5.083l-5.284,-1.224l-0.742,4.217l-2.692,-0.025l-1.851,5.243l-2.805,7.867l-4.354,9.5l1.021,2.232l-0.976,2.554l-2.781,-0.109l-1.821,5.906l0.172,8.044l1.792,2.978l-0.928,6.727l-2.333,3.812l-1.236,3.145l-1.881,-3.351l-5.536,6.266l-3.738,1.245l-3.877,-2.715l-1.002,-5.864l-0.887,-13.256l2.582,-3.875l7.403,-5.184l5.536,-6.586l5.133,-9.301l6.737,-13.762l4.696,-5.674l7.705,-9.893l6.153,-3.592l4.613,0.44l4.27,-6.995l5.113,0.381L554.225,175.606z"
				},
				{
					"id":"NP",
					"title":"Nepal",
					"d":"M722.33,382.447L722.113,383.803L722.482,385.794L722.161,387.029L719.826,387.081L716.453,386.354L714.286,386.058L712.669,384.465L708.826,384.059L705.169,382.292L702.525,380.74L699.809,379.538L700.897,376.547L702.677,375.086L703.839,374.313L706.087,375.306L708.918,377.4L710.493,377.86L711.435,379.393L713.613,380.021L715.889,381.413L719.061,382.138z"
				},
				{
					"id":"NZ",
					"title":"New Zealand",
					"d":"M960.377,588.627l0.636,1.531l1.994,-1.503l0.811,1.567l0.003,1.571l-1.043,1.741l-1.833,2.797l-1.435,1.541l1.034,1.856l-2.163,0.048l-2.399,1.465l-0.751,2.568l-1.594,4.027l-2.201,1.802l-1.399,1.159l-2.583,-0.086l-1.815,-1.338l-3.048,-0.284l-0.47,-1.479l1.507,-2.957l3.525,-3.875l1.81,-0.731l2.015,-1.472l2.403,-2.01l1.683,-1.975l1.247,-2.808l1.063,-0.946l0.416,-2.074l1.967,-1.703L960.377,588.627zM964.839,571.614l2.032,3.665l0.059,-2.383l1.266,0.949l0.419,2.651l2.257,1.15l1.895,0.283l1.603,-1.347l1.421,0.407l-0.68,3.151l-0.854,2.093l-2.141,-0.074l-0.749,1.097l0.261,1.561l-0.412,0.678l-1.06,1.974l-1.39,2.532l-2.167,1.487l-0.481,-0.979l-1.169,-0.536l1.617,-3.039l-0.918,-2.012l-3.018,-1.452l0.079,-1.308l2.026,-1.253l0.473,-2.744l-0.13,-2.282l-1.136,-2.344l0.075,-0.613l-1.34,-1.43l-2.206,-3.041l-1.173,-2.409l1.04,-0.266l1.526,1.887l2.182,0.885L964.839,571.614z"
				},
				{
					"id":"OM",
					"title":"Oman",
					"d":"M640.291,403.185l-1.047,2.042l-1.271,-0.156l-0.583,0.708l-0.45,1.504l0.345,1.975l-0.265,0.362l-1.29,-0.01l-1.751,1.1l-0.273,1.43l-0.642,0.618l-1.744,-0.023l-1.098,0.737l0.014,1.18l-1.356,0.81l-1.547,-0.275l-1.875,0.982l-1.296,0.165l-0.915,-2.036l-2.192,-4.841l8.411,-2.957l1.869,-5.972l-1.285,-2.135l0.073,-1.219l0.817,-1.256l0.008,-1.245l1.269,-0.601l-0.496,-0.425l0.229,-1.997l1.433,-0.012l1.257,2.095l1.565,1.108l2.057,0.398l1.66,0.555l1.266,1.74l0.756,1.005l1.004,0.382l-0.006,0.673l-1.021,1.792l-0.448,0.841L640.291,403.185zM633.366,388.64l-0.365,0.562l-0.534,-1.057l0.817,-1.059l0.347,0.271L633.366,388.64z"
				},
				{
					"id":"PA",
					"title":"Panama",
					"d":"M256.885,443.212L255.95,442.402L255.349,440.884L256.042,440.133L255.332,439.939L254.808,439.009L253.411,438.226L252.185,438.405L251.616,439.385L250.483,440.093L249.872,440.191L249.597,440.777L250.935,442.303L250.169,442.662L249.764,443.078L248.459,443.221L247.974,441.543L247.609,442.021L246.684,441.855L246.119,440.724L244.969,440.537L244.241,440.208L243.038,440.212L242.951,440.823L242.629,440.397L242.777,439.839L243.011,439.268L242.901,438.758L243.321,438.424L242.737,438.005L242.721,436.869L243.806,436.616L244.813,437.629L244.755,438.227L245.874,438.354L246.139,438.124L246.909,438.817L248.289,438.613L249.481,437.901L251.184,437.332L252.141,436.488L253.689,436.654L253.585,436.932L255.148,437.028L256.396,437.516L257.311,438.364L258.366,439.143L258.025,439.555L258.676,441.213L258.147,442.048L257.244,441.847z"
				},
				{
					"id":"PE",
					"title":"Peru",
					"d":"M280.132,513.144L279.38,514.645L277.938,515.394L275.127,513.711L274.884,512.512L269.325,509.588L264.297,506.42L262.134,504.643L260.973,502.268L261.433,501.441L259.059,497.691L256.294,492.449L253.645,486.827L252.499,485.545L251.616,483.476L249.438,481.645L247.44,480.51L248.348,479.26L246.989,476.593L247.861,474.636L250.097,472.874L250.429,474.035L249.629,474.7L249.705,475.724L250.864,475.501L251.996,475.803L253.173,477.214L254.758,476.064L255.289,474.181L257.007,471.753L260.378,470.653L263.436,467.735L264.309,465.924L263.917,463.809L264.665,463.544L266.53,464.864L267.425,466.178L268.723,466.896L270.375,469.817L272.462,470.167L274.007,469.43L275.02,469.912L276.703,469.672L278.85,470.978L277.041,473.817L277.878,473.883L279.282,475.367L276.755,475.236L276.379,475.656L274.081,476.194L270.875,478.096L270.671,479.402L269.956,480.376L270.235,481.892L268.541,482.702L268.543,483.887L267.804,484.401L268.971,486.934L270.529,488.648L269.936,489.86L271.797,490.024L272.857,491.532L275.332,491.605L277.632,489.939L277.445,494.239L278.72,494.565L280.302,494.077L282.726,498.657L282.124,499.624L281.985,501.636L281.931,504.079L280.835,505.519L281.337,506.589L280.694,507.561L281.9,509.998z"
				},
				{
					"id":"PG",
					"title":"Papua New Guinea",
					"d":"M912.317,482.425l-0.785,0.281l-1.214,-1.077l-1.228,-1.779l-0.604,-2.131l0.389,-0.271l0.301,0.832l0.85,0.635l1.359,1.775l1.324,0.951L912.317,482.425zM901.391,478.666l-1.469,0.23l-0.442,0.785l-1.533,0.681l-1.439,0.655l-1.489,-0.003l-2.299,-0.813l-1.602,-0.781l0.232,-0.866l2.514,0.409l1.534,-0.219l0.423,-1.341l0.402,-0.069l0.272,1.485l1.6,-0.214l0.791,-0.957l1.565,-0.997l-0.309,-1.646l1.68,-0.053l0.566,0.458l-0.057,1.55L901.391,478.666zM887.957,484.02l2.504,1.844l1.82,2.987l1.606,-0.094l-0.113,1.25l2.165,0.48l-0.841,0.533l2.979,1.19l-0.311,0.819l-1.857,0.198l-0.689,-0.734l-2.409,-0.318l-2.832,-0.426l-2.181,-1.804l-1.591,-1.552l-1.457,-2.465l-3.657,-1.229l-2.375,0.802l-1.712,0.929l0.357,2.078l-2.202,0.97l-1.57,-0.472l-2.9,-0.118l-0.048,-9.157l-0.047,-9.103l4.865,1.921l5.184,1.597l1.932,1.43l1.562,1.405l0.426,1.647l4.672,1.73l0.682,1.486l-2.58,0.302L887.957,484.02zM904.635,475.931l-0.877,0.745l-0.528,-1.649l-0.652,-1.079l-1.27,-0.915l-1.596,-1.19l-2.024,-0.82l0.779,-0.673l1.514,0.781l0.953,0.613l1.178,0.669l1.122,1.172l1.065,0.894L904.635,475.931z"
				},
				{
					"id":"PH",
					"title":"Philippines",
					"d":"M829.595,439.864l0.285,1.869l0.165,1.576l-0.955,2.566l-1.024,-2.859l-1.311,1.424l0.896,2.065l-0.804,1.312l-3.3,-1.625l-0.788,-2.029l0.855,-1.334l-1.776,-1.329l-0.881,1.165l-1.319,-0.108l-2.075,1.566l-0.464,-0.822l1.101,-2.368l1.766,-0.792l1.529,-1.062l0.991,1.275l2.132,-0.771l0.457,-1.257l1.982,-0.075l-0.167,-2.184l2.273,1.34l0.235,1.42L829.595,439.864zM822.882,434.601l-1.008,0.93l-0.878,1.785l-0.881,0.835l-1.727,-1.952l0.577,-0.757l0.704,-0.792l0.31,-1.759l1.546,-0.167l-0.451,1.908l2.075,-2.737L822.882,434.601zM807.522,437.322l-3.73,2.675l1.375,-1.971l2.025,-1.743l1.684,-1.957l1.47,-2.818l0.499,2.314l-1.851,1.559L807.522,437.322zM816.996,430.022l1.684,0.881l1.784,-0.004l-0.055,1.187l-1.298,1.205l-1.781,0.851l-0.099,-1.317l0.199,-1.448L816.996,430.022zM827.144,429.25l0.788,3.175l-2.164,-0.753l0.059,0.953l0.687,1.749l-1.334,0.634l-0.116,-1.992l-0.845,-0.147l-0.438,-1.719l1.649,0.227l-0.036,-1.077l-1.714,-2.176l2.692,0.063L827.144,429.25zM815.998,426.661l-0.744,2.467l-1.2,-1.423l-1.432,-2.179l2.402,0.105L815.998,426.661zM815.42,410.918l1.729,0.838l0.864,-0.764l0.255,0.746l-0.456,1.215l0.957,2.094l-0.738,2.417l-1.653,0.961l-0.441,2.332l0.627,2.294l1.486,0.317l1.24,-0.34l3.502,1.592l-0.267,1.56l0.915,0.687l-0.292,1.316l-2.185,-1.402l-1.036,-1.504l-0.722,1.051l-1.785,-1.715l-2.547,0.424l-1.396,-0.634l0.143,-1.187l0.876,-0.732l-0.837,-0.666l-0.362,1.038l-1.384,-1.655l-0.42,-1.257l-0.104,-2.774l1.129,0.955l0.29,-4.555l0.914,-2.656L815.42,410.918z"
				},
				{
					"id":"PL",
					"title":"Poland",
					"d":"M517.358,296.974L516.209,294.11L516.428,292.547L515.734,290.098L514.716,288.449L515.498,287.205L514.842,284.812L516.758,283.417L521.134,281.201L524.665,279.563L527.463,280.383L527.674,281.56L530.378,281.62L533.832,282.166L538.988,282.094L540.426,282.606L541.099,284.075L541.221,286.165L541.999,287.944L541.982,289.792L540.301,290.732L541.166,292.849L541.219,294.862L542.629,298.753L542.329,299.988L540.938,300.499L538.392,304.108L539.115,306.033L538.502,305.785L535.838,304.137L533.82,304.745L532.496,304.304L530.839,305.223L529.425,303.7L528.272,304.285L528.114,304.025L526.824,301.895L524.739,301.631L524.474,300.264L522.55,299.773L522.132,300.904L520.609,299.999L520.784,298.788L518.688,298.403z"
				},
				{
					"id":"PK",
					"title":"Pakistan",
					"d":"M685.985,351.758L688.057,353.385L688.887,356.046L693.498,357.437L690.79,360.303L687.665,360.807L683.411,359.979L682.037,361.44L683.03,364.386L684.004,366.64L686.268,368.274L683.876,370.177L683.92,372.505L681.197,375.754L679.44,379.005L676.507,382.331L673.251,382.091L670.161,385.386L671.996,386.788L672.315,389.179L673.891,390.745L674.447,393.382L668.277,393.374L666.41,395.411L664.355,394.64L663.519,392.441L661.353,390.097L656.187,390.677L651.631,390.734L647.683,391.167L648.739,387.572L652.783,385.963L652.552,384.521L651.21,384.013L651.133,381.236L648.452,379.84L647.323,377.914L645.936,376.228L650.634,377.865L653.438,377.386L655.114,377.794L655.682,377.092L657.635,377.374L661.278,376.039L661.377,373.289L662.939,371.446L665.027,371.451L665.334,370.537L667.477,370.109L668.514,370.415L669.609,369.491L669.455,367.511L670.646,365.507L672.43,364.663L671.328,362.444L673.995,362.549L674.766,361.335L674.649,360.033L676.046,358.603L675.725,356.899L675.063,355.439L676.699,353.931L679.71,353.2L682.928,352.795L684.353,352.15z"
				},
				{
					"id":"PR",
					"title":"Puerto Rico",
					"d":"M289.407,410.886L290.84,411.145L291.346,411.729L290.627,412.468L288.517,412.45L286.878,412.554L286.715,411.298L287.112,410.869z"
				},
				{
					"id":"PS",
					"title":"Palestinian Territories",
					"d":"M574.918,367.868L574.917,369.882L574.502,370.844L573.184,371.287L573.305,370.426L574.021,369.975L573.317,369.606L573.903,367.41z"
				},
				{
					"id":"PT",
					"title":"Portugal",
					"d":"M449.921,334.562L450.938,333.607L452.083,333.057L452.785,334.898L454.441,334.894L454.921,334.42L456.555,334.552L457.339,336.426L456.043,337.432L456.007,340.307L455.552,340.843L455.439,342.564L454.228,342.863L455.351,345.028L454.577,347.378L455.544,348.435L455.159,349.398L454.12,350.72L454.354,351.881L453.227,352.788L451.749,352.297L450.302,352.682L450.73,349.937L450.467,347.759L449.212,347.431L448.542,346.078L448.765,343.723L449.883,342.408L450.082,340.935L450.667,338.728L450.604,337.16L450.044,335.824z"
				},
				{
					"id":"PY",
					"title":"Paraguay",
					"d":"M299.493,526.99L300.598,523.399L300.668,521.795L302.013,519.184L306.899,518.324L309.503,518.365L312.115,519.879L312.163,520.793L312.992,522.447L312.806,526.512L315.766,527.09L316.91,526.5L318.804,527.315L319.329,528.217L319.59,530.995L319.917,532.167L320.963,532.303L322.015,531.81L323.023,532.363L323.022,534.045L322.642,535.862L322.092,537.645L321.633,540.387L319.09,542.785L316.873,543.29L313.724,542.811L310.896,541.957L313.657,537.225L313.254,535.863L310.366,534.661L306.94,532.399L304.648,531.935z"
				},
				{
					"id":"QA",
					"title":"Qatar",
					"d":"M617.717,392.161L617.531,389.92L618.287,388.296L619.053,387.962L619.901,388.934L619.95,390.743L619.342,392.552L618.564,392.77z"
				},
				{
					"id":"RO",
					"title":"Romania",
					"d":"M538.93,310.861L540.141,309.966L541.875,310.43L543.673,310.445L544.975,311.463L545.932,310.824L548.001,310.423L548.707,309.444L549.89,309.445L550.744,309.854L551.613,311.092L552.502,312.84L554.12,315.282L554.209,317.067L553.914,318.791L554.416,320.617L555.667,321.35L556.984,320.71L558.256,321.393L558.321,322.415L556.962,323.264L556.11,322.895L555.326,327.606L553.677,327.2L551.637,325.788L548.336,326.692L546.945,327.68L542.828,327.476L540.673,326.872L539.587,327.156L538.78,325.558L538.267,324.877L538.917,324.216L538.225,323.728L537.345,324.606L535.71,323.466L535.49,321.838L533.781,320.903L533.467,319.633L531.947,318.054L534.195,317.292L535.891,314.531L537.217,311.733z"
				},
				{
					"id":"RS",
					"title":"Serbia",
					"d":"M533.781,320.903L535.49,321.838L535.71,323.466L537.345,324.606L538.225,323.728L538.917,324.216L538.267,324.877L538.78,325.558L538.088,326.441L538.34,327.856L539.702,329.517L538.633,330.712L538.162,331.922L538.466,332.373L538.005,332.907L536.705,332.97L535.75,333.19L535.657,332.907L535.993,332.457L536.307,331.533L535.909,331.554L535.364,330.849L534.903,330.669L534.536,330.062L534.012,329.824L533.614,329.283L533.111,329.495L532.723,330.765L532.052,331.039L532.283,330.712L531.214,329.919L530.292,329.506L529.883,328.975L529.139,328.314L529.799,328.144L530.208,326.323L528.856,324.823L529.558,323.096L528.542,323.106L529.621,321.618L528.73,320.484L528.049,318.934L530.197,317.875L531.947,318.054L533.467,319.633z"
				},
				{
					"id":"RU",
					"title":"Russia",
					"d":"M1008.267,215.754l-2.78,2.973l-4.596,0.698l-0.069,6.463l-1.123,1.347l-2.625,-0.193l-2.138,-2.264l-3.728,-1.917l-0.627,-2.89l-2.848,-1.102l-3.188,0.875l-1.523,-2.369l0.609,-2.552l-3.358,1.635l1.265,3.194l-1.591,2.833l-0.021,0.036l-3.604,2.885l-3.634,-0.478l2.529,3.442l1.669,5.201l1.295,1.668l0.325,2.532l-0.724,1.602l-5.226,-1.317l-7.837,4.511l-2.493,0.688l-4.29,4.096l-4.07,3.505l-1.03,2.553l-4.011,-3.9l-7.306,4.419l-1.275,-2.078l-2.701,2.394l-3.75,-0.763l-0.903,3.631l-3.364,5.218l0.101,2.137l3.193,1.174l-0.376,7.458l-2.603,0.186l-1.201,4.154l1.167,2.104l-4.903,2.467l-0.973,5.405l-4.181,1.135l-0.84,4.663l-4.042,4.183l-1.036,-3.085l-1.201,-6.693l-1.564,-10.647l1.348,-6.954l2.365,-3.071l0.146,-2.441l4.357,-1.18l5.009,-6.781l4.826,-5.727l5.04,-4.57l2.254,-8.366l-3.406,0.511l-1.685,4.922l-7.111,6.361l-2.297,-7.138l-7.238,1.999l-7.018,9.56l2.315,3.377l-6.258,1.419l-4.335,0.557l0.203,-3.946l-4.358,-0.839l-3.474,2.702l-8.573,-0.941l-9.223,1.62l-9.083,10.33l-10.745,11.777l4.417,0.61l1.379,3.001l2.724,1.055l1.794,-2.378l3.076,0.311l4.048,5.191l0.095,3.924l-2.191,4.512l-0.237,5.266l-1.265,6.848l-4.226,6.013l-0.939,2.817l-3.806,4.662l-3.777,4.528l-1.811,2.283l-3.736,2.245l-1.769,0.049l-1.761,-1.858l-3.764,2.792l-0.438,1.258l-0.393,-0.661l-0.017,-1.929l1.432,-0.103l0.404,-4.553l-0.739,-3.358l2.407,-1.399l3.402,0.703l1.886,-3.888l0.961,-4.462l1.089,-1.511l1.474,-3.761l-4.634,1.239l-2.431,1.647l-4.261,-0.005l-1.135,-3.945l-3.321,-3.035l-4.88,-1.379l-1.037,-4.284l-0.977,-2.731l-1.051,-1.937l-1.733,-4.611l-2.462,-1.711l-4.196,-1.394l-3.718,0.127l-3.484,0.845l-2.315,2.313l1.538,1.095l0.035,2.522l-1.56,1.45l-2.531,4.725l0.026,1.929l-3.952,2.739l-3.365,-1.632l-3.346,0.361l-1.468,-1.457l-1.682,-0.472l-4.106,3.059l-3.691,0.712l-2.577,1.062l-3.532,-0.697l-2.6,0.045l-1.702,-2.203l-2.746,-2.092l-2.81,-0.577l-3.547,0.573l-2.65,0.809l-3.983,-1.841l-0.534,-3.322l-3.297,-1.151l-2.545,-0.527l-3.141,-1.871l-2.904,4.659l1.139,2.6l-2.726,3.034l-4.054,-1.09l-2.799,-0.156l-1.874,-2.042l-2.925,-0.065l-2.438,-1.354l-4.265,2.071l-5.35,3.739l-2.956,0.744l-1.098,0.352l-1.487,-2.634l-3.612,0.579l-1.193,-1.843l-1.96,-0.848l-1.35,-2.545l-1.548,-0.799l-4.029,1.14l-3.862,-2.565l-1.494,2.333l-6.266,-11.576l-3.577,-3.659l1.025,-1.504l-7.026,4.494l-2.689,0.268l0.232,-2.583l-3.602,-1.631l-2.927,1.166l-0.883,-5.012l-5.039,-1.059l-2.521,2.033l-7.016,1.791l-1.369,1.189l-10.492,1.663l-1.285,1.618l2.024,3.208l-2.692,1.204l0.525,1.254l-2.691,2.223l4.544,3.098l-0.702,2.106l-3.938,-0.191l-0.814,1.31l-3.586,-2.293l-4.445,0.089l-2.976,1.868l-3.319,-1.791l-6.181,-3.102l-4.38,0.117l-5.788,4.849l-0.349,3.193l-2.883,-2.532l-2.237,4.77l0.819,0.874l-1.618,3.215l2.38,2.837l2.081,-0.116l1.787,2.76l-0.284,2.102l1.424,0.656l-1.278,2.391l-2.718,0.66l-2.787,4.088l2.548,3.695l-0.276,2.586l3.062,4.456l-1.674,1.506l-0.481,0.945l-1.241,-0.253l-1.927,-2.266l-0.788,-0.126l-1.763,-0.871l-0.858,-1.55l-2.615,-0.794l-1.7,0.597l-0.491,-0.706l-3.818,-1.831l-4.128,-0.622l-2.37,-0.658l-0.342,0.455l-3.575,-3.274l-3.199,-1.477l-2.422,-2.319l2.041,-0.636l2.327,-3.354l-1.568,-1.605l4.132,-1.667l-0.074,-0.899l-2.517,0.663l0.088,-1.832l1.445,-1.159l2.713,-0.306l0.441,-1.395l-0.62,-2.327l1.139,-2.233l-0.033,-1.263l-4.133,-1.409l-1.639,0.047l-1.73,-2.043l-2.151,0.693l-3.561,-1.542l0.061,-0.868l-0.997,-1.926l-2.236,-0.216l-0.232,-1.392l0.7,-0.913l-1.792,-2.575l-2.907,0.442l-0.852,-0.229l-0.708,1.037l-1.047,-0.184l-0.689,-2.937l-0.658,-1.54l0.54,-0.435l2.262,0.162l1.091,-1.022l-0.808,-1.253l-1.891,-0.832l0.169,-0.857l-1.141,-0.87l-1.758,-3.153l0.601,-1.314l-0.274,-2.308l-2.741,-1.183l-1.471,0.593l-0.398,-1.236l-2.952,-1.256l-0.901,-2.989l-0.239,-2.492l-1.351,-1.194l1.201,-1.659l-0.832,-4.962l1.995,-3.133l-0.422,-0.959l3.187,-3.071l-2.938,-2.684l6.003,-7.405l2.604,-3.453l1.055,-3.104l-4.15,-4.256l1.146,-4.145l-2.524,-4.854l1.888,-5.764l-3.261,-7.957l2.587,-5.478l-4.294,-4.99l0.409,-5.404l2.265,-0.724l4.771,-3.188l2.893,-2.813l4.606,4.86l7.678,1.876l10.594,8.646l2.152,3.508l0.185,4.796l-3.113,3.695l-4.578,1.846l-12.517,-5.313l-2.059,0.9l4.571,5.097l0.179,3.154l0.183,6.753l3.61,1.966l2.191,1.657l0.362,-3.107l-1.689,-2.801l1.785,-2.505l6.778,4.099l2.361,-1.593l-1.887,-4.877l6.535,-6.742l2.588,0.404l2.618,2.43l1.633,-4.811l-2.338,-4.283l1.373,-4.406l-2.061,-4.692l7.843,2.442l1.602,4.183l-3.55,0.908l0.019,4.038l2.207,2.438l4.332,-1.541l0.686,-4.611l5.857,-3.525l9.785,-6.543l2.114,0.382l-2.764,4.64l3.478,0.785l2.009,-2.584l5.255,-0.211l4.164,-3.193l3.195,4.621l3.186,-5.087l-2.938,-4.577l1.458,-2.663l8.282,2.443l3.881,2.488l10.161,8.799l1.875,-3.975l-2.85,-4.111l-0.082,-1.677l-3.379,-0.782l0.925,-3.827l-1.5,-6.491l-0.085,-2.737l5.175,-7.99l1.84,-8.419l2.085,-1.878l7.423,2.514l0.585,5.183l-2.658,7.283l1.744,2.779l0.902,5.938l-0.637,11.073l3.093,4.73l-1.203,5.008l-5.492,10.198l3.205,1.024l1.115,-2.514l3.085,-1.815l0.744,-3.553l2.427,-3.489l-1.634,-4.26l1.309,-5.083l-3.066,-0.644l-0.674,-4.418l2.237,-8.278l-3.642,-7.033l5.018,-6.042l-0.648,-6.619l1.398,-0.216l1.473,5.189l-1.105,8.667l3,1.592l-1.278,-6.373l4.692,-3.579l5.819,-0.488l5.181,5.18l-2.493,-7.622l-0.279,-10.282l4.876,-2.021l6.744,0.444l6.075,-1.321l-2.278,-5.381l3.245,-7.016l3.221,-0.3l5.452,-5.513l7.403,-1.514l0.936,-3.153l7.362,-1.082l2.294,2.606l6.293,-6.237l5.151,0.199l0.772,-5.238l2.68,-5.334l6.619,-5.312l4.809,4.208l-3.818,3.131l6.352,1.917l0.757,6.034l2.562,-2.943l8.197,0.163l6.32,5.843l2.251,4.351l-0.698,5.854l-3.102,3.242l-7.368,5.917l-2.106,3.079l3.477,1.433l4.148,2.552l2.523,-1.91l1.431,6.393l1.231,-2.559l4.483,-1.575l8.996,1.646l0.684,4.576l11.722,1.43l0.16,-7.473l5.95,1.742l4.477,-0.054l4.527,5.138l1.291,6.038l-1.659,3.836l3.521,6.982l4.41,3.493l2.705,-9.178l4.498,3.996l4.778,-2.376l5.427,2.716l2.065,-2.475l4.587,1.242l-2.024,-8.398l3.702,-4.067l25.323,6.061l2.387,5.355l7.34,6.653l11.322,-1.623l5.582,1.414l2.334,3.498l-0.341,6.016l3.454,2.286l3.753,-1.641l4.973,-0.211l5.293,1.575l5.314,-0.887l4.884,6.994l3.475,-2.483l-2.268,-5.074l1.249,-3.618l8.945,2.286l5.832,-0.486l8.064,3.843l3.925,3.44l6.869,5.858l7.352,7.341l-0.241,4.437l1.891,1.745l-0.65,-5.146l7.611,1.068L1008.267,215.754zM880.842,306.251l-2.821,-7.684l-1.157,-4.509l0.072,-4.496l-0.971,-4.503l-0.729,-3.15l-1.248,0.673l1.113,2.205l-2.592,2.166l-0.248,6.296l1.643,4.411l-0.123,5.852l-0.649,3.237l0.32,4.537l-0.313,4.015l0.52,3.4l1.838,-3.134l2.125,2.445l0.078,-2.836l-2.732,-4.229l1.725,-6.107L880.842,306.251zM537.823,278.766l-2.936,-0.856l-3.869,1.583l-0.639,2.127l3.453,0.545l5.156,-0.072l-0.225,-1.228l0.299,-1.327L537.823,278.766zM979.946,178.648l3.662,-0.52l2.889,-2.065l0.24,-1.188l-4.056,-2.515l-2.376,-0.019l-0.359,0.371l-3.574,3.645l0.5,2.726L979.946,178.648zM870.068,151.559l-2.66,3.915l0.491,0.518l5.746,1.084l4.251,-0.068l-0.339,-2.569l-3.983,-3.81L870.068,151.559zM894.642,142.031l3.241,-4.248l-7.036,-2.875l-5.227,-1.681l-0.671,3.585l5.211,4.267L894.642,142.031zM869.514,140.337l10.335,0.296l2.205,-8.145l-10.135,-6.071l-7.404,-0.512l-3.699,2.18l-1.507,7.752l5.555,7.013L869.514,140.337zM622.395,166.284l-2.867,1.958l0.41,4.832l5.075,2.348l0.744,3.818l9.161,1.102l1.656,-0.743l-5.363,-7.106l-0.57,-7.516l4.395,-9.143l4.179,-9.819l8.71,-10.168l8.563,-5.338l9.935,-5.74l1.884,-3.706l-1.949,-4.827l-5.457,1.604l-4.802,4.492l-9.332,2.222l-9.257,7.409l-6.271,5.849l0.759,4.87l-6.713,9.029l2.578,1.22l-5.562,8.271L622.395,166.284zM769.869,98.338l0.833,-5.72l-7.107,-8.343l-2.106,-0.985l-2.304,1.696l-5.122,18.604L769.869,98.338zM605.64,69.025l3.037,3.876l3.277,-2.693l0.391,-2.719l2.521,-1.272l3.764,-2.235l1.085,-2.624l-4.159,-3.847l-2.643,2.903l-1.61,4.125l-0.573,-4.649l-4.26,0.211l-5.474,3.152l6.24,0.521L605.64,69.025zM736.889,82.071l4.653,5.73l7.81,4.202l6.118,-1.803l0.691,-13.623l-6.456,-16.04l-5.448,-9.023l-6.065,4.109l-7.28,11.834l3.825,3.27L736.889,82.071z"
				},
				{
					"id":"RW",
					"title":"Rwanda",
					"d":"M560.543,466.545L561.657,468.118L561.495,469.757L560.686,470.11L559.196,469.928L558.337,471.515L556.635,471.296L556.894,469.771L557.279,469.556L557.383,467.898L558.189,467.121L558.868,467.405z"
				},
				{
					"id":"SA",
					"title":"Saudi Arabia",
					"d":"M595.2,417.216L594.836,415.976L593.99,415.098L593.774,413.934L592.326,412.886L590.832,410.425L590.041,408.022L588.102,405.983L586.851,405.495L584.994,402.653L584.67,400.569L584.789,398.783L583.181,395.421L581.866,394.231L580.352,393.599L579.43,391.842L579.583,391.147L578.804,389.547L577.985,388.856L576.89,386.544L575.183,384.021L573.753,381.857L572.357,381.872L572.793,380.133L572.917,379.019L573.265,377.744L576.385,378.252L577.597,377.268L578.268,376.111L580.407,375.666L580.869,374.585L581.796,374.036L579.001,370.78L584.617,369.134L585.151,368.637L588.528,369.529L592.706,371.821L600.612,378.312L605.825,378.567L608.323,378.875L609.021,380.391L611.004,380.309L612.102,383.036L613.481,383.755L613.962,384.857L615.873,386.171L616.043,387.457L615.764,388.491L616.118,389.532L616.924,390.397L617.298,391.408L617.717,392.161L618.564,392.77L619.342,392.552L619.874,393.722L619.981,394.428L621.056,397.508L629.484,399.032L630.049,398.394L631.334,400.529L629.465,406.501L621.054,409.458L612.969,410.587L610.352,411.908L608.343,414.979L607.034,415.465L606.333,414.493L605.258,414.639L602.548,414.347L602.034,414.055L598.798,414.122L598.038,414.386L596.886,413.626L596.144,415.061L596.431,416.289z"
				},
				{
					"id":"SB",
					"title":"Solomon Islands",
					"d":"M929.811,492.747l0.784,0.974l-1.959,-0.018l-1.065,-1.743l1.675,0.685L929.811,492.747zM926.259,491.021l-1.093,0.063l-1.719,-0.286l-0.587,-0.436l0.176,-1.121l1.851,0.444l0.913,0.593L926.259,491.021zM928.58,490.25l-0.423,0.521l-2.078,-2.447l-0.583,-1.683h0.953l1.009,2.254L928.58,490.25zM923.519,486.689l0.119,0.566l-2.197,-1.194l-1.535,-1.01l-1.052,-0.936l0.418,-0.286l1.289,0.674l2.3,1.293L923.519,486.689zM916.968,483.907l-0.559,0.16l-1.226,-0.64l-1.152,-1.153l0.145,-0.467l1.675,1.185L916.968,483.907z"
				},
				{
					"id":"SD",
					"title":"Sudan",
					"d":"M570.481,436.904L570.093,436.848L570.141,435.441L569.804,434.469L568.36,433.351L568.023,431.304L568.36,429.203L567.061,429.007L566.868,429.643L565.184,429.79L565.857,430.621L566.098,432.328L564.558,433.886L563.162,435.927L561.718,436.218L559.359,434.566L558.3,435.15L558.011,435.975L556.567,436.509L556.471,437.091L553.679,437.091L553.294,436.509L551.272,436.412L550.262,436.896L549.491,436.654L548.047,435.004L547.566,434.227L545.544,434.615L544.774,435.927L544.052,438.447L543.089,438.979L542.229,439.286L542.001,439.155L541.028,438.343L540.849,437.466L541.304,436.291L541.296,435.138L539.679,433.367L539.361,432.152L539.395,431.464L538.364,430.626L538.333,428.972L537.745,427.872L536.761,428.037L537.043,426.987L537.77,425.795L537.452,424.608L538.374,423.728L537.789,423.056L538.53,421.277L539.811,419.15L542.229,419.353L542.09,407.744L542.125,406.501L545.349,406.492L545.349,400.529L556.621,400.529L567.5,400.529L578.621,400.529L579.524,403.469L578.91,404.011L579.317,407.07L580.346,410.594L581.415,411.318L582.949,412.402L581.53,414.072L579.465,414.552L578.582,415.446L578.306,417.379L577.098,421.629L577.396,422.782L576.949,425.248L575.809,428.065L574.118,429.478L572.916,431.651L572.634,432.812L571.306,433.606L570.477,436.567z"
				},
				{
					"id":"SE",
					"title":"Sweden",
					"d":"M537.451,217.489L534.732,222.179L535.17,226.195L530.71,231.334L525.295,236.672L523.254,245.084L525.25,249.151L527.931,252.291L525.355,258.517L522.439,259.782L521.37,268.62L519.777,273.378L516.376,272.893L514.789,276.842L511.543,277.068L510.652,272.358L508.305,266.547L506.172,259.046L507.408,255.901L509.741,252.089L510.669,245.362L508.877,242.384L508.705,234.34L510.525,228.434L513.307,228.543L514.282,225.989L513.261,223.757L517.615,214.257L520.419,206.39L522.271,201.147L524.963,201.172L525.705,196.955L530.989,198.179L531.401,193.097L533.14,192.774L536.877,196.576L541.254,201.729L541.328,212.849L542.274,215.549z"
				},
				{
					"id":"SI",
					"title":"Slovenia",
					"d":"M513.964,316.509L516.28,316.823L517.695,315.901L520.147,315.8L520.682,315.111L521.153,315.156L521.698,316.531L519.466,317.607L519.193,319.234L518.219,319.644L518.229,320.76L517.129,320.683L516.175,320.031L515.662,320.705L513.708,320.569L514.332,320.207L513.661,318.5z"
				},
				{
					"id":"SJ",
					"title":"Svalbard and Jan Mayen",
					"d":"M544.576,104.488l-6.263,5.359l-4.947,-3.021l1.935,-3.424l-1.694,-4.343l5.811,-2.782l1.113,5.175L544.576,104.488zM526.428,77.812l9.23,11.292l-7.056,5.66l-1.558,10.086l-2.46,2.49l-1.335,10.505l-3.379,0.478l-6.03,-7.644l2.543,-4.623l-4.203,-3.862l-5.463,-11.823l-2.181,-11.786l7.644,-5.686l1.536,5.561l3.993,-0.217l1.065,-5.435l4.117,-0.563L526.428,77.812zM546.604,66.354l5.495,5.799l-4.158,8.517l-8.132,1.806l-8.269,-2.562l-0.499,-4.322l-4.023,-0.279l-3.068,-7.478l8.658,-4.723l4.071,4.075l2.835,-5.091L546.604,66.354z"
				},
				{
					"id":"SK",
					"title":"Slovakia",
					"d":"M528.114,304.025L528.272,304.285L529.425,303.7L530.839,305.223L532.496,304.304L533.82,304.745L535.838,304.137L538.502,305.785L537.725,306.893L537.178,308.598L536.58,309.028L533.577,307.747L532.658,308.005L532,308.997L530.684,309.521L530.38,309.252L529.015,309.903L527.901,310.027L527.675,310.866L525.322,311.376L524.288,310.922L522.861,309.853L522.582,308.396L522.807,307.861L523.205,306.929L524.447,307L525.404,306.561L525.48,306.165L526.017,305.963L526.2,304.99L526.844,304.804L527.278,304.03z"
				},
				{
					"id":"SL",
					"title":"Sierra Leone",
					"d":"M443.18,444.441L442.425,444.233L440.406,443.102L438.946,441.597L438.455,440.569L438.112,438.488L439.61,437.247L439.934,436.464L440.413,435.854L441.185,435.79L441.839,435.257L444.081,435.26L444.861,436.271L445.469,437.458L445.378,438.279L445.829,439.016L445.797,440.049L446.569,439.888L445.264,441.201L443.999,442.727L443.851,443.543z"
				},
				{
					"id":"SN",
					"title":"Senegal",
					"d":"M428.39,425.157L427.234,422.921L425.835,421.896L427.068,421.349L428.427,419.321L429.093,417.834L430.053,416.903L431.446,417.154L432.814,416.521L434.38,416.488L435.72,417.343L437.581,418.111L439.278,420.24L441.128,422.221L441.256,424.01L441.81,425.652L442.859,426.456L443.099,427.562L442.97,428.451L442.565,428.612L441.036,428.386L440.826,428.704L440.208,428.768L438.192,428.072L436.839,428.042L431.657,427.923L430.906,428.244L429.977,428.152L428.492,428.617L428.032,426.427L430.584,426.488L431.258,426.087L431.76,426.063L432.799,425.402L434.002,426.007L435.22,426.058L436.434,425.415L435.867,424.586L434.943,425.069L434.073,425.056L432.966,424.35L432.077,424.396L431.444,425.075z"
				},
				{
					"id":"SO",
					"title":"Somalia",
					"d":"M618.625,430.431L618.562,429.644L617.498,429.651L616.171,430.626L614.685,430.912L613.393,431.334L612.497,431.391L610.9,431.49L609.898,432.009L608.508,432.196L606.04,433.077L602.988,433.413L600.345,434.138L598.953,434.129L597.688,432.942L597.138,431.769L596.226,431.245L595.193,432.764L594.582,433.769L595.617,435.328L596.651,436.689L597.722,437.696L606.889,441.04L609.248,441.022L601.324,449.438L597.672,449.561L595.173,451.53L593.375,451.582L592.608,452.462L590.158,455.627L590.191,465.775L591.852,468.074L592.485,467.414L593.131,465.945L596.2,462.571L598.813,460.453L603.008,457.687L605.813,455.43L609.111,451.623L611.505,448.494L613.911,444.388L615.645,440.801L616.994,437.654L617.784,434.599L618.377,433.575L618.366,432.084z"
				},
				{
					"id":"SR",
					"title":"Suriname",
					"d":"M315.02,446.719L318.379,447.28L318.681,446.775L320.948,446.573L323.962,447.325L322.503,449.73L322.725,451.642L323.826,453.296L323.335,454.497L323.089,455.772L322.374,456.945L320.768,456.354L319.443,456.639L318.312,456.391L318.032,457.198L318.502,457.752L318.25,458.322L316.725,458.094L315.013,455.67L314.645,454.096L313.747,454.093L312.504,452.066L313.021,450.625L312.87,449.966L314.572,449.236z"
				},
				{
					"id":"SS",
					"title":"South Sudan",
					"d":"M570.481,436.904L570.514,439.104L570.095,439.964L568.606,440.033L567.651,441.635L569.374,441.837L570.794,443.206L571.286,444.328L572.566,444.979L574.224,448.026L572.323,449.869L570.598,451.538L568.874,452.822L566.901,452.815L564.644,453.469L562.861,452.845L561.707,453.605L559.238,451.75L558.572,450.558L557.011,451.148L555.714,450.965L554.964,451.434L553.705,451.095L552.006,448.788L551.555,447.901L549.459,446.793L548.751,445.112L547.583,443.898L545.697,442.436L545.671,441.522L544.136,440.386L542.229,439.286L543.089,438.979L544.052,438.447L544.774,435.927L545.544,434.615L547.566,434.227L548.047,435.004L549.491,436.654L550.262,436.896L551.272,436.412L553.294,436.509L553.679,437.091L556.471,437.091L556.567,436.509L558.011,435.975L558.3,435.15L559.359,434.566L561.718,436.218L563.162,435.927L564.558,433.886L566.098,432.328L565.857,430.621L565.184,429.79L566.868,429.643L567.061,429.007L568.36,429.203L568.023,431.304L568.36,433.351L569.804,434.469L570.141,435.441L570.093,436.848z"
				},
				{
					"id":"SV",
					"title":"El Salvador",
					"d":"M229.094,425.76L228.783,426.434L227.159,426.391L226.149,426.117L224.99,425.548L223.432,425.37L222.638,424.754L222.725,424.334L223.686,423.609L224.212,423.292L224.063,422.953L224.719,422.776L225.546,423.018L226.15,423.591L226.997,424.052L227.101,424.438L228.331,424.097L228.908,424.301L229.289,424.612z"
				},
				{
					"id":"SY",
					"title":"Syria",
					"d":"M584.021,364.596L578.53,368.136L575.406,366.825L575.353,366.802L575.733,366.297L575.69,364.934L576.378,363.101L577.907,361.832L577.448,360.505L576.187,360.332L575.925,357.724L576.611,356.312L577.362,355.556L578.113,354.799L578.265,352.86L579.183,353.538L582.27,352.568L583.762,353.225L586.068,353.214L589.295,351.904L590.806,351.963L593.995,351.418L592.558,353.598L591.023,354.455L591.288,356.976L590.228,361.097z"
				},
				{
					"id":"SZ",
					"title":"Swaziland",
					"d":"M565.177,540.737L564.606,542.126L562.965,542.465L561.292,540.768L561.266,539.69L562.031,538.523L562.296,537.621L563.106,537.4L564.521,537.967L564.937,539.359z"
				},
				{
					"id":"TD",
					"title":"Chad",
					"d":"M515.897,427.262L516.177,425.915L514.379,425.849L514.386,424.004L513.218,422.94L514.429,419.14L518.005,416.404L518.153,412.608L519.233,406.628L519.843,405.35L518.677,404.33L518.631,403.381L517.583,402.604L516.894,397.927L519.725,396.269L530.907,402.045L542.09,407.744L542.229,419.353L539.811,419.15L538.53,421.277L537.789,423.056L538.374,423.728L537.452,424.608L537.77,425.795L537.043,426.987L536.761,428.037L537.745,427.872L538.333,428.972L538.364,430.626L539.395,431.464L539.361,432.152L537.586,432.637L536.163,433.785L534.136,436.871L531.498,438.179L528.79,438.003L527.999,438.263L528.277,439.255L526.814,440.239L525.624,441.337L522.094,442.413L521.394,441.776L520.929,441.722L520.413,442.444L518.094,442.656L518.534,441.895L517.649,439.955L517.255,438.789L516.034,438.311L514.378,436.664L514.988,435.33L516.266,435.614L517.057,435.412L518.623,435.44L517.097,432.865L517.199,430.979L517.012,429.09z"
				},
				{
					"id":"TF",
					"title":"French Southern and Antarctic Lands",
					"d":"M668.536,619.028L670.345,620.364L672.994,620.897L673.093,621.71L672.308,623.668L668.004,623.949L667.934,621.656L668.348,619.896z"
				},
				{
					"id":"TG",
					"title":"Togo",
					"d":"M480.483,446.246L478.226,446.843L477.6,445.859L476.852,444.081L476.629,442.684L477.25,440.151L476.546,439.124L476.279,436.902L476.284,434.849L475.113,433.388L475.32,432.504L477.775,432.564L477.418,434.057L478.275,434.893L479.249,435.884L479.355,437.27L479.92,437.852L479.792,444.312z"
				},
				{
					"id":"TH",
					"title":"Thailand",
					"d":"M762.886,429.182L760.369,427.873L757.971,427.926L758.382,425.679L755.912,425.696L755.69,428.839L754.177,432.993L753.266,435.495L753.458,437.539L755.284,437.628L756.422,440.2L756.926,442.634L758.49,444.242L760.189,444.568L761.642,446.023L760.726,447.173L758.874,447.508L758.654,446.07L756.366,444.842L755.879,445.342L754.771,444.266L754.291,442.876L752.802,441.29L751.443,439.955L750.982,441.608L750.451,440.046L750.757,438.288L751.583,435.58L752.941,432.669L754.481,430.019L753.385,427.418L753.429,426.09L753.108,424.49L751.238,422.206L750.569,420.76L751.537,420.227L752.563,417.709L751.415,415.792L749.636,413.662L748.28,411.09L749.464,410.556L750.742,407.366L752.722,407.233L754.357,405.947L755.964,405.26L757.177,406.177L757.338,407.957L759.232,408.093L758.543,411.197L758.609,413.823L761.564,412.077L762.404,412.594L764.046,412.509L764.611,411.489L766.731,411.69L768.864,414.068L769.039,416.943L771.309,419.47L771.184,421.913L770.271,423.21L767.643,422.797L764.018,423.347L762.222,425.732z"
				},
				{
					"id":"TJ",
					"title":"Tajikistan",
					"d":"M674.366,340.624L673.34,341.75L670.288,341.14L670.022,343.236L673.063,342.955L676.526,344.129L681.828,343.582L682.539,346.905L683.46,346.546L685.163,347.358L685.065,348.739L685.486,350.751L682.594,350.745L680.663,350.486L678.916,352.057L677.672,352.404L676.694,353.137L675.585,351.994L675.846,349.038L674.998,348.869L675.303,347.785L673.785,346.975L672.578,348.213L672.281,349.641L671.85,350.159L670.174,350.085L669.27,351.694L668.324,351.017L666.295,352.143L665.438,351.716L667.014,348.147L666.408,345.489L664.351,344.632L665.078,343.041L667.419,343.211L668.751,341.202L669.643,338.849L673.392,337.991L672.808,339.7L673.209,340.719z"
				},
				{
					"id":"TL",
					"title":"Timor-Leste",
					"d":"M825.646,488.254L825.977,487.589L828.39,486.956L830.346,486.86L831.223,486.509L832.284,486.857L831.253,487.621L828.33,488.855L825.982,489.666L825.931,488.81z"
				},
				{
					"id":"TM",
					"title":"Turkmenistan",
					"d":"M646.879,356.901L646.633,353.995L644.543,353.87L641.339,350.775L639.1,350.391L635.999,348.6L634.005,348.273L632.774,348.934L630.899,348.831L628.905,350.848L626.441,351.527L625.92,349.036L626.327,345.308L624.141,344.089L624.86,341.606L622.999,341.394L623.619,338.3L626.264,339.205L628.727,338.024L626.685,335.795L625.881,333.65L623.624,334.609L623.338,337.342L622.462,334.927L623.701,333.677L626.884,332.892L628.779,333.948L630.741,336.88L632.18,336.698L635.343,336.647L634.883,334.767L637.278,333.472L639.64,331.271L643.418,333.273L643.718,336.265L644.791,337.026L647.822,336.855L648.763,337.529L650.142,341.32L653.348,343.827L655.177,345.522L658.109,347.273L661.839,348.793L661.762,350.952L660.917,350.843L659.594,349.902L659.154,351.154L656.791,351.832L656.231,354.617L654.651,355.669L652.438,356.188L651.853,357.745L649.738,358.201z"
				},
				{
					"id":"TN",
					"title":"Tunisia",
					"d":"M501.839,374.686L500.644,368.829L498.915,367.497L498.891,366.695L496.598,364.711L496.351,362.184L498.079,360.297L498.739,357.485L498.294,354.197L498.864,352.41L501.917,350.997L503.88,351.418L503.798,353.186L506.176,351.901L506.376,352.573L504.974,354.278L504.955,355.877L505.926,356.733L505.557,359.692L503.711,361.396L504.244,363.232L505.694,363.289L506.399,364.881L507.466,365.402L507.307,367.951L505.94,368.898L505.077,369.951L503.152,371.213L503.45,372.564L503.208,373.936z"
				},
				{
					"id":"TR",
					"title":"Turkey",
					"d":"M578.752,336.599l4.022,1.435l3.266,-0.571l2.414,0.33l3.311,-1.94l2.987,-0.177l2.701,1.827l0.476,1.301l-0.27,1.788l2.085,0.908l1.104,1.063l-1.92,1.032l0.875,4.112l-0.549,1.1l1.534,2.822l-1.344,0.591l-0.985,-0.892l-3.261,-0.453l-1.204,0.545l-3.189,0.544l-1.511,-0.059l-3.227,1.31l-2.307,0.011l-1.492,-0.656l-3.087,0.969l-0.917,-0.677l-0.152,1.938l-0.751,0.757l-0.751,0.755l-1.031,-1.566l1.062,-1.304l-1.71,0.296l-2.345,-0.801l-1.928,1.999l-4.255,0.389l-2.27,-1.861l-3.022,-0.117l-0.646,1.44l-1.938,0.411l-2.711,-1.847l-3.061,0.063l-1.661,-3.484l-2.048,-1.964l1.364,-2.778l-1.777,-1.723l3.11,-3.484l4.318,-0.147l1.178,-2.806l5.344,0.491l3.371,-2.416l3.267,-1.061l4.639,-0.08L578.752,336.599zM551.497,338.986l-2.34,1.976l-0.882,-1.708l0.039,-0.761l0.666,-0.414l0.868,-2.325l-1.366,-0.99l2.856,-1.183l2.414,0.505l0.333,1.441l2.447,1.204l-0.51,0.909l-3.33,0.204L551.497,338.986z"
				},
				{
					"id":"TT",
					"title":"Trinidad and Tobago",
					"d":"M302.312,433.238L303.923,432.869L304.512,432.968L304.4,435.079L302.059,435.39L301.554,435.135L302.367,434.357z"
				},
				{
					"id":"TW",
					"title":"Taiwan",
					"d":"M816.7,393.266L815.012,398.145L813.81,400.618L812.332,398.072L812.013,395.823L813.663,392.825L815.907,390.497L817.187,391.415z"
				},
				{
					"id":"TZ",
					"title":"Tanzania",
					"d":"M570.314,466.031L570.788,466.337L580.955,472.015L581.146,473.633L585.17,476.425L583.876,479.872L584.042,481.459L585.837,482.481L585.921,483.211L585.149,484.907L585.31,485.762L585.126,487.106L586.105,488.873L587.266,491.659L588.295,492.278L586.064,493.921L582.998,495.023L581.316,494.977L580.317,495.829L578.365,495.902L577.633,496.262L574.264,495.461L572.154,495.69L571.369,491.833L570.418,490.514L569.854,489.733L567.105,489.207L565.514,488.359L563.732,487.885L562.615,487.413L561.443,486.696L559.929,483.155L558.303,481.584L557.742,479.958L558.022,478.503L557.518,475.931L558.677,475.798L559.695,474.786L560.786,473.331L561.478,472.747L561.452,471.84L560.848,471.208L560.686,470.11L561.495,469.757L561.657,468.118L560.543,466.545L561.527,466.211L564.601,466.247z"
				},
				{
					"id":"UA",
					"title":"Ukraine",
					"d":"M564.376,292.494L565.423,292.678L566.132,291.641L566.983,291.87L569.891,291.428L571.682,294.003L570.982,294.916L571.214,296.308L573.45,296.524L574.447,298.451L574.386,299.319L577.947,300.861L580.099,300.168L581.829,302.211L583.468,302.165L587.601,303.573L587.634,304.836L586.495,307.069L587.114,309.396L586.673,310.791L583.96,311.097L582.515,312.256L582.426,314.088L580.188,314.416L578.322,315.738L575.697,315.953L573.282,317.466L571.958,318.496L573.446,319.966L574.818,320.929L577.678,320.689L577.13,322.107L574.061,322.792L570.254,325.064L568.695,324.268L569.313,322.417L566.25,321.257L566.745,320.494L569.908,318.858L569.515,318.042L569.063,318.453L568.617,318.243L564.259,317.222L564.066,315.708L561.468,316.209L560.427,318.437L558.256,321.393L556.984,320.71L555.667,321.35L554.416,320.617L555.122,320.184L555.611,318.809L556.379,317.523L556.181,316.799L556.767,316.475L557.043,317.036L558.695,317.155L559.438,316.855L558.915,316.444L559.113,315.837L558.134,314.799L557.729,313.082L556.708,312.406L556.909,310.999L555.642,309.875L554.489,309.718L552.422,308.409L550.559,308.826L549.89,309.445L548.707,309.444L548.001,310.423L545.932,310.824L544.975,311.463L543.673,310.445L541.875,310.43L540.141,309.966L538.93,310.861L538.734,309.741L537.178,308.598L537.725,306.893L538.502,305.785L539.115,306.033L538.392,304.108L540.938,300.499L542.329,299.988L542.629,298.753L541.219,294.862L542.56,294.687L544.096,293.462L546.269,293.361L549.101,293.716L552.23,294.8L554.438,294.89L555.493,295.539L556.544,294.756L557.279,295.806L559.81,295.591L560.925,296.024L561.105,293.759L561.969,292.764z"
				},
				{
					"id":"UG",
					"title":"Uganda",
					"d":"M564.601,466.247L561.527,466.211L560.543,466.545L558.868,467.405L558.189,467.121L558.213,465.021L558.862,463.957L559.021,461.721L559.61,460.426L560.682,458.974L561.759,458.233L562.661,457.244L561.537,456.867L561.707,453.605L562.861,452.845L564.644,453.469L566.901,452.815L568.874,452.822L570.598,451.538L571.927,453.476L572.255,454.876L573.489,458.076L572.468,460.107L571.089,461.951L570.286,463.079L570.314,466.031z"
				},
				{
					"id":"US",
					"title":"United States",
					"d":"M109.249,279.8L109.249,279.8l-1.542,-1.834l-2.471,-1.569l-0.793,-4.356l-3.615,-4.131l-1.511,-4.938l-2.692,-0.343l-4.458,-0.13l-3.286,-1.535l-5.797,-5.643l-2.685,-1.05l-4.905,-1.993l-3.882,0.478l-5.514,-2.59l-3.333,-2.435l-3.112,1.213l0.578,3.928l-1.55,0.358l-3.244,1.161l-2.468,1.863l-3.107,1.163l-0.401,-3.245l1.261,-5.531l2.979,-1.771l-0.769,-1.456l-3.574,3.218l-1.914,3.771l-4.04,3.947l2.052,2.647l-2.65,3.849l-3.014,2.207l-2.806,1.592l-0.694,2.287l-4.377,2.634l-0.886,2.363l-3.281,2.127l-1.924,-0.381l-2.617,1.377l-2.845,1.669l-2.332,1.626l-4.812,1.377l-0.439,-0.809l3.067,-2.268l2.743,-1.513l2.989,-2.71l3.478,-0.565l1.383,-2.063l3.886,-3.053l0.626,-1.032l2.07,-1.833l0.484,-4l1.426,-3.174l-3.233,1.636l-0.904,-0.927l-1.518,1.954l-1.831,-2.73l-0.756,1.936l-1.048,-2.695l-2.803,2.167l-1.721,-0.004l-0.242,-3.232l0.507,-2.02l-1.806,-1.982l-3.646,1.07l-2.366,-2.631l-1.918,-1.359l-0.012,-3.25l-2.161,-2.483l1.085,-3.405l2.286,-3.368l1,-3.154l2.269,-0.454l1.924,0.992l2.262,-3.007l2.036,0.541l2.137,-1.955l-0.521,-2.917l-1.57,-1.163l2.076,-2.519l-1.722,0.075l-2.975,1.426l-0.854,1.434l-2.211,-1.432l-3.966,0.729l-4.106,-1.563l-1.177,-2.654l-3.548,-3.906l3.94,-2.867l6.254,-3.407h2.305l-0.382,3.484l5.918,-0.269l-2.276,-4.339l-3.449,-2.722l-1.994,-3.639l-2.69,-3.166l-3.853,-2.385l1.569,-4.028l4.974,-0.253l3.539,-3.585l0.667,-3.917l2.864,-3.911l2.731,-0.955l5.315,-3.758l2.578,0.572l4.315,-4.609l4.242,1.831l2.029,3.869l1.246,-1.648l4.738,0.513l-0.168,1.951l4.29,1.428l2.86,-0.838l5.907,2.635l5.393,0.776l2.159,1.068l3.731,-1.335l4.253,2.462l3.046,1.135l-0.019,27.648l-0.015,35.43l2.761,0.167l2.731,1.556l1.958,2.436l2.491,3.596l2.728,-3.054l2.815,-1.793l1.488,2.855l1.889,2.229l2.567,2.424l1.753,3.794l2.867,5.881l4.767,3.204l0.078,3.124L109.249,279.8zM285.179,314.235l-1.245,-1.187l-1.88,0.7l-0.932,-1.083l-2.139,3.097l-0.855,3.148l-0.995,1.82l-1.191,0.616l-0.897,0.2l-0.281,0.978l-5.167,0.003l-4.26,0.027l-1.265,0.726l-2.87,2.73l0.287,0.544l0.166,1.506l-2.103,1.27l-2.297,-0.318l-2.204,-0.143l-1.328,0.439l0.249,1.15l0,0.002l0.055,0.373l-2.416,2.265l-2.115,1.089l-1.443,0.506l-1.661,1.035l-2.03,0.496l-1.398,-0.191l-1.729,-0.772l0.961,-1.449l0.617,-1.321l1.318,-2.091l-0.14,-1.571l-0.505,-2.241l-1.037,-0.388l-1.738,1.705l-0.557,-0.032l-0.144,-0.974l1.542,-1.556l0.256,-1.786l-0.228,-1.794l-2.075,-1.552l-2.383,-0.8l-0.392,1.518l-0.618,0.405l-0.496,1.953l-0.26,-1.325l-1.121,0.947l-0.7,1.321l-0.731,1.916l-0.14,1.645l0.93,2.376l-0.077,2.508l-1.138,1.836l-0.568,0.518l-0.757,0.412l-0.953,0.021l-0.258,-0.253l-0.755,-1.975l-0.022,-0.982l0.075,-0.937l-0.352,-1.87l0.533,-2.181l0.633,-2.713l1.455,-3.035l-0.422,0.014l-2.06,2.543l-0.38,-0.464l1.099,-1.422l1.672,-2.573l1.907,-0.361l2.187,-0.804l2.205,0.424l0.094,0.018l2.47,-0.363l-1.395,-1.609l-0.752,-0.125l-0.855,-0.164l-0.589,-1.14l-2.755,0.356l-2.488,0.905l-1.975,-1.551l-1.589,-0.521l0.901,-2.17l-2.475,1.365l-2.25,1.328l-2.165,1.037l-1.719,-1.401l-2.809,0.851l0.009,-0.599l1.903,-1.73l1.991,-1.654l2.86,-1.375l-3.449,-1.089l-2.271,0.545l-2.72,-1.303l-2.863,-0.672l-1.958,-0.26l-0.872,-0.718l-0.498,-2.345l-0.949,0.021l-0.008,1.644l-5.803,-0.003l-9.593,0.003l-9.528,0l-8.417,0h-8.412h-8.271h-8.546h-2.756h-8.324h-7.963l0.954,3.466l0.448,3.41l-0.693,1.087l-1.494,-3.911l-4.055,-1.425l-0.339,0.82l0.817,1.938l0.886,3.525l0.506,5.416l-0.341,3.591l-0.341,3.535l-1.096,3.614l0.895,2.898l0.098,3.202l-0.615,3.055l1.494,1.992l0.387,2.945l2.17,2.991l1.237,1.169l-0.1,0.817l2.335,4.851l2.72,3.452l0.341,1.866l0.715,0.547l2.605,0.333l1.003,0.913l1.573,0.169l0.307,0.965l1.308,0.401l1.817,1.92l0.472,1.696l3.186,-0.255l3.561,-0.359l-0.263,0.648l4.234,1.604l6.396,2.31l5.576,-0.023l2.223,-0.001l0.006,-1.351l4.857,0.001l1.022,1.162l1.434,1.032l1.666,1.429l0.93,1.689l0.698,1.769l1.449,0.967l2.328,0.958l1.766,-2.528l2.292,-0.063l1.976,1.279l1.407,2.184l0.969,1.859l1.654,1.797l0.617,2.195l0.785,1.466l2.187,0.963l1.991,0.682l1.093,-0.093l-0.533,-1.055l-0.14,-1.495l0.028,-2.161l0.645,-1.416l1.531,-1.509l2.787,-1.369l2.552,-2.367l2.359,-0.75l1.744,-0.225l2.04,0.743l2.445,-0.4l2.093,1.692l2.035,0.1l1.052,-0.606l1.041,0.472l0.534,-0.42l-0.595,-0.632l0.045,-1.302l-0.505,-0.856l1.159,-0.504l2.138,-0.223l2.488,0.357l3.169,-0.406l1.758,0.799l1.361,1.502l0.502,0.16l2.829,-1.46l1.094,0.494l2.186,2.682l0.785,1.751l-0.576,2.101l0.421,1.232l1.304,2.397l1.486,2.675l1.065,0.712l0.442,1.354l1.38,0.374l0.838,-0.389l0.699,-1.887l0.122,-1.207l0.088,-2.102l-1.328,-3.646l-0.016,-1.369l-1.246,-2.253l-0.936,-2.745l-0.496,-2.246l0.433,-2.315l1.321,-1.945l1.581,-1.571l3.078,-2.156l0.401,-1.121l1.419,-1.232l1.4,-0.215l1.843,-1.98l2.901,-1.006l1.782,-2.534l-0.394,-3.455l-0.291,-1.205l-0.805,-0.241l-0.12,-3.346l-1.93,-1.143l1.853,0.557l-0.598,-2.26l0.54,-1.552l0.329,2.974l1.432,1.356l-0.867,2.398l0.255,0.139l1.578,-2.815l0.899,-1.381l-0.042,-1.35l-0.696,-0.639l-0.583,-1.941l0.92,0.903l0.616,0.188l0.208,0.924l2.04,-2.779l0.605,-2.622l-0.825,-0.168l0.854,-1.02l-0.083,0.452l1.786,-0.007l3.925,-1.106l-0.831,-0.702l-4.118,0.697l2.337,-1.073l1.63,-0.184l1.22,-0.186l2.074,-0.65l1.347,0.073l1.893,-0.605l0.224,-1.07l-0.841,-0.835l0.294,1.372l-1.164,-0.094l-0.925,-1.995l0.028,-2.013l0.475,-0.859l1.484,-2.283l2.961,-1.146l2.881,-1.344l2.994,-1.9l-0.484,-1.295l-1.833,-2.251L285.179,314.235zM45.622,263.786l-1.497,0.802l-2.547,1.858l0.434,2.421l1.434,1.321l2.8,-1.955l2.426,-2.465l-1.188,-1.627L45.622,263.786zM0,235.225l2.042,-1.258l0.231,-0.677L0,232.608V235.225zM8.502,250.587l-2.769,0.967l1.702,1.524l1.838,1.042l1.721,-0.867l-0.268,-2.154L8.502,250.587zM105.845,283.087l-2.691,0.381l-1.318,-0.62l-0.167,1.518l0.519,2.074l1.415,1.456l1.036,2.133l1.689,2.097l1.118,0.009l-2.44,-3.702L105.845,283.087zM37.131,403.772l-0.997,-0.284l-0.274,0.256l0.025,0.186l0.322,0.243l0.483,0.627l0.94,-0.213l0.234,-0.357L37.131,403.772zM34.136,403.233l1.502,0.087l0.087,-0.323l-1.38,-0.128L34.136,403.233zM40.026,406.522l-0.498,-0.257l-1.074,-0.501l-0.213,-0.055l-0.163,0.277l0.193,0.583l-0.487,0.483l-0.14,0.33l0.464,1.077l-0.08,0.825l0.696,0.422l0.41,-0.493l0.897,-0.461l1.096,-0.631l0.067,-0.164l-0.714,-1.037L40.026,406.522zM32.174,401.379l-0.75,0.414l0.109,0.12l0.356,0.679l0.976,0.105l0.201,0.039l0.152,-0.173l-0.81,-0.99L32.174,401.379zM27.769,399.818l-0.428,0.295l-0.145,0.219l0.944,0.548l0.333,-0.297l-0.058,-0.701L27.769,399.818z"
				},
				{
					"id":"UY",
					"title":"Uruguay",
					"d":"M313.681,551.79L315.5,551.446L318.313,553.95L319.354,553.855L322.24,555.944L324.439,557.759L326.061,560.007L324.825,561.585L325.601,563.48L324.388,565.598L321.221,567.484L319.151,566.804L317.634,567.168L315.042,565.711L313.14,565.82L311.432,563.954L311.649,561.789L312.258,561.047L312.23,557.75L312.98,554.384z"
				},
				{
					"id":"UZ",
					"title":"Uzbekistan",
					"d":"M661.762,350.952L661.839,348.793L658.109,347.273L655.177,345.522L653.348,343.827L650.142,341.32L648.763,337.529L647.822,336.855L644.791,337.026L643.718,336.265L643.418,333.273L639.64,331.271L637.278,333.472L634.883,334.767L635.343,336.647L632.18,336.698L632.069,322.571L639.287,320.224L639.811,320.57L644.157,323.407L646.451,324.891L649.129,328.389L652.417,327.828L657.226,327.526L660.582,330.333L660.373,334.134L661.739,334.16L662.31,337.219L665.875,337.339L666.644,339.09L667.688,339.066L668.915,336.417L672.613,333.808L674.221,333.111L675.054,333.482L672.7,335.911L674.77,337.312L676.767,336.385L680.09,338.339L676.499,340.984L674.366,340.624L673.209,340.719L672.808,339.7L673.392,337.991L669.643,338.849L668.751,341.202L667.419,343.211L665.078,343.041L664.351,344.632L666.408,345.489L667.014,348.147L665.438,351.716L663.323,350.975z"
				},
				{
					"id":"VE",
					"title":"Venezuela",
					"d":"M275.25,430.351L275.17,431.023L273.524,431.354L274.438,432.644L274.404,434.126L273.167,435.77L274.229,438.011L275.438,437.827L276.067,435.786L275.198,434.79L275.056,432.645L278.548,431.49L278.159,430.15L279.143,429.251L280.149,431.251L282.115,431.297L283.937,432.881L284.047,433.82L286.564,433.845L289.56,433.553L291.166,434.822L293.31,435.171L294.883,434.287L294.915,433.574L298.388,433.403L301.748,433.363L299.367,434.2L300.325,435.537L302.567,435.749L304.693,437.138L305.14,439.397L306.601,439.334L307.7,439.998L305.478,441.65L305.233,442.675L306.193,443.717L305.497,444.243L303.771,444.693L303.827,445.987L303.067,446.758L304.965,448.882L305.336,449.671L304.311,450.737L301.175,451.783L299.158,452.216L298.349,452.876L296.12,452.178L294.044,451.821L293.518,452.078L294.773,452.802L294.66,454.672L295.049,456.429L297.425,456.668L297.576,457.254L295.573,458.047L295.248,459.227L294.093,459.684L292.008,460.334L291.465,461.187L289.285,461.367L287.742,459.894L286.887,457.115L286.141,456.141L285.124,455.526L286.545,454.138L286.448,453.513L285.651,452.684L285.087,450.828L285.307,448.823L285.933,447.884L286.438,446.376L285.446,445.895L283.848,446.214L281.828,446.064L280.695,446.364L278.722,443.951L277.093,443.594L273.487,443.864L272.819,442.885L272.129,442.65L272.031,442.064L272.364,441.023L272.142,439.89L271.523,439.271L271.164,437.975L269.717,437.786L270.494,436.134L270.837,434.115L271.652,433.062L272.737,432.248L273.449,430.828z"
				},
				{
					"id":"VN",
					"title":"Vietnam",
					"d":"M778.21,401.873L774.466,404.43L772.13,407.236L771.514,409.287L773.658,412.385L776.28,416.2L778.824,417.994L780.528,420.318L781.813,425.641L781.434,430.662L779.096,432.533L775.885,434.358L773.598,436.716L770.102,439.342L769.083,437.534L769.871,435.621L767.791,434.013L770.218,432.871L773.161,432.665L771.93,430.944L776.643,428.753L776.988,425.327L776.338,423.413L776.848,420.533L776.142,418.49L774.021,416.471L772.253,413.903L769.923,410.438L766.563,408.676L767.368,407.613L769.16,406.837L768.073,404.245L764.621,404.222L763.362,401.505L761.724,399.129L763.229,398.393L765.465,398.408L768.19,398.059L770.58,396.444L771.932,397.582L774.495,398.134L774.052,399.873L775.387,401.095z"
				},
				{
					"id":"VU",
					"title":"Vanuatu",
					"d":"M945.865,509.898l-0.925,0.382l-0.939,-1.272l0.104,-0.777L945.865,509.898zM943.799,505.463l0.455,2.329l-0.754,-0.363l-0.584,0.157l-0.401,-0.799l-0.059,-2.21L943.799,505.463z"
				},
				{
					"id":"YE",
					"title":"Yemen",
					"d":"M624.161,416.335L622.134,417.116L621.591,418.404L621.524,419.391L618.733,420.611L614.253,421.957L611.742,423.986L610.508,424.144L609.667,423.974L608.028,425.165L606.241,425.716L603.887,425.865L603.179,426.028L602.566,426.783L601.831,426.992L601.397,427.719L600.009,427.656L599.113,428.043L597.173,427.898L596.443,426.228L596.523,424.662L596.065,423.815L595.517,421.687L594.711,420.501L595.272,420.361L594.984,419.04L595.324,418.481L595.2,417.216L596.431,416.289L596.144,415.061L596.886,413.626L598.038,414.386L598.798,414.122L602.034,414.055L602.548,414.347L605.258,414.639L606.333,414.493L607.034,415.465L608.343,414.979L610.352,411.908L612.969,410.587L621.054,409.458L623.246,414.299z"
				},
				{
					"id":"ZA",
					"title":"South Africa",
					"d":"M563.633,548.709l-0.548,0.462l-1.188,1.631l-0.782,1.658l-1.59,2.327l-3.169,3.382l-1.979,1.984l-2.117,1.514l-2.931,1.297l-1.429,0.174l-0.362,0.933l-1.704,-0.497l-1.388,0.64l-3.039,-0.648l-1.699,0.41l-1.161,-0.176l-2.892,1.33l-2.394,0.535l-1.732,1.282l-1.275,0.082l-1.187,-1.209l-0.947,-0.062l-1.208,-1.507l-0.133,0.467l-0.373,-0.905l0.016,-1.964l-0.911,-2.229l0.905,-0.603l-0.073,-2.527l-1.836,-3.053l-1.409,-2.737l-0.004,-0.009l-2.013,-4.153l1.343,-1.567l1.107,0.867l0.473,1.358l1.258,0.232l1.763,0.603l1.506,-0.233l2.502,-1.626l0.003,-11.524l0.757,0.461l1.662,2.933l-0.258,1.893l0.625,1.096l2.008,-0.319l1.402,-1.391l1.328,-0.935l0.687,-1.482l1.368,-0.716l1.182,0.375l1.339,0.865l2.282,0.153l1.793,-0.72l0.284,-0.962l0.493,-1.471l1.526,-0.246l0.843,-1.15l0.934,-2.032l2.517,-2.265l3.967,-2.222l1.141,0.033l1.357,0.51l0.945,-0.361l1.49,0.301l1.343,4.261l0.729,2.168l-0.5,3.428l0.239,1.111l-1.415,-0.567l-0.811,0.221l-0.265,0.902l-0.766,1.167l0.026,1.078l1.673,1.697l1.641,-0.338l0.571,-1.39l2.126,0.026l-0.701,2.281l-0.331,2.622l-0.726,1.433L563.633,548.709zM556.504,547.746l-1.224,-0.98l-1.311,0.649l-1.519,1.248l-1.495,2.031l2.103,2.484l1.003,-0.322l0.516,-1.033l1.563,-0.504l0.477,-1.05l0.86,-1.559L556.504,547.746z"
				},
				{
					"id":"ZM",
					"title":"Zambia",
					"d":"M567.105,489.207L568.429,490.466L569.142,492.868L568.664,493.636L568.101,495.938L568.639,498.299L567.757,499.292L566.906,501.951L568.38,502.695L559.872,505.065L560.138,507.12L558.014,507.516L556.417,508.67L556.076,509.676L555.073,509.904L552.634,512.299L551.082,514.192L550.135,514.26L549.224,513.922L546.09,513.602L545.586,513.383L545.565,513.141L544.458,512.482L542.641,512.314L540.345,512.978L538.515,511.155L536.623,508.778L536.752,499.62L542.591,499.656L542.352,498.67L542.77,497.602L542.277,496.266L542.596,494.887L542.299,494.006L543.267,494.077L543.427,494.96L544.741,494.891L546.521,495.153L547.458,496.444L549.704,496.841L551.418,495.943L552.047,497.435L554.196,497.833L555.229,499.049L556.38,500.622L558.526,500.646L558.292,497.566L557.522,498.084L555.562,496.976L554.805,496.469L555.152,493.618L555.65,490.267L555.022,489.021L555.821,487.222L556.573,486.885L560.339,486.41L561.443,486.696L562.615,487.413L563.732,487.885L565.514,488.359z"
				},
				{
					"id":"ZW",
					"title":"Zimbabwe",
					"d":"M562.709,526.998L561.219,526.697L560.274,527.059L558.917,526.548L557.776,526.516L555.989,525.158L553.821,524.698L552.996,522.803L552.989,521.752L551.788,521.432L548.615,518.177L547.733,516.471L547.169,515.946L546.09,513.602L549.224,513.922L550.135,514.26L551.082,514.192L552.634,512.299L555.073,509.904L556.076,509.676L556.417,508.67L558.014,507.516L560.138,507.12L560.319,508.2L562.658,508.142L563.957,508.754L564.562,509.472L565.896,509.683L567.353,510.617L567.359,514.312L566.813,516.347L566.692,518.55L567.143,519.426L566.826,521.172L566.402,521.443L565.663,523.593z"
				}
			]
		}
	}
};

/***/ }),

/***/ 660:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(661);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("da809758", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-f4b02fa4\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./LineMap.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-f4b02fa4\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./LineMap.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 661:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(undefined);
// imports
exports.i(__webpack_require__(605), "");

// module
exports.push([module.i, "\n.line-map {\n  height: 100%;\n}\n", ""]);

// exports


/***/ }),

/***/ 662:
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
  name: 'line-map',

  props: ['mapData'],

  methods: {
    drawMap: function drawMap() {
      var map = void 0;

      map = new AmCharts.AmMap();

      var dataProvider = {
        mapVar: AmCharts.maps.worldLow
      };
      map.areasSettings = {
        unlistedAreasColor: '#eee',
        unlistedAreasAlpha: 1,
        outlineColor: '#fff',
        outlineThickness: 2
      };
      map.imagesSettings = {
        color: '#6bbfe4',
        rollOverColor: '#6bbfe4',
        selectedColor: '#6be59c'
      };
      map.linesSettings = {
        color: '#6bbfe4',
        alpha: 0.4
      };

      dataProvider.linkToObject = this.mapData.mainCity;
      dataProvider.images = this.mapData.cities;
      map.dataProvider = dataProvider;
      map.backgroundZoomsToTop = true;
      map.linesAboveImages = true;

      map.write(this.$el);
    }
  },

  mounted: function mounted() {
    this.drawMap();
  }
});

/***/ }),

/***/ 663:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "line-map" }, [_vm._v("\n  Line Map\n")])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-f4b02fa4", module.exports)
  }
}

/***/ })

});