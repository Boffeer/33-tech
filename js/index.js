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

  const bundlesSlider = new Swiper('.s13-bundles-slider', {
    spaceBetween: 50,
    pagination: {
      el: '.s13-buttons-pagination',
    },
    navigation: {
      nextEl: '.s13-slider-button--next',
      prevEl: '.s13-slider-button--prev',
    },
    breakpoints: {
      // when window width is >= 320px
      1199: {
        slidesPerView: 3,
      },
    }
  });

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

  const SLIDERS_ARRAY = [programmSlider, bundlesSlider];

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

  SLIDERS_ARRAY.forEach(slider => {
    fixSlidersHeight(slider)
    fixSingleSliderHeight(slider)
  })
  window.addEventListener('resize', () => {
    SLIDERS_ARRAY.forEach(slider => {
      fixSlidersHeight(slider)
    })
  })
