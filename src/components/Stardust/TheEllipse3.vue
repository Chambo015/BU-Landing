<script setup>
import { animate } from 'motion';
import { onMounted, ref } from 'vue';
const path = ref(null);

const draw = (progress) => ({
      // This property makes the line "draw" in when animated
      strokeDashoffset: 1 - progress,
    
      // Each line will be hidden until it starts drawing
      // to fix a bug in Safari where the line can be
      // partially visible even when progress is at 0
      visibility: "visible",
      opacity: 1
    })

onMounted(() => {
    animate(path.value, draw(1), { duration: 2.6, delay: 0.5 });
});
</script>
<template>
    <svg width="768" height="505" viewBox="0 0 768 505" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            ref="path"
            d="M759.498 137.149C 778.232 198.215 753.533 266.557 697.887 327.776C642.266 388.966 555.907 442.803 451.972 474.689C348.037 506.574 246.344 510.428 165.978 490.957C85.5745 471.477 26.7987 428.743 8.06464 367.678C-10.6694 306.612 14.0301 238.269 69.6763 177.051C125.297 115.861 211.656 62.0237 315.591 30.1381C 419.526 -1.74759 521.219 -5.60182 601.585 13.8696C681.988 33.3499 740.764 76.0833 759.498 137.149Z"
            pathLength="1"
            stroke="white"
            stroke-opacity="0.4"
            stroke-width="3"
            stroke-dashoffset="1" />
    </svg>
</template>

<style scoped>
circle,
  path {
    fill: transparent;
    stroke-width: 3px;
    stroke-dasharray: 1;
    stroke-dashoffset: 1;
    stroke-linecap: round;
    stroke-linejoin: round;
    visibility: hidden;
    opacity: 0
  }
</style>
