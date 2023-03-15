<script setup>
    defineProps({
        label: {
            type: String,
            default: 'Submit'
        },
        regular: Boolean
    })
</script>

<template>
    <button :class="[' 2xl:w-72 w-full text-center 2xl:h-[70px] 2xl:text-[28px] h-11 rounded', regular ? 'border-[#D9D9D9] hover:border-[#1495FE] bg-transparent 2xl:border-[3px] border': 'bg-[#1495FE] hover:bg-[#0067C3]']">{{ label }}</button>
</template>



<style lang="scss" scoped>

</style>