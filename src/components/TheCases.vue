<script setup>
import { animate, inView, stagger } from 'motion';
import solidityImg from '../assets/solidity.png';
import TheStardust from './Stardust/TheStardust.vue';
import { onMounted, ref } from 'vue';

const salariesRef = ref(null);
const subTitleRef = ref(null);
const aboutSolidityRef = ref(null)

onMounted(() => {
    inView(salariesRef.value, ({ target }) => {
        animate(
            target.children,
            { y: [200, 0], opacity: [0, 1] },
            {
                delay: stagger(0.2, {start: 0.5}),
                duration: 0.5,
                easing: [0.22, 0.03, 0.26, 1],
            }
        );
    }, { margin: "100px 0px" });
    inView(subTitleRef.value, ({ target }) => {
        animate(
            target,
            { transform: ['translateX(-100px)', 'none'], opacity: [0, 1] },
            {
                delay: 0.2,
                duration: 0.7,
                easing: [0.22, 0.03, 0.26, 1],
            }
        );
    });
    inView(aboutSolidityRef.value, ({ target }) => {
        animate(
            target,
            { transform: ['translateY(200px)', 'none'], opacity: [0, 1] },
            {
                delay: 0.5,
                duration: 0.7,
                easing: [0.22, 0.03, 0.26, 1],
            }
        );
    }, { margin: "100px 0px" });
});
</script>

<template>
    <section class="container relative 2xl:pt-20 2xl:pb-24 pt-16 pb-16" v-cloak>
        <TheStardust
            class="-bottom-[300px] -right-[450px] -z-10 h-[890px] rotate-[100deg]"
            background-eclipse="linear-gradient(180deg, rgba(0, 194, 255, 0) 0%, #FF29C3 100%)"
            background-rectangle="linear-gradient(180deg, rgba(24, 75, 255, 0) 0%, #174AFF 100%)" />
        <h2 class="2xl:mb-2 mb-7">Зарплаты <span class="text-[#30A2FF]">web3</span> специалиста</h2>
        <p ref="subTitleRef" class="mb-14 2xl:text-4xl text-sm">По данным web3.career, в среднем составляет</p>
        <div ref="salariesRef" class="mb-24 flex flex-wrap 2xl:gap-0 gap-12 2xl:justify-between">
            <div>
                <div class="2xl:text-[40px] text-lg font-bold leading-tight 2xl:mb-0 mb-1">3 000 – 3 500 $</div>
                <p class="2xl:text-[32px] text-sm leading-tight text-white/50">Blockchain Developer</p>
            </div>
            <div>
                <div class="2xl:text-[40px] text-lg font-bold leading-tight 2xl:mb-0 mb-1">2 000 – 2 500 $</div>
                <p class="2xl:text-[32px] text-sm leading-tight text-white/50">Token Audit</p>
            </div>
            <div>
                <div class="2xl:text-[40px] text-lg font-bold leading-tight 2xl:mb-0 mb-1">4 000 – 5 000 $</div>
                <p class="2xl:text-[32px] text-sm leading-tight text-white/50">Metaverse Dev</p>
            </div>
            <div>
                <div class="2xl:text-[40px] text-lg font-bold leading-tight 2xl:mb-0 mb-1">1 500 – 2 000 $</div>
                <p class="2xl:text-[32px] text-sm leading-tight text-white/50">NFT tokens</p>
            </div>
        </div>
        <div ref="aboutSolidityRef" class="relative rounded-lg bg-[#F4E4B6] 2xl:pt-10 2xl:pb-10 pt-7 pb-32 2xl:px-14 px-9 overflow-hidden">
            <h3 class="mb-10 2xl:text-[64px] text-2xl font-bold leading-tight text-[#1D1D1D]">Про Solidity</h3>
            <ul class="2xl:ml-10 2xl:w-[60%] w-[90%] list-disc space-y-7 2xl:text-4xl text-sm leading-none text-[#333333]">
                <li>Объектно-ориентированный язык программирования смарт-контрактов</li>
                <li>По синтаксису solidity похож на языки программирование как JavaScript и C++</li>
                <li>Создан со-основателем Ethereum: Gavin Wood</li>
                <li>Более 90% всех смарт-контрактов написаны на Solidity</li>
                <li>Самый востребованный язык блокчейн разработки</li>
            </ul>
            <img
                :src="solidityImg"
                alt="solidity"
                width="500"
                height="500"
                class="absolute 2xl:top-1/2 2xl:right-10 2xl:bottom-[none] bottom-0 -right-8 aspect-square w-[40%] 2xl:w-1/3 2xl:-translate-y-1/2" />
        </div>
    </section>
</template>

<style scoped></style>
