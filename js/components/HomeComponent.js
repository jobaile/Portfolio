export default {
	template: `
    <full-page :options="options" id="fullpage" ref="fullpage">

        <!-- Landing Section -->
        <div class="section">
            <h3>Landing</h3>
        </div>
        <!-- Landing End -->

        <!-- About Me Section -->
        <div class="section">
            <h3>About</h3>
        </div>
        <!-- About Me Section End-->

        <!-- My Process Section -->
        <div class="section">
            <h3>Process</h3>
        </div>
        <!-- My Process Section End -->

        <!-- My Portfolio Section -->
        <div class="section" id="portfolio-section">

            <!-- Lightbox Start -->
            <div class="lightbox-container" ref="lbox">
                <div class="container-fluid">
                    <!-- Exit button -->
                    <div class="close-button">
                        <button @click="closebox" @keydown.esc="closebox">
                            <span>&times;</span>
                        </button>    
                    </div>
                    <!-- Exit button -->

                    <div class="row">
                        <!-- Portfolio Information -->
                        <div class="col-12 col-lg-7">
                            <h2>{{ pname }}</h2>
                            <p>{{ pcat }}</p>
                            <p>{{ pinfo }}</p>
                            <p>{{ pteam }}</p>
                            <p>{{ pskills}}</p>
                            <a :href="'https://' + pone" class="btn draw-border">Visit Site</a>
                            <a :href="'https://' + ptwo" class="btn draw-border">GitHub</a>
                            <a :href="'assets/' + pthree" class="btn draw-border">Documentation</a>
                        </div>
                        <!-- Portfolio Picture -->
                        <div class="col-12 col-lg-5" id="port-image">
                            <img src="images/monitor-screen.png">
                        </div>
                    </div>
                </div>
            </div>
            <!-- Lightbox end -->

            <h3>Work</h3>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                        <ul>
                            <li><img v-for="item in portdata" :src="'images/portfolio/' + item.p_pic" alt="portfolio pic" width="300"  @click="portdetails(item)"></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <!-- My Portfolio Section End -->

        <!-- Testimonial Section -->
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
        <!-- Testimonial Section End -->

        <!-- Skills Section -->
        <div class="section">
            <h3>Skills</h3>
        </div>
        <!-- Skills Section End -->

        <!-- Contact/Footer Section -->
        <div class="section fp-auto-height" id="contact-section">
            <h3>Contact Me</h3>
            <form id="contact-form">
                <p>Dear Joanna,</p>
                <p>My
                    <label for="your-name">name</label> is
                    <input type="text" name="your-name" id="your-name" minlength="3" placeholder="(your name here)" required> and</p>

                <p>my
                    <label for="email">email address</label> is
                    <input type="email" name="your-email" id="email" placeholder="(your email address)" required>
                </p>

                <p> I have a
                    <label for="your-message">message</label> for you,</p>

                <p>
                    <textarea name="your-message" id="your-message" placeholder="(your msg here)" class="expanding" required></textarea>
                </p>
                <p>
                    <button type="submit"> Send </button>
                </p>
                </form>

            <a href="linkedin.com" class="fab fa-linkedin"></a>
            <a href="github.com" class="fab fa-github-square"></a>
            <a href="#/" class="fas fa-envelope"></a>
        </div>
        <!-- Contact/Footer Section End -->
    </full-page>
    `,

    data: function(){
        return {
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
                navigation: false,
                anchors: ['', '#about', '#process', '#portfolio', '#testimonials', '#skills', '#contact'],
                sectionsColor: ['#000', '#ff5f45', '#0798ec', '#fff', '#1bcee6', '#ee1a59', '#2c3e4f', '#ba5be9', '#b4b8ab'],
                autoScrolling: false,
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
}