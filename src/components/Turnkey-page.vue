<template>
  <div>
    <HeaderSection />

    <!-- Hero -->
    <PageHero
      badge="ADEEZ CONSTRUCTION"
      title="Complete Turnkey Construction Solutions"
      description="Build your dream home with one trusted partner. From planning and approvals to construction, interiors, and final handover, ADEEZ delivers end-to-end turnkey construction with quality, transparency, and timely execution."
      background="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1800&q=80"
    >
      <template #actions>
<button class="view-btn">
          Get Free Consultation</button>
        <button class="outline">Request Quote</button>
      </template>
    </PageHero>

    <!-- Services -->
    <section class="section">
      <div class="container">

        <div class="section-title">
          <h2>Our Turnkey Construction Services</h2>
          <p>
            We provide complete construction solutions under one roof,
            ensuring a hassle-free experience from concept to completion.
          </p>
        </div>

        <div class="grid">
          <div
            class="card"
            v-for="item in services"
            :key="item.title"
          >
            <img :src="item.image" :alt="item.title">

            <div class="card-content">
              <h3>{{ item.title }}</h3>
              <p>{{ item.desc }}</p>

              <button class="service-btn">
                Learn More
                <span>→</span>
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>

    <!-- Process -->

    <section class="why">

      <div class="container">

        <div class="section-title">
          <h2>Our Construction Process</h2>
          <p>
            A streamlined process that ensures quality, transparency,
            and timely delivery.
          </p>
        </div>

        <div class="features">

          <div
            class="feature"
            v-for="(step,index) in process"
            :key="index"
          >

            <div class="icon">
              {{ index + 1 }}
            </div>

            <h4>{{ step }}</h4>

          </div>

        </div>

      </div>

    </section>

    <!-- CTA -->

    <section class="cta">

      <div class="container">

        <h2>
          Ready to Build Your Dream Home?
        </h2>

        <p>
          Speak with our experts today and receive a free consultation
          along with a customized construction estimate.
        </p>

        <button class="primary-btn">
          Schedule Free Consultation
        </button>

      </div>

    </section>

  </div>
</template>

<script>
import HeaderSection from "./HeaderSection.vue";
import PageHero from "./PageHero.vue";

export default {
  components: {
    HeaderSection,
    PageHero
  },

  data() {
    return {
      services: [
        {
          title: "Architectural Planning",
          desc: "Modern architectural planning with optimized layouts and structural excellence.",
          image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=900&q=80"
        },
        {
          title: "Structural Construction",
          desc: "High-quality residential and commercial construction using premium materials.",
          image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80"
        },
        {
          title: "Interior Works",
          desc: "Luxury interiors including modular kitchens, wardrobes, lighting and décor.",
          image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80"
        },
        {
          title: "MEP Services",
          desc: "Electrical, plumbing and HVAC solutions executed with safety and precision.",
          image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80"
        },
        {
          title: "Quality Inspection",
          desc: "Regular quality checks and project supervision throughout construction.",
          image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80"
        },
        {
          title: "Final Handover",
          desc: "Complete finishing, cleaning and hassle-free project handover.",
          image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80"
        }
      ],

      process: [
        "Free Consultation & Requirement Analysis",
        "Site Visit & Planning",
        "Architectural Design & Approval",
        "Construction Execution",
        "Interior Finishing",
        "Quality Inspection & Project Handover"
      ]
    };
  }
};
</script>

<style scoped>


.actions{
  display:flex;
  gap:18px;
  margin-top:30px;
}

button{
  padding:14px 28px;
  border:none;
  border-radius:50px;
  background:linear-gradient(135deg,#ffb703,#fb8500);
  font-weight:700;
  cursor:pointer;
  transition:all 0.3s ease;
}

button:hover{
  transform:translateY(-3px);
  box-shadow:0 10px 25px rgba(255,183,3,0.3);
}

.outline{
  background:transparent;
  border:2px solid #fff;
  color:#fff;
}

.section{
  padding:90px 0;
}

.section h2{
  font-size:32px;
  margin-bottom:30px;
  font-weight:800;
  color:#0b2239;
}

.grid{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
  gap:26px;
}

.card{
  border-radius:16px;
  overflow:hidden;
  background:#fff;
  box-shadow:0 10px 30px rgba(0,0,0,0.08);
  transition:all 0.3s ease;
  cursor:pointer;
}

.card:hover{
  transform:translateY(-10px);
  box-shadow:0 20px 40px rgba(0,0,0,0.15);
}

.card img{
  width:100%;
  height:180px;
  object-fit:cover;
}

.card h3{
  padding:14px 16px 0;
  font-size:18px;
  font-weight:700;
}

.card p{
  padding:8px 16px 18px;
  color:#555;
  font-size:14px;
  line-height:1.5;
}

.process{
  background:#f7f9fc;
  padding:30px;
  border-radius:14px;
  max-width:600px;
}

.process li{
  margin:12px 0;
  font-size:16px;
  font-weight:500;
  position:relative;
  padding-left:20px;
}

.process li::before{
  content:"✔";
  position:absolute;
  left:0;
  color:#fb8500;
  font-weight:bold;
}

.cta{
  background:linear-gradient(135deg,#0b2239,#0f3559);
  padding:80px 0;
  text-align:center;
  color:#fff;
}

.cta h2{
  font-size:34px;
  font-weight:800;
}

.cta p{
  margin-top:10px;
  opacity:0.8;
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
