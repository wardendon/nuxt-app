<template>
  <div>
    <NuxtLayout name="custom">
      <template #header> 子页面 </template>
      <template #main> The rest of the page </template>
    </NuxtLayout>
  </div>
</template>
<script setup>
definePageMeta({
  layout: false
})
</script>