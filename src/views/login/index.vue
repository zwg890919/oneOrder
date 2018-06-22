<template>
  <div>
    <p>啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊</p>
    <button @click="addrouter">登录</button>
    <router-link to="/home" target="button">跳转页面</router-link>
  </div>
</template>

<style>
</style>

<script>
  export default {
    methods: {
      async addrouter() {
        this.$store.dispatch('userLogin', {
          userMobile:123131231
        }).then(() => {
        }).catch(() => {
        })
      }
    }
  }
</script>

