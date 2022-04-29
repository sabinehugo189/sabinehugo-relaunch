<template>
  <section
    ref="target"
    class="container"
  >
    <slot></slot>
  </section>
</template>

<script setup>
const isMounted = useMounted();
const target = ref(null);

watch(
  () => isMounted.value,
  (mounted) => {
    if (mounted) {
      target.value.classList.add(`grid-${target.value.children.length}`);
    }
  },
);
</script>

<style scoped>
.container {
  display: grid;
  gap: var(--size-10);
  margin-inline: auto;
  max-inline-size: var(--size-xxl);
}

@media (min-width: 1280px) {
  .container {
    gap: var(--size-40);
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  }
}

:deep(.content) {
  display: flex;
  flex-direction: column;
  gap: var(--size-8);
}

@media (min-width: 1280px) {
  :deep(.content) {
    gap: var(--size-10);
  }
}

:deep(.content > h2) {
  font-size: var(--font-size-fluid-3);
}

:deep(.content > p) {
  font-size: var(--font-size-fluid-0);
}

:deep(.content > .btn) {
  align-self: flex-start;
}
</style>
