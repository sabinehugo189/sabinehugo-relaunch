<template>
  <header :class="{ 'is-stuck': isStuck }">
    <div class="inner">
      <c-logo />
      <c-utilities :is-stuck="isStuck" />
    </div>
  </header>
</template>

<script setup>
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
</script>

<style scoped>
header {
  color: var(--brand);
  max-inline-size: var(--size-xxxl);
  padding-inline: var(--size-5);
  position: sticky;
  top: 0;
}

.inner {
  align-items: center;
  background-color: var(--gray-1);
  border-start-end-radius: var(--size-5);
  border-start-start-radius: var(--size-5);
  display: flex;
  justify-content: space-between;
  padding: var(--size-5);
  transition: background-color 0.25s ease-in-out, box-shadow 0.25s ease-in-out;
}

.is-stuck > .inner {
  background-color: hsl(var(--white-hsl) / 0.95);
  border-end-end-radius: var(--size-5);
  border-end-start-radius: var(--size-5);
  border-start-end-radius: 0;
  border-start-start-radius: 0;
  box-shadow: var(--shadow-2);
}

@media (--xl-n-above) {
  header {
    padding-inline: var(--size-10);
  }

  .inner {
    padding-inline: var(--size-40);
  }
}
</style>
