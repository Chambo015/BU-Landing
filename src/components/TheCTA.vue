<script setup>
/* Call to Action */
// import { onMounted, reactive, ref } from 'vue';
// import AppButton from './AppButton.vue';
import IconKaspiBank from './icons/IconKaspiBank.vue';
// import { vMaska } from 'maska';

// import { getDatabase, ref as refFirebase, set, push } from 'firebase/database';

// async function writeUserData(name, email, phone) {
//     try {
//         const db = getDatabase();
//         const postListRef = refFirebase(db, 'feedbackRequest');
//         const newPostRef = push(postListRef);
//         await set(newPostRef, {
//             username: name,
//             email: email,
//             phone: phone,
//             created: new Date().toLocaleString(),
//         });
//         return true
//     } catch (error) {
//         return new Error(error)
//     }
// }

// const result = ref(false)
// const maskBinded = reactive({});
// const form = reactive({
//     name: '',
//     phone: '',
//     email: '',
// });

// const onSubmitHandler = async (e) => {
//     e.preventDefault();
//     result.value =  await writeUserData(form.name, form.email, form.phone);
//     for (let prop in form) {
//         form[prop] = '';
//     }
// };


</script>

<template>
    <section class="bg-[#181818]">
        <div class="container 2xl:py-36 py-10" id="forms">
            <h2 class="2xl:mb-20 mb-5 lg:mb-12"><span class="text-[#30A2FF]">Записаться</span> на курс</h2>
            <div class="flex lg:flex-row flex-col justify-center gap-10">
                <div class="2xl:w-[600px] w-full flex flex-col overflow-hidden rounded-md bg-[#1D1D1D]">
                    <div class="2xl:p-10 p-5">
                        <h4 class="2xl:mb-10 mb-4 2xl:text-[40px] text-lg font-medium lg:text-2xl">Стоимость курса</h4>
                        <ul class="2xl:mb-10 mb-4 text-right text-sm 2xl:text-xl lg:text-lg">
                            <li>Старт курса: 24 апреля</li>
                            <li>Осталось: 5 мест</li>
                        </ul>
                        <ul class="mb-5 list-inside list-disc 2xl:space-y-6 space-y-3 2xl:text-2xl text-sm lg:text-lg">
                            <li>Курс в подарок</li>
                            <li>Длительность рассрочки — 12 месяцев</li>
                            <li>Помощь с трудоустройством</li>
                            <li>Инсайдерские информаций</li>
                        </ul>
                        <div class="flex justify-center gap-8 2xl:text-[40px] text-xl lg:text-3xl">
                            <p class="font-bold">52 990 <span class="font-normal">₸/мес</span></p>
                            <p class="font-normal text-white/30">
                                <span class="font-bold line-through decoration-[#606060]">73 380 </span>₸/мес
                            </p>
                        </div>
                    </div>
                    <div class="flex mt-auto lg:h-[88px] h-[40px]  items-center bg-[#F14635] px-3">
                        <IconKaspiBank class="lg:w-[66px] w-[35px]" />
                        <p class="flex-grow text-center 2xl:text-[40px] lg:text-3xl text-xl font-medium">Рассрочка 0 • 0 • 12</p>
                    </div>
                </div>
                <form class="2xl:w-[600px] w-full bg-[#1D1D1D] flex flex-col 2xl:p-10 p-5 overflow-hidden">
                    <!-- <template v-if="!result">
                        <h4 class="mb-10 2xl:text-[40px] text-lg 2xl:text-left text-center font-medium">Заказать звонок от BU</h4>
                        <input
                            v-model="form.name"
                            required
                            minlength="3"
                            type="text"
                            placeholder="Имя и Фамилия"
                            class="2xl:mb-10 mb-5 w-full rounded bg-[#2B2B2B] py-3 px-4 2xl:text-2xl text-base" />
                        <input
                            pattern="[+]\d-\(\d{3}\)-\d{3}-\d{2}-\d{2}"
                            v-model="form.phone"
                            required
                            v-maska="maskBinded"
                            data-maska="+#-(###)-###-##-##"
                            title="+7-(7XX)-XXX-XX-XX"
                            type="phone"
                            placeholder="Номер телефона"
                            class="2xl:mb-10 mb-5 w-full rounded bg-[#2B2B2B] py-3 px-4 2xl:text-2xl text-base" />
                        <input
                            v-model="form.email"
                            required
                            type="email"
                            placeholder="Электронная почта"
                            class="mb-10 w-full rounded bg-[#2B2B2B] py-3 px-4 2xl:text-2xl text-base" />
                        <AppButton label="Записаться" />
                        <p class="mt-10 2xl:text-left text-center 2xl:text-base text-sm">
                            Нажимая на кнопку, я соглашаюсь на обработку персональных данных и с правилами пользования
                            Платформой
                        </p>
                    </template> -->
                    <!-- <p v-else class="text-4xl text-center my-auto">Мы обязательно с Вами свяжемся в ближайшее время.</p> -->
                     <iframe class="h-[480px]" width="100%" height="480" frameborder="0" style="overflow: hidden;" src="/form.html"> </iframe>
                </form>
            </div>
        </div>
    </section>
</template>



<style  scoped>
</style>
