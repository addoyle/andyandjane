$(document).ready(function() {
	"use strict";

	//----------------------------------------------------
	//--------------------Pre-loader----------------------
	//----------------------------------------------------

	// makes sure the whole site is loaded
	$(window).on('load', function() {
		// will first fade out the loading animation
		$(".preloader").fadeOut();
		//then background color will fade out slowly
		$("#faceoff").delay(200).fadeOut("slow");
	});

	//----------------------------------------------------
	//--------------------Sticky nav----------------------
	//----------------------------------------------------

	$("#sticker").sticky({topSpacing:0});

	//----------------------------------------------------
	//-----------Appearence of navigation-----------------
	//----------------------------------------------------

	$('.nav-block .nav, footer .nav').onePageNav({
		scrollThreshold: 0.2, // Adjust if Navigation highlights too early or too late
		scrollOffset: 72 //Height of Navigation Bar
	});

	//----------------------------------------------------
	//--------------- For navigation----------------------
	//----------------------------------------------------

	$('.navbar-collapse ul li a').on( "click",function() {
		$('.navbar-toggle:visible').click();
	});

	//----------------------------------------------------
	//--------------- SmoothSroll-------------------------
	//----------------------------------------------------

	var scrollAnimationTime = 1200,
	scrollAnimation = 'easeInOutExpo';
	$('a.scrollto').bind('click.smoothscroll', function (event) {
		event.preventDefault();
		var target = this.hash;
		$('html, body').stop().animate({
			'scrollTop': $(target).offset().top
		}, scrollAnimationTime, scrollAnimation, function () {
			window.location.hash = target;
		});
	});

	//----------------------------------------------------
	//------------Scroll to Next Section------------------
	//----------------------------------------------------

	$('.next-arrow a').on( "click",function() {
		$('html,body').animate({scrollTop:$('#story').offset().top - 76}, 750);
		return false;
	});
	$('a[href="#contact"]').on( "click",function() {
		$('html,body').animate({scrollTop:$('#contact').offset().top - 76}, 750);
		return false;
	});
	$('a[href="#map"]').on( "click",function() {
		$('html,body').animate({scrollTop:$('#map').offset().top - 77}, 750);
		return false;
	});

	//----------------------------------------------------
	//--------------------Countdown-----------------------
	//----------------------------------------------------

	$("#count-down").TimeCircles(
		{
			circle_bg_color: "#fd6e6e",
			use_background: true,
			bg_width: 1,
			fg_width: 0.03,
			time: {
				Days: { color: "#fefeee" },
				Hours: { color: "#fefeee" },
				Minutes: { color: "#fefeee" },
				Seconds: { color: "#fefeee" }
			}
		}
	);

	$(".pink #count-down").TimeCircles(
		{
			circle_bg_color: "#fa4b74",
			use_background: true,
			bg_width: 1,
			fg_width: 0.03,
			time: {
				Days: { color: "#fefeee" },
				Hours: { color: "#fefeee" },
				Minutes: { color: "#fefeee" },
				Seconds: { color: "#fefeee" }
			}
		}
	);

	$(".greyscale #count-down").TimeCircles(
		{
			circle_bg_color: "#454545",
			use_background: true,
			bg_width: 1,
			fg_width: 0.03,
			time: {
				Days: { color: "#ffffff" },
				Hours: { color: "#ffffff" },
				Minutes: { color: "#ffffff" },
				Seconds: { color: "#ffffff" }
			}
		}
	);

	$("#count-down-2").TimeCircles(
		{
			circle_bg_color: "#fefeee",
			use_background: false,
			bg_width: .0000001,
			fg_width: .0000001,
			time: {
				Days: { color: "#fefeee" },
				Hours: { color: "#fefeee" },
				Minutes: { color: "#fefeee" },
				Seconds: { color: "#fefeee" }
			}
		}
	);

	// Swap the header and content sections
	$('.time_circles [class^=textDiv]').each(function() {
		var $h4 = $(this).children('h4').detach();
		$(this).append($h4);
	});

	//---------------------------------------------------
	//---------------- Scroll to top --------------------
	//---------------------------------------------------

	$(window).scroll(function() {
		if ($(this).scrollTop() > 200) {
			$('#go-to-top').fadeIn('slow');
		} else {
			$('#go-to-top').fadeOut('slow');
		}
	});


	$('#go-to-top a').on( "click",function(){
		$("html,body").animate({ scrollTop: 0 }, 750);
		return false;
	});

	//---------------------------------------------------
	//------------------- Massonary ---------------------
	//---------------------------------------------------

	var container = $('#photo-gallery').get(0);
	var msnry;
	if (container) {
		// initialize Masonry after all images have loaded
		imagesLoaded( container, function() {
			msnry = new Masonry( container, {
				// options
				columnWidth: 0,
				itemSelector: '.item',
				"gutter": 30
			});
		});
	}

	//---------------------------------------------------
	//------------------- Placeholder -------------------
	//---------------------------------------------------

	$(function() {
		// Invoke the plugin
		$('input, textarea').placeholder();
	});

	//---------------------------------------------------
	//------------------- Selectbox -------------------
	//---------------------------------------------------

	$('[data-select-for] ~ .dropdown-menu a').on('click', function(e) {
		e.preventDefault();

		var val = $(this).text();
		var $btn = $(this).closest('.dropdown-menu').prev('[data-select-for]');
		$btn.find('span:first-child').text(val + ' ');
		$($btn.attr('data-select-for')).val(val);
  });

	//---------------------------------------------------
	//---------------- Magnific Image Popup--------------
	//---------------------------------------------------

	$('.gallery-popup').magnificPopup({
		type:'image',
		closeBtnInside:true,
		// Delay in milliseconds before popup is removed
		removalDelay: 300,

		// Class that is added to popup wrapper and background
		// make it unique to apply your CSS animations just to this exact popup
		//mainClass: 'mfp-fade',
		gallery: {
			enabled: true, // set to true to enable gallery

			preload: [0,2], // read about this option in next Lazy-loading section

			navigateByImgClick: true,

			arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // markup of an arrow button

			closeMarkup: '<button title="%title%" class="mfp-close"><i class="mfp-close-icn">&times;</i></button>',

			tPrev: 'Previous (Left arrow key)', // title for left button
			tNext: 'Next (Right arrow key)', // title for right button
			//tCounter: '<span class="mfp-counter">%curr% of %total%</span>' // markup of counter
		}
	});
	//---------------------------------------------------------
	//--------------- Animate and WOW Animation----------------
	var wow = new WOW(
		{
			//offset: 50,
			mobile: false
			// live: true
		}
	);
	wow.init();


	// --------------RSVP Form Ajax request-----------------------

	$('.contact_form .bring-guest button.yes-btn').on('click', function(e) {
		e.preventDefault();
		var $bringGuest = $(this).closest('.bring-guest');
		var $input = $bringGuest.next('.input-group').find('input');

		$(this).next('.btn').removeClass('active');

		$bringGuest.animate({
			left: $bringGuest.outerWidth()
		}, function() {
			$bringGuest.hide().closest('.form-group').css({overflow: 'visible'});
			$input.focus();
		});
	});

	$('.contact_form .bring-guest + .input-group .btn-cancel').on('click', function(e) {
		e.preventDefault();

		var $bringGuest = $(this).closest('.input-group').prev('.bring-guest');
		$bringGuest.closest('.form-group').css({overflow: 'hidden'});
		$bringGuest.show().animate({
			left: 0
		});
	});

	$('.contact_form').on('submit', function(e){
		e.preventDefault();

		var $this = $(this);

		var $btn = $this.find('.btn-submit');

		// Disable form
		$this.addClass('disabled');

		// Change icon to spinner
		$btn.removeClass('success-btn').find('.fa').removeClass('fa-paper-plane').addClass('fa-circle-o-notch fa-spin');

		var reset = function() {
			if (this.shown) {
				$btn.addClass('success-btn').find('.fa').removeClass('fa-paper-plane fa-circle-o-notch fa-spin').addClass('fa-check');
				$btn.find('.title').text('Submitted!');
				$this.removeClass('disabled');
			} else {
				this.shown = true;
			}
		};

		// Give the user a small delay before showing success, let them know it "worked"
		setTimeout(reset, 2000);

		var data = $this.serializeObject();
		$.ajax({
			type: "POST",
			url: "rsvp.php",
			data: data,
			success: reset
		});
	});

	/* =================================
	===  IE10 ON WINDOWS 8 FIX      ====
	=================================== */
	if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
		var msViewportStyle = document.createElement('style')
		msViewportStyle.appendChild(
			document.createTextNode(
				'@-ms-viewport{width:auto!important}'
			)
		)
		document.querySelector('head').appendChild(msViewportStyle)
	}

});
