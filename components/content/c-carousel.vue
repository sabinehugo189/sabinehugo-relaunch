<template>
  <Splide
    :options="options"
    aria-labeledby="carouselhead"
    class="carousel"
  >
    <SplideSlide
      v-for="(card, index) in cards"
      :key="`card-${uid}-${index}`"
    >
      <c-card
        :head="card.head"
        :body="card.body"
        :img-name="card.imgName"
        :img-alt="card.imgAlt"
        :img-height="card.imgHeight"
        :img-width="card.imgWidth"
      />
    </SplideSlide>
  </Splide>
</template>

<script setup>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
/* eslint-disable-next-line import/no-unresolved */
import '@splidejs/vue-splide/css/core';

defineProps({
  cards: {
    type: Object,
    required: true,
  },
});

const { uid } = getCurrentInstance();

const options = reactive({
  gap: '2rem',
  perMove: 1,
  perPage: 3,
  width: 'calc(100vw - 25rem)',
  breakpoints: {
    768: {
      perPage: 1,
    },
    1024: {
      perPage: 2,
      width: 'calc(100vw - 5rem)',
    },
    1280: {
      gap: '1.25rem',
      width: 'calc(100vw - 15rem)',
    },
  },
});
</script>

<style scoped>
.container {
  background-color: var(--surface-2);
  display: flex;
  flex-direction: column;
  gap: var(--size-10);
  margin-inline: calc(var(--size-10) * -1);
  padding-block: var(--size-20);
  padding-inline: var(--size-10);
}

@media (min-width: 1280px) {
  .container {
    padding-inline: var(--size-30);
  }
}

@media (min-width: 1536px) {
  .container {
    gap: var(--size-16);
    padding-block: var(--size-30);
    padding-inline: var(--size-50);
  }
}

header {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: var(--size-8);
  padding-inline: var(--size-5);
  text-align: center;
}

@media (min-width: 1280px) {
  header {
    padding-inline: 0;
  }
}

h2 {
  font-size: var(--font-size-fluid-3);
}

.carousel {
  margin-inline: auto;
}

/* stylelint-disable selector-class-pattern */
@keyframes splide-loading {
  0% {
    transform: rotate(0);
  }

  to {
    transform: rotate(1turn);
  }
}

:deep(.splide__container) {
  box-sizing: border-box;
  position: relative;
}

:deep(.splide__list) {
  backface-visibility: hidden;
  block-size: 100%;
  display: flex;
  margin: 0 !important;
  padding: 0 !important;
}

:deep(.splide.is-initialized:not(.is-active) .splide__list) {
  display: block;
}

:deep(.splide) {
  position: relative;
  visibility: hidden;
}

:deep(.splide.is-initialized),
:deep(.splide.is-rendered) {
  visibility: visible;
}

:deep(.splide__slide) {
  backface-visibility: hidden;
  box-sizing: border-box;
  display: flex;
  flex-shrink: 0;
  list-style-type: none !important;
  margin: 0;
  padding-inline-start: 0;
  position: relative;
  -webkit-tap-highlight-color: transparent;
}

:deep(.splide__slide img) {
  vertical-align: bottom;
}

:deep(.splide__spinner) {
  animation: splide-loading 1s linear infinite;
  block-size: 20px;
  border: 2px solid hsl(0deg 0% 60%);
  border-left-color: transparent;
  border-radius: 50%;
  contain: strict;
  display: inline-block;
  inline-size: 20px;
  inset: 0;
  margin: auto;
  position: absolute;
}

:deep(.splide__sr) {
  block-size: 1px;
  border: 0;
  clip: rect(0 0 0 0);
  inline-size: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
}

:deep(.splide__toggle.is-active .splide__toggle__play, .splide__toggle__pause) {
  display: none;
}

:deep(.splide__toggle.is-active .splide__toggle__pause) {
  display: inline;
}

:deep(.splide__track) {
  overflow: hidden;
  position: relative;
  z-index: 0;
}

:deep(.splide__track--draggable) {
  user-select: none;
}

:deep(.splide__track--fade > .splide__list) {
  display: block;
}

:deep(.splide__track--fade > .splide__list > .splide__slide) {
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  z-index: 0;
}

:deep(.splide__track--fade > .splide__list > .splide__slide.is-active) {
  opacity: 1;
  position: relative;
  z-index: var(--layer-1);
}

:deep(.splide--rtl) {
  direction: rtl;
}

:deep(.splide__track--ttb > .splide__list) {
  display: block;
}

:deep(.splide__arrow) {
  align-items: center;
  background: var(--gray-0);
  block-size: var(--size-10);
  border: 0;
  border-radius: 50%;
  box-shadow: var(--shadow-2);
  cursor: pointer;
  display: flex;
  inline-size: var(--size-10);
  justify-content: center;
  padding: 0;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: var(--layer-1);
}

@media (min-width: 1280px) {
  :deep(.splide__arrow) {
    block-size: var(--size-16);
    inline-size: var(--size-16);
  }
}

:deep(.splide__arrow svg) {
  block-size: 1.2em;
  fill: var(--link);
  inline-size: 1.2em;
}

:deep(.splide__arrow svg > *) {
  stroke-width: 0;
}

:deep(.splide__arrow:hover:not(:disabled)) {
  opacity: 0.9;
}

:deep(.splide__arrow:disabled) {
  opacity: 0.3;
}

