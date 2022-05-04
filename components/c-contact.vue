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
        schöneres Lächeln! Rufen Sie an unter +49 931 99 147 070 oder schicken
        Sie uns eine E-Mail. Wir melden uns innerhalb eines Werktags bei Ihnen.
      </p>
    </header>
    <form @submit="submit">
      <div class="salutation">
        <h4>Anrede</h4>
        <c-radio-group
          v-model="salutations"
          name="salutation"
          :options="options"
          :error="errors.salutations"
        />
      </div>
      <div class="data">
        <h4 class="fullwidth">Meine persönlichen Daten</h4>
        <c-input
          v-model="fname"
          label="Vorname"
          type="text"
          :error="errors.fname"
        />
        <c-input
          v-model="lname"
          label="Nachname"
          type="text"
          :error="errors.lname"
        />
        <c-input
          label="E-Mail"
          type="email"
          :error="errors.email"
          :modelValue="email"
          @change="handleChange"
        />
        <c-input
          v-model="phone"
          label="Telefonnummer (optional)"
          type="text"
          :error="errors.phone"
        />
        <c-textarea
          v-model="message"
          label="Meine Nachricht"
          rows="5"
          class="fullwidth"
          :error="errors.message"
        />
        <c-checkbox
          v-model="callback"
          label="Bitte rufen Sie mich für die Terminabsprache zurück."
          class="fullwidth"
          :error="errors.callback"
        />
        <c-checkbox
          v-model="privacy"
          label="Ich habe die Datenschutzerklärung gelesen und akzeptiert."
          class="fullwidth"
          :error="errors.privacy"
        />
      </div>
      <c-button type="submit">Nachricht abschicken</c-button>
    </form>
  </section>
</template>

<script setup>
import { useField, useForm } from 'vee-validate';
import { object, string, boolean } from 'yup';

const options = [
  { label: 'Frau', value: 'Frau' },
  { label: 'Herr', value: 'Herr' },
  { label: 'Divers', value: 'Divers' },
];

const requiredMessage = 'Dieses Feld ist ein Pflichtfeld.';
const emailMessage = 'Bitte geben Sie eine gültige E-Mail Adresse ein.';

const validationSchema = object({
  salutations: string().required(requiredMessage),
  fname: string().required(requiredMessage),
  lname: string().required(requiredMessage),
  email: string().email(emailMessage).required(requiredMessage),
  phone: string(),
  message: string().required(requiredMessage),
  callback: boolean(),
  privacy: boolean().oneOf([true], requiredMessage),
});

const { handleSubmit, errors } = useForm({
  validationSchema,
  initialValues: {
    salutations: '',
    callback: false,
    privacy: false,
  },
});

const { value: salutations } = useField('salutations');
const { value: fname } = useField('fname');
const { value: lname } = useField('lname');
const { value: email, handleChange } = useField('email');
const { value: phone } = useField('phone');
const { value: message } = useField('message');
const { value: callback } = useField('callback');
const { value: privacy } = useField('privacy');

const submit = handleSubmit((values, { resetForm }) => {
  console.log('SUBMIT: ', values);

  resetForm();
});
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
