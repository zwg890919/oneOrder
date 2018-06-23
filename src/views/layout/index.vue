<template>
  <div class="layout">
    <navbar></navbar>
    <sidebar class="sidebar-container"></sidebar>
    <div class="main-container clearfix">
      <!-- <el-card>
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>
            <a href="/">活动管理</a>
          </el-breadcrumb-item>
          <el-breadcrumb-item>活动列表</el-breadcrumb-item>
          <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        </el-breadcrumb>
      </el-card> -->
      <transition name="fade-transform" mode="out-in">
        <keep-alive :include="cachedViews">
          <router-view :key="key"></router-view>
        </keep-alive>
      </transition>
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
