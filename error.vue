<script setup lang="ts">
defineProps(['error']);

const handleClearError = () => clearError({ redirect: '/' });
</script>

<template>
    <Navigation />
    <NuxtLoadingIndicator color="var(--gradient)" :throttle="0" :height="3" />
    <div class="font-lexend text-center px-10 my-28 lg:px-20">
        <h1 class="text-white text-9xl font-bold">
            <code>{{ error.statusCode }}</code>
        </h1>
        <h2 class="text-6xl font-semibold">Oops</h2>
        <div class="text-2xl my-6 font-semibold">
            <code>{{ error.message }}</code>
        </div>
        <button
            class="inline-flex align-middle items-center outline-none leading-5 rounded-md font-semibold h-10 min-w-[2.5rem] text-2xl my-2 px-8 p-8 bg-white bg-opacity-10 hover:bg-white hover:bg-opacity-20 transition-all"
            @click="handleClearError"
        >
            Go back Home
        </button>
    </div>
</template>

<style>
:root {
    --gradient: repeating-linear-gradient(90deg, #00dc82 0, #34cdfe 50%, #0047e1);
}
body {
    background: #000;
    color: #fff;
}
</style>
