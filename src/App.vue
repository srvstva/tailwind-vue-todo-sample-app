<template>
  <div
    id="app"
    class="bg-gray-50 min-h-screen flex items-center justify-center"
  >
    <todo-list
      :list="todos"
      v-on:todoAdded="addTodo($event)"
      v-on:todo-deleted="removeTodo($event)"
    />
  </div>
</template>

<script>
import TodoList from "./components/TodoList.vue";

export default {
  name: "App",
  components: {
    TodoList,
  },
  mounted() {
    if (localStorage.todos) {
      this.todos = JSON.parse(localStorage.getItem("todos"));
    }
  },
  data: function () {
    return {
      todos: [
        {
          title: "First todo",
          done: true,
          id: 1,
        },
        {
          title: "Second todo",
          done: false,
          id: 2,
        },
      ],
    };
  },
  methods: {
    saveToLocalStorage() {
      localStorage.setItem("todos", JSON.stringify(this.todos));
    },
    addTodo: function (newTodo) {
      this.todos.push(newTodo);
      localStorage.setItem("todos", JSON.stringify(this.todos));
    },
    removeTodo: function (id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
      this.saveToLocalStorage();
    },
  },
};
</script>

<style>
</style>
