(function($) {

	"use strict";


    /*------------------------------------------
        = ALL ESSENTIAL FUNCTIONS
    -------------------------------------------*/


    // Toggle mobile navigation
    function toggleMobileNavigation() {
        var navbar = $(".navigation-holder");
        var openBtn = $(".mobail-menu .open-btn");
        var xbutton = $(".mobail-menu .navbar-toggler");

        openBtn.on("click", function(e) {
            e.stopImmediatePropagation();
            navbar.toggleClass("slideInn");
            xbutton.toggleClass("x-close");
            return false;
        })
    }

    toggleMobileNavigation();


    // Function for toggle class for small menu
    function toggleClassForSmallNav() {
        var windowWidth = window.innerWidth;
        var mainNav = $("#navbar > ul");

        if (windowWidth <= 991) {
            mainNav.addClass("small-nav");
        } else {
            mainNav.removeClass("small-nav");
        }
    }

    toggleClassForSmallNav();


    // Function for small menu
    function smallNavFunctionality() {
        var windowWidth = window.innerWidth;
        var mainNav = $(".navigation-holder");
        var smallNav = $(".navigation-holder > .small-nav");
        var subMenu = smallNav.find(".sub-menu");
        var megamenu = smallNav.find(".mega-menu");
        var menuItemWidthSubMenu = smallNav.find(".menu-item-has-children > a");

        if (windowWidth <= 991) {
            subMenu.hide();
            megamenu.hide();
            menuItemWidthSubMenu.on("click", function(e) {
                var $this = $(this);
                $this.siblings().slideToggle();
                e.preventDefault();
                e.stopImmediatePropagation();
                $this.toggleClass("rotate");
            })
        } else if (windowWidth > 991) {
            mainNav.find(".sub-menu").show();
            mainNav.find(".mega-menu").show();
        }
    }

    smallNavFunctionality();

    $("body").on("click", function() {
        $('.navigation-holder').removeClass('slideInn');
    });
    $(".menu-close").on("click", function() {
        $('.navigation-holder').removeClass('slideInn');
    });
    $(".menu-close").on("click", function() {
        $('.open-btn').removeClass('x-close');
    });


    // DATA BACKGROUND IMAGE
    var sliderBgSetting = $(".slide-bg-image");
    sliderBgSetting.each(function(indx){
        if ($(this).attr("data-background")){
            $(this).css("background-image", "url(" + $(this).data("background") + ")");
        }
    });

    // smooth-scrolling
    function smoothScrolling($scrollLinks, $topOffset) {
        var links = $scrollLinks;
        var topGap = $topOffset;

        links.on("click", function () {
            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
                if (target.length) {
                    $("html, body").animate({
                        scrollTop: target.offset().top - topGap
                    }, 1000, "easeInOutExpo");
                    return false;
                }
            }
            return false;
        });
    }

    /*------------------------------------------
        = HIDE PRELOADER
    -------------------------------------------*/
    function preloader() {
        if($('.preloader').length) {
            $('.preloader').delay(100).fadeOut(500, function() {

                //active wow
                wow.init();

            });
        }
    }


    /*------------------------------------------
        = WOW ANIMATION SETTING
    -------------------------------------------*/
    var wow = new WOW({
        boxClass:     'wow',      // default
        animateClass: 'animated', // default
        offset:       0,          // default
        mobile:       true,       // default
        live:         true        // default
    });


    /*------------------------------------------
        = ACTIVE POPUP IMAGE
    -------------------------------------------*/
    if($(".woocommerce-product-gallery__wrapper").length)  {
        $(".woocommerce-product-gallery__wrapper").find( "> div > a").addClass("fancybox");
        $(".woocommerce-product-gallery__wrapper").find( "> div > a").attr('data-fancybox-group', 'gall-1');
    }
        if ($(".fancybox").length) {
        $(".fancybox").fancybox({
            openEffect  : "elastic",
            closeEffect : "elastic",
            wrapCSS     : "project-fancybox-title-style"
        });
    }


    /*------------------------------------------
        = POPUP VIDEO
    -------------------------------------------*/
    if ($(".video-btn").length) {
        $(".video-btn").on("click", function(){
            $.fancybox({
                href: this.href,
                type: $(this).data("type"),
                'title'         : this.title,
                helpers     : {
                    title : { type : 'inside' },
                    media : {}
                },

                beforeShow : function(){
                    $(".fancybox-wrap").addClass("gallery-fancybox");
                }
            });
            return false
        });
    }

  
    /*------------------------------------------
        = ACTIVE GALLERY POPUP IMAGE
    -------------------------------------------*/
    if ($(".popup-gallery").length) {
        $('.popup-gallery').magnificPopup({
            delegate: 'a',
            type: 'image',

            gallery: {
              enabled: true
            },

            zoom: {
                enabled: true,

                duration: 300,
                easing: 'ease-in-out',
                opener: function(openerElement) {
                    return openerElement.is('img') ? openerElement : openerElement.find('img');
                }
            }
        });
    }

    /*------------------------------------------
        = POPUP YOUTUBE, VIMEO, GMAPS
    -------------------------------------------*/
    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });


    /*------------------------------------------
        = FUNCTION FORM SORTING GALLERY
    -------------------------------------------*/
    function sortingGallery() {
        if ($(".sortable-gallery .gallery-filters").length) {
            var $container = $('.gallery-container');
            $container.isotope({
                filter:'*',
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
                    filter:selector,
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
        = SETTING HEADER MIDDLE LOGO
    -------------------------------------------*/
    function siteMiddleLogoSetting() {
        if (($(".wpo-header-style-1, .wpo-header-style-3").length) && (window.innerWidth > 991) && ($("#navbar > ul").length)) {

            var nav = $("#navbar > ul");
            var navLi = nav.find(">li");

            if (navLi.length > 1) {
                var midLastLi = nav.find(">li:nth-child(" + Math.ceil(navLi.length / 2) + ")");
                var logo = $(".navbar-brand");
                $("<li class='brand-logo'></li>").insertAfter(midLastLi).append(logo);
            } else if (navLi.length == 1) {
                nav.find(">li:first-child").css({
                    "left": -70 + "px"
                })
            }
        } else if (($(".wpo-header-style-1, .wpo-header-style-3").length) && (window.innerWidth < 992) && ($("#navbar > ul").length)) {
            var logo = $(".wpo-header-style-1 .navbar-brand, .wpo-header-style-3 .navbar-brand");
            var navOpenBtn = $(".navbar-header");
            navOpenBtn.after(logo);
        }
    }

    siteMiddleLogoSetting();

    // sticky-header

    if ($(".wpo-header-style-1.has-sticky-on").length) {
        var header = document.getElementById("has-sticky");
        var stickyPosition = header.offsetTop + header.offsetHeight;
        window.onscroll = function () {
            if (window.pageYOffset > stickyPosition) {
                header.classList.add("lovelove-sticky");
                document.querySelectorAll('.page-wrapper')[0].style.marginTop = header.offsetHeight + "px";
            } else {
                header.classList.remove("lovelove-sticky");
                document.querySelectorAll('.page-wrapper')[0].style.marginTop = "0px";
            }
        };
    }

    if ($(".wpo-header-style-2.has-sticky-on").length) {
        var header = document.getElementById("has-sticky");
        var stickyPosition = header.offsetTop + header.offsetHeight;
        window.onscroll = function () {
            if (window.pageYOffset > stickyPosition) {
                header.classList.add("lovelove-sticky");
                document.querySelectorAll('.page-wrapper')[0].style.marginTop = header.offsetHeight + "px";
            } else {
                header.classList.remove("lovelove-sticky");
                document.querySelectorAll('.page-wrapper')[0].style.marginTop = "0px";
            }
        };
    }


    /*------------------------------------------
        = STICKY HEADER
    -------------------------------------------*/
   
     function cloneNavForSticyMenu($ele, $newElmClass) {
        $ele.addClass('original').clone().insertAfter($ele).addClass($newElmClass).removeClass('original');
    }

    // clone home style 1 navigation for sticky menu
    if ($('.wpo-site-header.wpo-header-style-4 .navigation').length) {
        cloneNavForSticyMenu($('.wpo-site-header.wpo-header-style-4 .navigation'), "sticky-header");
    }

    var lastScrollTop = '';

    function stickyMenu($targetMenu, $toggleClass, $topOffset) {
        var st = $(window).scrollTop();
        var mainMenuTop = $('.wpo-site-header.wpo-header-style-4 .navigation');

        if ($(window).scrollTop() > 500) {
            if (st > lastScrollTop) {
                // hide sticky menu on scroll down
                $targetMenu.addClass($toggleClass);

            } else {
                // active sticky menu on scroll up
                $targetMenu.addClass($toggleClass);
            }

        } else {
            $targetMenu.removeClass($toggleClass);
        }

        lastScrollTop = st;


    }


/*------------------------------------------
        = Header search toggle
    -------------------------------------------*/
    if($(".header-search-form-wrapper").length) {
        var searchToggleBtn = $(".search-toggle-btn");
        var searchToggleBtnIcon = $(".search-toggle-btn i");
        var searchContent = $(".header-search-form");
        var body = $("body");

        searchToggleBtn.on("click", function(e) {
            searchContent.toggleClass("header-search-content-toggle");
            searchToggleBtnIcon.toggleClass("fi flaticon-search ti-close");
            e.stopPropagation();
        });

        body.on("click", function() {
            searchContent.removeClass("header-search-content-toggle");
        }).find(searchContent).on("click", function(e) {
            e.stopPropagation();
        });
    }

    /*------------------------------------------
        = Header shopping cart toggle
    -------------------------------------------*/

    $('.cart-toggle-btn').on('click', function(event) {
        event.preventDefault();
         if($(".mini-cart").length) {
            var cartToggleBtn = $(".cart-toggle-btn");
            var cartContent = $(".mini-cart-content");
            var cartCloseBtn = $(".mini-cart-close");
            var body = $("body");

            cartContent.toggleClass("mini-cart-content-toggle");
            event.stopPropagation();

            body.on("click", function() {
                cartContent.removeClass("mini-cart-content-toggle");
            }).find(cartContent).on("click", function(e) {
                e.stopPropagation();
            });

            cartCloseBtn.on("click", function(e) {
              cartContent.removeClass("mini-cart-content-toggle");
                 e.stopPropagation();
            });


         }
    });



    /*------------------------------------------
        = Testimonial SLIDER
    -------------------------------------------*/
    if ($(".wpo-happy-client-slide").length) {
        $(".wpo-happy-client-slide").owlCarousel({
            autoplay: true,
            smartSpeed: 300,
            margin: 0,
            loop:true,
            autoplayHoverPause:true,
            dots: false,
            nav: false,
            items:4
        });
    }


    /*------------------------------------------
        = POST SLIDER
    -------------------------------------------*/
    if($(".post-slider".length)) {
        $(".post-slider").owlCarousel({
            mouseDrag: false,
            smartSpeed: 500,
            margin: 30,
            loop:true,
            nav: true,
            navText: ['<i class="fi ti-arrow-left"></i>','<i class="fi ti-arrow-right"></i>'],
            dots: false,
            items: 1
        });
    }  


     /*------------------------------------------
        = BACK TO TOP BTN SETTING
    -------------------------------------------*/
    $("body").append("<a href='#' class='back-to-top'><i class='ti-arrow-up'></i></a>");

    function toggleBackToTopBtn() {
        var amountScrolled = 1000;
        if ($(window).scrollTop() > amountScrolled) {
            $("a.back-to-top").fadeIn("slow");
        } else {
            $("a.back-to-top").fadeOut("slow");
        }
    }

    $(".back-to-top").on("click", function() {
        $("html,body").animate({
            scrollTop: 0
        }, 700);
        return false;
    })



    /*=========================================================================
        WHEN DOCUMENT LOADING
    ==========================================================================*/
        $(window).on('load', function() {

            preloader();  

            sortingGallery();

            toggleMobileNavigation();

            smallNavFunctionality();

            smoothScrolling($("#navbar > ul > li > a[href^='#']"), $(".wpo-site-header .navigation").innerHeight());
            
        });



    /*==========================================================================
        WHEN WINDOW SCROLL
    ==========================================================================*/
    $(window).on("scroll", function() {

        toggleBackToTopBtn();

        if ($(".wpo-site-header.wpo-header-style-4.has-sticky-on").length) {
           stickyMenu( $('.wpo-site-header.wpo-header-style-4 .navigation'), "sticky-on" );
        }

    });


    /*==========================================================================
        WHEN WINDOW RESIZE
    ==========================================================================*/
    $(window).on("resize", function() {
        toggleClassForSmallNav();
        
        sortingGallery();

        siteMiddleLogoSetting();

        clearTimeout($.data(this, 'resizeTimer'));
        $.data(this, 'resizeTimer', setTimeout(function() {
            smallNavFunctionality();
        }, 200));
    });


    $(document).ready(function(){
      $('div.quantity.buttons_added .plus, td.quantity.buttons_added .plus').attr("value", $.parseHTML("&#xe113;")[0].data);
      $('div.quantity.buttons_added .minus, td.quantity.buttons_added .minus').attr("value", $.parseHTML("&#xe114;")[0].data);
    });

    $('.woocommerce .thumbnails .owl-nav .owl-prev i').addClass('ti-arrow-left');
    $('.woocommerce .woocommerce-product-search button').addClass('ti-search');

    $('.wp-block-search .wp-block-search__button').text('');
    $('.wp-block-search .wp-block-search__button').append('<i class="ti-search"></i>');

    $('.blog-sidebar .wp-block-search .wp-block-search__label').text('');
    $('.blog-sidebar .wp-block-search .wp-block-search__label').append('<h2>Search</h2>');

    $(".wpo-blog-pg-section .entry-meta ul li a, .wpo-blog-single-section .entry-meta ul li a").text(function(i, $string) {
        return $string.replace(/,/g, ", ");
    });

     if ($("#lovelove-date").length) {

        const inputDate = document.getElementById("lovelove-date");

        inputDate.addEventListener("focus",function (evt) {
          if (this.getAttribute("type")==="date") {
            this.showPicker();
          }
        });
    }


})(window.jQuery);
