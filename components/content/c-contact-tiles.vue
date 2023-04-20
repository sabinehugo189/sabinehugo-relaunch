<template>
  <ul class="tiles h-card">
    <li class="tile">
      <figure class="head">
        <img
          :src="src"
          :alt="data['p-name']"
          height="100"
          width="100"
        />
      </figure>
      <div class="body">
        <h3>
          <span class="p-honorific-prefix">
            {{ data['p-honorific-prefix'] }}
          </span>
          <span class="p-name">
            {{ data['p-name'] }}
          </span>
        </h3>
        <p class="p-note">
          {{ data['p-note'] }}
        </p>
      </div>
    </li>
    <li class="tile">
      <figure class="head">
        <svg
          aria-hidden="true"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          fill="currentColor"
        >
          <g>
            <path
              d="M48.5 85.2c0-.1 0-.1 0 0 0-.1.1-.2.1-.3v-.6c0-.1 0-.1-.1-.2V84c0-.1-.1-.1-.1-.2v-.1c-.1-.1-.1-.2-.2-.2l-7.9-7.9c-.6-.6-1.5-.6-2.1 0s-.6 1.5 0 2.1l5.3 5.3H23.4c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h20.1l-5.3 5.3c-.6.6-.6 1.5 0 2.1.3.3.7.4 1.1.4s.8-.1 1.1-.4l7.9-7.9.2-.2v-.1c-.1.1 0 0 0 0z"
            />
            <path
              d="M91.2 44.8C86.6 24.9 66.7 12.4 46.8 17c-19.9 4.6-32.4 24.4-27.9 44.3.6 2.7 1.6 5.4 2.9 8.2.4.7 1.3 1.1 2 .7.7-.4 1.1-1.3.7-2-1.2-2.6-2.1-5.1-2.7-7.6-4.1-18.3 7.4-36.6 25.6-40.7 18.3-4.2 36.6 7.3 40.8 25.6 4.1 18.3-7.4 36.6-25.7 40.8-.8.2-1.3 1-1.1 1.8.2.7.8 1.2 1.5 1.2h.3c19.9-4.7 32.4-24.6 28-44.5z"
            />
            <path
              d="M65 63.1c.5 0 1-.3 1.3-.7.4-.7.2-1.6-.5-2.1L55.6 54V41c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5v13.9c0 .5.3 1 .7 1.3l10.9 6.7c.3.1.5.2.8.2z"
            />
          </g>
        </svg>
      </figure>
      <div class="body">
        <c-opening-hours />
      </div>
    </li>
    <li class="tile">
      <figure class="head">
        <svg
          aria-hidden="true"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          fill="none"
        >
          <g
            fill="none"
            stroke="currentColor"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path
              d="M37.3 91.5H55M37.9 91.5H22.7c-2.3 0-4.2-1.9-4.2-4.2 0-1.1.4-2.2 1.2-3l5-5M18.5 55c0-20.2 16.4-36.5 36.5-36.5S91.5 34.8 91.5 55 75.2 91.5 55 91.5M26.4 77.7l-1.7 1.7M26.4 77.7c-5.1-6.4-7.9-14.4-7.9-22.7"
            />
          </g>
        </svg>
      </figure>
      <div class="body">
        <dl>
          <dt>Telefon:</dt>
          <dd class="p-tel">{{ data['p-tel'] }}</dd>
          <dt>E-Mail:</dt>
          <dd>
            <a
              :href="`mailto:${data['u-email']}`"
              class="u-email"
            >
              {{ data['u-email'] }}
            </a>
          </dd>
        </dl>
      </div>
    </li>
    <li class="tile">
      <figure class="head">
        <svg
          aria-hidden="true"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          fill="none"
        >
          <g
            fill="none"
            stroke="currentColor"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path
              d="m38.5 28.3 30.7-.1c7.5 0 13.7 6.1 13.7 13.6v.2c0 7.5-6.1 13.6-13.6 13.6H46.5c-7.5 0-13.6 6.1-13.6 13.6h0c0 7.5 6.1 13.6 13.6 13.6H92M91.9 82.8l-9.1 9.1M82.9 73.8l9.1 9.1"
            />
            <path
              d="M35.5 21.1c4 4 4 10.5 0 14.5s-10.5 4-14.5 0-4-10.5 0-14.5c0 0 0 0 0 0 4-4 10.5-4 14.5 0"
            />
          </g>
        </svg>
      </figure>
      <div class="body">
        <h3 class="inherit">
          Praxis {{ data['p-honorific-prefix'] }} {{ data['p-name'] }}
        </h3>
        <p class="p-adr h-adr">
          <span class="p-street-address">
            {{ data['h-adr']['p-street-address'] }}
          </span>
          <span>
            <span class="p-postal-code">
              {{ data['h-adr']['p-postal-code'] }}
            </span>
            <span class="p-locality">
              {{ data['h-adr']['p-locality'] }}
            </span>
          </span>
        </p>
        <NuxtLink
          :to="link"
          download=""
          target="_blank"
          class="btn is-secondary is-small"
        >
          Route anzeigen
        </NuxtLink>
      </div>
    </li>
  </ul>
