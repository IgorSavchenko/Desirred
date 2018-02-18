$(document).ready(function(){

  // initialize slick slider
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
      },{
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },{
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          fade: true,
        }
      }]
  });

  //open main drop down menu
  $(".header__menu").on("mousemove", function(){
    // console.log($(window).width());
    //apply only on tablet and desktop
    if ($(window).width() >= 768) {
      $(".navigation__link").each(function(){
        //show element on hover
        $(this).on("mousemove", function(){
          $(".navigation__link").each(function(){
            $(this).removeClass("active");
          });
          $(this).addClass("active");
          let dataAttribute = $(this).data("attribute");
          $(".main__menu__item").each(function(){
            if ($(this).data("attribute") == dataAttribute) {$(this).addClass("visible");}
            else {$(this).removeClass("visible");}
          });
        });
      });
      // hide elements when mouse leaves hover area
      $(".header__menu").on("mouseleave", function(){
        $(".main__menu__item").each(function(){
          $(this).removeClass("visible");
        });
        $(".navigation__link").each(function(){
          $(this).removeClass("active");
        });
      });
    }
  });

  // open burger menu
  $(".burger").click(function(){
	   $(this).toggleClass("active");
     $(".navigation__menu").toggleClass("active");
	});

});
