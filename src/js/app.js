var app = {
    common: function() {
        var scrollTop = $(window).scrollTop();
        if(scrollTop > 0) {
            $('#mainHeader').addClass('mainHeader--sticky');
        } else {
            $('#mainHeader').removeClass('mainHeader--sticky');
        }
        
        // Scroll Event
        $(window).scroll(function() {
            var scrollTop = $(window).scrollTop();
            if(scrollTop > 0) {
                $('#mainHeader').addClass('mainHeader--sticky');
            } else {
                $('#mainHeader').removeClass('mainHeader--sticky');
            }
        });

        // Sidemenu
        $('#showMenu').click(function(e) {
			e.preventDefault();
            $(this).toggleClass('active');
            $('#mainMenu').toggleClass('mainMenu--showMenu');
            $(this).find('img').attr('src', function(index, attr) {
				var newAttr = attr.split('/');
				var curImg = newAttr[newAttr.length - 1].split('.')[0];
				var path = newAttr.slice(0, newAttr.length - 1).join('/');

				if(curImg == 'menu-icon') {
					// $(this).closest('.primaryMenu').find('#toggleMenu').slideDown(400);
					return path + '/close-black.svg'
				} else {
					// $(this).closest('.primaryMenu').find('#toggleMenu').slideUp(300);
					return path + '/menu-icon.jpg'
				}
			});
        });

        // Mobile Menu
		$('.menuHandle').click(function(e) {
			$(this).find('img').attr('src', function(index, attr) {});
        });
    },

    homePage: function () {
        $('#discoverJewels').slick({
            infinite: true,
            arrows: true,
            dots: false,
            speed: 500,
            autoplay: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            cssEase: 'linear',
            autoplaySpeed: 2000,
            responsive: [
                {
                    breakpoint: 993,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 481,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });

        var options = {
            infinite: false,
            dots: false,
            arrows: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1025,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        }
        
        $('.productSlider').slick(options);
        
        // Product Tabs Slider
        $('.nav-tabs a').on('shown.bs.tab', function(event){
            var id = event.target.getAttribute('href');
            $('.productSlider').slick('destroy');
            $(id).find('.productSlider').slick(options);
        });
    },

    init: function () {
        this.common();
        this.homePage();
    }
};

$(document).ready(function() {
    app.init();
});