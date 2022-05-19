<template>
  <section class="container">
    <header>
      <h2>Ein schöneres Lächeln in wenigen Monaten. Mit Invisalign.</h2>
      <div class="frame">
        <picture>
          <source
            media="(min-width: 1536px)"
            :srcset="`${src1536} 900w`"
          />
          <source
            media="(min-width: 1024px)"
            :srcset="`${src1024} 500w`"
          />
          <source
            media="(min-width: 768px)"
            :srcset="`${src768} 900w`"
          />
          <img
            :src="src"
            :height="props.height"
            :width="props.width"
            :alt="props.alt"
            loading="lazy"
          />
        </picture>
      </div>
    </header>
    <ul>
      <li>
        <figure>
          <svg
            aria-hidden="true"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 51.2 74.5"
            fill="currentColor"
          >
            <path
              d="M35.1 0h.1A19.4 19.4 0 0 1 46 2.8c3.4 2.4 5 5.5 5.2 10v.3a7.8 7.8 0 0 1 0 .8c-.3 5.3-.4 7-2.3 11.8a8 8 0 0 1-2.2 3.3 3.3 3.3 0 0 1-2 .8h-8a5 5 0 0 1-5-3.6 2 2 0 0 1 0-.6v-2.9a.9.9 0 0 1 0-.2.7.7 0 0 0 0-.2 1.2 1.2 0 0 0-.5-.1H20a1.2 1.2 0 0 0-.5 0 .7.7 0 0 0 0 .3.9.9 0 0 1 0 .2v3a2 2 0 0 1-.1.5 5 5 0 0 1-5 3.6H6a2 2 0 0 1-1.8-1.2l-.7-1.3a17 17 0 0 1-.9-1.7A30.8 30.8 0 0 1 0 14a7.3 7.3 0 0 1 0-.8v-.3a13.1 13.1 0 0 1 1.5-6 11.5 11.5 0 0 1 3.7-4 17.9 17.9 0 0 1 8-2.7h4.9a23 23 0 0 1 7.4 1.7h.2A24.3 24.3 0 0 1 35 0Zm0 4a22.8 22.8 0 0 0-4.5.5l2 1a2 2 0 0 1-2 3.5l-5.8-3-.8-.4a19.2 19.2 0 0 0-6-1.4h-4.3a13.8 13.8 0 0 0-6.1 2A7.5 7.5 0 0 0 4 13v.7c.4 5.6 1 7.4 2.3 10.5a14 14 0 0 0 .7 1.2l.2.5h7.4a1.7 1.7 0 0 0 .6-.1.8.8 0 0 0 .4-.4v-2.5a4.2 4.2 0 0 1 4.5-4.6h11a4.2 4.2 0 0 1 4.5 4.6v2.5a.8.8 0 0 0 .4.4 1.7 1.7 0 0 0 .6.1h7.6a4.7 4.7 0 0 0 1-1.6c1.6-4.2 1.6-5.4 2-10.5V13C47 9.8 46 7.7 43.6 6.2A15.7 15.7 0 0 0 35.2 4Zm-9.5 42.8a2 2 0 0 1-1.4-.6l-5-5 2.7-2.9 3.7 3.7 3.6-3.7 2.9 2.9-5.1 5a2 2 0 0 1-1.4.6Z"
            />
            <path d="M27.6 44.8h-4V27.4h4Z" />
            <path
              d="M34.4 74.5c-.9 0-1.8-.6-2.6-1.8a11.8 11.8 0 0 1-1.6-4.4 45 45 0 0 1-.3-2.6c-.2-1.8-.5-4-1-5.9a16.3 16.3 0 0 0-1.7-4.5c-.6-1-1.2-1.4-1.9-1.5a3.1 3.1 0 0 0-2.3 1.5 17.7 17.7 0 0 0-1.8 4.6 26 26 0 0 0-1.1 7.5l-.1 2.7a5.7 5.7 0 0 1-.9 2.5 3.9 3.9 0 0 1-3.3 2c-2.6 0-3.6-1.3-5-3.9A24.3 24.3 0 0 1 8 58.3v-.5c0-4.1.1-5.5-.7-7.4v-.2a26 26 0 0 1-1.1-5.5 18.1 18.1 0 0 1 .2-5 10.5 10.5 0 0 1 2.3-5c2.7-3 7.3-4 13.6-2.8a2 2 0 0 1 .2 0l2.4.8h.2a2 2 0 1 1 1 3.8l-.8.2a2 2 0 0 1-1.1 0l-2.8-1c-4.7-.8-8-.3-9.7 1.7-1.6 1.8-1.7 4.8-1.5 7a22.3 22.3 0 0 0 .8 4.5c1.1 2.7 1 4.7 1 9v.5a20.3 20.3 0 0 0 2.3 10.4 8 8 0 0 0 1 1.7 2.2 2.2 0 0 0 .4 0 1.7 1.7 0 0 0 .3-.7v-2.5a29.7 29.7 0 0 1 1.3-8.4v-.2a21.2 21.2 0 0 1 2.3-5.5 7.6 7.6 0 0 1 2.3-2.3 6.4 6.4 0 0 1 3.5-1 5.5 5.5 0 0 1 3 .8 7.4 7.4 0 0 1 2.3 2.6 20.4 20.4 0 0 1 2.2 5.7l1 6.2.2 2.4a8.4 8.4 0 0 0 1 2.6 12 12 0 0 0 .8-1.4c1.2-2.2 2.1-6.3 2.3-10.5a23.1 23.1 0 0 1 2-9.4 19 19 0 0 0 .8-6.7 6.8 6.8 0 0 0-1.3-3.6c-1.9-2.5-5.7-2.9-8.6-2.7a2 2 0 0 1-.1-4 20.4 20.4 0 0 1 6.2.6 10 10 0 0 1 7.8 9.3 23 23 0 0 1-1 8.3 2 2 0 0 1 0 .2 19.3 19.3 0 0 0-1.8 8.2c-.2 4.9-1.2 9.4-2.8 12.2a9.7 9.7 0 0 1-2.1 2.9 4.3 4.3 0 0 1-2.9 1Z"
            />
          </svg>
        </figure>
        <h3>Exzellente Ästhetik</h3>
        <p>Effektive Zahnstellungskorrektur mit transparenten Alignern.</p>
      </li>
      <li>
        <figure>
          <svg
            aria-hidden="true"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 61.5 52"
            fill="currentColor"
          >
            <path
              d="M42.2 26a2 2 0 0 1 .6-1.4l5-5 2.9 2.8L47 26l3.7 3.6-2.9 2.9-5-5a2 2 0 0 1-.6-1.5Z"
            />
            <path
              d="M44.2 28v-4h17.3v4Zm-24.8-2a2 2 0 0 1-.6 1.4l-5 5-3-2.8 3.7-3.6-3.6-3.6 2.8-2.9 5 5a2 2 0 0 1 .7 1.5Z"
            />
            <path d="M17.4 24v4H0v-4ZM28 52h-4V0h4Zm9.3 0h-4V0h4Z" />
          </svg>
        </figure>
        <h3>Hoher Tragekomfort</h3>
        <p>Sehr angenehmes Tragefühl durch nur 0,7 mm dünnes Material.</p>
      </li>
      <li>
        <figure>
          <svg
            aria-hidden="true"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 84 85.6"
            fill="currentColor"
          >
            >
            <defs>
              <clipPath id="a">
                <path
                  d="M0 0h83v43H0z"
                  transform="translate(876 1529.7)"
                />
              </clipPath>
            </defs>
            <g
              clip-path="url(#a)"
              transform="translate(-876 -1529.7)"
            >
              <path
                d="M931 1543.6h.1c5.1 0 9.8 1.3 13 3.5h.1c4 2.8 6 6.7 6.3 12v1.3c0 7.5-1.8 10.6-3.7 14.2l-.3.5a30.1 30.1 0 0 0-2.9 6.1 30.5 30.5 0 0 0-1.3 9.6c0 6.2-.6 14.7-3.8 20a12 12 0 0 1-2.8 3.6 5.6 5.6 0 0 1-3.7 1 5 5 0 0 1-3.6-1.6c-1.4-1.5-2-3.7-1.7-6.7a40.8 40.8 0 0 0-1.6-14.3 25.1 25.1 0 0 0-2.5-6 3.7 3.7 0 0 0-3-2.1 4.9 4.9 0 0 0-3.8 2.1 22 22 0 0 0-2.4 5.8v.2a47.1 47.1 0 0 0-1.6 12.9l-.1 4.4a6.8 6.8 0 0 1-1.1 3.2 4.9 4.9 0 0 1-4.2 2.2 5.6 5.6 0 0 1-3.7-1.1 12.6 12.6 0 0 1-2.7-3.6 42.8 42.8 0 0 1-3.8-20 30.5 30.5 0 0 0-1.3-9.6 30 30 0 0 0-2.9-6v-.1l-.3-.6c-2-3.5-3.7-6.6-3.7-14v-1.4a16 16 0 0 1 1.8-7.3 14 14 0 0 1 4.5-4.8 21.8 21.8 0 0 1 9.7-3.3 2.2 2.2 0 0 1 .2 0h5.8a28.1 28.1 0 0 1 9 2l.2.2.2-.1a29.6 29.6 0 0 1 11.6-2.3Zm0 4.5a25.3 25.3 0 0 0-9.8 1.9l-1 .5a2.2 2.2 0 0 1-1.9 0l-1-.5a23.8 23.8 0 0 0-7.6-1.8l-5.3.1a17.3 17.3 0 0 0-7.6 2.5c-2.9 2-4.2 4.6-4.3 8.5v1.1c0 6.3 1.3 8.7 3.1 12l.3.5a34 34 0 0 1 3.2 7 34.9 34.9 0 0 1 1.6 11c0 4.5.4 13 3.1 17.6a11.3 11.3 0 0 0 1.7 2.4h1l.3-.1a2.3 2.3 0 0 0 .4-1l.1-4.2a50.8 50.8 0 0 1 1.7-14.1v-.2a26 26 0 0 1 3-7 9.7 9.7 0 0 1 3.2-2.9 8.6 8.6 0 0 1 4.3-1.2 7.3 7.3 0 0 1 3.8 1 9.3 9.3 0 0 1 3.1 3.2 29.2 29.2 0 0 1 3 7 44.9 44.9 0 0 1 1.8 16.1c-.2 2.3.3 3.4.9 3.5.6 0 .7 0 .8-.2a10.8 10.8 0 0 0 1.7-2.3c1.2-2 3.2-7 3.2-17.7a34.9 34.9 0 0 1 1.5-11 34.1 34.1 0 0 1 3.2-6.9l.3-.5c1.8-3.3 3.1-5.6 3.2-12v-1.1c-.2-4-1.5-6.5-4.3-8.5a19.5 19.5 0 0 0-10.6-2.7Z"
              />
              <path
                d="M926.6 1554.6a2.2 2.2 0 0 1-1-.3l-7.4-3.9a2.3 2.3 0 0 1-1-3 2.3 2.3 0 0 1 3-1l7.5 4a2.3 2.3 0 0 1-1 4.2Z"
              />
            </g>
            <g>
              <path
                d="M55.2 14.3h1.1a2 2 0 0 1 0 4h-1.1a1.8 1.8 0 0 0-1.2 0l-1 .1a2 2 0 1 1-.2-4h1a2.3 2.3 0 0 0 1.4 0Zm-19.6.3a2 2 0 0 1 .3 0l1 .2a2 2 0 0 1-.6 4l-1-.2a2 2 0 0 1 .3-4Zm-8 0a2 2 0 0 1 .4 4l-1 .2a2 2 0 0 1-.7-4l1-.2a2 2 0 0 1 .4 0ZM64 15.8a2 2 0 0 1 .8.2c.3 0 .7.2 1 .4A2 2 0 0 1 64 20a16 16 0 0 0-.8-.3 2 2 0 0 1 .7-3.9Zm-18.9.4A2 2 0 0 1 46 20l-.5.2-.4.2a2 2 0 0 1-1.6-3.7l.4-.1.6-.3a2 2 0 0 1 .7-.1Zm-25.8 1.6a2 2 0 0 1 1.2 3.6l-.6.5a2 2 0 1 1-2.7-3l1-.7a2 2 0 0 1 1.1-.4ZM71 21.4a2 2 0 0 1 1.7 1l.6 1a2 2 0 0 1-3.7 1.7 8 8 0 0 0-.4-.7 2 2 0 0 1 1.8-3Zm-56.1 3.9a2 2 0 0 1 2 2.3l-.2.9a2 2 0 0 1-4-.5l.2-1a2 2 0 0 1 2-1.7ZM72.5 30a2 2 0 0 1 2 2v1.1a2 2 0 0 1-4-.2v-1a2 2 0 0 1 2-1.9Zm-57.6 4.1a2 2 0 0 1 2 1.7l.2.9a2 2 0 0 1-4 .9l-.1-1.1a2 2 0 0 1 2-2.4ZM70.6 39a2 2 0 0 1 1.8 2.8c0 .3-.3.6-.4 1a2 2 0 1 1-3.6-1.8l.4-.9a2 2 0 0 1 1.8-1.1Zm-52.3 3.6a2 2 0 0 1 1.7 1l.5 1a2 2 0 0 1-3.4 1.9l-.5-.9a2 2 0 0 1 1.7-3ZM66.5 47a2 2 0 0 1 1.9 2.7l-.4.9a2 2 0 0 1-3.7-1.4c0-.3.2-.7.4-1a2 2 0 0 1 1.8-1.2Zm-44.7 3.9a2 2 0 0 1 2 1.5c0 .4 0 .7.2 1a2 2 0 0 1-4 .9c0-.3 0-.6-.2-1a2 2 0 0 1 2-2.4ZM45 51a2 2 0 0 1 .5 0 7 7 0 0 1 1.3.6 2 2 0 1 1-1.7 3.6 3 3 0 0 0-.6-.3A2 2 0 0 1 45 51Zm-6.9 3a2 2 0 0 1 1.7 3.1l-.5.8a2 2 0 0 1-3.5-2l.6-1a2 2 0 0 1 1.7-.9Zm26.3 1.6h.1a2 2 0 0 1 1.8 2.2v.9a2 2 0 0 1-4-.2v-1a2 2 0 0 1 2-2Zm-14 2.1a2 2 0 0 1 2 1.3l.3 1a2 2 0 1 1-3.8 1.3 35 35 0 0 0-.3-.9 2 2 0 0 1 1.9-2.7Zm-27.8 2a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2ZM35 62.4a2 2 0 0 1 2 2.4l-.3 1a2 2 0 1 1-3.9-.8l.2-1a2 2 0 0 1 2-1.6Zm29 2.2h.2a2 2 0 0 1 1.8 2.1v1a2 2 0 0 1-4-.3v-1a2 2 0 0 1 2-1.8Zm-11.3 1.8a2 2 0 0 1 2 1.7l.2 1a2 2 0 0 1-4 .6l-.1-1a2 2 0 0 1 2-2.3Zm-29.5 2.3a2 2 0 0 1 2 1.7l.1 1a2 2 0 1 1-4 .6v-1a2 2 0 0 1 1.9-2.3Zm10.6 2.6a2 2 0 0 1 2 2v1a2 2 0 0 1-4 0v-1a2 2 0 0 1 2-2Zm28.8 2.1a2 2 0 0 1 2 2.6l-.4 1a2 2 0 1 1-3.8-1.2l.3-.9a2 2 0 0 1 2-1.5Zm-9.5 2h.2a2 2 0 0 1 1.8 2.1v1a2 2 0 0 1-2 1.9H53a2 2 0 0 1-2-2.1 17 17 0 0 1 .2-1 2 2 0 0 1 2-2Zm-27.5 1.9a2 2 0 0 1 1.8 1l.4.8a2 2 0 1 1-3.4 2.1l-.5-1a2 2 0 0 1 1.7-2.9Zm7.4 2.9a2 2 0 0 1 1.7 3 5.2 5.2 0 0 1-1 1.3 2 2 0 1 1-2.7-3 1.3 1.3 0 0 0 .3-.3 2 2 0 0 1 1.7-1Zm25.3 1a2 2 0 0 1 1 3.6 4.8 4.8 0 0 1-1.5.7 2 2 0 0 1-.9-3.9.8.8 0 0 0 .3-.1 2 2 0 0 1 1-.3Z"
              />
              <path
                d="M44.4 21.3a2 2 0 0 1-1-.2l-.8-.5a2 2 0 0 1-.9-2.7 2 2 0 0 1 2.7-.8l1 .5a2 2 0 0 1-1 3.7Z"
              />
            </g>
            <path d="M84 45H1v-4h83Z" />
          </svg>
        </figure>
        <h3>3D-Scan-Technologie</h3>
        <p>Komfortabler digitaler Zahnabdruck statt Abdruck mit Löffel.</p>
      </li>
      <li>
        <figure>
          <svg
            aria-hidden="true"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 79 73.2"
            fill="currentColor"
          >
            <path
              d="M73 63.7a2 2 0 0 1-1-.2L54 54H30.9a2 2 0 0 1-1.5-.6L.6 23.4a2 2 0 0 1 0-2.9l6-5.5a2 2 0 0 1 2.9.1L35 42.5h21.7a2 2 0 0 1 1 .2l20.2 10.5a2 2 0 0 1 .8 2.8l-4 6.7a2 2 0 0 1-1.8 1ZM31.5 50.1h23a2 2 0 0 1 1 .3L72.1 59l2-3.3-18-9.3h-22a2 2 0 0 1-1.5-.6L7.9 19.3l-3 2.8Z"
            />
            <path d="m44 45.4-3.5-1.8 4.2-8.6 3.6 1.8Z" />
            <path d="M55.1 37.9H35.3v-4h19.8Z" />
            <path
              d="M64 47h-4V4H44l-7.5 4.3-2-3.5L42.4.3a2 2 0 0 1 1-.3H62a2 2 0 0 1 2 2Z"
            />
            <path
              d="M30 2.8a11 11 0 0 1 9 17.7L37.6 22 20 8.9l1.2-1.6A11 11 0 0 1 30 2.8Zm6.7 13.5a7 7 0 0 0-2.4-8.1A7 7 0 0 0 30 6.8a7.2 7.2 0 0 0-3.2.7 7 7 0 0 0-1.1.7Zm-7.1 33.8h22.5v16.5H29.6Zm18.5 4H33.6v8.5h14.5Z"
            />
            <path d="M18.8 62.6H64v10.6H18.8Zm41.2 4H22.8v2.6H60Z" />
          </svg>
        </figure>
        <h3>Exzellentes Ergebnis</h3>
        <p>Alle 4 bis 8 Wochen Kontrolltermine für das gewünschte Ergebnis.</p>
      </li>
    </ul>
  </section>
