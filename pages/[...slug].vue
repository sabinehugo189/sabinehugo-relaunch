<template>
  <div
    v-if="mounted"
    class="prose"
    :class="[proseModifier]"
  >
    <ContentDoc />
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'home',
});

const proseModifier = ref('');
const mounted = useMounted();
const route = useRoute();
const [slug = 'home'] = route.params.slug;

switch (slug) {
  case 'imprint':
  case 'privacy':
    proseModifier.value = 'is-full-page';
    break;
  default:
    proseModifier.value = 'is-components';
    break;
}

watch(
  () => mounted.value,
  (mounted) => {
    if (mounted) {
      route.meta.layout = slug === 'home' ? 'home' : 'default';
    }
  },
);
</script>
