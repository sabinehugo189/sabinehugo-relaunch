<template>
  <button :class="[btnSize, btnEmphasis]">
    <slot />
  </button>
</template>

<script setup>
const props = defineProps({
  emphasis: {
    type: String,
    default: '',
  },
  size: {
    type: String,
    default: '',
  },
});

const btnSize = ref(null);
const btnEmphasis = ref(null);

switch (props.size) {
  case 'small':
    btnSize.value = 'is-small';
    break;
}

switch (props.emphasis) {
  case 'secondary':
    btnEmphasis.value = 'is-secondary';
    break;
}
</script>
