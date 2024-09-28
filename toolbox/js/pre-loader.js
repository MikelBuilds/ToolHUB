(function ($) {
  "use strict";

  var cites = [];
  cites[0] = "We design TOOLHUB for TECHIES OUT THERE!";
  cites[1] = "Learning becomes more effective when the right context is provided.";
  cites[2] = "With Docy, you can easily create comprehensive documentation for any product.";
  cites[3] = "An advanced visual search system enhanced with Ajax for faster results.";
  var cite = cites[Math.floor(Math.random() * cites.length)];
  $("#preloader p").text(cite);
  $("#preloader").addClass("loading");

  $(window).on("load", function () {
    setTimeout(function () {
      $("#preloader").fadeOut(500, function () {
        $("#preloader").removeClass("loading");
      });
    }, 500);
  });
})(jQuery);

