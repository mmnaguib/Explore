/*global $*/

$(function () {
    'use strict';
    $('#videolink').magnificPopup({
        type: 'inline',
        midClick: true
    });
    
    $('.member').owlCarousel({
        items: '2',
        autoplay: true,
        smartSpeed: 700,
        margin: 10,
        loop: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            }
        }
    });
    
    $('.client').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        smartSpeed: 700,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive : {
            0: {
                items: 6,
                nav: true
            },
            600: {
                items: 6,
                nav: false
            },
            1000: {
                items: 6
            }
        }
    });
    
    /*$('#progress-items').waypoint(function () {
        $('.progress-bar').each(function () {
            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 2000);
        });
        $(this).destroy();
        
    }, {
        offset: 'bottom-in-view'
    });*/
    
    $('#testimal ul li').click(function () {
        $(this).addClass('active').siblings().removeClass('active');

        if ($(this).is(':nth-of-type(1)')) {
            $('.person').eq(0).fadeIn().siblings('div').hide();
        } else if ($(this).is(':nth-of-type(2)')) {
            $('.person').eq(1).fadeIn().siblings('div').hide();
        } else if ($(this).is(':nth-of-type(3)')) {
            $('.person').eq(2).fadeIn().siblings('div').hide();
        } else if ($(this).is(':nth-of-type(4)')) {
            $('.person').eq(3).fadeIn().siblings('div').hide();
        }
    });
    	
	$('#cont').mixItUp();
    
    $('.count').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 1500,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
(function autoSlider() {
    'use strict';
    $('#slider .active').each(function () {
        if (!$(this).is(':last-child')) {
            $(this).delay(2000).fadeOut(1000, function () {
                $(this).removeClass('active').next().addClass('active').fadeIn();
                autoSlider();
            });
        } else {
            $(this).delay(2000).fadeOut(1000, function () {
                $(this).removeClass('active');
                $('#slider .test').eq(0).addClass('active').fadeIn();
                autoSlider();
            });
        }
    });
}());
