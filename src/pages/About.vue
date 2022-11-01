<template>
    <section class="container section section__height" id="about">
        <h2 class="section__title">&lt;About Me /&gt;</h2>
        <hr />
        <div id="profile-picture">
            <Profile />
        </div>
        <div id="paragraph">
            <p>
                Hello, my name is <strong>{{ myself.name }}</strong
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
                I am currently studying about
                <strong>AVE (Aviation Electronic) or EPU (Elektronika Pesawat Udara)</strong> on
                <a href="https://smkn12bdg.sch.id">SMKN 12 Bandung</a>. Almost everything about electronics inside
                aircrafts are learned here. Here i also learned about design and manufacturing an PCB using Proteus
                (software), Logic gates, etc.
            </p>
            <br />
            <p>
                Having weird obsession with virtual youtubers. Often likes almost all of their posts on twitter and has
                a desire to join the virtual youtuber's fan server (on Discord) if it exists.
            </p>
        </div>
        <hr />
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
        <hr />
        <div id="games">
            <h2>Play with me</h2>
            <div v-for="g in games">
                <ul>
                    <li class="list game-badge">
                        <strong>{{ g.name }}</strong> - UID: <code>{{ g.id }}</code
                        >. {{ g.more }}
                    </li>
                </ul>
            </div>
        </div>
        <hr />
        <div id="social">
            <p>
                You can reach me out via email at <a :href="`mailto:${myself.email}`">{{ myself.email }}</a> or via
                socials below :
            </p>
            <div v-for="s in socials">
                <SocialButton :name="s.name" :bg="s.bg" :color="s.color" :dest="s.url" />
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import Profile from '../components/Profile.vue';
import SocialButton from '../components/SocialButton.vue';
import myself from '../data/self';
import skills from '../data/skills';
import games from '../data/games';
import socials from '../data/socials';
export default {
    data() {
        return {
            myself,
            skills,
            games,
            socials,
        };
    },
    components: { Profile, SocialButton },
};
</script>

<style lang="scss">
@import '../styles/variable';
@import '../styles/mixin';

// Base
h2,
h4,
p {
    font-family: $lexend;
    cursor: default;
}
hr {
    opacity: 0.6;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
}
details {
    cursor: pointer;
}
code {
    color: $first-color-alt;
}
// Main section
#profile-picture {
    display: flex;
    justify-content: center;
    padding-top: 10px;
    padding-bottom: 10px;
}
#paragraph,
#skills {
    li {
        font-family: $lexend;
        margin-left: 18px;
        cursor: default;
        list-style: disc;
    }
}
#social {
    padding-bottom: 4rem;
    @include on-tablet {
        padding-bottom: 12rem;
    }
    @include on-mobile {
        padding-bottom: 15rem;
    }
}
.pb {
    padding-bottom: 7px;
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
</style>
