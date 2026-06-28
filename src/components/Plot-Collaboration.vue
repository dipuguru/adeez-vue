
<template>
  <div class="plot-page">

    <HeaderSection />

    <!-- Hero -->
    <PageHero
      badge="LAND DEVELOPMENT"
      title="Transform Your Land into a Landmark Project"
      description="Partner with ADEEZ to unlock the true value of your plot through premium residential and commercial developments. We handle planning, approvals, construction, and project execution while ensuring transparency and maximum returns."
      background="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=80"
    >
      <template #actions>
        <button class="view-btn">
          
          Discuss Your Plot</button>
        <button class="view-btn">
          Free Consultation</button>
      </template>
    </PageHero>

    <!-- Services -->
    <section class="section">

  <div class="container">

    <div class="section-title">

      <span>OUR SERVICES</span>

      <h2>Our Plot Collaboration Services</h2>

      <p>
        We provide complete land development solutions from planning to project
        completion, ensuring maximum value, transparency, and quality at every
        stage.
      </p>

    </div>

    <div class="grid">

      <div
        class="card"
        v-for="service in services"
        :key="service.title"
      >

        <img
          :src="service.image"
          :alt="service.title"
        >

        <div class="card-content">

          <h3>{{ service.title }}</h3>

          <p>{{ service.desc }}</p>

          <button class="service-btn">
            Learn More
            <span>→</span>
          </button>

        </div>

      </div>

    </div>

  </div>

</section>

    <!-- Why Choose -->
<section class="why">

<div class="container">

<div class="section-title">

<span>WHY ADEEZ</span>

<h2>Why Partner With ADEEZ?</h2>

<p>

Our experienced professionals, transparent process, and premium construction
standards ensure that every collaboration delivers long-term value.

</p>

</div>

<div class="features">

<div
class="feature"
v-for="feature in features"
:key="feature.title"
>

<div class="icon">

{{ feature.icon }}

</div>

<h3>

{{ feature.title }}

</h3>

<p>

{{ feature.desc }}

</p>

</div>

</div>

</div>

</section>

<section class="section process">

<div class="container">

<div class="section-title">

<span>HOW IT WORKS</span>

<h2>Our Collaboration Process</h2>

<p>
A transparent six-step process that ensures your project progresses
smoothly from consultation to completion.
</p>

</div>

<div class="features">

<div class="feature">
<div class="icon">1</div>
<h4>Initial Consultation</h4>
<p>We understand your land, vision and development goals.</p>
</div>

<div class="feature">
<div class="icon">2</div>
<h4>Site Assessment</h4>
<p>Detailed technical evaluation and feasibility study.</p>
</div>

<div class="feature">
<div class="icon">3</div>
<h4>Project Proposal</h4>
<p>Transparent partnership model and commercial planning.</p>
</div>

<div class="feature">
<div class="icon">4</div>
<h4>Approvals</h4>
<p>Legal documentation and statutory approvals.</p>
</div>

<div class="feature">
<div class="icon">5</div>
<h4>Construction</h4>
<p>Premium quality construction managed by experts.</p>
</div>

<div class="feature">
<div class="icon">6</div>
<h4>Project Delivery</h4>
<p>Timely completion with complete quality assurance.</p>
</div>

</div>

</div>

</section>

<section class="section faq">

<div class="container">

<div class="section-title">

<span>FAQ</span>

<h2>Frequently Asked Questions</h2>

</div>

<div class="faq-item">
<h3>Who can partner with ADEEZ?</h3>

<p>
Any landowner with residential, commercial, or mixed-use property can
explore a collaboration with us.
</p>

</div>

<div class="faq-item">

<h3>Do I need approvals before contacting ADEEZ?</h3>

<p>
No. Our experts assist with planning, legal documentation, and approval
processes from the beginning.
</p>

</div>

<div class="faq-item">

<h3>How is the partnership structured?</h3>

<p>
Every collaboration is customized based on the property's location,
potential, and development objectives.
</p>

</div>

</div>

</section>
  

    <!-- CTA -->

    <section class="cta">

      <div class="container">

        <h2>Ready to Build Your Dream Project?</h2>

        <p>
          Whether you're constructing a new home, renovating an existing space,
          or planning a commercial project, our experts are here to help.
        </p>

        <button>
          Schedule a Free Consultation
        </button>

      </div>

    </section>

  </div>
