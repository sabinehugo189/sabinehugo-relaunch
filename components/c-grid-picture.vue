<template>
  <picture>
    <source
      media="(min-width: 1280px)"
      :srcset="`${src1280} 768w`"
    />
    <source
      media="(min-width: 1024px)"
      :srcset="`${src1024} 1280w`"
    />
    <source
      media="(min-width: 768px)"
      :srcset="`${src768} 1024w`"
    />
    <img
      :src="src"
      :height="props.height"
      :width="props.width"
      :alt="props.alt"
      loading="lazy"
    />
  </picture>
</template>

<script setup>
import { buildImageUrl } from 'cloudinary-build-url';

const props = defineProps({
  image: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    default: '',
  },
  height: {
    type: String,
    default: '',
  },
  width: {
    type: String,
    default: '',
  },
});

const url = `https://res.cloudinary.com/zahn-und-sthetik/image/upload/v1652359235/invisalign/${props.image}`;
const cloudName = 'zahn-und-sthetik';
const resize = { type: 'scale' };

const src = buildImageUrl(url, {
  cloud: {
    cloudName,
  },
  transformations: {
    resize: {
      ...resize,
      width: 768,
    },
  },
});

const src768 = buildImageUrl(url, {
  cloud: {
    cloudName,
  },
  transformations: {
    resize: {
      ...resize,
      width: 1024,
    },
  },
});

const src1024 = buildImageUrl(url, {
  cloud: {
    cloudName,
  },
  transformations: {
    resize: {
      ...resize,
      width: 1280,
    },
  },
});

const src1280 = buildImageUrl(url, {
  cloud: {
    cloudName,
  },
  transformations: {
    resize: {
      ...resize,
      width: 768,
    },
  },
});
</script>
