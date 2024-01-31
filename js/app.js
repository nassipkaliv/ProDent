const swiper = new Swiper('.sample-slider', {
  loop: true,                         //loop
  slidesPerView: 1.2,                   //number of slides to show
  centeredSlides : true,              //put acctive slide center
  spaceBetween: 40,                   //space between slides 
  pagination: {                       //pagination（dots）
      el: '.swiper-pagination',
  },
  navigation: {                       //navigation（arrows）
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
})

