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
            path: '/Methodes/speculatiefOntwerp',
            name: 'methodes-speculatiefontwerp',
            component: () => import('../pages/methodes/speculatiefOntwerp.vue'),
        },
        {
            path: '/Methodes/toekomstscenario',
            name: 'methodes-toekomstscenario',
            component: () => import('../pages/methodes/toekomstscenario.vue'),
        },
        {
            path: '/Methodes/trendanalyse',
            name: 'methodes-trendanalyse',
            component: () => import('../pages/methodes/trendanalyse.vue'),
        },
    ],
});

export default router;
