$(document).ready(function(){
// circluar fonts
new CircleType(document.getElementById('curve-text-1')).dir(-1).radius(100);
new CircleType(document.getElementById('curve-text-2')).dir(-1).radius(100);
new CircleType(document.getElementById('curve-text-3')).dir(-1).radius(100);
new CircleType(document.getElementById('curve-text-4')).dir(-1).radius(100);
new CircleType(document.getElementById('curve-text-5')).dir(-1).radius(100);
//circluar fonts

// tooltip indicators
$("#slacktooltip").tooltip({
  delay:{show:0}
});


$('[data-toggle="tooltip"]').tooltip({
  delay:{show:0}
});

$("#snapchattooltip").tooltip({
});

$("#resourcestooltip").tooltip({
  delay:{show:0, hide:4000}
});
// tooltip indicators

// form js
$('#characterLeft').text('140 characters left');
$('#message').keydown(function () {
    var max = 140;
    var len = $(this).val().length;
    if (len >= max) {
        $('#characterLeft').text('You have reached the limit');
        $('#characterLeft').addClass('red');
        $('#btnSubmit').addClass('disabled');
    }
    else {
        var ch = max - len;
        $('#characterLeft').text(ch + ' characters left');
        $('#btnSubmit').removeClass('disabled');
        $('#characterLeft').removeClass('red');
    }
});

// form js



// invoke the carousel
    $('#myCarousel2').carousel({
      interval:false
    });

// invoke the carousel



//scroll slides on swipe for touch enabled devices

 	$("#myCarousel2").on("touchstart", function(event){

        var yClick = event.originalEvent.touches[0].pageY;
    	$(this).one("touchmove", function(event){

        var yMove = event.originalEvent.touches[0].pageY;
        if( Math.floor(yClick - yMove) > 1 ){
            $(".carousel").carousel('next');
        }
        else if( Math.floor(yClick - yMove) < -1 ){
            $(".carousel").carousel('prev');
        }
    });
    $(".carousel").on("touchend", function(){
            $(this).off("touchmove");
    });
});

});
//animated  carousel start
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
			 $('.item-right.active img').animateCss('fadeInLeft');
			 $('.item-right.active h2').animateCss('fadeInDown');
			 $('.item-right.active p').animateCss('fadeIn');

});

//to start animation on  mousescroll , click and swipe

$("#myCarousel").on('slide.bs.carousel', function () {
$.fn.extend({
 animateCss: function (animationName) {
   var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
   $(this).addClass('animated ' + animationName).one(animationEnd, function() {
     $(this).removeClass(animationName);
   });
 }
});



// add animation type  from animate.css on the element which you want to animate

		$('.item-right img').animateCss('slideinRight');
		$('.item-right h2').animateCss('zoomIn');
		$('.item-right p').animateCss('fadeIn');

		$('.item2 img').animateCss('zoomIn');
		$('.item2 h2').animateCss('swing');
		$('.item2 p').animateCss('fadeIn');

		$('.item3 img').animateCss('fadeInLeft');
		$('.item3 h2').animateCss('fadeInDown');
		$('.item3 p').animateCss('fadeIn');
    });
});
