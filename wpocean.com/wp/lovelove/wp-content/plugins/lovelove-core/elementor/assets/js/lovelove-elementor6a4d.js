/*
Template Name: Lovelove
Author: wpoceans
Version: 1.0
*/

(function($) {
    'use strict';

    /*----- ELEMENTOR LOAD FUNTION CALL ---*/

    $(window).on('elementor/frontend/init', function() {

        var swiper_slide = function() {

            // HERO SLIDER
            var menu = [];
            jQuery('.swiper-slide').each(function(index) {
                menu.push(jQuery(this).find('.slide-inner').attr("data-text"));
            });
            var interleaveOffset = 0.5;
            var swiperOptions = {
                loop: true,
                speed: 1000,
                parallax: true,
                autoplay: {
                    delay: 6500,
                    disableOnInteraction: false,
                },
                watchSlidesProgress: true,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                    renderBullet: function(index, className) {
                        return '<span class="' + className + '">' + (index + 1) + "</span>";
                    },
                },

                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },

                on: {
                    progress: function() {
                        var swiper = this;
                        for (var i = 0; i < swiper.slides.length; i++) {
                            var slideProgress = swiper.slides[i].progress;
                            var innerOffset = swiper.width * interleaveOffset;
                            var innerTranslate = slideProgress * innerOffset;
                            swiper.slides[i].querySelector(".slide-inner").style.transform =
                                "translate3d(" + innerTranslate + "px, 0, 0)";
                        }
                    },

                    touchStart: function() {
                        var swiper = this;
                        for (var i = 0; i < swiper.slides.length; i++) {
                            swiper.slides[i].style.transition = "";
                        }
                    },

                    setTransition: function(speed) {
                        var swiper = this;
                        for (var i = 0; i < swiper.slides.length; i++) {
                            swiper.slides[i].style.transition = speed + "ms";
                            swiper.slides[i].querySelector(".slide-inner").style.transition =
                                speed + "ms";
                        }
                    }
                }
            };

            var swiper = new Swiper(".swiper-container", swiperOptions);

        }; // end



        // sliderBgSetting

        var sliderBgSetting = function() {
            // DATA BACKGROUND IMAGE
            var sliderBgSetting = $(".slide-bg-image");
            sliderBgSetting.each(function(indx) {
                if ($(this).attr("data-background")) {
                    $(this).css("background-image", "url(" + $(this).data("background") + ")");
                }
            });



        }; // end



        var owl_hero_slider = function() {

            /*------------------------------------------
            wpo-hero-items SLIDER
             -------------------------------------------*/
            if ($(".wpo-hero-items").length) {
                $(".wpo-hero-items").owlCarousel({
                    autoplay: true,
                    smartSpeed: 300,
                    margin: 0.5,
                    loop: true,
                    autoplayHoverPause: true,
                    dots: true,
                    arrows: false,
                    nav: true,
                    center: true,
                    items: 3,
                    navText: ['<i class="ti-arrow-left"></i>', '<i class="ti-arrow-right"></i>'],
                    responsive: {
                        0: {
                            items: 1,
                            dots: true,
                            arrows: false,
                            nav: false,
                        },

                        575: {
                            items: 1,
                        },
                        767: {
                            items: 1,
                            dots: false,
                        },

                        992: {
                            items: 3,
                            dots: false,
                        },

                        1200: {
                            items: 3
                        }
                    }
                });
            }


        }; // end


        var static_hero_slider = function() {

            /*------------------------------------------
    Hero Slider SLIDER
    -------------------------------------------*/
            if ($(".static-hero-slide-img").length) {
                $(".static-hero-slide-img").owlCarousel({
                    autoplay: true,
                    smartSpeed: 300,
                    margin: 10,
                    loop: true,
                    autoplayHoverPause: true,
                    dots: false,
                    arrows: false,
                    nav: true,
                    navText: ['<i class="fi flaticon-left-arrow"></i>', '<i class="fi flaticon-right-arrow-1"></i>'],
                    responsive: {
                        0: {
                            items: 1,
                            dots: true,
                            arrows: false,
                            nav: false,
                        },

                        575: {
                            items: 1,
                        },
                        767: {
                            items: 1,
                        },

                        992: {
                            items: 2
                        },

                        1200: {
                            items: 3
                        }
                    }
                });
            }


        }; // end


        var hero_client_slider = function() {

            /*------------------------------------------
              = Client SLIDER
            -------------------------------------------*/
            if ($(".wpo-happy-client-slide").length) {
                $(".wpo-happy-client-slide").owlCarousel({
                    autoplay: true,
                    smartSpeed: 300,
                    margin: 0,
                    loop: true,
                    autoplayHoverPause: true,
                    dots: false,
                    nav: false,
                    items: 4
                });
            }

        }; // end



        var odometer = function() {

            if ($(".odometer").length) {
                $('.odometer').appear();
                $(document.body).on('appear', '.odometer', function(e) {
                    var odo = $(".odometer");
                    odo.each(function() {
                        var countNumber = $(this).attr("data-count");
                        $(this).html(countNumber);
                    });
                });
            }


        }; // end


        var partners_slider = function() {

            /*------------------------------------------
            = PARTNERS SLIDER
            -------------------------------------------*/
            if ($(".partners-slider").length) {
                $(".partners-slider").owlCarousel({
                    autoplay: true,
                    smartSpeed: 300,
                    margin: 0,
                    loop: true,
                    autoplayHoverPause: true,
                    dots: false,
                    arrows: false,
                    nav: false,
                    responsive: {
                        0: {
                            items: 2
                        },

                        550: {
                            items: 3
                        },

                        992: {
                            items: 4
                        },

                        1200: {
                            items: 5
                        }
                    }
                });
            }

        }; // end


        var coundown_clock = function() {

            /*------------------------------------------
            = COUNTDOWN CLOCK
        -------------------------------------------*/
            if ($("#clock").length) {
                var weddingDate = $('#clock').data('date');
                $('#clock').countdown(weddingDate, function(event) {
                    var $this = $(this).html(event.strftime('' +
                        '<div class="box"><div><div class="time">%m</div><span>Month</span></div></div>' +
                        '<div class="box"><div><div class="time">%D</div> <span>Days</span></div></div>' +
                        '<div class="box"><div><div class="time">%H</div> <span>Hours</span></div></div>' +
                        '<div class="box"><div><div class="time">%M</div> <span>Mins</span> </div></div>' +
                        '<div class="box"><div><div class="time">%S</div> <span>Secs</span> </div></div>'));
                });
            }


        }; // end

        var slide_coundown_clock = function() {

            /*------------------------------------------
            = COUNTDOWN CLOCK
        -------------------------------------------*/
            if ($("#clock").length) {
                var weddingDate = $('#clock').data('date');
                $('#clock').countdown(weddingDate, function(event) {
                    var $this = $(this).html(event.strftime('' +
                        '<div class="box"><div><div class="time">%D</div> <span>Days</span> </div></div>' +
                        '<div class="box"><div><div class="time">%H</div> <span>Hours</span> </div></div>' +
                        '<div class="box"><div><div class="time">%M</div> <span>Mins</span> </div></div>' +
                        '<div class="box"><div><div class="time">%S</div> <span>Secs</span> </div></div>'));
                });
            }


        }; // end



        var service_slider = function() {

            /*------------------------------------------
     service-slider SLIDER
    -------------------------------------------*/
            if ($(".service-slider").length) {
                $(".service-slider").owlCarousel({
                    autoplay: true,
                    smartSpeed: 300,
                    margin: 30,
                    loop: true,
                    autoplayHoverPause: true,
                    dots: true,
                    arrows: false,
                    nav: true,
                    center: true,
                    items: 4,
                    stagePadding: 60,
                    navText: ['<i class="ti-arrow-left"></i>', '<i class="ti-arrow-right"></i>'],
                    responsive: {
                        0: {
                            items: 1,
                            dots: true,
                            arrows: false,
                            nav: false,
                            stagePadding: 5,
                        },

                        575: {
                            items: 1,
                            stagePadding: 5,
                        },
                        767: {
                            items: 2,
                            dots: false,
                        },

                        992: {
                            items: 2,
                            dots: false,
                        },

                        1200: {
                            items: 4
                        }
                    }
                });
            }



        }; // end


        var testimonials_slider = function() {

            /*------------------------------------------
                  = Testimonial slider 1
              -------------------------------------------*/
            if ($(".wpo-testimonial-wrap").length) {
                $('.slider-for').slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    fade: true,
                    asNavFor: '.slider-nav',
                    dots: true,
                    responsive: [{
                        breakpoint: 991,
                        settings: {
                            dots: false
                        }
                    }]
                });

                $('.slider-nav').slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    asNavFor: '.slider-for',
                    focusOnSelect: true,
                    arrows: false,
                    dots: false,
                    responsive: [{
                        breakpoint: 991,
                        settings: {
                            dots: true
                        }
                    }]
                });
            }

        }; // end

        var product_slider = function() {

            /*------------------------------------------
             product-active
             -------------------------------------------*/
            if ($(".product-active").length) {
                $(".product-active").owlCarousel({
                    autoplay: true,
                    smartSpeed: 300,
                    margin: 30,
                    loop: true,
                    autoplayHoverPause: true,
                    dots: false,
                    arrows: false,
                    nav: true,
                    navText: ['<i class="fi flaticon-left-arrow"></i>', '<i class="fi flaticon-right-arrow-1"></i>'],
                    responsive: {
                        0: {
                            items: 1,
                            dots: true,
                            arrows: false,
                            nav: false,
                        },

                        575: {
                            items: 1,
                        },
                        767: {
                            items: 2,
                        },

                        992: {
                            items: 3
                        },

                        1200: {
                            items: 5
                        }
                    }
                });
            }

        }; // end



        var project_gallery = function() {

            /*------------------------------------------
                = FUNCTION FORM SORTING GALLERY
            -------------------------------------------*/
            function sortingGallery() {
                if ($(".sortable-gallery .gallery-filters").length) {
                    var $container = $('.gallery-container');
                    $container.isotope({
                        filter: '*',
                        animationOptions: {
                            duration: 750,
                            easing: 'linear',
                            queue: false,
                        }
                    });

                    $(".gallery-filters li a").on("click", function() {
                        $('.gallery-filters li .current').removeClass('current');
                        $(this).addClass('current');
                        var selector = $(this).attr('data-filter');
                        $container.isotope({
                            filter: selector,
                            animationOptions: {
                                duration: 750,
                                easing: 'linear',
                                queue: false,
                            }
                        });
                        return false;
                    });
                }
            }

            sortingGallery();


            /*------------------------------------------
                = MASONRY GALLERY SETTING
            -------------------------------------------*/
            function masonryGridSetting() {
                if ($('.masonry-gallery').length) {
                    var $grid = $('.masonry-gallery').masonry({
                        itemSelector: '.grid-item',
                        columnWidth: '.grid-item',
                        percentPosition: true
                    });

                    $grid.imagesLoaded().progress(function() {
                        $grid.masonry('layout');
                    });
                }
            }

        }; // end




        //Hero Client Slider
        elementorFrontend.hooks.addAction('frontend/element_ready/wpo-lovelove_hero.default', function($scope, $) {
            hero_client_slider();
        });

        //owl_hero_slider
        elementorFrontend.hooks.addAction('frontend/element_ready/wpo-lovelove_slider.default', function($scope, $) {
            owl_hero_slider();
        });

        //Slider
        elementorFrontend.hooks.addAction('frontend/element_ready/wpo-lovelove_slider.default', function($scope, $) {
            swiper_slide();
        });

        //sliderBgSetting
        elementorFrontend.hooks.addAction('frontend/element_ready/wpo-lovelove_slider.default', function($scope, $) {
            sliderBgSetting();
        });

        //wpo-lovelove_coundown_hero
        elementorFrontend.hooks.addAction('frontend/element_ready/wpo-lovelove_coundown_hero.default', function($scope, $) {
            swiper_slide();
        });

        //wpo-lovelove_coundown_hero
        elementorFrontend.hooks.addAction('frontend/element_ready/wpo-lovelove_coundown_hero.default', function($scope, $) {
            sliderBgSetting();
        });

        //slide_coundown_clock
        elementorFrontend.hooks.addAction('frontend/element_ready/wpo-lovelove_slider.default', function($scope, $) {
            slide_coundown_clock();
        });

        //slide_coundown_clock
        elementorFrontend.hooks.addAction('frontend/element_ready/wpo-lovelove_coundown_hero.default', function($scope, $) {
            coundown_clock();
        });

        //wpo-lovelove_coundown
        elementorFrontend.hooks.addAction('frontend/element_ready/wpo-lovelove_coundown.default', function($scope, $) {
            coundown_clock();
        });

        //static_hero_slider
        elementorFrontend.hooks.addAction('frontend/element_ready/tmx-Lovelove_planner_slider.default', function($scope, $) {
            static_hero_slider();
        });


        //odometer
        elementorFrontend.hooks.addAction('frontend/element_ready/wpo-lovelove_funfact.default', function($scope, $) {
            odometer();
        });

        //partners_slider
        elementorFrontend.hooks.addAction('frontend/element_ready/wpo-lovelove_client.default', function($scope, $) {
            partners_slider();
        });

        //service_slider
        elementorFrontend.hooks.addAction('frontend/element_ready/wpo-lovelove_service.default', function($scope, $) {
            service_slider();
        });

        //testimonials_slider
        elementorFrontend.hooks.addAction('frontend/element_ready/wpo-lovelove_testimonial.default', function($scope, $) {
            testimonials_slider();
        });

        //project_gallery
        elementorFrontend.hooks.addAction('frontend/element_ready/wpo-lovelove_project.default', function($scope, $) {
            project_gallery();
        });
    
        //product_slider
        elementorFrontend.hooks.addAction('frontend/element_ready/owl-lovelove_popular.default', function($scope, $) {
            // product_slider();
        });

    });



    $(window).on("elementor/frontend/init", function() {

        elementorFrontend.hooks.addAction("frontend/element_ready/wponewproducts.default", function(scope, $) {

            /*------------------------------------------
             product-active
             -------------------------------------------*/
            if ($(".product-active").length) {
                $(".product-active").owlCarousel({
                    autoplay: true,
                    smartSpeed: 300,
                    margin: 30,
                    loop: true,
                    autoplayHoverPause: true,
                    dots: false,
                    arrows: false,
                    nav: true,
                    navText: ['<i class="fi flaticon-left-arrow"></i>', '<i class="fi flaticon-right-arrow-1"></i>'],
                    responsive: {
                        0: {
                            items: 1,
                            dots: true,
                            arrows: false,
                            nav: false,
                        },

                        575: {
                            items: 1,
                        },
                        767: {
                            items: 2,
                        },

                        992: {
                            items: 3
                        },

                        1200: {
                            items: 5
                        }
                    }
                });
            }

        });

        elementorFrontend.hooks.addAction("frontend/element_ready/wpo-lovelove_project.default", function(scope, $) {
            /*------------------------------------------
            = FUNCTION FORM SORTING GALLERY
                -------------------------------------------*/
            function sortingGallery() {
                if ($(".sortable-gallery .gallery-filters").length) {
                    var $container = $('.gallery-container');
                    $container.isotope({
                        filter: '*',
                        animationOptions: {
                            duration: 750,
                            easing: 'linear',
                            queue: false,
                        }
                    });

                    $(".gallery-filters li a").on("click", function() {
                        $('.gallery-filters li .current').removeClass('current');
                        $(this).addClass('current');
                        var selector = $(this).attr('data-filter');
                        $container.isotope({
                            filter: selector,
                            animationOptions: {
                                duration: 750,
                                easing: 'linear',
                                queue: false,
                            }
                        });
                        return false;
                    });
                }
            }

            sortingGallery();

        });

        elementorFrontend.hooks.addAction("frontend/element_ready/wpo-lovelove_gallery.default", function(scope, $) {
            /*------------------------------------------
            = FUNCTION FORM SORTING GALLERY
            -------------------------------------------*/
            function sortingGallery() {
                if ($(".sortable-gallery .gallery-filters").length) {
                    var $container = $('.gallery-container');
                    $container.isotope({
                        filter: '*',
                        animationOptions: {
                            duration: 750,
                            easing: 'linear',
                            queue: false,
                        }
                    });

                    $(".gallery-filters li a").on("click", function() {
                        $('.gallery-filters li .current').removeClass('current');
                        $(this).addClass('current');
                        var selector = $(this).attr('data-filter');
                        $container.isotope({
                            filter: selector,
                            animationOptions: {
                                duration: 750,
                                easing: 'linear',
                                queue: false,
                            }
                        });
                        return false;
                    });
                }
            }

            sortingGallery();


            /*------------------------------------------
                = MASONRY GALLERY SETTING
            -------------------------------------------*/
            function masonryGridSetting() {
                if ($('.masonry-gallery').length) {
                    var $grid = $('.masonry-gallery').masonry({
                        itemSelector: '.grid-item',
                        columnWidth: '.grid-item',
                        percentPosition: true
                    });

                    $grid.imagesLoaded().progress(function() {
                        $grid.masonry('layout');
                    });
                }
            }

        });




    })

})(jQuery);