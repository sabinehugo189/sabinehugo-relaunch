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
      switch (slug) {
        case 'home':
          route.meta.layout = 'home';
          break;

        default:
          route.meta.layout = 'default';
          break;
      }
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
