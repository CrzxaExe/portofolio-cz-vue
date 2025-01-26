<script>
import axios from 'axios'

const project = await axios.get('https://zxra-rest.vercel.app/project-list')

export default {
  data() {
    return {
      project: project.data.project,
    }
  },
}
</script>

<template>
  <ul
    class="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 md:gap-6 h-fit mt-3 mb-6 py-3 px-2 md:px-0"
  >
    <li
      v-for="(item, index) in project"
      :key="index"
      class="text-white z-[0] hover:z-[3] bg-slate-500 aspect-square rounded-lg overflow-hidden relative group hover:scale-105 transition duration-500 ease-in-out"
    >
      <div class="aspect-square relative">
        <h1 class="inline-block absolute top-2 left-2 md:hidden font-bold text-sm lg:text-base">
          {{ item.name }}
        </h1>
        <img v-if="item.img" :src="item.img" :alt="item.name" />
      </div>
      <div
        class="w-full bg-[#252525] h-[3em] md:h-[5.8rem] absolute -bottom-1 px-4 py-3 rounded-t-lg"
      >
        <h1
          class="group-hover:hover:text-sky-400 group-hover:text-teal-400 md:inline-block font-bold text-sm lg:text-base hidden"
        >
          {{ item.name }}
        </h1>
      </div>
    </li>
  </ul>
</template>