:deep(.splide__arrow:focus-visible) {
  outline: 3px solid var(--link-active);
  outline-offset: 3px;
}

:deep(.splide__arrow--prev) {
  left: calc(var(--size-5) * -1);
}

@media (min-width: 1280px) {
  :deep(.splide__arrow--prev) {
    left: calc(var(--size-24) * -1);
  }
}

@media (min-width: 1536px) {
  :deep(.splide__arrow--prev) {
    left: calc(var(--size-32) * -1);
  }
}

:deep(.splide__arrow--prev svg) {
  transform: scaleX(-1);
}

:deep(.splide__arrow--next) {
  right: calc(var(--size-5) * -1);
}

@media (min-width: 1280px) {
  :deep(.splide__arrow--next) {
    right: calc(var(--size-24) * -1);
  }
}

@media (min-width: 1536px) {
  :deep(.splide__arrow--next) {
    right: calc(var(--size-32) * -1);
  }
}

:deep(.splide.is-focus-in .splide__arrow:focus) {
  outline: 3px solid var(--link-active);
  outline-offset: 3px;
}

:deep(.splide__pagination) {
  align-items: center;
  bottom: calc(var(--size-12) * -1);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  left: 0;
  margin: 0;
  padding: 0 1em;
  pointer-events: none;
  position: absolute;
  right: 0;
  z-index: var(--layer-1);
}

:deep(.splide__pagination li) {
  display: inline-block;
  line-height: 1;
  list-style-type: none;
  margin: 0;
  pointer-events: auto;
}

:deep(.splide__pagination__page) {
  background: hsl(0deg 0% 80%);
  block-size: var(--size-2);
  border: 0;
  border-radius: 50%;
  display: inline-block;
  inline-size: var(--size-2);
  margin: var(--size-1);
  padding: 0;
  position: relative;
  transition: transform 145ms var(--ease-2), outline-offset 145ms var(--ease-2);
}

:deep(.splide__pagination__page.is-active) {
  background: var(--link);
  transform: scale(1.4);
  z-index: var(--layer-1);
}

:deep(.splide__pagination__page:hover) {
  cursor: pointer;
  opacity: 0.9;
}

:deep(.splide__pagination__page:focus-visible),
:deep(.splide.is-focus-in .splide__pagination__page:focus) {
  outline: 3px solid var(--link-active);
  outline-offset: 5px;
}

:deep(.splide__progress__bar) {
  background: hsl(0deg 0% 80%);
  block-size: 3px;
  inline-size: 0;
}

:deep(.splide__slide:focus) {
  outline: 0;
}

@supports (outline-offset: -3px) {
  :deep(.splide__slide:focus-visible) {
    outline: 3px solid hsl(196deg 100% 50%);
    outline-offset: -3px;
  }
}

@media screen and (-ms-high-contrast: none) {
  :deep(.splide__slide:focus-visible) {
    border: 3px solid hsl(196deg 100% 50%);
  }
}

@supports (outline-offset: -3px) {
  :deep(.splide.is-focus-in .splide__slide:focus) {
    outline: 3px solid hsl(196deg 100% 50%);
    outline-offset: -3px;
  }
}

@media screen and (-ms-high-contrast: none) {
  :deep(.splide.is-focus-in .splide__slide:focus) {
    border: 3px solid hsl(196deg 100% 50%);
  }

  :deep(.splide.is-focus-in
      .splide__track
      > .splide__list
      > .splide__slide:focus) {
    border-color: hsl(196deg 100% 50%);
  }
}

:deep(.splide__toggle) {
  cursor: pointer;
}

:deep(.splide__toggle:focus-visible) {
  outline: 3px solid hsl(196deg 100% 50%);
  outline-offset: 3px;
}

:deep(.splide.is-focus-in .splide__toggle:focus) {
  outline: 3px solid hsl(196deg 100% 50%);
  outline-offset: 3px;
}

:deep(.splide__track--nav > .splide__list > .splide__slide) {
  border: 3px solid transparent;
  cursor: pointer;
}

:deep(.splide__track--nav > .splide__list > .splide__slide.is-active) {
  border: 3px solid hsl(0deg 0% 0%);
}

:deep(.splide__arrows--rtl .splide__arrow--prev) {
  left: auto;
  right: 1em;
}

:deep(.splide__arrows--rtl .splide__arrow--prev svg) {
  transform: scaleX(1);
}

:deep(.splide__arrows--rtl .splide__arrow--next) {
  left: 1em;
  right: auto;
}

:deep(.splide__arrows--rtl .splide__arrow--next svg) {
  transform: scaleX(-1);
}

:deep(.splide__arrows--ttb .splide__arrow) {
  left: 50%;
  transform: translate(-50%);
}

:deep(.splide__arrows--ttb .splide__arrow--prev) {
  top: 1em;
}

:deep(.splide__arrows--ttb .splide__arrow--prev svg) {
  transform: rotate(-90deg);
}

:deep(.splide__arrows--ttb .splide__arrow--next) {
  bottom: 1em;
  top: auto;
}

:deep(.splide__arrows--ttb .splide__arrow--next svg) {
  transform: rotate(90deg);
}

:deep(.splide__pagination--ttb) {
  bottom: 0;
  display: flex;
  flex-direction: column;
  left: auto;
  padding: 1em 0;
  right: 0.5em;
  top: 0;
}

/* stylelint-enable selector-class-pattern */
</style>
