<script setup>
import { onMounted, ref } from 'vue';
import { inView, animate } from 'motion';

import IconLogo from './icons/IconLogo.vue';
//import IconSaleBg from './icons/IconSaleBg.vue';
import IconStarOctagram from './icons/IconStarOctagram.vue';
import IconStarHexagram from './icons/IconStarHexagram.vue';
import IconStarCross from './icons/IconStarCross.vue';
import AppButton from '@/components/AppButton.vue';
import blockchainImg from '../assets/4d0e5ea96b9d943023223c6a9e691e1a.png';
import TheInfiniteTicker from './TheInfiniteTicker.vue';
import TheStardust from './Stardust/TheStardust.vue';
import TheEllipse1 from './Stardust/TheEllipse1.vue';
import TheEllipse2 from './Stardust/TheEllipse2.vue';
import TheEllipse3 from './Stardust/TheEllipse3.vue';

const leftCol = ref(null);
const headerRef = ref(null);
const imgRef = ref(null)
const saleRef = ref(null)
const offersRef = ref(null)


const transition = { delay: 0.2, duration: 0.9, easing: [0.17, 0.55, 0.55, 1] }

const ourOffer = [
    {
        title: 'Обучение',
        subTitle: 'на реальных кейсах'
    },
    {
        title: 'Онлайн',
        subTitle: 'в удобное время'
    },
    {
        title: 'Помощь',
        subTitle: 'в трудоустройстве'
    }
]

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
                transform: ['rotate(180deg)', 'rotate(0)']
            },
            { duration: 3, delay: .5}
        );
    });
});
</script>

<template>
    <div class="bg-[#181818]" v-cloak>
        <header ref="headerRef"
            class="container relative z-10 mb-7 flex items-center justify-between pt-4 opacity-0 duration-1000 2xl:mb-24 2xl:pt-[60px]">
            <IconLogo class="w-20 2xl:w-[150px]" />
            <div
                class="cursor-pointer rounded bg-[#D9D9D9] px-7 py-3 font-['Pixeleum_48'] text-[24px] !leading-none text-[#181818]">
                NFT курс
            </div>
        </header>
        <section class="container relative flex flex-col-reverse justify-between pb-32 2xl:flex-row" id="hero">
            <TheStardust class="-left-[200px] top-[20%] h-[405px]" />
            <TheEllipse1 class="absolute top-[40%] -left-[400px]" />
            <IconStarOctagram class="absolute top-[10%] -left-[100px]" />
            <TheStardust
                class="-right-[200px] -top-[170px] h-[690px]"
                background-eclipse="linear-gradient(180deg, rgba(0, 194, 255, 0) 0%, #FF29C3 100%)"
                background-rectangle="linear-gradient(180deg, rgba(24, 75, 255, 0) 0%, #174AFF 100%)" />
            <div ref="leftCol" class="z-50 duration-1000 2xl:w-[830px]">
                <h1 class="mb-4 text-[28px] font-bold !leading-tight 2xl:mb-12 2xl:text-6xl">
                    <span class="text-[#30A2FF]">Блокчейн</span> разработка на самом востребованном языке
                    программирования
                </h1>
                <p class="mb-7 max-w-[670px] leading-tight 2xl:mb-28 2xl:text-2xl 2xl:font-medium">
                    С нуля до уровня Junior+ вместе с Blockchain University при поддержке Astana Hub
                </p>
                <div class="mb-7 2xl:mb-28">
                    <a href="#forms"><AppButton label="Записаться" class="mb-4 2xl:mr-10 2xl:mb-0" /></a>
                    <a href="#education"><AppButton label="Изучить программу" regular /></a>
                </div>
                <div
                    class="2xl:jus flex flex-wrap items-center justify-center gap-12 2xl:flex-nowrap 2xl:items-stretch 2xl:justify-start">
                    <div
                        class="relative w-28 pl-8 text-lg leading-tight before:absolute before:left-0 before:text-5xl before:font-bold before:content-['3'] 2xl:w-40 2xl:pl-12 2xl:text-2xl 2xl:before:text-7xl">
                        вебинара в неделю
                    </div>
                    <div
                        class="relative w-28 pl-8 text-lg leading-tight before:absolute before:left-0 before:text-5xl before:font-bold before:content-['9'] 2xl:w-40 2xl:pl-12 2xl:text-2xl 2xl:before:text-7xl">
                        месяцев обучения
                    </div>
                    <div
                        class="relative w-28 pl-8 text-lg leading-tight before:absolute before:left-0 before:text-5xl before:font-bold before:content-['1'] 2xl:w-40 2xl:pl-12 2xl:text-2xl 2xl:before:text-7xl">
                        итоговый проект
                    </div>
                </div>
            </div>
            <div class="relative duration-1000">
                <TheEllipse2 class="absolute left-1/2 h-full -translate-x-1/2" />
                <TheEllipse3 class="absolute left-1/2 top-[5%] h-[90%] -translate-x-1/2" />
                <!-- Stars -->
                <div class="absolute inset-0">
                    <IconStarOctagram class="absolute right-[180px] w-16" />
                    <IconStarCross class="absolute bottom-0 w-[74px]" />
                    <IconStarHexagram class="absolute left-[25%] bottom-0 w-[44px]" />
                </div>
                <!-- --- -->
                <!-- Sale -->
               <!-- <div ref="saleRef" class="absolute z-50 right-0 w-[190px] h-[190px] aspect-square flex items-center justify-center isolate">
                    <IconSaleBg class="absolute inset-0" />
                    <span class="text-[40px] font-bold relative z-10 text-[#424242] rotate-[25deg]">-25%</span>
                </div> -->
                <!-- --- -->
                <img
                    ref="imgRef"
                    :src="blockchainImg"
                    alt="super img"
                    width="700"
                    height="700"
                    class="2xl:h-700px mx-auto w-9/12 -rotate-12 2xl:w-[700px] z-40" />
            </div>
        </section>
    </div>
    <TheInfiniteTicker />
    <section class="container py-20">
        <ul ref="offersRef" class="ml-10 flex list-disc justify-between text-5xl font-medium [&>li]:duration-500 ">
            <li v-for="offer in ourOffer" :key="offer.title" class="opacity-0">
                {{offer.title}}
                <p class="text-3xl font-normal">{{offer.subTitle}}</p>
            </li>
        </ul>
    </section>
</template>

<style lang="scss" scoped></style>
