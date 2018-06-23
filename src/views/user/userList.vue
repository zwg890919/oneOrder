<template>
	<div>
		<el-card class="box-card">
	    <el-breadcrumb separator-class="el-icon-arrow-right">
			  	<el-breadcrumb-item>用户管理</el-breadcrumb-item>
			  	<el-breadcrumb-item>业务员列表</el-breadcrumb-item>
			</el-breadcrumb>
		</el-card>
		<el-card class="wrapper-option">
			<el-form ref="form" :model="form" label-width="100px" size="small">
				<el-col :span="21">
					<el-row>
						<el-col :span="6">
							<el-form-item label="手机号码">
						    	<el-input v-model="form.name"></el-input>
							</el-form-item>
						</el-col>
						<el-col :span="6">
							<el-form-item label="用户姓名">
						    	<el-input v-model="form.name"></el-input>
							</el-form-item>
						</el-col>
						<el-col :span="6">
							<el-form-item label="身份证号">
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
						<el-col :span="6">
							<el-form-item label="用户编号">
						    	<el-input v-model="form.name"></el-input>
							</el-form-item>
						</el-col>
						<el-col :span="6">
							<el-form-item label="是否有进件">
						    	<el-select v-model="form.region">
							    	<el-option label="全部" value="shanghai"></el-option>
							    	<el-option label="是" value="beijing"></el-option>
							    	<el-option label="否" value="beijing"></el-option>
							    </el-select>
							</el-form-item>
						</el-col>
						<el-col :span="6">
							<el-form-item label="借款申请编号">
						    	<el-input v-model="form.name"></el-input>
							</el-form-item>
						</el-col>
						<el-col :span="6">
							<el-form-item label="渠道">
						    	<el-select v-model="form.region">
							    	<el-option label="全部" value="shanghai"></el-option>
							    </el-select>
							</el-form-item>
						</el-col>
					</el-row>
					<el-row>
						<el-col :span="6">
							<el-form-item label="注册时间">
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
			<div class="wrapper-button clearfix">
				<el-button @click="addUser" type="primary" size="small">新建用户</el-button>
				<el-button @click="initPassword" size="small">初始化登录密码</el-button>
			</div>
			<el-table
			ref="multipleTable"
			:data="tableData3"
			tooltip-effect="dark"
			style="width: 100%"
			@selection-change="handleSelectionChange">
				<el-table-column
				  type="selection"
				  width="55">
				</el-table-column>
				<el-table-column
				  label="用户编号"
				  width="150"
				  >
				  <template slot-scope="scope">
		        <a class="link-color" @click="goProduct(scope.$index, scope.row)">{{ scope.row.product }}</a>
		      </template>
				</el-table-column>
				<el-table-column
				  prop="name"
				  label="用户姓名"
				  width="110">
				</el-table-column>
				<el-table-column
				  prop="address"
				  label="手机号码"
				 	width="110"
				  show-overflow-tooltip>
				</el-table-column>
				<el-table-column
				  prop="city"
				  label="身份证号"
				  width="170"
				  show-overflow-tooltip>
				</el-table-column>
				<el-table-column
				  prop="province"
				  label="注册时间"
				  width="170"
				  show-overflow-tooltip>
				</el-table-column>
				<el-table-column
				  prop="fianceType"
				  label="累计进件笔数"
				  width="120"
				  show-overflow-tooltip>
				</el-table-column>
				<el-table-column
				  prop="productType"
				  label="审核中笔数"
				  width="100"
				  show-overflow-tooltip>
				</el-table-column>
				<el-table-column
				  prop="lowAmt"
				  label="失败进件笔数"
				  width="120"
				  show-overflow-tooltip>
				</el-table-column>
				<el-table-column
				  prop="email"
				  label="电子邮箱"
				  width="170"
				  show-overflow-tooltip>
				</el-table-column>
				<el-table-column
				  prop="highAmt"
				  label="登录次数"
				  width="120"
				  show-overflow-tooltip>
				</el-table-column>
				<el-table-column
				  prop="qudao"
				  label="渠道"
				  width="120"
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
          product: 'DJ-18695872813',
          name: '范冰冰',
          address: '18695872813',
          city:'333************222',
          province:'2017-08-13 17:57:44',
          fianceType:'2',
          productType:'0',
          lowAmt:'2',
          highAmt:'2',
          lowAndHigh:'2',
          qudao:'无',
          email:'kaelling@163.com'
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
