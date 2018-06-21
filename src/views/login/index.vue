<template>
  <div>
    <p>啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊</p>
    <button @click="addrouter">登录</button>
    <router-link to="/a" target="button">跳转页面</router-link>
  </div>
</template>

<style>
</style>

<script>
  import Cookie from 'js-cookie'
  export default {
    methods: {
      addrouter() {
        Cookie.set('admin-token',"123132")
      }
    }
  }
</script>

