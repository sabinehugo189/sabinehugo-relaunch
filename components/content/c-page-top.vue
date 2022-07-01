<template>
  <section
    class="page-top"
    :style="`background-image: url('${imgSrc}');`"
  >
    <h1>
      {{ props.title }}
    </h1>
    <p>{{ props.description }}</p>
    <div class="shaded-edge"></div>
  </section>
</template>

<script setup>
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

const url = `https://res.cloudinary.com/zahn-und-sthetik/image/upload/v1652359235/invisalign/${props.imgName}`;
const cloudName = 'zahn-und-sthetik';
const resize = { type: 'scale' };

const imgSrc = buildImageUrl(url, {
  cloud: {
    cloudName,
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
  margin-inline: calc(var(--size-10) * -1);
  padding-block: var(--size-16) var(--size-8);
  padding-inline: var(--size-10);
  position: relative;
}

.page-top::after {
  aspect-ratio: 1 / 1;
  content: '';
}

@media (min-width: 1024px) {
  .page-top {
    background-position: bottom right;
    background-size: 25%;
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
    min-block-size: calc(50vh - var(--header-height, 67px) - var(--size-10));
    padding-inline: var(--size-30);
  }
}

@media (min-width: 1536px) {
  .page-top {
    background-size: contain;
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
