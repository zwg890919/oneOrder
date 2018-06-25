<template>
	<div>
		<el-card class="box-card">
	    <el-breadcrumb separator-class="el-icon-arrow-right">
			  	<el-breadcrumb-item>佣金分配管理</el-breadcrumb-item>
			  	<el-breadcrumb-item>平台服务费</el-breadcrumb-item>
			</el-breadcrumb>
		</el-card>
		<el-card class="wrapper-option">
			<el-form ref="form" :model="form" label-width="100px" size="small">
				<el-col :span="21">
					<el-row>
						<el-col :span="6">
							<el-form-item label="产品名称">
						    	<el-input v-model="form.name"></el-input>
							</el-form-item>
						</el-col>
						<el-col :span="6">
							<el-form-item label="放款时间">
									 <el-date-picker
								      type="daterange"
								      range-separator="至"
								      start-placeholder="开始日期"
								      end-placeholder="结束日期">
								    </el-date-picker>
							</el-form-item>
						</el-col>
					</el-row>
				</el-col>
				<el-col  :span="2" :offset="1">
					<el-col>
						<el-button style="margin-bottom: 15px;" size="small">查询</el-button>
						<el-button size="small">重置</el-button>
					</el-col>
				</el-col>
			</el-form>
		</el-card>
		<el-card class="wrapper-option">
			<el-tabs v-model="activeName" type="card" @tab-click="handleClick">
		      	<el-tab-pane label="待结算" name="1">
		      		<el-table
					ref="multipleTable"
					:data="tableData3"
					tooltip-effect="dark"
					style="width: 100%"
					@selection-change="handleSelectionChange">
						<el-table-column
						  type="selection">
						</el-table-column>
						<el-table-column
						  label="日期">
						  <template slot-scope="scope">
				        	<a class="link-color" @click="goProduct(scope.$index, scope.row)">{{ scope.row.product }}</a>
				      	  </template>
						</el-table-column>
						<el-table-column
						  prop="name"
						  label="产品名称">
						</el-table-column>
						<el-table-column
						  prop="address"
						  label="预期分佣笔数"
						  show-overflow-tooltip>
						</el-table-column>
						<el-table-column
						  prop="city"
						  label="预期分拥金额(元)"
						  show-overflow-tooltip>
						</el-table-column>
						<el-table-column
						  prop="province"
						  label="产品方名称"
						  show-overflow-tooltip>
						</el-table-column>
						<el-table-column
						  prop="fianceType"
						  label="支付账户"
						  show-overflow-tooltip>
						</el-table-column>
						<el-table-column
						  prop="fianceType"
						  label="操作"
						  show-overflow-tooltip>
						</el-table-column>
					</el-table>
		      	</el-tab-pane>
		    	<el-tab-pane label="已结算" name="2">
		    		<el-table
					ref="multipleTable"
					:data="tableData3"
					tooltip-effect="dark"
					style="width: 100%"
					@selection-change="handleSelectionChange">
						<el-table-column
						  type="selection">
						</el-table-column>
						<el-table-column
						  label="日期">
						  <template slot-scope="scope">
				        	<a class="link-color" @click="goProduct(scope.$index, scope.row)">{{ scope.row.product }}</a>
				      	  </template>
						</el-table-column>
						<el-table-column
						  prop="name"
						  label="产品名称">
						</el-table-column>
						<el-table-column
						  prop="address"
						  label="预期分佣笔数"
						  show-overflow-tooltip>
						</el-table-column>
						<el-table-column
						  prop="city"
						  label="预期分拥金额(元)"
						  show-overflow-tooltip>
						</el-table-column>
						<el-table-column
						  prop="province"
						  label="产品方名称"
						  show-overflow-tooltip>
						</el-table-column>
						<el-table-column
						  prop="fianceType"
						  label="支付账户"
						  show-overflow-tooltip>
						</el-table-column>
						<el-table-column
						  prop="fianceType"
						  label="结算日期"
						  show-overflow-tooltip>
						</el-table-column>
						<el-table-column
						  prop="fianceType"
						  label="实付金额"
						  show-overflow-tooltip>
						</el-table-column>
						<el-table-column
						  prop="fianceType"
						  label="操作"
						  show-overflow-tooltip>
						</el-table-column>
					</el-table>
		    	</el-tab-pane>
		    </el-tabs>
		</el-card>
	</div>
</template>
<script>
  export default {
    data() {
      return {
      	activeName:'1',
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
      handleClick(tab, event) {
        console.log(tab, event);
      },
      addUser() {
      	this.$router.push({
      		path:'/user/addUser'
      	});
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      initPassword() {
      	if(this.multipleSelection.length > 0){
      		alert('ok');
      	}else{
      		this.$message({
	          message: '请至少选择一个用户',
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
	    	this.$router.push({ name: 'user.userInfo', params: { userId:1223 } })
	    }
    }
  }
</script>
