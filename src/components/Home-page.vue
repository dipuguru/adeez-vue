<template>
  <div>
    <HeaderSection />
    <HeroSection />
  </div>
</template>

<script>
import HeaderSection from './HeaderSection.vue'
import HeroSection from './HeroSection.vue'

export default {
  name: 'HomePage',
  components: {
    HeaderSection,
    HeroSection
  }
}
</script>