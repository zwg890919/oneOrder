<template>
	<div>
		<el-col :span="12">
			<el-card class="wrapper-option">
				<div slot="header">用户基本信息</div>
				<table class="infoTable" cellspacing="0" cellpadding="0" border="0">
					<tbody>
            <tr>
              <td>用户编号</td>
              <td>DJ_18695872813</td>
            </tr>
            <tr>
              <td>用户姓名</td>
              <td>古天乐</td>
            </tr>
            <tr>
              <td>手机号码</td>
              <td>18695872813</td>
            </tr>
            <tr>
              <td>身份证号</td>
              <td>410102198803190236</td>
            </tr>
            <tr>
              <td>性别</td>
              <td>男</td>
            </tr>
            <tr>
              <td>年龄</td>
              <td>29</td>
            </tr>
            <tr>
              <td>手机号码归属地</td>
              <td>河南省郑州市</td>
            </tr>
            <tr>
              <td>职业</td>
              <td></td>
            </tr>
            <tr>
              <td>电子邮箱</td>
              <td></td>
            </tr>
            <tr>
              <td>通讯地址</td>
              <td></td>
            </tr>
			    </tbody>
			  </table>
			</el-card>
      <el-card class="wrapper-option">
				<div slot="header">用户活跃数据</div>
				<table class="infoTable" cellspacing="0" cellpadding="0" border="0">
					<tbody>
            <tr>
              <td>用户类型</td>
              <td>个人</td>
            </tr>
            <tr>
              <td>注册时间</td>
              <td>2017-08-13 17:57:44</td>
            </tr>
            <tr>
              <td>注册来源</td>
              <td>走易单</td>
            </tr>
            <tr>
              <td>渠道</td>
              <td>颀财<el-button class="table-button"  size="mini" type="primary" @click="dialogVisible = true">修改</el-button></td>
            </tr>
            <tr>
              <td>注册方式</td>
              <td>后台创建</td>
            </tr>
            <tr>
              <td>版本</td>
              <td>1.5.0</td>
            </tr>
            <tr>
              <td>平台</td>
              <td>Android</td>
            </tr>
            <tr>
              <td>备注</td>
              <td></td>
            </tr>
            <tr>
              <td>最后登录时间</td>
              <td>2017-08-13 17:57:44</td>
            </tr>
            <tr>
              <td>最后进件时间</td>
              <td>2017-08-13 17:57:44</td>
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
              <td>总计</td>
              <td>180</td>
            </tr>
            <tr>
              <td>累计进件笔数（笔）</td>
              <td>180</td>
            </tr>
            <tr>
              <td>审核中笔数（笔）</td>
              <td>15</td>
            </tr>
            <tr>
              <td>已放款笔数（笔）</td>
              <td>200</td>
            </tr>
            <tr>
              <td>失败进件笔数（笔）</td>
              <td>10</td>
            </tr>
            <tr>
              <td>累计放款金额（元）</td>
              <td>10.00</td>
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
        dialogVisible:false,
        form:{
          
        }
      }
    },
    methods:{

    }
  }
</script>