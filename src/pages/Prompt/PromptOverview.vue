<template>
    <div>
        <QuestionPromptsVue :items="items" />
    </div>
</template>
<script setup lang="ts">
import QuestionPromptsVue from '@/components/Prompt/QuestionPrompts.vue';
import type {promptItem} from './logic';
import {promptQuestions} from './lib';
import {ref} from 'vue';

const items = ref<promptItem[]>(promptQuestions);
</script>
