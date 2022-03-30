<template>
  <div class="container">
    <slot />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  margin-inline: auto;
  max-inline-size: var(--size-xxxl);
  padding-inline: var(--size-5);
  row-gap: var(--size-48);
}

@media (--xl-n-above) {
  .container {
    padding-inline: var(--size-10);
  }
}
</style>
