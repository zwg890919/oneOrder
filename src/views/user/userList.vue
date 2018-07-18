<template>
    <div>
        <div class="wrapper-nav">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item>
                    <i class="el-icon-menu menuicon"></i> 用户管理</el-breadcrumb-item>
                <el-breadcrumb-item>业务员列表</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <search-group :init-data="conditionData" @search="changePage(1)" ref="searchForm"></search-group>
        <el-card class="wrapper-option">
            <div class="wrapper-button clearfix">
                <el-button @click="addUser" type="primary" size="small">新建用户</el-button>
                <el-button @click="initPassword" size="small">初始化登录密码</el-button>
            </div>
            <el-table ref="multipleTable" v-loading="loading" :data="list" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
                <el-table-column type="selection" width="55">
                </el-table-column>
                <el-table-column label="用户编号" width="150">
                    <template slot-scope="scope">
                        <a class="link-color" @click="goUser(scope.$index, scope.row)">{{ scope.row.salesmanCode }}</a>
                    </template>
                </el-table-column>
                <el-table-column prop="salesmanName" label="用户姓名" width="110">
                </el-table-column>
                <el-table-column prop="phoneNo" label="手机号码" width="110" show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="idNo" label="身份证号" width="170" show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="registerDate" label="注册时间" width="170" show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="sumLoanAppCount" label="累计进件笔数" width="120" show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="sumInProgressCount" label="审核中笔数" width="100" show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="sumFailLoanCount" label="累计拒件笔数" width="120" show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="email" label="电子邮箱" width="170" show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="loginCount" label="登录次数" width="120" show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="channelName" label="渠道" width="120" show-overflow-tooltip>
                </el-table-column>
                <el-table-column label="操作" show-overflow-tooltip>
                    <template slot-scope="scope">
                        <el-button type="text" size="small" @click="modifyUser(scope.$index, scope.row)">修改</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="text-center pd10">
                <el-pagination v-if="searchForm.total" @size-change="changePageSize" @current-change="changePage" :current-page="searchForm.pageNum" :page-sizes="[10, 20, 50, 100, 500]" :page-size="10" layout="total, prev, pager, next,sizes" :total="searchForm.total">
                </el-pagination>
            </div>
        </el-card>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                multipleSelection: [],
                searchForm: {},
                list: [],
                loading: false
            }
        },
        computed: {
            conditionData() {
                return [
                    {
                        key: 'phoneNo',
                        label: '手机号码',
                        type: 'text',
                        value: '',
                    }, {
                        key: 'salesmanName',
                        label: '用户姓名',
                        type: 'text',
                        value: '',
                    }, {
                        key: 'idNo',
                        label: '身份证号',
                        type: 'text',
                        value: '',
                    }, {
                        key: 'cardNo',
                        label: '银行卡号',
                        type: 'text',
                        value: '',
                    }, , {
                        key: 'salesmanCode',
                        label: '用户编号',
                        type: 'text',
                        value: '',
                    }, , {
                        key: 'loanApplicationCode',
                        label: '借款申请编号',
                        type: 'text',
                        value: '',
                    }, , {
                        key: 'channelId',
                        label: '渠道ID',
                        type: 'select',
                        value: '',
                        option: [{
                            id: '1',
                            label: '全部',
                            value: 0
                        }, {
                            id: '2',
                            label: '是',
                            value: 1
                        }, {
                            id: '3',
                            label: '否',
                            value: 2
                        }]
                    }, , {
                        key: 'hasLoanApplicationFlag',
                        label: '是否有进件',
                        type: 'select',
                        value: '',
                        option: [{
                            id: '1',
                            label: '全部',
                            value: 0
                        }, {
                            id: '2',
                            label: '是',
                            value: 1
                        }, {
                            id: '3',
                            label: '否',
                            value: 2
                        }]
                    }, {
                        key: ['registerBeginDate', 'registerEndDate'],
                        label: '注册时间',
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
            this.getSalesman();
        },
        methods: {
            async getSalesman() {
                this.loading = true
                const form = Object.assign(
                    {},
                    this.searchForm,
                    this.$refs.searchForm ? this.$refs.searchForm.getFormData() : {}
                );
                const data = await $http.salesmanList(form)
                if (data.success) {
                    this.loading = false;
                    this.list = data.datas.list;
                    this.list[0].salesmanCode = '123';
                    this.list[0].id = 1;
                    this.searchForm = {
                        total: data.datas.total,
                        pageNum: data.datas.pageNum,
                        size: data.datas.size
                    }
                }
            },
            changePage(page) {
                this.searchForm.currentPage = page;
                this.getSalesman();
            },
            changePageSize(pageSize) {
                this.searchForm.pageSize = pageSize;
                this.changePage(1);
            },
            handleSelectionChange(val) {
                this.multipleSelection = val;
            },
            addUser() {
                this.$router.push({
                    path: '/user/addUser'
                });
            },
            initPassword() {
                if (this.multipleSelection.length === 1) {
                    this.subInitPassword();
                } else if (this.multipleSelection.length > 1) {
                    this.$message({
                        message: '只能操作一个用户',
                        type: 'warning'
                    });
                } else {
                    this.$message({
                        message: '请至少选择一个用户',
                        type: 'warning'
                    });
                }
            },
            async subInitPassword() {
                const data = await $http.salesmanInitPassowrd({
                    salesmanId: this.multipleSelection[0].id
                })
                if (data.success) {
                    this.$notify.success({
                        title: '提示',
                        message: '操作成功'
                    });
                }
            },
            goUser(index, row) {
                this.$router.push({ name: 'user.userInfo.index', params: { userId: row.id } })
            },
            modifyUser(index, row) {
                row.id = 1;
                this.$router.push({ name: 'user.modifyUser', params: { userId: row.id } })
            },
        }
    }
</script>
