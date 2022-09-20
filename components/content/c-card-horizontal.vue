<template>
  <div class="card">
    <div class="head">
      <img
        :src="src"
        :width="imgWidth"
        :height="imgHeight"
        alt=""
      />
    </div>
    <div class="body">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
/* global useCloudinary */

import { buildImageUrl } from 'cloudinary-build-url';

const props = defineProps({
  imgName: {
    type: String,
    required: true,
  },
  imgHeight: {
    type: String,
    default: '600',
  },
  imgWidth: {
    type: String,
    default: '450',
  },
});

const cloudinary = useCloudinary();

const imageUrl = Object.values(cloudinary.value).reduce((acc, cur) => {
  return acc.concat(`/${cur}`);
});

const resize = { type: 'fill', aspectRatio: '3:4' };

const src = buildImageUrl(`${imageUrl}/${props.imgName}`, {
  cloud: {
    cloudName: cloudinary.value.cloudName,
  },
  transformations: {
    gravity: 'face',
    resize: {
      ...resize,
    },
  },
});
</script>

<style scoped>
.card {
  background-color: var(--gray-0);
  border-end-end-radius: var(--radius-3);
  border-end-start-radius: var(--radius-3);
  box-shadow: var(--shadow-3);
  display: grid;
}

.head > img {
  max-inline-size: 100%;
}

.body {
  align-items: center;
  display: flex;
  padding: var(--size-8) var(--size-5);
}

.body > :deep(.prose) {
  row-gap: var(--size-8);
}

.body > :deep(.prose > h4) {
  margin-block-start: var(--size-2);
}

.body > :deep(.prose > h4 + ul) {
  display: grid;
  font-size: var(--font-size-fluid-0);
  gap: var(--size-2);
  line-height: var(--font-lineheight-3);
  list-style: none;
  margin-block-start: 0;
  padding-inline-start: 0;
}

.body > :deep(.prose > h4 + ul > li) {
  display: flex;
  gap: var(--size-3);
  padding-inline-start: 0;
}

.body > :deep(.prose > h4 + ul > li::before) {
  align-items: center;
  align-self: flex-start;
  aspect-ratio: 1 / 1;
  border-radius: var(--radius-round);
  box-shadow: var(--shadow-3);
  color: var(--link);
  content: '\2714';
  display: flex;
  flex: 0 0 2em;
  font-size: var(--font-size-0);
  justify-content: center;
  transform: translateY(2px);
}

@media (min-width: 768px) {
  .card {
    column-gap: var(--size-8);
    grid-template-columns: repeat(8, 1fr);
  }

  .head {
    grid-column: 1 / 4;
  }

  .head > img {
    border-end-start-radius: var(--radius-3);
    height: 100%;
    object-fit: cover;
    object-position: center;
    width: 100%;
  }

  .body {
    grid-column: 4 / -1;
    padding: var(--size-8);
    padding-inline-start: 0;
  }
}

@media (min-width: 1536px) {
  .body {
    grid-column: 5 / -1;
  }
}
</style>
