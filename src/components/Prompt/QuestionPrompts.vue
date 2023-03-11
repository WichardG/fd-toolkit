<template>
    <div class="flex-d">
        <div>
            content
        </div>
    </div>
</template>

<script setup lang="ts">
import type { promptItem } from '@/pages/Prompt/logic';
import { onMounted } from 'vue';

    const emit = defineEmits<{
        (event: 'nextQuestion', id: number): void
    }>()

    const props = defineProps<{items: promptItem[]}>()

    const getNextPromptItemByID = (id: number) => props.items.find(item => item.id === id);

    onMounted(()=> console.log(props.items))

</script>

<style scoped>

</style>