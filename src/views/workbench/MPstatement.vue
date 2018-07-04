<template>
    <div>
        <div class="wrapper-nav">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item><i class="el-icon-menu menuicon"></i> 工作台</el-breadcrumb-item>
                <el-breadcrumb-item>MP账户流水跟踪</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <el-card class="wrapper-option">
            <el-form ref="form" :model="form" label-width="120px" size="small">
                <el-col :span="21">
                    <el-row>
                        <el-col :span="6">
                            <el-form-item label="融资申请编号">
                                <el-input v-model="form.name"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="产品名称">
                                <el-input v-model="form.name"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="融资主体简称">
                                <el-input v-model="form.name"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="MP帐号">
                                <el-input v-model="form.name"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="6">
                            <el-form-item label="流水号">
                                <el-input v-model="form.name"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="9">
                            <el-form-item label="进件时间">
                                <el-date-picker v-model="value6" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
                                </el-date-picker>
                            </el-form-item>
                        </el-col>
                        <el-col :span="9">
                            <el-form-item label="任务截止时间">
                                <el-date-picker v-model="value6" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
                                </el-date-picker>
                            </el-form-item>
                        </el-col>
                    </el-row>
                </el-col>
                <el-col :span="2" :offset="1">
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
                <el-button type="primary" size="small">批量导入还款数据</el-button>
            </div>
            <el-tabs type="card">
                <el-tab-pane label="待还款">
                    <el-table ref="multipleTable" :data="tableData3" tooltip-effect="dark" style="width: 100%">
                        <el-table-column label="序号" type="index">
                        </el-table-column>
                        <el-table-column label="借款主体编号" min-width="150" prop="applyCode">
                        </el-table-column>
                        <el-table-column label="MP帐号" min-width="120" prop="account">
                        </el-table-column>
                        <el-table-column label="融资申请编号" min-width="120" prop="applyCode">
                        </el-table-column>
                        <el-table-column label="流水日期" min-width="150" prop="applyTime">
                        </el-table-column>
                        <el-table-column label="流水金额（元）" min-width="140" prop="amount">
                        </el-table-column>
                        <el-table-column label="MP收益金额（元" min-width="120" prop="amount">
                        </el-table-column>
                        <el-table-column label="还款状态" min-width="120" prop="status">
                        </el-table-column>
                    </el-table>
                </el-tab-pane>
                <el-tab-pane label="累计还款">
                    <el-table ref="multipleTable" :data="tableData4" tooltip-effect="dark" style="width: 100%">
                        <el-table-column label="序号" type="index">
                        </el-table-column>
                        <el-table-column label="融资申请编号" min-width="150" prop="applyCode">
                        </el-table-column>
                        <el-table-column label="产品名称" min-width="180" prop="productName">
                        </el-table-column>
                        <el-table-column label="授信额度（元）" min-width="120" prop="limit">
                        </el-table-column>
                        <el-table-column label="放款日期" min-width="140" prop="applyTime">
                        </el-table-column>
                        <el-table-column label="还款状态" min-width="140" prop="status">
                        </el-table-column>
                        <el-table-column label="已还本金（元）" min-width="120" prop="limit">
                        </el-table-column>
                        <el-table-column label="剩余还款本金（元）" min-width="170" prop="limit">
                        </el-table-column>
                        <el-table-column label="MP收益余额还款" min-width="170" prop="limit">
                        </el-table-column>
                        <el-table-column label="每期利息" min-width="120" prop="limit">
                        </el-table-column>
                        <el-table-column label="MP账户余额" min-width="120" prop="limit">
                        </el-table-column>
                        <el-table-column label="操作员" min-width="120" prop="operator">
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
            <el-form :model="form" label-width="120px" size="small" style="width:380px;margin-left:35px;">
                <el-form-item label="佣金金额">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="收取时间">
                    <el-date-picker v-model="form.name" type="date" placeholder="选择日期">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="是否提前还款">
                    <el-radio-group v-model="form.resource">
                        <el-radio label="是"></el-radio>
                        <el-radio label="否"></el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="MP账户余额还款">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="MP收益还款">
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
                    applyTime: '2018-05-12',
                    amount: 80000,
                    status: '还款中',
                    repayTimes: 5,
                    exceedLimit: '是',
                    account:'zouyidan'
                }],
                tableData4: [{
                    applyCode: 'RZ-18695872813',
                    productName: '颀财-房抵贷（山东）',
                    applyTime: '2018-05-12',
                    limit: 80000,
                    status: '还款中',
                    operator: '张学友',
                    exceedLimit: '是'
                }],
            }
        },
        methods: {
            creditOrder() {
                this.creditDialog = true
            },
        }
    }
</script>
