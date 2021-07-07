$(document).ready(function () {
  // choses-slider

  // AOS.init();

  if ($(".bg-sidenavOpen").length) {
    $(".bg-sidenavOpen").on("click", function () {
      $("#mySidenav").css("right", "-400px");
      $(this).css("display", "none");
      document.body.classList.remove("openMenuActive");
    });
  }

  $(window).scroll(() => {
    if ($(this).scrollTop() > 20) {
      $(".mynavbar").addClass("fixed-navbar");
      $("#floating").css("opacity", "1");
    } else {
      $(".mynavbar").removeClass("fixed-navbar");
      $("#floating").css("opacity", "0");
    }
  });

  $("#floating").click(() => {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      50
    );
  });

  if ($(".langSelect").length) {
    $(".langSelect").niceSelect();
  }

  if ($(".customSelect").length) {
    $(".customSelect").niceSelect();
  }
  if ($(".counter").length) {
    $(".counter").counterUp({
      time: 1000,
    });
  }

  var currentDir = $("a").css("direction");
  console.log(currentDir);

  // Init slick slider + animation
  $(".slider")
    .slick({
      autoplay: false,
      speed: 800,
      lazyLoad: "progressive",
      arrows: true,
      dots: false,
      fade: true,
      prevArrow:
        '<div class="slick-nav prev-arrow"><i></i><svg><use xlink:href="#circle"></svg></div>',
      nextArrow:
        '<div class="slick-nav next-arrow"><i></i><svg><use xlink:href="#circle"></svg></div>',
    })
    .slickAnimation();

  $(".slick-nav").on("click touch", function (e) {
    e.preventDefault();

    var arrow = $(this);

    if (!arrow.hasClass("animate")) {
      arrow.addClass("animate");
      setTimeout(() => {
        arrow.removeClass("animate");
      }, 1600);
    }
  });



  if ($(".offers-slider").length) {
    $(".offers-slider").slick({
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      arrows: true,
      loop: true,
      infinite: true,
      prevArrow:
        '<div class="slick-nav prev-arrow"><i></i><svg><use xlink:href="#circle"></svg></div>',
      nextArrow:
        '<div class="slick-nav next-arrow"><i></i><svg><use xlink:href="#circle"></svg></div>',
      responsive: [
        {
          breakpoint: 1026,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 524,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  }

  if ($(".sheepPeersForm").length) {
    $(".sheepPeersForm .form-control").on("focus", function () {
      $(this).parent(".form-group").find("label").addClass("activeInput");
      console.log("foces");
    });

    $(".sheepPeersForm .form-control").on("blur", function () {
      $(this).parent(".form-group").find("label").removeClass("activeInput");
      console.log("foces");
    });
  }

});

function openNav() {
  document.getElementById("mySidenav").style.right = "0";
  document.querySelector(".bg-sidenavOpen").style.display = "block";
  document.body.classList.add("openMenuActive");
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.right = "-400px";
  document.querySelector(".bg-sidenavOpen").style.display = "none";
  document.body.classList.remove("openMenuActive");
}

const splash = document.querySelector(".splash");

document.addEventListener("DOMContentLoaded", (e) => {
  setTimeout(() => {
    splash.classList.add("displayNone");
  });
});
