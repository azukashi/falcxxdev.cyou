<script setup lang="ts">
const { data }: any = await useFetch('/api/sanity?schema=home');
</script>

<template>
    <div class="flex items-start content-start flex-col my-[20vh]">
        <div class="relative">
            <img class="dots" src="https://svgsilh.com/svg/26432.svg" alt="Dots" v-motion-slide-visible-bottom />
            <h1 class="text-2xl lg:text-3xl z-1 font-semibold text-[#3CCF91] my-1" v-motion-slide-visible-left>
                Hey there!, I'm-
            </h1>
        </div>
        <h2 class="text-6xl lg:text-8xl z-1 font-extrabold my-1" v-motion-slide-visible-bottom>{{ data.name }}.</h2>
        <div class="mt-10">
            <h3 class="text-xl lg:text-2xl font-semibold text-[#8F9094] md:w-[36rem]" v-motion-slide-visible-left>
                <span class="text-white">{{ data.role }}.</span>
                {{ data.bio }}
            </h3>
        </div>
        <div class="mt-10">
            <p class="text-lg lg:text-xl text-[#8F9094]" v-motion-slide-visible-left>
                🚀 Exploring opportunities and side projects.
                <br />
                💻 Currently specializing in
                <span class="text-[#3CCF91] font-semibold">Full-stack Web Development</span>.
            </p>
        </div>
        <div class="mt-10">
            <div class="flex flex-row" v-motion-slide-visible-bottom>
                <a v-for="social in data.socials" target="_blank" class="btn__link mr-4" :href="social.url"
                    ><Icon :name="social.icon" size="1.2rem" class="btn__link_icon" /> {{ social.name }}</a
                >
            </div>
        </div>
    </div>
</template>

<style></style>
