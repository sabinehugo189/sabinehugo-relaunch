<template>
  <figure>
    <Markdown unwrap="p" />
    <figcaption>{{ props.caption }}</figcaption>
  </figure>
</template>

<script setup>
const props = defineProps({
  caption: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
figure {
  align-items: center;
  aspect-ratio: 1.618 / 1;
  background-color: var(--gray-1);
  border-radius: var(--radius-3);
  box-shadow: var(--shadow-3);
  color: var(--gray-8);
  display: flex;
  flex-direction: column;
  gap: var(--size-4);
  hyphens: auto;
  justify-content: center;
  padding: var(--size-5);
  text-align: center;
}

figcaption {
  color: var(--text-4);
  font-size: var(--font-size-4);
  font-weight: var(--font-weight-8);
  line-height: var(--font-lineheight-1);
}

@media (min-width: 1280px) {
  figure {
    aspect-ratio: 1 / 1;
    gap: var(--size-10);
  }
}

:deep(svg) {
  inline-size: auto;
  max-block-size: var(--size-16);
}

@media (min-width: 1024px) {
  :deep(svg) {
    max-block-size: var(--size-28);
  }
}
</style>
