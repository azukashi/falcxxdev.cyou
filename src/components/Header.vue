<template>
    <header class="header scroll-header" id="header">
        <nav class="nav container">
            <router-link :to="{ name: 'Home' }" class="nav__logo"> Gifaldy Azka </router-link>
            <!-- <a href="/" class="nav__logo">Gifaldy Azka</a> -->

            <div class="nav__menu" id="nav-menu">
                <ul class="nav__list">
                    <li class="nav__item">
                        <router-link :to="{ name: 'Home' }" class="nav__link">
                            <span class="material-icons-outlined nav__icon">home</span>
                            <span class="nav__name">Home</span>
                        </router-link>
                    </li>

                    <li class="nav__item">
                        <router-link :to="{ name: 'About' }" class="nav__link">
                            <span class="material-icons-outlined nav__icon">account_circle</span>
                            <span class="nav__name">About</span>
                        </router-link>
                    </li>

                    <li class="nav__item">
                        <router-link :to="{ name: 'Projects' }" class="nav__link">
                            <span class="material-icons-outlined nav__icon">public</span>
                            <span class="nav__name">Projects</span>
                        </router-link>
                    </li>

                    <li class="nav__item">
                        <router-link :to="{ name: 'Contact' }" class="nav__link">
                            <span class="material-icons-outlined nav__icon">chat</span>
                            <span class="nav__name">Contact</span>
                        </router-link>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script lang="ts">
export default {
    data() {
        return {
            name: 'Gifaldy',
        };
    },
};
</script>

<style lang="scss">
@import '../styles/variable';

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
</style>
