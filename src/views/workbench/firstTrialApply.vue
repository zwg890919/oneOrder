<template>
	<div>
    <div class="wrapper-nav">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item><i class="el-icon-menu menuicon"></i> 工作台</el-breadcrumb-item>
        <el-breadcrumb-item>操作初审</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
		<el-col :span="12">
			<el-card class="wrapper-option">
				<div slot="header">基本信息</div>
				<table class="infoTable" cellspacing="0" cellpadding="0" border="0">
					<tbody>
            <tr>
              <td>借款申请编号</td>
              <td>DH_18695872813</td>
            </tr>
            <tr>
              <td>借款主体名称</td>
              <td></td>
            </tr>
            <tr>
              <td>社会统一信用代码</td>
              <td></td>
            </tr>
            <tr>
              <td>联系人手机号码</td>
              <td></td>
            </tr>
            <tr>
              <td>产品名称</td>
              <td></td>
            </tr>
            <tr>
              <td>代理商</td>
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
              <td>申请时间</td>
              <td></td>
            </tr>
			    </tbody>
			  </table>
			</el-card>
      <el-card class="wrapper-option">
				<div slot="header">初评结果</div>
        <el-form ref="form" :model="form" label-width="140px" size="small">
          <el-col :span="16">
            <el-form-item label="审核结果">
                <el-select v-model="form.name"></el-select>
            </el-form-item>
            <el-form-item label="备注">
                <el-input type="textarea" :rows="4" v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="">
              <el-button type="primary" style="width: 100%;">添加</el-button>
            </el-form-item>
          </el-col>
        </el-form>
      </el-card>
		</el-col>
		<el-col :span="12">
            <el-card class="wrapper-option">
				<div slot="header">申请基本信息</div>
				<table class="infoTable nor-table" cellspacing="0" cellpadding="0" border="0">
					<tbody>
            <tr>
              <td>序号</td>
              <td>审核项目</td>
              <td>审核内容</td>
              <td>审核结果</td>
            </tr>
            <tr>
              <td>1</td>
              <td>屏幕采购单</td>
              <td>已上传<el-button class="table-button"  size="mini" type="primary">预览</el-button></td>
              <td>
                <el-radio-group v-model="radio2">
                  <el-radio :label="3">是</el-radio>
                  <el-radio :label="6">否</el-radio>
                </el-radio-group>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>采购厂家</td>
              <td>王珞丹</td>
              <td><el-input size="mini"></el-input></td>
            </tr>
            <tr>
              <td>3</td>
              <td>规格</td>
              <td></td>
              <td><el-input size="mini"></el-input></td>
            </tr>
            <tr>
              <td>4</td>
              <td>型号</td>
              <td></td>
              <td><el-input size="mini"></el-input></td>
            </tr>
            <tr>
              <td>5</td>
              <td>厂家报价</td>
              <td></td>
              <td><el-input size="mini"></el-input></td>
            </tr>
            <tr>
              <td>6</td>
              <td>投放面积</td>
              <td></td>
              <td>
                <el-input size="mini"></el-input>
              </td>
            </tr>
            <tr>
              <td>7</td>
              <td>屏幕金额（元）</td>
              <td>计算信用卡使用率=已使用额度/信用卡总额度</td>
              <td><el-input size="mini"></el-input></td>
            </tr>
            <tr>
              <td>8</td>
              <td>屏幕首付款收据</td>
              <td>已上传<el-button class="table-button"  size="mini" type="primary">预览</el-button></td>
              <td>
                <el-radio-group v-model="radio2">
                  <el-radio :label="3">是</el-radio>
                  <el-radio :label="6">否</el-radio>
                </el-radio-group>
              </td>
            </tr>
            <tr>
              <td>9</td>
              <td>首付金额</td>
              <td></td>
              <td><el-input size="mini"></el-input></td>
            </tr>
            <tr>
              <td>10</td>
              <td>首付占比</td>
              <td></td>
              <td><el-input size="mini"></el-input></td>
            </tr>
            <tr>
              <td>11</td>
              <td>MP与XX酒吧协议</td>
              <td>已上传<el-button class="table-button"  size="mini" type="primary">预览</el-button></td>
              <td>
                <el-radio-group v-model="radio2">
                  <el-radio :label="3">是</el-radio>
                  <el-radio :label="6">否</el-radio>
                </el-radio-group>
              </td>
            </tr>
            <tr>
              <td>12</td>
              <td>三方居间服务协议</td>
              <td>已上传<el-button class="table-button"  size="mini" type="primary">预览</el-button></td>
              <td>
                <el-radio-group v-model="radio2">
                  <el-radio :label="3">是</el-radio>
                  <el-radio :label="6">否</el-radio>
                </el-radio-group>
              </td>
            </tr>
            <tr>
              <td>13</td>
              <td>实际控制人担保函</td>
              <td>已上传<el-button class="table-button"  size="mini" type="primary">预览</el-button></td>
              <td>
                <el-radio-group v-model="radio2">
                  <el-radio :label="3">是</el-radio>
                  <el-radio :label="6">否</el-radio>
                </el-radio-group>
              </td>
            </tr>
            <tr>
              <td>14</td>
              <td>实际控制人身份证正面照照片</td>
              <td>已上传<el-button class="table-button"  size="mini" type="primary">预览</el-button></td>
              <td>
                <el-radio-group v-model="radio2">
                  <el-radio :label="3">是</el-radio>
                  <el-radio :label="6">否</el-radio>
                </el-radio-group>
              </td>
            </tr>
            <tr>
              <td>15</td>
              <td>实际控制人身份证反面照照片</td>
              <td>已上传<el-button class="table-button"  size="mini" type="primary">预览</el-button></td>
              <td>
                <el-radio-group v-model="radio2">
                  <el-radio :label="3">是</el-radio>
                  <el-radio :label="6">否</el-radio>
                </el-radio-group>
              </td>
            </tr>
            <tr>
              <td>16</td>
              <td>实际控制人姓名</td>
              <td></td>
              <td><el-input size="mini"></el-input></td>
            </tr>
            <tr>
              <td>17</td>
              <td>实际控制人身份证号码</td>
              <td></td>
              <td>
                <el-input size="mini"></el-input>
              </td>
            </tr>
            <tr>
              <td>18</td>
              <td>证件有效期</td>
              <td></td>
              <td><el-input size="mini"></el-input></td>
            </tr>
			    </tbody>
			  </table>
			</el-card>
		</el-col>
	</div>
</template>
<script>
  export default{
    data(){
      return {
        dialogVisible:false,
        radio2:3,
        form:{

        }
      }
    },
    methods:{

    }
  }
</script>