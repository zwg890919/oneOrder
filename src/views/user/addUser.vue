<template>
	<div>
		<el-card class="box-card">
			<el-breadcrumb separator-class="el-icon-arrow-right">
			  	<el-breadcrumb-item>用户管理</el-breadcrumb-item>
			  	<el-breadcrumb-item>新建业务员</el-breadcrumb-item>
			</el-breadcrumb>
		</el-card>
		<el-card class="wrapper-option">
			<div slot="header">新建业务员</div>
			<el-form ref="form" :model="form" label-width="140px" size="small">
				<el-col :span="8" :offset="1">
					<el-form-item label="用户姓名">
				    	<el-input v-model="form.name"></el-input>
					</el-form-item>
					<el-form-item label="手机号码">
				    	<el-input v-model="form.name"></el-input>
					</el-form-item>
					<el-form-item label="证件类型">
				    	<el-select v-model="form.region">
					    </el-select>
					</el-form-item>
					<el-form-item label="证件号码">
				    	<el-input v-model="form.name"></el-input>
					</el-form-item>
					<el-form-item label="职业">
				    	<el-input v-model="form.name"></el-input>
					</el-form-item>
					<el-form-item label="电子邮箱">
				    	<el-input v-model="form.name"></el-input>
					</el-form-item>
					<el-form-item label="通讯地址">
				    	<el-input v-model="form.name"></el-input>
					</el-form-item>
					<el-form-item label="邮政编码">
				    	<el-input v-model="form.name"></el-input>
					</el-form-item>
					<el-form-item label="邀请人手机号码">
				    	<el-input v-model="form.name"></el-input>
					</el-form-item>
					<el-form-item label="渠道">
				    	<el-input v-model="form.name"></el-input>
					</el-form-item>
					<el-form-item label="备注">
				    	<el-input type="textarea" :rows="4" v-model="form.name"></el-input>
					</el-form-item>
					<el-form-item label="">
						<el-button type="primary" style="width: 100%;">添加</el-button>
					</el-form-item>
				</el-col>
			</el-form>
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
        radio:'1',
        checkList:[],
      }
    },
    methods: {

    }
  }
</script>