<script setup>
import { Motion } from 'motion/vue';
</script>

<template>
    <Motion
        tag="svg"
        width="61"
        height="60"
        viewBox="0 0 61 60"
        fill="none"
        :xmlns="'http://www.w3.org/2000/svg'"
        :inView="{ opacity: [0, 1], scale: [0, 1] }"
        :inViewOptions="{ amount: 0 }"
        :transition="{ delay: 0.2, duration: 0.7, easing: 'ease-in-out' }">
        <path
            d="M30.5 0L32.8344 24.4567L52.0668 8.7868L36.1357 27.7039L61 30L36.1357 32.2961L52.0668 51.2132L32.8344 35.5433L30.5 60L28.1656 35.5433L8.93324 51.2132L24.8643 32.2961L0 30L24.8643 27.7039L8.93324 8.7868L28.1656 24.4567L30.5 0Z"
            fill="white" />
    </Motion>
</template>
