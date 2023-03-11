<template>
    <div class="d-flex justify-content-center">
        <div>
            <div class="container">
                <h1 class="questionName">prompt</h1>

                <div>
                    <button class="question">text</button>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup lang="ts"></script>

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
