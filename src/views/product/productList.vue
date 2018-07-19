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
              <el-form-item label="产品名称" prop="productName">
                <el-input v-model="form.productName"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="产品方简称" prop="productOwnId">
                <el-select v-model="form.productOwnId" placeholder="请选择产品方">
                  <el-option v-for="(x, index) in productSideList" :key="index" :label="x.productOwnShortName" :value="x.id"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="产品状态" prop="status">
                <el-select v-model="form.status">
                  <el-option label="未发布" value="1"></el-option>
                  <el-option label="已发布" value="2"></el-option>
                  <el-option label="已下架" value="4"></el-option>
                  <el-option label="已暂停" value="3"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="产品类型" prop="productType">
                <el-select v-model="form.productType">
                  <el-option label="全部" value="0"></el-option>
                  <el-option label="企业经营贷款" value="1"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="6" prop="financeType">
              <el-form-item label="融资类型">
                <el-select  v-model="form.status">
                  <el-option label="全部" value="0"></el-option>
                  <el-option label="抵押" value="1"></el-option>
                  <el-option label="信贷" value="2"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="2" :offset="1">
          <el-col>
            <el-button style="margin-bottom: 15px;" size="small" @click="getProductList">查询</el-button>
          </el-col>
          <el-col>
            <el-button size="small" @click="resetForm">重置</el-button>
          </el-col>
        </el-col>
      </el-form>
    </el-card>
    <el-card class="wrapper-option">
      <div class="wrapper-button clearfix">
        <el-button @click="addProduct" type="primary" size="small">新建产品</el-button>
        <el-button @click="changeProductStatus(2)" size="small">发布产品</el-button>
        <el-button @click="changeProductStatus(4)" size="small">下架产品</el-button>
        <el-button @click="changeProductStatus(3)" size="small">暂停产品</el-button>
      </div>
      <el-table ref="multipleTable" :data="list" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="55">
        </el-table-column>
        <el-table-column label="产品名称" width="120">
          <template slot-scope="scope">
            <a class="link-color" @click="goProduct(scope.$index, scope.row)">{{ scope.row.productName }}</a>
          </template>
        </el-table-column>
        <el-table-column prop="productCode" label="产品编号" width="200">
        </el-table-column>
        <el-table-column prop="productOwnShortName" label="产品方简称" width="110" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="financeType" label="融资类型" width="80" show-overflow-tooltip>
          <template slot-scope="scope">
            {{ scope.row.financeType == 1 ? '抵押':'信贷' }}
          </template>
        </el-table-column>
        <el-table-column label="产品类型" width="80" show-overflow-tooltip>
          <template slot-scope="scope">
            {{ scope.row.productType == 1 ? '企业经营贷款':'' }}
          </template>
        </el-table-column>
        <el-table-column label="最低申请金额" width="120" show-overflow-tooltip>
          <template slot-scope="scope">
            {{ scope.row.minApply | currency }}
          </template>
        </el-table-column>
        <el-table-column label="最高申请金额" width="120" show-overflow-tooltip>
          <template slot-scope="scope">
            {{ scope.row.maxApply | currency }}
          </template>
        </el-table-column>
        <el-table-column prop="" label="借款期限区间???" width="110" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="" label="累计申请笔数???" width="120" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="" label="审核中笔数???" width="120" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="" label="累计放款笔数???" width="120" show-overflow-tooltip>
        </el-table-column>
        <el-table-column label="产品状态" width="80" show-overflow-tooltip>
          <template slot-scope="scope">
            {{ scope.row.status | transProductStatus }}
          </template>
        </el-table-column>
        <el-table-column label="操作" show-overflow-tooltip>
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="copyProduct(scope.$index, scope.row)">拷贝</el-button>
            <el-button type="text" size="small" @click="modifyProduct(scope.$index, scope.row)">修改</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        layout="prev, pager, next"
        :total="total"
        @current-change="pageChange">
      </el-pagination>
    </el-card>
    <el-dialog :visible.sync="dialogVisible" width="400px" :title="title">
      <el-form :model="form">
        <el-form-item label="生效时间">
          <el-date-picker value-format="timestamp" v-model="statusForm.times" type="datetime" placeholder="选择日期">
          </el-date-picker>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="subStatus">{{title}}</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        dialogVisible: false,
        form: {
          currentPage:1,
          pageSize:10,
          productName:'',
          productOwnId:'',
          status:'',
          productType:''
        },
        statusForm: {
          id:'',
          status:'',
          times:''
        },
        multipleSelection: [],
        list:[],
        total:0,
        titleArr:['','','发布产品','暂停产品','下架产品'],
        title:'',
        productSideList:[]
      }
    },
    created(){
      this.getProductSide();
      this.getProductList();
    },
    methods: {
      /* 获取产品方信息	*/
      async getProductSide(){
        const data = await $http.basicProductSideListAll();
        if(data.success){
          this.productSideList = data.datas;
        }
      },
      resetForm() {
        this.$refs['form'].resetFields();
        this.getProductList();
      },
      copyProduct(index,row){
        this.$router.push({ name: 'product.modifyProduct', params: { productId: row.id, type:'copy' } })
      },
      modifyProduct(index,row){
        this.$router.push({ name: 'product.modifyProduct', params: { productId: row.id, type:'modify' } })
      },
      async subStatus(){
        this.statusForm.times = this.GMTToStr(this.statusForm.times);
        const data = await $http.productChangeStatus(this.statusForm)
        if(data.success){
          this.dialogVisible = false;
          this.$notify.success({
            title: '提示',
            message: '操作成功'
          });
          this.getProductList();
        }
      },
      pageChange(page){
        this.form.currentPage = page;
        this.getProductList();
      },
      async getProductList(){
        const data = await $http.productList(this.form)
        if(data.success){
          this.list = data.datas.list;
          this.total = data.datas.total;
        }
      },
      addProduct() {
        this.$router.push({
          name: 'product.addProduct',
          params: { type: 'add' }
        });
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
        console.log(this.multipleSelection)
      },
      changeProductStatus(type) {
        if (this.multipleSelection.length === 1) {
          this.title = this.titleArr[type];
          this.statusForm.status = type;
          this.statusForm.id = this.multipleSelection[0].id;
          this.dialogVisible = true;
        } else if(this.multipleSelection.length > 1) {
          this.$message({
            message: '只能操作一个产品',
            type: 'warning'
          });
        }else{
          this.$message({
            message: '请至少选择一个产品',
            type: 'warning'
          });
        }
      },
      goProduct(index, row) {
        this.$router.push({ name: 'product.productInfo', params: { productId: row.id } })
      }
    }
  }
</script>
