$(document).ready(function () {
  $(".navbar-toggler").click(function() {
    $(".navbar-toggler").toggleClass("change");
  });

  //window scroll

  $(window).scroll(function() {
    let position = $(this).scrollTop();

    if (position >= 149) {
      $(".navbar").addClass("navbar-background");
      $(".navbar").addClass("fixed-top");
    } else {
      $(".navbar").removeClass("navbar-background");
      $(".navbar").removeClass("fixed-top");
    }
  });
  //smooth scroll
  $(".nav-item a").click(function(link) {
    link.preventDefault();
    let target = $(this).attr("href");
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $(target).offset().top
        },
        1000
      );
    $(".navbar-toggler").toggleClass("change");
    $("#myNavBar").collapse("hide");
  });

  // Isotope
  let $grid = $(".grid").isotope({
    // options
  });
  // filter items on button click
  $(".filter-button-group").on("click", "button", function() {
    let filterValue = $(this).attr("data-filter");
    $grid.isotope({
      filter: filterValue
    });
  });

    // ripples
    $("#header, .info").ripples({
        resolution: 500,
        dropRadius: 1,
        perturbance: 0.02,
        imageUrl: null
    });

    //magnific popups
    $('.parent-container').magnificPopup({
      delegate: 'a', // child items selector, by clicking on it popup will open
      type: 'image',

      gallery: {
          enabled: true
      }
        // other options
    });

});
