<!-- menu -->
<template>
  <el-scrollbar wrapStyle="overflow-x: hidden;" style="height:100%;">
    <el-menu default-active="2" class="el-menu-vertical-demo" router :collapse-transition="false" @select="handleSelect" @open="handleOpen" @close="handleClose" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" :collapse="isFold">
      <!-- TODO: 折叠时，第三级菜单有bug -->
      <!-- <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-1">选项1</el-menu-item>
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
      </el-submenu> -->
      <el-menu-item :index="item.path" v-for="(item,index) of menuList" :key="index">
        <i :class="item.icon"></i>
        <span slot="title">{{item.name}}</span>
      </el-menu-item>
    </el-menu>
  </el-scrollbar>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
import router from '@/router'

export default {
  // import引入的组件需要注入到对象中才能使用
  components: {},
  data () {
    // 这里存放数据
    return {

    }
  },
  // 监听属性 类似于data概念
  computed: {
    isFold () {
      return this.$store.state.isFold
    }
  },
  // 监控data中的数据变化
  watch: {
  },
  // 方法集合
  methods: {
    handleSelect (key, keyPath) {
      // 切换路由后，隐藏抽屉
      if (this.$store.state.device === 'mobile') {
        this.$store.commit('toggleMenu')
      }
      console.log(key, keyPath)
    },
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created () {
    const { routes } = router.options
    this.menuList = routes // 菜单数据
  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted () {
  },
  beforeCreate () { }, // 生命周期 - 创建之前
  beforeMount () { }, // 生命周期 - 挂载之前
  beforeUpdate () { }, // 生命周期 - 更新之前
  updated () { }, // 生命周期 - 更新之后
  beforeDestroy () { }, // 生命周期 - 销毁之前
  destroyed () { }, // 生命周期 - 销毁完成
  activated () { } // 如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.el-menu-vertical-demo {
  border: none;
}
</style>
