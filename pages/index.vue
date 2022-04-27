<template>
  <c-hero />
  <NuxtLayout name="default">
    <c-usp />
    <c-contact-teaser teaser="Sie wünschen sich ein schönes Lachen?" />
    <c-card
      head="Ich habe in meiner Jugend keine Zahnspange getragen. Heute bereue ich das."
      body="Kein Problem! Holen Sie die erfolgreiche Korrektur Ihrer Zahnfehlstellung einfach jetzt nach. Mit Invisalign geht das besonders unauffällig."
      img-src="https://via.placeholder.com/486x222?text=Golden+Ratio"
    />
    <c-contact-teaser
      teaser="Sie interessieren sich für eine Behandlung mit Invisalign?"
    />
    <c-contact-teaser
      teaser="Sie haben eine Frage zum Ablauf der Invisalign Behandlung?"
    />
    <c-contact />
  </NuxtLayout>
</template>

<script setup>
definePageMeta({
  layout: false,
});
</script>
