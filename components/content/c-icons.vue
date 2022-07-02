<template>
  <section class="container">
    <header v-if="title">
      <h3>
        {{ title }}
      </h3>
    </header>
    <ul class="icons">
      <li
        v-for="(icon, index) in icons"
        :key="`icon-${uid}-${index}`"
        class="icon"
      >
        <c-icon
          :caption="icon.caption"
          :icon-name="icon.iconName"
        />
      </li>
    </ul>
  </section>
</template>

<script setup>
defineProps({
  icons: {
    type: Object,
    required: true,
  },
  title: {
    type: String,
    default: '',
  },
});

const { uid } = getCurrentInstance();
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: var(--size-10);
  width: 100%;
}

@media (min-width: 1280px) {
  .container {
    padding-inline: var(--size-20);
  }
}

@media (min-width: 1536px) {
  .container {
    padding-inline: var(--size-40);
  }
}

header {
  align-items: center;
  display: flex;
  flex-direction: column;
}

h3 {
  font-size: var(--font-size-fluid-3);
}

.icons {
  display: grid;
  gap: var(--size-8);
  list-style: none;
  padding-inline-start: 0;
}

.icon {
  padding-inline-start: 0;
}

@media (min-width: 768px) {
  .icons {
    grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
    justify-content: center;
  }
}
</style>
