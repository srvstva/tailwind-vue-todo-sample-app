<template>
  <div>
    <h3
      class="text-center mb-8 text-5xl text-transparent font-semibold bg-gradient-to-r from-blue-600 to-pink-500 bg-clip-text"
    >
      {{ title }}
    </h3>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
  },
};
</script>

<style>
</style>