<template>
    <div class="fixed bottom-7 z-50 right-3 2xl:bottom-14 2xl:right-14 w-[64px] space-y-4">
        <a
            ref="chatsRef"
            class="flex 2xl:h-[64px] 2xl:w-[64px] w-[40px] h-[40px] 2xl:p-0 p-[2px] cursor-pointer items-center justify-center rounded opacity-60 transition-opacity hover:opacity-100"
            v-for="app in messageApps"
            :key="app.id"
            :style="{ background: app.color }"
            :title="app.label"
            :href="app.href"
            target="_blank">
            <component :is="app.icon" />
        </a>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
// import IconConsultation from './icons/IconConsultation.vue';
import IconTelegram from './icons/IconTelegram.vue';
import IconWhatsapp from './icons/IconWhatsapp.vue';
import IconInstagram  from './icons/IconInstagram.vue';

import { animate, stagger } from 'motion';
const chatsRef = ref(null);

onMounted(() => {
    animate(
        chatsRef.value,
        { x: [200, 0]},
        {
            delay: stagger(0.1),
            duration: 0.5,
            easing: [0.22, 0.03, 0.26, 1],
        }
    );
});

const messageApps = [
    {
        id: 0,
        label: 'Написать в Whatsapp',
        color: '#42E85F',
        icon: IconWhatsapp,
        href: 'https://api.whatsapp.com/send?phone=77081056283'
    },
    {
        id: 1,
        label: 'Написать в Telegram',
        color: '#35A9E6',
        icon: IconTelegram,
        href: 'https://t.me/bueth'
    },
    {
        id: 2,
        label: 'Наш Instagram',
        color: 'linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d)',
        icon: IconInstagram,
        href: 'https://instagram.com/bu.eth?igshid=YmMyMTA2M2Y='
    },
/*     {
        id: 2,
        label: 'Получить консультацию',
        color: '#1495FE',
        icon: IconConsultation,
    }, */
];
</script>

<style scoped></style>
