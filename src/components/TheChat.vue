<template>
    <div class="fixed bottom-7 z-50 right-2 md:bottom-7 md:left-7 2xl:bottom-14 2xl:left-14 w-[64px] space-y-4">
        <a
            ref="chatsRef"
            class="flex 2xl:h-[64px] 2xl:w-[64px] w-[40px] h-[40px] 2xl:p-0 p-[2px] cursor-pointer items-center justify-center rounded opacity-60 transition-opacity hover:opacity-100 overflow-hidden select-none"
            v-for="app in messageApps"
            :key="app.id"
            :style="{ background: app.color }"
            :title="app.label"
            :href="app.href"
            target="_blank"
            @mousedown="handleClick(app.id)"
            >
            <component :is="app.icon" />
        </a>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { animate, stagger } from 'motion';
import IconTelegram from './icons/IconTelegram.vue';
import IconWhatsapp from './icons/IconWhatsapp.vue';
import IconInstagram  from './icons/IconInstagram.vue';
import IconWorkshop  from './icons/IconWorkshop.vue';

const props = defineProps({
    openModal: Function
})

const handleClick = (id) => {
    if(id !== 3) return
    props.openModal()
}

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
        href: 'https://api.whatsapp.com/send?phone=77476126014'
    },
    {
        id: 1,
        label: 'Написать в Telegram',
        color: '#35A9E6',
        icon: IconTelegram,
        href: 'https://t.me/web3u_kz'
    },
    {
        id: 2,
        label: 'Наш Instagram',
        color: 'linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d)',
        icon: IconInstagram,
        href: 'https://instagram.com/bu.eth?igshid=YmMyMTA2M2Y='
    },
    {
        id: 3,
        label: 'Бесплатный Воркшоп',
        color: '#1495FE',
        icon: IconWorkshop,
    },
];
</script>

<style scoped></style>
