<template>
    <section class="pt-20 pb-28 container">
        <h2 class="mb-20">
            <span class="text-[#30A2FF]">На что способен</span> Blockchain Dev?
        </h2>

        <div class="flex justify-around [&>div]:max-w-[380px] [&>div]:gap-5">
            <div class="flex flex-col items-center group">
                <IconSmartContract class="fill-white w-32 h-32 group-hover:fill-[#AC6CFF] transition-colors" />
                <p class="text-center text-4xl leading-none">Пишет и запускает смарт-контракты (программы) в сеть блокчейна</p>
            </div>
            <div class="flex flex-col items-center group">
                <IconWeb3 class="fill-white w-32 h-32 group-hover:fill-[#30A2FF] transition-colors" />
                <p class="text-center text-4xl leading-none">Работает над инновационными Web3.0 платформами и проектами</p>
            </div>
            <div class="flex flex-col items-center group">
                <IconNotebook class="fill-white w-32 h-32 group-hover:fill-[#73FF78] transition-colors" />
                <p class="text-center text-4xl leading-none">Может релоцироваться, или работать удаленно в любом уголке мира</p>
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