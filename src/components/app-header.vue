<template>
  <div class="navbar-container">
    <nav class="max-width-container">
      <li class="logo">LOGO</li>
      <div class="nav-links">
        <li v-for="navLink in navLinks" :key="navLink">
          {{ navLink.name }}
        </li>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navLinks: [
        {
          name: "ABOUT",
        },
        {
          name: "CONTACT",
        },
        {
          name: "PROFOLIO",
        },
        {
          name: "RESUME",
        },
      ],
    };
  },
};
</script>

<style></style>
