<script setup lang="ts">
type Projects = {
    name: string;
    description: string;
    tags: string[];
    image: string;
    github?: string | undefined;
    url?: string | undefined;
}[];

const projects: Projects = [
    {
        name: 'Exxyll',
        description: 'Multipurpose Discord Bot with Commands for Fun, Games, and more.',
        tags: ['Discord', 'Bot', 'Discord.js'],
        image: 'https://cdn.upload.systems/uploads/MMjkZGHH.png',
        github: 'https://github.com/gifaldyazkaa/exxyll',
        url: undefined,
    },
    {
        name: '湊あくあ',
        description: 'Minato Aqua (湊あくあ) website created with SvelteKit and TailwindCSS.',
        tags: ['VTuber', 'SvelteKit', 'TailwindCSS', 'SSR'],
        image: 'https://cdn.upload.systems/uploads/XmbWzKfg.webp',
        github: 'https://github.com/gifaldyazkaa/minatoaqua',
        url: 'https://aqua.falcxxdev.cyou',
    },
    {
        name: 'Chocolatte',
        description: "Choco Latte's replacement & open source alternative website with better improvements.",
        tags: ['VTuber', 'Nuxt.js', 'TailwindCSS', 'SSR'],
        image: 'https://cdn.upload.systems/uploads/sy4m7iYJ.webp',
        github: 'https://github.com/gifaldyazkaa/chocolattech',
        url: 'https://chocolatte.falcxxdev.cyou',
    },
    {
        name: 'Wangy wangy',
        description: 'Copypasta generator tools that created for fun and designed for weebs.',
        tags: ['Copypasta', 'Generator', 'Weebs'],
        image: 'https://cdn.upload.systems/uploads/GR73wNS0.webp',
        github: 'https://github.com/gifaldyazkaa/wangy-wangy',
        url: 'https://wangy.falcxxdev.cyou',
    },
];
</script>

<template>
    <div class="my-[14vh] lg:my-[20vh]">
        <div class="flex flex-col" v-motion-slide-visible-once-left>
            <h2 class="text-6xl font-bold leading-[1.2]">Projects</h2>
            <p class="mt-5">
                I love building projects and practice my skills, here is an archive of things that I've worked on.
            </p>
            <hr class="mt-5 opacity-[0.06] border-b-[1px]" />
        </div>
        <div class="mt-10 grid gap-8 grid-cols-1 md:grid-cols-2">
            <div class="project__card" v-for="prj in projects" v-motion-slide-visible-once-left>
                <a target="_blank" class="transition-all" :href="prj.url">
                    <div class="inline-block max-w-full overflow-hidden relative box margin-0">
                        <div class="box-border block max-w-full">
                            <img :src="prj.image" alt="Project Image" class="project__card_img" />
                        </div>
                    </div>
                    <div class="flex flex-col ps-4 pe-4 py-2">
                        <div class="flex items-center content-between flex-row">
                            <p class="text-2xl font-semibold text-white">{{ prj.name }}</p>
                            <div class="ms-2 flex items-center content-end flex-row">
                                <a v-if="prj.github" :href="prj.github" class="me-2 hover:text-[#3CCF91] transition-all"
                                    ><Icon name="mdi:github" size="1.7rem"
                                /></a>
                                <a v-if="prj.url" :href="prj.url" class="hover:text-[#3CCF91] transition-all"
                                    ><Icon name="material-symbols:open-in-new" size="1.7rem"
                                /></a>
                            </div>
                        </div>
                        <div class="flex flex-row mt-2">
                            <span class="project__card_tag me-2" v-for="tag in prj.tags">#{{ tag }}</span>
                        </div>
                        <hr class="mt-2 opacity-[0.06]" />
                        <p class="mt-2 text-base text-[#8F9094]">
                            {{ prj.description }}
                        </p>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
