<template>
    <div class="root">
        <img :src="myself.avatarUrl" />
    </div>
</template>

<script lang="ts">
import myself from '../data/self';
export default {
    data() {
        return {
            myself,
        };
    },
};
</script>

<style lang="scss">
@import '../styles/variable';

.root {
    height: 10rem;
    width: 10rem;
    padding: 3px;
    text-align: center;
    border-radius: 50%;
    border: 3px dashed $first-color;
    img {
        border-radius: 50%;
    }
}
</style>
