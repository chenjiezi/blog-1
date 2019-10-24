<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <div id="container">
      <div id="header">
        <button>开关</button>
        header
      </div>
      <div id="main">
        <router-view />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  overflow: hidden;
}

#nav {
  width: 250px;
  padding: 30px;
  box-sizing: border-box;
  flex-shrink: 0;
  background: rgba(0, 0, 0, 0.2);

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

#container {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: calc(100vw - 250px);
  #header {
    height: 50px;
    background: rgba(0, 0, 0, 0.1);
  }
  #main {
    height: calc(100vh - 50px);
    overflow-y: auto;
    overflow-x: hidden;
    background: rgba(0, 0, 0, 0.3);
  }
}
</style>
