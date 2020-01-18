<template>
  <div class="box">
    <form v-on:submit.prevent>
      <input type="text">
      <button v-on:click="addItem">Add</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Hello"
    };
  },
  methods: {
    addItem: function(event) {
      alert();
    }
  }
};
</script>


<style lang="sass" scoped>
.box
  border: 1px solid #ccc
  button
    background: #fff
    border: 1px solid #ccc
    margin-left: 4px
    line-height: 2
     
</style>