<template>
    <div>
        <QuestionPromptsVue :items="items" @question-data-id="addData" />
        <div>
            Anwsers temp:
            {{ 'test' }}
        </div>
    </div>
</template>
<script setup lang="ts">
import QuestionPromptsVue from '@/components/Prompt/QuestionPrompts.vue';
import type {promptItem} from './logic';
import {promptQuestions} from './lib';
import {ref} from 'vue';

const items = ref<promptItem[]>(promptQuestions);

const addData = (promptData: {promptId: number; choiceId: number}) => {
    items.value[promptData.promptId - 1].choices[promptData.choiceId - 1].selected = true;
    console.log(items.value);
};
</script>
