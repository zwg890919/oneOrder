<template>
	<div>
		<el-card class="wrapper-option">
			<el-form ref="form" :model="form" label-width="130px" size="small">
				<el-col :span="21">
					<el-row>
						<el-col :span="6">
							<el-form-item label="绑定状态" prop="bindStatus">
						    	<el-select v-model="form.bindStatus"></el-select>
							</el-form-item>
						</el-col>
						<el-col :span="6">
							<el-form-item label="预留手机号码" prop="phoneNo">
						    	<el-input v-model="form.phoneNo"></el-input>
							</el-form-item>
						</el-col>
						<el-col :span="6">
							<el-form-item label="开户银行" prop="bankCode">
						    	<el-input v-model="form.bankCode"></el-input>
							</el-form-item>
						</el-col>
						<el-col :span="6">
							<el-form-item label="银行卡号" prop="cardNo">
						    	<el-input v-model="form.cardNo"></el-input>
							</el-form-item>
						</el-col>
					</el-row>
					<el-row>
						<el-col :span="9">
							<el-form-item label="绑卡时间">
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
						<el-button style="margin-bottom: 15px;" size="small" @click="getCard">查询</el-button>
					</el-col>
					<el-col>
						<el-button size="small" @click="resetForm">重置</el-button>
					</el-col>
				</el-col>
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
					salesmanId:'',
          bindCardStartDate: '',
          bindCardEndDate: '',
          bindStatus: '',
          phoneNo: '',
          bankCode: '',
          cardNo: '',
        },
				multipleSelection: [],
				list:[],
				total:0
      }
    },
    methods: {
			resetForm() {
        this.$refs['form'].resetFields();
        this.getCard();
			},
			pageChange(page){
        this.form.currentPage = page;
        this.getCard();
      },
			async getCard(){
				const data = await $http.salesmanCards(this.form)
        if(data.success){
					this.list = data.datas.result;
					// this.total = data.datas.pagebar.total;
					this.total = 0;
        }
			},
    }
  }
</script>
