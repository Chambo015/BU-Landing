<template>
    <div class="fixed w-[64px] bottom-14 right-14 space-y-4">
        <a class="cursor-pointer w-[64px] h-[64px] flex items-center justify-center rounded opacity-60 hover:opacity-100 transition-opacity" v-for="app in messageApps" :key="app.id" :style="{backgroundColor: app.color}" :title="app.label">
            <component :is="app.icon" />
        </a>
    </div>
</template>

<script setup>
import IconConsultation from './icons/IconConsultation.vue';
import IconTelegram from './icons/IconTelegram.vue';
import IconWhatsapp from './icons/IconWhatsapp.vue';

const messageApps = [
    {
        id: 0,
        label: 'Написать в Whatsapp',
        color: '#42E85F',
        icon: IconWhatsapp
    },
    {
        id: 1,
        label: 'Написать в Telegram',
        color: '#35A9E6',
        icon: IconTelegram
    },
    {
        id: 2,
        label: 'Получить консультацию',
        color: '#1495FE',
        icon: IconConsultation
    }
]
</script>

<style scoped>

</style>