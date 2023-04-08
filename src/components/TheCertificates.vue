<template>
    <section
        class="container relative flex flex-col justify-between gap-14 lg:gap-6 pt-16 pb-16 lg:flex-row 2xl:gap-0 2xl:pt-[140px] 2xl:pb-[200px]">
        <TheStardust
            class="-left-[50%] -top-[35%] -z-10 h-[450px] -rotate-45 lg:-left-[25%] lg:-top-[15%]"
            background-eclipse="linear-gradient(180deg, #82392C 0%, #D0A22C 100%)"
            background-rectangle="linear-gradient(180deg, rgba(255, 79, 24, 0) 0%, #FF4117 100%)" />
        <div>
            <h2 class="mb-8 2xl:mb-24 2xl:w-[830px]">
                Вашу квалификацию подтвердят <span class="text-[#30A2FF]">официальные документы</span>
            </h2>

            <div class="mb-5 lg:mb-11 text-sm 2xl:mb-28 2xl:w-[635px] 2xl:text-2xl md:text-lg">
                <p class="mb-6">Мы обучаем при поддержке AstanaHub и выдаём документы установленного образца.</p>
                <p>
                    После обучения вы можете получить диплом о профессиональной подготовке, свидетельство Blockchain
                    University и сертификат от партнёра курса — AstanaHub.
                </p>
            </div>
            <div class="flex h-7 lg:h-11 gap-5 2xl:h-[72px] 2xl:gap-[60px] relative z-50">
                <IconLogo class="h-full w-[77px] lg:w-32 2xl:w-auto" /> <IconAstanaHub class="h-full w-[105px] lg:w-44  2xl:w-auto" />
            </div>
        </div>
        <div ref="certificateRef"
            class="opacity-0 relative z-10 mx-auto mb-[5%] w-[90%] lg:w-full self-end bg-[url('/certificatesBg.png')] bg-[length:100%_auto] mix-blend-lighten before:block before:pt-[calc(100%/1.267)] 2xl:mx-0 2xl:w-[771px]">
            <div
                class="absolute left-1/2 top-1/2 h-[100%] w-[70%] -translate-x-1/2 -translate-y-1/2 bg-[url('/certificatesIn.png')] bg-contain bg-[50%_63%] bg-no-repeat"></div>
        </div>
    </section>
</template>

<script setup>
import IconLogo from './icons/IconLogo.vue';
import IconAstanaHub from './icons/IconAstanaHub.vue';
import TheStardust from './Stardust/TheStardust.vue';
import { onMounted, ref } from 'vue';
import { animate, inView } from 'motion';

const certificateRef = ref()

onMounted(() => {
    inView(certificateRef.value, ({ target }) => {
        animate(
            target,
            {
                opacity: [0, 1]
            },
            {
                delay: 0.5,
                duration: 1
            }
        );
    }, { margin: "-200px 0px"});
});
</script>

<style lang="scss" scoped></style>
