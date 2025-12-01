<script setup>

    import { ref } from 'vue';
    
    const about = ref("Biz haqimizda")
    const mission = ref("Missiyamiz")
    const divizion = ref("Vizyonimiz")
    const values = ref("Qadriyatlarimiz")
    const aboutOurCompany = ref("Bizning kompaniyamiz haqida ma'lumot")

</script>
<template>
    <div>
        <div class="container">
            <h1>{{ about }}</h1>
            <p style="text-align: center;">{{ aboutOurCompany }}</p>
            <div class="about-content">
                <div class="about-card">
                    <h2>{{ mission }}</h2>
                    <p>Biz mijozlarimizga eng yaxshi xizmatni taqdim etishga intilamiz va ularning ehtiyojlarini
                        qondirishga harakat qilamiz.</p>
                </div>
                <div class="about-card">
                    <h2>{{ divizion }}</h2>
                    <p>Sohadagi yetakchi kompaniya bo'lish va innovatsion yechimlar taqdim etish orqali bozorda o'z
                        o'rnimizni mustahkamlash.</p>
                </div>
                <div class="about-card">
                    <h2>{{ values }}</h2>
                    <p>Halollik, professionallik, mijozlarga e'tibor va doimiy rivojlanish bizning asosiy
                        qadriytlarimizdir.</p>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped></style>