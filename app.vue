<template>
  <div class="root">
    <div
      ref="sentinel"
      class="sentinel"
    ></div>
    <a
      id="top"
      name="top"
    />
    <c-header />
    <NuxtPage />
    <c-footer />
  </div>
</template>

<script setup>
/* global useHeaderIsSticky, usePageIsPlain */

const { setHeaderIsSticky } = useHeaderIsSticky();
const sentinel = ref(null);

useIntersectionObserver(sentinel, ([{ isIntersecting }]) => {
  setHeaderIsSticky(!isIntersecting);
});

const route = useRoute();
const { setPageIsPlain } = usePageIsPlain();

watchEffect(() => {
  const [slug = 'home'] = route.params.slug;

  switch (slug) {
    case 'imprint':
    case 'privacy':
      setPageIsPlain(true);
      break;
    default:
      setPageIsPlain(false);
      break;
  }
});
</script>

<style scoped>
.root {
  display: grid;
  grid-template-rows: var(--size-7) auto 1fr auto;
  position: relative;
}

.sentinel {
  display: flex;
}

#top {
  left: 0;
  position: absolute;
  top: 0;
}

@media (min-width: 1280px) {
  .root {
    grid-template-rows: var(--size-16) auto 1fr auto;
  }
}
</style>
