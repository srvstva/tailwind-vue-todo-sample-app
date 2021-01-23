<template>
  <div
    :class="
      item.done ? 'border-l-4 border-green-600 line-through' : 'border-l-4 border-yellow-500'
    "
    class="shadow rounded p-2 md:py-4 md:px-4 text-gray-700 bg-white mt-4"
  >
    <div class="flex items-center w-full justify-between">
      <div class="flex items-center space-x-1 md:space-x-2">
        <input
          type="checkbox"
          value="item.done"
          v-model="item.done"
          @change="markComplete(item)"
        />
        <span class="truncate text-xs md:text-base">{{ item.title }} </span>
      </div>
      <button
        @click="removeTodo(item.id)"
        class="rounded-full hover:bg-red-100 p-1 shadow"
        :class="item.done ? 'visible': 'invisible'"
      >
        <svg
          class="w-4 h-4 md:w-6 md:h-6 text-red-600"
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
    markComplete: function (item) {
      this.$store.dispatch("markComplete", item);
    },
  },
};
</script>

<style>
</style>
