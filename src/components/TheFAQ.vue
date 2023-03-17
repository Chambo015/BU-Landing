<script>
import { defineComponent } from 'vue';
import IconChevron from './icons/IconChevron.vue';
import TheStardust from './Stardust/TheStardust.vue';

export default defineComponent({
    data() {
        return {
            FAQArray: [
                {
                    id: 0,
                    question: "Что такое блокчейн и как он работает?",
                    answer: "",
                    isOpen: false
                },
                {
                    id: 1,
                    question: "Какие преимущества блокчейна перед централизованными системами?",
                    answer: "",
                    isOpen: false
                },
                {
                    id: 2,
                    question: "Что такое смарт-контракт и как он работает?",
                    answer: "",
                    isOpen: false
                },
                {
                    id: 3,
                    question: "Какие особенности языка Solidity, используемого для написания смарт-контрактов?",
                    answer: "",
                    isOpen: false
                },
                {
                    id: 4,
                    question: "Какие существуют популярные блокчейн-платформы?",
                    answer: "",
                    isOpen: false
                },
                {
                    id: 5,
                    question: "Какие решения на основе блокчейна существуют в настоящее время?",
                    answer: "",
                    isOpen: false
                },
                {
                    id: 6,
                    question: "Как решения на основе блокчейна можно применять в бизнесе?",
                    answer: "",
                    isOpen: false
                },
                {
                    id: 7,
                    question: "Какие инструменты нужны для разработки приложений на блокчейне и Solidity?",
                    answer: "",
                    isOpen: false
                },
            ],
        };
    },
    components: { IconChevron, TheStardust }
});
</script>

<template>
    <section class="overflow-hidden">
        <div class="container pt-[120px] pb-[180px] relative">
            <TheStardust class="h-[780px] -left-[580px] -bottom-[440px] rotate-45" blur-filter="170px" background-rectangle="linear-gradient(180deg, rgba(24, 75, 255, 0) 0%, #174AFF 100%)" background-eclipse="linear-gradient(180deg, rgba(0, 194, 255, 0) 0%, #FF29C3 100%)"  />
            <TheStardust class="h-[620px] -top-[320px] -right-[370px] -rotate-[135deg]" blur-filter="200px" background-rectangle="linear-gradient(180deg, rgba(24, 255, 158, 0) 0%, #17FFE3 100%)" background-eclipse="linear-gradient(180deg, #2C4982 0%, #2CD095 100%)"  />
            <h2 class="mb-[60px]"><span class="text-[#30A2FF]">Отвечаем</span> на вопросы</h2>
            <div v-for="faq of FAQArray" :key="faq.id" class="last-of-type:border-b-2 border-t-2 border-white">
                <div class="py-5 px-[50px] relative cursor-pointer "  @click="faq.isOpen = !faq.isOpen">
                    <button
                        class="relative block text-[32px] font-medium"
                       >
                        {{ faq.question }}
                    </button>
                    <IconChevron class="absolute top-1/2 -translate-y-1/2 w-[40px] h-[40px] right-10" />
                </div>
                <div class="py-4 px-6 text-2xl" v-if="faq.isOpen">{{ faq.answer }}</div>
            </div>
        </div>
    </section>
</template>

<style scoped></style>
