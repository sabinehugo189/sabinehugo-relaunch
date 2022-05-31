<template>
  <section class="container">
    <header>
      <h2>{{ props.title }}</h2>
    </header>
    <div class="wrapper">
      <c-toggle-section
        v-for="(section, index) in questions"
        :key="`section-${uid}-${index}`"
        :title="section.question"
      >
        <p
          v-for="(part, idx) in section.answer"
          :key="`part-${uid}-${index}-${idx}`"
        >
          {{ part }}
        </p>
      </c-toggle-section>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  questions: {
    type: Object,
    required: true,
  },
});

const { uid } = getCurrentInstance();
</script>

<style scoped>
.container {
  background-color: var(--surface-2);
  border-radius: var(--radius-3);
  display: flex;
  flex-direction: column;
  gap: var(--size-10);
  padding: var(--size-20) var(--size-5);
}

@media (min-width: 1280px) {
  .container {
    gap: var(--size-16);
    padding: var(--size-32) var(--size-8);
  }
}

header {
  display: flex;
  flex-direction: column;
  margin-inline: auto;
  max-inline-size: var(--size-md);
  width: 100%;
}

h2 {
  font-size: var(--font-size-fluid-3);
}

.wrapper {
  display: flex;
  flex-direction: column;
  gap: var(--size-10);
  margin-inline: auto;
  max-inline-size: var(--size-md);
  width: 100%;
}
</style>
