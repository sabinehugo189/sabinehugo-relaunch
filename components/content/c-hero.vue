<template>
  <div
    ref="hero"
    class="hero"
    :style="`background-image: url('${url}');`"
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
/* global useHeaderHeight, useCloudinary, useCssVar */

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

const hero = ref(null);
const { getHeaderHeight } = useHeaderHeight();

const cvHeaderHeight = useCssVar('--header-height', hero);

watchEffect(() => {
  const headerHeight = parseInt(getHeaderHeight.value);
  cvHeaderHeight.value = `${headerHeight}px`;
});
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
  padding-block: var(--size-11) var(--size-5);
  padding-inline: var(--size-5);
  position: relative;
}

.hero::after {
  aspect-ratio: 1 / 1;
  content: '';
  margin-block-end: calc(var(--size-5) * -1);
  margin-inline: calc(var(--size-5) * -1);
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

@media (width >= 768px) {
  .hero {
    margin-inline: calc(var(--size-10) * -1);
    padding-inline: var(--size-10);
  }

  .hero::after {
    margin-inline: calc(var(--size-10) * -1);
  }
}

@media (width >= 1024px) {
  .hero {
    background-position: bottom right;
    background-size: 55%;
    justify-content: center;
    min-block-size: calc(100vh - var(--header-height, 68px) - var(--size-5));
    padding-block-start: var(--size-5);
  }

  .hero::after {
    content: none;
  }
}

@media (width >= 1280px) {
  .hero {
    background-size: 45%;
    margin-inline: calc(var(--size-30) * -1);
    min-block-size: calc(100vh - var(--header-height, 67px) - var(--size-10));
    padding-inline: var(--size-30);
  }

  .cta-bar {
    flex-direction: row;
    gap: var(--size-8);
  }
}

@media (width >= 1536px) {
  .hero {
    background-size: contain;
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
