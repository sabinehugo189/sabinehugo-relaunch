<template>
  <iframe
    :src="url"
    title="Virtueller Rundgang"
    width="640"
    height="480"
  ></iframe>
</template>

<script setup>
defineProps({
  url: {
    type: String,
    default: '',
  },
});
</script>

<style scoped>
iframe {
  inline-size: 100%;
}

@media (orientation: landscape) {
  iframe {
    aspect-ratio: 4 / 3;
  }
}

@media (orientation: portrait) {
  iframe {
    aspect-ratio: 3 / 4;
  }
}
</style>
