// initialize slick slider
$(document).ready(function(){

  $(".slick").slick({

    // normal options...
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: $(".slick-prev"),
    nextArrow: $(".slick-next"),

    // responsive quantity of slides to show
    responsive: [{

        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        }

      }, {

        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }

      }, {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }

      }]
  });

});
