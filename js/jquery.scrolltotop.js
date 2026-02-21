(function ($) {
  $.fn.scrollToTop = function (options) {
    //Default setting to plugin, if user not applied anything
    var settings = $.extend(
      {
        position: "fixed",
        height: "50px",
        width: "50px",
        bottom: "50px",
        right: "50px",
        bgColor: "#000",
        bgImage: "",
        color: "#fff",
        text: "↑ TOP",
        fontSize: "16px",
        scrollThreshold: 100, // Show button after scrolling 100px
        duration: 300, // Animation duration in milliseconds
      },
      options,
    );

    var $element = $(this);
    var $button =
      $element.length && $element.is(":not(document, window)")
        ? $element
        : $('<div class="scrollToTop"></div>').appendTo("body");

    // Apply positioning styles
    $button.css({
      position: settings.position,
      height: settings.height,
      width: settings.width,
      bottom: settings.bottom,
      right: settings.right,
      display: "none",
      cursor: "pointer",
      "z-index": "999",
      "border-radius": "5px",
      "box-shadow": "0 4px 8px rgba(0, 0, 0, 0.3)",
      transition: "all 0.3s ease-in-out",
      "text-align": "center",
      "line-height": settings.height,
      "font-weight": "bold",
      "font-size": settings.fontSize,
      color: settings.color,
      border: "none",
      outline: "none",
    });

    // Apply background color or image
    if (settings.bgImage) {
      $button.css({
        "background-image": "url(" + settings.bgImage + ")",
        "background-size": "100%",
        "background-repeat": "no-repeat",
      });
    } else {
      $button.css("background-color", settings.bgColor);
    }

    // Set button text if no background image
    if (!settings.bgImage) {
      $button.text(settings.text);
    }

    // Show/hide button based on scroll position
    $(window).on("scroll", function () {
      if ($(window).scrollTop() > settings.scrollThreshold) {
        $button.fadeIn(settings.duration);
      } else {
        $button.fadeOut(settings.duration);
      }
    });

    // Add hover effects
    $button.on("mouseenter", function () {
      $(this).css({
        transform: "translateY(-3px)",
        "box-shadow": "0 6px 12px rgba(0, 0, 0, 0.4)",
      });
    });

    $button.on("mouseleave", function () {
      $(this).css({
        transform: "translateY(0)",
        "box-shadow": "0 4px 8px rgba(0, 0, 0, 0.3)",
      });
    });

    // Add click functionality to scroll to top
    $button.on("click", function () {
      $("html, body").animate({ scrollTop: 0 }, settings.duration);
    });

    return $button;
  };
})(jQuery);
