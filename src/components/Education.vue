<script setup>
import { motion } from 'motion-v';
import { ref } from 'vue';

const educations = ref([
    {
        school: "SMP Negeri 1 Ayah",
        graduate: 2021
    },
    {
        school: "SMA Negeri 1 Rowokele",
        graduate: 2024
    },
    {
        school: "Universitas Jendral Soedirman",
        major: "S1 Computer Engineering",
        graduate: "Now"
    },
])
</script>

<template>
    <section class="min-h-screen relative pt-[6rem] lg:pt-[8.5em] pb-4 lg:pb-[6rem]" id="education">
        <h1 class="mt-2 mb-4 text-2xl lg:text-3xl ml-[22%] font-semibold font-sans">Education</h1>
        <div class="min-h-[18.3rem] lg:min-h-[20rem] w-[1px] bg-white absolute -z-[1] left-[25%] right-[75%] rounded-t-md"></div>

        <ul class="min-h-full w-[60%] lg:w-[50%] ml-[23.3%] lg:ml-[24.5%] my-4 mt-5 flex flex-col gap-5 lg:gap-10 pt-6">
            <motion.li class="flex flex-row gap-8 items-center" v-for="{ school, graduate, major } in educations"
            :initial="{ opacity: 1 }"
            :animate="{ opacity: [1, 0.7, 1] }"
            :transition="{ opacity: { duration: Math.floor(Math.random() * 3 + 3), repeat: Infinity, repeatType: 'loop', ease: 'easeInOut' },}">
                <span class="w-[20px] aspect-square rounded-full bg-white"></span>
                <div class="bg-[#242424] rounded-xl px-7 py-4 w-full shadow-xl">
                    <h2 class="text-base lg:text-xl font-bold">{{ school }} <span v-if="major" class="text-gray-300">({{ major }})</span></h2>
                    {{ graduate }}
                </div>
            </motion.li>
        </ul>
    </section>
</template>