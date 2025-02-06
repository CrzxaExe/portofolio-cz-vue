<script setup>
import LanguageList from './LanguageList.vue'
import Repository from './RepositorySection.vue'
import TechStack from './TechStack.vue'
import WelcomeSection from './WelcomeSection.vue'
</script>

<template>
  <section class="py-4 md:min-h-screen w-full md:pl-2 lg:pl-3 md:snap-center md:snap-always">
    <WelcomeSection class="py-5" id="hero" user-name="Bintang Nugraha Putra" />
    <LanguageList />
    <TechStack />
  </section>
  <section
    class="py-9 md:min-h-screen mt-9 md:mt-[12em] w-full md:pl-2 lg:pl-3 md:snap-center md:snap-always"
    id="repo"
  >
    <h1 class="text-3xl md:text-4xl text-teal-400 font-bold mt-5">Repository</h1>
    <Suspense>
      <Repository />
    </Suspense>
  </section>
</template>
