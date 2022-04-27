<template>
  <section class="container">
    <p>
      {{ props.teaser }} Gerne berate ich Sie ausführlich. Machen Sie heute noch
      einen Termin in unserer Fachpraxis für Invisalign in Würzburg aus.
    </p>
    <NuxtLink
      to="#contact"
      class="btn"
    >
      Jetzt Termin vereinbaren
    </NuxtLink>
  </section>
</template>

<script setup>
const props = defineProps({
  teaser: {
    type: String,
    required: true,
  },
});
</script>

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
