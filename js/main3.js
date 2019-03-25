import HomeComponent from "./components/HomeComponent.js";

const routes = [
  { path: "/", name: "home", component: HomeComponent },
  { path: "/home", name: "Home", component: HomeComponent },
];

const router = new VueRouter({
  routes
});

const vm = new Vue({
  methods: {
    afterLoad: function(origin, destination, direction){
      var loadedSection = this;
  
      //using index
      if(origin.index == 2){
        alert("Section 3 ended loading");
      }
  
      //using anchorLink
      if(origin.anchor == 'secondSlide'){
        alert("Section 2 ended loading");
      }
    }
  },
  
  router: router
}).$mount("#app");


