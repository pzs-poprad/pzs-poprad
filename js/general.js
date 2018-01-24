"use strict";
jQuery(document).ready(function($) {
  var $ = jQuery;
  var screenRes = $(window).width(),
    screenHeight = $(window).height(),
    html = $('html'),
    iScrollPos = 0;


  $("img.attachment-post-thumbnail").load(function() {
    var src = $(this).data('srcset');

    /*console.log(src);
     console.log($(this).offsetWidth);*/
  });

  $(document).on('lazybeforesizes', function(e){
    //use width of parent node instead of the image width itself
    var parent_width = $(e.target).parents('.fw-block-image-parent').innerWidth() || e.detail.width;
    var srcset = $(e.target).data('srcset').split(', ');
    var shown_width = '';

    //get all available widths
    var widths = []; var img_width = 0;
    for(var width in srcset){
      if(srcset[width].indexOf(' ') !== -1){
        var img_src = srcset[width].substr(srcset[width].indexOf(' ') + 1);
        widths.push(+img_src.substring(0, img_src.length - 1));
      }
    }

    //get image width if exist
    if(widths.length !== 0)
    {
      //check if in array exists value bigger than parent width
      var is_width_bigger = false;
      for(var is_width in widths){
        if(widths[is_width] > parent_width){
          is_width_bigger = true;
        }
      }

      if(!is_width_bigger){
        if(widths.length >= 2) shown_width = Math.max.apply( Math, widths );
        else shown_width = widths.join();
      }
    }

    //set parent width the image selected width
    if(shown_width.length !== 0)
      $(e.target).parents('.fw-block-image-parent').width(shown_width);
  });

  //bootstrap animated progressbar
  if (jQuery().appear) {
    if (jQuery().progressbar) {
      jQuery('.progress .progress-bar').appear();
      jQuery('.progress .progress-bar').filter(':appeared').each(function(index){
        jQuery(this).progressbar({
          transition_delay: 300
        });
      });
      jQuery('body').on('appear', '.progress .progress-bar', function(e, $affected ) {
        jQuery($affected).each(function(index){
          jQuery(this).progressbar({
            transition_delay: 300
          });
        });
      });
      //animate progress bar inside bootstrap tab
      jQuery('a[data-toggle="tab"]').on('shown.bs.tab', function(e) {
        jQuery(jQuery(e.target).attr('href')).find('.progress .progress-bar').progressbar({
          transition_delay: 300
        });
      });
    }
  }

  // IE<7 Warning
  if (html.hasClass("ie8")) {
    $("body").empty().html('Please, Update your Browser to at least IE9').css({
      'text-align': 'center',
      'font-size': '40px',
      'color': 'red',
      'margin-top': '20px'
    });
  }
  // Disable Empty Links
  $("[href='#']").click(function(event){
    event.preventDefault();
  });

  // Remove outline in IE
  $("a, input, textarea").attr("hideFocus", "true").css("outline", "none");


  if($('select[class*="select-"]').length > 0){
    $('select[class*="select-"]').selectize({
      create: true,
      sortField: 'text'
    });
  }
  $('select[name="archive-dropdown"], select[name="cat"], .woocommerce-ordering .orderby').selectize({
    create: true,
    allowEmptyOption: true
  });

  if ($(".input-styled, #ship-to-different-address, .inputs").length) {
    $(".input-styled input, #ship-to-different-address input, .inputs input[type='radio'], .inputs input[type='checkbox']").customInput();
  }

  jQuery('.carousel_filters').find('a').on('click', function(){
    setTimeout(function(){
      jQuery('.filterable-carousel').find("a[data-gal^='prettyPhoto']").prettyPhoto({
        hook: 'data-gal',
        theme: 'facebook' /* light_rounded / dark_rounded / light_square / dark_square / facebook / pp_default*/
      });
    }, 100);
  });

  // prettyPhoto lightbox, check if <a> has atrr data-rel and hide for Mobiles
  if($('a').is('[data-rel]') && screenRes > 600) {
    $('a[data-rel]').each(function() {
      $(this).attr('rel', $(this).data('rel'));
    });
    $("a[rel^='prettyPhoto']").prettyPhoto({
      social_tools:false,
      deeplinking: false,
      theme: 'dark_square',
      horizontal_padding: 60,
      show_title: false,
      overlay_gallery: false,
      changepicturecallback: function() {
        var $holder = jQuery('.pp_nav .currentTextHolder'),
          $closeButton = jQuery('.pp_close'),
          splitted = $holder.text().split('/');
        $closeButton.addClass('fa fa-times');

        $holder.html(splitted.join('<span class="pp_text_devider">/</span>'));
        $closeButton.remove();
        $('.pp_pic_holder').prepend($closeButton);

        $closeButton.click(function(){
          $('.pp_overlay, .pp_pic_holder').fadeOut(300, function(){
            $(this).remove();
          });
          return false
        })
      }
    });
  }
  // masonry grid view
  if ($(".postlist").hasClass("postlist-grid")) {

    var $gridcontainer = $('.postlist-grid').masonry();
    $gridcontainer.masonry({
      itemSelector : '.postlist-col'
    });
  };
  if ($(".fw-portfolio").length > 0) {
    var $gridcontainer = $('.fw-portfolio-list').masonry();
    $gridcontainer.masonry({
      itemSelector : 'li'
    });
  }

  //Iframe Responsive
  function adjustIframes()
  {
    $('iframe').each(function(){
      var
        $this       = $(this),
        proportion  = $this.data( 'proportion' ),
        w           = $this.attr('width'),
        actual_w    = $this.width();

      if ( ! proportion )
      {
        proportion = $this.attr('height') / w;
        $this.data( 'proportion', proportion );
      }

      if ( actual_w != w )
      {
        $this.css( 'height', Math.round( actual_w * proportion ) + 'px' );
      }
    });
  }
  $(window).on('resize load',adjustIframes);

  // Detect Click in Iframe
  function detectIframeClick() {
    var overiFrame = -1;
    jQuery('.myCarousel').find('iframe').hover( function() {
      overiFrame = 1;
    }, function() {
      overiFrame = -1
    });
    $(window).on('blur', function() {
      if( overiFrame != -1 ) {
        jQuery('.myCarousel').carousel('pause');
      }
    });
    jQuery('.carousel-control, .carousel-indicators li').click(function() {
      jQuery('.myCarousel').carousel('cycle');
    });
  }
  detectIframeClick();


  // Smooth Scroling of ID anchors
  function filterPath(string) {
    return string
      .replace(/^\//,'')
      .replace(/(index|default).[a-zA-Z]{3,4}$/,'')
      .replace(/\/$/,'');
  }
  var locationPath = filterPath(location.pathname);
  var scrollElem = scrollableElement('html', 'body');

  function anchorFn(argument) {
    $('.anchor a[href*="#"], a[href*="#"].anchor').each(function () {
      $(this).click(function (event) {
        var thisPath = filterPath(this.pathname) || locationPath;
        if (locationPath == thisPath
          && (location.hostname == this.hostname || !this.hostname)
          && this.hash.replace(/#/, '')) {
          var $target = $(this.hash), target = this.hash;
          if (target && $target.length != 0) {
            var targetOffset = $target.offset().top;
            event.preventDefault();
            $(scrollElem).animate({scrollTop: targetOffset}, 400, function () {
              location.hash = target;
            });
          }
        }
      });
    });
  }
  anchorFn();

  // use the first element that is "scrollable"
  function scrollableElement(els) {
    for (var i = 0, argLength = arguments.length; i <argLength; i++) {
      var el = arguments[i],
        $scrollElement = $(el);
      if ($scrollElement.scrollTop()> 0) {
        return el;
      } else {
        $scrollElement.scrollTop(1);
        var isScrollable = $scrollElement.scrollTop()> 0;
        $scrollElement.scrollTop(0);
        if (isScrollable) {
          return el;
        }
      }
    }
    return [];
  };

  // Responsive Menu (Mobile Menu)
  var Mobile_Menu = function () {
    if( jQuery('.mmenu-link').length > 0 ) return;

    var $menu = jQuery(".fw-site-navigation#fw-menu-primary").not('.fw-header.fw-sticky-menu .fw-site-navigation#fw-menu-primary').clone();

    $menu.attr("id", "mobile-menu").removeClass().appendTo(".fw-header .fw-header-main .fw-nav-wrap .fw-container");
    jQuery('<a href="#mobile-menu" class="mmenu-link"><i class="fa fa-navicon"></i></a>').prependTo(".fw-header .fw-header-main .fw-nav-wrap .fw-container");

    // Create menu
    $menu.mmenu({
      counters: true,
      extensions: [ "theme-light", "effect-listitems-slide" ],
      navbar: {
        add: true
      },
      offCanvas: {
        position: "left"
      }
    }, {
      classNames: {
        selected: "current-menu-item"
      }
    });
    anchorFn();
  };
  if (screenRes < 1199) {
    Mobile_Menu();
  }
  $(window).on('resize', function(){
    var screenRes = $(window).width();
    if(screenRes < 1199){
      Mobile_Menu();
    }
  });

  // Sticky Menu
  if(jQuery('body.fw-header-sticky').length > 0) {
    jQuery('.fw-header').clone().addClass('fw-sticky-menu').prependTo('div.site');

    $(window).on('scroll', function () {
      if ($(window).scrollTop() > 400) {
        // Scroll Down
        $('.fw-header.fw-sticky-menu').addClass('fw-sticky-menu-open');
      } else {
        // Scroll Up
        $('.fw-header.fw-sticky-menu').removeClass('fw-sticky-menu-open');
      }
    });
  }

  // DropDown
  if(screenRes > 1199){
    jQuery(".fw-nav-menu li.menu-item-has-children").not("li.menu-item-has-mega-menu").hover(function () {
      var $this = $(this);
      if ($this.find('.sub-menu')) {
        var dropdown = $this.children('ul'),
          dropdownWidth = dropdown.outerWidth(),
          dropdownOffset = parseInt(dropdown.offset().left, 10);
        if (dropdownWidth + dropdownOffset > screenRes) {
          dropdown.addClass('left');
        }
        else {
          dropdown.removeClass('left');
        }
      }
    });
  }

  // Search Icon Button
  var miniSearch = function () {
    var menu_height = jQuery('.fw-header-main').not('.fw-header.fw-sticky-menu .fw-header-main').outerHeight(),
      topBar_height = jQuery('.fw-top-bar').outerHeight(),
      page_width = jQuery('#page').width(),
      container_menu_width = jQuery('.fw-header .fw-container').width();

    var wrap_search_form = jQuery('.fw-wrap-search-form'),
      search_input_height = menu_height / 2;

    // Append the close button for search form
    jQuery('.fw-search-form').append('<a href="#" class="fw-close-search-form"><i class="fa fa-close"></i></a>');

    // Set the style for search form
    wrap_search_form.css({
      top: 0,
      width: page_width,
      height: menu_height,
      display: 'none'
    });

    // If topbar is enable
    if (jQuery('.fw-top-bar-on').length > 0) {
      wrap_search_form.css({
        top: topBar_height
      });
    }

    // Set width for input
    wrap_search_form.children('.fw-search-form').css({
      width: container_menu_width,
      marginTop: -(search_input_height / 2)
    });

    wrap_search_form.children().children('.fw-input-search').css({
      height: search_input_height,
      lineHeight: search_input_height + 'px'
    });

    // If sticky header is enable
    if(jQuery('.fw-header-sticky').length > 0){
      var sticky_menu_height = jQuery('.fw-header.fw-sticky-menu .fw-header-main').outerHeight();

      var sticky_wrap_search_form = jQuery('.fw-header.fw-sticky-menu .fw-wrap-search-form'),
        sticky_search_input_height = sticky_menu_height / 2;

      // Set height for search form
      sticky_wrap_search_form.css({
        height: sticky_menu_height
      });

      // Set position for search form
      sticky_wrap_search_form.children('.fw-search-form').css({
        marginTop: -(sticky_search_input_height / 2)
      });

      // Set height for input from search form
      sticky_wrap_search_form.children().children('.fw-input-search').css({
        height: sticky_search_input_height,
        lineHeight: sticky_search_input_height + 'px'
      });
    }

    // Close the search form
    jQuery('.fw-close-search-form').click(function () {
      event.preventDefault();
      jQuery('.fw-wrap-search-form').slideUp(300, function () {
        wrap_search_form.removeClass('opened');
      });
    });
    jQuery('.fw-search-icon').click(function () {
      event.preventDefault();
      jQuery('.fw-wrap-search-form').slideDown(300, function () {
        wrap_search_form.addClass('opened');
      });

      if(jQuery('.search-in-menu.fw-header-sticky') && jQuery(window).scrollTop() > 400){
        jQuery('.fw-sticky-menu .fw-input-search').on('click').focus();
      }
      else{
        jQuery('.fw-input-search').on('click').focus();
      }
    });
    // Close the search form if click outside
    jQuery(document).mouseup(function (e) {
      var container = jQuery('.fw-wrap-search-form.fw-form-search-full');

      if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
      {
        jQuery('.fw-wrap-search-form').slideUp(300, function () {
          wrap_search_form.removeClass('opened');
        });
      }
    });
  };

  if (jQuery('.fw-mini-search').length > 0) {
    miniSearch();

    jQuery(window).on('resize', function(){
      miniSearch();
    });
  }

  // Toggles
  $('.toggle-link').click(function(){
    $(this).parents('.toggle').removeClass('collapsed');

    if(!$(this).hasClass('collapsed')) {
      $(this).parents('.toggle').addClass('collapsed');
    }
  });

  $(".opened").find(".panel-collapse").addClass("in");
  $(".panel-toggle").click (function() {
    $(this).closest(".toggleitem").toggleClass("opened");
  });

  // pricing
  function tablePriceInit() {
    $(".fw-price-table").each(function () {
      var this_table_width = $(this).width();
      var this_table_cols = $(this).children().size();
      var this_col_width = (this_table_width / this_table_cols);

      $(this).children(".fw-price-col").css('width', this_col_width-1);

      var table_col_height = 0;
      var this_col_row = $(this).children().find(".fw-price-row");
      this_col_row.each(function() {
        table_col_height = table_col_height > $(this).height() ? table_col_height : $(this).height();
      });
      this_col_row.each(function() {
        $(this).height(table_col_height);
      });
    });
  }

  if($('.fw-price-table').length) {
    tablePriceInit();

    $(window).on('resize', function(){
      tablePriceInit();
    });
  }

  // Call align middle function
  var allOverlapClass = $('.fw-content-overlay-sm, .fw-content-overlay-md, .fw-content-overlay-lg, .fw-content-overlay-custom');
  if ( $('.fw-absolute-header').length && $('.fw-main-row-custom.fw-main-row-top.fw-content-vertical-align-middle').is(allOverlapClass) && screenRes > 767) {
    sectionTopOverlay();
    $(window).resize(function(){
      sectionTopOverlay();
    });
  }
  else if( ($('.fw-absolute-header').length > 0) && ($('.fw-main-row-custom.fw-main-row-top.fw-content-vertical-align-middle').length > 0 && screenRes > 767) ){
    sectionTopAlignHeaderIsAbsolut();
    $(window).resize(function(){
      sectionTopAlignHeaderIsAbsolut();
    });
  }

  // init Isotope
  jQuery('.isotope_container').each(function(index) {
    var $container = jQuery(this);
    var layoutMode = ($container.hasClass('masonry-layout')) ? 'masonry' : 'fitRows';
    $container.isotope({
      percentPosition: true,
      layoutMode: layoutMode,
      masonry: {}
    });

    var $filters = jQuery(this).attr('data-filters') ? jQuery(jQuery(this).attr('data-filters')) : $container.prev().find('.filters');
    // bind filter click
    if ($filters.length) {
      $filters.on( 'click', 'a', function( e ) {
        e.preventDefault();
        var filterValue = jQuery( this ).attr('data-filter');
        $container.isotope({ filter: filterValue });
        jQuery(this).siblings().removeClass('selected active');
        jQuery(this).addClass('selected active');
      });
    }
  });

  // heighlights hover
  jQuery('.highlight-item').on('mouseover', function(){
    jQuery('.highlight-item').removeClass('hovered');
  })
  jQuery('.highlight-item').on('mouseout', function(){
    jQuery('.default-hovered').addClass('hovered');
  })

  // Animate Things
  jQuery.fn.isOnScreen = function(){
    var win = $(window);
    var viewport = {
      top : win.scrollTop(),
      left : win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();

    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();
    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
  };


  jQuery(" .fw-animated-element").each(function () {
    var animationElement = $(this),
      delayAnimation = parseInt(animationElement.data('animation-delay')) / 1000,
      typeAnimation = animationElement.data('animation-type');

    if(animationElement.isOnScreen()) {
      if (!animationElement.hasClass("animated")) {
        animationElement.addClass("animated").addClass(typeAnimation).trigger('animateIn');
      }
      animationElement.css({
        '-webkit-animation-delay': delayAnimation + 's',
        'animation-delay': delayAnimation + 's'
      });
    }
    $(window).scroll(function () {
      var top = animationElement.offset().top,
        bottom = animationElement.outerHeight() + top,
        scrollTop = $(this).scrollTop(),
        top = top - screenHeight;

      if ((scrollTop > top) && (scrollTop < bottom)) {
        if (!animationElement.hasClass("animated")) {
          animationElement.addClass("animated").addClass(typeAnimation).trigger('animateIn');
        }
        animationElement.css({
          '-webkit-animation-delay': delayAnimation + 's',
          'animation-delay': delayAnimation + 's'
        });
        // Disable animation fill mode the reason that creates problems,
        // on hover animation some shortcodes and video full screen in Google Chrome
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        jQuery('.animated').one(animationEnd, function() {
          $(this).addClass('fill-mode-none');
        });
      }
    });
  });

  /////////
  //Woocommerce shop///
  /////////
  jQuery('#toggle_shop_view').on('click', function( e ) {
    e.preventDefault();
    jQuery(this).toggleClass('list-view');
    jQuery('ul.products').toggleClass('list-view');
  });

  (function($) {
    $.fn.hasScrollBar = function() {
      return this.get(0).scrollHeight > this.height();
    }
  })(jQuery);
});

jQuery(document).ready(function($) {
//flexslider
  if (jQuery().flexslider) {
    var $introSlider = jQuery(".intro_section .flexslider");
    $introSlider.each(function (index) {
      var $currentSlider = jQuery(this);
      $currentSlider.flexslider({
        animation: "fade",
        pauseOnHover: true,
        useCSS: true,
        controlNav: false,
        directionNav: true,
        prevText: "prev",
        nextText: "next",
        smoothHeight: false,
        slideshowSpeed: 10000,
        animationSpeed: 600,
        start: function (slider) {
          slider.find('.slide_description').children().css({'visibility': 'hidden'});
          slider.find('.flex-active-slide .slide_description').children().each(function (index) {
            var self = jQuery(this);
            var animationClass = !self.data('animation') ? 'fadeInRight' : self.data('animation');
            setTimeout(function () {
              self.addClass("animated " + animationClass);
            }, index * 200);
          });
        },
        after: function (slider) {
          slider.find('.flex-active-slide .slide_description').children().each(function (index) {
            var self = jQuery(this);
            var animationClass = !self.data('animation') ? 'fadeInRight' : self.data('animation');
            setTimeout(function () {
              self.addClass("animated " + animationClass);
            }, index * 200);
          });
        },
        end: function (slider) {
          slider.find('.slide_description').children().each(function () {
            var self = jQuery(this);
            var animationClass = !self.data('animation') ? 'fadeInRight' : self.data('animation');
            self.removeClass('animated ' + animationClass).css({'visibility': 'hidden'});
            // jQuery(this).attr('class', '');
          });
        },

      })
      //wrapping nav with container
        .find('.flex-control-nav')
        .wrap('<div class="container nav-container"/>')
    }); //intro_section flex slider

    jQuery(".flexslider").each(function (index) {
      var $currentSlider = jQuery(this);
      //exit if intro slider already activated
      if ($currentSlider.find('.flex-active-slide').length) {
        return;
      }
      $currentSlider.flexslider({
        animation: "fade",
        useCSS: true,
        controlNav: true,
        directionNav: true,
        prevText: "prev",
        nextText: "next",
        smoothHeight: false,
        slideshowSpeed: 5000,
        animationSpeed: 800,
      })
    });

    //video images preview
    jQuery('.embed-placeholder').each(function () {
      jQuery(this).on('click', function (e) {
        e.preventDefault();
        jQuery(this).replaceWith('<iframe class="embed-responsive-item" src="' + jQuery(this).attr('href') + '?rel=0&autoplay=1' + '"></iframe>');
      });
    });
  }
});


/**
 * Forms
 */
jQuery(function($)
{
  "use strict";
  var formErrorMessageClass = 'form-error',
    formErrorHideEventNamespace = '.form-error-hide',
    errorTemplate = '<p class="'+ formErrorMessageClass +'" style="color: red;">{message}</p>'; // todo: customize this (add class="" instead of style="")

  function showFormError($form, inputName, message) {
    var inputSelector = '[name="'+ inputName +'"]',
      $input = $form.find(inputSelector).last(),
      $message = $(errorTemplate.replace('{message}', message));

    if ($input.length) {
      $input.parent().after($message);

      $form.one('focusout'+ formErrorHideEventNamespace, inputSelector, function(){
        $message.slideUp(function(){ $(this).remove(); });
      });
    } else {
      // if input not found, show message in form
      $form.prepend($message);
    }
  }

  function themeGenerateFlashMessagesHtml(types) {
    var html = [], typeHtml = [];

    $.each(types, function(type, messages){
      typeHtml = [];

      $.each(messages, function(messageId, messageData){
        /*typeHtml.push(messageData.message);*/
        typeHtml.push(messageData);
      });

      if (typeHtml.length) {
        html.push(
          '<ul class="flash-messages-'+ type +'">'+
          '    <li>'+ typeHtml.join('</li><li>') +'</li>'+
          '</ul>'
        );
      }
    });

    if (html.length) {
      return html.join('');
    } else {
      return '<p>Success</p>';
    }
  }

  /**
   * Display FW_Form errors
   */
  do {
    if (typeof _fw_form_invalid == 'undefined') {
      break;
    }

    var $form = $('form.fw_form_'+ _fw_form_invalid.id).first();

    if (!$form.length) {
      console.error('Form not found on the page');
      break;
    }

    $.each(_fw_form_invalid.errors, function(inputName, message){
      showFormError($form, inputName, message);
    });
  } while(false);

  /**
   * Ajax submit
   */
  {
    $(document.body).on('submit', 'form[data-fw-ext-forms-type="contact-forms"]', function(e){
      e.preventDefault();

      var $form = $(this);

      // todo: show loading

      jQuery.ajax({
        type: "POST",
        url: FwPhpVars.ajax_url,
        data: $(this).serialize(),
        dataType: 'json'
      }).done(function(r){
        if (r.success) {
          // prevent multiple submit
          $form.on('submit', function(e){ e.preventDefault(); e.stopPropagation(); });

          $form.html(
            themeGenerateFlashMessagesHtml(r.data.flash_messages)
          );
        } else {
          // hide all current error messages
          $form.off(formErrorHideEventNamespace)
            .find('.'+ formErrorMessageClass).remove();

          // add new error messages
          $.each(r.data.errors, function(inputName, message) {
            showFormError($form, inputName, message);
          });
        }
      }).fail(function(){
        // todo: show server error
      });
    });
  }
});
$(window).load(function () {
  $('.owl-gallery').owlCarousel({
    rtl: false,
    margin: 0,
    items: 1,
    loop: true,
    dots: true,
    nav: false,
    autoHeight: true,
    responsiveClass: true,
    responsiveBaseElement: ".footer",
  });
});

// Align the content to middle section
$(window).load(function () {
  // vertical align middle
  function fnResize() {
    var screenRes = $(window).width();
    if(screenRes <= 719) {
      $('.fw-content-vertical-align-middle').addClass("fw-middle-align");
    } else {
      $('.fw-content-vertical-align-middle').each(function() {
        var $this = $(this),
          heightContainerParent = $this.find('.fw-container-fluid, .fw-container').outerHeight(),
          heightParent = $this.outerHeight();
        $this.find('[id^="column-"]').each(function () {
          var $thisColum = $(this);
          var heightColum = $thisColum.outerHeight(),
            heightContainer = $this.find('.fw-container-fluid, .fw-container').height();
          $thisColum.css({
            marginTop: heightContainer/2 - heightColum/2
          })
        });
        $this.css({
          paddingTop: heightParent/2 - heightContainerParent/2
        }).addClass("fw-middle-align");
      });
    }
  }
  fnResize();
  $(window).resize(fnResize);
});
