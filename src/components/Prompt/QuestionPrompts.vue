<template>
    <div class="">
        <div>
            <h1 class="questionName">{{ item?.title }}</h1>
            <div class="filler-div" />
            <div class="d-flex justify-content-around">
                <div v-for="choice in item?.choices" :key="choice.id">
                    <button class="question" @click="id += 1">{{ choice.context }}</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type {promptItem} from '@/pages/Prompt/logic';
import {ref, computed} from 'vue';

// const emit = defineEmits<{
//     (event: 'nextQuestion', id: number): void
// }>()
const id = ref(1);
const props = defineProps<{items: promptItem[]}>();
const getNextPromptItemByID = (itemId: number) => props.items.find(item => item.id === itemId);

const item = computed(() => getNextPromptItemByID(id.value));
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
