<template>
    <div class="fixed bottom-14 right-14 w-[64px] space-y-4">
        <a
            ref="chatsRef"
            class="flex h-[64px] w-[64px] cursor-pointer items-center justify-center rounded opacity-60 transition-opacity hover:opacity-100"
            v-for="app in messageApps"
            :key="app.id"
            :style="{ backgroundColor: app.color }"
            :title="app.label">
            <component :is="app.icon" />
        </a>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import IconConsultation from './icons/IconConsultation.vue';
import IconTelegram from './icons/IconTelegram.vue';
import IconWhatsapp from './icons/IconWhatsapp.vue';

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
    },
    {
        id: 1,
        label: 'Написать в Telegram',
        color: '#35A9E6',
        icon: IconTelegram,
    },
    {
        id: 2,
        label: 'Получить консультацию',
        color: '#1495FE',
        icon: IconConsultation,
    },
];
</script>

<style scoped></style>
