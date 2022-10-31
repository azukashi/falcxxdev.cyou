<script lang="ts">
import axios from 'axios';
import { Client } from 'spotify-api.js';

export default {
    name: 'SpotifyStatus',
    data() {
        return {
            res: {
                data: {
                    item: {
                        album: { images: [{ url: '' }, { url: '' }], name: '', external_urls: { spotify: '' } },
                        artists: [{ name: '', external_urls: { spotify: '' } }],
                        name: '',
                        external_urls: { spotify: '' },
                    },
                },
            },
        };
    },
    beforeCreate: async function () {
        let token = process.env.SPOTIFY_ACCESS_TOKEN;
        // const client = await Client.create({
        //     refreshToken: true,
        //     retryOnRateLimit: true,
        //     token: {
        //         clientID: process.env.SPOTIFY_CLIENT_ID,
        //         clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
        //         redirectURL: process.env.SPOTIFY_REDIRECT_URL,
        //         refreshToken: process.env.SPOTIFY_REFRESH_TOKEN,
        //     },
        //     onRefresh() {
        //         console.log(`Token has been refreshed. New token: ${client.token}!`);
        //         token = client.token;
        //     },
        // });
        const config = {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        };
        setInterval(() => {
            axios
                .get('https://api.spotify.com/v1/me/player/currently-playing', config)
                .then(res => {
                    if (!res.data.is_playing) return (this.res = null);
                    this.res = res;
                })
                .catch(() => {
                    this.res = null;
                });
        }, 1000);
    },
};
</script>

<template>
    <div v-if="res" class="spoti__card">
        <div class="spoti__card_title">
            <h4>I am currently listening to</h4>
        </div>
        <div class="spoti__card_content">
            <a :href="res.data.item.album.external_urls.spotify"
                ><img :src="res.data.item.album.images[1].url" :alt="res.data.item.album.name"
            /></a>
            <div class="spoti__card_content_info">
                <h3>
                    <a :href="res.data.item.external_urls.spotify">{{ res.data.item.name }}</a>
                </h3>
                <p>
                    by
                    <a :href="res.data.item.artists[0].external_urls.spotify">{{ res.data.item.artists[0].name }}</a> on
                    <a :href="res.data.item.album.external_urls.spotify">{{ res.data.item.album.name }}</a>
                </p>
                <p class="platform">Playing with <a href="https://spotify.com">Spotify</a></p>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import '../styles/variable';
@import '../styles/mixin';

.spoti__card {
    background: #f0f0f0;
    position: fixed;
    border-radius: 15px 0px 0px 0px;
    bottom: 0;
    right: 0;
    @include on-mobile {
        bottom: 50;
    }
    &_title {
        margin-top: 10px;
        margin-left: 10px;
        padding-right: 50px;
    }
    &_content {
        margin-top: 10px;
        margin-left: 10px;
        padding-bottom: 10px;
        display: flex;
        align-items: center;
        img {
            width: 70px;
            border-radius: 5px;
        }
        &_info {
            margin-left: 10px;
            margin-right: 10px;
            .platform {
                font-size: 9px;
            }
        }
    }
}
</style>
