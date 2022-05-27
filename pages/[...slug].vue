<template>
  <div
    v-if="mounted"
    class="prose"
  >
    <ContentDoc />
  </div>
</template>

<script setup>
const mounted = useMounted();
const route = useRoute();
const [slug = 'home'] = route.params.slug;

definePageMeta({
  layout: 'home',
});

watch(
  () => mounted.value,
  (mounted) => {
    if (mounted) {
      route.meta.layout = slug === 'home' ? 'home' : 'default';
    }
  },
);
</script>
