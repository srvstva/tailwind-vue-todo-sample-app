<template>
  <div class="mb-8 md:flex items-center">
    <div class="relative w-full">
    <input
      type="text"
      class="md:py-4 h-8 md:px-4 py-2 px-4 border rounded w-full focus:outline-none
      focus:ring-1 text-gray-800 text-sm md:text-base"
      placeholder="Whats on your mind?"
      v-model="todoTitle"
    />
    <button
      @click="addTodo(todoTitle)"
      class="p-1 absolute right-0 border-l inline-block focus:outline-none shadow bg-blue-500 rounded-r-lg"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        class="h-6 w-6 text-gray-50 hover:text-gray-100"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
        />
      </svg>
    </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddTodo",
  data() {
    return {
      todoTitle: "",
    };
  },
  methods: {
    addTodo: function (title) {
      if (title.trim() == "" || title === undefined) {
        alert("Trying to add a todo without title");
        return;
      }
      let t = {
        title: title,
        done: false,
        id: Math.round(Math.random() * 1000),
      };

      this.$store.dispatch("addTodo", t);
      this.todoTitle = "";
    },
  },
};
</script>

<style>
</style>
