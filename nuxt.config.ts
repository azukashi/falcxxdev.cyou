// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxt/image', '@nuxtjs/tailwindcss', '@nuxtjs/sanity', '@vueuse/motion/nuxt', 'nuxt-icon'],
    builder: 'vite',
    app: {
        pageTransition: {
            name: 'page',
            mode: 'out-in',
        },
    },
    image: {
        domains: ['cdn.upload.systems', 'cdn.sanity.io'],
        format: ['webp'],
        alias: {
            uploadsys: 'https://cdn.upload.systems/uploads',
        },
        sanity: {
            projectId: 'sxpz540u',
        },
    },
    tailwindcss: {
        cssPath: '~/assets/css/tailwind.css',
    },
    sanity: {
        projectId: 'sxpz540u',
        minimal: true,
    },
    imports: {
        dirs: ['./composables', './components', './scripts', './utils'],
    },
});
