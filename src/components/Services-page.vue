<template>
  <div>
    <HeaderSection />
    <PageHero
      badge="ADEEZ CONSTRUCTION"
      title="Our Services"
      description="From planning to handover, ADEEZ delivers complete construction and interior solutions for homes, villas, apartments and commercial projects."
      background="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1800&q=80"
    >
      <template #actions>
        <button class="view-btn">Explore Services</button>
        <button class="view-btn">Get Consultation</button>
      </template>
    </PageHero>

    <!-- Services -->
    <section class="section">
      <div class="container">

        <div class="section-title">
          <h2>Our Professional Services</h2>
          <p>
            From concept to completion, we deliver high-quality solutions with
            precision, innovation, and transparency.
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

              <router-link
  to="/services/turnkey-construction"
  class="service-btn"
>
  Learn More
  <span class="arrow">→</span>
</router-link>
            </div>

          </div>
        </div>

      </div>
    </section>

    <!-- Why Choose -->

    <section class="why">

      <div class="container">

        <div class="section-title">
          <h2>Why Choose ADEEZ?</h2>

          <p>
            We combine engineering expertise, premium materials, and transparent
            execution to deliver exceptional results.
          </p>
        </div>

        <div class="features">

          <div
            class="feature"
            v-for="item in features"
            :key="item"
          >
            <span>✔</span>
            {{ item }}
          </div>

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
import HeaderSection from './HeaderSection.vue'
import PageHero from "./PageHero.vue"


export default{
  components:{HeaderSection,PageHero},
  data(){
    return{
     services: [
{
title: "Turnkey Construction",
desc: "Complete residential and commercial construction from design to handover.",
image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80"
},
{
title: "Plot Collaboration",
desc: "Partner with ADEEZ to maximize your land value through smart development.",
image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
},
{
title: "Architectural Design",
desc: "Creative planning, floor plans and modern architectural solutions.",
image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=800&q=80"
},
{
title: "Interior Design",
desc: "Luxury interiors with modular kitchens, wardrobes and premium finishes.",
image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80"
},
{
title: "Renovation & Remodeling",
desc: "Transform your existing home into a modern living space.",
image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80"
},
{
title: "Project Management",
desc: "Professional supervision, quality control and on-time project delivery.",
image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"
}
]
    }
  }
}
</script>

<style scoped>

.card{
    background:#fff;
    border-radius:18px;
    overflow:hidden;
    box-shadow:0 15px 40px rgba(0,0,0,.08);
    transition:.35s;
}

.card:hover{
    transform:translateY(-10px);
    box-shadow:0 25px 50px rgba(0,0,0,.15);
}

.card img{
    width:100%;
    height:240px;
    object-fit:cover;
}

.card h3{
    padding:25px 25px 10px;
    color:#071223;
}

.card p{
    padding:0 25px 25px;
    color:#666;
    line-height:1.8;
}
.why{
    background:#f5f7fb;
    padding:100px 0;
}

.features{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(260px,1fr));
    gap:25px;
    margin-top:50px;
}

.feature{
    background:#fff;
    padding:35px;
    border-radius:15px;
    text-align:center;
    font-weight:600;
    box-shadow:0 10px 25px rgba(0,0,0,.08);
    transition:.3s;
}

.feature:hover{
    background:#071223;
    color:#fff;
    transform:translateY(-8px);
}
.cta{
    background:linear-gradient(135deg,#071223,#0b2a4a);
    color:#fff;
    text-align:center;
    padding:100px 0;
}

.cta h2{
    font-size:42px;
    margin-bottom:20px;
}

.cta p{
    max-width:700px;
    margin:auto;
    font-size:20px;
    line-height:1.8;
}

.cta button{
    margin-top:35px;
    padding:16px 40px;
    border:none;
    border-radius:50px;
    background:#f6b100;
    color:#071223;
    font-weight:700;
    cursor:pointer;
    transition:.3s;
}

.cta button:hover{
    transform:translateY(-3px);
}
.service-btn{
    display:inline-flex;
    align-items:center;
    justify-content:center;
    gap:10px;

    margin-top:20px;
    padding:14px 28px;

    background:#071223;
    color:#fff;
    text-decoration:none;

    border:none;
    border-radius:50px;

    font-size:15px;
    font-weight:600;
    cursor:pointer;

    transition:all .35s ease;
}

.service-btn:hover{
    background:#f5b000;
    color:#071223;
    transform:translateY(-3px);
    box-shadow:0 12px 30px rgba(245,176,0,.35);
}

.service-btn .arrow{
    transition:transform .3s ease;
}

.service-btn:hover .arrow{
    transform:translateX(6px);
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


