<!-- sidebar -->
<template>
  <div class="sidebar">
    <div class="side" :class="{'side_hidden': !isShow}" :style="{display: isMobilex}">
      <Menu></Menu>
    </div>
    <el-drawer custom-class="el_drawer" :visible="isDrawer" direction="ltr" :show-close="false" :before-close="handleDrawerClose" size="200px">
      <Menu></Menu>
    </el-drawer>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
import Menu from './Menu.vue'
export default {
  // import引入的组件需要注入到对象中才能使用
  components: {
    Menu
  },
  data () {
    // 这里存放数据
    return {
      WIDTH: 992,
      isMobilex: 'flex'
    }
  },
  // 监听属性 类似于data概念
  computed: {
    isShow () {
      return this.$store.state.isStretch
    },
    isDrawer () {
      return this.$store.state.isDrawer
    }
  },
  // 监控data中的数据变化
  watch: {
  },
  // 方法集合
  methods: {
    handleDrawerClose (done) {
      this.$store.commit('isStretchCharge')
    },
    isMobile () {
      const curWidth = document.body.getBoundingClientRect().width
      return curWidth < this.WIDTH
    },
    resizeHandler () {
      const isMobile = this.isMobile()
      this.$store.commit('toggleDevice', isMobile)
      this.isMobilex = isMobile ? 'none' : 'flex'
    }
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created () {
    // this.eventBus.$off('is-stretch').$on('is-stretch', res => {
    //   console.log('res:', res)
    //   this.isShow = res
    // })
  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted () {
    this.resizeHandler()
  },
  beforeCreate () { }, // 生命周期 - 创建之前
  beforeMount () {
    window.addEventListener('resize', this.resizeHandler)
  }, // 生命周期 - 挂载之前
  beforeUpdate () { }, // 生命周期 - 更新之前
  updated () { }, // 生命周期 - 更新之后
  beforeDestroy () {
    window.removeEventListener('resize', this.resizeHandler)
  }, // 生命周期 - 销毁之前
  destroyed () { }, // 生命周期 - 销毁完成
  activated () { } // 如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.side {
  width: 200px;
  height: 100vh;
  overflow: hidden;
  box-sizing: border-box;
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  background: #545c64;
  transition: width 0.1s;
  -webkit-transition: width 0.1s; /* Safari */

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.side_hidden {
  width: 64px;
}
</style>
