<template>
  <section class="grid">
    <div>
      <slot />
    </div>
    <div>
      <slot name="right" />
    </div>
  </section>
</template>

<style scoped>
.grid {
  display: grid;
  gap: var(--size-8);
}

@media (width >= 1280px) {
  .grid {
    gap: var(--size-10) var(--size-40);
    grid-template-columns: 1fr 1fr;
  }
}
</style>
