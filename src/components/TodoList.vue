<template>
  <div>
    <todo v-for="todo in todos" :item="todo" :key="todo.id" />
  </div>
</template>

<script>
import Todo from "./Todo.vue";
export default {
  name: "TodoList",
  props: {
    todos: Array,
  },
  components: {
    Todo,
  },
};
</script>

<style>
</style>