(function($) {
  'use strict';

  // Preloading
  $(window).load(function() {
    // Wait 5s to fade out page loader
    setTimeout(function() {
      $('#loader-name').addClass('animated fadeOutLeft')
      $('#loader-job').addClass('animated fadeOutRight')
      $('#page-loader')
        .addClass('animated fadeOut')
        .fadeOut(400, function() {
          return;
        });
    }, 5000);
  });

})(jQuery);
