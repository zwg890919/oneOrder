<template>
  <div>
    <div class="wrapper-nav">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item><i class="el-icon-menu menuicon"></i> 工作台</el-breadcrumb-item>
        <el-breadcrumb-item>初审任务列表</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-card class="wrapper-option">
      <el-form ref="form" :model="form" label-width="100px" size="small">
        <el-col :span="21">
          <el-row>
            <el-col :span="6">
              <el-form-item label="借款主体名称">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="借款主体编号">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="所在省份">
                <el-select v-model="form.region" placeholder="请选择省份">
                  <el-option label="浙江省" value="shanghai"></el-option>
                  <el-option label="安徽省" value="beijing"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="所在城市">
                <el-select v-model="form.region" placeholder="请选择城市">
                  <el-option label="绍兴市" value="shanghai"></el-option>
                  <el-option label="杭州市" value="beijing"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="6">
              <el-form-item label="借款申请编号">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="业务员名称">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="业务员编号">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="业务员手机">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="40">
            <el-col :span="12">
              <el-form-item label="进件时间">
                <el-date-picker v-model="value6" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
                </el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="任务截止时间">
                <el-date-picker v-model="value6" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
                </el-date-picker>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="6">
              <el-form-item label="产品名称">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="2" :offset="1">
          <el-col>
            <el-button style="margin-bottom: 15px;" size="small">查询</el-button>
          </el-col>
          <el-col>
            <el-button size="small">重置</el-button>
          </el-col>
        </el-col>
      </el-form>
    </el-card>
    <el-card class="wrapper-option">
      <el-tabs type="card">
        <el-tab-pane label="待处理">
          <el-table ref="multipleTable" :data="tableData3" :span-method="objectSpanMethod" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
            <el-table-column label="序号" type="index">
            </el-table-column>
            <el-table-column label="初审订单编号" width="150" prop="applyCode">
            </el-table-column>
            <el-table-column label="融资申请编号" width="180" prop="productName">
            </el-table-column>
            <el-table-column label="产品名称" width="150" prop="applyTime">
            </el-table-column>
            <el-table-column label="任务接收时间" width="150" prop="passTime">
            </el-table-column>
            <el-table-column label="任务截止时间" width="120" prop="limit">
            </el-table-column>
            <el-table-column label="累计时长" width="120" prop="duetime">
            </el-table-column>     
            <el-table-column label="操作" width="300" align="center">
                <template slot-scope="scope">
                    <el-button type="primary" size="mini">处理</el-button>
                </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="已处理">
          <el-table ref="multipleTable" :data="tableData3" :span-method="objectSpanMethod" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
            <el-table-column label="序号" type="index">
            </el-table-column>
            <el-table-column label="初审订单编号" width="150" prop="applyCode">
            </el-table-column>
            <el-table-column label="融资申请编号" width="180" prop="productName">
            </el-table-column>
            <el-table-column label="产品名称" width="150" prop="applyTime">
            </el-table-column>
            <el-table-column label="初审结果" width="150" prop="passTime">
            </el-table-column>
            <el-table-column label="审核人员" width="120" prop="limit">
            </el-table-column>
            <el-table-column label="累计时长" width="120" prop="duetime">
            </el-table-column>   
            <el-table-column label="初审评价" width="120" prop="duetime">
            </el-table-column>               
            <el-table-column label="操作" width="300" align="center">
                <template slot-scope="scope">
                    <el-button type="primary" size="mini">修改</el-button>
                </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
      </el-tabs>

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
        value6: '',
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
          applyCode: 'RZ-18695872813',
          productName: '中信银行',
          status: '已开启'
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
