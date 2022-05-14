<template class="app">
  <AppHeader />
  <Homepage />
  <AppFooter />
</template>

<script>
import AppHeader from "./components/Header.vue";
import Homepage from "./components/Home.vue";
import AppFooter from "./components/Footer.vue";
export default {
  components: {
    AppHeader,
    Homepage,
    AppFooter,
  },

  data() {},
};
</script>

<style scoped></style>
