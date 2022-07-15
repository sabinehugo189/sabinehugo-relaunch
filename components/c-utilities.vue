<template>
  <div class="container">
    <a
      :href="`tel:${data['p-tel'].replace(/\s/g, '')}`"
      class="link link-phone"
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
      <span>{{ data['p-tel'] }}</span>
    </a>
    <NuxtLink
      to="/contact/#contact"
      :class="[
        getHeaderIsSticky && xxxlNAbove ? 'btn is-small' : 'link link-contact',
      ]"
      @click="onClick"
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
/* global queryContent ,useBreakpoints, useHeaderIsSticky, useMenuIsOpen */

const { getHeaderIsSticky } = useHeaderIsSticky();
const { getMenuIsOpen, setMenuIsOpen } = useMenuIsOpen();

const breakpoints = useBreakpoints({
  '3xl': 1920,
});

const xxxlNAbove = breakpoints.greater('3xl');

function onClick() {
  if (getMenuIsOpen.value) {
    document.body.classList.remove('scrollstop');
    setMenuIsOpen(!getMenuIsOpen.value);
  }
}

const { data } = await useAsyncData('address', () => {
  return queryContent('_h-card')
    .where({ _partial: true })
    .only(['p-tel'])
    .findOne();
});
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
  font-optical-sizing: auto;
  font-size: var(--font-size-2);
  font-weight: var(--font-weight-4);
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
  .link-phone > span {
    display: block;
  }
}

@media (min-width: 1920px) {
  .container {
    gap: var(--size-10);
  }

  .link-contact > span {
    display: block;
  }
}
</style>
