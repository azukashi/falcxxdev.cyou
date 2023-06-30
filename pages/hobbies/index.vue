<script setup lang="ts">
type AlbumCover = {
    name: string;
    image: string;
}[];

const albums: AlbumCover = [
    {
        name: 'Street',
        image: 'https://cdn.upload.systems/uploads/7xb9V1hM.jpg',
    },
    {
        name: 'Portrait',
        image: 'https://cdn.upload.systems/uploads/qiuJxmZR.jpg',
    },
    {
        name: 'Life & Nature',
        image: 'https://cdn.upload.systems/uploads/vQ12BudG.jpg',
    },
];
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
                <span class="text-sm font-mono font-medium uppercase">* Album will be updated every time.</span>
            </p>
            <hr class="mt-5 opacity-[0.06] border-b-[1px]" />
        </div>
        <div class="mt-10 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div class="hobbies__card" v-for="album in albums" v-motion-slide-visible-once-left>
                <img class="w-auto h-auto" :src="album.image" alt="Album cover" />
                <div class="ps-4 pe-4 py-2">
                    <p class="text-2xl font-semibold text-white">{{ album.name }}</p>
                    <hr class="mt-2 opacity-[0.06]" />
                    <p class="mt-2 text-base text-[#8F9094]">
                        <span v-if="album.image.length > 1">{{ album.image.length }} photos</span>
                        <span v-if="album.image.length < 2">{{ album.image.length }} photo</span>
                        <span v-if="album.image.length == 0">No photo</span>
                    </p>
                    <code class="mt-1 text-sm text-[#3CCF91] font-bold">Last updated: June 30, 2023</code>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
