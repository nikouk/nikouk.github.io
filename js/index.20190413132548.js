(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

var lwi=-1;function thresholdPassed(){var w=$(window).width();var p=false;var cw=0;if(w>=480){cw++;}if(w>=768){cw++;}if(w>=960){cw++;}if(w>=1200){cw++;}if(lwi!=cw){p=true;}lwi=cw;return p;}
function em1(){var c="jogpAojlpvl/dp/vl";var addr="mailto:";for(var i=0;i<c.length;i++)addr+=String.fromCharCode(c.charCodeAt(i)-1);window.location.href=addr;}

$(document).ready(function() {
r=function(){if(thresholdPassed()){dpi=window.devicePixelRatio;if($(window).width()>=1200){$('.js').attr('src', (dpi>1) ? ((dpi>2) ? 'images/pasted-image-219.png' : 'images/pasted-image-146.png') : 'images/pasted-image-73.png');
$('.js-4').attr('src', (dpi>1) ? ((dpi>2) ? 'images/pasted-image-69.png' : 'images/pasted-image-46-1.png') : 'images/pasted-image-23.png');
$('.js-5').attr('src', (dpi>1) ? ((dpi>2) ? 'images/pasted-image-81.png' : 'images/pasted-image-54-2.png') : 'images/pasted-image-27.png');
$('.js-6').attr('src', (dpi>1) ? ((dpi>2) ? 'images/pasted-image-96-1.png' : 'images/pasted-image-64-1.png') : 'images/pasted-image-32-1.png');
var a='data-src'; if($('.js-7 .slide0').hasAttr('src')) { a='src'; } $('.js-7 .slide0').attr(a, (dpi>1) ? ((dpi>2) ? 'images/9-03-19-1-2-1392.jpg' : 'images/9-03-19-1-2-928.jpg') : 'images/9-03-19-1-2-464.jpg');
var a='data-src'; if($('.js-7 .slide1').hasAttr('src')) { a='src'; } $('.js-7 .slide1').attr(a, (dpi>1) ? ((dpi>2) ? 'images/9-03-19-1-4-1392.jpg' : 'images/9-03-19-1-4-928.jpg') : 'images/9-03-19-1-4-464.jpg');
var a='data-src'; if($('.js-7 .slide2').hasAttr('src')) { a='src'; } $('.js-7 .slide2').attr(a, (dpi>1) ? ((dpi>2) ? 'images/9-03-19-1-3-1392.jpg' : 'images/9-03-19-1-3-928.jpg') : 'images/9-03-19-1-3-464.jpg');
var a='data-src'; if($('.js-7 .slide3').hasAttr('src')) { a='src'; } $('.js-7 .slide3').attr(a, (dpi>1) ? ((dpi>2) ? 'images/9-03-19-1-1392.jpg' : 'images/9-03-19-1-928.jpg') : 'images/9-03-19-1-464.jpg');
var a='data-src'; if($('.js-7 .slide4').hasAttr('src')) { a='src'; } $('.js-7 .slide4').attr(a, (dpi>1) ? ((dpi>2) ? 'images/9-03-19-2-1392.jpg' : 'images/9-03-19-2-928.jpg') : 'images/9-03-19-2-464.jpg');}else if($(window).width()>=960){$('.js').attr('src', (dpi>1) ? ((dpi>2) ? 'images/pasted-image-171.png' : 'images/pasted-image-114.png') : 'images/pasted-image-57.png');
$('.js-4').attr('src', (dpi>1) ? ((dpi>2) ? 'images/pasted-image-54.png' : 'images/pasted-image-36.png') : 'images/pasted-image-18.png');
$('.js-5').attr('src', (dpi>1) ? ((dpi>2) ? 'images/pasted-image-66-1.png' : 'images/pasted-image-44.png') : 'images/pasted-image-22.png');
$('.js-6').attr('src', (dpi>1) ? ((dpi>2) ? 'images/pasted-image-75-1.png' : 'images/pasted-image-50-1.png') : 'images/pasted-image-25-1.png');
var a='data-src'; if($('.js-7 .slide0').hasAttr('src')) { a='src'; } $('.js-7 .slide0').attr(a, (dpi>1) ? ((dpi>2) ? 'images/9-03-19-1-2-1113.jpg' : 'images/9-03-19-1-2-742.jpg') : 'images/9-03-19-1-2-371.jpg');
var a='data-src'; if($('.js-7 .slide1').hasAttr('src')) { a='src'; } $('.js-7 .slide1').attr(a, (dpi>1) ? ((dpi>2) ? 'images/9-03-19-1-4-1113.jpg' : 'images/9-03-19-1-4-742.jpg') : 'images/9-03-19-1-4-371.jpg');
var a='data-src'; if($('.js-7 .slide2').hasAttr('src')) { a='src'; } $('.js-7 .slide2').attr(a, (dpi>1) ? ((dpi>2) ? 'images/9-03-19-1-3-1113.jpg' : 'images/9-03-19-1-3-742.jpg') : 'images/9-03-19-1-3-371.jpg');
var a='data-src'; if($('.js-7 .slide3').hasAttr('src')) { a='src'; } $('.js-7 .slide3').attr(a, (dpi>1) ? ((dpi>2) ? 'images/9-03-19-1-1113.jpg' : 'images/9-03-19-1-742.jpg') : 'images/9-03-19-1-371.jpg');
var a='data-src'; if($('.js-7 .slide4').hasAttr('src')) { a='src'; } $('.js-7 .slide4').attr(a, (dpi>1) ? ((dpi>2) ? 'images/9-03-19-2-1113.jpg' : 'images/9-03-19-2-742.jpg') : 'images/9-03-19-2-371.jpg');}else if($(window).width()>=768){$('.js').attr('src', (dpi>1) ? ((dpi>2) ? 'images/pasted-image-138.png' : 'images/pasted-image-92.png') : 'images/pasted-image-46.png');
$('.js-4').attr('src', (dpi>1) ? ((dpi>2) ? 'images/pasted-image-42-2.png' : 'images/pasted-image-28-1.png') : 'images/pasted-image-14-1.png');
$('.js-5').attr('src', (dpi>1) ? ((dpi>2) ? 'images/pasted-image-54-1.png' : 'images/pasted-image-36-1.png') : 'images/pasted-image-18-1.png');
$('.js-6').attr('src', (dpi>1) ? ((dpi>2) ? 'images/pasted-image-60.png' : 'images/pasted-image-40.png') : 'images/pasted-image-20.png');
var a='data-src'; if($('.js-7 .slide0').hasAttr('src')) { a='src'; } $('.js-7 .slide0').attr(a, (dpi>1) ? ((dpi>2) ? 'images/9-03-19-1-2-891.jpg' : 'images/9-03-19-1-2-594.jpg') : 'images/9-03-19-1-2-297.jpg');
var a='data-src'; if($('.js-7 .slide1').hasAttr('src')) { a='src'; } $('.js-7 .slide1').attr(a, (dpi>1) ? ((dpi>2) ? 'images/9-03-19-1-4-891.jpg' : 'images/9-03-19-1-4-594.jpg') : 'images/9-03-19-1-4-297.jpg');
var a='data-src'; if($('.js-7 .slide2').hasAttr('src')) { a='src'; } $('.js-7 .slide2').attr(a, (dpi>1) ? ((dpi>2) ? 'images/9-03-19-1-3-891.jpg' : 'images/9-03-19-1-3-594.jpg') : 'images/9-03-19-1-3-297.jpg');
var a='data-src'; if($('.js-7 .slide3').hasAttr('src')) { a='src'; } $('.js-7 .slide3').attr(a, (dpi>1) ? ((dpi>2) ? 'images/9-03-19-1-891.jpg' : 'images/9-03-19-1-594.jpg') : 'images/9-03-19-1-297.jpg');
var a='data-src'; if($('.js-7 .slide4').hasAttr('src')) { a='src'; } $('.js-7 .slide4').attr(a, (dpi>1) ? ((dpi>2) ? 'images/9-03-19-2-891.jpg' : 'images/9-03-19-2-594.jpg') : 'images/9-03-19-2-297.jpg');}else if($(window).width()>=480){$('.js').attr('src', (dpi>1) ? ((dpi>2) ? 'images/pasted-image-147.png' : 'images/pasted-image-98.png') : 'images/pasted-image-49.png');
$('.js-4').attr('src', (dpi>1) ? ((dpi>2) ? 'images/pasted-image-63.png' : 'images/pasted-image-42-1.png') : 'images/pasted-image-21.png');
$('.js-5').attr('src', (dpi>1) ? ((dpi>2) ? 'images/pasted-image-75.png' : 'images/pasted-image-50.png') : 'images/pasted-image-25.png');
$('.js-6').attr('src', (dpi>1) ? ((dpi>2) ? 'images/pasted-image-96.png' : 'images/pasted-image-64.png') : 'images/pasted-image-32.png');
var a='data-src'; if($('.js-7 .slide0').hasAttr('src')) { a='src'; } $('.js-7 .slide0').attr(a, (dpi>1) ? ((dpi>2) ? 'images/9-03-19-1-2-762.jpg' : 'images/9-03-19-1-2-508.jpg') : 'images/9-03-19-1-2-254.jpg');
var a='data-src'; if($('.js-7 .slide1').hasAttr('src')) { a='src'; } $('.js-7 .slide1').attr(a, (dpi>1) ? ((dpi>2) ? 'images/9-03-19-1-4-762.jpg' : 'images/9-03-19-1-4-508.jpg') : 'images/9-03-19-1-4-254.jpg');
var a='data-src'; if($('.js-7 .slide2').hasAttr('src')) { a='src'; } $('.js-7 .slide2').attr(a, (dpi>1) ? ((dpi>2) ? 'images/9-03-19-1-3-762.jpg' : 'images/9-03-19-1-3-508.jpg') : 'images/9-03-19-1-3-254.jpg');
var a='data-src'; if($('.js-7 .slide3').hasAttr('src')) { a='src'; } $('.js-7 .slide3').attr(a, (dpi>1) ? ((dpi>2) ? 'images/9-03-19-1-762.jpg' : 'images/9-03-19-1-508.jpg') : 'images/9-03-19-1-254.jpg');
var a='data-src'; if($('.js-7 .slide4').hasAttr('src')) { a='src'; } $('.js-7 .slide4').attr(a, (dpi>1) ? ((dpi>2) ? 'images/9-03-19-2-762.jpg' : 'images/9-03-19-2-508.jpg') : 'images/9-03-19-2-254.jpg');}else{$('.js').attr('src', (dpi>1) ? ((dpi>2) ? 'images/pasted-image-99.png' : 'images/pasted-image-66.png') : 'images/pasted-image-33.png');
$('.js-4').attr('src', (dpi>1) ? ((dpi>2) ? 'images/pasted-image-42.png' : 'images/pasted-image-28.png') : 'images/pasted-image-14.png');
$('.js-5').attr('src', (dpi>1) ? ((dpi>2) ? 'images/pasted-image-51.png' : 'images/pasted-image-34.png') : 'images/pasted-image-17.png');
$('.js-6').attr('src', (dpi>1) ? ((dpi>2) ? 'images/pasted-image-63-1.png' : 'images/pasted-image-42-3.png') : 'images/pasted-image-21-1.png');
var a='data-src'; if($('.js-7 .slide0').hasAttr('src')) { a='src'; } $('.js-7 .slide0').attr(a, (dpi>1) ? ((dpi>2) ? 'images/9-03-19-1-2-507.jpg' : 'images/9-03-19-1-2-338.jpg') : 'images/9-03-19-1-2-169.jpg');
var a='data-src'; if($('.js-7 .slide1').hasAttr('src')) { a='src'; } $('.js-7 .slide1').attr(a, (dpi>1) ? ((dpi>2) ? 'images/9-03-19-1-4-507.jpg' : 'images/9-03-19-1-4-338.jpg') : 'images/9-03-19-1-4-169.jpg');
var a='data-src'; if($('.js-7 .slide2').hasAttr('src')) { a='src'; } $('.js-7 .slide2').attr(a, (dpi>1) ? ((dpi>2) ? 'images/9-03-19-1-3-507.jpg' : 'images/9-03-19-1-3-338.jpg') : 'images/9-03-19-1-3-169.jpg');
var a='data-src'; if($('.js-7 .slide3').hasAttr('src')) { a='src'; } $('.js-7 .slide3').attr(a, (dpi>1) ? ((dpi>2) ? 'images/9-03-19-1-507.jpg' : 'images/9-03-19-1-338.jpg') : 'images/9-03-19-1-169.jpg');
var a='data-src'; if($('.js-7 .slide4').hasAttr('src')) { a='src'; } $('.js-7 .slide4').attr(a, (dpi>1) ? ((dpi>2) ? 'images/9-03-19-2-507.jpg' : 'images/9-03-19-2-338.jpg') : 'images/9-03-19-2-169.jpg');}}};
if(!window.HTMLPictureElement){$(window).resize(r);r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
$('.js-7 .slider').slick({lazyLoad: 'ondemand',slidesToShow: 1,slidesToScroll: 1,fade: true,slide: 'div',cssEase: 'linear',speed: 300,dots: false,arrows: false,infinite: true,autoplay: true,pauseOnHover: false,autoplaySpeed: 2000});var wl = new woolite();
wl.init();
wl.addAnimation($('.js')[0], "1.50s", "0.30s", 1, 0);
wl.addAnimation($('.js-2')[0], "1.50s", "0.30s", 1, 0);
wl.addAnimation($('.js-3')[0], "1.50s", "0.30s", 1, 0);
wl.addAnimation($('.js-4')[0], "1.50s", "0.30s", 1, 0);
wl.addAnimation($('.js-5')[0], "1.50s", "0.30s", 1, 0);
wl.addAnimation($('.js-6')[0], "1.50s", "0.30s", 1, 0);
wl.addAnimation($('.js-8')[0], "1.50s", "0.30s", 1, 0);
wl.addAnimation($('.js-9')[0], "1.50s", "0.30s", 1, 0);
wl.start();

});