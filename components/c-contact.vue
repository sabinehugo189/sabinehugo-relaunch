<template>
  <section>
    <a
      id="contact"
      name="contact"
    />
    <header>
      <h3>
        Sie interessieren sich für eine Behandlung mit Invisalign Zahnschienen?
      </h3>
      <p>
        Machen Sie jetzt einen Termin zu einem Beratungsgespräch aus. Gemeinsam
        besprechen wir das gewünschte Ergebnis. Freuen Sie sich auf ein
        schöneres Lächeln! Rufen Sie an unter +49 251 60 900 103 oder schicken
        Sie uns eine E-Mail. Wir melden uns innerhalb eines Werktags bei Ihnen.
      </p>
    </header>
    <form @submit.prevent="handleSubmit">
      <div class="salutation">
        <h4>Anrede</h4>
        <c-radio-group
          v-model="details.salutation"
          name="salutation"
          :options="options"
        />
      </div>
      <div class="data">
        <h4 class="fullwidth">Meine persönlichen Daten</h4>
        <c-input
          v-model="details.firstName"
          label="Vorname"
          type="text"
          required
        />
        <c-input
          v-model="details.lastName"
          label="Nachname"
          type="text"
          required
        />
        <c-input
          v-model="details.email"
          label="E-Mail"
          type="email"
          required
        />
        <c-input
          v-model="details.phone"
          label="Telefonnummer (optional)"
          type="text"
        />
        <c-textarea
          v-model="details.message"
          label="Meine Nachricht"
          rows="5"
          required
          class="fullwidth"
        />
        <c-checkbox
          v-model="details.callback"
          label="Bitte rufen Sie mich für die Terminabsprache zurück."
          class="fullwidth"
        />
        <c-checkbox
          v-model="details.privacy"
          label="Ich habe die Datenschutzerklärung gelesen und akzeptiert."
          required
          class="fullwidth"
        />
      </div>
      <c-button type="submit">Nachricht abschicken</c-button>
      <pre>
        {{ details }}
      </pre>
    </form>
  </section>
</template>

<script setup>
const details = reactive({
  salutation: '',
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  message: '',
  callback: false,
  privacy: false,
});

const options = [
  { label: 'Frau', value: 'Frau' },
  { label: 'Herr', value: 'Herr' },
  { label: 'Divers', value: 'Divers' },
];

function handleSubmit(e) {
  console.log('SUBMIT: ', e);

  return false;
}
</script>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  gap: var(--size-10);
  margin-inline: auto;
  max-inline-size: var(--size-lg);
}

header {
  display: flex;
  flex-direction: column;
  gap: var(--size-8);
}

h3 {
  font-size: var(--font-size-fluid-3);
}

p {
  font-size: var(--font-size-fluid-0);
}

form {
  display: grid;
  gap: var(--size-16);
}

.salutation {
  display: flex;
  flex-wrap: wrap;
  gap: var(--size-5) var(--size-8);
}

.salutation > h4 {
  flex: 1 1 100%;
  max-inline-size: 100%;
}

.data {
  display: grid;
  gap: var(--size-5) var(--size-8);
}

h4 {
  margin-block-end: var(--size-3);
}

button {
  justify-self: center;
}

@media (min-width: 768px) {
  header {
    align-items: center;
    text-align: center;
  }

  .data {
    grid-template-columns: repeat(2, [col] 1fr);
  }

  .fullwidth {
    grid-column: col / span 2;
  }
}
</style>
