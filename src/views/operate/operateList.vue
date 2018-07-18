<template>
    <div>
        <div class="wrapper-nav">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item>
                    <i class="el-icon-menu menuicon"></i> 运营管理</el-breadcrumb-item>
                <el-breadcrumb-item>渠道管理</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <search-group :init-data="conditionData" @search="changePage(1)" ref="searchForm"></search-group>
        <el-card class="wrapper-option">
            <div class="wrapper-button clearfix">
                <el-button type="primary" size="small" @click="showDialog('add')">新增</el-button>
                <el-button size="small" @click="showDialog('modify')">修改</el-button>
                <el-button size="small" @click="removeChannel">删除</el-button>
            </div>
            <el-table ref="multipleTable" v-loading='loading' :data="list" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
                <el-table-column type="selection" width="55">
                </el-table-column>
                <el-table-column label="序号" type="index">
                </el-table-column>
                <el-table-column label="创建时间" prop="createTime">
                </el-table-column>
                <el-table-column prop="channelName" label="渠道名称">
                </el-table-column>
                <el-table-column prop="channelCode" label="渠道参数" show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="createBy" label="创建人" show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="updateBy" label="更新人" show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="updateTime" label="更新时间" show-overflow-tooltip>
                </el-table-column>
            </el-table>
            <div class="text-center pd10">
                <el-pagination v-if="searchForm.total" @size-change="changePageSize" @current-change="changePage" :current-page="searchForm.pageNum" :page-sizes="[10, 20, 50, 100]" :page-size="10" layout="total, prev, pager, next,sizes" :total="searchForm.total">
                </el-pagination>
            </div>
        </el-card>
        <el-dialog :visible.sync="dialogVisible" width="430px">
            <el-form :model="form" ref="dialogForm" :rules="formRules" label-width="80px" size="small" style="width:300px;margin-left:35px;">
                <el-form-item label="渠道名称" prop="channelName">
                    <el-input v-model="form.channelName"></el-input>
                </el-form-item>
                <el-form-item label="渠道参数" prop="channelCode">
                    <el-input v-model="form.channelCode"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="cancleSubmit">取 消</el-button>
                <el-button type="primary" @click="submitChannel">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                loading: true,
                dialogVisible: false,
                dialogType: 'add',
                form: {},
                formRules: {
                    channelName: [
                        { required: true, message: '请输入渠道名称', trigger: 'blur' }
                    ],
                    channelCode: [
                        { required: true, message: '请输入渠道参数', trigger: 'blur' }
                    ]
                },
                searchForm: {},
                multipleSelection: [],
                list: []
            }
        },
        computed: {
            conditionData() {
                return [
                    {
                        key: 'channelName',
                        label: '渠道名称',
                        type: 'text',
                        value: '',
                    }, {
                        key: 'channelCode',
                        label: '渠道参数',
                        type: 'text',
                        value: '',
                    }, {
                        key: ['createdBeginDate', 'createdEndDate'],
                        label: '创建时间',
                        type: 'date',
                        value: '',
                        datetype: 'daterange'
                    }
                ]
            }
        },
        components: {
            'search-group': () => import('@/components/SearchGroup')
        },
        created() {
            this.getChannelList();
        },
        methods: {
            async getChannelList() {
                this.loading = true
                const form = Object.assign(
                    {},
                    this.searchForm,
                    this.$refs.searchForm ? this.$refs.searchForm.getFormData() : {}
                );
                const data = await $http.basicChannelList(form)
                if (data.success) {
                    this.list = data.datas.list;
                    this.loading = false
                    this.searchForm = {
                        total: data.datas.total,
                        pageNum: data.datas.pageNum,
                        size: data.datas.size
                    }
                }
            },
            changePage(page) {
                this.searchForm.pageNum = page;
                this.getChannelList();
            },
            changePageSize(pageSize) {
                this.searchForm.pageSize = pageSize;
                this.changePage(1);
            },
            handleSelectionChange(val) {
                this.multipleSelection = val;
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
            submitChannel() {
                this.$refs['dialogForm'].validate((valid) => {
                    if (valid) {
                        if (this.dialogType === 'add') {
                            this.addChannel()
                        } else {
                            this.modifyChannel()
                        }
                    } else {
                        return false;
                    }
                });

            },
            async addChannel() {
                const data = await $http.addChannel(this.form)
                if (data.success) {
                    this.$message({
                        message: '添加成功',
                        type: 'success'
                    });
                    this.cancleSubmit()
                    this.changePage(1)
                }
            },
            async modifyChannel() {
                const data = await $http.modifyChannel(this.form)
                if (data.success) {
                    this.$message({
                        message: '修改成功',
                        type: 'success'
                    });
                    this.cancleSubmit()
                    this.changePage(1)
                }
            },
            async removeChannel() {
                if (this.multipleSelection.length < 1) {
                    this.$message.error('请选择要删除渠道');
                    return false
                }
                var channelArr = new Array();
                this.multipleSelection.map(item => {
                    channelArr.push(item.channelId)
                })

                const data = await $http.deleteChannel({
                    channelId:channelArr.join(',')
                })
                if(data.success){
                    this.$message({
                        message: '删除成功',
                        type: 'success'
                    });
                     this.changePage(1)
                }else{
                    this.$message({
                        message: data.i18nMessage,
                        type: 'error'
                    });
                }
            },
            cancleSubmit() {
                this.dialogVisible = false
                this.$refs['dialogForm'].resetFields()
            },
        }
    }
</script>
