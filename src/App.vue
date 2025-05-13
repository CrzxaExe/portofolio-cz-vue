<script setup>
import HeroSection from './components/HeroSection.vue';
import TopBar from './components/TopBar.vue';
import About from './components/About.vue';
import Education from './components/Education.vue';
</script>

<template>
  <main class="relative">
    <TopBar />
    <HeroSection />
    <Suspense>
      <About />
    </Suspense>
    <Education />
  </main>
</template>
