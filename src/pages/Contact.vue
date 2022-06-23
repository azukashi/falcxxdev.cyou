<template>
    <section class="container section" id="contactme">
        <div id="title">
            <h2 class="section__title">Contact Me</h2>
            <hr />
        </div>
        <div class="description">
            <p>
                You can reach me out via email at <a :href="`mailto:${email}`">{{ email }}</a> or via socials below :
            </p>
        </div>
        <div class="image-container">
            <div v-for="s in socials">
                <SocialButton :name="s.name" :bg="s.bg" :color="s.color" :dest="s.url" />
            </div>
            <br />
            <div></div>
        </div>

        <br />
        <div id="we-hate-form-input">
            <p>
                Where is the form input? No. I'm not using form input <s>cuz it's cringe</s>.
                <br />
                Reach me via email or socials instead of using form input.
            </p>
        </div>
        <div id="discord">
            <h2 id="discord-title">Me at Discord</h2>
            <a :href="`https://discord.com/users/${discordCard.userId}`">
                <img
                    id="discord-card"
                    :src="`https://lanyard-profile-readme.vercel.app/api/${discordCard.userId}?theme=light`"
                    :alt="discordCard.altText"
                />
            </a>
        </div>
        <div id="game">
            <h2 id="game-title">Play with me</h2>
            <div class="image-container">
                <div v-for="g in games">
                    <img id="game-badge" class="image" :src="g.imgUrl" :alt="g.name" />
                </div>
            </div>
        </div>
        <br />
        <br />
        <div id="credits">
            <h2 id="credits-title">Credits</h2>
            <p id="desc">
                I used their fan-art in this website. So, here is some credits for those people who created the art.
                Thanks~!
            </p>
            <div id="list" v-for="c in credits">
                <ul>
                    <li>
                        {{ c.type }} is drawn by
                        <a :href="`https://twitter.com/${username}`">{{ c.artist }}</a>
                        | <a :href="c.tweets">See tweet</a>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import SocialButton from '../components/SocialButton.vue';

export default {
    data() {
        return {
            name: 'Gifaldy',
            email: 'me@falcxxdev.ml',
            socials: [
                {
                    name: 'GitHub',
                    url: 'https://github.com/gifaldyazkaa',
                    bg: '#181717',
                    color: '#fff',
                },
                {
                    name: 'Discord',
                    url: 'https://discord.com/users/788260234409672754',
                    bg: '#5865F2',
                    color: '#fff',
                },
                {
                    name: 'Facebook',
                    url: 'https://facebook.com/falcxxdev',
                    bg: '#1877F2',
                    color: '#fff',
                },
                {
                    name: 'Instagram',
                    url: 'https://instagram.com/falcxxdev',
                    bg: '#E4405F',
                    color: '#fff',
                },
                {
                    name: 'Twitter',
                    url: 'https://twitter.com/falcxxdev',
                    bg: '#1DA1F2',
                    color: '#fff',
                },
                {
                    name: 'XDA Developers',
                    url: 'https://forum.xda-developers.com/m/falcxxdev.11950709/',
                    bg: '#EA7100',
                    color: '#fff',
                },
            ],
            games: [
                {
                    name: 'Azur Lane',
                    imgUrl: 'https://img.shields.io/badge/Azur%20Lane-72493403%20(EN%20Avrora)-%233399ff?logo=codeship&style=for-the-badge',
                },
            ],
            discordCard: {
                userId: '788260234409672754',
                altText: 'Discord Card',
            },
            credits: [
                {
                    type: 'Both My Profile Picture and Website Favicon',
                    artist: 'ゆさゆさ (@yusa_39)',
                    username: 'yusa_39',
                    tweets: 'https://twitter.com/yusa_39/status/1490259792086335490',
                },
            ],
        };
    },
    components: { SocialButton },
};
</script>

<style lang="scss">
@import '../styles/variable';
@import '../styles/anchor';
// Base
h2,
p {
    cursor: default;
    font-family: $lexend;
}
img {
    pointer-events: none;
}
// Main section
.section__title {
    font-family: 'Lexend', sans-serif;
}
.description p {
    margin-top: 15px;
}
#we-hate-form-input p {
    margin-top: 10px;
    font-size: 12px;
}
// Credits section
#discord-title,
#game-title,
#credits-title {
    margin-top: 15px;
    color: var(--title-color);
}
#credits {
    li {
        font-family: $lexend;
        list-style: disc;
        margin-left: 18px;
        cursor: default;
    }
    #desc {
        margin-top: 3px;
        margin-bottom: 5px;
        font-size: 13px;
    }
    #list {
        margin-top: 3px;
        font-size: 14px;
        padding-bottom: 90px;
    }
}
#discord-card {
    margin-top: 9px;
}
#game-badge {
    margin-right: 3px;
}
</style>
