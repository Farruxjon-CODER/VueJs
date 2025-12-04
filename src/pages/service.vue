<script setup>
import { ref } from 'vue';
import PageTitle from '../components/PageTitle.vue';

const Services = ref("Xizmatlarimiz");
const WebDeveloping = ref("Web Dasturlash");
const Design = ref("Dizayn");
const Marketing = ref("Marketing");
const Consultation = ref("Konsultatsiya");
const SEO = ref("SEO");
const Support = ref("Qo'llab-quvvatlash")

</script>
<template>
    <div>
        <page-title>Siz Service sahifadasiz!</page-title>
        <div class="container">
            <h1>{{ Services }}</h1>
            <p style="text-align: center;">Biz taklif qiladigan xizmatlar</p>
            <div class="services-grid">
                <div class="service-item">
                    <h3>{{ WebDeveloping }}</h3>
                    <p>Zamonaviy va responsive websitlar yaratamiz</p>
                </div>
                <div class="service-item">
                    <h3>{{ Design }}</h3>
                    <p>Chiroyli va funksional dizaynlar ishlab chiqamiz</p>
                </div>
                <div class="service-item">
                    <h3>{{ Marketing }}</h3>
                    <p>Raqamli marketing strategiyalari taqdim etamiz</p>
                </div>
                <div class="service-item">
                    <h3>{{ Consultation }}</h3>
                    <p>Biznes rivojlanishi bo'yicha maslahatlar beramiz</p>
                </div>
                <div class="service-item">
                    <h3>{{ SEO }}</h3>
                    <p>Qidiruv tizimlarida yuqori o'rinlarni ta'minlaymiz</p>
                </div>
                <div class="service-item">
                    <h3>{{ Support }}</h3>
                    <p>24/7 texnik yordam va qo'llab-quvvatlash</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>