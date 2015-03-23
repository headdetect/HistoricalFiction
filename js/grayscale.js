/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
        toggleMute(true);
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
        toggleMute(false);
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
    toggleMute();
});

var toggleMute = function(muted) {
    var dom = $("#video").get(0);
    if(!dom) return;
    dom.muted = (typeof muted == "undefined") ? !dom.muted : !!muted;

    var icon = $(".video-controls .mute i");
    if(dom.muted) {
        icon.addClass("fa-volume-off").removeClass("fa-volume-up");
    } else {
        icon.removeClass("fa-volume-off").addClass("fa-volume-up");
    }
};

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

var characterLinks = {
    "CMD": "http://en.wikipedia.org/wiki/Neil_Armstrong",
    "PIL": "http://en.wikipedia.org/wiki/Michael_Collins_(astronaut)",
    "LMP": "http://en.wikipedia.org/wiki/Buzz_Aldrin",
    "HGC": "http://en.wikipedia.org/wiki/Bruce_McCandless_II",
    "A11": "http://en.wikipedia.org/wiki/Apollo_11",
    "CAPCOM": "http://en.wikipedia.org/wiki/Bruce_McCandless_II",
    "MARINE": "http://en.wikipedia.org/wiki/United_States_Marine_Corps#United_States_Navy",
    "POTUS": "http://en.wikipedia.org/wiki/Richard_Nixon",
    "DCTR": "http://en.wikipedia.org/wiki/Gene_Kranz",
    "ACAP": "http://en.wikipedia.org/wiki/Lyndon_B._Johnson_Space_Center"
};

$("h4.timeline-title").each(function() {
    var title = $(this);
    var image = characters[title.text()];
    if (image) {
        var imageElement = $("<img src='img/chars/" + image + ".jpg' alt='" + title.text() + "' />");
        title.before(imageElement);
    }
});

$("ul.characters li").each(function() {
    var char = $(this);
    var text = char.text();
    var subText = $("small", char).text();

    text = text.replace(subText, "").trim();

    var link = characterLinks[text];
    if (link) {
        var externalLink = $("<a target='_blank' href='" + link + "'><i class='fa fa-external-link'></i></a>");
        char.append(externalLink);
    }
});

$(".too-lazy-to-href a").each(function() {
    $(this).attr("href", $(this).text());
})