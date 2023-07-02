<script setup lang="ts">
defineProps({
    rootData: {
        required: true,
        type: Object,
    },
});
</script>

<template>
    <div>
        <h3 class="font-semibold my-2">Sanity.io content debug</h3>
        <code class="text-pink-500">{{ rootData }}</code>
    </div>
</template>

<style scoped></style>
