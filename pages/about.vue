<script setup lang="ts"></script>

<template>
    <div class="my-[14vh] lg:mt-[20vh]">
        <div class="flex items-center content-center justify-center">
            <img
                class="w-[100px] invert-[0.1] absolute top-28 translate-x-20 z-[3]"
                src="https://svgsilh.com/svg/26432.svg"
                alt="Dots"
            />
            <img
                class="w-56 rounded-full"
                src="https://avatars.githubusercontent.com/u/68645946"
                alt="My Picture"
                v-motion-slide-visible-once-top
            />
        </div>
        <div class="my-4">
            <p class="text-base text-[#8F9094]" v-motion-slide-visible-once-left>
                Hey! I'm <span class="text-white font-semibold">Gifaldy Azka</span>. Born and live in
                <span class="text-[#3CCF91] font-semibold">Bandung, West Java, Indonesia</span>. I've been close to a
                computer since an early age, and been passionate about it ever since.
                <br />
                <br />
                I started learning about Data and Algorithm since 2020 with C++ language. And now I spend more time to
                explore Web development using TypeScript, Node.js, Svelte, and Nuxt.js.
                <br />
                <br />
                I really liked to build stuff using no-code tools back in 2019, and from that, I explored how to code
                myself, fast-forward to today, I do programming in various languages and technologies. Currently focused
                on <span class="text-[#3CCF91] font-semibold">Web development</span>,
                <span class="text-[#3CCF91] font-semibold">Open-source projects</span>,
                <span class="text-[#3CCF91] font-semibold">Aviation Electronics</span>,
                <span class="text-[#3CCF91] font-semibold">Photography</span>, and
                <span class="text-[#3CCF91] font-semibold">Videography</span>.
                <br />
                <br />
                When I'm not doing anything with programming, I play
                <span class="text-[#3CCF91] font-semibold">Genshin Impact</span>,
                <span class="text-[#3CCF91] font-semibold">Honkai: Star Rail</span>, doing voice communication with
                friends on <span class="text-[#3CCF91] font-semibold">Discord</span>, went outside to shoot some
                pictures using my camera, etc.
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
                    <span class="text-[#3CCF91] font-semibold">Front-end Development</span>.
                    <br />
                    Feel free to get in touch and talk more about your projects.
                    <br />
                    Or just want to keep in touch with my other social media.
                </p>
            </div>
            <div class="mt-10">
                <div class="inline-block" v-motion-slide-visible-once-bottom>
                    <a target="_blank" class="btn__link me-4" href="https://github.com/gifaldyazkaa"
                        ><Icon name="mdi:github" size="1.2rem" class="btn__link_icon" /> GitHub</a
                    >
                    <a target="_blank" class="btn__link me-4" href="https://twitter.com/falcxxdev"
                        ><Icon name="mdi:twitter" size="1.2rem" class="btn__link_icon" /> Twitter</a
                    >
                    <a target="_blank" class="btn__link me-4" href="https://instagram.com/falcxxdev"
                        ><Icon name="mdi:instagram" size="1.2rem" class="btn__link_icon" /> Instagram</a
                    >
                    <br />
                    <a target="_blank" class="btn__link mt-4 me-4" href="https://discord.com/users/446197585376575489"
                        ><Icon name="ic:baseline-discord" size="1.2rem" class="btn__link_icon" /> Discord</a
                    >
                    <a target="_blank" class="btn__link mt-4 me-4" href="https://youtube.com/@falcxxdev"
                        ><Icon name="mdi:youtube" size="1.2rem" class="btn__link_icon" /> YouTube</a
                    >
                    <a target="_blank" class="btn__link mt-4" href="mailto:me@falcxxdev.cyou"
                        ><Icon name="material-symbols:mail-rounded" size="1.2rem" class="btn__link_icon" /> Email</a
                    >
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
