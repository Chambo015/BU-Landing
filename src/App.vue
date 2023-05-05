<script setup>
import {onMounted, onUnmounted, provide, ref} from 'vue';
import TheCTA from './components/TheCTA.vue';
import TheCases from './components/TheCases.vue';
import TheCertificates from './components/TheCertificates.vue';
import TheChat from './components/TheChat.vue';
import TheEducationLists from './components/TheEducationLists.vue';
import TheFAQ from './components/TheFAQ.vue';
import TheFeedbacks from './components/TheFeedbacks.vue';
import TheFooter from './components/TheFooter.vue';
import TheHero from './components/TheHero.vue';
import TheLead from './components/TheLead.vue';
import TheSkillsDev from './components/TheSkillsDev.vue';
/* import TheStudentList from './components/TheStudentList.vue'; */
import TheTeam from './components/TheTeam.vue';
// import TheWorkShops from './components/TheWorkShops.vue';
import {animate, inView} from 'motion';
import {useMediaQuery} from '@vueuse/core';
import WorkShopAlert from './components/WorkShopAlert.vue';

const isLargerSm = useMediaQuery('(min-width: 640px)');
const launchAnimations = () => {
  inView('h2', ({ target }) => {
        animate(
            target,
            {
                transform: ['translateX(-100px)', 'none'],
                opacity: [0, 1],
            },
            { delay: 0.2, duration: 0.9, easing: [0.17, 0.55, 0.55, 1] }
        );
    }, { margin: "-0px 0px -0px 0px"});
}

onMounted(() => {
  isLargerSm.value && launchAnimations()
  
  setTimeout(() => {
    visibleModalWorkShop.value = true
  }, 3000)

  document.body.addEventListener('keydown', handleEscapeDown)
})

onUnmounted(() => {
  document.body.removeEventListener('keydown', handleEscapeDown)
})

const visibleModalWorkShop = ref(false);
const closeModalWorkshop = () => {
  visibleModalWorkShop.value = false
}

const handleEscapeDown = (e) => {
    if( e.key === 'Escape' && visibleModalWorkShop) {
      closeModalWorkshop()
    } 
}

provide('isLargerSm', isLargerSm)
</script>

<template>
  <main v-cloak >
    <TheHero />
    <TheCases />
    <TheSkillsDev />
    <TheLead />
   <!--  <TheWorkShops /> -->
    <TheEducationLists />
    <TheCertificates />
    <TheTeam />
    <TheFeedbacks />
    <TheCTA />
    <!--     <TheStudentList /> -->
    <TheFAQ />
    <TheFooter />
  </main>
  <TheChat />
  <Transition name="modal"><WorkShopAlert  v-if="visibleModalWorkShop" :close-modal="closeModalWorkshop" /></Transition>
</template>

<style scoped >
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.5s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>
