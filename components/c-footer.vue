<template>
  <footer>
    <c-logo fill="hsl(0deg 0% 98%)" />
    <ul>
      <li>
        <h4>Kontakt</h4>
        <c-address-block />
      </li>
      <li>
        <h4>Öffnungszeiten</h4>
        <c-opening-hours />
      </li>
      <li>
        <h4>Wichtige Informationen</h4>
        <c-link-list />
      </li>
      <li>
        <h4>Social Media</h4>
        <c-social-bar />
        <img
          :src="src"
          width="228"
          height="138"
          alt=""
          class="quality-seal"
        />
      </li>
    </ul>
    <div class="shaded-edge"></div>
  </footer>
</template>

<script setup>
/* global useCloudinary */

import { buildImageUrl } from 'cloudinary-build-url';

const cloudinary = useCloudinary();

const imageUrl = Object.values(cloudinary.value).reduce((acc, cur) => {
  return acc.concat(`/${cur}`);
});

const resize = { type: 'scale' };

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
</script>

<style scoped>
footer {
  background-color: var(--surface-5);
  color: var(--text-1);
  display: flex;
  flex-direction: column;
  font-size: var(--font-size-2);
  gap: var(--size-12);
  margin-block-start: var(--size-48);
  margin-inline: auto;
  max-inline-size: var(--size-xxxl);
  padding: var(--size-20) var(--size-10);
  position: relative;
  width: 100%;
}

.shaded-edge {
  box-shadow: inset 0 0.5em 0.5em -0.5em hsl(0deg 0% 0% / 0.1);
  inset: 0;
  pointer-events: none;
  position: absolute;
}

footer > :deep(svg) {
  align-self: flex-start;
}

ul {
  display: grid;
  gap: var(--size-16);
  list-style: none;
  padding-inline-start: 0;
}

li {
  display: flex;
  flex-direction: column;
  gap: var(--size-8);
  padding-inline-start: 0;
}

h4 {
  color: inherit;
  font-weight: var(--font-weight-5);
}

@media (width >= 1024px) {
  ul {
    gap: var(--size-8);
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (width >= 1280px) {
  footer {
    font-size: var(--font-size-3);
    gap: var(--size-16);
    padding: var(--size-20) var(--size-30);
  }
}

@media (width >= 1536px) {
  footer {
    padding: var(--size-32) var(--size-50);
  }
}
</style>
