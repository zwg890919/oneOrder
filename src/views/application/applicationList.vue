<template>
	<div>
		<div class="wrapper-nav">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item><i class="el-icon-menu menuicon"></i> 融资申请管理</el-breadcrumb-item>
        <el-breadcrumb-item>融资申请列表</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
		<el-card class="wrapper-option">
			<el-form ref="form" :model="form" label-width="120px" size="small">
				<el-col :span="21">
					<el-row>
						<el-col :span="6">
							<el-form-item label="产品方简称">
						    	<el-select v-model="form.region" placeholder="请选择产品类型">
							    	<el-option label="房抵贷" value="shanghai"></el-option>
							    	<el-option label="公积金贷" value="beijing"></el-option>
							    </el-select>
							</el-form-item>
						</el-col>
						<el-col :span="6">
							<el-form-item label="产品名称">
						    	<el-input v-model="form.name"></el-input>
							</el-form-item>
						</el-col>
						<el-col :span="6">
							<el-form-item label="产品类型">
						    	<el-select v-model="form.region" placeholder="请选择产品类型">
							    	<el-option label="房抵贷" value="shanghai"></el-option>
							    	<el-option label="公积金贷" value="beijing"></el-option>
							    </el-select>
							</el-form-item>
						</el-col>
						<el-col :span="6">
							<el-form-item label="产品状态">
						    	<el-select v-model="form.region" placeholder="请选择产品类型">
							    	<el-option label="房抵贷" value="shanghai"></el-option>
							    	<el-option label="公积金贷" value="beijing"></el-option>
							    </el-select>
							</el-form-item>
						</el-col>
					</el-row>
					<el-row>
						<el-col :span="6">
							<el-form-item label="业务员姓名">
						    <el-input v-model="form.name"></el-input>
							</el-form-item>
						</el-col>
						<el-col :span="6">
							<el-form-item label="业务员手机号码">
						    	<el-input v-model="form.name"></el-input>
							</el-form-item>
						</el-col>
						<el-col :span="6">
							<el-form-item label="借款主体">
						    	<el-input v-model="form.name"></el-input>
							</el-form-item>
						</el-col>
						<el-col :span="6">
							<el-form-item label="联系人手机号码">
						    	<el-input v-model="form.name"></el-input>
							</el-form-item>
						</el-col>
					</el-row>
					<el-row>
						<el-col :span="9">
							<el-form-item label="进件时间">
									 <el-date-picker
								      type="daterange"
								      range-separator="至"
								      start-placeholder="开始日期"
								      end-placeholder="结束日期">
								    </el-date-picker>
							</el-form-item>
						</el-col>
						<el-col :span="9">
							<el-form-item label="放款时间">
									 <el-date-picker
								      type="daterange"
								      range-separator="至"
								      start-placeholder="开始日期"
								      end-placeholder="结束日期">
								    </el-date-picker>
							</el-form-item>
						</el-col>
						<el-col :span="6">
							<el-form-item label="融资申请状态">
						    	<el-select v-model="form.name"></el-select>
							</el-form-item>
						</el-col>
					</el-row>
				</el-col>
				<el-col  :span="2" :offset="1">
					<el-col>
						<el-button style="margin-bottom: 15px;" size="small">查询</el-button>
					</el-col>
					<el-col>
						<el-button size="small">重置</el-button>
					</el-col>
				</el-col>
			</el-form>
		</el-card>
		<el-card class="wrapper-option">
			<div class="wrapper-button clearfix">
        <el-button type="primary" size="small">批量导入还款计划</el-button>
      </div>
			<el-table
			ref="multipleTable"
			:data="tableData3"
			tooltip-effect="dark"
			style="width: 100%"
			@selection-change="handleSelectionChange">
				<el-table-column
				  label="序号"
				  type="index"
				  width="55">
				</el-table-column>
				<el-table-column
				  label="融资申请编号"
				  width="120"
				  >
				  <template slot-scope="scope">
		        <a class="link-color" @click="goProduct(scope.$index, scope.row)">{{ scope.row.product }}</a>
		      </template>
				</el-table-column>
				<el-table-column
				  prop="name"
				  label="借款主体"
				  width="80">
				</el-table-column>
				<el-table-column
				  prop="address"
				  label="联系人手机号码"
				 	width="120"
				  show-overflow-tooltip>
				</el-table-column>
				<el-table-column
				  prop="city"
				  label="产品名称"
				  width="100"
				  show-overflow-tooltip>
				</el-table-column>
				<el-table-column
				  prop="province"
				  label="业务员姓名"
				  width="110"
				  show-overflow-tooltip>
				</el-table-column>
				<el-table-column
				  prop="fianceType"
				  label="业务员手机号码"
				  width="140"
				  show-overflow-tooltip>
				</el-table-column>
				<el-table-column
				  prop="productType"
				  label="进件时间"
				  width="80"
				  show-overflow-tooltip>
				</el-table-column>
				<el-table-column
				  prop="lowAmt"
				  label="申请金额"
				  width="100"
				  show-overflow-tooltip>
				</el-table-column>
				<el-table-column
				  prop="highAmt"
				  label="申请金额单位"
				  width="120"
				  show-overflow-tooltip>
				</el-table-column>
				<el-table-column
				  prop="lowAndHigh"
				  label="申请期限"
				  width="110"
				  show-overflow-tooltip>
				</el-table-column>
				<el-table-column
				  prop="ljsq"
				  label="申请期限单位"
					width="120"
				  show-overflow-tooltip>
				</el-table-column>
				<el-table-column
				  prop="shz"
				  label="融资申请状态"
				  width="120"
				  show-overflow-tooltip>
				</el-table-column>
				<el-table-column
				  prop="productStatus"
				  label="备注"
				  width="80"
				  show-overflow-tooltip>
				</el-table-column>
				<el-table-column
				  label="操作"
				  show-overflow-tooltip>
				  <template slot-scope="scope">
		        <el-button type="text" size="small">修改</el-button>
		      </template>
				</el-table-column>
			</el-table>
		</el-card>
		<el-dialog
		  :visible.sync="dialogVisible"
		  width="400px">
		  <el-form :model="form">
		    <el-form-item label="发布时间">
		      <el-date-picker
		      	v-model="value1"
			      type="date"
			      placeholder="选择日期">
			    </el-date-picker>
		    </el-form-item>
		    <el-form-item label="下架时间">
		      <el-date-picker
			      type="date"
			      placeholder="选择日期">
			    </el-date-picker>
		    </el-form-item>
		  </el-form>
		  <span slot="footer" class="dialog-footer">
		    <el-button @click="dialogVisible = false">取 消</el-button>
		    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
		  </span>
		</el-dialog>
	</div>
</template>
<script>
  export default {
    data() {
      return {
      	value1: '',
      	value2: '',
      	dialogVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        tableData3: [],
        multipleSelection: []
      }
    },
    methods: {
      addProduct() {
      	this.$router.push({
      		path:'/product/addProduct'
      	});
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      releaseProduct() {
      	if(this.multipleSelection.length > 0){
      		this.dialogVisible = true;
      	}else{
      		this.$message({
	          message: '请至少选择一个产品',
	          type: 'warning'
	        });
      	}
	    },
	    removeProduct() {
	    	if(this.multipleSelection.length > 0){
      	}else{
      		this.$message({
	          message: '请至少选择一个产品',
	          type: 'warning'
	        });
      	}
	    },
	    goProduct(index, row){
	    	console.log(row);
	    	this.$router.push({ name: 'product.productInfo', params: { userId:1223 } })
	    }
    }
  }
</script>
