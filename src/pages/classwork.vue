<script setup>
import { ref, computed } from 'vue';
import PageTitle from '../components/PageTitle.vue';

const products = ref([
    { name: "Non", price: 3000 },
    { name: "Sut", price: 8000 }
])
const total = computed(() =>
    products.value.reduce((sum, p) => sum + p.price, 0)
)

</script>

<template>
    <div>
        <page-title>Siz ClassWork sahifadasiz!</page-title>
        <h3>Umumiy: {{ total }} so'm</h3>
    </div>
</template>

<style scoped>
    h3 {
        text-align: center;
        width: 100%;
        text-align: center;
        background-color: rgb(135, 154, 229);
        width: 100px;
        height: 100px;
        display: flex;
    }

    div {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
</style>
