const vm = new Vue({
  el: '#app',

  data: function(){
    return {
        options: {
            afterLoad: this.afterLoad,
            navigation: true,
            anchors: ['home', 'about', 'process', 'portfolio', 'testimonials', 'skills', 'contact'],
            sectionsColor: ['#41b883', '#ff5f45', '#0798ec', '#fec401', '#1bcee6', '#ee1a59', '#2c3e4f'],
            autoScrolling: false,
            navigation: false,
        },
    }
  },

  methods : {
  },
});
