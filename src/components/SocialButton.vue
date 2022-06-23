<template class="social">
    <a :href="dest" target="_blank">
        <button class="social" :style="`background-color: ${bg}; color: ${color};`">
            {{ name }}
        </button>
    </a>
</template>

<script lang="ts">
export default {
    props: ['name', 'image', 'bg', 'color', 'dest'],
};
</script>

<style lang="scss">
@import '../styles/variable';
button.social {
    border: none;
    position: relative;
    float: left;
    margin-top: 5px;
    margin-right: 5px;
    padding: 0.65rem 1rem 0.65rem 1rem;
    border-radius: 1vh;
    font-family: $lexend;
    font-size: 17px;
    cursor: pointer;
    transition: all 0.2s ease-in-out 0s;
    img {
        height: 14px;
        width: 14px;
    }
    &:hover {
        transform: translateY(-5px);
    }
}
</style>
