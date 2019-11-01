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
</style>
