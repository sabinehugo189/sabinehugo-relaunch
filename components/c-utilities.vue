<template>
  <div class="container">
    <a href="tel:+4925160900103">
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
      href="/#contact"
      :class="{ 'is-btn': isStuck }"
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

a[href]:link,
a[href]:visited {
  align-items: center;
  color: var(--link);
  display: inline-flex;
  font-size: var(--font-size-2);
  font-weight: var(--font-weight-8);
  gap: var(--size-2);
  justify-content: center;
  text-decoration: none;
}

a[href]:hover {
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-thickness: 3px;
  text-underline-position: under;
}

a[href]:active {
  color: var(--link-visited);
}

a[href]:hover,
a[href]:active {
  background-color: transparent;
}

span {
  display: none;
}

svg {
  block-size: 2ch;
  inline-size: 2ch;
}

button {
  display: none;
}

@media (--xl-n-above) {
  .container {
    gap: var(--size-10);
  }

  span {
    display: block;
  }

  a[href].is-btn:link,
  a[href].is-btn:visited {
    background-color: var(--orange-5);
    background-image: var(--gradient-19);
    border-radius: 0 var(--radius-5) var(--radius-5) var(--radius-5);
    color: white;
    font-size: var(--font-size-1);
    line-height: var(--font-lineheight-0);
    padding: var(--size-2) var(--size-7);
    -webkit-tap-highlight-color: transparent;
    text-align: center;
    text-decoration: none;
    -webkit-touch-callout: none;
    transition: background-color 0.5s var(--ease-3) 3s;
    user-select: none;
  }

  a[href].is-btn:hover {
    background-color: var(--link);
    background-image: none;
    transition-delay: 0s;
    transition-duration: 0.25s;
  }

  a[href].is-btn:focus {
    outline-width: medium;
  }

  a[href].is-btn:active {
    background-color: var(--link-visited);
    background-image: none;
    transition-delay: 0s;
    transition-duration: 0.25s;
  }

  a[href].is-btn > svg {
    display: none;
  }
}
</style>
