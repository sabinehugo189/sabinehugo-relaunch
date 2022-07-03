<template>
  <div
    class="prose"
    :style="[align ? align : '']"
  >
    <slot />
  </div>
</template>

<script setup>
const props = defineProps({
  textAlign: {
    type: String,
    default: 'start',
  },
});

const align = computed(() => {
  let align;

  switch (props.textAlign) {
    case 'center':
      align = 'center';
      break;
    case 'left':
      align = 'flex-start';
      break;
    case 'right':
      align = 'flex-end';
      break;
    default:
      align = 'normal';
  }

  return props.textAlign
    ? `--align: ${align}; --text-align: ${props.textAlign};`
    : '';
});
</script>
