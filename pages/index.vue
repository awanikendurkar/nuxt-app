<template>
  <section class="container">
    <h1>Assignment 1</h1>
    <br />
    <button @click="onLoadProducts">Load /products</button>
  </section>
</template>

<script>
export default {
  methods: {
    onLoadProducts() {
      this.$router.push("/products");
    },
  },
};
</script>
