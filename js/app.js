ymaps.ready(function() {
  // Инициализация первой карты с идентификатором "map1"
  initMap("map1");

  // Инициализация второй карты с идентификатором "map2"
  initMap("map2");

  // Инициализация третьей карты с идентификатором "map3"
  initMap("map3");

  initMap("map4");

  initMap("map5");

  initMap("map6");

  // Функция для инициализации карты с заданным идентификатором
  function initMap(mapId) {
      var myMap = new ymaps.Map(mapId, {
          center: [55.771282, 37.846760], // Координаты центра карты
          zoom: 16, // Уровень масштабирования
          controls: [] // Убираем все кнопки управления с карты
      });

      // Добавляем метку
      myMap.geoObjects.add(new ymaps.Placemark([55.771282, 37.846760], {
          balloonContent: 'Pro Dent - стоматологическая клиника в Москве'
      }, {
          preset: 'islands#icon',
          iconColor: '#0095b6'
      }));
  }
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
  
  // Получаем ссылку на кнопку "Записаться на прием"
  var appointmentButton = document.querySelector('.btn.menu-btn.d-flex');
  
  // Изменяем текст кнопки
  if (isOriginalSvg) {
    appointmentButton.textContent = 'Найти';
  } else {
    appointmentButton.textContent = 'Записаться на прием';
  }
});
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


function updateTimer1() {
  const daysElement1 = document.getElementById("days1");
  const hoursElement1 = document.getElementById("hours1");
  const minutesElement1 = document.getElementById("minutes1");
  const secondsElement1 = document.getElementById("seconds1");

  if (daysElement1 && hoursElement1 && minutesElement1 && secondsElement1) {
      let days1 = parseInt(daysElement1.innerText);
      let hours1 = parseInt(hoursElement1.innerText);
      let minutes1 = parseInt(minutesElement1.innerText);
      let seconds1 = parseInt(secondsElement1.innerText);

      if (seconds1 > 0) {
          seconds1--;
      } else {
          if (minutes1 > 0) {
              minutes1--;
              seconds1 = 59;
          } else {
              if (hours1 > 0) {
                  hours1--;
                  minutes1 = 59;
                  seconds1 = 59;
              } else {
                  if (days1 > 0) {
                      days1--;
                      hours1 = 23;
                      minutes1 = 59;
                      seconds1 = 59;
                  } else {
                      clearInterval(timerInterval1);
                      document.getElementById("timer1").innerText = "Акция завершена!";
                      return;
                  }
              }
          }
      }

      daysElement1.innerText = days1;
      hoursElement1.innerText = hours1;
      minutesElement1.innerText = minutes1;
      secondsElement1.innerText = seconds1;
  }
}

const timerInterval1 = setInterval(updateTimer1, 1000);


function updateTimer2() {
  const daysElement2 = document.getElementById("days2");
  const hoursElement2 = document.getElementById("hours2");
  const minutesElement2 = document.getElementById("minutes2");
  const secondsElement2 = document.getElementById("seconds2");

  if (daysElement2 && hoursElement2 && minutesElement2 && secondsElement2) {
      let days2 = parseInt(daysElement2.innerText);
      let hours2 = parseInt(hoursElement2.innerText);
      let minutes2 = parseInt(minutesElement2.innerText);
      let seconds2 = parseInt(secondsElement2.innerText);

      if (seconds2 > 0) {
          seconds2--;
      } else {
          if (minutes2 > 0) {
              minutes2--;
              seconds2 = 59;
          } else {
              if (hours2 > 0) {
                  hours2--;
                  minutes2 = 59;
                  seconds2 = 59;
              } else {
                  if (days2 > 0) {
                      days2--;
                      hours2 = 23;
                      minutes2 = 59;
                      seconds2 = 59;
                  } else {
                      clearInterval(timerInterval2);
                      document.getElementById("timer2").innerText = "Акция завершена!";
                      return;
                  }
              }
          }
      }

      daysElement2.innerText = days2;
      hoursElement2.innerText = hours2;
      minutesElement2.innerText = minutes2;
      secondsElement2.innerText = seconds2;
  }
}

const timerInterval2 = setInterval(updateTimer2, 1000);


function updateTimer3() {
  const daysElement3 = document.getElementById("days3");
  const hoursElement3 = document.getElementById("hours3");
  const minutesElement3 = document.getElementById("minutes3");
  const secondsElement3 = document.getElementById("seconds3");

  if (daysElement3 && hoursElement3 && minutesElement3 && secondsElement3) {
      let days3 = parseInt(daysElement3.innerText);
      let hours3 = parseInt(hoursElement3.innerText);
      let minutes3 = parseInt(minutesElement3.innerText);
      let seconds3 = parseInt(secondsElement3.innerText);

      if (seconds3 > 0) {
          seconds3--;
      } else {
          if (minutes3 > 0) {
              minutes3--;
              seconds3 = 59;
          } else {
              if (hours3 > 0) {
                  hours3--;
                  minutes3 = 59;
                  seconds3 = 59;
              } else {
                  if (days3 > 0) {
                      days3--;
                      hours3 = 23;
                      minutes3 = 59;
                      seconds3 = 59;
                  } else {
                      clearInterval(timerInterval3);
                      document.getElementById("timer3").innerText = "Акция завершена!";
                      return;
                  }
              }
          }
      }

      daysElement3.innerText = days3;
      hoursElement3.innerText = hours3;
      minutesElement3.innerText = minutes3;
      secondsElement3.innerText = seconds3;
  }
}

