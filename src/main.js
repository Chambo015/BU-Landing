import { createApp } from 'vue'
import App from './App.vue'
import { MotionPlugin } from '@vueuse/motion'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";



import './assets/main.css'
import '@/utils/firebase'

gsap.registerPlugin(ScrollTrigger);

const app = createApp(App)
app.use(MotionPlugin)
app.mount('#app')