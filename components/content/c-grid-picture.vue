<template>
  <picture>
    <source
      media="(min-width: 1280px)"
      :srcset="`${srcset1280} 768w`"
    />
    <source
      media="(min-width: 1024px)"
      :srcset="`${srcset1024} 1280w`"
    />
    <source
      media="(min-width: 768px)"
      :srcset="`${srcset768} 1024w`"
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
  imgSrc: {
    type: String,
    required: true,
  },
  imgHeight: {
    type: String,
    default: '',
  },
  imgWidth: {
    type: String,
    default: '',
  },
  imgAlt: {
    type: String,
    default: '',
  },
});

const cloudinary = useCloudinary();

const imageUrl = Object.values(cloudinary.value).reduce((acc, cur) => {
  return acc.concat(`/${cur}`);
});

const resize = { type: 'scale' };

const src = buildImageUrl(`${imageUrl}/${props.imgSrc}`, {
  cloud: {
    cloudName: cloudinary.value.cloudName,
  },
  transformations: {
    resize: {
      ...resize,
      width: 768,
    },
  },
});

const srcset768 = buildImageUrl(`${imageUrl}/${props.imgSrc}`, {
  cloud: {
    cloudName: cloudinary.value.cloudName,
  },
  transformations: {
    resize: {
      ...resize,
      width: 1024,
    },
  },
});

const srcset1024 = buildImageUrl(`${imageUrl}/${props.imgSrc}`, {
  cloud: {
    cloudName: cloudinary.value.cloudName,
  },
  transformations: {
    resize: {
      ...resize,
      width: 1280,
    },
  },
});

const srcset1280 = buildImageUrl(`${imageUrl}/${props.imgSrc}`, {
  cloud: {
    cloudName: cloudinary.value.cloudName,
  },
  transformations: {
    resize: {
      ...resize,
      width: 768,
    },
  },
});
</script>

<style scoped>
picture {
  display: flex;
}

picture > img {
  border-end-end-radius: var(--radius-3);
  border-end-start-radius: var(--radius-3);
  object-fit: cover;
}
</style>
