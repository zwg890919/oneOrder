<template>
    <div>
        <div class="wrapper-nav">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item><i class="el-icon-menu menuicon"></i> 工作台</el-breadcrumb-item>
                <el-breadcrumb-item>放款管理</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <search-group :init-data="conditionData" @search="changePage(1)" ref="searchForm"></search-group>
        <el-card class="wrapper-option">
            <div class="wrapper-button clearfix">
                <el-button type="primary" size="small">批量导入放款数据</el-button>
            </div>
            <el-tabs type="card">
                <el-tab-pane label="待放款">
                    <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%" >
                        <el-table-column label="序号" type="index">
                        </el-table-column>
                        <el-table-column label="融资申请编号" prop="t.oderCode">
                        </el-table-column>
                        <el-table-column label="产品名称" prop="t.productName">
                        </el-table-column>
                        <el-table-column label="进件时间" width="170" prop="createTime">
                        </el-table-column>
                        <el-table-column label="下发时间" width="170" prop="arrivedTime">
                        </el-table-column>
                        <el-table-column label="授信额度（元）" width="120" prop="t.creditMoney">
                        </el-table-column>
                        <el-table-column label="借款期限（月）" width="120" prop="t.productApplyTime">
                        </el-table-column>
                        <el-table-column label="是否预警" width="120" prop="t.ifWarn">
                        </el-table-column>
                        <el-table-column label="操作" width="300" align="center">
                            <template slot-scope="scope">
                                <el-button type="primary" size="mini" @click="creditOrder">放款</el-button>
                                <el-button type="primary" size="mini" @click="refuseOrder">资金方拒件</el-button>
                                <el-button type="primary" size="mini">删除</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-tab-pane>
                <el-tab-pane label="已放款">
                    <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%" >
                        <el-table-column label="序号" type="index">
                        </el-table-column>
                        <el-table-column label="融资申请编号" width="120" prop="t.oderCode">
                        </el-table-column>
                        <el-table-column label="产品名称" width="150" prop="t.productName">
                        </el-table-column>
                        <el-table-column label="进件时间" width="170" prop="createTime">
                        </el-table-column>
                        <el-table-column label="授信额度（元）" width="120" prop="t.creditMoney">
                        </el-table-column>
                        <el-table-column label="借款期限（月）" width="120" prop="productApplyTime">
                        </el-table-column>
                        <el-table-column label="放款日期" width="170" prop="t.releaseTime">
                        </el-table-column>
                        <el-table-column label="放款金额" width="120" prop="t.releaseMoney">
                        </el-table-column>
                        <el-table-column label="第三方流水号" width="170" prop="t.paySerialNumber">
                        </el-table-column>
                        <el-table-column label="操作员" width="100" prop="operateName">
                        </el-table-column>
                        <el-table-column label="操作" align="center">
                            <template slot-scope="scope">
                                <el-button type="primary" size="mini">修改</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-tab-pane>
            </el-tabs>

        </el-card>
        <el-dialog :visible.sync="creditDialog" width="500px" title="放款">
            <el-form :model="creditForm" label-width="120px" size="small" style="width:350px;margin-left:35px;">
                <el-form-item label="放款金额（元）">
                    <el-input v-model="creditForm.name"></el-input>
                </el-form-item>
                <el-form-item label="放款时间">
                    <el-date-picker v-model="creditForm.name" type="date" placeholder="选择日期">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="流水号">
                    <el-input v-model="creditForm.name"></el-input>
                </el-form-item>
                <el-form-item label="放款账户">
                    <el-input v-model="creditForm.name"></el-input>
                </el-form-item>
                <el-form-item label="是否代收代付">
                    <el-radio-group v-model="creditForm.name">
                        <el-radio :label="3">是</el-radio>
                        <el-radio :label="6">否</el-radio>
                    </el-radio-group>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="creditDialog = false">取 消</el-button>
                <el-button type="primary" @click="creditDialog = false">确 定</el-button>
            </span>
        </el-dialog>
        <el-dialog :visible.sync="refuseDialog" width="500px" title="资金方拒件">
            <el-form :model="creditForm" label-width="120px" size="small" style="width:350px;margin-left:35px;">
                <el-form-item label="放款金额（元）">
                    <el-input type="textarea"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="refuseDialog = false">取 消</el-button>
                <el-button type="primary" @click="refuseDialog = false">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                creditDialog: false,
                refuseDialog:false,
                loading: false,
                searchForm: {
                    pagesize: 20,
                    currentPage: 1,
                    taskStatus: 0
                },
                creditForm:{

                },
                tableData: [],
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
                        key: 'customerCode',
                        label: '融资申请编号',
                        type: 'text',
                        value: '',
                    }, {
                        key: 'productName',
                        label: '产品名称',
                        type: 'text',
                        value: '',
                    }, {
                        key: 'ifwaring',
                        label: '是否预警',
                        type: 'select',
                        value: '',
                        option:[{
                            id:'1',
                            label:'全部',
                            value:'0'
                        },{
                            id:'2',
                            label:'是',
                            value:'1'
                        },{
                            id:'3',
                            label:'否',
                            value:'2'
                        }]
                    }, {
                        key: 'customerPhone',
                        label: '联系人手机号码',
                        type: 'text',
                        value: '',
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
                    }, {
                        key: ['releaseTimeStart', 'releaseTimeEnd'],
                        label: '下发时间',
                        type: 'date',
                        value: '',
                        datetype: 'daterange'
                    }, {
                        key: ['endTimeStart', 'endTimeEnd'],
                        label: '放款时间',
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
        mounted() {
            this.getCreditList()
        },
        methods: {
            creditOrder(){
                this.creditDialog = true
            },
            refuseOrder(){
                this.refuseDialog = true
            },
            async getCreditList() {
                const form = Object.assign(
                    {},
                    this.searchForm,
                    this.$refs.searchForm ? this.$refs.searchForm.getFormData() : {}
                );
                const data = await $http.backuplist(form)
                console.log(data)
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
                this.getCreditList();
            },
            changePageSize(pageSize) {
                this.searchForm.pageSize = pageSize;
                this.changePage(1);
            },
        }
    }
</script>
