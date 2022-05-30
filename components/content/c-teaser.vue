<template>
  <section class="container">
    <Markdown />
  </section>
</template>

<style scoped>
.container {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: var(--size-10);
  margin-inline: auto;
  max-inline-size: var(--size-md);
  text-align: center;
}

p {
  color: var(--link);
  font-size: var(--font-size-fluid-1);
  font-weight: var(--font-weight-8);
  line-height: var(--font-lineheight-1);
}
</style>
