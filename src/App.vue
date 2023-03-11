<template>
    <div class="m-4">
        <nav class="mb-4">
            <div class="dropdown">
                 <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                     Nav
                 </button>
                 <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                     <li>
                         <RouterLink class="dropdown-item" to="/">Home</RouterLink>
                     </li>
                     <li>
                         <RouterLink class="dropdown-item" to="/prompts">Prompt</RouterLink>
                     </li>
                 </ul>
            </div>
        </nav>
        <div class="flex-d p-2 border">
            <RouterView />
        </div>
    </div>
</template>

<script setup lang="ts">
import {RouterLink, RouterView} from 'vue-router';
</script>
<style scoped>
.startClass {
    color: brown;
}
</style>
