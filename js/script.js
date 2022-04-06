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

function ValidateEmail(email) {
    var expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    return expr.test(email);
};

function showerrorpro(mydiv, erromsg) {
    $(mydiv).css({ border: '', color: '#222', background: '#fff' });
    // $("html, body").animate({ scrollTop: $(mydiv).offset().top - 150 }, 500);
    // $(mydiv).focus();
    if (erromsg !== '') {
        $(mydiv).after('<span class="show-error-msg">' + erromsg + '</span>');
    }
}

function showsuccesspro(mydiv) {
    $(mydiv).css({ border: '1px solid #D7D7D7', background: '#e9eaec', color: '#222' });
    $('.show-error-msg').remove();
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

$('.cl_form_sb').click(function() {

    var bname = $('.bname').val();
    var bemail = $('.bemail').val();
    var bphone = $('.bphone').val().split(' ');

    if (bname === "") {
        showerrorpro(".bname", 'Name is required');
        return false;
    } else {
        showsuccesspro(".bname");
    }
    if (!ValidateEmail(bemail)) {
        showerrorpro(".bemail", 'Please enter valid email ID');
        return false;
    } else {
        showsuccesspro(".bemail");
    }
    if (bphone[1].length < 10) {
        showerrorpro(".bphone", 'Please enter valid phone number');
        return false;
    } else {
        showsuccesspro(".bphone");
    }
    if (resume === "") {
        // showerrorpro(".resume", 'Please Upload your cv');
        // return false;
    } else {
        showsuccesspro(".resume");
    }
    if (response.length == 0) {
        alert('Invalid Captch Code');
        return false;
    }
    $(this).hide()
    $('.loader').show('');

});

$('.cl_form_sub').click(function() {

    var name = $('.name').val();
    var email = $('.email').val();
    var phone = $('.phone').val().split(' ');
    var resume = $('.resume').val();
    var response = grecaptcha.getResponse();

    if (name === "") {
        showerrorpro(".name", 'Name is required');
        return false;
    } else {
        showsuccesspro(".name");
    }
    if (!ValidateEmail(email)) {
        showerrorpro(".email", 'Please enter valid email ID');
        return false;
    } else {
        showsuccesspro(".email");
    }
    if (phone[1].length < 10) {
        showerrorpro(".phone", 'Please enter valid phone number');
        return false;
    } else {
        showsuccesspro(".phone");
    }
    if (resume === "") {
        // showerrorpro(".resume", 'Please Upload your cv');
        // return false;
    } else {
        showsuccesspro(".resume");
    }
    if (response.length == 0) {
        alert('Invalid Captch Code');
        return false;
    }
    $(this).hide()
    $('.loader').show('');

});





wow = new WOW({
    animateClass: 'animated',
    offset: 100,
    callback: function(box) {
        console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
    }
});