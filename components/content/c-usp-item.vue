<template>
  <div class="item">
    <figure>
      <img
        :src="src"
        :alt="title"
        width="100"
        height="100"
      />
    </figure>
    <h3>{{ props.title }}</h3>
    <p>{{ props.description }}</p>
  </div>
</template>

<script setup>
/* global useCloudinary */

import { buildImageUrl } from 'cloudinary-build-url';

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
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
.item {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: var(--size-8);
  padding-inline-start: 0;
  text-align: center;
}

@media (min-width: 1024px) {
  .item {
    align-items: flex-start;
    text-align: left;
  }
}

figure {
  align-items: center;
  aspect-ratio: 1 / 1;
  background-color: var(--gray-1);
  block-size: var(--size-40);
  border-radius: var(--radius-3);
  box-shadow: var(--shadow-3);
  color: var(--gray-8);
  display: flex;
  inline-size: var(--size-40);
  justify-content: center;
}

img {
  inline-size: auto;
  max-block-size: var(--size-20);
}

@media (min-width: 768px) {
  img {
    max-block-size: var(--size-24);
  }
}

h3 {
  font-size: var(--font-size-fluid-1);
}

p {
  font-size: var(--font-size-fluid-0);
  margin-block-start: calc(var(--size-3) * -1);
}
</style>
