<template>
  <div class="p-2 m:p-4 text-left m:w-1/3 min-w-screen border-1 shadow">
    <app-header title="Your Todos" />
    <add-todo />
    <div v-for="item in allTodos" :key="item.id">
      <todo :item="item" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import AddTodo from "./AddTodo.vue";
import AppHeader from "./AppHeader.vue";
import Todo from "./Todo.vue";

export default {
  name: "TodoList",
  components: {
    AppHeader,
    AddTodo,
    Todo,
  },
  computed: mapGetters(["allTodos", "completedTodos"]),
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