const timerInterval3 = setInterval(updateTimer3, 1000);



function updateTimer1Mob() {
  const daysElement1 = document.getElementById("days1mob");
  const hoursElement1 = document.getElementById("hours1mob");
  const minutesElement1 = document.getElementById("minutes1mob");
  const secondsElement1 = document.getElementById("seconds1mob");

  if (daysElement1 && hoursElement1 && minutesElement1 && secondsElement1) {
      let days1 = parseInt(daysElement1.innerText);
      let hours1 = parseInt(hoursElement1.innerText);
      let minutes1 = parseInt(minutesElement1.innerText);
      let seconds1 = parseInt(secondsElement1.innerText);

      if (seconds1 > 0) {
          seconds1--;
      } else {
          if (minutes1 > 0) {
              minutes1--;
              seconds1 = 59;
          } else {
              if (hours1 > 0) {
                  hours1--;
                  minutes1 = 59;
                  seconds1 = 59;
              } else {
                  if (days1 > 0) {
                      days1--;
                      hours1 = 23;
                      minutes1 = 59;
                      seconds1 = 59;
                  } else {
                      clearInterval(timerInterval1Mob);
                      document.getElementById("timer1mob").innerText = "Акция завершена!";
                      return;
                  }
              }
          }
      }

      daysElement1.innerText = days1;
      hoursElement1.innerText = hours1;
      minutesElement1.innerText = minutes1;
      secondsElement1.innerText = seconds1;
  }
}

const timerInterval1Mob = setInterval(updateTimer1Mob, 1000);

function updateTimer2Mob() {
  const daysElement2 = document.getElementById("days2mob");
  const hoursElement2 = document.getElementById("hours2mob");
  const minutesElement2 = document.getElementById("minutes2mob");
  const secondsElement2 = document.getElementById("seconds2mob");

  if (daysElement2 && hoursElement2 && minutesElement2 && secondsElement2) {
      let days2 = parseInt(daysElement2.innerText);
      let hours2 = parseInt(hoursElement2.innerText);
      let minutes2 = parseInt(minutesElement2.innerText);
      let seconds2 = parseInt(secondsElement2.innerText);

      if (seconds2 > 0) {
          seconds2--;
      } else {
          if (minutes2 > 0) {
              minutes2--;
              seconds2 = 59;
          } else {
              if (hours2 > 0) {
                  hours2--;
                  minutes2 = 59;
                  seconds2 = 59;
              } else {
                  if (days2 > 0) {
                      days2--;
                      hours2 = 23;
                      minutes2 = 59;
                      seconds2 = 59;
                  } else {
                      clearInterval(timerInterval2Mob);
                      document.getElementById("timer2mob").innerText = "Акция завершена!";
                      return;
                  }
              }
          }
      }

      daysElement2.innerText = days2;
      hoursElement2.innerText = hours2;
      minutesElement2.innerText = minutes2;
      secondsElement2.innerText = seconds2;
  }
}

const timerInterval2Mob = setInterval(updateTimer2Mob, 1000);


  // Timer 3 Mobile
  function updateTimer3Mob() {
    const daysElement3 = document.getElementById("days3mob");
    const hoursElement3 = document.getElementById("hours3mob");
    const minutesElement3 = document.getElementById("minutes3mob");
    const secondsElement3 = document.getElementById("seconds3mob");

    if (daysElement3 && hoursElement3 && minutesElement3 && secondsElement3) {
        let days3 = parseInt(daysElement3.innerText);
        let hours3 = parseInt(hoursElement3.innerText);
        let minutes3 = parseInt(minutesElement3.innerText);
        let seconds3 = parseInt(secondsElement3.innerText);

        if (seconds3 > 0) {
            seconds3--;
        } else {
            if (minutes3 > 0) {
                minutes3--;
                seconds3 = 59;
            } else {
                if (hours3 > 0) {
                    hours3--;
                    minutes3 = 59;
                    seconds3 = 59;
                } else {
                    if (days3 > 0) {
                        days3--;
                        hours3 = 23;
                        minutes3 = 59;
                        seconds3 = 59;
                    } else {
                        clearInterval(timerInterval3Mob);
                        document.getElementById("timer3mob").innerText = "Акция завершена!";
                        return;
                    }
                }
            }
        }

        daysElement3.innerText = days3;
        hoursElement3.innerText = hours3;
        minutesElement3.innerText = minutes3;
        secondsElement3.innerText = seconds3;
    }
}

const timerInterval3Mob = setInterval(updateTimer3Mob, 1000);


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

