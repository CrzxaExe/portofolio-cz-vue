<script setup>
import ImageMe from '../assets/me.png'
import SocialMedia from './SocialMedia.vue';
import TechStack from './TechStack.vue';
</script>

<template>
  <section class="relative min-h-screen" id="hero">
    <div class="w-full lg:h-[30vh]"></div>
    <div class="flex flex-col-reverse lg:flex-row justify-end lg:justify-center items-center w-full">
      <div class="w-full lg:w-[34%] border-0 lg:border-r-[1.5px] py-3 px-7 flex flex-col lg:items-end mt-6 lg:mt-0"> 
        <h1 class="font-bold text-3xl sm:text-3xl lg:text-2xl xl:text-3xl 2xl:text-4xl tracking-tighter">Bintang Nugraha Putra</h1>
        <h3 class="font-light text-xl xl:text-xl text-slate-300 mb-2">Can`t realize your imagination</h3>
        
        <span class="block mt-6 text-base lg:text-lg xl:text-xl font-thin">I have passion on</span>
  
        <h4 class="mb-3 lg:-mt-1 flex flex-row gap-2.5 text-xl lg:text-base 2xl:text-3xl font-semibold text-slate-300"> 
          <span class="block not-last:pr-5 not-last:border-0 not-last:border-r-[2px] group relative cursor-pointer">
            <span class="z-[0]">Software Dev</span>
            <span class="absolute bottom-0 z-[2] hidden group-hover:block font-extralight text-base xl:text-xl 2xl:text-2xl w-full not-[group-last]:w-[calc(100%-(--spacing(2.5)))] text-center bg-slate-300 text-black rounded-lg">Backend</span>
          </span>
          <span class="block not-last:pr-5 not-last:border-0 not-last:border-r-[2px] group relative cursor-pointer">
            <span class="z-[0]">Mobile Dev</span>
            <span class="absolute bottom-0 z-[2] hidden group-hover:block font-extralight text-base xl:text-xl 2xl:text-2xl w-full not-[group-last]:w-[calc(100%-(--spacing(2.5)))] text-center bg-slate-300 text-black rounded-lg">Android</span>
          </span>
          <span class="block not-last:pr-5 not-last:border-0 not-last:border-r-[2px] group relative cursor-pointer">
            <span class="z-[0]">Artist</span>
            <span class="absolute bottom-0 z-[2] hidden group-hover:block font-extralight text-base xl:text-xl 2xl:text-2xl w-full group-first:w-[calc(100%-(--spacing(2.5)))] text-center bg-slate-300 text-black rounded-lg">R-18</span>
          </span>
        </h4>
  
        <p class="mt-5 lg:mt-7 text-lg xl:text-xl tracking-tighter font-mono bg-slate-800 px-4 py-4 lg:py-2.5 rounded-lg">Ingin menjadi programmer handal, nanti aja</p>

        <SocialMedia />

        <div class="mt-1 flex flex-row gap-2 text-xl lg:text-2xl xl:text-3xl">
          <a href="https://zxra-create.vercel.app/" target="_blank" class="px-4 py-2 bg-teal-400 rounded-lg text-black font-semibold lg:text-xl border-[1px] border-teal-400 hover:bg-black hover:text-teal-400 transition-all duration-300 ease-in-out">Create Zx</a>
        </div>
      </div>
  
      <div class="w-full lg:w-[66%] p-2 self-start lg:self-auto mt-[4.8em] lg:mt-0 ml-[4em] lg:ml-0 relative">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" class="max-w-[300px] absolute top-auto bottom-auto -z-[1] block">
          <path fill="#08BDBA"
            d="M67.3,-37.5C76.9,-22.2,67.3,5.5,52.9,28.4C38.4,51.3,19.2,69.4,1.9,68.3C-15.5,67.2,-31,47,-41.9,26.1C-52.9,5.2,-59.3,-16.4,-51.5,-30.5C-43.8,-44.7,-21.9,-51.5,3.5,-53.5C28.8,-55.5,57.7,-52.7,67.3,-37.5Z"
            transform="translate(100 100)" />
        </svg>
        <img :src="ImageMe" alt="my" class="object-cover w-fit max-w-[270px] z-[3] aspect-square translate-x-8 px-4">
        
        <div class="hidden min-h-[91%] rounded-r-xl shadow-xl w-full max-w-[800px] bg-[#242424] lg:block absolute top-6 -z-[2] left-[13em] drop-shadow-lg"></div>
      </div>
    </div>

    <div class="mt-[2.3rem] lg:mt-[3.8rem] w-full max-w-[86rem] bg-[#242424]/0 sm:bg-[#242424]/20 md:bg-[#242424]/45 lg:bg-[#242424]/70 mx-auto sm:shadow-xl px-4 lg:px-5 lg:py-5 transition-all duration-300 ease-in-out">
      <TechStack/>
    </div>

    <span class="text-white block mt-[5%] w-full text-center floating-anim transition-all duration-300 ease-in-out text-xl">Scroll <i class='bx bx-chevron-down'></i> to see more</span>
  </section>
</template>
