<script setup lang="ts">
const { data }: any = await useFetch('/api/sanity?schema=about');
</script>

<template>
    <div class="p-4">
        <ol class="relative border-l border-gray-700" v-motion-slide-visible-once-bottom>
            <li class="mb-10 ml-6" v-for="tl in data.timeline">
                <span
                    class="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8 ring-white ring-opacity-[0.3] bg-white bg-opacity-[0.5]"
                >
                    <Icon :name="tl.icon" />
                </span>
                <h3 class="flex items-center mb-1 text-lg font-semibold text-white">
                    {{ tl.title }}
                    <span
                        class="text-sm font-semibold mr-2 px-2.5 py-0.5 rounded bg-white bg-opacity-[0.16] text-[#3CCF91] ml-3"
                        v-if="tl.isLatest"
                        >Latest</span
                    >
                </h3>
                <time class="block mb-2 text-sm font-normal leading-none text-gray-500">{{ tl.date }}</time>
                <p class="mb-4 text-base font-normal text-[#8F9094]">
                    {{ tl.description }}
                </p>
            </li>
        </ol>
    </div>
</template>

<style scoped></style>
