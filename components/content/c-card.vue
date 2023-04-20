<template>
  <div class="card">
    <figure>
      <picture>
        <source
          media="(min-width: 1536px)"
          :srcset="`${src500} 500w`"
        />
        <img
          :src="src"
          :height="props.imgHeight"
          :width="props.imgWidth"
          :alt="props.imgAlt"
          loading="lazy"
        />
      </picture>
    </figure>
    <div class="text">
      <h3>
        {{ props.head }}
      </h3>
      <p>
        {{ props.body }}
      </p>
    </div>
  </div>
</template>

<script setup>
/* global useCloudinary */

import { buildImageUrl } from 'cloudinary-build-url';

const props = defineProps({
  head: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  imgSrc: {
    type: String,
    required: true,
  },
  imgAlt: {
    type: String,
    default: '',
  },
  imgHeight: {
    type: String,
    default: '309',
  },
  imgWidth: {
    type: String,
    default: '500',
  },
});

const cloudinary = useCloudinary();

const imageUrl = Object.values(cloudinary.value).reduce((acc, cur) => {
  return acc.concat(`/${cur}`);
});

const resize = { type: 'scale', aspectRatio: '1.618' };

const src = buildImageUrl(`${imageUrl}/${props.imgSrc}`, {
  cloud: {
    cloudName: cloudinary.value.cloudName,
  },
  transformations: {
    resize: {
      ...resize,
      width: 400,
    },
  },
});

const src500 = buildImageUrl(`${imageUrl}/${props.imgSrc}`, {
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
</script>

<style scoped>
.card {
  background-color: var(--surface-1);
  border-bottom-left-radius: var(--radius-3);
  border-bottom-right-radius: var(--radius-3);
  overflow: hidden;
}

.card,
.text {
  display: flex;
  flex-direction: column;
}

figure {
  aspect-ratio: 1.618 / 1;
}

figure > img {
  height: 100%;
  object-fit: cover;
  width: 100%;
}

.text {
  flex-grow: 1;
  gap: var(--size-5);
  padding: var(--size-8) var(--size-5);
}

h3 {
  color: var(--link);
  font-size: var(--font-size-fluid-0);
  font-weight: var(--font-weight-5);
  line-height: var(--font-lineheight-2);
}

@media (min-width: 768px) {
  .card {
    max-inline-size: calc(var(--size-content-3) + (2 * var(--size-5)));
  }

  p {
    font-size: var(--font-size-3);
  }
}

@media (min-width: 1024px) {
  .card {
    max-inline-size: calc(var(--size-content-3) + (2 * var(--size-12)));
  }

  .text {
    gap: var(--size-8);
    padding: var(--size-12);
  }
}
</style>
