<template>
  <el-menu class="navbar" mode="horizontal">
    <i class="login-header-logo"></i>
    <div class="left-menu" @click="showAppList">
      <i class="iconfont icon-apply" style="font-size:16px"></i>
      <span>应用中心</span>
      <i class="el-icon-caret-bottom"></i>
    </div>
    <transition name="fade-transform" mode="out-in">
      <div class="applist" v-show="appListShow">
        <div v-for="(item,index) in menuRoles" :key="index">
          <p>{{item.name}}</p>
          <img src="https://tb.jyc99.com/static/images/app_monitor.png" alt="" width="100" height="100">
        </div>
      </div>
    </transition>
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
  import { mapGetters } from 'vuex'
  export default {
    data() {
      return {
        appListShow: false
      }
    },
    computed: {
      ...mapGetters([
        'menuRoles'
      ]),
    },
    created() {
      console.log(this.menuRoles)
    },
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
      },
      showAppList() {
        this.appListShow = !this.appListShow;
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .navbar {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 4000;
      height: 50px;
      line-height: 44px;
      border-radius: 0px !important;
      border-bottom: 0px;
      box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.1);
      .applist {
          position: fixed;
          top: 60px;
          left: 90px;
          // right: 180px;
          height: 150px;
          padding: 5px 0px 10px;
          background-color: #fff;
          border: 1px solid rgba(0, 0, 0, 0.1);
          border-radius: 2px;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
          & > div {
              float: left;
              width: 160px;
              text-align: center;
              cursor: pointer;
              border-left: 1px solid #edf1f2;
              &:first-child {
                  border-left: 0 none;
              }
              p {
                  margin: 5px;
                  font-size: 14px;
                  font-weight: 700;
                  line-height: 24px;
              }
          }
      }
      .login-header-logo {
          float: left;
          width: 105px;
          height: 30px;
          margin: 10px 47px;
          background: url(../../assets/images/login/logo.png) center center /
              cover;
      }
      & > .iconfont {
          font-size: 24px;
          margin: 0px 10px;
      }
      .left-menu {
          float: left;
          height: 100%;
          line-height: 50px;
          font-size: 16px;
          margin-left: 10px;
          padding: 0px 10px;
          cursor: pointer;
          color: #454547;
          &:hover {
              color: #2d8cf0;
              background: #f2f2f2;
          }
          i,
          span {
              display: inline-block;
              vertical-align: middle;
          }
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
