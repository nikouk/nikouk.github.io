(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };


$(document).ready(function() {
r=function(){dpi=window.devicePixelRatio;$('.js-23').attr('src', (dpi>1) ? 'images/web-18-1200.jpg' : 'images/web-18-600.jpg');
$('.js-24').attr('src', (dpi>1) ? 'images/motive-2-1200.jpg' : 'images/motive-2-600.jpg');
$('.js-25').attr('src', (dpi>1) ? 'images/motive-4-800.jpg' : 'images/motive-4-400.jpg');
$('.js-26').attr('src', (dpi>1) ? 'images/web-30-1200.jpg' : 'images/web-30-600.jpg');
$('.js-27').attr('src', (dpi>1) ? 'images/motive-3-800.jpg' : 'images/motive-3-400.jpg');
$('.js-28').attr('src', (dpi>1) ? 'images/web-29-1200.jpg' : 'images/web-29-600.jpg');
$('.js-29').attr('src', (dpi>1) ? 'images/motive-5-800.jpg' : 'images/motive-5-400.jpg');
$('.js-30').attr('src', (dpi>1) ? 'images/web-46-1200.jpg' : 'images/web-46-600.jpg');
$('.js-32').attr('src', (dpi>1) ? 'images/street-1-382.jpg' : 'images/street-1-191.jpg');
$('.js-33').attr('src', (dpi>1) ? 'images/cnv00094-382.jpg' : 'images/cnv00094-191.jpg');};
if(!window.HTMLPictureElement){r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
initMenu($('#menu-6')[0]);

});