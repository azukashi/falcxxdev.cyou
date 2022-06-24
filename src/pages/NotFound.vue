<template>
    <section class="container section error">
        <div>
            <h1 id="sad">:(</h1>
            <h2 id="errcode">404 - Oops!</h2>
            <p id="details">
                Uh... sadly, we can't process your request. Please check back the URL.
                <br />
                Or maybe you want back to <router-link :to="{ name: 'Home' }">Home page</router-link>?
            </p>
        </div>
    </section>
</template>

<script lang="ts"></script>

<style lang="scss">
@import '../styles/variable';
.error {
    // Base
    h1,
    h2,
    p {
        text-align: center;
        font-family: $lexend;
        cursor: default;
    }
    // Main section
    #sad {
        margin-top: 7rem;
        font-size: 50px;
    }
    #details {
        text-align: center;
    }
}
</style>
