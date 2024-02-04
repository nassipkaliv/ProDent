const swiper = new Swiper('.sample-slider', {
  loop: true,
  slidesPerView: 1.2,
  centeredSlides: true,
  spaceBetween: 40,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const ourServiceSwiper = new Swiper('.ourservice-swiper', {
  loop: true,                         //loop
  slidesPerView: 4,                   //number of slides to show            //put acctive slide center
  spaceBetween: 17,                   //space between slides 
  pagination: {                       //pagination（dots）
      el: '.swiper-pagination',
  },
  navigation: {                       //navigation（arrows）
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 12,
    }
  }
})

var mobileSlider = new Swiper(".mobileSlider", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

