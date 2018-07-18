<template>
    <div>
        <el-col :span="12">
            <el-card class="wrapper-option">
                <div slot="header">用户基本信息</div>
                <table class="infoTable" cellspacing="0" cellpadding="0" border="0">
                    <tbody>
                        <tr>
                            <td>用户编号</td>
                            <td>{{user.salesmanCode}}</td>
                        </tr>
                        <tr>
                            <td>用户姓名</td>
                            <td>{{user.salesmanName}}</td>
                        </tr>
                        <tr>
                            <td>手机号码</td>
                            <td>{{user.phoneNo}}</td>
                        </tr>
                        <tr>
                            <td>身份证号</td>
                            <td>{{user.idNo}}</td>
                        </tr>
                        <tr>
                            <td>性别</td>
                            <td>{{user.gender}}</td>
                        </tr>
                        <tr>
                            <td>年龄???</td>
                            <td>{{user.salesmanCode}}</td>
                        </tr>
                        <tr>
                            <td>手机号码归属地???</td>
                            <td>{{user.salesmanCode}}</td>
                        </tr>
                        <tr>
                            <td>职业</td>
                            <td>{{user.profession}}</td>
                        </tr>
                        <tr>
                            <td>电子邮箱</td>
                            <td>{{user.email}}</td>
                        </tr>
                        <tr>
                            <td>通讯地址</td>
                            <td>{{user.contactAddress}}</td>
                        </tr>
                    </tbody>
                </table>
            </el-card>
            <el-card class="wrapper-option">
                <div slot="header">用户活跃数据</div>
                <table class="infoTable" cellspacing="0" cellpadding="0" border="0">
                    <tbody>
                        <tr>
                            <td>用户类型???</td>
                            <td>{{user.salesmanCode}}</td>
                        </tr>
                        <tr>
                            <td>注册时间</td>
                            <td>{{user.registerDate}}</td>
                        </tr>
                        <tr>
                            <td>注册来源???</td>
                            <td>{{user.salesmanCode}}</td>
                        </tr>
                        <tr>
                            <td>渠道</td>
                            <td>{{user.channelName}}
                                <el-button class="table-button" size="mini" type="primary" @click="dialogVisible = true">修改</el-button>
                            </td>
                        </tr>
                        <tr>
                            <td>注册方式???</td>
                            <td>{{user.salesmanCode}}</td>
                        </tr>
                        <tr>
                            <td>版本???</td>
                            <td>{{user.salesmanCode}}</td>
                        </tr>
                        <tr>
                            <td>平台???</td>
                            <td>{{user.salesmanCode}}</td>
                        </tr>
                        <tr>
                            <td>备注</td>
                            <td>{{user.memo}}</td>
                        </tr>
                        <tr>
                            <td>最后登录时间</td>
                            <td>{{user.lastLoginTime}}</td>
                        </tr>
                        <tr>
                            <td>最后进件时间</td>
                            <td>{{user.lastApplyLoanTime}}</td>
                        </tr>
                    </tbody>
                </table>
            </el-card>
        </el-col>
        <el-col :span="12">
            <el-card class="wrapper-option">
                <div slot="header">进件统计</div>
                <table class="infoTable" cellspacing="0" cellpadding="0" border="0">
                    <tbody>
                        <tr>
                            <td>总计???</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>累计进件笔数（笔）</td>
                            <td>{{user.sumLoanAppCount}}</td>
                        </tr>
                        <tr>
                            <td>审核中笔数（笔）</td>
                            <td>{{user.sumInProgressCount}}</td>
                        </tr>
                        <tr>
                            <td>已放款笔数（笔）</td>
                            <td>{{user.sumReleaseCount}}</td>
                        </tr>
                        <tr>
                            <td>失败进件笔数（笔）</td>
                            <td>{{user.sumFailLoanCount}}</td>
                        </tr>
                        <tr>
                            <td>累计放款金额（元）</td>
                            <td>{{user.sumReleaseAmount}}</td>
                        </tr>
                    </tbody>
                </table>
            </el-card>
        </el-col>
        <el-dialog :visible.sync="dialogVisible" title="修改渠道" width="500px">
            <el-form label-width="100px">
                <el-form-item label="修改用户">
                    <span>{{user.salesmanName}}</span>
                </el-form-item>
                <el-form-item label="原渠道">
                    <span>{{user.channelName}}</span>
                </el-form-item>
                <el-form-item label="新渠道">
                    <el-select v-model="channelId"></el-select>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="cancelChannel">取消渠道关系</el-button>
                <el-button type="primary" @click="updateChannel">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                channelId: '',
                dialogVisible: false,
                user: {},
            }
        },
        created() {
            this.getSalesman();
        },
        methods: {
            async cancelChannel() {
                const data = await $http.salesmanCancelchannel({
                    salesmanId: this.user.id,
                    channelId: this.user.channelId
                })
                if (data.success) {
                    this.dialogVisible = false;
                    this.$notify.success({
                        title: '提示',
                        message: '操作成功'
                    });
                }
            },
            async updateChannel() {
                const data = await $http.salesmanConfirmchannelupdate({
                    salesmanId: this.user.id,
                    channelId: this.user.channelId,
                    newChannelId: this.channelId
                })
                if (data.success) {
                    this.dialogVisible = false;
                    this.$notify.success({
                        title: '提示',
                        message: '操作成功'
                    });
                }
            },
            async getSalesman() {
                const data = await $http.salesmanBaseinfo({
                    salesmanId: this.$route.params.userId
                })
                if (data.success) {
                    this.user = data.datas;
                }
            },
        }
    }
</script>
