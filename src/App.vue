<template>
  <div id="app">
    <div class="flex center">
      <img width="60px" src="./assets/logo.png" />
    </div>
    <!-- <HelloWorld msg="Hello Vue in CodeSandbox!"/> -->
    <ToDo />
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld";
import ToDo from "./components/ToDo";

export default {
  name: "App",
  components: {
    // HelloWorld,
    ToDo,
  },
};
</script>

<style lang="sass" scoped>
@import url("https://bootstrapbuildspace.sfo2.cdn.digitaloceanspaces.com//NYsiLXJhQPZL/avwgbGyXdigf/bootstrap.min.css")

#app
  font-family: "Avenir", Helvetica, _Segoe UI, _Arial, BIZ UDPゴシック, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
  margin: 20px auto
  font-size: 1.15em
</style>
