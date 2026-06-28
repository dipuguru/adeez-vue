<template>
  <header :class="['header', { scrolled: isScrolled }]">
    <div class="container">

      <!-- Logo -->
      <div class="logo">
        <img src="../assets/logo1.png" alt="Adeez Logo">
        <div class="logo-text">
          <h3>ADEEZ</h3>
          <span>Construction Solutions</span>
        </div>
      </div>

      <!-- Menu -->
      <nav :class="['nav-menu', { active: mobileMenu }]">

  <router-link to="/">Home</router-link>

  <router-link to="/turnkey">Turnkey</router-link>

  <router-link to="/plot-collaboration">Plot Collaboration</router-link>

  <router-link to="/services">Services</router-link>

  <router-link to="/our-projects">Our Projects</router-link>

  <router-link to="/cost-calculator">Cost Calculator</router-link>

  <router-link to="/referral">Referral</router-link>

  <router-link to="/contact">Contact Us</router-link>

  <button class="cta-btn">
    Free Consultation
  </button>

</nav>
      <div
        class="menu-toggle"
        @click="mobileMenu = !mobileMenu"
      >
        ☰
      </div>

    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderSection",

  data() {
    return {
      mobileMenu: false,
      isScrolled: false
    }
  },

  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },

  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },

  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 30
    }
  }
}
</script>

<style scoped>

.header{
  position:fixed;
  top:0;
  left:0;
  width:100%;
  z-index:9999;
  transition:.4s ease;
  padding:10px 0;
  background:rgba(0,0,0,.95);
}

.header.scrolled{
  background:rgba(7,18,35,.95);
  backdrop-filter:blur(15px);
  box-shadow:0 10px 30px rgba(0,0,0,.2);
}

.container{
  width:92%;
  max-width:1400px;
  margin:auto;
  display:flex;
  justify-content:space-between;
  align-items:center;
}

.logo{
  display:flex;
  align-items:center;
  gap:12px;
}

.logo img{
  width:70px;
  height:70px;
  object-fit:cover;
  border-radius:10px;
}

.logo-text h3{
  color:#fff;
  margin:0;
  font-size:24px;
  font-weight:700;
}

.logo-text span{
  color:#d8d8d8;
  font-size:13px;
}

.nav-menu{
  display:flex;
  align-items:center;
  gap:28px;
}

.nav-menu a{
  color:#fff;
  text-decoration:none;
  font-size:16px;
  font-weight:500;
  transition:.3s;
}

.nav-menu a:hover{
  color:#ffb703;
}

.cta-btn{
  background:linear-gradient(
    135deg,
    #ffb703,
    #fb8500
  );
  border:none;
  color:#fff;
  padding:14px 28px;
  border-radius:50px;
  cursor:pointer;
  font-size:15px;
  font-weight:600;
  transition:.3s;
}

.cta-btn:hover{
  transform:translateY(-3px);
  box-shadow:0 10px 25px rgba(255,183,3,.4);
}

.menu-toggle{
  display:none;
  font-size:32px;
  color:#fff;
  cursor:pointer;
}

@media(max-width:1200px){

  .nav-menu{
    gap:18px;
  }

  .nav-menu a{
    font-size:14px;
  }
}

@media(max-width:991px){

  .menu-toggle{
    display:block;
  }

  .nav-menu{
    position:absolute;
    top:100%;
    left:0;
    width:100%;
    background:#071223;
    flex-direction:column;
    align-items:flex-start;
    padding:30px;
    display:none;
  }

  .nav-menu.active{
    display:flex;
  }

  .cta-btn{
    width:100%;
  }
}
</style>