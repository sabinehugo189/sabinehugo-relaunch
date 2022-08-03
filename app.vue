<template>
  <div class="root">
    <div
      ref="sentinel"
      class="sentinel"
    ></div>
    <c-header />
    <NuxtPage />
    <c-footer />
  </div>
</template>

<script setup>
/* global useHeaderIsSticky, usePageIsPlain */

const isMounted = useMounted();
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

watch(
  () => isMounted.value,
  (mounted) => {
    if (mounted) {
      const externalScript = document.createElement('script');

      externalScript.setAttribute('id', 'CookieDeclaration');

      externalScript.setAttribute(
        'src',
        'https://consent.cookiebot.com/a19ea317-f1ca-447c-889e-9d8b4465037a/cd.js',
      );

      externalScript.setAttribute('async', 'async');

      document.body.appendChild(externalScript);
    }
  },
);
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

@media (min-width: 1280px) {
  .root {
    grid-template-rows: var(--size-16) auto 1fr auto;
  }
}
</style>
