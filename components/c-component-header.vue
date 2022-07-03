<template>
  <header>
    <component
      :is="titleTag"
      class="headline"
      >{{ title }}</component
    >
    <p
      v-if="description"
      class="paragraph"
    >
      {{ description }}
    </p>
  </header>
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
