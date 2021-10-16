(function () {
        function logElementEvent(eventName, element) {
          console.log(Date.now(), eventName, element.getAttribute("data-src"));
        }

        var ll = new LazyLoad();
      })();

const navLinks = [...document.querySelectorAll('.pop-burger-nav__link')];
navLinks.forEach(link => {
  link.addEventListener('click', function() {
    closePop('.pop-burger');
    document.querySelector('html').classList.remove('poppa-block-scrolling')
  })
})



const headerBadge = document.querySelector('.s1-header-badge');
const headerBadgeTooltip = document.querySelector('.s1-header-badge__tooltip');

poppa({
  pop: '.pop-burger',
  clickTrigger: '.s1-header-burger',
  position: 'right',
  animation: 'slide-left',
})

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


const whoSlider = new Swiper('.s2-who-slider', {
  spaceBetween: 200,
  pagination: {
    el: '.s2-who-slider-pagination',
  },
  navigation: {
    nextEl: '.s2-who-slider-button--next',
    prevEl: '.s2-who-slider-button--prev',
  },
  watchOverflow: true,
  breakpoints: {
    768: {
      spaceBetween: 50,
      slidesPerView: 3,
      navigation: false,
      pagination: false
    },
  }
})
const techesSlider = new Swiper('.s3-teches-slider', {
  spaceBetween: 350,
  pagination: {
    el: '.s3-teches-slider-pagination',
  },
  navigation: {
    nextEl: '.s3-teches-slider-button--next',
    prevEl: '.s3-teches-slider-button--prev',
  },
  breakpoints: {
    1171: {
      slidesPerView: 1,
    },
  }
})
const programmSlider = new Swiper('.s5-programms-slider', {
  spaceBetween: 500,
  pagination: {
    el: '.s5-buttons-pagination',
  },
  navigation: {
    nextEl: '.s5-slider-button--next',
    prevEl: '.s5-slider-button--prev',
  },
  breakpoints: {
    1171: {
      slidesPerView: 1,
      pagination: {
        el: '.s5-buttons-pagination',
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + 'Модуль ' + (index + 1) + "</span>";
        },
      },
    },
  }
})

let founderSlider = null;

if (window.innerWidth <= 1199) {
const founderSlider = new Swiper('.s4-founder-cards', {
  spaceBetween: 50,
  pagination: {
    el: '.s4-founder-cards-pagination',
  },
  navigation: {
    nextEl: '.s4-founder-cards__button--next',
    prevEl: '.s4-founder-cards__button--prev',
  },
  breakpoints: {
    1171: {
      slidesPerView: 3,
    },
  }
})
} else {
  document.querySelector('.s4-founder-cards').classList.remove('swiper')
  document.querySelector('.s4-founder-cards__inner').classList.remove('swiper-wrapper')
  const s4Slides = [...document.querySelectorAll('.s4-founder-cards-card')]
  s4Slides.forEach(slide => slide.classList.remove('swiper-slide'))
}
const momsSlider = new Swiper('.s6-moms-cards', {
  spaceBetween: 50,
  watchOverflow: true,
  pagination: {
    el: '.s6-moms-cards-pagination',
  },
  navigation: {
    nextEl: '.s6-moms-cards__button--next',
    prevEl: '.s6-moms-cards__button--prev',
  },
  breakpoints: {
    1171: {
      slidesPerView: 3,
    },
  }
})
const reviewsSlider = new Swiper('.s8-reviews-slider', {
  spaceBetween: 50,
  pagination: {
    el: '.s8-reviews-slider-pagination',
  },
  navigation: {
    prevEl: '.s8-reviews-slider__button--prev',
    nextEl: '.s8-reviews-slider__button--next',
  },
  breakpoints: {
    1171: {
      slidesPerView: 2,
    },
  }
})

let easySlider = null;
if (window.innerWidth <= 1199) {
const easySlider = new Swiper('.s9-easy-cards', {
  spaceBetween: 50,
  pagination: {
    el: '.s9-easy-cards-pagination',
  },
  navigation: {
    nextEl: '.s9-easy-cards__button--next',
    prevEl: '.s9-easy-cards__button--prev',
  },
  breakpoints: {
    1171: {
      slidesPerView: 5,
    },
  }
})
} else {
  document.querySelector('.s9-easy-cards').classList.remove('swiper')
  document.querySelector('.s9-easy-cards__inner').classList.remove('swiper-wrapper')
  const s4Slides = [...document.querySelectorAll('.s9-easy-cards-card')]
  s4Slides.forEach(slide => slide.classList.remove('swiper-slide'))
}

