<script setup lang="ts">
const { data }: any = await useFetch('/api/sanity?schema=projects&pure=true');
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
            <div class="project__card" v-for="project in data" v-motion-slide-visible-once-left>
                <a target="_blank" class="transition-all" :href="project.url" data-no-blobity>
                    <div class="inline-block max-w-full overflow-hidden relative box margin-0">
                        <div class="box-border block max-w-full">
                            <nuxt-img
                                format="webp"
                                quality="70"
                                :src="project.image"
                                alt="Project Image"
                                class="project__card_img"
                            />
                        </div>
                    </div>
                    <div class="flex flex-col ps-4 pe-4 py-2">
                        <div class="flex items-center content-between flex-row">
                            <p class="text-2xl font-semibold text-white">{{ project.name }}</p>
                            <div class="ms-2 flex items-center content-end flex-row">
                                <a
                                    v-if="project.github"
                                    :href="project.github"
                                    class="me-2 hover:text-[#3CCF91] transition-all"
                                    ><Icon name="mdi:github" size="1.7rem"
                                /></a>
                                <a v-if="project.url" :href="project.url" class="hover:text-[#3CCF91] transition-all"
                                    ><Icon name="material-symbols:open-in-new" size="1.7rem"
                                /></a>
                            </div>
                        </div>
                        <div class="flex flex-row mt-2">
                            <span class="project__card_tag me-2" v-for="tag in project.tags">#{{ tag }}</span>
                        </div>
                        <hr class="mt-2 opacity-[0.06]" />
                        <p class="mt-2 text-base text-[#8F9094]">
                            {{ project.description }}
                        </p>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
