<template>
    <section class="w-screen bg-[#181818]">
        <div class="container pt-[140px]">
           <h2 class="mb-[80px]">57 человек <span class="text-[#30A2FF]">уже записались</span> на наш курс</h2>
           <div class="wrap-table relative">
            <table class="w-full text-[40px] [&_td]:text-center mb-10 table-fixed">
                <tr>
                    <th>Имя</th>
                    <th>Дата</th>
                    <th>Ник в тг</th>
                    <th>Курс</th>
                </tr>
            </table>
            <div ref="table" class="h-[660px] overflow-y-auto border-t-2 border-white/75 pt-5 relative wrap-body-table ">
                <table  class="text-4xl [&_td]:align-middle w-full table-fixed">
                    <tr v-for="item in 20" class="[&_td]:py-4" :key="item">
                        <td><div class="flex items-center gap-8"><span class="h-[64px] w-[64px] aspect-square rounded-full bg-[#D9D9D9] inline-block"></span> Имя Фамилия</div></td>
                        <td class="text-center">12.03.2023</td>
                        <td class="text-center">@coolguy</td>
                        <td class="text-center">Blockchain/Solidity</td>
                    </tr>
                </table>
            </div>
           </div>
        </div>
    </section>
</template>

<script setup>
import { useScroll } from '@vueuse/core'
import {computed, ref} from 'vue'


const table = ref(null)
const { x, y, isScrolling, arrivedState, directions } = useScroll(table)
const bottomArrived = computed(() => arrivedState.bottom ? 0 : 1)
const topArrived = computed(() => arrivedState.top ? 0 : 1)

</script>

<style  scoped>
.wrap-body-table::-webkit-scrollbar {
    width: 12px;
}
.wrap-body-table::-webkit-scrollbar-thumb {
    background: #4AAEFF;
    border-radius: 6px;
}
.wrap-table::before {
    content: '';
    position: absolute;
    top: 104px;
    left: 0;
    right: 0;
    width: 100%;
    height: 30%;
    background: linear-gradient(180deg, #181818 0%, rgba(24, 24, 24, 0.7) 30.16%, rgba(24, 24, 24, 0) 100%);
    pointer-events: none;
    z-index: 55;
    transition: opacity .5s ease;
    opacity: v-bind(topArrived);
}
.wrap-table::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 30%;
    background: linear-gradient(0deg, #181818 0%, rgba(24, 24, 24, 0.7) 30.16%, rgba(24, 24, 24, 0) 100%);
    pointer-events: none;
    transition: opacity .5s ease;
    opacity: v-bind(bottomArrived);
}
</style>