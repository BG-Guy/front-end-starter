<template>
  <section class="navbar-container">
    <nav class="navbar max-width-container">
      <li class="logo">LOGO</li>
      <div class="nav-links">
        <li v-for="navLink in navLinks" :key="navLink">
          <router-link :to="navLink.path" class="nav-link">
            {{ navLink.name }}
          </router-link>
        </li>
      </div>
      <HamburgerMenu class="hamburger-menu-icon" />
    </nav>
  </section>
</template>

<script>
import HamburgerMenu from "../svgs/hamburger-menu.vue";
export default {
  data() {
    return {
      navLinks: [
        {
          name: "Home",
          path: "/",
          isActive: false,
        },
        {
          name: "Link 2",
          path: "link 2",
          isActive: false,
        },
        {
          name: "LINK",
          path: "link 3",
          isActive: false,
        },
        {
          name: "LINK",
          path: "link 4",
          isActive: false,
        },
      ],
    };
  },
  components: { HamburgerMenu },
};
</script>

<style></style>