</template>

<script>
import HeaderSection from "./HeaderSection.vue";
import PageHero from "./PageHero.vue";

export default {
  name: "PlotCollaboration",

  components: {
    HeaderSection,
    PageHero
  },

  data() {
    return {

      services: [

        {
          title: "Site Evaluation",
          desc: "Our experts perform detailed land inspections, feasibility studies, and development assessments to identify the best opportunities for your property.",
          image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80"
        },

        {
          title: "Architectural Planning",
          desc: "Innovative architectural concepts, optimized layouts, and sustainable building designs that maximize space utilization and long-term value.",
          image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=900&q=80"
        },

        {
          title: "Legal & Approval Support",
          desc: "Complete assistance with documentation, statutory approvals, municipal permissions, and legal compliance throughout the project lifecycle.",
          image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80"
        }

      ],

      features: [

        {
          icon: "🏗️",
          title: "Premium Construction",
          desc: "We deliver high-quality developments using trusted materials and modern construction practices."
        },

        {
          icon: "🤝",
          title: "Transparent Partnership",
          desc: "Complete transparency in planning, execution, costing, and revenue sharing throughout the project."
        },

        {
          icon: "👷",
          title: "Experienced Team",
          desc: "Dedicated architects, engineers, designers, and project managers working together for successful delivery."
        },

        {
          icon: "📑",
          title: "Legal Assistance",
          desc: "Professional support for approvals, documentation, compliance, and government permissions."
        },

        {
          icon: "⏱️",
          title: "On-Time Delivery",
          desc: "Well-planned project execution ensures timely completion without compromising quality."
        },

        {
          icon: "📈",
          title: "Maximum Returns",
          desc: "Our development strategies help maximize the value and profitability of your property."
        }

      ],

      process: [

        {
          title: "Initial Consultation",
          desc: "We understand your land details, development goals, and investment expectations."
        },

        {
          title: "Site Inspection",
          desc: "Our technical team visits your property for detailed evaluation and feasibility analysis."
        },

        {
          title: "Project Planning",
          desc: "Architectural concepts, financial planning, and development proposals are prepared."
        },

        {
          title: "Legal & Approvals",
          desc: "Documentation, permissions, statutory approvals, and compliance are handled by our experts."
        },

        {
          title: "Construction",
          desc: "Professional execution with continuous monitoring, quality assurance, and transparent updates."
        },

        {
          title: "Project Completion",
          desc: "Final inspection, quality checks, and successful project delivery with complete satisfaction."
        }

      ],

      stats: [

        {
          number: "500+",
          title: "Projects Delivered",
          desc: "Residential & Commercial"
        },

        {
          number: "10+",
          title: "Years Experience",
          desc: "Construction Excellence"
        },

        {
          number: "98%",
          title: "Happy Clients",
          desc: "Customer Satisfaction"
        },

        {
          number: "50+",
          title: "Experts",
          desc: "Architects & Engineers"
        }

      ],

      faqs: [

        {
          question: "Who can collaborate with ADEEZ?",
          answer: "Any individual or organization owning residential, commercial, or mixed-use land can explore collaboration opportunities with ADEEZ."
        },

        {
          question: "Do I need approvals before contacting ADEEZ?",
          answer: "No. Our team assists with legal documentation, approvals, and regulatory compliance from the beginning."
        },

        {
          question: "How is revenue shared?",
          answer: "Every collaboration is customized based on project scope, land value, investment, and mutually agreed commercial terms."
        },

        {
          question: "How long does the entire process take?",
          answer: "The timeline depends on project size and approvals, but our structured project management ensures timely execution."
        }

      ]

    };
  }
};
</script>

<style scoped>

/* =========================
   Common
========================= */

.container{
    width:90%;
    max-width:1200px;
    margin:auto;
}

.section{
    padding:100px 0;
}

.section-title{
    text-align:center;
    max-width:800px;
    margin:0 auto 70px;
}

.section-title span{
    display:inline-block;
    color:#f6b100;
    font-weight:700;
    letter-spacing:2px;
    text-transform:uppercase;
    margin-bottom:15px;
}

.section-title h2{
    font-size:42px;
    color:#071223;
    margin-bottom:20px;
}

.section-title p{
    color:#666;
    font-size:18px;
    line-height:1.8;
}

