<template>
  <p class="my">{{  foo  }}</p>
</template>
<script setup>
const props = defineProps({
  foo: {
    default: '坚挺',
    type: String
  }
})
</script>
<style scoped>
.my {
  color: pink;
  font-size: 36px;
}
</style>