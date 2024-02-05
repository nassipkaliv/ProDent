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


function startCountdown() {
  var daysElement = document.getElementById('days');
  var hoursElement = document.getElementById('hours');
  var minutesElement = document.getElementById('minutes');
  var secondsElement = document.getElementById('seconds');

  var totalSeconds = 12 * 24 * 3600 + 20 * 3600 + 18 * 60 + 36; // Initial time in seconds

  function updateCountdown() {
    var days = Math.floor(totalSeconds / (24 * 3600));
    var hours = Math.floor((totalSeconds % (24 * 3600)) / 3600);
    var minutes = Math.floor((totalSeconds % 3600) / 60);
    var seconds = totalSeconds % 60;

    daysElement.textContent = padZero(days);
    hoursElement.textContent = padZero(hours);
    minutesElement.textContent = padZero(minutes);
    secondsElement.textContent = padZero(seconds);
  }

  function padZero(number) {
    return number < 10 ? '0' + number : number;
  }

  // Start the countdown
  var countdownInterval = setInterval(function () {
    totalSeconds--;

    if (totalSeconds < 0) {
      clearInterval(countdownInterval);
    } else {
      updateCountdown();
    }
  }, 1000);
}

// Call the function to start the countdown
startCountdown();


function startCountdown1mob() {
  var daysElement = document.getElementById('days1mob');
  var hoursElement = document.getElementById('hours1mob');
  var minutesElement = document.getElementById('minutes1mob');
  var secondsElement = document.getElementById('seconds1mob');

  var totalSeconds = 12 * 24 * 3600 + 20 * 3600 + 18 * 60 + 36; // Initial time in seconds

  function updateCountdown() {
    var days = Math.floor(totalSeconds / (24 * 3600));
    var hours = Math.floor((totalSeconds % (24 * 3600)) / 3600);
    var minutes = Math.floor((totalSeconds % 3600) / 60);
    var seconds = totalSeconds % 60;

    daysElement.textContent = padZero(days);
    hoursElement.textContent = padZero(hours);
    minutesElement.textContent = padZero(minutes);
    secondsElement.textContent = padZero(seconds);
  }

  function padZero(number) {
    return number < 10 ? '0' + number : number;
  }

  // Start the countdown
  var countdownInterval = setInterval(function () {
    totalSeconds--;

    if (totalSeconds < 0) {
      clearInterval(countdownInterval);
    } else {
      updateCountdown();
    }
  }, 1000);
}

// Call the function to start the countdown
startCountdown1mob();


function startCountdown2() {
  var daysElement = document.getElementById('days2');
  var hoursElement = document.getElementById('hours2');
  var minutesElement = document.getElementById('minutes2');
  var secondsElement = document.getElementById('seconds2');

  var totalSeconds = 24 * 24 * 3600 + 11 * 3600 + 14 * 60 + 14; // Initial time in seconds

  function updateCountdown() {
    var days = Math.floor(totalSeconds / (24 * 3600));
    var hours = Math.floor((totalSeconds % (24 * 3600)) / 3600);
    var minutes = Math.floor((totalSeconds % 3600) / 60);
    var seconds = totalSeconds % 60;

    daysElement.textContent = padZero(days);
    hoursElement.textContent = padZero(hours);
    minutesElement.textContent = padZero(minutes);
    secondsElement.textContent = padZero(seconds);
  }

  function padZero(number) {
    return number < 10 ? '0' + number : number;
  }

  // Start the countdown
  var countdownInterval = setInterval(function () {
    totalSeconds--;

    if (totalSeconds < 0) {
      clearInterval(countdownInterval);
    } else {
      updateCountdown();
    }
  }, 1000);
}

// Call the function to start the countdown
startCountdown2();

function startCountdown2mob() {
  var daysElement = document.getElementById('days2mob');
  var hoursElement = document.getElementById('hours2mob');
  var minutesElement = document.getElementById('minutes2mob');
  var secondsElement = document.getElementById('seconds2mob');

  var totalSeconds = 24 * 24 * 3600 + 11 * 3600 + 14 * 60 + 14; // Initial time in seconds

  function updateCountdown() {
    var days = Math.floor(totalSeconds / (24 * 3600));
    var hours = Math.floor((totalSeconds % (24 * 3600)) / 3600);
    var minutes = Math.floor((totalSeconds % 3600) / 60);
    var seconds = totalSeconds % 60;

    daysElement.textContent = padZero(days);
    hoursElement.textContent = padZero(hours);
    minutesElement.textContent = padZero(minutes);
    secondsElement.textContent = padZero(seconds);
  }

  function padZero(number) {
    return number < 10 ? '0' + number : number;
  }

  // Start the countdown
  var countdownInterval = setInterval(function () {
    totalSeconds--;

    if (totalSeconds < 0) {
      clearInterval(countdownInterval);
    } else {
      updateCountdown();
    }
  }, 1000);
}

// Call the function to start the countdown
startCountdown2mob();

function startCountdown3() {
  var daysElement = document.getElementById('days3');
  var hoursElement = document.getElementById('hours3');
  var minutesElement = document.getElementById('minutes3');
  var secondsElement = document.getElementById('seconds3');

  var totalSeconds = 15 * 24 * 3600 + 18 * 3600 + 40 * 60 + 40; // Initial time in seconds

  function updateCountdown() {
    var days = Math.floor(totalSeconds / (24 * 3600));
    var hours = Math.floor((totalSeconds % (24 * 3600)) / 3600);
    var minutes = Math.floor((totalSeconds % 3600) / 60);
    var seconds = totalSeconds % 60;

    daysElement.textContent = padZero(days);
    hoursElement.textContent = padZero(hours);
    minutesElement.textContent = padZero(minutes);
    secondsElement.textContent = padZero(seconds);
  }

  function padZero(number) {
    return number < 10 ? '0' + number : number;
  }

  // Start the countdown
  var countdownInterval = setInterval(function () {
    totalSeconds--;

    if (totalSeconds < 0) {
      clearInterval(countdownInterval);
    } else {
      updateCountdown();
    }
  }, 1000);
}

// Call the function to start the countdown
startCountdown3();


function startCountdown3mob() {
  var daysElement = document.getElementById('days3mob');
  var hoursElement = document.getElementById('hours3mob');
  var minutesElement = document.getElementById('minutes3mob');
  var secondsElement = document.getElementById('seconds3mob');

  var totalSeconds = 15 * 24 * 3600 + 18 * 3600 + 40 * 60 + 40; // Initial time in seconds

  function updateCountdown() {
    var days = Math.floor(totalSeconds / (24 * 3600));
    var hours = Math.floor((totalSeconds % (24 * 3600)) / 3600);
    var minutes = Math.floor((totalSeconds % 3600) / 60);
    var seconds = totalSeconds % 60;

    daysElement.textContent = padZero(days);
    hoursElement.textContent = padZero(hours);
    minutesElement.textContent = padZero(minutes);
    secondsElement.textContent = padZero(seconds);
  }

  function padZero(number) {
    return number < 10 ? '0' + number : number;
  }

  // Start the countdown
  var countdownInterval = setInterval(function () {
    totalSeconds--;

    if (totalSeconds < 0) {
      clearInterval(countdownInterval);
    } else {
      updateCountdown();
    }
  }, 1000);
}

// Call the function to start the countdown
startCountdown3mob();