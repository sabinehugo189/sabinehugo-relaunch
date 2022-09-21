<template>
  <picture>
    <source
      media="(min-width: 1280px)"
      :srcset="`${srcset1280} 900w`"
    />
    <img
      :src="src"
      :height="props.imgHeight"
      :width="props.imgWidth"
      :alt="props.imgAlt"
      loading="lazy"
    />
  </picture>
</template>

<script setup>
/* global useCloudinary */

import { buildImageUrl } from 'cloudinary-build-url';

const props = defineProps({
  imgName: {
    type: String,
    default: '',
  },
  imgAlt: {
    type: String,
    default: '',
  },
  imgHeight: {
    type: String,
    default: '475',
  },
  imgWidth: {
    type: String,
    default: '768',
  },
});

const cloudinary = useCloudinary();

const imageUrl = Object.values(cloudinary.value).reduce((acc, cur) => {
  return acc.concat(`/${cur}`);
});

const resize = { type: 'scale' };

const src = buildImageUrl(`${imageUrl}/${props.imgName}`, {
  cloud: {
    cloudName: cloudinary.value.cloudName,
  },
  transformations: {
    resize: {
      aspectRatio: '1.618',
      type: 'fill',
      width: 768,
    },
    gravity: 'auto:subject',
  },
});

const srcset1280 = buildImageUrl(`${imageUrl}/${props.imgName}`, {
  cloud: {
    cloudName: cloudinary.value.cloudName,
  },
  transformations: {
    resize: {
      ...resize,
      width: 900,
    },
  },
});
</script>

<style scoped>
picture > img {
  aspect-ratio: 1.618 / 1;
  border-radius: var(--radius-3);
  height: 100%;
  object-fit: cover;
  width: 100%;
}

@media (min-width: 1280px) {
  picture > img {
    aspect-ratio: 5 / 1;
  }
}
</style>
