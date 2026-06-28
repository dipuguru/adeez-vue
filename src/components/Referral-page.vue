
<template>
  <div>
    <HeaderSection />
<PageHero
  badge="REFER & EARN"
  title="Share a Dream. Earn Exciting Rewards."
  description="Know someone planning to build a home, villa, apartment, or commercial project? Refer them to ADEEZ Construction Solutions and earn attractive rewards when their project begins."
  background="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1800&q=80"
>
  <template #actions>
    <button class="view-btn">
      Refer Now
    </button>

    <button class="view-btn">
      Contact Us
    </button>
  </template>
</PageHero>

<!-- How It Works -->
<section class="section">

    <div class="container">

        <div class="section-title">
            <span>HOW IT WORKS</span>
            <h2>Simple Steps to Earn Rewards</h2>
            <p>
                Refer someone planning to build with ADEEZ and earn exciting
                rewards after their project starts.
            </p>
        </div>

        <div class="grid">

            <div
                class="card"
                v-for="step in steps"
                :key="step.title"
            >

                <img
                    :src="step.image"
                    :alt="step.title"
                >

                <div class="card-content">

                    <h3>{{ step.title }}</h3>

                    <p>{{ step.desc }}</p>

                    <button class="service-btn">
                        Learn More
                        <span>→</span>
                    </button>

                </div>

            </div>

        </div>

    </div>

</section>
<section class="why">

    <div class="container">

        <div class="section-title">

            <span>WHY REFER ADEEZ</span>

            <h2>Benefits of Our Referral Program</h2>

            <p>
                Refer with confidence and let our experts handle the rest while
                you earn attractive rewards.
            </p>

        </div>

        <div class="features">

            <div
                class="feature"
                v-for="benefit in benefits"
                :key="benefit.title"
            >

                <div class="icon">
                    {{ benefit.icon }}
                </div>

                <h3>
                    {{ benefit.title }}
                </h3>

                <p>
                    {{ benefit.desc }}
                </p>

            </div>

        </div>

    </div>

</section>
<section class="stats">

    <div class="container">

        <div class="stats-grid">

            <div
                class="stat-card"
                v-for="stat in stats"
                :key="stat.title"
            >

                <div class="stat-number">

                    {{ stat.number }}

                </div>

                <h3>

                    {{ stat.title }}

                </h3>

            </div>

        </div>

    </div>

</section>
<section class="faq">

    <div class="container">

        <div class="section-title">

            <span>FAQ</span>

            <h2>Frequently Asked Questions</h2>

            <p>
                Everything you need to know about the ADEEZ Refer & Earn Program.
            </p>

        </div>

        <div class="faq-list">

            <div
                class="faq-item"
                v-for="faq in faqs"
                :key="faq.question"
            >

                <h3>
                    {{ faq.question }}
                </h3>

                <p>
                    {{ faq.answer }}
                </p>

            </div>

        </div>

    </div>

</section>
<section class="cta">

    <div class="container">

        <h2>Ready to Start Referring?</h2>

        <p>
            Help your friends build their dream projects while earning exciting rewards with ADEEZ Construction Solutions.
        </p>

        <div class="cta-buttons">

            <button class="primary-btn">
                Submit a Referral
            </button>

            <button class="secondary-btn">
                Contact Our Team
            </button>

        </div>

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

steps: [

{
title:"Submit Your Referral",
desc:"Share the contact details of your friend, family member, or colleague who is planning a construction project.",
image:"https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=900&q=80"
},

{
title:"We Connect",
desc:"Our experts contact your referral, understand their requirements, and provide complete project consultation.",
image:"https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=80"
},

{
title:"Project Confirmation",
desc:"Once the client finalizes the project with ADEEZ, construction planning and execution begin.",
image:"https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80"
},

{
title:"Receive Your Reward",
desc:"After successful project initiation, you receive exciting referral rewards as our token of appreciation.",
image:"https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=80"
}

],

benefits:[

{
icon:"🤝",
title:"Trusted Construction Partner",
desc:"A proven reputation for quality construction and customer satisfaction."
},

{
icon:"🏆",
title:"Premium Quality",
desc:"High-quality materials, skilled professionals and modern construction techniques."
},

{
icon:"💰",
title:"Attractive Rewards",
desc:"Earn exciting incentives for every successful referral."
},

{
icon:"📞",
title:"Dedicated Support",
desc:"Our team manages the entire sales process while keeping you updated."
},

{
icon:"⏱️",
title:"On-Time Delivery",
desc:"Projects delivered on schedule with complete transparency."
},

{
icon:"❤️",
title:"Win Together",
desc:"Help your loved ones build their dream property while earning rewards."
}

],

stats:[

{
number:"500+",
title:"Projects Completed"
},

{
number:"1000+",
title:"Happy Families"
},

{
number:"250+",
title:"Successful Referrals"
},

{
number:"98%",
title:"Customer Satisfaction"
}

],

