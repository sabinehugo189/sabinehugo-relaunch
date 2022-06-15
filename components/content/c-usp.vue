<template>
  <section class="container">
    <header>
      <h2>{{ title }}</h2>
      <div class="frame">
        <picture>
          <source
            media="(min-width: 1536px)"
            :srcset="`${imgSrc1536} 900w`"
          />
          <source
            media="(min-width: 1024px)"
            :srcset="`${imgSrc1024} 500w`"
          />
          <source
            media="(min-width: 768px)"
            :srcset="`${imgSrc768} 900w`"
          />
          <img
            :src="imgSrc"
            :height="props.imgHeight"
            :width="props.imgWidth"
            :alt="props.imgAlt"
            loading="lazy"
          />
        </picture>
      </div>
    </header>
    <ul>
      <li><slot name="item-01" /></li>
      <li><slot name="item-02" /></li>
      <li><slot name="item-03" /></li>
      <li><slot name="item-04" /></li>
    </ul>
  </section>
</template>

<script setup>
import { buildImageUrl } from 'cloudinary-build-url';

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  imgName: {
    type: String,
    default: 'invisalign.jpg',
  },
  imgAlt: {
    type: String,
    default: '',
  },
  imgHeight: {
    type: String,
    default: '600',
  },
  imgWidth: {
    type: String,
    default: '900',
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
      width: 900,
    },
  },
});

const imgSrc768 = buildImageUrl(url, {
  cloud: {
    cloudName,
  },
  transformations: {
    resize: {
      ...resize,
      aspectRatio: '3:2',
      width: 900,
    },
  },
});

const imgSrc1024 = buildImageUrl(url, {
  cloud: {
    cloudName,
  },
  transformations: {
    resize: {
      ...resize,
      width: 500,
    },
  },
});

const imgSrc1536 = buildImageUrl(url, {
  cloud: {
    cloudName,
  },
  transformations: {
    resize: {
      ...resize,
      width: 900,
    },
  },
});
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: var(--size-20);
}

@media (min-width: 1280px) {
  .container {
    padding-inline: var(--size-20);
  }
}

@media (min-width: 1536px) {
  .container {
    padding-inline: var(--size-40);
  }
}

header {
  display: flex;
  flex-direction: column;
  gap: var(--size-10);
}

h2 {
  font-size: var(--font-size-fluid-3);
  font-weight: var(--font-weight-3);
  line-height: var(--font-lineheight-0);
  max-inline-size: var(--size-header-1);
}

.frame {
  aspect-ratio: 3 / 2;
  flex: 1 1 auto;
}

.frame > picture > img {
  height: 100%;
  object-fit: cover;
  width: 100%;
}

ul {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: var(--size-16);
  list-style: none;
  padding-inline-start: 0;
}

@media (min-width: 1024px) {
  header {
    flex-direction: row;
    gap: var(--size-48);
    justify-content: space-between;
  }

  h2 {
    max-inline-size: var(--size-header-0);
    padding-block: var(--size-6);
  }

  .frame {
    aspect-ratio: 5 / 1;
  }

  ul {
    align-items: flex-start;
    flex-direction: row;
    justify-content: space-between;
  }
}
</style>
