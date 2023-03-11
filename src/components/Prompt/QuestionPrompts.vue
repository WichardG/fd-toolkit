<template>
    <div class="d-flex justify-content-center">
        <div>
            <div class="container">
                <h1 class="questionName">{{item?.title}}</h1>

                <div v-for="choice in item?.choices">
                    <button @click="id += 1" class="question">{{choice.context}}</button>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { promptItem } from '@/pages/Prompt/logic';
import { onMounted, ref, computed, watch } from 'vue';

    // const emit = defineEmits<{
    //     (event: 'nextQuestion', id: number): void
    // }>()
    const id = ref(1);
    const props = defineProps<{items: promptItem[]}>()
    const getNextPromptItemByID = (id: number) => props.items.find(item => item.id === id);

    const item = computed(()=> {
        console.log('id trigger')
        return getNextPromptItemByID(id.value)
    })

    onMounted(()=> console.log(props.items))

</script>

<style scoped>
.questionName {
    text-align: center;
    position: relative;
    font-weight: bold;
    font-size: 40px;
    margin-bottom: 100%; 
    margin-top: 50%;
}

.question {
    background-color: white;
    width: 200px;
    height: 50px;
    border-radius: 10px;
}

.question:hover{
scale: 0.9;
background-color: gray;
}
</style>
