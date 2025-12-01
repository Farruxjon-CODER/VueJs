<script setup>
import { send } from 'vite';
import { ref } from 'vue'

function showPage(pageId) {
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
        section.classList.remove("active");
    });
    document.getElementById(pageId).classList.add("active");
}

function handleSubmit(e) {
    e.preventDefault();
    alert("Xabaringiz yuborildi! Tez orada siz bilan bog'lanamiz.");
    e.target.reset();
    return false;
}
 const placeholderName = ref("Ismingizni kiriting!")


</script>
<template>
    <div>
        <div class="container">
            <h1>Biz bilan bog'laning</h1>
            <p style="text-align: center;">Savollaringiz bormi? Biz bilan bog'laning!</p>
            <form class="contact-form" onsubmit="return handleSubmit(event)">
                <div class="form-group">
                    <label for="name">Ismingiz:</label>
                    <!-- <input type="text" id="name" name="name" required> -->
                    <input :placeholder="placeholderName" v-model="newName" />
                </div>
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required>
                </div>
                <div class="form-group">
                    <label for="message">Xabar:</label>
                    <textarea id="message" name="message" required></textarea>
                </div>
                <!-- <button type="submit">Yuborish</button> -->
                <button @click="handleSubmit">Yuborish</button>
            </form>
        </div>
    </div>
</template>