<template>
  <el-scrollbar wrapClass="scrollbar-wrapper">
    <el-menu mode="vertical" :show-timeout="200" :collapse="isCollapse" background-color="#304156" text-color="#bfcbd9" active-text-color="#409EFF" :default-openeds="['1', '3']">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-message" style="font-size:16px"></i>导航一
        </template>
        <template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项1</el-menu-item>
          <el-menu-item index="1-3">选项1</el-menu-item>
        </template>
      </el-submenu>
      <router-link to="/page2">
        <el-menu-item index="page2">
          <i class="el-icon-menu"></i>
          <span>导航二</span>
        </el-menu-item>
      </router-link>
    </el-menu>
  </el-scrollbar>
</template>

<script>
  export default {
    data() {
      return {
        isCollapse: false
      }
    }
  }
</script>
