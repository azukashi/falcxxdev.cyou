<script setup lang="ts">
const { data }: any = await useFetch('/api/sanity?schema=albums&pure=true');
</script>

<template>
    <div class="my-[14vh] lg:my-[20vh]">
        <div class="flex flex-col" v-motion-slide-visible-once-left>
            <h2 class="text-6xl font-bold leading-[1.2]">Hobbies</h2>
            <p class="mt-5 text-[#8f9094]">
                I love doing my hobbies in the outside. My main hobby is
                <span class="text-[#3CCF91] font-semibold">Photography</span>.
                <br />
                Here's what I've been taking on.
                <br />
                <code class="text-sm text-pink-500 font-bold uppercase">* Album will be updated every time.</code>
            </p>
            <hr class="mt-5 opacity-[0.06] border-b-[1px]" />
        </div>
        <div class="mt-10 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div class="hobbies__card cursor-zoom-in" v-for="album in data" v-motion-slide-visible-once-left>
                <NuxtLink class="cursor-zoom-in" :to="`hobbies/${album.name.toString().toLowerCase()}`" data-no-blobity>
                    <nuxt-img
                        format="webp"
                        width="1920"
                        height="1280"
                        quality="50"
                        class="w-auto h-auto"
                        :src="album.cover"
                        alt="Album cover"
                        loading="lazy"
                    />
                    <div class="ps-4 pe-4 py-2">
                        <p class="text-2xl font-semibold text-white">{{ album.name }}</p>
                        <!-- <hr class="mt-2 opacity-[0.06]" />
                        <p class="mt-2 text-base text-[#8F9094]">
                            <span v-if="album.cover.length > 1">{{ album.cover.length }} pictures</span>
                            <span v-if="album.cover.length < 2">{{ album.cover.length }} picture</span>
                            <span v-if="album.cover.length == 0">No picture</span>
                        </p>
                        <code class="mt-1 text-sm text-[#3CCF91] font-bold">Last updated: June 30, 2023</code> -->
                    </div>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
