<template>
  <div
    ref="target"
    class="sentinel"
  ></div>
  <c-header :is-stuck="isHidden" />
  <main>
    <NuxtPage />
  </main>
  <c-footer />
</template>

<script setup>
const target = ref(null);
const isHidden = ref(false);

useIntersectionObserver(target, ([{ isIntersecting }]) => {
  isHidden.value = !isIntersecting;
});
</script>

<style scoped>
.sentinel {
  background-color: transparent;
  height: var(--size-px);
  margin-block-start: calc(var(--size-px) * -1);
}
</style>
