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
            <b-list-group-item class="flex py-2 px-3">
              <b-form-checkbox
                :class="{ todoDone: todo.status }"
                value="todo"
                size="lg"
                v-model="todo.status"
              >
                {{ index }}: {{ todo.item }}
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

          <b-list-group-item class="flex center py-2 px-3">
            <div class="c-total pl-1">
              todo: {{ todoCount }} => done: {{ todoRemaining }} / total:
              {{ todoTotal }}
            </div>
            <div class="c-button-area ml-auto">
              <b-button
                class="mr-2"
                variant="warning"
                size="sm"
                v-on:click="todoClean"
                >done clean</b-button
              >
              <b-button
                class=""
                variant="danger"
                size="sm"
                v-on:click="delAll(index)"
                >delAll items</b-button
              >
            </div>
          </b-list-group-item>
        </b-card>
      </b-card-group>
    </div>
    <!-- /Add Lists -->

    <code class="debug">
      {{ $data }}
    </code>

    <!-- コンポーネント MyModal 個別削除-->
    <Modal @close="closeModal" v-if="modal">
      <!-- <p>Vue.js Modal Window!</p> -->
      <!-- <div><input v-model="message" /></div> -->
      <template slot="header"
        ><h2>{{ checkMessage }}</h2></template
      >
      <template slot="footer">
        <b-button class="" variant="info" size="sm" @click="closeModal()"
          >キャンセル</b-button
        >
        <b-button class="" variant="danger" size="sm" @click="doDelItem(index)"
          >送信</b-button
        >
      </template>
    </Modal>

    <!-- modal for Del All -->
    <Modal @close="closeModal_delAll" v-if="modal_delAll">
      <template slot="header"
        ><h2>{{ checkMessage }}</h2></template
      >

      <template slot="footer">
        <b-button class="" variant="info" size="sm" @click="closeModal_delAll()"
          >キャンセル</b-button
        >
        <b-button
          class=""
          variant="danger"
          size="sm"
          @click="doDelItem_delAll(index)"
          >送信</b-button
        >
      </template>
    </Modal>
  </div>
</template>

<script>
import Modal from '../utility/Modal.vue';

export default {
  components: { Modal },
  data() {
    return {
      msg: 'Hello',
      newItem: '',
      todos: [],
      status: false,
      index: '',
      // Modal
      modal: false,
      checkMessage: '',
      modal_delAll: false,
    };
  },
  methods: {
    // Modal
    openModal() {
      this.modal = true;
    },
    closeModal() {
      this.modal = false;
    },
    closeModal_delAll() {
      this.modal_delAll = false;
    },

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
      if (!this.todos[index].status) {
        // Modal
        this.modal = false;
        // this.todos.splice(index, 0);
      } else {
        // Modal
        this.modal = true;
        this.checkMessage = this.todos[index].item + 'を削除しますか？';
        // this.todos.splice(index, 1);
      }
    }, // Modal
    doDelItem(index) {
      this.todos.splice(index, 1);
      this.modal = false;
    },
    delAll(index) {
      if (!this.todos.length > 0) return;
      this.modal_delAll = true;
      this.checkMessage = '全て削除しますか？';
    },
    // Modal
    doDelItem_delAll(index) {
      this.todos.splice(index, this.todos.length);
      this.modal_delAll = false;
    },
    todoClean() {
      this.todos = this.todos.filter(function (v) {
        return !v.status;
      });
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

.c-todos .todoDone {
  color: lightgray;
  text-decoration: line-through;
}
</style>