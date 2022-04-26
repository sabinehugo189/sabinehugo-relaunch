<template>
  <div class="container">
    <a
      href="tel:+4925160900103"
      class="link"
    >
      <svg
        aria-labelledby="phoneSabineHugo"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <title id="phoneSabineHugo">Anrufen</title>
        <path
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
      <span>+49 251 60 900 103</span>
    </a>
    <NuxtLink
      to="#contact"
      :class="[isStuck && lgNAbove ? 'btn is-small' : 'link']"
    >
      <svg
        aria-labelledby="emailSabineHugo"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <title id="emailSabineHugo">Zum Kontakformular</title>
        <path
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
      <span>Jetzt Termin vereinbaren</span>
    </NuxtLink>
  </div>
</template>

<script setup>
/* global useBreakpoints */
import { breakpointsTailwind } from '@vueuse/core';

const breakpoints = useBreakpoints(breakpointsTailwind);
const lgNAbove = breakpoints.greater('lg');

const props = defineProps({
  isStuck: {
    type: Boolean,
    default: false,
  },
});

const isStuck = ref(false);

watch(
  () => props.isStuck,
  (stuck) => {
    isStuck.value = stuck;
  },
);
</script>

<style scoped>
.container {
  display: flex;
  gap: var(--size-5);
}

.link:link,
.link:visited {
  align-items: center;
  color: var(--link);
  display: inline-flex;
  font-size: var(--font-size-2);
  font-weight: var(--font-weight-8);
  gap: var(--size-2);
  justify-content: center;
  text-decoration: none;
}

.link:hover {
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-thickness: 3px;
  text-underline-position: under;
}

.link:active {
  color: var(--link-visited);
}

.link:hover,
.link:active {
  background-color: transparent;
}

.link > span {
  display: none;
}

svg {
  block-size: 2ch;
  inline-size: 2ch;
  stroke-width: 2;
}

.btn > svg {
  display: none;
}

button {
  display: none;
}

@media (min-width: 1024px) {
  .container {
    gap: var(--size-10);
  }

  .link > span {
    display: block;
  }
}
</style>
