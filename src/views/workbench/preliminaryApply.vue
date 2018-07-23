<template>
    <div id="preliminaryApply">
        <div class="wrapper-nav">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item>
                    <i class="el-icon-menu menuicon"></i> 工作台</el-breadcrumb-item>
                <el-breadcrumb-item>初评处理</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <el-col :span="24">
            <el-card class="wrapper-option">
                <div slot="header">基本信息</div>
                <table class="infoTable line-table" cellspacing="0" cellpadding="0" border="0">
                    <tbody>
                        <tr>
                            <td>借款申请编号</td>
                            <td>借款主体名称</td>
                            <td>产品名称</td>
                            <td>下发时间</td>

                        </tr>
                        <tr>
                            <td>{{dataDetail.orderCode}}</td>
                            <td>{{dataDetail.customerName}}</td>
                            <td>{{dataDetail.productName }}</td>
                            <td>{{dataDetail.arrivedTime }}</td>
                        </tr>
                    </tbody>
                </table>
            </el-card>
            <el-card class="wrapper-option">
                <div slot="header">录入客户审核</div>
                <table class="infoTable nor-table data-table" cellspacing="0" cellpadding="0" border="0">
                    <tbody>
                        <tr>
                            <td>序号</td>
                            <td>审核项目</td>
                            <td>审核内容</td>
                            <td>审核结果</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>客户名称</td>
                            <td>{{dataDetail.customerName }}</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>社会统一信用代码</td>
                            <td>{{dataDetail.creditCode}}</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>客户简称</td>
                            <td>{{dataDetail.customerShortName }}</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>营业地址</td>
                            <td>{{dataDetail.address }}</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>联系人姓名</td>
                            <td>{{dataDetail.cellMan}}</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>联系人手机号码</td>
                            <td>{{dataDetail.cellphone }}</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>联系人与借款主体的关系</td>
                            <td>
                                酒吧实际控制人
                            </td>
                            <td>
                                <el-radio-group v-model="radio2">
                                    <el-radio :label="3">是</el-radio>
                                    <el-radio :label="6">否</el-radio>
                                </el-radio-group>
                            </td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>分期类型</td>
                            <td>{{dataDetail.payBackType | transPayBackType}}</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>9</td>
                            <td>酒吧每屏账号</td>
                            <td>{{dataDetail.barMPAccount }}</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td>酒吧近3个月每屏交易均额</td>
                            <td></td>
                            <td>
                                <el-input size="mini"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>11</td>
                            <td>同类型酒吧MP账号一</td>
                            <td>{{dataDetail.barMPAccount1}}</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>12</td>
                            <td>资质是否一致</td>
                            <td></td>
                            <td>
                                <el-radio-group v-model="radio2">
                                    <el-radio :label="3">是</el-radio>
                                    <el-radio :label="6">否</el-radio>
                                </el-radio-group>
                            </td>
                        </tr>
                        <tr>
                            <td>13</td>
                            <td>近3个月每屏交易均额</td>
                            <td></td>
                            <td>
                                <el-input size="mini"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>14</td>
                            <td>同类型酒吧MP账号二</td>
                            <td>{{dataDetail.barMPAccount2}}</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>15</td>
                            <td>资质是否一致</td>
                            <td></td>
                            <td>
                                <el-radio-group v-model="radio2">
                                    <el-radio :label="3">是</el-radio>
                                    <el-radio :label="6">否</el-radio>
                                </el-radio-group>
                            </td>
                        </tr>
                        <tr>
                            <td>16</td>
                            <td>近3个月每屏交易均额</td>
                            <td></td>
                            <td>
                                <el-input size="mini"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>17</td>
                            <td>同类型酒吧MP账号三</td>
                            <td>{{dataDetail.barMPAccount3 }}</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>18</td>
                            <td>资质是否一致</td>
                            <td></td>
                            <td>
                                <el-radio-group v-model="radio2">
                                    <el-radio :label="3">是</el-radio>
                                    <el-radio :label="6">否</el-radio>
                                </el-radio-group>
                            </td>
                        </tr>
                        <tr>
                            <td>19</td>
                            <td>近3个月每屏交易均额</td>
                            <td></td>
                            <td>
                                <el-input size="mini"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>20</td>
                            <td>实际经营年限</td>
                            <td></td>
                            <td>
                                <el-radio-group v-model="radio2">
                                    <el-radio :label="3">是</el-radio>
                                    <el-radio :label="6">否</el-radio>
                                </el-radio-group>
                            </td>
                        </tr>
                        <tr>
                            <td>21</td>
                            <td>营业面积</td>
                            <td>{{dataDetail.workSpace }}</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>22</td>
                            <td>酒吧座位数</td>
                            <td>{{dataDetail.workSite }}</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>23</td>
                            <td>日均人流量</td>
                            <td>{{dataDetail.dopeoples }}</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>24</td>
                            <td>客单价</td>
                            <td>{{dataDetail.price }}</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>25</td>
                            <td>上座率</td>
                            <td>{{dataDetail.popRate }}</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>26</td>
                            <td>翻台率</td>
                            <td>{{dataDetail.barRate }}</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>27</td>
                            <td>年销售额</td>
                            <td>{{dataDetail.annualSales }}</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>28</td>
                            <td>资产总额</td>
                            <td>{{dataDetail.totalAssets }}</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>29</td>
                            <td>负债总额</td>
                            <td>{{dataDetail.totalLiabilities  }}</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>30</td>
                            <td>以上酒吧资质是否符合要求</td>
                            <td></td>
                            <td>
                                <el-radio-group v-model="radio2">
                                    <el-radio :label="3">是</el-radio>
                                    <el-radio :label="6">否</el-radio>
                                </el-radio-group>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </el-card>
        </el-col>
        <el-col :span="24">
            <el-card class="wrapper-option">
                <div slot="header">客户照片信息审核</div>
                <table class="infoTable nor-table data-table" cellspacing="0" cellpadding="0" border="0">
                    <tbody>
                        <tr>
                            <td>序号</td>
                            <td>审核项目</td>
                            <td>审核内容</td>
                            <td>审核结果</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>营业执照照片</td>
                            <td>{{dataDetail.bussinessPhoto ? '已上传' : '未上传' }}
                                <el-button v-if="dataDetail.bussinessPhoto" class="table-button" size="mini" type="primary">预览</el-button>
                            </td>
                            <td>
                                <el-radio-group v-model="radio2">
                                    <el-radio :label="3">是</el-radio>
                                    <el-radio :label="6">否</el-radio>
                                </el-radio-group>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>名称</td>
                            <td></td>
                            <td>
                                <el-input size="mini"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>类型</td>
                            <td></td>
                            <td>
                                <el-input size="mini"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>住所</td>
                            <td></td>
                            <td>
                                <el-input size="mini"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>法定代表人</td>
                            <td></td>
                            <td>
                                <el-input size="mini"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>注册资本</td>
                            <td></td>
                            <td>
                                <el-input size="mini"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>成立日期</td>
                            <td></td>
                            <td>
                                <el-input size="mini"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>营业期限</td>
                            <td></td>
                            <td>
                                <el-time-picker size="mini" is-range range-separator="至" start-placeholder="开始时间" end-placeholder="结束时间" placeholder="选择时间范围">
                                </el-time-picker>
                            </td>
                        </tr>
                        <tr>
                            <td>9</td>
                            <td>经营范围</td>
                            <td></td>
                            <td>
                                <el-input size="mini"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td>统一社会信用代码</td>
                            <td></td>
                            <td>
                                <el-input size="mini"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>11</td>
                            <td>法人加盖公章的身份证正面照</td>
                            <td>
                                {{dataDetail.idPhoto1 ? '已上传' : '未上传' }}
                                <el-button v-if="dataDetail.idPhoto1" class="table-button" size="mini" type="primary">预览</el-button>
                            </td>
                            <td>
                                <el-radio-group v-model="radio2">
                                    <el-radio :label="3">是</el-radio>
                                    <el-radio :label="6">否</el-radio>
                                </el-radio-group>
                            </td>
                        </tr>
                        <tr>
                            <td>12</td>
                            <td>法人加盖公章的身份证正面照</td>
                            <td>{{dataDetail.idPhoto2 ? '已上传' : '未上传' }}
                                <el-button v-if="dataDetail.idPhoto2" class="table-button" size="mini" type="primary">预览</el-button>
                            </td>
                            <td>
                                <el-radio-group v-model="radio2">
                                    <el-radio :label="3">是</el-radio>
                                    <el-radio :label="6">否</el-radio>
                                </el-radio-group>
                            </td>
                        </tr>
                        <tr>
                            <td>13</td>
                            <td>法人姓名</td>
                            <td></td>
                            <td>
                                <el-input size="mini"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>14</td>
                            <td>法人身份证号</td>
                            <td></td>
                            <td>
                                <el-input size="mini"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>15</td>
                            <td>有效期限</td>
                            <td></td>
                            <td>
                                <el-time-picker size="mini" is-range range-separator="至" start-placeholder="开始时间" end-placeholder="结束时间" placeholder="选择时间范围">
                                </el-time-picker>
                            </td>
                        </tr>
                        <tr>
                            <td>16</td>
                            <td>消防许可证</td>
                            <td>{{dataDetail.firePermitPhoto  ? '已上传' : '未上传' }}
                                <el-button v-if="dataDetail.firePermitPhoto " class="table-button" size="mini" type="primary">预览</el-button></td>
                            <td>
                                <el-radio-group v-model="radio2">
                                    <el-radio :label="3">是</el-radio>
                                    <el-radio :label="6">否</el-radio>
                                </el-radio-group>
                            </td>
                        </tr>
                        <tr>
                            <td>17</td>
                            <td>特殊行业经营许可证</td>
                            <td>{{dataDetail.tradePhoto   ? '已上传' : '未上传' }}
                                <el-button v-if="dataDetail.tradePhoto  " class="table-button" size="mini" type="primary">预览</el-button>
                            </td>
                            <td>
                                <el-radio-group v-model="radio2">
                                    <el-radio :label="3">是</el-radio>
                                    <el-radio :label="6">否</el-radio>
                                </el-radio-group>
                            </td>
                        </tr>
                        <tr>
                            <td>18</td>
                            <td>房屋租赁合同</td>
                            <td>
                                {{dataDetail.contractPhoto    ? '已上传' : '未上传' }}
                                <el-button v-if="dataDetail.contractPhoto   " class="table-button" size="mini" type="primary">预览</el-button>
                            </td>
                            <td>
                                <el-radio-group v-model="radio2">
                                    <el-radio :label="3">是</el-radio>
                                    <el-radio :label="6">否</el-radio>
                                </el-radio-group>
                            </td>
                        </tr>
                        <tr>
                            <td>19</td>
                            <td>是否为酒吧经营地址租赁合同</td>
                            <td></td>
                            <td>
                                <el-radio-group v-model="radio2">
                                    <el-radio :label="3">是</el-radio>
                                    <el-radio :label="6">否</el-radio>
                                </el-radio-group>
                            </td>
                        </tr>
                        <tr>
                            <td>20</td>
                            <td>有效期限</td>
                            <td></td>
                            <td>
                                <el-time-picker size="mini" is-range range-separator="至" start-placeholder="开始时间" end-placeholder="结束时间" placeholder="选择时间范围">
                                </el-time-picker>
                            </td>
                        </tr>
                        <tr>
                            <td>21</td>
                            <td>最近一期房屋交租凭证</td>
                            <td>未上传</td>
                            <td>
                                <el-radio-group v-model="radio2">
                                    <el-radio :label="3">是</el-radio>
                                    <el-radio :label="6">否</el-radio>
                                </el-radio-group>
                            </td>
                        </tr>
                        <tr>
                            <td>22</td>
                            <td>凭证日期</td>
                            <td></td>
                            <td>
                                <el-input size="mini"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>23</td>
                            <td>租金与租约是否一致</td>
                            <td></td>
                            <td>
                                <el-radio-group v-model="radio2">
                                    <el-radio :label="3">是</el-radio>
                                    <el-radio :label="6">否</el-radio>
                                </el-radio-group>
                            </td>
                        </tr>
                        <tr>
                            <td>24</td>
                            <td>酒吧实景照片</td>
                            <td>{{dataDetail.barLivePhoto    ? '已上传' : '未上传' }}
                                <el-button v-if="dataDetail.barLivePhoto   " class="table-button" size="mini" type="primary">预览</el-button>
                            </td>
                            <td>
                                <el-radio-group v-model="radio2">
                                    <el-radio :label="3">是</el-radio>
                                    <el-radio :label="6">否</el-radio>
                                </el-radio-group>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </el-card>
            <el-card class="wrapper-option">
                <div slot="header">审核结果</div>
                <el-form ref="form" :model="form" label-width="140px" size="small">
                    <el-col :span="16">
                        <el-form-item label="审核结果">
                            <el-select v-model="form.name"></el-select>
                        </el-form-item>
                        <el-form-item label="授信额度">
                            <el-input v-model="form.name"></el-input>
                            <span>申请额度：{{dataDetail.offerMoney }}</span>
                        </el-form-item>
                        <el-form-item label="备注">
                            <el-input type="textarea" :rows="4" v-model="form.name"></el-input>
                        </el-form-item>
                        <el-form-item label="">
                            <el-button type="primary" style="width: 100%;" @click="submitApply">添加</el-button>
                        </el-form-item>
                    </el-col>
                </el-form>
            </el-card>
        </el-col>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                dialogVisible: false,
                radio2: 3,
                form: {

                },
                auditListCust:[{
                    auditContent: "string",
                    auditDesc: "string",
                    auditPro: "string",
                    auditRes: "string"
                },{
                    auditContent: "string",
                    auditDesc: "string",
                    auditPro: "string",
                    auditRes: "string"
                },{
                    auditContent: "string",
                    auditDesc: "string",
                    auditPro: "string",
                    auditRes: "string"
                },{
                    auditContent: "string",
                    auditDesc: "string",
                    auditPro: "string",
                    auditRes: "string"
                },{
                    auditContent: "string",
                    auditDesc: "string",
                    auditPro: "string",
                    auditRes: "string"
                },{
                    auditContent: "string",
                    auditDesc: "string",
                    auditPro: "string",
                    auditRes: "string"
                },{
                    auditContent: "string",
                    auditDesc: "string",
                    auditPro: "string",
                    auditRes: "string"
                },{
                    auditContent: "string",
                    auditDesc: "string",
                    auditPro: "string",
                    auditRes: "string"
                },{
                    auditContent: "string",
                    auditDesc: "string",
                    auditPro: "string",
                    auditRes: "string"
                },{
                    auditContent: "string",
                    auditDesc: "string",
                    auditPro: "string",
                    auditRes: "string"
                },{
                    auditContent: "string",
                    auditDesc: "string",
                    auditPro: "string",
                    auditRes: "string"
                },{
                    auditContent: "string",
                    auditDesc: "string",
                    auditPro: "string",
                    auditRes: "string"
                },{
                    auditContent: "string",
                    auditDesc: "string",
                    auditPro: "string",
                    auditRes: "string"
                },{
                    auditContent: "string",
                    auditDesc: "string",
                    auditPro: "string",
                    auditRes: "string"
                },{
                    auditContent: "string",
                    auditDesc: "string",
                    auditPro: "string",
                    auditRes: "string"
                },{
                    auditContent: "string",
                    auditDesc: "string",
                    auditPro: "string",
                    auditRes: "string"
                },{
                    auditContent: "string",
                    auditDesc: "string",
                    auditPro: "string",
                    auditRes: "string"
                },{
                    auditContent: "string",
                    auditDesc: "string",
                    auditPro: "string",
                    auditRes: "string"
                },{
                    auditContent: "string",
                    auditDesc: "string",
                    auditPro: "string",
                    auditRes: "string"
                },{
                    auditContent: "string",
                    auditDesc: "string",
                    auditPro: "string",
                    auditRes: "string"
                },{
                    auditContent: "string",
                    auditDesc: "string",
                    auditPro: "string",
                    auditRes: "string"
                },{
                    auditContent: "string",
                    auditDesc: "string",
                    auditPro: "string",
                    auditRes: "string"
                },{
                    auditContent: "string",
                    auditDesc: "string",
                    auditPro: "string",
                    auditRes: "string"
                },{
                    auditContent: "string",
                    auditDesc: "string",
                    auditPro: "string",
                    auditRes: "string"
                }],
                dataDetail:{},
                taskId: this.$route.query.taskId
            }
        },
        mounted() {
            this.getDetail();
        },
        methods: {
            async getDetail() {
                const data = await $http.initialDetailBefore({taskId:this.taskId})
                if(data.success){
                    this.dataDetail = data.datas;
                }
            },
            async submitApply(){
                this.$store.dispatch('delVisitedViews', this.$route)
                this.$router.replace({path:'preliminary'})
            }
        }
    }
</script>
<style lang="scss" scoped>
    #preliminaryApply {
        .table-button {
            float: none;
            margin-right: 0;
            margin-left: 20px;
        }
        .data-table{
            td:last-child{
                width: 360px;
            }
        }
    }
</style>
