<script setup>
import { inject, onMounted, ref } from 'vue';
import IconArrowDown from './icons/IconArrowDown.vue';
import {animate, inView, stagger} from 'motion';

const accordion = ref([
    {
        summary: 'Знакомство, краткая история',
        details: null,
        isOpen: false,
    },
    {
        summary: 'Введение в блокчейн',
        details: 'Введение в технологию блокчейн. Криптография в блокчейне',
        isOpen: false,
    },
    {
        summary: 'Bitcoin',
        details: 'Bitcoin: майнинг, консенсус, эмиссия, форки',
        isOpen: false,
    },
    {
        summary: 'Ethereum',
        details: 'Протокол Ethereum, устройство и принцип действия EVM, знакомство с смарт-контрактами',
        isOpen: false,
    },
    {
        summary: 'Solidity',
        details: null,
        list: [
            'Основы синтаксиса и базовые типы данных',
            'Модификаторы памяти и доступа в функциях',
            'Условные операторы и циклы',
            'Ссылочные типы данных',
            'Модификаторы переменных',
        ],
        isOpen: false,
    },
    {
        summary: 'Web3',
        details:
           null,
        list: [
            'Концепция Web3. Библиотека web.js',
            'Создание проекта, настройка провайдера',
            'Настройка аккаунта',
            'Взаимодействие с сетью, контрактами',
            'Деплой контрактов, создание транзакций',
            'Cобытия',
            'Методы web3',
            'Создание простого daaps с изпользованием.',
            'Библиотека ethers.js',
            'Утилиты',
        ],
        isOpen: false,
    },
    {
        summary: 'Hardhat',
        details:
            null,
        isOpen: false,
        list: [
            'Коцепция HardHat',
            'Архитектура проекта',
            'Написание тестов, скриптов, тасков',
            'Форк mainneta',
            'Развёртывание и верификация контракта в тестовой сети',
            'Использование TS'
        ]
    },
    {
        summary: 'Defi',
        details:
            null,
        isOpen: false,
        list: [
            'Токены',
            'Стандарт ERC20, ERC721, ERC1155',
            'UniSwap v2',
            'Стейкинг',
            'Маркетплейс',
            'DAO',
            'Bridge',
            'Upgradble contract',
            'Flash loan'
        ]
    }
]);

const accordionContainer = ref(null)
const leftColRef = ref(null) 

const isLargerSm = inject('isLargerSm');
const launchAnimations = () => {
    inView(
        accordionContainer.value,
        ({ target }) => {
            animate(
                target.children,
                { y: [100, 0], opacity: [0, 1] },
                {
                    delay: stagger(0.2, { start: 0.5 }),
                    duration: 0.5,
                    easing: [0.22, 0.03, 0.26, 1],
                }
            );
        },
        { margin: '-100px 0px' }
    );
    inView(leftColRef.value, ({ target }) => {
        animate(
            target,
            {
                transform: ['translateX(-100px)', 'none'],
                opacity: [0, 1],
            },
            {duration: 1, delay: 0.5}
        );
    });
}
onMounted(() => {
    isLargerSm.value && launchAnimations()
})
</script>

<template>
    <div class="w-screen bg-[#181818]">
        <section class="container flex lg:flex-row flex-col 2xl:gap-[60px] gap-9 2xl:py-[180px] py-12" id="education">
            <div>
                <h2 class="lg:mb-8 mb-4"><span class="text-[#30A2FF]">Программа обучения —</span><br class="2xl:hidden" /> 9 месяцев</h2>
                <div ref="leftColRef">
                    <p class="2xl:mb-[60px] mb-6 2xl:text-[40px] text-base sm:text-lg md:text-2xl lg:text-3xl leading-tight font-medium">220 часов теории и 250 часов практики</p>
                    <div class="2xl:space-y-6 2xl:text-2xl text-sm space-y-4 leading-tight lg:text-xl">
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
            </div>
            <div ref="accordionContainer" class="[&>div]:opacity-0 ">
                <div v-for="(item, idx) of accordion" :key="item.summary" class="mb-1">
                    <button
                        :aria-controls="item.summary"
                        :aria-expanded="item.isOpen"
                        class="relative block 2xl:w-[700px] w-full lg:w-[430px] lg:text-xl whitespace-nowrap bg-[#1D1D1D] lg:py-4 py-2 2xl:px-6 px-3 text-left text-sm 2xl:text-3xl transition-transform last:mb-0 active:scale-[.98]"
                        @click="item.isOpen = !item.isOpen">
                        Section {{ idx }}: {{ item.summary }}
                        <IconArrowDown
                            v-if="item.details || item.list"
                            :active="item.isOpen"
                            class="absolute top-1/2 2xl:right-[20px] 2xl:h-[40px] 2xl:w-[40px] -translate-y-1/2 right-3 h-[14px] w-[14px]" />
                    </button>
                    <div :id="item.summary" class="py-4 px-6 2xl:text-2xl text-sm lg:text-lg" :key="item.details" v-if="item.isOpen && item.details">{{ item.details }}</div>
                    <ul :id="item.summary" class="list-disc py-4 pr-6 2xl:text-2xl text-sm lg:text-lg pl-7" :key="item.details" v-if="item.isOpen && item.list">
                        <li v-for="i in item.list" :key="i">{{ i }}</li>
                    </ul>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped></style>
