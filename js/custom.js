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

  // FORM (INPUT + BTN)
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

  $(function () {
    $("#contact-form").on("submit", function (event) {
      event.preventDefault();

      var $phoneInput = $("#phone");

      if ($phoneInput.val() && !$phoneInput[0].checkValidity()) {
        $phoneInput.addClass("is-invalid");
      } else {
        $phoneInput.removeClass("is-invalid");
      }
    });

    $("#phone").on("input", function () {
      var $phoneInput = $(this);

      if ($phoneInput.val() && !$phoneInput[0].checkValidity()) {
        $phoneInput.addClass("is-invalid");
      } else {
        $phoneInput.removeClass("is-invalid");
      }
    });
  });

  $(function () {
    $("#contact-form").on("submit", function (event) {
      event.preventDefault();

      $("#response-message")
        .fadeIn(500)
        .text("Thank you! Your message has been sent. We will contact you.");

      $("#submit-btn").html(
        '<span class="check-icon"></span> <span class="text-button">Sent</span>'
      );

      setTimeout(function () {
        $("#response-message").fadeOut(500);

        $("#submit-btn").html("Send");
      }, 15000);

      $(this).trigger("reset");
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
  // document.querySelectorAll(".btn-to").forEach((button) => {
  //   button.addEventListener("click", function () {
  //     const targetSection = document.querySelector("form");
  //     if (targetSection) {
  //       const navbarHeight = 92;
  //       const targetPosition =
  //         targetSection.getBoundingClientRect().top +
  //         window.scrollY -
  //         navbarHeight;

  //       window.scrollTo({
  //         top: targetPosition,
  //         behavior: "smooth",
  //       });
  //     }
  //   });
  // });

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
});

//  Go to page
$(function () {
  $(".navbar-nav .nav-link").on("click", function (event) {
    event.preventDefault();

    var targetPage = $(this).attr("href");

    if (targetPage !== "#") {
      window.location.href = targetPage;
    }
  });
});

// READ MORE/LESS TEXT
// $(function () {
//   $(document).ready(function () {
//     let swiper = new Swiper(".instrSwiper", {
//       slidesPerView: 1,
//       loop: true,
//       speed: 350,
//       spaceBetween: 20,
//       centeredSlides: true,
//       autoHeight: true,

//       navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//       },
//     });

//     $(".read-more").on("click", function () {
//       let $target = $(this)
//         .siblings(".read-more-wrap")
//         .find(".read-more-target");

//       $(".read-less").remove();
//       $(".read-more").show();

//       $target.stop(true).slideDown(500, "swing", () => {
//         swiper.update();
//       });

//       $(this).hide();
//       $(this).after('<span class="read-less">Read Less</span>');
//     });

//     $(document).on("click", ".read-less", function () {
//       let $target = $(this)
//         .siblings(".read-more-wrap")
//         .find(".read-more-target");

//       $target.stop(true).slideUp(500, "swing", () => {
//         swiper.update();
//       });

//       $(".read-more").show();
//       $(this).remove();
//     });
//   });
// });
$(function () {
  $(document).ready(function () {
    let swiper = new Swiper(".instrSwiper", {
      slidesPerView: 1,
      loop: true,
      speed: 350,
      spaceBetween: 20,
      centeredSlides: true,
      autoHeight: true,

      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    $(".read-more").on("click", function () {
      let $target = $(this)
        .siblings(".read-more-wrap")
        .find(".read-more-target");

      $(".read-less").remove();
      $(".read-more").show();

      $target.stop(true).slideDown(500, "swing", () => {
        swiper.update();
        $target.addClass("slide-down"); // Добавляем класс для плавного появления
      });

      $(this).hide();
      $(this).after('<span class="read-less">Read Less</span>');
    });

    $(document).on("click", ".read-less", function () {
      let $target = $(this)
        .siblings(".read-more-wrap")
        .find(".read-more-target");

      $target.stop(true).slideUp(500, "swing", () => {
        swiper.update();
        $target.removeClass("slide-down");
      });

      $(".read-more").show();
      $(this).remove();
    });
  });
});

// MODAL FORM

$(function () {
  $("#subs-form").on("submit", function (e) {
    e.preventDefault();
    $(this)[0].reset();
    $("#susbc-form").modal("hide");
    $("#susbc-form-thank").modal("show");

    $("body").addClass("modal-open");
  });

  $("#susbc-form, #susbc-form-thank").on("hidden.bs.modal", function () {
    $("body").removeClass("modal-open");
  });
});

// SWIPER

var swiper1 = new Swiper(".swiper1", {
  autoHeight: true,
  slidesPerView: 1,
  loop: true,
  speed: 600,
  centeredSlides: true,
  loopedSlides: 3,
  effect: "coverflow",
  grabCursor: true,
  spaceBetween: 0,
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
  speed: 600,
  loopedSlides: 3,
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  spaceBetween: 0,
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
