<template>
  <figure>
    <img
      :src="src"
      :alt="caption"
      width="100"
      height="100"
    />
    <figcaption>{{ caption }}</figcaption>
  </figure>
</template>

<script setup>
/* global useCloudinary */

import { buildImageUrl } from 'cloudinary-build-url';

const props = defineProps({
  caption: {
    type: String,
    required: true,
  },
  iconName: {
    type: String,
    required: true,
  },
});

const cloudinary = useCloudinary();

const imageUrl = Object.values(cloudinary.value).reduce((acc, cur) => {
  return acc.concat(`/${cur}`);
});

const resize = { type: 'scale' };

const src = buildImageUrl(`${imageUrl}/icons/${props.iconName}`, {
  cloud: {
    cloudName: cloudinary.value.cloudName,
  },
  transformations: {
    resize: {
      ...resize,
    },
  },
});
</script>

<style scoped>
figure {
  align-items: center;
  aspect-ratio: 1.618 / 1;
  background-color: var(--gray-1);
  border-radius: var(--radius-3);
  box-shadow: var(--shadow-3);
  color: var(--gray-8);
  display: flex;
  flex-direction: column;
  gap: var(--size-4);
  hyphens: auto;
  justify-content: center;
  padding: var(--size-5);
  text-align: center;
}

figcaption {
  color: var(--text-4);
  font-size: var(--font-size-4);
  font-weight: var(--font-weight-5);
  line-height: var(--font-lineheight-1);
}

@media (width >= 768px) {
  figure {
    aspect-ratio: 1 / 1;
  }
}

@media (width >= 1280px) {
  figure {
    gap: var(--size-10);
  }
}

img {
  inline-size: auto;
  max-block-size: var(--size-20);
}

@media (width >= 768px) {
  img {
    max-block-size: var(--size-24);
  }
}
</style>
