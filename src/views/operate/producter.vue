<template>
	<div>
		<div class="wrapper-nav">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item><i class="el-icon-menu menuicon"></i> 运营管理</el-breadcrumb-item>
        <el-breadcrumb-item>产品方管理</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
		<el-card class="wrapper-option">
			<el-form ref="search" :model="search" label-width="120px" size="small">
				<el-col :span="21">
					<el-row>
						<el-col :span="9">
							<el-form-item label="创建时间" prop="timeRange">
									 <el-date-picker
											v-model="timeRange"
								      type="daterange"
								      range-separator="至"
								      start-placeholder="开始日期"
								      end-placeholder="结束日期">
								    </el-date-picker>
							</el-form-item>
						</el-col>
						<el-col :span="6">
							<el-form-item label="产品方名称" prop="productOwnName">
								<el-input v-model="search.productOwnName"></el-input>
							</el-form-item>
						</el-col>
						<el-col :span="6">
							<el-form-item label="是否受托支付" prop="fryPay">
								<el-radio v-model="search.fryPay" :label="1">是</el-radio>
  							<el-radio v-model="search.fryPay" :label="2">否</el-radio>
							</el-form-item>
						</el-col>
					</el-row>
				</el-col>
				<el-col  :span="2" :offset="1">
					<el-col>
						<el-button style="margin-bottom: 15px;" size="small" @click="getList">查询</el-button>
						<el-button size="small" @click="resetForm">重置</el-button>
					</el-col>
				</el-col>
			</el-form>
		</el-card>
		<el-card class="wrapper-option">
			<div class="wrapper-button clearfix">
				<el-button type="primary" size="small" @click="addOperate()">新增</el-button>
				<el-button size="small" @click="updateOperate()">修改</el-button>
				<el-button size="small" @click="deleteOperate()">删除</el-button>
			</div>
			<el-table
			ref="multipleTable"
			:data="list"
			tooltip-effect="dark"
			style="width: 100%"
			@selection-change="handleSelectionChange">
				<el-table-column
				  type="selection"
				  width="55">
				</el-table-column>
				<el-table-column
				  label="序号"
				  type="index">
				</el-table-column>
				<el-table-column
				  label="产品方简称"
				 	prop="productOwnShortName">
				</el-table-column>
				<el-table-column
					label="产品方全称"
				  prop="productSideName">
				</el-table-column>
				<el-table-column
				  prop="fryPay"
				  label="是否受托支付"
				  show-overflow-tooltip>
					<template slot-scope="scope">
            {{ scope.row.fryPay == 1 ? '是' : '否' }}
          </template>
				</el-table-column>
				<el-table-column
				  prop="payAccount"
				  label="受托支付账户"
				  show-overflow-tooltip>
				</el-table-column>
				<el-table-column
				  prop="updateBy"
				  label="更新人"
				  show-overflow-tooltip>
				</el-table-column>
				<el-table-column
				  prop="updateTime"
				  label="更新时间"
				  show-overflow-tooltip>
				</el-table-column>
			</el-table>
			<el-pagination layout="prev, pager, next" :total="total" @current-change="pageChange">
      </el-pagination>
		</el-card>
			<!-- @close="closeDialog" -->
		<el-dialog
		  :visible.sync="dialogVisible"
			@close="closeDialog"
		  width="500px" :title="title">
		  <el-form ref="form" :rules="rules" :model="form" label-width="110px" size="small">
		    <el-form-item label="产品方全称" prop="productSideName">
		    	<el-input v-model="form.productSideName"></el-input>
		    </el-form-item>
		    <el-form-item label="产品方简称" prop="productOwnShortName">
		    	<el-input v-model="form.productOwnShortName"></el-input>
		    </el-form-item>
		    <el-form-item label="是否受托支付" prop="fryPay">
					<el-radio v-model="form.fryPay" :label="1">是</el-radio>
					<el-radio v-model="form.fryPay" :label="2">否</el-radio>
				</el-form-item>
		    <el-form-item label="受托支付账户" prop="payAccount">
		    	<el-input v-model="form.payAccount"></el-input>
		    </el-form-item>
		  </el-form>
		  <span slot="footer" class="dialog-footer">
		    <el-button @click="cancleSubmit">取 消</el-button>
		    <el-button type="primary"  @click="submitForm('form')">确 定</el-button>
		  </span>
		</el-dialog>
	</div>
