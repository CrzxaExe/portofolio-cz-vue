<script setup>
import { motion } from 'motion-v';
import SocialMedia from './SocialMedia.vue';
</script>

<template>
    <motion.div class="w-full lg:w-[34%] border-0 lg:border-r-[1.5px] py-3 px-7 flex flex-col lg:items-end mt-4 lg:mt-0" :initial="{ opacity: 0, transform: 'translateX(-20%)', transition: { duration: 3000, delay: 0.3, ease: 'easeOut', bounce: 0.3 } }" :whileInView="{ opacity: 1, transform: 'translateX(0%)' }"> 
        <h1 class="font-bold text-3xl sm:text-3xl lg:text-2xl xl:text-2xl 2xl:text-3xl tracking-tighter">Bintang Nugraha Putra</h1>
        <h3 class="font-light text-xl xl:text-xl text-slate-300 mb-1">Can`t realize your imagination</h3>
        
        <span class="block mt-4 text-base lg:text-lg xl:text-xl font-thin">I have passion on</span>
  
        <h4 class="mb-3 lg:-mt-1 flex flex-row gap-2.5 text-xl lg:text-base 2xl:text-2xl font-semibold text-slate-300"> 
          <span class="block not-last:pr-5 not-last:border-0 not-last:border-r-[2px] group relative cursor-pointer">
            <span class="z-[0]">Software Dev</span>
            <span class="absolute bottom-0 z-[2] hidden group-hover:block font-extralight text-base xl:text-xl 2xl:text-1xl w-full not-[group-last]:w-[calc(100%-(--spacing(2.5)))] text-center bg-slate-300 text-black rounded-lg">Backend</span>
          </span>
          <span class="block not-last:pr-5 not-last:border-0 not-last:border-r-[2px] group relative cursor-pointer">
            <span class="z-[0]">Mobile Dev</span>
            <span class="absolute bottom-0 z-[2] hidden group-hover:block font-extralight text-base xl:text-xl 2xl:text-1xl w-full not-[group-last]:w-[calc(100%-(--spacing(2.5)))] text-center bg-slate-300 text-black rounded-lg">Android</span>
          </span>
          <span class="block not-last:pr-5 not-last:border-0 not-last:border-r-[2px] group relative cursor-pointer">
            <span class="z-[0]">Artist</span>
            <span class="absolute bottom-0 z-[2] hidden group-hover:block font-extralight text-base xl:text-xl 2xl:text-1xl w-full group-first:w-[calc(100%-(--spacing(2.5)))] text-center bg-slate-300 text-black rounded-lg">R-18</span>
          </span>
        </h4>
  
        <p class="mt-3 lg:mt-5 text-base xl:text-lg tracking-tighter font-mono bg-slate-800 px-4 py-4 lg:py-2.5 rounded-lg">Ingin menjadi programmer handal, nanti aja</p>

        <SocialMedia />

        <div class="mt-1 flex flex-row gap-2 text-lg lg:text-xl xl:text-3xl">
          <a href="https://zxra-create.vercel.app/" target="_blank" class="px-4 py-2 bg-teal-400 rounded-lg text-black font-semibold lg:text-xl border-[1px] border-teal-400 hover:bg-black hover:text-teal-400 transition-all duration-300 ease-in-out">Create Zx</a>
        </div>
      </motion.div>
</template>