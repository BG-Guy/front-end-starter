<template class="app">
  <AppHeader />
  <Homepage />
  <AppFooter />
</template>

<script>
import AppHeader from "./components/app-header.vue";
import Homepage from "./components/homepage.vue";
import AppFooter from "./components/app-footer.vue";
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
