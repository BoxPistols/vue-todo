<template>
  <div class="box">
    <code class="debug">
      {{ $data.newItem }}
      <br />
      {{ $data.todos }}
    </code>

    <b-card bg-variant="light">
      <b-form-group
        label-cols-lg="3"
        label="Shipping Address"
        label-size="lg"
        label-class="font-weight-bold pt-0"
        class="mb-0"
      >
        <b-form-group
          label="Street:"
          label-for="nested-street"
          label-cols-sm="3"
          label-align-sm="right"
        >
          <b-form inline v-on:submit.prevent class="flex">
            <b-form-input
              id="nested-street"
              v-model="newItem"
              placeholder="input..."
            ></b-form-input>
            <button class="ml-1 btn btn-primary" v-on:click="addItem">
              Add
            </button>
          </b-form>
        </b-form-group>
      </b-form-group>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Hello",
      newItem: "",
      todos: [],
      // sizes: ["Small", "Medium", "Large", "Extra Large"],
    };
  },
  methods: {
    addItem(event) {
      if (this.newItem === "") return;

      const todo = {
        item: this.newItem,
      };
      this.todos.push(todo);
      this.newItem = "";
    },
  },
};
</script>

<style lang="scss" scoped>
.box {
  margin: 4vw;
}
.flex {
  display: flex;
  flex-wrap: nowrap;
  padding: 4px;
  /* background: tomato; */
}
</style>