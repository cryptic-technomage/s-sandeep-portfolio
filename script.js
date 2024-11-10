$(document).ready(function() {
    $(window).scroll(function() {
        if(this.scrollY > 20) {
            $(".nav-bar").addClass("sticky");
        }else {
            $(".nav-bar").removeClass("sticky");
        }

        if(this.scrollY > 500) {
            $('.scroll-up-btn').addClass('show');
        } else {
            $('.scroll-up-btn').removeClass('show');
        }
    });
    // slide-up script
    $('.scroll-up-btn').click(function() {
        $('html').animate({scrollTop: 0});
    })

    // typing animation script
    var typed = new Typed(".typing", {
        strings: ["Web Developer","Designer", "Freelancer", "Blogger"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    })

    var typed = new Typed(".typing-2", {
        strings: ["Web Developer", "Freelancer", "Blogger"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    })

    // Toggle menu script
    $('.menu-btn').click(function() {
        $('.nav-bar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            700: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
})