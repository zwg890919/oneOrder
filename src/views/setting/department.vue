<template>
  <div>
    <el-card class="wrapper-option">
      <el-form ref="form" :model="form" label-width="100px" size="small">
        <el-row>
          <el-col :span="6">
            <el-form-item label="用户名称">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="7" :offset="1">
            <el-button style="margin-bottom: 15px;" size="small">查询</el-button>
            <el-button size="small">重置</el-button>
          </el-col>
        </el-row>
      </el-form>
    </el-card>
    <el-card class="wrapper-option">
      <div class="wrapper-button clearfix">
        <el-button type="primary" size="small" @click="addDep">新增</el-button>
        <el-button size="small" @click="modifyDep">修改</el-button>
        <el-button size="small">删除</el-button>
      </div>
      <el-table ref="multipleTable" :data="tableData3" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column prop="departmentId" label="部门编号" width="120"></el-table-column>
        <el-table-column prop="name" label="部门名称"></el-table-column>
        <el-table-column prop="parent" label="上级部门"></el-table-column>
        <el-table-column prop="manager" label="部门主管"></el-table-column>
        <el-table-column prop="remark" label="部门说明"></el-table-column>
        <el-table-column prop="status" label="状态" width="120"></el-table-column>
        <el-table-column prop="status" label="当前状态" width="120"></el-table-column>
      </el-table>
    </el-card>

    <el-dialog title="新建部门" :visible.sync="addVisible" width="560px">
      <el-form :model="form" label-width="80px" style='width: 400px; margin-left:30px;'>
        <el-form-item label="部门名称">
          <el-input v-model="form.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="上级部门">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="设置主管" v-show="editDepartment">
          <el-select v-model="form.manager" multiple filterable placeholder="请选择">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="是否启用">
          <el-radio-group v-model="form.resource">
            <el-radio label="启用"></el-radio>
            <el-radio label="停用"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="备注">
          <el-input type="textarea" v-model="form.desc"></el-input>
        </el-form-item>
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
          departmentId: '1234',
          name: '陈奕迅',
          parent: '技术部',
          manager: '测试',
          remark: 'LinLinLin',
          status: '当前状态'
        }],
        multipleSelection: [],
        editDepartment: false,
        addVisible: false,
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
      }
    },
    methods: {
      modifyDep(){
        this.editDepartment = true
        this.addVisible = true;
      },
      addDep() {
        this.editDepartment = false
        this.addVisible = true;
      },
      handleSelectionChange(val) {
        this.multipleSelection.push(val);
      },
    }
  }
</script>
