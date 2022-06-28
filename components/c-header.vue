<template>
  <header
    ref="el"
    class="js-header"
    :class="{ 'is-stuck': headerIsSticky, 'is-home': headerIsHome }"
  >
    <NuxtLink
      to="/#top"
      class="logo"
    >
      <c-logo />
    </NuxtLink>
    <c-utilities />
  </header>
</template>

<script setup>
/* global useElementSize, useHeaderHeight, useHeaderIsSticky */

const route = useRoute();
const headerIsHome = ref(route.meta.layout === 'home');

const { setHeaderHeight } = useHeaderHeight();
const { headerIsSticky } = useHeaderIsSticky();

const el = ref(null);
const { height } = useElementSize(el);

setHeaderHeight(height);

watch(
  () => route.meta.layout,
  (value) => {
    headerIsHome.value = value === 'home';
  },
);
</script>

<style scoped>
header {
  align-items: center;
  background-color: var(--surface-1);
  color: var(--text-4);
  display: flex;
  justify-content: space-between;
  left: 0;
  padding-block: var(--size-3);
  padding-inline: var(--size-10);
  position: sticky;
  right: 0;
  top: 0;
  transition: background-color 300ms var(--ease-2),
    border-radius 300ms var(--ease-2), box-shadow 300ms var(--ease-2);
  z-index: var(--layer-1);
}

.is-stuck {
  background-color: hsl(var(--surface-1-hsl) / 0.95);
  border-end-end-radius: var(--radius-3);
  border-end-start-radius: var(--radius-3);
  box-shadow: var(--shadow-2);
}

.is-home {
  background-color: var(--surface-2);
}

.is-stuck.is-home {
  background-color: hsl(var(--surface-2-hsl) / 0.95);
}

.logo:hover {
  background-color: transparent;
}

@media (min-width: 768px) {
  header {
    padding-inline: var(--size-10);
  }
}

@media (min-width: 1280px) {
  header {
    padding-inline: var(--size-30);
  }
}

@media (min-width: 1536px) {
  header {
    padding-inline: var(--size-50);
  }
}
</style>
