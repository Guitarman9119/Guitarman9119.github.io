/*====================================================
                        SERVICES
====================================================*/





$(function () {

    // animate on scroll
    new WOW().init();
});


$(function () {

    $("a.smooth-scroll").click(function (event) {

        event.preventDefault();

        // get/return id like #about, #work, #team and etc
        var section = $(this).attr("href"); 

        $('html, body').animate({
            scrollTop: $(section).offset().top - 64
        }, 1250);
    });
});


document.getElementById("blogsite").onclick = function () {
    window.open('https://medium.com/@vwpeens');
    
};


















