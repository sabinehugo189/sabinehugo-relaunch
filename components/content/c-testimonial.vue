<template>
  <div class="testimonial">
    <h3>
      {{ header }}
    </h3>
    <p>
      <svg
        aria-hidden="true"
        focusable="false"
        role="img"
        viewBox="0 0 448 512"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M96 224C84.72 224 74.05 226.3 64 229.9V224c0-35.3 28.7-64 64-64c17.67 0 32-14.33 32-32S145.7 96 128 96C57.42 96 0 153.4 0 224v96c0 53.02 42.98 96 96 96s96-42.98 96-96S149 224 96 224zM352 224c-11.28 0-21.95 2.305-32 5.879V224c0-35.3 28.7-64 64-64c17.67 0 32-14.33 32-32s-14.33-32-32-32c-70.58 0-128 57.42-128 128v96c0 53.02 42.98 96 96 96s96-42.98 96-96S405 224 352 224z"
        />
      </svg>
      {{ body }}
    </p>
    <p>
      {{ footer }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  header: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  footer: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.testimonial {
  background-color: var(--surface-5);
  border-radius: var(--radius-3);
  color: var(--text-1);
  display: flex;
  flex-direction: column;
  gap: var(--size-8);
  line-height: var(--font-lineheight-2);
  padding: var(--size-8);
}

.testimonial > * {
  margin-block: 0;
}

h3 {
  color: inherit;
  font-size: var(--font-size-3);
  font-weight: var(--font-weight-5);
  line-height: inherit;
}

p > svg {
  fill: var(--link);
  float: left;
  height: var(--size-6);
  transform: translateX(-20%);
}

p:last-of-type {
  font-size: var(--font-size-2);
}

@media (min-width: 1024px) {
  .testimonial {
    padding: var(--size-12);
  }
}
</style>
