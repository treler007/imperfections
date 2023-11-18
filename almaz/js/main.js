$(function(){
$('.banner-section__slider').slick({
    prevArrow:'<buttom class="banner-section__slider-btn banner-section__slider-btnprev"><img src="img/Group 45.svg"></buttom>',
    nextArrow:'<buttom class="banner-section__slider-btn banner-section__slider-btnnext"><img src="img/Group 40.svg"></buttom>',
    
    
});
});
//(function() {
//    'use strict';
//    var btnScrollDown = document.querySelector('.top_block_scrol');
//    function scrollDown() {
//      var windowCoords = document.documentElement.clientHeight;
//      (function scroll() {
//        if (window.pageYOffset < windowCoords) {
//          window.scrollBy(0, 6);
//          setTimeout(scroll, 4);
//        }
//        if (window.pageYOffset > windowCoords) {
//          window.scrollTo(0, windowCoords);
//        }
//      })();
//    }
//    btnScrollDown.addEventListener('click', scrollDown);
//  })();
$('[href^="#"]').on('click', function(){
    let href = $(this).attr('href'), elem = $(document).find(href);
    if(elem.length > 0) {
      let posY = elem.eq(0).offset().top;
      $('html, body').animate({
        scrollTop: posY
      }, 1000);
    }
    return false;
  });