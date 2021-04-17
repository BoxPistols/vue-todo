<template>
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
            <b-form inline v-on:submit.prevent class="flex noWrap">
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
</template> 

<script>
export default {
  data() {
    return {
      newItem: '',
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
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
>>> label.custom-control-label {
  display: flex;
  background: aliceblue;
}

.c-todos .todoDone {
  color: lightgray;
}
</style>