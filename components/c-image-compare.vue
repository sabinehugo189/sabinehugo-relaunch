<template>
  <div
    ref="target"
    class="image-compare"
  >
    <slot name="image-1" />
    <span class="image-2-wrapper">
      <slot name="image-2" />
    </span>
    <label class="image-compare-label">
      <span class="visually-hidden">
        Select what percentage of the bottom image to show
      </span>
      <input
        type="range"
        min="0"
        max="100"
        class="image-compare-input"
      />
    </label>
  </div>
</template>

<script setup>
const isMounted = useMounted();
const target = ref(null);

watch(
  () => isMounted.value,
  (mounted) => {
    if (mounted) {
      const clippedImage = target.value.querySelector('.image-2-wrapper > img');
      const clippingSlider = target.value.querySelector('.image-compare-input');

      // Store an animation frame so we can keep track of scheduled
      // repaints and cancel old repaints that haven't happened yet
      let animationFrame;

      // Listen for the input being dragged
      clippingSlider.addEventListener('input', (event) => {
        // If an animation frame is already queued up, cancel it
        if (animationFrame) {
          cancelAnimationFrame(animationFrame);
        }

        // Tell the browser to update our component when it is ready
        // to repaint.
        animationFrame = requestAnimationFrame(() => {
          // Grab the input's value
          const newValue = `${event.target.value}%`;

          // Use it to set our custom property
          clippedImage.style.setProperty('--exposure', newValue);
        });
      });
    }
  },
);
</script>

<style scoped>
.image-compare {
  display: flex;
  position: relative;
}

.image-compare img {
  object-fit: cover;
}

.image-2-wrapper {
  display: flex;
  filter: drop-shadow(-4px 0 0 hsl(0deg 0% 100%));
  inset: 0;
  position: absolute;
}

:deep(.image-2-wrapper > img) {
  --exposure: 50%;

  clip-path: polygon(
    calc(var(--exposure) + 2px) 0,
    100% 0,
    100% 100%,
    calc(var(--exposure) + 2px) 100%
  );
}

.image-compare-label {
  display: flex;
  inset: 0;
  position: absolute;
}

.image-compare-input {
  --thumb-size: var(--size-14);

  appearance: none;
  background: none;
  border: none;
  color: var(--link);
  cursor: col-resize;
  margin: 0 calc(var(--thumb-size) / -2);
  width: calc(100% + var(--thumb-size));
}

.image-compare-input:focus-visible {
  outline: none;
}

@media (min-width: 1280px) {
  .image-compare-input {
    --thumb-size: var(--size-28);
  }
}

/* Firefox */
.image-compare-input::-moz-range-thumb {
  background-color: var(--gray-0);
  background-image: url("data:image/svg+xml,%3Csvg width='32' height='20' fill='%23FB8C00' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 20c-.366 0-.731-.14-1.01-.419L.419 11.01a1.428 1.428 0 0 1 0-2.02L8.99.419a1.428 1.428 0 1 1 2.02 2.02L3.448 10l7.563 7.563A1.428 1.428 0 0 1 10 20ZM22 0c.366 0 .732.14 1.01.419l8.571 8.571a1.428 1.428 0 0 1 0 2.02l-8.571 8.571a1.428 1.428 0 1 1-2.02-2.02L28.552 10l-7.563-7.563A1.428 1.428 0 0 1 22 0Z'/%3E%3C/svg%3E");
  background-position: center center;
  background-repeat: no-repeat;
  border-color: var(--gray-0);
  border-radius: var(--radius-round);
  box-shadow: var(--shadow-3);
  height: var(--thumb-size);
  width: var(--thumb-size);
}

