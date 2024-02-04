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
});

const ourTeamMobileSwiper = new Swiper('.ourteammobile-swiper', {
  loop: true,
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


const salesMobileSwiper = new Swiper('.sales-swiper', {
  loop: true,
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var mobileSlider = new Swiper(".mobileSlider", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


$('#collapseExample').on('show.bs.collapse', function () {
  // Hide the original SVG
  $('#collapseIcon').hide();
  // Show the modified SVG
  $('#modifiedIcon').show();
});

$('#collapseExample').on('hide.bs.collapse', function () {
  // Show the original SVG
  $('#collapseIcon').show();
  // Hide the modified SVG
  $('#modifiedIcon').hide();
});


$('#collapseExample2').on('show.bs.collapse', function () {
  // Hide the original SVG
  $('#collapseIcon2').hide();
  // Show the modified SVG
  $('#modifiedIcon2').show();
});

$('#collapseExample2').on('hide.bs.collapse', function () {
  // Show the original SVG
  $('#collapseIcon2').show();
  // Hide the modified SVG
  $('#modifiedIcon2').hide();
});