<!-- <template>
  <div>
    <h1 id="text">{{ text }}</h1>
    <h2 id="username">{{ username }}</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente dicta architecto odio doloribus eum distinctio? Deleniti labore in fugit placeat blanditiis ipsum excepturi. Illum amet nemo distinctio quo culpa temporibus, doloribus, sed placeat similique cumque quisquam ipsum velit totam, rerum tempore unde hic modi voluptates fugit commodi nam! Minus, maiores.</p>
  </div>
</template>

<script setup>
let body = ""
let text = "Hello World !"
let username = "@xamidovc_dev"
</script>

<style scoped>

h1{
  color: blue;
  padding: 3px 3px;
  border-radius: 10px;
  background-color: black;
}

h2{
  color: rgb(0, 0, 0);
  padding: 3px 3px;
  border-radius: 10px;
  background-color: aqua;
}

p{
  background-color: red;
  color: black;
}
</style> -->


<script setup>
  // // import header from './components/header.vue'
  import Header from "./components/header.vue"
</script>

<template>
  <div>
    <Header></Header>
    <router-view></router-view>
  </div>
</template>
<style scoped></style>