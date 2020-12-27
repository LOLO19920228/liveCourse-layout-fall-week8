$(document).ready(() => {
  // console.log('Hello Bootstrap4');
  $('.moreInfoBtn').click(function () {
    $('html,body').animate({ scrollTop: $('#popularPetSitters').offset().top-64}, 800);
});
});
var swiper = new Swiper('.swiper-container', {
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});