<template>
    <div class="mode-btn">
        <button @click="toggle()" v-if="!dark">
            <span class="material-icons-outlined">dark_mode</span>
        </button>
        <button @click="toggle()" v-if="dark">
            <span class="material-icons-outlined">light_mode</span>
        </button>
    </div>
</template>

<script lang="ts">
export default {
    name: 'ModeButton',
    mounted() {
        const initUserTheme = this.getMediaPreference();
        this.setTheme(initUserTheme);
    },
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
