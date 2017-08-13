import "../scss/main.scss";
// import '../css/normalize.css';

console.log("I should be loaded now");
/*
(function($) {
	
	/!**
	 * Copyright 2012, Digital Fusion
	 * Licensed under the MIT license.
	 * http://teamdf.com/jquery-plugins/license/
	 *
	 * @author Sam Sehnert
	 * @desc A small plugin that checks whether elements are within
	 *     the user visible viewport of a web browser.
	 *     only accounts for vertical position, not horizontal.
	 *!/
	
	$.fn.visible = function(partial) {
		
		var $t            = $(this),
			$w            = $(window),
			viewTop       = $w.scrollTop(),
			viewBottom    = viewTop + $w.height(),
			_top          = $t.offset().top,
			_bottom       = _top + $t.height(),
			compareTop    = partial === true ? _bottom : _top,
			compareBottom = partial === true ? _top : _bottom;
		
		return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
		
	};
	
})(jQuery);

var aboutMeDistance = null;
var aboutMeHeight = null;
var $window = $(window);
var didScroll = false;
var aboutMeVis = false;
var $aboutMe = null;
var $aboutMeContent = null;
var headerSkills = null;
var allMods = $(".portfolio-example");
var $portfolioContent = null;
var $viewportHeightMid = null;
var $resumeContent = null;
var $resumeMods = null;

$(document).ready(function(){

	$aboutMe = $('.about-me');
	$resumeMods = $('.resume-mod');
	headerSkills = $('#header-skills').children();
	$aboutMeContent = $('.about-me-content');
	aboutMeDistance = $aboutMe.offset().top;
	aboutMeHeight = $aboutMeContent.height;
	$resumeContent = $('#resume').offset().top;
	$portfolioContent = $('#portfolio').offset().top;
	$viewportHeightMid = $window.height() / 2;
	$aboutMe.css({'height': aboutMeHeight});
	$aboutMeContent.hide();
	headerSkills.hide();
	$('#header-title').effect('fade', 'swing', 2000, ShowSkills);
	
});


function ShowSkills(){
	$(headerSkills).effect('fade', 'swing', 2000 );
}

$window.on('scroll', _.throttle(function(){
	didScroll = true;
	if(!aboutMeVis){
		if($window.scrollTop() >= aboutMeDistance - 200 ){
			aboutMeVis = true;
			$aboutMeContent.toggle('drop', {direction: 'down', easing: 'easeOutSine'}, 1500);
		}
	}
	
	if ($window.scrollTop() >= $portfolioContent - $viewportHeightMid) {
	
		allMods.each(function(i, el) {
			var el = $(el);
			if (el.visible(true)) {
				el.addClass("fade-in");
			}
		});
	}
	
	if($window.scrollTop() >= $resumeContent - $viewportHeightMid)
	{
		$resumeMods.each(function(i, el){
			var el = $(el);
			var location = el.offset().top;
			
			if($window.scrollTop() >= location - $viewportHeightMid){
				el.addClass('come-in');
			}
			if($(window).scrollTop() + window.innerHeight == $(document).height()){
				el.addClass('come-in');
			}
			
		});
	}
}, 100));




*/
