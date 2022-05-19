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

const url = `https://res.cloudinary.com/zahn-und-sthetik/image/upload/v1652359235/invisalign/${props.image}`;
const cloudName = 'zahn-und-sthetik';
const resize = { type: 'scale', aspectRatio: '1.618' };

const src = buildImageUrl(url, {
  cloud: {
    cloudName,
  },
  transformations: {
    resize: {
      ...resize,
      width: 500,
    },
  },
});

const src500 = buildImageUrl(url, {
  cloud: {
    cloudName,
  },
  transformations: {
    resize: {
      ...resize,
      width: 500,
    },
  },
});

const src700 = buildImageUrl(url, {
  cloud: {
    cloudName,
  },
  transformations: {
    resize: {
      ...resize,
      width: 700,
    },
  },
});

const src1024 = buildImageUrl(url, {
  cloud: {
    cloudName,
  },
  transformations: {
    resize: {
      ...resize,
      width: 1024,
    },
  },
});
</script>
