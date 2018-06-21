<template>
  <div class="layout">
    <sidebar class="sidebar-container"></sidebar>
    <div class="main-container">
      <navbar></navbar>
      <!--
      <tags-view></tags-view>
      <app-main></app-main> -->
      <router-view :key="key"></router-view>
    </div>
  </div>
</template>
<script>
  import sidebar from './slider'
  import navbar from './navbar'
  export default {
    components: {
      sidebar,
      navbar
    },
    computed: {
      key() {
        return this.$route.fullPath
      }
    }
  }
</script>

<style lang="scss">
  // @import "../assets/css/layout.scss";
</style>
