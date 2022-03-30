<template>
  <div class="container">
    <a href="#">
      <svg
        aria-labelledby="phoneSabineHugo"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <title id="phoneSabineHugo">Telefon</title>
        <path
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
      <span>+49 251 60 900 103</span>
    </a>
    <a href="#">
      <svg
        aria-labelledby="emailSabineHugo"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <title id="emailSabineHugo">E-Mail</title>
        <path
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
      <span>foo@bar.baz</span>
    </a>
  </div>
</template>

<style scoped>
.container {
  color: var(--orange-6);
  display: flex;
  gap: var(--size-5);
}

a:link,
a:visited {
  align-items: center;
  color: inherit;
  display: flex;
  font-size: var(--font-size-2);
  font-weight: var(--font-weight-8);
  gap: var(--size-2);
  text-decoration: none;
}

a:hover {
  color: var(--orange-7);
}

a:active {
  color: var(--orange-9);
}

span {
  display: none;
}

svg {
  block-size: var(--size-5);
  inline-size: var(--size-5);
}

@media (--xl-n-above) {
  .container {
    gap: var(--size-10);
  }

  span {
    display: block;
  }

  svg {
    block-size: var(--size-6);
    inline-size: var(--size-6);
  }
}
</style>
