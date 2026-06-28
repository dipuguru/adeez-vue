<template>
  <div>

    <HeaderSection />

    <!-- Hero -->
 

<PageHero
      badge="ADEEZ CONSTRUCTION"
        title="Building Excellence Through Every Project"

  description="Discover our portfolio of luxury villas, residential developments, commercial buildings, renovation projects, and premium interiors delivered with quality, innovation, and craftsmanship."
  background="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1800&q=80"
    >
  <template #actions>
<button class="view-btn">
  View Project
  <span>→</span>
</button>   
<button class="view-btn">
      Get Free Consultation
    </button>
  </template>
</PageHero>

    <!-- Section Heading -->
    <section class="section-title">
      <div class="container">

        <h2>Featured Projects</h2>

        <p>
          Every project reflects our commitment to quality construction,
          innovative design, and timely delivery.
        </p>

      </div>
    </section>

    <!-- Projects -->

    <section class="projects-section">

      <div class="container">

        <div class="project-grid">

          <div
            class="project-card"
            v-for="project in projects"
            :key="project.title"
          >

            <div class="image-box">

              <img
                :src="project.image"
                :alt="project.title"
              >

              <div class="overlay">
                <button>
                  View Details
                </button>
              </div>

            </div>

            <div class="project-content">

              <span class="location">
                📍 {{ project.location }}
              </span>

              <h3>{{ project.title }}</h3>

              <p>{{ project.desc }}</p>

            </div>

          </div>

        </div>

      </div>

    </section>

    <!-- Stats -->

    <section class="stats">

      <div class="container stats-grid">

        <div
          class="stat-box"
          v-for="item in stats"
          :key="item.title"
        >

          <div class="icon">
            {{ item.icon }}
          </div>

          <h2>{{ item.number }}</h2>

          <p>{{ item.title }}</p>

        </div>

      </div>

    </section>

    <!-- Why Choose -->

    <section class="why-section">

      <div class="container">

        <div class="section-heading">

          <h2>Why Our Projects Stand Out</h2>

          <p>
            We combine innovative engineering, modern architecture and
            uncompromising quality to create exceptional spaces.
          </p>

        </div>

        <div class="features">

          <div
            class="feature"
            v-for="feature in features"
            :key="feature.title"
          >

            <div class="feature-icon">
              {{ feature.icon }}
            </div>

            <h3>{{ feature.title }}</h3>

            <p>{{ feature.desc }}</p>

          </div>

        </div>

      </div>

    </section>

    <!-- CTA -->

    <section class="cta">

      <div class="container">

        <h2>
          Ready To Build Your Dream Project?
        </h2>

        <p>
          Let's transform your ideas into beautifully crafted spaces with
          precision and excellence.
        </p>

        <button class="primary-btn">
          Start Your Project
        </button>

      </div>

    </section>

  </div>
</template>
<script>
import HeaderSection from "./HeaderSection.vue";
import PageHero from "./PageHero.vue";

export default {
  name: "ProjectsPage",

  components: {
    HeaderSection,
    PageHero
  },

  data() {
    return {
      projects: [
        {
          title: "Luxury Villa",
          location: "Pune",
          desc: "Modern luxury villa with premium interiors and landscaped surroundings.",
          image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg"
        },
        {
          title: "Residential Apartments",
          location: "Mumbai",
          desc: "High-rise residential development with contemporary architecture.",
          image: "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg"
        },
        {
          title: "Corporate Office",
          location: "Nashik",
          desc: "Modern office building designed for productivity and sustainability.",
          image: "https://images.pexels.com/photos/534220/pexels-photo-534220.jpeg"
        },
        {
          title: "Luxury Interiors",
          location: "Nagpur",
          desc: "Elegant interior execution with premium finishes and custom furniture.",
          image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg"
        },
        {
          title: "Modern Bungalow",
          location: "Aurangabad",
          desc: "Contemporary bungalow featuring spacious living and natural lighting.",
          image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg"
        },
        {
          title: "Commercial Complex",
          location: "Thane",
          desc: "Commercial development built for modern retail and office spaces.",
          image: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg"
        }
      ],

      stats: [
        {
          icon: "🏗",
          number: "500+",
          title: "Projects Completed"
        },
        {
          icon: "👷",
          number: "10+",
          title: "Years Experience"
        },
        {
          icon: "⭐",
          number: "98%",
          title: "Client Satisfaction"
        },
        {
          icon: "🏢",
          number: "50+",
          title: "Expert Engineers"
        }
      ],

      features: [
        {
          icon: "✔",
          title: "Premium Quality",
          desc: "Only high-grade materials and modern construction practices."
        },
        {
          icon: "⚡",
          title: "Timely Delivery",
          desc: "Projects completed on schedule without compromising quality."
        },
        {
          icon: "🏆",
          title: "Experienced Team",
          desc: "Professional architects, engineers and skilled craftsmen."
        },
        {
          icon: "🤝",
          title: "Customer First",
          desc: "Transparent communication and complete client satisfaction."
        }
      ]
    };
  }
};
</script>

