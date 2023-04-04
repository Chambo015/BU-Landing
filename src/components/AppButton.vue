<script setup>
defineProps({
    label: {
        type: String,
        default: 'Submit',
    },
    regular: Boolean,
});
</script>

<template>
    <button
        :class="[
            ' h-[47px] w-[195px] text-lg rounded text-center duration-200 2xl:h-[70px] 2xl:w-[290px] 2xl:text-[28px]',
            regular
                ? 'border border-[#D9D9D9] bg-transparent hover:border-[#1495FE] hover:text-[#1495FE] 2xl:border-[3px]'
                : 'bg-[#1495FE] hover:bg-[#0067C3]',
        ]">
        {{ label }}
    </button>
</template>

<style lang="scss" scoped></style>
