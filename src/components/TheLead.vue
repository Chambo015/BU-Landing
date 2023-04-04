<template>
    <section class="container relative pt-10 pb-14 2xl:pt-16 2xl:pb-32">
        <TheStardust
            class="-left-[200px] top-[10%] -z-10 h-[350px] -rotate-90 lg:h-[680px]"
            background-eclipse="linear-gradient(180deg, #2C4982 0%, #2CD095 100%)"
            background-rectangle="linear-gradient(180deg, rgba(24, 255, 158, 0) 0%, #17FFE3 100%)" />
        <h2 class="mb-8 2xl:mb-24">Наш <span class="text-[#30A2FF]">Lead</span> преподаватель:</h2>
        <div class="mb-7 flex flex-col gap-6 lg:flex-row 2xl:mb-32 2xl:gap-16">
            <img
            ref="imgRef"
                src="/img.png"
                alt="lead"
                loading="lazy"
                width="466"
                height="466"
                class="aspect-square w-[85%] shadow-2xl shadow-black/50 2xl:w-auto" />
            <div ref="aboutLeadRef">
                <h4 class="mb-4 text-2xl font-medium 2xl:mb-12 2xl:text-5xl">Кирилл Зайнутдинов</h4>
                <ul
                    role="list"
                    class="list-disc space-y-4 font-['TT_Octosquares'] text-sm 2xl:space-y-8 2xl:text-3xl [&>li]:pl-[1ch]">
                    <li>Международный Senior Blockchain разработчик</li>
                    <li>МИФИ Кибернетики и Киберзащиты</li>
                    <li>Предствитель Crypton Studio</li>
                    <li>Обучил 500+ разработчиков, 150 Блокчейн</li>
                    <li>C, C++, Solidity, Python, React, Java, Ton-Solidity, JS, TS</li>
                </ul>
            </div>
        </div>
        <blockquote ref="blockquoteRef" class="text-right text-sm 2xl:text-4xl">
            <q class="mb-4 block italic lg:mb-8">Самый лучший способ научится программировать - это программировать</q>
            <cite class="text-white/50">Кирилл Зайнутдинов</cite>
        </blockquote>
    </section>
</template>

<script setup>
import {onMounted, ref} from 'vue';
import TheStardust from './Stardust/TheStardust.vue';
import {animate, inView} from 'motion';

const transition = { delay: 0.3, duration: 1 };

const imgRef = ref(null)
const aboutLeadRef = ref(null)
const blockquoteRef = ref(null)

onMounted(() => {
    inView(imgRef.value, ({ target }) => {
        animate(
            target,
            {
                transform: ['translateX(-100px)', 'none'],
                opacity: [0, 1],
            },
            transition
        );
    });
    inView(aboutLeadRef.value, ({ target }) => {
        animate(
            target,
            {
                transform: ['translateX(100px)', 'none'],
                opacity: [0, 1],
            },
            transition
        );
    });
    inView(blockquoteRef.value, ({ target }) => {
        animate(
            target,
            {
                transform: ['translateY(100px)', 'none'],
                opacity: [0, 1],
            },
            transition
        );
    });
})
</script>

<style scoped>
li::marker {
    content: url('/rectangle.svg');
}
</style>
