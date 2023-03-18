<script setup>
import {  ref } from 'vue';

const accordion = ref([
    {
        summary: 'Знакомство, краткая история',
        details:
            'Материалы курса не потеряют своей актуальности — мы обновляем лекции, и они автоматически загружаются в ваш личный кабинет.',
        isOpen: false,
    },
    {
        summary: 'Введение в блокчейн',
        details:
            'Материалы курса не потеряют своей актуальности — мы обновляем лекции, и они автоматически загружаются в ваш личный кабинет.',
        isOpen: false,
    },
    {
        summary: 'Bitcoin',
        details:
            'Материалы курса не потеряют своей актуальности — мы обновляем лекции, и они автоматически загружаются в ваш личный кабинет.',
        isOpen: false,
    },
    {
        summary: 'Ethereum',
        details:
            'Материалы курса не потеряют своей актуальности — мы обновляем лекции, и они автоматически загружаются в ваш личный кабинет.',
        isOpen: false,
    },
    {
        summary: 'Solidity',
        details:
            'Материалы курса не потеряют своей актуальности — мы обновляем лекции, и они автоматически загружаются в ваш личный кабинет.',
        isOpen: false,
    },
    {
        summary: 'Web3',
        details:
            'Материалы курса не потеряют своей актуальности — мы обновляем лекции, и они автоматически загружаются в ваш личный кабинет.',
        isOpen: false,
    },
    {
        summary: 'Hardhat',
        details:
            'Материалы курса не потеряют своей актуальности — мы обновляем лекции, и они автоматически загружаются в ваш личный кабинет.',
        isOpen: false,
    },
    {
        summary: 'Defi',
        details:
            'Материалы курса не потеряют своей актуальности — мы обновляем лекции, и они автоматически загружаются в ваш личный кабинет.',
        isOpen: false,
    },
    {
        summary: 'Что дальше?',
        details: 'Что?',
        isOpen: false,
    }
]);
</script>

<template>
    <div class="bg-[#181818] w-screen">
        <section class="container flex gap-[60px] py-[180px]" id="education">
            <div>
                <h2 class="mb-8"><span class="text-[#30A2FF]">Программа обучения —</span> 9 месяцев</h2>
                <p class="mb-[60px] text-[40px] leading-tight">220 часов теории и 250 часов практики</p>
                <div class="space-y-6 text-2xl leading-none">
                    <p>
                        Вебинары, на которых вы можете задать вопросы, проводятся по будням 3 раза в неделю после 16:00
                        по времени Астаны. Для комфортных тренировок вам понадобится 6-8 часов в неделю.
                    </p>
                    <p>
                        Материалы курса не потеряют своей актуальности — мы обновляем лекции, и они автоматически
                        загружаются в ваш личный кабинет.
                    </p>
                </div>
            </div>
            <div>
                <template v-for="(item, idx) of accordion" :key="item.summary">
                    <button class="block w-[700px] bg-[#1D1D1D] text-3xl py-4 px-6 mb-1 last:mb-0 text-left whitespace-nowrap relative after:absolute after:border-r-2 after:border-b-2 after:w-6 after:h-6 after:right-6 after:rotate-45 active:scale-[.98] transition-transform" @click="item.isOpen = !item.isOpen">Section {{ idx }}: {{ item.summary }}</button>
                    <div class="py-4 px-6 text-2xl" v-if="item.isOpen">{{ item.details }}</div>
                </template>
            </div>
        </section>
    </div>
</template>



<style scoped></style>
