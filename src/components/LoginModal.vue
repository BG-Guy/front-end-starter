<template>
  <div class="modal-container">
    <div class="modal">
      <div class="header">
        <span class="close-btn" @click="toggleModal">
          <CloseIcon />
        </span>
        <h1 class="title">Login</h1>
      </div>
      <div class="input-field">
        <p>Username</p>
        <input type="text" v-model="userInfo.name" />
      </div>
      <div class="input-field">
        <p>Password</p>
        <input type="password" v-model="userInfo.password" />
      </div>
      <button @click="onLogin" class="login-btn">Login</button>
    </div>
  </div>
</template>

<script>
import { userService } from "../services/user-service";
import CloseIcon from "../svgs/close-icon.vue";
export default {
  data() {
    return {
      userInfo: {
        name: "",
        password: "",
      },
    };
  },
  methods: {
    onLogin() {
      userService.login(this.userInfo);
      this.$emit("onToggleModal");
    },
    toggleModal() {
      this.$emit("onToggleModal");
    },
  },
  components: { CloseIcon },
};
</script>
