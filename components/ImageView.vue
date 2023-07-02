<script setup lang="ts">
const props = defineProps(['schema', 'id', 'isView']);
const emit = defineEmits(['updateView']);
const { data }: any = await useFetch(`/api/sanity?schema=alb_${props.schema}&id=${props.id}`);

let view = ref(props.isView);

const update = () => {
    view.value = !view.value;
    emit('updateView', view.value);
    document.body.classList.remove('overflow-hidden');
};
</script>

<template>
    <div
        class="fixed bg-black bg-opacity-50 backdrop-blur-sm h-full w-full max-w-full max-h-full z-50"
        @click.self="update()"
    >
        <button class="cursor-pointer absolute right-0 mt-8 mr-5" @click="update()">
            <Icon class="text-white" name="eva:close-outline" />
        </button>
        <figure class="flex h-full">
            <nuxt-img
                class="m-auto max-w-full max-h-full"
                provider="sanity"
                :src="data.image.asset._ref"
                alt="Picture"
            />
        </figure>
    </div>
</template>

<style scoped></style>
