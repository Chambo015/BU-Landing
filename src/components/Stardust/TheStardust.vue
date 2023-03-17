<template>
    <div class="aspect-[1/1.14] absolute isolate">
        <div class="noise-wrap">
            <div class="noise"></div>
   <!--          <div class="overlay-noise"></div> -->
        </div>
        <div class="w-full  aspect-square rounded-full relative blur-[89px]" :style="{background: backgroundEclipse}">
            <div class="h-[70%] absolute top-1/2 aspect-[1/1.42] left-1/2 -translate-x-1/2" :style="{background: backgroundRectangle}">

            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    backgroundEclipse: {
        type: String,
        default: 'linear-gradient(180deg, #173B80 0%, #11573E 100%)'
    },
    backgroundRectangle: {
        type: String,
        default: 'linear-gradient(180deg, rgba(24, 255, 158, 0) 0%, #17FFE3 100%)'
    }
})
</script>

<style  scoped>

.noise-wrap {
    position: absolute;
    inset: -22%;
    z-index: 1;
}
.noise {
  background-image: url("/noise.png");
  opacity: 0.3;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  mix-blend-mode: overlay;
  z-index: 1;
  border-radius: 999999px;
}
.overlay-noise {
    inset: 100px;
    position: absolute;
    z-index: 1;
    filter: blur(100px);
    background: rgba(24, 75, 255, 0.11);
}
</style>