const testimonialsSlider = new Swiper('.s12-testimonials-slider', {
  spaceBetween: 50,
  pagination: {
    el: '.s12-testimonials-slider-pagination',
  },
  navigation: {
    nextEl: '.s12-testimonials-slider__button--next',
    prevEl: '.s12-testimonials-slider__button--prev',
  },
  breakpoints: {
    1171: {
      slidesPerView: 3,
    },
  }
})
const certsSlider = new Swiper('.s15-cert-slider', {
  spaceBetween: 50,
  pagination: {
    el: '.s15-cert-slider-pagination',
  },
  navigation: {
    nextEl: '.s15-cert-slider__button--next',
    prevEl: '.s15-cert-slider__button--prev',
  },
  breakpoints: {
    1171: {
      slidesPerView: 3,
    },
  }
})
const videosSlider = new Swiper('.s7-videos-slider', {
  spaceBetween: 50,
  pagination: {
    el: '.s7-videos-slider-pagination',
  },
  navigation: {
    nextEl: '.s7-videos-slider__button--next',
    prevEl: '.s7-videos-slider__button--prev',
  },
  breakpoints: {
    1171: {
      slidesPerView: 1,
    },
  }
})

// const SLIDERS_ARRAY = [programmSlider, bundlesSlider];
let PREP_SLIDERS_ARRAY = [
  whoSlider,
  techesSlider,
  founderSlider,
  // programmSlider,
  momsSlider,
  videosSlider,
  reviewsSlider,
  easySlider,
  certsSlider,
  testimonialsSlider,
]

let SLIDERS_ARRAY = [];
PREP_SLIDERS_ARRAY.forEach((slider, index) => {
  if (slider != null) {
    SLIDERS_ARRAY.push(slider)
  }
})

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
      // console.log('yep')
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

// DROPDOWNS
const dropdowns = [...document.querySelectorAll('.s17-faq-cards-card-question')];

const dropdownOpenedClass = 'opened';
dropdowns.forEach((dropdown, index) => {
  dropdown.addEventListener("click", function () {
    const currentAnswer = this.parentElement.querySelector('.s17-faq-cards-card-answer')
    let currentAnswerHeight = currentAnswer.clientHeight;

    if (this.parentElement.classList.value.includes(dropdownOpenedClass)) {
      currentAnswer.style.marginTop = '0';
      this.parentElement.classList.remove(dropdownOpenedClass);
    } else {
      currentAnswer.style.marginTop = `-${currentAnswerHeight}px`;
      this.parentElement.classList.add(dropdownOpenedClass);
    }
  });
  if (index > 0) {
    dropdown.click();
  }
});


// YT video and thumbnail getter
const reviews = [...document.querySelectorAll('.s8-reviews-slider-slide')]

function getYtThumbnailUrl(id, quality) {
  return `https://i.ytimg.com/vi/${id}/${quality}.jpg`
  // return `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`
}
function getYtEmbedUrl(id) {
  return `https://www.youtube.com/embed/${id}?autoplay=1&enablejsapi=1`
}

function ytLazyLoad($) {
  $.cards.forEach(card => {
    let ytThumbnailQuality = card.getAttribute('data-thumbnail-quality')
    if (ytThumbnailQuality === null) {
      ytThumbnailQuality = 'maxresdefault'
    }

    let ytVideoId = card.getAttribute('data-yt-id');
    let ytThumbnailSrc = getYtThumbnailUrl(ytVideoId, ytThumbnailQuality);

    let ytEmbedSrc = getYtEmbedUrl(ytVideoId);

    const preview = card.querySelector($.img)
    const video = card.querySelector($.iframe)
    // console.log(ytThumbnailQuality,preview)

    preview.setAttribute('src', ytThumbnailSrc);

    card.querySelector($.play).addEventListener('click', function() {
      video.style.display = 'block';
      video.setAttribute('src', ytEmbedSrc);
      preview.style.display = 'none';
      this.remove();
    })
  })
}

ytLazyLoad({
  cards: reviews,
  img: '.s8-reviews-slider-slide-video__media--preview',
  iframe: '.s8-reviews-slider-slide-video__media--video',
  play: '.s8-reviews-slider-slide-video__play',
})


const videos = [...document.querySelectorAll('.s7-videos-slider-slide')]
ytLazyLoad({
  cards: videos,
  img: '.s7-videos-slider-slide-video__media--preview',
  iframe: '.s7-videos-slider-slide-video__media--video',
  play: '.s7-videos-slider-slide-video__play',
})
