<template>
  <header
    ref="el"
    class="js-header"
    :class="{ 'is-stuck': isStuck }"
  >
    <div class="inner">
      <c-logo />
      <c-utilities :is-stuck="isStuck" />
    </div>
  </header>
</template>

<script setup>
/* global useElementSize, useHeaderHeight */
const props = defineProps({
  isStuck: {
    type: Boolean,
    default: false,
  },
});

const isStuck = ref(false);

watch(
  () => props.isStuck,
  (stuck) => {
    isStuck.value = stuck;
  },
);

const { setHeaderHeight } = useHeaderHeight();

const el = ref(null);
const { height } = useElementSize(el);

setHeaderHeight(height);
</script>

<style scoped>
header {
  color: var(--text-4);
  max-inline-size: var(--size-xxxl);
  padding-inline: var(--size-5);
  position: sticky;
  top: 0;
  z-index: var(--layer-1);
}

.inner {
  align-items: center;
  background-color: var(--surface-2);
  border-start-end-radius: var(--size-5);
  border-start-start-radius: var(--size-5);
  display: flex;
  justify-content: space-between;
  padding: var(--size-5);
  transition: background-color 300ms var(--ease-2),
    border-radius 300ms var(--ease-2), box-shadow 300ms var(--ease-2);
}

.is-stuck > .inner {
  background-color: hsl(var(--surface-2-hsl) / 0.95);
  border-end-end-radius: var(--size-5);
  border-end-start-radius: var(--size-5);
  border-start-end-radius: 0;
  border-start-start-radius: 0;
  box-shadow: var(--shadow-2);
}

@media (min-width: 1280px) {
  header {
    padding-inline: var(--size-10);
  }

  .inner {
    padding-inline: var(--size-20);
  }
}

@media (min-width: 1536px) {
  .inner {
    padding-inline: var(--size-40);
  }
}
</style>
