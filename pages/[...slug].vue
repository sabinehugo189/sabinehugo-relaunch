<template>
  <div v-if="mounted">
    <ContentDoc />
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'home',
});

const mounted = useMounted();
const route = useRoute();
const [slug = 'home'] = route.params.slug;

watch(
  () => mounted.value,
  (mounted) => {
    if (mounted) {
      route.meta.layout = slug === 'home' ? 'home' : 'default';
    }
  },
);
</script>

<style scoped>
:deep(div[excerpt]) {
  display: flex;
  flex-direction: column;
  row-gap: var(--size-48);
}
</style>
