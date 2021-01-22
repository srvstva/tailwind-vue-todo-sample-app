<template>
  <div class="p-4 text-left w-1/3 break-normal border-1 bg-gray-50 shadow">
    <div>
      <h3 class="text-center mb-8 text-5xl text-transparent font-semibold bg-gradient-to-r from-blue-600 to-pink-500 bg-clip-text">Your todos</h3>
    </div>
    <div class="relative mb-8 flex items-center">
      <input
        type="text"
        name=""
        id=""
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
    <ul class="">
      <li
        :class="
          item.done
            ? 'border-l-4 border-green-600'
            : 'border-l-4 border-yellow-500'
        "
        class="shadow rounded py-4 px-4 text-gray-700 bg-white mt-4"
        v-for="item in list"
        :key="item.id"
      >
        <div class="flex items-center w-full justify-between">
          <div class="flex items-center space-x-2">
            <input type="checkbox" value="item.done" v-model="item.done" />
            <span class="truncate">{{ item.title }} </span>
          </div>
          <button
            @click="removeTodo(item.id)"
            class="rounded-full hover:bg-red-100 p-1 shadow"
          >
            <svg
              class="w-6 h-6 text-red-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TodoList",
  props: {
    list: Array,
  },
  data: function () {
    return {
      todoTitle: "",
    };
  },
  methods: {
    addTodo: function (title) {
      if (title.trim() == "" || title === undefined) {
        alert('Trying to add a todo without title')
        return;
      }
      let t = {
        title: title,
        done: false,
        id: Math.round(Math.random() * 1000),
      };
      this.$emit("todoAdded", t);
      this.todoTitle = "";
    },
    removeTodo: function (id) {
      this.$emit("todo-deleted", id);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
