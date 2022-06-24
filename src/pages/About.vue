<template>
    <section class="container section section__height" id="about">
        <h2 class="section__title">About Me</h2>
        <hr />
        <div id="image-container">
            <Profile />
        </div>
        <div id="paragraph">
            <p>
                Hello, my name is <strong>{{ fullName }}</strong
                >. Usually called <strong>Gifaldy / Azka / Falcxxdev (at the internet)</strong>. Born and live in
                <a href="https://www.bandung.go.id/">{{ bornLive }}</a
                >.
            </p>
            <br />
            <p>
                I started learning about Data and Algorithm since 2020 with C++ language. And now i spend more time to
                explore Web development using JavaScript, Node.js, Svelte, and Vue.js.
            </p>
            <br />
            <p>
                Having weird obsession with ships & virtual youtuber. I don't know why but the fact is i've been setted
                a ship to be my permanent waifu. Jump to
                <a href="#waifus">Current waifu</a> and see it.
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
        <div id="waifus">
            <h2 class="pb">Current waifus</h2>
            <p class="pb">
                Beloved characters that i am very
                <a href="https://www.urbandictionary.com/define.php?term=Simp" target="_blank">simped</a> to
            </p>
            <ul>
                <div v-for="wf in waifus">
                    <li>
                        <a :href="wf.link" target="_blank">{{ wf.name.jp }} ／ {{ wf.name.en }}</a>
                        from
                        <a :href="wf.fromLink" target="_blank">{{ wf.from }}</a>
                    </li>
                </div>
            </ul>
            <p id="info">
                4 waifus?! yea. i was requested to have 4 waifus in one time. Here is the message. If you don't
                understand what it means, just ignore this.
            </p>
            <details>
                <summary title="Really want to see the image? 🤨">Show image</summary>
                <img class="req-img" src="https://cdn.upload.systems/uploads/DJdc0aMs.png" alt="Request message" />
                <img src="https://cdn.upload.systems/uploads/TQx8WOf7.png" alt="Request message 2" class="req-img" />
            </details>
        </div>
    </section>
</template>

<script lang="ts">
import Profile from '../components/Profile.vue';
export default {
    data() {
        return {
            fullName: 'Gifaldy Azka',
            bornLive: 'Bandung, West Java, Indonesia',
            skills: {
                langSkills: [
                    { name: 'C++' },
                    { name: 'Shell Script' },
                    { name: 'JavaScript' },
                    { name: 'TypeScript' },
                    { name: 'YAML' },
                ],
                frontEndSkills: [
                    { name: 'HTML' },
                    { name: 'CSS' },
                    { name: 'SASS' },
                    { name: 'SvelteKit' },
                    { name: 'Vue.js' },
                    { name: 'Bootstrap' },
                ],
                backEndSkills: [{ name: 'Node.js' }, { name: 'MySQL' }, { name: 'MongoDB' }],
                toolsSkills: [{ name: 'Git' }, { name: 'Vim & Neovim' }, { name: 'Visual Studio Code' }],
            },
            waifus: [
                {
                    name: {
                        jp: '常闇トワ',
                        en: 'Tokoyami Towa',
                    },
                    from: 'hololive',
                    link: 'https://twitter.com/tokoyamitowa',
                    fromLink: 'https://hololive.tv',
                },
                {
                    name: {
                        jp: '湊あくあ',
                        en: 'Minato Aqua',
                    },
                    from: 'hololive',
                    link: 'https://twitter.com/minatoaqua',
                    fromLink: 'https://hololive.tv',
                },
                {
                    name: {
                        jp: 'ゼータ',
                        en: 'Vestia Zeta',
                    },
                    from: 'hololiveID',
                    link: 'https://twitter.com/vestiazeta',
                    fromLink: 'https://hololive.tv/id',
                },
                {
                    name: {
                        jp: '壱百満天原サロメ',
                        en: 'Hyakumantenbara Salome',
                    },
                    from: 'Nijisanji',
                    link: 'https://twitter.com/1000000lome',
                    fromLink: 'https://nijisanji.jp/',
                },
            ],
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
        list-style: disc;
        margin-left: 18px;
        cursor: default;
    }
}
#waifus {
    padding-bottom: 90px;
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
