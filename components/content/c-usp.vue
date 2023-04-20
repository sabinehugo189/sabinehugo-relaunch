<template>
  <ul class="items">
    <li
      v-for="(item, index) in items"
      :key="`item-${index}`"
      class="item"
    >
      <c-usp-item
        :description="item.description"
        :icon-name="item.iconName"
        :title="item.title"
      />
    </li>
  </ul>
</template>

<script setup>
defineProps({
  items: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
.items {
  display: grid;
  gap: var(--size-16);
  list-style: none;
  padding-inline-start: 0;
}

@media (width >= 768px) {
  .items {
    gap: var(--size-16) var(--size-4);
    grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
    justify-content: center;
  }
}

@media (width >= 1024px) {
  .items {
    gap: var(--size-5);
  }
}

@media (width >= 1536px) {
  .items {
    gap: var(--size-8);
  }
}
</style>
