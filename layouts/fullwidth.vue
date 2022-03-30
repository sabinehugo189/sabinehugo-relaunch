<template>
  <div
    class="container"
    :class="[shadow]"
  >
    <div>
      <slot />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  shadow: {
    type: String,
    default: '',
  },
});

let shadow;

if (props.shadow) {
  if (props.shadow === 'bottom') {
    shadow = 'shadow-bottom';
  } else {
    shadow = 'shadow-top';
  }
}
</script>

<style scoped>
.container {
  box-shadow: none;
}

.shadow-bottom {
  box-shadow: inset 0 -0.5em 0.5em -0.5em hsl(0deg 0% 0% / 0.1);
}

.shadow-top {
  box-shadow: inset 0 0.5em 0.5em -0.5em hsl(0deg 0% 0% / 0.1);
}

.container > div {
  display: flex;
  flex-direction: column;
  margin-inline: auto;
  max-inline-size: var(--size-xxxl);
  padding-inline: var(--size-5);
  row-gap: var(--size-48);
}

@media (--xl-n-above) {
  .container > div {
    padding-inline: var(--size-10);
  }
}
</style>
