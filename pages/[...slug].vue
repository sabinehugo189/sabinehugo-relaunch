<template>
  <main
    :class="{
      'is-plain': getPageIsPlain,
    }"
  >
    <ContentDoc />
  </main>
</template>

<script setup>
/* global usePageIsPlain, useSabineHugo */

const { getPageIsPlain } = usePageIsPlain();

const sh = useSabineHugo();
const route = useRoute();

useHead({
  link: [
    {
      rel: 'canonical',
      content: `${sh.value.protocol}://${sh.value.hostname}${route.path}`,
    },
  ],
});
</script>

<style scoped>
main {
  margin-inline: auto;
  max-inline-size: var(--size-xxxl);
  padding-inline: var(--size-5);
  width: 100%;
}

@media (width >= 768px) {
  main {
    padding-inline: var(--size-10);
  }
}

@media (width >= 1280px) {
  main {
    padding-inline: var(--size-30);
  }
}

@media (width >= 1536px) {
  main {
    padding-inline: var(--size-50);
  }
}

main.is-plain {
  padding-block-start: var(--size-16);
}

main > :deep(div) {
  display: flex;
  flex-direction: column;
  row-gap: var(--size-48);
}
</style>
