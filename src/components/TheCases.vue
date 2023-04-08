<script setup>
import { animate, inView, stagger } from 'motion';
import solidityImg from '../assets/solidity.png';
import TheStardust from './Stardust/TheStardust.vue';
import { onMounted, ref } from 'vue';

const salariesRef = ref(null);
const subTitleRef = ref(null);
const aboutSolidityRef = ref(null);

onMounted(() => {
    inView(
        salariesRef.value,
        ({ target }) => {
            animate(
                target.children,
                { y: [200, 0], opacity: [0, 1] },
                {
                    delay: stagger(0.2, { start: 0.5 }),
                    duration: 0.5,
                    easing: [0.22, 0.03, 0.26, 1],
                }
            );
        },
        { margin: '100px 0px' }
    );
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
    inView(
        aboutSolidityRef.value,
        ({ target }) => {
            animate(
                target,
                { transform: ['translateY(200px)', 'none'], opacity: [0, 1] },
                {
                    delay: 0.5,
                    duration: 0.7,
                    easing: [0.22, 0.03, 0.26, 1],
                }
            );
        },
        { margin: '100px 0px' }
    );
});
</script>

<template>
    <section class="container relative pt-4 pb-9 sm:pt-16 sm:pb-16 2xl:pt-20 2xl:pb-24" v-cloak>
        <TheStardust
            class="-bottom-[300px] -right-[450px] -z-10 h-[890px] rotate-[100deg]"
            background-eclipse="linear-gradient(180deg, rgba(0, 194, 255, 0) 0%, #FF29C3 100%)"
            background-rectangle="linear-gradient(180deg, rgba(24, 75, 255, 0) 0%, #174AFF 100%)" />
        <h2 class="mb-7">Зарплаты <span class="text-[#30A2FF]">web3</span> специалиста</h2>
        <p ref="subTitleRef" class="mb-14 text-center text-sm sm:text-left 2xl:text-4xl lg:text-2xl">
            По данным web3.career, в среднем составляет
        </p>
        <div
            ref="salariesRef"
            class="md:mb-24 mb-16 flex flex-wrap justify-around gap-4 sm:gap-12 2xl:justify-between 2xl:gap-0">
            <div>
                <div class="mb-1 text-lg font-bold leading-tight 2xl:mb-0 2xl:text-[40px] lg:text-2xl">3 000 – 3 500 $</div>
                <p class="text-sm leading-tight text-white/50 2xl:text-[32px] lg:text-xl">Blockchain Developer</p>
            </div>
            <div>
                <div class="mb-1 text-lg font-bold leading-tight 2xl:mb-0 2xl:text-[40px] lg:text-2xl">2 000 – 2 500 $</div>
                <p class="text-sm leading-tight text-white/50 2xl:text-[32px] lg:text-xl">Token Audit</p>
            </div>
            <div>
                <div class="mb-1 text-lg font-bold leading-tight 2xl:mb-0 2xl:text-[40px] lg:text-2xl">4 000 – 5 000 $</div>
                <p class="text-sm leading-tight text-white/50 2xl:text-[32px] lg:text-xl">Metaverse Dev</p>
            </div>
            <div>
                <div class="mb-1 text-lg font-bold leading-tight 2xl:mb-0 2xl:text-[40px] lg:text-2xl">1 500 – 2 000 $</div>
                <p class="text-sm leading-tight text-white/50 2xl:text-[32px] lg:text-xl">NFT tokens</p>
            </div>
        </div>
        <div
            ref="aboutSolidityRef"
            class="relative overflow-hidden rounded-lg bg-[#F4E4B6] sm:px-9 px-4 py-7 2xl:px-14 2xl:py-10">
            <h3 class="md:mb-10 mb-4 text-2xl font-bold leading-tight text-[#1D1D1D] 2xl:text-[64px] lg:text-4xl">Про Solidity</h3>
            <div class="2xl:flex">
                <ul
                    class="md:w-[90%] ml-4 w-full list-disc space-y-5 md:space-y-7 text-sm leading-none text-[#333333] 2xl:ml-10 2xl:w-[60%] 2xl:text-4xl lg:text-2xl">
                    <li>Объектно-ориентированный язык программирования смарт-контрактов</li>
                    <li>По синтаксису solidity похож на языки программирование как JavaScript и C++</li>
                    <li>Создан со-основателем Ethereum: Gavin Wood</li>
                    <li>Более 90% всех смарт-контрактов написаны на Solidity</li>
                    <li>Самый востребованный язык блокчейн разработки</li>
                </ul>
                <div class="relative h-[150px] lg:h-[200px] 2xl:h-full flex justify-center lg:justify-end 2xl:items-center 2xl:flex-grow">
                    <img
                        :src="solidityImg"
                        alt="solidity"
                        width="500"
                        height="500"
                        class="translate-y-[10%] aspect-square h-[120%] 2xl:h-auto object-cover w-auto lg:translate-y-[5%]  2xl:w-[90%] 2xl:-translate-y-[10%]" />
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped></style>
