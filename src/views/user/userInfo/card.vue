<template>
	<div>
		<el-card class="wrapper-option">
			<el-form ref="form" :model="form" label-width="130px" size="small">
				<el-col :span="21">
					<el-row>
						<el-col :span="6">
							<el-form-item label="绑定状态">
						    	<el-select v-model="form.name"></el-select>
							</el-form-item>
						</el-col>
						<el-col :span="6">
							<el-form-item label="预留手机号码">
						    	<el-input v-model="form.name"></el-input>
							</el-form-item>
						</el-col>
						<el-col :span="6">
							<el-form-item label="开户银行">
						    	<el-input v-model="form.name"></el-input>
							</el-form-item>
						</el-col>
						<el-col :span="6">
							<el-form-item label="银行卡号">
						    	<el-input v-model="form.name"></el-input>
							</el-form-item>
						</el-col>
					</el-row>
					<el-row>
						<el-col :span="9">
							<el-form-item label="绑卡时间">
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
					</el-col>
					<el-col>
						<el-button size="small">重置</el-button>
					</el-col>
				</el-col>
			</el-form>
		</el-card>
		<el-card class="wrapper-option">
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
				  label="绑卡时间"
				  prop="product"
				 >
				</el-table-column>
				<el-table-column
				  prop="name"
				  label="银行卡号"
				  >
				</el-table-column>
				<el-table-column
				  prop="address"
				  label="开户银行"
				  show-overflow-tooltip>
				</el-table-column>
				<el-table-column
				  prop="city"
				  label="预留手机号码"
				  show-overflow-tooltip>
				</el-table-column>
				<el-table-column
				  prop="fianceType"
				  label="绑卡结果"
				  show-overflow-tooltip>
				</el-table-column>
			</el-table>
		</el-card>
	</div>
</template>
<script>
  export default {
    data() {
      return {
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
        tableData3: [{
          product: '2017-02-06 18:43:21',
          name: '6217680965478906',
          address: '建设银行',
          city:'颀财房抵贷01',
          province:'2017-08-13 17:57:44',
          fianceType:'绑定',
          productType:'2017-02-06 18:43:21',
        }],
        multipleSelection: []
      }
    },
    methods: {
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
