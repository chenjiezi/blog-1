<!-- write -->
<template>
  <div class='write'>
    <!-- <div class="header">
      <h1>write</h1>
      <el-button @click="backFunc">返回</el-button>
    </div> -->
    <div class="main">
      <mavon-editor v-model="content" ref="md" @change="change" style="min-height: calc(100vh - 100px);" />
      <button @click="submit">提交</button>
    </div>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

export default {
  // import引入的组件需要注入到对象中才能使用
  components: {
    mavonEditor
  },
  data () {
    // 这里存放数据
    return {
      content: '', // 输入的markdown
      html: '' // 及时转的html
    }
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    // 所有操作都会被解析重新渲染
    change (value, render) {
      console.log('value:', value)
      console.log('render:', render)
      // render 为 markdown 解析后的结果[html]
      this.html = render
    },
    // 提交
    submit () {
      console.log(this.content)
      console.log(this.html)
    },
    backFunc () {
      this.$router.push({ name: 'article' })
    }
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created () {

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
h1 {
  margin: 0;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(0, 0, 0, 0.02);
}
</style>
