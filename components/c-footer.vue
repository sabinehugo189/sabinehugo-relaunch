<template>
  <div class="container">
    <div class="container-inner">
      <footer>
        <c-logo
          fill="hsl(0deg 0% 98%)"
          size="14rem"
          foo="baz"
        />
        <ul>
          <li>
            <h4>Kontakt</h4>
            <c-address-block />
          </li>
          <li>
            <h4>Öffnungszeiten</h4>
            <c-opening-hours />
          </li>
          <li>
            <h4>Wichtige Informationen</h4>
            <c-link-list />
          </li>
          <li>
            <h4>Social Media</h4>
            <c-social-bar />
            <img
              src="https://res.cloudinary.com/zahn-und-sthetik/image/upload/f_auto/v1652280970/invisalign/quality-seal.png"
              width="228"
              height="138"
              alt=""
              class="quality-seal"
            />
          </li>
        </ul>
      </footer>
    </div>
    <div class="shaded-edge"></div>
  </div>
</template>

<style scoped>
.container {
  margin-block-start: var(--size-48);
  position: relative;
}

.container-inner {
  margin-inline: auto;
  max-inline-size: var(--size-xxxl);
  padding-inline: var(--size-5);
}

.shaded-edge {
  box-shadow: inset 0 0.5em 0.5em -0.5em hsl(0deg 0% 0% / 0.1);
  inset: 0;
  pointer-events: none;
  position: absolute;
}

footer {
  background-color: var(--surface-5);
  border-end-end-radius: var(--size-5);
  border-end-start-radius: var(--size-5);
  color: var(--text-1);
  display: flex;
  flex-direction: column;
  font-size: var(--font-size-2);
  gap: var(--size-12);
  margin-inline: auto;
  max-inline-size: var(--size-xxxl);
  padding: var(--size-20) var(--size-5);
}

footer > ul {
  display: flex;
  flex-direction: column;
  gap: var(--size-16);
  list-style: none;
  padding-inline-start: 0;
}

footer > ul > li {
  display: flex;
  flex-direction: column;
  gap: var(--size-8);
  padding-inline-start: 0;
}

h4 {
  color: inherit;
}

@media (min-width: 1024px) {
  footer > ul {
    display: grid;
    gap: var(--size-8);
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (min-width: 1280px) {
  footer {
    font-size: var(--font-size-3);
    gap: var(--size-16);
    padding: var(--size-20);
  }

  .quality-seal {
    margin-block-start: var(--size-12);
  }
}

@media (min-width: 1536px) {
  footer {
    padding: var(--size-32) var(--size-40);
  }
}
</style>
