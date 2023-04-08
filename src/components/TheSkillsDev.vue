<template>
    <section class="lg:pt-20 lg:pb-28 pt-10 pb-10 container">
        <h2 id="skills" class="2xl:mb-20 mb-10" >
           <a href="#hero"> <span class="text-[#30A2FF]">На что способен</span> Blockchain Dev?</a>
        </h2>

        <div ref="skillsRef" class="flex justify-around flex-col md:flex-row gap-5  2xl:[&>div]:max-w-[420px] ">
            <div class="flex flex-col gap-3  items-center group hover:shadow-[0px_0px_65px_-6px_rgba(172,108,255,0.7)] 2xl:py-7 2xl:px-5 py-3 px-5 transition-shadow rounded-md duration-500">
                <IconSmartContract class="fill-white 2xl:w-32 2xl:h-32 w-14 h-14 lg:w-20 lg:h-20 group-hover:fill-[#AC6CFF] transition-colors" />
                <p class="text-center 2xl:text-4xl text-base xl:text-lg leading-none">Пишет и запускает смарт-контракты (программы) в сеть блокчейна</p>
            </div>
            <div class="flex flex-col gap-3  items-center group hover:shadow-[0px_0px_65px_-6px_rgba(48,162,255,0.7)] 2xl:py-7 2xl:px-5 py-3 px-5  transition-shadow rounded-md duration-500">
                <IconWeb3 class="fill-white 2xl:w-32 2xl:h-32 w-14 h-14 group-hover:fill-[#30A2FF] transition-colors lg:w-20 lg:h-20" />
                <p class="text-center 2xl:text-4xl text-base leading-none xl:text-lg">Работает над инновационными Web3.0 платформами и проектами</p>
            </div>
            <div class="flex flex-col gap-3  items-center group hover:shadow-[0px_0px_65px_-6px_rgba(115,255,120,0.7)] 2xl:py-7 2xl:px-5 py-3 px-5  transition-shadow rounded-md duration-500">
                <IconNotebook class="fill-white 2xl:w-32 2xl:h-32 w-14 h-14 group-hover:fill-[#73FF78] transition-colors lg:w-20 lg:h-20" />
                <p class="text-center 2xl:text-4xl text-base leading-none xl:text-lg">Может релоцироваться, или работать удаленно в любом уголке мира</p>
            </div>
        </div>
    </section>
</template>

<script setup>
import {onMounted, ref} from 'vue';
import IconNotebook from './icons/IconNotebook.vue';
import IconSmartContract from './icons/IconSmartContract.vue';
import IconWeb3 from './icons/IconWeb3.vue';
import {animate, inView, stagger} from 'motion';

const skillsRef = ref(null)

onMounted(() => {
    inView(
        skillsRef.value,
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
})

</script>

<style lang="scss" scoped>

</style>