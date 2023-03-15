<template>
    <div>
        <div class="textBox">
            <h2>Speculation Design</h2>
            <p scoped>Bottom Text</p>
        </div>
        <div class="imageBox">
            <div class="imagePlaceholder"></div>
            <p scoped>
                Speculative design is a method that explores and critiques the social, political, and cultural
                implications of technology and innovation through the creation of provocative and often dystopian design
                concepts. It involves designing and prototyping speculative future scenarios to challenge assumptions
                about how technology and society might evolve. Speculative design can be used to provoke debate and
                discussion about the potential risks and benefits of new technologies, and to help shape more
                responsible and ethical approaches to innovation.
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
