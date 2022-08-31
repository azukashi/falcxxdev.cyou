<template>
    <section class="container section greeting" id="home">
        <div class="greeting__text">
            <h1>Hi! I'm {{ name }} 👋</h1>
            <hr class="separator" />
            <p>Website Developer</p>
        </div>
    </section>
</template>

<script lang="ts">
import self from '../data/self';

export default {
    name: 'Home',
    data() {
        return {
            name: self.name,
        };
    },
};
</script>

<style lang="scss">
@import '../styles/variable';
// Main section
.greeting {
    font-family: $lexend;
    font-size: 1.6rem;
    text-align: center;
    line-height: 1.2;
    cursor: default;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    &__text {
        font-weight: 500;
        p {
            font-weight: 600;
            font-size: 1.5rem;
        }
    }
    .separator {
        opacity: 0.6;
        margin: auto;
        margin-top: 1rem;
        margin-bottom: 1rem;
        max-width: 16rem;
        text-align: center;
    }
}
</style>
