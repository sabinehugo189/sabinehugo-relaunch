<template>
  <header :class="{ 'is-reversed': isReversed }">
    <component
      :is="titleTag"
      class="headline"
    >
      {{ title }}
    </component>
    <div class="frame">
      <slot />
    </div>
  </header>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  titleTag: {
    type: String,
    default: 'h2',
  },
  isReversed: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped>
header {
  display: grid;
  gap: var(--size-10);
}

.headline {
  font-size: var(--font-size-fluid-3);
}

@media (min-width: 768px) {
  header {
    gap: var(--size-4);
    grid-template-columns: repeat(2, 1fr);
  }

  header.is-reversed > .frame {
    order: -1;
  }
}

@media (min-width: 1280px) {
  header {
    grid-template-columns: repeat(10, 1fr);
  }

  header > .headline {
    grid-column: 1 / 5;
  }

  header.is-reversed > .headline {
    grid-column: 7 / -1;
  }

  header > .frame {
    grid-column: 6 / -1;
  }

  header.is-reversed > .frame {
    grid-column: 1 / 6;
  }
}

@media (min-width: 1536px) {
  header {
    gap: var(--size-8);
  }

  header > .headline {
    grid-column: 1 / 4;
  }

  header.is-reversed > .headline {
    grid-column: 8 / -1;
  }

  header > .frame {
    grid-column: 5 / -1;
  }

  header.is-reversed > .frame {
    grid-column: 1 / 7;
  }
}
</style>
