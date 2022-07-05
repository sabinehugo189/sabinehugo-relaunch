<template>
  <header
    ref="target"
    :class="{
      'is-plain': getPageIsPlain,
      'is-sticky': getHeaderIsSticky,
    }"
  >
    <NuxtLink
      to="/"
      class="logo"
    >
      <c-logo :size="logoSize" />
    </NuxtLink>
    <div class="navigation">
      <nav v-if="navigation.length">
        <c-menu :navigation-tree="navigation" />
      </nav>
      <c-utilities />
    </div>
  </header>
</template>

<script setup>
/* global fetchContentNavigation, useHeaderHeight, useHeaderIsSticky usePageIsPlain */

const { data: navigation } = await useAsyncData('navigation', () => {
  return fetchContentNavigation();
});

const { setHeaderHeight } = useHeaderHeight();
const { getHeaderIsSticky } = useHeaderIsSticky();
const { getPageIsPlain } = usePageIsPlain();

const isMounted = useMounted();
const logoSize = ref(null);
const target = ref(null);

watchEffect(() => {
  logoSize.value = getHeaderIsSticky.value ? '2rem' : '2.5rem';

  if (isMounted.value) {
    setHeaderHeight(target.value.offsetHeight);
  }
});
</script>

<style scoped>
header {
  align-items: center;
  background-color: var(--surface-2);
  color: var(--text-4);
  display: flex;
  justify-content: space-between;
  margin-inline: auto;
  max-inline-size: var(--size-xxxl);
  padding-block: var(--size-3);
  padding-inline: var(--size-10);
  position: sticky;
  top: 0;
  transition: background-color 300ms var(--ease-2),
    border-radius 300ms var(--ease-2), box-shadow 300ms var(--ease-2);
  width: 100%;
  z-index: var(--layer-2);
}

header::before {
  background-color: var(--surface-2);
  content: '';
  height: var(--size-7);
  left: 0;
  position: absolute;
  top: calc(var(--size-7) * -1);
  width: 100%;
}

.is-sticky {
  background-color: hsl(var(--surface-2-hsl) / 0.95);
  border-end-end-radius: var(--radius-3);
  border-end-start-radius: var(--radius-3);
  box-shadow: var(--shadow-2);
}

.is-plain,
.is-plain::before {
  background-color: var(--surface-1);
}

.is-sticky.is-plain {
  background-color: hsl(var(--surface-1-hsl) / 0.95);
}

.logo:hover {
  background-color: transparent;
}

.navigation {
  align-items: center;
  column-gap: var(--size-5);
  display: flex;
}

@media (min-width: 768px) {
  .navigation {
    column-gap: var(--size-10);
  }
}

@media (min-width: 1280px) {
  header {
    padding-inline: var(--size-30);
  }

  header::before {
    height: var(--size-16);
    top: calc(var(--size-16) * -1);
  }
}

@media (min-width: 1536px) {
  header {
    padding-inline: var(--size-50);
  }

  .navigation {
    column-gap: var(--size-24);
  }
}
</style>
