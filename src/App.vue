<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    created() {
      this.$router.addRoutes([{
        path: '/a',
        name: 'a',
        component: () => import('@/views/index')
      }])
    }
  }
</script>

<style>
  #app {
    height:100%;
  }
</style>
