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
              <p class="p-name">Dr Sabine Hugo</p>
              <p class="h-adr">
                <span class="p-street-address">Straße und Hausnummer</span>
                <span>
                  <span class="p-postal-code">PLZ</span>
                  <span class="p-locality">Stadt</span>
                </span>
              </p>
              <p>
                <span class="p-tel">Telefonnummer</span>
                <span class="p-tel">Faxnummer</span>
                <span class="u-email">E-Mail-Adresse</span>
              </p>
            </address>
          </li>
          <li>
            <h4>Öffnungszeiten</h4>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et
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
              src="/quality-seal.png"
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
  background-color: var(--brand);
  border-end-end-radius: var(--size-5);
  border-end-start-radius: var(--size-5);
  color: var(--gray-0);
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

address > * + *:not(:nth-child(2)) {
  margin-block-start: var(--size-8);
}

address span {
  display: flex;
  gap: 0.5em;
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

.link-list > li > a:link,
.link-list > li > a:visited {
  color: inherit;
  outline-color: var(--gray-0);
  text-decoration: none;
}

.link-list > li > a:hover {
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-thickness: 3px;
  text-underline-position: under;
}

@media (--lg-n-above) {
  footer > ul {
    display: grid;
    gap: var(--size-8);
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (--xl-n-above) {
  footer {
    font-size: var(--font-size-3);
    gap: var(--size-16);
    padding: var(--size-20);
  }

  address > * + *:not(:nth-child(2)) {
    margin-block-start: var(--size-12);
  }

  .quality-seal {
    margin-block-start: var(--size-12);
  }
}

@media (--xxl-n-above) {
  footer {
    padding: var(--size-32) var(--size-40);
  }
}
</style>
