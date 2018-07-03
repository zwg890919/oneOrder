<template>
	<div>
    <el-card class="box-card">
	    <el-breadcrumb separator-class="el-icon-arrow-right">
			  	<el-breadcrumb-item>融资申请管理</el-breadcrumb-item>
			  	<el-breadcrumb-item>融资申请详情</el-breadcrumb-item>
			</el-breadcrumb>
		</el-card>
		<el-col :span="12">
			<el-card class="wrapper-option">
				<div slot="header">借款基本信息</div>
				<table class="infoTable" cellspacing="0" cellpadding="0" border="0">
					<tbody>
            <tr>
              <td>融资申请编号</td>
              <td>FD00000001</td>
            </tr>
            <tr>
              <td>客户名称</td>
              <td>北京海淀区零度酒吧</td>
            </tr>
            <tr>
              <td>借款主体证件号码</td>
              <td>社会统一信用代码</td>
            </tr>
            <tr>
              <td>联系人手机号码</td>
              <td>18695872813</td>
            </tr>
            <tr>
              <td>借款主体编号</td>
              <td>JK_18695872813<el-button class="table-button"  size="mini" type="primary">查看详情</el-button></td>
            </tr>
            <tr>
              <td>渠道方</td>
              <td></td>
            </tr>
            <tr>
              <td>渠道码</td>
              <td></td>
            </tr>
            <tr>
              <td>业务员姓名</td>
              <td></td>
            </tr>
            <tr>
              <td>业务员手机号码</td>
              <td></td>
            </tr>
            <tr>
              <td>业务员编号</td>
              <td><el-button class="table-button"  size="mini" type="primary">查看详情</el-button></td>
            </tr>
            <tr>
              <td>产品名称</td>
              <td></td>
            </tr>
            <tr>
              <td>产品编号</td>
              <td><el-button class="table-button"  size="mini" type="primary">查看详情</el-button></td>
            </tr>
            <tr>
              <td>产品方简称</td>
              <td></td>
            </tr>
            <tr>
              <td>产品状态</td>
              <td></td>
            </tr>
            <tr>
              <td>进件时间</td>
              <td></td>
            </tr>
            <tr>
              <td>申请金额（元）</td>
              <td></td>
            </tr>
            <tr>
              <td>申请期限（月）</td>
              <td></td>
            </tr>
            <tr>
              <td>借款申请状态</td>
              <td></td>
            </tr>
            <tr>
              <td>放款状态</td>
              <td></td>
            </tr>
            <tr>
              <td>放款时间</td>
              <td></td>
            </tr>
			    </tbody>
			  </table>
			</el-card>
			<el-card class="wrapper-option">
				<div slot="header">借款申请表信息-线下面签</div>
				<table class="infoTable" cellspacing="0" cellpadding="0" border="0">
					<tbody>
            <tr>
              <td>屏幕采购单据</td>
              <td>已上传<el-button class="table-button"  size="mini" type="primary">预览</el-button></td>
            </tr>
            <tr>
              <td>采购厂家</td>
              <td></td>
            </tr>
            <tr>
              <td>产品规格</td>
              <td></td>
            </tr>
            <tr>
              <td>型号</td>
              <td></td>
            </tr>
            <tr>
              <td>LED显示器编号</td>
              <td></td>
            </tr>
            <tr>
              <td>厂家报价</td>
              <td></td>
            </tr>
            <tr>
              <td>投放面积</td>
              <td></td>
            </tr>
            <tr>
              <td>屏幕全价</td>
              <td></td>
            </tr>
            <tr>
              <td>屏幕首付款收据</td>
              <td><el-button class="table-button"  size="mini" type="primary">预览</el-button></td>
            </tr>
            <tr>
              <td>MP与酒吧双方协议</td>
              <td><el-button class="table-button"  size="mini" type="primary">预览</el-button></td>
            </tr>
            <tr>
              <td>三方居间服务协议</td>
              <td><el-button class="table-button"  size="mini" type="primary">预览</el-button></td>
            </tr>
            <tr>
              <td>酒吧实际控制人担保函</td>
              <td><el-button class="table-button"  size="mini" type="primary">预览</el-button></td>
            </tr>
            <tr>
              <td>酒吧实际控制人身份证正面照</td>
              <td><el-button class="table-button"  size="mini" type="primary">预览</el-button></td>
            </tr>
            <tr>
              <td>酒吧实际控制人身份证反面照</td>
              <td><el-button class="table-button"  size="mini" type="primary">预览</el-button></td>
            </tr>
            <tr>
              <td>实际控制人姓名</td>
              <td></td>
            </tr>
            <tr>
              <td>实际控制人身份号</td>
              <td></td>
            </tr>
            <tr>
              <td>有效期限</td>
              <td></td>
            </tr>
					</tbody>
				</table>
			</el-card>
      <el-card class="wrapper-option">
				<div slot="header">借款申请-审核放款</div>
				<table class="infoTable" cellspacing="0" cellpadding="0" border="0">
					<tbody>
            <tr>
              <td>放款日期</td>
              <td></td>
            </tr>
            <tr>
              <td>放款金额（元）</td>
              <td></td>
            </tr>
            <tr>
              <td>放款账户</td>
              <td></td>
            </tr>
            <tr>
              <td>是否待收代付</td>
              <td></td>
            </tr>
            <tr>
              <td>走易单佣金结算日期</td>
              <td></td>
            </tr>
            <tr>
              <td>走易单佣金结算金额（元）</td>
              <td></td>
            </tr>
					</tbody>
				</table>
      </el-card>
      <el-card class="wrapper-option">
				<div slot="header">借款申请-贷后跟踪</div>
        <div class="wrapper-info">
          状态：已提交
        </div>
        <div class="wrapper-info">
          备注：沟通时间，未如期安装原因
        </div>
        <div class="wrapper-info">
          备注：审核不通过，不予通过
        </div>
				<table class="infoTable" cellspacing="0" cellpadding="0" border="0">
					<tbody>
            <tr>
              <td>安装照片</td>
              <td>已上传<el-button class="table-button"  size="mini" type="primary">预览</el-button></td>
            </tr>
            <tr>
              <td>上传日期</td>
              <td></td>
            </tr>
					</tbody>
				</table>
      </el-card>
		</el-col>
		<el-col :span="12">
			<el-card class="wrapper-option">
				<div slot="header">借款申请表信息-进件</div>
        <div class="wrapper-info">
          进件状态：审核不通过
        </div>
        <div class="wrapper-info">
          是否初次提交：是
        </div>
        <div class="wrapper-info">
          备注：审核不通过，不予通过
        </div>
				<table class="infoTable" cellspacing="0" cellpadding="0" border="0">
					<tbody>
            <tr>
              <td>客户名称</td>
              <td></td>
            </tr>
            <tr>
              <td>客户简称</td>
              <td></td>
            </tr>
            <tr>
              <td>营业地址</td>
              <td></td>
            </tr>
            <tr>
              <td>联系人姓名</td>
              <td></td>
            </tr>
            <tr>
              <td>联系人手机号码</td>
              <td></td>
            </tr>
            <tr>
              <td>联系人与借款主体的关系</td>
              <td></td>
            </tr>
            <tr>
              <td>酒吧性质</td>
              <td></td>
            </tr>
            <tr>
              <td>酒吧MP账号</td>
              <td></td>
            </tr>
            <tr>
              <td>同类型酒吧MP账号一</td>
              <td></td>
            </tr>
            <tr>
              <td>同类型酒吧MP账号二</td>
              <td></td>
            </tr>
            <tr>
              <td>同类型酒吧MP账号三</td>
              <td></td>
            </tr>
            <tr>
              <td>实际经营年限</td>
              <td>15</td>
            </tr>
            <tr>
              <td>营业面积</td>
              <td></td>
            </tr>
            <tr>
              <td>酒吧座位数</td>
              <td></td>
            </tr>
            <tr>
              <td>日均人流量</td>
              <td></td>
            </tr>
            <tr>
              <td>客单价</td>
              <td></td>
            </tr>
            <tr>
              <td>上座率</td>
              <td></td>
            </tr>
            <tr>
              <td>翻台率</td>
              <td></td>
            </tr>
            <tr>
              <td>年销售额</td>
              <td></td>
            </tr>
            <tr>
              <td>资产总额</td>
              <td></td>
            </tr>
            <tr>
              <td>负债总额</td>
              <td></td>
            </tr>
            <tr>
              <td>营业执照照片</td>
              <td>已上传<el-button class="table-button"  size="mini" type="primary">查看详情</el-button></td>
            </tr>
            <tr>
              <td>名称</td>
              <td></td>
            </tr>
            <tr>
              <td>类型</td>
              <td></td>
            </tr>
            <tr>
              <td>住所</td>
              <td></td>
            </tr>
            <tr>
              <td>法定代表人</td>
              <td></td>
            </tr>
            <tr>
              <td>注册资本</td>
              <td></td>
            </tr>
            <tr>
              <td>成立日期</td>
              <td></td>
            </tr>
            <tr>
              <td>营业期限</td>
              <td></td>
            </tr>
            <tr>
              <td>统一社会信用代码</td>
              <td></td>
            </tr>
            <tr>
              <td>法人加盖公章的身份证正面照片</td>
              <td>已上传<el-button class="table-button"  size="mini" type="primary">预览</el-button></td>
            </tr>
            <tr>
              <td>法人加盖公章的身份证反面照片</td>
              <td>已上传<el-button class="table-button"  size="mini" type="primary">预览</el-button></td>
            </tr>
            <tr>
              <td>法人姓名</td>
              <td></td>
            </tr>
            <tr>
              <td>法人身份证号</td>
              <td></td>
            </tr>
            <tr>
              <td>有效期限</td>
              <td></td>
            </tr>
            <tr>
              <td>消防许可证</td>
              <td>已上传<el-button class="table-button"  size="mini" type="primary">预览</el-button></td>
            </tr>
            <tr>
              <td>特殊行业经营许可证</td>
              <td>已上传<el-button class="table-button"  size="mini" type="primary">预览</el-button></td>
            </tr>
            <tr>
              <td>房屋租赁合同</td>
              <td>已上传<el-button class="table-button"  size="mini" type="primary">预览</el-button></td>
            </tr>
            <tr>
              <td>是否为酒吧经营地址租赁合同</td>
              <td></td>
            </tr>
            <tr>
              <td>有效期限</td>
              <td></td>
            </tr>
            <tr>
              <td>房屋最近一期交租凭证</td>
              <td>已上传<el-button class="table-button"  size="mini" type="primary">预览</el-button></td>
            </tr>
            <tr>
              <td>凭证日期</td>
              <td></td>
            </tr>
            <tr>
              <td>租金与租约是否一致</td>
              <td></td>
            </tr>
            <tr>
              <td>酒吧实景照片</td>
              <td>已上传<el-button class="table-button"  size="mini" type="primary">预览</el-button></td>
            </tr>
	        </tbody>
	      </table>
	    </el-card>
      <el-card class="wrapper-option">
				<div slot="header">还款跟踪</div>
				<table class="infoTable" cellspacing="0" cellpadding="0" border="0">
					<tbody>
            <tr>
              <td>MP账号</td>
              <td>零度酒吧</td>
            </tr>
            <tr>
              <td>还款状态</td>
              <td></td>
            </tr>
            <tr>
              <td>MP账户余额（元）</td>
              <td></td>
            </tr>
            <tr>
              <td>MP收益余额（元）</td>
              <td></td>
            </tr>
            <tr>
              <td>累计还款金额（元）</td>
              <td></td>
            </tr>
            <tr>
              <td>MP账户余额累计还款金额(元)</td>
              <td></td>
            </tr>
            <tr>
              <td>MP收益累计还款金额（元）</td>
              <td></td>
            </tr>
            <tr>
              <td>是否提前还款</td>
              <td></td>
            </tr>
					</tbody>
				</table>
        <table class="infoTable nor-table" cellspacing="0" cellpadding="0" border="0">
					<tbody>
            <tr>
              <td>期次</td>
              <td>还款日期</td>
              <td>应还金额</td>
              <td>还款状态</td>
              <td>实际还款金额</td>
              <td>MP账户余额还款</td>
              <td>MP收益还款</td>
              <td>实际还款日期</td>
            </tr>
            <tr>
              <td>第一期</td>
              <td>2018-09-18</td>
              <td>20,000.00</td>
              <td>待还款</td>
              <td>35,000.00</td>
              <td></td>
              <td></td>
              <td>2018-09-18</td>
            </tr>
					</tbody>
        </table>
      </el-card>
		</el-col>
    <el-dialog
		  :visible.sync="dialogVisible"
      title="修改渠道"
		  width="500px">
		  <el-form :model="form" label-width="100px">
		    <el-form-item label="修改用户">
		      <span>范冰冰</span>
		    </el-form-item>
		    <el-form-item label="原渠道">
		      <span>西财</span>
		    </el-form-item>
        <el-form-item label="新渠道">
		      <el-select></el-select>
		    </el-form-item>
		  </el-form>
		  <span slot="footer" class="dialog-footer">
		    <el-button @click="dialogVisible = false">取消渠道关系</el-button>
		    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
		  </span>
		</el-dialog>
	</div>
</template>
<script>
  export default{
    data(){
      return {
        form:{

        },
        dialogVisible:false
      }
    },
    methods:{

    }
  }
</script>