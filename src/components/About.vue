<script setup>
import axios from 'axios';

const profile = {
    birth: "2005-12-3",
    location: {
        country: "Indonesia",
        province: "Central Jawa",
        regency: "Kebumen"
    },
    religion: "Islam",
    certificate: {
        preview: "https://media.licdn.com/dms/image/v2/D562DAQFMcaxlC8TxvA/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1736634654555?e=1747731600&v=beta&t=1UU6coW79wl4BqNHgio30HTLyqff4Dn5A4E2NpTYsow",
        previewName: "UI/UX Design Training",
        previewOrganization: "HMIF Unseod",
        previewGet: 2025,
        folder: "",
    }
}

async function getData() {
    let res;
    try {
        res = await axios.get("https://api.github.com/users/CrzxaExe");
    } catch(error) {
        console.error(error)
    }
    return res.data;
}

const data = await getData();

function getYearOld(birthDate) {
    const now = new Date(),
        birth = new Date(birthDate);

    let year = now.getFullYear() - birth.getFullYear();

    const month = now.getMonth() - birth.getMonth(),
        day = now.getDate() - birth.getDate();

    if(month < 0 || ( month === 0 && day < 0)) year--;

    return year;
}
</script>

<template>
    <Suspense>
        <section class="min-h-screen px-4 lg:px-[6rem] pt-6 lg:pt-[8.5em] pb-4 lg:pb-[5rem] flex flex-col lg:flex-row gap-4 lg:gap-8" id="about">
            <div class="w-full lg:w-[20rem] lg:min-h-full flex flex-col gap-4 lg:gap-8 lg:basis-180">
                <div class="w-full lg:min-h-[30%] bg-[#242424]/30 rounded-xl p-4 flex flex-row gap-3 shadow-lg">
                    <div class="w-[30%] flex flex-col gap-3">
                        <img :src="data.avatar_url" alt="Logo" class="h-[78%] aspect-square rounded-xl object-cover">
                        <span class="h-[22%] rounded-lg w-full bg-[#242424] px-5 py-4 text-sm lg:text-xl font-semibold flex justify-center items-center"><span>{{ data.public_repos }} Total Repo</span></span>
                    </div>
                    <div class="w-[70%]">
                        <h1 class="text-xl lg:text-3xl font-semibold">{{ data.name }}</h1>
                        <span class="text-base lg:text-xl text-gray-400 -mt-2 block">{{ data.login }}</span>
                        <span class="text-lg lg:text-2xl text-gray-200 mt-4 mb-2 block font-valorant">{{ data.company }}</span>

                        <p class="mt-5 text-base lg:text-lg block mb-3">Followers {{ data.followers }} | Following {{ data.following }}</p>

                        <p class="bg-[#242424]/50 w-full px-3 py-4 rounded-xl mt-17 text-lg lg:text-xl">
                            {{ data.bio }}
                        </p>
                    </div>
                </div>
                <div class="w-full lg:min-h-[67%] bg-[#242424]/85 rounded-xl p-8 shadow-lg">
                    <h1 class="text-2xl lg:text-4xl font-bold">Bio</h1>
                    
                    <span class="block bg-white w-full h-[1px] mt-6"></span>
                    
                    <p class="lg:text-xl text-gray-200 block mt-4 whitespace-pre-line font-mono leading-5">
                        Birth &nbsp; &nbsp;: 3 Des 2025<br />
                        Old &nbsp; &nbsp; &nbsp;: {{ getYearOld(profile.birth) }} Years<br /><br />

                        Country&nbsp; : {{ profile.location.country  }}<br />
                        Province : {{ profile.location.province }}<br />
                        Regency &nbsp;: {{ profile.location.regency }}<br /><br />
                        
                        Religion : {{ profile.religion }}<br /><br />
                        
                        I am from Jawa and please dont call me "Jawa, Jawa, Jawa"<br /><br />
                        
                        You can email me:
                    </p>
                    
                    <input type="email" name="email" readonly value="bintangnugraha992@gmail.com" class="w-full outline-none bg-[#181818] px-4 py-2 font-sans text-lg lg:text-xl mt-4 text-sky-400">
                </div>
            </div>
            <div class="w-full lg:w-[20rem] lg:min-h-full bg-[#242424] rounded-xl lg:basis-280 p-8 shadow-lg"></div>
            <div class="w-full lg:w-[20rem] lg:min-h-full flex flex-col gap-4 lg:gap-8 lg:basis-140">
                <div class="w-full h-[55%] bg-[#242424]/45 rounded-xl p-8 shadow-lg">
                    <h1 class="text-2xl lg:text-3xl font-bold">Latest Certificate</h1>

                    <div class="w-full aspect-video bg-white mt-2 rounded-lg select-none">
                        <img :src="profile.certificate.preview" alt="certificate" class="w-full object-cover aspect-video">
                    </div>
                    <span class="text-lg lg:text-2xl font-semibold mt-2 text-gray-300 block">{{ profile.certificate.previewName }}</span>
                    <span class="text-base lg:text-lg font-light -mt-1 text-gray-400 block">{{ profile.certificate.previewOrganization }} - {{ profile.certificate.previewGet }}</span>
                    
                    <div class="w-full flex flex-row lg:flex-col mt-4 gap-2">
                        <a :href="profile.certificate.preview" target="_blank" class="bg-teal-400 text-gray-800 hover:text-gray-400 font-semibold rounded-lg w-full text-center py-3 text-lg hover:bg-[#343434] transition-all duration-300 ease-in-out focus:bg-cyan-700">Preview</a>
                        <a href="#" class="bg-teal-400 text-gray-800 hover:text-gray-400 font-semibold rounded-lg w-full text-center py-3 text-lg hover:bg-[#343434] transition-all duration-300 ease-in-out focus:bg-cyan-700">See All</a>
                    </div>
                </div>
                <div class="w-full h-[45%] bg-[#242424]/70 backdrop-blur-lg rounded-xl p-8 shadow-lg">
                    <h1 class="text-2xl lg:text-3xl font-bold">CV</h1>
                    
                    <div class="w-full aspect-video bg-white mt-2 rounded-lg select-none"></div>

                    <div class="w-full flex lg:flex-row flex-col mt-4 gap-2">
                        <a href="#" class="bg-teal-400 text-gray-800 hover:text-gray-400 font-semibold rounded-lg lg:w-[50%] w-full text-center py-3 text-lg hover:bg-[#343434] transition-all duration-300 ease-in-out focus:bg-cyan-700">Preview</a>
                        <a href="#" class="bg-teal-400 text-gray-800 hover:text-gray-400 font-semibold rounded-lg lg:w-[50%] w-full text-center py-3 text-lg hover:bg-[#343434] transition-all duration-300 ease-in-out focus:bg-cyan-700">Download</a>
                    </div>
                </div>
            </div>
        </section>
    </Suspense>
</template>