<template>
    <section class="container pt-[140px] pb-[200px] relative flex justify-between">
        <TheStardust class="h-[450px] -rotate-45 -z-10 right-0 top-[300px]" background-eclipse="linear-gradient(180deg, #82392C 0%, #D0A22C 100%)" background-rectangle="linear-gradient(180deg, rgba(255, 79, 24, 0) 0%, #FF4117 100%)" />
        <div>
            <h2 class="mb-24 w-[830px]">
                Вашу квалификацию подтвердят <span class="text-[#30A2FF]">официальные документы</span>
            </h2>

            <div class="text-2xl w-[635px] mb-28">
                <p class="mb-6">Мы обучаем при поддержке AstanaHub и выдаём документы установленного образца.</p>
                <p>
                    После обучения вы можете получить диплом о профессиональной подготовке, свидетельство Blockchain
                    University и сертификат от партнёра курса — AstanaHub.
                </p>
            </div>
            <div class="flex gap-[60px]">
                <IconLogo class="h-[72px]" /> <IconAstanaHub class="h-[72px]" />
            </div>
        </div>
        <div class="self-end mb-[5%] bg-[url('/aa6b75ea63944af44c357ca0826a1677.jpeg')] bg-[length:100%_auto] w-[771px] relative z-10 shadow-[13px_-8px_19px_0px_rgba(34,60,80,0.2)] before:block before:pt-[calc(100%/1.4)]">
        </div>

    </section>
</template>

<script>
import IconLogo from './icons/IconLogo.vue';
import IconAstanaHub from './icons/IconAstanaHub.vue';
import TheStardust from './Stardust/TheStardust.vue';

export default {
    setup() {
        return {};
    },
    components: { IconLogo, IconAstanaHub, TheStardust, }
};
</script>

<style lang="scss" scoped></style>
