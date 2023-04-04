<template>
    <section class="bg-[#F4E4B6] text-black text-lg 2xl:text-4xl flex w-screen overflow-hidden">
        <div class="whitespace-nowrap inner-line bg-[#F4E4B6] relative py-1">
            {{ text }}<span class="ml-12 mr-9">{{ text }}</span>
            {{ text }}<span class="ml-12 mr-9">{{ text }}</span>
            {{ text }}<span class="ml-12 mr-9">{{ text }}</span>
            {{ text }}<span class="ml-12 mr-9">{{ text }}</span>
            {{ text }}<span class="ml-12 mr-9">{{ text }}</span>
            {{ text }}<span class="ml-12 mr-9">{{ text }}</span>
        </div>
        <div  class="whitespace-nowrap inner-line bg-[#F4E4B6] relative py-1">
            {{ text }}<span class="ml-12 mr-9">{{ text }}</span>
            {{ text }}<span class="ml-12 mr-9">{{ text }}</span>
            {{ text }}<span class="ml-12 mr-9">{{ text }}</span>
            {{ text }}<span class="ml-12 mr-9">{{ text }}</span>
            {{ text }}<span class="ml-12 mr-9">{{ text }}</span>
            {{ text }}<span class="ml-12 mr-9">{{ text }}</span>
        </div>
    </section>
</template>

<script setup>
defineProps({
    text: {
        type: String,
        default: 'Spring Sale'
    }
})
</script>

<style scoped>
span {
    -webkit-text-stroke: 1px;
    -webkit-text-fill-color: transparent;
}

div.inner-line {
    transform: translateX(100%);
    animation: animate 40s -40s linear infinite;
    will-change: transform;
}

div.inner-line:nth-child(2) {
      animation: animate2 40s -20s linear infinite;
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