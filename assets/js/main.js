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

  if ($(".shoPassword").length) {
    $(".shoPassword").click(function () {
      var getInput = $(this).parent().find(".form-control");
      if (getInput.attr("type") === "password") {
        getInput.attr("type", "text");
        $(this).find("i").attr("class", "fi-rr-eye-crossed");
      } else {
        getInput.attr("type", "password");
        $(this).find("i").attr("class", "fi-rr-eye");
      }
    });
  }

  if ($(".personal-img").length) {
    $(document).on("change", ".personal-img-file", function () {
      var uploadFile = $(this);
      var files = !!this.files ? this.files : [];
      if (!files.length || !window.FileReader) return; // no file selected, or no FileReader support

      if (/^image/.test(files[0].type)) {
        // only image file
        var reader = new FileReader(); // instance of the FileReader
        reader.readAsDataURL(files[0]); // read the local file

        reader.onloadend = function () {
          // set image data as background of div
          //alert(uploadFile.closest(".upimage").find('.imagePreview').length);
          uploadFile
            .closest(".personal-img")
            .find(".per")
            .css("background-image", "url(" + this.result + ")");
          $(".personal-img-validation-delete").css("display", "block");
        };
      }
    });

    $(document).on("click", ".personal-img-validation-delete", function () {
      $(".per").css("background-image", "url('./assets/images/avatar.png')");
      $(".personal-img-validation-delete").css("display", "none");
    });
  }

  if ($("#tile-1").length) {
    $("#tile-1 .nav-tabs a").click(function () {
      var position = $(this).parent().position();
      var width = $(this).parent().width();
      $("#tile-1 .slider").css({ left: +position.left, width: width });
    });
    var actWidth = $("#tile-1 .nav-tabs").find(".active").parent("li").width();
    var actPosition = $("#tile-1 .nav-tabs .active").position();
    $("#tile-1 .slider").css({ left: +actPosition.left, width: actWidth });
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
