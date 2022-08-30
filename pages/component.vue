<template>
  <div>
    <h1>组件目录</h1>
    <!-- components目录中对应的是组件目录在使用组件的过程中是无需引用的 -->
    <MyComp foo='我的自定义组件' />
    <!-- 嵌套组件Bar.vue 在使用的时候需要加上上级目录的文件名 -->
    <FooBar />
    <!-- 动态组件：使用vue中动态组件的写法要使用resolveComponent语法-->
    <component :is="isHeader ? TheHeader : 'div'" foo="动态组件" />
    <!-- 懒加载组件 ，只需在组件名称中添加Lazy前缀即可-->
    <LazyMyComp foo='懒加载组件' />

    <div>{{  time  }}</div>

  </div>
</template>
<script setup>
const isHeader = ref(1)
const TheHeader = resolveComponent('MyComp')
// 自动导入 composables目录下的非默认导出方法
let time = getTime()
// 如果导出函数的时候使用export default 则需要通过文件名的方式进行调用
utils()

</script>
<style lang="scss" scoped>
</style>