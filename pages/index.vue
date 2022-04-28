<template>
  <c-hero />
  <NuxtLayout name="default">
    <c-usp />
    <c-contact-teaser teaser="Sie wünschen sich ein schönes Lachen?" />
    <c-carousel />
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
