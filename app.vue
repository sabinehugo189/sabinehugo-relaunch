<template>
  <div class="root">
    <div
      ref="target"
      class="sentinel"
    ></div>
    <c-header />
    <main>
      <NuxtPage />
    </main>
    <c-footer />
  </div>
</template>

<script setup>
/* global useHeaderIsSticky */

const target = ref(null);

const { setHeaderIsSticky } = useHeaderIsSticky();

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
