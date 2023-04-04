<script setup>
import { onMounted, ref } from 'vue';
import { inView, animate } from 'motion';

import IconLogo from './icons/IconLogo.vue';
//import IconSaleBg from './icons/IconSaleBg.vue';
import AppButton from '@/components/AppButton.vue';
import blockchainImg from '../assets/4d0e5ea96b9d943023223c6a9e691e1a.png';
import TheInfiniteTicker from './TheInfiniteTicker.vue';
import TheStardust from './Stardust/TheStardust.vue';
import TheEllipse1 from './Stardust/TheEllipse1.vue';
import TheEllipse2 from './Stardust/TheEllipse2.vue';
import TheEllipse3 from './Stardust/TheEllipse3.vue';

const leftCol = ref(null);
const headerRef = ref(null);
const imgRef = ref(null);
const saleRef = ref(null);
const offersRef = ref(null);

const transition = { delay: 0.2, duration: 0.9, easing: [0.17, 0.55, 0.55, 1] };

const digit = [
    ['3', 'вебинара в неделю'],
    ['9', 'месяцев обучения'],
    ['1', 'итоговый проект'],
];

const ourOffer = [
    {
        title: 'Обучение',
        subTitle: 'на реальных кейсах',
    },
    {
        title: 'Онлайн',
        subTitle: 'в удобное время',
    },
    {
        title: 'Помощь',
        subTitle: 'в трудоустройстве',
    },
];

onMounted(() => {
    inView(leftCol.value, ({ target }) => {
        animate(
            target,
            {
                transform: ['translateX(-100px)', 'none'],
                opacity: [0, 1],
            },
            transition
        );
    });
    inView(headerRef.value, ({ target }) => {
        animate(
            target,
            {
                transform: ['translateY(-100px)', 'none'],
                opacity: 1,
            },
            transition
        );
    });
    inView(imgRef.value, ({ target }) => {
        animate(
            target,
            {
                transform: ['translateY(100px) rotate(-12deg)', 'rotate(-12deg) translateY(-32px)'],
                opacity: [0, 1],
            },
            transition
        );
    });
    inView(offersRef.value, ({ target }) => {
        animate(
            target.querySelectorAll('li'),
            {
                transform: ['translateY(100px)', 'none'],
                opacity: [0, 1],
            },
            transition
        );
    });
    inView(saleRef.value, ({ target }) => {
        animate(
            target,
            {
                transform: ['scale(0) ', 'scale(1)'],
                opacity: 1,
            },
            transition
        );
        animate(
            target.querySelector('svg'),
            {
                transform: ['rotate(180deg)', 'rotate(0)'],
            },
            { duration: 3, delay: 0.5 }
        );
    });
});
</script>

<template>
    <div class="bg-[#181818]" v-cloak>
        <header
            ref="headerRef"
            class="container relative z-10 mb-16 flex items-center justify-between pt-4 opacity-0 duration-1000 2xl:mb-24 2xl:pt-[60px]">
            <IconLogo class="w-20 2xl:w-[150px]" />
            <div
                class="cursor-pointer rounded bg-[#D9D9D9] px-4 py-2 font-['Pixeleum_48'] text-[18px] !leading-none text-[#181818] 2xl:px-7 2xl:py-3 2xl:text-[24px]">
                NFT курс
            </div>
        </header>
        <section class="container relative flex justify-between 2xl:pb-32 pb-14" id="hero">
            <TheStardust class="-left-[25%] -top-[25%] h-[200px] 2xl:-left-[200px] 2xl:top-[20%] 2xl:h-[405px]" />
            <TheEllipse1 class="absolute -top-[40%] -left-[50%] 2xl:top-[40%] 2xl:-left-[400px]" />
            <!-- <IconStarOctagram class="absolute top-[10%] -left-[100px]" /> -->
            <TheStardust
                class="2xl:-right-[200px] 2xl:-top-[170px] 2xl:h-[690px] h-[300px] -right-0"
                background-eclipse="linear-gradient(180deg, rgba(0, 194, 255, 0) 0%, #FF29C3 100%)"
                background-rectangle="linear-gradient(180deg, rgba(24, 75, 255, 0) 0%, #174AFF 100%)" />
            <div ref="leftCol" class="z-50 2xl:w-[830px]">
                <h1
                    class="mb-5 max-w-[335px] text-[24px] font-bold !leading-tight 2xl:mb-12 2xl:max-w-none 2xl:text-6xl">
                    <span class="text-[#30A2FF]">Блокчейн</span> разработка на самом востребованном языке
                    программирования
                </h1>
                <p
                    class="mb-7 max-w-[310px] text-sm leading-tight 2xl:mb-28 2xl:max-w-[670px] 2xl:text-2xl 2xl:font-medium">
                    С нуля до уровня Junior+ вместе с Blockchain University при поддержке Astana Hub
                </p>
                <div class="mb-7 flex flex-col 2xl:mb-28 2xl:flex-row">
                    <a href="#forms"><AppButton label="Записаться" class="mb-4 2xl:mr-10 2xl:mb-0" /></a>
                    <a href="#education"><AppButton label="Изучить программу" regular /></a>
                </div>
                <div class="flex items-center gap-10 2xl:flex-nowrap 2xl:items-stretch 2xl:justify-start 2xl:gap-12">
                    <div
                        v-for="[num, value] in digit"
                        :key="num"
                        :class="[
                            'relative w-28 pl-8 text-lg leading-tight before:absolute before:left-0 before:text-5xl before:font-bold 2xl:w-40 2xl:pl-12 2xl:text-2xl 2xl:before:text-7xl',
                            `before_content_${num}`,
                        ]">
                        {{ value }}
                    </div>
                </div>
            </div>
            <div
                class="absolute left-[60%] top-[10%] h-[280px] w-[280px] 2xl:top-0 2xl:left-0 duration-1000 2xl:relative 2xl:h-auto 2xl:w-auto">
                <TheEllipse2 class="absolute left-1/2 h-full -translate-x-1/2" />
                <TheEllipse3 class="absolute left-1/2 top-[5%] h-[90%] -translate-x-1/2" />
                <img
                    ref="imgRef"
                    :src="blockchainImg"
                    alt="super img"
                    width="700"
                    height="700"
                    class="z-40 mx-auto -rotate-12 2xl:h-[700px] 2xl:w-[700px]" />
            </div>
        </section>
    </div>
    <TheInfiniteTicker />
    <section class="container 2xl:py-20 py-12">
        <ul ref="offersRef" class="ml-10 flex list-disc justify-between 2xl:text-5xl text-lg  font-medium [&>li]:duration-500">
            <li v-for="offer in ourOffer" :key="offer.title" class="opacity-0">
                {{ offer.title }}
                <p class="2xl:text-3xl text-xs font-normal">{{ offer.subTitle }}</p>
            </li>
        </ul>
    </section>
</template>

<style scoped>
.before_content_3::before {
    content: '3';
}
.before_content_9::before {
    content: '9';
}
.before_content_1::before {
    content: '1';
}
</style>
