<template>
	<div>
		<el-card class="box-card">
	    <el-breadcrumb separator-class="el-icon-arrow-right">
			  	<el-breadcrumb-item>运营管理</el-breadcrumb-item>
			  	<el-breadcrumb-item>银行信息管理</el-breadcrumb-item>
			</el-breadcrumb>
		</el-card>
		<el-card class="wrapper-option">
			<el-form ref="form" :model="form" label-width="120px" size="small">
				<el-col :span="21">
					<el-row>
						<el-col :span="6">
							<el-select v-model="form.name"></el-select>
						</el-col>
						<el-col :span="6">
							<el-form-item label="支付渠道">
								<el-select v-model="form.name"></el-select>
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
			<div class="wrapper-button clearfix">
				<el-button type="primary" size="small" @click="dialogVisible = true">新增</el-button>
				<el-button size="small">修改</el-button>
				<el-button size="small">开启</el-button>
				<el-button size="small">关闭</el-button>
			</div>
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
				  label="序号"
					width="55"
				  type="index">
				</el-table-column>
				<el-table-column
				  label="银行">
				</el-table-column>
				<el-table-column
				  label="状态">
				</el-table-column>
			</el-table>
		</el-card>
		<el-dialog
		  :visible.sync="dialogVisible"
			title="新增银行信息"
		  width="400px">
		  <el-form :model="form" label-width="80px" size="small">
		    <el-form-item label="开户银行">
		    	<el-select v-model="form.name"></el-select>
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
      addOperate() {
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
