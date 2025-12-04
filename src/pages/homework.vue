<script setup>
import { ref } from 'vue';
import PageTitle from '../components/PageTitle.vue';

let isAdmin = true;

let Cars = [
    { author: "GM", name: "Malibu 2", status: true },
    { author: "GM", name: "Onix", status: true },
    { author: "GM", name: "Spark", status: true },
    { author: "GM", name: "Cobalt", status: true },
    { author: "GM", name: "Lacetti", status: true },
    { author: "GM", name: "Gentra", status: true },
    { author: "GM", name: "Tracker", status: true },
    { author: "GM", name: "Equinox", status: true },
    { author: "GM", name: "Tahoe", status: true },
    { author: "GM", name: "Aveo", status: false },
    { author: "GM", name: "Suburban", status: false },
    { author: "GM", name: "Camaro", status: false },
    { author: "GM", name: "Corvette", status: false },
]

let color = ref("");

function chooseColor(e) {
    color.value = e.target.value;
}

//SLOT

let count = ref(0);
let text = ref('')

function increment() {
    count.value++
}

function dicrement() {
    count.value--
}



</script>

<template>
    <div>
        <page-title>Siz Index sahifadasiz!</page-title>
        <div class="container">
            <h1 v-if="isAdmin" class="main">Xush kelibsiz Admin</h1>
            <h1 v-else class="title">Oddiy foydalanuvchi</h1>
        </div>

        <div class="container">
            <ul class="cars-grid">
                <li v-for="GM in Cars" :key="GM.name">
                    <div v-if="GM.status" class="car-card">
                        <h1>{{ GM.author }}</h1>
                        <h3>{{ GM.name }}</h3>
                    </div>
                </li>
            </ul>
        </div>
        <br><br><br><br>
        <select @change="chooseColor">
            <option style="background-color: red;" value="red">Qizil</option>
            <option style="background: blue;" value="blue">Ko‘k</option>
            <option style="background: green;" value="green">Yashil</option>
        </select>

        <p>Tanlangan rang: {{ color }}</p>

        <br><br><br>

        <div>
            <h3>{{ count }}</h3>
            <button style="background-color: green; color: #fff;" @click="increment">+++</button>
            <button style="background-color: red; color: #fff;" @click="dicrement">---</button>
            <br><br><br>
            <h3>{{ text }}</h3>
            <input type="text" v-model="text">
        </div>

    </div>
</template>
<style scoped></style>