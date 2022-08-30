export default defineEventHandler((event) => {
  return {
    api: 'works'
  }
})

// 您现在可以使用await $fetch('/api/hello')
