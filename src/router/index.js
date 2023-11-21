import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Cart from "@/views/Cart.vue";
import CatalogDetails from "@/views/Catalog/CatalogDetails.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/cart",
    name: "cart",
    component: Cart,
  },
  {
    path: "/catalog/:id",
    name: "catalogDetails",
    component: CatalogDetails,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
