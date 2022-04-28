<template>
  <section class="container">
    <header>
      <h2 id="carouselhead">
        Ist eine Invisalign® Zahnschiene die richtige Lösung für mich?
      </h2>
    </header>
    <Splide
      :options="options"
      :tag="section"
      aria-labeledby="carouselhead"
      class="carousel"
    >
      <SplideSlide>
        <c-card
          head="Ich habe in meiner Jugend keine Zahnspange getragen. Heute bereue ich das."
          body="Kein Problem! Holen Sie die erfolgreiche Korrektur Ihrer Zahnfehlstellung einfach jetzt nach. Mit Invisalign geht das besonders unauffällig."
          img-src="https://via.placeholder.com/486x222?text=Golden+Ratio"
        />
      </SplideSlide>
      <SplideSlide>
        <c-card
          head="Ich habe in meiner Jugend eine Zahnspange getragen, aber meine Zähne haben sich mittlerweile verschoben."
          body="Mit den unsichtbaren Invisalign Zahnschienen lassen sich Zähne jederzeit in die gewünschte Position bringen. Bis ins hohe Alter!"
          img-src="https://via.placeholder.com/486x222?text=Golden+Ratio"
        />
      </SplideSlide>
      <SplideSlide>
        <c-card
          head="Wir suchen eine Lösung für unser heranwachsendes Kind. Es ist sehr schmerzempfindlich und möchte in der Pubertät keine feste Zahnspange."
          body="Invisalign Zahnschienen sind – anders als eine klassische Zahnspange – besonders angenehm einzusetzen, zu tragen und herauszunehmen."
          img-src="https://via.placeholder.com/486x222?text=Golden+Ratio"
        />
      </SplideSlide>
      <SplideSlide>
        <c-card
          head="Ich leide unter Parodontose. In letzter Zeit ist das Zahnfleisch zurückgegangen und meine Zähne haben sich verschoben."
          body="Mit Invisalign lassen sich Zahnfehlstellungen besonders sanft und schmerzfrei korrigieren, weil diese Korrektur ohne Brackets und Drähte auskommt."
          img-src="https://via.placeholder.com/486x222?text=Golden+Ratio"
        />
      </SplideSlide>
    </Splide>
  </section>
</template>

<script setup>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
/* eslint-disable-next-line import/no-unresolved */
import '@splidejs/vue-splide/css/core';

/* global useBreakpoints */
import { breakpointsTailwind } from '@vueuse/core';

const breakpoints = useBreakpoints(breakpointsTailwind);
const mdNAbove = breakpoints.greater('md');
const lgNAbove = breakpoints.greater('lg');
const xlNAbove = breakpoints.greater('xl');

const options = reactive({
  gap: '1.25rem',
  width: 'calc(100vw - 5rem)',
});

watch(
  () => mdNAbove.value,
  (value) => {
    if (value) {
      options.perPage = 2;
    }
  },
);

watch(
  () => lgNAbove.value,
  (value) => {
    if (value) {
      options.perPage = 3;
    }
  },
);

watch(
  () => xlNAbove.value,
  (value) => {
    if (value) {
      options.gap = '2rem';
      options.width = 'calc(80vw - 5rem)';
    }
  },
);
</script>

<style scoped>
.container {
  background-color: var(--surface-2);
  border-radius: var(--radius-3);
  display: flex;
  flex-direction: column;
  gap: var(--size-12);
  padding-block: var(--size-20);
}

@media (min-width: 1280px) {
  .container {
    gap: var(--size-16);
    padding-block: var(--size-48);
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
  z-index: 1;
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
  z-index: 1;
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
  z-index: 1;
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
  z-index: 1;
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
