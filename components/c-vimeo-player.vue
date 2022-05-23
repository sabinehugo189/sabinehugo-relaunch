<template>
  <client-only>
    <vue-vimeo-player
      :video-id="props.videoId"
      :options="options"
      player-height="365"
      player-width="650"
    >
    </vue-vimeo-player>
  </client-only>
</template>

<script setup>
import { vueVimeoPlayer } from 'vue-vimeo-player';

const props = defineProps({
  videoId: {
    type: String,
    required: true,
  },
});

const options = {
  responsive: true,
};
</script>
