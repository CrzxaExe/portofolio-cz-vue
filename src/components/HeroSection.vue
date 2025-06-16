<script setup>
import ImageMe from '../assets/me.png'
import TechStack from './TechStack.vue';
import LeftSectionHero from './LeftSectionHero.vue';
</script>

<template>
  <section class="relative min-h-screen" id="hero">
    <div class="w-full lg:h-[30vh]"></div>
    <div class="flex flex-col-reverse lg:flex-row justify-end lg:justify-center items-center w-full">
      <LeftSectionHero />
  
      <div class="w-full lg:w-[66%] p-2 self-start lg:self-auto mt-[4.8em] lg:mt-0 ml-[4em] lg:ml-0 relative">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" class="max-w-[300px] absolute top-auto bottom-auto -z-[1] block">
          <path fill="#08BDBA"
            d="M67.3,-37.5C76.9,-22.2,67.3,5.5,52.9,28.4C38.4,51.3,19.2,69.4,1.9,68.3C-15.5,67.2,-31,47,-41.9,26.1C-52.9,5.2,-59.3,-16.4,-51.5,-30.5C-43.8,-44.7,-21.9,-51.5,3.5,-53.5C28.8,-55.5,57.7,-52.7,67.3,-37.5Z"
            transform="translate(100 100)" />
        </svg>
        <img :src="ImageMe" alt="my" class="object-cover w-fit max-w-[270px] z-[3] aspect-square translate-x-8 px-4">
        
        <div class="hidden min-h-[89%] rounded-r-xl shadow-xl w-full max-w-[880px] bg-[#242424] lg:block absolute top-5 -z-[2] left-[11rem]"></div>
      </div>
    </div>

    <div class="mt-[2.1rem] lg:mt-[3.2rem] w-full max-w-[86rem] bg-[#242424]/0 sm:bg-[#242424]/20 md:bg-[#242424]/45 lg:bg-[#242424]/70 mx-auto sm:shadow-xl px-4 lg:px-5 lg:py-5 transition-all duration-300 ease-in-out">
      <TechStack/>
    </div>

    <span class="text-white block mt-[4.3%] w-full text-center floating-anim transition-all duration-300 ease-in-out text-xl">Scroll <i class='bx bx-chevron-down'></i> to see more</span>
  </section>
</template>
