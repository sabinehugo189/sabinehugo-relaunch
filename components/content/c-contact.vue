<template>
  <section class="container">
    <a
      id="contact"
      name="contact"
    />
    <header>
      <h3>{{ props.title }}</h3>
      <p>{{ props.description }}</p>
    </header>
    <form
      ref="form"
      data-netlify="true"
      name="contact"
      method="POST"
      netlify-honeypot="bot-field"
      @submit="submit"
    >
      <div hidden>
        <label>
          Don’t fill this out if you're human:
          <input name="bot-field" />
        </label>
      </div>
      <div class="salutation">
        <h4>Anrede</h4>
        <c-radio-group
          v-model="salutations"
          name="Anrede"
          :options="options"
          :error="errors.salutations"
        />
      </div>
      <div class="data">
        <h4 class="fullwidth">Meine persönlichen Daten</h4>
        <c-input
          v-model="fname"
          label="Vorname"
          name="Vorname"
          type="text"
          :error="errors.fname"
        />
        <c-input
          v-model="lname"
          label="Nachname"
          name="Nachname"
          type="text"
          :error="errors.lname"
        />
        <c-input
          label="E-Mail"
          name="E-Mail"
          type="email"
          :error="errors.email"
          :modelValue="email"
          @change="handleChange"
        />
        <c-input
          v-model="phone"
          label="Telefonnummer (optional)"
          name="Telefonnummer"
          type="text"
          :error="errors.phone"
        />
        <c-textarea
          v-model="message"
          label="Meine Nachricht"
          name="Nachricht"
          rows="5"
          class="fullwidth"
          :error="errors.message"
        />
        <c-checkbox
          v-model="callback"
          label="Bitte rufen Sie mich für die Terminabsprache zurück."
          name="Rückruf"
          class="fullwidth"
          :error="errors.callback"
        />
        <c-checkbox
          v-model="privacy"
          label="Ich habe die Datenschutzerklärung gelesen und akzeptiert."
          name="Datenschutzerklärung"
          class="fullwidth"
          :error="errors.privacy"
        />
      </div>
      <c-button type="submit">Nachricht abschicken</c-button>
      <div
        v-if="notification"
        class="notification"
        aria-live="assertive"
      >
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM371.8 211.8C382.7 200.9 382.7 183.1 371.8 172.2C360.9 161.3 343.1 161.3 332.2 172.2L224 280.4L179.8 236.2C168.9 225.3 151.1 225.3 140.2 236.2C129.3 247.1 129.3 264.9 140.2 275.8L204.2 339.8C215.1 350.7 232.9 350.7 243.8 339.8L371.8 211.8z"
            />
          </svg>
        </div>
        <div>
          <h4>Vielen Dank für Ihre Nachricht</h4>
          <p>Wir werden uns schnellstmöglich bei Ihnen zurück melden.</p>
        </div>
      </div>
    </form>
  </section>
</template>

<script setup>
import { useField, useForm } from 'vee-validate';
import { object, string, boolean } from 'yup';

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const form = ref(null);
const notification = ref(false);

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

const submit = handleSubmit((_, { resetForm }) => {
  const formData = new FormData(form.value);
  const formName = `form-name=${encodeURIComponent(form.value.name)}`;
  const urlSearchParams = new URLSearchParams(formData).toString();

  const body = formName.concat('&', urlSearchParams);

  fetch('/contactform', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body,
  })
    .then(() => {
      notification.value = true;

      return resetForm();
    })
    .catch((error) => console.error('Es ist ein Fehler aufgetreten: ', error));
});
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  font-weight: var(--font-weight-3);
  gap: var(--size-10);
  margin-inline: auto;
  max-inline-size: var(--size-lg);
  position: relative;
}

#contact {
  position: absolute;
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

.notification {
  background-color: var(--green-6);
  color: var(--gray-0);
  display: flex;
  gap: var(--size-8);
  padding: var(--size-5) var(--size-8);
}

.notification h4 {
  color: var(--gray-0);
}

.notification svg {
  fill: currentColor;
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
  font-size: var(--font-size-fluid-1);
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
