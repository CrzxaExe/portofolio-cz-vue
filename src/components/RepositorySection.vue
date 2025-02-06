<script setup>
import axios from 'axios'

const project = await getData()

async function getData() {
  let data
  try {
    data = await axios.get('https://zxra-rest.vercel.app/project-list')
  } catch(err) {
    console.error(err)
  }
  return data.data.project
}

</script>

<template>
  <ul
  class="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7 gap-2 md:gap-6 h-fit mt-3 mb-6 py-3 px-2 md:px-0"
  >
  <Suspense>
      <li
        v-for="(item, index) in project"
        :key="index"
        class="text-white z-[0] hover:z-[3] bg-slate-500 aspect-square rounded-lg overflow-hidden relative group hover:scale-105 transition duration-300 ease-in-out"
      >
        <div class="aspect-square relative">
          <h1 class="inline-block absolute top-2 left-2 md:hidden font-bold text-sm lg:text-base">
            {{ item.name }}
          </h1>
          <img v-if="item.img" :src="item.img" :alt="item.name" />
        </div>
        <div
          class="w-full bg-gradient-to-t from-[#252525] to-[#252525] from-60% group-hover:to-[#252525]/[0] h-[24%] md:h-[20%] group-hover:h-[70%] md:group-hover:h-[80%] absolute -bottom-1 px-3 py-2 group-hover:pt-8 rounded-t-lg transtion-all duration-300 ease-in-out"
        >
          <a
            class="group-hover:hover:text-sky-400 group-hover:text-teal-400 md:inline-block font-bold text-xs lg:text-sm hidden"
            :href="item.link"
          >
            {{ item.name }}
          </a>
          <p class="block md:opacity-0 group-hover:opacity-100 md:mt-9 group-hover:mt-1 transition-all duration-400 ease-in-out font-semibold text-sm md:text-base">{{ item.app }}</p>

          <span class="block opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out absolute bottom-2 right-2 text-xs md:text-sm font-bold">{{ item.version }}</span>
        </div>
      </li>
    </Suspense>
    </ul>
</template>
