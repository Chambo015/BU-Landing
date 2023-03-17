<template>
    <section class="container pt-16 pb-32 relative">
        <TheStardust class="h-[680px] -rotate-90 -z-10 -left-[200px] top-[10%]" background-eclipse="linear-gradient(180deg, #2C4982 0%, #2CD095 100%)" background-rectangle="linear-gradient(180deg, rgba(24, 255, 158, 0) 0%, #17FFE3 100%)" />
        <IconStarOctagram class="absolute -left-[80px] top-[20%]" />
        <h2 class="mb-24">Наш <span class="text-[#30A2FF]">Lead</span> преподаватель:</h2>
        <div class="mb-32 flex gap-16">
            <img src="/img.png" alt="lead" loading="lazy" width="466" height="466" class="shadow-2xl shadow-black/50" />
            <div>
                <h4 class="mb-12 text-5xl font-medium">Кирилл Зайнутдинов</h4>
                <ul role="list" class="list-disc space-y-8 font-['TT_Octosquares'] text-3xl [&>li]:pl-[1ch]">
                    <li>Международный Senior Blockchain разработчик</li>
                    <li>МИФИ Кибернетики и Киберзащиты</li>
                    <li>Предствитель Crypton Studio</li>
                    <li>Обучил 500+ разработчиков, 150 Блокчейн</li>
                    <li>C, C++, Solidity, Python, React, Java, Ton-Solidity, JS, TS</li>
                </ul>
            </div>
        </div>
        <blockquote class="text-right text-4xl">
            <q class="mb-8 block italic">Самый лучший способ научится программировать - это программировать</q>
            <cite class="text-white/50">Кирилл Зайнутдинов</cite>
        </blockquote>
    </section>
</template>

<script setup>
import TheStardust from './Stardust/TheStardust.vue';
import IconStarOctagram from './icons/IconStarOctagram.vue';

</script>

<style scoped>
li::marker {
    content: url('/rectangle.svg');
}
</style>
