<template class="app">
  <AppHeader />
  <Homepage />
  <Footer />
</template>

<script>
import AppHeader from "./components/app-header.vue";
import Homepage from "./components/homepage.vue";
export default {
  components: {
    AppHeader,
    Homepage,
    Footer,
  },

  data() {},
};
</script>

<style scoped></style>
