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

  // Main plugin
  $(document).ready(function() {
    // Initit Perfect scroll
    $('.card').perfectScrollbar();


    // Change contents
    function resetCardBlock() {
      $('.card-block-home').removeClass('slide-left');
      $('.card-block-alter').removeClass('slide-right');
    }

    $('a[href="#home"]').on('click', function() {
      resetCardBlock();
    });

    $('a[href="#resume"]').on('click', function() {
      $('.card-block-home').addClass('slide-left');
      $('.card-block-alter').addClass('slide-right');
    });
  });

})(jQuery);
