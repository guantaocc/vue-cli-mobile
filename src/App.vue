<template>
  <div id="app">
    <van-nav-bar safe-area-inset-top />
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <van-number-keyboard safe-area-inset-bottom />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>

<style lang="less">
#app {
  font-family: @base-font-family;
}
</style>
