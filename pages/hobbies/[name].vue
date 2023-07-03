<script setup lang="ts">
const { name }: any = useRoute().params;
const { data }: any = await useFetch(`/api/sanity?schema=alb_${name}&pure=true`);

const capitalize = <T extends string>(str: T) => (str[0].toUpperCase() + str.slice(1)) as Capitalize<typeof str>;
// let view = ref(false);
// let viewData = ref({
//     id: null,
//     schema: null,
// });

// const toggleView = (schema: any, id: any) => {
//     viewData.value.id = id;
//     viewData.value.schema = schema;
//     view.value = !view.value;
//     document.body.classList.add('overflow-hidden');
// };
// const updateView = (value: boolean) => {
//     view.value = value;
// };
</script>

<template>
    <div class="my-[14vh] lg:my-[20vh]">
        <!-- <ImageView v-if="view" :schema="viewData.schema" :id="viewData.id" :isView="view" @updateView="updateView" /> -->
        <div class="flex flex-col" v-motion-slide-visible-once-left>
            <h2 class="text-6xl font-bold leading-[1.2]">{{ capitalize(name) }}</h2>
            <p class="mt-5 text-[#8f9094]">
                All pictures here is taken with my own camera (<span class="text-[#3CCF91] font-semibold"
                    >Canon EOS 600D</span
                >).
                <br />
                Here's what I've been taking on.
                <br />
                <code class="text-sm text-pink-500 font-bold uppercase"
                    >* Portrait images may be oriented to landscape.</code
                >
                <br />
                <code class="text-sm text-pink-500 font-bold uppercase"
                    >* Click the image to view in full resolution.</code
                >
            </p>
            <hr class="mt-5 opacity-[0.06] border-b-[1px]" />
        </div>
        <div v-if="data[0]" class="mt-10 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div class="hobbies__card cursor-zoom-in" v-for="picture in data" v-motion-slide-visible-once-left>
                <NuxtLink target="_blank" class="cursor-zoom-in" :to="urlFor(picture.image).url()" data-no-blobity>
                    <nuxt-img
                        format="webp"
                        width="1920"
                        height="1280"
                        fit="clip"
                        quality="50"
                        class="w-auto h-auto"
                        provider="sanity"
                        :src="picture.image.asset._ref"
                        alt="Picture"
                        loading="lazy"
                    />
                    <div class="ps-4 pe-4 py-2 h-full w-full z-30 relative">
                        <p v-if="picture.attribution" class="text-base text-white">
                            Object in this picture:
                            <NuxtLink
                                class="text-[#3CCF91] font-bold underline"
                                target="_blank"
                                :to="picture.attribution.url"
                                >{{ picture.attribution.username }}</NuxtLink
                            >
                        </p>
                        <p
                            v-if="!picture.attribution"
                            class="text-base text-white inline-block"
                            data-blobity-tooltip="If there's yourself there, contact me on Instagram to get recognized."
                        >
                            No object or possibly unknown.
                            <span><Icon name="material-symbols:help-outline" class="text-white" /></span>
                        </p>
                    </div>
                </NuxtLink>
            </div>
        </div>
        <p v-if="!data[0]" class="mt-4 text-xl text-[#3CCF91] font-semibold">No picture.</p>
    </div>
</template>

<style scoped></style>
