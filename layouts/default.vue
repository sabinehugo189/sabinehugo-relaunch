<template>
  <div class="container">
    <slot />
  </div>
</template>

<script setup>
useHead({
  meta: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1, maximum-scale=1',
    },
    {
      'http-equiv': 'X-UA-Compatible',
      content: 'ie=edge',
    },
  ],
  htmlAttrs: {
    lang: 'de',
  },
});
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  margin-inline: auto;
  max-inline-size: var(--size-xxxl);
  padding-inline: var(--size-5);
  row-gap: var(--size-48);
}

@media (min-width: 1280px) {
  .container {
    padding-inline: var(--size-10);
  }
}
</style>
