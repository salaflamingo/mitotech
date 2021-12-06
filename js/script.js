jQuery(function ($) {

  // アコーディオン
  $('.js-accordion-title').on('click', function () {
    /*クリックでコンテンツを開閉*/
    $(this).next().slideToggle(200);
    /*矢印の向きを変更*/
    $(this).toggleClass('open', 200);
  });

  $(window).scroll(function () {
    $(".effect-fade").each(function () {
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight) {
        $(this).addClass("effect-scroll");
      }
    });
  });
  jQuery(window).scroll();

  $('.burger-btn').on('click', function () {
    $('.btn-line').toggleClass('open');
    $('.header-nav').fadeToggle(500);
    $('.burger-musk').fadeToggle(300);
    $('body').toggleClass('noscroll');
  });

  $('.nav-item a[href]').on('click', function () {
    if (window.innerWidth <= 768) {
      $('.burger-btn').click();
    }
  });

  // スライダー
  $('.slider').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    fade: true,
    cssEase: 'linear'
  });

  // TOPページへ戻るボタン
  var pagetop = $('#page_top');
  pagetop.hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      pagetop.fadeIn();
    } else {
      pagetop.fadeOut();
    }
  });
  pagetop.click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 500);
    return false;
  });

});