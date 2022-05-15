<template>
  <div class="control">
    <div
      :class="{ 'has-error': props.error }"
      class="field"
    >
      <input
        v-bind="$attrs"
        :id="uid"
        v-model="input"
        :placeholder="label"
        :aria-describedby="props.error ? `${uid}-error` : null"
        :aria-invalid="props.error ? true : null"
      />
      <label
        v-if="props.label"
        :for="uid"
      >
        {{ props.label }}
      </label>
      <svg
        aria-hidden="true"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        fill="none"
      >
        <path
          d="M175 175C184.4 165.7 199.6 165.7 208.1 175L255.1 222.1L303 175C312.4 165.7 327.6 165.7 336.1 175C346.3 184.4 346.3 199.6 336.1 208.1L289.9 255.1L336.1 303C346.3 312.4 346.3 327.6 336.1 336.1C327.6 346.3 312.4 346.3 303 336.1L255.1 289.9L208.1 336.1C199.6 346.3 184.4 346.3 175 336.1C165.7 327.6 165.7 312.4 175 303L222.1 255.1L175 208.1C165.7 199.6 165.7 184.4 175 175V175zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"
        />
      </svg>
    </div>
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
    default: '',
  },
  modelValue: {
    type: [String, Number],
    default: '',
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
  position: relative;
}

label {
  border: var(--border-size-2) solid transparent;
  color: var(--gray-6);
  inset: 0;
  line-height: var(--size-5);
  padding-block: calc(var(--size-4) - var(--border-size-2));
  padding-inline: calc(var(--size-5) - var(--border-size-2));
  pointer-events: none;
  position: absolute;
  transition: all 300ms var(--ease-2);
}

input {
  background-color: var(--surface-1);
  block-size: var(--size-13);
  border-color: var(--link);
  border-radius: var(--radius-2);
  border-width: var(--border-size-2);
  font-weight: var(--font-weight-4);
  inline-size: 100%;
  line-height: var(--size-5);
  max-block-size: var(--size-13);
  max-inline-size: 100%;
  padding-block: calc(var(--size-4) - var(--border-size-2));
  padding-inline: calc(var(--size-5) - var(--border-size-2));
}

input ~ svg {
  display: none;
  height: var(--size-6);
  position: absolute;
  right: var(--size-5);
  top: 50%;
  transform: translateY(-50%);
  width: var(--size-6);
}

.has-error > input,
input:not(:placeholder-shown):invalid {
  border-color: var(--red-6);
  padding-inline-end: calc(var(--size-16) - var(--border-size-2));
}

.has-error > svg,
input:not(:placeholder-shown):invalid ~ svg {
  display: block;
  fill: var(--red-6);
}

@media (prefers-reduced-motion: no-preference) {
  input:focus-visible {
    transition: border-color 300ms var(--ease-2);
  }
}

input:focus-visible {
  border-color: var(--link-active) !important;
  outline: 0;
}

input::placeholder {
  color: transparent;
  opacity: 0;
}

div:focus-within > input,
input:not(:placeholder-shown) {
  color: var(--gray-8);
  font-weight: var(--font-weight-8);
  padding-block: calc(var(--size-6) - var(--border-size-2))
    calc(var(--size-2) - var(--border-size-2));
}

div:focus-within > label,
input:not(:placeholder-shown) + label {
  color: var(--link);
  font-size: var(--font-size-00);
  padding-block: calc(var(--size-2) - var(--border-size-2))
    calc(var(--size-6) - var(--border-size-2));
}

.message {
  align-self: flex-start;
  background-color: var(--red-6);
  border: var(--border-size-2) solid var(--red-6);
  border-radius: var(--radius-2);
  color: var(--gray-0);
  font-size: var(--font-size-1);
  font-weight: var(--font-weight-8);
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
