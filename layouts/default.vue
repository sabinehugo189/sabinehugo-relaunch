<template>
  <div
    class="wrapper"
    :class="{
      'is-plain': isPlain,
    }"
  >
    <div class="container">
      <slot />
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const [slug = 'home'] = route.params.slug;
const isPlain = ref(slug === 'imprint' || slug === 'privacy' ? true : false);

watch(
  () => route.params.slug,
  ([slug]) => {
    switch (slug) {
      case 'imprint':
      case 'privacy':
        isPlain.value = true;
        break;

      default:
        isPlain.value = false;
        break;
    }
  },
);
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  margin-inline: auto;
  max-inline-size: var(--size-xxxl);
  padding-inline: var(--size-5);
  row-gap: var(--size-48);
}

.wrapper.is-plain {
  padding-block-start: var(--size-16);
}

.container {
  display: flex;
  flex-direction: column;
  padding-inline: var(--size-5);
  row-gap: var(--size-48);
}

@media (min-width: 1280px) {
  .wrapper {
    padding-inline: var(--size-10);
  }

  .container {
    padding-inline: 0;
  }
}
</style>
