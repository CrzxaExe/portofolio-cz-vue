<script setup>
import { ref } from 'vue';

const sref = ref(0);

window.addEventListener("scroll", () => {
    sref.value = window.scrollY;
})

</script>

<template>
    <nav class="w-full fixed text-lg transition-all duration-300 ease-in-out backdrop-blur-xl z-[20] px-2" :class="[sref > 40 ? ' bg-[#242424]/80 lg:bg-[#242424]/40 shadow-lg lg:shadow-none' : 'bg-[#242424]/0']">
        <div class="w-full max-w-[90rem] bg-cyan-500/0 mx-auto py-4 lg:py-5 px-6 lg:px-0 flex flex-row gap-3 items-center justify-between">
            <a href="#hero" class="flex flex-row items-center gap-2">
                <span class="text-xl lg:text-2xl font-valorant pt-1">CrzxaExe3</span>
            </a>
            <div class="lg:flex flex-row gap-6 text-xl lg:text-3xl -mt-1.5 hidden">
                <a href="#about" class="group">
                    <i class='bx bx-user'></i>
                    <span class="hidden w-[0%] group-hover:w-[100%] origin-center h-[2px] bg-white lg:block transition-all duration-300 ease-in-out -mt-1"></span>
                </a>
                <a href="#education" class="group">
                    <i class='bx bx-file'></i>
                    <span class="hidden w-[0%] group-hover:w-[100%] origin-center h-[2px] bg-white lg:block transition-all duration-300 ease-in-out -mt-1"></span>
                </a>
            </div>
        </div>
    </nav>
</template>