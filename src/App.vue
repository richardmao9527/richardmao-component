<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <pig-button></pig-button>
    <pig-button></pig-button>
  </div>
</template>

<script>
// import PigButton from "./packages/pig-button/index.vue";
// import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    // HelloWorld,
    // PigButton,
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
