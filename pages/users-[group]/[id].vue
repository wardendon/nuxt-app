<template>
  <div>动态路由</div>
  <p>{{  route.params.group  }} - {{  route.params.id  }}</p>
</template>
<script setup>
const route = useRoute()
</script>