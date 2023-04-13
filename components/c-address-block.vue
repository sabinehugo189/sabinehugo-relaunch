<template>
  <div class="addresses">
    <address class="h-card">
      <p>
        <span>
          <span class="p-honorific-prefix">
            {{ data['p-honorific-prefix'] }}
          </span>
          <span class="p-name">
            {{ data['p-name'] }}
          </span>
        </span>
      </p>
      <p class="p-adr h-adr">
        <span class="p-street-address">
          {{ data['h-adr']['p-street-address'] }}
        </span>
        <span>
          <span class="p-postal-code">
            {{ data['h-adr']['p-postal-code'] }}
          </span>
          <span class="p-locality">
            {{ data['h-adr']['p-locality'] }}
          </span>
        </span>
      </p>
      <p>
        <span class="p-tel">
          {{ data['p-tel'] }}
        </span>
        <span class="u-email">
          {{ data['u-email'] }}
        </span>
      </p>
    </address>
  </div>
</template>

<script setup>
/* global queryContent */

const { data } = await useAsyncData('address', () => {
  return queryContent('_h-card')
    .where({ _partial: true })
    .only([
      'p-note',
      'p-honorific-prefix',
      'p-name',
      'h-adr',
      'p-tel',
      'u-email',
    ])
    .findOne();
});
</script>

<style scoped>
.addresses {
  display: flex;
  flex-direction: column;
  row-gap: var(--size-8);
}

address {
  display: flex;
  flex-direction: column;
  font-size: var(--font-size-3);
  font-style: normal;
}

address > * {
  margin-block: 0;
}

address > p {
  font-size: inherit;
}

address > p:nth-child(3) {
  margin-block-start: var(--size-4);
}

address > p > span {
  display: flex;
  gap: 0.5em;
}

@media (width >= 1280px) {
  address > *:nth-child(3) {
    margin-block-start: var(--size-12);
  }
}
</style>
