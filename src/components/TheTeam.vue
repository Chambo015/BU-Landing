<template>
    <section class="container 2xl:pt-[140px] 2xl:pb-[80px] pt-8 pb-8 relative">
        <TheStardust class=" -bottom-[50%] -left-[250px] h-[800px] rotate-90" background-eclipse="linear-gradient(180deg, rgba(0, 194, 255, 0) 0%, #FF29C3 100%)" background-rectangle="linear-gradient(180deg, rgba(24, 75, 255, 0) 0%, #174AFF 100%)" />
        <h2 class="2xl:mb-[60px] mb-8 z-50 relative">Состав нашей <span class="text-[#30A2FF]">команды</span></h2>
        <div ref="container" class="keen-slider ">
            <div class="keen-slider__slide cursor-grab active:cursor-grabbing rounded-md min-w-[150px] 2xl:min-w-[320px]" v-for="person in team" :key="person.id">
                <div class="flex flex-col space-y-2 2xl:space-y-5 items-center bg-[#141414] 2xl:py-10 py-4 px-7">
                        <div class=" h-[80px] w-[80px] 2xl:w-[200px] 2xl:h-[200px] rounded-full" :style="{background: `url('${person.photo}') center / cover`}"></div>
                        <div class=" 2xl:text-[32px] text-base whitespace-nowrap">{{person.name}}</div>
                        <p class="2xl:text-[36px] text-lg font-medium whitespace-nowrap">{{ person.position }}</p>
                </div>
            </div>
        </div>
        <div class="mt-10 relative z-30">
            <button class="rotate-180 mr-4" @click="slider.prev()"><IconArrowRight class="2xl:h-[80px] h-[40px] 2xl:w-[80px] w-[40px]" :disabled="current === 0" /></button>
            <button @click="() => slider.next()">
                <IconArrowRight class="2xl:h-[80px] 2xl:w-[80px] w-[40px] h-[40px]" :disabled="disableNext" />
            </button>
        </div>
    </section>
</template>

<script>
import {useKeenSlider} from 'keen-slider/vue';
import TheStardust from './Stardust/TheStardust.vue';
import IconArrowRight from './icons/IconArrowRight.vue';
import {computed, onMounted, ref, watchEffect} from 'vue';
import { useMediaQuery } from '@vueuse/core'



export default {
    data: () => ({
        team: [
            {
                id: 1,
                name: 'Куаныш',
                position: 'CEO',
                photo: './profile1.png'
            },
            {
                id: 2,
                name: 'Кирилл',
                position: 'CTO',
                photo: './profile2.png'
            },
            {
                id: 3,
                name: 'Адильхан',
                position: 'Product Manger',
                photo: './profile3.png'
            },
            {
                id: 4,
                name: 'Алтын',
                position: 'CMO',
                photo: './profile4.png'
            },
            {
                id: 5,
                name: 'Алан',
                position: 'Куратор',
                photo: './profile5.png'
            },
            {
                id: 6,
                name: 'Арман',
                position: 'Менеджер',
                photo: './profile6.png'
            },
            {
                id: 7,
                name: 'Абиш',
                position: 'СОО',
                photo: './profile7.png'
            },
            {
                id: 8,
                name: 'нуркелсн',
                position: 'НФТ',
                photo: './profile8.png'
            },
            
        ]
    }),
    setup() {
        const is2xl = useMediaQuery('(min-width: 1536px)')
        const spacingSlider = computed(() => {
            if(is2xl.value) {
                return 40
            }
            return 20
        })
        const current = ref(0);
        const [container, slider] = useKeenSlider({
            mode: "snap",
            slides: {
                perView: "auto",
                spacing: spacingSlider.value
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