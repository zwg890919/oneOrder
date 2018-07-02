<template>
  <el-scrollbar wrapClass="scrollbar-wrapper">
    <el-menu mode="vertical" :show-timeout="200" :collapse="isCollapse" background-color="#304156" text-color="#bfcbd9" active-text-color="#409EFF">
      <el-submenu v-for="(item,index) in currentApp.childrens" :key="index" :index="String(index)" v-if="item.menuType==1 && item.isSingle == 1">
        <template slot="title">
          <i class="el-icon-message menuicon" style="font-size:16px"></i>{{item.name}}
        </template>
        <template>
          <router-link v-for="(subItem,sindex) in item.childrens" :key="sindex" :to="subItem.menuHref" v-if="subItem.isSingle && subItem.menuType == 1">
            <el-menu-item :index="String(sindex)">
              <span>{{subItem.name}}</span>
            </el-menu-item>
          </router-link>
        </template>
      </el-submenu>

      <router-link v-for="(item,index) in currentApp.childrens" :key="index" :to="{name:item.menuHref}"  v-if="item.menuType == 1 && item.isSingle == 2">
        <el-menu-item :index="String(index)">
          <i class="el-icon-menu menuicon"></i>{{item.name}}
        </el-menu-item>
      </router-link>
    </el-menu>
  </el-scrollbar>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    data() {
      return {
        isCollapse: false,
      }
    },
    computed: {
      ...mapGetters([
        'currentApp'
      ]),
    },
    created() {
    }
  }
</script>
