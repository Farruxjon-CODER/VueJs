<!-- <template>
    <div>
    <h1 v-if="isAdmin">Xush kelibsiz Admin</h1>
    <h1 v-else>Oddiy foydalanuvchi</h1>
    </div>

     <div>
        
        <li v-for="GM in Cars">
            <div v-if="GM.status">
                <h1>{{ GM.author}}</h1>
                <h3>{{ GM.name }}</h3>
            </div>
        </li>
    </div>
</template>

<script setup>
let isAdmin = true;

let Cars=[
{author:"GM", name:"Malibu 2", status: true},
{author:"GM", name:"Onix", status:true},
{author:"GM", name:"Spark", status:true},
{author:"GM", name:"Cobalt", status:true},
{author:"GM", name:"Lacetti", status:true},
{author:"GM", name:"Gentra", status:true},
{author:"GM", name:"Tracker", status:true},
{author:"GM", name:"Equinox", status:true},
{author:"GM", name:"Tahoe", status:true},
{author:"GM", name:"Aveo", status:false},
{author:"GM", name:"Suburban", status:false},
{author:"GM", name:"Camaro", status:false},
{author:"GM", name:"Corvette", status:false},
]

</script>

<style scoped>
    div {
    padding: 15px;
}

li {
    list-style: none;
    margin-bottom: 15px;
}

li > div {
    background: #ffffff;
    padding: 15px;
    border-radius: 12px;
    border-left: 6px solid #007bff;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
    transition: 0.3s;
}

li > div:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 30px rgba(0,0,0,0.15);
}

h1 {
    margin: 0;
    font-size: 20px;
    font-weight: bold;
    color: #007bff;
}

h3 {
    margin-top: 6px;
    font-size: 16px;
    color: #333;
}
</style> -->


<!-- <script setup>
    let message = "Hello, Vue3"
    message = "Hello, Vue3!!!"
    message
</script>
<template>
    <div>
    <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat alias numquam tempora saepe iste placeat nisi dolores officiis, iusto sint blanditiis quibusdam omnis ab accusamus cum minus hic vitae fugit iure! Minus corporis praesentium doloremque nisi! Provident, magni perferendis, ullam soluta vel deserunt modi quisquam, ipsa voluptas nostrum iure eius?</h2>
        <h1>{{ message }}</h1>
    </div>
</template>
<style scoped>

</style> -->



<template>
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
</template>

<script setup>
let isAdmin = true;

let Cars = [
    {author:"GM", name:"Malibu 2", status: true},
    {author:"GM", name:"Onix", status:true},
    {author:"GM", name:"Spark", status:true},
    {author:"GM", name:"Cobalt", status:true},
    {author:"GM", name:"Lacetti", status:true},
    {author:"GM", name:"Gentra", status:true},
    {author:"GM", name:"Tracker", status:true},
    {author:"GM", name:"Equinox", status:true},
    {author:"GM", name:"Tahoe", status:true},
    {author:"GM", name:"Aveo", status:false},
    {author:"GM", name:"Suburban", status:false},
    {author:"GM", name:"Camaro", status:false},
    {author:"GM", name:"Corvette", status:false},
]
</script>

<style scoped>
* {
    box-sizing: border-box;
}

.container {
    padding: 15px;
    max-width: 1400px;
    margin: 0 auto;
}

.main {
    margin: 0 0 20px 0;
    font-size: clamp(24px, 5vw, 32px);
    text-align: center;
    color: #007bff;
}

.cars-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 20px;
    padding: 0;
    margin: 0;
}

li {
    list-style: none;
}

.car-card {
    background: #ffffff;
    padding: 20px;
    border-radius: 12px;
    border-left: 6px solid #007bff;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s, box-shadow 0.3s;
    height: 100%;
}

.car-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 30px rgba(0,0,0,0.15);
}

.car-card h1 {
    margin: 0;
    font-size: clamp(18px, 3vw, 20px);
    font-weight: bold;
    color: #007bff;
}

.car-card h3 {
    margin-top: 8px;
    font-size: clamp(14px, 2.5vw, 16px);
    color: #333;
}

@media (max-width: 576px) {
    .container {
        padding: 10px;
    }
    
    .cars-grid {
        grid-template-columns: 1fr;
        gap: 15px;
    }
    
    .car-card {
        padding: 15px;
    }
}

@media (min-width: 577px) and (max-width: 768px) {
    .cars-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (min-width: 769px) and (max-width: 1024px) {
    .cars-grid {
        grid-template-columns: repeat(3, 1fr);
    }
}

@media (min-width: 1025px) {
    .cars-grid {
        grid-template-columns: repeat(4, 1fr);
    }
}
</style>