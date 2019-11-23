(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

function em1(){var c="jogpAojlpvl/dp/vl";var addr="mailto:";for(var i=0;i<c.length;i++)addr+=String.fromCharCode(c.charCodeAt(i)-1);window.location.href=addr;}

$(document).ready(function() {
r=function(){dpi=window.devicePixelRatio;$('.js-2').attr('src', (dpi>1) ? ((dpi>2) ? 'images/street-1-897.jpg' : 'images/street-1-598.jpg') : 'images/street-1-299.jpg');
$('.js-3').attr('src', (dpi>1) ? ((dpi>2) ? 'images/cnv00094-897.jpg' : 'images/cnv00094-598.jpg') : 'images/cnv00094-299.jpg');
$('.js-4').attr('src', (dpi>1) ? ((dpi>2) ? 'images/web-15-897.jpg' : 'images/web-15-598.jpg') : 'images/web-15-299.jpg');};
if(!window.HTMLPictureElement){r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
initMenu($('#menu-2')[0]);

});