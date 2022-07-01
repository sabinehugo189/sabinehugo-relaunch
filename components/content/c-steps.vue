<template>
  <section class="container">
    <header>
      <h2>{{ props.title }}</h2>
    </header>
    <ol class="steps">
      <li
        v-for="(step, index) in steps"
        :key="`step-${uid}-${index}`"
        class="step"
      >
        <h3>{{ step.title }}</h3>
        <ul>
          <li
            v-for="(item, idx) in step.items"
            :key="`item-${uid}-${index}-${idx}`"
          >
            {{ item }}
          </li>
        </ul>
      </li>
    </ol>
  </section>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  steps: {
    type: Object,
    required: true,
  },
});

const { uid } = getCurrentInstance();
</script>

<style scoped>
.container {
  background-color: var(--surface-2);
  display: flex;
  flex-direction: column;
  gap: var(--size-10);
  margin-inline: calc(var(--size-10) * -1);
  padding-block: var(--size-20);
  padding-inline: var(--size-10);
}

@media (min-width: 1280px) {
  .container {
    padding: var(--size-32) var(--size-30);
  }
}

@media (min-width: 1536px) {
  .container {
    gap: var(--size-16);
    padding-block: var(--size-30);
    padding-inline: var(--size-50);
  }
}

header {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: var(--size-8);
  padding-inline: var(--size-5);
  text-align: center;
}

h2 {
  font-size: var(--font-size-fluid-3);
}

.steps {
  counter-reset: list-number;
  display: grid;
  gap: var(--size-5);
  list-style: none;
  margin-inline: auto;
  max-inline-size: var(--size-xxl);
  padding-inline-start: 0;
}

@media (min-width: 1280px) {
  .steps {
    gap: var(--size-8);
    grid-template-columns: repeat(3, 1fr);
    margin-inline: auto;
    max-inline-size: var(--size-xxl);
  }
}

.step {
  background-color: var(--surface-1);
  border-bottom-left-radius: var(--radius-3);
  border-bottom-right-radius: var(--radius-3);
  display: flex;
  flex-direction: column;
  font-size: var(--font-size-1);
  font-weight: var(--font-weight-5);
  gap: var(--size-12);
  padding: var(--size-8) var(--size-5);
}

@media (min-width: 1280px) {
  .step {
    font-size: var(--font-size-2);
  }
}

.step > h3 {
  align-items: center;
  display: flex;
  font-size: var(--font-size-4);
  font-weight: var(--font-weight-5);
  gap: var(--size-4);
}

.step > h3::before {
  align-items: center;
  block-size: var(--size-16);
  border-radius: var(--radius-round);
  box-shadow: var(--shadow-3);
  content: counter(list-number);
  counter-increment: list-number;
  display: flex;
  inline-size: var(--size-16);
  justify-content: center;
}

.step > ul {
  display: grid;
  gap: var(--size-4);
  list-style: none;
  padding-inline-start: 0;
}

.step > ul > li {
  display: flex;
  gap: var(--size-3);
  padding-inline-start: 0;
}

.step > ul > li::before {
  align-items: center;
  align-self: flex-start;
  aspect-ratio: 1 / 1;
  border-radius: var(--radius-round);
  box-shadow: var(--shadow-3);
  color: var(--link);
  content: '\2714';
  display: flex;
  flex: 0 0 2em;
  font-size: var(--font-size-0);
  justify-content: center;
}
</style>
