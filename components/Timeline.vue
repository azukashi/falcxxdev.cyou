<script setup lang="ts">
type Timeline = {
    latest?: boolean | undefined;
    icon: string;
    title: string;
    date: string;
    description: string;
}[];

const timelines: Timeline = [
    {
        latest: true,
        icon: 'material-symbols:deployed-code',
        title: 'Website UI v2.0.0',
        date: 'April 29th, 2023',
        description: 'Stable release from previous release for this website.',
    },
    {
        icon: 'mdi:sony-playstation',
        title: 'First Livestream on YouTube',
        date: 'April 29th, 2023',
        description: 'Starting first Livestreaming journey on YouTube using PS4.',
    },
    {
        icon: 'mdi:source-branch-plus',
        title: 'Website UI v2.0.0-beta.1',
        date: 'April 18th, 2023',
        description:
            "This website is just redesigned into new looking user interface. This design system is inspired from Vercel's Geist UI.",
    },
    {
        latest: undefined,
        icon: 'mdi:wrench',
        title: "Being moderator at Choco Latte's community",
        date: 'February 15th, 2023',
        description:
            'Being trusted by Choco Latte herself for being moderator on her YouTube channel and Discord server.',
    },
];
</script>

<template>
    <div class="p-4">
        <ol class="relative border-l border-gray-700" v-motion-slide-visible-once-bottom>
            <li class="mb-10 ml-6" v-for="tl in timelines">
                <span
                    class="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8 ring-white ring-opacity-[0.3] bg-white bg-opacity-[0.5]"
                >
                    <Icon :name="tl.icon" />
                </span>
                <h3 class="flex items-center mb-1 text-lg font-semibold text-white">
                    {{ tl.title }}
                    <span
                        class="text-sm font-semibold mr-2 px-2.5 py-0.5 rounded bg-white bg-opacity-[0.16] text-[#3CCF91] ml-3"
                        v-if="tl.latest"
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
