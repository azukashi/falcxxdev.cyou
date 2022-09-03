<template>
    <Header @modeState="handleMode" />
    <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
            <component :is="Component"></component>
        </transition>
    </router-view>
</template>

<script lang="ts">
import Header from './components/Header.vue';
import 'material-icons/iconfont/outlined.css';
export default {
    name: 'App',
    components: { Header },
    beforeMount() {
        if (this.dark) document.body.classList.add('dark');
        if (!this.dark) document.body.classList.remove('dark');
    },
    data() {
        return {
            dark: true,
        };
    },
    methods: {
        handleMode(state) {
            this.dark = state;
            if (this.dark) document.body.classList.add('dark');
            if (!this.dark) document.body.classList.remove('dark');
        },
    },
};
</script>

<style lang="scss">
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s ease-out;
}
</style>
