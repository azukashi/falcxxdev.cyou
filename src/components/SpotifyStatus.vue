<script lang="ts">
import axios from 'axios';
import qs from 'querystring';

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
            tokenData: '',
        };
    },
    created: async function () {
        // POST Request : Refresh Token
        const refreshData = {
            grant_type: 'refresh_token',
            refresh_token: process.env.SPOTIFY_REFRESH_TOKEN,
        };
        const refreshOpt = {
            url: 'https://accounts.spotify.com/api/token',
            method: 'POST',
            headers: { Authorization: 'Basic ' + process.env.SPOTIFY_BASIC_AUTH_BUFFER },
            data: qs.stringify(refreshData),
        };
        await axios
            .request(refreshOpt)
            .then(result => {
                this.tokenData = result.data.access_token;
            })
            .catch(err => {
                console.log(err);
            });
        setInterval(async () => {
            await axios
                .request(refreshOpt)
                .then(result => {
                    this.tokenData = result.data.access_token;
                })
                .catch(err => {
                    console.log(err);
                });
        }, 3600000);
        // Fetch current playing
        setInterval(() => {
            const getDataConfig = {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${this.tokenData}`,
                },
            };
            axios
                .get('https://api.spotify.com/v1/me/player/currently-playing', getDataConfig)
                .then(res => {
                    if (!res.data.is_playing) return (this.res = null);
                    this.res = res;
                })
                .catch(err => {
                    this.res = null;
                    console.log(err);
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
