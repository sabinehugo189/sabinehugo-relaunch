<template>
  <button :class="[btnSize, btnType]">{{ props.label }}</button>
</template>

<script setup>
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    default: 'regular',
  },
  type: {
    type: String,
    default: 'primary',
  },
});

const btnSize = ref(null);
const btnType = ref(null);

switch (props.size) {
  case 'small':
    btnSize.value = 'is-small';
    break;

  default:
    btnSize.value = 'is-regular';
    break;
}

switch (props.type) {
  case 'secondary':
    btnType.value = 'is-secondary';
    break;

  default:
    btnType.value = 'is-primary';
    break;
}
</script>

<style scoped>
button {
  all: unset;
  border-end-end-radius: var(--radius-4);
  border-end-start-radius: var(--radius-4);
  border-start-end-radius: var(--radius-4);
  color: var(--white);
  cursor: pointer;
  font-weight: var(--font-weight-8);
  line-height: var(--font-lineheight-0);
}

.is-small {
  font-size: var(--font-size-1);
  padding: var(--size-2) var(--size-7);
}

.is-regular {
  font-size: var(--font-size-2);
  padding: var(--size-4) var(--size-10);
}

.is-primary {
  background-image: var(--gradient-19);
}

.is-primary:hover {
  background-color: var(--orange-6);
  background-image: none;
}

.is-primary:focus {
  box-shadow: var(--ring-3);
}

.is-primary:active {
  background-color: var(--orange-7);
  background-image: none;
  box-shadow: var(--ring-0);
}
</style>
