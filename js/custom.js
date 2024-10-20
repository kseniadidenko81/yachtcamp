$(function () {
  // AOS ANIMATION
  AOS.init({
    disable: "mobile",
    duration: 800,
    anchorPlacement: "center-bottom",
  });

  // SMOOTHSCROLL NAVBAR
  $(function () {
    $(".navbar a, .hero-text a").on("click", function (event) {
      var $anchor = $(this);
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: $($anchor.attr("href")).offset().top - 49,
          },
          1000
        );
      event.preventDefault();
    });
  });

  // SECTION FAQs
  $(function () {
    $("[data-toggle]").each(function () {
      $(this).on("click", function (e) {
        const selector = $(this).data("toggle");
        const $block = $(selector);

        if ($(this).hasClass("active")) {
          $block.css("max-height", "");
        } else {
          $block.css("max-height", $block[0].scrollHeight + "px");
        }

        $(this).toggleClass("active");
      });
    });
  });

  // FORM INPUT
  $(function () {
    $("input").on("input", function () {
      var $input = $(this);
      var $label = $input.siblings("label");

      if ($input.val()) {
        $label.addClass("hidden-label");
      } else {
        $label.removeClass("hidden-label");
      }
    });
  });

  // ADD CLASS NAVBAR
  $(function () {
    $("#navbarNav").on("shown.bs.collapse", function () {
      $(".navbar").addClass("show");
    });

    $("#navbarNav").on("hidden.bs.collapse", function () {
      $(".navbar").removeClass("show");
    });
  });

  // ANCHOR
 document.querySelectorAll(".btn").forEach((button) => {
    button.addEventListener("click", function () {
      const targetSection = document.querySelector(".bg-form.text-white");
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // BACK TO TOP
  $(function () {
    $(window).on("scroll", function () {
      toggleBackToTopBtn();
    });

    function toggleBackToTopBtn() {
      const $backToTopBtn = $("#backToTopBtn");
      if ($(window).scrollTop() > 200) {
        $backToTopBtn.fadeIn();
      } else {
        $backToTopBtn.fadeOut();
      }
    }

    $("#backToTopBtn").on("click", function () {
      $("html, body").animate({ scrollTop: 0 }, "smooth");
    });
  });

  // GALLERY + CITATION

  function createCarousel(carouselSelector) {
    var $carousel = $(carouselSelector);
    var items = [];
    var startItem = 1;
    var position = 0;
    var itemCount = $carousel.find("li").length;
    var resetCount = itemCount;

    $carousel.find("li").each(function (index) {
      items[index] = $(this).text();
    });

    function swap(action) {
      var direction = action;

      if (direction == "counter-clockwise") {
        var leftItem = $carousel.find(".left-pos").attr("id") - 1;
        if (leftItem == 0) {
          leftItem = itemCount;
        }

        $carousel
          .find(".right-pos")
          .removeClass("right-pos")
          .addClass("back-pos");
        $carousel
          .find(".main-pos")
          .removeClass("main-pos")
          .addClass("right-pos");
        $carousel
          .find(".left-pos")
          .removeClass("left-pos")
          .addClass("main-pos");
        $carousel
          .find("#" + leftItem)
          .removeClass("back-pos")
          .addClass("left-pos");

        startItem--;
        if (startItem < 1) {
          startItem = itemCount;
        }
      }

      if (direction == "clockwise" || direction == "" || direction == null) {
        function pos(positionValue) {
          if (positionValue != "leftposition") {
            position++;

            if (startItem + position > resetCount) {
              position = 1 - startItem;
            }
          }

          if (positionValue == "leftposition") {
            position = startItem - 1;

            if (position < 1) {
              position = itemCount;
            }
          }

          return position;
        }

        $carousel
          .find("#" + startItem)
          .removeClass("main-pos")
          .addClass("left-pos");
        $carousel
          .find("#" + (startItem + pos()))
          .removeClass("right-pos")
          .addClass("main-pos");
        $carousel
          .find("#" + (startItem + pos()))
          .removeClass("back-pos")
          .addClass("right-pos");
        $carousel
          .find("#" + pos("leftposition"))
          .removeClass("left-pos")
          .addClass("back-pos");

        startItem++;
        position = 0;
        if (startItem > itemCount) {
          startItem = 1;
        }
      }
    }

    $carousel.find(".next").click(function () {
      swap("clockwise");
    });

    $carousel.find(".prev").click(function () {
      swap("counter-clockwise");
    });

    $carousel.find(".items").click(function () {
      if ($(this).hasClass("left-pos")) {
        swap("counter-clockwise");
      } else {
        swap("clockwise");
      }
    });
  }

  createCarousel("#carousel1");
  createCarousel("#carousel2");
});
