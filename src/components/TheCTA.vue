<template>
    <section class="bg-[#181818]">
        <div class="container py-36" id="forms">
            <h2 class="mb-20"><span class="text-[#30A2FF]">Записаться</span> на курс</h2>
            <div class="flex justify-center gap-10">
                <div class="w-[600px] overflow-hidden rounded-md bg-[#1D1D1D]">
                    <div class="p-10">
                        <h4 class="mb-10 text-[40px] font-medium">Стоимость курса</h4>
                        <ul class="mb-10 text-right text-xl">
                            <li>Старт курса: 13 марта</li>
                            <li>Осталось: 3 места</li>
                        </ul>
                        <ul class="mb-5 list-inside list-disc space-y-6 text-2xl">
                            <li>Курс в подарок</li>
                            <li>Длительность рассрочки — 12 месяцев</li>
                            <li>Помощь с трудоустройством</li>
                            <li>Инсайдерские информаций</li>
                        </ul>
                        <div class="flex justify-center gap-8">
                            <p class="text-[40px] font-bold">52 990 <span class="font-normal">₸/мес</span></p>
                            <p class="text-[40px] font-normal text-white/30">
                                <span class="font-bold line-through decoration-[#606060]">73 380 </span>₸/мес
                            </p>
                        </div>
                    </div>
                    <div class="flex h-[88px] items-center bg-[#F14635] px-3">
                        <IconKaspiBank class="w-[66px]" />
                        <p class="flex-grow text-center text-[40px] font-medium">Рассрочка 0 • 0 • 12</p>
                    </div>
                </div>
                <form class="w-[600px] bg-[#1D1D1D] flex flex-col p-10" @submit="onSubmitHandler">
                    <template v-if="!result">
                        <h4 class="mb-10 text-[40px] font-medium">Заказать звонок от BU</h4>
                        <input
                            v-model="form.name"
                            required
                            minlength="3"
                            type="text"
                            placeholder="Имя и Фамилия"
                            class="mb-10 w-full rounded bg-[#2B2B2B] py-2 px-4 text-2xl" />
                        <input
                            pattern="[+]\d-\(\d{3}\)-\d{3}-\d{2}-\d{2}"
                            v-model="form.phone"
                            required
                            v-maska="maskBinded"
                            data-maska="+#-(###)-###-##-##"
                            title="+7-(7XX)-XXX-XX-XX"
                            type="text"
                            placeholder="Номер телефона"
                            class="mb-10 w-full rounded bg-[#2B2B2B] py-2 px-4 text-2xl" />
                        <input
                            v-model="form.email"
                            required
                            type="email"
                            placeholder="Электронная почта"
                            class="mb-10 w-full rounded bg-[#2B2B2B] py-2 px-4 text-2xl" />
                        <AppButton label="Записаться" />
                        <p class="mt-10">
                            Нажимая на кнопку, я соглашаюсь на обработку персональных данных и с правилами пользования
                            Платформой
                        </p>
                    </template>
                    <p v-else class="text-4xl text-center my-auto">Мы обязательно с Вами свяжемся в ближайшее время.</p>
                </form>
            </div>
        </div>
    </section>
</template>

<script setup>
import { reactive, ref } from 'vue';
import AppButton from './AppButton.vue';
import IconKaspiBank from './icons/IconKaspiBank.vue';
import { vMaska } from 'maska';

import { getDatabase, ref as refFirebase, set, push } from 'firebase/database';

async function writeUserData(name, email, phone) {
    try {
        const db = getDatabase();
        const postListRef = refFirebase(db, 'feedbackRequest');
        const newPostRef = push(postListRef);
        await set(newPostRef, {
            username: name,
            email: email,
            phone: phone,
            created: new Date().toLocaleString(),
        });
        return true
    } catch (error) {
        return new Error(error)
    }
}

const result = ref(false)
const maskBinded = reactive({});
const form = reactive({
    name: '',
    phone: '',
    email: '',
});

const onSubmitHandler = async (e) => {
    e.preventDefault();
    result.value =  await writeUserData(form.name, form.email, form.phone);
    for (let prop in form) {
        form[prop] = '';
    }
};
</script>

<style lang="scss" scoped></style>
