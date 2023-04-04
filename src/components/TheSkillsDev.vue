<template>
    <section class="pt-20 pb-28 container">
        <h2 id="skills" class="2xl:mb-20 mb-10" >
           <a href="#hero"> <span class="text-[#30A2FF]">На что способен</span> Blockchain Dev?</a>
        </h2>

        <div class="flex justify-around [&>div]:max-w-[420px] ">
            <div class="flex flex-col items-center group hover:shadow-[0px_0px_65px_-6px_rgba(172,108,255,0.7)] 2xl:py-7 2xl:px-5 py-1 px-2 transition-shadow rounded-md duration-500">
                <IconSmartContract class="fill-white 2xl:w-32 2xl:h-32 w-14 h-14 group-hover:fill-[#AC6CFF] transition-colors" />
                <p class="text-center 2xl:text-4xl text-sm leading-none">Пишет и запускает смарт-контракты (программы) в сеть блокчейна</p>
            </div>
            <div class="flex flex-col items-center group hover:shadow-[0px_0px_65px_-6px_rgba(48,162,255,0.7)] 2xl:py-7 2xl:px-5 py-1 px-2  transition-shadow rounded-md duration-500">
                <IconWeb3 class="fill-white 2xl:w-32 2xl:h-32 w-14 h-14 group-hover:fill-[#30A2FF] transition-colors" />
                <p class="text-center 2xl:text-4xl text-sm leading-none">Работает над инновационными Web3.0 платформами и проектами</p>
            </div>
            <div class="flex flex-col items-center group hover:shadow-[0px_0px_65px_-6px_rgba(115,255,120,0.7)] 2xl:py-7 2xl:px-5 py-1 px-2  transition-shadow rounded-md duration-500">
                <IconNotebook class="fill-white 2xl:w-32 2xl:h-32 w-14 h-14 group-hover:fill-[#73FF78] transition-colors" />
                <p class="text-center 2xl:text-4xl text-sm leading-none">Может релоцироваться, или работать удаленно в любом уголке мира</p>
            </div>
        </div>
    </section>
</template>

<script setup>
import IconNotebook from './icons/IconNotebook.vue';
import IconSmartContract from './icons/IconSmartContract.vue';
import IconWeb3 from './icons/IconWeb3.vue';


</script>

<style lang="scss" scoped>

</style>