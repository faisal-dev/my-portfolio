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

    // Change card contents

    function slideCard(curAnchor, anchor) {

      if(anchor ==='#home') {
        $('.card-left').removeClass('slide-left');
        $('.card-right').removeClass('slide-right');
        return;
      }

      $('.slide-right').removeClass('slide-right');
      $('#home').addClass('slide-left')
      $(anchor).addClass('slide-right');
    }

    $('a').on('click', function(e) {
      e.preventDefault();

      var curAnchor = $('.actived');
      var anchor = $(this).attr('href');
      curAnchor.removeClass('actived');
      $(this).parent().addClass('actived');
      slideCard(curAnchor, anchor);
    });
  });

})(jQuery);
