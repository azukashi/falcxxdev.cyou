<script setup lang="ts">
const { data }: any = await useFetch('/api/sanity?schema=about');
</script>

<template>
    <div class="my-[14vh] lg:mt-[20vh]">
        <div class="flex items-center content-center justify-center">
            <nuxt-img
                class="w-[100px] invert-[0.1] absolute top-28 translate-x-20 z-[3]"
                src="https://svgsilh.com/svg/26432.svg"
                alt="Dots"
            />
            <nuxt-img
                class="w-56 rounded-full"
                format="webp"
                quality="70"
                :src="data.picture"
                :alt="data.name"
                v-motion-slide-visible-once-top
            />
        </div>
        <div class="my-4">
            <p class="text-base text-[#8F9094]" v-motion-slide-visible-once-left>
                Hey! I'm <span class="text-white font-semibold">{{ data.name }}</span
                >. Born and live in <span class="text-[#3CCF91] font-semibold">{{ data.born_in }}</span
                >. I've been close to a computer since an early age, and been passionate about it ever since.
                <br />
                <br />
                I started learning about Data and Algorithm since 2020 with C++ language. And now I spend more time to
                explore Web development using TypeScript, Node.js, Svelte, and Nuxt.js.
                <br />
                <br />
                I really liked to build stuff using no-code tools back in 2019, and from that, I explored how to code
                myself, fast-forward to today, I do programming in various languages and technologies. Currently focused
                on <span v-for="focus in data.focused_on" class="text-[#3CCF91] font-semibold">{{ focus }}, </span> and
                many more.
                <br />
                <br />
                When I'm not doing anything with programming, I play
                <span v-for="thing in data.when_free" class="text-[#3CCF91] font-semibold">{{ thing }}, </span> doing
                voice thing with friends on <span class="text-[#3CCF91] font-semibold">Discord</span>, and others more.
            </p>
        </div>
        <div class="my-4" v-motion-slide-visible-once-bottom>
            <h2 class="text-4xl font-semibold my-2">Timeline</h2>
            <Timeline />
        </div>
        <div class="mt-4 flex items-center content-center flex-col">
            <div v-motion-slide-visible-once-bottom>
                <h2 class="text-5xl font-bold leading-[1.2]">Keep in Touch.</h2>
            </div>
            <div class="mt-10" v-motion-slide-visible-once-bottom>
                <p class="text-base text-center text-[#8F9094]">
                    I'm currently specializing in
                    <span class="text-[#3CCF91] font-semibold">Full-stack Web Development</span>.
                    <br />
                    Feel free to get in touch and talk more about your projects.
                    <br />
                    Or just want to keep in touch with my other social media.
                </p>
            </div>
            <div class="mt-6">
                <div class="inline-block text-center" v-motion-slide-visible-once-bottom>
                    <a v-for="social in data.socials" target="_blank" class="btn__link mt-4 me-4" :href="social.url"
                        ><Icon :name="social.icon" size="1.2rem" class="btn__link_icon" /> {{ social.name }}</a
                    >
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
