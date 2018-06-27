<template>
  <div>
    <el-card class="wrapper-option">
      <div class="wrapper-button clearfix">
        <el-button type="primary" size="small" @click="addRole">新增</el-button>
        <el-button size="small">删除</el-button>
        <div class="fr">
          <el-input v-model="form.value" style="width:220px;float:left;margin-right:15px;"></el-input>
          <el-button>搜索</el-button>
        </div>
      </div>
      <el-table ref="multipleTable" :data="tableData3" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column prop="userID" label="角色编号" width="150"></el-table-column>
        <el-table-column prop="name" label="角色名称" width="180"></el-table-column>
        <el-table-column prop="remark" label="角色说明"></el-table-column>
        <el-table-column prop="status" label="操作" width="180" align="center">
          <template slot-scope="scope">
            <el-button size="mini" @click="changeAccredit">授权</el-button>
            <el-button size="mini" @click="modifyRole(scope.$index, scope.row)">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <!-- 新建修改角色 -->
    <el-dialog :title="editVisible?'修改角色':'新建角色'" :visible.sync="addVisible" width="550px">
      <el-form :model="form" label-width="80px" style='width: 400px; margin-left:30px;'>
        <el-form-item label="角色名称">
          <el-input v-model="form.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="角色说明">
          <el-input type="textarea" v-model="form.desc"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="addVisible = false">取 消</el-button>
        <el-button type="primary" @click="addVisible = false">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 设置角色权限 -->
    <el-dialog title="设置角色权限" :visible.sync="accreditVisible" class="accredit-dialog" top="7vh">
      <el-scrollbar class="accredit-body" wrapClass="scrollbar-wrapper">
        <el-tree ref="authTree" :data="data2" show-checkbox node-key="id" default-expand-all :default-checked-keys="[5]" :props="defaultProps">
        </el-tree>
      </el-scrollbar>
      <div slot="footer" class="dialog-footer">
        <el-button @click="accreditVisible = false">取 消</el-button>
        <el-button type="primary" @click="showChange">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        data2: [
          {
            id: 1,
            label: '一级 1',
            children: [{
              id: 4,
              label: '二级 1-1',
              children: [{
                id: 9,
                label: '三级 1-1-1'
              }, {
                id: 10,
                label: '三级 1-1-2'
              }]
            }]
          }, {
            id: 2,
            label: '一级 2',
            children: [{
              id: 5,
              label: '二级 2-1'
            }, {
              id: 6,
              label: '二级 2-2'
            }]
          }, {
            id: 3,
            label: '一级 3',
            children: [{
              id: 7,
              label: '二级 3-1'
            }, {
              id: 8,
              label: '二级 3-2'
            }]
          }
        ],
        defaultProps: {
          children: 'children',
          label: 'label'
        },
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
        addVisible: false,
        editVisible: false,
        accreditVisible: false,
        userRoles: []
      }
    },
    methods: {
      addRole() {
        this.editVisible = false;
        this.addVisible = true;
      },
      modifyRole(index, row) {
        this.editVisible = true;
        this.addVisible = true;
      },
      changeAccredit() {
        this.userRoles = []
        this.accreditVisible = true;
      },
      handleSelectionChange(val) {
        this.multipleSelection.push(val);
      },
      showChange() {
        // this.userRoles.push.apply(this.$refs.authTree.getCheckedKeys(),this.$refs.authTree.getHalfCheckedKeys())
        this.userRoles = [...this.$refs.authTree.getCheckedKeys(),...this.$refs.authTree.getHalfCheckedKeys()]
        console.log(this.userRoles)
      }
    }
  }
</script>

<style lang="scss">
  .accredit-dialog {
      .el-dialog {
          height: 600px;
      }
      .accredit-body {
          height: 410px;
      }
  }
</style>
