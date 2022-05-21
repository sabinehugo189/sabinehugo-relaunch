<template>
  <div class="wrapper">
    <div class="container">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  padding-block-start: var(--size-20);
  padding-inline: var(--size-5);
}

.container {
  display: flex;
  flex-direction: column;
  gap: var(--size-10);
  margin-inline: auto;
  max-inline-size: var(--size-xxl);
}

@media (min-width: 1280px) {
  .wrapper {
    padding-inline: var(--size-10);
  }

  .container {
    gap: var(--size-40);
  }
}
</style>
