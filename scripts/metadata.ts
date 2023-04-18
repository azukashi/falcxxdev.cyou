export const _initHead: () => void = () => {
    useHead({
        title: 'Gifaldy Azka - Web Developer',
        htmlAttrs: {
            lang: 'en',
        },
        bodyAttrs: {
            class: 'bg-[#000000] text-white',
        },
        meta: [
            // General tags
            { 'http-equiv': 'x-ua-compatible', content: 'IE=edge' },
            { name: 'charset', content: 'utf-8' },
            {
                name: 'description',
                content: 'Front-end Web Developer based in Indonesia.',
            },
            { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
            { name: 'author', content: 'Gifaldy Azka' },
            { name: 'theme-color', content: '#000000' },
            { name: 'robots', content: 'index,follow' },
            // Opengraph (Facebook, Discord & average SNS)
            { name: 'og:title', content: 'Gifaldy Azka - Web Developer' },
            {
                name: 'og:description',
                content: 'Front-end Web Developer based in Indonesia.',
            },
            { name: 'og:type', content: 'website' },
            { name: 'og:site_name', content: 'Falcxxdev' },
            { name: 'og:url', content: 'https://www.falcxxdev.cyou' },
            { name: 'og:image', content: 'https://cdn.upload.systems/uploads/X9BcjoxW.png' },
            { name: 'og:image:type', content: 'image/png' },
            { name: 'og:image:width', content: '1200' },
            { name: 'og:image:height', content: '600' },
            // Twitter
            { name: 'twitter:title', content: 'Gifaldy Azka - Web Developer' },
            {
                name: 'twitter:description',
                content: 'Front-end Web Developer based in Indonesia.',
            },
            { name: 'twitter:image', content: 'https://cdn.upload.systems/uploads/X9BcjoxW.png' },
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:site', content: '@falcxxdev' },
            { name: 'twitter:creator', content: '@falcxxdev' },
        ],
        link: [
            { rel: 'icon', href: '/favicon.png', type: 'image/png' },
            { rel: 'canonical', href: 'https://www.falcxxdev.cyou' },
            { rel: 'preload', href: '/img/webicon.webp', as: 'image' },
        ],
        script: [
            {
                async: true,
                defer: true,
                'data-website-id': '61c9ed4f-5c1e-4c6c-be1a-2e6b237b246a',
                src: 'https://umami.falcxxdev.cyou/umami.js',
            },
        ],
    });
};
