<template>
    <div class="container">
        <div class="promptModelBox" @click="goToPromptPage()">
            <div class="textbox">
                <p class="textboxText">Try the Prompt</p>
            </div>
        </div>
        <h1 class="title">Future Design Toolkit</h1>
        <p class="text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita ex beatae provident exercitationem nemo
            sint et sapiente blanditiis accusamus. Iusto esse, culpa similique magnam excepturi hic mollitia minima
            inventore itaque? Porro voluptatem repudiandae dolor sequi. Cupiditate quasi, repudiandae doloremque impedit
            et voluptatibus? Explicabo, voluptatem dolor cum voluptas, molestiae necessitatibus assumenda dignissimos
            sequi ex dolorum nesciunt placeat asperiores, rem porro rerum. Non optio quibusdam unde tenetur numquam
            praesentium earum. Asperiores vel magnam dolorem, aspernatur aut dicta iure ea accusamus doloremque sint,
            rem quod, enim velit veniam odio voluptatem! Beatae, hic adipisci.
        </p>
        <h1 class="title">Future Design Methods</h1>

        <div class="test d-flex justify-content-center">
            <div class="cards">
                <div class="card method1" @click="goToMethodePage('foo')">Foo</div>
                <div class="card method2" @click="goToMethodePage('bar')">Bar</div>
                <div class="card method3" @click="goToMethodePage('foo')">Foo</div>
                <div class="card method4" @click="goToMethodePage('bar')">Bar</div>
                <div class="card method5" @click="goToMethodePage('foo')">Foo</div>
                <div class="card method6" @click="goToMethodePage('bar')">Bar</div>
            </div>
        </div>
        <footer>
            <p>Author: Yohan & wICHARD</p>
            <p>Bottom Text</p>
        </footer>
    </div>
</template>
<script setup lang="ts">
import {goToMethodePage, goToPromptPage} from '../routingHelper';
</script>
<style>
.container {
    margin: auto;
    max-width: 916px;
}

.promptModelBox {
    cursor: pointer;
    max-width: 80%;
    width: 800px;
    height: 500px;
    background-color: #d9d9d9;
    margin: 30px auto;
}

.textbox {
    max-width: 100%;
    position: relative;
    text-align: center;
    height: 100px;
    border-style: solid;
    top: 400px;
    background-color: white;
}

.title {
    margin: 60px auto;
    font-size: 60px;
    font-weight: 800;
    text-align: center;
}

.text {
    width: 500px;
    margin: -40px auto 40px;
}

.textboxText {
    margin: 25px auto;
    font-size: 30px;
}

.cards {
    display: grid;
    grid-gap: 15px;
    grid-template-columns: 200px 200px 200px;
    grid-template-rows: 200px 200px;
    margin: 40px auto;
}

.card {
    font-size: 15px;
}

footer {
    text-align: center;
}
</style>
