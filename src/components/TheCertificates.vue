<template>
    <section class="container 2xl:pt-[140px] pt-16 pb-16 2xl:pb-[200px] relative flex justify-between 2xl:flex-row flex-col gap-14 2xl:gap-0">
        <TheStardust class="h-[450px] -rotate-45 -z-10 right-0 top-[300px]" background-eclipse="linear-gradient(180deg, #82392C 0%, #D0A22C 100%)" background-rectangle="linear-gradient(180deg, rgba(255, 79, 24, 0) 0%, #FF4117 100%)" />
        <div>
            <h2 class="2xl:mb-24 mb-8 2xl:w-[830px]">Вашу квалификацию подтвердят <span class="text-[#30A2FF]">официальные документы</span></h2>

            <div class="2xl:text-2xl text-sm 2xl:w-[635px] 2xl:mb-28 mb-5">
                <p class="mb-6">Мы обучаем при поддержке AstanaHub и выдаём документы установленного образца.</p>
                <p>
                    После обучения вы можете получить диплом о профессиональной подготовке, свидетельство Blockchain
                    University и сертификат от партнёра курса — AstanaHub.
                </p>
            </div>
            <div class="flex 2xl:h-[72px] h-7 gap-5 2xl:gap-[60px]">
                <IconLogo class="h-full 2xl:w-auto w-[77px]" /> <IconAstanaHub class="h-full 2xl:w-auto w-[105px]" />
            </div>
        </div>
        <div class="self-end mb-[5%] bg-[url('/aa6b75ea63944af44c357ca0826a1677.jpeg')] mx-auto 2xl:mx-0 bg-[length:100%_auto] 2xl:w-[771px] w-[90%] relative z-10 shadow-[13px_-8px_19px_0px_rgba(34,60,80,0.2)] before:block before:pt-[calc(100%/1.4)]">
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
