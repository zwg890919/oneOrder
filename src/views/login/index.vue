<template>
  <div class="login">
    <div class="login-header">
      <div class="login-container">
        <i class="login-header-logo"></i>
        <span>后台管理系统</span>
      </div>
    </div>
    <div class="login-wrap">
      <p class="login-box__error">{{errorMessage}}</p>
      <el-input class="login-wrap__input" v-model="formInline.userLoginCode" placeholder="请输入用户名"></el-input>
      <el-input class="login-wrap__input password" type="password" v-model="formInline.password" placeholder="请输入密码"></el-input>
      <el-row :gutter="20">
        <el-col :span="16">
          <el-input class="login-wrap__input validate" v-model="formInline.verifyCode" placeholder="请输入验证码"></el-input>
        </el-col>
        <el-col :span="4">
          <img src="api/zouyidan_auth/biz/reqVerifyCode" onclick="this.src='api/zouyidan_auth/biz/reqVerifyCode?' + Math.random()">
        </el-col>
      </el-row>
      <el-button style="width:100%;" type="primary" @click="addrouter">登陆</el-button>
      <p class="login-reg">
        <a>立即注册</a>
        <a>忘记密码？</a>
      </p>
    </div>
    <div class="login-bottom">
      <p>Copuright@ 2016 JYC99.COM All RighS Reserved 浙江聚有财金融服务有限公司</p>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        formInline: {
          userLoginCode: "",
          password: "",
          verifyCode: ""
        },
        errorMessage: ""
      }
    },
    created() {
    },
    methods: {
      async userLogin() {
        if(this.formInline.userLoginCode == '') {
          this.errorMessage = '请输入用户名'
          return;
        }
        if(this.formInline.password == ''){
          this.errorMessage = '请输入密码'
          return;
        }
        if(this.formInline.verifyCode == ''){
          this.errorMessage = '请输入图形验证码'
          return;
        }
        const data = await $http.login(this.formInline)
        if(data.success){
          this.$router.push({ name: 'home' })
        }else{
          this.errorMessage = data.i18nMessage;
        }
      },
      addrouter() {
        this.$store.dispatch('userLogin', this.formInline).then(() => {
          this.$router.push({ name: 'home' })
        }).catch(() => {

        })
      }
    }
  }

</script>
<style lang="scss">
  .login {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background: url("../../assets/images/login/bg.jpg") center no-repeat;
      background-size: cover;
      &-header {
          height: 70px;
          background: #fff;
          opacity: 0.9;
          .login-container {
              width: 970px;
              height: 100%;
              padding: 20px 0;
              margin: 0px auto;
              .login-header-logo {
                  float: left;
                  width: 105px;
                  height: 30px;
                  background: url(../../assets/images/login/logo.png) center
                      center / cover;
              }
              span {
                  float: left;
                  height: 18px;
                  padding: 0px 15px;
                  margin: 7px 0px 7px 15px;
                  line-height: 18px;
                  font-size: 16px;
                  color: #679fd7;
                  border-left: 1px solid #127fce;
              }
          }
      }
      &-bottom {
          position: absolute;
          bottom: 0px;
          width: 100%;
          height: 75px;
          background: #fff;
          opacity: 0.9;
          p {
              text-align: center;
              line-height: 75px;
          }
      }
      &-wrap {
          position: absolute;
          top: 20%;
          right: 10%;
          z-index: 101;
          width: 400px;
          height: 350px;
          padding: 0 50px;
          background: rgba(255, 255, 255, 0.9);
          &__input {
              position: relative;
              margin-bottom: 15px;
              &:before {
                  position: absolute;
                  left: 10px;
                  top: 50%;
                  z-index: 1;
                  content: "";
                  width: 16px;
                  height: 12px;
                  margin-top: -6px;
                  background: url("../../assets/images/login/loginicon.png")
                      no-repeat 0 -36px;
              }
              input {
                  padding-left: 35px;
              }
          }
          .password {
              &:before {
                  left: 12px;
                  width: 10px;
                  height: 14px;
                  margin-top: -7px;
                  background: url("../../assets/images/login/loginicon.png")
                      no-repeat -38px -35px;
              }
          }
          .validate {
              &:before {
                  left: 10px;
                  width: 16px;
                  height: 12px;
                  margin-top: -5px;
                  background: url("../../assets/images/login/loginicon.png")
                      no-repeat -84px -37px;
              }
          }
      }
      &-box__error {
          margin: 20px 0 30px 0;
          height: 18px;
          font: 12px/1.5 Microsoft YaHei, sans-serif;
          text-align: left;
          color: #ff1216;
      }
      &-input__icon {
          padding: 0px 6px;
          font-size: 20px;
      }
      &-reg {
          margin-top: 15px;
          text-align: right;
          a {
              color: #00b4ff;
              font-family: Microsoft YaHei, sans-serif;
          }
      }
  }
</style>
