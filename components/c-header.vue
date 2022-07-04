<template>
  <header
    ref="header"
    class="js-header"
    :class="{
      'is-menu': getMenuIsVisible,
      'is-plain': getPageIsPlain,
      'is-sticky': getHeaderIsSticky,
    }"
  >
    <NuxtLink
      to="/#top"
      class="logo"
      @click="closeMenu"
    >
      <c-logo
        v-if="getMenuIsVisible"
        fill="hsl(0deg 0% 98%)"
      />
      <c-logo v-else />
    </NuxtLink>
    <div class="nav-bar">
      <nav v-if="mdNAbove && navigation.length">
        <c-navigation :navigation-tree="navigation" />
      </nav>
      <c-utilities />
      <button
        v-if="mdNBelow && navigation.length"
        class="is-link"
        @click="toggleMenuVisibility"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            v-if="getMenuIsVisible"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
          <path
            v-if="!getMenuIsVisible"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>
    <nav v-if="mdNBelow && getMenuIsVisible">
      <c-navigation :navigation-tree="navigation" />
    </nav>
  </header>
</template>

<script setup>
/*
  global
  fetchContentNavigation,
  useBreakpoints,
  useHeaderHeight,
  useHeaderIsSticky
  useMenuIsVisible,
  usePageIsPlain
 */

const breakpoints = useBreakpoints({
  md: 768,
});

const mdNBelow = breakpoints.smaller('md');
const mdNAbove = breakpoints.greater('md');

const { data: navigation } = await useAsyncData('navigation', () => {
  return fetchContentNavigation();
});

const { setHeaderHeight } = useHeaderHeight();
const { getHeaderIsSticky } = useHeaderIsSticky();
const { getMenuIsVisible, setMenuIsVisible } = useMenuIsVisible();
const { getPageIsPlain } = usePageIsPlain();

const isMounted = useMounted();
const header = ref(null);

watch(
  () => isMounted.value,
  (mounted) => {
    if (mounted) {
      setHeaderHeight(header.value.offsetHeight);
    }
  },
);

const closeMenu = () => {
  if (getMenuIsVisible.value) {
    document.body.removeAttribute('style');
    setMenuIsVisible(!getMenuIsVisible.value);
  }
};

const toggleMenuVisibility = () => {
  if (getMenuIsVisible.value) {
    document.body.removeAttribute('style');
  } else {
    document.body.style.height = '100vh';
    document.body.style['overflow-y'] = 'hidden';
  }

  setMenuIsVisible(!getMenuIsVisible.value);
};
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

header.is-menu > .nav-bar :deep(svg > path) {
  stroke: var(--text-1);
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

.is-menu {
  align-items: flex-start;
  background-color: var(--surface-5);
  color: var(--text-1);
  display: grid;
  grid-template: min-content auto / auto 1fr;
  grid-template-areas:
    'logo navbar'
    'navigation navigation';
  inset: 0;
  padding-block-start: var(--size-10);
  position: fixed;
  row-gap: var(--size-20);
}

.is-menu.is-sticky {
  background-color: var(--surface-5);
  padding-block-start: var(--size-3);
}

.is-menu > .logo {
  grid-area: logo;
}

.is-menu > .nav-bar {
  grid-area: navbar;
  justify-content: flex-end;
}

.is-menu > nav {
  grid-area: navigation;
}

.logo:hover {
  background-color: transparent;
}

.nav-bar {
  align-items: center;
  column-gap: var(--size-5);
  display: flex;
}

.nav-bar > nav {
  display: flex;
  order: 1;
}

@media (min-width: 768px) {
  .nav-bar {
    column-gap: var(--size-10);
  }

  .nav-bar > nav {
    order: 0;
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

  .nav-bar {
    column-gap: var(--size-24);
  }
}
</style>
