<template>
  <div
    ref="el"
    class="hero"
    :style="`background-image: url('${url}');`"
  >
    <h1>
      {{ data.title }}
      <small>{{ data.subtitle }}</small>
    </h1>
    <p>{{ data.description }}</p>
    <div class="cta-bar">
      <NuxtLink
        to="#contact"
        class="btn"
      >
        {{ data.label }}
      </NuxtLink>
      <img
        :src="src"
        width="228"
        height="138"
        alt=""
      />
    </div>
  </div>
</template>

<script setup>
/* global queryContent, useHeaderHeight, useCssVar */

import { buildImageUrl } from 'cloudinary-build-url';

const urlPart =
  'https://res.cloudinary.com/zahn-und-sthetik/image/upload/v1652359235/invisalign/';
const cloudName = 'zahn-und-sthetik';
const resize = { type: 'scale' };

const url = buildImageUrl(`${urlPart}hero.jpg`, {
  cloud: {
    cloudName,
  },
  transformations: {
    resize: {
      ...resize,
    },
  },
});

const src = buildImageUrl(`${urlPart}quality-seal.png`, {
  cloud: {
    cloudName,
  },
  transformations: {
    resize: {
      ...resize,
    },
  },
});

const { data } = await useAsyncData('hero', () => {
  return queryContent('_hero')
    .only(['title', 'subtitle', 'description', 'label'])
    .findOne();
});

const el = ref(null);
const { headerHeight } = useHeaderHeight();

const height = useCssVar('--header-height', el);

watch(
  () => headerHeight.value,
  (hh) => {
    height.value = `${parseInt(hh)}px`;
  },
);
</script>

<style scoped>
.hero {
  background-color: var(--surface-2);
  background-position: bottom center;
  background-size: contain;
  display: flex;
  flex-direction: column;
  gap: var(--size-8);
  margin-inline: calc(var(--size-5) * -1);
  padding-block: var(--size-16) var(--size-5);
  padding-inline: var(--size-5);
}

.hero::after {
  aspect-ratio: 1 / 1;
  content: '';
}

h1 {
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

@media (min-width: 1024px) {
  .hero {
    background-position: bottom right;
    background-size: 55%;
    justify-content: center;
    min-block-size: calc(100vh - var(--header-height, 67px) - var(--size-5));
    padding-block: var(--size-5);
  }

  .hero::after {
    content: none;
  }
}

@media (min-width: 1280px) {
  .hero {
    margin-inline: 0;
    min-block-size: calc(100vh - var(--header-height, 67px) - var(--size-10));
    padding-inline: var(--size-20);
  }

  .cta-bar {
    flex-direction: row;
    gap: var(--size-8);
  }
}

@media (min-width: 1536px) {
  .hero {
    background-size: contain;
    padding-inline: var(--size-40);
  }
}
</style>
