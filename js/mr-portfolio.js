var distance = $("#header-title").offset().top;
var aboutMeDistance = $(".about-me").offset().top;
var $window = $(window);
var didScroll = false;
var minimalHeader = false;
var headerTimer = null;
var aboutMeVis = false;

$(document).ready(function(){
	// console.log("in here 1");
	$("#about-me-content").hide();


});

$window.scroll(function(){
	didScroll = true;
	if(!aboutMeVis){
		if($window.scrollTop() >= aboutMeDistance - 200 ){
			aboutMeVis = true;
			$("#about-me-content").toggle('drop', {direction: 'down', easing: 'easeOutElastic'}, 1500);
		}
	}
});

function hideContent(){
	if(!minimalHeader)
		{
			$("#header-title").effect("fade", "swing", 500, changeHeader);
		}else if(minimalHeader){
			$("#header-title").effect("fade", "swing", 500, changeHeaderBack);
		}
}

function showContent(){
	$("#header-title").show("fade", 1000);
	headerTimer = setInterval(checkForScroll, 250);
}

function changeHeader(){
	$("#header-title").switchClass('header-content', 'header-nav', 250, "linear", showContent);
}

function changeHeaderBack(){
	$("#header-title").switchClass('header-nav', 'header-content', 250, 'linear', showContent);
}

function checkForScroll(){
	if(didScroll){
		didScroll = false;
		if(!minimalHeader && $window.scrollTop() >= distance + 100){
			clearInterval(headerTimer);
			hideContent();
			minimalHeader = true;
		}else if( minimalHeader && $window.scrollTop() <= distance - 50){
			clearInterval(headerTimer);
			hideContent();
			minimalHeader = false;
		}
	}
}

headerTimer = setInterval(checkForScroll,250);
