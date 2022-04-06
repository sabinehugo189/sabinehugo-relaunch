<template>
  <div class="container">
    <div class="container-inner">
      <div
        ref="el"
        class="hero"
      >
        <h1>
          Unsichtbare Zahnspange:
          <small>Mehr Selbstvertrauen durch gerade Zähne.</small>
        </h1>
        <p>
          Sie sind unzufrieden mit Ihrer Zahnstellung? Mit den unsichtbaren
          Zahnschienen von Invisalign ist auch im Erwachsenenalter eine
          erfolgreiche Behandlung einer Fehlstellung möglich.
        </p>
        <div class="cta-bar">
          <NuxtLink
            href="/#contact"
            class="btn"
          >
            Jetzt Termin ausmachen
          </NuxtLink>
          <img
            src="/quality-seal.png"
            width="228"
            height="138"
            alt=""
          />
        </div>
      </div>
    </div>
    <div class="shaded-edge"></div>
  </div>
</template>

<script setup>
/* global useHeaderHeight, useCssVar */

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
.container {
  margin-block-end: var(--size-48);
  position: relative;
}

.container-inner {
  margin-inline: auto;
  max-inline-size: var(--size-xxxl);
  padding-inline: var(--size-5);
}

.shaded-edge {
  box-shadow: inset 0 -0.5em 0.5em -0.5em hsl(0deg 0% 0% / 0.1);
  inset: 0;
  pointer-events: none;
  position: absolute;
}

.hero {
  background-color: var(--gray-1);
  background-image: url('/bg-hero.jpg');
  background-position: bottom center;
  background-size: contain;
  display: flex;
  flex-direction: column;
  gap: var(--size-8);
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
}

h1 > small {
  font-size: var(--font-size-fluid-3);
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
    min-block-size: calc(100vh - var(--header-height) - var(--size-5));
    padding-block: var(--size-5);
  }

  .hero::after {
    content: none;
  }
}

@media (min-width: 1280px) {
  .container-inner {
    padding-inline: var(--size-10);
  }

  .hero {
    min-block-size: calc(100vh - var(--header-height) - var(--size-10));
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
