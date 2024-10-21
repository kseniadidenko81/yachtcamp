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
});

var swiper1 = new Swiper(".swiper1", {
  autoHeight: true,
  slidesPerView: 1,
  loop: true,
  loopedSlides: 3,
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  spaceBetween: -100,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 800,
    modifier: 1,
    slideShadows: false,
  },
  navigation: {
    nextEl: ".swiper1-button-next",
    prevEl: ".swiper1-button-prev",
  },
});

var swiper2 = new Swiper(".swiper2", {
  autoHeight: true,
  slidesPerView: 1,
  loop: true,
  loopedSlides: 3,
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  spaceBetween: -100,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 800,
    modifier: 1,
    slideShadows: false,
  },
  navigation: {
    nextEl: ".swiper2-button-next",
    prevEl: ".swiper2-button-prev",
  },
});
