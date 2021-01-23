<template>
  <div class="p-2 m:p-4 text-left md:w-1/2 min-w-screen border-1 shadow">
    <app-header title="Your Todos" />
    <add-todo />
    <todo-list :todos="allTodos" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import AddTodo from "./AddTodo.vue";
import AppHeader from "./AppHeader.vue";

import TodoList from "./TodoList.vue";

export default {
  name: "TodoApp",
  components: {
    AppHeader,
    AddTodo,
    // Todo,
    TodoList,
  },
  computed: mapGetters(["allTodos", "completedTodos"]),
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
