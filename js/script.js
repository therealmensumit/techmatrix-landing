$(document).ready(function() {
    $('.popup .pop-in .close i').click(function() {
        $('.popup').fadeOut();
    });
    $('#knowMore').click(function() {
        $('.popup').fadeIn();
    });
});

// this is for faq
// $(".accordion-content").css("display", "none");
$(".accordion-title").click(function() {
    if ($('.accordion-content').is(':visible')) {
        $(".accordion-content").slideUp(300);
        $(".accordion-title span").html('<i class="fa fa-plus"></i>');
    }
    if ($(this).next(".accordion-content").is(':visible')) {
        $(this).next(".accordion-content").slideUp(300);
        $(this).children("span").html('<i class="fa fa-plus"></i>');
    } else {
        $(this).next(".accordion-content").slideDown(300);
        $(this).children("span").html('<i class="fa fa-minus"></i>');
    }
    $('.accordion-container .accordion-title').removeClass('active');
    $(this).addClass('active');
});

var checkList = document.getElementById('list1');
checkList.getElementsByClassName('anchor')[0].onclick = function(evt) {
    if (checkList.classList.contains('visible'))
        checkList.classList.remove('visible');
    else
        checkList.classList.add('visible');
}


// $('.port-popup').click(function() {
//     $('.port-popup').fadeOut();
// });
// $('.inn-port').click(function(e) {
//     e.stopPropagation();
// });
// $('.accordpop').click(function() {
//     $('.port-popup').fadeIn();
// });

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
    autoplay: false,
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

var swiper = new Swiper(".imp-s-c", {
    slidesPerView: 3,
    slidesPerGroup: 1,
    spaceBetween: 10,
    loop: true,
    freeMode: false,
    autoPlay: true,
    speed: 700,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".imp-sec .swiper-button-next",
        prevEl: ".imp-sec .swiper-button-prev",
    },
    pagination: {
        // el: ".swiper-pagination",
        // clickable: true,
    },
    breakpoints: {
        500: {
            slidesPerView: 5,
        },
    }
});

var swiper = new Swiper(".choosSwiper", {
    slidesPerView: 1,
    slidesPerGroup: 2,
    spaceBetween: 10,
    loop: true,
    freeMode: false,
    autoPlay: true,
    speed: 700,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
        // nextEl: ".choos-us-imp .swiper-button-next",
        // prevEl: ".choos-us-imp .swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        500: {
            slidesPerView: 4,
        },
    }
});






wow = new WOW({
    animateClass: 'animated',
    offset: 100,
    callback: function(box) {
        console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
    }
});