<template>
  <el-menu class="navbar" mode="horizontal">
    <div class="logo">
      <img src="../../assets/images/login/logo.png" height="60" alt="">
    </div>
    <div class="left-menu" @click="showAppList">
      <!-- <i class="iconfont icon-apply" style="font-size:16px"></i> -->
      <span>应用中心</span>
      <i class="el-icon-caret-bottom"></i>
    </div>
    <div class="right-menu">
      <ul>
        <li>
          <i class="iconfont icon-editscreenfull" style="font-size:20px;vertical-align:middle" @click="toggleScreen"></i>
        </li>
        <li>
          <el-dropdown style="cursor:pointer" trigger="click">
            <span class="el-dropdown-link">
              管理员
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>修改密码</el-dropdown-item>
              <el-dropdown-item divided @click="logout">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </li>
      </ul>
    </div>
    <transition name="fade-transform" mode="out-in">
      <div class="applist" v-show="appListShow">
        <div v-for="(item,index) in menuRoles" :key="index" @click="changeApp(index)">
          <p>{{item.name}}</p>
          <img src="https://tb.jyc99.com/static/images/app_monitor.png" alt="" width="100" height="100">
        </div>
      </div>
    </transition>
  </el-menu>
</template>
<script>
  import screenfull from 'screenfull'
  import { mapGetters } from 'vuex'
  import Cookies from 'js-cookie'

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
      },
      changeApp(index) {
        this.appListShow = false;
        this.$store.dispatch('CHANGE_CURRENTAPP', index);
      },
      logout(){
        Cookies.remove('admin-token','')
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .navbar {
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
      .left-menu {
          float: left;
          height: 100%;
          line-height: 59px;
          font-size: 16px;
          margin-left: 10px;
          padding: 0px 10px;
          cursor: pointer;
          color: #454547;
          i,
          span {
              display: inline-block;
              vertical-align: middle;
          }
      }
  }
</style>
