var distance = null;
var aboutMeDistance = null;
var aboutMeHeight = null;
var $window = $(window);
var didScroll = false;
var aboutMeVis = false;


$(document).ready(function(){
	// distance = $("#header-title").offset().top;
	aboutMeDistance = $(".about-me").offset().top;
	aboutMeHeight = $(".about-me-content").height;
	$('.about-me').css({'height': aboutMeHeight});
	$(".about-me-content").hide();

	$('#header-title').effect('fade', 'swing', 2000);

	
});

$window.scroll(function(){
	didScroll = true;
	if(!aboutMeVis){
		if($window.scrollTop() >= aboutMeDistance - 200 ){
			aboutMeVis = true;
			$(".about-me-content").toggle('drop', {direction: 'down', easing: 'easeOutSine'}, 1500);
		}
	}

});




