import { createApp } from 'vue';

import './types/vue.d';
import App from './App.vue';
import router from './core/router';

if (!process.env.SPOTIFY_BEARER_TOKEN) {
    console.error('Spotify bearer token are required!');
    process.exit(1);
}

createApp(App).use(router).mount('#app');
