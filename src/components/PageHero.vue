<template>
  <section
    class="page-hero"
    :style="{ backgroundImage: `url(${background})` }"
  >
    <div class="hero-overlay"></div>

    <div class="container hero-content">

      <span v-if="badge" class="hero-badge">
        {{ badge }}
      </span>

      <h1>{{ title }}</h1>

      <p>
        {{ description }}
      </p>

      <div v-if="$slots.actions" class="hero-buttons">
        <slot name="actions"></slot>
      </div>

    </div>

    <div class="hero-shape"></div>

  </section>
</template>

<script>
export default {
  name: "PageHero",

  props: {
    badge: String,
    title: String,
    description: String,
    background: String
  }
}
</script>

<style scoped>

.page-hero{
    position:relative;
    min-height:85vh;
    display:flex;
    align-items:center;
    overflow:hidden;

    background-size:cover;
    background-position:center;
    background-repeat:no-repeat;
}

.hero-overlay{
    position:absolute;
    inset:0;
    background:linear-gradient(
        90deg,
        rgba(5,17,35,.90),
        rgba(5,17,35,.75),
        rgba(5,17,35,.60)
    );
}

.container{
    width:90%;
    max-width:1200px;
    margin:auto;
}

.hero-content{
    position:relative;
    z-index:2;
    color:white;
    max-width:60%;
}

.hero-badge{

    display:inline-block;

    background:#f5b000;

    color:#071223;

    padding:10px 22px;

    border-radius:50px;

    font-weight:700;

    margin-top:12%;

    letter-spacing:1px;
}

.hero-content h1{

    font-size:64px;

    line-height:1.1;

    margin-bottom:25px;

    font-weight:800;
}

.hero-content p{

    font-size:20px;

    line-height:1.8;

    color:#ececec;

    margin-bottom:40px;
}

.hero-buttons{

    display:flex;

    gap:20px;

    flex-wrap:wrap;
}

.hero-buttons button{

    padding:16px 38px;

    border:none;

    cursor:pointer;

    border-radius:50px;

    font-size:16px;

    font-weight:700;

    transition:.35s;
}

.hero-buttons button:first-child{

    background:#f5b000;

    color:#071223;
}

.hero-buttons .outline{

    background:transparent;

    color:#fff;

    border:2px solid white;
}

.hero-buttons button:hover{

    transform:translateY(-5px);
}

.hero-shape{

    position:absolute;

    bottom:-120px;

    left:0;

    width:100%;

    height:220px;

    background:white;

    border-radius:100% 100% 0 0;
}

@media(max-width:992px){

.page-hero{

min-height:75vh;

}

.hero-content h1{

font-size:48px;

}

}

@media(max-width:768px){

.page-hero{

text-align:center;

min-height:70vh;

}

.hero-content{

max-width:100%;

}

.hero-content h1{

font-size:38px;

}

.hero-content p{

font-size:17px;

}

.hero-buttons{

flex-direction:column;

}

.hero-buttons button{

width:100%;

}

.hero-shape{

height:120px;

bottom:-60px;

}

}

</style>