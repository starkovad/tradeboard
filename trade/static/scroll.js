$(document).ready(function() {
	
	$('.scrollto').click(function(event) {
		
		var $anchor = $(this);

        $('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top - 80
		}, 1500);

		event.preventDefault();
    });

    if ($(window).width() < 992) {

	    $('.navbar-collapse a.scrollto').click(function() {
	        $('.navbar-toggler:visible').click();
	    });
	}

});