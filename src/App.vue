<template>
  <div id="app">
    // 默认按钮
    <poly-button>默认按钮</poly-button>
    // 带类型的按钮
    <poly-button type="primary">主要按钮</poly-button>
    <poly-button type="warning">警告按钮</poly-button>
    <poly-button type="danger">危险按钮</poly-button>
    <poly-button type="success">成功按钮</poly-button>
    <poly-button type="info">信息按钮</poly-button>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    // HelloWorld,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
