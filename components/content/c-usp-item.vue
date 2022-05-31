<template>
  <div class="item">
    <figure>
      <Markdown unwrap="p" />
    </figure>
    <h3>{{ props.title }}</h3>
    <p>{{ props.description }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.item {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: var(--size-8);
  padding-inline-start: 0;
  text-align: center;
}

@media (min-width: 1024px) {
  .item {
    align-items: flex-start;
    text-align: left;
  }
}

figure {
  align-items: center;
  aspect-ratio: 1 / 1;
  background-color: var(--gray-1);
  block-size: var(--size-40);
  border-radius: var(--radius-3);
  box-shadow: var(--shadow-3);
  color: var(--gray-8);
  display: flex;
  inline-size: var(--size-40);
  justify-content: center;
}

:deep(svg) {
  inline-size: var(--size-16);
  max-block-size: var(--size-16);
}

h3 {
  font-size: var(--font-size-fluid-1);
}

p {
  font-size: var(--font-size-fluid-0);
  margin-block-start: calc(var(--size-3) * -1);
}
</style>
