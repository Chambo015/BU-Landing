<template>
    <section class="container pt-[140px] pb-[200px] relative">
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
        <div class="bg-[#DDD6C2] w-[711px] h-[400px] absolute z-10 top-1/2 -translate-y-1/2 right-0 shadow-[13px_-8px_19px_0px_rgba(34,60,80,0.2)]">
        </div>
        <div class="bg-[#F4E4B6] w-[765px] h-[430px] absolute z-20 top-1/2 -translate-x-20 -translate-y-[10%] right-0 shadow-[13px_-8px_19px_0px_rgba(34,60,80,0.2)]">
        </div>
    </section>
</template>

<script>
import IconLogo from './icons/IconLogo.vue';
import IconAstanaHub from './icons/IconAstanaHub.vue';

export default {
    setup() {
        return {};
    },
    components: { IconLogo, IconAstanaHub }
};
</script>

<style lang="scss" scoped></style>
