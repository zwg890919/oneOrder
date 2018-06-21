<template>
  <el-menu class="navbar" mode="horizontal">
    <i class="iconfont icon-menu"></i>
    <div class="right-menu">
      <i class="iconfont icon-editscreenfull" @click="toggleScreen"></i>
      <el-dropdown class="avatar-container right-menu-item" trigger="click">
        <div class="avatar-wrapper">
          <img class="user-avatar" :src="avatar+'?imageView2/1/w/80/h/80'">
        </div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>黄金糕</el-dropdown-item>
          <el-dropdown-item>狮子头</el-dropdown-item>
          <el-dropdown-item>螺蛳粉</el-dropdown-item>
          <el-dropdown-item disabled>双皮奶</el-dropdown-item>
          <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </el-menu>
</template>
<script>
  import screenfull from 'screenfull'
  export default {
    methods: {
      toggleScreen() {
        if (!screenfull.enabled) {
          this.$message({
            message: 'you browser can not work',
            type: 'warning'
          })
          return false
        }
        screenfull.toggle()
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .navbar {
      height: 50px;
      line-height: 50px;
      border-radius: 0px !important;
      &>.iconfont {
          font-size: 24px;
          margin: 0px 10px;
      }
      .right-menu {
          float: right;
          height: 100%;
          &:focus {
              outline: none;
          }
          .right-menu-item {
              display: inline-block;
              margin: 0 8px;
          }
          .screenfull {
            height:20px;
          }
          .international {
              vertical-align: top;
          }
          .theme-switch {
              vertical-align: 15px;
          }
          .avatar-container {
              height: 50px;
              margin-right: 30px;
              .avatar-wrapper {
                  cursor: pointer;
                  margin-top: 5px;
                  position: relative;
                  .user-avatar {
                      width: 40px;
                      height: 40px;
                      border-radius: 10px;
                  }
                  .el-icon-caret-bottom {
                      position: absolute;
                      right: -20px;
                      top: 25px;
                      font-size: 12px;
                  }
              }
          }
      }
  }
</style>
