<template>
    <section class="container relative py-36">
        <h2 class="mb-10">Что о нас <span class="text-[#30A2FF]">студенты думают:</span></h2>
        <div ref="container" class="keen-slider">
            <div
                class="keen-slider__slide min-w-[640px] cursor-grab pr-10 active:cursor-grabbing"
                v-for="item in feedbacks"
                :key="item.id">
                <div class="flex bg-[#141414] p-10 rounded-md">
                    <img
                        v-if="item.photo"
                        :src="'/' + item.photo"
                        alt="user"
                        width="56"
                        height="56"
                        class="mr-5 aspect-square self-start" />
                    <span
                        v-else
                        :style="{ backgroundColor: item.color }"
                        class="mr-5 aspect-square h-[56px] w-[56px] self-start rounded-full text-center text-2xl font-bold leading-[56px]"
                        v-once
                        >{{ getInitialsName(item.user) }}</span
                    >
                    <div>
                        <div class="mb-5 text-[26px] font-medium" :style="{ color: item.color }" v-once>
                            {{ item.user }}
                        </div>
                        <p class="text-2xl" v-once>{{ item.text }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-10">
            <button class="rotate-180 mr-4" @click="slider.prev()"><IconArrowRight :disabled="current === 0" /></button>
            <button @click="slider.next()">
                <IconArrowRight :disabled="disableNext" />
            </button>
        </div>
    </section>
</template>

<script>
import { useKeenSlider } from 'keen-slider/vue'; // import from 'keen-slider/vue.es' to get an ES module
import { generateRandomLightColor } from '@/utils/randomColor';
import IconArrowRight from './icons/IconArrowRight.vue';
import {  onMounted, ref,  watchEffect } from 'vue';

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
        const current = ref(0);
        const [container, slider] = useKeenSlider({
            mode: 'free-snap',
            slides: {
                perView: 'auto',
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
