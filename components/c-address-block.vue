<template>
  <address class="h-card">
    <p class="p-note">Zahn &amp; Ästhetik</p>
    <p class="p-name">Dr. med. Sabine Hugo</p>
    <p class="h-adr">
      <span class="p-street-address">Berliner Platz 9</span>
      <span>
        <span class="p-postal-code">97080</span>
        <span class="p-locality">Würzburg</span>
      </span>
    </p>
    <p>
      <span class="p-tel">+49 931 99 147 070</span>
      <span class="u-email">info@praxishugo.de</span>
    </p>
  </address>
  <address class="h-card">
    <p class="p-name">Hugo & Kollegen</p>
    <p class="h-adr">
      <span class="p-street-address">Am Zeughaus 40</span>
      <span>
        <span class="p-postal-code">97421</span>
        <span class="p-locality">Schweinfurt</span>
      </span>
    </p>
  </address>
</template>

<style scoped>
address {
  display: flex;
  flex-direction: column;
  font-style: normal;
}

address > * {
  margin-block: 0;
}

address > p:nth-child(4) {
  margin-block-start: var(--size-4);
}

address span {
  display: flex;
  gap: 0.5em;
}

@media (min-width: 1280px) {
  address > *:nth-child(4) {
    margin-block-start: var(--size-12);
  }
}
</style>
