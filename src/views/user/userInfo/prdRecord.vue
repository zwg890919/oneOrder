<template>
	<div>
		<el-card class="wrapper-option">
			<el-form ref="form" :model="form" label-width="130px" size="small">
				<el-col :span="21">
					<el-row>
						<el-col :span="6">
							<el-form-item label="产品名称" prop="productName">
						    	<el-input v-model="form.productName"></el-input>
							</el-form-item>
						</el-col>
						<el-col :span="6">
							<el-form-item label="融资申请编号" prop="orderCode">
						    	<el-input v-model="form.orderCode"></el-input>
							</el-form-item>
						</el-col>
						<el-col :span="6">
							<el-form-item label="借款主体" prop="loaneeName">
						    	<el-input v-model="form.loaneeName"></el-input>
							</el-form-item>
						</el-col>
						<el-col :span="6">
							<el-form-item label="借款主体手机号码" prop="loaneePhoneNo">
						    	<el-input v-model="form.loaneePhoneNo"></el-input>
							</el-form-item>
						</el-col>
					</el-row>
					<el-row>
						<el-col :span="6">
							<el-form-item label="产品类型" prop="productType">
						    	<el-select v-model="form.productType">
							    </el-select>
							</el-form-item>
						</el-col>
						<el-col :span="6">
							<el-form-item label="融资申请状态" prop="loanStatus">
						    	<el-select v-model="form.loanStatus">
							    </el-select>
							</el-form-item>
						</el-col>
						<el-col :span="9">
							<el-form-item label="进件时间" prop="timeRange">
								<el-date-picker
										v-model="timeRange"
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
						<el-button style="margin-bottom: 15px;" size="small" @click="getList">查询</el-button>
					</el-col>
					<el-col>
						<el-button size="small" @click="resetForm">重置</el-button>
					</el-col>
				</el-col>
			</el-form>
		</el-card>
		<el-card class="wrapper-option">
			<el-form class="table-info" ref="form" :model="form" label-width="120px" size="small">
			<el-row>
				<el-col :span="6">
					<el-form-item label="用户编号">
						DJ-18695872813
					</el-form-item>
				</el-col>
				<el-col :span="6">
					<el-form-item label="用户姓名">
						范冰冰
					</el-form-item>
				</el-col>
				<el-col :span="6">
					<el-form-item label="手机号码">
						18695872813
					</el-form-item>
				</el-col>
				<el-col :span="6">
					<el-form-item label="邀请人">
						18695872813
					</el-form-item>
				</el-col>
				<el-col :span="6">
					<el-form-item label="渠道">
						颀财
					</el-form-item>
				</el-col>
			</el-row>
			</el-form>
		</el-card>
		<el-card class="wrapper-option">
			<el-table
			ref="multipleTable"
			:data="list"
			tooltip-effect="dark"
			style="width: 100%"
			>
				<el-table-column
				  label="序号"
				  type="index"
				  width="55">
				</el-table-column>
				<el-table-column
				  label="融资申请编号"

				  >
				  <template slot-scope="scope">
		        <a class="link-color" @click="goProduct(scope.$index, scope.row)">{{ scope.row.product }}</a>
		      </template>
				</el-table-column>
				<el-table-column
				  prop="name"
				  label="借款主体"
				 >
				</el-table-column>
				<el-table-column
				  prop="address"
				  label="联系人手机号码"
				  show-overflow-tooltip>
				</el-table-column>
				<el-table-column
				  prop="city"
				  label="产品名称"
				  show-overflow-tooltip>
				</el-table-column>
				<el-table-column
				  prop="province"
				  label="进件时间"
				  show-overflow-tooltip>
				</el-table-column>
				<el-table-column
				  prop="fianceType"
				  label="申请金额(万元)"
				  show-overflow-tooltip>
				</el-table-column>
				<el-table-column
				  prop="productType"
				  label="申请期限(月)"
				  show-overflow-tooltip>
				</el-table-column>
				<el-table-column
				  prop="lowAmt"
				  label="融资申请状态"
				  show-overflow-tooltip>
				</el-table-column>
			</el-table>
			<el-pagination
        layout="prev, pager, next"
        :total="total"
        @current-change="pageChange">
      </el-pagination>
		</el-card>
	</div>
</template>
<script>
  export default {
    data() {
      return {
				timeRange:[],
        form: {
					timeRange:'',
					salesmanId:'',
					productName:'1',
					orderCode:'2',
					loaneeName:'11',
          productType: '',
          loanStatus: '',
          loaneePhoneNo: '',
          orderBeginDate: '',
          orderEndDate: '',
					currentPage:1,
					pageSize:10,
        },
				list:[],
				total:0
      }
		},
		created(){
			this.form.salesmanId = this.$route.params.userId;
			this.getList();
		},
    methods: {
			resetForm() {
        this.$refs['form'].resetFields();
        this.getList();
			},
			pageChange(page){
        this.form.currentPage = page;
        this.getList();
      },
			async getList(){
        const data = await $http.salesmanGetloanapplications(this.form)
        if(data.success){
					this.list = data.datas.result;
					// this.total = data.datas.pagebar.total;
					this.total = 0;
        }
      },
	    goProduct(index, row){
	    	console.log(row);
	    	this.$router.push({ name: 'user.userInfo', params: { userId:1223 } })
	    }
    }
  }
</script>
