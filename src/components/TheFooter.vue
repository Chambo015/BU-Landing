<template>
    <footer class="bg-black">
        <div class="container 2xl:pt-[60px] pt-4 pb-5 font-['TT_Octosquares'] text-xs xl:text-sm 2xl:text-base">
             <div
                    class="mb-5 flex 2xl:justify-between justify-center items-center z-10 relative">
                    <IconLogo class="2xl:w-[200px] w-24 md:w-32" />
                </div>
                <div class="flex flex-col lg:flex-row [&>div]:flex-[0_0_50%]  gap-5">
                    <div class="flex gap-2 lg:justify-around">
                        <span><a href="/OFFER.pdf" target="_blank">Оферта</a></span>
                        <span><a href="/privacy_policy.pdf" target="_blank">Политика конфедициальности</a></span>
                    </div>
                    <p>Мы используем файлы cookies,  для персонализации сервисов и повышения удобства 
    пользования сайтом. Если вы не согласны на их использование, поменяйте настройки браузера.</p>
                </div>
                <div class="flex flex-col lg:flex-row [&>div]:flex-[0_0_50%] gap-5 mt-5 xl:mt-10">
                    <div>
                        <p>ТОО «Blockchain University»</p>
    <p class="max-w-[80%]">Республика Казахстан, 010000, город Нур-султан, район Алматинский, ул.Тауелсиздик, дом 38/7</p>
    <p>БИН 220740035984</p>
                    </div>
                    <div>
                        <p>Электронный адрес: <a href="mailto:buniversity.eth@gmail.com">buniversity.eth@gmail.com</a></p>
                        <p>Контактный центр: <a href="tel:+77079640023">+7 707 964 0023</a></p>
                    </div>
                </div>
                <div class="mt-5">© Blockchain University, 2023</div>
                <div>
                    <img src="/footer.png" alt="Blockchain University" class="mt-10 w-full md:w-[50%] mx-auto object-contain">
                </div>
        </div>
    </footer>
</template>

<script>
import IconLogo from './icons/IconLogo.vue';


export default {
    setup() {
    },
    components: { IconLogo }
}
</script>

<style scoped>

a:hover {
    color: rgba(255, 255, 255, 0.5)
}
</style>