<template>
  <header :style="[align ? align : '']">
    <component
      :is="titleTag"
      class="headline"
    >
      {{ title }}
    </component>
    <p
      v-if="description"
      class="paragraph"
    >
      {{ description }}
    </p>
  </header>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  titleTag: {
    type: String,
    default: 'h2',
  },
  description: {
    type: String,
    default: '',
  },
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

<style scoped>
header {
  display: flex;
  flex-direction: column;
  gap: var(--size-8);
}

@media (width >= 768px) {
  header {
    align-items: var(--align);
    text-align: var(--text-align);
  }
}

.headline {
  font-size: var(--font-size-fluid-3);
}

.paragraph {
  font-size: var(--font-size-fluid-0);
}
</style>
