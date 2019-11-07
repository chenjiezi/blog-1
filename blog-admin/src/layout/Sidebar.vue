<!-- side -->
<template>
  <div class="side" :class="{'side_hidden': !isShow}" :style="{display: isMobilex}">
    <el-scrollbar wrapStyle="overflow-x: hidden;" style="height:100%;">
      <el-menu default-active="2" class="el-menu-vertical-demo" router :collapse-transition="false" @open="handleOpen" @close="handleClose" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" :collapse="!isShow">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>导航一</span>
          </template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template slot="title">选项4</template>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="/">
          <i class="el-icon-menu"></i>
          <span slot="title">Home</span>
        </el-menu-item>
        <el-menu-item index="/about">
          <i class="el-icon-document"></i>
          <span slot="title">About</span>
        </el-menu-item>
        <el-menu-item index="/demo">
          <i class="el-icon-setting"></i>
          <span slot="title">Demo</span>
        </el-menu-item>
      </el-menu>
    </el-scrollbar>
    <el-drawer custom-class="el_drawer" :visible="isDrawer" direction="ltr" :show-close="false" :before-close="handleDrawerClose" size="200px">
      <el-scrollbar wrapStyle="overflow-x: hidden;" style="height:100%;">
        <el-menu default-active="2" class="el-menu-vertical-demo" router :collapse-transition="false" @select="handleSelect" @open="handleOpen" @close="handleClose" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" :collapse="!isShow">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="/home">
            <i class="el-icon-menu"></i>
            <span slot="title">Home</span>
          </el-menu-item>
          <el-menu-item index="/about">
            <i class="el-icon-document"></i>
            <span slot="title">About</span>
          </el-menu-item>
          <el-menu-item index="/demo">
            <i class="el-icon-setting"></i>
            <span slot="title">Demo</span>
          </el-menu-item>
        </el-menu>
      </el-scrollbar>
    </el-drawer>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
export default {
  // import引入的组件需要注入到对象中才能使用
  components: {},
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
    handleSelect (key, keyPath) {
      if (keyPath[0].indexOf('/') >= 0) {
        this.$store.commit('isStretchCharge')
      }
      console.log(key, keyPath)
    },
    handleOpen (key, keyPath) {
      // this.$store.commit('isStretchCharge')
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
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
  // flex-grow: 1;
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

.el-menu-vertical-demo {
  border: none;
}
</style>
