<template>
  <div class="container">
    <footer>
      <h2>Footer</h2>
    </footer>
  </div>
</template>

<style scoped>
.container {
  box-shadow: inset 0 0.5em 0.5em -0.5em hsl(0deg 0% 0% / 0.1);
}

footer {
  margin-inline: auto;
  max-inline-size: var(--size-xxxl);
  padding-inline: var(--size-5);
}

@media (--xl-n-above) {
  footer {
    padding-inline: var(--size-10);
  }
}
</style>
