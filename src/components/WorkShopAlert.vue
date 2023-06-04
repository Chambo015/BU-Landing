<template>
    <div class="fixed inset-x-0 inset-y-0 z-50">
        <div
            class="fixed right-0 invisible md:visible bottom-0 z-50 w-[35%] lg:w-[30%] xl:w-[27%]  rounded-md border border-white/25 bg-[rgba(20,21,20,.9)] lg:p-4  p-2 shadow-2xl backdrop-blur-sm">
            <div>
                <p class="text-center text-xl font-bold uppercase 2xl:text-3xl">
                    <span class="text-[#1495FE]">Бесплатный</span> Воркшоп
                </p>
                <ul class="mt-2 xl:mt-5 font-['TT_Octosquares'] text-base lg:text-lg [&_span]:font-semibold [&_span]:text-[#1495FE]">
                    <li><span>Тема:</span> Блокчейн разработчик</li>
                    <li><span>Выступает:</span> основатели BU + старший сеньор разработчик Кирилл Зайнутдинов</li>
                    <li><span>Когда:</span> в эту субботу в 16:00, в zoom конференции</li>
                </ul>
                <div  v-if="!isOpenForm" class="flex justify-center">
                    <button
                       
                        @click="isOpenForm = true"
                        class="mt-5 rounded bg-[#1495FE] px-4 py-1  lg:px-6 xl:py-2  text-center text-xl hover:bg-[#0067C3]">
                        Записаться
                    </button>
                    
                </div>
                <form @submit="onSubmitHandler" v-else class="mt-5">
                        <input
                            v-model="form.name"
                            required
                            minlength="3"
                            type="text"
                            placeholder="Имя"
                            class="mb-5 w-full rounded bg-[#2b2b2b3b] py-3 px-4 text-base 2xl:text-xl" />
                        <p class="text-sm text-white/50">*Укажите WhatsApp номер, чтобы получить ссылку на Воркшоп</p>
                        <input
                            pattern="[+]\d-\(\d{3}\)-\d{3}-\d{2}-\d{2}"
                            v-model="form.phone"
                            required
                            v-maska="maskBinded"
                            data-maska="+7-(###)-###-##-##"
                            title="+7-(7XX)-XXX-XX-XX"
                            type="phone"
                            placeholder="Номер телефона"
                            class="mb-5 w-full rounded bg-[#2b2b2b3b] py-3 px-4 text-base 2xl:mb-7 2xl:text-xl" />
                        <button class="rounded-sm hover:bg-[#1495FE] bg-[#38a1f8] px-4 py-1  lg:px-6 xl:py-2 2xl:text-xl">Записаться</button>
                    </form>
            </div>
    
    
            <button
                @click="closeModal"
                class="absolute right-0 top-0 h-7 w-7  rounded-md border border-white/25 bg-[#1c1d1c]">
                x
            </button>
        </div>
    </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import { vMaska } from 'maska';
import { getDatabase, ref as refFirebase, set, push } from 'firebase/database';

const props = defineProps({
    closeModal: Function
})

const result = ref(false);
const isOpenForm = ref(false);

const maskBinded = reactive({});
const form = reactive({
    name: '',
    phone: '',
});


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


const onSubmitHandler = async (e) => {
    e.preventDefault();
    result.value =  await writeUserData(form.name, 'ВОРКШОП', form.phone);

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push ({'event': 'formSuccessMain'});
    
    for (let prop in form) {
        form[prop] = '';
    }

    props.closeModal()
};
</script>

<style scoped></style>
