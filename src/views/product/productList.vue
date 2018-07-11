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
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="产品状态">
                <el-select v-model="form.status">
                  <el-option label="未发布" value="1"></el-option>
                  <el-option label="已发布" value="2"></el-option>
                  <el-option label="已下架" value="3"></el-option>
                  <el-option label="已暂停" value="4"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="产品类型??">
                <el-select v-model="form.status">
                  <el-option label="全部" value="shanghai"></el-option>
                  <el-option label="是" value="beijing"></el-option>
                  <el-option label="否" value="beijing"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="6">
              <el-form-item label="融资类型??">
                <el-select  v-model="form.status">
                  <el-option label="全部" value="shanghai"></el-option>
                  <el-option label="抵押" value="beijing"></el-option>
                  <el-option label="信贷" value="beijing"></el-option>
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
        <el-button @click="changeProductStatus(1)" size="small">发布产品</el-button>
        <el-button @click="changeProductStatus(3)" size="small">下架产品</el-button>
        <el-button @click="changeProductStatus(2)" size="small">暂停产品</el-button>
      </div>
      <el-table ref="multipleTable" :data="list" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="55">
        </el-table-column>
        <el-table-column label="产品名称" width="120">
          <template slot-scope="scope">
            <a class="link-color" @click="goProduct(scope.$index, scope.row)">{{ scope.row.productName }}</a>
          </template>
        </el-table-column>
        <el-table-column prop="" label="产品编号?" width="150">
        </el-table-column>
        <el-table-column prop="" label="产品方简称?" width="110" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="financeType" label="融资类型" width="80" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="productType" label="产品类型" width="80" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="minAlppy" label="最低申请金额" width="120" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="maxApply" label="最高申请金额" width="120" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="" label="借款期限区间???" width="110" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="" label="累计申请笔数???" width="120" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="" label="审核中笔数???" width="120" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="" label="累计放款笔数???" width="120" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="" label="产品状态??" width="80" show-overflow-tooltip>
        </el-table-column>
        <el-table-column label="操作" show-overflow-tooltip>
          <template slot-scope="scope">
            <el-button type="text" size="small">拷贝</el-button>
            <el-button type="text" size="small">修改</el-button>
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
          status:''
        },
        statusForm: {
          id:'',
          status:'',
          times:''
        },
        multipleSelection: [],
        list:[],
        total:0,
        titleArr:['','发布产品','暂停产品','下架产品'],
        title:''
      }
    },
    created(){
      this.getProductList();
    },
    methods: {
      async subStatus(){
        const data = await $http.productChangeStatus(this.statusForm)
        if(data.success){
          this.dialogVisible = false;
          this.$notify.success({
            title: '提示',
            message: '操作成功'
          });
        }else{
          this.$notify.error({
            title: '错误',
            message: data.errMsg
          });
        }
      },
      pageChange(page){
        this.form.currentPage = page;
        this.getProductList();
      },
      async getProductList(){
        const data = await $http.productList(this.form)
        if(data.success){
          this.list = data.body.list;
          this.total = data.body.parameter.totalCount;
          this.list[0].id = 1;
          this.list[0].productName = '产品1'
          console.log(this.list)
        }
      },
      addProduct() {
        this.$router.push({
          path: '/product/addProduct'
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
        this.$router.push({ name: 'product.productInfo', params: { userId: row.id } })
      }
    }
  }
</script>
