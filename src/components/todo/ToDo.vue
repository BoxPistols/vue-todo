<template>
  <div class="box">
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
                  maxLength="32"
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
          <b-list-group
            class="c-todos"
            flush
            v-for="(todo, index) in todos"
            :key="todo.index"
          >
            <!-- Loop ToTo List -->
            <b-list-group-item class="flex pd-2">
              <b-form-checkbox
                :class="{ todoDone: todo.status }"
                value="todo"
                size="lg"
                v-model="todo.status"
              >
                {{ todo.item }}
              </b-form-checkbox>
              <b-button
                class="ml-1 pd-0 ml-auto"
                variant="danger"
                size="sm"
                v-on:click="delItem(index)"
                >Del</b-button
              >
            </b-list-group-item>
          </b-list-group>

          <b-list-group-item class="flex center pd-2">
            <div class="c-total pl-1">
              Todo: {{ todoCount }} => Done: {{ todoRemaining }} / Total:
              {{ todoTotal }}
            </div>
            <b-button
              class="my-1 mr-1 ml-auto"
              variant="warning"
              size="sm"
              v-on:click="delAll(index)"
              >delAll</b-button
            >
          </b-list-group-item>
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
      msg: 'Hello',
      newItem: '',
      todos: [],
      status: false,
    };
  },
  methods: {
    addItem(event) {
      if (this.newItem === '') return;
      const todo = {
        item: this.newItem,
        status: false,
      };
      this.todos.push(todo);
      this.newItem = '';
    },
    delItem(index) {
      // TODO:  Delete Status
      // alert(this.status);
      this.todos.splice(index, 1);
    },
    delAll(index) {
      this.todos.splice(index, this.todos.length);
    },
  },
  computed: {
    todoTotal() {
      return this.todos.length;
    },
    todoRemaining() {
      return this.todos.filter(function (v) {
        return v.status;
      }).length;
    },
    todoCount() {
      return this.todos.filter(function (v) {
        return !v.status;
      }).length;
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

>>> label.custom-control-label {
  display: flex;
  background: aliceblue;
}

.c-todos .todoDone {
  color: lightgray;
}
</style>