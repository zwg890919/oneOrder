<template>
	<div>
    <div class="wrapper-nav">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item><i class="el-icon-menu menuicon"></i> 工作台</el-breadcrumb-item>
        <el-breadcrumb-item>贷后详情</el-breadcrumb-item>
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
              <td>RZ-18695872813</td>
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
              <td>下发时间</td>
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
              <td>操作员</td>
              <td></td>
            </tr>
            <tr>
              <td>审核结果</td>
              <td></td>
            </tr>
            <tr>
              <td>评价</td>
              <td></td>
            </tr>
			    </tbody>
			  </table>
			</el-card>
		</el-col>
		<el-col :span="12">
            <el-card class="wrapper-option">
				<div slot="header">复审详情</div>
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
              <td>屏幕安装处照片</td>
              <td>已上传<el-button class="table-button"  size="mini" type="primary">预览</el-button></td>
              <td>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>前台照片</td>
              <td>已上传<el-button class="table-button"  size="mini" type="primary">预览</el-button></td>
              <td>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>大堂照片</td>
              <td>已上传<el-button class="table-button"  size="mini" type="primary">预览</el-button></td>
              <td>
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>吧台照片</td>
              <td>已上传<el-button class="table-button"  size="mini" type="primary">预览</el-button></td>
              <td>
              </td>
            </tr>
            <tr>
              <td>5</td>
              <td>其他照片</td>
              <td>已上传<el-button class="table-button"  size="mini" type="primary">预览</el-button></td>
              <td>
              </td>
            </tr>
            <tr>
              <td>6</td>
              <td>上传时间</td>
              <td></td>
              <td>
              </td>
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