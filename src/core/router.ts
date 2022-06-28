import { createRouter, createWebHistory, Router } from 'vue-router';
import NProgress from 'nprogress';
import './routes.d';

import Home from '../pages/Home.vue';
import About from '../pages/About.vue';
import Projects from '../pages/Projects.vue';
import Contact from '../pages/Contact.vue';
import NotFound from '../pages/NotFound.vue';

const routes: Routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: { title: 'Home | Gifaldy Azka' },
    },
    {
        path: '/about',
        name: 'About',
        component: About,
        meta: { title: 'About | Gifaldy Azka' },
    },
    {
        path: '/projects',
        name: 'Projects',
        component: Projects,
        meta: { title: 'Projects | Gifaldy Azka' },
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact,
        meta: { title: 'Contact | Gifaldy Azka' },
    },
    {
        path: '/:catchAll(.*)',
        name: 'NotFound',
        component: NotFound,
        meta: { title: 'Page not Found | Gifaldy Azka' },
    },
];

const router: Router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeResolve((to, from, next) => {
    if (to.name) NProgress.start();
    const nearestWithTitle: any = to.matched
        .slice()
        .reverse()
        .find(r => r.meta && r.meta.title);
    const nearestWithMeta: any = to.matched
        .slice()
        .reverse()
        .find(r => r.meta && r.meta.metaTags);
    const previousNearestWithMeta: any = from.matched
        .slice()
        .reverse()
        .find(r => r.meta && r.meta.metaTags);
    if (nearestWithTitle) {
        document.title = nearestWithTitle.meta.title;
    } else if (previousNearestWithMeta) {
        document.title = previousNearestWithMeta.meta.title;
    }
    Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));
    if (!nearestWithMeta) return next();
    nearestWithMeta.meta.metaTags
        .map(tagDef => {
            const tag: HTMLMetaElement = document.createElement('meta');
            Object.keys(tagDef).forEach(key => {
                tag.setAttribute(key, tagDef[key]);
            });
            tag.setAttribute('data-vue-router-controlled', '');
            return tag;
        })
        .forEach(tag => document.head.appendChild(tag));
    next();
});
router.afterEach((to, from) => {
    NProgress.done();
});

export default router;
