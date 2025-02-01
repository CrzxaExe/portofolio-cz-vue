<script setup>
import RightSide from './components/RightSide.vue'
import ScrollBar from './components/ScrollBar.vue'
import SocialSection from './components/SocialSection.vue'

import ImageMe from './assets/me.png'
</script>

<template>
  <main class="flex flex-col md:flex-row w-full min-h-screen max-h-screen relative scroll-smooth">
    <div class="fixed -z-[2] right-6">
      <div class="relative w-full min-h-screen flex flex-col opacity-60">
        <div
          class="absolute min-h-screen bg-gradient-to-r from-black md:from-black/90 via-65% md:via-75% via-black/60 to-black/20 w-full"
        ></div>
        <img
          src="https://raw.githubusercontent.com/CrzxaExe/zxra-create/refs/heads/master/app/asset/Zxra-full.png"
          alt="logo"
          class="w-[17em] lg:w-[27em] aspect-square mt-[6em] block"
        />
      </div>
    </div>

    <section
      class="w-full md:w-[12.3em] lg:w-[14.2em] md:min-h-screen text-white text-sm md:text-base transition-all duration-300 ease-in-out flex flex-col md:items-center px-2 py-5 md:justify-center"
    >
      <div
        class="text-2xl md:text-lg text-slate-400 md:py-4 flex flex-col relative md:absolute md:top-0 font-bold px-5 md:px-0"
      >
        <h1 class="text-4xl md:text-xl font-bold">Portofolio</h1>
        <span
          class="before:content-['Codename'] before:text-slate-700 text-lg md:text-base text-teal-400"
        >
          CrzxaExe3</span
        >
      </div>

      <div
        class="aspect-square w-[13em] md:w-[90%] md:mx-auto overflow-hidden mt-8 md:mt-4 md:mb-0 px-5 md:px-0"
      >
        <img :src="ImageMe" class="object-cover w-full scale-[150%] translate-y-[20%]" />
      </div>

      <div class="px-5 md:px-0">
        <h3 class="block md:hidden text-slate-500 text-lg">Hello my name is</h3>
        <h1 class="text-slate-300 text-4xl md:text-base font-bold md:text-center md:hidden">
          Bintang Nugraha Putra
        </h1>
        <span class="text-slate-500 text-lg md:text-sm w-full text-center md:mt-2"
          >Can`t realize your imagination</span
        >
      </div>
      <SocialSection class="hidden md:block" />
    </section>
    <section
      class="w-full min-h-screen transition-all duration-300 ease-in-out pr-3 pl-7 py-2 flex flex-col relative md:overflow-x-hidden md:overflow-y-scroll scroll-smooth"
    >
      <ScrollBar />
      <RightSide />
    </section>
  </main>
</template>
