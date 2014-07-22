//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    
    
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

appendRate5 = function(){
	if ($(".hidden-xs").css("display") == "none" ){
    $('#r5_rating_box').appendTo("#rate5_target");
	} else { 
    $('#r5_rating_box').appendTo("#rate5_container");
  }
}

$(window).resize(function(){	
	appendRate5();
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
   
   appendRate5();
    
    $("body").not(".index").css("margin-top","120px");
    
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
    
    $('.fancybox').fancybox();
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