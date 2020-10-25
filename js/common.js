$(function () {
  $('.wrapper__menu-btn').on('click', function () {
    $('.wrapper__menu').toggleClass('active');
    $('.wrapper__modal').toggleClass('active');
    $(this).toggleClass('active');
    $('.btn-item-top').toggleClass('active');
    $('.btn-item-mid').toggleClass('active');
    $('.btn-item-bot').toggleClass('active');
    $('body').toggleClass('active');
  });

  function fixMenu() {
    if (window.innerWidth > 1024) {
      $('.wrapper__menu').removeClass('active');
      $('.wrapper__modal').removeClass('active');
      $('.wrapper__menu-btn').removeClass('active');
      $('.btn-item-top').removeClass('active');
      $('.btn-item-mid').removeClass('active');
      $('.btn-item-bot').removeClass('active');
      $('body').removeClass('active');
    }
  }

  $(window).on('resize', fixMenu);
  $(window).on('load', fixMenu);

  $('.wrapper__modal').on('click', function () {
    $('.wrapper__menu').removeClass('active');
    $('.wrapper__modal').removeClass('active');
    $('.wrapper__menu-btn').removeClass('active');
    $('.btn-item-top').removeClass('active');
    $('.btn-item-mid').removeClass('active');
    $('.btn-item-bot').removeClass('active');
    $('body').removeClass('active');
  });

  function checkMenu() {
    if ($(window).scrollTop() > ($('.header__top').height() * 2) / 2) {
      $('.header__top').addClass('active');
      $('.wrapper__menu-btn').addClass('show');
      $('.about').addClass('active');
    } else {
      $('.header__top').removeClass('active');
      $('.wrapper__menu-btn').removeClass('show');
      $('.about').removeClass('active');
    }
  }

  $(window).on('scroll', checkMenu);
  $(window).on('load', checkMenu);
  $(window).on('resize', checkMenu);

  $('.header__scroll-btn').on('click', function () {
    $('html:not(:animated), body:not(:animated)').animate({
      scrollTop: $(this).offset().top
    }, {
      duration: 1000
    });
  });

  $('.header__menu-link, .wrapper__menu-link').on('click', function () {
    $('.header__menu-link, .wrapper__menu-link').removeClass('active');
    $(this).addClass('active');

    var hash = $(this).attr('href');
    var target = $(hash);

    $('html:not(:animated), body:not(:animated)').animate({
      scrollTop: target.offset().top - $('.header__top').height()
    }, {
      duration: 1000
    });
  });

  function activeMenu() {
    var hash = location.hash;
    var target = $('.header__menu-link[href="' + hash + '"], .wrapper__menu-link[href="' + hash + '"]');
    $('.header__menu-link, .wrapper__menu-link').removeClass('active');
    target.addClass('active');
  }

  $(window).on('load', activeMenu);
  $(window).on('resize', activeMenu);

  $('.wrapper__menu-link').on('click', function () {
    $('.wrapper__menu').removeClass('active');
    $('.wrapper__modal').removeClass('active');
    $('.wrapper__menu-btn').removeClass('active');
    $('.btn-item-top').removeClass('active');
    $('.btn-item-mid').removeClass('active');
    $('.btn-item-bot').removeClass('active');
    $('body').removeClass('active');
  });

  $(window).on('scroll resize load', function() {
    $('.skills__item-bar-inner').each(function() {
      if ($(this).hasClass('active')) {
        $(this).css({
          'width': $(this).attr('data-progress') + '%'
        });
      }
    });
  });

  var show = true;
  $(window).on('scroll load resize', function () {
    if (!show) return;
    if ($(window).scrollTop() + $('.skills').height() >= $('.skills').offset().top) {
      $('.count').each(function () {
        $(this).prop('Counter', 0).animate({
          Counter: $(this).text()
        }, {
          duration: 2000,
          easing: 'swing',
          step: function (now) {
            $(this).text(Math.ceil(now));
          }
        });
      });
      $('.skills__item-bar-inner').addClass('active');
      show = false;
    }
  });

  /* Popup */

  $('.header__btn').magnificPopup({
    type: 'inline',
    midClick: true
  });
});

window.addEventListener('load', function () {
  AOS.init({
    disable: false,
    startEvent: 'DOMContentLoaded',
    initClassName: 'aos-init',
    animatedClassName: 'aos-animate',
    useClassNames: false,
    disableMutationObserver: false,
    debounceDelay: 50,
    throttleDelay: 99,
    offset: 200,
    delay: 0,
    duration: 1000,
    easing: 'ease',
    once: true,
    mirror: false,
    anchorPlacement: 'top-bottom'
  });
});