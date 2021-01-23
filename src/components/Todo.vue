<template>
  <div
    :class="
      item.done ? 'border-l-4 border-green-600' : 'border-l-4 border-yellow-500'
    "
    class="shadow rounded py-4 px-4 text-gray-700 bg-white mt-4"
  >
    <div class="flex items-center w-full justify-between">
      <div class="flex items-center space-x-2">
        <input
          type="checkbox"
          value="item.done"
          v-model="item.done"
          @change="markComplete(item.id)"
        />
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
  </div>
</template>

<script>
export default {
  name: "Todo",
  props: {
    item: Object,
  },
  methods: {
    removeTodo: function (id) {
      this.$store.dispatch("removeTodo", id);
    },
    markComplete: function (id) {
      this.$store.dispatch("markComplete", id);
    },
  },
};
</script>

<style>
</style>