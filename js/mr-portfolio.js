var distance = $("#header-title").offset().top;
var aboutMeDistance = $(".about-me-content").offset().top;
var portfolioHeight = null;
var aboutMeHeight = null;
var portfolioExamplesDistance = [];
var $window = $(window);
var didScroll = false;
var minimalHeader = false;
var headerTimer = null;
var aboutMeVis = false;
var portfolioExamples = [
	"#portfolio-example-01",
	"#portfolio-example-02",
	"#portfolio-example-03"
];

var portfolioImages = [
	"#port-image-01",
	"#port-image-02",
	"#port-image-03"
];

var portfolioDescriptions = [
	"#port-description-01",
	"#port-description-02",
	"#port-description-03"
];

$(document).ready(function(){
	// console.log("in here 1");
	portfolioHeight = $(".portfolio").height;
	aboutMeHeight = $(".about-me-content").height;
	$('.about-me-content').css({'height': aboutMeHeight});
	$(".about-me-content").hide();

	for(var i = 0; i < portfolioImages.length; i++ )
	{
		portfolioExamplesDistance.push( $( portfolioImages[i] ).offset().top );
	}

	for(var i = 0; i < portfolioImages.length; i++)
	{
		$( portfolioImages[ i ] ).hide();
		$( portfolioDescriptions[ i ] ).hide();
	}

	$('.portfolio').css({'height': portfolioHeight});

});

$window.scroll(function(){
	didScroll = true;
	if(!aboutMeVis){
		if($window.scrollTop() >= aboutMeDistance - 200 ){
			aboutMeVis = true;
			$(".about-me-content").toggle('drop', {direction: 'down', easing: 'easeOutSine'}, 1500);
		}
	}

	if( $(portfolioImages[ 0 ] ).is(':hidden') )
	{
		if($window.scrollTop() >= portfolioExamplesDistance[ 0 ] - 600 )
		{
			$( portfolioImages[ 0 ] ).effect('fade', 1500, revealDescriptions);
			// $( portfolioImages[ 0 ] ).effect('fade', 1500);
			portfolioImages.splice(0, 1);
			portfolioExamplesDistance.splice(0,1);
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
		if(!minimalHeader && $window.scrollTop() >= distance + 100)
		{
			clearInterval(headerTimer);
			hideContent();
			minimalHeader = true;
		}else if( minimalHeader && $window.scrollTop() <= distance - 50)
		{
			clearInterval(headerTimer);
			hideContent();
			minimalHeader = false;
		}
	}
}

headerTimer = setInterval(checkForScroll,250);

$(document).on("click", revealDescriptions);

function revealDescriptions(){
	console.log('in here now');
	$( portfolioDescriptions[ 0 ] ).effect('slide', {direction: 'left', mode: 'show'}, 500);
	// $( "#port-description-01").animate({left: '219px', display: "visible !important"}, 400);
	// $( "#port-description-01" ).slideToggle("slow");
	portfolioDescriptions.splice(0,1);
}


function removePortfolioImage(){

}
