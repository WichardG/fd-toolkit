<template>
    <div>
        <div class="textBox">
            <h2>Roadmapping</h2>
            <p scoped>Bottom Text</p>
        </div>
        <div class="imageBox">
            <div class="imagePlaceholder"></div>
            <p scoped>
                Roadmapping is a strategic planning method that involves creating a visual representation of the steps
                needed to achieve a specific goal or outcome. It typically involves identifying a set of strategic
                objectives and breaking them down into smaller, more achievable steps. Roadmapping can be used to plan
                for product development, project management, or organizational strategy. It provides a clear path
                towards achieving goals, helps identify potential roadblocks or challenges, and allows for more
                effective resource allocation. Overall, roadmapping is a useful tool for organizations to plan and
                execute strategies for success.
            </p>
        </div>
        <h2 class="methodCardText">Methods you might like</h2>
        <div class="methodBox">
            <div class="card method 1"></div>
            <div class="card method 2"></div>
            <div class="card method 3"></div>
        </div>
    </div>
</template>

<style scoped>
.textBox {
    margin-left: 20%;
    margin-top: 2em;
}
.imageBox {
    display: grid;
    grid-template-columns: 1fr 2fr;
    column-gap: 10%;
    max-width: 960px;
    margin: 2em 20%;
}

.imagePlaceholder {
    width: 300px;
    height: 300px;
    background-color: gray;
}

.methodCardText {
    margin-left: 20%;
    margin-top: 3em;
}

.methodBox {
    display: flex;
    grid-template-columns: 1fr 2fr;
    column-gap: 15%;
    max-width: 960px;
    margin: 3em 20%;
}

.card {
    width: 140px;
    height: 140px;
    background-color: gray;
}
</style>
