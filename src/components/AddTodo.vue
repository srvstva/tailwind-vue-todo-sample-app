<template>
  <div class="relative mb-8 flex items-center">
    <input
      type="text"
      class="py-4 px-4 border rounded w-full focus:outline-none focus:ring-1 text-gray-800"
      placeholder="Whats on your mind?"
      v-model="todoTitle"
    />

    <button
      @click="addTodo(todoTitle)"
      class="absolute right-0 p-4 border-l inline-block focus:outline-none shadow bg-blue-500 rounded-r-lg"
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