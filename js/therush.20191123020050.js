(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };


$(document).ready(function() {
r=function(){dpi=window.devicePixelRatio;$('.js-5').attr('src', (dpi>1) ? ((dpi>2) ? 'images/street-3-1200.jpg' : 'images/street-3-800.jpg') : 'images/street-3-400.jpg');
$('.js-6').attr('src', (dpi>1) ? ((dpi>2) ? 'images/street-2-1200.jpg' : 'images/street-2-800.jpg') : 'images/street-2-400.jpg');
$('.js-7').attr('src', (dpi>1) ? ((dpi>2) ? 'images/street-4-1200.jpg' : 'images/street-4-800.jpg') : 'images/street-4-400.jpg');
$('.js-8').attr('src', (dpi>1) ? ((dpi>2) ? 'images/street-1-1200.jpg' : 'images/street-1-800.jpg') : 'images/street-1-400.jpg');
$('.js-10').attr('src', (dpi>1) ? ((dpi>2) ? 'images/cnv00094-573.jpg' : 'images/cnv00094-382.jpg') : 'images/cnv00094-191.jpg');
$('.js-11').attr('src', (dpi>1) ? ((dpi>2) ? 'images/web-15-573.jpg' : 'images/web-15-382.jpg') : 'images/web-15-191.jpg');};
if(!window.HTMLPictureElement){r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
initMenu($('#menu-4')[0]);

});