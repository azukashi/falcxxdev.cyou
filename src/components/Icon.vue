<script lang="ts">
import { Icon } from '@iconify/vue';

export default {
    name: 'Icon',
    props: {
        name: String,
    },
    components: {
        Iconify: Icon,
    },
};
</script>

<template>
    <Iconify :icon="name" width="18" height="18" />
</template>
