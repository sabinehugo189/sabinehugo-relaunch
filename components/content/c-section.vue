<template>
  <section
    class="container"
    :class="{ 'is-fullbleed': isFullbleed }"
  >
    <div
      class="inner"
      :style="[size ? size : '']"
    >
      <slot name="header" />
      <slot />
    </div>
    <a
      v-if="anchor"
      :id="anchor"
      :name="anchor"
      class="anchor"
    />
  </section>
</template>

<script setup>
const props = defineProps({
  anchor: {
    type: String,
    default: '',
  },
  isFullbleed: {
    type: Boolean,
    default: false,
  },
  maxInlineSize: {
    type: String,
    default: '',
  },
});

const size = computed(() => {
  return props.maxInlineSize
    ? `--max-inline-size: var(--size-${props.maxInlineSize})`
    : '';
});
</script>

<style scoped>
.container {
  position: relative;
}

.container.is-fullbleed {
  background-color: var(--surface-2);
  margin-inline: calc(var(--size-10) * -1);
  padding-block: var(--size-20);
  padding-inline: var(--size-10);
}

.inner {
  display: flex;
  flex-direction: column;
  inline-size: 100%;
  margin-inline: auto;
  max-inline-size: var(--max-inline-size, 100%);
  row-gap: var(--size-10);
}

@media (min-width: 1280px) {
  .container {
    padding-inline: var(--size-20);
  }

  .container.is-fullbleed {
    padding-inline: var(--size-30);
  }
}

@media (min-width: 1536px) {
  .container {
    padding-inline: var(--size-40);
  }

  .container.is-fullbleed {
    padding-block: var(--size-30);
    padding-inline: var(--size-50);
  }

  .inner {
    row-gap: var(--size-16);
  }
}

a.anchor {
  position: absolute;
}
</style>
