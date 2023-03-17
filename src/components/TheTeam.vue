<template>
    <section class="container pt-[140px] pb-[80px] relative">
        <TheStardust class=" -bottom-[50%] -left-[250px] h-[800px] rotate-90" background-eclipse="linear-gradient(180deg, rgba(0, 194, 255, 0) 0%, #FF29C3 100%)" background-rectangle="linear-gradient(180deg, rgba(24, 75, 255, 0) 0%, #174AFF 100%)" />
        <IconStarHexagram class="absolute -bottom-[50px] -left-[120px] h-[110px] w-[110px]" />
        <h2 class="mb-[60px]">Состав нашей <span class="text-[#30A2FF]">команды</span></h2>
        <div ref="container" class="keen-slider ">
            <div class="keen-slider__slide cursor-grab active:cursor-grabbing mr-10 min-w-[320px]" v-for="item in 8" :key="item">
                <div class="flex flex-col items-center bg-[#141414] py-10 px-7">
                        <div class="mb-5 w-[200px] h-[200px] bg-[#D9D9D9] rounded-full"></div>
                        <div class="mb-5 text-[32px]">Имя Фамилия</div>
                        <p class="text-[36px] font-medium">Должность</p>
                    
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import {useKeenSlider} from 'keen-slider/vue';
import TheStardust from './Stardust/TheStardust.vue';
import IconStarHexagram from './icons/IconStarHexagram.vue';

export default {
    setup() {
        const [container] = useKeenSlider({
            mode: "free",
            slides: {
                perView: "auto"
            },
        });
        return { container };
    },
    components: { TheStardust, IconStarHexagram }
}
</script>


<style scoped>
@import url('keen-slider/keen-slider.css');

.keen-slider {
    overflow: initial !important;
}
</style>