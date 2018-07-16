<template>
  <div class="tags-nav">
    <scroll-pane ref='scrollPane'>
      <router-link ref='tag' class="tags-nav__item" :class="isActive(tag)?'active':''" v-for="tag in Array.from(visitedViews)" :to="tag" :key="tag.path">
        {{tag.title}}
        <span class='el-icon-close' @click.prevent.stop='closeSelectedTag(tag)'></span>
      </router-link>
    </scroll-pane>
  </div>
</template>

<script>
  import ScrollPane from '@/components/ScrollPane'
  // import { generateTitle } from '@/utils/i18n'

  export default {
    components: { ScrollPane },
    data() {
      return {
        a: false,
        top: 0,
        left: 0,
        selectedTag: {}
      }
    },
    computed: {
      visitedViews() {
        return this.$store.state.tagsView.visitedViews
      }
    },
    watch: {
      $route() {
        this.addViewTags()
        this.moveToCurrentTag()
      },
      a(value) {
        if (value) {
          document.body.addEventListener('click', this.closeMenu)
        } else {
          document.body.removeEventListener('click', this.closeMenu)
        }
      }
    },
    mounted() {
      this.addViewTags()
    },
    methods: {
      // generateTitle, // generateTitle by vue-i18n
      generateRoute() {
        if (this.$route.name) {
          return this.$route
        }
        return false
      },
      isActive(route) {
        return route.path === this.$route.path
      },
      addViewTags() {

        const route = this.generateRoute()
        if (!route) {
          return false
        }
        this.$store.dispatch('addVisitedViews', route)
      },
      moveToCurrentTag() {
        const tags = this.$refs.tag
        this.$nextTick(() => {
          for (const tag of tags) {
            if (tag.to.path === this.$route.path) {
              this.$refs.scrollPane.moveToTarget(tag.$el)
              break
            }
          }
        })
      },
      closeSelectedTag(view) {
        this.$store.dispatch('delVisitedViews', view).then((views) => {
          if (this.isActive(view)) {
            const latestView = views.slice(-1)[0]
            if (latestView) {
              this.$router.push(latestView)
            } else {
              this.$router.push('/')
            }
          }
        })
      },
      closeOthersTags() {
        this.$router.push(this.selectedTag)
        this.$store.dispatch('delOthersViews', this.selectedTag).then(() => {
          this.moveToCurrentTag()
        })
      },
      closeAllTags() {
        this.$store.dispatch('delAllViews')
        this.$router.push('/')
      },
      openMenu(tag, e) {
        this.a = true
        this.selectedTag = tag
        this.left = e.clientX
        this.top = e.clientY
      },
      closeMenu() {
        this.a = false
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .tags-nav {
      &__item {
          display: inline-block;
          position: relative;
          height: 30px;
          line-height: 30px;
          padding: 0 10px;
          margin-right: 10px;
          border: 1px solid #66b1ff;
          border-radius: 4px;
          text-decoration: none;
          color: #999;
          &.active {
              background-color: #409eff;
              color: #fff;
          }
      }
  }
</style>
