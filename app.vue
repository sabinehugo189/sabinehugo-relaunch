<template>
  <div class="root">
    <div
      ref="target"
      class="sentinel"
    ></div>
    <c-header />
    <main>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </main>
    <c-footer />
  </div>
</template>

<script setup>
/* global useHeaderIsSticky */

useHead({
  meta: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1.0',
    },
    {
      'http-equiv': 'X-UA-Compatible',
      content: 'ie=edge',
    },
  ],
  title: 'Website von Sabine Hugo',
  htmlAttrs: {
    lang: 'de',
  },
});

const { setHeaderIsSticky } = useHeaderIsSticky();
const target = ref(null);

useIntersectionObserver(target, ([{ isIntersecting }]) => {
  setHeaderIsSticky(!isIntersecting);
});
</script>

<style scoped>
.sentinel {
  background-color: transparent;
  height: var(--size-px);
}

.root {
  display: grid;
  grid-template-rows: auto 1fr auto;
  padding-block: calc(var(--size-5) - var(--size-px)) var(--size-5);
  position: relative;
}

@media (min-width: 1280px) {
  .root {
    padding-block: calc(var(--size-10) - var(--size-px)) var(--size-10);
  }
}
</style>
