$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 50) {
        $(".back-to-top").removeClass("hidden");
    }
});
