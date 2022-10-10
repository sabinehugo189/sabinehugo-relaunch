<template>
  <ul
    :ref="submenuRef"
    :hidden="isSubmenu"
    :role="isSubmenu ? 'menu' : null"
    :class="{
      'is-submenu': isSubmenu,
      'is-stuck': isSticky,
    }"
  >
    <li
      v-for="(item, index) in navigationTree"
      :key="index"
      :role="isSubmenu ? 'menuitem' : null"
    >
      <button
        v-if="item.children"
        aria-haspopup="true"
        aria-expanded="false"
        class="is-link"
        @click="onToggleMenuClick"
        @keyup.up.down="onToggleMenuKeyup"
      >
        {{ item.title }}
        <svg
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          fill="currentColor"
        >
          <path
            d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z"
          />
        </svg>
      </button>
      <NuxtLink
        v-else
        :to="`${item._path}/`"
        :tabindex="isSubmenu ? '-1' : null"
        :role="isSubmenu ? 'menuitem' : null"
        :class="{ 'is-menuitem': isSubmenu }"
        @click="onClickMenuitem"
        @keyup.up.down.esc.enter="onKeyUpMenuitem"
      >
        {{ item.label }}
      </NuxtLink>
      <c-navigation
        v-if="item.children"
        :navigation-tree="item.children"
        :is-submenu="true"
      />
    </li>
  </ul>
</template>

<script setup>
/* global useBreakpoints, useMenuIsOpen, onClickOutside */

defineProps({
  navigationTree: {
    type: Array,
    default: () => [],
  },
  isSticky: {
    type: Boolean,
    default: false,
  },
  isSubmenu: {
    type: Boolean,
    default: false,
  },
});

const breakpoints = useBreakpoints({
  lg: 1024,
});

const lgNAbove = breakpoints.greater('lg');

function submenuRef(target) {
  if (target.classList.contains('is-submenu') && lgNAbove.value) {
    onClickOutside(target, (event) => {
      const menu = target;
      const button = menu.previousElementSibling;
      const expanded = button.getAttribute('aria-expanded') === 'true' || false;

      if (button !== event.target && expanded) {
        close({ button, menu });
      }
    });
  }
}

const { getMenuIsOpen, setMenuIsOpen } = useMenuIsOpen();

function open({ button, menu }) {
  button.setAttribute('aria-expanded', true);
  menu.hidden = false;

  setTimeout(() => {
    menu.querySelector('a[role="menuitem"]:not([disabled])').focus();
  }, 100);
}

function close({ button, menu }) {
  button.setAttribute('aria-expanded', false);
  menu.hidden = true;
}

function onToggleMenuClick(e) {
  const button = e.target.closest('button');
  const menu = button.nextElementSibling;
  const expanded = button.getAttribute('aria-expanded') === 'true' || false;

  if (expanded) {
    close({ button, menu });
  } else {
    open({ button, menu });
  }
}

function onToggleMenuKeyup(e) {
  const keyCode = e.keyCode;
  const button = e.target.closest('button');
  const menu = button.nextElementSibling;
  const expanded = button.getAttribute('aria-expanded') === 'true' || false;

  if (keyCode === 38) {
    if (expanded) {
      close({ button, menu });
    }
  } else {
    open({ button, menu });
  }
}

function onClickMenuitem(e) {
  if (e.target.hasAttribute('role')) {
    const target = e.target;
    const menu = target.closest('[role="menu"]');
    const button = menu.previousElementSibling;
    close({ button, menu });
  }

  if (getMenuIsOpen.value) {
    document.body.classList.remove('scrollstop');
    setMenuIsOpen(!getMenuIsOpen.value);
  }
}

function onKeyUpMenuitem(e) {
  if (e.target.hasAttribute('role')) {
    const escape = e.key === 'Escape';
    const enter = e.key === 'Enter';
    const up = e.key === 'ArrowUp';
    const target = e.target;
    const menu = target.closest('[role="menu"]');
    const button = menu.previousElementSibling;
    const items = Array.from(
      menu.querySelectorAll('a[role="menuitem"]:not([disabled])'),
    );
    const firstItem = items[0];
    const lastItem = items[items.length - 1];
    const index = items.findIndex((item) => item === target);

    if (escape || enter) {
      close({ button, menu });

      if (escape) {
        button.focus();
      }
    } else {
      if (up) {
        if (target === firstItem) {
          lastItem.focus();
        } else {
          items[index - 1].focus();
        }
      } else {
        if (target === lastItem) {
          firstItem.focus();
        } else {
          items[index + 1].focus();
        }
      }
    }
  }
}
</script>

<style scoped>
ul {
  color: var(--text-1);
  display: flex;
  flex-direction: column;
  font-optical-sizing: auto;
  font-size: var(--font-size-3);
  font-weight: var(--font-weight-4);
  gap: var(--size-5);
  list-style-type: none;
  padding-inline-start: 0;
}

ul.is-submenu {
  font-size: var(--font-size-2);
  padding-block-start: var(--size-5);
  padding-inline-start: var(--size-5);
}

li {
  padding-inline-start: 0;
  position: relative;
}

a,
button {
  transition: all 300ms var(--ease-2);
}

a:link,
a:visited,
button.is-link {
  color: inherit;
  font: inherit;
  text-decoration: none;
}

a:hover,
a.router-link-active,
button.is-link:hover {
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-thickness: 3px;
  text-underline-position: under;
}

a:active,
button.is-link:active {
  color: var(--link-visited);
}

a:hover,
a:active {
  background-color: transparent;
}

a.router-link-active {
  cursor: auto;
}

a.is-menuitem {
  white-space: nowrap;
}

button > svg {
  inline-size: 1ch;
}

button[aria-expanded='true'] > svg {
  transform: rotate(180deg);
}

@media (min-width: 1024px) {
  ul {
    color: var(--text-1);
    flex-direction: row;
    font-size: var(--font-size-2);
  }

  ul.is-stuck {
    color: var(--text-5);
  }

  ul.is-submenu {
    background-color: hsl(var(--surface-2-hsl) / 0.95);
    border-end-end-radius: var(--radius-3);
    border-end-start-radius: var(--radius-3);
    box-shadow: var(--shadow-2);
    color: var(--text-5);
    flex-direction: column;
    left: 0;
    margin-inline-start: calc(var(--size-8) * -1);
    padding: var(--size-8);
    position: absolute;
    row-gap: var(--size-3);
    top: calc(100% + var(--size-4));
    transition: all 300ms var(--ease-2);
  }
}

@media (min-width: 1920px) {
  ul {
    column-gap: var(--size-10);
  }
}
</style>
