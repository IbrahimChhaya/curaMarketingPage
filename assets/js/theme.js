
$('document').ready(function() {
  $('#doctorSlideshow').owlCarousel({
    nav: true,
    dots: true,
    dotsEach: true,
    loop: true,
    autoplay: true,
    autoplayTimeout:7000,
    autoplayHoverPause:true,
    smartSpeed:1000,
    //navText: ["<span class='mai-arrow-back'></span>", "<span class='mai-arrow-forward'></span>"],
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 2
      },
      992: {
        items: 3
      },
      1300: {
        items: 4
      }
    }
  });
});

$('document').ready(function() {
    $('#aboutSlide').owlCarousel({
      nav: true,
      dots: true,
      loop:true,
      autoplay: true,
      autoplayTimeout:7000,
      autoplayHoverPause:true,
      smartSpeed:1000,
      //navText: ["<span class='mai-arrow-back'></span>", "<span class='mai-arrow-forward'></span>"],
      responsive: {
        0: {
          items: 1
        }
      }
    });
  });

  $('document').ready(function() {
    $('#featuresSlide').owlCarousel({
      nav: true,
      dots: false,
      loop:true,
      autoplay: true,
      autoplayTimeout:7000,
      autoplayHoverPause:true,
      smartSpeed:1000,
      //navText: ["<span class='mai-arrow-back'></span>", "<span class='mai-arrow-forward'></span>"],
      responsive: {
        0: {
          items: 1
        }
      }
    });
  });

  $('document').ready(function() {
    $('#webFeaturesSlide').owlCarousel({
      nav: true,
      dots: false,
      loop:true,
      autoplay: true,
      autoplayTimeout:7000,
      autoplayHoverPause:true,
      smartSpeed:1000,
      //navText: ["<span class='mai-arrow-back'></span>", "<span class='mai-arrow-forward'></span>"],
      responsive: {
        0: {
          items: 1
        }
      }
    });
  });

$('document').ready(function() {
  $("a[data-role='smoothscroll']").click(function(e) {
    e.preventDefault();
    
    var position = $($(this).attr("href")).offset().top - nav_height;

    $("body, html").animate({
        scrollTop: position
    }, 1000 );
    return false;
  });
});

$('document').ready(function() {
  // Back to top
  var backTop = $(".back-to-top");

  $(window).scroll(function() {
    if($(document).scrollTop() > 400) {
      backTop.css('visibility', 'visible');
    }
    else if($(document).scrollTop() < 400) {
      backTop.css('visibility', 'hidden');
    }
  });

  backTop.click(function() {
    $('html').animate({
      scrollTop: 0
    }, 1000);
    return false;
  });
});


$('document').ready(function() {
  // Tooltips
  $('[data-toggle="tooltip"]').tooltip();

  // Popovers
  $('[data-toggle="popover"]').popover();

  // Page scroll animate
  new WOW().init();
});

