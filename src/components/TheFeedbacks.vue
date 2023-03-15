<template>
    <section class="container relative py-36">
        <h2 class="mb-10">Что о нас <span class="text-[#30A2FF]">студенты думают:</span></h2>
        <div ref="container" class="keen-slider ">
            <div class="keen-slider__slide cursor-grab active:cursor-grabbing min-w-[600px] mr-10" v-for="item in feedbacks" :key="item.id">
                <div class="flex bg-[#141414] p-10">
                    <img src="/user.png" alt="user" width="56" height="56" class="mr-5 aspect-square self-start" />
                    <div>
                        <div class="mb-5 text-[26px] font-medium text-[#01A7FF]">Nicheriin</div>
                        <p class="text-2xl">{{ item.text }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { useKeenSlider } from 'keen-slider/vue'; // import from 'keen-slider/vue.es' to get an ES module

export default {
    components: {},
    data() {
        return {
            feedbacks: [
                {
                    id: 0,
                    user: 'Nicheriin',
                    text: 'Я очень доволен этим курсом! Как новичок в области блокчейна, я получил отличное введение в эту технологию и язык программирования Solidity. Я научился создавать и развертывать смарт-контракты на блокчейне Ethereum, используя Solidity.Преподаватели курса были очень квалифицированными и знающими специалистами в этой области. Они представили материал в понятной и доступной форме, объясняя сложные концепции с помощью простых примеров. Кроме того, курс предоставил мне возможность практически применять полученные знания.',
                },
                {
                    id: 1,
                    user: 'Nicheriin',
                    text: 'Отличный курс для начинающих! Я узнал много нового о блокчейне и Solidity. Преподаватели были профессиональными и давали ясные объяснения сложных концепций. Мне очень понравилось, что я мог практически применять полученные знания, создавая смарт-контракты на Ethereum. Я определенно рекомендую этот курс!',
                },
                {
                    id: 2,
                    user: 'Nicheriin',
                    text: 'Я очень доволен этим курсом! Он был очень полезен для меня, как начинающего в области блокчейна и языка Solidity. Преподаватели были очень квалифицированными и дружелюбными, объясняя все очень ясно и понятно. Мне понравилось, что я мог практиковаться в создании смарт-контрактов на Ethereum, используя инструменты, такие как Remix, Truffle и Ganache. Я рекомендую этот курс всем, кто интересуется блокчейном и Solidity!',
                },
                {
                    id: 3,
                    user: 'Nicheriin',
                    text: 'Я очень доволен этим курсом! Как новичок в области блокчейна, я получил отличное введение в эту технологию и язык программирования Solidity. Я научился создавать и развертывать смарт-контракты на блокчейне Ethereum, используя Solidity.Преподаватели курса были очень квалифицированными и знающими специалистами в этой области. Они представили материал в понятной и доступной форме, объясняя сложные концепции с помощью простых примеров. Кроме того, курс предоставил мне возможность практически применять полученные знания.',
                },
            ],
        };
    },
    setup() {
        const [container] = useKeenSlider({
            mode: 'free',
            slides: {
                perView: "auto"
            },
        });
        return { container };
    },
};
</script>

<style scoped>
@import url('keen-slider/keen-slider.css');

.keen-slider {
    overflow: initial !important;
}
</style>
