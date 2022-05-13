<template>
  <div class="control">
    <fieldset
      :name="name"
      class="fields"
    >
      <legend class="sr-only">{{ name }}</legend>
      <c-radio
        v-for="option in options"
        :key="option.value"
        v-model="data"
        :label="option.label"
        :value="option.value"
        :name="name"
        :error="error"
      />
    </fieldset>
    <p
      v-if="props.error"
      :id="`${uid}-error`"
      class="message"
      aria-live="assertive"
    >
      {{ props.error }}
    </p>
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: [String, Number],
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  options: {
    type: Array,
    required: true,
  },
  error: {
    type: String,
    default: '',
  },
});

const emit = defineEmits(['update:modelValue']);
const data = useVModel(props, 'modelValue', emit);
</script>

<style scoped>
.control {
  display: flex;
  flex: 1 1 100%;
  flex-direction: column;
  gap: var(--size-5);
}

.fields {
  border: none;
  display: flex;
  gap: var(--size-5) var(--size-8);
  padding: 0;
}

.message {
  border: var(--border-size-2) solid var(--red-6);
  border-radius: var(--radius-2);
  color: var(--red-6);
  font-size: var(--font-size-1);
  max-inline-size: 100%;
  padding-block: calc(var(--size-4) - var(--border-size-2));
  padding-inline: calc(var(--size-5) - var(--border-size-2));
}
</style>
