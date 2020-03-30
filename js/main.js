$(function() {

    $('#top-return').click(function() {
        $('body, html').stop().animate({scrollTop: 0}, 500);
    })

    $(window).on("scroll resize", function() {
        var img3 = $('#content-img3').offset().top;
        // console.log("img3 : " + img3 + " + window : " + $(window).scrollTop());
        if ($(window).scrollTop() >= img3) {
            $('#top-return').fadeIn();
        }else if ($(window).scrollTop() < img3) {
            $('#top-return').fadeOut();
        }
    })

})