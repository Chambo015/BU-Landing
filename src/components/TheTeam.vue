<template>
    <section class="container relative pt-8 pb-8 2xl:pt-[140px] 2xl:pb-[80px]">
        <TheStardust
            class="-bottom-[50%] -left-[250px] h-[800px] rotate-90"
            background-eclipse="linear-gradient(180deg, rgba(0, 194, 255, 0) 0%, #FF29C3 100%)"
            background-rectangle="linear-gradient(180deg, rgba(24, 75, 255, 0) 0%, #174AFF 100%)" />
        <h2 class="relative z-50 mb-8 2xl:mb-[60px]">Состав нашей <span class="text-[#30A2FF]">команды</span></h2>
        <div ref="container" class="keen-slider" >
            <div
                class="keen-slider__slide min-w-[150px] md:min-w-[170px] lg:min-w-[200px] cursor-grab rounded-md active:cursor-grabbing 2xl:min-w-[320px]"
                v-for="person in team"
                :key="person.id">
                <div class="flex flex-col items-center space-y-2 bg-[#141414] py-4 px-7 2xl:space-y-5 2xl:py-10">
                    <div
                        class="h-[80px] w-[80px] md:h-[100px] md:w-[100px] lg:h-[130px] lg:w-[130px] rounded-full 2xl:h-[200px] 2xl:w-[200px]"
                        :style="{ background: `url('${person.photo}') center / cover` }"></div>
                    <div class="whitespace-nowrap text-base 2xl:text-[32px] lg:text-xl md:text-lg">{{ person.name }}</div>
                    <p class="whitespace-nowrap text-lg font-medium 2xl:text-[36px] lg:text-2xl md:text-xl">{{ person.position }}</p>
                </div>
            </div>
        </div>
        <div class="relative z-30 mt-10">
            <button class="mr-4 rotate-180" @click="slider.prev()">
                <IconArrowRight class="h-[40px] w-[40px] 2xl:h-[80px] 2xl:w-[80px]" :disabled="current === 0" />
            </button>
            <button @click="() => slider.next()">
                <IconArrowRight class="h-[40px] w-[40px] 2xl:h-[80px] 2xl:w-[80px]" :disabled="disableNext" />
            </button>
        </div>
    </section>
</template>

<script setup>
import { useKeenSlider } from 'keen-slider/vue';
import TheStardust from './Stardust/TheStardust.vue';
import IconArrowRight from './icons/IconArrowRight.vue';
import { computed, onMounted, ref, watchEffect } from 'vue';
import { useMediaQuery } from '@vueuse/core';
import { animate, inView } from 'motion';

onMounted(() => {
    inView(container.value, ({ target }) => {
        animate(
            target,
            {
                transform: ['translateX(1000px)', 'none'],
                opacity: [0, 1],
            },
            { duration: 1.2, delay: 0.5 }
        );
    });
});

const  team =[
            {
                id: 1,
                name: 'Куаныш',
                position: 'CEO',
                photo: './profile1.png',
            },
            {
                id: 2,
                name: 'Кирилл',
                position: 'CTO',
                photo: './profile2.png',
            },
            {
                id: 3,
                name: 'Адилхан',
                position: 'Product Manger',
                photo: './profile3.png',
            },
            {
                id: 4,
                name: 'Алтын',
                position: 'CMO',
                photo: './profile4.png',
            },
            {
                id: 5,
                name: 'Алан',
                position: 'Куратор',
                photo: './profile5.png',
            },
            {
                id: 6,
                name: 'Арман',
                position: 'COO',
                photo: './profile6.png',
            },
            {
                id: 7,
                name: 'Абиш',
                position: 'Manager',
                photo: './profile7.png',
            },
            {
                id: 8,
                name: 'Нуркелсн',
                position: 'NFT',
                photo: './profile8.png',
            }
            ,
            {
                id: 9,
                name: 'Диас',
                position: 'UX/UI',
                photo: './profile9.jpg',
            },
/*             {
                id: 10,
                name: 'Ералы',
                position: 'Frontend',
                photo: './profile10.png',
            }, */
        ];

const is2xl = useMediaQuery('(min-width: 1536px)');
const spacingSlider = computed(() => {
    if (is2xl.value) {
        return 40;
    }
    return 20;
});
const current = ref(0);
const [container, slider] = useKeenSlider({
    mode: 'snap',
    slides: {
        perView: 'auto',
        spacing: spacingSlider.value,
    },
    initial: current.value,
    slideChanged: (s) => {
        current.value = s.track.details.rel;
    },
});
const disableNext = ref(false);
onMounted(() => {
    watchEffect(() => {
        disableNext.value = slider.value.track.details.maxIdx === current.value;
    });
});

</script>

<style scoped>
@import url('keen-slider/keen-slider.css');

.keen-slider {
    overflow: initial !important; /* Слайдер будет виден вне контейнера  */
}
</style>
