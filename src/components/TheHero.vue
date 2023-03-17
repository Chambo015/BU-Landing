<script setup>
import IconLogo from './icons/IconLogo.vue';
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
</script>

<template>
    <div class="bg-[#181818]">
        <header
            class="container 2xl:mb-24 mb-7 2xl:pt-[60px] pt-4 duration-1000 flex justify-between items-center z-10 relative"
            v-motion="{
                initial: { opacity: 0 },
                enter: { opacity: 1 },
            }">
            <IconLogo class="2xl:w-[150px] w-20" />
            <div class="bg-[#D9D9D9] px-7 py-3 font-['Pixeleum_48'] text-[#181818] text-[24px] !leading-none cursor-pointer rounded">NFT курс</div>
        </header>
        <section class="container flex flex-col-reverse 2xl:flex-row  justify-between pb-32 relative">
            <TheStardust class="h-[405px] -left-[200px] top-[20%]" />
            <TheEllipse1 class="absolute top-[40%] -left-[400px]" />
            <IconStarOctagram class="absolute top-[10%] -left-[100px]" />
            <TheStardust class="h-[690px] -right-[200px] -top-[170px]" background-eclipse="linear-gradient(180deg, rgba(0, 194, 255, 0) 0%, #FF29C3 100%)" background-rectangle="linear-gradient(180deg, rgba(24, 75, 255, 0) 0%, #174AFF 100%)" />
            <div
                v-motion="{
                    initial: { opacity: 0, x: -200 },
                    enter: { opacity: 1, x: 0 },
                }"
                class="2xl:w-[830px] duration-1000">
                <h1 class="2xl:mb-12 mb-4 2xl:text-6xl text-[28px] font-bold  !leading-tight">
                    <span class="text-[#30A2FF]">Блокчейн</span> разработка на самом востребованном языке
                    программирования
                </h1>
                <p class="2xl:mb-28 mb-7 2xl:text-2xl 2xl:font-medium max-w-[670px] leading-tight">С нуля до уровня Junior+ вместе с Blockchain University при поддержке Astana Hub</p>
                <div class="2xl:mb-28 mb-7">
                    <AppButton label="Записаться" class="2xl:mr-10 2xl:mb-0 mb-4" /> <AppButton label="Изучить программу" regular />
                </div>
                <div class="flex items-center flex-wrap 2xl:flex-nowrap 2xl:items-stretch gap-12 justify-center 2xl:justify-start 2xl:jus">
                    <div
                        class="relative 2xl:w-40 w-28 2xl:pl-12 pl-8 2xl:text-2xl leading-tight text-lg before:absolute before:left-0 2xl:before:text-7xl before:text-5xl before:font-bold before:content-['3']">
                        вебинара в неделю
                    </div>
                    <div
                        class="relative 2xl:w-40 w-28 2xl:pl-12 pl-8 2xl:text-2xl leading-tight text-lg before:absolute before:left-0 2xl:before:text-7xl before:text-5xl before:font-bold  before:content-['9']">
                        месяцев обучения
                    </div>
                    <div
                        class="relative 2xl:w-40 w-28 2xl:pl-12 pl-8 2xl:text-2xl leading-tight text-lg before:absolute before:left-0 2xl:before:text-7xl before:text-5xl before:font-bold before:content-['1']">
                        итоговый проект
                    </div>
                </div>
            </div>
            <div
                v-motion="{
                    initial: { opacity: 0, x: 200 },
                    enter: { opacity: 1, x: 0 },
                }"
                class="duration-1000 relative">
                <TheEllipse2 class="absolute left-1/2 -translate-x-1/2 h-full" />
                <TheEllipse3 class="absolute left-1/2 -translate-x-1/2 h-[90%] top-[5%] " />
                <!-- Stars -->
                <div class="absolute inset-0">
                    <IconStarOctagram class="w-16 absolute right-5" />
                    <IconStarCross class="w-[74px] absolute bottom-0" />
                    <IconStarHexagram class="w-[44px] absolute left-[25%] bottom-0" />
                </div>
                <!-- --- -->
                <img :src="blockchainImg" alt="super img" width="700" height="700" class="-translate-y-8 -rotate-12 2xl:w-[700px] 2xl:h-700px w-9/12 mx-auto " />
            </div>
        </section>
    </div>
    <TheInfiniteTicker />
    <section class="container py-20">
        <ul class="ml-10 flex list-disc justify-between text-5xl font-medium [&>li]:duration-500">
            <li   v-motion-roll-visible-once-left>
                Обучение
                <p class="text-3xl font-normal">на реальных кейсах</p>
            </li>
            <li v-motion-roll-visible-once-left>
                Онлайн
                <p class="text-3xl font-normal">в удобное время</p>
            </li>
            <li v-motion-roll-visible-once-left>
                Помощь
                <p class="text-3xl font-normal">в трудоустройстве</p>
            </li>
        </ul>
    </section>
</template>

<style lang="scss" scoped></style>
