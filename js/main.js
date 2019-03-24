import HomeComponent from "./components/HomeComponent.js";

const routes = [
  { path: "/", name: "home", component: HomeComponent },
  { path: "/home", name: "Home", component: HomeComponent },
];

const router = new VueRouter({
  routes
});

const vm = new Vue({
  
  router: router
}).$mount("#app");


