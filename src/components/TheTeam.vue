<template>
    <section class="container pt-[140px] pb-[80px] relative">
        <TheStardust class=" -bottom-[50%] -left-[250px] h-[800px] rotate-90" background-eclipse="linear-gradient(180deg, rgba(0, 194, 255, 0) 0%, #FF29C3 100%)" background-rectangle="linear-gradient(180deg, rgba(24, 75, 255, 0) 0%, #174AFF 100%)" />
        <h2 class="mb-[60px]">Состав нашей <span class="text-[#30A2FF]">команды</span></h2>
        <div ref="container" class="keen-slider ">
            <div class="keen-slider__slide cursor-grab active:cursor-grabbing  min-w-[320px]" v-for="person in team" :key="person.id">
                <div class="flex flex-col items-center bg-[#141414] py-10 px-7">
                        <div class="mb-5 w-[200px] h-[200px] rounded-full" :style="{background: `url('${person.photo}') center / cover`}"></div>
                        <div class="mb-5 text-[32px] whitespace-nowrap">{{person.name}}</div>
                        <p class="text-[36px] font-medium whitespace-nowrap">{{ person.position }}</p>
                </div>
            </div>
        </div>
        <div class="mt-10 relative z-30">
            <button class="rotate-180 mr-4" @click="slider.prev()"><IconArrowRight :disabled="current === 0" /></button>
            <button @click="() => slider.next()">
                <IconArrowRight :disabled="disableNext" />
            </button>
        </div>
    </section>
</template>

<script>
import {useKeenSlider} from 'keen-slider/vue';
import TheStardust from './Stardust/TheStardust.vue';
import IconArrowRight from './icons/IconArrowRight.vue';
import {onMounted, ref, watchEffect} from 'vue';

export default {
    data: () => ({
        team: [
            {
                id: 1,
                name: 'Куаныш',
                position: 'CEO',
                photo: '/profile1.png'
            },
            {
                id: 2,
                name: 'Кирилл',
                position: 'CTO',
                photo: '/profile2.png'
            },
            {
                id: 3,
                name: 'Адильхан',
                position: 'Product Manger',
                photo: '/profile3.png'
            },
            {
                id: 4,
                name: 'Алтын',
                position: 'CMO',
                photo: '/profile4.png'
            },
            {
                id: 5,
                name: 'Алан',
                position: 'Куратор',
                photo: '/profile5.png'
            },
            {
                id: 6,
                name: 'Арман',
                position: 'Менеджер',
                photo: '/profile6.png'
            },
            {
                id: 7,
                name: 'Абиш',
                position: 'СОО',
                photo: '/profile7.png'
            },
            {
                id: 8,
                name: 'нуркелсн',
                position: 'НФТ',
                photo: '/profile8.png'
            },
            
        ]
    }),
    setup() {
        const current = ref(0);
        const [container, slider] = useKeenSlider({
            mode: "snap",
            slides: {
                perView: "auto",
                spacing: 40
            },
            initial: current.value,
            slideChanged: (s) => {
                current.value = s.track.details.rel;
            },
        });
        const disableNext = ref(false)
        onMounted(() => {
            watchEffect(() => {
                disableNext.value = slider.value.track.details.maxIdx === current.value
            })
        })
        return { container, disableNext, current, slider };
    },
    components: { TheStardust, IconArrowRight }
}
</script>


<style scoped>
@import url('keen-slider/keen-slider.css');

.keen-slider {
    overflow: initial !important; /* Слайдер будет виден вне контейнера  */
}
</style>