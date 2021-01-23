<template>
  <div
    id="app"
    class="bg-gray-50 min-h-screen md:flex md:items-center md:justify-center"
  >
    <todo-list />
  </div>
</template>

<script>
import TodoList from "./components/TodoList.vue";
export default {
  name: "App",
  components: {
    TodoList,
  },
  created() {
    this.$store.dispatch("loadTodos");
  },
};
</script>

<style>
</style>
