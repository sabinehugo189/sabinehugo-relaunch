<template>
  <header
    ref="el"
    class="js-header"
    :class="{ 'is-stuck': headerIsSticky }"
  >
    <div class="header-inner">
      <c-logo />
      <c-utilities />
    </div>
  </header>
</template>

<script setup>
/* global useElementSize, useHeaderHeight, useHeaderIsSticky */
const { setHeaderHeight } = useHeaderHeight();
const { headerIsSticky } = useHeaderIsSticky();

const el = ref(null);
const { height } = useElementSize(el);

setHeaderHeight(height);
</script>

<style scoped>
header {
  color: var(--text-4);
  margin-inline: auto;
  max-inline-size: var(--size-xxxl);
  padding-inline: var(--size-5);
  position: sticky;
  top: 0;
  width: 100%;
  z-index: var(--layer-1);
}

.header-inner {
  align-items: center;
  background-color: var(--surface-2);
  border-start-end-radius: var(--radius-3);
  border-start-start-radius: var(--radius-3);
  display: flex;
  justify-content: space-between;
  padding: var(--size-5);
  transition: background-color 300ms var(--ease-2),
    border-radius 300ms var(--ease-2), box-shadow 300ms var(--ease-2);
}

.is-stuck > .header-inner {
  background-color: hsl(var(--surface-2-hsl) / 0.95);
  border-end-end-radius: var(--radius-3);
  border-end-start-radius: var(--radius-3);
  border-start-end-radius: 0;
  border-start-start-radius: 0;
  box-shadow: var(--shadow-2);
}

@media (min-width: 1280px) {
  header {
    padding-inline: var(--size-10);
  }

  .header-inner {
    padding-inline: var(--size-20);
  }
}

@media (min-width: 1536px) {
  .header-inner {
    padding-inline: var(--size-40);
  }
}
</style>
