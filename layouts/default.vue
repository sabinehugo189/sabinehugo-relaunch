<template>
  <div class="wrapper">
    <div class="container">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  padding: var(--size-20) var(--size-5) 0;
}

.container {
  display: flex;
  flex-direction: column;
  margin-inline: auto;
  max-inline-size: var(--size-xxl);
  padding-inline: var(--size-5);
  row-gap: var(--size-10);
}

@media (min-width: 1280px) {
  .wrapper {
    padding-inline: var(--size-10);
  }

  .container {
    padding-inline: 0;
    row-gap: var(--size-40);
  }
}
</style>
