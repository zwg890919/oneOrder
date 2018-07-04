<template>
	<div>
    <div class="wrapper-nav">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item><i class="el-icon-menu menuicon"></i> 工作台</el-breadcrumb-item>
        <el-breadcrumb-item>初审详情</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
		<el-col :span="12">
			<el-card class="wrapper-option">
				<div slot="header">基本信息</div>
				<table class="infoTable" cellspacing="0" cellpadding="0" border="0">
					<tbody>
            <tr>
              <td>初评订单编号</td>
              <td>DH_18695872813</td>
            </tr>
            <tr>
              <td>借款申请编号</td>
              <td>RZ-18695872813</td>
            </tr>
            <tr>
              <td>产品名称</td>
              <td>颀财-房抵贷（山东）</td>
            </tr>
            <tr>
              <td>任务接收时间</td>
              <td>2017-08-13 17:57:44</td>
            </tr>
			    </tbody>
			  </table>
        <table class="infoTable nor-table" cellspacing="0" cellpadding="0" border="0">
					<tbody>
            <tr>
              <td>序号</td>
              <td>时间</td>
              <td>操作人</td>
              <td>角色</td>
              <td>操作内容</td>
              <td>初审结果</td>
              <td>初审评价</td>
            </tr>
            <tr>
              <td>1</td>
              <td>2018/04/05 18:30:00</td>
              <td>管理员3</td>
              <td>平台管理员</td>
              <td>初审</td>
              <td>初审通过</td>
              <td></td>
            </tr>
					</tbody>
        </table>
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
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>采购厂家</td>
              <td>王珞丹</td>
              <td></td>
            <tr>
              <td>3</td>
              <td>规格</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>4</td>
              <td>型号</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>5</td>
              <td>厂家报价</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>6</td>
              <td>投放面积</td>
              <td></td>
              <td>
              </td>
            </tr>
            <tr>
              <td>7</td>
              <td>屏幕金额（元）</td>
              <td>计算信用卡使用率=已使用额度/信用卡总额度</td>
              <td></td>
            </tr>
            <tr>
              <td>8</td>
              <td>屏幕首付款收据</td>
              <td>已上传<el-button class="table-button"  size="mini" type="primary">预览</el-button></td>
              <td>
              </td>
            </tr>
            <tr>
              <td>9</td>
              <td>首付金额</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>10</td>
              <td>首付占比</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>11</td>
              <td>MP与XX酒吧协议</td>
              <td>已上传<el-button class="table-button"  size="mini" type="primary">预览</el-button></td>
              <td>
              </td>
            </tr>
            <tr>
              <td>12</td>
              <td>三方居间服务协议</td>
              <td>已上传<el-button class="table-button"  size="mini" type="primary">预览</el-button></td>
              <td>
              </td>
            </tr>
            <tr>
              <td>13</td>
              <td>实际控制人担保函</td>
              <td>已上传<el-button class="table-button"  size="mini" type="primary">预览</el-button></td>
              <td>
              </td>
            </tr>
            <tr>
              <td>14</td>
              <td>实际控制人身份证正面照照片</td>
              <td>已上传<el-button class="table-button"  size="mini" type="primary">预览</el-button></td>
              <td>
              </td>
            </tr>
            <tr>
              <td>15</td>
              <td>实际控制人身份证反面照照片</td>
              <td>已上传<el-button class="table-button"  size="mini" type="primary">预览</el-button></td>
              <td>
              </td>
            </tr>
            <tr>
              <td>16</td>
              <td>实际控制人姓名</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>17</td>
              <td>实际控制人身份证号码</td>
              <td></td>
              <td>
              </td>
            </tr>
            <tr>
              <td>18</td>
              <td>证件有效期</td>
              <td></td>
              <td></td>
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