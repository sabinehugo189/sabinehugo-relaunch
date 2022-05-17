<template>
  <section class="container">
    <header>
      <h2>In 3 Schritten zum strahlenden Lächeln.</h2>
    </header>
    <ol class="steps">
      <li class="step">
        <h3>Beginn</h3>
        <ul>
          <li>Ausführliches Beratungsgespräch mit Dr. Sabine Hugo</li>
          <li>Anfertigung 3D-Scan, Röntgenbilder und Fotos</li>
          <li>Erstellung eines Behandlungsplans</li>
          <li>Anbringung der Attachments und Einsetzen der ersten Schiene</li>
        </ul>
      </li>
      <li class="step">
        <h3>Behandlung</h3>
        <ul>
          <li>Tragen der Zahnschienen bis zu 22 Stunden am Tag</li>
          <li>Einfache Reinigung mit lauwarmem Wasser</li>
          <li>Eigenständige Auswechslung der Aligner alle 1 bis 2 Wochen</li>
          <li>Kontrolltermine alle 4 bis 8 Wochen in der Praxis</li>
        </ul>
      </li>
      <li class="step">
        <h3>Ergebnis</h3>
        <ul>
          <li>Erreichen der gewünschten Resultate</li>
          <li>Gründliche Überprüfung des Ergebnisses</li>
          <li>ggf. Refinement (Feinkorrektur) für ein besseres Ergebnis</li>
          <li>Anfertigung einer Halteschiene oder eines Retainers</li>
        </ul>
      </li>
    </ol>
  </section>
</template>

<style scoped>
.container {
  background-color: var(--surface-2);
  border-radius: var(--radius-3);
  display: flex;
  flex-direction: column;
  gap: var(--size-10);
  padding: var(--size-20) var(--size-5);
}

@media (min-width: 1280px) {
  .container {
    gap: var(--size-16);
    padding: var(--size-32) var(--size-8);
  }
}

header {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: var(--size-8);
  padding-inline: var(--size-5);
  text-align: center;
}

h2 {
  font-size: var(--font-size-fluid-3);
}

.steps {
  counter-reset: list-number;
  display: grid;
  gap: var(--size-5);
  list-style: none;
  margin-inline: auto;
  max-inline-size: var(--size-xxl);
  padding-inline-start: 0;
}

@media (min-width: 1280px) {
  .steps {
    gap: var(--size-8);
    grid-template-columns: repeat(3, 1fr);
    margin-inline: auto;
    max-inline-size: var(--size-xxl);
  }
}

.step {
  background-color: var(--surface-1);
  border-radius: var(--radius-3);
  display: flex;
  flex-direction: column;
  font-size: var(--font-size-1);
  font-weight: var(--font-weight-8);
  gap: var(--size-12);
  padding: var(--size-8) var(--size-5);
}

@media (min-width: 1280px) {
  .step {
    font-size: var(--font-size-2);
  }
}

.step > h3 {
  align-items: center;
  display: flex;
  font-size: var(--font-size-4);
  gap: var(--size-4);
}

.step > h3::before {
  align-items: center;
  block-size: var(--size-16);
  border-radius: var(--radius-round);
  box-shadow: var(--shadow-3);
  content: counter(list-number);
  counter-increment: list-number;
  display: flex;
  inline-size: var(--size-16);
  justify-content: center;
}

.step > ul {
  display: grid;
  gap: var(--size-4);
  list-style: none;
  padding-inline-start: 0;
}

.step > ul > li {
  display: flex;
  gap: var(--size-3);
  padding-inline-start: 0;
}

.step > ul > li::before {
  align-items: center;
  align-self: flex-start;
  aspect-ratio: 1 / 1;
  border-radius: var(--radius-round);
  box-shadow: var(--shadow-3);
  color: var(--link);
  content: '\2714';
  display: flex;
  flex: 0 0 2em;
  font-size: var(--font-size-0);
  justify-content: center;
}
</style>
