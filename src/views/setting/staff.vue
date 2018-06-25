<template>
  <div>
    <el-card class="wrapper-option">
      <el-form ref="form" :model="form" label-width="100px" size="small">
        <el-col :span="21">
          <el-row>
            <el-col :span="6">
              <el-form-item label="用户名称">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="部门">
                <el-select v-model="form.region" placeholder="请选择产品类型">
                  <el-option label="房抵贷" value="shanghai"></el-option>
                  <el-option label="公积金贷" value="beijing"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="岗位">
                <el-select v-model="form.region" placeholder="请选择省份">
                  <el-option label="浙江省" value="shanghai"></el-option>
                  <el-option label="安徽省" value="beijing"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="角色">
                <el-select v-model="form.region" placeholder="请选择城市">
                  <el-option label="绍兴市" value="shanghai"></el-option>
                  <el-option label="杭州市" value="beijing"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="2" :offset="1">
          <el-button style="margin-bottom: 15px;" size="small">查询</el-button>
          <el-button size="small">重置</el-button>
        </el-col>
      </el-form>
    </el-card>
    <el-card class="wrapper-option">
      <div class="wrapper-button clearfix">
        <el-button type="primary" size="small" @click="addStaff">新增</el-button>
        <el-button size="small" @click="addStaff">修改</el-button>
        <el-button size="small">启用</el-button>
        <el-button size="small">停用</el-button>
        <el-button size="small">初始化密码</el-button>
      </div>
      <el-table ref="multipleTable" :data="tableData3" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column prop="userID" label="员工编号" width="100"></el-table-column>
        <el-table-column prop="name" label="员工名称" width="120"></el-table-column>
        <el-table-column prop="section" label="部门名称" width="120"></el-table-column>
        <el-table-column prop="station" label="岗位名称" width="120"></el-table-column>
        <el-table-column prop="role" label="角色名称" width="100"></el-table-column>
        <el-table-column prop="mobile" label="手机号码" width="120"></el-table-column>
        <el-table-column prop="customName" label="自定义用户名" width="150"></el-table-column>
        <el-table-column prop="remark" label="备注" width="150"></el-table-column>
        <el-table-column prop="status" label="当前状态"></el-table-column>
      </el-table>
    </el-card>

    <el-dialog title="新建员工" :visible.sync="addVisible">
      <el-form :model="form" label-width="80px" style='width: 570px; margin-left:30px;'>
        <el-row :gutter="25">
          <el-col :span="12">
            <el-form-item label="员工名称">
              <el-input v-model="form.name" auto-complete="off" ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="手机号码">
              <el-input v-model="form.name" auto-complete="off" ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="用户名">
              <el-input v-model="form.name" auto-complete="off" ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="部门">
              <el-select v-model="form.region" placeholder="请选择活动区域" style="width:100%">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="岗位">
              <el-select v-model="form.region" placeholder="请选择活动区域" style="width:100%" >
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="角色">
              <el-select v-model="form.region" placeholder="请选择活动区域" style="width:100%">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="是否启用">
              <el-radio-group v-model="form.resource">
                <el-radio label="启用"></el-radio>
                <el-radio label="停用"></el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="备注">
              <el-input type="textarea" v-model="form.desc"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="addVisible = false">取 消</el-button>
        <el-button type="primary" @click="addVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
  export default {
    data() {
      return {
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
          userID: '1234',
          name: '陈奕迅',
          section: '技术部',
          station: '测试',
          role: 'TEST003',
          mobile: '13964444190',
          customName: 'LinLinLin',
          remark: '',
          status: '当前状态'
        }],
        multipleSelection: [],
        addVisible: false
      }
    },
    methods: {
      addStaff() {
        this.addVisible = true;
      },
      handleSelectionChange(val) {
        this.multipleSelection.push(val);
      },
    }
  }
</script>
