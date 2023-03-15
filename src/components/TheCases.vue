<template>
    <section class="container pt-20 pb-24">
        <h2 class="mb-2 ">
            Зарплаты <span class="text-[#30A2FF]">web3</span> специалиста
        </h2>
        <p class="mb-14 text-4xl">По данным web3.career, в среднем составляет</p>
        <div class="mb-24 flex justify-between">
            <div>
                <div class="text-[40px] font-bold leading-tight">3 000 – 3 500 $</div>
                <p class="text-[32px] leading-tight text-white/50">Blockchain Developer</p>
            </div>
            <div>
                <div class="text-[40px] font-bold leading-tight">2 000 – 2 500 $</div>
                <p class="text-[32px] leading-tight text-white/50">Token Audit</p>
            </div>
            <div>
                <div class="text-[40px] font-bold leading-tight">4 000 – 5 000 $</div>
                <p class="text-[32px] leading-tight text-white/50">Metaverse Dev</p>
            </div>
            <div>
                <div class="text-[40px] font-bold leading-tight">1 500 – 2 000 $</div>
                <p class="text-[32px] leading-tight text-white/50">NFT tokens</p>
            </div>
        </div>
        <div class="rounded-lg bg-[#F4E4B6] py-10 px-14 relative">
            <h3 class="mb-10 text-[64px] font-bold leading-tight text-[#1D1D1D]">Про Solidity</h3>
            <ul class="list-disc text-4xl leading-none text-[#333333] w-[60%] ml-10 space-y-7">
                <li>Объектно-ориентированный язык программирования смарт-контрактов</li>
                <li>По синтаксису solidity похож на языки программирование как JavaScript и C++</li>
                <li>Создан со-основателем Ethereum: Gavin Wood</li>
                <li>Более 90% всех смарт-контрактов написаны на Solidity</li>
                <li>Самый востребованный язык блокчейн разработки</li>
            </ul>
            <img :src="solidityImg" alt="solidity" width="500" height="500" class="absolute top-1/2 -translate-y-1/2 right-10">
        </div>
    </section>
</template>

<script setup>
import solidityImg from '../assets/solidity.png'
</script>

<style lang="scss" scoped></style>
