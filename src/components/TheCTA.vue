<template>
    <section class=" bg-[#181818]">
        <div class="container py-36" id="forms">
            <h2 class="mb-20"><span class="text-[#30A2FF]">Записаться</span> на курс</h2>
            <div class="flex gap-10 justify-center">
                <div class="bg-[#1D1D1D] w-[600px] rounded-md overflow-hidden">
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
                            <p class="text-[40px] font-normal text-white/30"><span class="font-bold  line-through decoration-[#606060]">73 380 </span>₸/мес</p>
                        </div>
                    </div>
                    <div class="bg-[#F14635] h-[88px] flex px-3 items-center">
                        <IconKaspiBank class="w-[66px]" />
                        <p class="text-center text-[40px] font-medium flex-grow">Рассрочка  0 • 0 • 12</p>
                    </div>
                </div>
                <form class="bg-[#1D1D1D] w-[600px] p-10" @submit="onSubmitHandler">
                 
                        <h4 class="mb-10 text-[40px] font-medium">Заказать звонок от BU</h4>
                        <input v-model="form.name" required minlength="3" type="text" placeholder="Имя и Фамилия" class="bg-[#2B2B2B] rounded text-2xl py-2 px-4 w-full mb-10">
                        <input pattern="[+]\d-\(\d{3}\)-\d{3}-\d{2}-\d{2}" validationMessage="eeeeeee" v-model="form.phone" required v-maska="maskBinded" data-maska="+#-(###)-###-##-##" title="+7-(7XX)-XXX-XX-XX" type="text" placeholder="Номер телефона" class="bg-[#2B2B2B] rounded text-2xl py-2 px-4 w-full mb-10 ">
                        <input v-model="form.email" required type="email" placeholder="Электронная почта" class="bg-[#2B2B2B] rounded text-2xl py-2 px-4 w-full mb-10 ">
                        <AppButton label="Записаться" />
                        <p class="mt-10">Нажимая на кнопку, я соглашаюсь на обработку персональных данных и с правилами пользования Платформой</p>
             
                </form>
            </div>
        </div>
    </section>
</template>

<script setup>
import {reactive} from 'vue';
import AppButton from './AppButton.vue';
import IconKaspiBank from './icons/IconKaspiBank.vue';
import { vMaska } from "maska"

const maskBinded = reactive({})
const form = reactive({
    name: '',
    phone: '',
    email: ''
})

const onSubmitHandler = (e) => {
    e.preventDefault()
    console.log(form)
    console.log(maskBinded)
}

</script>

<style lang="scss" scoped></style>
