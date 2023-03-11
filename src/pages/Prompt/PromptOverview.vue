<template>
    <div>
        <h1>This is an about page</h1>
        <QuestionPromptsVue item="promptItem"/>
    </div>
</template>
<script setup lang="ts">
import QuestionPromptsVue from '@/components/Prompt/QuestionPrompts.vue';
import { ref } from 'vue';
import type { promptItem } from './logic';

const promptItem = ref<promptItem>()



</script>
