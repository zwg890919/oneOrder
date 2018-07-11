<template>
	<div>
		<el-col :span="12">
			<el-card class="wrapper-option">
				<div slot="header">产品基本信息</div>
				<table class="infoTable" cellspacing="0" cellpadding="0" border="0">
					<tbody>
            <tr>
              <td>产品编号?</td>
              <td></td>
            </tr>
            <tr>
              <td>产品名称</td>
              <td>{{product.productName}}</td>
            </tr>
            <tr>
              <td>产品别名??</td>
              <td></td>
            </tr>
            <tr>
              <td>产品方名称</td>
              <td>{{product.productSideName}}</td>
            </tr>
            <tr>
              <td>融资类型</td>
              <td>{{product.financeType}}</td>
            </tr>
            <tr>
              <td>产品类型</td>
              <td>{{product.productType}}</td>
            </tr>
            <tr>
              <td>最低申请金额（元）</td>
              <td>{{product.minApply}}</td>
            </tr>
            <tr>
              <td>最高申请金额（元）</td>
              <td>{{product.maxApply}}</td>
            </tr>
            <tr>
              <td>累加金额（元）</td>
              <td>{{product.sumApply}}</td>
            </tr>
            <tr>
              <td>还款方式?</td>
              <td></td>
            </tr>
            <tr>
              <td>最高进件额度</td>
              <td>{{product.maxSold}}</td>
            </tr>
            <tr>
              <td>最高抵押率（成）</td>
              <td>{{product.mortgageRate}}</td>
            </tr>
            <tr>
              <td>最低借款期限（月）</td>
              <td>{{product.minApplyTime}}</td>
            </tr>
            <tr>
              <td>最高借款期限（月）</td>
              <td>{{product.maxApplyTime}}</td>
            </tr>
            <tr>
              <td>累加期限（月）?</td>
              <td></td>
            </tr>
            <tr>
              <td>是否托管</td>
              <td>{{product.ifTrustees}}</td>
            </tr>
            <tr>
              <td>代理方编码?</td>
              <td></td>
            </tr>
            <tr>
              <td>活动标签</td>
              <td>{{product.activitiLabel}}</td>
            </tr>
            <tr>
              <td>产品特色标签</td>
              <td>{{product.productLabel}}</td>
            </tr>
            <tr>
              <td>是否支持提前还款</td>
              <td>{{product.ifPayBackEarly}}</td>
            </tr>
            <tr>
              <td>支持的城市</td>
              <td>{{product.supportCity}}</td>
            </tr>
            <tr>
              <td>支持的省份</td>
              <td>{{product.supportProvince}}</td>
            </tr>
			    </tbody>
			  </table>
			</el-card>
			<el-card class="wrapper-option">
				<div slot="header">产品状态</div>
				<table class="infoTable" cellspacing="0" cellpadding="0" border="0">
					<tbody>
            <tr>
              <td>产品状态??</td>
              <td></td>
            </tr>
            <tr>
              <td>发布时间??</td>
              <td></td>
            </tr>
            <tr>
              <td>下架时间??</td>
              <td></td>
            </tr>
            <tr>
              <td>暂停时间??</td>
              <td></td>
            </tr>
            <tr>
              <td>最后操作人??</td>
              <td></td>
            </tr>
	        </tbody>
	      </table>
	    </el-card>
		</el-col>
		<el-col :span="12">
			<el-card class="wrapper-option">
				<div slot="header">准入条件</div>
				<table class="infoTable" cellspacing="0" cellpadding="0" border="0">
					<tbody>
            <tr>
              <td>标题</td>
              <td>条件</td>
            </tr>
            <tr v-for="(x, index) in product.productCond" :key="index">
              <td>{{x.title}}</td>
              <td>{{x.condition}}</td>
            </tr>
	        </tbody>
	      </table>
	    </el-card>
	    <el-card class="wrapper-option">
				<div slot="header">产品简介</div>
				<table class="infoTable" cellspacing="0" cellpadding="0" border="0">
					<tbody>
            <tr>
              <td>标题</td>
              <td>条件</td>
            </tr>
            <tr>
              <td>适用人群</td>
              <td>{{product.introducePeop}}</td>
            </tr>
            <tr>
              <td>借款用途</td>
              <td>{{product.introduceUse}}</td>
            </tr>
            <tr>
              <td>产品描述</td>
              <td>{{product.introduceDesc}}</td>
            </tr>
	        </tbody>
	      </table>
	    </el-card>
	    <el-card class="wrapper-option">
				<div slot="header">常见问答</div>
				<table class="infoTable" cellspacing="0" cellpadding="0" border="0">
					<tbody>
            <tr>
              <td>序号</td>
              <td>问题</td>
              <td>答案</td>
            </tr>
            <tr v-for="(x, index) in product.productQuestionDTOList" :key="index">
              <td>{{index}}</td>
              <td>{{x.answer}}</td>
              <td>{{x.questionl}}</td>
            </tr>
	        </tbody>
	      </table>
	    </el-card>
	    <el-card class="wrapper-option">
				<div slot="header">产品利率</div>
				<table class="infoTable" cellspacing="0" cellpadding="0" border="0">
					<tbody>
            <tr>
              <td>序号</td>
              <td>费用类型</td>
              <td>期限</td>
              <td>还款方式</td>
              <td>费率</td>
              <td>固定金额</td>
              <td>收费规则</td>
            </tr>
            <tr v-for="(x, index) in product.productRateDtoList" :key="index">
              <td>{{index}}</td>
              <td>{{x.productRateType}}</td>
              <td>{{x.productRateTerm}}</td>
              <td>{{x.repayMode}}</td>
              <td>{{x.description}}%</td>
              <td>{{x.fixedMoney}}</td>
              <td>{{x.chargeRole}}</td>
            </tr>
	        </tbody>
	      </table>
	    </el-card>
	    <el-card class="wrapper-option">
				<div slot="header">费用说明??</div>
				<div>几种费用有什么区别 1、利息：按剩余本金计算，随每月剩余本金变少减少 2、费用：按贷款全额计算，不随剩余本金变化而减少 3、一次性：按贷款全额计算，在放款时一次性收取 举例：贷款1万12个月 分期还款 1%月利息（共600元），1%月费用（共1200元），1%一次性（共100元），总利息共计1900元</div>
	    </el-card>
		</el-col>
	</div>
</template>
<script>
export default{
  data(){
    return {
      product:{}
    }
  },
  created(){
    this.getProductDetail();
  },
  methods:{
    async getProductDetail(){
      const data = await $http.productDetail({
        id:this.$route.params.userId
      })
      if(data.success){
        this.product = data.body;
      }
    },
  },
  

}
</script>