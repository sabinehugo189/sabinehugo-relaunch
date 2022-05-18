<template>
  <ul class="link-list">
    <li><a href="#">Impressum</a></li>
    <li><a href="#">Datenschutz</a></li>
  </ul>
</template>

<style scoped>
.link-list {
  display: flex;
  flex-direction: column;
  gap: normal;
  list-style: none;
  padding-inline-start: 0;
}

.link-list > li {
  display: initial;
  gap: normal;
  padding-inline-start: 0;
}

.link-list > li > a {
  background-color: transparent;
  color: inherit;
  text-decoration: none;
}

.link-list > li > a:hover {
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-thickness: 3px;
  text-underline-position: under;
}

.link-list > li > a:focus-visible {
  outline-color: var(--text-1);
  outline-style: solid;
}
</style>
