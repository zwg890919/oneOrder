<template>
  <div>
    <div class="wrapper-nav">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item><i class="el-icon-menu menuicon"></i> 产品管理</el-breadcrumb-item>
        <el-breadcrumb-item>产品列表</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-card class="wrapper-option">
      <el-form ref="form" :model="form" label-width="100px" size="small">
        <el-col :span="21">
          <el-row>
            <el-col :span="6">
              <el-form-item label="产品名称">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="产品方简称">
                <el-select v-model="form.region" placeholder="请选择产品类型">
                  <el-option label="房抵贷" value="shanghai"></el-option>
                  <el-option label="公积金贷" value="beijing"></el-option>
                </el-select>
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
              <el-form-item label="产品状态">
                <el-select v-model="form.region">
                  <el-option label="全部" value="shanghai"></el-option>
                  <el-option label="是" value="beijing"></el-option>
                  <el-option label="否" value="beijing"></el-option>
                </el-select>
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
      <div class="wrapper-button clearfix">
        <el-button @click="addProduct" type="primary" size="small">新建产品</el-button>
        <el-button @click="releaseProduct" size="small">发布</el-button>
        <el-button size="small">下架</el-button>
      </div>
      <el-table ref="multipleTable" :data="tableData3" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="55">
        </el-table-column>
        <el-table-column label="产品名称" width="120">
          <template slot-scope="scope">
            <a class="link-color" @click="goProduct(scope.$index, scope.row)">{{ scope.row.product }}</a>
          </template>
        </el-table-column>
        <el-table-column prop="name" label="产品编号" width="150">
        </el-table-column>
        <el-table-column prop="address" label="产品方简称" width="110" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="city" label="城市" width="70" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="province" label="省份" width="70" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="fianceType" label="融资类型" width="80" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="productType" label="产品类型" width="80" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="lowAmt" label="最低申请金额" width="120" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="highAmt" label="最高申请金额" width="120" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="lowAndHigh" label="借款期限区间" width="110" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="ljsq" label="累计申请笔数" width="120" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="shz" label="审核中笔数" width="120" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="ljfk" label="累计放款笔数" width="120" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="productStatus" label="产品状态" width="80" show-overflow-tooltip>
        </el-table-column>
        <el-table-column label="操作" show-overflow-tooltip>
          <template slot-scope="scope">
            <el-button type="text" size="small">拷贝</el-button>
            <el-button type="text" size="small">暂停</el-button>
            <el-button type="text" size="small">修改</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <el-dialog :visible.sync="dialogVisible" width="400px">
      <el-form :model="form">
        <el-form-item label="发布时间">
          <el-date-picker v-model="value1" type="date" placeholder="选择日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="下架时间">
          <el-date-picker type="date" placeholder="选择日期">
          </el-date-picker>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        value1: '',
        value2: '',
        dialogVisible: false,
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
          product: '颀财房抵贷-01',
          name: 'CP201745121452',
          address: '颀财',
          city: '杭州',
          province: '浙江',
          fianceType: '抵押',
          productType: '房抵贷',
          lowAmt: '8,000.00',
          highAmt: '20,000,000.00',
          lowAndHigh: '24-36月',
          ljsq: '200',
          shz: '50',
          ljfk: '100',
          productStatus: '发布中',
          operate: ''
        }],
        multipleSelection: []
      }
    },
    methods: {
      addProduct() {
        this.$router.push({
          path: '/product/addProduct'
        });
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      releaseProduct() {
        if (this.multipleSelection.length > 0) {
          this.dialogVisible = true;
        } else {
          this.$message({
            message: '请至少选择一个产品',
            type: 'warning'
          });
        }
      },
      removeProduct() {
        if (this.multipleSelection.length > 0) {
        } else {
          this.$message({
            message: '请至少选择一个产品',
            type: 'warning'
          });
        }
      },
      goProduct(index, row) {
        console.log(row);
        this.$router.push({ name: 'product.productInfo', params: { userId: 1223 } })
      }
    }
  }
</script>
