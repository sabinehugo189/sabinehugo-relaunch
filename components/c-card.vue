<template>
  <div class="card">
    <div class="img">
      <picture>
        <source
          media="(min-width: 1536px)"
          :srcset="`
            https://res.cloudinary.com/zahn-und-sthetik/image/upload/c_fill,ar_1.618,f_auto,q_auto,w_500/v1652281328/invisalign/${imgName} 500w
          `"
        />
        <img
          :src="`https://res.cloudinary.com/zahn-und-sthetik/image/upload/c_fill,f_auto,ar_1.618,q_auto,w_400/v1652281328/invisalign/${imgName}`"
          alt=""
          loading="lazy"
        />
      </picture>
    </div>
    <div class="text">
      <h3>
        {{ props.head }}
      </h3>
      <p>
        {{ props.body }}
      </p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  head: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  imgName: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.card {
  background-color: var(--surface-1);
  border-radius: var(--radius-3);
  overflow: hidden;
}

.card,
.text {
  display: flex;
  flex-direction: column;
}

.img {
  aspect-ratio: 1.618 / 1;
}

.img > img {
  height: 100%;
  object-fit: cover;
  width: 100%;
}

.text {
  flex-grow: 1;
  gap: var(--size-5);
  padding: var(--size-8) var(--size-5);
}

.text :last-child {
  margin-block-start: auto;
}

h3 {
  color: var(--link);
  font-size: var(--font-size-2);
  font-weight: var(--font-weight-8);
  line-height: var(--font-lineheight-3);
}

@media (min-width: 768px) {
  .card {
    max-inline-size: calc(var(--size-content-3) + (2 * var(--size-5)));
  }

  h3,
  p {
    font-size: var(--font-size-3);
  }
}

@media (min-width: 1024px) {
  .card {
    max-inline-size: calc(var(--size-content-3) + (2 * var(--size-12)));
  }

  .text {
    gap: var(--size-8);
    padding: var(--size-12);
  }

  h3,
  p {
    font-size: var(--font-size-4);
  }
}
</style>
