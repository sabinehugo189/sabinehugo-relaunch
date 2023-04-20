<template>
  <ul class="icons">
    <li
      v-for="(icon, index) in icons"
      :key="`icon-${uid}-${index}`"
      class="icon"
    >
      <c-icon
        :caption="icon.caption"
        :icon-name="icon.iconName"
      />
    </li>
  </ul>
</template>

<script setup>
defineProps({
  icons: {
    type: Object,
    required: true,
  },
});

const { uid } = getCurrentInstance();
</script>

<style scoped>
.icons {
  display: grid;
  gap: var(--size-8);
  list-style: none;
  padding-inline-start: 0;
}

.icon {
  padding-inline-start: 0;
}

@media (min-width: 768px) {
  .icons {
    grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
    justify-content: center;
  }
}
</style>
