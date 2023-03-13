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
        {
            path: '/Methodes/Foo',
            name: 'methodes-foo',
            component: () => import('../pages/methodes/backcasting.vue'),
        },
        {
            path: '/Methodes/Bar',
            name: 'methodes-bar',
            component: () => import('../pages/methodes/roadmapping.vue'),
        },
    ],
});

export default router;
