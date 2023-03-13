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
    <button :class="[' w-72 text-center h-[70px] text-[28px] rounded', regular ? 'border-[#D9D9D9] hover:border-[#1495FE] bg-transparent border-[3px]': 'bg-[#1495FE] hover:bg-[#0067C3]']">{{ label }}</button>
</template>



<style lang="scss" scoped>

</style>