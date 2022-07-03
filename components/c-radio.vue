<template>
  <label
    :class="{ 'has-error': props.error }"
    class="field"
  >
    <input
      v-bind="$attrs"
      v-model="input"
      :checked="modelValue === value"
      :value="value"
      :name="name"
      type="radio"
    />
    {{ label }}
  </label>
</template>

<script setup>
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  modelValue: {
    type: [String, Number],
    default: '',
  },
  value: {
    type: [String, Number],
    required: true,
  },
  error: {
    type: String,
    default: '',
  },
});

const emit = defineEmits(['update:modelValue']);
const input = useVModel(props, 'modelValue', emit);
</script>

<style scoped>
.field {
  appearance: none;
  display: grid;
  gap: 0.5em;
  grid-template-columns: 1.5em auto;
  margin: 0;
}

.field.has-error {
  color: var(--red-6);
}

input[type='radio'] {
  appearance: none;
  background-color: var(--gray-0);
  border: var(--border-size-2) solid var(--link);
  border-radius: var(--radius-round);
  color: var(--link);
  display: grid;
  font: inherit;
  height: 1.5em;
  margin: 0;
  place-content: center;
  transform: translateY(calc((var(--border-size-2) / 2) * -1));
  width: 1.5em;
}

.has-error > input[type='radio'] {
  border-color: var(--red-6);
  color: var(--red-6);
}

input[type='radio']::before {
  /* stylelint-disable-next-line */
  background-color: CanvasText;
  border-radius: var(--radius-round);
  box-shadow: inset 1em 1em currentColor;
  content: '';
  height: 0.65em;
  transform: scale(0);
  transition: transform 120ms var(--ease-in-out-2);
  width: 0.65em;
}

input[type='radio']:checked::before {
  transform: scale(1);
}

@media (prefers-reduced-motion: no-preference) {
  input[type='radio']:focus-visible {
    transition: border-color 300ms var(--ease-2);
  }
}

input[type='radio']:focus-visible {
  border-color: var(--link-active);
  outline: 0;
}

input[type='radio']:disabled {
  border-color: var(--gray-2);
  color: var(--gray-2);
  cursor: not-allowed;
}
</style>
