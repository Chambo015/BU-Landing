<script setup>
import IconLogo from './icons/IconLogo.vue';
import AppButton from '@/components/AppButton.vue';
import blockchainImg from '../assets/4d0e5ea96b9d943023223c6a9e691e1a.png';
import TheInfiniteTicker from './TheInfiniteTicker.vue';
</script>

<template>
    <div class="bg-[#181818]">
        <header class="container mb-24 pt-[60px]">
            <IconLogo />
        </header>
        <section class="container pb-32 flex justify-between">
            <div class="w-[830px]">
                <h1 class="mb-12 text-6xl font-bold leading-tight">
                    <span class="text-[#30A2FF]">Блокчейн</span> разработка на самом востребованном языке программирования
                </h1>
                <p class="mb-28 text-2xl font-bold leading-tight">С нуля до уровня Junior+</p>
                <div class="mb-28">
                    <AppButton label="Записаться" class="mr-10" /> <AppButton label="Изучить программу" regular />
                </div>
                <div class="flex gap-12">
                    <div
                        class="relative w-40 pl-12 text-2xl before:absolute before:left-0 before:text-7xl before:font-bold before:content-['3']">
                        вебинара в неделю
                    </div>
                    <div
                        class="relative w-40 pl-12 text-2xl before:absolute before:left-0 before:text-7xl before:font-bold before:content-['9']">
                        месяцев обучения
                    </div>
                    <div
                        class="relative w-40 pl-12 text-2xl before:absolute before:left-0 before:text-7xl before:font-bold before:content-['1']">
                        итоговый проект
                    </div>
                </div>
            </div>
            <div>
                <img :src="blockchainImg" alt="super img" width="700" height="700" class="-translate-y-8 -rotate-12" />
            </div>
        </section>
    </div>
    <TheInfiniteTicker />
    <section class="container py-20">
        <ul class="list-disc text-5xl font-medium flex justify-between ml-10">
            <li>Обучение<p class="text-3xl font-normal"> на реальных кейсах</p></li>
            <li>Онлайн<p class="text-3xl font-normal"> в удобное время</p></li>
            <li>Помощь<p class="text-3xl font-normal"> в трудоустройстве</p></li>
        </ul>
    </section>
</template>

<style lang="scss" scoped></style>
