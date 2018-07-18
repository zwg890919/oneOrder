<template>
    <div>
        <div class="wrapper-nav">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item>
                    <i class="el-icon-menu menuicon"></i> 工作台</el-breadcrumb-item>
                <el-breadcrumb-item>准入初评</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <search-group :init-data="conditionData" @search="changePage(1)" ref="searchForm"></search-group>
        <el-card class="wrapper-option">
            <el-tabs type="card" @tab-click="changeStatus">
                <el-tab-pane label="待处理" name="0">
                    <el-table ref="multipleTable" :data="tableData" v-loading="loading" tooltip-effect="dark" style="width: 100%">
                        <el-table-column label="序号" type="index">
                        </el-table-column>
                        <el-table-column label="融资申请编号" min-width="150" prop="t.orderCode">
                        </el-table-column>
                        <el-table-column label="初评任务编号" min-width="180" prop="taskCode">
                        </el-table-column>
                        <el-table-column label="是否首次初评" min-width="150" prop="ifFirst">
                        </el-table-column>
                        <el-table-column label="产品名称" min-width="150" prop="productName">
                        </el-table-column>
                        <el-table-column label="借款主体" min-width="120" prop="customerName">
                        </el-table-column>
                        <el-table-column label="下发时间" min-width="120" prop="arrivedTime">
                        </el-table-column>
                        <el-table-column label="截止时间" min-width="120" prop="termTime">
                        </el-table-column>
                        <el-table-column label="累计时长" min-width="120" prop="operateTimes">
                        </el-table-column>
                        <el-table-column label="操作" align="center">
                            <template slot-scope="scope">
                                <el-button type="primary" size="mini" @click="goDispose(scope.row)">处理</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                    <div class="text-center pd10">
                        <el-pagination v-if="searchForm.totalCount" @size-change="changePageSize" @current-change="changePage" :current-page="searchForm.currentPage" :page-sizes="[20, 50, 100, 500]" :page-size="20" layout="total, prev, pager, next,sizes" :total="searchForm.totalCount">
                        </el-pagination>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="已处理" name="1">
                    <el-table ref="multipleTable" :data="tableData" v-loading="loading" tooltip-effect="dark" style="width: 100%">
                        <el-table-column label="序号" type="index">
                        </el-table-column>
                        <el-table-column label="融资申请编号" min-width="150" prop="t.orderCode">
                        </el-table-column>
                        <el-table-column label="初评任务编号" min-width="150" prop="taskCode">
                        </el-table-column>
                        <el-table-column label="产品名称" min-width="180" prop="productName">
                        </el-table-column>
                        <el-table-column label="借款主体" min-width="150" prop="customerName">
                        </el-table-column>
                        <el-table-column label="审核结果" min-width="150" prop="auditList.auditRes">
                        </el-table-column>
                        <el-table-column label="截止时间" min-width="120" prop="termTime">
                        </el-table-column>
                        <el-table-column label="提交时间" min-width="120" prop="operateTime">
                        </el-table-column>
                        <el-table-column label="操作员" min-width="120" prop="operateName">
                        </el-table-column>
                        <el-table-column label="累计时长" min-width="120" prop="operateTimes">
                        </el-table-column>
                        <el-table-column label="操作" align="center">
                            <template slot-scope="scope">
                                <el-button type="primary" size="mini">修改</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                    <div class="text-center pd10">
                        <el-pagination v-if="searchForm.totalCount" @size-change="changePageSize" @current-change="changePage" :current-page="searchForm.currentPage" :page-sizes="[20, 50, 100, 500]" :page-size="20" layout="total, prev, pager, next,sizes" :total="searchForm.totalCount">
                        </el-pagination>
                    </div>
                </el-tab-pane>
            </el-tabs>
        </el-card>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                tableData: [{
                    id:'11'
                }],
                searchForm:{
                    pagesize: 20,
                    currentPage: 1,
                    nodeType:0,
                    taskStatus:0
                },
                loading: false,
            }
        },
        computed: {
            conditionData() {
                return [
                    {
                        key: 'customerName',
                        label: '借款主体',
                        type: 'text',
                        value: '',
                    }, {
                        key: 'taskCode',
                        label: '初评任务编号',
                        type: 'text',
                        value: '',
                    }, {
                        key: 'customerCode',
                        label: '借款申请编号',
                        type: 'text',
                        value: '',
                    }, {
                        key: 'customerPhone',
                        label: '联系人手机号码',
                        type: 'text',
                        value: '',
                    }, {
                        key: 'productName',
                        label: '产品名称',
                        type: 'text',
                        value: '',
                    }, {
                        key: ['releaseTimeStart', 'releaseTimeEnd'],
                        label: '下发时间',
                        type: 'date',
                        value: '',
                        datetype: 'daterange'
                    }, {
                        key: ['endTimeStart', 'endTimeEnd'],
                        label: '截止时间',
                        type: 'date',
                        value: '',
                        datetype: 'daterange'
                    }, {
                        key: 'userName',
                        label: '业务员名称',
                        type: 'text',
                        value: '',
                    }, {
                        key: 'userPhone',
                        label: '业务员手机号码',
                        type: 'text',
                        value: '',
                    }
                ]
            }
        },
        components: {
            'search-group': () => import('@/components/SearchGroup'),
        },
        mounted() {
            this.getPerliminary()
        },
        methods: {
            async getPerliminary() {
                const form = Object.assign(
                    {},
                    this.searchForm,
                    this.$refs.searchForm ? this.$refs.searchForm.getFormData() : {}
                );
                const data = await $http.backuplist(form)
                if (data.success) {
                    this.loading = false;
                    this.tableData = data.body.list;
                    this.searchForm = data.body.parameter;
                }
            },
            changeStatus(tab) {
                this.searchForm.taskStatus = tab.name;
                this.changePage(1)
            },
            changePage(page) {
                this.searchForm.currentPage = page;
                this.getPerliminary();
            },
            changePageSize(pageSize) {
                this.searchForm.pageSize = pageSize;
                this.changePage(1);
            },
            goDispose(row){
                this.$router.push({ path: 'preliminaryApply', query: { taskId: row.id }})
            }
        }
    }
</script>
