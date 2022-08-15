<template>
    <section class="container section section__height" id="about">
        <h2 class="section__title">About Me</h2>
        <hr />
        <div id="image-container">
            <Profile />
        </div>
        <div id="paragraph">
            <p>
                Hello, my name is <strong>{{ myself.fullName }}</strong
                >. Usually called <strong>Gifaldy / Azka / Falcxxdev (at the internet)</strong>. Born and live in
                <a href="https://www.bandung.go.id/">{{ myself.born_and_live_at }}</a
                >.
            </p>
            <br />
            <p>
                I started learning about Data and Algorithm since 2020 with C++ language. And now i spend more time to
                explore Web development using JavaScript, Node.js, Svelte, and Vue.js.
            </p>
            <br />
            <p>
                Having weird obsession with virtual youtubers. Often likes almost all of their posts on twitter and has
                a desire to join the virtual youtuber's fan server (on Discord) if it exists.
            </p>
        </div>
        <div id="skills">
            <h2 class="pb">Skills</h2>
            <div class="grid-container">
                <div class="tech-stack">
                    <h4 class="pb">Languages</h4>
                    <ul>
                        <div v-for="lang in skills.langSkills">
                            <li>{{ lang.name }}</li>
                        </div>
                    </ul>
                </div>
                <div class="tech-stack">
                    <h4 class="pb">Front-end</h4>
                    <ul>
                        <div v-for="fe in skills.frontEndSkills">
                            <li>{{ fe.name }}</li>
                        </div>
                    </ul>
                </div>
                <div class="tech-stack">
                    <h4 class="pb">Back-end</h4>
                    <ul>
                        <div v-for="be in skills.backEndSkills">
                            <li>{{ be.name }}</li>
                        </div>
                    </ul>
                </div>
                <div class="tech-stack">
                    <h4 class="pb">Tools</h4>
                    <ul>
                        <div v-for="tool in skills.toolsSkills">
                            <li>{{ tool.name }}</li>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
        <div id="waifus" v-if="waifus">
            <h2 class="pb">Current waifus</h2>
            <p class="pb">
                Beloved characters that i am very
                <a href="https://www.urbandictionary.com/define.php?term=Simp" target="_blank">simped</a> to
            </p>
            <ul>
                <div v-for="wf in waifus">
                    <li>
                        <a :href="wf.link" target="_blank">
                            <template v-if="wf.name.jp"> {{ wf.name.jp }} ／ </template>
                            {{ wf.name.en }}</a
                        >
                        <template v-if="wf.from">
                            from
                            <a :href="wf.fromLink" target="_blank">{{ wf.from }}</a>
                        </template>
                    </li>
                </div>
            </ul>
        </div>
    </section>
</template>

<script lang="ts">
import Profile from '../components/Profile.vue';
import myself from '../data/self';
import skills from '../data/skills';
import waifus from '../data/waifus';
export default {
    data() {
        return {
            myself,
            skills,
            waifus,
        };
    },
    components: { Profile },
};
</script>

<style lang="scss">
@import '../styles/variable';
@import '../styles/anchor';
// Base
h2,
h4,
p {
    font-family: $lexend;
    cursor: default;
}
details {
    cursor: pointer;
}
// Main section
#image-container {
    display: flex;
    justify-content: center;
    padding-top: 10px;
    padding-bottom: 10px;
}
.pb {
    padding-bottom: 7px;
}
#paragraph,
#skills {
    padding-bottom: 20px;
    li {
        font-family: $lexend;
        margin-left: 18px;
        cursor: default;
        list-style: disc;
    }
}
#skills {
    padding-bottom: 90px;
}
#waifus {
    li {
        font-family: $lexend;
        list-style: disc;
        margin-left: 18px;
        cursor: default;
    }
}
.grid-container {
    display: grid;
    grid-template-columns: repeat(2, minmax(0px, 1fr));
}
.tech-stack {
    display: flex;
    -webkit-box-align: start;
    flex-direction: column;
    padding-bottom: 7px;
}
#info {
    margin-top: 4px;
    padding-bottom: 7px;
    font-size: 12.5px;
    font-family: 'Lexend', sans-serif;
}
.req-img {
    margin-top: 4px;
    padding-bottom: 7px;
}
</style>
