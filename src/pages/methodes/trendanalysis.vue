<template>
    <div>
        <div class="textBox">
            <h2>Trend Analysis</h2>
            <p scoped>Bottom Text</p>
        </div>
        <div class="imageBox">
            <div class="imagePlaceholder"></div>
            <p scoped>
                Trend analysis is a statistical method used to identify patterns or trends in data over time. It
                involves plotting data on a graph, determining the slope and direction of the trend line, and making
                predictions based on past performance. It can help identify long-term trends and seasonal variations,
                and provide valuable insights for decision-making.
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
