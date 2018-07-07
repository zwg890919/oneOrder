<template>
    <div>
        <div class="wrapper-nav">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item><i class="el-icon-menu menuicon"></i> 工作台</el-breadcrumb-item>
                <el-breadcrumb-item>放款管理</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <el-card class="wrapper-option">
            <el-form ref="form" :model="form" label-width="120px" size="small">
                <el-col :span="21">
                    <el-row>
                        <el-col :span="6">
                            <el-form-item label="借款主体">
                                <el-input v-model="form.name"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="联系人手机号码">
                                <el-input v-model="form.name"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="产品名称">
                                <el-input v-model="form.name"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="是否预警">
                                <el-select v-model="form.name"></el-select>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="6">
                            <el-form-item label="融资申请编号">
                                <el-input v-model="form.name"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="业余员名称">
                                <el-input v-model="form.name"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="业务员手机号码">
                                <el-input v-model="form.name"></el-input>
                            </el-form-item>
                        </el-col>

                    </el-row>
                    <el-row :gutter="40">
                        <el-col :span="9">
                            <el-form-item label="下发时间">
									 <el-date-picker
								      type="daterange"
								      range-separator="至"
								      start-placeholder="开始日期"
								      end-placeholder="结束日期">
								    </el-date-picker>
							</el-form-item>
                        </el-col>
                        <el-col :span="9">
                            <el-form-item label="放款时间">
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
                <el-button type="primary" size="small">批量导入放款数据</el-button>
            </div>
            <el-tabs type="card">
                <el-tab-pane label="待放款">
                    <el-table ref="multipleTable" :data="tableData3" tooltip-effect="dark" style="width: 100%" >
                        <el-table-column label="序号" type="index">
                        </el-table-column>
                        <el-table-column label="融资申请编号" prop="applyCode">
                        </el-table-column>
                        <el-table-column label="产品名称" prop="productName">
                        </el-table-column>
                        <el-table-column label="进件时间" width="170" prop="applyTime">
                        </el-table-column>
                        <el-table-column label="下发时间" width="170" prop="passTime">
                        </el-table-column>
                        <el-table-column label="授信额度（元）" width="120" prop="limit">
                        </el-table-column>
                        <el-table-column label="借款期限（月）" width="120" prop="duetime">
                        </el-table-column>
                        <el-table-column label="是否预警" width="120" prop="duetime">
                        </el-table-column>
                        <el-table-column label="操作" width="300" align="center">
                            <template slot-scope="scope">
                                <el-button type="primary" size="mini" @click="creditOrder">放款</el-button>
                                <el-button type="primary" size="mini">资金方拒件</el-button>
                                <el-button type="primary" size="mini">删除</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-tab-pane>
                <el-tab-pane label="已放款">
                    <el-table ref="multipleTable" :data="tableData4" tooltip-effect="dark" style="width: 100%" >
                        <el-table-column label="序号" type="index">
                        </el-table-column>
                        <el-table-column label="融资申请编号" width="120" prop="applyCode">
                        </el-table-column>
                        <el-table-column label="产品名称" width="150" prop="productName">
                        </el-table-column>
                        <el-table-column label="进件时间" width="170" prop="applyTime">
                        </el-table-column>
                        <el-table-column label="授信额度（元）" width="120" prop="limit">
                        </el-table-column>
                        <el-table-column label="借款期限（月）" width="120" prop="duetime">
                        </el-table-column>
                        <el-table-column label="放款日期" width="170" prop="passTime">
                        </el-table-column>
                        <el-table-column label="放款金额" width="120" prop="limit">
                        </el-table-column>
                        <el-table-column label="第三方流水号" width="170" prop="serialNum">
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
        <el-dialog :visible.sync="creditDialog" width="500px" title="放款">
            <el-form :model="form" label-width="120px" size="small" style="width:350px;margin-left:35px;">
                <el-form-item label="放款金额（元）">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="放款时间">
                    <el-date-picker v-model="form.name" type="date" placeholder="选择日期">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="流水号">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="放款账户">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="是否代收代付">
                    <el-radio-group v-model="radio2">
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
                    applyCode: '123',
                    productName: '中信银行',
                    applyTime: '2018-05-12 12:00:00',
                    passTime: '2018-05-12 12:00:00',
                    limit: 80000,
                    duetime: '12个月'
                }],
                tableData4: [{
                    applyCode: '123',
                    productName: '中信银行',
                    applyTime: '2018-05-12 12:00:00',
                    passTime: '2018-05-12 12:00:00',
                    limit: 80000,
                    duetime: '12个月',
                    serialNum: '20180516425018525',
                    operator: '张学友'
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
