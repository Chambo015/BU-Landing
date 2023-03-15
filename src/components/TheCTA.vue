<template>
    <div class="w-screen bg-[#181818]">
        <section class="container py-36">
            <h2 class="mb-20"><span class="text-[#30A2FF]">Записаться</span> на курс</h2>
            <div class="flex gap-10 justify-center">
                <div class="bg-[#1D1D1D] w-[600px]">
                    <div class="p-10">
                        <h4 class="mb-10 text-[40px] font-medium">Стоимость курса</h4>
                        <ul class="text-right mb-10 text-xl">
                            <li>Старт курса: 13 марта</li>
                            <li>Осталось: 3 места</li>
                        </ul>
                        <ul class="list-disc list-inside text-2xl space-y-6 mb-5">
                            <li>Курс в подарок</li>
                            <li>Длительность рассрочки — 12 месяцев</li>
                            <li>Помощь с трудоустройством</li>
                            <li>Инсайдерские информаций</li>
                        </ul>
                        <div class="flex justify-center gap-8">
                            <p class="text-[40px] font-bold">52 990 <span class="font-normal">₸/мес</span></p>
                            <p class="text-[40px] font-bold text-white/30">73 380 <span class="font-normal">₸/мес</span></p>
                        </div>
                    </div>
                    <div class="bg-red-500 h-20">

                    </div>
                </div>
                <div class="bg-[#1D1D1D] w-[600px] p-10">
                 
                        <h4 class="mb-10 text-[40px] font-medium">Заказать звонок от BU</h4>
                        <input v-for="i in 3" :key="i" type="text" class="bg-[#2B2B2B] rounded text-4xl py-2 px-4 w-full mb-10">
                        
                        <AppButton />
                        <p class="mt-10">Нажимая на кнопку, я соглашаюсь на обработку персональных данных и с правилами пользования Платформой</p>
             
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import AppButton from './AppButton.vue';

export default {
    setup() {
        return {};
    },
    components: { AppButton }
};
</script>

<style lang="scss" scoped></style>
