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
            <address>
              <p class="p-note">Zahn &amp; Ästhetik</p>
              <p class="p-name">Dr Sabine Hugo</p>
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
          </li>
          <li>
            <h4>Öffnungszeiten</h4>
            <p class="opening-hours">
              <span> Montag - Freitag </span>
              <span> 07:00 - 19:00 Uhr </span>
            </p>
            <p class="opening-hours">
              <span> Samstag </span>
              <span> 09:00 - 13:00 Uhr </span>
            </p>
          </li>
          <li>
            <h4>Wichtige Informationen</h4>
            <ul class="link-list">
              <li><a href="#">Impressum</a></li>
              <li><a href="#">Datenschutz</a></li>
            </ul>
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

address {
  display: flex;
  flex-direction: column;
  font-style: normal;
}

address > * {
  margin-block: 0;
}

address > p:nth-child(4) {
  margin-block-start: var(--size-8);
}

address span {
  display: flex;
  gap: 0.5em;
}

.opening-hours {
  display: flex;
  flex-direction: column;
}

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

  address > *:nth-child(4) {
    margin-block-start: var(--size-12);
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
