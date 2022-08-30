<template>
  <nuxt-layout>
    <div>
      <router-link to="/">index</router-link> |
      <router-link to="/component">component</router-link> |
      <router-link to="/about">about</router-link> |
      <router-link to="/test">test</router-link> |
      <router-link to="/parent">parent</router-link> |
      <router-link to="/parent/child">child</router-link> |

      <div>
        <input v-model="group" type="text" placeholder="请输入所属group" />
        <input v-model="id" type="text" placeholder="请输入用户id" />
        <button @click="go(group, id)">去用户详情页</button>
        <button @click="navigate">query</button>
      </div>

      <hr>
      <!-- nuxt-page 等效于 router-view ,nuxt-link 等效于 router-link 但是用它们容易出bug,建议不用-->
      <!-- <nuxt-page /> -->
      <router-view></router-view>
    </div>
  </nuxt-layout>
</template>

<script setup lang="ts">
const router = useRouter()

const group = ref<string>('')
const id = ref<number>()
const go = (group: string, id: number) => {
  router.push(`/users-${group}/${id}`)
}

// nuxt 封装的 编程式导航方法  navigateTo
const navigate = () => {
  return navigateTo({
    path: '/test',
    query: {
      group: group.value,
      id: id.value
    }
  })
}
</script>

