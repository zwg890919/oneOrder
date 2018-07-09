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
                <el-input v-model="form.productName"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="产品方简称">
                <el-select v-model="form.productOwnId" placeholder="请选择产品类型">
                  <el-option label="房抵贷" value="shanghai"></el-option>
                  <el-option label="公积金贷" value="beijing"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="产品状态">
                <el-select v-model="form.region">
                  <el-option label="全部" value="shanghai"></el-option>
                  <el-option label="是" value="beijing"></el-option>
                  <el-option label="否" value="beijing"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="产品类型">
                <el-select v-model="form.region">
                  <el-option label="全部" value="shanghai"></el-option>
                  <el-option label="是" value="beijing"></el-option>
                  <el-option label="否" value="beijing"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="6">
              <el-form-item label="融资类型">
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
        <el-button @click="releaseProduct" size="small">发布产品</el-button>
        <el-button size="small">下架产品</el-button>
        <el-button size="small">暂停产品</el-button>
      </div>
      <el-table ref="multipleTable" :data="proList" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="55">
        </el-table-column>
        <el-table-column label="产品名称" width="120">
          <template slot-scope="scope">
            <a class="link-color" @click="goProduct(scope.$index, scope.row)">{{ scope.row.productName }}</a>
          </template>
        </el-table-column>
        <el-table-column prop="productCode" label="产品编号" width="150">
        </el-table-column>
        <el-table-column prop="aliasName" label="产品方简称" width="110" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="financeType" label="融资类型" width="80" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="productType" label="产品类型" width="80" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="minAlppyTime" label="最低申请金额" width="120" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="maxApplyTime" label="最高申请金额" width="120" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="lowAndHigh" label="借款期限区间???" width="110" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="ljsq" label="累计申请笔数???" width="120" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="shz0" label="审核中笔数???" width="120" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="ljfk" label="累计放款笔数???" width="120" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="status" label="产品状态" width="80" show-overflow-tooltip>
        </el-table-column>
        <el-table-column label="操作" show-overflow-tooltip>
          <template slot-scope="scope">
            <el-button type="text" size="small">拷贝</el-button>
            <el-button type="text" size="small">修改</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <el-dialog :visible.sync="dialogVisible" width="400px">
      <el-form :model="form">
        <el-form-item label="生效时间">
          <el-date-picker v-model="value1" type="date" placeholder="选择日期">
          </el-date-picker>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false">发布产品</el-button>
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
          productName:'',
          productOwnId:'',
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
        multipleSelection: [],
        proPage:{},
        proList:[]
      }
    },
    created(){
      this.getProductList();
    },
    methods: {
      async getProductList(){
        const data = await $http.productList()
        if(data.success){
          this.proPage = data.datas.proPage;
          this.proList = data.datas.proPage.lit;
          console.log(this.proList);
        }else{
          this.$notify.error({
            title: '错误',
            message: data.message
          });
        }
      },
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
