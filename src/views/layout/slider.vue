<template>
  <el-scrollbar wrapClass="scrollbar-wrapper">
    <el-menu mode="vertical" :show-timeout="200" :collapse="isCollapse" background-color="#304156" text-color="#bfcbd9" active-text-color="#409EFF">
      <template v-for="item in addRouters">
        <router-link v-if="hasChildren(item.children) && !item.children[0].children" :key="item.children[0].name" :to="`${item.path}/${item.children[0].path}`">
          <el-menu-item :index="`${item.path}/${item.children[0].path}`">
            <i class="el-icon-menu menuicon"></i>{{item.meta.title}}
          </el-menu-item>
        </router-link>

        <el-submenu v-else :index="item.name||item.path" :key="item.name">
          <template slot="title">
            <i class="el-icon-message menuicon" style="font-size:16px"></i>{{item.meta.title}}
          </template>
          <template>
            <router-link v-for="subItem in item.children" :key="subItem.name" :to="item.path + '/' +subItem.path" v-if="!subItem.hidden">
              <el-menu-item :index="String(subItem.name)">
                <span>{{subItem.meta.title}}</span>
              </el-menu-item>
            </router-link>
          </template>
        </el-submenu>

      </template>
    </el-menu>
  </el-scrollbar>
</template>

<script>
  // import { mapGetters } from 'vuex'
  import { addRouters } from '@/router'
  export default {
    data() {
      return {
        isCollapse: false,
        addRouters
      }
    },
    computed: {
    },
    created() {
      console.log(this.addRouters)
    },
    methods: {
      hasChildren(children) {
        const showingChildren = children.filter(item => {
          return !item.hidden
        })
        if (showingChildren.length === 1) {
          return true
        }
        return false
      },
    }
  }
</script>
