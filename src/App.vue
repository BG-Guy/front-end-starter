<template class="app">
  <AppHeader />
  <RouterView />
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
  created() {
    this.$store.dispatch({ type: "loadGigs" });
  },
};
</script>

<style scoped></style>
