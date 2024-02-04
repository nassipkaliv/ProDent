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
  loop: true,
  slidesPerView: 4,
  spaceBetween: 17,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const ourServiceMobileSwiper = new Swiper('.ourservicemobile-swiper', {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 12,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const ourTeamSwiper = new Swiper('.ourteam-swiper', {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 17,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    }
  }
});


var mobileSlider = new Swiper(".mobileSlider", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

