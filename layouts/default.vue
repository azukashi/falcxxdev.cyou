<script setup lang="ts"></script>

<template>
    <NuxtLoadingIndicator color="var(--gradient)" :throttle="0" :height="5" />
    <div class="container p-5 font-lexend">
        <slot />
    </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lexend:wght@400;600;700&display=swap');
:root {
    --gradient: linear-gradient(to right, #ff0ab1, #ff002f);
}
</style>
