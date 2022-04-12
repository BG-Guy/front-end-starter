<template class="app">
  <!-- <AppHeader /> -->
  <Hero />
  <!-- <Resume /> -->
  <Portfolio />
</template>

<script>
import AppHeader from "./components/app-header.vue";
import Hero from "./components/hero.vue";
import Resume from "./components/resume.vue";
import Portfolio from "./components/portfolio.vue";
export default {
  components: {
    // AppHeader,
    Hero,
    Portfolio,
    // Resume,
  },

  data() {},
};
</script>

<style scoped></style>
