<template>
  <button :class="[btnSize, btnType]">
    <slot />
  </button>
</template>

<script setup>
const props = defineProps({
  size: {
    type: String,
    default: '',
  },
  emphasis: {
    type: String,
    default: '',
  },
});

const btnSize = ref(null);
const btnType = ref(null);

switch (props.size) {
  case 'small':
    btnSize.value = 'is-small';
    break;
}

switch (props.emphasis) {
  case 'secondary':
    btnType.value = 'is-secondary';
    break;
}
</script>
