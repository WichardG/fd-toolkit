import router from '@/router';

export const goToPromptPage = () => router.push({name: 'prompts'});
export const goToMethodePage = (name: string) => router.push({name: `methodes-${name}`});
