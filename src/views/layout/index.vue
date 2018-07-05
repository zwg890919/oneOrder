<template>
  <div class="layout">
    <navbar></navbar>
    <sidebar class="sidebar-container"></sidebar>
    <div class="main-container clearfix">
      <tag-nav></tag-nav>
      <div class="page-container">
        <transition name="fade-transform" mode="out-in">
          <!-- <keep-alive> -->
            <!-- :include="cachedViews" -->
            <router-view :key="key"></router-view>
           <!-- </keep-alive> -->
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
  import sidebar from './slider'
  import navbar from './navbar'
  import tagNav from './tagNav.vue'
  export default {
    components: {
      sidebar,
      navbar,
      tagNav
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
