<template>
	<div>
		<el-card class="wrapper-option">
			<el-form ref="form" :model="form" label-width="130px" size="small">
				<el-col :span="21">
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
						    	<el-select>
							    </el-select>
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
			<el-form class="table-info" ref="form" :model="form" label-width="120px" size="small">
			<el-row>
				<el-col :span="6">
					<el-form-item label="产品编号">
						CP201745121452
					</el-form-item>
				</el-col>
				<el-col :span="6">
					<el-form-item label="产品名称">
						颀财-房抵贷01
					</el-form-item>
				</el-col>
				<el-col :span="6">
					<el-form-item label="产品方名称">
						颀财
					</el-form-item>
				</el-col>
				<el-col :span="6">
					<el-form-item label="是否托管">
						否
					</el-form-item>
				</el-col>
				<el-col :span="6">
					<el-form-item label="融资类型">
						抵押
					</el-form-item>
				</el-col>
			</el-row>
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
				  label="融资申请编号"
				  width="150"
				  >
				  <template slot-scope="scope">
		        <a class="link-color" @click="goProduct(scope.$index, scope.row)">{{ scope.row.product }}</a>
		      </template>
				</el-table-column>
				<el-table-column
				  prop="name"
				  label="借款主体"
				  width="110">
				</el-table-column>
				<el-table-column
				  prop="address"
				  label="联系人手机号码"
				 	width="170"
				  show-overflow-tooltip>
				</el-table-column>
				<el-table-column
				  prop="city"
				  label="产品名称"
				  width="180"
				  show-overflow-tooltip>
				</el-table-column>
				<el-table-column
				  prop="province"
				  label="业务员名称"
				  width="180"
				  show-overflow-tooltip>
				</el-table-column>
				<el-table-column
				  prop="fianceType"
				  label="业务员手机号码"
				  width="130"
				  show-overflow-tooltip>
				</el-table-column>
				<el-table-column
				  prop="productType"
				  label="进件时间"
				  width="110"
				  show-overflow-tooltip>
				</el-table-column>
				<el-table-column
				  prop="lowAmt"
				  label="申请金额"
				  width="130"
				  show-overflow-tooltip>
				</el-table-column>
				<el-table-column
				  prop="email"
				  label="申请金额单位"
				  width="130"
				  show-overflow-tooltip>
				</el-table-column>
        <el-table-column
				  prop="email"
				  label="申请期限"
				  width="130"
				  show-overflow-tooltip>
				</el-table-column>
        <el-table-column
				  prop="email"
				  label="申请期限单位"
				  width="130"
				  show-overflow-tooltip>
				</el-table-column>
        <el-table-column
				  prop="email"
				  label="融资申请状态"
				  width="130"
				  show-overflow-tooltip>
				</el-table-column>
				<el-table-column
				  prop="email"
				  label="备注"
				  width="130"
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
          product: 'FD00000001',
          name: '范冰冰',
          address: 'DI-18695872813',
          city:'颀财房抵贷01',
          province:'2017-08-13 17:57:44',
          fianceType:'20.00',
          productType:'0',
          lowAmt:'等待下户',
          highAmt:'等待下户',
          lowAndHigh:'等待下户',
          qudao:'无',
          email:'未启动'
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
