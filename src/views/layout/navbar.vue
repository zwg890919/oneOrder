<template>
  <el-menu class="navbar" mode="horizontal">
    <i class="iconfont icon-menu"></i>
    <div class="right-menu">
      <span>
        <i class="iconfont icon-editscreenfull" style="font-size:20px" @click="toggleScreen"></i>
      </span>
      <div class="right-menu-item">
        <el-dropdown class="right-menu-item" trigger="click">
          <div class="avatar-wrapper">
            <div class="head">
              <img src="../../assets/images/a0.jpg" width="40" height="40">
              <i class="el-icon-caret-bottom"></i>
            </div>
          </div>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>修改密码</el-dropdown-item>
            <el-dropdown-item divided>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
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
      & > .iconfont {
          font-size: 24px;
          margin: 0px 10px;
      }
      .right-menu {
          float: right;
          height: 100%;
          &:focus {
              outline: none;
          }
          & > span {
              display: inline-block;
              padding: 0 12px;
              vertical-align: middle;
              cursor: pointer;
          }
          .screenfull {
              height: 20px;
          }
          .right-menu-item {
              position: relative;
              display: inline-block;
              vertical-align: middle;
              height: 50px;
              // padding: 0 20px;
              padding-right: 20px;
              font-size: 12px;
              cursor: pointer;
              .avatar-wrapper {
                  .head {
                      position: relative;
                      display: inline-block;
                      vertical-align: middle;
                      img {
                          border-radius: 10px;
                      }
                      i {
                          position: absolute;
                          right: -20px;
                          top: 25px;
                          font-size: 12px;
                      }
                  }
              }
          }
      }
  }
</style>
