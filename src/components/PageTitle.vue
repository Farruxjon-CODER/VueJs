<script setup>
const props = defineProps({
    info: Object
})

const emit = defineEmits(["like-dislike", "delete-item", "dislike"])

const like = (id) => {
    emit("like-dislike", id)
}

const deleteItem = (id) => {
    emit("delete-item", id)
}

const dislike = (id) => {
    emit("dislike", id)
}


// let collections = 1
</script>

<template>
    <div>
        <div class="parent">
            <h1>
                <slot />
            </h1>
            <!-- <h2>{{ collections }}</h2> -->
            <div class="cards-container">
                <div v-for="item in props.info" :key="item.id" class="card" :class="{ active: item.isTrue }">
                    <img :src="item.image" alt="" class="card-image" />
                    <div class="card-content">
                        <h3>{{ item.name }}</h3>
                        <h4>{{ item.year }}</h4>
                        <div class="buttons">
                            <button class="like-btn" @click="like(item.id)">👍</button>
                            <button class="dislike-btn" @click="dislike(item.id)">👎</button>
                            <button class="delete-btn" @click="deleteItem(item.id)">🗑</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.parent {
    text-align: center;
    padding: 20px;
}

.cards-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
    margin-top: 20px;
}

.card {
    background-color: #f9f9f9;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s, box-shadow 0.3s;
    display: flex;
    flex-direction: column;
}

.card:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.active {
    border: 3px solid rgb(0, 104, 202);
    background-color: #e8f4ff;
}

.card-image {
    width: 100%;
    height: 200px;
    object-fit: fill;
}

.card-content {
    padding: 15px;
    text-align: left;
}

.card-content h3 {
    margin: 0 0 5px 0;
    font-size: 1.2em;
    color: #333;
}

.card-content h4 {
    margin: 0 0 15px 0;
    font-size: 0.9em;
    color: #666;
}

.buttons {
    display: flex;
    gap: 10px;
    justify-content: center;
}

.buttons button {
    flex: 1;
    border: none;
    padding: 10px;
    border-radius: 8px;
    font-size: 1.2em;
    cursor: pointer;
    transition: opacity 0.2s, transform 0.1s;
}

.buttons button:hover {
    opacity: 0.8;
    transform: scale(1.05);
}

.buttons button:active {
    transform: scale(0.95);
}

.like-btn {
    background-color: #4caf50;
}

.dislike-btn {
    background-color: #f44336;
    border-left: 3px solid darkred;
    border-right: 3px solid darkred;
}

.delete-btn {
    background-color: #9e9e9e;
}
</style>