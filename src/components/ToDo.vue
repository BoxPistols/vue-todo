<template>
  <div class="box">
    <!-- <code class="debug">
      <ul v-for="todo in $data.todos" :key="todo.index">
        <li>{{ todo }}</li>
      </ul>
    </code> -->
    <div class="section">
      <b-card-group>
        <b-card bg-variant="dark" text-variant="light">
          <b-form-group
            label-cols-lg="3"
            label="Todo Lists on Vue"
            label-size="lg"
            label-class="pt-0"
            class="mb-0"
          >
            <b-form-group
              label="Items:"
              label-for="my-items"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form inline v-on:submit.prevent class="flex">
                <b-form-input
                  id="my-items"
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
      </b-card-group>
    </div>

    <!-- Add Lists -->
    <div class="section">
      <b-card-group>
        <b-card no-body header="Card with flush list group">
          <b-list-group flush v-for="todo in todos" :key="todo.index">
            <b-list-group-item>
              <b-form-checkbox value="todo" v-model="todo.status">
                {{ todo.item }}
              </b-form-checkbox>
            </b-list-group-item>
          </b-list-group>
        </b-card>
      </b-card-group>
    </div>
    <!-- /Add Lists -->

    <code class="debug">
      {{ $data }}
    </code>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Hello",
      newItem: "",
      todos: [],
      status: false,
    };
  },
  methods: {
    addItem(event) {
      if (this.newItem === "") return;
      const todo = {
        item: this.newItem,
        status: false,
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

.section {
  margin-top: 24px;
  box-shadow: 2px 4px 8px lightgray;
  border-radius: 12px;
}

.flex {
  display: flex;
  flex-wrap: nowrap;
  padding: 4px;
}

>>> label {
  display: flex;
  background: #faebd7;
}
</style>