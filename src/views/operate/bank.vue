<template>
  <div>
    <div class="wrapper-nav">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item><i class="el-icon-menu menuicon"></i> 运营管理</el-breadcrumb-item>
        <el-breadcrumb-item>银行信息管理</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-card class="wrapper-option">
      <div class="wrapper-button clearfix">
        <el-button type="primary" size="small" @click="showAddBank">新增</el-button>
        <el-button size="small" @click="addBank">修改</el-button>
        <el-button size="small" @removeBank="removeBank">删除</el-button>
        <div class="fr">
          <el-input v-model="form.value" placeholder="请输入银行名称" style="width:220px;float:left;margin-right:15px;"></el-input>
          <el-button>搜索</el-button>
        </div>
      </div>
      <el-table ref="multipleTable" :data="tableData3" :span-method="objectSpanMethod" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="55">
        </el-table-column>
        <el-table-column label="编号" prop="bankId">
        </el-table-column>
        <el-table-column label="银行" prop="bankName">
        </el-table-column>
        <el-table-column label="状态" prop="status" >
        </el-table-column>
      </el-table>
    </el-card>
    <el-dialog :visible.sync="addBank" width="400px">
      <el-form :model="form" label-width="80px" size="small">
        <el-form-item label="渠道名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="渠道参数">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addBank = false">取 消</el-button>
        <el-button type="primary" @click="addBank = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        addBank: false,
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
          bankId:'123',
          bankName:'中信银行',
          status:'已开启'
        }],
        multipleSelection: []
      }
    },
    methods: {
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      showAddBank() {
        this.addBank = true
      },
      removeBank() {
        this.$message({
          message: '删除银行',
          type: 'warning'
        });
      },
      objectSpanMethod({ row, column, rowIndex, columnIndex }) {
        if (columnIndex === 0) {
          if (rowIndex % 2 === 0) {
            return {
              rowspan: 2,
              colspan: 1
            };
          } else {
            return {
              rowspan: 0,
              colspan: 0
            };
          }
        }
      }
    }
  }
</script>
