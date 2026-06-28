
<template>
  <div>
    <HeaderSection />
<PageHero
  badge="COST CALCULATOR"
  title="Estimate Your Construction Cost Instantly"
  description="Use our smart construction cost calculator to get an approximate estimate for your dream home based on built-up area and construction quality."
  background="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1800&q=80"
>
    <template #actions>

        <button class="view-btn">
            Calculate Cost
        </button>

        <button class="view-btn">
            Free Consultation
        </button>

    </template>

</PageHero>


<section class="section">

    <div class="container">

        <div class="section-title">

            <span>COST ESTIMATOR</span>

            <h2>Construction Cost Calculator</h2>

            <p>
                Enter your built-up area and select your preferred construction
                package to receive an instant estimated construction cost.
            </p>

        </div>

        <div class="calculator">

            <div class="form-card">

                <label>Built-up Area (sq.ft.)</label>

                <input
                    type="number"
                    v-model.number="area"
                    placeholder="Enter Built-up Area"
                >

                <label>Construction Package</label>

                <select v-model="type">

                    <option value="1800">
                        Standard (₹1,800 / sq.ft.)
                    </option>

                    <option value="2200">
                        Premium (₹2,200 / sq.ft.)
                    </option>

                    <option value="2800">
                        Luxury (₹2,800 / sq.ft.)
                    </option>

                </select>

                <button
                    class="primary-btn"
                    @click="calculateCost"
                >

                    Calculate Estimate

                </button>

            </div>

            <div class="result-card">

                <span>ESTIMATED COST</span>

                <h2 v-if="estimatedCost">

                    ₹ {{ formattedCost }}

                </h2>

                <p v-else>

                    Enter your project details to receive an approximate construction estimate.

                </p>

                <ul>

                    <li>✔ Material Cost Included</li>

                    <li>✔ Labour Cost Included</li>

                    <li>✔ Structural Work Included</li>

                    <li>✔ Project Management Included</li>

                    <li>✔ GST & statutory charges may vary</li>

                </ul>

            </div>

        </div>

    </div>

</section>

<section class="why">

<div class="container">

<div class="section-title">

<span>PACKAGES</span>

<h2>Construction Packages</h2>

<p>
Choose the package that best suits your requirements and budget.
</p>

</div>

<div class="features">

<div class="feature">

<div class="icon">🏠</div>

<h3>Standard</h3>

<p>

Ideal for budget-friendly homes with quality finishes.

</p>

<strong>₹1,800 / sq.ft.</strong>

</div>

<div class="feature">

<div class="icon">🏡</div>

<h3>Premium</h3>

<p>

Premium materials with elegant interior finishes.

</p>

<strong>₹2,200 / sq.ft.</strong>

</div>

<div class="feature">

<div class="icon">🏛️</div>

<h3>Luxury</h3>

<p>

High-end construction with luxury specifications.

</p>

<strong>₹2,800 / sq.ft.</strong>

</div>

</div>

</div>

</section>
<section class="faq">

<div class="container">

<div class="section-title">

<span>FAQ</span>

<h2>Frequently Asked Questions</h2>

</div>

<div class="faq-list">

<div class="faq-item">

<h3>
Is this estimate final?
</h3>

<p>

No. It provides an approximate construction cost. The final quotation depends on drawings, soil condition, specifications, and location.

</p>

</div>

<div class="faq-item">

<h3>
What is included?
</h3>

<p>

Material, labour, project management, and structural work are included. Government charges may vary.

</p>

</div>

<div class="faq-item">

<h3>
Can I customize my package?
</h3>

<p>

Absolutely. Our team prepares customized quotations based on your project requirements.

</p>

</div>

</div>

</div>

</section>
    <section class="cta">
      <div class="container">
        <h2>Need an Accurate Quote?</h2>
        <p>Book a free consultation with our construction experts for a detailed estimate.</p>
        <button>Book Consultation</button>
      </div>
    </section>
  </div>
</template>

<script>
import HeaderSection from './HeaderSection.vue'
import PageHero from './PageHero.vue';

export default {
  components: { HeaderSection , PageHero},

  data() {
    return {
      area: '',
      type: '1800',
      estimatedCost: 0
    }
  },

  computed: {
    formattedCost() {
      return Number(this.estimatedCost).toLocaleString('en-IN')
    }
  },

  methods: {
    calculateCost() {
      if (!this.area || this.area <= 0) {
        alert('Please enter a valid built-up area.')
        return
      }

      this.estimatedCost = this.area * Number(this.type)
    }
  }
}
</script>

<style scoped>

.container{
    width:90%;
    max-width:1200px;
    margin:auto;
}

