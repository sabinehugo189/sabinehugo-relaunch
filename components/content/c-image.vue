<template>
  <picture>
    <source
      media="(min-width: 1536px)"
      :srcset="`${srcset1536} ${width2XL}w`"
    />
    <source
      media="(min-width: 1280px)"
      :srcset="`${srcset1280}  ${widthXL}w`"
    />
    <source
      media="(min-width: 1024px)"
      :srcset="`${srcset1024} ${widthLG}w`"
    />
    <source
      media="(min-width: 768px)"
      :srcset="`${srcset768} ${widthMD}w`"
    />
    <source
      media="(min-width: 640px)"
      :srcset="`${srcset640} ${widthSM}w`"
    />
    <img
      :src="src"
      :height="height"
      :width="width"
      :alt="alt"
      :loading="loading"
    />
  </picture>
</template>

<script setup>
/* global useCloudinary */

import { buildImageUrl } from 'cloudinary-build-url';

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  height: {
    type: String,
    default: '371',
  },
  width: {
    type: String,
    default: '600',
  },
  widthSM: {
    type: String,
    default: '730',
  },
  widthMD: {
    type: String,
    default: '950',
  },
  widthLG: {
    type: String,
    default: '1200',
  },
  widthXL: {
    type: String,
    default: '600',
  },
  width2XL: {
    type: String,
    default: '680',
  },
  aspectRatio: {
    type: String,
    default: '1.618',
  },
  alt: {
    type: String,
    default: '',
  },
  loading: {
    type: String,
    default: 'lazy',
  },
});

const cloudinary = useCloudinary();

const url = Object.values(cloudinary.value).reduce((acc, cur) => {
  return acc.concat(`/${cur}`);
});

const imageUrl = `${url}/${props.name}`;

const options = {
  cloud: {
    cloudName: cloudinary.value.cloudName,
  },
};

const resize = {
  type: 'fill',
  aspectRatio: props.aspectRatio,
};

const src = buildImageUrl(imageUrl, {
  ...options,
  transformations: {
    resize: {
      ...resize,
      width: props.width,
    },
  },
});

const srcset640 = buildImageUrl(imageUrl, {
  ...options,
  transformations: {
    resize: {
      ...resize,
      width: props.widthSM,
    },
  },
});

const srcset768 = buildImageUrl(imageUrl, {
  ...options,
  transformations: {
    resize: {
      ...resize,
      width: props.widthMD,
    },
  },
});

const srcset1024 = buildImageUrl(imageUrl, {
  ...options,
  transformations: {
    resize: {
      ...resize,
      width: props.widthLG,
    },
  },
});

const srcset1280 = buildImageUrl(imageUrl, {
  ...options,
  transformations: {
    resize: {
      ...resize,
      width: props.widthXL,
    },
  },
});

const srcset1536 = buildImageUrl(imageUrl, {
  ...options,
  transformations: {
    resize: {
      ...resize,
      width: props.width2XL,
    },
  },
});
</script>

<style scoped>
picture {
  display: flex;
  flex-grow: 1;
}

picture > img {
  border-end-end-radius: var(--radius-3);
  border-end-start-radius: var(--radius-3);
  flex: 1 1 100%;
  object-fit: cover;
}
</style>
