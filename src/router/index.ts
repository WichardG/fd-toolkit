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
            name: 'methodesFoo',
            component: () => import('../pages/methodes/MethodeFoo.vue'),
        },
        {
            path: '/Methodes/Bar',
            name: 'methodesBar',
            component: () => import('../pages/methodes/MethodeBar.vue'),
        },
    ],
});

export default router;
