<template>
    <div>
        <div class="textBox">
            <h2>Moonshot</h2>
            <p scoped>Bottom Text</p>
        </div>
        <div class="imageBox">
            <div class="imagePlaceholder"></div>
            <p scoped>
                The moonshot method is a strategy that involves setting ambitious, "moonshot" goals and using
                breakthrough technology and innovative thinking to achieve them. The term "moonshot" comes from the
                Apollo 11 mission to land a man on the moon, which required a monumental effort and groundbreaking
                technology. The moonshot method has been applied to various fields, such as technology, healthcare, and
                energy, to tackle complex problems and drive innovation. Moonshot goals are typically seen as difficult
                or impossible to achieve with current technology or methods. They require a large-scale effort and often
                involve significant risk, but also have the potential to create significant positive impact. To achieve
                a moonshot goal, it is important to approach the problem with a fresh perspective, think creatively, and
                be willing to take risks. This approach can lead to breakthrough innovations and new discoveries that
                can transform industries and benefit society as a whole.
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
