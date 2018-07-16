<template>
    <div>
        <div class="wrapper-nav">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item><i class="el-icon-menu menuicon"></i> 工作台</el-breadcrumb-item>
                <el-breadcrumb-item>分佣管理</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <search-group :init-data="conditionData" @search="changePage(1)" ref="searchForm"></search-group>

        <el-card class="wrapper-option">
            <div class="wrapper-button clearfix">
                <el-button type="primary" size="small">批量导入分佣数据</el-button>
            </div>
            <el-tabs type="card">
                <el-tab-pane label="待分佣">
                    <el-table ref="multipleTable" :data="tableData3"  tooltip-effect="dark" style="width: 100%" >
                        <el-table-column label="序号" type="index">
                        </el-table-column>
                        <el-table-column label="融资申请编号" prop="applyCode">
                        </el-table-column>
                        <el-table-column label="产品名称" prop="productName">
                        </el-table-column>
                        <el-table-column label="放款日期"  prop="applyTime">
                        </el-table-column>
                        <el-table-column label="授信额度（元）" prop="limit">
                        </el-table-column>
                        <el-table-column label="佣金比例（%）" prop="scale">
                        </el-table-column>
                        <el-table-column label="佣金额度（元）" prop="limit">
                        </el-table-column>
                        <el-table-column label="是否预警">
                        </el-table-column>
                        <el-table-column label="操作" align="center">
                            <template slot-scope="scope">
                                <el-button type="primary" size="mini" @click="creditOrder">收取分佣</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-tab-pane>
                <el-tab-pane label="已分佣">
                    <el-table ref="multipleTable" :data="tableData4"  tooltip-effect="dark" style="width: 100%" >
                        <el-table-column label="序号" type="index">
                        </el-table-column>
                        <el-table-column label="融资申请编号" width="150" prop="applyCode">
                        </el-table-column>
                        <el-table-column label="产品名称" width="180" prop="productName">
                        </el-table-column>
                        <el-table-column label="授信额度（元）" width="120" prop="limit">
                        </el-table-column>
                        <el-table-column label="放款日期" width="140" prop="applyTime">
                        </el-table-column>
                        <el-table-column label="分佣日期" width="140" prop="applyTime">
                        </el-table-column>
                        <el-table-column label="佣金额度（元）" width="120" prop="limit">
                        </el-table-column>
                        <el-table-column label="实收金额（元）" width="120" prop="limit">
                        </el-table-column>
                        <el-table-column label="流水号" width="170" prop="serialNum">
                        </el-table-column>
                        <el-table-column label="是否结清" width="100" prop="operator">
                        </el-table-column>
                        <el-table-column label="操作员" width="100" prop="operator">
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
        <el-dialog :visible.sync="creditDialog" width="500px">
            <el-form :model="form" label-width="80px" size="small" style="width:350px;margin-left:35px;">
                <el-form-item label="佣金金额">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="收取时间">
                    <el-date-picker v-model="form.name" type="date" placeholder="选择日期">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="流水号">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="creditDialog = false">取 消</el-button>
                <el-button type="primary" @click="creditDialog = false">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                creditDialog: false,
                value6: '',
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
                    applyCode: 'RZ-18695872813',
                    productName: '颀财-房抵贷（山东）',
                    applyTime: '2018-05-12',
                    passTime: '2018-05-12',
                    limit: 80000,
                    scale: '10%'
                }],
                tableData4: [{
                    applyCode: 'RZ-18695872813',
                    productName: '颀财-房抵贷（山东）',
                    applyTime: '2018-05-12',
                    passTime: '2018-05-12',
                    limit: 80000,
                    duetime: '12个月',
                    serialNum: '20180516425018525',
                    operator: '张学友'
                }],
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
                        isShort: true
                    }, {
                        key: ['endTimeStart', 'endTimeEnd'],
                        label: '放款时间',
                        type: 'date',
                        value: '',
                        isShort: false
                    }
                ]
            }
        },
        components: {
            'search-group': () => import('@/components/SearchGroup')
        },
        methods: {
            creditOrder() {
                this.creditDialog = true
            },
            async getBrokerList(){
                // const data = await $http.
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