</template>

<script setup>
/* global queryContent, useCloudinary */

import { buildImageUrl } from 'cloudinary-build-url';

defineProps({
  link: {
    type: String,
    required: true,
  },
});

const { data } = await useAsyncData('hcard', () => {
  return queryContent('_h-card')
    .where({ _partial: true })
    .only([
      'u-photo',
      'p-honorific-prefix',
      'p-name',
      'h-adr',
      'p-tel',
      'u-email',
      'p-note',
    ])
    .findOne();
});

const cloudinary = useCloudinary();

const imageUrl = Object.values(cloudinary.value).reduce((acc, cur) => {
  return acc.concat(`/${cur}`);
});

const resize = { type: 'scale' };

const src = buildImageUrl(`${imageUrl}/${data.value['u-photo']}`, {
  cloud: {
    cloudName: cloudinary.value.cloudName,
  },
  transformations: {
    resize: {
      ...resize,
      width: 100,
    },
  },
});
</script>

<style scoped>
.tiles {
  display: grid;
  gap: var(--size-5);
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  list-style: none;
  padding-inline-start: 0;
}

@media (width >= 1536px) {
  .tiles {
    gap: var(--size-8);
  }
}

.tile {
  background-color: var(--surface-1);
  border-bottom-left-radius: var(--radius-3);
  border-bottom-right-radius: var(--radius-3);
  box-shadow: var(--shadow-3);
  display: flex;
  flex-direction: column;
  font-size: var(--font-size-1);
  font-weight: var(--font-weight-3);
  gap: var(--size-12);
  padding: var(--size-10) var(--size-8);
}

@media (width >= 1536px) {
  .tile {
    padding: var(--size-12) var(--size-10);
  }
}

.head {
  display: flex;
  justify-content: flex-start;
}

.head > img,
.head > svg {
  aspect-ratio: 1 / 1;
  height: 100px;
  width: 100px;
}

.body {
  display: flex;
  flex-direction: column;
  gap: var(--size-5);
}

.body > * {
  margin-block: 0;
}

.body > h3 {
  display: flex;
  font-size: var(--font-size-fluid-0);
  gap: 0.35em;
}

.body > h3.inherit {
  color: inherit;
}

.body > p > span {
  display: flex;
  gap: 0.5em;
}

.body > :deep(.opening-hours > dt) {
  color: inherit;
}

.body > dl {
  column-gap: var(--size-4);
  display: grid;
  font-size: var(--font-size-3);
  grid-template-columns: auto 1fr;
}

.body > dl > dt {
  color: inherit;
  grid-column: 1 / 2;
  margin: 0;
}

.body > dl > dd {
  grid-column: 2 / 3;
}
</style>
