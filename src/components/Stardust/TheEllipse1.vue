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
<svg width="338" height="281" viewBox="0 0 338 281" fill="none" xmlns="http://www.w3.org/2000/svg">
<path ref="path" d="M328.906 201.117C302.84 269.741 210.304 298.872 121.719 265.224C33.1337 231.576 -16.7279 148.357 9.33821 79.7332C35.4043 11.1091 127.94 -18.0211 216.525 15.627C305.11 49.2751 354.972 132.493 328.906 201.117Z" stroke="white" stroke-opacity="0.4" stroke-width="3" pathLength="1"/>
</svg>
</template>

<style scoped>
  path {
    fill: transparent;
    stroke-width: 3px;
    stroke-dasharray: 1;
    stroke-dashoffset: 1;
    stroke-linecap: round;
    stroke-linejoin: round;
    visibility: hidden;
    opacity: 0;
    transform-origin: center;
    transform: rotate(180deg);
  }
</style>