<style scoped>


/* ===========================
 Buttons
=========================== */

.primary-btn{
  background:#ffb400;
  color:#111;
  border:none;
  padding:16px 35px;
  border-radius:40px;
  font-size:16px;
  font-weight:700;
  cursor:pointer;
  transition:.35s;
}

.primary-btn:hover{
  transform:translateY(-5px);
  box-shadow:0 20px 40px rgba(255,180,0,.35);
}

.secondary-btn{
  background:transparent;
  color:#fff;
  border:2px solid rgba(255,255,255,.4);
  padding:16px 35px;
  border-radius:40px;
  cursor:pointer;
  transition:.35s;
}

.secondary-btn:hover{
  background:#fff;
  color:#111;
}

/* ===========================
 Titles
=========================== */
.container{
    width:90%;
    max-width:1200px;
    margin:auto;
}

.section-title{
    padding:90px 0 20px;
    text-align:center;
}

.section-title h2{
    font-size:42px;
    color:#071223;
    margin-bottom:18px;
}

.section-title p{
    max-width:700px;
    margin:auto;
    color:#666;
    line-height:1.8;
}
/* ===========================
 Projects
=========================== */

.projects-section{
  padding:30px 0 90px;
}

.project-grid{

  display:grid;

  grid-template-columns:
  repeat(auto-fit,minmax(350px,1fr));

  gap:35px;
}

.project-card{

  background:#fff;

  border-radius:18px;

  overflow:hidden;

  transition:.4s;

  box-shadow:0 15px 35px rgba(0,0,0,.08);

}

.project-card:hover{

  transform:translateY(-12px);

}

.image-box{

  position:relative;

  overflow:hidden;

}

.image-box img{

  width:100%;

  height:260px;

  object-fit:cover;

  transition:.5s;

}

.project-card:hover img{

  transform:scale(1.1);

}

.overlay{

  position:absolute;

  inset:0;

  background:rgba(5,15,30,.55);

  display:flex;

  justify-content:center;

  align-items:center;

  opacity:0;

  transition:.4s;

}

.project-card:hover .overlay{

  opacity:1;

}

.overlay button{

  background:#ffb400;

  border:none;

  padding:14px 28px;

  border-radius:30px;

  font-weight:700;

  cursor:pointer;

}

.project-content{

  padding:28px;

}

.location{

  color:#ff9800;

  font-size:15px;

  font-weight:700;

}

.project-content h3{

  margin:15px 0;

  font-size:24px;

  color:#071223;

}

.project-content p{

  color:#666;

  line-height:1.7;

}

/* ===========================
 Stats
=========================== */

.stats{

  padding:90px 0;

  background:#071223;

}

.stats-grid{

display:grid;

grid-template-columns:
repeat(auto-fit,minmax(220px,1fr));

gap:30px;

}

.stat-box{

background:#fff;

border-radius:20px;

padding:40px;

text-align:center;

transition:.35s;

}

.stat-box:hover{

transform:translateY(-10px);

}

.icon{

font-size:42px;

margin-bottom:20px;

}

.stat-box h2{

font-size:42px;

color:#ff9800;

margin-bottom:10px;

}

.stat-box p{

color:#555;

}
/*======================================
  WHY CHOOSE US
======================================*/

.why-section{
    padding:100px 0;
    background:#fff;
}

.section-heading{
    text-align:center;
    margin-bottom:60px;
}

.section-heading h2{
    font-size:42px;
    color:#071223;
    margin-bottom:18px;
    font-weight:800;
}

