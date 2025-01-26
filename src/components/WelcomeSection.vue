<script>
export default {
  props: ['userName'],
  data() {
    return {
      cvActive: false,
    }
  },
}
</script>

<template>
  <section class="">
    <div class="mb-2 md:mb-7 md:mt-2 hidden md:block">
      <h1 class="text-slate-500 text-2xl md:text-3xl">Hello my name is</h1>
      <span class="block text-teal-400 text-3xl md:text-5xl font-semibold">{{ userName }}</span>
      <span class="block text-base md:text-lg">I am a Junior Progammer.</span>
    </div>

    <div class="py-1 md:py-2 block"></div>

    <!-- CV pop up -->
    <div
      :class="[cvActive ? 'fixed' : 'hidden']"
      class="w-[24em] md:w-[27em] lg:w-[30em] h-[50vh] bg-[#242424] py-4 px-5 z-[200] top-[20vh] left-[8vw] lg:left-auto right-auto md:translate-x-1/2"
    >
      <div class="w-full flex flex-row justify-between relative">
        <h1 class="font-bold text-xl lg:text-2xl text-teal-400">CV</h1>
        <button class="text-white aspect-square text-base font-bold" @click="cvActive = false">
          X
        </button>
      </div>

      <div class="w-full h-[86%] 2xl:h-[86%]"></div>

      <div class="flex flex-row gap-2">
        <button
          class="bg-teal-400 text-black px-4 py-1.5 rounded border-[1px] border-teal-400 hover:text-teal-400 hover:bg-slate-900 active:bg-white active:text-teal-800 transitino-all duration-300 ease-in-out w-full"
        >
          Dropbox
        </button>
        <button
          class="bg-teal-400 text-black px-4 py-1.5 rounded border-[1px] border-teal-400 hover:text-teal-400 hover:bg-slate-900 active:bg-white active:text-teal-800 transitino-all duration-300 ease-in-out w-full"
        >
          GDrive
        </button>
        <button
          class="bg-teal-400 text-black px-4 py-1.5 rounded border-[1px] border-teal-400 hover:text-teal-400 hover:bg-slate-900 active:bg-white active:text-teal-800 transitino-all duration-300 ease-in-out w-full"
        >
          Mediafire
        </button>
      </div>
    </div>

    <div class="mb-1 md:mb-5 -mt-8 md:mt-9 block text-lg">
      <p class="text-slate-300">I have passion on</p>
      <b class="text-xl lg:text-2xl">Web Developer | Mobile Developer</b>

      <span
        class="text-slate-200 block cursor-default text-base md:text-xl italic mt-3 md:mt-9 mb-8 bg-teal-300/20 w-full lg:w-fit outline-none px-3 py-2 md:py-5 rounded-md font-semibold"
        >"Laziness is my motivation to create a masterpiece project"</span
      >

      <div class="my-3 mt-4 md:mt-9 flex flex-row gap-2 items-center">
        <button
          class="px-4 py-2 rounded-md bg-teal-400 text-base lg:text-lg font-semibold text-black border border-teal-400 hover:bg-black hover:text-teal-400 transition-all duration-300 ease-in-out"
          @click="cvActive = !cvActive"
        >
          {{ !cvActive ? 'Download CV ' : 'Close Modal CV' }}
        </button>
        <a
          href="#"
          class="px-4 py-2 rounded-md bg-teal-400 text-base lg:text-lg font-semibold text-black border border-teal-400 hover:bg-black hover:text-teal-400 transition-all duration-300 ease-in-out"
          >Create Zx</a
        >
      </div>

      <span
        class="w-full lg:w-1/2 rounded-l-md h-[1.2em] lg:h-[2em] bg-gradient-to-r from-white via-white/60 to-white/0 block"
      ></span>

      <h1 class="mt-8 text-sm md:text-lg text-slate-200">
        Now i studing in
        <a href="https://admisi.unsoed.ac.id/" target="_blank" class="text-teal-200"
          >Jendral Soedirman University</a
        >
        as a Computer Enginner since 2024.
      </h1>
      <p class="text-sm md:text-lg mt-1 text-slate-200">
        I am Indonesia people, from Jawa. Please don`t call me Jawa, Jawa, Jawa
      </p>
    </div>
  </section>
</template>
