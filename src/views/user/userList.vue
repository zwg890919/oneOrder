<template>
	<div>
		<div class="wrapper-nav">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item><i class="el-icon-menu menuicon"></i> 用户管理</el-breadcrumb-item>
        <el-breadcrumb-item>业务员列表</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
		<el-card class="wrapper-option">
			<el-form ref="form" :model="form" label-width="100px" size="small">
				<el-col :span="21">
					<el-row>
						<el-col :span="6">
							<el-form-item label="手机号码" prop="phoneNo">
						    	<el-input v-model="form.phoneNo"></el-input>
							</el-form-item>
						</el-col>
						<el-col :span="6">
							<el-form-item label="用户姓名" prop="salesmanName">
						    	<el-input v-model="form.salesmanName"></el-input>
							</el-form-item>
						</el-col>
						<el-col :span="6">
							<el-form-item label="身份证号" prop="idNo">
						    	<el-input v-model="form.idNo"></el-input>
							</el-form-item>
						</el-col>
						<el-col :span="6">
							<el-form-item label="银行卡号" prop="cardNo">
						    	<el-input v-model="form.cardNo"></el-input>
							</el-form-item>
						</el-col>
					</el-row>
					<el-row>
						<el-col :span="6">
							<el-form-item label="用户编号" prop="salesmanCode">
						    	<el-input v-model="form.salesmanCode"></el-input>
							</el-form-item>
						</el-col>
						<el-col :span="6">
							<el-form-item label="借款申请编号" prop="loanApplicationCode">
						    	<el-input v-model="form.loanApplicationCode"></el-input>
							</el-form-item>
						</el-col>
						<el-col :span="6">
							<el-form-item label="渠道" prop="channelId">
						    	<el-select v-model="form.channelId">
							    	<el-option label="全部" value="shanghai"></el-option>
							    </el-select>
							</el-form-item>
						</el-col>
						<el-col :span="6">
							<el-form-item label="是否有进件" prop="hasLoanApplicationFlag">
						    	<el-select v-model="form.hasLoanApplicationFlag">
							    	<el-option label="全部" value="0"></el-option>
							    	<el-option label="是" value="1"></el-option>
							    	<el-option label="否" value="2"></el-option>
							    </el-select>
							</el-form-item>
						</el-col>
					</el-row>
					<el-row>
						<el-col :span="9">
							<el-form-item label="注册时间" prop="timeRange">
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
						<el-button style="margin-bottom: 15px;" size="small" @click="getSalesman">查询</el-button>
					</el-col>
					<el-col>
						<el-button size="small"  @click="resetForm">重置</el-button>
					</el-col>
				</el-col>
			</el-form>
		</el-card>
		<el-card class="wrapper-option">
			<div class="wrapper-button clearfix">
				<el-button @click="addUser" type="primary" size="small">新建用户</el-button>
				<el-button @click="initPassword" size="small">初始化登录密码</el-button>
			</div>
			<el-table ref="multipleTable" :data="list" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
				<el-table-column type="selection" width="55"></el-table-column>
				<el-table-column label="用户编号" width="150">
				  <template slot-scope="scope">
		        <a class="link-color" @click="goUser(scope.$index, scope.row)">{{ scope.row.salesmanCode }}</a>
		      </template>
				</el-table-column>
				<el-table-column prop="salesmanName" label="用户姓名" width="110"></el-table-column>
				<el-table-column prop="phoneNo" label="手机号码" width="110" show-overflow-tooltip></el-table-column>
				<el-table-column prop="idNo" label="身份证号" width="170" show-overflow-tooltip></el-table-column>
				<el-table-column prop="createTime" label="注册时间" width="170" show-overflow-tooltip></el-table-column>
				<el-table-column prop="sumLoanAppCount" label="累计进件笔数" width="120" show-overflow-tooltip></el-table-column>
				<el-table-column prop="sumInProgressCount" label="审核中笔数" width="100" show-overflow-tooltip></el-table-column>
				<el-table-column prop="sumFailLoanCount" label="累计拒件笔数" width="120" show-overflow-tooltip></el-table-column>
				<el-table-column prop="email" label="电子邮箱" width="170" show-overflow-tooltip></el-table-column>
				<el-table-column prop="loginCount" label="登录次数" width="120" show-overflow-tooltip></el-table-column>
				<el-table-column prop="channelName" label="渠道" width="120" show-overflow-tooltip></el-table-column>
				<el-table-column label="操作" show-overflow-tooltip>
				  <template slot-scope="scope">
		        <el-button type="text" size="small" @click="modifyUser(scope.$index, scope.row)">修改</el-button>
		      </template>
				</el-table-column>
			</el-table>
			<el-pagination layout="prev, pager, next" :total="total" @current-change="pageChange">
      </el-pagination>
		</el-card>
	</div>
</template>
<script>
  export default {
    data() {
      return {
				timeRange:[],
				multipleSelection: [],
				form:{
					phoneNo:'',
					salesmanName:'',
					idNo:'',
					cardNo:'',
					salesmanCode:'',
					loanApplicationCode:'',
					channelId:'',
					hasLoanApplicationFlag:'',
					registerBeginDate:'',
					registerEndDate:'',
					currentPage:1,
					pageSize:10,
				},
				list:[],
				total:0
      }
		},
		created(){
			this.getSalesman();
		},
    methods: {
			resetForm() {
        this.$refs['form'].resetFields();
        this.getSalesman();
			},
			pageChange(page){
        this.form.currentPage = page;
        this.getSalesman();
      },
			async getSalesman(){
				this.form.registerBeginDate = this.GMTToStr(this.timeRange[0]);
				this.form.registerEndDate = this.GMTToStr(this.timeRange[1]);
				const data = await $http.salesmanList(this.form) 
        if(data.success){
					this.list = data.datas.result;
					this.list[0].salesmanCode = '123';
					this.list[0].id = 1;
					this.total = data.datas.pagebar.total;
        }
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
				if (this.multipleSelection.length === 1) {
					this.subInitPassword();
        } else if(this.multipleSelection.length > 1) {
          this.$message({
            message: '只能操作一个用户',
            type: 'warning'
          });
        }else{
          this.$message({
            message: '请至少选择一个用户',
            type: 'warning'
          });
        }
			},
			async subInitPassword(){
				const data = await $http.salesmanInitPassowrd({
					salesmanId:this.multipleSelection[0].id
				})
				if(data.success){
					this.$notify.success({
            title: '提示',
            message: '操作成功'
          });
        }
			},
	    goUser(index, row){
	    	this.$router.push({ name: 'user.userInfo.index', params: { userId:row.id } })
			},
			modifyUser(index, row){
				row.id = 1;
	    	this.$router.push({ name: 'user.modifyUser', params: { userId:row.id } })
			},
    }
  }
</script>
