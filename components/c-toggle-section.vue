<template>
  <div
    class="toggle-section"
    role="region"
  >
    <h3>
      <button
        :aria-expanded="isOpen"
        @click="toggleOpen"
      >
        {{ props.title }}
        <span>
          <svg
            aria-hidden="true"
            focusable="false"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 10 10"
          >
            <rect
              class="vert"
              height="8"
              width="2"
              y="1"
              x="4"
            />
            <rect
              height="2"
              width="8"
              y="4"
              x="1"
            />
          </svg>
        </span>
      </button>
    </h3>
    <div
      class="content"
      :hidden="!isOpen"
    >
      <slot />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  open: {
    type: Boolean,
    default: false,
  },
});

const isOpen = ref(props.open);

function toggleOpen() {
  isOpen.value = !isOpen.value;
}
</script>

<style scoped>
.toggle-section {
  display: flex;
  flex-direction: column;
  gap: var(--size-5);
}

h3 {
  color: var(--gray-6);
  font-size: var(--font-size-3);
  max-inline-size: var(--size-content-3);
}

h3 > button {
  align-items: center;
  all: inherit;
  cursor: pointer;
  display: flex;
  gap: var(--size-8);
  justify-content: space-between;
  width: 100%;
}

button > span {
  align-items: center;
  block-size: var(--size-10);
  border-radius: var(--radius-round);
  box-shadow: var(--shadow-3);
  color: var(--link);
  display: flex;
  flex: 0 0 auto;
  inline-size: var(--size-10);
  justify-content: center;
}

button > span > svg {
  block-size: var(--size-4);
  fill: currentColor;
  inline-size: var(--size-4);
}

[aria-expanded='true'] .vert {
  display: none;
}

h3 > button:not(:active):focus-visible > span {
  outline-offset: 5px;
  outline-style: solid;
  outline-width: var(--border-size-3);
  transition-duration: 0.25s;
}

h3 > button:focus-visible > span {
  outline-color: var(--link-active);
  transition: outline-offset 145ms var(--ease-2);
}

.content {
  display: flex;
  flex-direction: column;
  gap: var(--size-5);
}

.content[hidden] {
  display: none;
}
</style>
