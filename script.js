$(document).ready(function() {
    // Scroll handling and sticky nav
    $(window).scroll(function() {
        if(this.scrollY > 20) {
            $(".nav-bar").addClass("sticky");
        } else {
            $(".nav-bar").removeClass("sticky");
        }

        if(this.scrollY > 500) {
            $('.scroll-up-btn').addClass('show');
        } else {
            $('.scroll-up-btn').removeClass('show');
        }
    });

    // Scroll-up button click
    $('.scroll-up-btn').click(function() {
        $('html').animate({scrollTop: 0});
    });

    // Typing animation script for .typing
    var typed = new Typed(".typing", {
        strings: ["Web Developer", "Designer", "Freelancer", "Blogger"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // Typing animation script for .typing-2
    var typed2 = new Typed(".typing-2", {
        strings: ["Web Developer", "Freelancer", "Blogger"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // Toggle menu
    $('.menu-btn').click(function() {
        $('.nav-bar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // Owl carousel initialization
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

    // Your existing email form handling (send email)
    const emailForm = $('#contact-form');
    const contactMessage = $('#contact-message');

    const sendEmail = (e) => {
        e.preventDefault();
        contactMessage.css('opacity', 0).text('Sending Message... ✉️');
        contactMessage[0].offsetHeight; // Trigger reflow
        setTimeout(() => {
            contactMessage.css('opacity', 1);
        }, 10);

        // Send email via EmailJS
        emailjs.sendForm('service_qti4iqi', 'template_0qr5s3t', '#contact-form', '4lSbxOl6-4RY0uuix')
            .then(() => {
                contactMessage.css('opacity', 0);
                setTimeout(() => {
                    contactMessage.text('Message Sent Successfully ✅').css('opacity', 1);
                }, 500);

                setTimeout(() => {
                    contactMessage.css('opacity', 0);
                }, 4000);

                setTimeout(() => {
                    contactMessage.text('');
                }, 5000);

                emailForm[0].reset();
            });
    };

    emailForm.on('submit', sendEmail);
});
