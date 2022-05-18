import Homepage from "../components/home.vue";
import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Homepage,
    },
    {
      path: "/link 2",
      name: "link 2",
    },
    {
      path: "/link 3",
      name: "link 3",
    },
    {
      path: "/link 4",
      name: "link 4",
    },
  ],
});

export default router;
