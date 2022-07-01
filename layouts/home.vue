<template>
  <div class="wrapper">
    <div class="wrapper-inner">
      <div class="container">
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
  padding-inline: var(--size-5);
  row-gap: var(--size-48);
}

.wrapper-inner {
  margin-inline: calc(var(--size-5) * -1);
  padding-inline: var(--size-5);
  position: relative;
}

.shaded-edge {
  box-shadow: inset 0 -0.5em 0.5em -0.5em hsl(0deg 0% 0% / 0.1);
  inset: 0;
  pointer-events: none;
  position: absolute;
}

.container {
  display: flex;
  flex-direction: column;
  margin-inline: auto;
  max-inline-size: var(--size-xxxl);
  padding-inline: var(--size-5);
  row-gap: var(--size-48);
}

@media (min-width: 1280px) {
  .wrapper {
    padding-inline: var(--size-10);
  }

  .wrapper-inner {
    margin-inline: calc(var(--size-10) * -1);
    padding-inline: var(--size-10);
  }

  .container {
    padding-inline: 0;
  }
}
</style>
