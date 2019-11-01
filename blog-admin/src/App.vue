<template>
  <div id="app">
    <Side></Side>
    <div id="container">
      <Header></Header>
      <Main></Main>
    </div>
  </div>
</template>

<script>
import Side from '@/layout/Side.vue'
import Header from '@/layout/Header.vue'
import Main from '@/layout/Main.vue'
export default {
  components: {
    Header,
    Side,
    Main
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
