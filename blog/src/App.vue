<template>
  <div id="app">
    <!-- 小屏时展示 -->
    <!-- <div class="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/archive">Archive</router-link> |
      <router-link to="/tag">Tag</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/link">Link</router-link>
    </div> -->
    <div class="sidebar">
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/archive">Archive</router-link>
        <router-link to="/tag">Tag</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/link">Link</router-link>
      </nav>
    </div>
    <div class="container">
      <router-view class="view" />
      <footer class="footer">
        <div class="footer-w">
          <div>c delueshushu</div>
          <div>Powered by Vue & Koa</div>
        </div>
      </footer>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#app {
  font-family: "Microsoft YaHei", sans-serif;
  color: #2c3e50;
  display: flex;
  height: 100vh;
}
.sidebar {
  min-width: 30%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.1);
  nav {
    display: flex;
    flex-direction: column;
    padding-top: 40px;
    padding-left: 30px;
  }
}
.container {
  padding: 5vh 5vw 20px 7vw;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
}
.view {
  background: rgba(0, 0, 0, 0.1);
}
.nav {
  position: sticky;
  text-align: center;
  top: 0;
  padding: 12px;
  // TODO: 下滑时，再变为半透明
  background-color: rgba(128, 128, 128, 0.3);
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.footer {
  display: flex;
  justify-content: center;
}
.footer-w {
  width: 30%;
  text-align: center;
  border-top: 1px solid #000;
  margin-top: 10px;
}
</style>