/* Chrome, Safari and Edge, */
.image-compare-input::-webkit-slider-thumb {
  background-color: var(--gray-0);
  background-image: url("data:image/svg+xml,%3Csvg width='32' height='20' fill='%23FB8C00' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 20c-.366 0-.731-.14-1.01-.419L.419 11.01a1.428 1.428 0 0 1 0-2.02L8.99.419a1.428 1.428 0 1 1 2.02 2.02L3.448 10l7.563 7.563A1.428 1.428 0 0 1 10 20ZM22 0c.366 0 .732.14 1.01.419l8.571 8.571a1.428 1.428 0 0 1 0 2.02l-8.571 8.571a1.428 1.428 0 1 1-2.02-2.02L28.552 10l-7.563-7.563A1.428 1.428 0 0 1 22 0Z'/%3E%3C/svg%3E");
  background-position: center center;
  background-repeat: no-repeat;
  border-color: var(--gray-0);
  border-radius: var(--radius-round);
  box-shadow: var(--shadow-3);
  height: var(--thumb-size);
  width: var(--thumb-size);
}

@media (min-width: 1280px) {
  /* Firefox */
  .image-compare-input::-moz-range-thumb {
    background-image: url("data:image/svg+xml,%3Csvg width='48' height='30' fill='%23FB8C00' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15 30c-.549 0-1.097-.21-1.515-.628L.628 16.515a2.142 2.142 0 0 1 0-3.03L13.485.628a2.142 2.142 0 1 1 3.03 3.03L5.173 15l11.343 11.344A2.142 2.142 0 0 1 15 30ZM33 0c.549 0 1.097.21 1.515.628l12.857 12.857a2.142 2.142 0 0 1 0 3.03L34.515 29.372a2.142 2.142 0 1 1-3.03-3.03L42.827 15 31.484 3.656A2.142 2.142 0 0 1 33 0Z'/%3E%3C/svg%3E");
  }

  /* Chrome, Safari and Edge, */
  .image-compare-input::-webkit-slider-thumb {
    background-image: url("data:image/svg+xml,%3Csvg width='48' height='30' fill='%23FB8C00' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15 30c-.549 0-1.097-.21-1.515-.628L.628 16.515a2.142 2.142 0 0 1 0-3.03L13.485.628a2.142 2.142 0 1 1 3.03 3.03L5.173 15l11.343 11.344A2.142 2.142 0 0 1 15 30ZM33 0c.549 0 1.097.21 1.515.628l12.857 12.857a2.142 2.142 0 0 1 0 3.03L34.515 29.372a2.142 2.142 0 1 1-3.03-3.03L42.827 15 31.484 3.656A2.142 2.142 0 0 1 33 0Z'/%3E%3C/svg%3E");
  }
}

/* Firefox */
.image-compare-input:focus-visible::-moz-range-thumb {
  box-shadow: 0 0 0 2px hsl(200deg 100% 80%);
}

/* Chrome, Safari and Edge, */
.image-compare-input:focus-visible::-webkit-slider-thumb {
  box-shadow: 0 0 0 2px hsl(200deg 100% 80%);
}

@media (prefers-reduced-motion: no-preference) {
  /* Firefox */
  .image-compare-input:focus-visible::-moz-range-thumb {
    transition: outline-offset 145ms var(--ease-2);
  }

  /* Chrome, Safari and Edge, */
  .image-compare-input:focus-visible::-webkit-slider-thumb {
    transition: outline-offset 145ms var(--ease-2);
  }

  /* Firefox */
  .image-compare-input:not(:active):focus-visible::-moz-range-thumb {
    transition-duration: 0.25s;
  }

  /* Chrome, Safari and Edge, */
  .image-compare-input:not(:active):focus-visible::-webkit-slider-thumb {
    transition-duration: 0.25s;
  }
}

/* Firefox */
.image-compare-input:not(:active):focus-visible::-moz-range-thumb {
  outline: var(--link-active) solid 3px;
  outline-offset: 5px;
}

/* Chrome, Safari and Edge, */
.image-compare-input:not(:active):focus-visible::-webkit-slider-thumb {
  outline: var(--link-active) solid 3px;
  outline-offset: 5px;
}
</style>
