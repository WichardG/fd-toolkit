<template>
    <div>
        <div v-if="currentItem" class="w-50">
            <h1 class="questionName">{{ currentItem?.title }}</h1>
            <div class="filler-div d-flex justify-content-center align-items-center p-4">
                {{ currentItem?.description }}
            </div>
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
import {goToMethodePage} from '@/routingHelper';
import {ref, computed} from 'vue';

const itemId = ref(0);
const props = defineProps<{items: promptItem[]}>();

const submitData = (promptId: number, choiceId: number) => {
    checkAnwser(promptId, choiceId);
    itemId.value += 1;
};

// eslint-disable-next-line complexity
const checkAnwser = (promptId: number, choiceId: number) => {
    if (promptId === 1 && choiceId === 2) return goToMethodePage('backcasting');
    if (promptId === 2 && choiceId === 1) return goToMethodePage('roadmapping');
    if (promptId === 3 && choiceId === 1) return goToMethodePage('moonshot');
    if (promptId === 4 && choiceId === 1) return goToMethodePage('speculationdesign');
    if (promptId === 4 && choiceId === 2) return goToMethodePage('sciencefictionprototyping');
    if (promptId === 4 && choiceId === 3) return goToMethodePage('trendanalysis');
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
