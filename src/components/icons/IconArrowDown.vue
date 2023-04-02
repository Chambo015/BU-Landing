<template>
    <svg width="30" height="28" viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path id="arrow" style="transition: all 0.3s" :d="active ? 'M1 14L14 14L29 14' : 'M1 7.30469L15 20.696L29 7.30469'" stroke="white" stroke-width="2"/>
<path style="visibility: hidden"  ref="line" d="M0 1H14H28" stroke="white" stroke-width="2"/>
</svg>
</template>

<script setup>
defineProps({
    active: Boolean
})
</script>

<style  scoped>
</style>