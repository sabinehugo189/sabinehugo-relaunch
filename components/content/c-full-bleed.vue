<template>
  <section class="container">
    <c-component-header
      v-if="title"
      :title="title"
      :title-tag="titleTag"
      :description="description"
    />
    <Markdown />
  </section>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  titleTag: {
    type: String,
    default: 'h2',
  },
  description: {
    type: String,
    default: '',
  },
});
</script>

<style scoped>
.container {
  background-color: var(--surface-2);
  display: flex;
  flex-direction: column;
  gap: var(--size-10);
  margin-inline: calc(var(--size-10) * -1);
  padding-block: var(--size-20);
  padding-inline: var(--size-10);
}

@media (min-width: 1280px) {
  .container {
    padding-inline: var(--size-30);
  }
}

@media (min-width: 1536px) {
  .container {
    gap: var(--size-16);
    padding-block: var(--size-30);
    padding-inline: var(--size-50);
  }
}

header {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: var(--size-8);
  text-align: center;
}

@media (min-width: 768px) {
  header {
    align-items: center;
    text-align: center;
  }
}

.headline {
  font-size: var(--font-size-fluid-3);
}

.paragraph {
  font-size: var(--font-size-fluid-0);
}
</style>
