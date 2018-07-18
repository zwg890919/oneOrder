<template>
	<div>
		<div class="wrapper-nav">
			<el-breadcrumb separator-class="el-icon-arrow-right">
				<el-breadcrumb-item><i class="el-icon-menu menuicon"></i> 产品管理</el-breadcrumb-item>
				<el-breadcrumb-item>新建产品</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<el-card class="wrapper-option">
			<div slot="header">基础信息</div>
			<el-form ref="form" :model="form" label-width="140px" :rules="rules" size="small">
				<el-col :span="8" :offset="1">
				   	<h4>产品基础信息</h4>
					<el-form-item label="产品方简称" prop="productSideId">
				    	<el-select v-model="form.productSideId" placeholder="请选择产品方">
								<el-option v-for="(x, index) in productSideList" :key="index" :label="x.productOwnShortName" :value="x.id"></el-option>
					    </el-select>
					</el-form-item>
					<el-form-item label="产品名称">
				    	<el-input v-model="form.productName"></el-input>
					</el-form-item>
					<el-form-item label="产品别名">
				    	<el-input v-model="form.aliasName"></el-input>
					</el-form-item>
					<el-form-item label="融资类型" prop="financeType">
				    	<el-radio v-model="form.financeType" label="1">抵押</el-radio>
  						<el-radio v-model="form.financeType" label="2">信贷</el-radio>
					</el-form-item>
					<el-form-item label="产品类型" prop="productType">
				    	<el-radio v-model="form.productType" v-for="(x, index) in productType" :key="index" :label="x.label">{{x.value}}</el-radio>
					</el-form-item>
					<el-form-item label="最低申请金额(元)">
				    	<el-input v-model="form.minApply"></el-input>
					</el-form-item>
					<el-form-item label="最高申请金额(元)">
				    	<el-input v-model="form.maxApply"></el-input>
					</el-form-item>
					<el-form-item label="累加额度(元)">
				    	<el-input v-model="form.sumApply"></el-input>
					</el-form-item>
					<el-form-item label="最高进件额度(元)">
				    	<el-input v-model="form.maxSold"></el-input>
					</el-form-item>
					<el-form-item label="最高抵押率(成)">
				    	<el-input v-model="form.mortgageRate"></el-input>
					</el-form-item>
					<el-form-item label="最低期限(月)">
				    	<el-input v-model="form.minApplyTime"></el-input>
					</el-form-item>
					<el-form-item label="最高期限(月)">
				    	<el-input v-model="form.maxApplyTime"></el-input>
					</el-form-item>
					<el-form-item label="累加期限(月)">
				    	<el-input v-model="form.sumApplyTime"></el-input>
					</el-form-item>
					<el-form-item label="是否托管" prop="ifTrustees">
				    	<el-radio v-model="form.ifTrustees" label="1">是</el-radio>
  						<el-radio v-model="form.ifTrustees" label="2">否</el-radio>
					</el-form-item>
					<el-form-item label="渠道码???">
				    	<el-input v-model="form.name"></el-input>
					</el-form-item>
					<el-form-item label="产品特色标签">
				    	<el-checkbox-group v-model="form.productLabel">
						    <el-checkbox v-for="(x, index) in special" :key="index" :label="x.dictValue">{{x.dictLabel}}</el-checkbox>
						</el-checkbox-group>
					</el-form-item>
					<el-form-item label="活动标签">
				    	<el-checkbox-group v-model="form.activitiLabel">
						    <el-checkbox v-for="(x, index) in activiti" :key="index" :label="x.dictValue">{{x.dictLabel}}</el-checkbox>
						</el-checkbox-group>
					</el-form-item>
					<el-form-item label="是否支持提前还款" prop="ifPayBackEarly">
				    	<el-radio v-model="form.ifPayBackEarly" label="1">是</el-radio>
  						<el-radio v-model="form.ifPayBackEarly" label="2">否</el-radio>
					</el-form-item>
					<h4>支持的地区</h4>
					<el-form-item label="省份">
						<el-select v-model="form.supportProvince" placeholder="请选择省份" @change="provinceChange">
							<el-option v-for="(x, index) in provinceList" :key="index" :label="x.areaName" :value="x.areaId"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="城市">
						<el-select v-model="form.supportCity" placeholder="请选择城市">
							<el-option v-for="(x, index) in cityList" :key="index" :label="x.areaName" :value="x.areaId"></el-option>
						</el-select>
					</el-form-item>
					<h4>产品利率</h4>
					<div v-for="(x, index) in form.productRateDtoList" :key="index">
						<el-form-item label="费用类型">
				    	<el-select  v-model="x.productRateType" placeholder="请选择费用类型">
								<el-option v-for="(x, index) in costType" :key="index" :value="x.dictValue" :label="x.dictName"></el-option>
					    </el-select>
						</el-form-item>
						<div v-show="x.productRateType == 1">
							<el-form-item label="期限">
									<el-input v-model="form.productRateTerm"></el-input>
							</el-form-item>
							<el-form-item label="还款方式">
									<el-select v-model="form.repayMode" placeholder="请选择还款方式">
									</el-select>
							</el-form-item>
							<el-form-item label="费率">
								<el-row>
									<el-col :span="11">
										<el-input placeholder="最低费率" v-model="form.minRate"></el-input>
									</el-col>
									<el-col :span="2" class="split-line">
										~
									</el-col>
									<el-col :span="11">
										<el-input placeholder="最高费率" v-model="form.maxRate"></el-input>
									</el-col>
								</el-row>
							</el-form-item>
							<el-form-item label="费用金额">
								<el-input v-model="form.fixedMoney"></el-input>
							</el-form-item>
							<el-form-item label="收费规则">
								<el-input v-model="form.chargeRole"></el-input>
							</el-form-item>
						</div>
						<div v-show="x.productRateType == 2">
							<el-form-item label="费用类型">
								<el-select v-model="form.region" placeholder="请选择费用类型">
								</el-select>
							</el-form-item>
							<el-form-item label="费率">
								<el-input v-model="form.minRate"></el-input>
							</el-form-item>
							<el-form-item label="费用金额">
								<el-input v-model="form.fixedMoney"></el-input>
							</el-form-item>
							<el-form-item label="收费规则">
								<el-input v-model="form.chargeRole"></el-input>
							</el-form-item>
						</div>
					</div>
					<el-form-item label="">
				    	<el-button type="primary" @click="addProductRateDtoList">+添加费率</el-button>
					</el-form-item>
					<h4>费用说明</h4>
					<el-form-item label="费用说明">
				    	<el-input
								v-model="form.description"
							  type="textarea"
							  :rows="4"
							  placeholder="请输入内容">
							</el-input>
					</el-form-item>
				</el-col>
				<el-col :span="8" :offset="2">
					<h4>所需条件</h4>
					<div v-for="x in form.productCond" :key="x.id">
						<el-form-item label="标题">
							<el-input v-model="x.title"></el-input>
						</el-form-item>
						<el-form-item label="条件">
							<el-input v-model="x.condition"></el-input>
						</el-form-item>
					</div>
					<el-form-item label="">
				    	<el-button type="primary" @click="addProductCond">+添加准入条件</el-button>
					</el-form-item>
					<h4>申请资料</h4>
					<div v-for="(x, index) in form.productDoc" :key="index">
						<el-form-item label="资料内容">
							<el-input v-model="x.title"></el-input>
						</el-form-item>
					</div>
					<el-form-item label="">
				    	<el-button type="primary" @click="addApply">+添加申请资料</el-button>
					</el-form-item>
					<h4>产品简介</h4>
					<el-form-item label="适用人群">
				    	<el-input v-model="form.name"></el-input>
					</el-form-item>
					<el-form-item label="借款用途">
				    	<el-input v-model="form.name"></el-input>
					</el-form-item>
					<el-form-item label="产品描述">
				    	<el-input
							  type="textarea"
							  :rows="4"
							  placeholder="请输入内容">
							</el-input>
					</el-form-item>
					<h4>常见问题</h4>
					<div v-for="x in form.productQuestionDTOList" :key="x.id">
						<el-form-item label="问题">
				    	<el-input v-model="x.questionl"></el-input>
						</el-form-item>
						<el-form-item label="答案">
								<el-input
									v-model="x.answer"
									type="textarea"
									:rows="4"
									placeholder="请输入内容">
								</el-input>
						</el-form-item>
					</div>
					<el-form-item label="">
				    	<el-button type="primary" @click="addQues">+添加其他问题</el-button>
					</el-form-item>
					<el-form-item label="">
						<el-button type="primary" style="width: 100%;" @click="submitForm('form')">创建产品</el-button>
					</el-form-item>
				</el-col>
			</el-form>
		</el-card>
	</div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
			provinceList:[],
			cityList:[],
			productSideList:[],
      form: {
				description:'',
				sumApplyTime:'',
				productSideId:'',
				productSideName:'',
				productName:'',
				aliasName:'',
				financeType:'1',
				productType:'1',
				minApply:'',
				maxApply:'',
				sumApply:'',
				maxSold:'',
				mortgageRate:'',
				minApplyTime:'',
				maxApplyTime:'',
				ifTrustees:'1',
				productLabel:[],
				productLabelName:[],
				activitiLabel:[],
				activitiLabelName:[],
				ifPayBackEarly:'1',
				supportProvince:'',
				supportCity:'',
				productDoc:[{
					title:''
				}],
				productRateDtoList:[{
					productRateType:''
				}],
				productCond:[{
					title:'',
					condition:''
				}],
				productQuestionDTOList:[{
					questionl:'',
					answer:''
				}]
      },
			costType:[],
			special:[],
			activiti:[],
			productType:[{
				label:'1',
				value:'企业经营贷款'
			}],
			rules: {
				productSideId: [
					{ required: true, message: '请选择产品方', trigger: 'change' },
				],
				financeType: [
					{ required: true, message: '请选择融资类型', trigger: 'change' }
				],
				productType: [
					{ required: true, message: '请选择产品类型', trigger: 'change' }
				],
				ifTrustees: [
					{ required: true, message: '请选择是否托管', trigger: 'change' }
				],
				ifPayBackEarly:[
					{ required: true, message: '请选择是支持提前还款', trigger: 'change' }
				],
			}
    };
	},
	computed: {

	},
	created(){
		this.getProductSide();
		this.getCity();
		this.setDictionary();
	},
  methods: {
		/* 获取数字字典 */
		setDictionary(){
			if(sessionStorage.special && sessionStorage.activiti && sessionStorage.cost_type){
				this.special = JSON.parse(sessionStorage.special);
				this.activiti = JSON.parse(sessionStorage.activiti);
				this.costType = JSON.parse(sessionStorage.cost_type)
			}
		},
		/* 获取省份城市信息	*/
		getCity(){
			axios.get('/static/cities.json').then((res) => {
				if(res.data.success){
					this.provinceList = res.data.datas;
				}
			})
		},
		/* 获取城市信息	*/
		provinceChange(value){
			for(let x in this.provinceList){
				if(this.provinceList[x].areaId == value){
					this.cityList = this.provinceList[x].cities;
				}
			}
		},
		/* 获取产品方信息	*/
		async getProductSide(){
			const data = await $http.basicProductSideListAll();
			if(data.success){
				this.productSideList = data.datas.body;
			}
		},
		/* 添加申请资料 */
		addApply(){
			this.form.productDoc.push({
				title:''
			});
		},
		/* 添加常见问题 */
		addQues(){
			this.form.productQuestionDTOList.push({
				questionl:'',
				answer:''
			});
		},
		/* 添加所需条件 */
		addProductCond(){
			this.form.productCond.push({
				title:'',
				condition:''
			})
		},
		/* 添加产品利率 */
		addProductRateDtoList(){
			this.form.productRateDtoList.push({
				productRateType:''
			})
		},
		/* 提交表单 */
		submitForm(formName) {
			this.addProduct();
			// this.$refs[formName].validate((valid) => {
			// 	if (valid) {
			// 		this.addProduct();
			// 	} else {
			// 		return false;
			// 	}
			// });
		},
		/* 获取labelName */
		getLabelName(){
			for(let x in this.form.productLabel){
				for(let y in this.special){
					if(this.form.productLabel[x] == this.special[y].dictValue){
						this.form.productLabelName.push(this.special[y].dictLabel);
					}
				}
			}
			for(let x in this.form.activitiLabel){
				for(let y in this.special){
					if(this.form.activitiLabel[x] == this.special[y].dictValue){
						this.form.activitiLabelName.push(this.special[y].dictLabel);
					}
				}
			}
			for(let x in this.form.activitiLabel){
				for(let y in this.special){
					if(this.form.activitiLabel[x] == this.special[y].dictValue){
						this.form.activitiLabelName.push(this.special[y].dictLabel);
					}
				}
			}
			for(let x in this.form.productSideList){
				if(this.form.productSideList[x].id = this.form.productSideId){
					this.form.productSideName = this.form.productSideList[x].productSideName;
				}
			}
			this.form.productLabel =  this.form.productLabel.join(',');
			this.form.productLabelName =  this.form.productLabelName.join(',');
			this.form.activitiLabel = this.form.activitiLabel.join(',');
			this.form.activitiLabelName =  this.form.activitiLabelName.join(',');
		},
		/* 新增产品 */
		async addProduct(){
			this.getLabelName();
			const data = await $http.productAdd(this.form)
			this.form.productLabel = [];
			this.form.activitiLabel = [];
			if(data.success){
				this.$notify({
          title: '成功',
          message: '操作成功',
					type: 'success',
					duration: 1000,
					onClose: () => {
						// this.$router.push({ name: 'product.productList' })
					}
        });
			}
	  }
  }
};
</script>
