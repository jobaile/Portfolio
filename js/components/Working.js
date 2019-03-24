export default {
	template: `
    <div>
    <ul id="menu">
            <li data-menuanchor="about"><a href="#about">About</a></li>
            <li data-menuanchor="process"><a href="#process">Process</a></li>
            <li data-menuanchor="portfolio"><a href="#portfolio">Work</a></li>
            <li data-menuanchor="testimonials"><a href="#testimonials">Testimonials</a></li>
            <li data-menuanchor="skills"><a href="#skills">Skills</a></li>
            <li data-menuanchor="contact"><a href="#contact">Contact</a></li>
        </ul>
        <full-page :options="options" id="fullpage" ref="fullpage">
            <div class="section">
                <h3>Landing</h3>
            </div>
            <div class="section">
                <h3>About</h3>
            </div>
            <div class="section">
                <h3>Process</h3>
            </div>
            <div class="section">
                <h3>Work</h3>
                <ul>
                    <li><img v-for="item in portdata" :src="'images/portfolio/' + item.p_pic" alt="portfolio pic" width="100"></li>
                </ul>
            </div>
            <div class="section">
                <div class="slide">
                    <h3>Testimonial</h3>
                </div>
                <div class="slide">
                    <h3>Slide 2.2</h3>
                </div>
                <div class="slide">
                    <h3>Slide 2.3</h3>
                </div>
            </div>
            <div class="section">
                <h3>Skills</h3>
            </div>
            <div class="section">
                <h3>Contact</h3>
            </div>
        </full-page>
    </div>
    `,

    data: function(){
        return {
            portdata: [],

            options: {
                afterLoad: this.afterLoad,
                navigation: true,
                anchors: ['', 'about', 'process', 'portfolio', 'testimonials', 'skills', 'contact'],
                sectionsColor: ['#41b883', '#ff5f45', '#0798ec', '#fec401', '#1bcee6', '#ee1a59', '#2c3e4f', '#ba5be9', '#b4b8ab'],
                autoScrolling: false,
                navigation: false,
            },
        }
    },

    created : function() {
        this.fetchPortfolioData(null);
      },
    

    methods: {
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
    }
}