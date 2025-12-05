<script setup>
   const props = defineProps({
    info: Object
   })

</script>

<template>
    <div>
        <div class="parent">
            <h1>
                <slot />
            </h1>
            <h3>
                {{ info }}
            </h3>
            <li v-for="item in props.info">
                <button style="background-color: skyblue;">Tahrirlash</button>
                <button style="background-color: red;">O'chirish</button>
            </li>
        </div>
    </div>
</template>

<style scoped>
.parent {
    background-color: #000;
    padding: 15px;
    border-radius: 10px;
    margin: 15px;
}

h1 {
    color: #fff;
    text-align: center;
}
</style>