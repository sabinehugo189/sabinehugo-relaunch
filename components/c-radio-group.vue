<template>
  <c-radio
    v-for="option in options"
    :key="option.value"
    v-model="data"
    :label="option.label"
    :value="option.value"
    :name="name"
  />
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
});

const emit = defineEmits(['update:modelValue']);
const data = useVModel(props, 'modelValue', emit);
</script>
