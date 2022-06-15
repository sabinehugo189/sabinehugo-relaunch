<template>
  <dl class="opening-hours">
    <dt>Montag:</dt>
    <dd><time datetime="PT4H30M">08:30 - 13:00 Uhr</time></dd>
    <dd><time datetime="PT4H">14:00 - 18:00 Uhr</time></dd>
    <dt>Dienstag:</dt>
    <dd><time datetime="PT4H30M">08:30 - 13:00 Uhr</time></dd>
    <dd><time datetime="PT4H">14:00 - 18:00 Uhr</time></dd>
    <dt>Mittwoch:</dt>
    <dd><time datetime="PT4H30M">08:30 - 13:00 Uhr</time></dd>
    <dd><time datetime="PT4H">14:00 - 18:00 Uhr</time></dd>
    <dt>Donnerstag:</dt>
    <dd><time datetime="PT5H">09:00 - 14:00 Uhr</time></dd>
    <dt>Freitag:</dt>
    <dd><time datetime="PT4H">09:00 - 13:00 Uhr</time></dd>
  </dl>
</template>

<style scoped>
.opening-hours {
  column-gap: var(--size-4);
  display: grid;
  font-size: var(--font-size-3);
  grid-template-columns: auto 1fr;
}

.opening-hours > dt {
  color: var(--gray-0);
  grid-column: 1 / 2;
  margin: 0;
}

.opening-hours > dd {
  grid-column: 2 / 3;
}
</style>
