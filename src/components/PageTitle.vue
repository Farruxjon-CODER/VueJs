<script setup>

</script>

<template>
    <div>
        <div class="parent">
            <h1>
                <slot />
            </h1>
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