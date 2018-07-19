<template>
    <div>
        <div class="wrapper-nav">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item>
                    <i class="el-icon-menu menuicon"></i> 运营管理</el-breadcrumb-item>
                <el-breadcrumb-item>银行信息管理</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <el-card class="wrapper-option">
            <div class="wrapper-button clearfix">
                <el-button type="primary" size="small" @click="showAddBank('add')">新增</el-button>
                <el-button size="small" @click="showAddBank('modify')">修改</el-button>
                <el-button size="small" @click="changeStatus(1)">开启</el-button>
                <el-button size="small" @click="changeStatus(2)">关闭</el-button>
                <!-- <div class="fr">
                    <el-input v-model="form.bankName" placeholder="请输入银行名称" style="width:220px;float:left;margin-right:15px;"></el-input>
                    <el-button>搜索</el-button>
                </div> -->
            </div>
            <el-table ref="multipleTable" v-loading='loading' :data="bankList" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
                <el-table-column type="selection" width="55">
                </el-table-column>
                <el-table-column label="银行" prop="bankName">
                </el-table-column>
                <el-table-column label="状态">
                    <template slot-scope="scope">
                        {{scope.row.status | statusFil}}
                    </template>
                </el-table-column>
                <el-table-column label="创建时间" prop="createTimeStr">
                </el-table-column>
                <el-table-column label="更新人" prop="updateBy">
                </el-table-column>
            </el-table>
            <div class="text-center pd10">
                <el-pagination v-if="searchForm.total" @size-change="changePageSize" @current-change="changePage" :current-page="searchForm.pageNum" :page-sizes="[20, 50, 100, 500]" :page-size="20" layout="total, prev, pager, next,sizes" :total="searchForm.total">
                </el-pagination>
            </div>
        </el-card>
        <el-dialog :visible.sync="bankDialog" width="450px">
            <el-form :model="addForm" ref="dialogForm" :rules="formRules" label-width="80px" size="small" style="width:300px;margin-left:35px;">
                <el-form-item label="银行名称" prop="bankName">
                    <el-input v-model="addForm.bankName"></el-input>
                </el-form-item>
                <el-form-item label="状态" prop="status">
                    <el-select v-model="addForm.status" placeholder="请选择">
                        <el-option label="开启" value="1"></el-option>
                        <el-option label="关闭" value="2"></el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="bankDialog = false">取 消</el-button>
                <el-button type="primary" @click="bankSubmit">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                bankDialog: false,
                dialogType: 'add',
                loading: false,
                addForm: {
                    bankName: '',
                    status: ''
                },
                formRules: {
                    bankName: [
                        { required: true, message: '请输入银行名称', trigger: 'blur' }
                    ],
                    status: [
                        { required: true, message: '请选择银行状态', trigger: 'change' }
                    ]
                },
                searchForm: {
                },
                bankList: [],
                multipleSelection: []
            }
        },
        mounted() {
            this.getBankList()
        },
        methods: {
            async getBankList() {
                this.loading = true;
                const data = await $http.bankList(this.searchForm)
                if (data.success) {
                    this.bankList = data.datas.list || []
                    this.loading = false
                    this.searchForm = {
                        total: data.datas.total,
                        pageNum: data.datas.pageNum
                    }
                }
            },
            handleSelectionChange(val) {
                this.multipleSelection = val;
            },
            showAddBank(type) {
                if (type == 'modify') {
                    if (this.multipleSelection.length != 1) {
                        this.$message.error('请选择一个银行');
                        return false
                    } else {
                        this.addForm = Object.assign({}, this.multipleSelection[0])
                    }
                }
                this.dialogType = type
                this.bankDialog = true
            },
            async bankSubmit() {
                var validForm = false
                this.$refs['dialogForm'].validate((valid) => {
                    if (valid) {
                        validForm = true
                    } else {
                        return false;
                    }
                });
                if (validForm) {
                    if (this.dialogType == 'add') {
                        var data = await $http.addBank(this.addForm)
                    } else {
                        var data = await $http.modifyBank(this.addForm)
                    }
                    if (data.success) {
                        if (this.dialogType == 'add') {
                            this.$message({
                                message: '添加成功',
                                type: 'success'
                            });
                        } else {
                            this.$message({
                                message: '修改成功',
                                type: 'success'
                            });
                        }
                        this.changePage(1)
                    } else {
                        this.$message({
                            message: data.i18nMessage,
                            type: 'error'
                        });
                    }
                    this.cancleSubmit()
                }
            },
            cancleSubmit() {
                this.bankDialog = false
                this.$refs['dialogForm'].resetFields()
            },
            changePage(page) {
                this.searchForm.pageNum = page;
                this.getBankList();
            },
            changePageSize(pageSize) {
                this.searchForm.pageSize = pageSize;
                this.changePage(1);
            },
            async changeStatus(status) {
                if (this.multipleSelection.length <= 0) {
                    this.$message.error('请至少选择一个银行');
                    return false
                }
                var bankIdArr = new Array();
                this.multipleSelection.map(item => {
                    bankIdArr.push(item.bankId)
                })
                // console.log(bankIdArr.join(','))
                const data = await $http.changeBankStatus({
                    bankId: bankIdArr.join(','),
                    status
                })
                if (data.success) {
                    this.$message({
                        message: '状态更新成功',
                        type: 'success'
                    });
                    this.changePage(1)
                } else {
                    this.$message({
                        message: data.i18nMessage,
                        type: 'error'
                    });
                }
            },
        },
        filters: {
            statusFil(status) {
                return status == '1' ? '可用' : '不可用'
            }
        }
    }
</script>
