<template>
    <section class="bg-[#F4E4B6] font-['TT_Octosquares'] text-black text-lg 2xl:text-3xl flex w-screen overflow-hidden">
        <div class="whitespace-nowrap inner-line bg-[#F4E4B6] relative py-1 xl:py-2">
            {{ text }}{{ text }}{{ text }}{{ text }}{{ text }}
        </div>
        <div  class="whitespace-nowrap inner-line bg-[#F4E4B6] relative py-1 xl:py-2">
            {{ text }}{{ text }}{{ text }}{{ text }}{{ text }}
        </div>
    </section>
</template>

<script setup>
import {computed} from 'vue';

const props = defineProps({
    text: {
        type: String,
        default: 'Spring Sale'
    }
})

const speed = computed(() =>  props.text.length * 4 )
</script>

<style scoped>

div.inner-line {
    transform: translateX(100%);
    animation: animate linear infinite;
    animation-duration: v-bind(speed + 's');
    animation-delay: v-bind(speed * -1 + 's');
    will-change: transform;
    vertical-align: middle;
}

div.inner-line:nth-child(2) {
      animation: animate2 linear infinite;
      animation-duration: v-bind(speed + 's');
    animation-delay: v-bind(speed / 2 * -1 + 's');
    }

@keyframes animate {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}

@keyframes animate2 {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-200%);
  }
}
</style>