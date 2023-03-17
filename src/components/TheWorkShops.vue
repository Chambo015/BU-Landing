<template>
    <section class="container relative py-[120px]">
        <TheStardust class="h-[710px] absolute top-1/2 -translate-y-1/2 rotate-90 -right-[200px] -z-10" background-eclipse="linear-gradient(180deg, #2C4982 0%, #22C3F5 100%)" background-rectangle="linear-gradient(180deg, rgba(24, 186, 255, 0) 0%, #17C7FF 100%)" />
        <IconStarCross class="w-[108px] top-1/2 -right-[100px] absolute" />
        <IconStarOctagram class="w-[80px] absolute top-[33%] -right-[100px]" />
        <h2 class="mb-20">Не пропусти <span class="text-[#30A2FF]">бесплатные воркшопы</span> по web3</h2>
        <div class="space-y-[80px]">
            <div class="h-[300px] w-full bg-[#4AAEFF] rounded-xl relative">
                <img src="/etherium.png" alt="etherium" width="300" height="300" class="absolute left-5 -top-[60px]">
            </div>
            <div class="h-[300px] w-full bg-[#4AAEFF]  rounded-xl relative">
                <img src="/bag.png" alt="bag" width="300" height="300" class="absolute left-5 -bottom-[60px]">
            </div>
        </div>
    </section>
</template>

<script setup>
import TheStardust from './Stardust/TheStardust.vue';
import IconStarCross from './icons/IconStarCross.vue';
import IconStarOctagram from './icons/IconStarOctagram.vue';


</script>

<style scoped>

</style>