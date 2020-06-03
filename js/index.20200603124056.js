(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

var lwi=-1;function thresholdPassed(){var w=$(window).width();var p=false;var cw=0;if(w>=960){cw++;}if(lwi!=cw){p=true;}lwi=cw;return p;}

$(document).ready(function() {
r=function(){if(thresholdPassed()){dpi=window.devicePixelRatio;if($(window).width()>=960){$('.js').attr('src', (dpi>1) ? 'images/45339578265_3476699b39_b-568.jpg' : 'images/45339578265_3476699b39_b-284.jpg');
$('.js-2').attr('src', (dpi>1) ? 'images/pasted-image-568.jpg' : 'images/pasted-image-284.jpg');}else{$('.js').attr('src', (dpi>1) ? 'images/45339578265_3476699b39_b-272.jpg' : 'images/45339578265_3476699b39_b-136.jpg');
$('.js-2').attr('src', (dpi>1) ? 'images/pasted-image-272.jpg' : 'images/pasted-image-136.jpg');}}};
if(!window.HTMLPictureElement){$(window).resize(r);r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();

});