faqs:[

{
question:"Who can refer a project?",
answer:"Anyone can participate in the ADEEZ Refer & Earn Program by referring a potential construction project."
},

{
question:"When will I receive my reward?",
answer:"Rewards are issued after the referred project is successfully confirmed and construction begins."
},

{
question:"Is there any limit on referrals?",
answer:"No. You can refer as many projects as you like and earn rewards for every successful referral."
},

{
question:"What projects qualify?",
answer:"Residential homes, villas, apartments, commercial buildings, renovations, and plot collaborations all qualify."
}

]
    }
  }
}
</script>

<style scoped>

/* ==========================
   Common
========================== */

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
    font-size:14px;
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

/* ==========================
   Cards
========================== */

.grid{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
    gap:30px;
}

.card{
    background:#fff;
    border-radius:20px;
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
    height:230px;
    object-fit:cover;
}

.card-content{
    padding:30px;
}

.card-content h3{
    color:#071223;
    margin-bottom:15px;
    font-size:24px;
}

.card-content p{
    color:#666;
    line-height:1.8;
    margin-bottom:25px;
}

/* ==========================
   Learn More Button
========================== */

.service-btn{
    display:inline-flex;
    align-items:center;
    gap:10px;
    padding:14px 26px;
    border:none;
    border-radius:40px;
    background:#071223;
    color:#fff;
    font-weight:600;
    cursor:pointer;
    transition:.35s;
}

.service-btn span{
    transition:.35s;
}

.service-btn:hover{
    background:#f6b100;
    color:#071223;
}

.service-btn:hover span{
    transform:translateX(6px);
}

/* ==========================
   Benefits
========================== */

.why{
    background:#f7f9fc;
    padding:100px 0;
}

.features{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(260px,1fr));
    gap:30px;
}

.feature{
    background:#fff;
    padding:35px;
    border-radius:18px;
    text-align:center;
    box-shadow:0 10px 30px rgba(0,0,0,.08);
    transition:.35s;
}

.feature:hover{
    transform:translateY(-10px);
    background:#071223;
    color:#fff;
}

.icon{
    width:80px;
    height:80px;
    margin:auto;
    margin-bottom:25px;
    border-radius:50%;
    background:#f6b100;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:34px;
}

.feature h3{
    margin-bottom:15px;
}

.feature p{
    line-height:1.8;
    opacity:.9;
}

/* ==========================
   Statistics
========================== */

.stats{
    padding:90px 0;
    background:linear-gradient(135deg,#071223,#0b2a4a);
}

.stats-grid{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
    gap:30px;
}

.stat-card{
    text-align:center;
    color:#fff;
}

.stat-number{
    font-size:52px;
    color:#f6b100;
    font-weight:800;
    margin-bottom:12px;
}

.stat-card h3{
    font-size:22px;
    font-weight:600;
}

/* ==========================
   FAQ
========================== */

.faq{
    padding:100px 0;
}

.faq-list{
    max-width:900px;
    margin:auto;
}

.faq-item{
    background:#fff;
    padding:30px;
    margin-bottom:25px;
    border-radius:18px;
    box-shadow:0 10px 25px rgba(0,0,0,.08);
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

/* ==========================
   CTA
========================== */

.cta{
    padding:100px 0;
    background:linear-gradient(135deg,#071223,#0b2a4a);
    text-align:center;
    color:#fff;
}

.cta h2{
    font-size:42px;
    margin-bottom:20px;
}

.cta p{
    max-width:700px;
    margin:auto;
    margin-bottom:35px;
    line-height:1.8;
    font-size:18px;
    opacity:.9;
}

.cta-buttons{
    display:flex;
    justify-content:center;
    gap:20px;
    flex-wrap:wrap;
}

.primary-btn{
    background:#f6b100;
    color:#071223;
    padding:16px 36px;
    border:none;
    border-radius:40px;
    font-weight:700;
    cursor:pointer;
    transition:.35s;
}

.primary-btn:hover{
    transform:translateY(-3px);
    box-shadow:0 15px 35px rgba(246,177,0,.35);
}

.secondary-btn{
    background:transparent;
    color:#fff;
    border:2px solid #fff;
    padding:16px 36px;
    border-radius:40px;
    font-weight:700;
    cursor:pointer;
    transition:.35s;
}

.secondary-btn:hover{
    background:#fff;
    color:#071223;
}

/* ==========================
   Hero Buttons
========================== */

.view-btn{
    padding:15px 34px;
    border:none;
    border-radius:40px;
    background:#f6b100;
    color:#071223;
    font-weight:700;
    cursor:pointer;
    transition:.35s;
}

.view-btn:hover{
    transform:translateY(-3px);
    box-shadow:0 15px 30px rgba(246,177,0,.35);
}

.outline{
    background:transparent;
    color:#fff;
    border:2px solid #fff;
}

.outline:hover{
    background:#fff;
    color:#071223;
}

/* ==========================
   Responsive
========================== */

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

.card img{
    height:200px;
}

.features{
    grid-template-columns:1fr;
}

.stats-grid{
    grid-template-columns:repeat(2,1fr);
}

.cta h2{
    font-size:32px;
}

.cta-buttons{
    flex-direction:column;
}

.primary-btn,
.secondary-btn,
.view-btn{
    width:100%;
}

}

@media(max-width:480px){

.stats-grid{
    grid-template-columns:1fr;
}

.section-title h2{
    font-size:28px;
}

.stat-number{
    font-size:40px;
}

}

</style>