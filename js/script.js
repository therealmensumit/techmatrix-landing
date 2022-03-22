$(".trust-slider").slick({
    dots: false,
    autoplay: true,
    fade: false,
    infinite: true,
    speed: 3000,
    slidesToScroll: 5,
    // cssEase: "linear",
    autoplaySpeed: 0,
    centerMode: true,
    slidesToShow: 5,
    centerPadding: 0,
    pauseOnHover: true,
    responsive: [{
        breakpoint: 1024,
        settings: {
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 2
        }
    }, {
        breakpoint: 650,
        settings: {
            initialSlide: 1,
            slidesToShow: 1
        }
    }]
});


$(".slide").slick({
    dots: false,
    autoplay: true,
    fade: false,
    prevArrow: '<i class="fa fa-angle-left"></i>',
    nextArrow: '<i class="fa fa-angle-right"></i>',
    infinite: true,
    speed: 200,
    adaptiveHeight: true,
    centerMode: false,
    slidesToShow: 1,
    centerPadding: 0,
    pauseOnHover: true,
    responsive: [{
        breakpoint: 1024,
        settings: {
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
        }
    }, {
        breakpoint: 650,
        settings: {
            initialSlide: 1,
            slidesToShow: 1
        }
    }]
});






wow = new WOW({
    animateClass: 'animated',
    offset: 100,
    callback: function(box) {
        console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
    }
});