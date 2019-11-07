<template>
  <div class="main">
    <el-scrollbar wrapStyle="overflow-x:hidden;" style="height:100%;">
      <div class="w">
        <router-view />
      </div>
    </el-scrollbar>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.main {
  /* 50 === navbar height */
  height: calc(100vh - 50px);
}
.w {
  padding: 12px;
}
</style>
