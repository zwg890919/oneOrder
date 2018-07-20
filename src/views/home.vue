<template>
  <div class="home-container">
    <el-row :gutter="20">
      <el-col :span="8">
        <el-card shadow="hover">
          <div class="user-info">
            <img src="../assets/images/img.jpg" class="user-avator" alt="">
            <div class="user-info-cont">
              <div class="user-info-name">于文文</div>
              <div>超级管理员</div>
            </div>
          </div>
          <div class="user-info-list">上次登录时间：
            <span>2018-01-01</span>
          </div>
          <div class="user-info-list">上次登录地点：
            <span>东莞</span>
          </div>
        </el-card>
      </el-col>
      <el-col :span="16">
        <el-row :gutter="20">
          <el-col :span="8">
            <el-card shadow="hover" :body-style="{padding: '0px'}">
              <div class="grid-content grid-con-1">
                <i class="el-icon-view grid-con-icon"></i>
                <div class="grid-cont-right">
                  <div class="grid-num">1234</div>
                  <div>用户访问量</div>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card shadow="hover" :body-style="{padding: '0px'}">
              <div class="grid-content grid-con-1">
                <i class="el-icon-view grid-con-icon"></i>
                <div class="grid-cont-right">
                  <div class="grid-num">1234</div>
                  <div>用户访问量</div>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card shadow="hover" :body-style="{padding: '0px'}">
              <div class="grid-content grid-con-1">
                <i class="el-icon-view grid-con-icon"></i>
                <div class="grid-cont-right">
                  <div class="grid-num">1234</div>
                  <div>用户访问量</div>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
     
    };
  },
  created() {
    this.getDic();
  },
  methods: {
   	// 数据字典
		async getDic(){
      // if(!localStorage.activiti){
        this.$store.dispatch("getDictionary");
        this.$store.dispatch("getProvinceList");
      // }
		},
  }
};
</script>
<style lang="scss" scoped>
  .user-info {
      display: -ms-flexbox;
      display: flex;
      -ms-flex-align: center;
      align-items: center;
      padding-bottom: 20px;
      border-bottom: 2px solid #ccc;
      margin-bottom: 20px;
  }
  .user-avator {
      width: 120px;
      height: 120px;
      border-radius: 50%;
  }
  .user-info-cont {
      padding-left: 50px;
      -ms-flex: 1;
      flex: 1;
      font-size: 14px;
      color: #999;
      div:first-child {
          font-size: 30px;
          line-height: 1.5;
          color: #222;
      }
  }
  .user-info-list {
      font-size: 14px;
      color: #999;
      line-height: 25px;
      span {
          margin-left: 70px;
      }
  }
  .grid-content {
      display: -ms-flexbox;
      display: flex;
      -ms-flex-align: center;
      align-items: center;
      height: 100px;
  }
  .grid-con-1 {
      .grid-con-icon {
          background: #2d8cf0;
      }
      .grid-num {
          color: #2d8cf0;
      }
  }

  .grid-con-icon {
      font-size: 50px;
      width: 100px;
      height: 100px;
      text-align: center;
      line-height: 100px;
      color: #fff;
  }
  .grid-cont-right {
      -ms-flex: 1;
      flex: 1;
      text-align: center;
      font-size: 12px;
      color: #999;
  }
  .grid-num {
      font-size: 30px;
      font-weight: 700;
  }
</style>

