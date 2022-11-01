<template>
    <header class="header scroll-header" id="header">
        <nav class="nav container">
            <router-link :to="{ name: 'Home' }" class="nav__logo">&lt;Gifaldy Azka /&gt;</router-link>
            <!-- <a href="/" class="nav__logo">Gifaldy Azka</a> -->
            <ModeButton @modeState="handleMode" class="mobile" />

            <div class="nav__menu" id="nav-menu">
                <ul class="nav__list">
                    <li class="nav__item">
                        <router-link :to="{ name: 'Home' }" class="nav__link">
                            <span class="material-icons-outlined nav__icon">home</span>
                            <span class="nav__name">Home</span>
                        </router-link>
                    </li>

                    <li class="nav__item">
                        <router-link :to="{ name: 'Projects' }" class="nav__link">
                            <span class="material-icons-outlined nav__icon">public</span>
                            <span class="nav__name">Projects</span>
                        </router-link>
                    </li>

                    <li class="nav__item">
                        <router-link :to="{ name: 'About' }" class="nav__link">
                            <span class="material-icons-outlined nav__icon">account_circle</span>
                            <span class="nav__name">About</span>
                        </router-link>
                    </li>
                    <ModeButton @modeState="handleMode" class="desktop" />
                </ul>
            </div>
        </nav>
    </header>
</template>

<script lang="ts">
import ModeButton from './ModeButton.vue';
export default {
    components: { ModeButton },
    data() {
        return {
            name: 'Gifaldy',
            dark: true,
        };
    },
    methods: {
        handleMode(state) {
            this.dark = state;
            this.$emit('modeState', this.dark);
        },
    },
};
</script>

<style lang="scss">
@import '../styles/variable';
@import '../styles/mixin';

.router-link-exact-active {
    color: $first-color-alt !important;
}
.nav__logo {
    color: $title-color !important;
    &.router-link-exact-active {
        color: $title-color !important;
    }
}
.nav__link {
    &:visited {
        color: $title-color;
    }
}
.mobile {
    display: none;
}
@include on-mobile {
    .desktop {
        display: none;
    }
    .mobile {
        display: initial;
    }
}
</style>
