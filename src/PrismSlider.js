import anime from "animejs/lib/anime.es.js";

// PrismSliderClass.js

class PrismSlider {
  constructor({ container, slides, mask, duration, easing }) {
    this.container = container.element;
    this.slides = slides;
    this.mask = mask;
    this.duration = duration;
    this.easing = easing;
    this.currentIndex = 0;
    this.isAnimated = false;
    this.init();
  }

  init() {
    this.createSlides();
    if (this.mask) {
      this.createMask();
    }
  }

  createSlides() {
    // Implement slide creation logic here
    this.slideElements = this.slides.map((slideSrc) => {
      const img = document.createElement('img');
      img.src = slideSrc;
      this.container.appendChild(img);
      return img;
    });
    this.updateSlidesVisibility();
  }

  createMask() {
    // Implement mask creation logic here
    this.maskElement = document.createElement('img');
    this.maskElement.src = this.mask.source;
    this.container.appendChild(this.maskElement);
  }

  updateSlidesVisibility() {
    this.slideElements.forEach((slide, index) => {
      slide.style.display = index === this.currentIndex ? 'block' : 'none';
    });
  }

  slideTo(index) {
    if (this.isAnimated) return;
    this.isAnimated = true;

    anime({
      targets: this.slideElements[this.currentIndex],
      opacity: [1, 0],
      duration: this.duration,
      easing: this.easing,
      complete: () => {
        this.currentIndex = index;
        this.updateSlidesVisibility();
        anime({
          targets: this.slideElements[this.currentIndex],
          opacity: [0, 1],
          duration: this.duration,
          easing: this.easing,
          complete: () => {
            this.isAnimated = false;
          }
        });
      }
    });
  }
}

export default PrismSlider;
