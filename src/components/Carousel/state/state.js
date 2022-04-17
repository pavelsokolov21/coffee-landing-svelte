import { writable } from "svelte/store";

export const createCarouselState = () => {
  const { update, subscribe } = writable({
    currentSlide: 1,
    currentShift: 0,
  });
  let maxSlides = null;

  const methods = {
    init(slides) {
      update((state) => {
        maxSlides = slides;

        return state;
      });
    },
    setSlide(slide) {
      update((state) => {
        state.currentSlide = slide;

        return state;
      });
    },
    setShift(shift) {
      update((state) => {
        state.currentShift = state.currentShift + shift;

        return state;
      });
    },
    shift(slide, shift) {
      if (slide > maxSlides) {
        methods.goToFirst();
        return;
      }

      if (slide <= 0) {
        methods.goToLast(shift);
        return;
      }

      methods.setSlide(slide);
      methods.setShift(shift);
    },
    goToFirst() {
      update((state) => {
        state.currentShift = 0;
        state.currentSlide = 1;

        return state;
      });
    },
    goToLast(shift) {
      update((state) => {
        state.currentSlide = maxSlides;
        state.currentShift = (state.currentSlide - 1) * -shift;

        return state;
      });
    },
  };

  return {
    init: methods.init,
    shift: methods.shift,
    subscribe,
  };
};
