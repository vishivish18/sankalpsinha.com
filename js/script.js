/*///////////////////////////////////////*/
/*//////// My Custom JS /////////////////*/
/*///////////////////////////////////////*/
/*  Author:  Sankalp Sinha
    Updated: August 2015
/*/ //////////////////////////////////////*/
/*///////////////////////////////////////*/
/*///////////////////////////////////////*/
'use strict';

window.app = window.app === undefined ? {} : window.app;
app.getId = function $(id) {
    return document.getElementById(id).id;
};
app.include = function(id, html) {
    console.log(id)
    $('#' + id).load(html + '.html')
}
/*////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////*/
$(document).ready(function() {
    $("#go_to_top_icon").hide();
    //Check to see if the window is top if not then display button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('#go_to_top_icon').fadeIn();
        } else {
            $('#go_to_top_icon').fadeOut();
        }
    });
    //Click event to scroll to top
    $('#go_to_top_icon').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });
});
/*////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////*/
$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive: {
            0: {
                items: 3
            },
            400: {
                items: 3
            },
            500: {
                items: 4
            },
            600: {
                items: 5
            },
            900: {
                items: 5
            },
            1000: {
                items: 6
            },
            1200: {
                items: 5
            },
            1400: {
                items: 6
            },
            1600: {
                items: 7
            },
            1800: {
                items: 8
            },
            2000: {
                items: 10
            },
            2200: {
                items: 11
            },
            2400: {
                items: 12
            },
            2600: {
                items: 16
            }
        }
    });
});
