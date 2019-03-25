export default {
	template: `
    <full-page :options="options" id="fullpage" ref="fullpage">

        <!-- Landing Section -->
        <div class="section" id="landing-section">
            <h1>Joanna Baile</h1>
            <h2>Web Developer and Designer</h2>
            <div class="landing-social">
                <a href="https://www.linkedin.com/in/joannabaile" class="fab fa-linkedin-in"></a>
                <a href="https://github.com/jobaile/" class="fab fa-github"></a>
                <a href="https://www.instagram.com/joannabaile/" class="fab fa-instagram"></a>
                <a href="#/" class="far fa-envelope"></a>
            </div>
            <a href="#about" class="scroll-down" address="true"></a>
        </div>
        <!-- Landing End -->

        <!-- About Me Section -->
        <div class="section" id="about-section">
            <h2 class="title-line">About Me</h2>
            <div class="container row">
                <div class="col-12 col-lg-8 offset-lg-1">
                <p><b>Who Am I?</b></p>
                <p>I’m from the Greater Toronto Area studying in London, Ontario to be a web developer. 
                I’m into a lot of different things and one day want to climb Mount Everest even though 
                I’m terrified of heights.

                I want to be a part of projects that I can be proud of, 
                while being a part of an amazing team to help further my career in development. 
                Take some time to look at my work and if you’re interested in helping me make my dream happen, 
                let’s get in touch.</p>

                <p><b>Why?</b></p>
                <p>I found what I like to do. I like to challenge myself.</p>

                <a href="assets/resume.pdf" class="btn draw-border">My Resume</a>
                <a href="#" class="btn draw-border">More About me</a>
                </div>
                <div class="col-8 col-lg-3">
                    <img src="images/joanna.jpg">
                </div>
            </div>
        </div>
        <!-- About Me Section End-->

        <!-- My Process Section -->
        <div class="section" id="process-section">
            <h2 class="title-line">My Process</h2>
            <div class="row container">
                <div class="col-12 col-lg-4 ">
                    <ul class="process-list">
                        <li><img v-for="list in processdata" :src="'images/icons/' + list.w_icon" alt="process pic" @click="processdetails(list)"></li>
                    </ul>
                </div>
                <div class="col-12">
                        <h4>{{ wname }}</h4>
                        <p>{{ winfo }}</p>
                </div>
            </div>
        </div>
        <!-- My Process Section End -->

        <!-- My Portfolio Section -->
        <div class="section" id="portfolio-section">

        <h2 class="title-line">My Work</h2>


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
                            <h3>{{ pname }}</h3>
                            <h4>{{ pcat }}</h4>
                            <p>{{ pinfo }}</p>
                            <p><b>Team Members:<br></b>{{ pteam }}</p>
                            <p><b>Made With:<br></b>{{ pskills}}</p>
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

            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                        <ul>
                            <li><img v-for="item in portdata" :src="'images/portfolio/' + item.p_pic" alt="portfolio pic" @click="portdetails(item)"></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <!-- My Portfolio Section End -->

        <!-- Contact Section -->
        <div class="section" id="contact-section">
            <h2 class="title-line">Get in touch</h2>
            
            <form id="contact-form" action="admin/scripts/sendEmail.php" method="POST">
            <p>Hey!</p>
                <p>My
                    <label for="your-name">name</label> is
                    <input type="text" name="your-name" id="your-name" minlength="3" placeholder="(your name)" required> and</p>

                <p>my
                    <label for="email">email address</label> is
                    <input type="email" name="your-email" id="email" placeholder="(your email)" required>
                </p>

                <p> I have a
                    <label for="your-message">message</label> for you,</p>

                <p>
                    <textarea name="your-message" id="your-message" placeholder="(your message)" class="expanding" required></textarea>
                </p>
                <p>
                    <input type="submit" class="btn draw-border"></input>
                </p>
            </form>
        </div>
        <!-- Contact Section End -->

        <footer class="section fp-auto-height">
            <p>Joanna Baile. Made with love.</p>
        </footer>
    </full-page>
    `,

    // data: function(){
    //     return {
    //         //My Work
    //         processdata : [],
    //         wname: "",
    //         winfo: "",

    //         //Portfolio Info
    //         portdata : [],

    //         pname: "", //name
    //         pcat: "", //category
    //         pinfo: "", //info
    //         pteam: "", //team
    //         pskills: "", //made with
    //         ppic: "", //pic two
    //         pone: "", //link one
    //         ptwo: "", //github
    //         pthree: "", //documentation

    //         options: {
    //             afterLoad: this.afterLoad,
    //             navigation: false,
    //             anchors: ['#', '#about', '#process', '#portfolio', '#contact', '#footer'],
    //             sectionsColor: ['#000', '#f7f7f7', '#FDD953', '#fff', '#000', '#FDD953'],
    //             autoScrolling: false,
    //         },
    //     }
    // },

    // created : function() {
    //     this.fetchPortfolioData(null);
    //     this.fetchProcessData(null);
    // },

    // methods: {
    //     fetchProcessData(process) {
    //         let url = process ? `./admin/process.php?process=${process}` : './admin/process.php';
    
    //         fetch(url) // pass in the one or many query
    //         .then(res => res.json())
    //         .then(data => {
    //             this.processdata = data;
    //             this.singleprocessdata = data[0];
    //             console.log(data);
    //         })
    //         .catch(function(error) {
    //             console.log(error);
    //         });
    //     },

    //     processdetails({w_title, w_info}){
    //         this.wname = w_title;
    //         this.winfo = w_info;
    //     },

    //     fetchPortfolioData(portfolio) {
    //         let url = portfolio ? `./admin/portfolio.php?portfolio=${portfolio}` : './admin/portfolio.php';
    
    //         fetch(url) // pass in the one or many query
    //         .then(res => res.json())
    //         .then(data => {
    //             this.portdata = data;
    //             this.singleportdata = data[0];
    //             console.log(data);
    //         })
    //         .catch(function(error) {
    //             console.log(error);
    //         });
    //     },


    //     portdetails({p_name, p_category, p_info, p_team, p_skills, p_pictwo, p_linkone, p_linktwo, p_three}){
    //         console.log('lightbox');
    //         this.$refs.lbox.style.display = "block";

    //         this.pname = p_name;
    //         this.pcat = p_category; 
    //         this.pinfo = p_info;
    //         this.pteam = p_team;
    //         this.pskills = p_skills;
    //         this.ppic = p_pictwo;
    //         this.pone = p_linkone;
    //         this.ptwo = p_linktwo;
    //         this.pthree = p_three;
    //     },


    //     closebox: function() {
    //         //closes the lightbox
    //       this.$refs.lbox.style.display = "none";
    //     },
    // }
}