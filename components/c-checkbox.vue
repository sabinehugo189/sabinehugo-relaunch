<template>
  <div class="control">
    <label
      :for="uid"
      :class="{ 'has-error': props.error }"
      class="field"
    >
      <input
        v-bind="$attrs"
        :id="uid"
        v-model="input"
        type="checkbox"
        :aria-describedby="props.error ? `${uid}-error` : null"
        :aria-invalid="props.error ? true : null"
      />
      {{ label }}
    </label>
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
const { uid } = getCurrentInstance();

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  modelValue: {
    type: Boolean,
    default: false,
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
.control {
  display: flex;
  flex-direction: column;
  gap: var(--size-5);
}

.field {
  appearance: none;
  background-color: white;
  display: grid;
  gap: 0.5em;
  grid-template-columns: 1.5em auto;
  margin: 0;
}

.field.has-error {
  color: var(--red-6);
}

input[type='checkbox'] {
  appearance: none;
  background-color: var(--gray-0);
  border: var(--border-size-2) solid var(--link);
  border-radius: 0.375em;
  color: var(--link);
  display: grid;
  font: inherit;
  height: 1.5em;
  margin: 0;
  place-content: center;
  transform: translateY(calc((var(--border-size-2) / 2) * -1));
  width: 1.5em;
}

.has-error > input[type='checkbox'] {
  border-color: var(--red-6);
  color: var(--red-6);
}

input[type='checkbox']::before {
  /* stylelint-disable-next-line */
  background-color: CanvasText;
  /* stylelint-disable-next-line */
  box-shadow: inset 1em 1em currentColor;
  clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
  content: '';
  height: 0.65em;
  transform: scale(0);
  transform-origin: bottom left;
  transition: transform 120ms var(--ease-in-out-2);
  width: 0.65em;
}

input[type='checkbox']:checked::before {
  transform: scale(1);
}

@media (prefers-reduced-motion: no-preference) {
  input[type='checkbox']:focus-visible {
    transition: border-color 300ms var(--ease-2);
  }
}

input[type='checkbox']:focus-visible {
  border-color: var(--link-active);
  outline: 0;
}

input[type='checkbox']:disabled {
  border-color: var(--gray-2);
  color: var(--gray-2);
  cursor: not-allowed;
}

.message {
  align-self: flex-start;
  background-color: var(--red-6);
  border: var(--border-size-2) solid var(--red-6);
  border-radius: var(--radius-2);
  color: var(--gray-0);
  font-size: var(--font-size-1);
  font-weight: var(--font-weight-4);
  max-inline-size: 100%;
  padding-block: calc(var(--size-4) - var(--border-size-2));
  padding-inline: calc(var(--size-5) - var(--border-size-2));
  position: relative;
}

.message::before {
  border: 0.75rem solid transparent;
  border-bottom-color: var(--red-6);
  border-top: none;
  bottom: 100%;
  content: '';
  height: 0;
  left: 1.5em;
  position: absolute;
  width: 0;
}
</style>
