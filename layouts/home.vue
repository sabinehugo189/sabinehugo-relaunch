<template>
  <div class="wrapper">
    <div class="container container-wrapper">
      <div class="container-inner">
        <c-hero />
      </div>
      <div class="shaded-edge"></div>
    </div>
    <div class="container">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  row-gap: var(--size-48);
}

.container,
.container-inner {
  display: flex;
  flex-direction: column;
  margin-inline: auto;
  max-inline-size: var(--size-xxxl);
  padding-inline: var(--size-5);
  row-gap: var(--size-48);
}

.container-wrapper {
  display: block;
  margin-inline: unset;
  max-inline-size: unset;
  padding-inline: unset;
  position: relative;
}

.shaded-edge {
  box-shadow: inset 0 -0.5em 0.5em -0.5em hsl(0deg 0% 0% / 0.1);
  inset: 0;
  pointer-events: none;
  position: absolute;
}

@media (min-width: 1280px) {
  .container,
  .container-inner {
    padding-inline: var(--size-10);
  }

  .container-wrapper {
    padding-inline: unset;
  }
}
</style>
