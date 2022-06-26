<template>
  <div class="addresses">
    <address
      v-for="hcard in data['h-cards']"
      :key="hcard.id"
      class="h-card"
    >
      <p
        v-if="hcard['p-note']"
        class="p-note"
      >
        {{ hcard['p-note'] }}
      </p>
      <p
        v-if="hcard['p-name']"
        class="p-name"
      >
        {{ hcard['p-name'] }}
      </p>
      <p
        v-if="hcard['h-adr']"
        class="h-adr"
      >
        <span class="p-street-address">
          {{ hcard['h-adr']['p-street-address'] }}
        </span>
        <span>
          <span class="p-postal-code">
            {{ hcard['h-adr']['p-postal-code'] }}
          </span>
          <span class="p-locality">
            {{ hcard['h-adr']['p-locality'] }}
          </span>
        </span>
      </p>
      <p v-if="hcard['p-tel'] || hcard['u-email']">
        <span
          v-if="hcard['p-tel']"
          class="p-tel"
        >
          {{ hcard['p-tel'] }}
        </span>
        <span
          v-if="hcard['u-email']"
          class="u-email"
        >
          {{ hcard['u-email'] }}
        </span>
      </p>
    </address>
  </div>
</template>

<script setup>
/* global queryContent */

const { data } = await useAsyncData('address', () => {
  return queryContent('_address').only(['h-cards']).findOne();
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
