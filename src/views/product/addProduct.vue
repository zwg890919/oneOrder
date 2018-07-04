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
			<el-form ref="form" :model="form" label-width="140px" size="small">
				<el-col :span="8" :offset="1">
				   	<h4>产品基础信息</h4>
					<el-form-item label="产品方名称">
				    	<el-select v-model="form.region" placeholder="请选择产品方">
					    	<el-option label="房抵贷" value="shanghai"></el-option>
					    	<el-option label="公积金贷" value="beijing"></el-option>
					    </el-select>
					</el-form-item>
					<el-form-item label="产品名称">
				    	<el-input v-model="form.name"></el-input>
					</el-form-item>
					<el-form-item label="产品别名">
				    	<el-input v-model="form.name"></el-input>
					</el-form-item>
					<el-form-item label="融资类型">
				    	<el-radio v-model="radio" label="1">抵押</el-radio>
  						<el-radio v-model="radio" label="2">信贷</el-radio>
					</el-form-item>
					<el-form-item label="产品类型">
				    	<el-radio v-model="radio" label="1">房抵贷</el-radio>
  						<el-radio v-model="radio" label="2">汽车融资租赁</el-radio>
					</el-form-item>
					<el-form-item label="最低申请金额(元)">
				    	<el-input v-model="form.name"></el-input>
					</el-form-item>
					<el-form-item label="最高申请金额(元)">
				    	<el-input v-model="form.name"></el-input>
					</el-form-item>
					<el-form-item label="累加额度(元)">
				    	<el-input v-model="form.name"></el-input>
					</el-form-item>
					<el-form-item label="最高进件额度(元)">
				    	<el-input v-model="form.name"></el-input>
					</el-form-item>
					<el-form-item label="最高抵押率(成)">
				    	<el-input v-model="form.name"></el-input>
					</el-form-item>
					<el-form-item label="最低期限(月)">
				    	<el-input v-model="form.name"></el-input>
					</el-form-item>
					<el-form-item label="最高期限(月)">
				    	<el-input v-model="form.name"></el-input>
					</el-form-item>
					<el-form-item label="累加期限(月)">
				    	<el-input v-model="form.name"></el-input>
					</el-form-item>
					<el-form-item label="是否托管">
				    	<el-radio v-model="radio" label="1">是</el-radio>
  						<el-radio v-model="radio" label="2">否</el-radio>
					</el-form-item>
					<el-form-item label="渠道码">
				    	<el-input v-model="form.name"></el-input>
					</el-form-item>
					<el-form-item label="产品特色标签">
				    	<el-checkbox-group v-model="checkList">
						    <el-checkbox label="有房可贷"></el-checkbox>
						    <el-checkbox label="门槛低"></el-checkbox>
						    <el-checkbox label="额度高"></el-checkbox>
						</el-checkbox-group>
					</el-form-item>
					<el-form-item label="活动标签">
				    	<el-checkbox-group v-model="checkList">
						    <el-checkbox label="热门产品"></el-checkbox>
						    <el-checkbox label="放款最快"></el-checkbox>
						    <el-checkbox label="资料简单"></el-checkbox>
						</el-checkbox-group>
					</el-form-item>
					<el-form-item label="是否支持提前还款">
				    	<el-radio v-model="radio" label="1">是</el-radio>
  						<el-radio v-model="radio" label="2">否</el-radio>
					</el-form-item>
					<h4>支持的地区</h4>
					<el-form-item label="省份">
				    	<el-select v-model="form.region" placeholder="请选择省份">
					    </el-select>
					</el-form-item>
					<el-form-item label="城市">
				    	<el-select v-model="form.region" placeholder="请选择城市">
					    </el-select>
					</el-form-item>
					<h4>产品利率</h4>
					<el-form-item label="费用类型">
				    	<el-select v-model="form.region" placeholder="请选择费用类型">
					    </el-select>
					</el-form-item>
					<el-form-item label="期限">
				    	<el-input v-model="form.name"></el-input>
					</el-form-item>
					<el-form-item label="还款方式">
				    	<el-select v-model="form.region" placeholder="请选择还款方式">
					    </el-select>
					</el-form-item>
					<el-form-item label="费率">
				    	<el-input v-model="form.name"></el-input>
					</el-form-item>
					<el-form-item label="">
				    	<el-button type="primary">+添加费率</el-button>
					</el-form-item>
					<el-form-item label="费用类型">
				    	<el-select v-model="form.region" placeholder="请选择费用类型">
					    </el-select>
					</el-form-item>
					<el-form-item label="费用区间">
						<el-row>
							<el-col :span="11">
								<el-input placeholder="最低费率" v-model="form.name"></el-input>
							</el-col>
							<el-col :span="2" class="split-line">
								~
							</el-col>
							<el-col :span="11">
								<el-input placeholder="最高费率" v-model="form.name"></el-input>
							</el-col>
						</el-row>
					</el-form-item>
					<el-form-item label="">
				    	<el-button type="primary">+添加其他费率</el-button>
					</el-form-item>
					<h4>费用说明</h4>
					<el-form-item label="费用说明">
				    	<el-input
							  type="textarea"
							  :rows="4"
							  placeholder="请输入内容">
							</el-input>
					</el-form-item>
				</el-col>
				<el-col :span="8" :offset="2">
					<h4>准入条件</h4>
					<el-form-item label="标题">
						<el-input v-model="form.name"></el-input>
					</el-form-item>
					<el-form-item label="条件">
						<el-input v-model="form.name"></el-input>
					</el-form-item>
					<el-form-item label="">
				    	<el-button type="primary">+添加准入条件</el-button>
					</el-form-item>
					<h4>产品简介</h4>
					</el-form-item>
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
					<el-form-item label="问题">
				    	<el-input v-model="form.name"></el-input>
					</el-form-item>
					<el-form-item label="答案">
				    	<el-input
							  type="textarea"
							  :rows="4"
							  placeholder="请输入内容">
							</el-input>
					</el-form-item>
					<el-form-item label="">
				    	<el-button type="primary">+添加其他问题</el-button>
					</el-form-item>
					<el-form-item label="">
						<el-button type="primary" style="width: 100%;">创建产品</el-button>
					</el-form-item>
				</el-col>
			</el-form>
		</el-card>
	</div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      radio: "1",
      checkList: []
    };
  },
  methods: {}
};
</script>