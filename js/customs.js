/* global $, window*/
$(function(){
    'use strict';
	var wind = $(window),
        pointerScrollTop = $('.scrolling');
	
		
	//Adjust height in resize window
	wind.resize(function () {
		//header slider
		$('.header').height(wind.height());
		$('.header .carousel').each(function () {
			$(this).css("paddingTop", (wind.height() - $(this).height()) / 2);
		});

		// Adjut Align Control In Center 
		$('.carousel-control').css("marginTop", (wind.height() - $('.header .carousel').height()) / 2);

		// Set Height For Carousel
		$('.carousel .carousel-inner').each(function (){
			$(this).height("30%");
			$('.carousel-inner .item').css("paddingTop", ($(this).height() - $('.carousel-inner .item .carousel-caption').height())/ 2 );
		});

		// Overlay Set Line Height 
		$('.our-team div:not(first-child) .box .OT-overlay').css("line-height", $('.our-team div:not(first-child) .box .OT-overlay').height() + "px");

		// Set Overlay Line Height
		$('.portf .gallory .overlay').css("lineHeight", $('.portf .gallory .row div').height() + "px");

		
	});
	
    //Set active class for link clicked
	$('.navbar li a').click(function () {
		$(this).parent().addClass('active').siblings().removeClass('active');
	});

	//Set height for header
	$('.header').height(wind.height());

	// Set Height For Carousel
	$('.carousel .carousel-inner').each(function (){
		$(this).height("30%");
		$('.carousel-inner .item').css("paddingTop", ($(this).height() - $('.carousel-inner .item .carousel-caption').height())/ 2 );
	});

	// Overlay Set Line Height 
	$('.our-team div:not(first-child) .box .OT-overlay').css("line-height", $('.our-team div:not(first-child) .box .OT-overlay').height() + "px");


	//testimonial self slider code
	(function autoSlider() {
		$('.testim .slid .active').each(function () {
			if (!$(this).is(':last-child')) {
				$(this).delay(3000).fadeOut(1000, function () {
					$(this).removeClass('active').next().addClass('active').fadeIn();
					autoSlider();
				});
			} else {
				$(this).delay(3000).fadeOut(1000, function () {
					$(this).removeClass('active');
					$('.slid div').eq(0).addClass('active').fadeIn(1000);
					autoSlider();
				});
			}
		});
	}());
	
	//trigger the shuffle animation in project section
	$('#Container').mixItUp();

	// change active class in project section
	$('.portf li').click(function () {
		$(this).addClass('active').siblings().removeClass('active');
	});
	
	// Set Overlay Line Height
	$('.portf .gallory .overlay').css("lineHeight", $('.portf .gallory .row div').height() + "px");
	
	// scrolling top for window
	wind.on('scroll', function () {
		if (wind.scrollTop() > wind.height() / 2) {
			pointerScrollTop.fadeIn("slow");
		} else {
			pointerScrollTop.fadeOut("fast");
		}
	});
	
	// action click pointer scrolling
	pointerScrollTop.click(function () {
		$('html, body').animate({
			scrollTop: 0
		}, 1000);
	});
	
})