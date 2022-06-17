<template>
  <section class="container">
    <ul class="icons">
      <li><slot name="icon-01" /></li>
      <li><slot name="icon-02" /></li>
      <li><slot name="icon-03" /></li>
      <li><slot name="icon-04" /></li>
    </ul>
  </section>
</template>

<style scoped>
.icons {
  display: grid;
  gap: var(--size-5);
  justify-content: center;
  list-style: none;
  margin-inline: calc(var(--size-5) * -1);
  max-inline-size: var(--size-xxl);
  padding-inline-start: 0;
}

.icons > li {
  padding-inline-start: 0;
}

@media (min-width: 768px) {
  .icons {
    gap: var(--size-8);
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1280px) {
  .icons {
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
    margin-inline: auto;
  }
}
</style>
