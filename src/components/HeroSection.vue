<template>
  <section class="hero-section">

    <!-- Video Background -->
    <video
      class="hero-video"
      autoplay
      muted
      loop
      playsinline
    >
      <source :src="heroVideo" type="video/mp4" />
    </video>

    <!-- Dark Overlay -->
    <div class="overlay"></div>

    <!-- Hero Content -->
    <div class="hero-content">

      
      <h1>
        Building Your
        <span>Dream Home</span>
      </h1>

      <h2>
        With Trust & Quality
      </h2>

      <p>
        From design to delivery, we provide complete turnkey
        construction, plot collaboration, interiors and project
        management services with complete transparency and
        quality assurance.
      </p>

      <div class="hero-buttons">
        <button class="btn-primary">
          Get Free Consultation
        </button>

        <button class="btn-secondary">
          Calculate Cost
        </button>
      </div>

      <div class="stats">

        <div class="stat-card">
          <h3>500+</h3>
          <p>Projects Delivered</p>
        </div>

        <div class="stat-card">
          <h3>10+</h3>
          <p>Years Experience</p>
        </div>

        <div class="stat-card">
          <h3>100%</h3>
          <p>Transparency</p>
        </div>

      </div>

    </div>

  </section>
</template>

<script setup>
import heroVideo from '../assets/hero-video.mp4'
</script>

<style scoped>
.hero-section{
   width: auto;
  height: 100vh;
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: flex-start;

  padding-top: 180px;
  box-sizing: border-box;
}


/* VIDEO */

.hero-video{
  position:absolute;
  inset:0;
  width:100%;
  height:100%;
  object-fit:cover;
}

/* OVERLAY */

.overlay{
  position:absolute;
  inset:0;
  background:
  linear-gradient(
    to bottom,
    rgba(0,0,0,.65),
    rgba(0,0,0,.50),
    rgba(0,0,0,.75)
  );
}


/* CONTENT */
.hero-content{
  position: relative;
  z-index: 2;
  width: 90%;
  max-width: 950px;
  text-align: center;
  color: #fff;

  margin-top: 0;
}

/* BADGE */

.hero-badge{
  display:inline-block;
  padding:12px 25px;
  border-radius:50px;
  background:rgba(255,255,255,.12);
  backdrop-filter:blur(12px);
  border:1px solid rgba(255,255,255,.15);
  margin-bottom:25px;
  font-size:14px;
  letter-spacing:1px;
}

/* HEADING */

.hero-content h1{
  font-size:76px;
  line-height:1.1;
  margin-bottom:10px;
  font-weight:800;
}

.hero-content h1 span{
  color:#f9b233;
}

.hero-content h2{
  font-size:64px;
  line-height:1.1;
  margin-bottom:25px;
  font-weight:700;
}

/* PARAGRAPH */

.hero-content p{
  max-width:800px;
  margin:auto;
  font-size:20px;
  line-height:1.8;
  color:#f2f2f2;
}

/* BUTTONS */

.hero-buttons{
  margin-top:35px;
  display:flex;
  justify-content:center;
  gap:20px;
  flex-wrap:wrap;
}

.btn-primary,
.btn-secondary{
  padding:18px 38px;
  border-radius:50px;
  font-size:16px;
  font-weight:700;
  cursor:pointer;
  transition:.3s;
}

.btn-primary{
  border:none;
  background:#f9b233;
  color:#000;
  box-shadow:0 10px 25px rgba(249,178,51,.35);
}

.btn-primary:hover{
  transform:translateY(-4px);
}

.btn-secondary{
  background:transparent;
  color:#fff;
  border:2px solid #fff;
}

.btn-secondary:hover{
  background:#fff;
  color:#000;
}

/* STATS */

.stats{
  margin-top:60px;
  display:flex;
  justify-content:center;
  gap:25px;
  flex-wrap:wrap;
}

.stat-card{
  min-width:240px;
  padding:35px 30px;
  border-radius:24px;
  background:rgba(255,255,255,.08);
  backdrop-filter:blur(18px);
  border:1px solid rgba(255,255,255,.12);
  box-shadow:0 20px 40px rgba(0,0,0,.15);
  transition:.3s;
}

.stat-card:hover{
  transform:translateY(-8px);
}

.stat-card h3{
  font-size:48px;
  color:#f9b233;
  margin-bottom:10px;
}

.stat-card p{
  font-size:15px;
  margin:0;
}

/* TABLET */

@media(max-width:992px){

  .hero-content h1{
    font-size:52px;
  }

  .hero-content h2{
    font-size:42px;
  }

  .hero-content p{
    font-size:17px;
  }

  .stat-card{
    min-width:180px;
  }
}

/* MOBILE */

@media(max-width:768px){

  .hero-section{
    padding-top:120px;
  }

  .hero-content h1{
    font-size:38px;
  }

  .hero-content h2{
    font-size:30px;
  }

  .hero-content p{
    font-size:15px;
  }

  .hero-badge{
    font-size:12px;
  }

  .stat-card{
    width:100%;
    max-width:260px;
  }

  .btn-primary,
  .btn-secondary{
    width:100%;
  }
}

</style>