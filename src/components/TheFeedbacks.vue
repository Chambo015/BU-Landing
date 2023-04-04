<template>
    <section class="container relative 2xl:py-36 py-9">
        <h2 class="mb-10">Что о нас <span class="text-[#30A2FF]">студенты думают:</span></h2>
        <div ref="container" class="keen-slider">
            <div
                class="keen-slider__slide 2xl:min-w-[640px] min-w-[90%] cursor-grab active:cursor-grabbing"
                v-for="item in feedbacks"
                :key="item.id">
                <div class="flex bg-[#141414] 2xl:p-10 p-5 rounded-md">
                    <img
                        v-if="item.photo"
                        :src="'./' + item.photo"
                        alt="user"
                        width="56"
                        height="56"
                        class="2xl:mr-5 mr-2 2xl:w-[56px] 2xl:h-[56px] w-[30px] h-[30px] aspect-square self-start" />
                    <span
                        v-else
                        :style="{ backgroundColor: item.color }"
                        class="2xl:mr-5 mr-2 aspect-square 2xl:w-[56px] 2xl:h-[56px] w-[30px] h-[30px] self-start rounded-full text-center 2xl:text-2xl font-bold 2xl:leading-[56px] leading-[30px] text-xs"
                        v-once
                        >{{ getInitialsName(item.user) }}</span
                    >
                    <div>
                        <div class="2xl:mb-5 mb-2 2xl:text-[26px] text-base font-medium" :style="{ color: item.color }" v-once>
                            {{ item.user }}
                        </div>
                        <p class="2xl:text-2xl text-sm" v-once>{{ item.text }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-10 z-30">
            <button class="rotate-180 mr-4" @click="slider.prev()"><IconArrowRight class="2xl:h-[80px] h-[40px] 2xl:w-[80px] w-[40px]" :disabled="current === 0" /></button>
            <button @click="slider.next()">
                <IconArrowRight class="2xl:h-[80px] h-[40px] 2xl:w-[80px] w-[40px]" :disabled="disableNext" />
            </button>
        </div>
    </section>
</template>

<script>
import { useKeenSlider } from 'keen-slider/vue'; // import from 'keen-slider/vue.es' to get an ES module
import { generateRandomLightColor } from '@/utils/randomColor';
import IconArrowRight from './icons/IconArrowRight.vue';
import {  computed, onMounted, ref,  watchEffect } from 'vue';
import {useMediaQuery} from '@vueuse/core';

export default {
    components: { IconArrowRight },
    data() {
        return {
            feedbacks: [
                {
                    id: 0,
                    photo: null,
                    user: 'Кожанбердиев Алан',
                    color: generateRandomLightColor(),
                    text: 'Курс построен от простого к сложному, что позволяет даже новичкам быстро освоить азы программирования и начать разрабатывать собственные смарт-контракты. Кирилл всегда подробно и доступно объясняет сложный материал, а также отвечает на любые вопросы студентов. Вся учебная программа насыщена практическими заданиями, что способствует закреплению полученных знаний. Этот курс поможет начать карьеру в самой перспективной профессии',
                },
                {
                    id: 1,
                    photo: null,
                    color: generateRandomLightColor(),
                    user: 'Azat',
                    text: 'Раньше никогда не изучал программирование и понравилось как эти курсы сделали. Кирилл говорит очень понятно и дает хорошие объяснения сложных концепций. Практические задания помогают лучше понять материал. Курсами доволен и чувствую, что получаю хорошие знания по Солидити, которые помогут в будущем. Рекомендую курсы всем, кто интересуется Солидити.',
                },
                {
                    id: 2,
                    photo: null,
                    color: generateRandomLightColor(),
                    user: 'Amir T',
                    text: 'Вот прям щас смотрю урок и могу сказать, что они очень интересные и информативные. Я изучал другие языки программирования ранее, ни один не доучил , но Solidity это что то новое и необычное, и чухаю что до конца дойду) Препод очень хорош и терпелив))) дает понятные объяснения и всегда готов помочь. Практические задания иногда бывают трудными и непонятными, но Алан, Арман, Диана помогают с любыми вопросами, когда свободны). В целом, я очень доволен BU, и английский начал учить, после того как ребята скидывали зарубежные вакансии',
                },
                {
                    id: 3,
                    photo: 'user1.png',
                    color: generateRandomLightColor(),
                    user: 'Ayaz',
                    text: 'Сколько искал нормальный здравый курс именно для блокчейна, никак не мог найти, то 2-3 недели, то 3 месяца. Когда нашел этот курс, 9 месяцев, сразу понял вот, тут точно научат. Сейчас на 50 уроке почти, и Солидити полностью прошли, и в бошке ясность, вот как все работает. Кирилл лучший учитель по разработке которого встречал пока. Не тяните если хотите записаться, потому что скоро будет такой бум в блокчейне, мало не покажется)',
                },
                {
                    id: 4,
                    photo: 'user2.png',
                    color: generateRandomLightColor(),
                    user: 'Madina',
                    text: 'Кирилл очень крутой преподаватель, умеет обьяснять сложные концепты простыми примерами, курс нравится, но хотелось бы чуть больше уроков в неделю, для меня 4-5 уроков было бы самое то',
                },
            ],
        };
    },
    methods: {
        getInitialsName(str) {
            let arr = str.split(' ');
            let firstWord = arr[0].substring(0, 1);
            if (arr.length > 1) {
                let secondWord = arr[1].substring(0, 1);
                return `${firstWord}${secondWord}`.toUpperCase();
            }
            return firstWord.toUpperCase();
        },
    },
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
            mode: 'free-snap',
            slides: {
                perView: 'auto',
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
                disableNext.value =  slider.value.track.details.maxIdx === current.value
            })
        })
        return { container, slider, current,  disableNext};
    },
};
</script>

<style scoped>
@import url('keen-slider/keen-slider.css');

.keen-slider {
    overflow: initial !important;
}
</style>
