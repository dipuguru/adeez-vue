<template>
  <div class="contact-page">

    <HeaderSection />

    <!-- Hero -->
    <PageHero
      badge="CONTACT US"
      title="Let's Build Something Extraordinary Together"
      description="Whether you're planning your dream home, a commercial project, renovation, or simply need expert guidance, our team is here to help. Get in touch with ADEEZ Construction Solutions today."
      background="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=80"
    >
      <template #actions>

        <button class="view-btn">
          Book Consultation
        </button>

        <button class="view-btn outline">
          Call Now
        </button>

      </template>
    </PageHero>

    <!-- Contact Section -->

    <section class="section">

      <div class="container">

        <div class="section-title">

          <span>GET IN TOUCH</span>

          <h2>We're Here To Help</h2>

          <p>
            Have questions about your project? Contact our experts for a free
            consultation and personalized guidance.
          </p>

        </div>

        <div class="contact-grid">

          <!-- Left -->

          <div class="contact-info">

            <div class="info-card">
              <div class="icon">📍</div>

              <div>
                <h3>Office Address</h3>
                <p>
                  123 Business Park,<br>
                  Pune, Maharashtra 411001
                </p>
              </div>
            </div>

            <div class="info-card">
              <div class="icon">📞</div>

              <div>
                <h3>Phone Number</h3>
                <p>+91 98765 43210</p>
              </div>
            </div>

            <div class="info-card">
              <div class="icon">✉️</div>

              <div>
                <h3>Email Address</h3>
                <p>info@adeezconstruction.com</p>
              </div>
            </div>

            <div class="info-card">
              <div class="icon">🕒</div>

              <div>
                <h3>Working Hours</h3>
                <p>
                  Monday - Saturday<br>
                  9:00 AM - 6:00 PM
                </p>
              </div>
            </div>

          </div>

          <!-- Right -->

          <div class="contact-form">

            <h2>Send Us a Message</h2>

            <form @submit.prevent="submitForm">

              <input
                type="text"
                v-model="form.name"
                placeholder="Full Name"
                required
              >

              <input
                type="email"
                v-model="form.email"
                placeholder="Email Address"
                required
              >

              <input
                type="tel"
                v-model="form.phone"
                placeholder="Phone Number"
                required
              >

              <textarea
                rows="6"
                v-model="form.message"
                placeholder="Tell us about your project..."
                required
              ></textarea>

              <button
                class="primary-btn"
                type="submit"
              >
                Send Message →
              </button>

            </form>

          </div>

        </div>

      </div>

    </section>

    <!-- Map -->

    <section class="map-section">

      <div class="container">

        <div class="section-title">

          <span>OUR LOCATION</span>

          <h2>Visit Our Office</h2>

        </div>

        <div class="map-box">

          <!-- Replace with Google Maps iframe -->

          <div class="map-placeholder">

            <h3>Google Maps</h3>

            <p>
              Replace this section with your Google Maps iframe.
            </p>

          </div>

        </div>

      </div>

    </section>

    <!-- CTA -->

    <section class="cta">

      <div class="container">

        <h2>Ready To Build Your Dream Project?</h2>

        <p>
          Let's discuss your vision and transform it into reality with
          ADEEZ Construction Solutions.
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
      form: {
        name: "",
        email: "",
        phone: "",
        message: ""
      }
    };
  },

  methods: {
    submitForm() {
      alert("Thank you! We'll contact you shortly.");

      this.form = {
        name: "",
        email: "",
        phone: "",
        message: ""
      };
    }
  }
};
</script>

<style scoped>
.hero{
  background:#071223;
  color:#fff;
  padding:140px 0 80px;
}
.container{
  width:90%;
  max-width:1200px;
  margin:auto;
}
.section{
  padding:70px 0;
}
.contact-grid{
  display:grid;
  grid-template-columns:1fr 1.2fr;
  gap:40px;
}
.info-card{
  background:#f7f7f7;
  padding:20px;
  border-radius:10px;
  margin-bottom:20px;
}
.contact-form{
  background:#fff;
  padding:30px;
  border-radius:12px;
  box-shadow:0 8px 20px rgba(0,0,0,.08);
}
input,
textarea{
  width:100%;
  padding:14px;
  margin-bottom:18px;
  border:1px solid #ddd;
  border-radius:8px;
  font-size:16px;
}
button{
  background:#ffb703;
  border:none;
  padding:14px 30px;
  border-radius:30px;
  font-weight:700;
  cursor:pointer;
}
.map-section{
  background:#f7f7f7;
  padding:70px 0;
}
.map-placeholder{
  height:350px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  border:2px dashed #bbb;
  border-radius:12px;
  background:#fff;
}
@media(max-width:768px){
  .hero{
    padding-top:120px;
  }
  .contact-grid{
    grid-template-columns:1fr;
  }
}
</style>