</template>

<script setup>
import { buildImageUrl } from 'cloudinary-build-url';

const props = defineProps({
  image: {
    type: String,
    default: 'invisalign.jpg',
  },
  alt: {
    type: String,
    default: '',
  },
  height: {
    type: String,
    default: '600',
  },
  width: {
    type: String,
    default: '900',
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
      width: 900,
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
      aspectRatio: '3:2',
      width: 900,
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
      width: 500,
    },
  },
});

const src1536 = buildImageUrl(url, {
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

header {
  display: flex;
  flex-direction: column;
  gap: var(--size-10);
}

h2 {
  font-size: var(--font-size-fluid-3);
  max-inline-size: var(--size-header-1);
}

h3 {
  font-size: var(--font-size-fluid-1);
}

p {
  font-size: var(--font-size-fluid-0);
  margin-block-start: calc(var(--size-3) * -1);
}

.frame {
  aspect-ratio: 3 / 2;
  flex: 1 1 auto;
}

.frame > picture > img {
  border-radius: var(--radius-3);
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

li {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: var(--size-8);
  padding-inline-start: 0;
  text-align: center;
}

figure {
  align-items: center;
  aspect-ratio: 1 / 1;
  background-color: var(--gray-1);
  block-size: var(--size-40);
  border-radius: var(--radius-3);
  box-shadow: var(--shadow-3);
  color: var(--gray-8);
  display: flex;
  inline-size: var(--size-40);
  justify-content: center;
}

svg {
  inline-size: var(--size-16);
  max-block-size: var(--size-16);
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

  li {
    align-items: flex-start;
    text-align: left;
  }
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
</style>