.section-heading p{
    max-width:720px;
    margin:auto;
    color:#666;
    line-height:1.8;
    font-size:17px;
}

.features{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(260px,1fr));
    gap:30px;
}

.feature{
    background:#fff;
    border-radius:18px;
    padding:35px;
    text-align:center;
    transition:.35s;
    box-shadow:0 15px 40px rgba(0,0,0,.08);
}

.feature:hover{
    transform:translateY(-10px);
}

.feature-icon{
    width:80px;
    height:80px;
    margin:auto;
    margin-bottom:25px;
    border-radius:50%;
    background:#ffb400;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:34px;
}

.feature h3{
    color:#071223;
    margin-bottom:15px;
    font-size:22px;
}

.feature p{
    color:#666;
    line-height:1.7;
}

/*======================================
CTA
======================================*/

.cta{

    position:relative;

    padding:110px 0;

    text-align:center;

    background:url("https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg")
    center/cover no-repeat;

    overflow:hidden;

}

.cta::before{

    content:"";

    position:absolute;

    inset:0;

    background:rgba(5,18,35,.82);

}

.cta .container{

    position:relative;

    z-index:2;

}

.cta h2{

    color:#fff;

    font-size:46px;

    margin-bottom:20px;

    font-weight:800;

}

.cta p{

    color:#ddd;

    max-width:700px;

    margin:auto;

    margin-bottom:40px;

    line-height:1.8;

    font-size:18px;

}

.cta button{

    background:#ffb400;

    color:#111;

    border:none;

    padding:18px 42px;

    border-radius:50px;

    font-size:17px;

    font-weight:700;

    cursor:pointer;

    transition:.35s;

}

.cta button:hover{

    transform:translateY(-5px);

    box-shadow:0 20px 40px rgba(255,180,0,.35);

}

/*======================================
Animations
======================================*/

.project-card,
.feature,
.stat-box{

    transition:all .4s ease;

}

.primary-btn,
.secondary-btn,
.overlay button,
.cta button{

    transition:.35s ease;

}

.project-card:hover{

    box-shadow:0 25px 60px rgba(0,0,0,.18);

}

.feature:hover{

    box-shadow:0 20px 50px rgba(0,0,0,.12);

}

/*======================================
Responsive
======================================*/

@media(max-width:1200px){

.hero h1{

font-size:50px;

}

}

@media(max-width:992px){

.hero{

height:auto;

padding:170px 0 100px;

}

.hero h1{

font-size:42px;

}

.hero p{

font-size:17px;

}

.project-grid{

grid-template-columns:repeat(2,1fr);

}

.stats-grid{

grid-template-columns:repeat(2,1fr);

}

.features{

grid-template-columns:repeat(2,1fr);

}

}

@media(max-width:768px){

.hero{

padding:150px 0 80px;

text-align:center;

}

.hero h1{

font-size:34px;

}

.hero p{

font-size:16px;

}

.hero-buttons{

flex-direction:column;

align-items:center;

}

.section-title h2,
.section-heading h2,
.cta h2{

font-size:32px;

}

.project-grid{

grid-template-columns:1fr;

}

.features{

grid-template-columns:1fr;

}

.stats-grid{

grid-template-columns:1fr;

}

.project-content{

padding:22px;

}

}

@media(max-width:576px){

.container{

width:92%;

}



.primary-btn,
.secondary-btn,
.cta button{

width:100%;

}

.project-content h3{

font-size:22px;

}

.section-heading h2{

font-size:30px;

}

}

/*======================================
Scrollbar
======================================*/

::-webkit-scrollbar{

width:8px;

}

::-webkit-scrollbar-thumb{

background:#ffb400;

border-radius:20px;

}

::-webkit-scrollbar-track{

background:#ececec;

}
.view-btn{
    display:inline-flex;
    align-items:center;
    gap:10px;
    background:#ffb400;
    color:#071223;
    padding:14px 28px;
    border:none;
    border-radius:40px;
    font-weight:700;
    cursor:pointer;
    transition:.35s;
}

.view-btn:hover{
    transform:translateY(-3px);
    box-shadow:0 15px 35px rgba(255,180,0,.4);
}

.view-btn span{
    transition:.3s;
}

.view-btn:hover span{
    transform:translateX(6px);
}
</style>