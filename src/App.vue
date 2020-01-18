<template>
  <div id="app">
    <img width="20%" src="./assets/logo.png">
    <!-- <HelloWorld msg="Hello Vue in CodeSandbox!"/> -->
    <ToDo/>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld";
import ToDo from "./components/ToDo";

export default {
  name: "App",
  components: {
    // HelloWorld,
    ToDo
  }
};
</script>

<style lang="sass" scoped>
#app
  font-family: "Avenir", Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
  margin-top: 60px
</style>
