<script setup>
    import { ref } from 'vue';
    import PageTitle from '../components/PageTitle.vue'

    const title = ref("Xush kelibsiz!")
    const newWebsite = ref("Bu sizning yangi websitingiz")
    
</script>
<template>
    <div>
        <page-title>Siz Index sahifadasiz!</page-title>
        <section id="home" class="active">
            <div class="container">
                <div class="hero">
                    <h1>{{ title }}</h1>
                    <p style="font-size: 1.3rem;">{{ newWebsite }}</p>
                    <p>Bu yerda o'z ma'lumotlaringizni joylashtiring</p>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped></style>
