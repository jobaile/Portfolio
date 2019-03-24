(()=> {
    const vm = new Vue({
      el: '#app',
  
      data: {
        //Portfolio details
        portdata : [],
        singleportdata : [],
  
        pname: "", //portfolio name
        ppic: "",
        ppictwo: "",
        pinfo: "", //portfolio info
        pcat: "", //portfolio category
        pteam: "",
        pskills: "",
        plinkone: "",
        plinktwo: ""
      },
  
      // data: function(){
      //   return {
      //       // //Fullpage
      //       // options: {
      //       //     afterLoad: this.afterLoad,
      //       //     navigation: true,
      //       //     anchors: ['home', 'about', 'process', 'portfolio', 'testimonials', 'skills', 'contact'],
      //       //     sectionsColor: ['#41b883', '#ff5f45', '#0798ec', '#fec401', '#1bcee6', '#ee1a59', '#2c3e4f'],
      //       //     autoScrolling: false,
      //       //     navigation: false,
      //       // },
      //   }
      // },
  
      methods : {
        fetchPortfolioData(portfolio) {
          let url = portfolio ? `./admin/portfolio.php?portfolio=${portfolio}` : './admin/portfolio.php';
  
          fetch(url) // pass in the one or many query
          .then(res => res.json())
          .then(data => {
              this.portdata = data;
              this.singleportdata = data[0];
              console.log(data);
          })
          .catch(function(error) {
              console.log(error);
          });
      },
      },
  
    });
  })();