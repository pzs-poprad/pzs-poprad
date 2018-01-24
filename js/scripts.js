"use strict";
jQuery(window).load(function() {
  jQuery("#container1").twentytwenty();
});

(function ($) {
  "use strict";
  jQuery(window).load(function () {

    $(function() {
      var owl = $('.portfolio-carousel').owlCarousel({
        loop	:true,
        margin	:0,
        items	:4,
        dots    :false,
        nav		:false,
        center	:true,
        responsive:{
          0:{
            items: 1
          },
          767:{
            items: 2
          },
          992:{
            items: 3
          },
          1200:{
            items: 4
          }
        }
      })

      /* animate filter */
      var owlAnimateFilter = function(even) {
        $(this)
          .addClass('__loading')
          .delay(70 * $(this).parent().index())
          .queue(function() {
            $(this).dequeue().removeClass('__loading')
          })
      }

      $('.btn-filter-wrap').on('click', '.btn-filter', function(e) {
        var filter_data = $(this).data('filter');

        /* return if current */
        if($(this).hasClass('btn-active')) return;

        /* active current */
        $(this).addClass('btn-active').siblings().removeClass('btn-active');

        /* Filter */
        owl.owlFilter(filter_data, function(_owl) {
          $(_owl).find('.item').each(owlAnimateFilter);
        });
      })
    })

  });

})(jQuery);

jQuery(document).ready(function($) {
  "use strict";
//Set Testimonials script
  var slider = jQuery(this).find('.fw-testimonials-list');
  if (slider.length) {
    var slider_id = slider.attr('id');
    $("#" + slider_id).carouFredSel({
      swipe: {
        onTouch: true
      },
      next: false,
      prev: false,
      pagination: "#" + slider_id + "-controls",
      responsive: true,
      infinite: false,
      items: 1,
      auto: false,
      scroll: {
        items: 1,
        fx: "crossfade",
        easing: "linear",
        duration: 300
      }
    });
  }
});
