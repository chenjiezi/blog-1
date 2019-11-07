<template>
  <div id="app">
    <sidebar></sidebar>
    <div id="container">
      <navbar></navbar>
      <app-main></app-main>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/layout/Sidebar.vue'
import Navbar from '@/layout/Navbar.vue'
import AppMain from '@/layout/AppMain.vue'
export default {
  components: {
    Navbar,
    Sidebar,
    AppMain
  },
  data () {
    return {
    }
  },
  methods: {
  },
  beforeMount () {
  },
  beforeDestroy () {
  }
}
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  overflow: hidden;
}

#container {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

// 侧栏折叠时,二级菜单样式
.el-menu--vertical {
  > .el-menu--popup {
    max-height: 95vh;
    overflow-y: auto;
    &::-webkit-scrollbar {
      /*滚动条整体样式*/
      width: 6px; /*高宽分别对应横竖滚动条的尺寸*/
      height: 1px;
    }
    &::-webkit-scrollbar-thumb {
      /*滚动条里面小方块*/
      border-radius: 10px;
      background: rgba(144, 147, 153, 0.5);
    }
    &::-webkit-scrollbar-track {
      /*滚动条里面轨道*/
      background: rgba(0, 0, 0, 0.1);
    }
  }
}

// el-drawer__header
.el-drawer__body {
  height: 100%;
  background-color: rgb(84, 92, 100);
}
.el-dialog__wrapper .el-drawer__header {
  margin-bottom: 0;
  padding: 0;
}
</style>
