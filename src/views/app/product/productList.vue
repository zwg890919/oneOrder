<template>
	<div>
		<el-card class="box-card">
			<el-breadcrumb separator-class="el-icon-arrow-right">
			  	<el-breadcrumb-item>产品管理</el-breadcrumb-item>
			  	<el-breadcrumb-item>产品列表</el-breadcrumb-item>
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
							<el-form-item label="产品方简称">
						    	<el-select v-model="form.region" placeholder="请选择产品类型">
							    	<el-option label="房抵贷" value="shanghai"></el-option>
							    	<el-option label="公积金贷" value="beijing"></el-option>
							    </el-select>
							</el-form-item>
						</el-col>
						<el-col :span="6">
							<el-form-item label="所在省份">
						    	<el-select v-model="form.region" placeholder="请选择省份">
							    	<el-option label="浙江省" value="shanghai"></el-option>
							    	<el-option label="安徽省" value="beijing"></el-option>
							    </el-select>
							</el-form-item>
						</el-col>
						<el-col :span="6">
							<el-form-item label="所在城市">
						    	<el-select v-model="form.region" placeholder="请选择城市">
							    	<el-option label="绍兴市" value="shanghai"></el-option>
							    	<el-option label="杭州市" value="beijing"></el-option>
							    </el-select>
							</el-form-item>
						</el-col>
					</el-row>
					<el-row>
						<el-col :span="6">
							<el-form-item label="产品状态">
						    	<el-select v-model="form.region">
							    	<el-option label="全部" value="shanghai"></el-option>
							    	<el-option label="是" value="beijing"></el-option>
							    	<el-option label="否" value="beijing"></el-option>
							    </el-select>
							</el-form-item>
						</el-col>
						<el-col :span="6">
							<el-form-item label="是否托管">
						    	<el-select v-model="form.region">
							    	<el-option label="全部" value="shanghai"></el-option>
							    	<el-option label="是" value="beijing"></el-option>
							    	<el-option label="否" value="beijing"></el-option>
							    </el-select>
							</el-form-item>
						</el-col>
						<el-col :span="6">
							<el-form-item label="是否电核">
						    	<el-select v-model="form.region">
							    	<el-option label="全部" value="shanghai"></el-option>
							    	<el-option label="是" value="beijing"></el-option>
							    	<el-option label="否" value="beijing"></el-option>
							    </el-select>
							</el-form-item>
						</el-col>
						<el-col :span="6">
							<el-form-item label="是否下户">
						    	<el-select v-model="form.region">
							    	<el-option label="全部" value="shanghai"></el-option>
							    	<el-option label="是" value="beijing"></el-option>
							    	<el-option label="否" value="beijing"></el-option>
							    </el-select>
							</el-form-item>
						</el-col>
					</el-row>
					<el-row>
						<el-col :span="6">
							<el-form-item label="是否面签">
						    	<el-select v-model="form.region">
							    	<el-option label="全部" value="shanghai"></el-option>
							    	<el-option label="是" value="beijing"></el-option>
							    	<el-option label="否" value="beijing"></el-option>
							    </el-select>
							</el-form-item>
						</el-col>
						<el-col :span="6">
							<el-form-item label="是否申请表单">
						    	<el-select v-model="form.region">
							    	<el-option label="全部" value="shanghai"></el-option>
							    	<el-option label="是" value="beijing"></el-option>
							    	<el-option label="否" value="beijing"></el-option>
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
			<div class="wrapper-button clearfix">
				<el-button type="primary" size="small">新建产品</el-button>
				<el-button size="small">发布</el-button>
				<el-button size="small">下架</el-button>
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
				  label="日期"
				  width="120">
				  <template slot-scope="scope">{{ scope.row.date }}</template>
				</el-table-column>
				<el-table-column
				  prop="name"
				  label="姓名"
				  width="120">
				</el-table-column>
				<el-table-column
				  prop="address"
				  label="地址"
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
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        multipleSelection: []
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      }
    }
  }
</script>