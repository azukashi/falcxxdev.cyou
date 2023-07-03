<script setup lang="ts">
import useBlobity from 'blobity/lib/vue/useBlobity';

_initHead();

onMounted(() => {
    useBlobity({
        invert: true,
        dotColor: '#3CCF91',
        font: 'Lexend',
        fontSize: 13,
    });
});
</script>

<template>
    <NuxtLoadingIndicator color="var(--gradient)" :throttle="0" :height="3" />
    <Navigation />
    <div class="container max-w-full font-lexend px-10 lg:px-20">
        <slot />
    </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lexend:wght@400;600;700&display=swap');
:root {
    --gradient: repeating-linear-gradient(90deg, #00dc82 0, #34cdfe 50%, #0047e1);
}

.page-enter-active,
.page-leave-active {
    transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
    opacity: 0;
    filter: blur(1rem);
}
</style>
