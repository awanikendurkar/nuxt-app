<template>
  <div>
    <button @click="onLoadProduct('1')">Go to /products/1</button>
    <button @click="onLoadProduct('2')">Go to /products/2</button>
  </div>
</template>

<script>
export default {
  methods: {
    onLoadProduct(pid) {
      this.$router.push("/products/" + pid);
    },
  },
};
</script>