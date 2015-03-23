/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$("button.mute").click(function() {
    var dom = $("#video").get(0);
    dom.muted = !dom.muted;

    var icon = $(".video-controls .mute i");
    if(dom.muted) {
        icon.addClass("fa-volume-off").removeClass("fa-volume-up");
    } else {
        icon.removeClass("fa-volume-off").addClass("fa-volume-up");
    }
});

var characters = {
    "CMD": "armstrong",
    "PIL": "collins",
    "LMP": "aldrin",
    "HGC": "capcom",
    "A11": "a11",
    "CAPCOM": "capcom",
    "MARINE": "marine",
    "POTUS": "potus",
    "DCTR": "director",
    "ACAP": "acap"
};

var titles = $("h4.timeline-title");
titles.each(function() {
    var title = $(this);
    var image = characters[title.text()];
    if (image) {
        var imageElement = $("<img src='/img/chars/" + image + ".jpg' alt='" + title.text() + "' />");
        title.before(imageElement);
    }
});