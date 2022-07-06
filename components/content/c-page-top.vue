<template>
  <section
    class="page-top"
    :style="`background-image: url('${url}');`"
  >
    <h1>
      {{ props.title }}
    </h1>
    <p>{{ props.description }}</p>
    <div class="shaded-edge"></div>
  </section>
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
  imgName: {
    type: String,
    required: true,
  },
});

const cloudinary = useCloudinary();

const imageUrl = Object.values(cloudinary.value).reduce((acc, cur) => {
  return acc.concat(`/${cur}`);
});

const resize = { type: 'scale' };

const url = buildImageUrl(`${imageUrl}/${props.imgName}`, {
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
.page-top {
  background-color: var(--surface-2);
  background-position: bottom center;
  background-size: contain;
  display: flex;
  flex-direction: column;
  gap: var(--size-8);
  margin-inline: calc(var(--size-5) * -1);
  padding-block: var(--size-16) var(--size-8);
  padding-inline: var(--size-5);
  position: relative;
}

.page-top::after {
  aspect-ratio: 1.618 / 1;
  content: '';
}

@media (min-width: 768px) {
  .page-top {
    margin-inline: calc(var(--size-10) * -1);
    padding-inline: var(--size-10);
  }
}

@media (min-width: 1024px) {
  .page-top {
    background-position: bottom right;
    background-size: 45%;
    justify-content: center;
    min-block-size: calc(50vh - var(--header-height, 67px) - var(--size-5));
    padding-block-start: var(--size-5);
  }

  .page-top::after {
    content: none;
  }
}

@media (min-width: 1280px) {
  .page-top {
    margin-inline: calc(var(--size-30) * -1);
    min-block-size: calc(50vh - var(--header-height, 67px) - var(--size-10));
    padding-inline: var(--size-30);
  }
}

@media (min-width: 1536px) {
  .page-top {
    background-size: contain;
    margin-inline: calc(var(--size-50) * -1);
    padding-inline: var(--size-50);
  }
}

h1 {
  display: flex;
  flex-direction: column;
  font-size: var(--font-size-fluid-3);
  gap: var(--size-5);
  max-inline-size: var(--size-content-0);
  text-transform: uppercase;
}

p {
  font-size: var(--font-size-fluid-0);
  max-inline-size: var(--size-content-2);
}

.shaded-edge {
  box-shadow: inset 0 -0.5em 0.5em -0.5em hsl(0deg 0% 0% / 0.1);
  inset: 0;
  pointer-events: none;
  position: absolute;
}
</style>
