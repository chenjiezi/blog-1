<template>
  <div class="main">
    <router-view />
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.main {
  height: calc(100vh - 50px);
  overflow-y: auto;
  overflow-x: hidden;
  background: rgba(0, 0, 0, 0.3);
}
</style>
