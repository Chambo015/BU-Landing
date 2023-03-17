<template>
    <footer class="bg-black">
         <div
                class="container 2xl:pt-[60px] pt-4 pb-16 duration-1000 flex justify-between items-center z-10 relative"
                v-motion="{
                    initial: { opacity: 0 },
                    enter: { opacity: 1 },
                }">
                <IconLogo class="2xl:w-[200px] w-20" />
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

<style lang="scss" scoped>

</style>