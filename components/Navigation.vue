<script setup lang="ts"></script>

<template>
    <div>
        <header class="font-lexend">
            <nav
                class="flex flex-row fixed top-0 right-0 left-0 max-w-full items-center justify-between bg-black bg-opacity-30 backdrop-blur-md ps-[3vw] pe-[3vw] py-3 z-50 border-b-2 border-[#111111]"
                v-motion-slide-top
            >
                <NuxtLink to="/" class="navbar__link" aria-label="Falcxxdev">
                    <nuxt-img
                        format="webp"
                        quality="70"
                        preload
                        src="/img/webicon.webp"
                        alt="Logo"
                        class="h-[2.8rem] w-auto"
                        width="0"
                        height="0"
                    />
                </NuxtLink>
                <div class="transition-all">
                    <NuxtLink to="/" class="navbar__lnk" aria-label="Home page"
                        ><span class="md:hidden"><Icon name="material-symbols:home-rounded" /></span>
                        <span class="hidden md:block">Home</span></NuxtLink
                    >
                    <NuxtLink to="/projects" class="navbar__lnk" aria-label="Projects page"
                        ><span class="md:hidden"><Icon name="material-symbols:work" /></span>
                        <span class="hidden md:block">Projects</span></NuxtLink
                    >
                    <NuxtLink to="/hobbies" class="navbar__lnk" aria-label="Hobbies page"
                        ><span class="md:hidden"><Icon name="ion:camera-sharp" /></span>
                        <span class="hidden md:block">Hobbies</span></NuxtLink
                    >
                    <NuxtLink to="/about" class="navbar__lnk" aria-label="About page"
                        ><span class="md:hidden"><Icon name="mdi:account-circle" /></span>
                        <span class="hidden md:block">About</span></NuxtLink
                    >
                </div>
            </nav>
        </header>
    </div>
</template>

<style scoped></style>
