const headerBadge = document.querySelector('.s1-header-badge');
const headerBadgeTooltip = document.querySelector('.s1-header-badge__tooltip');

let isTooltipHidden = true;
headerBadge.addEventListener('click', function() {
  if (isTooltipHidden) {
    headerBadgeTooltip.classList.add('shown')
    isTooltipHidden = false;
  } else {
    headerBadgeTooltip.classList.remove('shown')
    isTooltipHidden = true
  }
  console.log(isTooltipHidden);
})

window.addEventListener('click', function(event) {
  if (event.target != headerBadge && isTooltipHidden == false) {
    headerBadgeTooltip.classList.remove('shown');
    isTooltipHidden = true;
  } else {
  }
})
  /**
   * DROPDOWN
   */
  // $(".faq-list-card-top").each(function () {
  //   $(this).on("click", function () {
  //     $(this).toggleClass("faq-list-card-top--opened");
  //     $(this).parent().find(".faq-list-card-bottom").slideToggle();
  //   });
  // });

  // const bundlesSlider = new Swiper('.s13-bundles-slider', {
  //   spaceBetween: 50,
  //   pagination: {
  //     el: '.s13-buttons-pagination',
  //   },
  //   navigation: {
  //     nextEl: '.s13-slider-button--next',
  //     prevEl: '.s13-slider-button--prev',
  //   },
  //   breakpoints: {
  //     // when window width is >= 320px
  //     1199: {
  //       slidesPerView: 3,
  //     },
  //   }
  // });

  const programmSlider = new Swiper('.s5-programms-slider', {
    spaceBetween: 50,
    pagination: {
      el: '.s5-buttons-pagination',
    },
    navigation: {
      nextEl: '.s5-slider-button--next',
      prevEl: '.s5-slider-button--prev',
    },
    breakpoints: {
      1199: {
        slidesPerView: 3,
      },
    }
  })

  // const SLIDERS_ARRAY = [programmSlider, bundlesSlider];
  const SLIDERS_ARRAY = [programmSlider];

  function fixSingleSliderHeight(slider) {
      slider.$el[0].style.height = 'auto'
      let currentSlideIndex = slider.realIndex + 1;
      let currentSlides = slider.slides;
      let currentSlide;
      currentSlides.map(slide => {
        let regex = new RegExp(`^${currentSlideIndex} /`)
        if (slide.getAttribute('aria-label').match(regex)) {
          currentSlide = slide;
        }
      })
      setTimeout(() => {
        let sliderWrapper = currentSlide.parentElement.parentElement;
        let sliderHeight = currentSlide.clientHeight;
        sliderWrapper.style.height = `${sliderHeight}px`
      }, 10)
  }

  function fixSlidersHeight(slider) {
    slider.on('slideChange', function () {
      fixSingleSliderHeight(slider);
    });
  }

  setTimeout(() => {
    SLIDERS_ARRAY.forEach(slider => {
      fixSlidersHeight(slider)
      setTimeout(() => {
        slider.slideNext();
        setTimeout(() => {
          slider.slidePrev();
        }, 400)
        console.log('yep')
      }, 20)
      // fixSingleSliderHeight(slider)
    })
  }, 100)
  // window.addEventListener('resize', () => {
  //   // SLIDERS_ARRAY.forEach(slider => {
  //   //   fixSlidersHeight(slider)
  //   // })
  // })

function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}


if (window.location.href != 'https://ekaterinaschol.ru/default') {
  var deadline = new Date(Date.parse('16 Oct 2021 23:59:00 GMT'));

  function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    // var clock = document.querySelector(id);
    var daysSpan = clock.querySelector('.timer-days__value');
    var hoursSpan = clock.querySelector('.timer-hours__value');
    var minutesSpan = clock.querySelector('.timer-minutes__value');
    var secondsSpan = clock.querySelector('.timer-seconds__value');

    function updateClock() {
      var t = getTimeRemaining(endtime);

      daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

      if (t.total <= 0) {
          location.replace('https://katyschool.ru/7')
      }

    }

    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
  }

  // if (localStorage.getItem('localTimerEkaterinaSchol33tech') == null){
  //   // localStorage.setItem('localTimerEkaterinaSchol33tech', new Date(Date.parse(new Date()) + 60 * 60 * 1000))
  //   localStorage.setItem('localTimerEkaterinaSchol33tech',  );
  // }


  // var deadline = localStorage.getItem('localTimerEkaterinaSchol33tech');
  // var deadline = new Date(Date.parse(new Date()) + 10 * 1000); // for endless timer
  initializeClock('timer', deadline);
}
