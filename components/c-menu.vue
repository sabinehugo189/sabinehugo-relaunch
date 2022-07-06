<template>
  <button
    class="is-link"
    @click="toggleMenu"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="2"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  </button>
  <Teleport to="body">
    <div
      class="modal"
      :hidden="!getMenuIsOpen"
    >
      <div class="header">
        <NuxtLink
          to="/"
          class="logo"
          @click="toggleMenu"
        >
          <c-logo
            fill="hsl(0deg 0% 98%)"
            :size="logoSize"
          />
        </NuxtLink>
        <div class="navigation">
          <c-utilities />
          <button
            class="is-link"
            @click="toggleMenu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
      <slot />
    </div>
  </Teleport>
</template>

<script setup>
/* global useMenuIsOpen */

const { getMenuIsOpen, setMenuIsOpen } = useMenuIsOpen();

const logoSize = ref('2rem');

function toggleMenu() {
  document.body.classList.toggle('scrollstop');
  setMenuIsOpen(!getMenuIsOpen.value);
}
</script>

<style scoped>
button {
  margin: calc(var(--size-1) * -1);
  padding: var(--size-1);
}

.modal {
  background-color: var(--surface-5);
  color: var(--text-1);
  display: grid;
  grid-template-rows: auto 1fr;
  inset: 0;
  padding: var(--size-10) var(--size-5);
  position: fixed;
  row-gap: var(--size-20);
  z-index: var(--layer-important);
}

@media (min-width: 768px) {
  .modal {
    padding-inline: var(--size-10);
  }
}

.header {
  display: flex;
  justify-content: space-between;
}

.logo {
  background-color: transparent !important;
}

.modal .navigation {
  align-items: center;
  column-gap: var(--size-5);
  display: flex;
}

.modal .navigation :deep(svg),
.modal .navigation path {
  stroke: var(--text-1);
}
</style>
