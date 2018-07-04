<template>
    <div>
        <div style="padding:10px 10px 5px;">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item>
                    <i class="el-icon-menu menuicon" style="margin-right:5px;"></i>工作台</el-breadcrumb-item>
                <el-breadcrumb-item>分佣管理</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <el-card class="wrapper-option">
            <el-form ref="form" :model="form" label-width="120px" size="small">
                <el-col :span="21">
                    <el-row>
                        <el-col :span="6">
                            <el-form-item label="借款主体名称">
                                <el-input v-model="form.name"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="借款主体编号">
                                <el-input v-model="form.name"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="所在省份">
                                <el-select v-model="form.region" placeholder="请选择省份">
                                    <el-option label="浙江省" value="shanghai"></el-option>
                                    <el-option label="安徽省" value="beijing"></el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="所在城市">
                                <el-select v-model="form.region" placeholder="请选择城市">
                                    <el-option label="绍兴市" value="shanghai"></el-option>
                                    <el-option label="杭州市" value="beijing"></el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="6">
                            <el-form-item label="借款编号">
                                <el-input v-model="form.name"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="业务员名称">
                                <el-input v-model="form.name"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="业务员编号">
                                <el-input v-model="form.name"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="业务员手机">
                                <el-input v-model="form.name"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row >
                        <el-col :span="6">
                            <el-form-item label="产品名称">
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
                        <el-table-column label="放款时间"  prop="applyTime">
                        </el-table-column>
                        <el-table-column label="授信额度（元）" prop="limit">
                        </el-table-column>
                        <el-table-column label="佣金比例（%）" prop="scale">
                        </el-table-column>
                        <el-table-column label="佣金额度（元）" prop="limit">
                        </el-table-column>
                        <el-table-column label="操作" align="center">
                            <template slot-scope="scope">
                                <el-button type="primary" size="mini" @click="creditOrder">收取佣金</el-button>
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
                        <el-table-column label="收取日期" width="140" prop="applyTime">
                        </el-table-column>
                        <el-table-column label="佣金额度（元）" width="120" prop="limit">
                        </el-table-column>
                        <el-table-column label="实收额度（元）" width="120" prop="limit">
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
        methods: {
            creditOrder() {
                this.creditDialog = true
            },
        }
    }
</script>
