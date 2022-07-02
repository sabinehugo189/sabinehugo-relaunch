<template>
  <section class="container">
    <header
      v-if="title"
      :class="{ 'is-reversed': isReversed, 'is-imageless': isImageless }"
    >
      <h2 class="headline">{{ title }}</h2>
      <div class="frame">
        <Markdown />
      </div>
    </header>
    <ul class="items">
      <li
        v-for="(item, index) in items"
        :key="`item-${uid}-${index}`"
        class="item"
      >
        <c-usp-item
          :description="item.description"
          :icon-name="item.iconName"
          :title="item.title"
        />
      </li>
    </ul>
  </section>
</template>

<script setup>
defineProps({
  isImageless: {
    type: Boolean,
    default: false,
  },
  isReversed: {
    type: Boolean,
    default: false,
  },
  items: {
    type: Object,
    required: true,
  },
  title: {
    type: String,
    default: '',
  },
});
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: var(--size-16);
}

@media (min-width: 768px) {
  .container {
    gap: var(--size-20);
  }
}

@media (min-width: 1280px) {
  .container {
    gap: var(--size-24);
    padding-inline: var(--size-20);
  }
}

@media (min-width: 1536px) {
  .container {
    padding-inline: var(--size-40);
  }
}

header {
  display: flex;
  flex-direction: column;
}

header:not(.is-imageless) {
  display: grid;
  flex-direction: unset;
  gap: var(--size-10);
}

.headline {
  font-size: var(--font-size-fluid-3);
}

header.is-imageless > .frame {
  display: none;
}

@media (min-width: 768px) {
  header {
    align-items: center;
    text-align: center;
  }

  header:not(.is-imageless) {
    align-items: unset;
    gap: var(--size-4);
    grid-template-columns: repeat(2, 1fr);
    text-align: unset;
  }

  header:not(.is-imageless).is-reversed > .frame {
    order: -1;
  }
}

@media (min-width: 1280px) {
  header:not(.is-imageless) {
    grid-template-columns: repeat(10, 1fr);
  }

  header:not(.is-imageless) > .headline {
    grid-column: 1 / 5;
  }

  header:not(.is-imageless).is-reversed > .headline {
    grid-column: 7 / -1;
  }

  header:not(.is-imageless) > .frame {
    grid-column: 6 / -1;
  }

  header:not(.is-imageless).is-reversed > .frame {
    grid-column: 1 / 6;
  }
}

@media (min-width: 1536px) {
  header:not(.is-imageless) {
    gap: var(--size-8);
  }

  header:not(.is-imageless) > .headline {
    grid-column: 1 / 4;
  }

  header:not(.is-imageless).is-reversed > .headline {
    grid-column: 8 / -1;
  }

  header:not(.is-imageless) > .frame {
    grid-column: 5 / -1;
  }

  header:not(.is-imageless).is-reversed > .frame {
    grid-column: 1 / 7;
  }
}

.items {
  display: grid;
  gap: var(--size-16);
  list-style: none;
  padding-inline-start: 0;
}

@media (min-width: 768px) {
  .items {
    gap: var(--size-16) var(--size-4);
    grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
    justify-content: center;
  }
}

@media (min-width: 1024px) {
  .items {
    gap: var(--size-5);
  }
}

@media (min-width: 1536px) {
  .items {
    gap: var(--size-8);
  }
}
</style>
