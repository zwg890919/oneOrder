<template>
    <div>
        <div class="wrapper-nav">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item>
                    <i class="el-icon-menu menuicon"></i> 运营管理</el-breadcrumb-item>
                <el-breadcrumb-item>标签管理</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <el-card class="wrapper-option">
            <div class="wrapper-button clearfix">
                <el-button type="primary" size="small" @click="showDialog('add')">新增</el-button>
                <el-button size="small" @click="showDialog('modify')">修改</el-button>
                <el-button size="small" @click="removeTag">删除</el-button>
            </div>
            <el-table ref="multipleTable" :data="list" v-loading='loading' tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
                <el-table-column type="selection">
                </el-table-column>
                <el-table-column label="序号" width="55" type="index">
                </el-table-column>
                <el-table-column label="创建时间" prop="createTimeStr">
                </el-table-column>
                <el-table-column label="标签名称" prop="tagName">
                </el-table-column>
                <el-table-column label="标签类型">
                    <template slot-scope="scope">
                        {{scope.row.tagTypeCode | tagFil}}
                    </template>
                </el-table-column>
                <el-table-column label="更新人" prop="updateBy">
                </el-table-column>
            </el-table>
            <div class="text-center pd10">
                <el-pagination v-if="searchForm.total" @size-change="changePageSize" @current-change="changePage" :current-page="searchForm.pageNum" :page-sizes="[ 20, 50, 100, 500]" :page-size="20" layout="total, prev, pager, next,sizes" :total="searchForm.total">
                </el-pagination>
            </div>
        </el-card>
        <el-dialog :visible.sync="dialogVisible" title="新增标签" width="430px">
            <el-form :model="form" ref="dialogForm" :rules="formRules" label-width="80px" size="small" style="width:300px;margin-left:35px;">
                <el-form-item label="标签名称" prop="tagName">
                    <el-input v-model="form.tagName"></el-input>
                </el-form-item>
                <el-form-item label="标签类型" prop="tagTypeCode">
                    <el-select v-model="form.tagTypeCode" placeholder="请选择">
                        <el-option label="产品特色标签" value="1"></el-option>
                        <el-option label="活动标签" value="2"></el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="cancleSubmit">取 消</el-button>
                <el-button type="primary" @click="submitTag">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                dialogVisible: false,
                dialogType: '',
                searchForm: {},
                form: {},
                formRules: {
                    tagName: [
                        { required: true, message: '请输入标签名称', trigger: 'blur' }
                    ],
                    tagTypeCode: [
                        { required: true, message: '请选择标签类型', trigger: 'change' }
                    ]
                },
                list: [],
                multipleSelection: []
            }
        },
        created() {
            this.getTagList()
        },
        methods: {
            handleSelectionChange(val) {
                this.multipleSelection = val;
            },
            async getTagList() {
                this.loading = true;
                const data = await $http.tagList(this.searchForm)
                if (data.success) {
                    this.loading = false;
                    this.list = data.datas.list || []
                    this.searchForm = {
                        total: data.datas.total,
                        pageNum: data.datas.pageNum
                    }
                }
            },
            showDialog(type) {
                if (type == 'modify') {
                    if (this.multipleSelection.length != 1) {
                        this.$message.error('请选择一个银行');
                        return false
                    } else {
                        this.form = Object.assign({}, this.multipleSelection[0])
                    }
                }
                this.dialogType = type
                this.dialogVisible = true
            },
            submitTag() {
                this.$refs['dialogForm'].validate((valid) => {
                    if (valid) {
                        if (this.dialogType === 'add') {
                            this.addTag()
                        } else {
                            this.modifyTag()
                        }
                    } else {
                        return false;
                    }
                });

            },
            async addTag() {
                const data = await $http.addTag(this.form)
                if (data.success) {
                    this.$message({
                        message: '添加成功',
                        type: 'success'
                    });
                    this.cancleSubmit()
                    this.changePage(1)
                }
            },
            async modifyTag() {
                const data = await $http.modifyTag(this.form)
                if (data.success) {
                    this.$message({
                        message: '修改成功',
                        type: 'success'
                    });
                    this.cancleSubmit()
                    this.changePage(1)
                }
            },
            cancleSubmit() {
                this.dialogVisible = false
                this.$refs['dialogForm'].resetFields()
            },
            changePage(page) {
                this.searchForm.pageNum = page;
                this.getTagList();
            },
            changePageSize(pageSize) {
                this.searchForm.pageSize = pageSize;
                this.changePage(1);
            },
            async removeTag() {
                if (this.multipleSelection.length < 1) {
                    this.$message.error('请选择要删除标签');
                    return false
                }
                var tagArr = new Array();
                this.multipleSelection.map(item => {
                    tagArr.push(item.productTagId)
                })

                const data = await $http.deleteTag({
                    productTagId: tagArr.join(',')
                })
                if (data.success) {
                    this.$message({
                        message: '删除成功',
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
            tagFil(status) {
                return status == '1' ? '产品特色标签' : '活动标签'
            }
        }
    }
</script>
