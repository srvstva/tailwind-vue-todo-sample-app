<template>
  <div
    id="app"
    class="bg-gray-50 min-h-screen md:flex md:items-center md:justify-center"
  >
    <todo-app />
  </div>
</template>

<script>
import TodoApp from "./components/TodoApp.vue";
export default {
  name: "App",
  components: {
    TodoApp,
  },
  created() {
    this.$store.dispatch("loadTodos");
  },
};
</script>

<style>
</style>