</template>
<script>
  export default {
    data() {
      return {
				total:0,
				timeRange:[],
				search:{
					currentPage:1,
					pageSize:10,
					createTimeBegin:'',
					createTimeEnd:'',
					productOwnName:'',
					fryPay:''
				},
      	dialogVisible: false,
        form: {
					id:'',
					productSideName:'',
					productOwnShortName:'',
					fryPay:'',
					payAccount:''
        },
				multipleSelection: [],
				list:[],
				title:'',
				rules: {
					productSideName: [
						{ required: true, message: '请输入产品方名称', trigger: 'blur' },
					],
					productOwnShortName: [
						{ required: true, message: '请输入产品方简称', trigger: 'blur' }
					],
					fryPay: [
						{ required: true, message: '请选择是否受托支付', trigger: 'blur' }
					],
					payAccount: [
						{ required: true, message: '请输入受托支付账户', trigger: 'blur' }
					],
				}
      }
		},
		created(){
			this.getList();
		},
    methods: {
			closeDialog(){
				// this.form = {}
				this.$refs['form'].resetFields();
			},
			pageChange(page){
        this.search.currentPage = page;
        this.getList();
      },
			resetForm() {
				this.timeRange = [];
				this.$refs['search'].resetFields();
        this.getList();
      },
			/* 获取产品方列表 */
			async getList(){
				this.search.createTimeBegin = this.GMTToStr(this.timeRange[0]);
				this.search.createTimeEnd = this.GMTToStr(this.timeRange[1]);
        const data = await $http.basicProductSideList(this.search)
        if(data.success){
					this.list = data.datas.list;
					this.total = data.datas.total;
        }
			},
			/* 提交表单 */
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
					if (valid) {
						if(this.title=="新增产品方"){
							this.submitProductSideAdd();
						}else{
							this.submitProductSideUpdate();						
						}
					} else {
						return false;
					}
				});
			},
			/* 新增产品方 */
			async submitProductSideAdd(){
				const data = await $http.basicProductSideAdd(this.form)
        if(data.success){
					this.$notify({
						title: '成功',
						message: '操作成功',
						type: 'success',
					});
					this.dialogVisible = false;
					this.getList();
        }
			},
			/* 修改产品方 */
			async submitProductSideUpdate(){
				const data = await $http.basicProductSideUpdate(this.form)
        if(data.success){
					this.$notify({
						title: '成功',
						message: '操作成功',
						type: 'success',
					});
					this.dialogVisible = false;
					this.getList();
        }
			},
      handleSelectionChange(val) {
        this.multipleSelection = val;
			},
			/* 点击新增产品方按钮 */
      addOperate() {
				this.title = '新增产品方';
				this.dialogVisible = true;
			},
			/* 点击修改产品方按钮 */
			updateOperate(){
				if (this.multipleSelection.length === 1) {
					this.title = '修改产品方';
					this.dialogVisible = true;
					this.$nextTick(() => {
            this.form = Object.assign({}, this.multipleSelection[0])
          })
        } else if(this.multipleSelection.length > 1) {
          this.$message({
            message: '只能操作一个产品方',
            type: 'warning'
          });
        }else{
          this.$message({
            message: '请至少选择一个产品方',
            type: 'warning'
          });
        }
			},
			/* 点击删除产品方按钮 */
			async deleteOperate(){
				if(this.multipleSelection.length < 1) {
          this.$message({
            message: '请至少选择一个产品方',
            type: 'warning'
          });
        }else{
					let idArr = [];
					for(let x in this.multipleSelection){
						idArr.push(this.multipleSelection[x].id);
					}
          const data = await $http.basicProductSideDelete({
						id:idArr.join(',')
					})
					if(data.success){
						this.$notify({
							title: '成功',
							message: '操作成功',
							type: 'success',
						});
						this.getList();
					}
        }
			},
			cancleSubmit() {
					this.dialogVisible = false
					this.$refs['form'].resetFields()
			},
    }
  }
</script>
