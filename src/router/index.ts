import {createRouter, createWebHistory} from 'vue-router';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../pages/Home.vue'),
        },
        {
            path: '/prompts',
            name: 'prompts',
            component: () => import('../pages/Prompt/PromptOverview.vue'),
        },
        // methodes page
        {
            path: '/Methodes/backcasting',
            name: 'methodes-backcasting',
            component: () => import('../pages/methodes/backcasting.vue'),
        },
        {
            path: '/Methodes/roadmapping',
            name: 'methodes-roadmapping',
            component: () => import('../pages/methodes/roadmapping.vue'),
        },
        {
            path: '/Methodes/sciencefictionPrototyping',
            name: 'methodes-sciencefictionprototyping',
            component: () => import('../pages/methodes/sciencefictionPrototyping.vue'),
        },
        {
            path: '/Methodes/speculationdesign',
            name: 'methodes-speculationdesign',
            component: () => import('../pages/methodes/speculationDesign.vue'),
        },
        {
            path: '/Methodes/moonshot',
            name: 'methodes-moonshot',
            component: () => import('../pages/methodes/moonShot.vue'),
        },
        {
            path: '/Methodes/trendanalysis',
            name: 'methodes-trendanalysis',
            component: () => import('../pages/methodes/trendanalysis.vue'),
        },
    ],
});

export default router;
