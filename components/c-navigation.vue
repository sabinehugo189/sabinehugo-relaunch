<template>
  <ul
    v-if="navigationTree.length"
    class="navigation"
  >
    <li
      v-for="(item, index) in navigationTree"
      :key="index"
    >
      <NuxtLink
        :to="item._path"
        @click="onClick"
      >
        {{ item.label }}
      </NuxtLink>
      <c-navigation
        v-if="item.children"
        :navigation-tree="item.children"
        class="sub-navigation"
      />
    </li>
  </ul>
</template>

<script setup>
/* global useMenuIsVisible */

defineProps({
  navigationTree: {
    type: Array,
    default: () => [],
  },
});

const { getMenuIsVisible, setMenuIsVisible } = useMenuIsVisible();

const onClick = () => {
  if (getMenuIsVisible.value) {
    setMenuIsVisible(!getMenuIsVisible.value);
  }
};
</script>

<style scoped>
.navigation {
  display: inline-flex;
  flex-direction: column;
  font-optical-sizing: auto;
  font-size: var(--font-size-2);
  font-weight: var(--font-weight-4);
  gap: var(--size-5);
  list-style-type: none;
  padding-inline-start: 0;
}

@media (min-width: 768px) {
  .navigation {
    flex-direction: row;
  }
}

.navigation > li {
  padding-inline-start: 0;
}

.navigation > li a:link,
.navigation > li a:visited {
  color: var(--text-1);
  font: inherit;
  text-decoration: none;
}

@media (min-width: 768px) {
  .navigation > li a:link,
  .navigation > li a:visited {
    color: var(--text-5);
  }
}

.navigation > li a:hover {
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-thickness: 3px;
  text-underline-position: under;
}

.navigation > li a:active {
  color: var(--link-visited);
}

.navigation > li a:hover,
.navigation > li a:active {
  background-color: transparent;
}

@media (min-width: 1920px) {
  .navigation {
    column-gap: var(--size-10);
  }
}
</style>
