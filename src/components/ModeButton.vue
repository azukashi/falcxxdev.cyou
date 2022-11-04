<template>
    <div class="mode-btn">
        <button @click="toggle()" v-if="!dark" data-blobity-tooltip="Dark mode good">
            <span class="material-icons-outlined">dark_mode</span>
        </button>
        <button @click="toggle()" v-if="dark" data-blobity-tooltip="Don't break ur eyes pls">
            <span class="material-icons-outlined">light_mode</span>
        </button>
    </div>
</template>

<script lang="ts">
export default {
    name: 'ModeButton',
    data() {
        return {
            userTheme: 'light-theme',
            dark: true,
        };
    },
    methods: {
        toggle() {
            this.dark = !this.dark;
            this.$emit('modeState', this.dark);
        },
    },
};
</script>

<style lang="scss">
@import '../styles/variable';
.mode-btn {
    button {
        background: rgba(#fff, 0.6);
        border: none;
        cursor: pointer;
    }
}
</style>
