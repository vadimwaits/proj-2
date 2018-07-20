$(document).ready(function(){
  // sliders
  $(".recipe-slider").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    touchMove: false,
    prevArrow: '.recipe-slider-wr .recipe-slider-arrows .arrow-btn.left',
    nextArrow: '.recipe-slider-wr .recipe-slider-arrows .arrow-btn.right'
  });
  $(".slider-insta .slider-list").slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 6,
    variableWidth: true,
    touchMove: false,
    prevArrow: '.slider-insta .custom-controls .custom-prev',
    nextArrow: '.slider-insta .custom-controls .custom-next',
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 5,
          centerMode: true,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 3,
          centerMode: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        }
      },
    ]
  });
  $(".slider-event .slider-list").slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    variableWidth: true,
    touchMove: false,
    centerMode: true,
    prevArrow: '.slider-event .custom-controls .custom-prev',
    nextArrow: '.slider-event .custom-controls .custom-next',
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  });
  $(".slider-tips .slider-list").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    touchMove: false
  });

  // Searchbar dropdowns
  $(".dropdown-btn").on("click", function(){
    $(this).closest('.dropdown').toggleClass('active');
    $(this).closest('.dropdown').siblings().removeClass('active');
  });

  var mouse_is_inside = false;

  $('.dropdown').hover(function(){
    mouse_is_inside=true;
  }, function(){ 
    mouse_is_inside=false;
  });

  $("body").mouseup(function(){
      if(! mouse_is_inside) $('.dropdown').removeClass('active');
  });

  //popup trigger
  $('.header .log-in .login-trigger').on("click", function(){
    $('body').addClass("overflow");
    $('.popup-wr, .authorization-popup').addClass('active');
  });

  $('.popup .closer').on("click", function(){
    $('body').removeClass("overflow");
    $('.popup-wr, .popup').removeClass('active');
    $('.restore-password-popup').removeClass('msg-sent');
  });

  $('.addbook-btn').on("click", function(){
    $('.addbook-popup').fadeIn(100);
    $('body').addClass("overflow");
    $('.popup-wr, .addbook-popup').addClass('active');
  });

  $('.pass-recovery').on("click", function(){
    $('.restore-password-popup').addClass('active');
    $('.authorization-popup').removeClass('active');
  });

  $('.restore-password-popup .return-back').on("click", function(){
    $('.restore-password-popup').removeClass('active');
    $('.authorization-popup').addClass('active');
    $('.restore-password-popup').removeClass('msg-sent');
  });

  $('.restore-password-popup .btn-submit').on("click", function(){
    $('.restore-password-popup').addClass('msg-sent');
  });

  $('.recipe-pic').on("click", function(){
    $('body').addClass("overflow");
    $('.popup-wr, .recipe-popup').addClass('active');
  });

  $('.report-popup-trigger').on("click", function(){
    $('body').addClass("overflow");
    $('.popup-wr, .report-popup').addClass('active');
  });

  $('.btn-header-mobile').on("click", function(){
    $(this).toggleClass('active');
    $(".header__nav-wr").toggleClass('active');
  });

  // Search toolbar open/close 
  $(".search-toolbar .closer").on("click", function(){
    $(".search-toolbar").toggleClass('active');
  });

  // Picture tabs widget
  $('.news-preview-section__list .news-preview-section__item').on("mouseenter", function(){
    var tab_id = $(this).attr('data-tab');

    $('.news-preview-section__list .news-preview-section__item').removeClass('active');
    $('.widget-content__item').removeClass('active');

    $(this).addClass('active');
    $("#"+tab_id).addClass('active');
  })

  // Authorization popup tabs
  $('.authorization-popup .tab-control__item').on("click", function(){
    var tab_id = $(this).attr('data-tab');

    $('.authorization-popup .tab-control__item').removeClass('active');
    $('.tab-content__content-inner').removeClass('active');

    $(this).addClass('active');
    $("#"+tab_id).addClass('active');
  })

  // Textarea symbols counter
  $(".counter-textarea").keyup(function(){
    $(".counter-bl .val").text(200 - $(this).val().length);
  });

  $(".profile-textarea").keyup(function(){
    $(".profile-counter .val").text(400 - $(this).val().length);
  });


  // Recipe calculator
  $(".button").on("click", function() {

    var $button = $(this);
    var oldValue = $button.parent().find("input").val();

    if ($button.hasClass('plus')) {
      var newVal = parseFloat(oldValue) + 1;
    } else {

      if (oldValue > 0) {
        var newVal = parseFloat(oldValue) - 1;
      } else {
        newVal = 0;
      }
    }

    $button.parent().find("input").val(newVal);

  });

  // Questions list expand sections
  $(".expand-list__item .item-title").on("click", function(){
    $(this).parent('.expand-list__item').toggleClass('active');
  });

  // Toolbar search expand
  $('.search-wr').on("click", function(){
    $(this).parent('.search-transform').addClass('active');
  });

  $('.search-transform .search-close').on("click", function(e){
    $('.search-transform').removeClass('active');
    e.preventDefault();
  });

  // Clear comment textarea
  $('.comment-clear').on("click", function(){
    $('.user-comment-bl textarea').val("");
  });

  // Mail message expand text
  $('.mail-inbox__item .mail-top__title').on("click", function(e){
    $(this).closest('.mail-inbox__item').toggleClass('active');
    e.preventDefault();
  });

  // Custom select plugin
  $('.select-custom').selectize();

  // Custom datepicker
  $( "#datepicker" ).datepicker({
    language: 'ru',
  });

  $(function ($) {
      $.datepicker.regional['ru'] = {
          closeText: 'Закрыть',
          prevText: '&#x3c;Пред',
          nextText: 'След&#x3e;',
          currentText: 'Сегодня',
          monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
          'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
          monthNamesShort: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
          'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
          dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
          dayNamesShort: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'],
          dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
          weekHeader: 'Нед',
          dateFormat: 'dd.mm.yy',
          firstDay: 1,
          isRTL: false,
          showMonthAfterYear: false,
          yearSuffix: ''
      };
      $.datepicker.setDefaults($.datepicker.regional['ru']);
  });

  // Tag list expand media
  $(window).on("load resize", function(){
    if($(window).width() < 479) {
      $('.tags-section__list-title a').on("click", function(){
        $(this).parent('.tags-section__list-title').toggleClass('active');
        $(this).parent('.tags-section__list-title').next('.tags-section__tag-list').slideToggle();
        return false;
      });
    }
    else {
      $('.tags-section__list-title a').off("click");
    }
  });

  // Aside mobile expand
  $(window).on("load resize", function(){
    if($(window).width() < 767) {
      $(".page-top__user-main").on("click", function(){
        $('.page-aside__list').toggleClass('active');
      });
    }
    else {
      $('.page-top__user-main').off("click");
    }
  });

  // clear search field
  $('.search-close').on("click", function(){
    $('.search-wr input').val('');
  });


});