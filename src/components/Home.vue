<template>
  <section class="main-content-container">
    <main class="main-content max-width-container">
      MAIN CONTENT HERE
      <p>Helloo {{ loggedUser }}</p>
    </main>
  </section>
</template>

<script>
import { userService } from "../services/user-service";
export default {
  data() {
    return {
      loggedUser: this.getLoggedUser(),
    };
  },

  mounted() {
    this.loggedUser = userService.getLoggedinUser();
    console.log(this.loggedUser, "hi");
  },
  methods: {
    getLoggedUser() {
      this.loggedUser = userService.getLoggedinUser();
    },
  },
};
</script>

<style></style>
