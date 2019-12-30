<template>
  <div>
    <h1>Hello {{ getCurrentUser.email }}</h1>
  </div>
</template>

<script>
export default {
  computed: {
    getCurrentUser() {
      return this.$store.getters.getCurrentUser;
    }
  }
};
</script>

<style></style>
