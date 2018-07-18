<template>
    <div>
        <div class="wrapper-nav">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item>
                    <i class="el-icon-menu menuicon"></i> 用户管理</el-breadcrumb-item>
                <el-breadcrumb-item>新建业务员</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <el-card class="wrapper-option">
            <div slot="header">新建业务员</div>
            <el-form ref="form" :model="form" label-width="140px" :rules="rules" size="small">
                <el-col :span="8" :offset="1">
                    <el-form-item label="用户姓名">
                        <el-input v-model="form.salesmanName"></el-input>
                    </el-form-item>
                    <el-form-item label="证件类型">
                        <el-select v-model="form.idType">
                        </el-select>
                    </el-form-item>
                    <el-form-item label="职业">
                        <el-input v-model="form.profession"></el-input>
                    </el-form-item>
                    <el-form-item label="通讯地址">
                        <el-input v-model="form.contactAddress"></el-input>
                    </el-form-item>
                    <el-form-item label="邀请人手机号码">
                        <el-input v-model="form.invitePersonPhoneNo"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8" :offset="1">
                    <el-form-item label="手机号码" prop="phoneNo">
                        <el-input v-model="form.phoneNo"></el-input>
                    </el-form-item>
                    <el-form-item label="证件号码">
                        <el-input v-model="form.idNo"></el-input>
                    </el-form-item>
                    <el-form-item label="电子邮箱">
                        <el-input v-model="form.email"></el-input>
                    </el-form-item>
                    <el-form-item label="邮政编码">
                        <el-input v-model="form.zipCode"></el-input>
                    </el-form-item>
                    <el-form-item label="渠道">
                        <el-select v-model="form.channelId"></el-select>
                    </el-form-item>
                </el-col>
                <el-col :span='17' :offset="1">
                    <el-form-item label="备注">
                        <el-input type="textarea" :rows="4" v-model="form.memo"></el-input>
                    </el-form-item>
                    <el-form-item label="">
                        <el-button type="primary" style="width: 100%;" @click="submitForm('form')">添加</el-button>
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
                    salesmanName: '',
                    phoneNo: '',
                    idType: '',
                    idNo: '',
                    profession: '',
                    email: '',
                    contactAddress: '',
                    zipCode: '',
                    invitePersonPhoneNo: '',
                    channelId: '',
                    memo: ''
                },
                radio: '1',
                checkList: [],
                rules: {
                    phoneNo: [
                        { required: true, message: '手机号码不能为空', trigger: 'blur' },
                        { len: 11, type: 'string', message: '请输入正确的手机号', trigger: 'blur' }
                    ],
                }
            }
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.addUser();
                    } else {
                        return false;
                    }
                });
            },
            async addUser() {
                const data = await $http.salesmanConfirmadd(this.form)
                if (data.success) {
                    this.$store.dispatch('delVisitedViews', this.$route)
                    this.$router.replace({ path: '/user/userList' })
                    this.$notify({
                        title: '成功',
                        message: '操作成功',
                        type: 'success',
                        duration: 1000,
                    });
                }
            }
        }
    }
</script>
