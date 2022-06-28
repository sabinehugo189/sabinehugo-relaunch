<template>
  <dl class="opening-hours">
    <template
      v-for="hours in data['opening-hours']"
      :key="hours.id"
    >
      <dt>{{ hours.day }}:</dt>
      <template
        v-for="time in hours.time"
        :key="time.id"
      >
        <dd>
          <time :datetime="time.datetime">{{ time.label }}</time>
        </dd>
      </template>
    </template>
  </dl>
</template>

<script setup>
/* global queryContent */

const { data } = await useAsyncData('opening-hours', () => {
  return queryContent('_opening-hours').only(['opening-hours']).findOne();
});
</script>

<style scoped>
.opening-hours {
  column-gap: var(--size-4);
  display: grid;
  font-size: var(--font-size-3);
  grid-template-columns: auto 1fr;
}

.opening-hours > dt {
  color: var(--gray-0);
  grid-column: 1 / 2;
  margin: 0;
}

.opening-hours > dd {
  grid-column: 2 / 3;
}
</style>
