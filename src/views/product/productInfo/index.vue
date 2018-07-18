<template>
	<div>
		<el-col :span="12">
			<el-card class="wrapper-option">
				<div slot="header">产品基本信息</div>
				<table class="infoTable" cellspacing="0" cellpadding="0" border="0">
					<tbody>
            <tr>
              <td>产品编号</td>
              <td>{{product.productCode}}</td>
            </tr>
            <tr>
              <td>产品名称</td>
              <td>{{product.productName}}</td>
            </tr>
            <tr>
              <td>产品别名</td>
              <td>{{product.aliasName}}</td>
            </tr>
            <tr>
              <td>产品方名称</td>
              <td>{{product.productSideName}}</td>
            </tr>
            <tr>
              <td>融资类型</td>
              <td>{{product.financeType | transFinanceType}}</td>
            </tr>
            <tr>
              <td>产品类型</td>
              <td>{{product.productType | transProductType}}</td>
            </tr>
            <tr>
              <td>最低申请金额（元）</td>
              <td>{{product.minApply | currency}}</td>
            </tr>
            <tr>
              <td>最高申请金额（元）</td>
              <td>{{product.maxApply | currency}}</td>
            </tr>
            <tr>
              <td>累加金额（元）</td>
              <td>{{product.sumApply | currency}}</td>
            </tr>
            <tr>
              <td>还款方式?</td>
              <td></td>
            </tr>
            <tr>
              <td>最高进件额度</td>
              <td>{{product.maxSold | currency}}</td>
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
              <td>累加期限（月）</td>
              <td>{{product.sumApplyTime}}</td>
            </tr>
            <tr>
              <td>是否托管</td>
              <td>{{product.ifTrustees | transIfTrustees}}</td>
            </tr>
            <tr>
              <td>代理方编码?</td>
              <td></td>
            </tr>
            <tr>
              <td>活动标签</td>
              <td>{{product.activitiLabelName}}</td>
            </tr>
            <tr>
              <td>产品特色标签</td>
              <td>{{product.productLabelName}}</td>
            </tr>
            <tr>
              <td>是否支持提前还款</td>
              <td>{{product.ifPayBackEarly | transIfPayBackEarly}}</td>
            </tr>
            <tr>
              <td>支持的城市</td>
              <td>{{product.supportCity | transCity(product.supportProvince)}}</td>
            </tr>
            <tr>
              <td>支持的省份</td>
              <td>{{product.supportProvince | transProvince}}</td>
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
				<div slot="header">费用说明</div>
        <div>{{product.description}}</div>
	    </el-card>
		</el-col>
	</div>
</template>
<script>
import axios from 'axios'
export default{
  data(){
    return {
      product:{},
      provinceList:[]
    }
  },
  created(){
    this.getProductDetail();
    this.getCity();
  },
  methods:{
     /* 获取产品详情	*/
    async getProductDetail(){
      const data = await $http.productDetail({
        id:this.$route.params.productId
      })
      if(data.success){
        this.product = data.datas;
      }
    },
    /* 获取省份城市信息	*/
		getCity(){
			axios.get('/static/cities.json').then((res) => {
				if(res.data.success){
          this.provinceList = res.data.datas;
          console.log(this.provinceList);
				}
			})
		},
  },
  

}
</script>