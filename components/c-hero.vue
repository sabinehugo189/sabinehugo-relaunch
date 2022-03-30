<template>
  <div class="container">
    <div>
      <h2>Hero</h2>
    </div>
  </div>
</template>

<style scoped>
.container {
  box-shadow: inset 0 -0.5em 0.5em -0.5em hsl(0deg 0% 0% / 0.1);
}

.container > div {
  margin-inline: auto;
  max-inline-size: var(--size-xxxl);
  padding-inline: var(--size-5);
}

@media (--xl-n-above) {
  .container > div {
    padding-inline: var(--size-10);
  }
}
</style>
