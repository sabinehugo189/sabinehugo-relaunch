<template>
  <div class="faq">
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
</template>

<script setup>
defineProps({
  questions: {
    type: Object,
    required: true,
  },
});

const { uid } = getCurrentInstance();
</script>

<style scoped>
.faq {
  display: flex;
  flex-direction: column;
  margin-inline: auto;
  max-inline-size: var(--size-md);
  row-gap: var(--size-10);
  width: 100%;
}
</style>
