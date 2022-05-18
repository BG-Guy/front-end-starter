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
        <li class="sign-in-btn" @click="toggleModal">Sign In</li>
      </div>
      <HamburgerMenu class="hamburger-menu-icon" />
    </nav>
  </section>
  <LoginModal v-if="isShowModal" @onToggleModal="toggleModal" />
</template>

<script>
import HamburgerMenu from "../svgs/hamburger-menu.vue";
import LoginModal from "../components/LoginModal.vue";

export default {
  components: {
    HamburgerMenu,
    LoginModal,
  },
  data() {
    return {
      isShowModal: false,
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
          name: "Link 3",
          path: "link 3",
          isActive: false,
        },
        {
          name: "Link 4",
          path: "link 4",
          isActive: false,
        },
      ],
    };
  },
  methods: {
    toggleModal() {
      this.isShowModal = !this.isShowModal;
      console.log(this.isShowModal);
    },
  },
};
</script>
