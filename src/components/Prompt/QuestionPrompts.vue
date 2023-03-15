<template>
    <div>
        <div v-if="currentItem">
            <h1 class="questionName">{{ currentItem?.title }}</h1>
            <div class="filler-div" />
            <div class="d-flex justify-content-around">
                <div v-for="choice in currentItem?.choices" :key="choice.id">
                    <button class="question" @click="submitData(currentItem.id, choice.id)">
                        {{ choice.context }}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type {promptItem} from '@/pages/Prompt/logic';
import {ref, computed} from 'vue';

const emit = defineEmits<{
    (event: 'questionDataId', promptData: {promptId: number; choiceId: number}): void;
}>();
const itemId = ref(0);
const props = defineProps<{items: promptItem[]}>();

const submitData = (promptId: number, choiceId: number) => {
    itemId.value += 1;

    if (promptId && choiceId) emit('questionDataId', {promptId, choiceId});
};

const currentItem = computed(() => props.items[itemId.value]);
</script>

<style scoped>
.questionName {
    text-align: center;
    position: relative;
    font-weight: bold;
    font-size: 40px;
}

.question {
    background-color: white;
    width: 200px;
    height: 50px;
    border-radius: 10px;
}

.filler-div {
    margin: 20px;
    border: solid black 1px;
    border-radius: 20px;
    height: 200px;
}

.question:hover {
    scale: 0.9;
    background-color: gray;
}
</style>
