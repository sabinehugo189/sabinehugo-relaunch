<template>
  <div
    class="hero"
    :style="`background-image: linear-gradient(${gradient}), url('${url}');`"
  >
    <h1>
      {{ title }}
      <small>{{ subtitle }}</small>
    </h1>
    <p>{{ description }}</p>
    <div class="cta-bar">
      <NuxtLink
        :to="link"
        class="btn"
      >
        {{ label }}
      </NuxtLink>
      <img
        :src="src"
        width="228"
        height="138"
        alt=""
      />
    </div>
    <div class="shaded-edge"></div>
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
  subtitle: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const cloudinary = useCloudinary();

const imageUrl = Object.values(cloudinary.value).reduce((acc, cur) => {
  return acc.concat(`/${cur}`);
});

const resize = { type: 'scale' };

const url = buildImageUrl(`${imageUrl}/${props.image}`, {
  cloud: {
    cloudName: cloudinary.value.cloudName,
  },
  transformations: {
    resize: {
      ...resize,
    },
  },
});

const src = buildImageUrl(`${imageUrl}/quality-seal.png`, {
  cloud: {
    cloudName: cloudinary.value.cloudName,
  },
  transformations: {
    resize: {
      ...resize,
    },
  },
});

const gradient = 'to left top, transparent, hsl(36.7,8.9%,39.6%)';
</script>

<style scoped>
.hero {
  background-attachment: fixed;
  background-color: var(--surface-2);
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  gap: var(--size-8);
  justify-content: center;
  margin-block-start: calc((var(--size-14) + var(--size-7)) * -1);
  margin-inline: calc(var(--size-5) * -1);
  min-block-size: 100vh;
  padding-block-end: var(--size-7);
  padding-block-start: calc(var(--size-14) + var(--size-7) * 2);
  padding-inline: var(--size-5);
  position: relative;
}

h1 {
  color: var(--gray-0);
  display: flex;
  flex-direction: column;
  font-size: var(--font-size-fluid-4);
  gap: var(--size-5);
  max-inline-size: var(--size-content-0);
  text-transform: uppercase;
}

h1 > small {
  font-size: var(--font-size-fluid-3);
  text-transform: none;
}

p {
  color: var(--gray-0);
  font-size: var(--font-size-fluid-0);
  max-inline-size: var(--size-content-2);
}

.cta-bar {
  display: flex;
  flex-direction: column;
  gap: var(--size-8);
}

.cta-bar > a {
  align-self: flex-start;
}

@media (min-width: 768px) {
  .hero {
    margin-block-start: calc((var(--size-16) + var(--size-7)) * -1);
    margin-inline: calc(var(--size-10) * -1);
    padding-block-start: calc(var(--size-16) + var(--size-7) * 2);
    padding-inline: var(--size-10);
  }
}

@media (min-width: 1280px) {
  .hero {
    margin-block-start: calc((var(--size-16) + var(--size-16)) * -1);
    margin-inline: calc(var(--size-30) * -1);
    padding-block-end: var(--size-16);
    padding-block-start: calc(var(--size-16) * 3);
    padding-inline: var(--size-30);
  }

  .cta-bar {
    flex-direction: row;
    gap: var(--size-8);
  }
}

@media (min-width: 1536px) {
  .hero {
    margin-inline: calc(var(--size-50) * -1);
    padding-inline: var(--size-50);
  }
}

.shaded-edge {
  box-shadow: inset 0 -0.5em 0.5em -0.5em hsl(0deg 0% 0% / 0.1);
  inset: 0;
  pointer-events: none;
  position: absolute;
}
</style>
