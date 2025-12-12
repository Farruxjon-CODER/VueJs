<script setup>
import { ref } from 'vue';
import PageTitle from '../components/PageTitle.vue';

// let isAdmin = true;

// let Cars = [
//     { author: "GM", name: "Malibu 2", status: true },
//     { author: "GM", name: "Onix", status: true },
//     { author: "GM", name: "Spark", status: true },
//     { author: "GM", name: "Cobalt", status: true },
//     { author: "GM", name: "Lacetti", status: true },
//     { author: "GM", name: "Gentra", status: true },
//     { author: "GM", name: "Tracker", status: true },
//     { author: "GM", name: "Equinox", status: true },
//     { author: "GM", name: "Tahoe", status: true },
//     { author: "GM", name: "Aveo", status: false },
//     { author: "GM", name: "Suburban", status: false },
//     { author: "GM", name: "Camaro", status: false },
//     { author: "GM", name: "Corvette", status: false },
// ]

// let color = ref("");

// function chooseColor(e) {
//     color.value = e.target.value;
// }

// //SLOT

// let count = ref(0);
// let text = ref('')

// function increment() {
//     count.value++
// }

// function dicrement() {
//     count.value--
// }


// let data = ref([
//     { name: "iPhone: 17 Pro", price: 2000, image: '/img/iPhone15Pro.jpg', action: true },
//     { name: "iPhone: 16 Pro", price: 1800, image: '/img/iPhone15Pro.jpg', action: true },
//     { name: "iPhone: 15 Pro", price: 1600, image: '/img/iPhone15Pro.jpg', action: true },
//     { name: "iPhone: 14 Pro", price: 1400, image: '/img/iPhone14Pro.jpg', action: true },
//     { name: "iPhone: 13 Pro", price: 1200, image: '/img/iPhone13Pro.jpg', action: true },
//     { name: "iPhone: 12 Pro", price: 1000, image: '/img/iPhone12Pro.jpg', action: true },
//     { name: "iPhone: 11 Pro", price: 900, image: '/img/iPhone11Pro.jpg', action: true },
//     { name: "iPhone: X", price: 800, image: '/img/iPhoneX.jpg', action: false },
//     { name: "iPhone: 8", price: 600, image: '/img/iPhone8.jpg', action: false },
//     { name: "iPhone: 7", price: 500, image: '/img/iPhone7.jpg', action: false },
//     { name: "iPhone: 6", price: 400, image: '/img/iPhone6.jpg', action: false },
//     { name: "iPhone: 5", price: 300, image: '/img/iPhone5.jpg', action: false },
// ])

// const addMovi = () => {
//     const title = newMovietitle.value.trim();
//     if (title) {
//         movies.value.push({
//             id: NextId++,
//             title: title,
//             liked: false
//         })
//         newMovietitle.value = '';
//     }
// }

// const handleLike = (movieId) => {
//     const movie = movies.value.find(m => m.id === movieId);
//     if(movie) {
//         movie.liked = !movie.liked;
//     }
// }

// const handleDelete = (movieId) => {
//     movies.value = movies.value.filter(m => m.id !== movieId);
// }

// let sarlavha = ref("Kinoga sahifasiga xush kelibsiz!");
// let listMovie = ref("Eng yaxshi filmlar ro'yxati");

let data = ref([
    { id: 1, name: "Inception", year: 2010, isTrue: true, image: './img/inception.jpg' },
    { id: 2, name: "The Matrix", year: 1999, isTrue: true, image: './img/TheMatrix.jpg' },
    { id: 3, name: "Fight Club", year: 1999, isTrue: true, image: './img/FightClub.jpg' },
    { id: 4, name: "The Dark Knight", year: 2008, isTrue: true, image: './img/TheDarkKnight.jpg' },
    { id: 5, name: "Interstellar", year: 2014, isTrue: true, image: './img/Interstellar.jpg' },
    { id: 6, name: "Parasite", year: 2019, isTrue: true, image: './img/Parasite.jpg' },
    { id: 7, name: "The Godfather", year: 1972, isTrue: false, image: './img/The Godfather.webp' },
    { id: 8, name: "Pulp Fiction", year: 1994, isTrue: false, image: './img/Pulp Fiction.jpg' },
    { id: 9, name: "Forrest Gump", year: 1994, isTrue: false, image: './img/Forrest Gump.jpg' },
    { id: 10, name: "The Shawshank Redemption", year: 1994, isTrue: false, image: './img/The Shawshank Redemption.jpg' },
])

const likes = (id) => {
    const user = data.value.find(item => item.id === id);
    if(user) {
        user.isTrue = !user.isTrue
        console.log(user.isTrue);
    }
}

const delItem = (id) => {
    data.value = data.value.filter(item => item.id != id);
}
</script>

<template>
    <div>
        <!-- <div>
            <page-title :info="data"></page-title>
            <div class="container">
                <li v-for="item in data">
                    <h3>{{ item.name }}</h3>
                    <h3>{{ item.price }}</h3>
                    <img :src="item.image" alt="Telefon rasmi" />
                </li>
            </div>
        </div> -->
        <page-title>Siz Index sahifadasiz!</page-title>
        <!-- <div class="container">
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
        </div> -->

        <!-- <div class="container">
            <h3>
                {{ sarlavha }}
            </h3>
            <br>
            <p>{{ listMovie }}</p>
            <br>
            <div>
                <input style="width: 400px; height: 40px;" type="text" id=""> <button style="height: 50px; text-align: center;" class="btn">Qo'shish ➕</button>
            </div>
            <br><br>
        </div> -->


            <page-title :info="data" @like-dislike="likes" @delete-item="delItem"></page-title>
    </div>
</template>
<style scoped>
</style>



