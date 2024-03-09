const swiper = new Swiper('.sample-slider', {
  loop: true,
  slidesPerView: 1.12,
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


const navSwiper = new Swiper('.navSwiper', {
  slidesPerView: 1.31,
  spaceBetween: 20,
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});


const diplomSwiper = new Swiper('.diplomSwiper', {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const ratesSwiper = new Swiper('.ratesSwiper', {
  loop: true,
  slidesPerView: 1,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

const ratesSwiperMob = new Swiper('.ratesSwiperMob', {
  loop: true,
  slidesPerView: 1,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

const gallerySwiper = new Swiper('.gallerySwiper', {
  loop: true,
  slidesPerView: 1,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

const gallerySwiperMob = new Swiper('.gallerySwiperMob', {
  loop: true,
  slidesPerView: 1,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
});


const diplomMobSwiper = new Swiper('.diplomMobSwiper', {
  loop: true,
  slidesPerView: 1,
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

document.getElementById('svgTrigger').addEventListener('click', function() {
  var inputContainer = document.getElementById('inputContainer');
  inputContainer.style.display = (inputContainer.style.display === 'none' || inputContainer.style.display === '') ? 'block' : 'none';
  
  var svgElement = this.querySelector('svg');
  
  // Check if the current SVG is the original or the new one
  var isOriginalSvg = svgElement.outerHTML.includes('25.4226 13.1617');
  
  // Replace the current SVG with the appropriate SVG
  var newSvg;
  if (isOriginalSvg) {
      newSvg = '<svg width="20.213379" height="20.183594" viewBox="0 0 20.2134 20.1836" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><desc>Created with Pixso.</desc><defs/><rect id="Rectangle 272" x="0.414307" y="18.384766" width="26.000000" height="2.000000" transform="rotate(-45 0.414307 18.384766)" fill="#1D2023" fill-opacity="1.000000"/><rect id="Rectangle 273" x="1.414307" y="0.384766" width="26.000000" height="2.000000" transform="rotate(45 1.414307 0.384766)" fill="#1D2023" fill-opacity="1.000000"/></svg>';
  } else {
      newSvg = '<svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none"><path d="M12.7113 0.500732C19.7203 0.500732 25.4226 6.18043 25.4226 13.1617C25.4226 16.219 24.3289 19.0267 22.5108 21.217L30.1406 28.8166C30.6147 29.2888 30.6147 30.0564 30.1405 30.5286C29.6691 30.9982 28.9067 30.9982 28.4353 30.5286L20.7987 22.9224C18.5996 24.7332 15.7808 25.8226 12.7113 25.8226C5.7023 25.8226 0 20.1429 0 13.1617C0 6.18043 5.70224 0.500732 12.7113 0.500732ZM12.7113 23.411C18.3852 23.411 23.0014 18.8132 23.0014 13.1617C23.0014 7.51019 18.3852 2.91234 12.7113 2.91234C7.03729 2.91234 2.42114 7.51019 2.42114 13.1617C2.42114 18.8132 7.03729 23.411 12.7113 23.411Z" fill="#C7C7C9"/></svg>';
  }
  
  // Update the HTML content with the new SVG
  svgElement.outerHTML = newSvg;
});


function toggleSVG1() {
  var svg = document.getElementById('vacancy-svg1');
  var minusRect = document.getElementById('minus1');
  var isOpened = svg.parentElement.getAttribute('aria-expanded') === 'true';

  if (isOpened) {
    // Remove the 'minus' rect when collapsed
    minusRect.remove();
  } else {
    // Add back the 'minus' rect when expanded
    var rectTag = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rectTag.setAttribute('id', 'minus');
    rectTag.setAttribute('x', '28');
    rectTag.setAttribute('y', '14');
    rectTag.setAttribute('rx', '2');
    rectTag.setAttribute('width', '4');
    rectTag.setAttribute('height', '32');
    rectTag.setAttribute('fill', '#4797FF');
    rectTag.setAttribute('fill-opacity', '1');
    svg.appendChild(rectTag);
  }
}

function toggleSVG2() {
  var svg = document.getElementById('vacancy-svg2');
  var minusRect = document.getElementById('minus2');
  var isOpened = svg.parentElement.getAttribute('aria-expanded') === 'true';

  if (isOpened) {
    // Remove the 'minus' rect when collapsed
    minusRect.remove();
  } else {
    // Add back the 'minus' rect when expanded
    var rectTag = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rectTag.setAttribute('id', 'minus');
    rectTag.setAttribute('x', '28');
    rectTag.setAttribute('y', '14');
    rectTag.setAttribute('rx', '2');
    rectTag.setAttribute('width', '4');
    rectTag.setAttribute('height', '32');
    rectTag.setAttribute('fill', '#4797FF');
    rectTag.setAttribute('fill-opacity', '1');
    svg.appendChild(rectTag);
  }
}


function toggleSVG3() {
  var svg = document.getElementById('vacancy-svg3');
  var minusRect = document.getElementById('minus3');
  var isOpened = svg.parentElement.getAttribute('aria-expanded') === 'true';

  if (isOpened) {
    // Remove the 'minus' rect when collapsed
    minusRect.remove();
  } else {
    // Add back the 'minus' rect when expanded
    var rectTag = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rectTag.setAttribute('id', 'minus');
    rectTag.setAttribute('x', '28');
    rectTag.setAttribute('y', '14');
    rectTag.setAttribute('rx', '2');
    rectTag.setAttribute('width', '4');
    rectTag.setAttribute('height', '32');
    rectTag.setAttribute('fill', '#4797FF');
    rectTag.setAttribute('fill-opacity', '1');
    svg.appendChild(rectTag);
  }
}


function startCountdownTimer() {
  // Timer 1
  var daysElement1 = document.getElementById("days1");
  var hoursElement1 = document.getElementById("hours1");
  var minutesElement1 = document.getElementById("minutes1");
  var secondsElement1 = document.getElementById("seconds1");

  if (daysElement1 && hoursElement1 && minutesElement1 && secondsElement1) {
      var deadline1 = new Date("March 31, 2024 00:00:00").getTime();

      var x1 = setInterval(function () {
          var now1 = new Date().getTime();
          var timeRemaining1 = deadline1 - now1;
          var days1 = Math.floor(timeRemaining1 / (1000 * 60 * 60 * 24));
          var hours1 = Math.floor((timeRemaining1 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          var minutes1 = Math.floor((timeRemaining1 % (1000 * 60 * 60)) / (1000 * 60));
          var seconds1 = Math.floor((timeRemaining1 % (1000 * 60)) / 1000);

          if (daysElement1) {
              daysElement1.innerHTML = days1;
          }
          if (hoursElement1) {
              hoursElement1.innerHTML = hours1;
          }
          if (minutesElement1) {
              minutesElement1.innerHTML = minutes1;
          }
          if (secondsElement1) {
              secondsElement1.innerHTML = seconds1;
          }

          if (timeRemaining1 < 0) {
              clearInterval(x1);
              if (daysElement1) {
                  document.getElementById("timer1").innerHTML = "Акция завершена!";
              }
          }
      }, 1000);
  }

  // Timer 2
  var daysElement2 = document.getElementById("days2");
  var hoursElement2 = document.getElementById("hours2");
  var minutesElement2 = document.getElementById("minutes2");
  var secondsElement2 = document.getElementById("seconds2");

  if (daysElement2 && hoursElement2 && minutesElement2 && secondsElement2) {
      var deadline2 = new Date("March 26, 2024 00:00:00").getTime();

      var x2 = setInterval(function () {
          var now2 = new Date().getTime();
          var timeRemaining2 = deadline2 - now2;
          var days2 = Math.floor(timeRemaining2 / (1000 * 60 * 60 * 24));
          var hours2 = Math.floor((timeRemaining2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          var minutes2 = Math.floor((timeRemaining2 % (1000 * 60 * 60)) / (1000 * 60));
          var seconds2 = Math.floor((timeRemaining2 % (1000 * 60)) / 1000);

          if (daysElement2) {
              daysElement2.innerHTML = days2;
          }
          if (hoursElement2) {
              hoursElement2.innerHTML = hours2;
          }
          if (minutesElement2) {
              minutesElement2.innerHTML = minutes2;
          }
          if (secondsElement2) {
              secondsElement2.innerHTML = seconds2;
          }

          if (timeRemaining2 < 0) {
              clearInterval(x2);
              if (daysElement2) {
                  document.getElementById("timer2").innerHTML = "Акция завершена!";
              }
          }
      }, 1000);
  }

  // Timer 3
  var daysElement3 = document.getElementById("days3");
  var hoursElement3 = document.getElementById("hours3");
  var minutesElement3 = document.getElementById("minutes3");
  var secondsElement3 = document.getElementById("seconds3");

  if (daysElement3 && hoursElement3 && minutesElement3 && secondsElement3) {
      var deadline3 = new Date("March 15, 2024 00:00:00").getTime();

      var x3 = setInterval(function () {
          var now3 = new Date().getTime();
          var timeRemaining3 = deadline3 - now3;
          var days3 = Math.floor(timeRemaining3 / (1000 * 60 * 60 * 24));
          var hours3 = Math.floor((timeRemaining3 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          var minutes3 = Math.floor((timeRemaining3 % (1000 * 60 * 60)) / (1000 * 60));
          var seconds3 = Math.floor((timeRemaining3 % (1000 * 60)) / 1000);

          if (daysElement3) {
              daysElement3.innerHTML = days3;
          }
          if (hoursElement3) {
              hoursElement3.innerHTML = hours3;
          }
          if (minutesElement3) {
              minutesElement3.innerHTML = minutes3;
          }
          if (secondsElement3) {
              secondsElement3.innerHTML = seconds3;
          }

          if (timeRemaining3 < 0) {
              clearInterval(x3);
              if (daysElement3) {
                  document.getElementById("timer3").innerHTML = "Акция завершена!";
              }
          }
      }, 1000);
  }

  // Timer 1 Mobile
  var daysElement1mob = document.getElementById("days1mob");
  var hoursElement1mob = document.getElementById("hours1mob");
  var minutesElement1mob = document.getElementById("minutes1mob");
  var secondsElement1mob = document.getElementById("seconds1mob");

  if (daysElement1mob && hoursElement1mob && minutesElement1mob && secondsElement1mob) {
      var deadline1mob = new Date("March 31, 2024 00:00:00").getTime();

      var x1mob = setInterval(function () {
          var now1mob = new Date().getTime();
          var timeRemaining1mob = deadline1mob - now1mob;
          var days1mob = Math.floor(timeRemaining1mob / (1000 * 60 * 60 * 24));
          var hours1mob = Math.floor((timeRemaining1mob % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          var minutes1mob = Math.floor((timeRemaining1mob % (1000 * 60 * 60)) / (1000 * 60));
          var seconds1mob = Math.floor((timeRemaining1mob % (1000 * 60)) / 1000);

          if (daysElement1mob) {
              daysElement1mob.innerHTML = days1mob;
          }
          if (hoursElement1mob) {
              hoursElement1mob.innerHTML = hours1mob;
          }
          if (minutesElement1mob) {
              minutesElement1mob.innerHTML = minutes1mob;
          }
          if (secondsElement1mob) {
              secondsElement1mob.innerHTML = seconds1mob;
          }

          if (timeRemaining1mob < 0) {
              clearInterval(x1mob);
              if (daysElement1mob) {
                  document.getElementById("timer1mob").innerHTML = "Акция завершена!";
              }
          }
      }, 1000);
  }

  // Timer 2 Mobile
  var daysElement2mob = document.getElementById("days2mob");
  var hoursElement2mob = document.getElementById("hours2mob");
  var minutesElement2mob = document.getElementById("minutes2mob");
  var secondsElement2mob = document.getElementById("seconds2mob");

  if (daysElement2mob && hoursElement2mob && minutesElement2mob && secondsElement2mob) {
      var deadline2mob = new Date("March 26, 2024 00:00:00").getTime();

      var x2mob = setInterval(function () {
          var now2mob = new Date().getTime();
          var timeRemaining2mob = deadline2mob - now2mob;
          var days2mob = Math.floor(timeRemaining2mob / (1000 * 60 * 60 * 24));
          var hours2mob = Math.floor((timeRemaining2mob % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          var minutes2mob = Math.floor((timeRemaining2mob % (1000 * 60 * 60)) / (1000 * 60));
          var seconds2mob = Math.floor((timeRemaining2mob % (1000 * 60)) / 1000);

          if (daysElement2mob) {
              daysElement2mob.innerHTML = days2mob;
          }
          if (hoursElement2mob) {
              hoursElement2mob.innerHTML = hours2mob;
          }
          if (minutesElement2mob) {
              minutesElement2mob.innerHTML = minutes2mob;
          }
          if (secondsElement2mob) {
              secondsElement2mob.innerHTML = seconds2mob;
          }

          if (timeRemaining2mob < 0) {
              clearInterval(x2mob);
              if (daysElement2mob) {
                  document.getElementById("timer2mob").innerHTML = "Акция завершена!";
              }
          }
      }, 1000);
  }

  // Timer 3 Mobile
  var daysElement3mob = document.getElementById("days3mob");
  var hoursElement3mob = document.getElementById("hours3mob");
  var minutesElement3mob = document.getElementById("minutes3mob");
  var secondsElement3mob = document.getElementById("seconds3mob");

  if (daysElement3mob && hoursElement3mob && minutesElement3mob && secondsElement3mob) {
      var deadline3mob = new Date("March 15, 2024 00:00:00").getTime();

      var x3mob = setInterval(function () {
          var now3mob = new Date().getTime();
          var timeRemaining3mob = deadline3mob - now3mob;
          var days3mob = Math.floor(timeRemaining3mob / (1000 * 60 * 60 * 24));
          var hours3mob = Math.floor((timeRemaining3mob % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          var minutes3mob = Math.floor((timeRemaining3mob % (1000 * 60 * 60)) / (1000 * 60));
          var seconds3mob = Math.floor((timeRemaining3mob % (1000 * 60)) / 1000);

          if (daysElement3mob) {
              daysElement3mob.innerHTML = days3mob;
          }
          if (hoursElement3mob) {
              hoursElement3mob.innerHTML = hours3mob;
          }
          if (minutesElement3mob) {
              minutesElement3mob.innerHTML = minutes3mob;
          }
          if (secondsElement3mob) {
              secondsElement3mob.innerHTML = seconds3mob;
          }

          if (timeRemaining3mob < 0) {
              clearInterval(x3mob);
              if (daysElement3mob) {
                  document.getElementById("timer3mob").innerHTML = "Акция завершена!";
              }
          }
      }, 1000);
  }
}

window.onload = startCountdownTimer;



function toggleIcon1() {
  var plusIcon = document.getElementById('plus-1');
  var minusIcon = document.getElementById('minus-1');
  
  if (plusIcon.style.display === 'none') {
    plusIcon.style.display = 'block';
    minusIcon.style.display = 'none';
  } else {
    plusIcon.style.display = 'none';
    minusIcon.style.display = 'block';
  }

  var faqBlock = document.getElementById('faq-block1');
  faqBlock.classList.toggle('open');
}



function toggleIcon2() {
  var plusIcon = document.getElementById('plus-2');
  var minusIcon = document.getElementById('minus-2');
  
  if (plusIcon.style.display === 'none') {
    plusIcon.style.display = 'block';
    minusIcon.style.display = 'none';
  } else {
    plusIcon.style.display = 'none';
    minusIcon.style.display = 'block';
  }
  var faqBlock = document.getElementById('faq-block2');
  faqBlock.classList.toggle('open');
}

function toggleIcon3() {
  var plusIcon = document.getElementById('plus-3');
  var minusIcon = document.getElementById('minus-3');
  
  if (plusIcon.style.display === 'none') {
    plusIcon.style.display = 'block';
    minusIcon.style.display = 'none';
  } else {
    plusIcon.style.display = 'none';
    minusIcon.style.display = 'block';
  }
  var faqBlock = document.getElementById('faq-block3');
  faqBlock.classList.toggle('open');
}

function toggleIcon4() {
  var plusIcon = document.getElementById('plus-4');
  var minusIcon = document.getElementById('minus-4');
  
  if (plusIcon.style.display === 'none') {
    plusIcon.style.display = 'block';
    minusIcon.style.display = 'none';
  } else {
    plusIcon.style.display = 'none';
    minusIcon.style.display = 'block';
  }
  var faqBlock = document.getElementById('faq-block4');
  faqBlock.classList.toggle('open');
}

function toggleIcon5() {
  var plusIcon = document.getElementById('plus-5');
  var minusIcon = document.getElementById('minus-5');
  
  if (plusIcon.style.display === 'none') {
    plusIcon.style.display = 'block';
    minusIcon.style.display = 'none';
  } else {
    plusIcon.style.display = 'none';
    minusIcon.style.display = 'block';
  }
  var faqBlock = document.getElementById('faq-block5');
  faqBlock.classList.toggle('open');
}

function toggleIcon6() {
  var plusIcon = document.getElementById('plus-6');
  var minusIcon = document.getElementById('minus-6');
  
  if (plusIcon.style.display === 'none') {
    plusIcon.style.display = 'block';
    minusIcon.style.display = 'none';
  } else {
    plusIcon.style.display = 'none';
    minusIcon.style.display = 'block';
  }
  var faqBlock = document.getElementById('faq-block6');
  faqBlock.classList.toggle('open');
}