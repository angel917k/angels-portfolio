z$(document).ready(function(){
// invoke the carousel2
    $('#mycarousel2').carousel2({
      interval:6000
    });


// scroll slides on mouse scroll
$('#mycarousel2').bind('mousewheel DOMMouseScroll', function(e){

        if(e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
            $(this).carousel2('prev');


        }
        else{
            $(this).carousel2('next');

        }
    });

//scroll slides on swipe for touch enabled devices

 	$("#mycarousel2").on("touchstart", function(event){

        var yClick = event.originalEvent.touches[0].pageY;
    	$(this).one("touchmove", function(event){

        var yMove = event.originalEvent.touches[0].pageY;
        if( Math.floor(yClick - yMove) > 1 ){
            $(".carousel2").carousel2('next');
        }
        else if( Math.floor(yClick - yMove) < -1 ){
            $(".carousel2").carousel2('prev');
        }
    });
    $(".carousel2").on("touchend", function(){
            $(this).off("touchmove");
    });
});

});
//animated  carousel2 start
$(document).ready(function(){

//to add  start animation on load for first slide
$(function(){
		$.fn.extend({
			animateCss: function (animationName) {
				var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
				this.addClass('animated ' + animationName).one(animationEnd, function() {
					$(this).removeClass(animationName);
				});
			}
		});
			 $('.item1.active img').animateCss('slideInDown');
			 $('.item1.active h2').animateCss('zoomIn');
			 $('.item1.active p').animateCss('fadeIn');

});

//to start animation on  mousescroll , click and swipe



     $("#mycarousel2").on('slide.bs.carousel2', function () {
		$.fn.extend({
			animateCss: function (animationName) {
				var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
				this.addClass('animated ' + animationName).one(animationEnd, function() {
					$(this).removeClass(animationName);
				});
			}
		});

// add animation type  from animate.css on the element which you want to animate

		$('.item1 img').animateCss('slideInDown');
		$('.item1 h2').animateCss('zoomIn');
		$('.item1 p').animateCss('fadeIn');

		$('.item2 img').animateCss('zoomIn');
		$('.item2 h2').animateCss('swing');
		$('.item2 p').animateCss('fadeIn');

		$('.item3 img').animateCss('fadeInLeft');
		$('.item3 h2').animateCss('fadeInDown');
		$('.item3 p').animateCss('fadeIn');
    });
});
