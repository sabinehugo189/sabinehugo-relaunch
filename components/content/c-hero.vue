<template>
  <div
    ref="hero"
    class="hero"
    :style="`background-image: linear-gradient(${gradient}), url('${url}');`"
  >
    <div
      ref="container"
      class="container"
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
    </div>
    <div class="shaded-edge"></div>
  </div>
</template>

<script setup>
/* global useCloudinary, onMounted, onUnmounted */

import { buildImageUrl } from 'cloudinary-build-url';
import { useMediaQuery } from '@vueuse/core';

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

const hero = ref(null);
const container = ref(null);
const isPortraitOrientation = useMediaQuery('(orientation: portrait)');

function handleScroll() {
  // Get the vertically scrolled pixels
  const scrollY = window.scrollY;
  // Get the viewport height
  const viewportHeight = window.innerHeight * 0.01;
  // Get how much percent of the viewport height is scrolled out of view
  const viewportHeightOutOfView = parseInt(scrollY / viewportHeight);
  // Set the max background size increase in percent
  const maxBackgroundSizeIncrease = 20;
  // Get the background size increase in relation to how much the viewport
  // is scrolled vertically
  const backgroundSizeIncrease = parseInt(
    viewportHeightOutOfView * (maxBackgroundSizeIncrease / 100),
  );
  // Set the background size
  const backgroundSize = 100 + backgroundSizeIncrease;
  // Get the opacity in relation to how much the viewport is scrolled
  // vertically
  const opacityDecrease = viewportHeightOutOfView / 100;
  // Set the opacity
  const opacity = 1 - opacityDecrease.toFixed(1);

  if (viewportHeightOutOfView <= 100) {
    hero.value.style.backgroundSize = isPortraitOrientation.value
      ? `auto ${backgroundSize}%`
      : `${backgroundSize}% auto`;

    container.value.style.opacity = opacity;
  }
}

onMounted(() => {
  document.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  document.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.hero {
  background-attachment: fixed;
  background-color: var(--surface-2);
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% auto;
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

@media (orientation: portrait) {
  .hero {
    background-size: auto 100%;
  }
}

.container {
  display: flex;
  flex-direction: column;
  gap: var(--size-8);
}

h1 {
  background: var(--gradient-hero);
  border-radius: var(--radius-3);
  color: var(--gray-0);
  display: flex;
  flex-direction: column;
  font-size: var(--font-size-fluid-4);
  gap: var(--size-5);
  max-inline-size: var(--size-content-0);
  padding: var(--size-10);
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