/* =========================
   Services
========================= */

.grid{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
    gap:30px;
}

.card{
    background:#fff;
    border-radius:18px;
    overflow:hidden;
    box-shadow:0 12px 35px rgba(0,0,0,.08);
    transition:.35s;
}

.card:hover{
    transform:translateY(-10px);
    box-shadow:0 20px 45px rgba(0,0,0,.15);
}

.card img{
    width:100%;
    height:240px;
    object-fit:cover;
}

.card-content{
    padding:30px;
}

.card h3{
    color:#071223;
    margin-bottom:15px;
}

.card p{
    color:#666;
    line-height:1.8;
    margin-bottom:25px;
}

.service-btn{
    display:inline-flex;
    align-items:center;
    gap:10px;
    background:#071223;
    color:#fff;
    padding:13px 26px;
    border:none;
    border-radius:40px;
    font-weight:600;
    cursor:pointer;
    transition:.3s;
}

.service-btn span{
    transition:.3s;
}

.service-btn:hover{
    background:#f6b100;
    color:#071223;
}

.service-btn:hover span{
    transform:translateX(6px);
}

/* =========================
   Why Choose
========================= */

.why{
    background:#f8fafc;
    padding:100px 0;
}

.features{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
    gap:30px;
}

.feature{
    background:#fff;
    padding:35px;
    border-radius:18px;
    text-align:center;
    transition:.35s;
    box-shadow:0 10px 30px rgba(0,0,0,.08);
}

.feature:hover{
    transform:translateY(-8px);
    background:#071223;
    color:#fff;
}

.feature .icon{
    width:75px;
    height:75px;
    border-radius:50%;
    background:#f6b100;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:32px;
    margin:0 auto 20px;
}

.feature h3{
    margin-bottom:15px;
}

.feature p{
    line-height:1.8;
    opacity:.9;
}

/* =========================
   Timeline
========================= */

.process{
    padding:100px 0;
}

.timeline{
    max-width:900px;
    margin:auto;
}

.step{
    display:flex;
    gap:30px;
    margin-bottom:40px;
    align-items:flex-start;
}

.step-number{
    min-width:70px;
    width:70px;
    height:70px;
    border-radius:50%;
    background:#f6b100;
    color:#071223;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:24px;
    font-weight:700;
}

.step-content{
    background:#fff;
    padding:30px;
    border-radius:18px;
    flex:1;
    box-shadow:0 10px 25px rgba(0,0,0,.08);
}

.step-content h3{
    color:#071223;
    margin-bottom:12px;
}

.step-content p{
    color:#666;
    line-height:1.8;
}

/* =========================
   Stats
========================= */

.stats{
    background:linear-gradient(135deg,#071223,#0b2a4a);
    color:#fff;
    padding:90px 0;
}

.stats-grid{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
    gap:25px;
}

.stat-card{
    text-align:center;
}

.stat-number{
    font-size:48px;
    color:#f6b100;
    font-weight:800;
    margin-bottom:10px;
}

.stat-card h3{
    margin-bottom:10px;
}

.stat-card p{
    opacity:.85;
}

/* =========================
   FAQ
========================= */

.faq{
    padding:100px 0;
    background:#fff;
}

.faq-list{
    max-width:900px;
    margin:auto;
}

.faq-item{
    padding:30px;
    border-radius:16px;
    background:#fff;
    margin-bottom:20px;
    box-shadow:0 10px 30px rgba(0,0,0,.08);
    transition:.3s;
}

.faq-item:hover{
    transform:translateY(-5px);
}

.faq-item h3{
    color:#071223;
    margin-bottom:15px;
}

.faq-item p{
    color:#666;
    line-height:1.8;
}

/* =========================
   CTA
========================= */

.cta{

    position:relative;

    padding:110px 0;

    text-align:center;

background:url("https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1800&q=80") center/cover no-repeat;    

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

/* =========================
   Responsive
========================= */

@media(max-width:768px){

.section{
    padding:70px 0;
}

.section-title h2{
    font-size:32px;
}

.section-title p{
    font-size:16px;
}

.step{
    flex-direction:column;
}

.step-number{
    margin:auto;
}

.step-content{
    text-align:center;
}

.cta h2{
    font-size:32px;
}

.stat-number{
    font-size:38px;
}

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