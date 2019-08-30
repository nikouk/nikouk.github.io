(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };


$(document).ready(function() {
r=function(){dpi=window.devicePixelRatio;};
if(!window.HTMLPictureElement){r();}
var wl = new woolite();
wl.init();
wl.addAnimation($('.js-10')[0], "2.00s", "0.00s", 1, 0);
wl.addAnimation($('.js-11')[0], "2.00s", "0.00s", 1, 0);
wl.addAnimation($('.js-16')[0], "2.00s", "0.00s", 1, 0);
wl.start();

});