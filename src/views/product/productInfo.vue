<template>
  <div>
    <div class="wrapper-nav">
			<el-breadcrumb separator-class="el-icon-arrow-right">
				<el-breadcrumb-item><i class="el-icon-menu menuicon"></i> 产品管理</el-breadcrumb-item>
				<el-breadcrumb-item>产品详情</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
    <el-menu class="person-menu" @select="handleSelect" :default-active="activeName" mode="horizontal">
      <el-menu-item index="product.productInfo.index">基本信息</el-menu-item>
      <el-menu-item index="product.productInfo.apply">借款申请</el-menu-item>
    </el-menu>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeName: this.$route.name,
      };
    },
    created() {
    },
    methods: {
      handleSelect(key, keyPath) {
        this.$router.push({ name: key })
      }
    }
  }
</script>
<style lang="scss">
  .person-menu {
      margin: 10px;
      li {
          height: 50px !important;
          line-height: 50px !important;
      }
  }
</style>
