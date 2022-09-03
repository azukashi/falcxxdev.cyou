<template>
    <section class="container section section__height" id="projects">
        <h2 class="section__title">Projects</h2>
        <hr />
        <p class="description">Some projects that i've been working on</p>
        <div v-for="p in projects">
            <div class="list">
                <h1>{{ p.emoji }} {{ p.name }}</h1>
                <p>{{ p.description }}</p>
                <p>
                    <a :href="p.demo_url" target="_blank">Demo</a> |
                    <a :href="`https://github.com/gifaldyazkaa/${p.repo_name}`" target="_blank">View on GitHub</a>
                    |
                    <a :href="p.img_preview" target="_blank">Preview</a>
                </p>
            </div>
        </div>
        <p class="info">
            These projects are listed depending on GitHub Pins at
            <a href="https://github.com/gifaldyazkaa" target="_blank">My GitHub Profile</a>.
        </p>
    </section>
</template>

<script lang="ts">
import projects from '../data/projects';
export default {
    data() {
        return {
            projects,
        };
    },
};
</script>

<style lang="scss">
@import '../styles/variable';

// Base
h1,
h2,
p {
    cursor: default;
}
// Main section
.section__title,
.description {
    font-family: $lexend;
}
.description {
    margin-top: 15px;
    margin-bottom: 15px;
}
.list {
    margin-bottom: 15px;
}
.info {
    padding-bottom: 90px;
    font-size: 10px;
    font-family: $lexend;
}
</style>
