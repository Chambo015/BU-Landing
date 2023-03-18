<script setup>
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
import TheStudentList from './components/TheStudentList.vue';
import TheTeam from './components/TheTeam.vue';
import TheWorkShops from './components/TheWorkShops.vue';
</script>

<template>
  <main v-cloak>
    <TheHero />
    <TheCases />
    <TheSkillsDev />
    <TheLead />
    <TheWorkShops />
    <TheEducationLists />
    <TheCertificates />
    <TheTeam />
    <TheFeedbacks />
    <TheCTA />
    <TheStudentList />
    <TheFAQ />
    <TheFooter />
  </main>
  <TheChat />
</template>

<style>

</style>
