export const _initHead: () => void = () => {
    useHead({
        title: 'Azka - Web Developer',
        htmlAttrs: {
            lang: 'en',
        },
        bodyAttrs: {
            class: 'bg-black text-white',
        },
        meta: [
            // General tags
            { 'http-equiv': 'x-ua-compatible', content: 'IE=edge' },
            { name: 'charset', content: 'utf-8' },
            {
                name: 'description',
                content: 'Full-stack Web Developer based in Indonesia.',
            },
            { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
            { name: 'author', content: 'Azka' },
            { name: 'theme-color', content: '#000000' },
            { name: 'robots', content: 'index,follow' },
            // Opengraph (Facebook, Discord & average SNS)
            { name: 'og:title', content: 'Azka - Web Developer' },
            {
                name: 'og:description',
                content: 'Full-stack Web Developer based in Indonesia.',
            },
            { name: 'og:type', content: 'website' },
            { name: 'og:site_name', content: 'Falcxxdev' },
            { name: 'og:url', content: 'https://www.falcxxdev.fun' },
            {
                name: 'og:image',
                content: 'https://ipfs.filebase.io/ipfs/QmNiYhB3psbrFnKDPHjbnzD6P37Dcoq1eXC5311tRLCXfY',
            },
            { name: 'og:image:type', content: 'image/png' },
            { name: 'og:image:width', content: '160' },
            { name: 'og:image:height', content: '160' },
            // Twitter
            { name: 'twitter:title', content: 'Gifaldy Azka - Web Developer' },
            {
                name: 'twitter:description',
                content: 'Front-end Web Developer based in Indonesia.',
            },
            {
                name: 'twitter:image',
                content: 'https://ipfs.filebase.io/ipfs/QmNiYhB3psbrFnKDPHjbnzD6P37Dcoq1eXC5311tRLCXfY',
            },
            { name: 'twitter:card', content: 'summary_image' },
            { name: 'twitter:site', content: '@falcxxdev' },
            { name: 'twitter:creator', content: '@falcxxdev' },
        ],
        link: [
            { rel: 'icon', href: '/favicon.png', type: 'image/png' },
            { rel: 'canonical', href: 'https://www.falcxxdev.fun' },
            { rel: 'preload', href: '/img/webicon.webp', as: 'image' },
        ],
        script: [
            {
                async: true,
                defer: true,
                'data-website-id': 'c8c2eed9-e7ef-4cc5-9c7d-19e5d1aca55f',
                src: 'https://umami.falcxxdev.fun/script.js',
            },
        ],
    });
};
