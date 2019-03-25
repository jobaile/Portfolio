(()=> {
    const vm = new Vue({
      el: '#app',
  
      data: function(){
        return {
            //My Work
            processdata : [],

            singleprocessdata: {},

            wname: "",
            winfo: "",

            //Portfolio Info
            portdata : [],

            pname: "", //name
            pcat: "", //category
            pinfo: "", //info
            pteam: "", //team
            pskills: "", //made with
            ppic: "", //pic two
            pone: "", //link one
            ptwo: "", //github
            pthree: "", //documentation

            options: {
                afterLoad: this.afterLoad,
                navigation: true,
                navigationTooltips: ['Landing', 'About', 'Process', 'Portfolio', 'Contact', 'Footer'],
                anchors: ['', 'about', 'process', 'portfolio', 'contact', 'footer'],
                sectionsColor: ['#1c1c1c', '#f7f7f7', '#1c1c1c', '#f7f7f7', '#1c1c1c', '#FDD953'],
                autoScrolling: false,
                fitToSection: false,
            },
        }
    },

    created : function() {
        this.fetchPortfolioData(null);
        this.fetchProcessData(null);
    },

    methods: {
    
        fetchProcessData(process) {
            let url = process ? `./admin/process.php?process=${process}` : `./admin/process.php`;
    
            fetch(url) // pass in the one or many query
            .then(res => res.json())
            .then(data => {
                this.processdata = data;
                this.singleprocessdata = data[0];
                console.log(data);
            })
            .catch(function(error) {
                console.log(error);
            });
        },

        processdetails({w_title, w_info}){
            this.wname = w_title;
            this.winfo = w_info;
        },

        fetchPortfolioData(portfolio) {
            let url = portfolio ? `./admin/portfolio.php?portfolio=${portfolio}` : `./admin/portfolio.php`;
    
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


        portdetails({p_name, p_category, p_info, p_team, p_skills, p_pictwo, p_linkone, p_linktwo, p_three}){
            console.log('lightbox');
            this.$refs.lbox.style.display = "block";

            this.pname = p_name;
            this.pcat = p_category; 
            this.pinfo = p_info;
            this.pteam = p_team;
            this.pskills = p_skills;
            this.ppic = p_pictwo;
            this.pone = p_linkone;
            this.ptwo = p_linktwo;
            this.pthree = p_three;
        },


        closebox: function() {
            //closes the lightbox
          this.$refs.lbox.style.display = "none";
        },
    }
  
    });
  })();