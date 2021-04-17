<template>
  <div id="app">
    <!-- <code class="debug">
      {{ $data }}
    </code> -->
    <!-- <input type="checkbox" name="hoge" id="hoge" v-model="isDone" />
    <label for="hoge">hoge</label> -->

    <div class="flex center">
      <img width="60px" src="./assets/logo.png" />
    </div>
    <ToDo />
  </div>
</template>

<script>
import ToDo from './components/todo/ToDo';

export default {
  name: 'App',
  data() {
    return {
      // isDone: false,
    };
  },
  components: {
    ToDo,
  },
};
</script>

<style lang="sass" scoped>
@import url("https://bootstrapbuildspace.sfo2.cdn.digitaloceanspaces.com//NYsiLXJhQPZL/avwgbGyXdigf/bootstrap.min.css")

#app
  font-family: "Avenir", Helvetica, BIZ UDPゴシック, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: lighten(#2c3e50, 10%)
  margin: 20px auto
  font-size: 1em
</style>
