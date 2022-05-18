import { createStore } from "vuex";
import { userStore } from "./modules/user.store";

// create a store instance
const store = createStore({
  strict: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {},

  modules: {
    gigStore,
    orderStore,
    userStore,
  },
});

export default store;
