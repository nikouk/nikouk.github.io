(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };


$(document).ready(function() {
r=function(){dpi=window.devicePixelRatio;$('.js-12').attr('src', (dpi>1) ? ((dpi>2) ? 'images/cnv00075-1779.jpg' : 'images/cnv00075-1186.jpg') : 'images/cnv00075-593.jpg');
$('.js-13').attr('src', (dpi>1) ? ((dpi>2) ? 'images/cnv00094-1779.jpg' : 'images/cnv00094-1186.jpg') : 'images/cnv00094-593.jpg');
$('.js-14').attr('src', (dpi>1) ? ((dpi>2) ? 'images/esher-11-1200.jpg' : 'images/esher-11-800.jpg') : 'images/esher-11-400.jpg');
$('.js-15').attr('src', (dpi>1) ? ((dpi>2) ? 'images/cnv00082-1779.jpg' : 'images/cnv00082-1186.jpg') : 'images/cnv00082-593.jpg');
$('.js-16').attr('src', (dpi>1) ? ((dpi>2) ? 'images/esher-10-1200.jpg' : 'images/esher-10-800.jpg') : 'images/esher-10-400.jpg');
$('.js-17').attr('src', (dpi>1) ? ((dpi>2) ? 'images/1stdec-4-1800.jpg' : 'images/1stdec-4-1200.jpg') : 'images/1stdec-4-600.jpg');
$('.js-18').attr('src', (dpi>1) ? ((dpi>2) ? 'images/cnv00099-1200.jpg' : 'images/cnv00099-800.jpg') : 'images/cnv00099-400.jpg');
$('.js-19').attr('src', (dpi>1) ? ((dpi>2) ? 'images/cnv00102-1779.jpg' : 'images/cnv00102-1186.jpg') : 'images/cnv00102-593.jpg');
$('.js-20').attr('src', (dpi>1) ? ((dpi>2) ? 'images/esher-14-1779.jpg' : 'images/esher-14-1186.jpg') : 'images/esher-14-593.jpg');
$('.js-21').attr('src', (dpi>1) ? ((dpi>2) ? 'images/1stdec-2-1200.jpg' : 'images/1stdec-2-800.jpg') : 'images/1stdec-2-400.jpg');
$('.js-23').attr('src', (dpi>1) ? ((dpi>2) ? 'images/street-1-573.jpg' : 'images/street-1-382.jpg') : 'images/street-1-191.jpg');
$('.js-24').attr('src', (dpi>1) ? ((dpi>2) ? 'images/web-15-573.jpg' : 'images/web-15-382.jpg') : 'images/web-15-191.jpg');};
if(!window.HTMLPictureElement){r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
initMenu($('#menu-5')[0]);

});