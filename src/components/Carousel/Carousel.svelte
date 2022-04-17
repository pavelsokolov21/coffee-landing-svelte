<script>
  import { onMount } from "svelte";
  import ArrowIcon from "@components/icons/Arrow.svelte";
  import { createCarouselState } from "./state";
  import { LEFT_BUTTON, RIGHT_BUTTON } from "./constants";

  const state = createCarouselState();
  const countOfChildren = $$props.$$scope.ctx[0].length;
  let currentState = null;
  let slides;

  state.init(countOfChildren - 2);

  function getSizes() {
    const slidesWidth = slides.offsetWidth;
    const widthOfSlide = slides.firstChild.offsetWidth;

    return {
      slidesWidth,
      widthOfSlide,
    };
  }

  function calculateGap() {
    const { slidesWidth, widthOfSlide } = getSizes();
    const gap =
      (slidesWidth - widthOfSlide * $$props.maxSlidesOnPage) /
      ($$props.maxSlidesOnPage - 1);

    return gap;
  }

  function setGapBetweenSlides() {
    slides.style.gridGap = `${calculateGap()}px`;
  }

  function updateView() {
    slides.style.transform = `translateX(${currentState.currentShift}px)`;
  }

  function handleShiftArrow(arrowType) {
    const { widthOfSlide } = getSizes();
    const widthWithSign =
      arrowType === LEFT_BUTTON
        ? widthOfSlide + calculateGap()
        : -widthOfSlide - calculateGap();

    state.shift(
      arrowType === LEFT_BUTTON
        ? currentState.currentSlide - 1
        : currentState.currentSlide + 1,
      widthWithSign
    );

    updateView();
  }

  function handleShiftDot(index) {
    if (index === currentState.currentSlide) {
      return;
    }

    const { widthOfSlide } = getSizes();
    const shifting =
      (currentState.currentSlide - index) * (widthOfSlide + calculateGap());

    state.shift(index, shifting);

    updateView();
  }

  onMount(() => {
    setGapBetweenSlides();
  });

  state.subscribe((value) => {
    currentState = value;
  });
</script>

<div class="carousel {$$props.class ?? ''}">
  <div class="wrapper flex">
    <button
      class="carousel__button carousel__button_left"
      on:click={() => handleShiftArrow(LEFT_BUTTON)}
    >
      <ArrowIcon />
    </button>
    <div class="carousel__content flex">
      <div class="flex slides" bind:this={slides}>
        <slot />
      </div>
    </div>
    <button
      class="carousel__button carousel__button_right"
      on:click={() => handleShiftArrow(RIGHT_BUTTON)}
    >
      <ArrowIcon />
    </button>
  </div>
  <ul class="carousel__dots flex">
    {#each Array(countOfChildren - 2) as _, index}
      <li class="carousel__dot">
        <button
          class="carousel__dot-button {index + 1 === currentState.currentSlide
            ? 'carousel__dot-button_active'
            : ''}"
          on:click={() => handleShiftDot(index + 1)}
        />
      </li>
    {/each}
  </ul>
</div>

<style lang="scss">
  @import "variables.scss";

  .wrapper {
    align-items: center;
  }

  .slides {
    width: 100%;
    transition: transform 0.5s;
  }

  .carousel {
    &__content {
      margin: 0 42px;
      overflow: hidden;
    }

    &__button {
      flex-shrink: 0;
      width: 42px;
      height: 42px;
      border-radius: 100%;
      background: $secondaryColor;
      transition: all 0.22s;

      &_right {
        transform: rotate(180deg);
      }

      &:hover {
        background: darken($secondaryColor, 9);
      }
    }

    &__dots {
      justify-content: center;
      margin-top: 70px;
      grid-gap: 6px;
    }

    &__dot-button {
      width: 12px;
      height: 12px;
      border-radius: 100%;
      background: $secondaryColor;
      transition: background 0.22s;

      &:hover {
        background: $brown;
      }

      &_active {
        background: $brown;
      }
    }
  }
</style>
