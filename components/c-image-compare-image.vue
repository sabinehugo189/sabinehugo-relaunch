<template>
  <img
    :alt="props.alt"
    :height="props.height"
    :width="props.width"
    :src="src"
    :srcset="`
      ${src500}   500w,
      ${src1024} 1024w,
      ${src700}   700w
    `"
    sizes="(min-width: 1280px) 700px, (min-width: 1024px) 1024px, 100vw"
    loading="lazy"
  />
</template>

<script setup>
/* global useCloudinary */

import { buildImageUrl } from 'cloudinary-build-url';

const props = defineProps({
  image: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    default: '',
  },
  height: {
    type: String,
    default: '',
  },
  width: {
    type: String,
    default: '',
  },
});

const cloudinary = useCloudinary();

const imageUrl = Object.values(cloudinary.value).reduce((acc, cur) => {
  return acc.concat(`/${cur}`);
});

const resize = { type: 'scale', aspectRatio: '1.618' };

const src = buildImageUrl(`${imageUrl}/${props.image}`, {
  cloud: {
    cloudName: cloudinary.value.cloudName,
  },
  transformations: {
    resize: {
      ...resize,
      width: 500,
    },
  },
});

const src500 = buildImageUrl(`${imageUrl}/${props.image}`, {
  cloud: {
    cloudName: cloudinary.value.cloudName,
  },
  transformations: {
    resize: {
      ...resize,
      width: 500,
    },
  },
});

const src700 = buildImageUrl(`${imageUrl}/${props.image}`, {
  cloud: {
    cloudName: cloudinary.value.cloudName,
  },
  transformations: {
    resize: {
      ...resize,
      width: 700,
    },
  },
});

const src1024 = buildImageUrl(`${imageUrl}/${props.image}`, {
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
</script>
