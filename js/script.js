//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

//Google Map Skin - Get more at http://snazzymaps.com/
var myLatlng = new google.maps.LatLng(50.9234394,6.9473602);
var myOptions = {
    zoom: 15,
    marker: true,
    center: myLatlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    disableDefaultUI: true,
    styles: [
    {
        "stylers": [
            {
                "hue": "#ff8401"
            },
            {
                "saturation": 250
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "lightness": 50
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    }
]
};

var map = new google.maps.Map(document.getElementById('map'), myOptions);
var marker = new google.maps.Marker({
    position: myLatlng,
    map: map
});