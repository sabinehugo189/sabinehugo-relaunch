<template>
  <c-hero />
  <NuxtLayout name="default">
    <c-usp />
    <c-contact />
  </NuxtLayout>
</template>

<script setup>
definePageMeta({
  layout: false,
});
</script>