/* =========================
   Section Common
========================= */

.section,
.why,
.faq,
.cta{
    padding:90px 0;
}

.section-title{
    text-align:center;
    margin-bottom:60px;
}

.section-title span{
    color:#f6b100;
    font-size:14px;
    font-weight:700;
    letter-spacing:2px;
    text-transform:uppercase;
}

.section-title h2{
    font-size:42px;
    color:#071223;
    margin:15px 0;
}

.section-title p{
    max-width:700px;
    margin:auto;
    color:#666;
    line-height:1.8;
}

/* =========================
   Calculator
========================= */

.calculator{
    display:grid;
    grid-template-columns:repeat(2,1fr);
    gap:40px;
    align-items:start;
}

.form-card,
.result-card{
    background:#fff;
    border-radius:20px;
    padding:40px;
    box-shadow:0 15px 40px rgba(0,0,0,.08);
}

.form-card label{
    display:block;
    font-weight:700;
    color:#071223;
    margin-bottom:10px;
    margin-top:18px;
}

.form-card input,
.form-card select{
    width:100%;
    padding:15px;
    border:1px solid #ddd;
    border-radius:12px;
    font-size:16px;
    transition:.3s;
    margin-bottom:10px;
}

.form-card input:focus,
.form-card select:focus{
    border-color:#f6b100;
    outline:none;
    box-shadow:0 0 0 3px rgba(246,177,0,.15);
}

/* =========================
   Buttons
========================= */

.primary-btn,
.view-btn{
    margin-top:25px;
    display:inline-flex;
    align-items:center;
    justify-content:center;
    gap:10px;
    background:#f6b100;
    color:#071223;
    padding:15px 35px;
    border:none;
    border-radius:40px;
    font-weight:700;
    cursor:pointer;
    transition:.35s;
}

.primary-btn:hover,
.view-btn:hover{
    transform:translateY(-3px);
    box-shadow:0 15px 30px rgba(246,177,0,.35);
}

.outline{
    background:transparent;
    color:#fff;
    border:2px solid #fff;
}

/* =========================
   Result
========================= */

.result-card{
    background:linear-gradient(135deg,#071223,#0b2a4a);
    color:#fff;
}

.result-card span{
    color:#f6b100;
    font-weight:700;
    letter-spacing:2px;
}

.result-card h2{
    font-size:48px;
    margin:25px 0;
    color:#fff;
}

.result-card p{
    line-height:1.8;
    opacity:.9;
}

.result-card ul{
    margin-top:30px;
    padding-left:20px;
}

.result-card li{
    margin-bottom:14px;
}

/* =========================
   Packages
========================= */

.why{
    background:#f7f9fc;
}

.features{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
    gap:30px;
}

.feature{
    background:#fff;
    border-radius:20px;
    padding:40px 30px;
    text-align:center;
    box-shadow:0 12px 30px rgba(0,0,0,.08);
    transition:.35s;
}

.feature:hover{
    transform:translateY(-8px);
}

.icon{
    width:70px;
    height:70px;
    margin:auto;
    margin-bottom:20px;
    background:#f6b100;
    color:#071223;
    border-radius:50%;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:30px;
}

.feature h3{
    color:#071223;
    margin-bottom:15px;
}

.feature p{
    color:#666;
    line-height:1.7;
}

.feature strong{
    display:block;
    margin-top:20px;
    color:#f6b100;
    font-size:22px;
}

/* =========================
   FAQ
========================= */

.faq-list{
    display:grid;
    gap:25px;
}

.faq-item{
    background:#fff;
    border-radius:16px;
    padding:30px;
    box-shadow:0 10px 25px rgba(0,0,0,.08);
}

.faq-item h3{
    color:#071223;
    margin-bottom:12px;
}

.faq-item p{
    color:#666;
    line-height:1.8;
}

/* =========================
   CTA
========================= */

.cta{
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
    line-height:1.8;
    font-size:18px;
    opacity:.9;
}

.cta button{
    margin-top:35px;
    padding:16px 40px;
    background:#f6b100;
    border:none;
    border-radius:40px;
    color:#071223;
    font-weight:700;
    cursor:pointer;
    transition:.3s;
}

.cta button:hover{
    transform:translateY(-3px);
}

/* =========================
   Responsive
========================= */

@media(max-width:992px){

.calculator{
grid-template-columns:1fr;
}

}

@media(max-width:768px){

.section,
.why,
.faq,
.cta{
padding:70px 0;
}

.section-title h2{
font-size:34px;
}

.result-card h2{
font-size:36px;
}

.features{
grid-template-columns:1fr;
}

.primary-btn,
.view-btn{
width:100%;
}

}

</style>