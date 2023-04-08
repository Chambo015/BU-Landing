<script setup>
import { animate } from 'motion';
import { onMounted, ref } from 'vue';
import { useMediaQuery } from '@vueuse/core'

const isLargeScreen = useMediaQuery('(min-width: 768px)')
const path = ref(null);

const draw = () => ({
    /*   strokeDashoffset: 0, */
    visibility: 'visible',
    opacity: 1,
    strokeDasharray: '2311, 0',
});

onMounted(() => {
    if(isLargeScreen.value) {
        animate(path.value, draw(), { duration: 2.6, delay: 1 })
    }
});
</script>

<template>
    <svg width="888" height="583" viewBox="0 0 888 583" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            ref="path"
            d="M878.67 158.013C900.367 228.735 871.751 307.843 807.378 378.661C743.031 449.452 643.135 511.724 522.922 548.604C402.708 585.483 285.078 589.945 192.102 567.419C99.0897 544.883 31.0339 495.433 9.33765 424.711C-12.3586 353.99 16.2573 274.882 80.6301 204.063C144.977 133.272 244.873 71.0003 365.086 34.1207C485.3 -2.75899 602.93 -7.2207 695.906 15.3057C788.918 37.841 856.974 87.2916 878.67 158.013Z"
            stroke="#1495FE"
            stroke-opacity="0.6"
            stroke-width="3"
            class="md:[stroke-dasharray:0,2311] md:opacity-0 opacity-100 visible md:invisible  [strokeDasharray:2311,0]" />
    </svg>
</template>

<style scoped>
circle,
path {
    fill: transparent;
    stroke-width: 3px;
    stroke-dashoffset: 500;
    stroke-linecap: round;
    stroke-linejoin: round;
}
</style>
