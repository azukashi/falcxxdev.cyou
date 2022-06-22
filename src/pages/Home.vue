<template>
    <section class="container section greeting" id="home">
        <h1>
            👋 Hi,
            <br />
            I'm {{ name }},
            <br />
            Website developer
        </h1>

        <router-link :to="{ name: 'About' }">
            <button class="button">About me →</button>
        </router-link>
    </section>
</template>

<script lang="ts">
export default {
    name: 'Home',
    data() {
        return {
            name: 'Gifaldy',
        };
    },
};
</script>

<style lang="scss">
@import '../styles/variable';
// Main section
.greeting {
    margin-top: 5rem;
    font-size: 1.5em;
    cursor: default;
    overflow-x: hidden;
    font-family: $poppins;
    padding-bottom: 230px;
}
.button {
    height: 2rem;
    width: 7.4rem;
    margin-top: 1rem;
    background-color: rgba(255, 255, 255, 0.05);
    cursor: pointer;
    border: solid 1px $text-color;
    border-radius: 15px;
    color: $text-color;
    font-family: 'Lexend', sans-serif;
    text-align: center;
    font-size: 1rem;
    transition: 0.2s ease-in-out;
    &:hover {
        background-color: $text-color;
        color: $container-color;
    }
}
</style>
